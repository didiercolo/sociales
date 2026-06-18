import React, { useState, useEffect, useCallback, useRef } from 'react';
import { shuffle } from '../utils';

const normalizeText = (text) => {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remueve tildes
        .replace(/[.,/#!$%^&*;:{}=\-_`~()?"¡¿]/g, "") // Remueve puntuación
        .trim();
};

const TextQuiz = ({ textQuestions, questionCount = 5 }) => {
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Current question state
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'
    const inputRef = useRef(null);

    const initializeQuiz = useCallback(() => {
        if (textQuestions && textQuestions.length > 0) {
            setActiveQuestions(shuffle(textQuestions).slice(0, questionCount));
            setCurrentIndex(0);
            setScore(0);
            setIsFinished(false);
            setFeedback(null);
            setUserAnswer("");
        }
    }, [textQuestions, questionCount]);

    useEffect(() => {
        initializeQuiz();
    }, [initializeQuiz]);

    const handleValidation = () => {
        if (!userAnswer.trim()) return;

        const normalizedInput = normalizeText(userAnswer);
        const currentData = activeQuestions[currentIndex];

        // Validar que alguna de las palabras clave esté incluida en la respuesta
        const isCorrect = currentData.acceptableAnswers.some(keyword => {
            return normalizedInput.includes(normalizeText(keyword));
        });

        if (isCorrect) {
            setScore(s => s + 1);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    const handleNext = () => {
        if (currentIndex < activeQuestions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFeedback(null);
            setUserAnswer("");
            setTimeout(() => {
                if (inputRef.current) inputRef.current.focus();
            }, 100);
        } else {
            setIsFinished(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (feedback) {
                handleNext();
            } else {
                handleValidation();
            }
        }
    };

    if (activeQuestions.length === 0) return null;

    if (isFinished) {
        const percentage = Math.round((score / activeQuestions.length) * 100);
        let message = '';
        if (percentage >= 90) message = '¡Excelente trabajo! Eres un experto.';
        else if (percentage >= 70) message = '¡Muy bien! Tienes un buen dominio del tema.';
        else message = '¡Sigue practicando! Repasa el material y vuelve a intentarlo.';

        return (
            <div className="quiz-results" style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Resultados (Texto Libre)</h3>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
                    {percentage}%
                </div>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Has respondido correctamente {score} de {activeQuestions.length} preguntas.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '3rem', fontWeight: '600' }}>{message}</p>
                <button
                    onClick={initializeQuiz}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'var(--transition)'
                    }}
                >
                    Intentarlo de nuevo 🔄
                </button>
            </div>
        );
    }

    const currentQ = activeQuestions[currentIndex];

    return (
        <div className="text-quiz-active" style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid var(--bg-main)' }}>
                <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                    Pregunta Abierta {currentIndex + 1} de {activeQuestions.length}
                </span>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: 'full', fontSize: '0.85rem', fontWeight: '600' }}>
                    Puntuación: {score}
                </span>
            </div>

            <div className="quiz-question" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', lineHeight: '1.4', color: 'var(--text-main)' }}>
                    {currentQ.question}
                </h3>
            </div>

            <div className="quiz-input-area" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={feedback !== null}
                    placeholder="Escribe tu respuesta aquí..."
                    style={{
                        padding: '1.2rem',
                        fontSize: '1.2rem',
                        borderRadius: 'var(--radius-md)',
                        border: `2px solid ${feedback === 'correct' ? '#2ECC71' : feedback === 'incorrect' ? '#E74C3C' : 'var(--bg-main)'}`,
                        backgroundColor: feedback === 'correct' ? '#E8F8F5' : feedback === 'incorrect' ? '#FDEDEC' : '#F8F9FA',
                        outline: 'none',
                        width: '100%',
                        transition: 'all 0.3s'
                    }}
                />

                {feedback && (
                    <div style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: feedback === 'correct' ? '#E8F8F5' : '#FDEDEC',
                        color: feedback === 'correct' ? '#27AE60' : '#C0392B',
                        fontWeight: '600',
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        {feedback === 'correct' ? (
                            <><span>✅</span> ¡Correcto! Muy bien escrito.</>
                        ) : (
                            <>
                                <span>❌</span>
                                <div>
                                    <p style={{ marginBottom: '0.5rem' }}>Respuesta incorrecta. Las palabras clave esperadas eran similares a:</p>
                                    <code style={{ background: 'rgba(255,255,255,0.5)', padding: '4px 8px', borderRadius: '4px' }}>
                                        {currentQ.acceptableAnswers.join(", ")}
                                    </code>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className="quiz-controls" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                {!feedback ? (
                    <button
                        onClick={handleValidation}
                        disabled={!userAnswer.trim()}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            backgroundColor: userAnswer.trim() ? 'var(--primary)' : 'var(--bg-main)',
                            color: userAnswer.trim() ? 'white' : 'var(--text-muted)',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            cursor: userAnswer.trim() ? 'pointer' : 'not-allowed',
                            transition: 'var(--transition)'
                        }}
                    >
                        Validar Respuesta
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            backgroundColor: 'var(--text-main)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            transition: 'var(--transition)'
                        }}
                    >
                        Siguiente Pregunta ➔
                    </button>
                )}
            </div>
        </div>
    );
};

export default TextQuiz;
