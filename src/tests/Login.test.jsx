import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { signInWithEmailAndPassword } from 'firebase/auth';

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(),
}));

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });

  it('handles successful login', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({});
    
    render(<MemoryRouter><Login /></MemoryRouter>);
    
    // Find inputs
    const nickInput = screen.getByLabelText(/Nombre de Usuario/i);
    const passInput = screen.getByLabelText(/Contraseña/i);
    const submitBtn = screen.getByRole('button', { name: /Ingresar/i });

    // Fill inputs
    fireEvent.change(nickInput, { target: { value: 'testuser' } });
    fireEvent.change(passInput, { target: { value: 'password123' } });
    
    // Click button
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
    });
  });

  it('handles login failure', async () => {
    signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Auth failed'));
    
    render(<MemoryRouter><Login /></MemoryRouter>);
    
    fireEvent.change(screen.getByLabelText(/Nombre de Usuario/i), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /Ingresar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Nickname o contraseña incorrectos/i)).toBeInTheDocument();
    });
  });
});
