// src/tests/WeeklyChallengePage.test.jsx
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { useAuth } from '../context/AuthContext';
import WeeklyChallengePage from '../pages/WeeklyChallengePage';

// ─── Module mocks ────────────────────────────────────────────────────────────

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// firebase/firestore is globally mocked in vitest.setup.js (getDoc is a vi.fn())
// firebase/functions is NOT in vitest.setup.js, so we mock it here
vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(() => ({})),
  httpsCallable: vi.fn(),
}));

// ─── Mock data ───────────────────────────────────────────────────────────────

const MOCK_QUESTIONS = [
  {
    question: '¿Cuál es la capital?',
    options: ['San José', 'Cartago', 'Heredia', 'Alajuela'],
    correctAnswer: 'San José',
    explanation: 'San José es la capital.',
    subject: 'Sociales',
  },
  {
    question: '¿Cuántos huesos?',
    options: ['106', '206', '306', '406'],
    correctAnswer: '206',
    explanation: 'Son 206 huesos.',
    subject: 'Ciencias',
  },
];

const mockUser = { uid: 'test-uid' };

const baseProfile = {
  nickname: 'TestUser',
  tier: 1,
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

/** A resolved Firestore snapshot that has the weekly challenge doc. */
const docSnapExists = {
  exists: () => true,
  data: () => ({
    weekId: CURRENT_WEEK_ID,
    startDate: '2026-06-09',
    endDate: '2026-06-15',
    questions: MOCK_QUESTIONS,
  }),
};

/** A resolved Firestore snapshot for a missing doc. */
const docSnapMissing = { exists: () => false };

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

    // Default: logged-in user, no challenge completed yet
    vi.mocked(useAuth).mockReturnValue({
      currentUser: mockUser,
      userProfile: { ...baseProfile },
      loading: false,
    });

    // Default httpsCallable stub (overridden in specific tests)
    vi.mocked(httpsCallable).mockReturnValue(() =>
      Promise.resolve({
        data: {
          success: true,
          pointsEarned: 2,
          isCorrect: true,
          bonusAwarded: false,
          weeklyComplete: false,
        },
      })
    );
  });

  // ── 1. Loading state ───────────────────────────────────────────────────────

  it('shows loading state initially before getDoc resolves', () => {
    // getDoc never resolves during this synchronous check
    vi.mocked(getDoc).mockReturnValue(new Promise(() => {}));

    renderPage();

    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  });

  // ── 2. Auth guard ──────────────────────────────────────────────────────────

  it('shows login prompt when user is not logged in', () => {
    vi.mocked(useAuth).mockReturnValue({
      currentUser: null,
      userProfile: null,
      loading: false,
    });

    renderPage();

    expect(screen.getByText(/Inicia sesión/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });

  // ── 3. No challenge available ──────────────────────────────────────────────

  it('shows "no hay reto" message when weeklyChallenge doc does not exist', async () => {
    vi.mocked(getDoc).mockResolvedValueOnce(docSnapMissing);

    renderPage();

    await waitFor(() => {
      expect(screen.getByText(/no hay reto disponible/i)).toBeInTheDocument();
    });
  });

  // ── 4. Start screen ────────────────────────────────────────────────────────

  it('shows start screen with "Comenzar Reto" button when doc exists and user has not started', async () => {
    vi.mocked(getDoc).mockResolvedValueOnce(docSnapExists);

    renderPage();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Comenzar Reto/i })).toBeInTheDocument();
    });
  });

  // ── 5. Already-completed state ─────────────────────────────────────────────

  it('shows already-completed results when user has bonusAwarded for the current week', async () => {
    vi.mocked(useAuth).mockReturnValue({
      currentUser: mockUser,
      userProfile: {
        ...baseProfile,
        weeklyWeekId: CURRENT_WEEK_ID,
        weeklyBonusAwarded: true,
        weeklyAnsweredCount: MOCK_QUESTIONS.length,
      },
      loading: false,
    });

    vi.mocked(getDoc).mockResolvedValueOnce(docSnapExists);

    renderPage();

    await waitFor(() => {
      expect(
        screen.getByText(/Ya completaste el reto de esta semana/i)
      ).toBeInTheDocument();
    });
  });

  // ── 6. Submit answer and advance questionIndex ─────────────────────────────

  it('transitions from START → ACTIVE → next question after submitting an answer', async () => {
    vi.mocked(getDoc).mockResolvedValueOnce(docSnapExists);

    renderPage();

    // Wait for start screen
    const startBtn = await screen.findByRole('button', { name: /Comenzar Reto/i });

    // Click "Comenzar Reto" → ACTIVE phase
    fireEvent.click(startBtn);

    // Should now show first question
    await waitFor(() => {
      expect(screen.getByText('¿Cuál es la capital?')).toBeInTheDocument();
    });

    // Select an option
    fireEvent.click(screen.getByText('San José'));

    // Click "Confirmar Respuesta"
    const confirmBtn = screen.getByRole('button', { name: /Confirmar Respuesta/i });
    fireEvent.click(confirmBtn);

    // httpsCallable should have been called
    expect(vi.mocked(httpsCallable)).toHaveBeenCalled();

    // After submit resolves, second question should appear
    await waitFor(() => {
      expect(screen.getByText('¿Cuántos huesos?')).toBeInTheDocument();
    });
  });
});
