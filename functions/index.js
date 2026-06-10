const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentWritten } = require("firebase-functions/v2/firestore");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const admin = require("firebase-admin");

admin.initializeApp();
const db = getFirestore();

/**
 * Callable function to securely submit an answer.
 * Enforces tier limits, calculates points (effort + correctness bonus),
 * and updates the user's document.
 */
exports.submitAnswer = onCall(async (request) => {
  const { auth, data } = request;

  // 1. Verify User is Authenticated
  if (!auth) {
    throw new HttpsError(
      "unauthenticated",
      "User must be logged in to submit answers."
    );
  }

  const { questionId, answer } = data;
  if (!questionId || typeof answer !== "string") {
    throw new HttpsError(
      "invalid-argument",
      "Missing questionId or answer."
    );
  }

  const uid = auth.uid;
  const userRef = db.collection("users").doc(uid);
  const questionRef = db.collection("dailyQuestions").doc(questionId);

  try {
    // Run in a transaction to safely read limits and increment score
    return await db.runTransaction(async (transaction) => {
      const userDoc = await transaction.get(userRef);
      const questionDoc = await transaction.get(questionRef);

      if (!userDoc.exists) {
        throw new HttpsError("not-found", "User document not found.");
      }
      if (!questionDoc.exists) {
        throw new HttpsError("not-found", "Question not found.");
      }

      const userData = userDoc.data();
      const questionData = questionDoc.data();

      // Ensure user hasn't already answered this specific question to farm points
      // (For simplicity, we track by daily limit, but we could track a subcollection of completedQs)
      const userTier = userData.tier || 1;
      
      // Determine if it's a new day
      const now = new Date();
      // Use Costa Rica timezone for boundaries, but simple Date object suffices for basic daily resets if we assume UTC or local.
      // We'll use naive local matching for now:
      const todayString = now.toISOString().split("T")[0];
      const lastQDateString = userData.lastQuestionDate
        ? userData.lastQuestionDate.toDate().toISOString().split("T")[0]
        : null;

      let questionsToday = userData.questionsToday || 0;
      if (todayString !== lastQDateString) {
        questionsToday = 0; // Reset for a new day
      }

      // Check tier limits
      if (userTier === 1 && questionsToday >= 1) {
        throw new HttpsError(
          "resource-exhausted",
          "Tier 1 limit reached (1 question per day)."
        );
      }
      // Assuming Tier 2-4 get max 10/day for daily sessions
      if (userTier > 1 && questionsToday >= 10) {
        throw new HttpsError(
          "resource-exhausted",
          "Daily limit reached for your tier (10 questions)."
        );
      }

      // 2. Validate answer correctness
      // Accept variations (e.g., lowercase, trimmed)
      const isCorrect = answer.trim().toLowerCase() === String(questionData.correctAnswer || "").trim().toLowerCase();

      // 3. Calculate Points
      let pointsEarned = 0;
      // Attempt points
      if (userTier === 1) {
        pointsEarned += 1;
      } else {
        pointsEarned += 2;
      }
      // Correctness bonus
      if (isCorrect) {
        pointsEarned += 1;
      }

      // Tier 2-4 session completion bonus (if they just hit their 10th question)
      let bonusAwarded = false;
      if (userTier > 1 && questionsToday + 1 === 10) {
        pointsEarned += 2;
        bonusAwarded = true;
      }

      // 4. Write updates
      const updateData = {
        score: FieldValue.increment(pointsEarned),
        questionsToday: FieldValue.increment(1),
        lastQuestionDate: FieldValue.serverTimestamp(),
      };

      transaction.update(userRef, updateData);

      return {
        success: true,
        pointsEarned,
        isCorrect,
        correctAnswerMessage: isCorrect ? null : questionData.explanation || `The correct answer was: ${questionData.correctAnswer}`,
        bonusAwarded
      };
    });
  } catch (error) {
    if (error instanceof HttpsError) {
      throw error;
    }
    console.error("Error in submitAnswer:", error);
    throw new HttpsError("internal", "An error occurred while submitting.");
  }
});


/**
 * Firestore trigger on user write to update the denormalized scoreboard.
 * Reads the top 50 users globally and writes them to a single 'system/scoreboard' document
 * to allow cheap O(1) reads for all clients visiting the homepage.
 */
exports.updateScoreboard = onDocumentWritten("users/{uid}", async (event) => {
  const change = event.data;

  // If document was deleted or score didn't change, we might still want to update if they were in the top 50,
  // but to optimize, we can just run the rebuild whenever a user's score changes.
  const beforeData = change.before.data();
  const afterData = change.after.data();

  // Optimization: Only rebuild if score changed or nickname changed or tier changed
  if (
    beforeData && 
    afterData &&
    beforeData.score === afterData.score &&
    beforeData.nickname === afterData.nickname &&
    beforeData.tier === afterData.tier
  ) {
    return null;
  }

  // Fetch top 50 users based on highest score
  const topUsersSnap = await db
    .collection("users")
    .orderBy("score", "desc")
    .limit(50)
    .get();

  const topUsers = [];
  topUsersSnap.forEach((doc) => {
    const data = doc.data();
    if (data.nickname && data.score !== undefined) {
      topUsers.push({
        uid: doc.id,
        nickname: data.nickname,
        score: data.score,
        tier: data.tier || 1,
      });
    }
  });

  // Write to a centralized scoreboard document
  // Using 'system/scoreboard' allows clients to read one single document
  // avoiding 50 document reads per client.
  const scoreboardRef = db.collection("system").doc("scoreboard");
  await scoreboardRef.set({
    topUsers,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log(`Scoreboard updated with ${topUsers.length} users.`);
  return null;
});
