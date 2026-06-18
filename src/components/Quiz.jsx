import React, { useState, useEffect, useCallback } from 'react';
import QuizStart from './Quiz/QuizStart';
import QuizActive from './Quiz/QuizActive';
import QuizResults from './Quiz/QuizResults';
import { shuffle } from '../utils';

const Quiz = ({ questions, questionCount = 5 }) => {
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState('START'); // START, ACTIVE, RESULTS
    const [feedback, setFeedback] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const initializeQuiz = useCallback(() => {
        if (questions && questions.length > 0) {
            setActiveQuestions(shuffle(questions).slice(0, questionCount));
        }
    }, [questions, questionCount]);

    useEffect(() => {
        initializeQuiz();
    }, [initializeQuiz]);

    const handleStart = () => {
        setGameState('ACTIVE');
        setCurrentQuestionIndex(0);
        setScore(0);
        setFeedback(null);
        setSelectedOption(null);
    };

    const handleRestart = () => {
        initializeQuiz();
        handleStart();
    };

    const handleOptionClick = (index) => {
        if (selectedOption !== null) return;

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
            setGameState('RESULTS');
        }
    };

    switch (gameState) {
        case 'ACTIVE':
            return (
                <QuizActive
                    question={activeQuestions[currentQuestionIndex]}
                    index={currentQuestionIndex}
                    total={activeQuestions.length}
                    selectedOption={selectedOption}
                    onOptionClick={handleOptionClick}
                    feedback={feedback}
                    onNext={handleNext}
                />
            );
        case 'RESULTS':
            return (
                <QuizResults
                    score={score}
                    total={activeQuestions.length}
                    onRestart={handleRestart}
                />
            );
        default:
            return <QuizStart onStart={handleStart} />;
    }
};

export default Quiz;
