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
