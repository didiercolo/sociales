import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';
import ScoreboardWidget from '../components/ScoreboardWidget';

const mockUsers = [
  { uid: '1', nickname: 'NinjaPanda', tier: 4, score: 200 },
  { uid: '2', nickname: 'EstrellaVerde', tier: 3, score: 180 },
  { uid: '3', nickname: 'LeónDormir', tier: 1, score: 95 },
  { uid: '4', nickname: 'TortugaRápida', tier: 2, score: 60 },
  { uid: '5', nickname: 'PezVolador', tier: 1, score: 40 },
  { uid: '6', nickname: 'ÚltimoLugar', tier: 1, score: 5 },
];

describe('ScoreboardWidget', () => {
  beforeEach(() => {
    vi.mocked(onSnapshot).mockImplementation((_ref, callback) => {
      callback({ exists: () => true, data: () => ({ topUsers: mockUsers }) });
      return () => {};
    });
  });

  const renderWidget = () =>
    render(<MemoryRouter><ScoreboardWidget /></MemoryRouter>);

  it('shows the section heading', () => {
    renderWidget();
    expect(screen.getByText(/Top Estudiantes/i)).toBeInTheDocument();
  });

  it('renders exactly 5 rows (top 5 only)', () => {
    renderWidget();
    expect(screen.getByText('NinjaPanda')).toBeInTheDocument();
    expect(screen.getByText('PezVolador')).toBeInTheDocument();
    expect(screen.queryByText('ÚltimoLugar')).not.toBeInTheDocument();
  });

  it('shows tier badge for top user', () => {
    renderWidget();
    expect(screen.getByText(/👑/)).toBeInTheDocument();
  });

  it('shows score for top user', () => {
    renderWidget();
    expect(screen.getByText(/200 pts/)).toBeInTheDocument();
  });

  it('links to /scoreboard', () => {
    renderWidget();
    const link = screen.getByRole('link', { name: /Ver ranking/i });
    expect(link.getAttribute('href')).toBe('/scoreboard');
  });

  it('shows loading state before data arrives', () => {
    vi.mocked(onSnapshot).mockImplementation(() => () => {});
    renderWidget();
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  });

  it('shows empty state when no users', () => {
    vi.mocked(onSnapshot).mockImplementation((_ref, callback) => {
      callback({ exists: () => false, data: () => null });
      return () => {};
    });
    renderWidget();
    expect(screen.getByText(/no hay usuarios/i)).toBeInTheDocument();
  });
});
