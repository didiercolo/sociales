// src/tests/WeeklyChallengePage.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabase/client';
import WeeklyChallengePage from '../pages/WeeklyChallengePage';

// ─── Module mocks ────────────────────────────────────────────────────────────

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// ─── Mock data ───────────────────────────────────────────────────────────────

const MOCK_QUESTIONS = [
  { question: '¿Cuál es la capital?', options: ['San José', 'Cartago', 'Heredia', 'Alajuela'], subject: 'Sociales' },
  { question: '¿Cuántos huesos?', options: ['106', '206', '306', '406'], subject: 'Ciencias' },
];

const mockUser = { id: 'test-uid' };

const baseProfile = {
  weeklyWeekId: null,
  weeklyAnsweredCount: 0,
  weeklyBonusAwarded: false,
};

/** Returns the ISO week string for today, matching getISOWeekId() in the page. */
function getCurrentISOWeekId(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

const CURRENT_WEEK_ID = getCurrentISOWeekId();

const challengeData = {
  weekId: CURRENT_WEEK_ID,
  startDate: '2026-06-09',
  endDate: '2026-06-15',
  questions: MOCK_QUESTIONS,
};

// Stubs supabase.rpc to return the weekly challenge and a submit result, and
// supabase.from('profiles') to return the given weekly progress.
const setup = ({ challenge = challengeData, profile = baseProfile, submit } = {}) => {
  supabase.rpc.mockImplementation((fn) => {
    if (fn === 'get_weekly_challenge') return Promise.resolve({ data: challenge, error: null });
    if (fn === 'submit_answer') return Promise.resolve({ data: submit, error: null });
    return Promise.resolve({ data: null, error: null });
  });
  const chain = {
    select: vi.fn(() => chain),
    eq: vi.fn(() => chain),
    maybeSingle: vi.fn(() => Promise.resolve({ data: profile, error: null })),
  };
  supabase.from.mockReturnValue(chain);
};

const renderPage = () =>
  render(
    <MemoryRouter>
      <WeeklyChallengePage />
    </MemoryRouter>
  );

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('WeeklyChallengePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAuth).mockReturnValue({ currentUser: mockUser, userProfile: { ...baseProfile }, loading: false });
    setup();
  });

  it('shows loading state initially before the challenge resolves', () => {
    supabase.rpc.mockReturnValue(new Promise(() => {}));
    renderPage();
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  });

  it('stays in loading state while auth is resolving', () => {
    vi.mocked(useAuth).mockReturnValue({ currentUser: null, userProfile: null, loading: true });
    renderPage();
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
    expect(screen.queryByText(/Inicia sesión/i)).not.toBeInTheDocument();
  });

  it('shows login prompt when user is not logged in', () => {
    vi.mocked(useAuth).mockReturnValue({ currentUser: null, userProfile: null, loading: false });
    renderPage();
    expect(screen.getByText(/Inicia sesión/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });

  it('shows "no hay reto" message when there is no challenge for the week', async () => {
    setup({ challenge: null });
    renderPage();
    await waitFor(() => {
      expect(screen.getByText(/no hay reto disponible/i)).toBeInTheDocument();
    });
  });

  it('shows start screen when challenge exists and user has not started', async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Comenzar Reto/i })).toBeInTheDocument();
    });
  });

  it('shows already-completed results when the user finished the current week', async () => {
    const completedProfile = {
      weeklyWeekId: CURRENT_WEEK_ID,
      weeklyBonusAwarded: true,
      weeklyAnsweredCount: MOCK_QUESTIONS.length,
    };
    vi.mocked(useAuth).mockReturnValue({ currentUser: mockUser, userProfile: completedProfile, loading: false });
    setup({ profile: completedProfile });

    renderPage();
    await waitFor(() => {
      expect(screen.getByText(/Ya completaste el reto de esta semana/i)).toBeInTheDocument();
    });
  });

  it('transitions START → ACTIVE → feedback → next question after submitting', async () => {
    setup({ submit: { success: true, pointsEarned: 2, isCorrect: true, bonusAwarded: false, weeklyComplete: false } });

    renderPage();

    const startBtn = await screen.findByRole('button', { name: /Comenzar Reto/i });
    fireEvent.click(startBtn);

    await waitFor(() => {
      expect(screen.getByText('¿Cuál es la capital?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Confirmar Respuesta/i }));

    expect(supabase.rpc).toHaveBeenCalledWith('submit_answer', expect.objectContaining({ question_type: 'weekly' }));

    await waitFor(() => {
      expect(screen.getByText('¡Correcto!')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /Siguiente →/i }));

    await waitFor(() => {
      expect(screen.getByText('¿Cuántos huesos?')).toBeInTheDocument();
    });
  });
});
