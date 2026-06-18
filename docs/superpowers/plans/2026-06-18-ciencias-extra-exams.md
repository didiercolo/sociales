# Ciencias Extra Exams Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 extra 35-question Ciencias practice exams to `/prueba-mep`, generated from the 100-question source markdown, following the exact pattern already used for Estudios Sociales.

**Architecture:** A one-off Node script parses `documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md` into a generated `src/data/cienciasExtraExams.js` data file (same shape as `src/data/socialesExtraExams.js`). `SimulacroExtra.jsx` and `PruebaMEP.jsx` — both currently hardcoded to `sociales` only — are generalized to look up exam data and gate the "Exámenes Extra" UI per subject instead of by a single hardcoded string.

**Tech Stack:** React, Vite, Vitest + Testing Library, plain Node (ESM) for the one-off data-generation script.

## Global Constraints

- Every question object has exactly the shape `{ stimulus, source, question, options, correct, mepBloque }`, matching `src/data/socialesExtraExams.js` exactly (verbatim field names).
- Every question has **exactly 3 options** (A/B/C) — never 4.
- `mepBloque` must be one of the existing ids from `src/data/subjectConfig.js`: `cuerpo-humano`, `biodiversidad`, `energia`, `geofisica`.
- Exam 1 and Exam 2 have 35 unique questions each (no overlap). Exam 3 has 30 unique questions + 5 repeats from Exam 1/2 with options reordered (correct moved to a different index) — total 35.
- Bloque allocation across exams (from the approved design): Cuerpo Humano 11/10/9, Biodiversidad 10/11/9, Energía 9/8/8, Geofísica 5/6/4 (exam1/exam2/exam3-unique).
- Run single test files with `npx vitest run <path>` (not the default watch mode) per `CLAUDE.md`.
- The one-off parser script is a throwaway dev tool — it must be deleted after generating the data file, not committed.

---

### Task 1: Generate `src/data/cienciasExtraExams.js` from the source markdown

**Files:**
- Create (temporary, deleted at end of task): `scripts/extract-ciencias-exams.mjs`
- Create: `src/data/cienciasExtraExams.js`

**Interfaces:**
- Produces: `export const cienciasExtraExams` — an array of exactly 3 arrays, each an array of 35 objects shaped `{ stimulus: string, source: string, question: string, options: string[3], correct: number (0-2), mepBloque: string }`.

- [ ] **Step 1: Write the parser/generator script**

Create `scripts/extract-ciencias-exams.mjs`:

```js
import fs from 'fs';

const SRC = 'documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md';
const OUT = 'src/data/cienciasExtraExams.js';

const text = fs.readFileSync(SRC, 'utf8');

const BLOQUES = [
  { id: 'cuerpo-humano', start: 1, end: 30, counts: [11, 10, 9] },
  { id: 'biodiversidad', start: 31, end: 60, counts: [10, 11, 9] },
  { id: 'energia', start: 61, end: 85, counts: [9, 8, 8] },
  { id: 'geofisica', start: 86, end: 100, counts: [5, 6, 4] },
];

function bloqueFor(n) {
  return BLOQUES.find((b) => n >= b.start && n <= b.end);
}

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
  // (e.g. "Lea la siguiente información:") — skip it, it's not part of the stimulus.
  let i = 1;
  const stimulusLines = [];
  while (i < lines.length && !/^\*(Adaptado de|Tomado de):/.test(lines[i])) {
    if (lines[i]) stimulusLines.push(lines[i]);
    i++;
  }
  const sourceMatch = lines[i].match(/^\*(?:Adaptado de|Tomado de):\s*(.+?)\*$/);
  const source = sourceMatch[1];
  i++;
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
  return { stimulus: stimulusLines.join(' ').trim(), source, question, options, correct };
}

const Q = [null];
for (const { num, raw } of blocks) {
  const parsed = parseBlock(raw);
  const bloque = bloqueFor(num);
  Q[num] = { ...parsed, mepBloque: bloque.id };
}

if (Q.length - 1 !== 100) throw new Error(`Expected 100 questions, got ${Q.length - 1}`);
for (let n = 1; n <= 100; n++) {
  const q = Q[n];
  if (!q.stimulus || !q.source || !q.question) throw new Error(`Q${n} missing a text field`);
  if (q.options.length !== 3) throw new Error(`Q${n} has ${q.options.length} options`);
  if (q.correct < 0 || q.correct > 2) throw new Error(`Q${n} has invalid correct index`);
}

// Fair interleaved assignment: spreads a bloque's questions across exam1/exam2/exam3
// proportionally (per `counts`) rather than chunking them, so each exam samples
// varied sub-topics within the bloque instead of just its first N questions.
function interleaveAssign(length, counts) {
  const remaining = [...counts];
  const result = [];
  for (let i = 0; i < length; i++) {
    let best = -1;
    let bestScore = -Infinity;
    for (let b = 0; b < counts.length; b++) {
      if (remaining[b] <= 0) continue;
      const score = remaining[b] / counts[b];
      if (score > bestScore) { bestScore = score; best = b; }
    }
    result.push(best);
    remaining[best]--;
  }
  return result;
}

const exam1Nums = [];
const exam2Nums = [];
const exam3UniqueNums = [];
for (const b of BLOQUES) {
  const length = b.end - b.start + 1;
  const assignment = interleaveAssign(length, b.counts);
  assignment.forEach((bucket, idx) => {
    const num = b.start + idx;
    if (bucket === 0) exam1Nums.push(num);
    else if (bucket === 1) exam2Nums.push(num);
    else exam3UniqueNums.push(num);
  });
}

if (exam1Nums.length !== 35) throw new Error(`exam1 has ${exam1Nums.length}, expected 35`);
if (exam2Nums.length !== 35) throw new Error(`exam2 has ${exam2Nums.length}, expected 35`);
if (exam3UniqueNums.length !== 30) throw new Error(`exam3Unique has ${exam3UniqueNums.length}, expected 30`);

// 5 repeats for exam3: 2 from cuerpo-humano, 1 each from the other 3 bloques,
// taken from exam1's lowest-numbered question in that bloque, with the correct
// option rotated to a different position.
function pickRepeats() {
  const byBloque = (id) => exam1Nums.filter((n) => Q[n].mepBloque === id).sort((a, b) => a - b);
  const picks = [
    ...byBloque('cuerpo-humano').slice(0, 2),
    byBloque('biodiversidad')[0],
    byBloque('energia')[0],
    byBloque('geofisica')[0],
  ];
  return picks.map((n) => {
    const q = Q[n];
    const rotated = [...q.options.slice(q.correct), ...q.options.slice(0, q.correct)];
    return { num: n, stimulus: q.stimulus, source: q.source, question: q.question, options: rotated, correct: 0, mepBloque: q.mepBloque };
  });
}
const repeats = pickRepeats();

function fmtQuestion(q) {
  return `  {\n    stimulus: ${JSON.stringify(q.stimulus)},\n    source: ${JSON.stringify(q.source)},\n    question: ${JSON.stringify(q.question)},\n    options: [\n      ${q.options.map((o) => JSON.stringify(o)).join(',\n      ')},\n    ],\n    correct: ${q.correct},\n    mepBloque: ${JSON.stringify(q.mepBloque)},\n  }`;
}

const qEntries = [];
for (let n = 1; n <= 100; n++) {
  qEntries.push(`  // Q${n}\n${fmtQuestion(Q[n])},`);
}

const repeatEntries = repeats.map((r) => `  // Repeat of Q${r.num} — correct moved to index 0\n${fmtQuestion(r)},`);

const file = `// src/data/cienciasExtraExams.js
// Pre-built MEP extra exam question sets for Ciencias.
// Source: documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md
// Bloques: cuerpo-humano (Q1-30), biodiversidad (Q31-60), energia (Q61-85), geofisica (Q86-100).
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

export const cienciasExtraExams = [exam1, exam2, exam3];
`;

fs.writeFileSync(OUT, file);
console.log('Wrote', OUT);
console.log('exam1Nums', exam1Nums);
console.log('exam2Nums', exam2Nums);
console.log('exam3UniqueNums', exam3UniqueNums);
console.log('repeats', repeats.map((r) => r.num));
```

- [ ] **Step 2: Run the script from the repo root**

Run: `cd /Users/didiercorrales/Documents/didierRepos/sociales && node scripts/extract-ciencias-exams.mjs`

Expected: prints `Wrote src/data/cienciasExtraExams.js` plus the 4 number arrays and `repeats` array, with no thrown errors. If any `throw new Error(...)` fires, the regex didn't match some block — open `src/data/cienciasExtraExams.js` is NOT created in that case; fix the failing block's parsing in the script and rerun.

- [ ] **Step 3: Spot-check the generated file against the source markdown**

Run: `node -e "const {cienciasExtraExams} = await import('./src/data/cienciasExtraExams.js'); console.log(JSON.stringify(cienciasExtraExams[0][0], null, 2)); console.log('lengths:', cienciasExtraExams.map(e => e.length));"`

Expected: `lengths: [35, 35, 35]`. Manually compare the printed first question's `stimulus`/`source`/`question`/`options`/`correct` against question 1 in `documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md` (the sangre/plasma question) — they must match (plasma is option C, correct index 2).

Also spot-check a question containing an embedded quote to verify escaping, e.g. question 29 (the "Mano de Tigre" térraba question, originally Q29 in the source — find it in whichever exam array it landed in by grepping):

Run: `grep -n "Mano de Tigre" src/data/cienciasExtraExams.js`

Expected: one match, with the quotes properly escaped as `\"`.

- [ ] **Step 4: Delete the one-off script**

Run: `rm scripts/extract-ciencias-exams.mjs`

Expected: only `src/data/cienciasExtraExams.js` remains as a new file; `scripts/extract-ciencias-exams.mjs` no longer exists. Confirm with `git status` that only `src/data/cienciasExtraExams.js` shows as untracked (besides any pre-existing untracked files).

- [ ] **Step 5: Commit**

```bash
git add src/data/cienciasExtraExams.js
git commit -m "feat: add generated Ciencias extra exam question data"
```

---

### Task 2: Add structural tests for `cienciasExtraExams`

**Files:**
- Create: `src/tests/cienciasExtraExams.test.js`

**Interfaces:**
- Consumes: `cienciasExtraExams` from `src/data/cienciasExtraExams.js` (produced in Task 1).

- [ ] **Step 1: Write the test file**

Create `src/tests/cienciasExtraExams.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { cienciasExtraExams } from '../data/cienciasExtraExams';

const VALID_BLOQUES = ['cuerpo-humano', 'biodiversidad', 'energia', 'geofisica'];

describe('cienciasExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(cienciasExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    cienciasExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('source');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
      expect(q.stimulus.length, `question ${i} stimulus`).toBeGreaterThan(0);
      expect(q.source.length, `question ${i} source`).toBeGreaterThan(0);
      expect(q.question.length, `question ${i} question text`).toBeGreaterThan(0);
    });
  });

  it('every question has exactly 3 options', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
      q.options.forEach((opt, j) => {
        expect(opt.length, `question ${i} option ${j}`).toBeGreaterThan(0);
      });
    });
  });

  it('every correct index is a valid option index', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('every question uses a valid ciencias mepBloque', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(VALID_BLOQUES, `question ${i}`).toContain(q.mepBloque);
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(cienciasExtraExams[0].map(q => q.question));
    cienciasExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...cienciasExtraExams[0].map(q => q.question),
      ...cienciasExtraExams[1].map(q => q.question),
    ]);
    const duplicates = cienciasExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
```

- [ ] **Step 2: Run the test**

Run: `npx vitest run src/tests/cienciasExtraExams.test.js`

Expected: all tests PASS. If any fails, the failure points to which part of Task 1's generated data is wrong (e.g. wrong bloque, wrong duplicate count) — fix `src/data/cienciasExtraExams.js` directly (it's plain generated data, safe to hand-edit at this point) and rerun.

- [ ] **Step 3: Commit**

```bash
git add src/tests/cienciasExtraExams.test.js
git commit -m "test: add structural tests for cienciasExtraExams"
```

---

### Task 3: Generalize `SimulacroExtra.jsx` to support ciencias

**Files:**
- Modify: `src/pages/SimulacroExtra.jsx`
- Modify: `src/tests/SimulacroExtra.test.jsx`

**Interfaces:**
- Consumes: `cienciasExtraExams` from `src/data/cienciasExtraExams.js` (Task 1), `socialesExtraExams` from `src/data/socialesExtraExams.js` (existing).
- Produces: `SimulacroExtra` now resolves questions via subject-keyed lookup instead of a single hardcoded array, for any subject present in the lookup map.

- [ ] **Step 1: Add a failing test for the ciencias case**

In `src/tests/SimulacroExtra.test.jsx`, add a mock for `cienciasExtraExams` alongside the existing `socialesExtraExams` mock, and 3 new test cases. Replace the top of the file (the `vi.mock` block) and append new `it` blocks inside the existing `describe('SimulacroExtra', ...)`:

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

vi.mock('../data/cienciasExtraExams', () => ({
  cienciasExtraExams: [
    Array.from({ length: 35 }, (_, i) => ({
      stimulus: `Estímulo Ciencias ${i}`,
      source: `Fuente Ciencias ${i}`,
      question: `Pregunta Ciencias ${i}`,
      options: ['A', 'B', 'C'],
      correct: 0,
      mepBloque: 'cuerpo-humano',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Ciencias B${i}`,
      options: ['X', 'Y', 'Z'],
      correct: 1,
      mepBloque: 'biodiversidad',
    })),
    Array.from({ length: 35 }, (_, i) => ({
      question: `Pregunta Ciencias C${i}`,
      options: ['P', 'Q', 'R'],
      correct: 2,
      mepBloque: 'energia',
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
    expect(screen.getAllByText(/35 preguntas/i).length).toBeGreaterThan(0);
  });

  it('renders the start screen for ciencias exam 1', () => {
    renderAt('/simulacro-extra/ciencias/1');
    expect(screen.getByText(/Examen Extra 1/i)).toBeInTheDocument();
  });

  it('renders the start screen for ciencias exam 2', () => {
    renderAt('/simulacro-extra/ciencias/2');
    expect(screen.getByText(/Examen Extra 2/i)).toBeInTheDocument();
  });

  it('renders the start screen for ciencias exam 3', () => {
    renderAt('/simulacro-extra/ciencias/3');
    expect(screen.getByText(/Examen Extra 3/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify the new ciencias cases fail**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: the 3 new `ciencias` tests FAIL (redirected to Home because `'ciencias'` isn't in `VALID_SUBJECTS` yet); the pre-existing `sociales` tests still PASS.

- [ ] **Step 3: Generalize `SimulacroExtra.jsx`**

In `src/pages/SimulacroExtra.jsx`, replace lines 1–10 (imports + `VALID_SUBJECTS`) with:

```jsx
// src/pages/SimulacroExtra.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { subjectConfig } from '../data/subjectConfig';
import { socialesExtraExams } from '../data/socialesExtraExams';
import { cienciasExtraExams } from '../data/cienciasExtraExams';
import SimulacroStart from '../components/Simulacro/SimulacroStart';
import SimulacroActive from '../components/Simulacro/SimulacroActive';
import SimulacroResults from '../components/Simulacro/SimulacroResults';

const extraExamsBySubject = {
  sociales: socialesExtraExams,
  ciencias: cienciasExtraExams,
};
const VALID_SUBJECTS = Object.keys(extraExamsBySubject);
```

Then replace the line `const questions = socialesExtraExams[index];` with:

```jsx
  const questions = extraExamsBySubject[subject][index];
```

Also update the bounds check that currently reads `index >= socialesExtraExams.length` to use the subject-specific array:

```jsx
  if (isNaN(index) || index < 0 || index >= extraExamsBySubject[subject].length) return <Navigate to="/" replace />;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/SimulacroExtra.test.jsx`

Expected: all tests PASS (sociales and ciencias).

- [ ] **Step 5: Commit**

```bash
git add src/pages/SimulacroExtra.jsx src/tests/SimulacroExtra.test.jsx
git commit -m "feat: support ciencias extra exams in SimulacroExtra"
```

---

### Task 4: Show the "Exámenes Extra" section for Ciencias in `PruebaMEP.jsx`

**Files:**
- Modify: `src/pages/PruebaMEP.jsx`
- Modify: `src/tests/PruebaMEP.test.jsx`

**Interfaces:**
- Consumes: `subjectConfig` from `src/data/subjectConfig.js` (existing, unchanged).
- Produces: the "Exámenes Extra" block (with 3 links to `/simulacro-extra/{subject}/{1,2,3}`) now renders for both `sociales` and `ciencias`.

- [ ] **Step 1: Update the test file first (TDD)**

In `src/tests/PruebaMEP.test.jsx`, replace the test `'does NOT show extra exam links inside other subject accordions'` (it currently opens **Ciencias** to assert absence, which will become wrong) and add a new positive test for ciencias. Replace the last test in the file with:

```jsx
  it('does NOT show extra exam links inside other subject accordions', () => {
    renderPage();
    fireEvent.click(screen.getByRole('button', { name: /Español/i }));
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
```

- [ ] **Step 2: Run the test to verify the new/changed cases fail**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: `'shows links to the 3 extra exams inside expanded ciencias accordion'` FAILS (no extra-exam links render for ciencias yet). The renamed `'does NOT show...'` test should already PASS since Español never had extra exams.

- [ ] **Step 3: Generalize the gate in `PruebaMEP.jsx`**

In `src/pages/PruebaMEP.jsx`, add a new constant near the top (after `subjectNotes`):

```jsx
const SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias'];
```

Then change the conditional block currently reading `{subjectId === 'sociales' && (` to:

```jsx
                  {SUBJECTS_WITH_EXTRA_EXAMS.includes(subjectId) && (
```

(The rest of that block already uses the dynamic `subjectId` variable for its links — e.g. `to={`/simulacro-extra/sociales/${n}`}` — so it must also be generalized. Replace that hardcoded `'sociales'` in the link `to` with `subjectId`:)

```jsx
                            to={`/simulacro-extra/${subjectId}/${n}`}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/tests/PruebaMEP.test.jsx`

Expected: all tests PASS.

- [ ] **Step 5: Run the full test suite once to confirm no regressions**

Run: `npx vitest run`

Expected: all test files PASS, including `src/tests/cienciasExtraExams.test.js`, `src/tests/SimulacroExtra.test.jsx`, `src/tests/PruebaMEP.test.jsx`, and every pre-existing test file (e.g. `socialesExtraExams.test.js`, `SimulacroExtra.stimulus...` etc.) unaffected.

- [ ] **Step 6: Commit**

```bash
git add src/pages/PruebaMEP.jsx src/tests/PruebaMEP.test.jsx
git commit -m "feat: show Ciencias extra exams section in PruebaMEP"
```
