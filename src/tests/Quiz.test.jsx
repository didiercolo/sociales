import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Quiz from '../components/Quiz';

describe('Quiz component', () => {
  const questions = [
    { id: 1, question: 'Q1', options: ['A1', 'B1', 'C1', 'D1'], correct: 0 },
    { id: 2, question: 'Q2', options: ['A2', 'B2', 'C2', 'D2'], correct: 1 },
  ];

  it('renders start screen initially', () => {
    render(<Quiz questions={questions} />);
    expect(screen.getByText(/¡Hora de la Prueba!/i)).toBeInTheDocument();
    expect(screen.getByText(/Comenzar Desafío/i)).toBeInTheDocument();
  });

  const getStartButton = () => screen.getByText(/Comenzar Desafío/i);

  it('starts the quiz and shows the first question', () => {
    render(<Quiz questions={questions} />);
    fireEvent.click(getStartButton());

    expect(screen.getByText(/Pregunta 1 de/i)).toBeInTheDocument();
    const qText = currentQuestionText(questions);
    expect(['Q1', 'Q2']).toContain(qText);
  });

  const currentQuestionText = (qs) => {
    for (const q of qs) {
      if (screen.queryByText(q.question)) return q.question;
    }
    return null;
  };

  it('handles correct answer and shows feedback', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9);

    render(<Quiz questions={questions} questionCount={2} />);
    fireEvent.click(getStartButton());

    const qText = currentQuestionText(questions);
    const currentQuestion = questions.find(q => q.question === qText);
    const correctOption = currentQuestion.options[currentQuestion.correct];

    fireEvent.click(screen.getByText(correctOption));
    expect(screen.getByText(/¡Correcto!/i)).toBeInTheDocument();
    expect(screen.getByText(/Siguiente Pregunta/i)).toBeInTheDocument();

    vi.spyOn(Math, 'random').mockRestore();
  });

  it('handles incorrect answer and shows feedback', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9);

    render(<Quiz questions={questions} questionCount={2} />);
    fireEvent.click(getStartButton());

    const qText = currentQuestionText(questions);
    const currentQuestion = questions.find(q => q.question === qText);
    const incorrectIndex = (currentQuestion.correct + 1) % 4;
    const incorrectOption = currentQuestion.options[incorrectIndex];

    fireEvent.click(screen.getByText(incorrectOption));
    expect(screen.getByText(/Incorrecto/i)).toBeInTheDocument();
    expect(screen.getByText(/Siguiente Pregunta/i)).toBeInTheDocument();

    vi.spyOn(Math, 'random').mockRestore();
  });

  it('shows results after finishing all questions', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9);

    render(<Quiz questions={questions} questionCount={1} />);
    fireEvent.click(getStartButton());

    const qText = currentQuestionText(questions);
    const currentQuestion = questions.find(q => q.question === qText);
    fireEvent.click(screen.getByText(currentQuestion.options[currentQuestion.correct]));
    
    // The button text for the last question is "Ver Resultados Finales"
    fireEvent.click(screen.getByText(/Ver Resultados Finales/i));

    expect(screen.getByText(/¡Increíble Trabajo!/i)).toBeInTheDocument();
    expect(screen.getByText(/DE 1 PUNTOS/i)).toBeInTheDocument();

    vi.spyOn(Math, 'random').mockRestore();
  });
});
