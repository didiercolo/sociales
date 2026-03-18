import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TextQuiz from '../components/TextQuiz';

describe('TextQuiz component', () => {
  const textQuestions = [
    { id: 1, question: '¿Quién descubrió América?', acceptableAnswers: ['Colón', 'Cristóbal Colón'] },
    { id: 2, question: '¿Capital de Costa Rica?', acceptableAnswers: ['San José'] },
  ];

  it('renders the first question', () => {
    // Predictable shuffle
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    
    render(<TextQuiz textQuestions={textQuestions} questionCount={2} />);
    expect(screen.getByText(/Pregunta Abierta 1 de 2/i)).toBeInTheDocument();
    
    vi.spyOn(Math, 'random').mockRestore();
  });

  it('validates a correct answer (case and accent insensitive)', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    render(<TextQuiz textQuestions={textQuestions} questionCount={1} />);
    
    const input = screen.getByPlaceholderText(/Escribe tu respuesta aquí/i);
    // Question 1: Colón. Input: colon (no accent, lowercase)
    fireEvent.change(input, { target: { value: 'colon' } });
    fireEvent.click(screen.getByText(/Validar Respuesta/i));

    expect(screen.getByText(/¡Correcto!/i)).toBeInTheDocument();
    expect(screen.getByText(/Siguiente Pregunta/i)).toBeInTheDocument();
    
    vi.spyOn(Math, 'random').mockRestore();
  });

  it('validates an incorrect answer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    render(<TextQuiz textQuestions={textQuestions} questionCount={1} />);
    
    const input = screen.getByPlaceholderText(/Escribe tu respuesta aquí/i);
    fireEvent.change(input, { target: { value: 'No lo sé' } });
    fireEvent.click(screen.getByText(/Validar Respuesta/i));

    expect(screen.getByText(/Respuesta incorrecta/i)).toBeInTheDocument();
    expect(screen.getByText(/Colón, Cristóbal Colón/i)).toBeInTheDocument();
    
    vi.spyOn(Math, 'random').mockRestore();
  });

  it('completes the quiz and shows results', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    render(<TextQuiz textQuestions={textQuestions} questionCount={1} />);
    
    // Correct answer
    fireEvent.change(screen.getByPlaceholderText(/Escribe tu respuesta aquí/i), { target: { value: 'colon' } });
    fireEvent.click(screen.getByText(/Validar Respuesta/i));
    
    // Next (which is finish)
    fireEvent.click(screen.getByText(/Siguiente Pregunta/i));

    expect(screen.getByText(/Resultados \(Texto Libre\)/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    vi.spyOn(Math, 'random').mockRestore();
  });

  it('handles Enter key for validation and next', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.1);
    render(<TextQuiz textQuestions={textQuestions} questionCount={1} />);
    
    const input = screen.getByPlaceholderText(/Escribe tu respuesta aquí/i);
    fireEvent.change(input, { target: { value: 'colon' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText(/¡Correcto!/i)).toBeInTheDocument();
    
    // Second Enter should go to next/finish
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText(/Resultados \(Texto Libre\)/i)).toBeInTheDocument();
    
    vi.spyOn(Math, 'random').mockRestore();
  });
});
