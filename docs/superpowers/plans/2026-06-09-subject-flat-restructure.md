# Subject-First Flat Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace grade-based navigation with flat subject pages that show all lessons grouped by MEP curriculum block, and fill content gaps by OCR-ing the 141-page PDF summary.

**Architecture:** Flatten `lessonsData[subject][gradeId][]` into `lessonsData[subject]{ bloques, lessons[] }`. A new `SubjectHome.jsx` replaces four existing subject pages. Routes change from `/:subject/grade/:gradeId/lesson/:id` to `/:subject/lesson/:id`. Per-subject content MD outlines are produced from PDF OCR as review gates before any JS is written.

**Tech Stack:** React 18 + Vite, React Router v6, Vitest + Testing Library, poppler (`pdftoppm`) + tesseract (Spanish) for PDF OCR.

---

## File Map

**Created:**
- `src/data/subjectConfig.js` — bloques config for all 4 subjects
- `src/data/lessons/sociales.js` — flat merge from grade4+5+6, with `mepBloque`
- `src/data/lessons/ciencias.js` — from cienciasGrade6.js + PDF OCR, with `mepBloque`
- `src/data/lessons/espanol.js` — from espanolGrade6.js + PDF OCR, with `mepBloque`
- `src/data/lessons/matematicas.js` — from PDF OCR, with `mepBloque`
- `src/pages/SubjectHome.jsx` — unified subject page, replaces Home/CienciasHome/EspanolHome
- `src/tests/SubjectHome.test.jsx`
- `docs/lessons-sociales.md` — review gate outline
- `docs/lessons-ciencias.md` — review gate outline
- `docs/lessons-espanol.md` — review gate outline
- `docs/lessons-matematicas.md` — review gate outline

**Modified:**
- `src/data/lessonsData.js` — new shape, new imports
- `src/pages/LessonView.jsx` — remove gradeId, update lookup + back link
- `src/components/LessonCard.jsx` — remove gradeId + disabled branch, new visual design
- `src/App.jsx` — simplified routes
- `src/tests/LessonCard.test.jsx` — new props, new expected URL
- `src/tests/lessonsData.test.js` — new shape assertions
- `src/tests/LessonPages.test.jsx` — new route pattern

**Deleted:**
- `src/pages/Home.jsx`
- `src/pages/CienciasHome.jsx`
- `src/pages/EspanolHome.jsx`
- `src/pages/LessonsList.jsx`
- `src/tests/SubjectHomes.test.jsx`

---

### Task 1: Create subjectConfig.js

**Files:**
- Create: `src/data/subjectConfig.js`

- [ ] **Step 1: Create the file**

```js
// src/data/subjectConfig.js
export const subjectConfig = {
  sociales: {
    label: 'Estudios Sociales',
    icon: '🌍',
    accent: '#10B981',
    bloques: [
      { id: 'geografia-historia', label: 'Geografía e Historia', icon: '🗺️', color: '#0284c7' },
      { id: 'educacion-civica',   label: 'Educación Cívica',     icon: '🏛️', color: '#7c3aed' },
    ],
  },
  ciencias: {
    label: 'Ciencias',
    icon: '🔬',
    accent: '#3B82F6',
    bloques: [
      { id: 'cuerpo-humano', label: 'Cuerpo Humano', icon: '🧬', color: '#0284c7' },
      { id: 'biodiversidad', label: 'Biodiversidad', icon: '🌿', color: '#16a34a' },
      { id: 'energia',       label: 'Energía',        icon: '⚡', color: '#d97706' },
      { id: 'geofisica',     label: 'Geofísica',      icon: '🌍', color: '#7c3aed' },
    ],
  },
  espanol: {
    label: 'Español',
    icon: '📖',
    accent: '#F59E0B',
    bloques: [
      { id: 'comprension-lectora', label: 'Comprensión Lectora',            icon: '📖', color: '#0284c7' },
      { id: 'produccion-escrita',  label: 'Producción de Texto Expositivo', icon: '✏️', color: '#d97706' },
    ],
  },
  matematicas: {
    label: 'Matemática',
    icon: '🔢',
    accent: '#EF4444',
    bloques: [
      { id: 'numeros',     label: 'Números',                    icon: '🔢', color: '#0284c7' },
      { id: 'geometria',   label: 'Geometría',                  icon: '📐', color: '#16a34a' },
      { id: 'medidas',     label: 'Medidas',                    icon: '📏', color: '#d97706' },
      { id: 'algebra',     label: 'Relaciones y Álgebra',       icon: '🔣', color: '#7c3aed' },
      { id: 'estadistica', label: 'Estadística y Probabilidad', icon: '📊', color: '#dc2626' },
    ],
  },
};
```

- [ ] **Step 2: Verify structure is importable**

Run: `node --input-type=module <<'EOF'
import { subjectConfig } from './src/data/subjectConfig.js';
console.log(Object.keys(subjectConfig));
EOF`

Expected output: `[ 'sociales', 'ciencias', 'espanol', 'matematicas' ]`

- [ ] **Step 3: Commit**

```bash
git add src/data/subjectConfig.js
git commit -m "feat: add subjectConfig with bloques per subject"
```

---

### Task 2: Write failing lessonsData tests for the new shape

**Files:**
- Modify: `src/tests/lessonsData.test.js`

- [ ] **Step 1: Replace the test file**

```js
// src/tests/lessonsData.test.js
import { describe, it, expect } from 'vitest';
import { lessonsData } from '../data/lessonsData';
import { subjectConfig } from '../data/subjectConfig';

describe('lessonsData structure', () => {
  const subjects = ['sociales', 'ciencias', 'espanol', 'matematicas'];

  it.each(subjects)('%s has a bloques array', (subject) => {
    expect(Array.isArray(lessonsData[subject].bloques)).toBe(true);
    expect(lessonsData[subject].bloques.length).toBeGreaterThan(0);
  });

  it.each(subjects)('%s has a lessons array', (subject) => {
    expect(Array.isArray(lessonsData[subject].lessons)).toBe(true);
  });

  it.each(subjects)('every %s lesson has id (string), title, mepBloque, sections[]', (subject) => {
    for (const lesson of lessonsData[subject].lessons) {
      expect(typeof lesson.id).toBe('string');
      expect(lesson.id.length).toBeGreaterThan(0);
      expect(typeof lesson.title).toBe('string');
      expect(typeof lesson.mepBloque).toBe('string');
      expect(Array.isArray(lesson.sections)).toBe(true);
    }
  });

  it.each(subjects)('every %s lesson.mepBloque is a valid bloque id for that subject', (subject) => {
    const validIds = subjectConfig[subject].bloques.map(b => b.id);
    for (const lesson of lessonsData[subject].lessons) {
      expect(validIds).toContain(lesson.mepBloque);
    }
  });

  it('lesson ids are unique within each subject', () => {
    for (const subject of subjects) {
      const ids = lessonsData[subject].lessons.map(l => l.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('sociales has at least 10 lessons', () => {
    expect(lessonsData.sociales.lessons.length).toBeGreaterThanOrEqual(10);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: FAIL — `Cannot read properties of undefined (reading 'bloques')`

---

### Task 3: Compile docs/lessons-sociales.md (review gate)

**Files:**
- Create: `docs/lessons-sociales.md`

This doc lists every lesson that will be in `sociales.js` so you can confirm mepBloque assignments before writing JS. Do not skip this gate.

- [ ] **Step 1: Read all source lessons**

Open each of these files and list every lesson's `id` (numeric) and `title`:
- `src/data/lessons/grade4.js` — exports `grade4Lessons`
- `src/data/lessons/grade5.js` — exports `grade5Lessons`
- `src/data/lessons/grade6.js` — exports `grade6Lessons`

Optionally include `resumen.js` if its lessons have distinct topics not covered in grades 4–6. It is a condensed review resource; evaluate whether each entry adds unique content or duplicates existing lessons.

- [ ] **Step 2: Apply slug and mepBloque rules**

**Slug rule:** Strip `"Lección N: "` prefix from title, lowercase everything, replace spaces with `-`, drop accented characters (á→a, é→e, í→i, ó→o, ú→u, ñ→n), remove punctuation. Slugs must be unique within the subject.

Examples:
- `"Lección 1: Costa Rica y su Geografía"` → `costa-rica-y-su-geografia`
- `"Lección 2: División Política"` → `division-politica`

**mepBloque assignment rules:**

`geografia-historia` — lessons about: geography, maps, lines of latitude/longitude, Costa Rica's location, mountains, rivers, coasts, climate regions, natural disasters, colonial history, independence, national symbols, economic geography, trade, cultural regions, Central America, world geography.

`educacion-civica` — lessons about: democratic institutions, Costa Rica's constitution, citizens' rights and duties, branches of government, voting, laws, civic values, national identity, social participation.

- [ ] **Step 3: Create docs/lessons-sociales.md**

```markdown
# Estudios Sociales — Lecciones planas

Sources: grade4.js, grade5.js, grade6.js (resumen.js: optional, see notes)
Total: [N] lessons

## Bloque: Geografía e Historia (`geografia-historia`)

| slug | title (original) | source |
|------|-----------------|--------|
| costa-rica-y-su-geografia | "Lección 1: Costa Rica y su Geografía" | grade4 |
| ... | ... | ... |

## Bloque: Educación Cívica (`educacion-civica`)

| slug | title (original) | source |
|------|-----------------|--------|
| ... | ... | ... |
```

Fill in the complete table for all lessons from all source files.

- [ ] **Step 4: Commit for review**

```bash
git add docs/lessons-sociales.md
git commit -m "docs: compile sociales lessons outline for review [GATE]"
```

**⛔ REVIEW GATE — Stop here.** Show `docs/lessons-sociales.md` to the user and confirm: (1) all lessons are listed, (2) mepBloque assignments look correct. Only proceed to Task 7 after approval.

---

### Task 4: OCR PDF → docs/lessons-ciencias.md (review gate)

**Files:**
- Create: `docs/lessons-ciencias.md`

OCR pages 16–90 of the PDF. The PDF path contains a space and an accented character — always quote it.

- [ ] **Step 1: Render pages to PNG**

```bash
cd /tmp
PDF="/Users/didiercorrales/Documents/didierRepos/sociales/documents/resumenes/Resúmenes Prueba Estandarizada Sexto Grado.pdf"
pdftoppm -r 150 -png -f 16 -l 90 "$PDF" ciencias_page
ls /tmp/ciencias_page-*.png | wc -l
```

Expected: `75`

- [ ] **Step 2: OCR all pages into one text file**

```bash
cd /tmp
> /tmp/ciencias_raw.txt
for i in $(seq -f "%03g" 16 90); do
  echo "=== PAGE $i ===" >> /tmp/ciencias_raw.txt
  tesseract "/tmp/ciencias_page-${i}.png" stdout -l spa+eng 2>/dev/null >> /tmp/ciencias_raw.txt
done
wc -l /tmp/ciencias_raw.txt
```

Expected: several thousand lines of Spanish text.

- [ ] **Step 3: Identify lesson topics from raw OCR**

Read `/tmp/ciencias_raw.txt`. Look for chapter/section headings (all-caps lines, numbered sections, bold-style text). Group content by topic using these bloque rules:

- `cuerpo-humano`: sistemas del cuerpo humano, célula, órganos, vacunas, salud, inmunología
- `biodiversidad`: seres vivos, reinos biológicos, fotosíntesis, ecosistemas, cadenas alimentarias, equilibrio ecológico, adaptaciones
- `energia`: fuerzas, gravedad, tipos de energía, transformaciones, energías limpias, masa, peso, flotación
- `geofisica`: capas de la Tierra, volcanes, terremotos, meteorología, ciclo del agua, contaminación ambiental, placas tectónicas

Also include the 4 existing lessons from `cienciasGrade6.js` — they belong to the `energia` bloque (gravity, forces, flotation, energy types).

- [ ] **Step 4: Create docs/lessons-ciencias.md**

```markdown
# Ciencias — Lecciones planas

Sources: PDF pages 16–90, cienciasGrade6.js
Total: [N] lessons

## Bloque: Cuerpo Humano (`cuerpo-humano`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| 1 | celula-estructura | La Célula: Estructura y Función | organelas, membrana, núcleo, tipos de células |
| 2 | sistemas-cuerpo | Sistemas del Cuerpo | digestivo, respiratorio, circulatorio, nervioso |
| ... | | | |

## Bloque: Biodiversidad (`biodiversidad`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Energía (`energia`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| 1 | gravedad-fuerzas | La Gravedad y Otras Fuerzas | masa, peso, fuerzas, diagramas (from cienciasGrade6.js) |
| 2 | empuje-flotacion | Empuje y Flotación | principio de Arquímedes (from cienciasGrade6.js) |
| 3 | tipos-energia | Clases de Energía | cinética, potencial, térmica, eléctrica (from cienciasGrade6.js) |
| 4 | energia-limpia | Energías Limpias | solar, eólica, hídrica, ventajas (from cienciasGrade6.js) |
| ... | | | (add any additional lessons from PDF) |

## Bloque: Geofísica (`geofisica`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |
```

- [ ] **Step 5: Commit for review**

```bash
git add docs/lessons-ciencias.md
git commit -m "docs: add ciencias lessons outline from PDF OCR [GATE]"
```

**⛔ REVIEW GATE — Stop here.** Show `docs/lessons-ciencias.md` to the user. Confirm lesson list and mepBloque assignments before proceeding to Task 8.

---

### Task 5: OCR PDF → docs/lessons-espanol.md (review gate)

**Files:**
- Create: `docs/lessons-espanol.md`

OCR pages 9–15 of the PDF.

- [ ] **Step 1: Render pages**

```bash
cd /tmp
PDF="/Users/didiercorrales/Documents/didierRepos/sociales/documents/resumenes/Resúmenes Prueba Estandarizada Sexto Grado.pdf"
pdftoppm -r 150 -png -f 9 -l 15 "$PDF" espanol_page
ls /tmp/espanol_page-*.png | wc -l
```

Expected: `7`

- [ ] **Step 2: OCR all pages**

```bash
cd /tmp
> /tmp/espanol_raw.txt
for i in $(seq -f "%03g" 9 15); do
  echo "=== PAGE $i ===" >> /tmp/espanol_raw.txt
  tesseract "/tmp/espanol_page-${i}.png" stdout -l spa+eng 2>/dev/null >> /tmp/espanol_raw.txt
done
```

- [ ] **Step 3: Identify lessons from OCR + existing espanolGrade6.js**

Read `/tmp/espanol_raw.txt`. Apply these bloque rules:

- `comprension-lectora`: types of text (narrativo, expositivo, descriptivo, argumentativo), reading strategies, inference, main idea, vocabulary in context, tone/purpose, paragraph structure
- `produccion-escrita`: thesis statement, evidence, text structure, revision, punctuation rules, grammar, connectors, expository paragraph construction

Also include existing lessons from `espanolGrade6.js`.

- [ ] **Step 4: Create docs/lessons-espanol.md**

```markdown
# Español — Lecciones planas

Sources: PDF pages 9–15, espanolGrade6.js
Total: [N] lessons

## Bloque: Comprensión Lectora (`comprension-lectora`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Producción de Texto Expositivo (`produccion-escrita`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |
```

- [ ] **Step 5: Commit for review**

```bash
git add docs/lessons-espanol.md
git commit -m "docs: add espanol lessons outline from PDF OCR [GATE]"
```

**⛔ REVIEW GATE — Stop here.** Show `docs/lessons-espanol.md` to the user before proceeding to Task 9.

---

### Task 6: OCR PDF → docs/lessons-matematicas.md (review gate)

**Files:**
- Create: `docs/lessons-matematicas.md`

OCR pages 102–144 of the PDF. This is the only Matemática source material.

- [ ] **Step 1: Render pages**

```bash
cd /tmp
PDF="/Users/didiercorrales/Documents/didierRepos/sociales/documents/resumenes/Resúmenes Prueba Estandarizada Sexto Grado.pdf"
pdftoppm -r 150 -png -f 102 -l 144 "$PDF" mat_page
ls /tmp/mat_page-*.png | wc -l
```

Expected: `43`

- [ ] **Step 2: OCR all pages**

```bash
cd /tmp
> /tmp/mat_raw.txt
for i in $(seq -f "%03g" 102 144); do
  echo "=== PAGE $i ===" >> /tmp/mat_raw.txt
  tesseract "/tmp/mat_page-${i}.png" stdout -l spa+eng 2>/dev/null >> /tmp/mat_raw.txt
done
```

- [ ] **Step 3: Identify lessons from OCR**

Read `/tmp/mat_raw.txt`. Apply these bloque rules:

- `numeros`: números naturales, enteros, fracciones, decimales, porcentajes, potencias, raíces, factorización, MCM, MCD, operaciones combinadas
- `geometria`: figuras planas, ángulos, polígonos, triángulos, cuadriláteros, área, perímetro, volumen, cuerpos geométricos, traslaciones, simetría
- `medidas`: unidades del SI, longitud, masa, capacidad, tiempo, conversiones, perímetro y área como medidas
- `algebra`: patrones, sucesiones numéricas, expresiones algebraicas, ecuaciones de primer grado, proporcionalidad directa e inversa
- `estadistica`: tablas de datos, gráficos de barras/líneas/circulares, media aritmética, mediana, moda, probabilidad básica

- [ ] **Step 4: Create docs/lessons-matematicas.md**

```markdown
# Matemática — Lecciones planas

Sources: PDF pages 102–144
Total: [N] lessons

## Bloque: Números (`numeros`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Geometría (`geometria`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Medidas (`medidas`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Relaciones y Álgebra (`algebra`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |

## Bloque: Estadística y Probabilidad (`estadistica`)

| # | slug | title | content summary |
|---|------|-------|-----------------|
| ... | | | |
```

- [ ] **Step 5: Commit for review**

```bash
git add docs/lessons-matematicas.md
git commit -m "docs: add matematicas lessons outline from PDF OCR [GATE]"
```

**⛔ REVIEW GATE — Stop here.** Show `docs/lessons-matematicas.md` to the user before proceeding to Task 10.

---

### Task 7: Create src/data/lessons/sociales.js

**Files:**
- Create: `src/data/lessons/sociales.js`

**Prerequisite:** `docs/lessons-sociales.md` approved by user.

- [ ] **Step 1: Create the flat lessons file**

For each lesson in the approved outline, copy the lesson object from its source file and apply these changes:
1. Change `id` from number to string slug (from approved outline)
2. Add `mepBloque: '<bloque-id>'` (from approved outline)
3. Remove `disabled` field if present
4. Keep all other fields unchanged (`title`, `description`, `sections`, `quiz`, `openQuestions`, `extraMaterial`, `questionCount`)

```js
// src/data/lessons/sociales.js
export const socialesLessons = [
  // ─── GEOGRAFÍA E HISTORIA ───────────────────────────────────────
  {
    id: 'costa-rica-y-su-geografia',
    mepBloque: 'geografia-historia',
    title: "Lección 1: Costa Rica y su Geografía",
    description: "Costa Rica y su Geografía",
    sections: [
      // ← copied verbatim from grade4.js lesson id:1 sections[]
    ],
    quiz: [
      // ← copied verbatim from grade4.js lesson id:1 quiz[]
    ],
  },
  // ... all other geografia-historia lessons from grade4, grade5, grade6
  // (list all in the same order they appear in the approved outline)

  // ─── EDUCACIÓN CÍVICA ───────────────────────────────────────────
  {
    id: '<slug-from-outline>',
    mepBloque: 'educacion-civica',
    // ... full content from source
  },
  // ... rest of educacion-civica lessons
];
```

- [ ] **Step 2: Check for duplicate slugs**

```bash
node --input-type=module <<'EOF'
import { socialesLessons } from './src/data/lessons/sociales.js';
const ids = socialesLessons.map(l => l.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('Duplicates:', dupes.length > 0 ? dupes : 'none');
console.log('Total lessons:', ids.length);
EOF
```

Expected: `Duplicates: none`

---

### Task 8: Create src/data/lessons/ciencias.js

**Files:**
- Create: `src/data/lessons/ciencias.js`

**Prerequisite:** `docs/lessons-ciencias.md` approved by user.

- [ ] **Step 1: Create ciencias.js**

For OCR-derived lessons, build `sections[]` from the OCR'd content in the outline. For the 4 existing lessons from `cienciasGrade6.js`, copy them verbatim and add `mepBloque: 'energia'`.

```js
// src/data/lessons/ciencias.js
export const cienciasLessons = [
  // ─── CUERPO HUMANO ───────────────────────────────────────────────
  {
    id: 'celula-estructura',
    mepBloque: 'cuerpo-humano',
    title: 'La Célula: Estructura y Función',
    description: 'Organelas, membrana, núcleo y tipos celulares',
    sections: [
      // ← built from OCR content in docs/lessons-ciencias.md
      {
        title: 'Estructura de la célula',
        content: [
          // ← HTML strings from OCR'd content
        ],
      },
    ],
    quiz: [],
  },
  // ... other cuerpo-humano lessons per approved outline

  // ─── BIODIVERSIDAD ───────────────────────────────────────────────
  // ... lessons per approved outline

  // ─── ENERGÍA ─────────────────────────────────────────────────────
  {
    id: 'gravedad-fuerzas',
    mepBloque: 'energia',
    title: "Capítulo 1: La Gravedad y Otras Fuerzas",
    description: "Explora la masa, el peso, las fuerzas, la gravedad y cómo se mueven los objetos en el espacio y el agua.",
    extraMaterial: {
      title: "Examen de Repaso: Capítulo 1",
      url: "/sociales/docs/Science_Exam_Chapter1_6thGrade.pdf",
      type: "PDF"
    },
    sections: [
      // ← copied verbatim from cienciasGrade6.js lesson id:1 sections[]
    ],
    quiz: [
      // ← copied verbatim from cienciasGrade6.js lesson id:1 quiz[]
    ],
  },
  // ... remaining 3 lessons from cienciasGrade6.js (id: 2, 3, 4)

  // ─── GEOFÍSICA ────────────────────────────────────────────────────
  // ... lessons per approved outline
];
```

---

### Task 9: Create src/data/lessons/espanol.js

**Files:**
- Create: `src/data/lessons/espanol.js`

**Prerequisite:** `docs/lessons-espanol.md` approved by user.

- [ ] **Step 1: Create espanol.js**

For existing lessons from `espanolGrade6.js`, copy verbatim and add the appropriate `mepBloque`. For OCR-derived lessons, build content from the outline.

```js
// src/data/lessons/espanol.js
export const espanolLessons = [
  // ─── COMPRENSIÓN LECTORA ─────────────────────────────────────────
  // Lessons from espanolGrade6.js with mepBloque: 'comprension-lectora'
  // + OCR-derived lessons
  {
    id: '<slug-from-outline>',
    mepBloque: 'comprension-lectora',
    title: '...',
    description: '...',
    sections: [ /* ... */ ],
    quiz: [],
  },

  // ─── PRODUCCIÓN DE TEXTO EXPOSITIVO ───────────────────────────────
  // Lessons from espanolGrade6.js with mepBloque: 'produccion-escrita'
  // + OCR-derived lessons
  {
    id: '<slug-from-outline>',
    mepBloque: 'produccion-escrita',
    title: '...',
    description: '...',
    sections: [ /* ... */ ],
    quiz: [],
  },
];
```

---

### Task 10: Create src/data/lessons/matematicas.js

**Files:**
- Create: `src/data/lessons/matematicas.js`

**Prerequisite:** `docs/lessons-matematicas.md` approved by user.

- [ ] **Step 1: Create matematicas.js**

All content comes from OCR. Build `sections[]` from the outline.

```js
// src/data/lessons/matematicas.js
export const matematicasLessons = [
  // ─── NÚMEROS ─────────────────────────────────────────────────────
  {
    id: '<slug-from-outline>',
    mepBloque: 'numeros',
    title: '...',
    description: '...',
    sections: [ /* built from OCR content */ ],
    quiz: [],
  },

  // ─── GEOMETRÍA ───────────────────────────────────────────────────
  // ...

  // ─── MEDIDAS ─────────────────────────────────────────────────────
  // ...

  // ─── RELACIONES Y ÁLGEBRA ─────────────────────────────────────────
  // ...

  // ─── ESTADÍSTICA Y PROBABILIDAD ──────────────────────────────────
  // ...
];
```

---

### Task 11: Update lessonsData.js + run data tests

**Files:**
- Modify: `src/data/lessonsData.js`

- [ ] **Step 1: Rewrite lessonsData.js**

```js
// src/data/lessonsData.js
import { subjectConfig } from './subjectConfig';
import { socialesLessons } from './lessons/sociales';
import { cienciasLessons } from './lessons/ciencias';
import { espanolLessons } from './lessons/espanol';
import { matematicasLessons } from './lessons/matematicas';

export const lessonsData = {
  sociales: {
    bloques: subjectConfig.sociales.bloques,
    lessons: socialesLessons,
  },
  ciencias: {
    bloques: subjectConfig.ciencias.bloques,
    lessons: cienciasLessons,
  },
  espanol: {
    bloques: subjectConfig.espanol.bloques,
    lessons: espanolLessons,
  },
  matematicas: {
    bloques: subjectConfig.matematicas.bloques,
    lessons: matematicasLessons,
  },
};
```

- [ ] **Step 2: Run lessonsData tests**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS — all 6 test cases green

- [ ] **Step 3: Commit data layer**

```bash
git add src/data/subjectConfig.js src/data/lessonsData.js \
        src/data/lessons/sociales.js src/data/lessons/ciencias.js \
        src/data/lessons/espanol.js src/data/lessons/matematicas.js \
        src/tests/lessonsData.test.js
git commit -m "feat: flatten lessonsData to subject→{bloques,lessons} shape with mepBloque per lesson"
```

---

### Task 12: Update LessonCard.jsx + test

**Files:**
- Modify: `src/tests/LessonCard.test.jsx`
- Modify: `src/components/LessonCard.jsx`

- [ ] **Step 1: Replace LessonCard.test.jsx**

```jsx
// src/tests/LessonCard.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

describe('LessonCard', () => {
  const defaultProps = {
    id: 'costa-rica-y-su-geografia',
    title: 'Costa Rica y su Geografía',
    description: 'Líneas imaginarias y ubicación',
    subject: 'sociales',
    bloqueColor: '#0284c7',
    lessonNumber: 1,
  };

  it('renders title and description', () => {
    render(<MemoryRouter><LessonCard {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText('Costa Rica y su Geografía')).toBeInTheDocument();
    expect(screen.getByText('Líneas imaginarias y ubicación')).toBeInTheDocument();
  });

  it('renders LECCIÓN N label', () => {
    render(<MemoryRouter><LessonCard {...defaultProps} /></MemoryRouter>);
    expect(screen.getByText('LECCIÓN 1')).toBeInTheDocument();
  });

  it('links to /:subject/lesson/:id', () => {
    render(<MemoryRouter><LessonCard {...defaultProps} /></MemoryRouter>);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/sociales/lesson/costa-rica-y-su-geografia');
  });

  it('omits description div when description is not provided', () => {
    render(<MemoryRouter><LessonCard {...defaultProps} description={undefined} /></MemoryRouter>);
    expect(screen.queryByText('Líneas imaginarias y ubicación')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/tests/LessonCard.test.jsx`
Expected: FAIL — `LECCIÓN 1` not found, href doesn't match new pattern

- [ ] **Step 3: Rewrite LessonCard.jsx**

```jsx
// src/components/LessonCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ id, title, description, subject, bloqueColor, lessonNumber }) => (
  <Link
    to={`/${subject}/lesson/${id}`}
    className="lesson-card"
    style={{
      display: 'block',
      background: 'white',
      borderRadius: '10px',
      padding: '14px',
      border: '2px solid #1e293b',
      boxShadow: '3px 3px 0 #1e293b',
      textDecoration: 'none',
      color: '#1e293b',
    }}
  >
    <div style={{ fontSize: '11px', fontWeight: '700', color: bloqueColor, marginBottom: '4px', textTransform: 'uppercase' }}>
      LECCIÓN {lessonNumber}
    </div>
    <div style={{ fontSize: '13px', fontWeight: '800' }}>{title}</div>
    {description && (
      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px' }}>{description}</div>
    )}
  </Link>
);

export default LessonCard;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/tests/LessonCard.test.jsx`
Expected: PASS — 4 tests green

- [ ] **Step 5: Commit**

```bash
git add src/components/LessonCard.jsx src/tests/LessonCard.test.jsx
git commit -m "feat: simplify LessonCard — new bloque-card design, remove gradeId and disabled branch"
```

---

### Task 13: Update LessonView.jsx + test

**Files:**
- Modify: `src/tests/LessonPages.test.jsx`
- Modify: `src/pages/LessonView.jsx`

- [ ] **Step 1: Replace LessonPages.test.jsx**

Use the actual first lesson id from `socialesLessons[0].id` (e.g. `'costa-rica-y-su-geografia'`).

```jsx
// src/tests/LessonPages.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LessonView from '../pages/LessonView';

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

const FIRST_LESSON_ID = 'costa-rica-y-su-geografia'; // first id in socialesLessons

describe('LessonView', () => {
  it('renders a lesson at /:subject/lesson/:lessonId', () => {
    render(
      <MemoryRouter initialEntries={[`/sociales/lesson/${FIRST_LESSON_ID}`]}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('redirects to /:subject when lessonId is unknown', () => {
    render(
      <MemoryRouter initialEntries={['/sociales/lesson/nonexistent-slug']}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
          <Route path="/:subject" element={<div>Subject Home</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Subject Home')).toBeInTheDocument();
  });

  it('back link points to /:subject', () => {
    render(
      <MemoryRouter initialEntries={[`/sociales/lesson/${FIRST_LESSON_ID}`]}>
        <Routes>
          <Route path="/:subject/lesson/:lessonId" element={<LessonView />} />
        </Routes>
      </MemoryRouter>
    );
    const link = screen.getByText(/Volver/i).closest('a');
    expect(link.getAttribute('href')).toBe('/sociales');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/tests/LessonPages.test.jsx`
Expected: FAIL — old gradeId params don't match

- [ ] **Step 3: Update LessonView.jsx — change lines 8–18 and line 22**

```jsx
// Replace lines 8–18 in LessonView.jsx:

// REMOVE:
const { subject, gradeId, lessonId } = useParams();
const gradeLessons = lessonsData[subject]?.[gradeId] || [];
const lesson = gradeLessons.find(l => l.id.toString() === lessonId);
if (!lesson) {
    return <Navigate to={`/${subject}/grade/${gradeId}`} replace />;
}
if (lesson.disabled) {
    return <Navigate to="/coming-soon" replace />;
}

// ADD:
const { subject, lessonId } = useParams();
const lesson = lessonsData[subject]?.lessons?.find(l => l.id === lessonId);
if (!lesson) {
    return <Navigate to={`/${subject}`} replace />;
}
```

```jsx
// Replace lines 22–31 in LessonView.jsx (the back link):

// REMOVE:
<Link to={`/${subject}/grade/${gradeId}`} className="back-link" style={{...}}>
    <span>←</span> Volver a Lecciones
</Link>

// ADD:
<Link to={`/${subject}`} className="back-link" style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    color: 'var(--text-muted)',
    fontWeight: '600'
}}>
    <span>←</span> Volver a {subject.charAt(0).toUpperCase() + subject.slice(1)}
</Link>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/tests/LessonPages.test.jsx`
Expected: PASS — 3 tests green

- [ ] **Step 5: Commit**

```bash
git add src/pages/LessonView.jsx src/tests/LessonPages.test.jsx
git commit -m "feat: update LessonView — remove gradeId, lookup by string id, back link to subject"
```

---

### Task 14: Create SubjectHome.jsx + test

**Files:**
- Create: `src/pages/SubjectHome.jsx`
- Create: `src/tests/SubjectHome.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/tests/SubjectHome.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SubjectHome from '../pages/SubjectHome';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/:subject" element={<SubjectHome />} />
      </Routes>
    </MemoryRouter>
  );

describe('SubjectHome', () => {
  it('renders the subject label', () => {
    renderAt('/sociales');
    expect(screen.getByText('Estudios Sociales')).toBeInTheDocument();
  });

  it('renders a back link to /', () => {
    renderAt('/sociales');
    const link = screen.getByText(/Volver a Materias/i).closest('a');
    expect(link.getAttribute('href')).toBe('/');
  });

  it('renders bloque section headers for populated bloques', () => {
    renderAt('/sociales');
    expect(screen.getByText('Geografía e Historia')).toBeInTheDocument();
  });

  it('renders LECCIÓN N labels for lessons', () => {
    renderAt('/sociales');
    expect(screen.getByText('LECCIÓN 1')).toBeInTheDocument();
  });

  it('shows total lesson count in hero', () => {
    renderAt('/sociales');
    expect(screen.getByText(/lecciones · Prueba Estandarizada MEP 2026/i)).toBeInTheDocument();
  });

  it('does not render a bloque section when no lessons belong to it', () => {
    renderAt('/ciencias');
    // If ciencias has no geofisica lessons yet, that section header should not appear
    const allHeadings = screen.queryAllByText('Geofísica');
    const allLessons = screen.queryAllByText(/LECCIÓN/i);
    // Sections with zero lessons are hidden; sections with lessons are shown
    expect(allLessons.length).toBeGreaterThanOrEqual(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/tests/SubjectHome.test.jsx`
Expected: FAIL — module not found

- [ ] **Step 3: Create SubjectHome.jsx**

```jsx
// src/pages/SubjectHome.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessonsData } from '../data/lessonsData';
import { subjectConfig } from '../data/subjectConfig';
import LessonCard from '../components/LessonCard';

const SubjectHome = () => {
  const { subject } = useParams();
  const config = subjectConfig[subject];
  const data = lessonsData[subject];

  if (!config || !data) {
    return (
      <div style={{ padding: '2rem' }}>
        <Link to="/">← Volver a Materias</Link>
      </div>
    );
  }

  const { bloques, lessons } = data;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${config.accent} 0%, ${config.accent}cc 100%)`,
        padding: '32px 28px',
        color: 'white',
        borderBottom: '4px solid #1e293b',
      }}>
        <Link to="/" style={{
          color: 'rgba(255,255,255,.7)', fontSize: '12px',
          fontWeight: '700', textDecoration: 'none',
        }}>
          ← Volver a Materias
        </Link>
        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '36px' }}>{config.icon}</span>
          <div>
            <div style={{ fontSize: '22px', fontWeight: '900', fontFamily: 'Georgia, serif' }}>
              {config.label}
            </div>
            <div style={{ fontSize: '13px', opacity: '.8', marginTop: '2px' }}>
              {lessons.length} lecciones · Prueba Estandarizada MEP 2026
            </div>
          </div>
        </div>
      </div>

      {/* Bloque sections */}
      <div style={{ padding: '20px 24px' }}>
        {bloques.map((bloque) => {
          const bloqueLessons = lessons.filter(l => l.mepBloque === bloque.id);
          if (bloqueLessons.length === 0) return null;

          return (
            <div key={bloque.id} style={{ marginBottom: '24px' }}>
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px' }}>{bloque.icon}</span>
                <span style={{
                  fontSize: '13px', fontWeight: '900', textTransform: 'uppercase',
                  letterSpacing: '.8px', color: bloque.color,
                }}>
                  {bloque.label}
                </span>
                <div style={{ flex: 1, height: '2px', background: '#e2e8f0', marginLeft: '8px' }} />
              </div>

              {/* 2-column card grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {bloqueLessons.map((lesson) => {
                  const lessonNumber = lessons.indexOf(lesson) + 1;
                  return (
                    <LessonCard
                      key={lesson.id}
                      id={lesson.id}
                      title={lesson.title}
                      description={lesson.description ?? lesson.sections[0]?.title}
                      subject={subject}
                      bloqueColor={bloque.color}
                      lessonNumber={lessonNumber}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectHome;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/tests/SubjectHome.test.jsx`
Expected: PASS — all tests green

- [ ] **Step 5: Commit**

```bash
git add src/pages/SubjectHome.jsx src/tests/SubjectHome.test.jsx
git commit -m "feat: add SubjectHome — hero + MEP bloque sections with lesson card grid"
```

---

### Task 15: Update App.jsx routes

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Rewrite App.jsx**

```jsx
// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';

const SubjectSelection = lazy(() => import('./pages/SubjectSelection'));
const SubjectHome      = lazy(() => import('./pages/SubjectHome'));
const LessonView       = lazy(() => import('./pages/LessonView'));
const ComingSoon       = lazy(() => import('./pages/ComingSoon'));
const About            = lazy(() => import('./pages/About'));
const Register         = lazy(() => import('./pages/Register'));
const Login            = lazy(() => import('./pages/Login'));

const PageLoader = () => (
  <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>
    <h2>Cargando... 📚</h2>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SubjectSelection />} />
            <Route path="coming-soon"    element={<ComingSoon />} />
            <Route path="sobre-nosotros" element={<About />} />
            <Route path="registro"       element={<Register />} />
            <Route path="login"          element={<Login />} />
            <Route path=":subject"                  element={<SubjectHome />} />
            <Route path=":subject/lesson/:lessonId" element={<LessonView />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
```

- [ ] **Step 2: Run full test suite**

Run: `npx vitest run`
Expected: All tests pass except `SubjectHomes.test.jsx` (deleted in next task)

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: simplify App routes — :subject and :subject/lesson/:lessonId"
```

---

### Task 16: Delete old pages + old tests, run full suite

**Files:**
- Delete: `src/pages/Home.jsx`, `src/pages/CienciasHome.jsx`, `src/pages/EspanolHome.jsx`, `src/pages/LessonsList.jsx`
- Delete: `src/tests/SubjectHomes.test.jsx`

- [ ] **Step 1: Delete obsolete files**

```bash
rm src/pages/Home.jsx
rm src/pages/CienciasHome.jsx
rm src/pages/EspanolHome.jsx
rm src/pages/LessonsList.jsx
rm src/tests/SubjectHomes.test.jsx
```

- [ ] **Step 2: Run full test suite**

Run: `npx vitest run`
Expected: ALL PASS — no remaining imports of deleted files

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: remove grade-based pages (Home, CienciasHome, EspanolHome, LessonsList) and SubjectHomes test"
```

- [ ] **Step 4: Start dev server and verify UI**

```bash
npm run dev
```

Open `http://localhost:5173`:
- `/` → SubjectSelection shows 4 subject cards
- `/sociales` → SubjectHome with hero + bloque sections + lesson cards
- `/sociales/lesson/costa-rica-y-su-geografia` → LessonView renders, back link goes to `/sociales`
- `/ciencias` → SubjectHome for ciencias
- `/matematicas` → SubjectHome for matematicas (shows all available lessons)

---

## Self-Review: Spec Coverage Check

| Spec requirement | Task |
|---|---|
| `lessonsData[subject] = { bloques, lessons }` | Tasks 2, 11 |
| `BloqueConfig` shape `{ id, label, icon, color }` | Task 1 |
| `Lesson.mepBloque` required string | Tasks 2 (test), 7–10 |
| `Lesson.id` as kebab-case string slug | Tasks 2, 7–10, 12, 13 |
| Bloques: Sociales(2), Ciencias(4), Español(2), Matemática(5) | Task 1 |
| `subjectConfig.js` with label, icon, accent, bloques | Task 1 |
| `lessons/sociales.js` flat merge of grade4+5+6 | Task 7 |
| `lessons/ciencias.js` from cienciasGrade6 + PDF | Task 8 |
| `lessons/espanol.js` from espanolGrade6 + PDF | Task 9 |
| `lessons/matematicas.js` from PDF | Task 10 |
| OCR pipeline with page ranges | Tasks 4–6 |
| MD outline review gates (one per subject) | Tasks 3–6 |
| `SubjectHome.jsx` — hero + bloque sections + 2-col grid | Task 14 |
| Only bloques with lessons are rendered | Task 14 (`if (bloqueLessons.length === 0) return null`) |
| No disabled / placeholder cards | Task 12 (LessonCard has no disabled branch) |
| No grade markers anywhere | Tasks 12–14 (no gradeId prop anywhere) |
| Route `/:subject` → SubjectHome | Task 15 |
| Route `/:subject/lesson/:lessonId` → LessonView | Task 15 |
| LessonView removes gradeId from params | Task 13 |
| LessonCard removes gradeId prop | Task 12 |
| Delete Home, CienciasHome, EspanolHome, LessonsList | Task 16 |
| Primaria only — no secundaria routes | App.jsx has no `:nivel` param |
