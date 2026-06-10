const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

// Initialize Firebase Admin (assuming default credentials or emulator for local)
// You may need to provide service account credentials if running against// IMPORTANT: Initialize admin only once
if (!admin.apps.length) {
  admin.initializeApp({
      projectId: 'eduportalcrapp'
  });
}const db = getFirestore();

// A simple helper to get a random item from an array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function runSeed() {
  try {
    console.log("Loading lesson data...");
    
    // Dynamically import the ES modules
    const grade6 = await import("../src/data/lessons/grade6.js");
    const espanol6 = await import("../src/data/lessons/espanolGrade6.js");
    const ciencias6 = await import("../src/data/lessons/cienciasGrade6.js");
    
    // Gather all available questions
    let allQuestions = [];
    
    const extractQuestions = (lessonsArray, subject) => {
      if (!lessonsArray) return;
      lessonsArray.forEach((lesson) => {
        if (lesson.quiz && Array.isArray(lesson.quiz)) {
          lesson.quiz.forEach((q) => {
            allQuestions.push({
              ...q,
              subject,
              originalLesson: lesson.title,
            });
          });
        }
      });
    };

    extractQuestions(grade6.grade6Lessons, "Estudios Sociales");
    extractQuestions(espanol6.espanol6Lessons, "Español");
    extractQuestions(ciencias6.ciencias6Lessons, "Ciencias");

    console.log(`Found ${allQuestions.length} total questions.`);
    if (allQuestions.length === 0) {
      console.log("No questions found to seed.");
      return;
    }

    // Generate daily questions for the next 30 days
    const today = new Date();
    const batchList = [];

    // Take random 30 questions
    // Make sure we have 30
    const countToSeed = Math.min(30, allQuestions.length);
    console.log(`Seeding ${countToSeed} daily questions...`);

    const usedIndices = new Set();

    for (let i = 0; i < countToSeed; i++) {
      let rIdx = -1;
      while (rIdx === -1 || usedIndices.has(rIdx)) {
        rIdx = Math.floor(Math.random() * allQuestions.length);
      }
      usedIndices.add(rIdx);
      
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + i);
      const dateString = targetDate.toISOString().split("T")[0]; // YYYY-MM-DD

      const selectedQ = allQuestions[rIdx];

      // Format correctly for our DailyQuestion structure
      const dailyQData = {
        question: selectedQ.question,
        options: selectedQ.options || [],
        correctAnswer: selectedQ.options ? selectedQ.options[selectedQ.correct] : selectedQ.correctAnswer,
        explanation: selectedQ.explanation || null,
        subject: selectedQ.subject,
        dateString, // We store the date constraint explicitly along with ID doc
      };

      batchList.push({ id: dateString, data: dailyQData });
    }

    // Write to Firestore in batches
    let currentBatch = db.batch();
    let batchCount = 0;

    for (let i = 0; i < batchList.length; i++) {
      const docRef = db.collection("dailyQuestions").doc(batchList[i].id);
      currentBatch.set(docRef, batchList[i].data);
      batchCount++;

      // Firestore limits to 500 writes per batch
      if (batchCount === 490) {
        await currentBatch.commit();
        currentBatch = db.batch();
        batchCount = 0;
      }
    }

    if (batchCount > 0) {
      await currentBatch.commit();
    }

    console.log("✅ Successfully seeded the dailyQuestions collection!");
  } catch (error) {
    console.error("Error seeding daily questions:", error);
  }
}

runSeed();
