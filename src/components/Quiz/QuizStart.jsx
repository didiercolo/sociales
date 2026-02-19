import React from 'react';

const QuizStart = ({ onStart }) => (
    <div className="content-section quiz-container">
        <h2>📝 ¡Hora de la Prueba!</h2>
        <p>Demuestra lo que aprendiste.</p>
        <button className="btn" onClick={onStart} aria-label="Comenzar Quiz">
            Comenzar Quiz
        </button>
    </div>
);

export default QuizStart;
