# Matemáticas Extra Exams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 extra 35-question Matemáticas practice exams to `/prueba-mep`, generated from the 100-question source markdown, following the established pattern from Sociales/Ciencias/Español — adapted for a source with no clean stimulus/question split and 5 embedded markdown tables.

**Architecture:** A one-off Node script parses `documents/AI Geneterated exams/Matematicas_100_Preguntas_Formato_MEP.md` into a generated `src/data/matematicasExtraExams.js` data file. Unlike the three precedents, questions here have no `stimulus`/`source` fields — the entire problem text (setup + question, however they're punctuated in the source) becomes a single `question` field, and 5 questions whose source stimulus is a markdown table get hand-transcribed into a readable sentence by the script itself (hardcoded overrides, not generic table-parsing logic). `SimulacroExtra.jsx` and `PruebaMEP.jsx` are already generalized (from prior subjects' work) so wiring Matemáticas in is a one-line addition to each. Since Matemáticas was the last subject without extra exams, the negative test that asserted this in `PruebaMEP.test.jsx` has no remaining target and is deleted rather than retargeted.

**Tech Stack:** React, Vite, Vitest + Testing Library, plain Node (ESM) for the one-off data-generation script.

## Global Constraints

- Every question object has the shape `{ question, options, correct, mepBloque }` — no `stimulus`, no `source`. `SimulacroActive.jsx` already renders both conditionally, so omitting them is safe.
- Every question has **exactly 3 options** (A/B/C) — never 4.
- `mepBloque` is one of the 5 ids already defined in `src/data/subjectConfig.js`'s `matematicas.bloques`: `numeros`, `geometria`, `medidas`, `algebra`, `estadistica` — varies per question (1:1 with the source's 5 `BLOQUE` headers), unlike Sociales/Español's single-bloque collapse.
- Source bloque ranges: `numeros` 1–22, `geometria` 23–42, `medidas` 43–60, `algebra` 61–80, `estadistica` 81–100.
- Per-bloque exam1/exam2/exam3-unique split: numeros 8/8/6, geometria 7/7/6, medidas 6/6/6, algebra 7/7/6, estadistica 7/7/6 (totals 35/35/30).
- The 5 repeats for exam3 are questions 1, 23, 43, 61, 81 (the first question of each of the 5 bloques, already in exam1) with `options` rotated so the correct answer moves to index 0.
- 5 questions (source numbers 2, 63, 64, 86, 98) have their `question` text replaced with a hand-transcribed version that converts an embedded markdown table into a readable sentence:
  - Q2: `"Observe la siguiente tabla de valor posicional: C: 2, D: 4, U: 5, Décimas: 3, Centésimas: 7, Milésimas: 8. ¿Cuál es la notación desarrollada del número 245,378?"`
  - Q63: `"Observe la siguiente tabla: Bolsa 1: 6 galletas. Bolsa 2: 12 galletas. Bolsa 3: ?. Bolsa 4: 24 galletas. ¿Cuál número completa la tabla anterior?"`
  - Q64: `"Observe la siguiente tabla: Unidades 1: ₡450. Unidades 2: ?. Unidades 3: ₡1 350. ¿Cuál número completa la tabla anterior?"`
  - Q86: `"Observe la siguiente tabla de frecuencias sobre la cantidad de niñas y niños en tres secciones de sexto grado: Sección A: 15 niñas y 12 niños. Sección B: 14 niñas y 19 niños. Sección C: 16 niñas y 13 niños. Según la tabla anterior, ¿cuál sección posee la mayor cantidad total de estudiantes?"`
  - Q98: `"Observe la siguiente tabla de frecuencias sobre las mascotas favoritas de 20 estudiantes: Perro: 8 (?), Gato: 7 (35%), Pez: 5 (25%), TOTAL: 20 (100%). ¿Cuál es la frecuencia porcentual correspondiente a la mascota perro?"`
- Run single test files with `npx vitest run <path>` (not the default watch mode) per `CLAUDE.md`.
- The one-off parser script is a throwaway dev tool — it must be deleted after generating the data file, not committed.

---

### Task 1: Generate `src/data/matematicasExtraExams.js` from the source markdown

**Files:**
- Create (temporary, deleted at end of task): `scripts/extract-matematicas-exams.mjs`
- Create: `src/data/matematicasExtraExams.js`

**Interfaces:**
- Produces: `export const matematicasExtraExams` — an array of exactly 3 arrays, each an array of 35 objects shaped `{ question: string, options: string[3], correct: number (0-2), mepBloque: string }`.

- [ ] **Step 1: Write the parser/generator script**

Create `scripts/extract-matematicas-exams.mjs`:

```js
import fs from 'fs';

const SRC = 'documents/AI Geneterated exams/Matematicas_100_Preguntas_Formato_MEP.md';
const OUT = 'src/data/matematicasExtraExams.js';

const text = fs.readFileSync(SRC, 'utf8');

const BLOQUES = [
  { id: 'numeros', start: 1, end: 22 },
  { id: 'geometria', start: 23, end: 42 },
  { id: 'medidas', start: 43, end: 60 },
  { id: 'algebra', start: 61, end: 80 },
  { id: 'estadistica', start: 81, end: 100 },
];

function bloqueFor(n) {
  return BLOQUES.find((b) => n >= b.start && n <= b.end);
}

// Hand-transcribed replacements for the 5 questions whose stimulus is a
// markdown table (raw "| pipe | syntax |" would render as broken text in
// the plain <p> tag SimulacroActive.jsx uses).
const OVERRIDES = {
  2: 'Observe la siguiente tabla de valor posicional: C: 2, D: 4, U: 5, Décimas: 3, Centésimas: 7, Milésimas: 8. ¿Cuál es la notación desarrollada del número 245,378?',
  63: 'Observe la siguiente tabla: Bolsa 1: 6 galletas. Bolsa 2: 12 galletas. Bolsa 3: ?. Bolsa 4: 24 galletas. ¿Cuál número completa la tabla anterior?',
  64: 'Observe la siguiente tabla: Unidades 1: ₡450. Unidades 2: ?. Unidades 3: ₡1 350. ¿Cuál número completa la tabla anterior?',
  86: 'Observe la siguiente tabla de frecuencias sobre la cantidad de niñas y niños en tres secciones de sexto grado: Sección A: 15 niñas y 12 niños. Sección B: 14 niñas y 19 niños. Sección C: 16 niñas y 13 niños. Según la tabla anterior, ¿cuál sección posee la mayor cantidad total de estudiantes?',
  98: 'Observe la siguiente tabla de frecuencias sobre las mascotas favoritas de 20 estudiantes: Perro: 8 (?), Gato: 7 (35%), Pez: 5 (25%), TOTAL: 20 (100%). ¿Cuál es la frecuencia porcentual correspondiente a la mascota perro?',
};

// Split into per-question raw blocks using the "**N)**" markers. Unlike the
// Sociales/Ciencias/Español parsers, this one keeps the marker line itself —
// its trailing text (e.g. "Observe el siguiente número: 5 207 481 936.") is
// real problem content here, not throwaway boilerplate.
const markers = [...text.matchAll(/\*\*(\d{1,3})\)\*\*/g)];
const blocks = markers.map((m, i) => {
  const num = parseInt(m[1], 10);
  const start = m.index;
  const end = i + 1 < markers.length ? markers[i + 1].index : text.length;
  return { num, raw: text.slice(start, end) };
});

function parseBlock(raw, num) {
  const lines = raw.split('\n').map((l) => l.trim());
  lines[0] = lines[0].replace(/^\*\*\d{1,3}\)\*\*\s*/, '');

  const questionLines = [];
  let i = 0;
  while (i < lines.length && !/^(\*\*✅\s*)?[ABC]\)/.test(lines[i])) {
    if (lines[i] && !lines[i].startsWith('|')) questionLines.push(lines[i]);
    i++;
  }
  const question = OVERRIDES[num] || questionLines.join(' ').trim();

  const options = [];
  let correct = -1;
  for (; i < lines.length && options.length < 3; i++) {
    const line = lines[i];
    const correctMatch = line.match(/^\*\*✅\s*([ABC])\)\s*(.*?)\*\*$/);
    const plainMatch = line.match(/^([ABC])\)\s*(.*)$/);
    if (correctMatch) {
      correct = options.length;
      options.push(correctMatch[2].trim());
    } else if (plainMatch) {
      options.push(plainMatch[2].trim());
    }
  }
  return { question, options, correct };
}

const Q = [null];
for (const { num, raw } of blocks) {
  const bloque = bloqueFor(num);
  Q[num] = { ...parseBlock(raw, num), mepBloque: bloque.id };
}

if (Q.length - 1 !== 100) throw new Error(`Expected 100 questions, got ${Q.length - 1}`);
for (let n = 1; n <= 100; n++) {
  const q = Q[n];
  if (!q.question) throw new Error(`Q${n} missing question text`);
  if (q.options.length !== 3) throw new Error(`Q${n} has ${q.options.length} options`);
  if (q.correct < 0 || q.correct > 2) throw new Error(`Q${n} has invalid correct index`);
}

const exam1Nums = [];
const exam2Nums = [];
const exam3UniqueNums = [];
const SPLITS = { numeros: 8, geometria: 7, medidas: 6, algebra: 7, estadistica: 7 };
for (const b of BLOQUES) {
  const half = SPLITS[b.id];
  for (let n = b.start; n <= b.start + half - 1; n++) exam1Nums.push(n);
  for (let n = b.start + half; n <= b.start + 2 * half - 1; n++) exam2Nums.push(n);
  for (let n = b.start + 2 * half; n <= b.end; n++) exam3UniqueNums.push(n);
}

if (exam1Nums.length !== 35) throw new Error(`exam1 has ${exam1Nums.length}, expected 35`);
if (exam2Nums.length !== 35) throw new Error(`exam2 has ${exam2Nums.length}, expected 35`);
if (exam3UniqueNums.length !== 30) throw new Error(`exam3Unique has ${exam3UniqueNums.length}, expected 30`);

// 5 repeats for exam3: the first question of each of the 5 bloques (already
// in exam1), with the correct option rotated to a different position.
const repeatNums = [1, 23, 43, 61, 81];
const repeats = repeatNums.map((n) => {
  const q = Q[n];
  const rotated = [...q.options.slice(q.correct), ...q.options.slice(0, q.correct)];
  return { num: n, question: q.question, options: rotated, correct: 0, mepBloque: q.mepBloque };
});

function fmtQuestion(q) {
  return `  {\n    question: ${JSON.stringify(q.question)},\n    options: [\n      ${q.options.map((o) => JSON.stringify(o)).join(',\n      ')},\n    ],\n    correct: ${q.correct},\n    mepBloque: ${JSON.stringify(q.mepBloque)},\n  }`;
}

const qEntries = [];
for (let n = 1; n <= 100; n++) {
  qEntries.push(`  // Q${n}\n${fmtQuestion(Q[n])},`);
}

const repeatEntries = repeats.map((r) => `  // Repeat of Q${r.num} — correct moved to index 0\n${fmtQuestion(r)},`);

const file = `// src/data/matematicasExtraExams.js
// Pre-built MEP extra exam question sets for Matemáticas.
// Source: documents/AI Geneterated exams/Matematicas_100_Preguntas_Formato_MEP.md
// Bloques: numeros (Q1-22), geometria (Q23-42), medidas (Q43-60), algebra (Q61-80), estadistica (Q81-100).
// No stimulus/source fields — most problems fuse setup+question into one
// sentence; 5 questions (Q2, Q63, Q64, Q86, Q98) had an embedded markdown
// table hand-transcribed into readable text.
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

// All 100 source questions, indexed Q1..Q100 by array position (1-based).
// Index 0 is null so Q[N] === question N.
const Q = [
  null,
${qEntries.join('\n')}
];

// Helper: pick questions by 1-based indices
const pick = (indices) => indices.map((i) => ({ ...Q[i] }));

const exam1 = pick([
${exam1Nums.join(', ')}
]);

const exam2 = pick([
${exam2Nums.join(', ')}
]);

const exam3Unique = pick([
${exam3UniqueNums.join(', ')}
]);

// 5 repeated questions for Exam 3 with options reordered so correct is at index 0
const exam3Repeats = [
${repeatEntries.join('\n')}
];

const exam3 = [...exam3Unique, ...exam3Repeats];

export const matematicasExtraExams = [exam1, exam2, exam3];
`;

fs.writeFileSync(OUT, file);
console.log('Wrote', OUT);
console.log('exam1Nums', exam1Nums);
console.log('exam2Nums', exam2Nums);
console.log('exam3UniqueNums', exam3UniqueNums);
console.log('repeats', repeats.map((r) => r.num));
```

- [ ] **Step 2: Run the script from the repo root**

Run: `cd /Users/didiercorrales/Documents/didierRepos/sociales && node scripts/extract-matematicas-exams.mjs`

Expected: prints `Wrote src/data/matematicasExtraExams.js` plus the 3 number arrays and `repeats` array, with no thrown errors. If any `throw new Error(...)` fires, inspect that question number in the source markdown, fix the parsing logic, and rerun.

- [ ] **Step 3: Spot-check the generated file against the source markdown**

Run: `node -e "const {matematicasExtraExams} = await import('./src/data/matematicasExtraExams.js'); console.log(JSON.stringify(matematicasExtraExams[0][0], null, 2)); console.log('lengths:', matematicasExtraExams.map(e => e.length));"`

Expected: `lengths: [35, 35, 35]`. Manually compare the printed first question (Q1, the "5 207 481 936" place-value reading question) against the source markdown — `question` should read "Observe el siguiente número: 5 207 481 936. ¿Cuál es la forma correcta de leer este número?", with `correct: 0` (option A).

Also spot-check the fused single-sentence case and a table override:

Run: `grep -n "fábrica de telas" src/data/matematicasExtraExams.js`

Expected: one match, with the full fused sentence ("Una fábrica de telas produce 24,5 metros de tela por hora. Si la fábrica trabaja durante 3,2 horas seguidas, ¿cuántos metros de tela produce en total?") intact as a single `question` string.

Run: `grep -n "Sección A: 15 niñas" src/data/matematicasExtraExams.js`

Expected: one match — confirms the Q86 table override applied correctly (no raw `|` pipe characters anywhere in the file).

Run: `grep -c "|" src/data/matematicasExtraExams.js`

Expected: `0` — no markdown table syntax leaked into the generated data.

- [ ] **Step 4: Delete the one-off script**

Run: `rm scripts/extract-matematicas-exams.mjs`

Expected: only `src/data/matematicasExtraExams.js` remains as a new file. Confirm with `git status` that only that file shows as untracked (besides any pre-existing untracked files).

- [ ] **Step 5: Commit**

```bash
git add src/data/matematicasExtraExams.js
git commit -m "feat: add generated Matemáticas extra exam question data"
```

---

### Task 2: Add structural tests for `matematicasExtraExams`

**Files:**
- Create: `src/tests/matematicasExtraExams.test.js`

**Interfaces:**
- Consumes: `matematicasExtraExams` from `src/data/matematicasExtraExams.js` (produced in Task 1).

- [ ] **Step 1: Write the test file**

Create `src/tests/matematicasExtraExams.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { matematicasExtraExams } from '../data/matematicasExtraExams';

const VALID_BLOQUES = ['numeros', 'geometria', 'medidas', 'algebra', 'estadistica'];

describe('matematicasExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(matematicasExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    matematicasExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    matematicasExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
      expect(q.question.length, `question ${i} question text`).toBeGreaterThan(0);
    });
  });

  it('every question has exactly 3 options', () => {
    matematicasExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
      q.options.forEach((opt, j) => {
        expect(opt.length, `question ${i} option ${j}`).toBeGreaterThan(0);
      });
    });
  });

  it('every correct index is a valid option index', () => {
    matematicasExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('every question uses a valid matematicas mepBloque', () => {
    matematicasExtraExams.flat().forEach((q, i) => {
      expect(VALID_BLOQUES, `question ${i}`).toContain(q.mepBloque);
    });
  });

  it('no question contains raw markdown table syntax', () => {
    matematicasExtraExams.flat().forEach((q, i) => {
      expect(q.question, `question ${i}`).not.toContain('|');
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(matematicasExtraExams[0].map(q => q.question));
    matematicasExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...matematicasExtraExams[0].map(q => q.question),
      ...matematicasExtraExams[1].map(q => q.question),
    ]);
    const duplicates = matematicasExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
```

- [ ] **Step 2: Run the test**

Run: `npx vitest run src/tests/matematicasExtraExams.test.js`

Expected: all 9 tests PASS. If any fails, the failure points to which part of Task 1's generated data is wrong — fix `src/data/matematicasExtraExams.js` directly (it's plain generated data, safe to hand-edit at this point) and rerun.

- [ ] **Step 3: Commit**

```bash
git add src/tests/matematicasExtraExams.test.js
git commit -m "test: add structural tests for matematicasExtraExams"
```

---

### Task 3: Wire Matemáticas into `SimulacroExtra.jsx`

**Files:**
- Modify: `src/pages/SimulacroExtra.jsx`
- Modify: `src/tests/SimulacroExtra.test.jsx`

**Interfaces:**
- Consumes: `matematicasExtraExams` from `src/data/matematicasExtraExams.js` (Task 1).
- Produces: `SimulacroExtra` resolves `/simulacro-extra/matematicas/{1,2,3}` the same way it already resolves `sociales`, `ciencias`, and `espanol`.

- [ ] **Step 1: Add failing tests for the matematicas case**

In `src/tests/SimulacroExtra.test.jsx`, add a `vi.mock('../data/matematicasExtraExams', ...)` block right after the existing `espanolExtraExams` mock (after line 78, before `const renderAt = ...`):

```jsx
vi.mock('../data/matematicasExtraExams', () => ({
  matematicasExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'numeros',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'geometria',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Matemáticas C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'medidas',
    })),
  ],
}));
```

Then add 3 new test cases at the end of the `describe('SimulacroExtra', ...)` block, right before its closing `});` (after the existing `'renders the start screen for espanol exam 3'` test):

```jsx
  it('renders the start screen for matematicas exam 1', () => {
    renderAt('/simulacro-extra/matematicas/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for matematicas exam 2', () => {
    renderAt('/simulacro-extra/matematicas/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for matematicas exam 3', () => {
    renderAt('/simulacro-extra/matematicas/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });
```

- [ ] **Step 2: Run the test to verify the new matematicas cases fail**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: the 3 new `matematicas` tests FAIL (redirected to Home because `'matematicas'` isn't in `VALID_SUBJECTS` yet); the pre-existing `sociales`/`ciencias`/`espanol` tests still PASS.

- [ ] **Step 3: Wire `matematicasExtraExams` into `SimulacroExtra.jsx`**

In `src/pages/SimulacroExtra.jsx`, change:

```jsx
import { socialesExtraExams } from '../data/socialesExtraExams';
import { cienciasExtraExams } from '../data/cienciasExtraExams';
import { espanolExtraExams } from '../data/espanolExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const extraExamsBySubject = {
  sociales: socialesExtraExams,
  ciencias: cienciasExtraExams,
  espanol: espanolExtraExams,
};
```

to:

```jsx
import { socialesExtraExams } from '../data/socialesExtraExams';
import { cienciasExtraExams } from '../data/cienciasExtraExams';
import { espanolExtraExams } from '../data/espanolExtraExams';
import { matematicasExtraExams } from '../data/matematicasExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const extraExamsBySubject = {
  sociales: socialesExtraExams,
  ciencias: cienciasExtraExams,
  espanol: espanolExtraExams,
  matematicas: matematicasExtraExams,
};
```

(`VALID_SUBJECTS` is already derived from `Object.keys(extraExamsBySubject)`, so no further change is needed.)

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: all tests PASS (sociales, ciencias, espanol, and matematicas).

- [ ] **Step 5: Commit**

```bash
git add src/pages/SimulacroExtra.jsx src/tests/SimulacroExtra.test.jsx
git commit -m "feat: support matematicas extra exams in SimulacroExtra"
```

---

### Task 4: Show the "Exámenes Extra" section for Matemáticas in `PruebaMEP.jsx`

**Files:**
- Modify: `src/pages/PruebaMEP.jsx`
- Modify: `src/tests/PruebaMEP.test.jsx`

**Interfaces:**
- Consumes: `subjectConfig` from `src/data/subjectConfig.js` (existing, unchanged).
- Produces: the "Exámenes Extra" block now renders for all 4 subjects: `sociales`, `ciencias`, `espanol`, `matematicas`.

- [ ] **Step 1: Update the test file first (TDD)**

In `src/tests/PruebaMEP.test.jsx`, the existing test `'does NOT show extra exam links inside other subject accordions'` (lines 77–81) currently opens the **Matemática** accordion to assert absence — since Matemáticas will now have extra exams too, and it was the last subject without them, there is no remaining subject to retarget this test to. Delete that test entirely, and add a new positive test for Matemáticas. Replace lines 77–92 (from `it('does NOT show extra exam links...')` through the end of the `'shows links to the 3 extra exams inside expanded ciencias accordion'` test) with:

```jsx
  it('shows links to the 3 extra exams inside expanded ciencias accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Ciencias/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/ciencias/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/ciencias/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/ciencias/3');
  });

  it('shows links to the 3 extra exams inside expanded matematicas accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Matemática/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/matematicas/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/matematicas/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/matematicas/3');
  });
```

(This deletes the old negative test and keeps the existing ciencias test verbatim, adding the new matematicas test right after it. The existing `'shows links to the 3 extra exams inside expanded espanol accordion'` test further down in the file is untouched.)

- [ ] **Step 2: Run the test to verify the new/changed cases fail**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: `'shows links to the 3 extra exams inside expanded matematicas accordion'` FAILS (no extra-exam links render for matematicas yet). All other tests, including the ciencias and espanol positive tests, should already PASS.

- [ ] **Step 3: Generalize the gate in `PruebaMEP.jsx`**

In `src/pages/PruebaMEP.jsx`, change:

```jsx
const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias', 'espanol'];
```

to:

```jsx
const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias', 'espanol', 'matematicas'];
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: all tests PASS.

- [ ] **Step 5: Run the full test suite once to confirm no regressions**

Run: `npx vitest run`

Expected: all test files PASS, including `src/tests/matematicasExtraExams.test.js`, `src/tests/SimulacroExtra.test.jsx`, `src/tests/PruebaMEP.test.jsx`, and every pre-existing test file unaffected.

- [ ] **Step 6: Commit**

```bash
git add src/pages/PruebaMEP.jsx src/tests/PruebaMEP.test.jsx
git commit -m "feat: show Matemáticas extra exams section in PruebaMEP"
```
