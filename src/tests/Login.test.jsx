import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { supabase } from '../supabase/client';

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });

  it('handles successful login', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: null });

    render(<MemoryRouter><Login /></MemoryRouter>);

    fireEvent.change(screen.getByLabelText(/Nombre de Usuario/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Ingresar/i }));

    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalled();
    });
  });

  it('handles login failure', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: new Error('Auth failed') });

    render(<MemoryRouter><Login /></MemoryRouter>);

    fireEvent.change(screen.getByLabelText(/Nombre de Usuario/i), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /Ingresar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Nickname o contraseña incorrectos/i)).toBeInTheDocument();
    });
  });
});
