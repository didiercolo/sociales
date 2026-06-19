# Español Extra Exams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 extra 35-question Español practice exams to `/prueba-mep`, generated from the 100-question source markdown, following the exact pattern already used for Estudios Sociales and Ciencias.

**Architecture:** A one-off Node script parses `documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md` into a generated `src/data/espanolExtraExams.js` data file (same shape as `src/data/socialesExtraExams.js`, minus the `source` field — the Español source markdown has no citation line per question). `SimulacroExtra.jsx` and `PruebaMEP.jsx` are already generalized (from the Ciencias work) to look up exam data and gate the "Exámenes Extra" UI via a subject-keyed map/array, so wiring in Español is a one-line addition to each.

**Tech Stack:** React, Vite, Vitest + Testing Library, plain Node (ESM) for the one-off data-generation script.

## Global Constraints

- Every question object has the shape `{ stimulus, question, options, correct, mepBloque }` — no `source` field, since the Español source markdown has no "Adaptado de:"/"Tomado de:" citation line per question (unlike Sociales/Ciencias). `SimulacroActive.jsx` already renders the source line conditionally (`{question.source && (...)}`), so omitting it is safe and doesn't require any component change.
- Every question has **exactly 3 options** (A/B/C) — never 4.
- `mepBloque` is the single literal string `"comprension-lectora"` for all 100 questions — `subjectConfig.js`'s second Español bloque (`produccion-escrita`) never applies because every source question is multiple-choice reading comprehension, not a writing task.
- Source sub-blocks (reading-skill categories used only to spread distribution, not stored in the output data): A 1–15, B 16–30, C 31–44, D 45–58, E 59–72, F 73–86, G 87–100.
- Exam 1 = first 5 questions from each of the 7 source blocks (35 total). Exam 2 = next 5 from each block (35 total). Exam 3 = remaining questions from each block — 5,5,4,4,4,4,4 = 30 — plus 5 repeats (options reordered) = 35 total.
- The 5 repeats are questions 1, 16, 31, 45, 59 (the first question of source blocks A–E, already in Exam 1) with their `options` array rotated so the correct answer moves to index 0.
- Run single test files with `npx vitest run <path>` (not the default watch mode) per `CLAUDE.md`.
- The one-off parser script is a throwaway dev tool — it must be deleted after generating the data file, not committed.

---

### Task 1: Generate `src/data/espanolExtraExams.js` from the source markdown

**Files:**
- Create (temporary, deleted at end of task): `scripts/extract-espanol-exams.mjs`
- Create: `src/data/espanolExtraExams.js`

**Interfaces:**
- Produces: `export const espanolExtraExams` — an array of exactly 3 arrays, each an array of 35 objects shaped `{ stimulus: string, question: string, options: string[3], correct: number (0-2), mepBloque: "comprension-lectora" }`.

- [ ] **Step 1: Write the parser/generator script**

Create `scripts/extract-espanol-exams.mjs`:

```js
import fs from 'fs';

const SRC = 'documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md';
const OUT = 'src/data/espanolExtraExams.js';

const text = fs.readFileSync(SRC, 'utf8');

// Source sub-blocks (reading-skill categories) — used only to spread the
// distribution across exams, not stored in the generated data.
const BLOCKS = [
  { start: 1, end: 15 },
  { start: 16, end: 30 },
  { start: 31, end: 44 },
  { start: 45, end: 58 },
  { start: 59, end: 72 },
  { start: 73, end: 86 },
  { start: 87, end: 100 },
];

// Split into per-question raw blocks using the "**N)**" markers.
const markers = [...text.matchAll(/\*\*(\d{1,3})\)\*\*/g)];
const blocks = markers.map((m, i) => {
  const num = parseInt(m[1], 10);
  const start = m.index + m[0].length;
  const end = i + 1 < markers.length ? markers[i + 1].index : text.length;
  return { num, raw: text.slice(start, end) };
});

function parseBlock(raw) {
  const lines = raw.split('\n').map((l) => l.trim());
  // Line 0 is always the leftover intro phrase from the "**N)**" marker line
  // ("Lea el siguiente texto:") — skip it, it's not part of the stimulus.
  let i = 1;
  while (i < lines.length && !lines[i]) i++;
  // Stimulus is one or more contiguous "> " blockquote lines (some questions
  // have 2 lines of dialogue, each prefixed with ">").
  const stimulusLines = [];
  while (i < lines.length && lines[i].startsWith('>')) {
    stimulusLines.push(lines[i].replace(/^>\s*/, ''));
    i++;
  }
  while (i < lines.length && !lines[i]) i++;
  const questionLines = [];
  while (i < lines.length && !/^(\*\*✅\s*)?[ABC]\)/.test(lines[i])) {
    if (lines[i]) questionLines.push(lines[i]);
    i++;
  }
  const question = questionLines.join(' ').trim();
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
  return { stimulus: stimulusLines.join(' ').trim(), question, options, correct };
}

const Q = [null];
for (const { num, raw } of blocks) {
  Q[num] = { ...parseBlock(raw), mepBloque: 'comprension-lectora' };
}

if (Q.length - 1 !== 100) throw new Error(`Expected 100 questions, got ${Q.length - 1}`);
for (let n = 1; n <= 100; n++) {
  const q = Q[n];
  if (!q.stimulus || !q.question) throw new Error(`Q${n} missing a text field`);
  if (q.options.length !== 3) throw new Error(`Q${n} has ${q.options.length} options`);
  if (q.correct < 0 || q.correct > 2) throw new Error(`Q${n} has invalid correct index`);
}

const exam1Nums = [];
const exam2Nums = [];
const exam3UniqueNums = [];
for (const b of BLOCKS) {
  for (let n = b.start; n <= Math.min(b.start + 4, b.end); n++) exam1Nums.push(n);
  for (let n = b.start + 5; n <= Math.min(b.start + 9, b.end); n++) exam2Nums.push(n);
  for (let n = b.start + 10; n <= b.end; n++) exam3UniqueNums.push(n);
}

if (exam1Nums.length !== 35) throw new Error(`exam1 has ${exam1Nums.length}, expected 35`);
if (exam2Nums.length !== 35) throw new Error(`exam2 has ${exam2Nums.length}, expected 35`);
if (exam3UniqueNums.length !== 30) throw new Error(`exam3Unique has ${exam3UniqueNums.length}, expected 30`);

// 5 repeats for exam3: the first question of each of the first 5 source
// blocks (A–E, already in exam1), with the correct option rotated to a
// different position so the repeat isn't trivially recognizable.
const repeatNums = [1, 16, 31, 45, 59];
const repeats = repeatNums.map((n) => {
  const q = Q[n];
  const rotated = [...q.options.slice(q.correct), ...q.options.slice(0, q.correct)];
  return { num: n, stimulus: q.stimulus, question: q.question, options: rotated, correct: 0 };
});

function fmtQuestion(q) {
  return `  {\n    stimulus: ${JSON.stringify(q.stimulus)},\n    question: ${JSON.stringify(q.question)},\n    options: [\n      ${q.options.map((o) => JSON.stringify(o)).join(',\n      ')},\n    ],\n    correct: ${q.correct},\n    mepBloque: MEP_BLOQUE,\n  }`;
}

const qEntries = [];
for (let n = 1; n <= 100; n++) {
  qEntries.push(`  // Q${n}\n${fmtQuestion(Q[n])},`);
}

const repeatEntries = repeats.map((r) => `  // Repeat of Q${r.num} — correct moved to index 0\n${fmtQuestion(r)},`);

const file = `// src/data/espanolExtraExams.js
// Pre-built MEP extra exam question sets for Español.
// Source: documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md
// All 100 questions are mepBloque "comprension-lectora" — the source has no
// writing/production items, so the other official bloque never applies.
// Source markdown has no per-question citation line, so questions omit \`source\`.
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

const MEP_BLOQUE = "comprension-lectora";

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

export const espanolExtraExams = [exam1, exam2, exam3];
`;

fs.writeFileSync(OUT, file);
console.log('Wrote', OUT);
console.log('exam1Nums', exam1Nums);
console.log('exam2Nums', exam2Nums);
console.log('exam3UniqueNums', exam3UniqueNums);
console.log('repeats', repeats.map((r) => r.num));
```

- [ ] **Step 2: Run the script from the repo root**

Run: `cd /Users/didiercorrales/Documents/didierRepos/sociales && node scripts/extract-espanol-exams.mjs`

Expected: prints `Wrote src/data/espanolExtraExams.js` plus the 3 number arrays and `repeats` array, with no thrown errors. If any `throw new Error(...)` fires, the regex didn't match some block — inspect that question number in the source markdown, fix the parsing logic in the script, and rerun.

- [ ] **Step 3: Spot-check the generated file against the source markdown**

Run: `node -e "const {espanolExtraExams} = await import('./src/data/espanolExtraExams.js'); console.log(JSON.stringify(espanolExtraExams[0][0], null, 2)); console.log('lengths:', espanolExtraExams.map(e => e.length));"`

Expected: `lengths: [35, 35, 35]`. Manually compare the printed first question's `stimulus`/`question`/`options`/`correct` against question 1 in `documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md` (the "reciclaje" question) — they must match (the reciclaje sentence is option B, correct index 1).

Also spot-check a two-line dialogue stimulus to verify the multi-line blockquote join, e.g. question 45 (the Marcos/Lucía almuerzo question):

Run: `grep -n "Marcos mientras guardaba" src/data/espanolExtraExams.js`

Expected: one match, and the full stimulus in that line includes both the Marcos line and the following Lucía sentence joined with a space (open the file at that line to confirm visually).

- [ ] **Step 4: Delete the one-off script**

Run: `rm scripts/extract-espanol-exams.mjs`

Expected: only `src/data/espanolExtraExams.js` remains as a new file; `scripts/extract-espanol-exams.mjs` no longer exists. Confirm with `git status` that only `src/data/espanolExtraExams.js` shows as untracked (besides any pre-existing untracked files).

- [ ] **Step 5: Commit**

```bash
git add src/data/espanolExtraExams.js
git commit -m "feat: add generated Español extra exam question data"
```

---

### Task 2: Add structural tests for `espanolExtraExams`

**Files:**
- Create: `src/tests/espanolExtraExams.test.js`

**Interfaces:**
- Consumes: `espanolExtraExams` from `src/data/espanolExtraExams.js` (produced in Task 1).

- [ ] **Step 1: Write the test file**

Create `src/tests/espanolExtraExams.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { espanolExtraExams } from '../data/espanolExtraExams';

describe('espanolExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(espanolExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    espanolExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
      expect(q.stimulus.length, `question ${i} stimulus`).toBeGreaterThan(0);
      expect(q.question.length, `question ${i} question text`).toBeGreaterThan(0);
    });
  });

  it('every question has exactly 3 options', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
      q.options.forEach((opt, j) => {
        expect(opt.length, `question ${i} option ${j}`).toBeGreaterThan(0);
      });
    });
  });

  it('every correct index is a valid option index', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('every question uses the comprension-lectora mepBloque', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.mepBloque, `question ${i}`).toBe('comprension-lectora');
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(espanolExtraExams[0].map(q => q.question));
    espanolExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...espanolExtraExams[0].map(q => q.question),
      ...espanolExtraExams[1].map(q => q.question),
    ]);
    const duplicates = espanolExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
```

- [ ] **Step 2: Run the test**

Run: `npx vitest run src/tests/espanolExtraExams.test.js`

Expected: all tests PASS. If any fails, the failure points to which part of Task 1's generated data is wrong (e.g. wrong duplicate count) — fix `src/data/espanolExtraExams.js` directly (it's plain generated data, safe to hand-edit at this point) and rerun.

- [ ] **Step 3: Commit**

```bash
git add src/tests/espanolExtraExams.test.js
git commit -m "test: add structural tests for espanolExtraExams"
```

---

### Task 3: Wire Español into `SimulacroExtra.jsx`

**Files:**
- Modify: `src/pages/SimulacroExtra.jsx`
- Modify: `src/tests/SimulacroExtra.test.jsx`

**Interfaces:**
- Consumes: `espanolExtraExams` from `src/data/espanolExtraExams.js` (Task 1).
- Produces: `SimulacroExtra` resolves `/simulacro-extra/espanol/{1,2,3}` the same way it already resolves `sociales` and `ciencias`.

- [ ] **Step 1: Add failing tests for the espanol case**

In `src/tests/SimulacroExtra.test.jsx`, add a `vi.mock('../data/espanolExtraExams', ...)` block right after the existing `cienciasExtraExams` mock (after line 54, before `const renderAt = ...`):

```jsx
vi.mock('../data/espanolExtraExams', () => ({
  espanolExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo Español ${i}`,
      question: `Pregunta Español ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'comprension-lectora',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Español B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'comprension-lectora',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Español C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'comprension-lectora',
    })),
  ],
}));
```

Then add 3 new test cases at the end of the `describe('SimulacroExtra', ...)` block, right before its closing `});` (after the existing `'renders the start screen for ciencias exam 3'` test):

```jsx
  it('renders the start screen for espanol exam 1', () => {
    renderAt('/simulacro-extra/espanol/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for espanol exam 2', () => {
    renderAt('/simulacro-extra/espanol/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for espanol exam 3', () => {
    renderAt('/simulacro-extra/espanol/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });
```

- [ ] **Step 2: Run the test to verify the new espanol cases fail**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: the 3 new `espanol` tests FAIL (redirected to Home because `'espanol'` isn't in `VALID_SUBJECTS` yet); the pre-existing `sociales`/`ciencias` tests still PASS.

- [ ] **Step 3: Wire `espanolExtraExams` into `SimulacroExtra.jsx`**

In `src/pages/SimulacroExtra.jsx`, change:

```jsx
import { socialesExtraExams } from '../data/socialesExtraExams';
import { cienciasExtraExams } from '../data/cienciasExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const extraExamsBySubject = {
  sociales: socialesExtraExams,
  ciencias: cienciasExtraExams,
};
```

to:

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

(`VALID_SUBJECTS` is already derived from `Object.keys(extraExamsBySubject)`, so no further change is needed.)

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: all tests PASS (sociales, ciencias, and espanol).

- [ ] **Step 5: Commit**

```bash
git add src/pages/SimulacroExtra.jsx src/tests/SimulacroExtra.test.jsx
git commit -m "feat: support espanol extra exams in SimulacroExtra"
```

---

### Task 4: Show the "Exámenes Extra" section for Español in `PruebaMEP.jsx`

**Files:**
- Modify: `src/pages/PruebaMEP.jsx`
- Modify: `src/tests/PruebaMEP.test.jsx`

**Interfaces:**
- Consumes: `subjectConfig` from `src/data/subjectConfig.js` (existing, unchanged).
- Produces: the "Exámenes Extra" block (with 3 links to `/simulacro-extra/{subject}/{1,2,3}`) now renders for `sociales`, `ciencias`, and `espanol`.

- [ ] **Step 1: Update the test file first (TDD)**

In `src/tests/PruebaMEP.test.jsx`, the existing test `'does NOT show extra exam links inside other subject accordions'` (lines 77–81) currently opens the **Español** accordion to assert absence — this becomes wrong once Español has extra exams, since Matemática is now the only subject left without them. Replace lines 77–92 (from `it('does NOT show extra exam links...')` through the end of the `'shows links to the 3 extra exams inside expanded ciencias accordion'` test) with:

```jsx
  it('does NOT show extra exam links inside other subject accordions', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Matemática/i }));
    expect(screen.queryByText(/Examen Extra 1/i)).not.toBeInTheDocument();
  });

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

  it('shows links to the 3 extra exams inside expanded espanol accordion', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Español/i }));
    const link1 = screen.getByRole('link', { name: /Examen Extra 1/i });
    const link2 = screen.getByRole('link', { name: /Examen Extra 2/i });
    const link3 = screen.getByRole('link', { name: /Examen Extra 3/i });
    expect(link1.getAttribute('href')).toBe('/simulacro-extra/espanol/1');
    expect(link2.getAttribute('href')).toBe('/simulacro-extra/espanol/2');
    expect(link3.getAttribute('href')).toBe('/simulacro-extra/espanol/3');
  });
});
```

- [ ] **Step 2: Run the test to verify the new/changed cases fail**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: `'shows links to the 3 extra exams inside expanded espanol accordion'` FAILS (no extra-exam links render for espanol yet). The renamed `'does NOT show...'` test (now using Matemática) and the ciencias test should already PASS.

- [ ] **Step 3: Generalize the gate in `PruebaMEP.jsx`**

In `src/pages/PruebaMEP.jsx`, change:

```jsx
const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias'];
```

to:

```jsx
const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias', 'espanol'];
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: all tests PASS.

- [ ] **Step 5: Run the full test suite once to confirm no regressions**

Run: `npx vitest run`

Expected: all test files PASS, including `src/tests/espanolExtraExams.test.js`, `src/tests/SimulacroExtra.test.jsx`, `src/tests/PruebaMEP.test.jsx`, and every pre-existing test file unaffected.

- [ ] **Step 6: Commit**

```bash
git add src/pages/PruebaMEP.jsx src/tests/PruebaMEP.test.jsx
git commit -m "feat: show Español extra exams section in PruebaMEP"
```
