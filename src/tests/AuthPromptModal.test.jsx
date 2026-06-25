import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { supabase } from '../supabase/client';
import AuthPromptModal from '../components/AuthPromptModal';

const navigate = vi.hoisted(() => vi.fn());
vi.mock('react-router-dom', async (orig) => ({
  ...(await orig()),
  useNavigate: () => navigate,
}));

const renderModal = (props = {}) =>
  render(
    <MemoryRouter>
      <AuthPromptModal open onClose={vi.fn()} onAuthenticated={vi.fn()} {...props} />
    </MemoryRouter>
  );

describe('AuthPromptModal', () => {
  beforeEach(() => vi.clearAllMocks());

  it('calls onAuthenticated after a successful login', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: null });
    const onAuthenticated = vi.fn();
    renderModal({ onAuthenticated });

    fireEvent.change(screen.getByLabelText(/nickname/i), { target: { value: 'NinjaPanda' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'ninjapanda@eduportalcr.app',
        password: 'secret123',
      });
      expect(onAuthenticated).toHaveBeenCalled();
    });
  });

  it('shows an error and does not authenticate on failed login', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: new Error('bad') });
    const onAuthenticated = vi.fn();
    renderModal({ onAuthenticated });

    fireEvent.change(screen.getByLabelText(/nickname/i), { target: { value: 'x' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'y' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() =>
      expect(screen.getByText(/Nickname o contraseña incorrectos/i)).toBeInTheDocument()
    );
    expect(onAuthenticated).not.toHaveBeenCalled();
  });

  it('navigates to register with redirect on "Crear cuenta"', () => {
    renderModal();
    fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }));
    expect(navigate).toHaveBeenCalledWith('/registro?redirect=/pregunta-del-dia');
  });
});
