import { render, waitFor, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';

// Mocking dependencies
vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn(),
  getAuth: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  doc: vi.fn((db, coll, id) => ({ id })),
  getDoc: vi.fn(),
}));

// Helper component to access context
const TestComponent = ({ onValue }) => {
  const value = useAuth();
  if (!value.loading) {
    onValue(value);
  }
  return <div>{value.loading ? 'loading' : 'done'}</div>;
};

describe('AuthContext Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('loads user profile from Firestore when user is authenticated', async () => {
    const mockUser = { uid: 'user123' };
    const mockProfile = { nickname: 'IntegrationTester' };

    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback(mockUser);
      return () => {};
    });

    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => mockProfile,
    });

    let contextValue;
    render(
      <AuthProvider>
        <TestComponent onValue={(val) => { contextValue = val; }} />
      </AuthProvider>
    );

    // Initial state is loading, wait for 'done'
    await waitFor(() => expect(screen.getByText('done')).toBeInTheDocument());
    
    expect(contextValue.currentUser).toEqual(mockUser);
    expect(contextValue.userProfile).toEqual(mockProfile);
  });

  it('handles user without Firestore profile', async () => {
    const mockUser = { uid: 'user456' };

    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback(mockUser);
      return () => {};
    });

    getDoc.mockResolvedValue({
      exists: () => false,
    });

    let contextValue;
    render(
      <AuthProvider>
        <TestComponent onValue={(val) => { contextValue = val; }} />
      </AuthProvider>
    );

    await waitFor(() => expect(screen.getByText('done')).toBeInTheDocument());
    
    expect(contextValue.currentUser).toEqual(mockUser);
    expect(contextValue.userProfile).toBeNull();
  });
});
