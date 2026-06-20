# Matemáticas Content Rebuild vs `matematicas.md` — Design Spec

**Date:** 2026-06-19
**Status:** Approved (design), pending spec review

## Problem

`src/data/lessons/matematicas.js` (18 lessons) is the only live source for the
`/matematicas` page (`src/data/lessonsData.js` imports `matematicasLessons`
directly; no legacy duplicate file exists, unlike `espanolGrade6.js`). Its
content predates the full source document now available at
`documents/full-books/extracted/matematicas.md`, which contains 54 numbered
theory "Fichas" across the 5 official bloques plus a 183-exercise practice
bank.

A full comparative audit (lesson-by-lesson against ficha-by-ficha) found:

1. **12 of 18 lessons have theory gaps** — missing worked examples, missing
   sub-topics, or (in one case) a factual substitution that changes what's
   being taught (`cuerpos-solidos` teaches "segmentos paralelos/
   perpendiculares" where the source teaches "**planos** paralelos/
   perpendiculares" — edges vs. faces of a solid, not equivalent concepts).
2. **3 fichas have zero coverage anywhere**: Ficha #37 (Temperatura
   Celsius/Fahrenheit), Ficha #41 (Sistema Monetario Nacional), and Ficha #52
   (Media Aritmética) — the last despite `medidas-estadisticas` being an
   obvious, already-existing home for it.
3. **8 lessons have empty (`quiz: []`) or thin (1 question) quizzes.**

This follows the same pattern already used for Ciencias (commit `2fb0d61`)
and Español (`docs/superpowers/specs/2026-06-18-espanol-content-rebuild-design.md`)
— compare live lesson data against a source-of-truth extracted markdown and
patch gaps — but with one structural difference that changes the quiz-side
effort: **`matematicas.md`'s 183-exercise bank has no answer key anywhere**,
unlike Español/Ciencias' reading-comprehension exercises where the answer
is derivable by reading the passage. Every converted math exercise must be
solved by hand to determine `correct`.

## Goal

Make every Matemáticas lesson's theory faithfully mirror `matematicas.md`
(no missing worked examples, no missing sub-topics, no factual
substitutions), close the 3 fully-missing-topic gaps, and bring every
lesson's quiz to a reasonable size using the source's exercise bank where
the bank actually has usable material — without inventing exercises beyond
what the source supports.

## Scope

**In scope** — `src/data/lessons/matematicas.js` only, all 18 existing
lessons plus 2 new sections appended to `medidas-longitud-masa-capacidad`.

**Out of scope:**
- Retagging `porcentajes`'s `mepBloque`. Its source (Ficha #47) lives in the
  md's Bloque 4 (Álgebra), not Bloque 1 (Números) where this lesson is
  currently filed — flagged for awareness, but changing it could ripple into
  `getBloqueBreakdown` exam-summary logic elsewhere and wasn't requested.
  Left as-is.
- Removing non-md-sourced supplementary content that doesn't contradict the
  source (e.g. `cuerpos-solidos`'s invented cube-volume formula,
  `simetria-y-plano-cartesiano`'s "Rotación"/"Escala" additions). Fidelity
  rule is additive, not a mandate to strip pre-existing content — same
  precedent as the Español/Ciencias rebuilds.
- Routing, components, styling, the extra-exam feature (`matematicasExtraExams.js`,
  shipped separately).

### Fidelity rule (carried over, non-negotiable)

Only content present in `matematicas.md` is added to lesson sections. No
invented facts, no invented worked examples. The one correction (not
addition) in this pass: `cuerpos-solidos` section 3's "segmentos" language
is factually wrong relative to the source's "planos" framing and gets fixed,
since it's a substitution that changes the taught concept, not a
supplement.

For quiz questions converted from `matematicas.md`'s 3-option (A/B/C)
exercise bank into this file's 4-option schema, the added 4th distractor is
the only "new" text per question — plausible but clearly wrong, grounded in
a common student error for that problem type (e.g. a sign error, an
off-by-one unit conversion), not a restatement of fact not grounded in the
exercise. Since the source has no answer key, **`correct` is determined by
actually solving each converted exercise** — this must show real
arithmetic/reasoning, not a guess. Any exercise whose only specification is
an unreproducible `[imagen: ...]` figure (a triangle's dimensions, a number
line position, a sucesión's figures) is skipped, not redrawn or
re-described from imagination.

## Lesson structure & content mapping

| Order | Lesson id | md source | Content to add |
|---|---|---|---|
| 1 | `numeros-clasificacion` | Fichas #1, #2 | Reading naturals/decimals methodology (8 167 890 008; 39,0062 examples); decimal/fraction comparison via cross-multiplication (4,25 vs 4,21; 8/5 vs 9/10) |
| 2 | `operaciones-con-decimales` | Fichas #7, #8 | Restore full worked long-multiplication/division examples (641,85×5,1; 278÷3,6; 458,45÷2,1); add missing "división abreviada" (÷10/100/1000) sub-topic |
| 3 | `potencias-y-raices` | Ficha #9 | Add exponent-0/exponent-1 special rules (8⁰=1, 7¹=7) |
| 4 | `fracciones` | Fichas #13, #14, #15 | New sections: tipos de fracciones (propias/impropias/homogéneas/heterogéneas); fracción impropia ↔ número mixto conversion method (7/4, 3⅕ examples); fracciones en la recta numérica entre dos naturales consecutivos (1/2, 7/2 examples) |
| 5 | `cuerpos-solidos` | Ficha #25 | **Correction:** reframe section 3 from "segmentos paralelos/perpendiculares" to "planos paralelos/perpendiculares" per evidencias 2–4 |
| 6 | `perimetro-y-area` | Fichas #26, #27, #30, #32 | Restore 4 dropped worked examples: alambre-de-púas rectangular terreno (2060m), trapecio-pared-de-pintura (5m²), pentagonal-terreno-cercado (₡360 000), rectángulo+semicírculos compound area (146,24cm²) |
| 7 | `simetria-y-plano-cartesiano` | Ficha #35 | Restore full traslación worked example (triángulo ABC, 4 derecha/3 arriba, point-by-point "brinquitos" method) — currently 1 sentence despite being in the lesson title |
| 8 | `medidas-longitud-masa-capacidad` | Ficha #40 + **new:** Fichas #37, #41 | Add conversion procedure + worked examples (36kg caja→objetos de 3000g; 40 000dm→hm) to existing content; **append new section 4 (Temperatura: °C↔°F, both formulas, 2 worked examples) and section 5 (Sistema Monetario Nacional: denominations, making-change word problem)** |
| 9 | `medidas-area-y-volumen` | Fichas #36, #39 | Add 4 conversion worked examples (12,4m²→cm²; 78 000m²→hm²; 9678cm³→dam³; 79,2km³→hm³) + bidón/cl capacity example |
| 10 | `patrones-y-sucesiones` | Fichas #42, #43 | Add point-figure sucesión example (V-shape, figura 6 = 13) and 12-step numeric sucesión example (12-24-36...84) |
| 11 | `proporcionalidad-y-regla-de-tres` | Ficha #48 | Swap invented lápices example for md's aguacate example (2 por ₡900 → 15 → ₡6 750) — reused verbatim in EJERCICIOS #170, reinforcing quiz/lesson alignment |
| 12 | `ecuaciones` | Ficha #49 | Add comprobación (verification-by-substitution) step to the solving method, with one worked check |
| 13 | `tablas-y-graficos` | Ficha #50 (Evidencia 4) | Add brief población/muestra definition — existing quiz already tests this |
| 14 | `medidas-estadisticas` | **Ficha #52 (new)** | Add "Media Aritmética" section: formula + 5-student-grades worked example (78,92,84,90,76 → 84) |

**No changes:** `triangulos-y-cuadrilateros`, `poligonos-y-circunferencia`,
`probabilidad-eventos-aleatorios` — faithful and complete relative to their
source fichas.

## Quiz rebuild

Source exercises are 3-option (A/B/C), no answer key. Each converted
question needs: the exercise's stimulus/problem text as-is, the original 3
options, a 4th plausible distractor added, and `correct` computed by
actually solving the problem.

| Lesson | Current quiz size | Target | Source range | Note |
|---|---|---|---|---|
| `operaciones-con-decimales` | 0 | 4–5 | EJERCICIOS #29–48 | rich pool |
| `potencias-y-raices` | 0 | 3–4 | #43–48 | modest pool |
| `poligonos-y-circunferencia` | 0 | 3–4 | nearby non-image geometry exercises | — |
| `cuerpos-solidos` | 1 | 3–4 | #105–107 | thin pool, accept smaller count |
| `medidas-area-y-volumen` | 0 | 3–4 | thin pool across #140–152 | — |
| `proporcionalidad-y-regla-de-tres` | 0 | 4–5 | #168–175 | — |
| `medidas-estadisticas` | 0 | 2–3 | very thin — source has no media-aritmética exercises at all | accept shortfall |
| `probabilidad-eventos-aleatorios` | 1 | 1 (unchanged) | **zero exercises exist in source for this topic** | accept shortfall, same precedent as Español's Información Implícita gap |

All other lessons (`numeros-clasificacion`, `fracciones`, `triangulos-y-cuadrilateros`,
`perimetro-y-area`, `simetria-y-plano-cartesiano`, `medidas-longitud-masa-capacidad`,
`patrones-y-sucesiones`, `ecuaciones`, `tablas-y-graficos`) already have
quizzes of reasonable size (2–6 questions) and are not touched by the quiz
rebuild — only by the theory-gap fixes listed above.

## Out of scope (restated)

- No new lesson entries — the 2 fully-missing topics become new sections in
  an existing lesson, not new lessons (per user direction: "new sections,
  it's math, no other subjects" — i.e. unlike Español's missing-lesson
  precedent, Matemáticas' gaps are sub-topics of an existing lesson's
  bloque, not a whole missing bloque-1-style category).
- No `mepBloque` retagging (`porcentajes`).
- No stripping of non-md supplementary content that doesn't contradict the
  source.
- No invented quiz questions beyond what the source's exercise bank
  supports per lesson.
