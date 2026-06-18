# Extra MEP Exams — Estudios Sociales Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 pre-defined extra MEP-format exams (35 questions each, with stimulus paragraphs) to the Estudios Sociales section of `/prueba-mep`, accessible from new buttons nested inside the Estudios Sociales accordion card.

**Architecture:** A new static data file `socialesExtraExams.js` holds 3 fixed arrays of 35 question objects parsed from the 100-question markdown source. A new `SimulacroExtra.jsx` page reuses the existing `SimulacroStart/Active/Results` sub-components with the pre-built question list. `SimulacroActive` gets a backward-compatible stimulus block. `PruebaMEP` gains extra-exam buttons only for the `sociales` card.

**Tech Stack:** React 18, React Router v6, Vite, Vitest + Testing Library, inline CSS styles (no CSS modules).

---

## File Map

| File | Action |
|---|---|
| `src/data/socialesExtraExams.js` | **Create** — 3 arrays of 35 question objects |
| `src/pages/SimulacroExtra.jsx` | **Create** — extra exam page |
| `src/components/Simulacro/SimulacroStart.jsx` | **Modify** — add optional `subtitle` prop |
| `src/components/Simulacro/SimulacroActive.jsx` | **Modify** — conditional stimulus block |
| `src/App.jsx` | **Modify** — add `/simulacro-extra/:subject/:examIndex` route |
| `src/pages/PruebaMEP.jsx` | **Modify** — extra exam buttons for sociales card |
| `src/tests/socialesExtraExams.test.js` | **Create** — data shape tests |
| `src/tests/SimulacroExtra.test.jsx` | **Create** — page tests |
| `src/tests/PruebaMEP.test.jsx` | **Modify** — add extra-exam link tests |

---

## Task 1: Data shape tests (failing)

**Files:**
- Create: `src/tests/socialesExtraExams.test.js`

- [ ] **Step 1.1: Write the failing data shape tests**

Create `src/tests/socialesExtraExams.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { socialesExtraExams } from '../data/socialesExtraExams';

describe('socialesExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(socialesExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    socialesExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('source');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
    });
  });

  it('every question has exactly 3 options', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
    });
  });

  it('every correct index is a valid option index', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('all questions use mepBloque "geografia-historia"', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.mepBloque, `question ${i}`).toBe('geografia-historia');
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(socialesExtraExams[0].map(q => q.question));
    socialesExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...socialesExtraExams[0].map(q => q.question),
      ...socialesExtraExams[1].map(q => q.question),
    ]);
    const duplicates = socialesExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
```

- [ ] **Step 1.2: Run tests — confirm they all fail (module not found)**

```bash
npx vitest run src/tests/socialesExtraExams.test.js
```

Expected: `Cannot find module '../data/socialesExtraExams'`

---

## Task 2: Create `socialesExtraExams.js`

**Files:**
- Create: `src/data/socialesExtraExams.js`
- Read: `documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md`

- [ ] **Step 2.1: Read the full 100-question source file**

The source file is at:
```
documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md
```

Read the entire file. It contains 7 blocks (A–G) of questions, 100 total:
- Block A: Q1–Q15 (Posición Geográfica y Relieve)
- Block B: Q16–Q35 (Historia Antigua y Pueblos Originarios)
- Block C: Q36–Q50 (Conquista y Período Colonial)
- Block D: Q51–Q65 (Independencia, Pacto de Concordia, Anexión de Nicoya)
- Block E: Q66–Q75 (La Campaña Nacional)
- Block F: Q76–Q85 (Las Reformas Liberales)
- Block G: Q86–Q100 (Las Reformas Sociales de 1940 y la Guerra Civil de 1948)

- [ ] **Step 2.2: Parse each question into the standard shape**

Each question in the markdown looks like:

```
**N)** Lea el siguiente texto:

[stimulus paragraph]

*Tomado de: Institution Name.*

Question text here
A) Wrong option
**✅ B) Correct option**
C) Wrong option
```

Parse into this JS object:
```js
{
  stimulus: "stimulus paragraph text",      // plain text, no markdown
  source: "Institution Name.",              // strip leading "Tomado de: " / "Adaptado de: "
  question: "Question text here",           // plain text
  options: ["Wrong option", "Correct option", "Wrong option"],  // order as in markdown
  correct: 1,                               // 0-based index of the **✅ option
  mepBloque: "geografia-historia",          // same for ALL 100 questions
}
```

Rules:
- `stimulus`: the paragraph between the question header line and the italic source line. Strip leading/trailing whitespace.
- `source`: the italic source line (`*...*`). Remove leading `*` and trailing `*`. Remove the "Tomado de: " or "Adaptado de: " prefix. Keep only the institution name and its trailing period.
- `question`: the text immediately after the source line and before the first option. Strip whitespace.
- `options`: the text after `A) `, `B) `, `C) ` on each option line. The bold marker `**✅ ` before the letter indicates the correct option — strip it from the option text, it's metadata only.
- `correct`: the 0-based index corresponding to A=0, B=1, C=2 of the correct option.

- [ ] **Step 2.3: Arrange questions into the 3 exam arrays using the interleaving sequence**

Questions are interleaved across blocks so each exam covers multiple topics. Use the following explicit question-number sequences (1-based Q numbers from the source file):

**Exam 1 (35 questions):**
```
Q1, Q16, Q36, Q51, Q66, Q76, Q86,
Q2, Q17, Q37, Q52, Q67, Q77, Q87,
Q3, Q18, Q38, Q53, Q68, Q78, Q88,
Q4, Q19, Q39, Q54, Q69, Q79, Q89,
Q5, Q20, Q40, Q55, Q70, Q80, Q90
```

**Exam 2 (35 questions):**
```
Q6,  Q21, Q41, Q56, Q71, Q81, Q91,
Q7,  Q22, Q42, Q57, Q72, Q82, Q92,
Q8,  Q23, Q43, Q58, Q73, Q83, Q93,
Q9,  Q24, Q44, Q59, Q74, Q84, Q94,
Q10, Q25, Q45, Q60, Q75, Q85, Q95
```

**Exam 3 (30 unique + 5 repeated = 35 questions):**

30 unique questions in this order:
```
Q11, Q26, Q46, Q61, Q96,
Q12, Q27, Q47, Q62, Q97,
Q13, Q28, Q48, Q63, Q98,
Q14, Q29, Q49, Q64, Q99,
Q15, Q30, Q50, Q65, Q100,
Q31, Q32, Q33, Q34, Q35
```

Then append these 5 repeated questions (already parsed but with **options rotated to put the correct answer at index 0**). Use exactly these pre-computed objects — do NOT re-parse them from scratch:

```js
// Repeat of Q1 — correct moved to index 0
{
  stimulus: "Costa Rica se localiza en el istmo centroamericano, entre los paralelos 8° y 11° de latitud norte. Esta posición ubica al país completamente al norte de la línea ecuatorial y al oeste del meridiano de Greenwich.",
  source: "Instituto Geográfico Nacional.",
  question: "De acuerdo con la información anterior, Costa Rica se ubica en los hemisferios",
  options: ["norte y occidental.", "sur y occidental.", "norte y oriental."],
  correct: 0,
  mepBloque: "geografia-historia",
},
// Repeat of Q16 — correct moved to index 0
{
  stimulus: "Los primeros habitantes de Costa Rica, hace aproximadamente 12 000 años, no contaban con viviendas fijas. Se desplazaban de un lugar a otro siguiendo a los animales que cazaban para alimentarse.",
  source: "Museo Nacional de Costa Rica.",
  question: "Según el texto, ¿cómo se describe el estilo de vida de los primeros pobladores del territorio costarricense?",
  options: ["Nómada, desplazándose en busca de alimento.", "Sedentario, viviendo siempre en el mismo lugar.", "Urbano, organizado en grandes ciudades."],
  correct: 0,
  mepBloque: "geografia-historia",
},
// Repeat of Q36 — correct moved to index 0
{
  stimulus: "En 1502, durante su cuarto viaje, Cristóbal Colón llegó por primera vez a las costas del actual territorio costarricense, lo que marcó el inicio del contacto entre españoles y pueblos originarios.",
  source: "Museo Nacional de Costa Rica.",
  question: "Según la información anterior, ¿en qué año se produjo el primer contacto entre Cristóbal Colón y el territorio costarricense?",
  options: ["1502", "1492", "1575"],
  correct: 0,
  mepBloque: "geografia-historia",
},
// Repeat of Q51 — correct moved to index 0
{
  stimulus: "El 15 de septiembre de 1821, las provincias centroamericanas, entre ellas Costa Rica, proclamaron su independencia de España, dando inicio a una nueva etapa política en la región.",
  source: "Museo Nacional de Costa Rica.",
  question: "De acuerdo con el texto, ¿qué evento ocurrió el 15 de septiembre de 1821?",
  options: ["Centroamérica proclamó su independencia de España.", "Se firmó el Pacto de Concordia.", "Se anexó el Partido de Nicoya a Costa Rica."],
  correct: 0,
  mepBloque: "geografia-historia",
},
// Repeat of Q66 — correct moved to index 0
{
  stimulus: "Entre 1856 y 1857, un grupo de mercenarios extranjeros, conocidos como filibusteros y liderados por William Walker, intentó apoderarse de Centroamérica, lo que llevó a Costa Rica a organizar su defensa.",
  source: "Museo Nacional de Costa Rica.",
  question: "Según la información anterior, ¿quién lideraba el grupo de mercenarios que invadió Centroamérica?",
  options: ["William Walker.", "Juan Rafael Mora Porras.", "Juan Santamaría."],
  correct: 0,
  mepBloque: "geografia-historia",
},
```

- [ ] **Step 2.4: Write `src/data/socialesExtraExams.js`**

The file exports a single array of 3 sub-arrays:

```js
// src/data/socialesExtraExams.js
// Pre-built MEP extra exam question sets for Estudios Sociales.
// Source: documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md
// All 100 questions are mepBloque "geografia-historia".
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

export const socialesExtraExams = [
  [ /* Exam 1 — 35 questions in the interleaved order from Step 2.3 */ ],
  [ /* Exam 2 — 35 questions */ ],
  [ /* Exam 3 — 30 unique + 5 repeated objects from Step 2.3 */ ],
];
```

Fill in each array with the parsed question objects following the sequence from Step 2.3.

- [ ] **Step 2.5: Run data shape tests — all must pass**

```bash
npx vitest run src/tests/socialesExtraExams.test.js
```

Expected: All 8 tests **PASS**.

- [ ] **Step 2.6: Commit**

```bash
git add src/data/socialesExtraExams.js src/tests/socialesExtraExams.test.js
git commit -m "feat: add socialesExtraExams data — 3 extra MEP exam sets for Estudios Sociales"
```

---

## Task 3: Add `subtitle` prop to `SimulacroStart`

**Files:**
- Modify: `src/components/Simulacro/SimulacroStart.jsx`

This is a backward-compatible change: add an optional `subtitle` prop defaulting to `"Simulacro MEP"`.

- [ ] **Step 3.1: Update `SimulacroStart.jsx` — add optional `subtitle` prop**

Current line (line 15 in the file):
```jsx
<p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>
  Simulacro MEP
</p>
```

Replace with:
```jsx
<p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>
  {subtitle}
</p>
```

And update the function signature from:
```jsx
const SimulacroStart = ({ config, questionCount, bloqueBreakdown, onStart }) => {
```
to:
```jsx
const SimulacroStart = ({ config, questionCount, bloqueBreakdown, onStart, subtitle = 'Simulacro MEP' }) => {
```

- [ ] **Step 3.2: Run existing Simulacro tests — they must still pass**

```bash
npx vitest run src/tests/Simulacro.test.jsx
```

Expected: All tests **PASS** (default subtitle keeps original behavior).

- [ ] **Step 3.3: Commit**

```bash
git add src/components/Simulacro/SimulacroStart.jsx
git commit -m "feat: add optional subtitle prop to SimulacroStart (default: 'Simulacro MEP')"
```

---

## Task 4: Add stimulus rendering to `SimulacroActive`

**Files:**
- Modify: `src/components/Simulacro/SimulacroActive.jsx`
- Create: `src/tests/SimulacroActive.stimulus.test.jsx`

- [ ] **Step 4.1: Write failing stimulus tests**

Create `src/tests/SimulacroActive.stimulus.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SimulacroActive from '../components/Simulacro/SimulacroActive';

const makeQuestion = (overrides = {}) => ({
  question: '¿Cuál es la capital de Costa Rica?',
  options: ['San José', 'Cartago', 'Alajuela'],
  correct: 0,
  mepBloque: 'geografia-historia',
  ...overrides,
});

const baseProps = (q) => ({
  questions: [q],
  onFinish: vi.fn(),
});

describe('SimulacroActive — stimulus rendering', () => {
  it('does NOT render a stimulus block when stimulus is absent', () => {
    render(<SimulacroActive {...baseProps(makeQuestion())} />);
    expect(screen.queryByText(/Lea el siguiente/)).not.toBeInTheDocument();
  });

  it('renders stimulus text when stimulus is present', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'Instituto Geográfico Nacional.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText('Costa Rica tiene dos costas.')).toBeInTheDocument();
  });

  it('renders source attribution when stimulus is present', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'Instituto Geográfico Nacional.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText(/Instituto Geográfico Nacional\./)).toBeInTheDocument();
  });

  it('renders the question text below the stimulus block', () => {
    const q = makeQuestion({
      stimulus: 'Costa Rica tiene dos costas.',
      source: 'IGN.',
    });
    render(<SimulacroActive {...baseProps(q)} />);
    expect(screen.getByText('¿Cuál es la capital de Costa Rica?')).toBeInTheDocument();
  });
});
```

- [ ] **Step 4.2: Run tests — confirm they fail (stimulus block not rendered yet)**

```bash
npx vitest run src/tests/SimulacroActive.stimulus.test.jsx
```

Expected: The `stimulus text` and `source` tests **FAIL**; the "absent" test may pass.

- [ ] **Step 4.3: Update `SimulacroActive.jsx` — add conditional stimulus block**

In `SimulacroActive.jsx`, locate the question card section (around line 70):

```jsx
<div style={{
  background: 'white', border: 'none',
  borderRadius: 'var(--radius-md)', padding: '1.5rem',
  boxShadow: '0 4px 16px rgba(99,102,241,0.10)', marginBottom: '1.5rem'
}}>
  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg-dark)', margin: 0 }}>
    {question.question}
  </p>
</div>
```

Replace it with:

```jsx
{question.stimulus && (
  <div style={{
    background: '#F1F5F9',
    border: '1px solid #CBD5E1',
    borderRadius: 'var(--radius-sm)',
    padding: '1rem 1.25rem',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    color: 'var(--bg-dark)',
    lineHeight: 1.6,
  }}>
    <p style={{ margin: '0 0 0.5rem', fontStyle: 'italic' }}>{question.stimulus}</p>
    {question.source && (
      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
        Fuente: {question.source}
      </p>
    )}
  </div>
)}

<div style={{
  background: 'white', border: 'none',
  borderRadius: 'var(--radius-md)', padding: '1.5rem',
  boxShadow: '0 4px 16px rgba(99,102,241,0.10)', marginBottom: '1.5rem'
}}>
  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg-dark)', margin: 0 }}>
    {question.question}
  </p>
</div>
```

- [ ] **Step 4.4: Run stimulus tests — all must pass**

```bash
npx vitest run src/tests/SimulacroActive.stimulus.test.jsx
```

Expected: All 4 tests **PASS**.

- [ ] **Step 4.5: Run existing tests to confirm no regressions**

```bash
npx vitest run src/tests/Simulacro.test.jsx src/tests/PruebaMEP.test.jsx
```

Expected: All tests **PASS**.

- [ ] **Step 4.6: Commit**

```bash
git add src/components/Simulacro/SimulacroActive.jsx src/tests/SimulacroActive.stimulus.test.jsx
git commit -m "feat: render optional stimulus block in SimulacroActive for MEP-format questions"
```

---

## Task 5: Create `SimulacroExtra.jsx`

**Files:**
- Create: `src/pages/SimulacroExtra.jsx`
- Create: `src/tests/SimulacroExtra.test.jsx`

- [ ] **Step 5.1: Write failing tests for SimulacroExtra**

Create `src/tests/SimulacroExtra.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SimulacroExtra from '../pages/SimulacroExtra';

vi.mock('../data/socialesExtraExams', () => ({
  socialesExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo ${i}`,
      source: `Fuente ${i}`,
      question: `Pregunta ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'geografia-historia',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'geografia-historia',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'geografia-historia',
    })),
  ],
}));

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/simulacro-extra/:subject/:examIndex" element={<SimulacroExtra />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('SimulacroExtra', () => {
  it('renders the start screen for exam 1', () => {
    renderAt('/simulacro-extra/sociales/1');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for exam 2', () => {
    renderAt('/simulacro-extra/sociales/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for exam 3', () => {
    renderAt('/simulacro-extra/sociales/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });

  it('redirects to / for an unknown subject', () => {
    renderAt('/simulacro-extra/invalid/1');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('redirects to / for an out-of-range examIndex', () => {
    renderAt('/simulacro-extra/sociales/9');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows 35 preguntas in the start screen header area', () => {
    renderAt('/simulacro-extra/sociales/1');
    expect(screen.getByText(/35 preguntas/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 5.2: Run tests — confirm they fail (module not found)**

```bash
npx vitest run src/tests/SimulacroExtra.test.jsx
```

Expected: `Cannot find module '../pages/SimulacroExtra'`

- [ ] **Step 5.3: Create `src/pages/SimulacroExtra.jsx`**

```jsx
// src/pages/SimulacroExtra.jsx
import React, { useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { socialesExtraExams } from '../data/socialesExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const VALID_SUBJECTS = ['sociales'];

const getBloqueBreakdown = (questions, config) =>
  config.bloques
    .map(b => ({ id: b.id, label: b.label, count: questions.filter(q => q.mepBloque === b.id).length }))
    .filter(b => b.count > 0);

const SimulacroExtra = () => {
  const { subject, examIndex } = useParams();
  const config = subjectConfig[subject];
  const index = parseInt(examIndex, 10) - 1;

  if (!VALID_SUBJECTS.includes(subject) || !config) return <Navigate to="/" replace />;
  if (isNaN(index) || index < 0 || index >= socialesExtraExams.length) return <Navigate to="/" replace />;

  const questions = socialesExtraExams[index];
  const subtitle = `Examen Extra ${examIndex}`;

  const [phase, setPhase] = useState('start');
  const [answers, setAnswers] = useState({});
  const [timeUsed, setTimeUsed] = useState(0);
  const startTimeRef = useRef(null);
  const answersRef = useRef({});

  const handleStart = () => {
    startTimeRef.current = Date.now();
    setPhase('active');
  };

  const handleFinish = (finalAnswers) => {
    const elapsed = startTimeRef.current
      ? Math.floor((Date.now() - startTimeRef.current) / 1000)
      : 0;
    setAnswers(finalAnswers);
    answersRef.current = finalAnswers;
    setTimeUsed(elapsed);
    setPhase('results');
  };

  const handleRestart = () => {
    startTimeRef.current = null;
    answersRef.current = {};
    setAnswers({});
    setPhase('start');
  };

  if (phase === 'start') {
    return (
      <SimulacroStart
        config={config}
        subtitle={subtitle}
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

export default SimulacroExtra;
```

- [ ] **Step 5.4: Run SimulacroExtra tests — all must pass**

```bash
npx vitest run src/tests/SimulacroExtra.test.jsx
```

Expected: All 6 tests **PASS**.

- [ ] **Step 5.5: Run full test suite to catch regressions**

```bash
npx vitest run
```

Expected: All tests **PASS**.

- [ ] **Step 5.6: Commit**

```bash
git add src/pages/SimulacroExtra.jsx src/tests/SimulacroExtra.test.jsx
git commit -m "feat: add SimulacroExtra page for pre-built MEP extra exams"
```

---

## Task 6: Add route to `App.jsx`

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 6.1: Add the lazy import and route**

Open `src/App.jsx`. After line 15 (`const PruebaMEP = lazy(...)`), add:

```jsx
const SimulacroExtra = lazy(() => import('./pages/SimulacroExtra'));
```

Then inside the `<Route path="/" element={<Layout />}>` block, after the existing `simulacro/:subject` route (line 39), add:

```jsx
<Route path="simulacro-extra/:subject/:examIndex" element={<SimulacroExtra />} />
```

The final routes block looks like:
```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<SubjectSelection />} />
  <Route path=":subject" element={<SubjectHome />} />
  <Route path=":subject/lesson/:lessonId" element={<LessonView />} />
  <Route path="coming-soon" element={<ComingSoon />} />
  <Route path="sobre-nosotros" element={<About />} />
  <Route path="registro" element={<Register />} />
  <Route path="login" element={<Login />} />
  <Route path="scoreboard" element={<ScoreboardPage />} />
  <Route path="simulacro/:subject" element={<Simulacro />} />
  <Route path="simulacro-extra/:subject/:examIndex" element={<SimulacroExtra />} />
  <Route path="prueba-mep" element={<PruebaMEP />} />
  <Route path="pregunta-del-dia" element={<DailyQuestionPage />} />
  <Route path="reto-semanal" element={<WeeklyChallengePage />} />
</Route>
```

- [ ] **Step 6.2: Run full test suite**

```bash
npx vitest run
```

Expected: All tests **PASS**.

- [ ] **Step 6.3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add /simulacro-extra/:subject/:examIndex route for extra MEP exams"
```

---

## Task 7: Add extra exam buttons to `PruebaMEP`

**Files:**
- Modify: `src/pages/PruebaMEP.jsx`
- Modify: `src/tests/PruebaMEP.test.jsx`

- [ ] **Step 7.1: Write failing tests for extra exam links**

Open `src/tests/PruebaMEP.test.jsx` and append these tests inside the existing `describe('PruebaMEP', ...)` block (before the closing `}`):

```jsx
  it('shows Exámenes Extra section inside expanded sociales accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    expect(screen.getByText(/Exámenes Extra/i)).toBeInTheDocument();
  });

  it('shows links to the 3 extra exams inside expanded sociales accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Estudios Sociales/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/sociales/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/sociales/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/sociales/3');
  });

  it('does NOT show extra exam links inside other subject accordions', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Ciencias/i }));
    expect(screen.queryByText(/Examen Extra 1/i)).not.toBeInTheDocument();
  });
```

- [ ] **Step 7.2: Run tests — confirm the 3 new tests fail**

```bash
npx vitest run src/tests/PruebaMEP.test.jsx
```

Expected: The 3 new tests **FAIL**; all previous tests still **PASS**.

- [ ] **Step 7.3: Update `PruebaMEP.jsx` — add extra exam section**

In `src/pages/PruebaMEP.jsx`, locate the `{isOpen && (` block (around line 60). Find the `<Link to={`/simulacro/${subjectId}`}>` section and add the extra-exam section after it. The full `{isOpen && ...}` block should look like:

```jsx
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
        border: 'none',
        boxShadow: '0 2px 8px rgba(99,102,241,0.25)',
        textDecoration: 'none'
      }}
    >
      🎯 Practicar Simulacro
    </Link>

    {subjectId === 'sociales' && (
      <div style={{ marginTop: '1.25rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Exámenes Extra
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[1, 2, 3].map(n => (
            <Link
              key={n}
              to={`/simulacro-extra/sociales/${n}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'white', color: config.accent,
                padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
                fontWeight: 700, fontSize: '0.85rem',
                border: `2px solid ${config.accent}`,
                textDecoration: 'none'
              }}
            >
              📝 Examen Extra {n}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
)}
```

- [ ] **Step 7.4: Run PruebaMEP tests — all must pass**

```bash
npx vitest run src/tests/PruebaMEP.test.jsx
```

Expected: All 11 tests **PASS** (8 original + 3 new).

- [ ] **Step 7.5: Run the full test suite**

```bash
npx vitest run
```

Expected: All tests **PASS**.

- [ ] **Step 7.6: Commit**

```bash
git add src/pages/PruebaMEP.jsx src/tests/PruebaMEP.test.jsx
git commit -m "feat: add extra MEP exam buttons to Estudios Sociales card on /prueba-mep"
```

---

## Self-Review

**Spec coverage:**
- ✅ 3 exams of 35 questions — Task 2
- ✅ Stimulus text shown — Task 4
- ✅ 30 unique + 5 repeated (options shuffled) in Exam 3 — Task 2, Step 2.3
- ✅ Extra buttons nested inside sociales card — Task 7
- ✅ Existing "Practicar Simulacro" unchanged — not touched
- ✅ Route `/simulacro-extra/:subject/:examIndex` — Task 6
- ✅ SimulacroExtra reuses Start/Active/Results sub-components — Task 5
- ✅ Redirect for invalid subject/examIndex — Task 5

**Placeholder scan:** No TBDs. The data file step (2.4) requires the agent to parse and populate the arrays, but parsing rules and the interleaving sequence are fully specified.

**Type/name consistency:** `socialesExtraExams` used consistently in tests and page. `subtitle` prop added to `SimulacroStart` and passed from `SimulacroExtra`. `getBloqueBreakdown` copied verbatim from `Simulacro.jsx` signature.
