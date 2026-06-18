# Ciencias Extra Exams — Design

## Overview

Add 3 extra practice exams (35 questions each) for Ciencias under `/prueba-mep`, following the exact pattern already established for Estudios Sociales (`socialesExtraExams.js` + `SimulacroExtra` page). Source material: `documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md`, which contains 100 questions across 4 bloques.

## Source data shape

The markdown has a consistent, machine-parseable structure for all 100 questions:

```
**N)** [intro phrase]:
[stimulus paragraph]
*Adaptado de: [source]* (or *Tomado de: ...*)
[question text]
A) [option]
B) [option]
**✅ C) [option]**   ← ✅ marks the correct option, can be on A, B, or C
---
```

Bloques (by question number range):

| Bloque | id | Range | Count |
|---|---|---|---|
| Cuerpo Humano | `cuerpo-humano` | 1–30 | 30 |
| Biodiversidad | `biodiversidad` | 31–60 | 30 |
| Energía | `energia` | 61–85 | 25 |
| Geofísica | `geofisica` | 86–100 | 15 |

These ids already exist in `subjectConfig.js` under `ciencias.bloques`.

## Question distribution (proportional, per user choice)

Every exam should mirror the overall topic mix (~30/30/25/15%) rather than clustering by source order. Allocation per bloque across exam1 / exam2 / exam3-unique:

| Bloque | Exam 1 | Exam 2 | Exam 3 (unique) | Total |
|---|---|---|---|---|
| Cuerpo Humano | 11 | 10 | 9 | 30 |
| Biodiversidad | 10 | 11 | 9 | 30 |
| Energía | 9 | 8 | 8 | 25 |
| Geofísica | 5 | 6 | 4 | 15 |
| **Exam total** | **35** | **35** | **30** | **100** |

This consumes all 100 source questions exactly once across exam1 (35) + exam2 (35) + exam3-unique (30), matching the `socialesExtraExams.js` pattern (35+35+30=100).

Exam 3 then appends **5 repeated questions** (pulled from exam1/exam2) with **options reordered** (correct answer moved to a different position) so the exam still totals 35. Repeats are spread across bloques roughly by size: 2 from Cuerpo Humano, 1 each from Biodiversidad, Energía, Geofísica.

Within each bucket, questions keep their original relative order (by question number) for predictability — no shuffling needed since MEP exams aren't randomized within a session.

## Data file: `src/data/cienciasExtraExams.js`

Mirrors `socialesExtraExams.js` exactly:
- A `Q` array (1-indexed, `Q[1]..Q[100]`) holding all 100 transcribed questions as `{ stimulus, source, question, options, correct, mepBloque }`.
- A `pick(indices)` helper.
- `exam1`, `exam2`, `exam3Unique` built via `pick([...])` using the index lists derived from the table above.
- `exam3Repeats`: 5 hand-picked objects (copied from `Q`, options array reordered, `correct` updated to match).
- `export const cienciasExtraExams = [exam1, exam2, [...exam3Unique, ...exam3Repeats]]`.

Transcription will be done by a small one-off Node parser script (not committed) that reads the markdown and emits the 100 `Q` entries, to avoid manual copy errors across 100 questions. The generated file is then hand-reviewed before being written into the repo in the exact same style/formatting as `socialesExtraExams.js` (per-question `// QN` comments, same property order).

## Wiring changes

**`src/pages/SimulacroExtra.jsx`**
- Replace the single `socialesExtraExams` import with a lookup map: `const extraExamsBySubject = { sociales: socialesExtraExams, ciencias: cienciasExtraExams }`.
- `VALID_SUBJECTS` becomes `Object.keys(extraExamsBySubject)`.
- `questions = extraExamsBySubject[subject][index]`.

**`src/pages/PruebaMEP.jsx`**
- Replace the hardcoded `subjectId === 'sociales'` check (gating the "Exámenes Extra" block) with `SUBJECTS_WITH_EXTRA_EXAMS.includes(subjectId)` where `SUBJECTS_WITH_EXTRA_EXAMS = ['sociales', 'ciencias']`.
- The extra-exam links already use `/simulacro-extra/${subjectId}/${n}`, so no further change needed — it'll automatically point to `/simulacro-extra/ciencias/{1,2,3}`.

No changes needed in `SimulacroStart`, `SimulacroActive`, or `SimulacroResults` — they're already subject-agnostic (driven by `config` + `questions` props).

## Tests

- **New `src/tests/cienciasExtraExams.test.js`**: same assertions as `socialesExtraExams.test.js`, adjusted for `mepBloque` being one of the 4 ciencias bloque ids (instead of a single fixed value), and the same structural checks (3 exams, 35 questions each, 3 options, valid `correct` index, exam1/exam2 fully unique, exam3 has exactly 5 duplicates).
- **`src/tests/SimulacroExtra.test.jsx`**: extend with a `ciencias` mock case (or parametrize existing `it.each` over `['sociales', 'ciencias']`) to confirm exam 1/2/3 start screens render for the new subject too.
- **`src/tests/PruebaMEP.test.jsx`**: the existing test `'does NOT show extra exam links inside other subject accordions'` currently opens the **Ciencias** accordion to assert absence — since Ciencias will now have extra exams, switch that assertion to use **Español** (which has no extra exams) instead. Add a new test confirming Ciencias *does* show its 3 extra exam links with hrefs `/simulacro-extra/ciencias/{1,2,3}`.

## Out of scope

- No changes to Estudios Sociales data/behavior.
- No UI restyling — reusing the existing accent-color-driven, config-based rendering as-is.
- Not adding extra exams for Español/Matemáticas (not requested).
