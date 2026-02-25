import React from 'react';

const QuizStart = ({ onStart }) => (
    <div className="quiz-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>📝 ¡Hora de la Prueba!</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem' }}>Pon a prueba tus conocimientos y conviértete en un experto en Estudios Sociales.</p>
        <button className="btn-primary" onClick={onStart} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Comenzar Desafío
        </button>
    </div>
);

export default QuizStart;
