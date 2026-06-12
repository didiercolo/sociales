# Lesson Content Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the live lesson data (`sociales.js`, `ciencias.js`, `espanol.js`) so every doc-backed lesson displays the full, faithful prose from the reference documents in `documents/`, plus quizzes that test that detail.

**Architecture:** Pure data edits — no routing, component, or styling changes (the site is already flat and grade-free). Each lesson is edited in place, preserving its `id`/`mepBloque`/`title`/`videoId`/`extraMaterial`/`openQuestions`/`questionCount`, replacing only `sections[]` (Phase 1) and `quiz[]`/`description` (Phase 2). Source prose lives in the repo at exact paths/line ranges given per task — the transform is markdown → HTML strings with **full fidelity** (every fact in the source section must appear on the page).

**Tech Stack:** React + Vite, plain JS data modules (arrays of lesson objects), HTML strings rendered via `dangerouslySetInnerHTML` in `LessonView`.

---

## Conventions (read once — every task depends on this)

### Source of truth
The reference documents ARE the content to display. Full fidelity means: do not summarize, abbreviate, or drop facts. Convert the source prose into HTML, keeping every name, date, number, and cause/consequence. Only omit decorative emoji from headings (keep them out of `<h4>` text or use sparingly).

When two docs cover the same topic, the **narrative `resumen_estudios_sociales_6.md`** gives the connected prose; **`EStudiosSocialesFinal.md`** and **`Moredetails.md`** add bullet facts, dates, and tables. Merge them — narrative prose first, then a "Puntos clave" list / table of the extra facts.

### HTML format for `content[]`
Each `sections[].content` is an **array of HTML strings**. Use:
- `"<p>…</p>"` for paragraphs. Bold key terms with `<strong>…</strong>`.
- `"<ul><li>…</li><li>…</li></ul>"` for lists.
- `"<h4>Subtítulo</h4>"` for sub-headings inside a section.
- `"<table><thead><tr><th>…</th></tr></thead><tbody><tr><td>…</td></tr></tbody></table>"` where the doc has a table.
- Keep the existing **"Preguntas de repaso"** convention where present: `"<h4>Preguntas de repaso</h4><ul><li>¿…?</li></ul>"` as the last content entry of a section.

### String-escaping rules (critical — broken strings break the build)
- `sociales.js` uses **double-quoted** JSON-style strings and keys (`"title":`). Inside double-quoted strings, escape any literal `"` as `\"`, and write newlines inside text as a space (no raw line breaks inside a string). Prefer `'` for HTML attributes: `"<a href='…'>"`.
- `ciencias.js` and `espanol.js` use **bare keys** and may use single or backtick quotes — match the file's existing style in each lesson you touch.
- Never paste a raw `"` from the source text without escaping it. Accented characters (á, é, í, ó, ú, ñ) are fine as UTF-8.

### Per-task verification recipe (run for every content/quiz task)
1. `npm run build` → **Expected:** build succeeds, no "Unexpected token"/"Unterminated string" errors.
2. `npm run lint` → **Expected:** no new errors in the edited file.
3. `npm run dev`, open the lesson at `http://localhost:5173/sociales/lesson/<id>` (or `/ciencias/…`, `/espanol/…`) → **Expected:** sections render, no raw HTML tags visible, no missing-content blocks.
4. **Fidelity check:** open the source doc lines and confirm every fact (names, dates, numbers, lists) from the source section appears in the rendered lesson.

### Commit cadence
One commit per lesson task. Message: `content: enrich <lesson-id> from <source-doc>`.

---

## PHASE 1 — READING CONTENT

### Task 1: Reference rewrite — `el-estado-social-y-las-reformas-de-1940` (quality bar)

This is the worked example. Every later content task follows this exact pattern.

**Files:**
- Modify: `src/data/lessons/sociales.js` (lesson `id: "el-estado-social-y-las-reformas-de-1940"`, currently ~line 4511; line shifts as you edit — locate by `id`)

**Sources:**
- `documents/6to grado/resumen_estudios_sociales_6.md` lines 103–121 (narrative: contexto, Calderón, alianza, las 4 reformas in full)
- `documents/general Summary/EStudiosSocialesFinal.md` lines 532–586 (fechas clave + "Las 4 Principales Reformas Sociales" detail)

- [ ] **Step 1: Read both source ranges**

Run:
```bash
sed -n '103,121p' "documents/6to grado/resumen_estudios_sociales_6.md"
sed -n '532,586p' "documents/general Summary/EStudiosSocialesFinal.md"
```

- [ ] **Step 2: Replace the lesson's `sections` array**

Locate the lesson object by `"id": "el-estado-social-y-las-reformas-de-1940"`. Replace its entire `"sections": [ … ]` array with the structure below (mirrors the source: contexto → alianza histórica → las 4 reformas in full → fechas clave). Keep `quiz` untouched in this phase.

```js
"sections": [
  {
    "title": "1. Contexto: La Caída del Estado Liberal",
    "content": [
      "<p>El modelo liberal, a pesar de sus logros en educación e infraestructura, dejó importantes problemas sociales sin resolver. La <strong>mortalidad infantil</strong> era muy elevada debido a la desnutrición; los trabajadores no recibían un <strong>salario mínimo</strong> digno y las jornadas laborales eran excesivamente largas; la recolección del café era prácticamente la única actividad económica disponible para los campesinos y era muy mal pagada.</p>",
      "<p>El <strong>Partido Comunista</strong>, liderado por <strong>Manuel Mora Valverde</strong>, ganaba influencia al denunciar estas injusticias y exigir cambios estructurales.</p>",
      "<h4>Preguntas de repaso</h4><ul><li>¿Qué problemas sociales dejó el modelo liberal sin resolver?</li><li>¿Por qué era necesaria una reforma en los derechos de los trabajadores?</li></ul>"
    ]
  },
  {
    "title": "2. La Alianza Histórica de Calderón Guardia",
    "content": [
      "<p>El presidente <strong>Rafael Ángel Calderón Guardia</strong> (1940–1944) impulsó las principales reformas sociales que transformaron estructuralmente a Costa Rica. Para llevarlas a cabo formó una <strong>alianza histórica</strong> entre su gobierno, la <strong>Iglesia Católica</strong> (representada por Monseñor <strong>Víctor Manuel Sanabria</strong>) y el <strong>Partido Comunista</strong> (liderado por Manuel Mora Valverde).</p>",
      "<p>Aunque políticamente contrarios en muchos aspectos, los tres actores coincidían en la necesidad urgente de proteger a los sectores más vulnerables de la sociedad costarricense.</p>"
    ]
  },
  {
    "title": "3. Las Reformas Sociales más Importantes",
    "content": [
      "<h4>La Universidad de Costa Rica (UCR, 1941)</h4>",
      "<p>Al cerrarse la Universidad de Santo Tomás durante la era liberal, Costa Rica quedó sin educación superior pública por décadas. El gobierno calderonista creó la <strong>primera universidad pública del país</strong>, con el objetivo de formar los profesionales que la nación necesitaba para desarrollarse: médicos, abogados, ingenieros, docentes, entre otros. La UCR abrió las puertas a miles de costarricenses. Con el tiempo se crearon otras universidades públicas (como la UNA, el ITCR y la UNED) y múltiples universidades privadas que ampliaron el acceso a la educación superior.</p>",
      "<h4>La Caja Costarricense del Seguro Social (CCSS)</h4>",
      "<p>Institución creada para brindar <strong>seguridad social</strong> a los trabajadores mediante seguros de salud, maternidad, invalidez y pensiones. Su financiamiento se basa en contribuciones <strong>tripartitas</strong> de los trabajadores, los patronos y el Estado. Hoy es considerada una de las instituciones más valiosas del país por garantizar atención médica universal.</p>",
      "<h4>Las Garantías Sociales</h4>",
      "<p>Conjunto de <strong>derechos laborales</strong> incorporados directamente a la Constitución Política, que protegen a los trabajadores: derecho a huelga, jornada laboral máxima de <strong>ocho horas</strong>, derecho a vacaciones pagadas, protección contra el despido injustificado, salario mínimo garantizado y derecho a organizarse en sindicatos.</p>",
      "<h4>El Código de Trabajo</h4>",
      "<p>Normativa legal integral que regula todas las relaciones entre patronos y trabajadores, estableciendo derechos y obligaciones claras de ambas partes. Permitió que los trabajadores tuvieran un marco legal que los protegiera ante abusos patronales.</p>",
      "<h4>Preguntas de repaso</h4><ul><li>Mencione tres de las reformas sociales más importantes de esta década.</li><li>¿Qué actores formaron la 'Alianza Histórica' para estas reformas?</li><li>¿Cómo se financia la CCSS?</li></ul>"
    ]
  }
]
```

- [ ] **Step 3: Run the verification recipe** (Conventions → "Per-task verification recipe"). Build + lint + render `http://localhost:5173/sociales/lesson/el-estado-social-y-las-reformas-de-1940` + fidelity check against the two source ranges.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/sociales.js
git commit -m "content: enrich el-estado-social-y-las-reformas-de-1940 from resumen + EStudiosSocialesFinal"
```

---

### Task 2: `la-campana-nacional-de-costa-rica`

**Files:** Modify `src/data/lessons/sociales.js` (locate by `id: "la-campana-nacional-de-costa-rica"`, ~line 3789).

**Sources (read all three, merge):**
- `documents/6to grado/resumen_estudios_sociales_6.md` lines 13–65 (full narrative: situación previa, antecedentes 1–4, primera fase batallas, cólera, segunda fase, consecuencias, héroes, filibusteros)
- `documents/6to grado/1-campana-nacional-COMPLETO.md` (deep-dive detail)
- `documents/general Summary/EStudiosSocialesFinal.md` lines 437–492 (fechas clave + batallas Santa Rosa/Sardinal/Rivas/La Trinidad)

- [ ] **Step 1:** Read the three ranges (`sed -n` per Task 1 Step 1 pattern).
- [ ] **Step 2:** Replace `sections` with this section order, full prose per Conventions:
  1. "1. Situación de Costa Rica antes de la Campaña" (independencia 1821, ejército nacional)
  2. "2. Antecedentes de la Campaña" (intereses expansionistas; Vía del Tránsito + fiebre del oro; Destino Manifiesto; guerra civil en Nicaragua + Walker + Juan Rafael Mora)
  3. "3. Primera Fase — Batallas Principales" (Santa Rosa 20 mar 1856; Sardinal 10 abr; Rivas 11 abr + Juan Santamaría + Mesón de Guerra; cifras de bajas)
  4. "4. Fase Intermedia — El Cólera" (epidemia, 10% de la población, transmisión por agua)
  5. "5. Segunda Fase y Fin" (alianza centroamericana, rendición y exilio 1857, fusilamiento 1860)
  6. "6. Consecuencias" (soberanía, reconocimiento internacional, solidaridad centroamericana, héroes nacionales, exilio de Mora)
  7. "7. Héroes y Filibusteros, del Pasado al Presente" (Pancha Carrasco Heroína 1994; concepto ampliado)
  Add a "Preguntas de repaso" block at the end of sections 3 and 6.
- [ ] **Step 3:** Verification recipe (render `/sociales/lesson/la-campana-nacional-de-costa-rica`).
- [ ] **Step 4:** Commit `content: enrich la-campana-nacional-de-costa-rica from resumen + campana-COMPLETO`.

---

### Task 3: `el-estado-liberal-y-los-suenos-de-progreso`

**Files:** Modify `src/data/lessons/sociales.js` (`id: "el-estado-liberal-y-los-suenos-de-progreso"`, ~line 4117).

**Sources:**
- `resumen_estudios_sociales_6.md` lines 69–95 (Estado Liberal, Tomás Guardia, ferrocarril + Minor Keith, bananera + United Fruit, reformas educativa/jurídica/religiosa)
- `EStudiosSocialesFinal.md` lines 493–531 (Reformas Liberales: Constitución 1871, leyes anticlericales, reforma educativa, desarrollo económico)

- [ ] **Step 1:** Read both ranges.
- [ ] **Step 2:** Replace `sections`, order:
  1. "1. El Estado Liberal en Costa Rica" (época liberal, Tomás Guardia 1870, "orden y progreso", Constitución 1871)
  2. "2. Características de un Estado Liberal" (desarrollo económico, libertades individuales, tensión con la Iglesia)
  3. "3. El Ferrocarril al Caribe" (1871, préstamo 3 400 000 libras, puerto en Limón, café, Minor Keith)
  4. "4. La Actividad Bananera" (United Fruit / "la Yunai", desarrollo y desigualdad)
  5. "5. Las Reformas Liberales" (Educativa: Mauro Fernández, Ley 1885/1886, gratuita-obligatoria-laica, Liceo de Costa Rica, Colegio de Señoritas, Biblioteca/Archivo Nacional, Ley del Concordato 1852; Jurídica: Constitución 1871, Código Civil, matrimonio civil/divorcio; Religiosa: secularización del cementerio)
  Add "Preguntas de repaso" to sections 3 and 5.
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 4: `la-guerra-civil-de-1948`

**Files:** Modify `src/data/lessons/sociales.js` (`id: "la-guerra-civil-de-1948"`, ~line 4901).

**Sources:**
- `resumen_estudios_sociales_6.md` lines 125–161 (causas, desarrollo/fin, Pacto Ulate-Figueres, consecuencias, Constitución 1949 + derechos)
- `EStudiosSocialesFinal.md` lines 718–744 (Derechos Constitucionales) for the rights detail.

- [ ] **Step 1:** Read both ranges.
- [ ] **Step 2:** Replace `sections`, order:
  1. "1. Causas de la Guerra Civil" (elecciones 1948, Otilio Ulate, anulación por el Congreso, alianza con comunistas, crisis económica, regreso de Figueres)
  2. "2. Desarrollo y Fin de la Guerra" (Ejército de Liberación Nacional, Legión Caribe, 44 días, Teodoro Picado, Santos León Herrera, Pacto Ulate-Figueres: Junta 18 meses, Asamblea Constituyente, suspensión electoral)
  3. "3. Consecuencias" (Constitución 1949; abolición del ejército — cuartel Bella Vista → Museo Nacional; voto femenino; nacionalización bancaria; creación del TSE)
  4. "4. La Constitución de 1949 — Derechos Fundamentales" (Art. 21 vida; Art. 29 libertad de pensamiento; educación/salud/trabajo; prohibición del ejército + sufragio universal; instituciones autónomas)
  Add "Preguntas de repaso" to sections 1 and 3.
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 5: `costa-rica-y-su-geografia`

**Files:** Modify `src/data/lessons/sociales.js` (`id: "costa-rica-y-su-geografia"`, ~line 5).

**Sources:** `EStudiosSocialesFinal.md` lines 41–90 (TEMA 2 Posición Geográfica + TEMA 3 Relieve, including the cordilleras table); `Moredetails.md` lines 25–59.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections`, order: "1. Posición Geográfica" (Centroamérica, entre Nicaragua y Panamá, hemisferios, dos océanos), "2. Ventajas de nuestra posición" (suelos fértiles, puente biológico, dos costas, clima, turismo, biodiversidad — as `<ul>`), "3. Desventajas / Fenómenos naturales" (huracanes, inundaciones, terremotos, sequías, erupciones — `<ul>`), "4. Formas de Relieve" (cordilleras Volcánica Central / Talamanca-Chirripó / Guanacaste as a `<table>`; otras formas del relieve). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 6: `historia-antigua-de-costa-rica`

**Files:** `src/data/lessons/sociales.js` (`id: "historia-antigua-de-costa-rica"`, ~line 674).
**Sources:** `EStudiosSocialesFinal.md` lines 91–137 (TEMA 4, línea de tiempo + Cazadores y Recolectores 12.000 a.C., Aldeanos Igualitarios 2.000 a.C., Aldeanos Cacicales 500–1500 d.C.); `Moredetails.md` lines 60–104.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections`: "1. Línea de tiempo precolombina", "2. Cazadores y Recolectores", "3. Aldeanos Igualitarios", "4. Aldeanos Cacicales" — full prose per period (fechas, modo de vida, organización). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 7: `etnias-de-la-costa-rica-antigua`

**Files:** `src/data/lessons/sociales.js` (`id: "etnias-de-la-costa-rica-antigua"`, ~line 1081).
**Sources:** `EStudiosSocialesFinal.md` lines 138–226 (TEMA 5: Territorios Indígenas + the 8 etnias Chorotegas/Huetares/Cabécares/Bribris/Bruncas/Malekus/Térrabas/Ngäbes); `Moredetails.md` lines 105–193.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections`: "1. Territorios Indígenas de Costa Rica" (list/table), then one section "2. Pueblos Originarios" containing an `<h4>` per etnia with its description, OR a `<table>` of etnia → ubicación → rasgos. Keep every etnia and detail. Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 8: `el-momento-del-contacto-colon`

**Files:** `src/data/lessons/sociales.js` (`id: "el-momento-del-contacto-colon"`, ~line 1489).
**Sources:** `EStudiosSocialesFinal.md` lines 255–288 (TEMA 7 La Conquista Española 1502–1575); `Moredetails.md` lines 222–254.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` mirroring the conquista narrative (llegada de Colón 1502, etapas de la conquista, figuras clave, resistencia indígena, consecuencias). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 9: `la-sociedad-colonial`

**Files:** `src/data/lessons/sociales.js` (`id: "la-sociedad-colonial"`, ~line 1891).
**Sources:** `EStudiosSocialesFinal.md` lines 289–353 (TEMA 8 Período Colonial 1575–1821); `Moredetails.md` lines 255–291.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` (organización colonial, economía de pobreza, sociedad, vida cotidiana, fin del período). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 10: `causas-de-la-independencia`

**Files:** `src/data/lessons/sociales.js` (`id: "causas-de-la-independencia"`, ~line 2302).
**Sources:** `EStudiosSocialesFinal.md` lines 354–393 (TEMA 9 Independencia); `Moredetails.md` lines 292–329.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` (causas internas y externas, 15 de setiembre de 1821, llegada de la noticia). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 11: `la-libertad-politica-de-costa-rica`

**Files:** `src/data/lessons/sociales.js` (`id: "la-libertad-politica-de-costa-rica"`, ~line 2698).
**Sources:** `EStudiosSocialesFinal.md` lines 394–413 (TEMA 10 Pacto de Concordia); `Moredetails.md` lines 330–348.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` (Pacto de Concordia — primera constitución, contenido, importancia). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 12: `la-anexion-del-partido-de-nicoya`

**Files:** `src/data/lessons/sociales.js` (`id: "la-anexion-del-partido-de-nicoya"`, ~line 3091).
**Sources:** `EStudiosSocialesFinal.md` lines 414–436 (TEMA 11 Anexión 1824); `Moredetails.md` lines 349–368.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` (contexto, 25 de julio de 1824, "De la patria por nuestra voluntad", consecuencias). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 13: `situacion-actual-de-los-pueblos-originarios`

**Files:** `src/data/lessons/sociales.js` (`id: "situacion-actual-de-los-pueblos-originarios"`, ~line 7533).
**Sources:** `EStudiosSocialesFinal.md` lines 227–254 (TEMA 6 Aportes + Desafíos actuales); `Moredetails.md` lines 194–221.

- [ ] **Step 1:** Read ranges.
- [ ] **Step 2:** Replace `sections` (aportes culturales; desafíos actuales de los pueblos originarios). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 14: `costa-rica-sociedad-intercultural`

**Files:** `src/data/lessons/sociales.js` (`id: "costa-rica-sociedad-intercultural"`, ~line 7925).
**Sources:** `EStudiosSocialesFinal.md` lines 622–646 (TEMA 16 Identidad Intercultural, Multiétnica y Plurilingüe).

- [ ] **Step 1:** Read range.
- [ ] **Step 2:** Replace `sections` (características de la sociedad costarricense; aportes culturales a la identidad nacional). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 15: `los-simbolos-nacionales`

**Files:** `src/data/lessons/sociales.js` (`id: "los-simbolos-nacionales"`, ~line 8310).
**Sources:** `EStudiosSocialesFinal.md` lines 674–717 (TEMA 18: Bandera, Escudo, Himno Nacional).

- [ ] **Step 1:** Read range.
- [ ] **Step 2:** Replace `sections`: "1. La Bandera Nacional", "2. El Escudo Nacional", "3. El Himno Nacional" — full descriptions (colores/significado, elementos del escudo, autores del himno). Add "Preguntas de repaso".
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 16: `ciudadania-y-desafios-actuales`

**Files:** `src/data/lessons/sociales.js` (`id: "ciudadania-y-desafios-actuales"`, ~line 8714).
**Sources:**
- `resumen_estudios_sociales_6.md` lines 169–285 (U3: participación estudiantil, cultura fiscal, drogas, redes sociales/ciberbullying, seguridad vial, gestión de riesgo)
- `EStudiosSocialesFinal.md` lines 587–621 (TEMA 15 Instituciones: MEP, PANI, EBAIS, Defensoría, IMAS) and lines 647–673 (TEMA 17 Medio Ambiente).

- [ ] **Step 1:** Read all ranges.
- [ ] **Step 2:** Replace `sections`, order:
  1. "1. Participación Ciudadana Estudiantil" (Gobierno Estudiantil, Directivas de Sección, Ferias Científicas, Certámenes, Actos Cívicos)
  2. "2. Participación en la Comunidad"
  3. "3. Cultura Fiscal" (impuestos, Ministerio de Hacienda, responsabilidad ciudadana)
  4. "4. Instituciones que Protegen los Derechos" (MEP, PANI, EBAIS, Defensoría de los Habitantes, IMAS)
  5. "5. Prevención del Consumo de Drogas" (lícitas/ilícitas, factores de riesgo y protección, consecuencias)
  6. "6. Convivencia y Redes Sociales" (ventajas/riesgos, ciberbullying, uso correcto)
  7. "7. Seguridad Vial y Gestión de Riesgo" (normas peatonales, gestión de riesgo, plan de emergencias 5 pasos, kit de emergencias)
  8. "8. El Medio Ambiente y las Actitudes Ciudadanas"
  Add "Preguntas de repaso" to sections 3, 5, and 7.

  > **Note:** This lesson covers many talleres. If the current lesson splits these across sibling lessons, distribute the content to the matching lesson instead of duplicating. Confirm by scanning sibling `educacion-civica` bloque lessons before writing.
- [ ] **Step 3:** Verification recipe.
- [ ] **Step 4:** Commit.

---

### Task 17: `resumen-general-completo` — light pass

**Files:** `src/data/lessons/sociales.js` (`id: "resumen-general-completo"`, ~line 5293).

- [ ] **Step 1:** Read the current lesson. This is an aggregate overview — do **not** duplicate all enriched content here. Confirm it still reads as a coherent high-level index/summary after Tasks 1–16.
- [ ] **Step 2:** Only if it contains now-contradictory abstracts, update them to match the enriched lessons (consistency, not full prose). Otherwise leave as-is.
- [ ] **Step 3:** Verification recipe (build + render only).
- [ ] **Step 4:** Commit (skip if unchanged).

---

### Task 18: Ciencias doc-backed lessons (gravity chapter)

**Files:** `src/data/lessons/ciencias.js` (match the file's bare-key style).
**Source:** `documents/Ciencias/6to grado/1-gravity-summary.md` (333 lines: masa, peso, gravedad, 9.8 N/kg, balanza vs báscula, Tierra/Luna/Júpiter, promedio de mediciones, and any flotación/movimiento/órbita lunar content present).

- [ ] **Step 1:** Read the whole gravity doc (`sed -n '1,333p'`). List which of these lessons it actually covers: `gravedad-fuerzas`, `empuje-flotacion`, `movimiento-y-rapidez`, `movimientos-tierra-luna`. Only enrich the ones with real coverage.
- [ ] **Step 2:** For `gravedad-fuerzas`: replace `sections` with "1. ¿Qué es la masa?", "2. ¿Qué es el peso?", "3. La gravedad (9.8 N/kg)", "4. Masa vs Peso en la Tierra, la Luna y Júpiter", "5. Medición y promedio". Full fidelity to the doc.
- [ ] **Step 3:** For each other covered lesson, replace `sections` from the matching doc portion. For lessons the doc does NOT cover, **leave untouched** (fidelity rule — no invention).
- [ ] **Step 4:** Verification recipe (render `/ciencias/lesson/gravedad-fuerzas` etc.).
- [ ] **Step 5:** Commit `content: enrich ciencias gravity lessons from 1-gravity-summary`.

---

### Task 19: Español doc-backed lessons

**Files:** `src/data/lessons/espanol.js` (match the file's existing style).
**Source:** `documents/Español/6to grado/1examenmarzo/repaso_espanol_6to_grado.md` (695 lines: tipos de lenguaje formal/coloquial/técnico, sinónimos/antónimos, tildes/sílabas, comunicación, etc.).

- [ ] **Step 1:** Read the repaso doc headers (`grep -nE '^#{1,3} ' …`) then the relevant ranges. Map each of the 5 lessons (`relaciones-causa-efecto`, `tema-e-ideologia-del-texto`, `informacion-implicita`, `analisis-de-personajes`, `repaso-espanol-primer-examen`) to the doc topic it overlaps.
- [ ] **Step 2:** For each overlapping lesson, replace `sections` with the full prose from the matching doc topic. `repaso-espanol-primer-examen` should carry the broad review material (tipos de lenguaje, sinónimos, tildes). Where a lesson has no doc overlap, leave untouched.
- [ ] **Step 3:** Verification recipe (render `/espanol/lesson/<id>`).
- [ ] **Step 4:** Commit `content: enrich espanol lessons from repaso_espanol`.

---

## PHASE 2 — QUIZZES

> **Quiz object shape:** `{ "question": "…", "options": ["…","…","…"], "correct": <index> }`. Match each file's key style (`sociales.js` = quoted keys; `ciencias.js`/`espanol.js` = bare). After writing each quiz, **re-verify the `correct` index** points at the right option string.

### Task 20: Sociales quizzes from the 150-question bank

**Files:** `src/data/lessons/sociales.js` (each lesson's `quiz[]`, plus `banco-de-preguntas-g5`/`banco-de-preguntas-g6`).
**Source:** `EStudiosSocialesFinal.md` lines 783–1717 — "150 PREGUNTAS DE SELECCIÓN ÚNICA" in 8 blocks:
- BLOQUE 1 (787) Sociales/Cívica · BLOQUE 2 (839) Geografía · BLOQUE 3 (915) Historia Antigua/Pueblos · BLOQUE 4 (1069) Conquista/Colonial · BLOQUE 5 (1175) Independencia/Pacto · BLOQUE 6 (1269) Anexión/Campaña · BLOQUE 7 (1411) Reformas Liberales/Sociales · BLOQUE 8 (1523) Instituciones/Símbolos/Derechos.

- [ ] **Step 1:** Read each bloque range. Map each bloque to the matching lesson(s) by topic (e.g. BLOQUE 6 → `la-campana-nacional-de-costa-rica` + `la-anexion-del-partido-de-nicoya`; BLOQUE 7 → `el-estado-liberal…` + `el-estado-social…`).
- [ ] **Step 2:** For each lesson, append the bloque's relevant questions to its `quiz[]`, converting each to the quiz object shape. Preserve the source's correct answer; set `correct` to the matching option index. Deduplicate against existing questions.
- [ ] **Step 3:** Put any general/cross-topic questions into `banco-de-preguntas-g6`.
- [ ] **Step 4:** Verification recipe + take each affected quiz in `/simulacro/sociales` or the lesson page; confirm the marked correct answer is right.
- [ ] **Step 5:** Commit per lesson or per bloque: `quiz: add BLOQUE N questions to <lesson-id>`.

---

### Task 21: Ciencias quizzes (gravity)

**Files:** `src/data/lessons/ciencias.js`.
**Source:** any quiz/practice questions in `1-gravity-summary.md`; otherwise author questions strictly from facts already written into the enriched gravity lessons (no new facts).

- [ ] **Step 1:** Identify the gravity-lesson facts now on the page (masa, peso, 9.8 N/kg, Tierra/Luna/Júpiter).
- [ ] **Step 2:** Add/extend `quiz[]` for the enriched ciencias lessons only, in the file's style.
- [ ] **Step 3:** Verification recipe + verify each `correct` index.
- [ ] **Step 4:** Commit `quiz: extend ciencias gravity quizzes`.

---

### Task 22: Español quizzes

**Files:** `src/data/lessons/espanol.js`.
**Source:** practice questions in `repaso_espanol_6to_grado.md` (and the existing exam-style items already in the file).

- [ ] **Step 1:** Read practice questions in the repaso doc.
- [ ] **Step 2:** Add/extend `quiz[]` for the enriched español lessons, in the file's style.
- [ ] **Step 3:** Verification recipe + verify each `correct` index.
- [ ] **Step 4:** Commit `quiz: extend espanol quizzes from repaso_espanol`.

---

## Final verification

- [ ] `npm run build` clean.
- [ ] `npm run lint` clean.
- [ ] `npx vitest run` — existing tests still pass (no lesson-shape regressions).
- [ ] Spot-render 5 enriched lessons across the 3 subjects; confirm depth matches `el-estado-social-y-las-reformas-de-1940`.
- [ ] Confirm the **Gaps list** (the ~20 unsourced Ciencias lessons) remains untouched and is noted to the user.

---

## Self-Review notes

- **Spec coverage:** Phase 1 Tasks 1–17 cover every Sociales lesson in the spec mapping; Task 18 covers Ciencias doc-backed lessons; Task 19 covers Español; Phase 2 Tasks 20–22 cover quizzes for all three. Gaps list preserved (Final verification).
- **Fidelity rule:** enforced per task (Step "leave untouched" for unsourced lessons; fidelity check in the verification recipe).
- **No invented content:** Tasks 18/19/21 explicitly forbid authoring beyond the doc/enriched facts.
- **String-escaping risk:** addressed in Conventions and caught by build/lint in every task.
- **Quiz `correct` index drift:** explicit re-verify step in every Phase 2 task.
