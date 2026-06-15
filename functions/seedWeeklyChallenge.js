'use strict';

/**
 * Standalone seeding script — NOT a Cloud Function.
 * Run with:
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json node functions/seedWeeklyChallenge.js
 */

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: 'eduportalcrapp',
});

const db = admin.firestore();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the ISO week ID string (e.g. "2026-W24") for a given date.
 * Matches the algorithm in functions/index.js.
 */
function getISOWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

/**
 * Returns the ISO Monday (startDate) and Sunday (endDate) of the week that
 * contains `date`, formatted as "YYYY-MM-DD".
 */
function getWeekBoundaries(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  const monday = new Date(d);
  monday.setUTCDate(d.getUTCDate() - (day - 1));
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  const fmt = (dt) => dt.toISOString().split('T')[0];
  return { startDate: fmt(monday), endDate: fmt(sunday) };
}

// ---------------------------------------------------------------------------
// Hard-coded questions (Costa Rica primary school subjects)
// ---------------------------------------------------------------------------

const QUESTIONS = [
  {
    question: '¿Cuál es la capital de Costa Rica?',
    options: ['San José', 'Cartago', 'Heredia', 'Alajuela'],
    correctAnswer: 'San José',
    explanation: 'San José es la capital y ciudad más poblada de Costa Rica.',
    subject: 'Estudios Sociales',
  },
  {
    question: '¿Cuál es el proceso por el cual las plantas producen su alimento usando la luz solar?',
    options: ['Respiración', 'Fotosíntesis', 'Digestión', 'Fermentación'],
    correctAnswer: 'Fotosíntesis',
    explanation:
      'La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar, el agua y el CO₂ en glucosa y oxígeno.',
    subject: 'Ciencias',
  },
  {
    question: '¿En qué año se abolió el ejército en Costa Rica?',
    options: ['1948', '1821', '1869', '1900'],
    correctAnswer: '1948',
    explanation:
      'El presidente José Figueres Ferrer abolió el ejército el 1 de diciembre de 1948.',
    subject: 'Estudios Sociales',
  },
  {
    question: '¿Cuál de las siguientes palabras es un sustantivo?',
    options: ['Correr', 'Rápido', 'Mesa', 'Felizmente'],
    correctAnswer: 'Mesa',
    explanation:
      "Un sustantivo es una palabra que nombra personas, animales, lugares o cosas. 'Mesa' es un sustantivo concreto.",
    subject: 'Español',
  },
  {
    question: '¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?',
    options: ['106', '206', '306', '406'],
    correctAnswer: '206',
    explanation: 'El cuerpo humano adulto tiene aproximadamente 206 huesos.',
    subject: 'Ciencias',
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const now = new Date();
  const weekId = getISOWeekId(now);
  const { startDate, endDate } = getWeekBoundaries(now);

  const doc = {
    weekId,
    startDate,
    endDate,
    questions: QUESTIONS,
  };

  await db.collection('weeklyChallenge').doc(weekId).set(doc);
  console.log(`✅ Seeded weeklyChallenge/${weekId}`);
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
