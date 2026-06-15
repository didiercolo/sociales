import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import { AuthProviderMock } from './AuthMock';
import * as AuthContextModule from '../context/AuthContext';

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
    const mockSignOut = vi.fn();
    // Re-mock firebase/auth for this test
    vi.mock('firebase/auth', () => ({
      signOut: vi.fn(() => Promise.resolve()),
      getAuth: vi.fn(() => ({})),
    }));

    AuthContextModule.useAuth.mockReturnValue({
      currentUser: { uid: '123' },
      userProfile: { nickname: 'TestUser' },
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const logoutBtn = screen.getByText('Salir');
    fireEvent.click(logoutBtn);

    // We expect signOut to be called with auth
    const { signOut } = await import('firebase/auth');
    expect(signOut).toHaveBeenCalled();
  });
});
