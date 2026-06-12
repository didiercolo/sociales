// src/components/Simulacro/SimulacroActive.jsx
import React, { useState, useEffect, useRef } from 'react';

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const SimulacroActive = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [displayTime, setDisplayTime] = useState(120 * 60);
  const timerRef = useRef(120 * 60);
  const answersRef = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current -= 1;
      setDisplayTime(timerRef.current);
      if (timerRef.current <= 0) {
        clearInterval(interval);
        onFinish(answersRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const selectOption = (optionIndex) => {
    const updated = { ...answers, [currentIndex]: optionIndex };
    setAnswers(updated);
    answersRef.current = updated;
  };

  const advance = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      onFinish(answersRef.current);
    }
  };

  const question = questions[currentIndex];
  const selected = answers[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = (currentIndex / questions.length) * 100;
  const timerRed = displayTime < 60;

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          Pregunta {currentIndex + 1} / {questions.length}
        </span>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: timerRed ? '#dc2626' : 'var(--bg-dark)' }}>
          ⏱ {formatTime(displayTime)}
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: 8, background: '#E2E8F0', borderRadius: 4, marginBottom: '2rem', overflow: 'hidden' }}
      >
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', transition: 'width 0.3s' }} />
      </div>

      <div style={{
        background: 'white', border: 'none',
        borderRadius: 'var(--radius-md)', padding: '1.5rem',
        boxShadow: '0 4px 16px rgba(99,102,241,0.10)', marginBottom: '1.5rem'
      }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg-dark)', margin: 0 }}>
          {question.question}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => selectOption(i)}
            style={{
              padding: '0.875rem 1.25rem', textAlign: 'left',
              background: selected === i ? 'var(--primary)' : 'white',
              color: selected === i ? 'white' : 'var(--bg-dark)',
              border: `1px solid ${selected === i ? 'var(--primary)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '1rem',
              cursor: 'pointer', boxShadow: selected === i ? '0 2px 8px rgba(79,70,229,0.20)' : '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <span style={{ marginRight: '0.75rem', fontWeight: 800 }}>{String.fromCharCode(65 + i)}.</span>
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={advance}
        disabled={selected === undefined}
        style={{
          width: '100%', padding: '0.875rem',
          background: selected === undefined ? '#CBD5E1' : 'var(--cta)',
          color: 'white', border: 'none',
          borderRadius: 'var(--radius-full)', fontSize: '1.1rem', fontWeight: 800,
          cursor: selected === undefined ? 'not-allowed' : 'pointer',
          boxShadow: selected === undefined ? 'none' : '0 2px 8px rgba(99,102,241,0.25)'
        }}
      >
        {isLast ? 'Finalizar' : 'Siguiente →'}
      </button>
    </div>
  );
};

export default SimulacroActive;
