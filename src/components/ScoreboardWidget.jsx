import React from 'react';
import { Link } from 'react-router-dom';
import { getTierInfo } from '../utils';
import { useScoreboard } from '../hooks/useScoreboard';

const ScoreboardWidget = () => {
  const { topUsers: allUsers, loading } = useScoreboard();
  const topUsers = allUsers.slice(0, 5);

  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--bg-dark)' }}>
            🏆 Top Estudiantes
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>¿Podés llegar al #1?</p>
        </div>

        <div style={{
          background: 'white', borderRadius: 'var(--radius-md)',
          border: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.10)',
          overflow: 'hidden', maxWidth: 480, margin: '0 auto'
        }}>
          {loading ? (
            <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              Cargando...
            </p>
          ) : topUsers.length === 0 ? (
            <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              Aún no hay usuarios en el ranking
            </p>
          ) : (
            topUsers.map((user, i) => {
              const { icon } = getTierInfo(user.tier);
              return (
                <div key={user.uid || i} style={{
                  display: 'flex', alignItems: 'center',
                  padding: '0.75rem 1.25rem',
                  borderBottom: i < topUsers.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i === 0 ? 'rgba(79,70,229,0.05)' : 'white'
                }}>
                  <span style={{ width: 28, fontWeight: 900, fontSize: '1rem', color: 'var(--bg-dark)' }}>
                    #{i + 1}
                  </span>
                  <span style={{ fontSize: '1.1rem', marginRight: '0.5rem' }}>{icon}</span>
                  <span style={{ flex: 1, fontWeight: 700, color: 'var(--bg-dark)' }}>{user.nickname}</span>
                  <span style={{
                    background: 'var(--cta)', color: 'white',
                    padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-full)',
                    fontWeight: 800, fontSize: '0.85rem'
                  }}>
                    {user.score} pts
                  </span>
                </div>
              );
            })
          )}

          <div style={{
            padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border)',
            textAlign: 'center', background: '#f8fafc'
          }}>
            <Link to="/scoreboard" style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>
              Ver ranking completo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreboardWidget;
