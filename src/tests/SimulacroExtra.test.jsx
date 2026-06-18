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
});
