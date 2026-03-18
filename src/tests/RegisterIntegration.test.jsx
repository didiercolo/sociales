import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Register from '../pages/Register';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDocs, setDoc } from 'firebase/firestore';

// Mock Firebase Auth
vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(),
  getAuth: vi.fn(),
  onAuthStateChanged: vi.fn(() => () => {}),
}));

// Mock Firebase Firestore
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  getDocs: vi.fn(),
  doc: vi.fn((db, coll, id) => ({ id })),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
}));

// Mock seedNicknames script
vi.mock('../scripts/seedNicknames', () => ({
  seedNicknames: vi.fn(() => Promise.resolve()),
}));

describe('Register Page Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('completes the registration flow successfully', async () => {
    // 1. Initial nicknames load
    getDocs.mockResolvedValueOnce({
      forEach: (cb) => cb({ id: 'nick1', data: () => ({ name: 'NebulaByte', emoji: '🌌' }) }),
      empty: false
    });
    // 2. Uniqueness check
    getDocs.mockResolvedValueOnce({ empty: true });
    // 3. Auth creation
    createUserWithEmailAndPassword.mockResolvedValue({ user: { uid: 'u1' } });

    render(<MemoryRouter><Register /></MemoryRouter>);

    // Select nickname
    const nickBtn = await screen.findByText(/NebulaByte/i);
    fireEvent.click(nickBtn);
    fireEvent.click(screen.getByText(/Continuar/i));

    // Fill password
    const passInput = await screen.findByLabelText(/Contraseña/i);
    fireEvent.change(passInput, { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/¡Crear mi cuenta!/i));

    await waitFor(() => {
      expect(setDoc).toHaveBeenCalled();
    });
  });

  it('handles nickname already taken error', async () => {
    getDocs.mockResolvedValueOnce({
      forEach: (cb) => cb({ id: 'nick1', data: () => ({ name: 'NebulaByte', emoji: '🌌' }) }),
      empty: false
    });
    getDocs.mockResolvedValueOnce({ empty: false }); // TAKEN

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

  it('allows switching to custom nickname mode', async () => {
     getDocs.mockResolvedValueOnce({
      forEach: (cb) => cb({ id: 'nick1', data: () => ({ name: 'NebulaByte', emoji: '🌌' }) }),
      empty: false
    });
    
    render(<MemoryRouter><Register /></MemoryRouter>);

    const customBtn = await screen.findByText(/Escribir el mío/i);
    fireEvent.click(customBtn);
    
    const customInput = screen.getByLabelText(/Tu Nickname Personalizado/i);
    fireEvent.change(customInput, { target: { value: 'SuperGamer' } });
    expect(customInput.value).toBe('SuperGamer');
  });
});
