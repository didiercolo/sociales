# Español Extra Exams — Design

## Overview

Add 3 extra practice exams (35 questions each) for Español under `/prueba-mep`, following the exact pattern already established for Estudios Sociales (`socialesExtraExams.js` + `SimulacroExtra` page). Source material: `documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md`, which contains 100 questions across 7 source sub-blocks.

## Source data shape

Same machine-parseable structure as the Sociales/Ciencias source files:

```
**N)** [intro / "Lea el siguiente texto:"]
> [stimulus text/paragraph]
[question text]
A) [option]
**✅ B) [option]**   ← ✅ marks the correct option, can be on A, B, or C
C) [option]
---
```

Source sub-blocks (by question number range — these are reading-skill categories, not the official MEP bloques):

| Source block | Range | Count |
|---|---|---|
| A · Ideas Fundamentales y Complementarias | 1–15 | 15 |
| B · Relaciones de Causa y Efecto | 16–30 | 15 |
| C · Tema de un Texto Literario | 31–44 | 14 |
| D · Posiciones Ideológicas de los Personajes | 45–58 | 14 |
| E · Información Implícita en un Texto | 59–72 | 14 |
| F · Conflictos de los Personajes | 73–86 | 14 |
| G · Comportamientos de los Personajes | 87–100 | 14 |

## Bloque mapping

`subjectConfig.js` defines only 2 official Español bloques: `comprension-lectora` and `produccion-escrita`. All 100 source questions are multiple-choice reading-comprehension items — none are writing/production tasks — so **every question gets `mepBloque: "comprension-lectora"`**, via a single `MEP_BLOQUE` constant (same approach as `socialesExtraExams.js`, which tags all 100 of its questions `geografia-historia` despite having a second official bloque). The bloque breakdown badge on each exam's start screen will show a single "Comprensión Lectora: 35" entry, matching Sociales' current UX.

## Question distribution

Mirrors the exact algorithm already used in `socialesExtraExams.js` (which also draws from 7 source sub-blocks):

- **Exam 1**: first 5 questions from each of the 7 blocks → 35 questions.
- **Exam 2**: next 5 questions from each of the 7 blocks → 35 questions.
- **Exam 3 unique**: remaining questions from each block (5, 5, 4, 4, 4, 4, 4) → 30 questions.
- **Exam 3 repeats**: 5 questions reused from Exam 1 — the first question of each of the first 5 source blocks (A–E) — with their `options` array reordered (correct answer moved to a different index, `correct` updated to match) so the repeat isn't trivially recognizable.
- `exam3 = [...exam3Unique, ...exam3Repeats]` → 35 questions.

This consumes all 100 source questions exactly once across exam1 (35) + exam2 (35) + exam3unique (30) = 100, then exam3 adds 5 repeats to reach 35, identical in structure to the Sociales file.

## Data file: `src/data/espanolExtraExams.js`

Mirrors `socialesExtraExams.js` exactly:
- `const MEP_BLOQUE = "comprension-lectora";`
- A `Q` array (1-indexed, `Q[1]..Q[100]`) holding all 100 transcribed questions as `{ stimulus, source, question, options, correct, mepBloque }`. (`source` is the citation line under the stimulus, e.g. "Tomado de:" / "Adaptado de:" if present in the markdown, else a reasonable placeholder consistent with the other two files' style.)
- A `pick(indices)` helper.
- `exam1`, `exam2`, `exam3Unique` built via `pick([...])` using the index lists derived from the table above.
- `exam3Repeats`: 5 hand-picked objects (copied from `Q`, options array reordered, `correct` updated to match).
- `export const espanolExtraExams = [exam1, exam2, [...exam3Unique, ...exam3Repeats]];`

Transcription will be done by a small one-off Node parser script (not committed) that reads the markdown and emits the 100 `Q` entries, to avoid manual copy errors across 100 questions. The generated file is then hand-reviewed before being written into the repo in the exact same style/formatting as `socialesExtraExams.js` (per-question `// QN` comments, same property order).

## Wiring changes

**`src/pages/SimulacroExtra.jsx`**
- Add `espanol: espanolExtraExams` to the `extraExamsBySubject` map (alongside `sociales` and `ciencias`). `VALID_SUBJECTS` is already derived from `Object.keys(extraExamsBySubject)`, so no further change needed there.

**`src/pages/PruebaMEP.jsx`**
- Add `'espanol'` to `SUBJECTS_WITH_EXTRA_EXAMS`. The extra-exam links already use `/simulacro-extra/${subjectId}/${n}`, so this automatically points to `/simulacro-extra/espanol/{1,2,3}`.

No changes needed in `SimulacroStart`, `SimulacroActive`, or `SimulacroResults` — already subject-agnostic.

## Tests

- **New `src/tests/espanolExtraExams.test.js`**: same assertions as `socialesExtraExams.test.js` / `cienciasExtraExams.test.js` — 3 exams, 35 questions each, 3 options per question, valid `correct` index, exam1/exam2 fully unique (no overlapping question text), exam3 has exactly 5 duplicates (by question text) of questions appearing in exam1/exam2, all `mepBloque` values equal `"comprension-lectora"`.
- **`src/tests/SimulacroExtra.test.jsx`**: extend the parametrized subject case (already covering `sociales`/`ciencias`) to include `espanol`.
- **`src/tests/PruebaMEP.test.jsx`**: the existing test `'does NOT show extra exam links inside other subject accordions'` (line 77) currently opens the **Español** accordion to assert absence — since Español will now have extra exams, switch that assertion to **Matemáticas** (the only subject left without extra exams). Add a new test confirming Español *does* show its 3 extra exam links with hrefs `/simulacro-extra/espanol/{1,2,3}`.

## Out of scope

- No changes to Estudios Sociales or Ciencias data/behavior.
- No UI restyling — reusing the existing accent-color-driven, config-based rendering as-is.
- Not adding extra exams for Matemáticas (not requested).
