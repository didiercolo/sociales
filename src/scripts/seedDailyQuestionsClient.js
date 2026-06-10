import { collection, writeBatch, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Import local lesson data
import { grade6Lessons } from '../data/lessons/grade6';
import { espanolGrade6Lessons as espanol6Lessons } from '../data/lessons/espanolGrade6';
import { cienciasGrade6Lessons as ciencias6Lessons } from '../data/lessons/cienciasGrade6';

export async function seedDailyQuestionsClient() {
  try {
    console.log("Loading lesson data on client...");
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

    extractQuestions(grade6Lessons, "Estudios Sociales");
    extractQuestions(espanol6Lessons, "Español");
    extractQuestions(ciencias6Lessons, "Ciencias");

    if (allQuestions.length === 0) {
      console.log("No questions found to seed.");
      return;
    }

    const today = new Date();
    const countToSeed = Math.min(30, allQuestions.length);
    console.log(`Seeding ${countToSeed} daily questions to Firestore...`);

    const usedIndices = new Set();
    const batchList = [];

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

      const dailyQData = {
        question: selectedQ.question,
        options: selectedQ.options || [],
        correctAnswer: selectedQ.options ? selectedQ.options[selectedQ.correct] : selectedQ.correctAnswer,
        explanation: selectedQ.explanation || null,
        subject: selectedQ.subject,
        dateString, 
      };

      batchList.push({ id: dateString, data: dailyQData });
    }

    // Write to Firestore in batches
    let currentBatch = writeBatch(db);
    let batchCount = 0;
    const dailyQuestionsRef = collection(db, 'dailyQuestions');

    for (let i = 0; i < batchList.length; i++) {
      const docRef = doc(dailyQuestionsRef, batchList[i].id);
      currentBatch.set(docRef, batchList[i].data);
      batchCount++;

      if (batchCount === 490) { // Limit for Firestore batch
        await currentBatch.commit();
        currentBatch = writeBatch(db);
        batchCount = 0;
      }
    }

    if (batchCount > 0) {
      await currentBatch.commit();
    }

    console.log("✅ Successfully seeded the dailyQuestions collection from the client!");
    alert("✅ Daily Questions Seeded!");
  } catch (error) {
    console.error("Error seeding daily questions:", error);
    alert("Error seeding questions: " + error.message);
  }
}
