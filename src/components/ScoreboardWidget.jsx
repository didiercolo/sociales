import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const getTierInfo = (tier) => {
  switch (tier) {
    case 4: return { icon: '👑' };
    case 3: return { icon: '💎' };
    case 2: return { icon: '⚔️' };
    default: return { icon: '🗺️' };
  }
};

const ScoreboardWidget = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system', 'scoreboard'), (snap) => {
      setTopUsers(snap.exists() ? (snap.data().topUsers || []).slice(0, 5) : []);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

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
          border: '3px solid var(--bg-dark)', boxShadow: '4px 4px 0 var(--bg-dark)',
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
                  borderBottom: i < topUsers.length - 1 ? '2px solid var(--bg-dark)' : 'none',
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
                    fontWeight: 800, fontSize: '0.85rem', border: '2px solid var(--bg-dark)'
                  }}>
                    {user.score} pts
                  </span>
                </div>
              );
            })
          )}

          <div style={{
            padding: '0.875rem 1.25rem', borderTop: '2px solid var(--bg-dark)',
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
