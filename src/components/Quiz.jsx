import React, { useState, useEffect } from 'react';

const Quiz = ({ questions }) => {
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [feedback, setFeedback] = useState(null); // { type: 'correct' | 'incorrect', text: string }
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Shuffle and pick 5 questions on mount (or restart)
        if (questions && questions.length > 0) {
            const shuffled = [...questions].sort(() => 0.5 - Math.random());
            setActiveQuestions(shuffled.slice(0, 5));
        }
    }, [questions, hasStarted]);

    const handleStart = () => {
        setHasStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setFeedback(null);
        setSelectedOption(null);
    };

    const handleRestart = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setActiveQuestions(shuffled.slice(0, 5));
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setFeedback(null);
        setSelectedOption(null);
    };

    const handleOptionClick = (index) => {
        if (selectedOption !== null) return; // Prevent double clicking

        setSelectedOption(index);
        const currentQ = activeQuestions[currentQuestionIndex];

        if (index === currentQ.correct) {
            setScore(prev => prev + 1);
            setFeedback({ type: 'correct', text: '¡Correcto! 🎉' });
        } else {
            setFeedback({ type: 'incorrect', text: 'Incorrecto 😔' });
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex + 1 < activeQuestions.length) {
            setCurrentQuestionIndex(prev => prev + 1);
            setFeedback(null);
            setSelectedOption(null);
        } else {
            setShowResults(true);
        }
    };

    // Initial State
    if (!hasStarted) {
        return (
            <div className="content-section quiz-container">
                <h2>📝 ¡Hora de la Prueba!</h2>
                <p>Demuestra lo que aprendiste.</p>
                <button className="btn" onClick={handleStart}>Comenzar Quiz</button>
            </div>
        );
    }

    // Results State
    if (showResults) {
        return (
            <div className="content-section quiz-container">
                <div className="result-card">
                    <h3>¡Terminaste!</h3>
                    <p>Tu puntuación es:</p>
                    <div className="score">{score} / {activeQuestions.length}</div>
                    <button className="btn" onClick={handleRestart}>Intentar de Nuevo</button>
                </div>
            </div>
        );
    }

    // Active Quiz State
    const currentQ = activeQuestions[currentQuestionIndex];

    return (
        <div className="content-section quiz-container">
            <div className="quiz-question">
                {currentQuestionIndex + 1}. {currentQ.question}
            </div>

            <div className="options-grid">
                {currentQ.options.map((option, index) => {
                    let extraClass = '';
                    if (selectedOption !== null) {
                        if (index === currentQ.correct) extraClass = 'correct';
                        else if (index === selectedOption) extraClass = 'incorrect';
                    }

                    return (
                        <button
                            key={index}
                            className={`quiz-btn ${extraClass}`}
                            onClick={() => handleOptionClick(index)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {feedback && (
                <>
                    <p style={{
                        marginTop: '1rem',
                        fontWeight: 'bold',
                        color: feedback.type === 'correct' ? 'green' : 'red'
                    }}>
                        {feedback.text}
                    </p>
                    <button className="btn" onClick={handleNext}>
                        {currentQuestionIndex + 1 === activeQuestions.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
                    </button>
                </>
            )}
        </div>
    );
};

export default Quiz;
