# PDF Extraction: Libro de Teoría y Práctica — Prueba Nacional Estandarizada Primaria

## Overview

Extract all content from the Morpho "Libro de Teoría y Práctica" scanned PDF into structured markdown files, one per subject. Content will serve as source material for future lesson enrichment and quiz additions on EduPortal CR.

## Source

- **File:** `documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf`
- **Type:** Scanned book, image-based pages (~200 pages, 67.2MB)
- **Content:** Theory fichas + 600+ multiple choice exercises for 4 subjects

## Output Files

Location: `documents/full-books/extracted/`

| File | Subject | Theory pages | Exercises pages |
|---|---|---|---|
| `matematicas.md` | Matemáticas | 3–37 | 38–63 |
| `espanol.md` | Español | 64–71 | 72–96 |
| `ciencias.md` | Ciencias | 97–127 | 128–158 |
| `sociales.md` | Estudios Sociales | 159–186 | 187–end |

## Markdown Structure Per File

```
# [Subject] — Prueba Nacional Estandarizada Primaria

## TEORÍA

### Bloque [N]: [Nombre]

**AFIRMACIÓN:** [texto]

**EVIDENCIAS:**
- Evidencia 1: [texto]
- Evidencia 2: [texto]

#### Ficha #[N] — [Título]
[Full theory content, examples, tables in markdown]

---

## EJERCICIOS

### Bloque [N]: [Nombre]

**[Número].** [Pregunta]
- A) [opción]
- B) [opción]
- C) [opción]
- D) [opción]
✅ Respuesta: [letra]  *(if answer key is visible)*
```

Diagrams/visual elements that cannot be represented as text are noted as `[imagen: descripción]`.

## Extraction Process

- Read PDF in batches of 10 pages at a time using the Read tool
- After each batch, append extracted content to the corresponding subject file
- **Save after every batch** so progress is preserved even if the session is interrupted
- Process subjects in order: Matemáticas → Español → Ciencias → Estudios Sociales

## Key Constraint

This is a scanned PDF (image-based). Each page render is visual. All text must be manually transcribed from the page images. Mathematical tables and diagrams are represented as markdown tables or described in text.
