import { render, waitFor, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { supabase } from '../supabase/client';

// Builds a from() chain whose maybeSingle() resolves to the given profile row.
const mockProfileFetch = (profile) => {
  const chain = {
    select: vi.fn(() => chain),
    eq: vi.fn(() => chain),
    maybeSingle: vi.fn(() => Promise.resolve({ data: profile, error: null })),
  };
  supabase.from.mockReturnValue(chain);
};

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
    supabase.auth.onAuthStateChange.mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } });
  });

  it('loads user profile from Supabase when user is authenticated', async () => {
    const mockUser = { id: 'user123' };
    const mockProfile = { id: 'user123', nickname: 'IntegrationTester', tier: 1, score: 0 };

    supabase.auth.getSession.mockResolvedValue({ data: { session: { user: mockUser } } });
    mockProfileFetch(mockProfile);

    let contextValue;
    render(
      <AuthProvider>
        <TestComponent onValue={(val) => { contextValue = val; }} />
      </AuthProvider>
    );

    await waitFor(() => expect(screen.getByText('done')).toBeInTheDocument());

    expect(contextValue.currentUser).toEqual(mockUser);
    expect(contextValue.userProfile).toEqual(mockProfile);
  });

  it('handles user without a profile row', async () => {
    const mockUser = { id: 'user456' };

    supabase.auth.getSession.mockResolvedValue({ data: { session: { user: mockUser } } });
    mockProfileFetch(null);

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
