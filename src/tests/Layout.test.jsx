import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import * as AuthContextModule from '../context/AuthContext';
import { supabase } from '../supabase/client';

// Mock useAuth directly since it's used in Layout
vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('Layout component', () => {
  it('renders guest navigation correctly', () => {
    AuthContextModule.useAuth.mockReturnValue({
      currentUser: null,
      userProfile: null,
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getAllByText('EduPortal CR')[0]).toBeInTheDocument();
    expect(screen.getByText('Ingresar')).toBeInTheDocument();
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
    expect(screen.getByText(/Pregunta del Día/i)).toBeInTheDocument();
    expect(screen.queryByText(/Reto Semanal/i)).not.toBeInTheDocument();
  });

  it('renders authenticated navigation correctly', () => {
    AuthContextModule.useAuth.mockReturnValue({
      currentUser: { uid: '123' },
      userProfile: { nickname: 'TestUser' },
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText(/TestUser/)).toBeInTheDocument();
    expect(screen.getByText('Salir')).toBeInTheDocument();
    expect(screen.queryByText('Ingresar')).not.toBeInTheDocument();
  });

  it('calls logout when clicking the exit button', async () => {
    AuthContextModule.useAuth.mockReturnValue({
      currentUser: { id: '123' },
      userProfile: { nickname: 'TestUser' },
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Salir'));

    await waitFor(() => expect(supabase.auth.signOut).toHaveBeenCalled());
  });
});
