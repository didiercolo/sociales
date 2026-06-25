import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { supabase } from '../supabase/client';
import DailyQuestion from '../components/DailyQuestion';

const QUESTION = {
  id: '2026-06-25',
  subject: 'Ciencias',
  question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
  options: ['106', '206', '306', '406'],
};

// rpc branches: question getter always resolves the question; submit resolves a result.
const setupRpc = () => {
  supabase.rpc.mockImplementation((fn) => {
    if (fn === 'get_daily_question') return Promise.resolve({ data: [QUESTION], error: null });
    if (fn === 'submit_answer')
      return Promise.resolve({ data: { success: true, pointsEarned: 2, isCorrect: true, bonusAwarded: false }, error: null });
    return Promise.resolve({ data: null, error: null });
  });
};

const asGuest = () => supabase.auth.getUser.mockResolvedValue({ data: { user: null } });
const asUser = () => supabase.auth.getUser.mockResolvedValue({ data: { user: { id: 'u1' } } });

const renderDQ = () => render(<MemoryRouter><DailyQuestion /></MemoryRouter>);

describe('DailyQuestion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupRpc();
    supabase.auth.onAuthStateChange.mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } });
  });

  it('shows the question and options to a guest (no login banner)', async () => {
    asGuest();
    renderDQ();
    expect(await screen.findByText(QUESTION.question)).toBeInTheDocument();
    expect(screen.getByText('206')).toBeInTheDocument();
    expect(screen.queryByText(/Inicia sesión para participar/i)).not.toBeInTheDocument();
  });

  it('opens the modal and shows no result when a guest submits', async () => {
    asGuest();
    renderDQ();
    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    await waitFor(() => expect(document.querySelector('dialog').open).toBe(true));
    expect(supabase.rpc).not.toHaveBeenCalledWith('submit_answer', expect.anything());
    expect(screen.queryByText(/Has ganado/i)).not.toBeInTheDocument();
  });

  it('submits and shows the result for a logged-in user', async () => {
    asUser();
    renderDQ();
    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    await waitFor(() =>
      expect(supabase.rpc).toHaveBeenCalledWith('submit_answer', { question_id: '2026-06-25', answer: '206' })
    );
    expect(await screen.findByText(/Has ganado/i)).toBeInTheDocument();
  });

  it('auto-submits after the guest authenticates in the modal', async () => {
    asGuest();
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: null });
    renderDQ();

    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    fireEvent.change(await screen.findByLabelText(/nickname/i), { target: { value: 'NinjaPanda' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() =>
      expect(supabase.rpc).toHaveBeenCalledWith('submit_answer', { question_id: '2026-06-25', answer: '206' })
    );
  });
});
