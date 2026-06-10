# Simulacro 35-Question Update Design

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce simulacro from 60 to 35 questions and populate Ciencias, Español, and Matemáticas with real quiz content sourced from the 2025 MEP national exams, while appending 35 new Sociales questions to the existing pool.

**Source material:** `/documents/examenes-anteriores/2025/` — 4 PDFs, one per subject, each with exactly 35 questions and 3 options (A/B/C) per question.

---

## Design Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Answer options | Keep 4 (A/B/C/D) | Maintain consistency with existing 815 Sociales questions and current UI |
| Matemáticas visual questions | Adapt to text | Rewrite diagram-dependent questions as equivalent text-solvable problems |
| Español passages | Embed in `question` field | No data structure change; students see context inline like the real exam |
| Sociales existing questions | Add to pool (815 → 850) | 2025 questions complement existing content; simulacro still samples 35 |
| Question storage | Append to existing lessons | Uses current `sampleQuestions()` infrastructure with no logic changes |

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/Simulacro.jsx` | `MAX_QUESTIONS: 60 → 35` |
| `src/components/Simulacro/SimulacroStart.jsx` | "60 preguntas" → "35 preguntas"; `isFull` threshold 60 → 35 |
| `src/pages/PruebaMEP.jsx` | Hero text: "60 preguntas" → "35 preguntas" |
| `src/data/lessons/ciencias.js` | Append 35 quiz items across existing lessons |
| `src/data/lessons/espanol.js` | Append 35 quiz items to existing lessons |
| `src/data/lessons/matematicas.js` | Append 35 quiz items across existing lessons |
| `src/data/lessons/sociales.js` | Append 35 quiz items to existing lessons |

---

## Quiz Item Shape

No data structure changes. Each new item matches the existing shape:

```js
{
  question: "Texto de la pregunta...",
  options: ["opción A", "opción B", "opción C", "opción D"],
  correct: 0,    // 0-indexed (0 = A, 1 = B, 2 = C, 3 = D)
  mepBloque: "nombre-del-bloque"
}
```

### 4th-Option Distractor Strategy

PDF questions have 3 options. A 4th distractor is crafted for every new item following these rules:
- Uses correct domain vocabulary
- Describes a plausible but wrong/tangential detail
- Matches the grammatical structure and length of the real distractors
- Clearly wrong to a prepared student (not a trick)

### Español Passage Format

The reading passage is embedded in the `question` field:

```js
{
  question: "Lea el siguiente texto:\n\n«El cacao se utilizó por primera vez en Mesoamérica hace unos 3 900 años...»\n\n¿Cuál opción presenta la idea fundamental del texto anterior?",
  options: [
    "Los mayas y aztecas consumían bebidas hechas a partir del cacao.",
    "El ser humano disfruta del chocolate gracias a los mesoamericanos.",
    "El cacao ha sido utilizado por las civilizaciones desde la antigüedad.",
    "Los aztecas usaban el cacao exclusivamente como moneda en rituales."
  ],
  correct: 2,
  mepBloque: "comprension-lectora"
}
```

---

## Content Per Subject

### Ciencias — 35 questions

Source: `2025/ciencias.pdf` — all 35 items are text-extractable.

Questions 29–30 reference physical phenomena (balloon static charge, horse kinetic energy) but the concepts are expressible in words — adapted to text descriptions.

| mepBloque | Topics covered |
|-----------|----------------|
| `cuerpo-humano` | cellular organization, tissues, organs, body systems (digestive, circulatory, nervous, reproductive) |
| `biodiversidad` | ecosystems, food chains, biodiversity, adaptation, classification of living things |
| `energia` | energy types, transformations, heat, sound, light |
| `geofisica` | Earth layers, plate tectonics, volcanic/seismic activity, astronomical phenomena |

Distribution: questions appended to whichever existing lesson most closely matches the topic.

### Español — 35 questions

Source: `2025/espanol.pdf` — all 35 items are reading-comprehension passages with embedded questions.

All 35 items use `mepBloque: "comprension-lectora"`.

Question types present in the 2025 exam:
- Identifying main idea (idea fundamental)
- Identifying complementary/supporting ideas
- Vocabulary in context
- Text structure and organization
- Narrative elements (character, setting, conflict)
- Author's purpose and tone

All passages are appended to existing Español lessons.

### Matemáticas — 35 questions

Source: `2025/matematicas.pdf` — ~15 purely text-based + ~20 diagram-dependent (adapted).

**Text-extractable questions**: Used verbatim (fractions rendered as text, e.g., "tres cuartos" or "3/4").

**Adapted questions**: Diagram-dependent questions are rewritten to convey the same geometric or algebraic problem without a figure. Example transformation:
- PDF: "Observe la figura. ¿Cuánto mide el área del trapecio?"
- Adapted: "Un trapecio tiene base mayor de 10 cm, base menor de 6 cm y altura de 4 cm. ¿Cuánto mide su área?"

The underlying math concept and difficulty level are preserved.

| mepBloque | Topics covered |
|-----------|----------------|
| `numeros` | fractions, decimals, percentages, operations, number patterns |
| `geometria` | area, perimeter, volume, 2D/3D shapes, angles |
| `medidas` | unit conversion, time, capacity, mass |
| `algebra` | patterns, sequences, simple equations |
| `estadistica` | reading tables/graphs, averages, probability |

### Estudios Sociales — 35 new questions

Source: `2025/sociales.pdf` — all 35 items text-extractable.

Added to existing lessons alongside the 815 current questions. Pool grows to ~850. Simulacro continues to sample 35 at random.

| mepBloque | Topics covered |
|-----------|----------------|
| `geografia-historia` | posición geográfica de CR, tipos de relieve (cordillera, llanura, valle, meseta, costa), sociedades precolombinas, conquista y colonia, cosmovisión indígena, cultura afrocaribeña |
| `educacion-civica` | derechos y deberes ciudadanos, instituciones democráticas, comercio internacional, identidad nacional |

---

## UI Copy Updates

| Component | Old text | New text |
|-----------|----------|----------|
| `SimulacroStart.jsx` | "📋 60 preguntas · ⏱ 120 minutos · ✅ Selección única A/B/C/D" | "📋 35 preguntas · ⏱ 120 minutos · ✅ Selección única A/B/C/D" |
| `SimulacroStart.jsx` | `const isFull = questionCount >= 60` | `const isFull = questionCount >= 35` |
| `PruebaMEP.jsx` hero | "120 minutos · 60 preguntas · Selección única A/B/C/D" | "120 minutos · 35 preguntas · Selección única A/B/C/D" |

Timer stays at 120 minutes — same as the real MEP exam.

---

## Out of Scope

- Changing existing 815 Sociales questions from 4 to 3 options
- Adding image/figure rendering capability to quiz items
- Storing simulacro results in Firestore (planned future feature)
- New Vitest tests (simulacro logic is unchanged; verified via dev server)
- Adding lessons to the lesson-navigation UI (questions are appended to existing lessons, not new ones)

---

## Verification

After implementation, manually verify via the dev server:
1. Simulacro start screen shows "35 preguntas" for all 4 subjects
2. All 4 subjects display a question count ≥ 35 on the start screen
3. Simulacro runs to completion; results screen shows bloque breakdown
4. PruebaMEP page shows "35 preguntas" in the hero
