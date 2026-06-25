# Guest-visible Daily Question with auth-gated answer — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let logged-out visitors see and attempt the Daily Question, gating the result and points behind a login/signup popup.

**Architecture:** `DailyQuestion.jsx` always fetches and shows the question to everyone; submitting routes guests to a new `<dialog>`-based `AuthPromptModal`. Logging in inside the modal auto-submits the picked answer; signing up routes to the existing register page (via `?redirect=`) and the user re-picks. The correct answer is never in the browser — it lives behind the `get_daily_question` / `submit_answer` Supabase RPCs.

**Tech Stack:** React 18 + Vite, react-router-dom v6, `@supabase/supabase-js`, Vitest + Testing Library.

## Global Constraints

- Pseudo-email format (verbatim): `` `${nickname.trim().toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app` ``
- Login error copy (verbatim): `Nickname o contraseña incorrectos. ¡Inténtalo de nuevo!`
- Submit RPC call shape (verbatim): `supabase.rpc('submit_answer', { question_id, answer })`
- Daily-question getter (verbatim): `supabase.rpc('get_daily_question', { p_date })` returns an array; take `data[0]`.
- The Supabase client module is `../supabase/client` (mocked globally in `vitest.setup.js`).
- Run a single test file with: `npx vitest run <path>`. Full suite: `npx vitest run`.
- All copy is Spanish. Reuse existing CSS classes `form-group`, `auth-btn`, `auth-error`.

---

### Task 1: `AuthPromptModal` component + `<dialog>` test stub + styles

**Files:**
- Modify: `vitest.setup.js` (add `HTMLDialogElement` stub)
- Create: `src/components/AuthPromptModal.jsx`
- Create: `src/tests/AuthPromptModal.test.jsx`
- Modify: `src/index.css` (append modal styles)

**Interfaces:**
- Produces: `export default function AuthPromptModal({ open, onClose, onAuthenticated })` — a modal that logs the user in via `supabase.auth.signInWithPassword`, calls `onAuthenticated()` on success, and routes to `/registro?redirect=/pregunta-del-dia` on "Crear cuenta".

- [ ] **Step 1: Add a `<dialog>` stub to `vitest.setup.js`** (jsdom lacks `showModal`/`close`)

Append to the end of `vitest.setup.js`:

```js
// jsdom doesn't implement <dialog> showModal/close — stub them for tests.
if (typeof HTMLDialogElement !== 'undefined' && !HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.dispatchEvent(new Event('close'));
  };
}
```

- [ ] **Step 2: Write the failing test**

Create `src/tests/AuthPromptModal.test.jsx`:

```jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { supabase } from '../supabase/client';
import AuthPromptModal from '../components/AuthPromptModal';

const navigate = vi.hoisted(() => vi.fn());
vi.mock('react-router-dom', async (orig) => ({
  ...(await orig()),
  useNavigate: () => navigate,
}));

const renderModal = (props = {}) =>
  render(
    <MemoryRouter>
      <AuthPromptModal open onClose={vi.fn()} onAuthenticated={vi.fn()} {...props} />
    </MemoryRouter>
  );

describe('AuthPromptModal', () => {
  beforeEach(() => vi.clearAllMocks());

  it('calls onAuthenticated after a successful login', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: null });
    const onAuthenticated = vi.fn();
    renderModal({ onAuthenticated });

    fireEvent.change(screen.getByLabelText(/nickname/i), { target: { value: 'NinjaPanda' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'ninjapanda@eduportalcr.app',
        password: 'secret123',
      });
      expect(onAuthenticated).toHaveBeenCalled();
    });
  });

  it('shows an error and does not authenticate on failed login', async () => {
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: new Error('bad') });
    const onAuthenticated = vi.fn();
    renderModal({ onAuthenticated });

    fireEvent.change(screen.getByLabelText(/nickname/i), { target: { value: 'x' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'y' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() =>
      expect(screen.getByText(/Nickname o contraseña incorrectos/i)).toBeInTheDocument()
    );
    expect(onAuthenticated).not.toHaveBeenCalled();
  });

  it('navigates to register with redirect on "Crear cuenta"', () => {
    renderModal();
    fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }));
    expect(navigate).toHaveBeenCalledWith('/registro?redirect=/pregunta-del-dia');
  });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npx vitest run src/tests/AuthPromptModal.test.jsx`
Expected: FAIL — cannot resolve `../components/AuthPromptModal`.

- [ ] **Step 4: Implement `AuthPromptModal.jsx`**

Create `src/components/AuthPromptModal.jsx`:

```jsx
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';

export default function AuthPromptModal({ open, onClose, onAuthenticated }) {
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    if (!open && dlg.open) dlg.close();
  }, [open]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const pseudoEmail = `${nickname.trim().toLowerCase().replace(/\s+/g, '_')}@eduportalcr.app`;
    const { error: signInError } = await supabase.auth.signInWithPassword({ email: pseudoEmail, password });
    setLoading(false);
    if (signInError) {
      setError('Nickname o contraseña incorrectos. ¡Inténtalo de nuevo!');
      return;
    }
    onAuthenticated();
  };

  // Close when the user clicks the backdrop (the dialog element itself, outside the card).
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog ref={dialogRef} className="auth-modal" onClose={onClose} onClick={handleDialogClick}>
      <div className="auth-modal-inner">
        <button type="button" className="auth-modal-close" aria-label="Cerrar" onClick={onClose}>✕</button>
        <div className="auth-header">
          <div className="auth-icon">🔒</div>
          <h2>Inicia sesión para ver la respuesta y ganar puntos</h2>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="modal-nickname">Nickname</label>
            <input
              id="modal-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-password">Contraseña</label>
            <input
              id="modal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar y ver'}
          </button>
        </form>

        <p className="auth-footer" style={{ marginTop: '1rem' }}>
          ¿Nuevo?{' '}
          <button
            type="button"
            className="auth-link-btn"
            onClick={() => navigate('/registro?redirect=/pregunta-del-dia')}
          >
            Crear cuenta →
          </button>
        </p>
      </div>
    </dialog>
  );
}
```

- [ ] **Step 5: Append modal styles to `src/index.css`**

Append at the end of `src/index.css`:

```css
/* ============================================================
   AUTH PROMPT MODAL
   ============================================================ */
.auth-modal {
  border: none;
  border-radius: var(--radius-md);
  padding: 0;
  max-width: 420px;
  width: 90%;
  box-shadow: var(--shadow-lg);
}
.auth-modal::backdrop {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(2px);
}
.auth-modal-inner {
  position: relative;
  padding: 2rem 1.75rem;
}
.auth-modal-close {
  position: absolute;
  top: .75rem;
  right: .9rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
}
.auth-link-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font: inherit;
}
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `npx vitest run src/tests/AuthPromptModal.test.jsx`
Expected: PASS (3 tests).

- [ ] **Step 7: Commit**

```bash
git add vitest.setup.js src/components/AuthPromptModal.jsx src/tests/AuthPromptModal.test.jsx src/index.css
git commit -m "feat: add AuthPromptModal login popup for guest daily-question flow"
```

---

### Task 2: Register honors `?redirect=` on success

**Files:**
- Modify: `src/pages/Register.jsx`
- Modify: `src/tests/RegisterIntegration.test.jsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: after a successful signup, `Register` navigates to the `redirect` query param if present, else `/`.

- [ ] **Step 1: Write the failing test**

Add to `src/tests/RegisterIntegration.test.jsx`. First, update the navigation import so the test can assert the target — add this mock near the other `vi.mock` calls at the top:

```jsx
const navigate = vi.hoisted(() => vi.fn());
vi.mock('react-router-dom', async (orig) => ({
  ...(await orig()),
  useNavigate: () => navigate,
}));
```

Then add this test inside the `describe('Register Page Integration', ...)` block:

```jsx
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
```

> Note: the existing success test asserts behavior but uses the real navigate within `MemoryRouter`. With `useNavigate` now mocked, that test's implicit navigation is a no-op — its existing assertions (`signUp`, `from('profiles')`, `refreshProfile`) still hold. Leave it as-is.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run src/tests/RegisterIntegration.test.jsx`
Expected: FAIL — `navigate` called with `/`, not `/pregunta-del-dia`.

- [ ] **Step 3: Implement the redirect in `Register.jsx`**

In `src/pages/Register.jsx`, add `useSearchParams` to the existing react-router-dom import:

```jsx
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
```

Inside the component, near `const navigate = useNavigate();`, add:

```jsx
const [searchParams] = useSearchParams();
```

Replace the single success-path `navigate('/');` (after the nickname-claim block and `await refreshProfile();`) with:

```jsx
navigate(searchParams.get('redirect') || '/');
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/RegisterIntegration.test.jsx`
Expected: PASS (all tests, including the new redirect test).

- [ ] **Step 5: Commit**

```bash
git add src/pages/Register.jsx src/tests/RegisterIntegration.test.jsx
git commit -m "feat: Register honors ?redirect= param after signup"
```

---

### Task 3: DailyQuestion shows the question to guests and gates submit behind the modal

**Files:**
- Modify: `src/components/DailyQuestion.jsx`
- Create: `src/tests/DailyQuestion.test.jsx`

**Interfaces:**
- Consumes: `AuthPromptModal` (Task 1) — `{ open, onClose, onAuthenticated }`.
- Produces: guest-visible question; guest submit opens the modal; authenticated submit (direct or via `onAuthenticated`) calls `supabase.rpc('submit_answer', …)` and shows the result.

- [ ] **Step 1: Write the failing test**

Create `src/tests/DailyQuestion.test.jsx`:

```jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { supabase } from '../supabase/client';
import DailyQuestion from '../components/DailyQuestion';

const QUESTION = {
  id: '2026-06-25',
  subject: 'Ciencias',
  question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
  options: ['106', '206', '306', '406'],
};

// rpc branches: question getter always resolves the question; submit resolves a result.
const setupRpc = () => {
  supabase.rpc.mockImplementation((fn) => {
    if (fn === 'get_daily_question') return Promise.resolve({ data: [QUESTION], error: null });
    if (fn === 'submit_answer')
      return Promise.resolve({ data: { success: true, pointsEarned: 2, isCorrect: true, bonusAwarded: false }, error: null });
    return Promise.resolve({ data: null, error: null });
  });
};

const asGuest = () => supabase.auth.getUser.mockResolvedValue({ data: { user: null } });
const asUser = () => supabase.auth.getUser.mockResolvedValue({ data: { user: { id: 'u1' } } });

const renderDQ = () => render(<MemoryRouter><DailyQuestion /></MemoryRouter>);

describe('DailyQuestion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupRpc();
    supabase.auth.onAuthStateChange.mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } });
  });

  it('shows the question and options to a guest (no login banner)', async () => {
    asGuest();
    renderDQ();
    expect(await screen.findByText(QUESTION.question)).toBeInTheDocument();
    expect(screen.getByText('206')).toBeInTheDocument();
    expect(screen.queryByText(/Inicia sesión para participar/i)).not.toBeInTheDocument();
  });

  it('opens the modal and shows no result when a guest submits', async () => {
    asGuest();
    renderDQ();
    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    await waitFor(() => expect(document.querySelector('dialog').open).toBe(true));
    expect(supabase.rpc).not.toHaveBeenCalledWith('submit_answer', expect.anything());
    expect(screen.queryByText(/puntos/i)).not.toBeInTheDocument();
  });

  it('submits and shows the result for a logged-in user', async () => {
    asUser();
    renderDQ();
    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    await waitFor(() =>
      expect(supabase.rpc).toHaveBeenCalledWith('submit_answer', { question_id: '2026-06-25', answer: '206' })
    );
    expect(await screen.findByText(/puntos/i)).toBeInTheDocument();
  });

  it('auto-submits after the guest authenticates in the modal', async () => {
    asGuest();
    supabase.auth.signInWithPassword.mockResolvedValueOnce({ data: {}, error: null });
    renderDQ();

    fireEvent.click(await screen.findByText('206'));
    fireEvent.click(screen.getByRole('button', { name: /Enviar Respuesta/i }));

    // Log in inside the modal
    fireEvent.change(await screen.findByLabelText(/nickname/i), { target: { value: 'NinjaPanda' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'secret123' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar y ver/i }));

    await waitFor(() =>
      expect(supabase.rpc).toHaveBeenCalledWith('submit_answer', { question_id: '2026-06-25', answer: '206' })
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run src/tests/DailyQuestion.test.jsx`
Expected: FAIL — the guest still sees the "Inicia sesión para participar" banner / no modal.

- [ ] **Step 3: Rewrite `src/components/DailyQuestion.jsx`**

Replace the file with:

```jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import AuthPromptModal from './AuthPromptModal';
import '../index.css';

const DailyQuestion = () => {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [authPromptOpen, setAuthPromptOpen] = useState(false);

  const getTodayString = () => new Date().toISOString().split('T')[0];

  // Fetch the question for everyone (no auth gate).
  useEffect(() => {
    const fetchDailyQuestion = async () => {
      setLoading(true);
      try {
        const { data, error: rpcError } = await supabase.rpc('get_daily_question', { p_date: getTodayString() });
        if (rpcError) throw rpcError;
        setQuestion(data && data.length > 0 ? data[0] : null);
      } catch (err) {
        console.error('Error fetching daily question:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDailyQuestion();
  }, []);

  // Track auth for submit gating (not for showing the question).
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const doSubmit = async (option) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const { data, error: rpcError } = await supabase.rpc('submit_answer', {
        question_id: question.id,
        answer: option,
      });
      if (rpcError) throw rpcError;
      setResult(data);
    } catch (err) {
      console.error('Error submitting answer:', err);
      setError(err.message || 'Ocurrió un error al enviar la respuesta.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    if (!user) {
      setAuthPromptOpen(true);
      return;
    }
    doSubmit(selectedOption);
  };

  const handleAuthenticated = () => {
    setAuthPromptOpen(false);
    doSubmit(selectedOption);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem', fontWeight: '700', color: 'var(--primary)' }}>Cargando Pregunta del Día...</div>;
  }

  if (!question) {
    return (
      <div style={{ textAlign: 'center', padding: '2.5rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: 'none', boxShadow: '0 4px 16px rgba(99,102,241,0.12)', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-muted)', fontWeight: '800' }}>¡Ups! No hay pregunta configurada para hoy.</h3>
      </div>
    );
  }

  return (
    <div className="daily-question-container" style={{
      background: 'white',
      borderRadius: 'var(--radius-md)',
      padding: '2.5rem',
      boxShadow: '0 4px 16px rgba(99,102,241,0.12)',
      marginTop: '2rem',
      border: 'none'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--bg-dark)', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
          💡 Pregunta del Día
        </h2>
        <span style={{ background: '#EEF2FF', color: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', border: 'none', fontWeight: '800', fontSize: '0.9rem' }}>
          {question.subject}
        </span>
      </div>

      {!result ? (
        <>
          <p style={{ fontSize: '1.3rem', color: 'var(--bg-dark)', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '700' }}>
            <span dangerouslySetInnerHTML={{ __html: question.question }} />
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {question.options && question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(opt)}
                style={{
                  padding: '1.1rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: selectedOption === opt ? 'none' : '1px solid var(--border)',
                  background: selectedOption === opt ? 'var(--accent)' : 'white',
                  color: 'var(--bg-dark)',
                  fontSize: '1.1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontWeight: '800',
                  boxShadow: selectedOption === opt ? '0 2px 8px rgba(99,102,241,0.20)' : '0 1px 3px rgba(0,0,0,0.06)'
                }}
              >
                <span style={{ marginRight: '0.75rem', opacity: 0.5 }}>{String.fromCharCode(65 + idx)}.</span> {opt}
              </button>
            ))}
          </div>

          {error && <div style={{ color: '#EF4444', marginBottom: '1.25rem', fontWeight: '800' }}>⚠️ {error}</div>}

          <button
            onClick={handleSubmit}
            disabled={!selectedOption || isSubmitting}
            className="btn-primary"
            style={{ width: '100%', padding: '1.1rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: (!selectedOption || isSubmitting) ? 0.6 : 1 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Respuesta'}
          </button>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '1rem', animation: 'float 2s ease-in-out infinite' }}>
            {result.isCorrect ? '🎉' : '💤'}
          </div>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--bg-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
            {result.isCorrect ? '¡Respuesta Correcta!' : 'Intento Registrado'}
          </h3>
          <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary-dark)', fontWeight: '800' }}>
            Has ganado <strong style={{ color: 'var(--accent)' }}>+{result.pointsEarned} puntos</strong>
          </p>
          {result.bonusAwarded && (
             <p style={{ color: 'var(--accent)', fontWeight: '800', marginBottom: '1rem', background: '#FEF3C7', padding: '0.5rem', borderRadius: '12px', border: 'none' }}>
               🌟 ¡Bono de Sesión Completada! (+2 ptos extras) 🌟
             </p>
          )}
          {!result.isCorrect && result.correctAnswerMessage && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '1.25rem', borderRadius: 'var(--radius-sm)', color: '#B91C1C', fontWeight: '700', textAlign: 'left' }}>
              {result.correctAnswerMessage}
            </div>
          )}
        </div>
      )}

      <AuthPromptModal
        open={authPromptOpen}
        onClose={() => setAuthPromptOpen(false)}
        onAuthenticated={handleAuthenticated}
      />
    </div>
  );
};

export default DailyQuestion;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/DailyQuestion.test.jsx`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/DailyQuestion.jsx src/tests/DailyQuestion.test.jsx
git commit -m "feat: show daily question to guests, gate submit behind auth modal"
```

---

### Task 4: Un-gate the Pregunta del Día nav link

**Files:**
- Modify: `src/components/Layout.jsx`
- Modify: `src/tests/Layout.test.jsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: the `⭐ Pregunta del Día` link renders for all visitors; `🗓 Reto Semanal` stays gated.

- [ ] **Step 1: Add a failing assertion to `Layout.test.jsx`**

In the existing `it('renders guest navigation correctly', ...)` test (where `useAuth` returns `currentUser: null`), add:

```jsx
expect(screen.getByText(/Pregunta del Día/i)).toBeInTheDocument();
expect(screen.queryByText(/Reto Semanal/i)).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run src/tests/Layout.test.jsx`
Expected: FAIL — "Pregunta del Día" not found for a guest.

- [ ] **Step 3: Move the link out of the gate in `Layout.jsx`**

In `src/components/Layout.jsx`, change the gated block. Replace:

```jsx
                            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                            {currentUser && userProfile && (
                                <>
                                    <li><Link to="/pregunta-del-dia">⭐ Pregunta del Día</Link></li>
                                    <li><Link to="/reto-semanal">🗓 Reto Semanal</Link></li>
                                </>
                            )}
```

with:

```jsx
                            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                            <li><Link to="/pregunta-del-dia">⭐ Pregunta del Día</Link></li>
                            {currentUser && userProfile && (
                                <li><Link to="/reto-semanal">🗓 Reto Semanal</Link></li>
                            )}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/Layout.test.jsx`
Expected: PASS.

- [ ] **Step 5: Run the full suite + lint**

Run: `npx vitest run && npm run lint`
Expected: all test files pass; lint clean.

- [ ] **Step 6: Commit**

```bash
git add src/components/Layout.jsx src/tests/Layout.test.jsx
git commit -m "feat: show Pregunta del Día nav link to all visitors"
```

---

## Self-Review

**Spec coverage:**
- Nav un-gate → Task 4. ✓
- Guest sees question/options, no banner → Task 3 (test 1). ✓
- Guest submit opens modal, no result → Task 3 (test 2). ✓
- `<dialog>` modal with compact login + Crear cuenta → Task 1. ✓
- Login-in-popup auto-submits → Task 3 (test 4) + `handleAuthenticated`. ✓
- Signup `?redirect=` → Task 2. ✓
- Tests for DailyQuestion / AuthPromptModal / Register → Tasks 1–3. ✓
- Reto Semanal stays gated → Task 4 (assertion). ✓

**Placeholder scan:** none — every step has concrete code/commands.

**Type/name consistency:** `AuthPromptModal({ open, onClose, onAuthenticated })` used identically in Task 1 (definition) and Task 3 (consumer). RPC names (`get_daily_question`, `submit_answer`) and the `{ question_id, answer }` shape match across tasks and the existing migration. `?redirect=/pregunta-del-dia` string identical in Tasks 1, 2, 3.
