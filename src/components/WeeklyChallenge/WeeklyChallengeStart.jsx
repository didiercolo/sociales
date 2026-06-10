import React from 'react';

const WeeklyChallengeStart = ({ weekDoc, onStart }) => {
  const { weekId, startDate, endDate, questions = [] } = weekDoc || {};

  // Format weekId like "2024-W24" → "Semana W24"
  const weekLabel = weekId ? `Semana ${weekId.split('-')[1]}` : 'Reto Semanal';

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-CR', { day: 'numeric', month: 'long' });
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 'var(--radius-md)',
      padding: '2.5rem',
      boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
      textAlign: 'center',
      maxWidth: 540,
      margin: '0 auto',
    }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🏆</div>

      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2rem',
        color: 'var(--bg-dark)',
        marginBottom: '0.5rem',
        fontWeight: '800',
      }}>
        Reto Semanal
      </h2>

      <p style={{
        fontSize: '1.15rem',
        color: 'var(--primary)',
        fontWeight: '700',
        marginBottom: '0.25rem',
      }}>
        {weekLabel}
      </p>

      {startDate && endDate && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          {formatDate(startDate)} — {formatDate(endDate)}
        </p>
      )}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        <div style={{
          background: '#EEF2FF',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem 1.25rem',
          color: 'var(--primary)',
          fontWeight: '700',
          fontSize: '0.95rem',
        }}>
          📝 {questions.length} pregunta{questions.length !== 1 ? 's' : ''}
        </div>

        <div style={{
          background: '#FEF3C7',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem 1.25rem',
          color: '#92400E',
          fontWeight: '700',
          fontSize: '0.95rem',
        }}>
          ⭐ Completa todas y gana +5 pts extra!
        </div>
      </div>

      <button
        onClick={onStart}
        style={{
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          padding: '0.9rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: '700',
          fontFamily: 'var(--font-heading)',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(99,102,241,0.30)',
          transition: 'var(--transition)',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Comenzar Reto
      </button>
    </div>
  );
};

export default WeeklyChallengeStart;
