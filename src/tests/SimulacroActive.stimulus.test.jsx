import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SimulacroActive from '../components/Simulacro/SimulacroActive';

const makeQuestion = (overrides = {}) => ({
  question: '¿Cuál es la capital de Costa Rica?',
  options: ['San José', 'Cartago', 'Alajuela'],
  correct: 0,
  mepBloque: 'geografia-historia',
  ...overrides,
});

const baseProps = (q) => ({
  questions: [q],
  onFinish: vi.fn(),
});

describe('SimulacroActive — stimulus rendering', () => {
  it('does NOT render a stimulus block when stimulus is absent', () => {
    render(<SimulacroActive {...baseProps(makeQuestion())} />);
    // No stimulus field → the gray stimulus box must not appear at all
    expect(screen.queryByText('Costa Rica tiene dos costas.')).not.toBeInTheDocument();
    expect(screen.queryByText(/Fuente:/)).not.toBeInTheDocument();
  });

  it('renders stimulus text when stimulus is present', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'Instituto Geográfico Nacional.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText('Costa Rica tiene dos costas.')).toBeInTheDocument();
  });

  it('renders source attribution when stimulus is present', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'Instituto Geográfico Nacional.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText(/Instituto Geográfico Nacional\./)).toBeInTheDocument();
  });

  it('renders the question text below the stimulus block', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'IGN.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText('¿Cuál es la capital de Costa Rica?')).toBeInTheDocument();
  });
});
