# Design: Subject-First Flat Restructure + MEP Content Fill

**Date:** 2026-06-09  
**Status:** Approved  
**Scope:** Primaria only (grados 4–6, no secundaria)

---

## Problem

The current site organizes content by grade first (`/ciencias/grade/6`), requiring students to pick a grade before seeing any lessons. Three of four subjects (Ciencias, Español, Matemática) are mostly empty. The grade-picker adds friction and exposes the sparse content state.

## Goal

Replace the grade-based navigation with subject-based flat navigation. Every subject shows all its lessons directly, grouped by MEP curriculum block. Fill content gaps using the existing PDF (`Resúmenes Prueba Estandarizada Sexto Grado.pdf`, 141 pages, scanned) and existing MD source files.

---

## Decisions Made

| Question | Decision |
|----------|----------|
| Navigation structure | Subject → flat lessons list (no grade step) |
| Lesson ordering within subject | Grouped by MEP bloque (visual section headers) |
| Missing content | Simply absent — no placeholders, no locked cards, no grade markers |
| Content scope | Primaria only; secundaria out of scope |
| Implementation order | Data-first: OCR → MD outlines → JS data → UI restructure |

---

## Data Architecture

### New `lessonsData` shape

```js
// src/data/lessonsData.js
lessonsData[subject] = {
  bloques: BloqueConfig[],
  lessons: Lesson[]
}
```

`BloqueConfig`:
```js
{ id: string, label: string, icon: string, color: string }
```

`Lesson` (unchanged shape, new required field):
```js
{
  id: string,           // unique within subject, kebab-case slug
  title: string,
  description?: string, // short subtitle shown on lesson card; falls back to sections[0].title
  mepBloque: string,    // matches a BloqueConfig.id
  sections: Section[],
  quiz: QuizItem[],
  openQuestions?: OpenQuestion[],
  extraMaterial?: { title: string, url: string },
  questionCount?: number
}
```

No `disabled`, no `gradeId`, no grade-related fields.

### Bloques per subject

**Estudios Sociales**
```js
bloques: [
  { id: 'geografia-historia', label: 'Geografía e Historia', icon: '🗺️', color: '#0284c7' },
  { id: 'educacion-civica',   label: 'Educación Cívica',     icon: '🏛️', color: '#7c3aed' },
]
```

**Ciencias**
```js
bloques: [
  { id: 'cuerpo-humano',  label: 'Cuerpo Humano',  icon: '🧬', color: '#0284c7' },
  { id: 'biodiversidad',  label: 'Biodiversidad',   icon: '🌿', color: '#16a34a' },
  { id: 'energia',        label: 'Energía',          icon: '⚡', color: '#d97706' },
  { id: 'geofisica',      label: 'Geofísica',        icon: '🌍', color: '#7c3aed' },
]
```

**Español**
```js
bloques: [
  { id: 'comprension-lectora', label: 'Comprensión Lectora',           icon: '📖', color: '#0284c7' },
  { id: 'produccion-escrita',  label: 'Producción de Texto Expositivo', icon: '✏️', color: '#d97706' },
]
```

**Matemática**
```js
bloques: [
  { id: 'numeros',    label: 'Números',                 icon: '🔢', color: '#0284c7' },
  { id: 'geometria',  label: 'Geometría',                icon: '📐', color: '#16a34a' },
  { id: 'medidas',    label: 'Medidas',                  icon: '📏', color: '#d97706' },
  { id: 'algebra',    label: 'Relaciones y Álgebra',     icon: '🔣', color: '#7c3aed' },
  { id: 'estadistica',label: 'Estadística y Probabilidad', icon: '📊', color: '#dc2626' },
]
```

### File layout changes

```
src/data/
  subjectConfig.js          ← NEW: bloques config per subject
  lessonsData.js            ← UPDATED: new shape, imports flat lesson files
  lessons/
    sociales.js             ← UPDATED: flat merge of grade4+grade5+grade6 content
    ciencias.js             ← NEW: from PDF OCR (was cienciasGrade6.js)
    espanol.js              ← NEW: from PDF OCR + repaso MD
    matematicas.js          ← NEW: from PDF OCR
    grade4.js               ← KEPT as source, no longer imported
    grade5.js               ← KEPT as source, no longer imported
    grade6.js               ← KEPT as source, no longer imported
    cienciasGrade6.js       ← KEPT as source, no longer imported
    espanolGrade6.js        ← KEPT as source, no longer imported
    resumen.js              ← KEPT as source, no longer imported
```

---

## Routes

```
BEFORE                                          AFTER
/:subject                    (grade picker)  →  /:subject           (SubjectHome)
/:subject/grade/:gradeId     (lesson list)   →  (removed)
/:subject/grade/:gradeId/lesson/:lessonId    →  /:subject/lesson/:lessonId
```

`App.jsx` diff:
```jsx
// Remove these 4 routes:
<Route path="sociales"    element={<Home />} />
<Route path="ciencias"    element={<CienciasHome />} />
<Route path="espanol"     element={<EspanolHome />} />
<Route path="matematicas" element={<ComingSoon />} />
<Route path=":subject/grade/:gradeId" element={<LessonsList />} />
<Route path=":subject/grade/:gradeId/lesson/:lessonId" element={<LessonView />} />

// Add these 2 routes:
<Route path=":subject"                  element={<SubjectHome />} />
<Route path=":subject/lesson/:lessonId" element={<LessonView />} />
```

---

## Components

### `SubjectHome.jsx` (new, replaces 4 pages)

```
Props: none (reads subject from useParams)
Data: lessonsData[subject] → { bloques, lessons }

Render:
  <hero>
    ← Volver a Materias
    [icon] [subject label]
    [N lecciones · Prueba Estandarizada MEP 2026]

  <for each bloque where lessons.filter(l => l.mepBloque === bloque.id).length > 0>
    <section header>  [icon] [BLOQUE LABEL] ──────
    <2-column card grid>
      <for each lesson in bloque>
        <lesson card>
          LECCIÓN N  (bloque color)
          title
          subtitle: lesson.description ?? lesson.sections[0]?.title ?? ''
          → links to /:subject/lesson/:lessonId
```

Only bloques with at least one lesson are rendered.

### `LessonView.jsx` (minor update)

- Remove `gradeId` from `useParams()`
- Change lookup: `lessonsData[subject].lessons.find(l => l.id === lessonId)`
- Update back-link: `← Volver a [Subject]` → `/${subject}`

### `LessonCard.jsx` (minor update)

- Remove `gradeId` prop
- Update `<Link to>` from `/${subject}/grade/${gradeId}/lesson/${id}` to `/${subject}/lesson/${id}`

### Files deleted

- `src/pages/CienciasHome.jsx`
- `src/pages/EspanolHome.jsx`
- `src/pages/Home.jsx` (the sociales grade picker)
- `src/pages/LessonsList.jsx`

---

## Content Pipeline

### Step 1 — OCR PDF into per-subject MD outlines (review gate)

OCR `documents/resumenes/Resúmenes Prueba Estandarizada Sexto Grado.pdf` in batches by subject. Write one MD outline file per subject before touching any JS. User reviews before code is written.

Output files:
```
docs/
  lessons-ciencias.md      ← lesson list: id, title, mepBloque, content summary
  lessons-espanol.md
  lessons-matematicas.md
  lessons-sociales.md      ← compiled from existing grade4/5/6 JS files
```

### Step 2 — Convert MD outlines to JS lesson data

Each entry in the MD becomes a `Lesson` object. `sections[]` are populated from OCR'd content. `quiz[]` are populated from OCR'd exam-style questions where available.

### Content sources per subject

| Subject | Sources | Approx. lessons |
|---------|---------|-----------------|
| Estudios Sociales | `grade4.js`, `grade5.js`, `grade6.js`, `5to.md`, `EStudiosSocialesFinal.md` | ~15 |
| Ciencias | PDF pages 16–90, `cienciasGrade6.js`, `1-gravity-summary.md` | ~18 |
| Español | PDF pages 9–15, `espanolGrade6.js`, `repaso_espanol_6to_grado.md` | ~8 |
| Matemática | PDF pages 102–144 | ~20 |

---

## Out of Scope

- Secundaria / bachillerato
- Educación Cívica as standalone subject (primaria: integrated into Estudios Sociales)
- Simulacro mode
- `mepBloque` badge on quiz items
- URL redirects from old grade-based routes
