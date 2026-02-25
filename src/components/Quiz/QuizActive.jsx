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
        <div className="quiz-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', opacity: 0.6, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                <span>Pregunta {index + 1} de {total}</span>
                <span>Social Studies Quiz</span>
            </div>

            <div className="quiz-question" style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.4' }}>
                {question.question}
            </div>

            <div className="options-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
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
                            style={{
                                padding: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: selectedOption !== null ?
                                    (i === question.correct ? 'var(--primary)' : (i === selectedOption ? '#e74c3c' : 'rgba(255,255,255,0.05)')) :
                                    'rgba(255,255,255,0.05)',
                                color: 'white',
                                borderRadius: 'var(--radius-md)',
                                cursor: selectedOption === null ? 'pointer' : 'default',
                                textAlign: 'left',
                                fontSize: '1.1rem',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span style={{ marginRight: '1rem', opacity: 0.5, fontWeight: '800' }}>{String.fromCharCode(65 + i)}</span>
                            {option}
                        </button>
                    );
                })}
            </div>

            {feedback && (
                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    background: feedback.type === 'correct' ? 'rgba(46, 204, 113, 0.1)' : 'rgba(231, 76, 60, 0.1)',
                    border: `1px solid ${feedback.type === 'correct' ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)'}`,
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontWeight: '800',
                        fontSize: '1.5rem',
                        color: feedback.type === 'correct' ? '#2ECC71' : '#E74C3C',
                        marginBottom: '1.5rem'
                    }}>
                        {feedback.text}
                    </p>
                    <button className="btn-primary" onClick={onNext} style={{ background: 'white', color: 'var(--bg-dark)' }}>
                        {index + 1 === total ? 'Ver Resultados Finales' : 'Siguiente Pregunta'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizActive;
