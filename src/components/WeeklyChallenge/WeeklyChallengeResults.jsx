import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils';

const WeeklyChallengeResults = ({ totalPointsEarned, bonusAwarded, weekDoc, alreadyCompleted }) => {
  const { weekId, startDate, endDate, questions = [] } = weekDoc || {};

  const weekLabel = weekId ? `Semana ${weekId.split('-')[1]}` : 'Reto Semanal';

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
      {alreadyCompleted ? (
        <>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            color: 'var(--bg-dark)',
            marginBottom: '0.75rem',
            fontWeight: '800',
          }}>
            ¡Ya completaste el reto de esta semana!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>
            {weekLabel}
            {startDate && endDate && ` · ${formatDate(startDate)} — ${formatDate(endDate)}`}
          </p>
        </>
      ) : (
        <>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            color: 'var(--bg-dark)',
            marginBottom: '0.75rem',
            fontWeight: '800',
          }}>
            ¡Completaste el Reto!
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            {weekLabel}
            {startDate && endDate && ` · ${formatDate(startDate)} — ${formatDate(endDate)}`}
          </p>

          {typeof totalPointsEarned === 'number' && (
            <div style={{
              background: '#EEF2FF',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.5rem',
              marginBottom: '1.25rem',
              display: 'inline-block',
            }}>
              <span style={{
                color: 'var(--primary)',
                fontWeight: '800',
                fontSize: '1.4rem',
              }}>
                +{totalPointsEarned} puntos ganados
              </span>
            </div>
          )}

          {bonusAwarded && (
            <div style={{
              background: '#FEF3C7',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem 1.5rem',
              marginBottom: '1.5rem',
              color: '#92400E',
              fontWeight: '700',
              fontSize: '1rem',
            }}>
              🌟 +5 pts ¡Bono de finalización!
            </div>
          )}
        </>
      )}

      {/* Action links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
        <Link
          to="/scoreboard"
          style={{
            display: 'inline-block',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(99,102,241,0.30)',
            transition: 'var(--transition)',
          }}
        >
          Ver Ranking
        </Link>

        <Link
          to="/"
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default WeeklyChallengeResults;
