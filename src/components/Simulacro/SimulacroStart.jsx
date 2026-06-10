// src/components/Simulacro/SimulacroStart.jsx
import React from 'react';

const SimulacroStart = ({ config, questionCount, bloqueBreakdown, onStart }) => {
  const displayCount = Math.min(questionCount, 60);
  const isFull = questionCount >= 60;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>{config.icon}</span>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: config.accent, marginBottom: '0.5rem' }}>
        {config.label}
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>
        Simulacro MEP
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>
          📋 {isFull ? '60 preguntas' : `${displayCount} preguntas disponibles`}
        </span>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>⏱ 120 minutos</span>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>✅ Selección única A/B/C/D</span>
      </div>

      {bloqueBreakdown.length > 0 && (
        <div style={{
          background: '#F8FAFC', border: '2px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left'
        }}>
          <p style={{ fontWeight: 800, color: 'var(--bg-dark)', marginBottom: '0.75rem' }}>
            Distribución por bloque:
          </p>
          {bloqueBreakdown.map(b => (
            <div key={b.id} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '0.4rem 0', borderBottom: '1px solid var(--border)',
              color: 'var(--text-muted)', fontWeight: 600
            }}>
              <span>{b.label}</span>
              <span style={{ fontWeight: 800, color: 'var(--bg-dark)' }}>{b.count} preguntas</span>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onStart}
        disabled={displayCount === 0}
        style={{
          background: displayCount === 0 ? '#CBD5E1' : 'var(--primary)',
          color: 'white', border: '3px solid var(--bg-dark)',
          borderRadius: 'var(--radius-full)', padding: '0.875rem 2.5rem',
          fontSize: '1.1rem', fontWeight: 800,
          cursor: displayCount === 0 ? 'not-allowed' : 'pointer',
          boxShadow: displayCount === 0 ? 'none' : '4px 4px 0 var(--bg-dark)'
        }}
      >
        {displayCount === 0 ? 'Sin preguntas disponibles' : '▶ Comenzar Simulacro'}
      </button>
    </div>
  );
};

export default SimulacroStart;
