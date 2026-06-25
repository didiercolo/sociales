import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SimulacroExtra from '../pages/SimulacroExtra';

vi.mock('../data/socialesExtraExams', () => ({
  socialesExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo ${i}`,
      source: `Fuente ${i}`,
      question: `Pregunta ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'geografia-historia',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'geografia-historia',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'geografia-historia',
    })),
  ],
}));

vi.mock('../data/cienciasExtraExams', () => ({
  cienciasExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo Ciencias ${i}`,
      source: `Fuente Ciencias ${i}`,
      question: `Pregunta Ciencias ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'cuerpo-humano',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Ciencias B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'biodiversidad',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Ciencias C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'energia',
    })),
  ],
}));

vi.mock('../data/espanolExtraExams', () => ({
  espanolExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo Español ${i}`,
      question: `Pregunta Español ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'comprension-lectora',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Español B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'comprension-lectora',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Español C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'comprension-lectora',
    })),
  ],
}));

vi.mock('../data/matematicasExtraExams', () => ({
  matematicasExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'numeros',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'geometria',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'medidas',
    })),
  ],
}));

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/simulacro-extra/:subject/:examIndex" element={<SimulacroExtra />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('SimulacroExtra', () => {
  it('renders the start screen for exam 1', () => {
    renderAt('/simulacro-extra/sociales/1');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for exam 2', () => {
    renderAt('/simulacro-extra/sociales/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for exam 3', () => {
    renderAt('/simulacro-extra/sociales/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });

  it('redirects to / for an unknown subject', () => {
    renderAt('/simulacro-extra/invalid/1');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('redirects to / for an out-of-range examIndex', () => {
    renderAt('/simulacro-extra/sociales/9');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows 35 preguntas in the start screen header area', () => {
    renderAt('/simulacro-extra/sociales/1');
    expect(screen.getAllByText(/35 preguntas/i).length).toBeGreaterThan(0);
  });

  it('renders the start screen for ciencias exam 1', () => {
    renderAt('/simulacro-extra/ciencias/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for ciencias exam 2', () => {
    renderAt('/simulacro-extra/ciencias/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for ciencias exam 3', () => {
    renderAt('/simulacro-extra/ciencias/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });

  it('renders the start screen for espanol exam 1', () => {
    renderAt('/simulacro-extra/espanol/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for espanol exam 2', () => {
    renderAt('/simulacro-extra/espanol/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for espanol exam 3', () => {
    renderAt('/simulacro-extra/espanol/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });

  it('renders the start screen for matematicas exam 1', () => {
    renderAt('/simulacro-extra/matematicas/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for matematicas exam 2', () => {
    renderAt('/simulacro-extra/matematicas/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for matematicas exam 3', () => {
    renderAt('/simulacro-extra/matematicas/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });
});
