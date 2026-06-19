// src/pages/PruebaMEP.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';

const subjectOrder = ['sociales', 'ciencias', 'espanol', 'matematicas'];

const subjectNotes = {
  espanol: 'La prueba tiene dos partes: Comprensión Lectora (50%) y Producción de Texto Expositivo (50%, mínimo 200 palabras).',
};

const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias', 'espanol', 'matematicas'];

const PruebaMEP = () => {
  const [open, setOpen] = useState({});

  const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: 720 }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 600
      }}>
        ← Volver a Materias
      </Link>

      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>
        📋 La Prueba MEP — ¿Cómo funciona?
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
        La Prueba de Bachillerato del MEP evalúa los contenidos de 6to grado en 4 materias.
        Cada prueba tiene <strong>120 minutos</strong>, <strong>35 preguntas</strong> de selección única (A/B/C/D).
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {subjectOrder.map(subjectId => {
          const config = subjectConfig[subjectId];
          const isOpen = !!open[subjectId];
          return (
            <div key={subjectId} style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
            }}>
              <button
                onClick={() => toggle(subjectId)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 1.5rem',
                  background: isOpen ? config.accent : 'white',
                  color: isOpen ? 'white' : 'var(--bg-dark)',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800
                }}
              >
                <span><span aria-hidden="true">{config.icon}</span> <span>{config.label}</span></span>
                <span style={{ fontSize: '1.2rem' }}>{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div style={{ padding: '1.25rem 1.5rem', background: '#F8FAFC' }}>
                  <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem' }}>
                    {config.bloques.map(b => (
                      <li key={b.id} style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <span style={{ marginRight: '0.5rem' }}>{b.icon}</span>
                        <strong style={{ color: 'var(--bg-dark)' }}>{b.label}</strong>
                      </li>
                    ))}
                  </ul>
                  {subjectNotes[subjectId] && (
                    <p style={{
                      background: '#EFF6FF', border: '2px solid #BFDBFE',
                      borderRadius: 'var(--radius-sm)', padding: '0.75rem',
                      color: '#1e40af', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem'
                    }}>
                      ℹ️ {subjectNotes[subjectId]}
                    </p>
                  )}
                  <Link
                    to={`/simulacro/${subjectId}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'var(--primary)', color: 'white',
                      padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)',
                      fontWeight: 700, fontSize: '0.9rem',
                      border: 'none',
                      boxShadow: '0 2px 8px rgba(99,102,241,0.25)',
                      textDecoration: 'none'
                    }}
                  >
                    🎯 Practicar Simulacro
                  </Link>
                  {SUBJECTS_WITH_EXTRA_EXAMS.includes(subjectId) && (
                    <div style={{ marginTop: '1.25rem' }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        marginBottom: '0.75rem'
                      }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Exámenes Extra
                        </span>
                        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {[1, 2, 3].map(n => (
                          <Link
                            key={n}
                            to={`/simulacro-extra/${subjectId}/${n}`}
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                              background: 'white', color: config.accent,
                              padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
                              fontWeight: 700, fontSize: '0.85rem',
                              border: `2px solid ${config.accent}`,
                              textDecoration: 'none'
                            }}
                          >
                            📝 Examen Extra {n}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PruebaMEP;
