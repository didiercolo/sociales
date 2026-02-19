import React from 'react';

const QuizResults = ({ score, total, onRestart }) => (
    <div className="content-section quiz-container">
        <div className="result-card">
            <h3>¡Terminaste!</h3>
            <p>Tu puntuación es:</p>
            <div className="score">{score} / {total}</div>
            <button className="btn" onClick={onRestart} aria-label="Intentar de Nuevo">
                Intentar de Nuevo
            </button>
        </div>
    </div>
);

export default QuizResults;
