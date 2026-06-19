# PDF Extraction: Libro de Teoría y Práctica — Prueba Nacional Estandarizada Primaria

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract all content from the Morpho scanned PDF (214 pages) into 4 structured markdown files — one per subject — saved to `documents/full-books/extracted/`.

**Architecture:** Read the PDF in batches of 10 pages using the Read tool, transcribe all visible content (theory fichas + exercises) into markdown, and append to the subject file after every batch so progress is preserved on interruption. Commit after each subject is fully extracted.

**Tech Stack:** Read tool (PDF image rendering), Write/Edit tools for file output, Bash for directory creation and verification.

---

## File Map

| File | Subject | Pages |
|---|---|---|
| `documents/full-books/extracted/matematicas.md` | Matemáticas | 3–63 |
| `documents/full-books/extracted/espanol.md` | Español | 64–96 |
| `documents/full-books/extracted/ciencias.md` | Ciencias | 97–158 |
| `documents/full-books/extracted/sociales.md` | Estudios Sociales | 159–214 |

---

## Markdown Format Rules (apply to every batch)

**Theory fichas:**
```markdown
### Bloque N: Nombre

**AFIRMACIÓN:** texto completo

**EVIDENCIAS:**
- Evidencia 1: texto
- Evidencia 2: texto

#### Ficha #N — Título
[Full theory content. Tables as markdown tables. Examples included.]
```

**Exercises:**
```markdown
## EJERCICIOS

### Bloque N: Nombre

**1.** Texto de la pregunta
- A) opción
- B) opción
- C) opción
- D) opción
✅ Respuesta: X  *(only if answer key visible on page)*
```

**Images/diagrams that can't be represented as text:**
```
[imagen: descripción breve de lo que muestra]
```

---

## Task 1: Setup — Create output directory and initialize files

**Files:**
- Create: `documents/full-books/extracted/matematicas.md`
- Create: `documents/full-books/extracted/espanol.md`
- Create: `documents/full-books/extracted/ciencias.md`
- Create: `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Create directory**

```bash
mkdir -p /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted
```

- [ ] **Step 2: Create matematicas.md with header**

Write to `documents/full-books/extracted/matematicas.md`:
```markdown
# Matemáticas — Prueba Nacional Estandarizada Primaria
> Fuente: Libro de Teoría y Práctica Morpho. Páginas 3–63.

## TEORÍA

```

- [ ] **Step 3: Create espanol.md with header**

Write to `documents/full-books/extracted/espanol.md`:
```markdown
# Español — Prueba Nacional Estandarizada Primaria
> Fuente: Libro de Teoría y Práctica Morpho. Páginas 64–96.

## TEORÍA

```

- [ ] **Step 4: Create ciencias.md with header**

Write to `documents/full-books/extracted/ciencias.md`:
```markdown
# Ciencias — Prueba Nacional Estandarizada Primaria
> Fuente: Libro de Teoría y Práctica Morpho. Páginas 97–158.

## TEORÍA

```

- [ ] **Step 5: Create sociales.md with header**

Write to `documents/full-books/extracted/sociales.md`:
```markdown
# Estudios Sociales — Prueba Nacional Estandarizada Primaria
> Fuente: Libro de Teoría y Práctica Morpho. Páginas 159–214.

## TEORÍA

```

- [ ] **Step 6: Verify all 4 files exist**

```bash
ls -la /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/
```
Expected: 4 files listed (matematicas.md, espanol.md, ciencias.md, sociales.md)

---

## Task 2: Matemáticas — Pages 3–12

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 3–12**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "3-12"
```

- [ ] **Step 2: Transcribe all content into markdown format**

For each page, extract: Bloque headings, AFIRMACIÓN text, EVIDENCIAS list, Ficha number and title, all body text, tables (as markdown tables), and examples. Use the format rules defined above.

- [ ] **Step 3: Append transcribed content to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```
Expected: line count greater than the initial header (should be well above 5 lines after extraction)

---

## Task 3: Matemáticas — Pages 13–22

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 13–22**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "13-22"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Continue the structure from the previous batch. If a Ficha or Bloque started on page 12 and continues on page 13, continue it (don't repeat the heading).

- [ ] **Step 3: Append to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```
Expected: line count higher than after Task 2.

---

## Task 4: Matemáticas — Pages 23–32

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 23–32**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "23-32"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Continue structure. Pages 23–37 are still Teoría Matemática. Note when content transitions from theory fichas to a new Bloque.

- [ ] **Step 3: Append to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```

---

## Task 5: Matemáticas — Pages 33–42

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 33–42**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "33-42"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Note: Page 37 ends Teoría Matemática. Page 38 starts Ejercicios Matemática. When the transition occurs, insert the `## EJERCICIOS` section header before the first exercise question.

- [ ] **Step 3: Append to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```

---

## Task 6: Matemáticas — Pages 43–52

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 43–52**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "43-52"
```

- [ ] **Step 2: Transcribe all content into markdown format**

These pages are Ejercicios Matemática. Extract each question with its number, stem, and all 4 answer options (A–D). Include answer key if shown.

- [ ] **Step 3: Append to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```

---

## Task 7: Matemáticas — Pages 53–63

**Files:** Append to `documents/full-books/extracted/matematicas.md`

- [ ] **Step 1: Read pages 53–63**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "53-63"
```

- [ ] **Step 2: Transcribe all content into markdown format**

These are the final Ejercicios Matemática pages. Page 63 is the last page of Matemáticas content.

- [ ] **Step 3: Append to matematicas.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/matematicas.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/matematicas.md
```

- [ ] **Step 5: Commit Matemáticas extraction**

```bash
git add documents/full-books/extracted/matematicas.md
git commit -m "feat: extract Matemáticas content from Morpho MEP book (pages 3-63)"
```

---

## Task 8: Español — Pages 64–73

**Files:** Append to `documents/full-books/extracted/espanol.md`

- [ ] **Step 1: Read pages 64–73**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "64-73"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Pages 64–71 are Teoría Español. Page 72 starts Ejercicios Español. Insert `## EJERCICIOS` header at the transition point. Español theory fichas cover grammar, reading comprehension, and writing skills.

- [ ] **Step 3: Append to espanol.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/espanol.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/espanol.md
```

---

## Task 9: Español — Pages 74–83

**Files:** Append to `documents/full-books/extracted/espanol.md`

- [ ] **Step 1: Read pages 74–83**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "74-83"
```

- [ ] **Step 2: Transcribe all content into markdown format**

These pages are Ejercicios Español. Extract each question with number, passage (if any), stem, and 4 options.

- [ ] **Step 3: Append to espanol.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/espanol.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/espanol.md
```

---

## Task 10: Español — Pages 84–96

**Files:** Append to `documents/full-books/extracted/espanol.md`

- [ ] **Step 1: Read pages 84–96**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "84-96"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Final Ejercicios Español pages. Page 96 is the last page of Español content.

- [ ] **Step 3: Append to espanol.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/espanol.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/espanol.md
```

- [ ] **Step 5: Commit Español extraction**

```bash
git add documents/full-books/extracted/espanol.md
git commit -m "feat: extract Español content from Morpho MEP book (pages 64-96)"
```

---

## Task 11: Ciencias — Pages 97–106

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 97–106**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "97-106"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Pages 97–127 are Teoría Ciencias. Extract Bloque headings, Afirmaciones, Evidencias, Ficha numbers/titles, and all body content including diagrams described as text.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

---

## Task 12: Ciencias — Pages 107–116

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 107–116**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "107-116"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Continue Teoría Ciencias extraction.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

---

## Task 13: Ciencias — Pages 117–126

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 117–126**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "117-126"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Continue Teoría Ciencias extraction. These are the final theory pages before exercises begin at page 128.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

---

## Task 14: Ciencias — Pages 127–136

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 127–136**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "127-136"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Page 127 ends Teoría Ciencias. Page 128 starts Ejercicios Ciencias. Insert `## EJERCICIOS` section header at the transition.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

---

## Task 15: Ciencias — Pages 137–146

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 137–146**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "137-146"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Ejercicios Ciencias continuation. Extract all multiple choice questions with full stems and 4 options each.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

---

## Task 16: Ciencias — Pages 147–158

**Files:** Append to `documents/full-books/extracted/ciencias.md`

- [ ] **Step 1: Read pages 147–158**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "147-158"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Final Ejercicios Ciencias pages. Page 158 is the last page of Ciencias content.

- [ ] **Step 3: Append to ciencias.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/ciencias.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/ciencias.md
```

- [ ] **Step 5: Commit Ciencias extraction**

```bash
git add documents/full-books/extracted/ciencias.md
git commit -m "feat: extract Ciencias content from Morpho MEP book (pages 97-158)"
```

---

## Task 17: Estudios Sociales — Pages 159–168

**Files:** Append to `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Read pages 159–168**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "159-168"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Pages 159–186 are Teoría Estudios Sociales. Topics include Costa Rica geography, history, civics, and culture. Extract Bloques, Afirmaciones, Evidencias, and all Fichas content.

- [ ] **Step 3: Append to sociales.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/sociales.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/sociales.md
```

---

## Task 18: Estudios Sociales — Pages 169–178

**Files:** Append to `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Read pages 169–178**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "169-178"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Continue Teoría Estudios Sociales extraction.

- [ ] **Step 3: Append to sociales.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/sociales.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/sociales.md
```

---

## Task 19: Estudios Sociales — Pages 179–188

**Files:** Append to `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Read pages 179–188**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "179-188"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Page 186 ends Teoría Estudios Sociales. Page 187 starts Ejercicios Estudios Sociales. Insert `## EJERCICIOS` section header at the transition.

- [ ] **Step 3: Append to sociales.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/sociales.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/sociales.md
```

---

## Task 20: Estudios Sociales — Pages 189–198

**Files:** Append to `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Read pages 189–198**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "189-198"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Ejercicios Estudios Sociales continuation. Extract all questions with full stems and 4 options each.

- [ ] **Step 3: Append to sociales.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/sociales.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/sociales.md
```

---

## Task 21: Estudios Sociales — Pages 199–214

**Files:** Append to `documents/full-books/extracted/sociales.md`

- [ ] **Step 1: Read pages 199–214**

```
Read file: /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/Libro de teoria y practica - Prueba Nacional Estandarizada Primaria.pdf
pages: "199-214"
```

- [ ] **Step 2: Transcribe all content into markdown format**

Final Ejercicios Estudios Sociales pages. Page 214 is the last page of the book.

- [ ] **Step 3: Append to sociales.md**

Use the Edit tool to append the extracted markdown to the end of `documents/full-books/extracted/sociales.md`.

- [ ] **Step 4: Verify file updated**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/sociales.md
```

- [ ] **Step 5: Commit Estudios Sociales extraction**

```bash
git add documents/full-books/extracted/sociales.md
git commit -m "feat: extract Estudios Sociales content from Morpho MEP book (pages 159-214)"
```

---

## Task 22: Final verification

- [ ] **Step 1: Check all 4 files have substantial content**

```bash
wc -l /Users/didiercorrales/Documents/didierRepos/sociales/documents/full-books/extracted/*.md
```
Expected: each file should be hundreds of lines (matematicas and ciencias likely 500+, espanol and sociales 300+).

- [ ] **Step 2: Commit the initialized empty files if not yet committed**

```bash
git add documents/full-books/extracted/
git status
```

- [ ] **Step 3: Final commit**

```bash
git add documents/full-books/extracted/
git commit -m "feat: complete PDF extraction of all 4 subjects from Morpho MEP book"
```
