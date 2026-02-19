import React from 'react';

const QuizActive = ({
    question,
    index,
    total,
    selectedOption,
    onOptionClick,
    feedback,
    onNext
}) => {
    return (
        <div className="content-section quiz-container">
            <div className="quiz-question">
                {index + 1}. {question.question}
            </div>

            <div className="options-grid">
                {question.options.map((option, i) => {
                    let extraClass = '';
                    if (selectedOption !== null) {
                        if (i === question.correct) extraClass = 'correct';
                        else if (i === selectedOption) extraClass = 'incorrect';
                    }

                    return (
                        <button
                            key={i}
                            className={`quiz-btn ${extraClass}`}
                            onClick={() => onOptionClick(i)}
                            disabled={selectedOption !== null}
                            aria-label={`Opción ${i + 1}: ${option}`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {feedback && (
                <div style={{ marginTop: '1.5rem' }}>
                    <p style={{
                        fontWeight: 'bold',
                        color: feedback.type === 'correct' ? '#2e7d32' : '#d32f2f',
                        marginBottom: '1rem'
                    }}>
                        {feedback.text}
                    </p>
                    <button className="btn" onClick={onNext} aria-label="Siguiente Pregunta">
                        {index + 1 === total ? 'Ver Resultados' : 'Siguiente Pregunta'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizActive;
