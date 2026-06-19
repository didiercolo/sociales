// src/pages/SimulacroExtra.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { socialesExtraExams } from '../data/socialesExtraExams';
import { cienciasExtraExams } from '../data/cienciasExtraExams';
import { espanolExtraExams } from '../data/espanolExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const extraExamsBySubject = {
  sociales: socialesExtraExams,
  ciencias: cienciasExtraExams,
  espanol: espanolExtraExams,
};
const VALID_SUBJECTS = Object.keys(extraExamsBySubject);

const getBloqueBreakdown = (questions, config) =>
  config.bloques
    .map(b => ({ id: b.id, label: b.label, count: questions.filter(q => q.mepBloque === b.id).length }))
    .filter(b => b.count > 0);

const SimulacroExtra = () => {
  const { subject, examIndex } = useParams();
  const config = subjectConfig[subject];
  const index = parseInt(examIndex, 10) - 1;

  const [phase, setPhase] = useState('start');
  const [answers, setAnswers] = useState({});
  const [timeUsed, setTimeUsed] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    setPhase('start');
    setAnswers({});
    setTimeUsed(0);
    startTimeRef.current = null;
  }, [examIndex]);

  if (!VALID_SUBJECTS.includes(subject) || !config) return <Navigate to="/" replace />;
  if (isNaN(index) || index < 0 || index >= extraExamsBySubject[subject].length) return <Navigate to="/" replace />;

  const questions = extraExamsBySubject[subject][index];
  const subtitle = `Examen Extra ${examIndex}`;

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
    startTimeRef.current = null;
    setAnswers({});
    setPhase('start');
  };

  if (phase === 'start') {
    return (
      <SimulacroStart
        config={config}
        subtitle={subtitle}
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

export default SimulacroExtra;
