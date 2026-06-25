import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock the Supabase client used across the app. Tests override individual
// methods (auth.*, from().select/insert/update, rpc, channel) as needed.
vi.mock('./src/supabase/client', () => {
  const thenable = (result = { data: null, error: null }) => {
    const chain = {
      select: vi.fn(() => chain),
      insert: vi.fn(() => chain),
      update: vi.fn(() => chain),
      upsert: vi.fn(() => chain),
      eq: vi.fn(() => chain),
      maybeSingle: vi.fn(() => Promise.resolve(result)),
      single: vi.fn(() => Promise.resolve(result)),
      then: (resolve) => Promise.resolve(result).then(resolve),
    };
    return chain;
  };

  const channel = {
    on: vi.fn(() => channel),
    subscribe: vi.fn(() => channel),
  };

  const supabase = {
    auth: {
      getSession: vi.fn(() => Promise.resolve({ data: { session: null } })),
      getUser: vi.fn(() => Promise.resolve({ data: { user: null } })),
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
      signInWithPassword: vi.fn(() => Promise.resolve({ data: {}, error: null })),
      signUp: vi.fn(() => Promise.resolve({ data: { user: { id: 'test-uid' } }, error: null })),
      signOut: vi.fn(() => Promise.resolve({ error: null })),
    },
    from: vi.fn(() => thenable()),
    rpc: vi.fn(() => Promise.resolve({ data: null, error: null })),
    channel: vi.fn(() => channel),
    removeChannel: vi.fn(),
  };

  return { supabase, default: supabase };
});

// Mock Vite env variables
vi.stubGlobal('import.meta', {
  env: {
    VITE_SUPABASE_URL: 'https://test.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'test-anon-key',
  },
});

// jsdom doesn't implement <dialog> showModal/close — stub them for tests.
if (typeof HTMLDialogElement !== 'undefined' && !HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.dispatchEvent(new Event('close'));
  };
}
