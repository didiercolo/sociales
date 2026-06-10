// src/tests/Simulacro.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SimulacroStart from '../components/Simulacro/SimulacroStart';

const mockConfig = {
  label: 'Estudios Sociales',
  icon: '🌍',
  accent: '#10B981',
  bloques: [
    { id: 'geografia-historia', label: 'Geografía e Historia', icon: '🗺️', color: '#0284c7' },
    { id: 'educacion-civica', label: 'Educación Cívica', icon: '🏛️', color: '#7c3aed' },
  ],
};

describe('SimulacroStart', () => {
  const defaultProps = {
    subject: 'sociales',
    config: mockConfig,
    questionCount: 60,
    bloqueBreakdown: [
      { id: 'geografia-historia', label: 'Geografía e Historia', count: 40 },
      { id: 'educacion-civica', label: 'Educación Cívica', count: 20 },
    ],
    onStart: vi.fn(),
  };

  it('renders subject name', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
  });

  it('shows 60 preguntas when full pool available', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/60 preguntas/)).toBeInTheDocument();
  });

  it('shows actual count when fewer than 60 available', () => {
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, questionCount: 20 }} /></MemoryRouter>);
    expect(screen.getByText(/20 preguntas disponibles/i)).toBeInTheDocument();
  });

  it('start button is disabled when 0 questions', () => {
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, questionCount: 0 }} /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /Sin preguntas/i })).toBeDisabled();
  });

  it('calls onStart when button clicked', () => {
    const onStart = vi.fn();
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, onStart }} /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Comenzar/i }));
    expect(onStart).toHaveBeenCalledOnce();
  });

  it('renders bloque breakdown with counts', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/40/)).toBeInTheDocument();
  });
});

import SimulacroActive from '../components/Simulacro/SimulacroActive';

const mockQuestions = [
  {
    question: '¿Cuál es la capital de Costa Rica?',
    options: ['San José', 'Liberia', 'Cartago', 'Alajuela'],
    correct: 0,
    mepBloque: 'geografia-historia'
  },
  {
    question: '¿Qué es la democracia?',
    options: ['Sistema de gobierno', 'Tipo de clima', 'Clase de animal', 'Forma de moneda'],
    correct: 0,
    mepBloque: 'educacion-civica'
  }
];

describe('SimulacroActive', () => {
  it('renders the first question', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText(/¿Cuál es la capital/)).toBeInTheDocument();
  });

  it('renders all 4 answer options', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText('San José')).toBeInTheDocument();
    expect(screen.getByText('Liberia')).toBeInTheDocument();
    expect(screen.getByText('Cartago')).toBeInTheDocument();
    expect(screen.getByText('Alajuela')).toBeInTheDocument();
  });

  it('"Siguiente" button is disabled before selecting an option', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByRole('button', { name: /Siguiente/i })).toBeDisabled();
  });

  it('enables "Siguiente" after selecting an option', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    expect(screen.getByRole('button', { name: /Siguiente/i })).not.toBeDisabled();
  });

  it('advances to next question when "Siguiente" clicked', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    expect(screen.getByText(/¿Qué es la democracia\?/)).toBeInTheDocument();
  });

  it('shows "Finalizar" button on last question', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    expect(screen.getByRole('button', { name: /Finalizar/i })).toBeInTheDocument();
  });

  it('calls onFinish with answers object when Finalizar clicked', () => {
    const onFinish = vi.fn();
    render(<SimulacroActive questions={mockQuestions} onFinish={onFinish} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    fireEvent.click(screen.getByText('Sistema de gobierno'));
    fireEvent.click(screen.getByRole('button', { name: /Finalizar/i }));
    expect(onFinish).toHaveBeenCalledOnce();
    expect(onFinish.mock.calls[0][0]).toEqual({ 0: 0, 1: 0 });
  });

  it('shows progress bar', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows timer in MM:SS format', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText(/\d{2}:\d{2}/)).toBeInTheDocument();
  });
});

import SimulacroResults from '../components/Simulacro/SimulacroResults';

const resultsQuestions = [
  { question: 'Q1', options: ['A','B','C','D'], correct: 0, mepBloque: 'geografia-historia' },
  { question: 'Q2', options: ['A','B','C','D'], correct: 1, mepBloque: 'geografia-historia' },
  { question: 'Q3', options: ['A','B','C','D'], correct: 2, mepBloque: 'educacion-civica' },
];
// Q1 correct (answered 0), Q2 wrong (answered 0), Q3 correct (answered 2) → 2/3
const resultsAnswers = { 0: 0, 1: 0, 2: 2 };

describe('SimulacroResults', () => {
  const defaultProps = {
    questions: resultsQuestions,
    answers: resultsAnswers,
    timeUsed: 3600,
    subject: 'sociales',
    onRestart: vi.fn(),
  };

  it('shows correct score out of total', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/2 \/ 3/)).toBeInTheDocument();
  });

  it('shows percentage', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/67%/)).toBeInTheDocument();
  });

  it('shows time used as MM:SS', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/60:00/)).toBeInTheDocument();
  });

  it('shows bloque breakdown with both bloques', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/Educación Cívica/)).toBeInTheDocument();
  });

  it('calls onRestart when retry button clicked', () => {
    const onRestart = vi.fn();
    render(<MemoryRouter><SimulacroResults {...{ ...defaultProps, onRestart }} /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Intentar de nuevo/i }));
    expect(onRestart).toHaveBeenCalledOnce();
  });

  it('shows back link to subject page', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    const link = screen.getByRole('link', { name: /Volver a/i });
    expect(link.getAttribute('href')).toBe('/sociales');
  });
});

import Simulacro from '../pages/Simulacro';

describe('Simulacro page', () => {
  const renderAt = (subject) =>
    render(
      <MemoryRouter initialEntries={[`/simulacro/${subject}`]}>
        <Routes>
          <Route path="/simulacro/:subject" element={<Simulacro />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>
    );

  it('shows start screen for sociales', () => {
    renderAt('sociales');
    expect(screen.getByRole('button', { name: /Comenzar Simulacro/i })).toBeInTheDocument();
  });

  it('redirects to / for unknown subject', () => {
    renderAt('fisica');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows disabled button for matematicas (0 quiz items)', () => {
    renderAt('matematicas');
    expect(screen.getByRole('button', { name: /Sin preguntas/i })).toBeDisabled();
  });

  it('transitions to active screen when start clicked', () => {
    renderAt('sociales');
    fireEvent.click(screen.getByRole('button', { name: /Comenzar Simulacro/i }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
