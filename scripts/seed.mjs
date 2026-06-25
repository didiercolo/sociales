/**
 * Supabase seed script. Run locally with the service-role key (never shipped to the client):
 *
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed.mjs
 *
 * Seeds: nicknames, the current week's weekly_challenge, and today's daily_questions row.
 *
 * ponytail: the daily question is picked from the same small hardcoded bank as the weekly
 * challenge. Porting the full lesson-data extraction (old functions/seedDailyQuestions.js) is a
 * follow-up — swap QUESTIONS / the daily pick for that pipeline when content scales.
 */
import { createClient } from '@supabase/supabase-js';
import { NICKNAMES_SEED } from '../src/scripts/seedNicknames.js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars.');
  process.exit(1);
}
const supabase = createClient(url, key);

// ISO week id, e.g. "2026-W24" (matches iso_week_id() in the migration and the frontend).
function getISOWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

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

const QUESTIONS = [
  { question: '¿Cuál es la capital de Costa Rica?', options: ['San José', 'Cartago', 'Heredia', 'Alajuela'], correctAnswer: 'San José', explanation: 'San José es la capital y ciudad más poblada de Costa Rica.', subject: 'Estudios Sociales' },
  { question: '¿Cuál es el proceso por el cual las plantas producen su alimento usando la luz solar?', options: ['Respiración', 'Fotosíntesis', 'Digestión', 'Fermentación'], correctAnswer: 'Fotosíntesis', explanation: 'La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar, el agua y el CO₂ en glucosa y oxígeno.', subject: 'Ciencias' },
  { question: '¿En qué año se abolió el ejército en Costa Rica?', options: ['1948', '1821', '1869', '1900'], correctAnswer: '1948', explanation: 'El presidente José Figueres Ferrer abolió el ejército el 1 de diciembre de 1948.', subject: 'Estudios Sociales' },
  { question: '¿Cuál de las siguientes palabras es un sustantivo?', options: ['Correr', 'Rápido', 'Mesa', 'Felizmente'], correctAnswer: 'Mesa', explanation: "Un sustantivo es una palabra que nombra personas, animales, lugares o cosas. 'Mesa' es un sustantivo concreto.", subject: 'Español' },
  { question: '¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?', options: ['106', '206', '306', '406'], correctAnswer: '206', explanation: 'El cuerpo humano adulto tiene aproximadamente 206 huesos.', subject: 'Ciencias' },
];

async function main() {
  // Nicknames — upsert by name (idempotent re-runs)
  const { error: nickErr } = await supabase
    .from('nicknames')
    .upsert(NICKNAMES_SEED.map(({ name, emoji }) => ({ name, emoji, used: false })), { onConflict: 'name', ignoreDuplicates: true });
  if (nickErr) throw nickErr;
  console.log(`✅ Seeded ${NICKNAMES_SEED.length} nicknames.`);

  // Weekly challenge — current week
  const now = new Date();
  const weekId = getISOWeekId(now);
  const { startDate, endDate } = getWeekBoundaries(now);
  const { error: weekErr } = await supabase
    .from('weekly_challenge')
    .upsert({ week_id: weekId, start_date: startDate, end_date: endDate, questions: QUESTIONS });
  if (weekErr) throw weekErr;
  console.log(`✅ Seeded weekly_challenge/${weekId}.`);

  // Daily question — today, rotating through the bank by day-of-year
  const todayStr = now.toISOString().split('T')[0];
  const dayOfYear = Math.floor((now - new Date(Date.UTC(now.getUTCFullYear(), 0, 0))) / 86400000);
  const q = QUESTIONS[dayOfYear % QUESTIONS.length];
  const { error: dailyErr } = await supabase
    .from('daily_questions')
    .upsert({ date: todayStr, subject: q.subject, question: q.question, options: q.options, correct_answer: q.correctAnswer, explanation: q.explanation });
  if (dailyErr) throw dailyErr;
  console.log(`✅ Seeded daily_questions/${todayStr}.`);
}

main().then(() => process.exit(0)).catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
