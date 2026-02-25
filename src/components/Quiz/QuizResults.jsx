import React from 'react';

const QuizResults = ({ score, total, onRestart }) => (
    <div className="quiz-section" style={{ textAlign: 'center' }}>
        <div style={{ padding: '2rem' }}>
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>¡Increíble Trabajo!</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '2rem' }}>Has completado el desafío con éxito.</p>

            <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: 'var(--radius-lg)',
                display: 'inline-block',
                margin: '1rem 0'
            }}>
                <div style={{ fontSize: '5rem', fontWeight: '800', lineHeight: 1, color: 'var(--primary)' }}>{score}</div>
                <div style={{ opacity: 0.4, fontWeight: 'bold' }}>DE {total} PUNTOS</div>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <button className="btn-primary" onClick={onRestart} style={{ padding: '1rem 2.5rem' }}>
                    Intentar de Nuevo
                </button>
            </div>
        </div>
    </div>
);

export default QuizResults;
