# Engagement Phase Design

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Maximize user acquisition and daily engagement before the October 2026 MEP exam season — no paywalls, everything free, but tier upsell awareness seeded throughout.

**Strategy:** Grow the audience first, monetize later. All content remains fully accessible to every visitor. The scoreboard drives viral sharing; the Simulacro drives deep exam prep engagement; soft tier banners prime users for future upgrades without blocking anything.

**Tech Stack:** React + Vite + Firebase (Firestore `onSnapshot` for scoreboard), React Router v6, Vitest + Testing Library.

---

## Product Vision Context

EduPortal CR is the leading digital study companion for Costa Rican primary school students (4th–6th grade) preparing for the MEP national exams. This phase prioritizes user growth over revenue. All 5 features ship together as one "Engagement Phase" release.

**Current state (already built):**
- Flat subject navigation: `/sociales`, `/ciencias`, `/espanol`, `/matematicas`
- All 4 subjects with lessons organized by MEP bloque
- Firebase Auth (nickname-based registration), Firestore user profiles
- `submitAnswer` Cloud Function (server-side scoring)
- `updateScoreboard` Cloud Function (top-50 in `system/scoreboard`)
- `Scoreboard.jsx` and `DailyQuestion.jsx` components exist but are not wired into routing

---

## Architecture

### New files
| File | Purpose |
|------|---------|
| `src/components/ScoreboardWidget.jsx` | Compact top-5 preview for homepage |
| `src/pages/ScoreboardPage.jsx` | Full top-50 page at `/scoreboard` |
| `src/pages/Simulacro.jsx` | Simulacro page — manages start/active/results state |
| `src/components/Simulacro/SimulacroStart.jsx` | Exam info + start button |
| `src/components/Simulacro/SimulacroActive.jsx` | Question + timer + progress bar |
| `src/components/Simulacro/SimulacroResults.jsx` | Score + bloque breakdown |
| `src/pages/PruebaMEP.jsx` | Static MEP info page at `/prueba-mep` |
| `src/tests/ScoreboardWidget.test.jsx` | Tests for ScoreboardWidget |
| `src/tests/ScoreboardPage.test.jsx` | Tests for ScoreboardPage |
| `src/tests/Simulacro.test.jsx` | Tests for Simulacro flow |
| `src/tests/PruebaMEP.test.jsx` | Tests for PruebaMEP page |

### Modified files
| File | Change |
|------|--------|
| `src/pages/SubjectSelection.jsx` | Add `<ScoreboardWidget />` below subject cards |
| `src/pages/SubjectHome.jsx` | Add "Practicar Simulacro MEP" button in hero; add tier upsell banner after first bloque |
| `src/components/Layout.jsx` | Add "🏆 Ranking" and "📋 Prueba MEP" nav links |
| `src/App.jsx` | Add routes: `/scoreboard`, `/simulacro/:subject`, `/prueba-mep` |
| `src/data/lessons/sociales.js` | Stamp `mepBloque` on all `quiz[]` items |
| `src/data/lessons/ciencias.js` | Stamp `mepBloque` on all `quiz[]` items |
| `src/data/lessons/espanol.js` | Stamp `mepBloque` on all `quiz[]` items |
| `src/data/lessons/matematicas.js` | Stamp `mepBloque` on all `quiz[]` items |

### New routes
```
/scoreboard          → ScoreboardPage (public, no auth)
/simulacro/:subject  → Simulacro (public, no auth)
/prueba-mep          → PruebaMEP (public, no auth, static)
```

### Dependency order
1. MEP bloque labels on quiz data (unblocks Simulacro)
2. Scoreboard widget + page (independent)
3. Simulacro mode (depends on #1)
4. SubjectHome upsell banner (independent)
5. MEP info page + nav links (independent, but links to Simulacro)

---

## Feature 1: Scoreboard Widget + Full Page

### ScoreboardWidget (homepage)
- Placed in `SubjectSelection.jsx` below the 4 subject cards
- Reads `system/scoreboard` Firestore doc (single document read — already populated by Cloud Function)
- Displays top 5 users: rank number, nickname, tier badge emoji, score
- "Ver ranking completo →" link at bottom → `/scoreboard`
- Visible to all users including non-logged-in visitors
- Shows a loading skeleton while Firestore resolves; shows "Aún no hay usuarios en el ranking" if empty

**Tier badge emojis:**
| Tier | Badge |
|------|-------|
| 1 (Explorador) | 🌱 |
| 2 (Aventurero) | ⚡ |
| 3 (Especialista) | 🔬 |
| 4 (Maestro) | 🏆 |

### ScoreboardPage (`/scoreboard`)
- Full top-50 list
- Real-time via `onSnapshot` listener on `system/scoreboard` — no manual reload needed
- Same row format as widget: rank, nickname, tier badge, score
- If logged-in user is not in top 50, a pinned row appears below a divider showing their nickname and score: "Tu posición: NinjaPanda — 14 pts · Fuera del top 50"
- Reads from `userProfile` (already in AuthContext) — no additional Firestore query. Exact rank number below 50 is omitted (a count query would be expensive and the data isn't needed for the engagement goal).
- "← Volver a Materias" back link → `/`
- No filtering, no animations — Phase 3 candidates

### Nav update
Add to `Layout.jsx` nav: **"🏆 Ranking"** → `/scoreboard`, visible to all users.

---

## Feature 2: Soft Tier Upsell Banner

### Placement: SubjectHome only
- Rendered after the **first bloque section** in `SubjectHome.jsx`
- Visible only to Tier 1 users (`userProfile?.tier === 1`) or non-logged-in visitors (`!currentUser`)
- Tier 2+ users never see it

### Content
```
🚀 ¿Querés más?
Con Aventurero obtenés acceso completo + puntos dobles en el ranking.
[Ver planes →]   (routes to /coming-soon for now)
```

### Implementation note
`SubjectHome.jsx` already has access to `useAuth()` (AuthContext). No new data fetching needed.

---

## Feature 3: MEP Bloque Labels on Quiz Data

### Purpose
Every `quiz[]` item in the 4 lesson data files needs a `mepBloque` field so the Simulacro can group questions by bloque in the results screen.

### Rule
Each quiz question inherits the `mepBloque` of the lesson it belongs to. Since all lessons already have `mepBloque` set (from the flat restructure), a Node.js migration script walks every lesson and stamps each `quiz[]` item.

### mepBloque values per subject
| Subject | Valid values |
|---------|-------------|
| sociales | `'geografia-historia'`, `'educacion-civica'` |
| ciencias | `'cuerpo-humano'`, `'biodiversidad'`, `'energia'`, `'geofisica'` |
| espanol | `'comprension-lectora'` |
| matematicas | `'numeros'`, `'geometria'`, `'medidas'`, `'algebra'`, `'estadistica'` |

### Migration script approach
```js
// scripts/stampMepBloques.mjs
// For each subject file: for each lesson, for each quiz item → set item.mepBloque = lesson.mepBloque
// Lessons with quiz: [] are unaffected
// Run once, verify counts, commit result
```

### Verification
After stamping, count total quiz items with `mepBloque` defined per subject. Log the count — this becomes the max question pool for the Simulacro.

---

## Feature 4: Simulacro MEP Mode

### Route
`/simulacro/:subject` — no login required, no Firebase reads or writes.

### State machine
`Simulacro.jsx` owns a `phase` state: `'start' | 'active' | 'results'` and renders the matching sub-component.

### SimulacroStart
**Props:** `{ subject, config, questionCount, bloqueBreakdown, onStart }`

**Displays:**
- Subject icon + name from `subjectConfig[subject]`
- "📋 60 preguntas · ⏱ 120 minutos · ✅ Selección única A/B/C/D"
- If fewer than 60 questions available: "X preguntas disponibles"
- Bloque breakdown: each bloque name + how many questions it contributes
- `[▶ Comenzar Simulacro]` button calls `onStart()`

### SimulacroActive
**Props:** `{ questions, onFinish }`

**State:**
- `currentIndex` — which question is showing (useState)
- `answers` — `{ [questionIndex]: selectedOption }` map (useState AND mirrored in `answersRef = useRef({})` so the setInterval closure can read current answers without stale closure)
- `timeLeft` — seconds remaining, managed by `useRef` + `setInterval` (not `useState` — prevents re-render cascade); `displayTime` useState drives the visible MM:SS text

**Behavior:**
- Questions pre-sampled and shuffled once in `Simulacro.jsx` before passing to this component — never re-sampled
- Selecting an option stores it in `answers` and enables "Siguiente →" button
- No going back to previous questions
- When `timeLeft` reaches 0: auto-calls `onFinish(answers)`
- When last question answered and "Finalizar" clicked: calls `onFinish(answers)`
- Progress bar: `currentIndex / questions.length * 100%`
- Timer display: `MM:SS` format, turns red below 60 seconds

**Timer implementation:**
```js
const timerRef = useRef(120 * 60);
useEffect(() => {
  const interval = setInterval(() => {
    timerRef.current -= 1;
    setDisplayTime(timerRef.current); // single state update for display only
    if (timerRef.current <= 0) {
      clearInterval(interval);
      onFinish(answersRef.current);
    }
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

### SimulacroResults
**Props:** `{ questions, answers, timeUsed }`

**Displays:**
- Score: `X / total` correct, percentage
- Time used: `MM:SS`
- Bloque breakdown table: for each bloque → "Geografía e Historia: 12 / 18 ✅"
- Two CTAs:
  - "🔄 Intentar de nuevo" — calls `onRestart()` in `Simulacro.jsx` (re-samples questions, resets timer)
  - "📚 Volver a [Subject Label]" — Link to `/:subject`

### Question sampling (in `Simulacro.jsx`)
```js
const allQuestions = lessonsData[subject].lessons
  .flatMap(lesson => (lesson.quiz || []).map(q => ({ ...q, mepBloque: lesson.mepBloque })));
const shuffled = allQuestions.sort(() => Math.random() - 0.5);
const sampled = shuffled.slice(0, 60);
```

### Entry points
- `SubjectHome.jsx` hero section: "🎯 Practicar Simulacro MEP" button → `/simulacro/:subject`
- `PruebaMEP.jsx`: per-subject "Practicar simulacro" button → `/simulacro/:subject`

### Future extension point
Simulacro results are intentionally local-only. When ready to connect to gamification: add a `submitSimulacroResult` Cloud Function call in `SimulacroResults` that awards bonus points and posts to the scoreboard. Do not architect SimulacroResults in a way that makes this hard to add later (keep answer logic in a plain object, not tangled with UI).

---

## Feature 5: MEP Info Page + Nav

### Route: `/prueba-mep`
Fully static — no Firebase reads, no auth. Read from `subjectConfig` for bloque labels.

### Page structure
1. **Hero:** "📋 La Prueba MEP — ¿Cómo funciona?" + intro text: "120 minutos · 60 preguntas · Selección única A/B/C/D"
2. **Subject accordions (4):** one per subject, collapsed by default, expands to show:
   - List of bloques with one-line descriptions
   - For Español: special note on 2-part structure (50% comprensión lectora / 50% texto expositivo, 200 palabras mínimo)
   - "🎯 Practicar Simulacro" button → `/simulacro/:subject`
3. **Back link:** "← Volver a Materias" → `/`

### Accordion behavior
Simple `useState` toggle per subject — no library needed. One open at a time or all independently toggleable (preference: independently toggleable, simpler).

### Nav update
Add to `Layout.jsx`: **"📋 Prueba MEP"** → `/prueba-mep`, visible to all users.

---

## Non-Functional Requirements
- All 3 new routes must be lazy-loaded in `App.jsx` (consistent with existing pattern)
- Simulacro timer must survive component re-renders without resetting
- Scoreboard widget must not block page render — load asynchronously with a skeleton
- All new pages must be navigable by a 9-year-old without adult assistance
- No new Firebase Cloud Functions or Firestore schema changes required

---

## Success Metrics
- Scoreboard page views: 200+/week within 2 weeks of launch
- Simulacro sessions started: 100+/week within 2 weeks of launch
- Organic signups from scoreboard viral loop (students showing classmates their rank)

---

## Out of Scope
- Simulacro scores saved to Firestore or scoreboard (planned future feature — see memory note)
- Payment page / tier enforcement (monetization phase)
- Admin panel
- Bot protection (Firebase App Check)
- Secondary school content
- Scoreboard filtering by subject or time period
- Simulacro for Español Part 2 (text production — no multiple-choice questions to simulate)
