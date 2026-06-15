# Lesson Content Enrichment — Design Spec

**Date:** 2026-06-11
**Status:** Approved (design), pending spec review
**Author:** Claude (with didiercolo)

## Problem

The live site's lessons carry thin, abstracted bullet summaries while the
project's reference documents (`documents/`) hold full MEP-level prose. Example:
`el-estado-social-y-las-reformas-de-1940` shows four one-line bullets for UCR /
CCSS / Garantías Sociales / Código de Trabajo, while
`resumen_estudios_sociales_6.md` has a full paragraph on each. The student
studying for the standardized exam only sees the abstract.

## Key finding: the site is already grade-free

Investigation showed there is **no grade-division work to do**:

- Routes are flat: `/:subject/lesson/:lessonId` (`src/App.jsx:33`) — no grade segment.
- Lessons are grouped for display by **MEP thematic block** (`mepBloque`), never
  by grade (`src/pages/SubjectHome.jsx:58`).
- The active data files (`sociales.js`, `ciencias.js`, `espanol.js`) already
  merge all 4°–6° topics into one flat list per subject.
- "Grade" survives only in **legacy duplicate files** (`grade6.js`, `resumen.js`,
  `espanolGrade6.js`, `cienciasGrade6.js`) that are consumed **only by the
  daily-question seed scripts**, not by the website.

Conclusion: the user-facing site is already the "one unified study resource for
the exam." The real work is purely **content depth**, not structure.

## Goal

Rewrite the active lesson data so each doc-backed lesson carries the full,
reorganized prose from the reference documents, plus quizzes that test that
detail — making each lesson a complete exam-study resource.

## Scope

**In scope** — data edits only, three files:
- `src/data/lessons/sociales.js`
- `src/data/lessons/ciencias.js`
- `src/data/lessons/espanol.js`

**Out of scope:**
- Matemática (`matematicas.js`) — no source content exists.
- Routing, components, navigation, styling — no structural changes.
- Legacy seed files (`grade6.js` etc.) — left untouched; the seed scripts depend
  on them. (Noted as known duplication, not addressed here.)

## Execution order (approved)

1. **Phase 1 — Reading content** across all three subjects.
2. **Phase 2 — Quizzes** across all three subjects.

## Source-doc coverage (drives what's achievable)

| Subject | Lessons | Source docs | Realistic enrichment |
|---|---|---|---|
| **Sociales** | ~18 | `6to grado/resumen_estudios_sociales_6.md`, `general Summary/EStudiosSocialesFinal.md` (1,717 ln), `general Summary/Moredetails.md`, `6to grado/1-campana-nacional-COMPLETO.md` | **Near-complete** |
| **Ciencias** | 24 | `Ciencias/6to grado/1-gravity-summary.md` (gravity chapter only) | **~4 lessons** |
| **Español** | 5 | `Español/6to grado/1examenmarzo/repaso_espanol_6to_grado.md` (695 ln) | **Partial** |

### Fidelity rule (non-negotiable)

Only content present in the reference docs is written into lessons. **No invented
facts** to fill Ciencias/Español gaps. Lessons without a source are recorded in
the Gaps section below for the user to supply documents later. Where docs
conflict, prefer the textbook-based `resumen_estudios_sociales_6.md` and
`EStudiosSocialesFinal.md`.

## Provisional lesson → source mapping

Exact section-to-lesson alignment is finalized during the content pass; this is
the working map.

### Sociales (`sociales.js`)
| Lesson id | Primary source |
|---|---|
| `costa-rica-y-su-geografia` | EStudiosSocialesFinal — Temas 2,3 (posición, relieve) |
| `historia-antigua-de-costa-rica` | EStudiosSocialesFinal / Moredetails |
| `etnias-de-la-costa-rica-antigua` | EStudiosSocialesFinal / Moredetails |
| `el-momento-del-contacto-colon` | EStudiosSocialesFinal / Moredetails |
| `la-sociedad-colonial` | EStudiosSocialesFinal / Moredetails |
| `causas-de-la-independencia` | EStudiosSocialesFinal / Moredetails |
| `la-libertad-politica-de-costa-rica` | EStudiosSocialesFinal / Moredetails |
| `la-anexion-del-partido-de-nicoya` | EStudiosSocialesFinal / Moredetails |
| `la-campana-nacional-de-costa-rica` | resumen Taller 1 + 1-campana-nacional-COMPLETO |
| `el-estado-liberal-y-los-suenos-de-progreso` | resumen U1 Taller 2 |
| `el-estado-social-y-las-reformas-de-1940` | resumen U2 Taller 1 (**quality-bar reference**) |
| `la-guerra-civil-de-1948` | resumen U2 Taller 2 |
| `situacion-actual-de-los-pueblos-originarios` | EStudiosSocialesFinal |
| `costa-rica-sociedad-intercultural` | EStudiosSocialesFinal |
| `los-simbolos-nacionales` | EStudiosSocialesFinal |
| `ciudadania-y-desafios-actuales` | resumen U3 Talleres 1–4 (ciudadanía, drogas, redes, vial) |
| `resumen-general-completo` | aggregate — light touch / keep as overview |
| `banco-de-preguntas-g5`, `banco-de-preguntas-g6` | quiz banks — Phase 2 only |

### Ciencias (`ciencias.js`) — doc-backed only
| Lesson id | Source |
|---|---|
| `gravedad-fuerzas` | 1-gravity-summary (gravedad, peso, masa, 9.8 N/kg) |
| `empuje-flotacion` | 1-gravity-summary (if covered) |
| `movimiento-y-rapidez` | 1-gravity-summary (if covered) |
| `movimientos-tierra-luna` | 1-gravity-summary (órbita Luna, if covered) |

### Español (`espanol.js`) — partial
| Lesson id | Source (where it overlaps) |
|---|---|
| `relaciones-causa-efecto` | repaso_espanol (comprensión) |
| `tema-e-ideologia-del-texto` | repaso_espanol (tema) |
| `informacion-implicita` | repaso_espanol |
| `analisis-de-personajes` | repaso_espanol |
| `repaso-espanol-primer-examen` | repaso_espanol (tipos de lenguaje, sinónimos, tildes) |

## Per-lesson rewrite pattern

Edit each lesson **in place**, preserving these fields untouched: `id`,
`mepBloque`, `title`, `videoId`, `extraMaterial`, `openQuestions`,
`questionCount`. Allowed changes:

1. Reorganize `sections[]` to mirror the source doc's structure
   (e.g. Campaña Nacional → antecedentes → primera fase → cólera → segunda fase →
   consecuencias → héroes).
2. Fill each section's `content[]` with full prose as HTML strings: `<p>`,
   `<strong>`, `<ul><li>`, `<h4>`, and `<table>` where the doc presents tables.
3. Keep the existing **"Preguntas de repaso"** `<h4>` + `<ul>` block convention at
   the end of relevant sections.
4. Upgrade the one-line `description` where it is too thin.

## Phase 2 — quizzes

Per lesson, expand `quiz[]` (keeping the `{ question, options[], correct }`
shape; note `sociales.js` uses JSON-style keys, the newer files use bare keys —
match each file's existing style) to cover the newly added detail, with
plausible distractors drawn from real content. Question banks
(`banco-de-preguntas-g5/g6`) are extended here.

## Verification

- Edit lesson-by-lesson; never wholesale-rewrite a file (keeps diffs reviewable,
  avoids breaking JS string literals with stray quotes/accents).
- After each subject's pass: `npm run build` and `npm run lint` to catch broken
  string literals; spot-check the rendered lesson in the dev server
  (`npm run dev`).
- `el-estado-social-y-las-reformas-de-1940` is the quality-bar reference: every
  rewritten lesson should read at that depth.

## Gaps (no source doc — flagged for user to supply later)

**Ciencias (~20 lessons):** `la-celula`, `tejido-sanguineo`,
`vacunas-y-prevencion`, `sistemas-del-cuerpo-humano`, `cuidados-e-interrelacion`,
`aplicaciones-cientificas-medicina`, `conceptos-biodiversidad`,
`funciones-vitales`, `adaptaciones-al-ambiente`, `reinos-biologicos`,
`relaciones-y-cadenas-alimentarias`, `equilibrio-ecologico`,
`transmision-del-calor`, `la-luz`, `clases-de-energia-tipos`,
`energia-electrica`, `energias-limpias`, `estructura-interna-tierra`,
`tectonica-vulcanismo-terremotos`, `universo-y-sistema-solar`.

These are left as-is until reference documents are provided.

## Risks

| Risk | Mitigation |
|---|---|
| Large diffs in big files (`sociales.js` ~9,600 ln) | Lesson-by-lesson edits, never wholesale |
| JS string escaping (quotes, accents) breaking the build | Build + lint after each subject |
| Inventing facts to fill gaps | Fidelity rule — flag gaps, never fabricate |
| Quiz `correct` index drift when reordering options | Verify each quiz answer index after edits |
| Two quiz-key styles across files | Match each file's existing convention |
