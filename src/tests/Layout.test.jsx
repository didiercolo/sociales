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
    expect(screen.getAllByText('Sobre Nosotros').length).toBeGreaterThan(0); // nav + footer
    expect(screen.getByText(/Prueba MEP/i)).toBeInTheDocument();
    // Removed from the nav on purpose
    expect(screen.queryByText('Ingresar')).not.toBeInTheDocument();
    expect(screen.queryByText('Registrarse')).not.toBeInTheDocument();
    expect(screen.queryByText(/Pregunta del Día/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ranking/i)).not.toBeInTheDocument();
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
