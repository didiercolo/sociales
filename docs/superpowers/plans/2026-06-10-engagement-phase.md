# Engagement Phase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 5 engagement features — scoreboard widget, scoreboard page, tier upsell banner, Simulacro MEP exam, and MEP info page.

**Architecture:** `ScoreboardWidget` and `ScoreboardPage` reuse the existing `onSnapshot` on `system/scoreboard` pattern from `Scoreboard.jsx`. `Simulacro.jsx` is a local-only 3-phase state machine (start → active → results) with no Firebase. `mepBloque` is inherited at sampling time via spread — no data file changes needed. `PruebaMEP` is fully static. All new routes are lazy-loaded.

**Tech Stack:** React 18, React Router v6, Firebase Firestore (onSnapshot), Vitest + Testing Library

---

## File Map

### New files
| Path | Purpose |
|------|---------|
| `src/components/ScoreboardWidget.jsx` | Compact top-5 preview for homepage |
| `src/pages/ScoreboardPage.jsx` | Full top-50 page at `/scoreboard` |
| `src/pages/Simulacro.jsx` | Simulacro orchestrator — owns `phase` state |
| `src/components/Simulacro/SimulacroStart.jsx` | Start screen: subject info + question count + start button |
| `src/components/Simulacro/SimulacroActive.jsx` | Active screen: question, timer, progress bar |
| `src/components/Simulacro/SimulacroResults.jsx` | Results screen: score + bloque breakdown + CTAs |
| `src/pages/PruebaMEP.jsx` | Static MEP info page at `/prueba-mep` |
| `src/tests/ScoreboardWidget.test.jsx` | Tests for ScoreboardWidget |
| `src/tests/ScoreboardPage.test.jsx` | Tests for ScoreboardPage |
| `src/tests/Simulacro.test.jsx` | Tests for all Simulacro components |
| `src/tests/PruebaMEP.test.jsx` | Tests for PruebaMEP |

### Modified files
| Path | Change |
|------|--------|
| `src/App.jsx` | Add routes: `/scoreboard`, `/simulacro/:subject`, `/prueba-mep` |
| `src/pages/SubjectSelection.jsx` | Add `<ScoreboardWidget />` below subject cards section |
| `src/pages/SubjectHome.jsx` | Add tier upsell banner after first bloque; add Simulacro hero button |
| `src/tests/SubjectHome.test.jsx` | Add `vi.mock` for AuthContext + 3 new tests |
| `src/components/Layout.jsx` | Add "🏆 Ranking" and "📋 Prueba MEP" nav links |

### Key codebase facts
- `vitest.setup.js` globally mocks `firebase/firestore`: `onSnapshot: vi.fn(() => () => {})` — override per-test with `vi.mocked(onSnapshot).mockImplementation()`
- `AuthContext` exposes `{ currentUser, userProfile, loading }` — `userProfile` shape: `{ nickname, score, tier, ... }`
- `subjectConfig[subject]` shape: `{ label, icon, accent, bloques: [{ id, label, icon, color }] }`
- `lessonsData[subject]` shape: `{ bloques, lessons: [{ id, title, mepBloque, quiz: [], ... }] }`
- Existing `Scoreboard.jsx` uses `getTierInfo(tier)` → icons `👑/💎/⚔️/🗺️` — use these same icons everywhere for consistency
- Quiz pool sizes: sociales=815, ciencias=20, espanol=139, matematicas=0

---

## Task 1: ScoreboardWidget component

**Files:**
- Create: `src/components/ScoreboardWidget.jsx`
- Create: `src/tests/ScoreboardWidget.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/tests/ScoreboardWidget.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';
import ScoreboardWidget from '../components/ScoreboardWidget';

const mockUsers = [
  { uid: '1', nickname: 'NinjaPanda', tier: 4, score: 200 },
  { uid: '2', nickname: 'EstrellaVerde', tier: 3, score: 180 },
  { uid: '3', nickname: 'LeónDormir', tier: 1, score: 95 },
  { uid: '4', nickname: 'TortugaRápida', tier: 2, score: 60 },
  { uid: '5', nickname: 'PezVolador', tier: 1, score: 40 },
  { uid: '6', nickname: 'ÚltimoLugar', tier: 1, score: 5 },
];

describe('ScoreboardWidget', () => {
  beforeEach(() => {
    vi.mocked(onSnapshot).mockImplementation((_ref, callback) => {
      callback({ exists: () => true, data: () => ({ topUsers: mockUsers }) });
      return () => {};
    });
  });

  const renderWidget = () =>
    render(<MemoryRouter><ScoreboardWidget /></MemoryRouter>);

  it('shows the section heading', () => {
    renderWidget();
    expect(screen.getByText(/Top Estudiantes/i)).toBeInTheDocument();
  });

  it('renders exactly 5 rows (top 5 only)', () => {
    renderWidget();
    expect(screen.getByText('NinjaPanda')).toBeInTheDocument();
    expect(screen.getByText('PezVolador')).toBeInTheDocument();
    expect(screen.queryByText('ÚltimoLugar')).not.toBeInTheDocument();
  });

  it('shows tier badge for top user', () => {
    renderWidget();
    expect(screen.getByText(/👑/)).toBeInTheDocument();
  });

  it('shows score for top user', () => {
    renderWidget();
    expect(screen.getByText(/200 pts/)).toBeInTheDocument();
  });

  it('links to /scoreboard', () => {
    renderWidget();
    const link = screen.getByRole('link', { name: /Ver ranking/i });
    expect(link.getAttribute('href')).toBe('/scoreboard');
  });

  it('shows loading state before data arrives', () => {
    vi.mocked(onSnapshot).mockImplementation(() => () => {});
    renderWidget();
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  });

  it('shows empty state when no users', () => {
    vi.mocked(onSnapshot).mockImplementation((_ref, callback) => {
      callback({ exists: () => false, data: () => null });
      return () => {};
    });
    renderWidget();
    expect(screen.getByText(/no hay usuarios/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run src/tests/ScoreboardWidget.test.jsx
```
Expected: FAIL — "Cannot find module '../components/ScoreboardWidget'"

- [ ] **Step 3: Implement ScoreboardWidget**

```jsx
// src/components/ScoreboardWidget.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const getTierInfo = (tier) => {
  switch (tier) {
    case 4: return { icon: '👑' };
    case 3: return { icon: '💎' };
    case 2: return { icon: '⚔️' };
    default: return { icon: '🗺️' };
  }
};

const ScoreboardWidget = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system', 'scoreboard'), (snap) => {
      setTopUsers(snap.exists() ? (snap.data().topUsers || []).slice(0, 5) : []);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--bg-dark)' }}>
            🏆 Top Estudiantes
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>¿Podés llegar al #1?</p>
        </div>

        <div style={{
          background: 'white', borderRadius: 'var(--radius-md)',
          border: '3px solid var(--bg-dark)', boxShadow: '4px 4px 0 var(--bg-dark)',
          overflow: 'hidden', maxWidth: 480, margin: '0 auto'
        }}>
          {loading ? (
            <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              Cargando...
            </p>
          ) : topUsers.length === 0 ? (
            <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
              Aún no hay usuarios en el ranking
            </p>
          ) : (
            topUsers.map((user, i) => {
              const { icon } = getTierInfo(user.tier);
              return (
                <div key={user.uid || i} style={{
                  display: 'flex', alignItems: 'center',
                  padding: '0.75rem 1.25rem',
                  borderBottom: i < topUsers.length - 1 ? '2px solid var(--bg-dark)' : 'none',
                  background: i === 0 ? 'rgba(79,70,229,0.05)' : 'white'
                }}>
                  <span style={{ width: 28, fontWeight: 900, fontSize: '1rem', color: 'var(--bg-dark)' }}>
                    #{i + 1}
                  </span>
                  <span style={{ fontSize: '1.1rem', marginRight: '0.5rem' }}>{icon}</span>
                  <span style={{ flex: 1, fontWeight: 700, color: 'var(--bg-dark)' }}>{user.nickname}</span>
                  <span style={{
                    background: 'var(--cta)', color: 'white',
                    padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-full)',
                    fontWeight: 800, fontSize: '0.85rem', border: '2px solid var(--bg-dark)'
                  }}>
                    {user.score} pts
                  </span>
                </div>
              );
            })
          )}

          <div style={{
            padding: '0.875rem 1.25rem', borderTop: '2px solid var(--bg-dark)',
            textAlign: 'center', background: '#f8fafc'
          }}>
            <Link to="/scoreboard" style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>
              Ver ranking completo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreboardWidget;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/ScoreboardWidget.test.jsx
```
Expected: 7 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/components/ScoreboardWidget.jsx src/tests/ScoreboardWidget.test.jsx
git commit -m "feat: add ScoreboardWidget component (top-5 preview)"
```

---

## Task 2: ScoreboardPage component

**Files:**
- Create: `src/pages/ScoreboardPage.jsx`
- Create: `src/tests/ScoreboardPage.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/tests/ScoreboardPage.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';
import ScoreboardPage from '../pages/ScoreboardPage';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(() => ({ currentUser: null, userProfile: null })),
}));

const mockUsers = Array.from({ length: 3 }, (_, i) => ({
  uid: String(i + 1),
  nickname: `User${i + 1}`,
  tier: 1,
  score: (3 - i) * 50,
}));

describe('ScoreboardPage', () => {
  beforeEach(() => {
    vi.mocked(onSnapshot).mockImplementation((_ref, callback) => {
      callback({ exists: () => true, data: () => ({ topUsers: mockUsers }) });
      return () => {};
    });
  });

  const renderPage = () => render(<MemoryRouter><ScoreboardPage /></MemoryRouter>);

  it('renders the page heading', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Top 50/i);
  });

  it('renders all 3 users', () => {
    renderPage();
    expect(screen.getByText('User1')).toBeInTheDocument();
    expect(screen.getByText('User3')).toBeInTheDocument();
  });

  it('renders back link to /', () => {
    renderPage();
    const backLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });

  it('shows pinned row for logged-in user not in top-50', () => {
    const { useAuth } = require('../context/AuthContext');
    vi.mocked(useAuth).mockReturnValueOnce({
      currentUser: { uid: 'outside' },
      userProfile: { nickname: 'OutsideUser', score: 3, tier: 1 },
    });
    renderPage();
    expect(screen.getByText(/OutsideUser/)).toBeInTheDocument();
    expect(screen.getByText(/Fuera del top 50/i)).toBeInTheDocument();
  });

  it('does not show pinned row when user is in top-50', () => {
    const { useAuth } = require('../context/AuthContext');
    vi.mocked(useAuth).mockReturnValueOnce({
      currentUser: { uid: '1' },
      userProfile: { nickname: 'User1', score: 150, tier: 1 },
    });
    renderPage();
    expect(screen.queryByText(/Fuera del top 50/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run src/tests/ScoreboardPage.test.jsx
```
Expected: FAIL — "Cannot find module '../pages/ScoreboardPage'"

- [ ] **Step 3: Implement ScoreboardPage**

```jsx
// src/pages/ScoreboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';

const getTierInfo = (tier) => {
  switch (tier) {
    case 4: return { name: 'Maestro', icon: '👑', color: '#fbbf24' };
    case 3: return { name: 'Especialista', icon: '💎', color: '#60a5fa' };
    case 2: return { name: 'Aventurero', icon: '⚔️', color: '#f87171' };
    default: return { name: 'Explorador', icon: '🗺️', color: '#94a3b8' };
  }
};

const UserRow = ({ rank, user, highlight }) => {
  const { icon, color, name } = getTierInfo(user.tier);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '1rem 1.25rem',
      borderRadius: 'var(--radius-sm)',
      background: highlight ? 'rgba(79,70,229,0.06)' : '#F8FAFC',
      border: '3px solid var(--bg-dark)',
      boxShadow: highlight ? '3px 3px 0 var(--primary)' : '3px 3px 0 var(--bg-dark)',
      marginBottom: '0.75rem'
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: highlight ? 'var(--accent)' : '#CBD5E1',
        border: '2px solid var(--bg-dark)', color: 'var(--bg-dark)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, fontSize: '1.1rem', marginRight: '1rem',
        boxShadow: '1px 1px 0 var(--bg-dark)'
      }}>
        {rank}
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--bg-dark)', fontWeight: 800 }}>
          {user.nickname}
        </h4>
        <span style={{ fontSize: '0.8rem', color, fontWeight: 700, textTransform: 'uppercase' }}>
          {icon} {name}
        </span>
      </div>
      <div style={{
        background: 'var(--cta)', border: '2px solid var(--bg-dark)', color: 'white',
        padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
        fontWeight: 800, fontSize: '1rem', boxShadow: '2px 2px 0 var(--bg-dark)'
      }}>
        {user.score} pts
      </div>
    </div>
  );
};

const ScoreboardPage = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, userProfile } = useAuth();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'system', 'scoreboard'), (snap) => {
      setTopUsers(snap.exists() ? (snap.data().topUsers || []) : []);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  const userInTop50 = currentUser && topUsers.some(u => u.uid === currentUser.uid);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 600
      }}>
        ← Volver a Materias
      </Link>

      <h1 style={{
        fontFamily: 'var(--font-heading)', fontSize: '2.5rem',
        color: 'var(--bg-dark)', textAlign: 'center', marginBottom: '0.5rem'
      }}>
        🏆 Top 50 Estudiantes
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 600 }}>
        ¡Respondé preguntas para ganar puntos y subir de rango!
      </p>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 700 }}>Cargando marcador...</p>
      ) : topUsers.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 700 }}>
          Aún no hay puntajes registrados. ¡Sé el primero en contestar!
        </p>
      ) : (
        <>
          {topUsers.map((user, i) => (
            <UserRow key={user.uid || i} rank={i + 1} user={user} highlight={i < 3} />
          ))}
          {currentUser && userProfile && !userInTop50 && (
            <>
              <div style={{ borderTop: '2px dashed var(--border)', margin: '1.5rem 0', opacity: 0.5 }} />
              <div style={{
                padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)',
                background: '#F8FAFC', border: '3px dashed var(--border)',
                display: 'flex', alignItems: 'center', gap: '1rem'
              }}>
                <span style={{ fontWeight: 800, color: 'var(--text-muted)' }}>—</span>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontWeight: 800, color: 'var(--bg-dark)' }}>
                    Tu posición: {userProfile.nickname}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Fuera del top 50
                  </span>
                </div>
                <span style={{ fontWeight: 800, color: 'var(--text-muted)' }}>
                  {userProfile.score} pts
                </span>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ScoreboardPage;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/ScoreboardPage.test.jsx
```
Expected: 5 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/pages/ScoreboardPage.jsx src/tests/ScoreboardPage.test.jsx
git commit -m "feat: add ScoreboardPage (full top-50 with pinned row)"
```

---

## Task 3: Wire scoreboard — route + SubjectSelection + Layout nav

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/pages/SubjectSelection.jsx`
- Modify: `src/components/Layout.jsx`

- [ ] **Step 1: Add `/scoreboard` lazy route to App.jsx**

In `src/App.jsx`, add after line 9 (after `const Login = ...`):

```jsx
const ScoreboardPage = lazy(() => import('./pages/ScoreboardPage'));
```

Add inside the `<Route path="/" element={<Layout />}>` block, after the `login` route:

```jsx
<Route path="scoreboard" element={<ScoreboardPage />} />
```

- [ ] **Step 2: Add ScoreboardWidget to SubjectSelection.jsx**

Add import at the top of `src/pages/SubjectSelection.jsx`:

```jsx
import ScoreboardWidget from '../components/ScoreboardWidget';
```

Add `<ScoreboardWidget />` immediately after the closing `</section>` tag of the `id="materias"` section (after the `</section>` on line ~180), before the `{/* Features */}` comment:

```jsx
            </section>

            <ScoreboardWidget />

            {/* Features */}
```

- [ ] **Step 3: Add "🏆 Ranking" nav link to Layout.jsx**

In `src/components/Layout.jsx`, inside `<ul className="nav-links">`, add before the `{currentUser && userProfile ?` conditional (before line 41):

```jsx
                            <li><Link to="/scoreboard">🏆 Ranking</Link></li>
```

- [ ] **Step 4: Run all tests to check for regressions**

```bash
npx vitest run
```
Expected: all tests pass

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/pages/SubjectSelection.jsx src/components/Layout.jsx
git commit -m "feat: wire scoreboard — /scoreboard route, homepage widget, nav link"
```

---

## Task 4: Tier upsell banner + Simulacro button in SubjectHome

**Files:**
- Modify: `src/pages/SubjectHome.jsx`
- Modify: `src/tests/SubjectHome.test.jsx`

- [ ] **Step 1: Update SubjectHome.test.jsx — add AuthContext mock and new tests**

Replace the full content of `src/tests/SubjectHome.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SubjectHome from '../pages/SubjectHome';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(() => ({ currentUser: null, userProfile: null })),
}));

describe('SubjectHome', () => {
  const renderAt = (path) => render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/:subject" element={<SubjectHome />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>
  );

  it('renders the subject label as h1 for sociales', () => {
    renderAt('/sociales');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Estudios Sociales');
  });

  it('renders bloque headings for sociales', () => {
    renderAt('/sociales');
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/Educación Cívica/)).toBeInTheDocument();
  });

  it('renders lesson cards with LECCIÓN prefix', () => {
    renderAt('/sociales');
    expect(screen.getAllByText(/LECCIÓN \d+/).length).toBeGreaterThan(0);
  });

  it('shows lesson count in hero', () => {
    renderAt('/sociales');
    expect(screen.getByText(/lecciones disponibles/)).toBeInTheDocument();
  });

  it('renders back link to /', () => {
    renderAt('/sociales');
    const links = screen.getAllByRole('link');
    const backLink = links.find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });

  it('renders ciencias subject correctly', () => {
    renderAt('/ciencias');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ciencias');
  });

  it('shows tier upsell banner for anonymous visitor', () => {
    renderAt('/sociales');
    expect(screen.getByText(/¿Querés más\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver planes/i })).toBeInTheDocument();
  });

  it('hides tier banner for tier-2+ user', () => {
    const { useAuth } = require('../context/AuthContext');
    vi.mocked(useAuth).mockReturnValueOnce({
      currentUser: { uid: 'abc' },
      userProfile: { tier: 2, nickname: 'PowerUser' },
    });
    renderAt('/sociales');
    expect(screen.queryByText(/¿Querés más\?/i)).not.toBeInTheDocument();
  });

  it('renders simulacro button linking to /simulacro/:subject', () => {
    renderAt('/sociales');
    const btn = screen.getByRole('link', { name: /Simulacro MEP/i });
    expect(btn.getAttribute('href')).toBe('/simulacro/sociales');
  });
});
```

- [ ] **Step 2: Run tests to see new ones fail**

```bash
npx vitest run src/tests/SubjectHome.test.jsx
```
Expected: "shows tier upsell banner", "hides tier banner", "renders simulacro button" FAIL

- [ ] **Step 3: Replace SubjectHome.jsx with updated version**

```jsx
// src/pages/SubjectHome.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { lessonsData } from '../data/lessonsData';
import LessonCard from '../components/LessonCard';
import { useAuth } from '../context/AuthContext';

const SubjectHome = () => {
    const { subject } = useParams();
    const config = subjectConfig[subject];
    const { currentUser, userProfile } = useAuth();

    if (!config) {
        return <Navigate to="/" replace />;
    }

    const { bloques, lessons } = lessonsData[subject];
    const showBanner = !currentUser || !userProfile || userProfile.tier < 2;

    return (
        <div className="subject-home container" style={{ padding: '3rem 1.5rem' }}>
            <Link to="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: '600'
            }}>
                <span>&#8592;</span> Volver a Materias
            </Link>

            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>
                    {config.icon}
                </span>
                <h1 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '3rem',
                    color: config.accent, marginBottom: '0.5rem'
                }}>
                    {config.label}
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    {lessons.length} lecciones disponibles
                </p>
                <Link
                    to={`/simulacro/${subject}`}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'var(--primary)', color: 'white',
                        padding: '0.6rem 1.4rem', borderRadius: 'var(--radius-full)',
                        fontWeight: 700, fontSize: '0.95rem',
                        border: '2px solid var(--bg-dark)',
                        boxShadow: '3px 3px 0 var(--bg-dark)',
                        textDecoration: 'none'
                    }}
                >
                    🎯 Practicar Simulacro MEP
                </Link>
            </header>

            {bloques.map((bloque, bloqueIdx) => {
                const bloqueLessons = lessons.filter(l => l.mepBloque === bloque.id);
                if (bloqueLessons.length === 0) return null;
                return (
                    <React.Fragment key={bloque.id}>
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)', fontSize: '1.75rem',
                                color: bloque.color, marginBottom: '1.5rem',
                                display: 'flex', alignItems: 'center', gap: '0.75rem'
                            }}>
                                <span>{bloque.icon}</span> {bloque.label}
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {bloqueLessons.map((lesson, idx) => (
                                    <LessonCard
                                        key={lesson.id}
                                        id={lesson.id}
                                        title={lesson.title}
                                        description={lesson.description}
                                        subject={subject}
                                        bloqueColor={bloque.color}
                                        lessonNumber={idx + 1}
                                    />
                                ))}
                            </div>
                        </section>

                        {bloqueIdx === 0 && showBanner && (
                            <div style={{
                                background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                                border: '3px solid var(--bg-dark)',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '4px 4px 0 var(--bg-dark)',
                                padding: '1.5rem 2rem',
                                marginBottom: '3rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--bg-dark)', marginBottom: '0.25rem' }}>
                                        🚀 ¿Querés más?
                                    </p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                        Con Aventurero obtenés acceso completo + puntos dobles en el ranking.
                                    </p>
                                </div>
                                <Link
                                    to="/coming-soon"
                                    style={{
                                        background: 'var(--primary)', color: 'white',
                                        padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)',
                                        fontWeight: 700, fontSize: '0.9rem',
                                        border: '2px solid var(--bg-dark)',
                                        boxShadow: '2px 2px 0 var(--bg-dark)',
                                        textDecoration: 'none', whiteSpace: 'nowrap'
                                    }}
                                >
                                    Ver planes →
                                </Link>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SubjectHome;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/SubjectHome.test.jsx
```
Expected: 9 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/pages/SubjectHome.jsx src/tests/SubjectHome.test.jsx
git commit -m "feat: add tier upsell banner and simulacro button to SubjectHome"
```

---

## Task 5: SimulacroStart component

**Files:**
- Create: `src/components/Simulacro/SimulacroStart.jsx`
- Create: `src/tests/Simulacro.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/tests/Simulacro.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SimulacroStart from '../components/Simulacro/SimulacroStart';

const mockConfig = {
  label: 'Estudios Sociales',
  icon: '🌍',
  accent: '#10B981',
  bloques: [
    { id: 'geografia-historia', label: 'Geografía e Historia', icon: '🗺️', color: '#0284c7' },
    { id: 'educacion-civica', label: 'Educación Cívica', icon: '🏛️', color: '#7c3aed' },
  ],
};

describe('SimulacroStart', () => {
  const defaultProps = {
    subject: 'sociales',
    config: mockConfig,
    questionCount: 60,
    bloqueBreakdown: [
      { id: 'geografia-historia', label: 'Geografía e Historia', count: 40 },
      { id: 'educacion-civica', label: 'Educación Cívica', count: 20 },
    ],
    onStart: vi.fn(),
  };

  it('renders subject name', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
  });

  it('shows 60 preguntas when full pool available', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/60 preguntas/)).toBeInTheDocument();
  });

  it('shows actual count when fewer than 60 available', () => {
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, questionCount: 20 }} /></MemoryRouter>);
    expect(screen.getByText(/20 preguntas disponibles/i)).toBeInTheDocument();
  });

  it('start button is disabled when 0 questions', () => {
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, questionCount: 0 }} /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /Sin preguntas/i })).toBeDisabled();
  });

  it('calls onStart when button clicked', () => {
    const onStart = vi.fn();
    render(<MemoryRouter><SimulacroStart {...{ ...defaultProps, onStart }} /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Comenzar/i }));
    expect(onStart).toHaveBeenCalledOnce();
  });

  it('renders bloque breakdown with counts', () => {
    render(<MemoryRouter><SimulacroStart {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/40/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: FAIL — "Cannot find module '../components/Simulacro/SimulacroStart'"

- [ ] **Step 3: Create directory and implement SimulacroStart**

```bash
mkdir -p src/components/Simulacro
```

```jsx
// src/components/Simulacro/SimulacroStart.jsx
import React from 'react';

const SimulacroStart = ({ config, questionCount, bloqueBreakdown, onStart }) => {
  const displayCount = Math.min(questionCount, 60);
  const isFull = questionCount >= 60;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>{config.icon}</span>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: config.accent, marginBottom: '0.5rem' }}>
        {config.label}
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>
        Simulacro MEP
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>
          📋 {isFull ? '60 preguntas' : `${displayCount} preguntas disponibles`}
        </span>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>⏱ 120 minutos</span>
        <span style={{ fontWeight: 700, color: 'var(--bg-dark)' }}>✅ Selección única A/B/C/D</span>
      </div>

      {bloqueBreakdown.length > 0 && (
        <div style={{
          background: '#F8FAFC', border: '2px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left'
        }}>
          <p style={{ fontWeight: 800, color: 'var(--bg-dark)', marginBottom: '0.75rem' }}>
            Distribución por bloque:
          </p>
          {bloqueBreakdown.map(b => (
            <div key={b.id} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '0.4rem 0', borderBottom: '1px solid var(--border)',
              color: 'var(--text-muted)', fontWeight: 600
            }}>
              <span>{b.label}</span>
              <span style={{ fontWeight: 800, color: 'var(--bg-dark)' }}>{b.count} preguntas</span>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onStart}
        disabled={displayCount === 0}
        style={{
          background: displayCount === 0 ? '#CBD5E1' : 'var(--primary)',
          color: 'white', border: '3px solid var(--bg-dark)',
          borderRadius: 'var(--radius-full)', padding: '0.875rem 2.5rem',
          fontSize: '1.1rem', fontWeight: 800,
          cursor: displayCount === 0 ? 'not-allowed' : 'pointer',
          boxShadow: displayCount === 0 ? 'none' : '4px 4px 0 var(--bg-dark)'
        }}
      >
        {displayCount === 0 ? 'Sin preguntas disponibles' : '▶ Comenzar Simulacro'}
      </button>
    </div>
  );
};

export default SimulacroStart;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: 6 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/components/Simulacro/SimulacroStart.jsx src/tests/Simulacro.test.jsx
git commit -m "feat: add SimulacroStart component"
```

---

## Task 6: SimulacroActive component

**Files:**
- Create: `src/components/Simulacro/SimulacroActive.jsx`
- Modify: `src/tests/Simulacro.test.jsx`

- [ ] **Step 1: Add failing tests — append to `src/tests/Simulacro.test.jsx`**

```jsx
import SimulacroActive from '../components/Simulacro/SimulacroActive';

const mockQuestions = [
  {
    question: '¿Cuál es la capital de Costa Rica?',
    options: ['San José', 'Liberia', 'Cartago', 'Alajuela'],
    correct: 0,
    mepBloque: 'geografia-historia'
  },
  {
    question: '¿Qué es la democracia?',
    options: ['Sistema de gobierno', 'Tipo de clima', 'Clase de animal', 'Forma de moneda'],
    correct: 0,
    mepBloque: 'educacion-civica'
  }
];

describe('SimulacroActive', () => {
  it('renders the first question', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText(/¿Cuál es la capital/)).toBeInTheDocument();
  });

  it('renders all 4 answer options', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText('San José')).toBeInTheDocument();
    expect(screen.getByText('Liberia')).toBeInTheDocument();
    expect(screen.getByText('Cartago')).toBeInTheDocument();
    expect(screen.getByText('Alajuela')).toBeInTheDocument();
  });

  it('"Siguiente" button is disabled before selecting an option', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByRole('button', { name: /Siguiente/i })).toBeDisabled();
  });

  it('enables "Siguiente" after selecting an option', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    expect(screen.getByRole('button', { name: /Siguiente/i })).not.toBeDisabled();
  });

  it('advances to next question when "Siguiente" clicked', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    expect(screen.getByText(/¿Qué es la democracia\?/)).toBeInTheDocument();
  });

  it('shows "Finalizar" button on last question', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    expect(screen.getByRole('button', { name: /Finalizar/i })).toBeInTheDocument();
  });

  it('calls onFinish with answers object when Finalizar clicked', () => {
    const onFinish = vi.fn();
    render(<SimulacroActive questions={mockQuestions} onFinish={onFinish} />);
    fireEvent.click(screen.getByText('San José'));
    fireEvent.click(screen.getByRole('button', { name: /Siguiente/i }));
    fireEvent.click(screen.getByText('Sistema de gobierno'));
    fireEvent.click(screen.getByRole('button', { name: /Finalizar/i }));
    expect(onFinish).toHaveBeenCalledOnce();
    expect(onFinish.mock.calls[0][0]).toEqual({ 0: 0, 1: 0 });
  });

  it('shows progress bar', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows timer in MM:SS format', () => {
    render(<SimulacroActive questions={mockQuestions} onFinish={vi.fn()} />);
    expect(screen.getByText(/\d{2}:\d{2}/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify new tests fail**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: SimulacroActive tests FAIL

- [ ] **Step 3: Implement SimulacroActive**

```jsx
// src/components/Simulacro/SimulacroActive.jsx
import React, { useState, useEffect, useRef } from 'react';

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const SimulacroActive = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [displayTime, setDisplayTime] = useState(120 * 60);
  const timerRef = useRef(120 * 60);
  const answersRef = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current -= 1;
      setDisplayTime(timerRef.current);
      if (timerRef.current <= 0) {
        clearInterval(interval);
        onFinish(answersRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const selectOption = (optionIndex) => {
    const updated = { ...answers, [currentIndex]: optionIndex };
    setAnswers(updated);
    answersRef.current = updated;
  };

  const advance = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      onFinish(answersRef.current);
    }
  };

  const question = questions[currentIndex];
  const selected = answers[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress = (currentIndex / questions.length) * 100;
  const timerRed = displayTime < 60;

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          Pregunta {currentIndex + 1} / {questions.length}
        </span>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: timerRed ? '#dc2626' : 'var(--bg-dark)' }}>
          ⏱ {formatTime(displayTime)}
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: 8, background: '#E2E8F0', borderRadius: 4, marginBottom: '2rem', overflow: 'hidden' }}
      >
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', transition: 'width 0.3s' }} />
      </div>

      <div style={{
        background: 'white', border: '3px solid var(--bg-dark)',
        borderRadius: 'var(--radius-md)', padding: '1.5rem',
        boxShadow: '4px 4px 0 var(--bg-dark)', marginBottom: '1.5rem'
      }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg-dark)', margin: 0 }}>
          {question.question}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => selectOption(i)}
            style={{
              padding: '0.875rem 1.25rem', textAlign: 'left',
              background: selected === i ? 'var(--primary)' : 'white',
              color: selected === i ? 'white' : 'var(--bg-dark)',
              border: `3px solid ${selected === i ? 'var(--primary)' : 'var(--bg-dark)'}`,
              borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '1rem',
              cursor: 'pointer', boxShadow: '2px 2px 0 var(--bg-dark)'
            }}
          >
            <span style={{ marginRight: '0.75rem', fontWeight: 800 }}>{String.fromCharCode(65 + i)}.</span>
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={advance}
        disabled={selected === undefined}
        style={{
          width: '100%', padding: '0.875rem',
          background: selected === undefined ? '#CBD5E1' : 'var(--cta)',
          color: 'white', border: '3px solid var(--bg-dark)',
          borderRadius: 'var(--radius-full)', fontSize: '1.1rem', fontWeight: 800,
          cursor: selected === undefined ? 'not-allowed' : 'pointer',
          boxShadow: selected === undefined ? 'none' : '3px 3px 0 var(--bg-dark)'
        }}
      >
        {isLast ? 'Finalizar' : 'Siguiente →'}
      </button>
    </div>
  );
};

export default SimulacroActive;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: all 15 tests pass (6 SimulacroStart + 9 SimulacroActive)

- [ ] **Step 5: Commit**

```bash
git add src/components/Simulacro/SimulacroActive.jsx src/tests/Simulacro.test.jsx
git commit -m "feat: add SimulacroActive component with timer and progress"
```

---

## Task 7: SimulacroResults component

**Files:**
- Create: `src/components/Simulacro/SimulacroResults.jsx`
- Modify: `src/tests/Simulacro.test.jsx`

- [ ] **Step 1: Add failing tests — append to `src/tests/Simulacro.test.jsx`**

```jsx
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const resultsQuestions = [
  { question: 'Q1', options: ['A','B','C','D'], correct: 0, mepBloque: 'geografia-historia' },
  { question: 'Q2', options: ['A','B','C','D'], correct: 1, mepBloque: 'geografia-historia' },
  { question: 'Q3', options: ['A','B','C','D'], correct: 2, mepBloque: 'educacion-civica' },
];
// Q1 correct (answered 0), Q2 wrong (answered 0), Q3 correct (answered 2) → 2/3
const resultsAnswers = { 0: 0, 1: 0, 2: 2 };

describe('SimulacroResults', () => {
  const defaultProps = {
    questions: resultsQuestions,
    answers: resultsAnswers,
    timeUsed: 3600,
    subject: 'sociales',
    onRestart: vi.fn(),
  };

  it('shows correct score out of total', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/2 \/ 3/)).toBeInTheDocument();
  });

  it('shows percentage', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/67%/)).toBeInTheDocument();
  });

  it('shows time used as MM:SS', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/60:00/)).toBeInTheDocument();
  });

  it('shows bloque breakdown with both bloques', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
    expect(screen.getByText(/Educación Cívica/)).toBeInTheDocument();
  });

  it('calls onRestart when retry button clicked', () => {
    const onRestart = vi.fn();
    render(<MemoryRouter><SimulacroResults {...{ ...defaultProps, onRestart }} /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /Intentar de nuevo/i }));
    expect(onRestart).toHaveBeenCalledOnce();
  });

  it('shows back link to subject page', () => {
    render(<MemoryRouter><SimulacroResults {...defaultProps} /></MemoryRouter>);
    const link = screen.getByRole('link', { name: /Volver a/i });
    expect(link.getAttribute('href')).toBe('/sociales');
  });
});
```

- [ ] **Step 2: Run test to verify new tests fail**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: SimulacroResults tests FAIL

- [ ] **Step 3: Implement SimulacroResults**

```jsx
// src/components/Simulacro/SimulacroResults.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { subjectConfig } from '../../data/subjectConfig';

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const SimulacroResults = ({ questions, answers, timeUsed, subject, onRestart }) => {
  const config = subjectConfig[subject];
  const total = questions.length;
  const correct = questions.filter((q, i) => answers[i] === q.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const bloqueStats = config.bloques.map(bloque => {
    const bQuestions = questions.filter(q => q.mepBloque === bloque.id);
    const bCorrect = bQuestions.filter(q => answers[questions.indexOf(q)] === q.correct).length;
    return { ...bloque, total: bQuestions.length, correct: bCorrect };
  }).filter(b => b.total > 0);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>
        Resultados
      </h1>

      <div style={{
        background: 'white', border: '3px solid var(--bg-dark)',
        borderRadius: 'var(--radius-md)', boxShadow: '4px 4px 0 var(--bg-dark)',
        padding: '2rem', margin: '1.5rem 0'
      }}>
        <p style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', margin: '0 0 0.25rem' }}>
          {correct} / {total}
        </p>
        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--bg-dark)', margin: '0 0 0.5rem' }}>
          {pct}%
        </p>
        <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>⏱ Tiempo: {formatTime(timeUsed)}</p>
      </div>

      {bloqueStats.length > 0 && (
        <div style={{
          background: '#F8FAFC', border: '2px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left'
        }}>
          <p style={{ fontWeight: 800, marginBottom: '0.75rem', color: 'var(--bg-dark)' }}>
            Resultados por bloque:
          </p>
          {bloqueStats.map(b => (
            <div key={b.id} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '0.5rem 0', borderBottom: '1px solid var(--border)',
              color: 'var(--text-muted)', fontWeight: 600
            }}>
              <span>{b.label}</span>
              <span style={{ fontWeight: 800, color: b.correct === b.total ? '#16a34a' : 'var(--bg-dark)' }}>
                {b.correct} / {b.total} {b.correct === b.total ? '✅' : ''}
              </span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onRestart}
          style={{
            background: 'var(--primary)', color: 'white',
            border: '3px solid var(--bg-dark)', borderRadius: 'var(--radius-full)',
            padding: '0.75rem 1.75rem', fontSize: '1rem', fontWeight: 800,
            cursor: 'pointer', boxShadow: '3px 3px 0 var(--bg-dark)'
          }}
        >
          🔄 Intentar de nuevo
        </button>
        <Link
          to={`/${subject}`}
          style={{
            background: 'white', color: 'var(--bg-dark)',
            border: '3px solid var(--bg-dark)', borderRadius: 'var(--radius-full)',
            padding: '0.75rem 1.75rem', fontSize: '1rem', fontWeight: 800,
            textDecoration: 'none', boxShadow: '3px 3px 0 var(--bg-dark)'
          }}
        >
          📚 Volver a {config.label}
        </Link>
      </div>
    </div>
  );
};

export default SimulacroResults;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: all 21 tests pass (6 + 9 + 6)

- [ ] **Step 5: Commit**

```bash
git add src/components/Simulacro/SimulacroResults.jsx src/tests/Simulacro.test.jsx
git commit -m "feat: add SimulacroResults component"
```

---

## Task 8: Simulacro.jsx orchestrator + route

**Files:**
- Create: `src/pages/Simulacro.jsx`
- Modify: `src/App.jsx`
- Modify: `src/tests/Simulacro.test.jsx`

- [ ] **Step 1: Add failing tests — append to `src/tests/Simulacro.test.jsx`**

```jsx
import Simulacro from '../pages/Simulacro';

describe('Simulacro page', () => {
  const renderAt = (subject) =>
    render(
      <MemoryRouter initialEntries={[`/simulacro/${subject}`]}>
        <Routes>
          <Route path="/simulacro/:subject" element={<Simulacro />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>
    );

  it('shows start screen for sociales', () => {
    renderAt('sociales');
    expect(screen.getByRole('button', { name: /Comenzar Simulacro/i })).toBeInTheDocument();
  });

  it('redirects to / for unknown subject', () => {
    renderAt('fisica');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows disabled button for matematicas (0 quiz items)', () => {
    renderAt('matematicas');
    expect(screen.getByRole('button', { name: /Sin preguntas/i })).toBeDisabled();
  });

  it('transitions to active screen when start clicked', () => {
    renderAt('sociales');
    fireEvent.click(screen.getByRole('button', { name: /Comenzar Simulacro/i }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify new tests fail**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: Simulacro page tests FAIL

- [ ] **Step 3: Implement Simulacro.jsx**

```jsx
// src/pages/Simulacro.jsx
import React, { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { lessonsData } from '../data/lessonsData';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const MAX_QUESTIONS = 60;

const sampleQuestions = (subject) => {
  const { lessons } = lessonsData[subject];
  const all = lessons.flatMap(lesson =>
    (lesson.quiz || []).map(q => ({ ...q, mepBloque: lesson.mepBloque }))
  );
  return [...all].sort(() => Math.random() - 0.5).slice(0, MAX_QUESTIONS);
};

const getBloqueBreakdown = (questions, config) =>
  config.bloques
    .map(b => ({ id: b.id, label: b.label, count: questions.filter(q => q.mepBloque === b.id).length }))
    .filter(b => b.count > 0);

const Simulacro = () => {
  const { subject } = useParams();
  const config = subjectConfig[subject];

  if (!config) return <Navigate to="/" replace />;

  const [phase, setPhase] = useState('start');
  const [answers, setAnswers] = useState({});
  const [timeUsed, setTimeUsed] = useState(0);
  const questionsRef = useRef(sampleQuestions(subject));
  const startTimeRef = useRef(null);

  const handleStart = () => {
    startTimeRef.current = Date.now();
    setPhase('active');
  };

  const handleFinish = (finalAnswers) => {
    const elapsed = startTimeRef.current
      ? Math.floor((Date.now() - startTimeRef.current) / 1000)
      : 0;
    setAnswers(finalAnswers);
    setTimeUsed(elapsed);
    setPhase('results');
  };

  const handleRestart = () => {
    questionsRef.current = sampleQuestions(subject);
    startTimeRef.current = null;
    setAnswers({});
    setPhase('start');
  };

  const questions = questionsRef.current;

  if (phase === 'start') {
    return (
      <SimulacroStart
        subject={subject}
        config={config}
        questionCount={questions.length}
        bloqueBreakdown={getBloqueBreakdown(questions, config)}
        onStart={handleStart}
      />
    );
  }

  if (phase === 'active') {
    return <SimulacroActive questions={questions} onFinish={handleFinish} />;
  }

  return (
    <SimulacroResults
      questions={questions}
      answers={answers}
      timeUsed={timeUsed}
      subject={subject}
      onRestart={handleRestart}
    />
  );
};

export default Simulacro;
```

- [ ] **Step 4: Add `/simulacro/:subject` route to App.jsx**

Add lazy import in `src/App.jsx` after the existing lazy imports:

```jsx
const Simulacro = lazy(() => import('./pages/Simulacro'));
```

Add route inside `<Route path="/" element={<Layout />}>`:

```jsx
<Route path="simulacro/:subject" element={<Simulacro />} />
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```
Expected: all 25 tests pass

- [ ] **Step 6: Commit**

```bash
git add src/pages/Simulacro.jsx src/App.jsx src/tests/Simulacro.test.jsx
git commit -m "feat: add Simulacro orchestrator page + /simulacro/:subject route"
```

---

## Task 9: PruebaMEP page + nav links + route

**Files:**
- Create: `src/pages/PruebaMEP.jsx`
- Create: `src/tests/PruebaMEP.test.jsx`
- Modify: `src/App.jsx`
- Modify: `src/components/Layout.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/tests/PruebaMEP.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PruebaMEP from '../pages/PruebaMEP';

describe('PruebaMEP', () => {
  const renderPage = () => render(<MemoryRouter><PruebaMEP /></MemoryRouter>);

  it('renders the hero heading', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Prueba MEP/i);
  });

  it('shows exam format info', () => {
    renderPage();
    expect(screen.getByText(/120 minutos/)).toBeInTheDocument();
    expect(screen.getByText(/60 preguntas/)).toBeInTheDocument();
  });

  it('renders all 4 subject accordions', () => {
    renderPage();
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
    expect(screen.getByText('Ciencias')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('Matemática')).toBeInTheDocument();
  });

  it('accordion is collapsed by default', () => {
    renderPage();
    expect(screen.queryByText(/Geografía e Historia/)).not.toBeInTheDocument();
  });

  it('expands accordion when clicked and shows bloque list', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.getByText(/Geografía e Historia/)).toBeInTheDocument();
  });

  it('collapses when clicked again', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.queryByText(/Geografía e Historia/)).not.toBeInTheDocument();
  });

  it('shows Practicar Simulacro link inside expanded accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    const link = screen.getByRole('link', { name: /Practicar Simulacro/i });
    expect(link.getAttribute('href')).toBe('/simulacro/sociales');
  });

  it('renders back link to /', () => {
    renderPage();
    const backLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/');
    expect(backLink).toBeTruthy();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx vitest run src/tests/PruebaMEP.test.jsx
```
Expected: FAIL — "Cannot find module '../pages/PruebaMEP'"

- [ ] **Step 3: Implement PruebaMEP.jsx**

```jsx
// src/pages/PruebaMEP.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';

const subjectOrder = ['sociales', 'ciencias', 'espanol', 'matematicas'];

const subjectNotes = {
  espanol: 'La prueba tiene dos partes: Comprensión Lectora (50%) y Producción de Texto Expositivo (50%, mínimo 200 palabras).',
};

const PruebaMEP = () => {
  const [open, setOpen] = useState({});

  const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: 720 }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 600
      }}>
        ← Volver a Materias
      </Link>

      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>
        📋 La Prueba MEP — ¿Cómo funciona?
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
        La Prueba de Bachillerato del MEP evalúa los contenidos de 6to grado en 4 materias.
        Cada prueba tiene <strong>120 minutos</strong>, <strong>60 preguntas</strong> de selección única (A/B/C/D).
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {subjectOrder.map(subjectId => {
          const config = subjectConfig[subjectId];
          const isOpen = !!open[subjectId];
          return (
            <div key={subjectId} style={{
              border: '3px solid var(--bg-dark)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '3px 3px 0 var(--bg-dark)'
            }}>
              <button
                onClick={() => toggle(subjectId)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 1.5rem',
                  background: isOpen ? config.accent : 'white',
                  color: isOpen ? 'white' : 'var(--bg-dark)',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800
                }}
              >
                <span>{config.icon} {config.label}</span>
                <span style={{ fontSize: '1.2rem' }}>{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div style={{ padding: '1.25rem 1.5rem', background: '#F8FAFC' }}>
                  <ul style={{ margin: '0 0 1rem', paddingLeft: '1.25rem' }}>
                    {config.bloques.map(b => (
                      <li key={b.id} style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <span style={{ marginRight: '0.5rem' }}>{b.icon}</span>
                        <strong style={{ color: 'var(--bg-dark)' }}>{b.label}</strong>
                      </li>
                    ))}
                  </ul>
                  {subjectNotes[subjectId] && (
                    <p style={{
                      background: '#EFF6FF', border: '2px solid #BFDBFE',
                      borderRadius: 'var(--radius-sm)', padding: '0.75rem',
                      color: '#1e40af', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem'
                    }}>
                      ℹ️ {subjectNotes[subjectId]}
                    </p>
                  )}
                  <Link
                    to={`/simulacro/${subjectId}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'var(--primary)', color: 'white',
                      padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)',
                      fontWeight: 700, fontSize: '0.9rem',
                      border: '2px solid var(--bg-dark)',
                      boxShadow: '2px 2px 0 var(--bg-dark)',
                      textDecoration: 'none'
                    }}
                  >
                    🎯 Practicar Simulacro
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PruebaMEP;
```

- [ ] **Step 4: Add `/prueba-mep` route to App.jsx**

Add lazy import in `src/App.jsx`:

```jsx
const PruebaMEP = lazy(() => import('./pages/PruebaMEP'));
```

Add route inside `<Route path="/" element={<Layout />}>`:

```jsx
<Route path="prueba-mep" element={<PruebaMEP />} />
```

- [ ] **Step 5: Add "📋 Prueba MEP" nav link to Layout.jsx**

In `src/components/Layout.jsx`, inside `<ul className="nav-links">`, add after the "🏆 Ranking" link (which was added in Task 3):

```jsx
                            <li><Link to="/prueba-mep">📋 Prueba MEP</Link></li>
```

- [ ] **Step 6: Run tests to verify they pass**

```bash
npx vitest run src/tests/PruebaMEP.test.jsx
```
Expected: 8 tests pass

- [ ] **Step 7: Run full test suite**

```bash
npx vitest run
```
Expected: all tests pass

- [ ] **Step 8: Commit**

```bash
git add src/pages/PruebaMEP.jsx src/tests/PruebaMEP.test.jsx src/App.jsx src/components/Layout.jsx
git commit -m "feat: add PruebaMEP info page, /prueba-mep route, nav links"
```

---

## Self-Review

### Spec coverage check
- Feature 1 (Scoreboard Widget + Page): Tasks 1, 2, 3 — ✅ widget on homepage, full page, nav link, pinned row
- Feature 2 (Soft Tier Banner): Task 4 — ✅ SubjectHome only, after first bloque, hidden for tier 2+
- Feature 3 (mepBloque on quiz data): Handled via spread in `sampleQuestions` (Task 8) — ✅ every quiz item gets `mepBloque` at sampling time, no data file changes needed
- Feature 4 (Simulacro): Tasks 5–8 — ✅ Start/Active/Results, route, SubjectHome button, matematicas graceful 0-question state
- Feature 5 (PruebaMEP): Task 9 — ✅ static page, accordions, simulacro links, nav link

### Edge cases covered
- Unknown subject → `<Navigate to="/" replace />`
- Matematicas (0 quiz items) → `sampleQuestions` returns `[]`, `SimulacroStart` disables button
- Ciencias (20 quiz items) → shows "20 preguntas disponibles" (`questionCount < 60`)
- Timer expires → `onFinish(answersRef.current)` via `setInterval`
- User outside top-50 → pinned row in ScoreboardPage
- Anonymous visitor → tier banner visible; tier 2+ → banner hidden

### Consistency
- `getTierInfo` duplicated in `ScoreboardWidget` and `ScoreboardPage` — intentional (YAGNI, both files small)
- `formatTime` duplicated in `SimulacroActive` and `SimulacroResults` — intentional
- `sampleQuestions` in `Simulacro.jsx` spreads `mepBloque` from lesson onto each quiz item — matches spec code exactly
