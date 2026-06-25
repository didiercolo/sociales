// src/pages/ScoreboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useScoreboard } from '../hooks/useScoreboard';

const getTierInfo = (tier) => {
  switch (tier) {
    case 4: return { name: 'Maestro', icon: '👑', color: '#fbbf24' };
    case 3: return { name: 'Especialista', icon: '💎', color: '#60a5fa' };
    case 2: return { name: 'Aventurero', icon: '⚔️', color: '#f87171' };
    default: return { name: 'Explorador', icon: '🗺️', color: '#94a3b8' };
  }
};

const UserRow = ({ rank, user, highlight }) => {
  const { icon, color, name } = getTierInfo(user.tier);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '1rem 1.25rem',
      borderRadius: 'var(--radius-sm)',
      background: highlight ? 'rgba(79,70,229,0.06)' : '#F8FAFC',
      border: 'none',
      boxShadow: highlight ? '0 2px 12px rgba(79,70,229,0.20)' : '0 1px 4px rgba(0,0,0,0.06)',
      marginBottom: '0.75rem'
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: highlight ? 'var(--accent)' : '#CBD5E1',
        color: 'var(--bg-dark)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, fontSize: '1.1rem', marginRight: '1rem'
      }}>
        {rank}
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--bg-dark)', fontWeight: 800 }}>
          {user.nickname}
        </h4>
        <span style={{ fontSize: '0.8rem', color, fontWeight: 700, textTransform: 'uppercase' }}>
          {icon} {name}
        </span>
      </div>
      <div style={{
        background: 'var(--cta)', color: 'white',
        padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
        fontWeight: 800, fontSize: '1rem'
      }}>
        {user.score} pts
      </div>
    </div>
  );
};

const ScoreboardPage = () => {
  const { topUsers, loading } = useScoreboard();
  const { currentUser, userProfile } = useAuth();

  const userInTop50 = currentUser && topUsers.some(u => u.uid === currentUser.id);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 600
      }}>
        ← Volver a Materias
      </Link>

      <h1 style={{
        fontFamily: 'var(--font-heading)', fontSize: '2.5rem',
        color: 'var(--bg-dark)', textAlign: 'center', marginBottom: '0.5rem'
      }}>
        🏆 Top 50 Estudiantes
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 600 }}>
        ¡Respondé preguntas para ganar puntos y subir de rango!
      </p>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 700 }}>Cargando marcador...</p>
      ) : topUsers.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 700 }}>
          Aún no hay puntajes registrados. ¡Sé el primero en contestar!
        </p>
      ) : (
        <>
          {topUsers.map((user, i) => (
            <UserRow key={user.uid || i} rank={i + 1} user={user} highlight={i < 3} />
          ))}
          {currentUser && userProfile && !userInTop50 && (
            <>
              <div style={{ borderTop: '2px dashed var(--border)', margin: '1.5rem 0', opacity: 0.5 }} />
              <div style={{
                padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)',
                background: '#F8FAFC', border: '3px dashed var(--border)',
                display: 'flex', alignItems: 'center', gap: '1rem'
              }}>
                <span style={{ fontWeight: 800, color: 'var(--text-muted)' }}>—</span>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontWeight: 800, color: 'var(--bg-dark)' }}>
                    Tu posición: {userProfile.nickname}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Fuera del top 50
                  </span>
                </div>
                <span style={{ fontWeight: 800, color: 'var(--text-muted)' }}>
                  {userProfile.score} pts
                </span>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ScoreboardPage;
