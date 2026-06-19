# Español Content Rebuild vs `espanol.md` — Design Spec

**Date:** 2026-06-18
**Status:** Approved (design), pending spec review
**Author:** Claude (with Didier)

## Problem

`src/data/lessons/espanol.js` is the only live source for the `/espanol` page
(`src/data/lessonsData.js` imports `espanolLessons` directly; `espanolGrade6.js`
is dead code consumed only by `src/scripts/seedDailyQuestionsClient.js`). Its
content predates the full source document now available at
`documents/full-books/extracted/espanol.md` (Morpho textbook, "Teoría y
Práctica", pages 64–96), which covers comprensión lectora in 7 theory blocks
plus an 85-question exercise bank — and supersedes the thinner
`repaso_espanol_6to_grado.md` referenced by the earlier
`2026-06-11-lesson-content-enrichment-design.md`.

Two concrete problems exist today:

1. **Missing lesson.** Bloque 1 ("Ideas Fundamentales y Complementarias") has
   no theory lesson at all, even though quiz questions testing it exist.
2. **Misfiled quiz.** All 35 existing quiz questions — covering ideas
   fundamentales, complementarias, causa-efecto, tema, ideología, conflictos,
   and comportamientos — are dumped into the `relaciones-causa-efecto`
   lesson's `quiz[]`. The other three doc-backed lessons
   (`tema-e-ideologia-del-texto`, `informacion-implicita`,
   `analisis-de-personajes`) have empty `quiz: []`.

This follows the same pattern just fixed for Ciencias (commit `2fb0d61`,
"fill content gaps in Ciencias lessons vs source material") — comparing live
lesson data against a source-of-truth extracted markdown and patching gaps —
but extends it to also cover the quiz layer, since `espanol.md`'s exercise
bank is now rich enough to support that.

## Goal

Make every comprensión-lectora lesson in `espanol.js` mirror `espanol.md`'s
theory content (no missing worked examples, no missing strategy
methodology), and give every lesson a correctly-topic-matched quiz of
meaningful size, sourced from both the existing question bank and
`espanol.md`'s exercises.

## Scope

**In scope** — `src/data/lessons/espanol.js` only, the 4 existing doc-backed
lessons plus 1 new lesson, all tagged `mepBloque: 'comprension-lectora'`.

**Out of scope:**
- `repaso-espanol-primer-examen` lesson — covers tipos de lenguaje,
  comunicación, sinónimos/antónimos, acentuación, uso de letras. Zero overlap
  with `espanol.md` (which only covers comprensión lectora topics). Left
  untouched.
- `espanolGrade6.js` — legacy duplicate, consumed only by the seed script.
  Left untouched per the existing enrichment spec's precedent.
- `produccion-escrita` mepBloque — no lessons exist for it and `espanol.md`
  doesn't cover it. Not addressed here.
- Matemática, routing, components, styling.

### Fidelity rule (carried over, non-negotiable)

Only content present in `espanol.md` is added to lesson sections. No invented
facts. Existing content not sourced from the md (e.g. the "Conectores
causales y consecutivos" section with its word lists) is **kept as-is** —
this rule is additive, not a mandate to strip content that predates the
source doc.

For quiz questions converted from `espanol.md`'s 3-option (A/B/C) exercise
bank into this file's 4-option schema, the added 4th distractor is the only
"new" text per question — it must be plausible but clearly wrong, not a
restatement of fact not grounded in the passage.

## Lesson structure & content mapping

| Order | Lesson id | md source | Content to add |
|---|---|---|---|
| 1 (new) | `ideas-fundamentales-y-complementarias` | Bloque 1 | New lesson. Sections: definition + características of ideas fundamentales/principales; definition + características of ideas complementarias/secundarias; both worked examples (ecosistema passage showing fundamental vs. complementary breakdown; deforestación passage with the A/B/C reasoning and "Opción B" explanation). |
| 2 | `relaciones-causa-efecto` | Bloque 2 | Add the missing worked example (abejas/día mundial de la biodiversidad passage: tema → causa → efecto breakdown). Keep existing "¿Qué son...", "Conectores causales y consecutivos", and "¿Por qué son importantes?" sections as-is. |
| 3 | `tema-e-ideologia-del-texto` | Bloques 3 + 4 | Add the missing Ficha #4 strategy methodology: hipótesis/conjeturas (with its question table), analogías (with its question table), conclusiones (with its question table); add the hormiga/cigarra worked example. Keep existing "El tema de un texto literario" and "¿Por qué es importante..." sections. |
| 4 | `informacion-implicita` | Bloque 5 | Add the missing worked example (Jorge's cumpleaños passage with its 3 hypothesis Q&As: edad, día de la fiesta vs. cumpleaños, tíos/tías). |
| 5 | `analisis-de-personajes` | Bloques 6 + 7 | Add the missing worked examples: Anancy/tesoro (conflicto) and joven perezosa/Reina (comportamiento). Keep existing "Motivaciones del personaje" section (not md-sourced, kept per fidelity rule). |
| — | `repaso-espanol-primer-examen` | none | Untouched. |

New lesson's `description` follows the existing style (1-2 sentence summary
of what the student will learn). HTML content uses the same tag vocabulary
already in the file: `<p>`, `<strong>`, `<em>`, `<ul><li>`, `<h3>`,
`<blockquote>`.

## Quiz rebuild

### Source pools

`espanol.md`'s EJERCICIOS section has 85 numbered exercises, unevenly spread
across topics (md mislabels exercise #85 under Bloque 7's header even though
its content tests ideología — it will be filed by actual topic, not by the
md's possibly-mislabeled section header):

| Topic | md exercises | Existing quiz Qs to redistribute here |
|---|---|---|
| Ideas fundamentales (#1–20) + complementarias (#21–33) | 33 | ~10 |
| Causa y efecto (#34–49) | 16 | ~6 |
| Tema (#50–58) + ideología (#59–65, incl. #85) | 17 | ~8 |
| Información implícita (#66–71) | 6 | 0 |
| Conflictos (#72–79) + comportamientos (#80–84) | 13 | ~9 |

### Process

1. **Redistribute first.** Move each of the 35 existing quiz questions out of
   `relaciones-causa-efecto` into the lesson matching its actual topic. This
   alone fixes the "empty quiz" problem for 3 lessons before any new content
   is added.
2. **Convert and add.** For each md exercise matching a lesson's topic,
   convert it to this file's `{ question, options: [4], correct, mepBloque:
   'comprension-lectora' }` shape:
   - Reuse the passage and the 3 given options verbatim (light rewording
     only if grammatically required for the 4-option format).
   - Add one plausible 4th distractor per question.
   - Determine `correct` by reading the passage — `espanol.md`'s exercise
     bank has no answer key, unlike its worked Ficha examples. Any exercise
     whose correct answer is genuinely ambiguous after careful reading will
     be skipped and flagged, not guessed.
3. **Target size:** ~15-20 questions per lesson after combining both pools,
   *except* Información Implícita, which tops out around 6-8 since the md
   only offers 6 source exercises and there is no existing-quiz pool to draw
   from. This shortfall is accepted — no invented passages to pad it out.
4. Leave `questionCount` unset on all 5 lessons (defaults to 5 sampled per
   attempt, consistent with every other lesson in the file except the
   `repaso` exam lesson).

## Verification

- Edit lesson-by-lesson, never a wholesale file rewrite — keeps diffs
  reviewable and avoids breaking JS string literals on accents/quotes.
- After the full pass: `npm run build`, `npm run lint`, `npx vitest run`
  (covers `src/tests/lessonsData.test.js` structural checks).
- Spot-check rendered lessons and sampled quizzes in the dev server
  (`npm run dev`), reading at least one full quiz attempt per lesson.
- Manually re-verify each new/moved question's `correct` index against its
  final option order — index drift is the most likely silent bug here.

## Risks

| Risk | Mitigation |
|---|---|
| Inferring correct answers with no answer key in the md's exercise bank | Read each passage carefully; flag and skip any genuinely ambiguous exercise rather than guess |
| JS string escaping (accents, quotes, em-dashes in dialogue) breaking the build | Build + lint after the full pass |
| Quiz `correct` index drift when adding a 4th option or reordering | Manually re-verify every question's index after conversion |
| Información Implícita lesson ending up thin (~6-8 Qs vs. ~15-20 elsewhere) | Accepted explicitly — no invented passages; noted in this spec so it isn't mistaken for an oversight later |
| Large single-file diff (`espanol.js` will roughly double in size) | Lesson-by-lesson edits, reviewed incrementally |
