// src/tests/ScoreboardPage.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { useScoreboard } from '../hooks/useScoreboard';
import ScoreboardPage from '../pages/ScoreboardPage';
import * as AuthContext from '../context/AuthContext';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(() => ({ currentUser: null, userProfile: null })),
}));

vi.mock('../hooks/useScoreboard', () => ({
  useScoreboard: vi.fn(),
}));

const mockUsers = Array.from({ length: 3 }, (_, i) => ({
  uid: String(i + 1),
  nickname: `User${i + 1}`,
  tier: 1,
  score: (3 - i) * 50,
}));

describe('ScoreboardPage', () => {
  beforeEach(() => {
    vi.mocked(useScoreboard).mockReturnValue({ topUsers: mockUsers, loading: false });
    vi.mocked(AuthContext.useAuth).mockReturnValue({ currentUser: null, userProfile: null });
  });

  const renderPage = () => render(<MemoryRouter><ScoreboardPage /></MemoryRouter>);

  it('renders the page heading', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Top 50/i);
  });

  it('renders all 3 users', () => {
    renderPage();
    expect(screen.getByText('User1')).toBeInTheDocument();
    expect(screen.getByText('User3')).toBeInTheDocument();
  });

  it('renders back link to /', () => {
    renderPage();
    const backLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });

  it('shows pinned row for logged-in user not in top-50', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      currentUser: { id: 'outside' },
      userProfile: { nickname: 'OutsideUser', score: 3, tier: 1 },
    });
    renderPage();
    expect(screen.getByText(/OutsideUser/)).toBeInTheDocument();
    expect(screen.getByText(/Fuera del top 50/i)).toBeInTheDocument();
  });

  it('does not show pinned row when user is in top-50', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({
      currentUser: { id: '1' },
      userProfile: { nickname: 'User1', score: 150, tier: 1 },
    });
    renderPage();
    expect(screen.queryByText(/Fuera del top 50/i)).not.toBeInTheDocument();
  });
});
