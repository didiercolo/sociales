# Matemáticas Extra Exams — Design

## Overview

Add 3 extra practice exams (35 questions each) for Matemáticas under `/prueba-mep`, following the established pattern from Sociales/Ciencias/Español (`*ExtraExams.js` data file + shared `SimulacroExtra` page). Source material: `documents/AI Geneterated exams/Matematicas_100_Preguntas_Formato_MEP.md`, which contains 100 questions across 5 bloques that map 1:1 onto `subjectConfig.js`'s official Matemáticas bloques.

## Source data shape

The markdown uses the same `**N)** ... A) ... **✅ X) ...** ... ---` block structure as the other three source files, but with two structural differences that change how questions are stored:

1. **No clean stimulus/question split.** Sociales/Ciencias/Español all have a distinct stimulus paragraph followed by a separate question sentence. Matemáticas word problems are frequently a single fused sentence (setup + question, no blank line between them), e.g.:
   > Una fábrica de telas produce 24,5 metros de tela por hora. Si la fábrica trabaja durante 3,2 horas seguidas, ¿cuántos metros de tela produce en total?

   **Decision:** every question stores the entire problem text (everything between the `**N)**` marker and the option lines) as a single `question` field. `stimulus` is omitted entirely for all 100 questions — `SimulacroActive.jsx` already renders `stimulus` conditionally (`{question.stimulus && (...)}`), so this is safe.

2. **5 questions embed a markdown table** instead of (or alongside) prose: Q2 (place-value table), Q63 (sequence-completion table), Q64 (price table), Q86 (frequency table), Q98 (frequency table). Rendered verbatim, raw `| pipe | syntax |` would show as broken-looking text in the plain `<p>` tag `SimulacroActive.jsx` uses (no markdown rendering). **Decision:** these 5 are hand-transcribed into a readable inline sentence as part of `question`, e.g. Q86's table becomes "Observe la siguiente tabla de frecuencias... Sección A: 15 niñas y 12 niños. Sección B: 14 niñas y 19 niños. Sección C: 16 niñas y 13 niños. Según la tabla anterior, ¿cuál sección posee la mayor cantidad total de estudiantes?" — incorporated directly into the generator script's output for those 5 indices (not a generic parsing rule).

No citation lines (`*Adaptado de:*` / `*Tomado de:*`) appear anywhere in this source, same as Español — `source` is omitted for all 100 questions, same precedent.

Source bloques (by question number range), already matching `subjectConfig.js`'s `matematicas.bloques` ids exactly:

| Bloque | id | Range | Count |
|---|---|---|---|
| Números | `numeros` | 1–22 | 22 |
| Geometría | `geometria` | 23–42 | 20 |
| Medidas | `medidas` | 43–60 | 18 |
| Relaciones y Álgebra | `algebra` | 61–80 | 20 |
| Estadística y Probabilidad | `estadistica` | 81–100 | 20 |

Unlike Sociales/Español (which collapse N source sub-blocks into a single official bloque) and like Ciencias (4 source blocks → 4 official bloques), here the mapping is 1:1 and `mepBloque` varies per question using the real bloque id directly — no `MEP_BLOQUE` single-constant shortcut.

## Question distribution

Proportional to each bloque's size, split across exam1 (35) / exam2 (35) / exam3-unique (30):

| Bloque | Size | Exam 1 | Exam 2 | Exam 3 unique |
|---|---|---|---|---|
| Números | 22 | 8 | 8 | 6 |
| Geometría | 20 | 7 | 7 | 6 |
| Medidas | 18 | 6 | 6 | 6 |
| Álgebra | 20 | 7 | 7 | 6 |
| Estadística | 20 | 7 | 7 | 6 |
| **Total** | **100** | **35** | **35** | **30** |

Within each bloque, take the first N questions (by source number) for exam1, the next N for exam2, the remainder for exam3-unique — same first-N/next-N/remainder method as Español.

**Exam 3 repeats**: exactly 5 — one per bloque (the first question of each bloque, already in exam1: questions 1, 23, 43, 61, 81), with `options` rotated so the correct answer moves to a different index. Unlike the 7-source-block subjects (where 5 repeats came from only the first 5 of 7 blocks), here there are exactly 5 bloques, so every bloque contributes exactly one repeat — no blocks are skipped.

`exam3 = [...exam3Unique, ...exam3Repeats]` → 30 + 5 = 35, matching the established total.

## Data file: `src/data/matematicasExtraExams.js`

Mirrors the established pattern, adapted for the shape change:
- A `Q` array (1-indexed, `Q[1]..Q[100]`) holding all 100 transcribed questions as `{ question, options, correct, mepBloque }` — no `stimulus`, no `source`.
- A `pick(indices)` helper.
- `exam1`, `exam2`, `exam3Unique` built via `pick([...])` using the index lists derived from the distribution table above.
- `exam3Repeats`: 5 hand-picked objects (copied from `Q[1]`, `Q[23]`, `Q[43]`, `Q[61]`, `Q[81]`, options array reordered, `correct` updated to match).
- `export const matematicasExtraExams = [exam1, exam2, [...exam3Unique, ...exam3Repeats]];`

Transcription done by a one-off (uncommitted) Node parser script reading the markdown, with the 5 table-bearing questions (Q2, Q63, Q64, Q86, Q98) patched to hand-written inline-sentence versions before being written into the repo in the same style as the other three `*ExtraExams.js` files (per-question `// QN` comments, same property order minus the omitted fields).

## Wiring changes

**`src/pages/SimulacroExtra.jsx`**
- Add `matematicas: matematicasExtraExams` to the `extraExamsBySubject` map (alongside `sociales`, `ciencias`, `espanol`). `VALID_SUBJECTS` is already derived from `Object.keys(extraExamsBySubject)`.

**`src/pages/PruebaMEP.jsx`**
- Add `'matematicas'` to `SUBJECTS_WITH_EXTRA_EXAMS`. Links already use `/simulacro-extra/${subjectId}/${n}`, so this automatically points to `/simulacro-extra/matematicas/{1,2,3}`.

No changes needed in `SimulacroStart`, `SimulacroActive`, or `SimulacroResults` — already subject-agnostic and already render `stimulus`/`source` conditionally.

## Tests

- **New `src/tests/matematicasExtraExams.test.js`**: same structural assertions as the precedent test files — 3 exams, 35 questions each, exactly 3 options, valid `correct` index, every `mepBloque` is one of `numeros`/`geometria`/`medidas`/`algebra`/`estadistica`. **Dedup key is `question` text** (not `stimulus`, since there is no `stimulus` field here) — verified safe because each `question` stores the full problem text including its unique numeric/contextual setup, not a short reusable prompt (confirmed: even the 3 problems sharing the closing phrase "¿Cuál es el resultado?" have distinct full text). Checks: exam1/exam2 share no question text, exam3 has exactly 5 duplicates of exam1/exam2 question text.
- **`src/tests/SimulacroExtra.test.jsx`**: extend with a `matematicas` mock case and 3 new test cases, same pattern as the `espanol` addition.
- **`src/tests/PruebaMEP.test.jsx`**: Matemáticas was the "no extra exams" subject used by the negative test `'does NOT show extra exam links inside other subject accordions'`. Since every subject will now have extra exams, that test has no remaining target — **delete it** rather than retarget it. Add a new positive test confirming Matemáticas shows its 3 extra exam links with hrefs `/simulacro-extra/matematicas/{1,2,3}`.

## Out of scope

- No changes to Sociales, Ciencias, or Español data/behavior.
- No UI restyling.
- No generic markdown-table-to-text parsing logic — the 5 affected questions are hand-transcribed, not auto-converted.
