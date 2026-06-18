// src/components/Simulacro/SimulacroResults.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { subjectConfig } from '../../data/subjectConfig';
import { formatTime } from '../../utils';

const SimulacroResults = ({ questions, answers, timeUsed, subject, onRestart }) => {
  const config = subjectConfig[subject];
  const total = questions.length;
  const correct = questions.filter((q, i) => answers[i] === q.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const bloqueStats = config.bloques.map(bloque => {
    const bItems = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.mepBloque === bloque.id);
    const bCorrect = bItems.filter(({ q, i }) => answers[i] === q.correct).length;
    return { ...bloque, total: bItems.length, correct: bCorrect };
  }).filter(b => b.total > 0);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>
        Resultados
      </h1>

      <div style={{
        background: 'white', border: 'none',
        borderRadius: 'var(--radius-md)', boxShadow: '0 4px 20px rgba(99,102,241,0.10)',
        padding: '2rem', margin: '1.5rem 0'
      }}>
        <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', margin: '0 0 0.25rem' }}>
          {correct} / {total}
        </p>
        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--bg-dark)', margin: '0 0 0.5rem' }}>
          {pct}%
        </p>
        <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>⏱ Tiempo: {formatTime(timeUsed)}</p>
      </div>

      {bloqueStats.length > 0 && (
        <div style={{
          background: '#F8FAFC', border: '2px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left'
        }}>
          <p style={{ fontWeight: 800, marginBottom: '0.75rem', color: 'var(--bg-dark)' }}>
            Resultados por bloque:
          </p>
          {bloqueStats.map(b => (
            <div key={b.id} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '0.5rem 0', borderBottom: '1px solid var(--border)',
              color: 'var(--text-muted)', fontWeight: 600
            }}>
              <span>{b.label}</span>
              <span style={{ fontWeight: 800, color: b.correct === b.total ? '#16a34a' : 'var(--bg-dark)' }}>
                {b.correct} / {b.total} {b.correct === b.total ? '✅' : ''}
              </span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onRestart}
          style={{
            background: 'var(--primary)', color: 'white',
            border: 'none', borderRadius: 'var(--radius-full)',
            padding: '0.75rem 1.75rem', fontSize: '1rem', fontWeight: 800,
            cursor: 'pointer', boxShadow: '0 2px 8px rgba(99,102,241,0.25)'
          }}
        >
          🔄 Intentar de nuevo
        </button>
        <Link
          to={`/${subject}`}
          style={{
            background: 'white', color: 'var(--bg-dark)',
            border: '1px solid var(--border)', borderRadius: 'var(--radius-full)',
            padding: '0.75rem 1.75rem', fontSize: '1rem', fontWeight: 800,
            textDecoration: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
          }}
        >
          📚 Volver a {config.label}
        </Link>
      </div>
    </div>
  );
};

export default SimulacroResults;
