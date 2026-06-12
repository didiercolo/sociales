import React, { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import '../index.css';

const Scoreboard = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to the central scoreboard document
    const scoreboardRef = doc(db, 'system', 'scoreboard');
    
    const unsubscribe = onSnapshot(scoreboardRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTopUsers(data.topUsers || []);
      } else {
        setTopUsers([]);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching scoreboard:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getTierInfo = (tier) => {
    switch (tier) {
      case 4: return { name: 'Maestro', icon: '👑', color: '#fbbf24' };
      case 3: return { name: 'Especialista', icon: '💎', color: '#60a5fa' };
      case 2: return { name: 'Aventurero', icon: '⚔️', color: '#f87171' };
      case 1:
      default: return { name: 'Explorador', icon: '🗺️', color: '#94a3b8' };
    }
  };

  return (
    <div className="scoreboard-container" style={{
      background: 'white',
      borderRadius: 'var(--radius-md)',
      padding: '2.5rem',
      boxShadow: '0 4px 20px rgba(99,102,241,0.10)',
      marginTop: '2rem',
      border: 'none'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--bg-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: '800' }}>🏆 Top 50 Estudiantes</h2>
        <p style={{ color: 'var(--text-muted)', fontWeight: '800', fontSize: '1.05rem' }}>¡Responde preguntas para ganar puntos y subir de rango!</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontWeight: '800' }}>
          Cargando marcador...
        </div>
      ) : topUsers.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontWeight: '800' }}>
          Aún no hay puntajes registrados. ¡Sé el primero en contestar!
        </div>
      ) : (
        <div className="scoreboard-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {topUsers.map((user, index) => {
            const tierInfo = getTierInfo(user.tier);
            const isTop3 = index < 3;
            
            return (
              <div key={user.uid || index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                background: isTop3 ? 'rgba(79, 70, 229, 0.06)' : '#F8FAFC',
                border: 'none',
                boxShadow: isTop3 ? '0 2px 12px rgba(79,70,229,0.20)' : '0 1px 4px rgba(0,0,0,0.06)',
                transition: 'var(--transition)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: isTop3 ? 'var(--accent)' : '#CBD5E1',
                  color: 'var(--bg-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '1.2rem',
                  marginRight: '1rem'
                }}>
                  {index + 1}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--bg-dark)', fontWeight: '800' }}>{user.nickname}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '0.85rem', color: tierInfo.color, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {tierInfo.icon} {tierInfo.name}
                    </span>
                  </div>
                </div>

                <div style={{
                  background: 'var(--cta)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '800',
                  fontSize: '1.05rem'
                }}>
                  {user.score} pts
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
