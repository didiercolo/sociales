# Design: Exámenes Extra MEP — Estudios Sociales

**Date:** 2026-06-17  
**Status:** Approved

## Overview

Add 3 extra pre-defined MEP-format exams to the Estudios Sociales section of `/prueba-mep`. Each exam has 35 questions sourced from a 100-question AI-generated bank (`documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md`). Questions include a stimulus paragraph and source citation, displayed during the exam. The existing "Practicar Simulacro" (random sampling) remains unchanged.

---

## 1. Data Format

### Source File

`documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md`

100 questions organized in 7 blocks:
- Bloque A: Posición Geográfica y Relieve (Q1–15)
- Bloque B: Historia Antigua y Pueblos Originarios (Q16–35)
- Bloque C: Conquista y Período Colonial (Q36–50)
- Bloque D: Independencia, Pacto de Concordia y Anexión de Nicoya (Q51–65)
- Bloque E: La Campaña Nacional (Q66–75)
- Bloque F: Las Reformas Liberales (Q76–85)
- Bloque G: Las Reformas Sociales de 1940 y la Guerra Civil de 1948 (Q86–100)

### Question Object Shape

```js
{
  stimulus: string,    // paragraph(s) from the MD source
  source: string,      // attribution (e.g., "Instituto Geográfico Nacional.")
  question: string,    // the actual question text
  options: string[],   // 3 answer options (A, B, C)
  correct: number,     // index into options[] (0, 1, or 2)
  mepBloque: string,   // "geografia-historia" for all questions in this bank
}
```

### New Data File

`src/data/socialesExtraExams.js`

Exports:
```js
export const socialesExtraExams = [
  [...35 questions],  // Exam 1
  [...35 questions],  // Exam 2
  [...35 questions],  // Exam 3
];
```

**Exam Splits:**
- All 100 questions are pre-shuffled (order determined at authoring time, not runtime).
- Exam 1: questions at indices 0–34 of the shuffled list (35 unique).
- Exam 2: questions at indices 35–69 of the shuffled list (35 unique).
- Exam 3: questions at indices 70–99 (30 unique) + 5 questions selected from the 100 with their `options` array in a different order and `correct` index updated accordingly.

The 5 repeated questions in Exam 3 are pre-computed with shuffled options baked into the static data.

---

## 2. Route & Pages

### New Route

```
/simulacro-extra/:subject/:examIndex
```

Examples:
- `/simulacro-extra/sociales/1`
- `/simulacro-extra/sociales/2`
- `/simulacro-extra/sociales/3`

Added to `src/App.jsx` as a lazy-loaded route.

### New Page: `src/pages/SimulacroExtra.jsx`

- Reads `:subject` and `:examIndex` from `useParams()`.
- Looks up `socialesExtraExams[examIndex - 1]` for the question array.
- Validates: if subject is not `sociales` or examIndex is out of range, `<Navigate to="/" />`.
- Manages `phase` state (`start` → `active` → `results`) and `answers`/`timeUsed` — same pattern as `Simulacro.jsx`.
- Reuses existing sub-components:
  - `SimulacroStart` — receives question list and bloque breakdown
  - `SimulacroActive` — receives question list
  - `SimulacroResults` — receives questions, answers, timeUsed
- Start screen label: "Examen Extra N" (derived from `:examIndex`).
- No restart shuffling — the question list is fixed; restart just resets state.

### Modified: `src/components/Simulacro/SimulacroActive.jsx`

Add conditional stimulus rendering above each question. When `question.stimulus` is present:

```
┌─────────────────────────────────────────┐
│ Lea el siguiente texto:                  │
│                                          │
│ [stimulus paragraph text]                │
│                                          │
│ (Fuente: [source])                       │
└─────────────────────────────────────────┘

[Question text]
A) ...
B) ...
C) ...
```

Styling: bordered card, light gray background, italic stimulus text, smaller muted source line.  
Questions without `stimulus` (existing lesson quizzes) are unaffected — the block simply doesn't render.

---

## 3. PruebaMEP UI Changes

**File:** `src/pages/PruebaMEP.jsx`

Inside the expanded Estudios Sociales card, below the existing "Practicar Simulacro" button, add:

```
[ 🎯 Practicar Simulacro ]

── Exámenes Extra ──────────────────────────
[ 📝 Examen Extra 1 ]  [ 📝 Examen Extra 2 ]  [ 📝 Examen Extra 3 ]
```

- **Separator:** A small row with muted text "Exámenes Extra" and a horizontal divider — visually distinguishes extras from the main button.
- **Extra buttons:** Secondary style — white background, colored border (using `config.accent`), same font weight as the main button, but visually subordinate. Each links to `/simulacro-extra/sociales/N`.
- **Condition:** The divider + extra buttons only render when `subjectId === 'sociales'`. This is an explicit hardcoded check — no config changes to `subjectConfig.js`.

---

## 4. Files Changed

| File | Change |
|---|---|
| `src/data/socialesExtraExams.js` | **New** — 3 exam arrays of 35 questions each |
| `src/pages/SimulacroExtra.jsx` | **New** — exam page reusing Simulacro sub-components |
| `src/App.jsx` | **Modified** — add `/simulacro-extra/:subject/:examIndex` route |
| `src/pages/PruebaMEP.jsx` | **Modified** — add extra exam buttons inside sociales card |
| `src/components/Simulacro/SimulacroActive.jsx` | **Modified** — conditional stimulus block rendering |

**Files NOT changed:** `Simulacro.jsx`, `SimulacroStart.jsx`, `SimulacroResults.jsx`, `subjectConfig.js`, `lessonsData.js`, `sociales.js`

---

## 5. Out of Scope

- Adding extra exams for other subjects (ciencias, español, matemáticas).
- Randomizing question order within an extra exam at runtime.
- Tracking scores for extra exams in Firebase.
- Tests for `SimulacroExtra.jsx` (can be added in a follow-up).
