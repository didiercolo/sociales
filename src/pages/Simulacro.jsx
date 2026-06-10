// src/pages/Simulacro.jsx
import React, { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { lessonsData } from '../data/lessonsData';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const MAX_QUESTIONS = 35;

const sampleQuestions = (subject) => {
  const { lessons } = lessonsData[subject];
  const all = lessons.flatMap(lesson =>
    (lesson.quiz || []).map(q => ({ ...q, mepBloque: lesson.mepBloque }))
  );
  return [...all].sort(() => Math.random() - 0.5).slice(0, MAX_QUESTIONS);
};

const getBloqueBreakdown = (questions, config) =>
  config.bloques
    .map(b => ({ id: b.id, label: b.label, count: questions.filter(q => q.mepBloque === b.id).length }))
    .filter(b => b.count > 0);

const Simulacro = () => {
  const { subject } = useParams();
  const config = subjectConfig[subject];

  if (!config) return <Navigate to="/" replace />;

  const [phase, setPhase] = useState('start');
  const [answers, setAnswers] = useState({});
  const [timeUsed, setTimeUsed] = useState(0);
  const questionsRef = useRef(sampleQuestions(subject));
  const startTimeRef = useRef(null);

  const handleStart = () => {
    startTimeRef.current = Date.now();
    setPhase('active');
  };

  const handleFinish = (finalAnswers) => {
    const elapsed = startTimeRef.current
      ? Math.floor((Date.now() - startTimeRef.current) / 1000)
      : 0;
    setAnswers(finalAnswers);
    setTimeUsed(elapsed);
    setPhase('results');
  };

  const handleRestart = () => {
    questionsRef.current = sampleQuestions(subject);
    startTimeRef.current = null;
    setAnswers({});
    setPhase('start');
  };

  const questions = questionsRef.current;

  if (phase === 'start') {
    return (
      <SimulacroStart
        subject={subject}
        config={config}
        questionCount={questions.length}
        bloqueBreakdown={getBloqueBreakdown(questions, config)}
        onStart={handleStart}
      />
    );
  }

  if (phase === 'active') {
    return <SimulacroActive questions={questions} onFinish={handleFinish} />;
  }

  return (
    <SimulacroResults
      questions={questions}
      answers={answers}
      timeUsed={timeUsed}
      subject={subject}
      onRestart={handleRestart}
    />
  );
};

export default Simulacro;
