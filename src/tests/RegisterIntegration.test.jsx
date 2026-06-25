import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Register from '../pages/Register';
import { supabase } from '../supabase/client';
import { useAuth } from '../context/AuthContext';

// Register.jsx imports NICKNAMES_SEED as the picker fallback list.
vi.mock('../scripts/seedNicknames', () => ({
  NICKNAMES_SEED: [{ name: 'NebulaByte', emoji: '🌌' }],
}));

// Register calls useAuth().refreshProfile; it isn't wrapped in AuthProvider here.
vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// Mock navigation so we can assert the post-signup redirect target.
const navigate = vi.hoisted(() => vi.fn());
vi.mock('react-router-dom', async (orig) => ({
  ...(await orig()),
  useNavigate: () => navigate,
}));

// A from() chain that resolves to the seeded nickname row for every terminal
// call (select/.eq for the picker load, insert for the profile, update for the
// claim). insert/update paths only read `error`, so one result satisfies all.
const mockFrom = (result = { data: [{ id: 'nick1', name: 'NebulaByte', emoji: '🌌' }], error: null }) => {
  const chain = {
    select: vi.fn(() => chain),
    insert: vi.fn(() => Promise.resolve(result)),
    update: vi.fn(() => chain),
    eq: vi.fn(() => Promise.resolve(result)),
  };
  supabase.from.mockReturnValue(chain);
  return chain;
};

describe('Register Page Integration', () => {
  let refreshProfile;

  beforeEach(() => {
    vi.clearAllMocks();
    mockFrom();
    refreshProfile = vi.fn().mockResolvedValue(undefined);
    vi.mocked(useAuth).mockReturnValue({ refreshProfile });
  });

  it('completes the registration flow and refreshes auth so the user is logged in', async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ data: { user: { id: 'u1' } }, error: null });

    render(<MemoryRouter><Register /></MemoryRouter>);

    const nickBtn = await screen.findByText(/NebulaByte/i);
    fireEvent.click(nickBtn);
    fireEvent.click(screen.getByText(/Continuar/i));

    const passInput = await screen.findByLabelText(/Contraseña/i);
    fireEvent.change(passInput, { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/¡Crear mi cuenta!/i));

    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalled();
      expect(supabase.from).toHaveBeenCalledWith('profiles');
      expect(refreshProfile).toHaveBeenCalled();
    });
  });

  it('handles nickname already taken error', async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ data: {}, error: { message: 'User already registered' } });

    render(<MemoryRouter><Register /></MemoryRouter>);

    const nickBtn = await screen.findByText(/NebulaByte/i);
    fireEvent.click(nickBtn);
    fireEvent.click(screen.getByText(/Continuar/i));

    const passInput = await screen.findByLabelText(/Contraseña/i);
    fireEvent.change(passInput, { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/¡Crear mi cuenta!/i));

    await waitFor(() => {
      expect(screen.getByText(/Ese nombre ya está tomado/i)).toBeInTheDocument();
    });
  });

  it('redirects to the ?redirect target after signup', async () => {
    supabase.auth.signUp.mockResolvedValueOnce({ data: { user: { id: 'u1' } }, error: null });

    render(
      <MemoryRouter initialEntries={['/registro?redirect=/pregunta-del-dia']}>
        <Register />
      </MemoryRouter>
    );

    const nickBtn = await screen.findByText(/NebulaByte/i);
    fireEvent.click(nickBtn);
    fireEvent.click(screen.getByText(/Continuar/i));
    const passInput = await screen.findByLabelText(/Contraseña/i);
    fireEvent.change(passInput, { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/¡Crear mi cuenta!/i));

    await waitFor(() => expect(navigate).toHaveBeenCalledWith('/pregunta-del-dia'));
  });

  it('allows switching to custom nickname mode', async () => {
    render(<MemoryRouter><Register /></MemoryRouter>);

    const customBtn = await screen.findByText(/Escribir el mío/i);
    fireEvent.click(customBtn);

    const customInput = screen.getByLabelText(/Tu Nickname Personalizado/i);
    fireEvent.change(customInput, { target: { value: 'SuperGamer' } });
    expect(customInput.value).toBe('SuperGamer');
  });
});
