# Español Content Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every comprensión-lectora lesson in `src/data/lessons/espanol.js` mirror `documents/full-books/extracted/espanol.md`'s theory content, and give every lesson a correctly-topic-matched quiz, per `docs/superpowers/specs/2026-06-18-espanol-content-rebuild-design.md`.

**Architecture:** Single data file (`src/data/lessons/espanol.js`) edited lesson-by-lesson: one new lesson added, four existing lessons get missing worked examples appended as new sections, and the 35 misfiled quiz questions get redistributed to their correct lesson plus ~37 new questions converted from `espanol.md`'s exercise bank. No component or routing changes.

**Tech Stack:** Plain JS data file (ES module, no build step needed beyond Vite), Vitest for structural checks.

## Global Constraints

- Only content present in `espanol.md` is added to lesson sections — no invented facts (spec "Fidelity rule").
- Existing content not sourced from the md (e.g. "Conectores causales y consecutivos") is kept as-is.
- 4-option quiz schema: `{ question, options: [4 strings], correct: <0-3>, mepBloque: 'comprension-lectora' }`. When converting an md 3-option (A/B/C) exercise, options A/B/C keep their original order and indices (0/1/2); the added 4th distractor is always appended last (index 3) and is never the correct answer.
- `repaso-espanol-primer-examen` lesson and `espanolGrade6.js` are out of scope — do not touch.
- After every task: edit only `src/data/lessons/espanol.js`, then run `npx vitest run src/tests/lessonsData.test.js` (structural check) before committing.
- Commit after each task with `git add src/data/lessons/espanol.js && git commit -m "..."`.

---

## Task 1: Add new lesson `ideas-fundamentales-y-complementarias` (theory only)

**Files:**
- Modify: `src/data/lessons/espanol.js` (insert new lesson object as the first element of the `espanolLessons` array, before the `relaciones-causa-efecto` lesson currently at line 4)

**Interfaces:**
- Produces: a lesson object with `id: 'ideas-fundamentales-y-complementarias'`, `quiz: []` (filled in Task 7) — later tasks (Task 2, Task 7) locate it by this id.

- [ ] **Step 1: Insert the new lesson object**

Open `src/data/lessons/espanol.js`. Immediately after line 2 (`export const espanolLessons = [`) and before the `// ─── COMPRENSIÓN LECTORA ─────────────────────────────────` comment / `relaciones-causa-efecto` lesson, insert:

```js
  {
    id: 'ideas-fundamentales-y-complementarias',
    mepBloque: 'comprension-lectora',
    title: 'Ideas Fundamentales y Complementarias',
    description: 'Aprende a distinguir la idea fundamental de un párrafo de las ideas complementarias que la rodean en textos no literarios.',
    sections: [
      {
        title: '¿Qué son las ideas fundamentales?',
        content: [
          '<p>Las <strong>ideas fundamentales o principales</strong> son aquellas que expresan una <strong>información básica</strong> para el desarrollo del tema que se trata. La idea principal <strong>puede o no aparecer explícita en el texto</strong>; por ello, se debe leer muy bien la información para encontrarla o inferirla.</p>',
          '<h3>Características de las ideas fundamentales</h3>',
          '<ul>',
          '<li>En algunas ocasiones se encuentran en la primera oración del párrafo.</li>',
          '<li>Expresan información que abarca las demás ideas del párrafo.</li>',
          '<li>Afirman lo más importante e imprescindible; si se elimina esta idea, el párrafo queda incompleto.</li>',
          '</ul>'
        ]
      },
      {
        title: '¿Qué son las ideas complementarias?',
        content: [
          '<p>Las <strong>ideas complementarias</strong> o <strong>ideas secundarias</strong> expresan <strong>detalles o aspectos derivados del tema principal</strong>. A menudo, sirven para <strong>ampliar, demostrar o ejemplificar</strong> una idea principal.</p>',
          '<h3>Características de las ideas complementarias</h3>',
          '<ul>',
          '<li>Son menos importantes que la idea principal; el párrafo puede tener sentido sin ellas.</li>',
          '<li>Aportan más información a la idea principal.</li>',
          '<li>Son parte de la idea principal.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Ejemplo: idea fundamental e ideas complementarias',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>En todo ecosistema hay dos componentes: los seres vivos y las características del lugar. Los seres vivos más abundantes en el ecosistema son los animales y las plantas. Además, pueden existir otros seres vivos, como los hongos y las algas, que no son animales ni plantas. Los animales constituyen la fauna y las plantas forman la flora de un ecosistema. Las características del lugar son la temperatura, las precipitaciones, el suelo, el agua y la luz. Todos estos elementos influyen en los seres vivos. Por ejemplo, un oso polar no puede sobrevivir en un ecosistema en el que la temperatura sea alta.</blockquote>',
          '<p><strong>IDEA FUNDAMENTAL:</strong> Todo ecosistema tiene dos componentes: los seres vivos y las características del lugar.</p>',
          '<p><strong>IDEAS COMPLEMENTARIAS:</strong></p>',
          '<ul>',
          '<li>Los animales y las plantas son los seres vivos más abundantes en el ecosistema.</li>',
          '<li>Otros seres vivos que también pueden existir son los hongos y las algas.</li>',
          '<li>Las características del lugar son la temperatura, las precipitaciones, el suelo, el agua y la luz; éstas influyen en los seres vivos.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Ejemplo: cómo elegir la idea fundamental entre varias opciones',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>La deforestación es el proceso por el cual la tierra se va quedando sin bosques, casi siempre por acción del hombre. La tala de árboles deja la tierra sin protección y las lluvias lavan los suelos, que dejan de ser fértiles para la siembra de plantas alimenticias. Otro efecto de la deforestación es el cambio del clima. Los lugares en donde no hay árboles, son más calurosos por el efecto reflejo. Para evitar esos daños hay que reforestar.</blockquote>',
          '<p><strong>¿Cuál es la idea fundamental del párrafo anterior?</strong></p>',
          '<ul>',
          '<li>(A) Las lluvias lavan los suelos y las tierras dejan de ser fértiles.</li>',
          '<li>(B) La deforestación es el proceso por el cual la tierra se va quedando sin bosques.</li>',
          '<li>(C) La deforestación produce cambios en el clima.</li>',
          '</ul>',
          '<p><strong>Respuesta: opción B.</strong> Las opciones A y C son ideas secundarias ya que hablan sobre consecuencias de la deforestación, pero la opción B menciona la idea fundamental del párrafo al mencionar el concepto de deforestación.</p>'
        ]
      }
    ],
    quiz: []
  },

```

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS (new lesson has valid `id`, `title`, `mepBloque`, `sections[]`; `mepBloque: 'comprension-lectora'` is already a valid bloque id used by sibling lessons).

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add Ideas Fundamentales y Complementarias lesson theory"
```

---

## Task 2: Redistribute the 35 existing quiz questions to their correct lessons

**Files:**
- Modify: `src/data/lessons/espanol.js` (the `relaciones-causa-efecto` lesson's `quiz: [...]` array, and the empty `quiz: []` arrays of `ideas-fundamentales-y-complementarias`, `tema-e-ideologia-del-texto`, `analisis-de-personajes`)

**Interfaces:**
- Consumes: the 35 existing quiz objects currently inside `relaciones-causa-efecto`'s `quiz: [...]` (each already shaped `{ question, options: [4], correct, mepBloque: 'comprension-lectora' }` — no reshaping needed, only relocation).
- Produces: each lesson's `quiz` array contains only questions matching its own topic.

The 35 questions, in their current file order, split by actual topic as follows (verified by reading each question's text against the lesson topics):

- Questions 1–10 (cacao, desierto Atacama, formación de la Tierra, hongo gigante, Sol, desierto Sahara, delfín rosado, energía eléctrica, asteroides, deshidratación) → move to `ideas-fundamentales-y-complementarias`.
- Questions 11–19 (estrés calles, automatización tecnológica, insectos color, incas Cusco, pingüino emperador, El Niño, altura/clima, corriente eléctrica, deporte) → stay in `relaciones-causa-efecto`.
- Questions 20–27 (Mujercitas trabajo, zorra y león, árbol Ginko, magia, Pinocho/Hada, león/testamento/zorro, Anancy/Tigre/bote, Bastián/Auryn) → move to `tema-e-ideologia-del-texto`.
- Questions 28–35 (laboratorio/pequeño, Peter Pan/sombra, Flor del Olivar/príncipe, Qüin/unicornio, Cuervo/Zorro/queso, rey don Generoso, Alicia Paf/pompa, Bastián/Torre de Marfil) → move to `analisis-de-personajes`.

- [ ] **Step 1: Cut questions 1–10 and paste into `ideas-fundamentales-y-complementarias`**

In `relaciones-causa-efecto`'s `quiz: [...]` array, cut the 10 question objects starting with `question: 'Lea el siguiente texto:\n«¿Desde cuándo existe el chocolate?...` (cacao) through `question: 'Lea el siguiente texto:\n«El cerebro depende en gran medida...` (deshidratación). Paste them as the contents of `ideas-fundamentales-y-complementarias`'s `quiz: []`, replacing the empty array with `quiz: [ <the 10 objects> ]`.

- [ ] **Step 2: Cut questions 20–27 and paste into `tema-e-ideologia-del-texto`**

In what remains of `relaciones-causa-efecto`'s quiz array, cut the 8 question objects starting with `question: 'Lea el siguiente texto:\n«─Sí; quería que aprendieran...` (Mujercitas) through `question: 'Lea el siguiente texto:\n«—¡Gracias —dijo Bastián—...` (Bastián/Auryn). Paste them as the contents of `tema-e-ideologia-del-texto`'s `quiz: []`.

- [ ] **Step 3: Cut questions 28–35 and paste into `analisis-de-personajes`**

In what remains of `relaciones-causa-efecto`'s quiz array, cut the remaining 8 question objects starting with `question: 'Lea el siguiente texto:\n«—Veamos, pequeño, ¿por qué se te ocurrió entrar aquí?...` (laboratorio) through `question: 'Lea el siguiente texto:\n«Volvieron al campamento los exploradores...` (Bastián/Torre de Marfil). Paste them as the contents of `analisis-de-personajes`'s `quiz: []`.

- [ ] **Step 4: Verify the question counts per lesson**

Run:

```bash
node --input-type=module -e "
import { espanolLessons } from './src/data/lessons/espanol.js';
for (const l of espanolLessons) console.log(l.id, l.quiz.length);
"
```

Expected output includes: `ideas-fundamentales-y-complementarias 10`, `relaciones-causa-efecto 9`, `tema-e-ideologia-del-texto 8`, `informacion-implicita 0`, `analisis-de-personajes 8`, `repaso-espanol-primer-examen 139`.

- [ ] **Step 5: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS (no id/shape changes, only relocation; ids remain unique).

- [ ] **Step 6: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "fix: redistribute misfiled español quiz questions to correct lessons"
```

---

## Task 3: Add missing worked example to `relaciones-causa-efecto`

**Files:**
- Modify: `src/data/lessons/espanol.js` (append a new section to `relaciones-causa-efecto`'s `sections: [...]` array, after the existing `'¿Por qué son importantes?'` section and before its `quiz:` key)

- [ ] **Step 1: Append the new section**

```js
      {
        title: 'Ejemplo: tema, causa y efecto en un texto',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>El 22 de mayo es del día mundial de la biodiversidad. Las abejas como todos los seres vivos, forman parte de esta biodiversidad. Pero, desde hace algunos años, los apicultores están preocupados porque las abejas desaparecen de las colmenas de todo el mundo. Se envenenan con los insecticidas que se utilizan en la agricultura moderna. Además, tienen menos flores donde libar y están amenazadas por enfermedades en el interior de las colmenas. Sin abejas no hay miel. Y es que la miel no se fabrica artificialmente. Pero la desaparición de las abejas no preocupa solo a los golosos. Toda la biodiversidad está amenazada porque, sin las abejas, no hay semillas.</blockquote>',
          '<p><strong>TEMA:</strong> La importancia de las abejas para mantener la biodiversidad.</p>',
          '<p><strong>CAUSA:</strong> Las abejas están desapareciendo debido al uso de insecticidas y la falta de flores.</p>',
          '<p><strong>EFECTO:</strong> La disminución de las abejas produce que hayan menos semillas por lo que se afecta la biodiversidad del planeta.</p>'
        ]
      }
```

Insert this object as the last element of `relaciones-causa-efecto`'s `sections` array (add a comma after the closing `}` of the existing `'¿Por qué son importantes?'` section object, then this object, with no trailing comma after it since `]` follows).

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add causa-efecto worked example (abejas) from espanol.md"
```

---

## Task 4: Add Ficha #4 methodology and worked example to `tema-e-ideologia-del-texto`

**Files:**
- Modify: `src/data/lessons/espanol.js` (append two new sections to `tema-e-ideologia-del-texto`'s `sections: [...]` array, after the existing `'¿Por qué es importante identificar el tema y la ideología?'` section)

- [ ] **Step 1: Append the strategy-methodology section**

```js
      {
        title: 'Estrategias para comprender a los personajes',
        content: [
          '<p>Para comprender el papel de cada personaje, debemos leer con atención y aplicar tres estrategias:</p>',
          '<h3>1. Hipótesis o conjeturas</h3>',
          '<p>Nos permiten formar nuestras propias opiniones o suposiciones acerca de lo que leemos.</p>',
          '<ul>',
          '<li>¿Por qué los personajes actúan de esa forma?</li>',
          '<li>¿Cómo podría ser la sociedad donde habitan los personajes?</li>',
          '<li>¿Cómo podría ser la vida cotidiana de los personajes?</li>',
          '<li>¿Cómo se relacionan los personajes con los demás?</li>',
          '</ul>',
          '<h3>2. Analogías</h3>',
          '<p>Relacionan a los personajes con personas y situaciones de la vida real.</p>',
          '<ul>',
          '<li>¿Cómo se parecen los personajes a personas que conozco?</li>',
          '<li>¿Cómo se relacionan las acciones de los personajes con situaciones de la vida real?</li>',
          '</ul>',
          '<h3>3. Conclusiones</h3>',
          '<p>Llegamos a diferentes conclusiones sobre el texto leído.</p>',
          '<ul>',
          '<li>¿Qué opinión tengo sobre los personajes y sus acciones?</li>',
          '<li>¿De qué otras formas se pudieron resolver los conflictos de la historia?</li>',
          '</ul>',
          '<p>De esta forma podemos comprender las intenciones de los personajes, su forma de actuar y si estamos de acuerdo o no con sus acciones. Recordemos que existen personajes principales y secundarios, y que algunos pueden ser héroes o villanos; cada uno se comportará de acuerdo a su rol dentro del texto literario.</p>'
        ]
      },
      {
        title: 'Ejemplo: la hormiga y la cigarra',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>La hormiga, que siempre veía a la cigarra descansando, respondió: —Estoy guardando provisiones para cuando llegue el invierno, te aconsejo que hagas lo mismo. —Pues yo no voy a preocuparme por nada —dijo la cigarra—, por ahora tengo todo lo que necesito. Y continuó cantando y jugando.</blockquote>',
          '<p><strong>ANÁLISIS:</strong></p>',
          '<ul>',
          '<li>Podemos observar que hay dos personajes: la hormiga y la cigarra.</li>',
          '<li>La hormiga es muy trabajadora porque está guardando provisiones para el invierno, pero la cigarra no se ve muy preocupada al respecto.</li>',
          '<li>Se puede inferir que la cigarra pasará hambre cuando llegue el invierno ya que no está guardando provisiones y prefiere descansar.</li>',
          '</ul>',
          '<p>A partir de esta información podemos establecer un juicio de cómo son los personajes y brindar nuestra propia opinión acerca de su comportamiento.</p>'
        ]
      }
```

Insert both objects at the end of `tema-e-ideologia-del-texto`'s `sections` array (comma-separated, no trailing comma after the last one).

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add Ficha #4 methodology and worked example to tema-e-ideologia"
```

---

## Task 5: Add missing worked example to `informacion-implicita`

**Files:**
- Modify: `src/data/lessons/espanol.js` (append a new section to `informacion-implicita`'s `sections: [...]` array, after the existing `'¿Por qué es importante la información implícita?'` section)

- [ ] **Step 1: Append the new section**

```js
      {
        title: 'Ejemplo: información implícita en un texto',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>Jorge está de cumpleaños, por lo que sus padres decidieron realizar una fiesta el sábado para que asistieran sus primos, compañeros y sus amigos más queridos.</blockquote>',
          '<p>El texto anterior contiene información implícita que debemos encontrar por medio de <strong>hipótesis</strong> (posibles respuestas a preguntas):</p>',
          '<p><strong>¿Cuántos años tendrá Jorge?</strong> No lo sabemos, pero podemos suponer que no es un bebé porque ya tiene compañeros. Lo más probable es que sea un niño de preescolar o escuela.</p>',
          '<p><strong>¿El cumpleaños de Jorge cae sábado?</strong> De acuerdo al texto, Jorge está de cumpleaños el día en que este se escribió, porque sus padres harán la fiesta el sábado, o sea, en el futuro. Entonces su cumpleaños no es el sábado, pero la celebración sí.</p>',
          '<p><strong>¿Jorge tiene tíos o tías?</strong> Podemos deducir que sí, ya que se menciona que se invitará a sus primos.</p>'
        ]
      }
```

Insert this object as the last element of `informacion-implicita`'s `sections` array.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add información implícita worked example (Jorge) from espanol.md"
```

---

## Task 6: Add missing worked examples to `analisis-de-personajes`

**Files:**
- Modify: `src/data/lessons/espanol.js` (append two new sections to `analisis-de-personajes`'s `sections: [...]` array, after the existing `'Motivaciones del personaje'` section)

- [ ] **Step 1: Append the conflicto worked example (Anancy)**

```js
      {
        title: 'Ejemplo: el conflicto de Anancy',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>Pero cuando comenzó a subir, el tesoro se le atravesaba. Trató y trató pero no pudo avanzar. De repente el hijo más joven de Anancy pasó por ahí y le preguntó: —¿Qué haces padre? —Estoy intentando escalar este grandioso árbol con mi tesoro, pero no lo logro—, dijo Anancy. —Padre, ¿y por qué no lo pones en tu espalda?, eso va a facilitar tu subida—, sugirió la joven araña.</blockquote>',
          '<p><strong>ANÁLISIS:</strong></p>',
          '<ul>',
          '<li>Podemos observar que hay dos personajes: Anancy y su hijo.</li>',
          '<li>Anancy desea esconder un tesoro en la cima de un árbol.</li>',
          '<li>Anancy enfrenta la dificultad de no poder avanzar debido al tamaño y peso del tesoro que llevaba.</li>',
          '<li>El hijo de Anancy le da un sabio consejo para resolver su problema.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Ejemplo: el comportamiento de la joven y la Reina',
        content: [
          '<p>Lea el siguiente texto:</p>',
          '<blockquote>Allá en aquellos tiempos había una joven muy perezosa que no quería hilar. Su madre se incomodaba mucho; pero no podía hacerla trabajar. Un día perdió la paciencia de manera que llegó a pegarle, y su hija se puso a llorar a gritos. En aquel momento pasaba por allí la Reina, y oyendo los sollozos, mandó detener su coche y entró en la casa preguntando a la madre por qué pegaba a su hija con tanta crueldad, que se oían en la calle los lamentos de la niña. La mujer, avergonzada, no quiso contarle de la pereza de su hija, y le dijo: —No puedo hacerla que suelte el huso ni un solo instante, quiere estar hilando siempre, y yo soy tan pobre que no puedo darle el lino que necesita.</blockquote>',
          '<p><strong>ANÁLISIS:</strong></p>',
          '<ul>',
          '<li>Podemos observar que hay tres personajes: la madre, la hija y la Reina.</li>',
          '<li>La hija se comporta de manera perezosa, no quiere trabajar.</li>',
          '<li>La madre está desesperada, no sabe qué hacer con su hija.</li>',
          '<li>La Reina se muestra compasiva ya que le preocupaba que maltrataran a la muchacha.</li>',
          '</ul>'
        ]
      }
```

Insert both objects at the end of `analisis-de-personajes`'s `sections` array.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add Anancy and joven-perezosa worked examples to analisis-de-personajes"
```

---

## Task 7: Convert and add 8 `espanol.md` exercises to `ideas-fundamentales-y-complementarias`'s quiz

**Files:**
- Modify: `src/data/lessons/espanol.js` (append 8 question objects to `ideas-fundamentales-y-complementarias`'s `quiz: [...]` array, which already holds the 10 questions moved in Task 2)

**Interfaces:**
- Consumes: nothing from other tasks besides the existing 10-question array from Task 2.
- Produces: an 18-question quiz array on this lesson.

Selected from `espanol.md` exercises #4, #9, #14, #19 (fundamentales) and #22, #27, #30, #33 (complementarias). Each keeps the original A/B/C options at indices 0/1/2 and gets one new 4th distractor at index 3; `correct` always points at the original right answer's index.

- [ ] **Step 1: Append the 8 question objects**

```js
      {
        question: 'Lea el siguiente texto:\n«La balanza es un instrumento de precisión ya utilizado hace miles de años por los egipcios y que se emplea para medir masas. Su función consiste en comparar el peso de un cuerpo con otro cuyo peso ya se conoce. Para lograrlo, se emplean pesas.»\nLa idea fundamental del párrafo anterior es',
        options: ['Las pesas favorecen el cálculo del peso en la balanza.', 'Los egipcios fueron los primeros en utilizar la balanza para el comercio.', 'La balanza es el instrumento de precisión por el que conocemos el peso de los cuerpos.', 'Las balanzas modernas funcionan con baterías y pantallas digitales.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«En los últimos diez años el sector turístico ha crecido considerablemente gracias a los cambios que se han hecho en la ciudad. En primer lugar, se han abierto más museos y se han inaugurado más parques. En segundo lugar, se han financiado distintas propuestas culturales, como obras de teatro y otros tipos de espectáculos. Finalmente, se ha unificado la información de sitios turísticos que se pueden visitar.»\nLa idea fundamental del párrafo anterior es',
        options: ['En los últimos diez años el sector turístico ha crecido considerablemente gracias a los cambios que se han hecho en la ciudad.', 'Se han abierto más museos y se han inaugurado más parques.', 'Se han financiado distintas propuestas culturales.', 'El turismo internacional disminuyó debido a la falta de promoción cultural.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Durante la Colonia, la producción de plata necesitaba una compleja serie de actividades y procesos en las fases de extracción y refinamiento. Los minerales se extraían en las galerías (algunas de profundidad asombrosa) con máquinas especiales y luego se les llevaba hasta la superficie. Allí eran clasificados y luego molidos. Tras esta preparación venía el tratamiento final.»\n¿Cuál es la idea fundamental del fragmento anterior?',
        options: ['Durante la Colonia se extraían metales preciosos.', 'Durante la Colonia la producción de plata necesitaba de procesos de extracción y refinamiento.', 'Los minerales que se extraían en las galerías eran clasificados y luego molidos.', 'La plata extraída en la Colonia se utilizaba únicamente para acuñar monedas.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«La columna vertebral de una serpiente es muy flexible. El conocido "movimiento serpentino" sería imposible sin una espina dorsal fuerte y unos potentes músculos dorsales. Algunas de las serpientes más pequeñas tienen 180 vértebras, mientras que las especies más largas pueden llegar hasta 400. Las propias vértebras están reforzadas para aguantar la tensión y la fuerza de los músculos.»\n¿Cuál es la idea fundamental del fragmento anterior?',
        options: ['La columna vertebral de una serpiente es muy flexible.', 'Las propias vértebras están reforzadas para aguantar la tensión y la fuerza de los músculos.', 'Las serpientes más pequeñas tienen 180 vértebras.', 'Las serpientes más grandes pueden alcanzar hasta 400 vértebras sin ninguna curvatura.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Los antiguos creían que las estrellas eran agujeros que habían en el cielo, a través de los cuales la luz que había al otro lado del cielo se filtraba hacia nosotros. Hoy sabemos que las estrellas son algo curiosísimo, mucho más interesante y complejo. Todas las estrellas son enormes bolas de gas como nuestro Sol.»\nUna idea complementaria del párrafo anterior es',
        options: ['las estrellas son enormes bolas de gas.', 'a las personas antiguas no les interesaban las estrellas.', 'el cielo tiene muchos agujeros pero aun nadie sabe que significan.', 'los antiguos consideraban que las estrellas estaban hechas de fuego eterno.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Un tornado es un cono de aire que se desplaza a unos 50 km por hora, acompañado de fuertes tormentas eléctricas. Los más destructivos pueden tener hasta un kilómetro y medio de anchura y estar en contacto con el suelo durante 60 minutos. A su alrededor, el viento llega a alcanzar velocidades entre 500 y 800 kilómetros por hora.»\n¿Cuál es una idea complementaria del fragmento anterior?',
        options: ['Un tornado está acompañado de fuertes tormentas eléctricas.', 'Algunos países nunca han presenciado un tornado.', 'El tornado nunca es destructivo.', 'Los tornados solo se producen en zonas desérticas y secas.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El petróleo es un aceite oscuro y de mal olor. Sin embargo, sus múltiples y provechosos usos lo ubican como un recurso importante en la economía mundial. Se le conoce desde hace muchísimos años, pero su explotación se ha desarrollado solo durante los últimos siglos.»\n¿Cuál es una idea complementaria del fragmento anterior?',
        options: ['El petróleo es un aceite oscuro y de mal olor muy provechoso para los seres humanos.', 'El petróleo solamente se ha explotado en los últimos siglos.', 'El petróleo no aporta beneficios al ser humano.', 'El petróleo fue descubierto por primera vez en el siglo XX.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El fútbol es el deporte más popular del mundo. En Estados Unidos, se llama soccer. El fútbol se juega en escuelas, clubes y equipos profesionales. En un partido, dos equipos compiten para marcar goles.»\n¿Cuál es una idea complementaria del fragmento anterior?',
        options: ['El fútbol es el deporte más popular del mundo.', 'En Estados Unidos, el fútbol se llama soccer.', 'A las personas no les gusta el fútbol.', 'El fútbol se inventó en Estados Unidos en el siglo XIX.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      }
```

Insert these 8 objects as the last elements of `ideas-fundamentales-y-complementarias`'s `quiz` array (after the 10 moved in Task 2).

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add 8 ideas-fundamentales/complementarias quiz questions from espanol.md"
```

---

## Task 8: Convert and add 6 `espanol.md` exercises to `relaciones-causa-efecto`'s quiz

**Files:**
- Modify: `src/data/lessons/espanol.js` (append 6 question objects to `relaciones-causa-efecto`'s `quiz: [...]` array, which holds 9 questions after Task 2)

Selected from `espanol.md` exercises #35, #38, #39, #41, #44, #48.

- [ ] **Step 1: Append the 6 question objects**

```js
      {
        question: 'Lea el siguiente texto:\n«El oso panda está en peligro de extinción. Las razones de la reducción considerable de individuos de esta especie son la deforestación, que produce que estos animales pierdan su hábitat natural y su alimento principal, la caña de bambú; la caza ilegal, que disminuyó considerablemente, pero no del todo; y el calentamiento global, que genera cambios considerables en el clima y en su ambiente.»\nDe acuerdo con el texto anterior, una causa del peligro de extinción de los pandas es',
        options: ['La deforestación del hábitat del panda.', 'Los pandas son llevados a zoológicos por lo que no se reproducen.', 'La abundancia de bambú genera una sobrepoblación de pandas.', 'El exceso de cazadores legales reduce su población de forma indiscriminada.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«La anemia es la disminución de glóbulos rojos presentes en sangre. Esta afección se genera por diversos factores, como la falta de vitaminas, hierro o ácido fólico; una mala alimentación; el consumo de determinados analgésicos o medicamentos; la edad; patologías congénitas y enfermedades crónicas o autoinmunes.»\nDe acuerdo con el texto anterior, una causa de la anemia es:',
        options: ['Un exceso de vitaminas y ácido fólico.', 'Un incremento de los glóbulos rojos presentes en la sangre.', 'Una alimentación inadecuada que genera la falta de vitaminas.', 'El exceso de ejercicio físico intenso practicado diariamente.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Según una encuesta, la mayoría de la población utiliza la luz, el agua, la electricidad, el gas y el combustible cotidianamente, pero no siempre de una forma consciente. Muchas personas no saben cómo se debe usar la energía para no producir desperdicio. Además, desconocen las causas y las consecuencias de una crisis energética.»\nDe acuerdo con el texto anterior, una causa del desperdicio de energía es:',
        options: ['La falta de consciencia de los usuarios de los servicios públicos.', 'La educación que poseen las personas les permiten hacer un uso adecuado de los servicios públicos.', 'Las empresas públicas del Estado cobran precios excesivamente bajos por los servicios que ofrecen.', 'El uso excesivo de electrodomésticos modernos y eficientes.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El calentamiento global acelerado con graves consecuencias para el clima mundial está sucediendo como resultado del aumento en la emisión de gases de efecto invernadero por actividades humanas.»\nDe acuerdo con el texto anterior, una causa del calentamiento global es:',
        options: ['Los graves efectos que se generan en el clima mundial.', 'La gran cantidad de bosques que absorben el dióxido de carbono.', 'El incremento en la emisión de gases de efecto invernadero que generan los seres humanos.', 'La disminución de la capa de ozono debido a la radiación solar.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El examen de física será reprogramado para el viernes a las tres de la tarde, debido a que el profesor de la materia debió ser hospitalizado de emergencia, no consiguiendo un suplente a tiempo. Sin embargo, ya se encuentra fuera de peligro y en casa, por lo que el viernes se llevará a cabo la evaluación programada.»\nDe acuerdo con el texto anterior, un efecto generado por la hospitalización del profesor es:',
        options: ['El profesor deberá ser internado debido a una extraña enfermedad.', 'El examen de la materia que imparte el profesor deberá ser reprogramado.', 'El examen de física queda suspendido hasta nuevo aviso debido a la emergencia.', 'Los estudiantes recibirán automáticamente la nota máxima en el examen.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«La resistencia a la insulina es una afección metabólica, relacionada con la incapacidad del cuerpo a recibir la insulina que le permite procesar adecuadamente el nivel de glucosa ingresado en el organismo. Como consecuencia, el cuerpo sigue disparando insulina, por no recibir la información de que ha sido captada, haciendo que en el metabolismo haya una sobre carga de insulina y glucosa, la cual termina siendo almacenada en el cuerpo como grasa.»\nDe acuerdo con el texto anterior, un efecto de la resistencia a la insulina es:',
        options: ['Se incrementa la grasa debido al exceso de insulina y glucosa.', 'Las personas pueden procesar adecuadamente los niveles de glucosa.', 'El metabolismo de las personas percibe muy poca insulina por lo que disminuye la grasa.', 'El cuerpo deja de producir insulina por completo, causando diabetes tipo 1.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      }
```

Insert these 6 objects as the last elements of `relaciones-causa-efecto`'s `quiz` array.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add 6 causa-efecto quiz questions from espanol.md"
```

---

## Task 9: Convert and add 8 `espanol.md` exercises to `tema-e-ideologia-del-texto`'s quiz

**Files:**
- Modify: `src/data/lessons/espanol.js` (append 8 question objects to `tema-e-ideologia-del-texto`'s `quiz: [...]` array, which holds 8 questions after Task 2)

Selected from `espanol.md` exercises #51, #54, #56, #57 (tema) and #61, #63, #64, #85 (ideología/valores).

- [ ] **Step 1: Append the 8 question objects**

```js
      {
        question: 'Lea el siguiente fragmento del libro El Principito, de Antoine de Saint Exupery:\n«—Adiós —dijo el zorro—. He aquí mi secreto, que no puede ser más simple: sólo con el corazón se puede ver bien; lo esencial es invisible para los ojos.»\nEl tema principal del párrafo anterior corresponde a:',
        options: ['Lo importante de la vida no se puede ver a simple vista.', 'Todos tenemos secretos que guardar.', 'Los ojos nos sirven para ver.', 'El zorro enseña al principito a cazar gallinas.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente fragmento del libro Cocorí, de Joaquín Gutiérrez:\n«Los ojos de Cocorí quedaron prendados del mar inmenso que centelleaba asperjado de diamantes. Una lejana columna de humo delgado se elevaba en el horizonte. Tenía una vaga idea de los barcos. En las noches de luna había preguntado: —¿Cómo son los barcos?»\nEl tema principal del párrafo anterior corresponde a:',
        options: ['La inmensidad del mar.', 'El humo de los barcos de vapor.', 'El asombro ante algo que nunca se había visto.', 'El miedo de Cocorí a alejarse de su hogar.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente fragmento del libro Cocorí, de Joaquín Gutiérrez:\n«Esperando mucho rato, sin osar aventurarse en el terreno desolado donde no tendrían la escasa protección de los pocos árboles que los rodeaban. ¿Y si Talamanca enojaba? ¡Oh, mejor era no pensar siquiera en eso!»\nEl tema principal del párrafo anterior corresponde a:',
        options: ['Los deseos de aventura sin considerar las consecuencias.', 'El odio hacia los seres que son diferentes a nosotros.', 'El temor hacia un ser más grande y poderoso.', 'La valentía de enfrentar solos cualquier peligro.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente fragmento del libro Cocorí, de Joaquín Gutiérrez:\n«En el interior del Negrito se produjo una batalla. ¿Irse, quedarse? Si se iba, ¿quién podría resolverle su pregunta? Talamanca había sido la última esperanza. ¿Qué hacer, ¡ay! qué hacer? Se daba cuenta clara de que sus amigos estaban ansiosos de regresar a su pacífica vida de antes. No podía abusar de ellos.»\nEl tema principal del párrafo anterior corresponde a:',
        options: ['La felicidad obtenida al encontrar la respuesta a todas sus preguntas.', 'La incertidumbre de no saber que hacer ante sus necesidades y las de sus amigos.', 'El miedo hacia la gran serpiente Talamanca que amenazaba con devorar a sus amigos.', 'La alegría de regresar pronto a su vida pacífica de antes.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Obligada por la sed, una hormiga bajó a un manantial, y arrastrada por la corriente, estaba a punto de ahogarse. Viéndola en esta emergencia una paloma, desprendió de un árbol una ramita y la arrojó a la corriente, montó encima la hormiga salvándola. Mientras tanto un cazador de pájaros se adelantó con su arma preparada para cazar a la paloma. Le vio la hormiga y le picó en el talón, haciendo soltar al cazador su arma. Aprovechó el momento la paloma para alzar el vuelo.»\nTomado de: La paloma y la hormiga, Fábulas de Esopo.\nCon base en el texto anterior, ¿cuál valor se evidencia en el actuar de la paloma?',
        options: ['la justicia', 'el sacrificio', 'la solidaridad', 'la indiferencia'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Un leñador que a la orilla de un río cortaba leña, perdió su hacha. Sin saber qué hacer, se sentó llorando a la orilla. Compadecido Hermes de su tristeza, se arrojó al río y volvió con un hacha de oro, preguntando si era esa la que había perdido. Le contestó el leñador que no, y volvió Hermes a sumergirse, regresando con una de plata. El leñador otra vez dijo que no era suya, por lo que Hermes se sumergió de nuevo, volviendo con el hacha perdida. Entonces el hombre le dijo que sí era esa la de él. Hermes, seducido por su honradez, le dio las tres hachas.»\nTomado de: Hermes y el leñador, Fábulas de Esopo.\nSegún el texto anterior, ¿cuál es el principal valor evidenciado por el leñador?',
        options: ['La responsabilidad: evitó decisiones incorrectas.', 'La paciencia: esperó todo el tiempo necesario por la ayuda.', 'La honestidad: dijo la verdad y no se aprovechó de la situación.', 'La avaricia: quería quedarse con las tres hachas.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Encontró un labrador un águila presa en su cepo, y, seducido por su belleza, la soltó y le dio la libertad. El águila, que no fue ingrata con su bienhechor, viéndole sentado al pie de un muro que amenazaba derrumbarse, voló hasta él y le arrebató con sus garras la cinta con que se ceñía su cabeza. Se levantó el hombre para perseguirla. El águila dejó caer la cinta; la tomó el labriego, y al volver sobre sus pasos halló desplomado el muro en el lugar donde antes estaba sentado.»\nTomado de: El labrador y el águila, Fábulas de Esopo.\n¿Cuál valor se presenta en el texto anterior?',
        options: ['Responsabilidad: el águila busca los pasos del labrador para salvarlo.', 'Tolerancia: el labrador perdona al águila por arrebatarle la cinta.', 'Gratitud: el águila devuelve el favor al labrador.', 'Venganza: el labrador captura al águila para encerrarla.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Procuro comprar un coche de algún imbécil que ha utilizado tan mal la caja de cambios que las marchas están desgastadas y suena como una carraca. Lo consigo barato. Luego, todo lo que tengo que hacer es mezclar una buena cantidad de aserrín con el aceite de la caja de cambios y va tan suave como la seda. —¿Cuánto tarda en volver a empezar a rechinar? —preguntó Matilda. —Lo suficiente para que el comprador esté bastante lejos —dijo su padre sonriendo—. Unas cien millas. —Pero eso no es honrado, papá —dijo Matilda—. Eso es un engaño. —Nadie se hace rico siendo honrado —dijo el padre—. Los clientes están para que los engañen.»\nTomado de: Matilda.\nSegún el texto anterior, la posición ideológica del personaje Matilda expone las ________________ del papá.',
        options: ['mentiras', 'aventuras', 'enseñanzas', 'ganancias'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      }
```

Insert these 8 objects as the last elements of `tema-e-ideologia-del-texto`'s `quiz` array.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add 8 tema-e-ideologia quiz questions from espanol.md"
```

---

## Task 10: Convert and add all 6 `espanol.md` exercises to `informacion-implicita`'s quiz

**Files:**
- Modify: `src/data/lessons/espanol.js` (replace `informacion-implicita`'s `quiz: []` with 6 question objects — there is no existing-quiz pool for this lesson, per the spec's accepted shortfall)

All 6 of `espanol.md`'s Bloque 5 exercises (#66–71) are converted; none are skipped.

- [ ] **Step 1: Replace the empty quiz array with 6 question objects**

```js
    quiz: [
      {
        question: 'Lea el siguiente texto:\n«Un hombre se sentó en una banca del parque. Los transeúntes que recorrían con prisa la calzada, no se percataron de ello. Contaban con poco tiempo para detenerse a observar las palomas o los perros al lado de sus amos. Mucho menos iban a tenerlo para observar a este hombre, completamente solo en la inmensidad de la ciudad.»\nSegún el texto anterior, se deduce que las personas en la ciudad',
        options: ['necesitan espacios públicos para distraerse de sus obligaciones.', 'recorren largas distancias para llegar hasta sus lugares de trabajos.', 'viven tan ocupadas que no pueden detenerse a pensar en los demás.', 'prefieren la compañía de mascotas antes que la de otras personas.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Gritaba un día una rana desde su pantano a los demás animales: —¡Soy médico y conozco muy bien todos los remedios para todos los males! La oyó una zorra y le reclamó: —¿Cómo te atreves a anunciar ayudar a los demás, cuando tú misma cojeas y no te sabes curar?»\nTomado de: La rana que decía ser médico y la zorra, Fábulas de Esopo.\nDel texto anterior se concluye que',
        options: ['Los médicos saben cuidar a los pacientes.', 'El que se burla de los males ajenos en ellos perece.', 'No se debe presumir de aquello que no se puede demostrar.', 'Los animales del pantano desconfían de los médicos humanos.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Estos meses que me faltan para terminar el año, son mis últimos días como estudiante de secundaria; el año entrante seré universitario y ya tengo un nudo en el estómago cuando pienso en la universidad, porque todavía no sé cuál carrera elegir. Se me ocurrió anoche comentar en casa que me gustaría ser escritor y me dijeron que lo que buscaba era morirme de hambre. —Tenés que elegir una profesión importante, comentó papá.»\nTomado de: Pantalones largos.\nDel texto anterior se concluye que',
        options: ['la mejor profesión es ser escritor.', 'los hijos siempre deben obedecer a sus padres.', 'los padres a veces menosprecian las decisiones de sus hijos.', 'los jóvenes deben estudiar literatura para ser felices.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«A punto de acabar su vida, quiso un labrador dejar experimentados a sus hijos en la agricultura. Así, les llamó y les dijo: —Hijos míos: voy a dejar este mundo; buscad lo que he escondido en la viña, y lo hallaréis todo. Creyendo sus descendientes que había enterrado un tesoro, después de la muerte de su padre, con gran afán removieron profundamente el suelo de la viña. Meses después, cuando uno de los hermanos pasaba por allí, descubrió que todo su trabajo no había sido en balde, ya que la viña estaba llena de apetitosos frutos, con los que pudieron enriquecerse.»\nTomado de: El labrador y sus hijos, Fábulas de Esopo.\n¿Cuál es la enseñanza del texto anterior?',
        options: ['La avaricia puede promover conflictos.', 'El éxito se consigue con esfuerzo y trabajo.', 'Los padres siempre quieren heredar riquezas a sus hijos.', 'Es mejor no confiar en las palabras de los padres.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El tío Sapo, queriéndose burlar de tío Cangrejo, le dijo al pasar: —¿A dónde vas, ramazón? Esto lo decía porque tío Cangrejo semeja con sus muchas patas, largas y articuladas, un manojito de ramas secas. Pero comprendiendo al punto la ironía de tío Sapo, le replicó: —¡A la quebrada de Boca Ancha! Refiriéndose a la boca de tío Sapo que es muy hendida.»\nTomado de: Anécdota entre animales, Cuentos viejos.\n¿Cuál es la enseñanza del texto anterior?',
        options: ['La amistad sincera se debe cuidar.', 'Quien juzga se expone a que lo juzguen.', 'El que se burla de los demás pierde a sus amigos.', 'Los animales del campo nunca se hablan entre sí.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—Cuando estaba yo vivo y tenía un corazón de hombre —repitió la estatua—, no sabía lo que eran las lágrimas porque vivía en el Palacio de la Despreocupación, en el que no se permite la entrada al dolor. Durante el día jugaba con mis compañeros en el jardín y por la noche bailaba en el gran salón. Alrededor del jardín se alzaba una muralla altísima, pero nunca me preocupó lo que había detrás de ella, pues todo cuanto me rodeaba era hermosísimo. Mis cortesanos me llamaban el Príncipe Feliz y realmente, era yo feliz, si es que el placer es la felicidad. Así viví y así morí, y ahora que estoy muerto me han elevado tanto, que puedo ver todas las fealdades y todas las miserias de mi ciudad, y aunque mi corazón sea de plomo, no me queda más recurso que llorar.»\nTomado de: El Príncipe Feliz.\nSegún el texto anterior, se deduce que',
        options: ['los momentos difíciles revelan la cruel realidad.', 'las preocupaciones por otros ayudan a ser solidarios.', 'las riquezas y bienestar impiden ver las desdichas de los demás.', 'la felicidad verdadera solo se encuentra después de la muerte.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      }
    ]
```

Replace `informacion-implicita`'s existing `quiz: []` with the block above.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add 6 informacion-implicita quiz questions from espanol.md"
```

---

## Task 11: Convert and add 7 `espanol.md` exercises to `analisis-de-personajes`'s quiz

**Files:**
- Modify: `src/data/lessons/espanol.js` (append 7 question objects to `analisis-de-personajes`'s `quiz: [...]` array, which holds 8 questions after Task 2)

Selected from `espanol.md` exercises #73, #75, #77, #79 (conflictos) and #81, #82, #83 (comportamientos).

- [ ] **Step 1: Append the 7 question objects**

```js
      {
        question: 'Lea el siguiente texto:\n«Érase que se era un hombre cuyo corazón sonaba como un reloj. Su nombre era cálido como un pájaro, pero a todos se nos olvidó. Cuando se nos presentaba decía: —Medio Bigote para servir a usted, señor—. Y en realidad solo medio bigote tenía. Siempre estaba tan ocupado que solamente le daba tiempo de afeitarse la mitad de su cara.»\nTomado de: El relojero y la costurera, Queremos jugar.\nSegún el texto anterior, ¿cuál conflicto enfrenta Medio Bigote?',
        options: ['Utilizar un apodo que no le gustaba.', 'Dedicar más tiempo al trabajo que a sí mismo.', 'Conseguir dinero para comprar un reloj moderno.', 'Perder su trabajo por llegar tarde constantemente.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Las personas mayores me aconsejaron abandonar el dibujo de serpientes boas, ya fueran abiertas o cerradas, y poner más interés en la geografía, la historia, el cálculo y la gramática. De esta manera a la edad de seis años abandoné una magnífica carrera de pintor. Las personas mayores nunca pueden comprender algo por sí solas y es muy aburrido para los niños tener que darles una y otra vez explicaciones. Tuve, pues, que elegir otro oficio y aprendí a pilotear aviones.»\nTomado de: El principito.\nA la luz del texto anterior, ¿cuál es el conflicto planteado?',
        options: ['Vivir con personas adultas genera infelicidad.', 'Comunicar las ideas a las personas mayores es imposible.', 'Abandonar una actividad placentera para complacer a otros.', 'La dificultad para aprender a pilotar aviones correctamente.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—¡Oh, hermosa niña de cabellos azules: abre, por piedad! —gritaba Pinocho— ¡Ten compasión de un pobre niño perseguido por los ladrones! Pero no pudo terminar la palabra, porque sintió que le agarraban por el cuello, y oyó los mismos dos vozarrones, que decían con acento amenazador: —¡Esta vez no te escaparás!»\nTomado de: Las aventuras de Pinocho.\nSegún el texto anterior, ¿cuál es el conflicto que enfrenta Pinocho?',
        options: ['La persecución de perros que quieren atacarlo.', 'La imposibilidad de escapar de unos delincuentes.', 'La amenaza de muerte por parte de unos vagabundos.', 'El miedo a quedarse solo en el bosque sin compañía.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Y ahora, en vista de que te he dado mi carretilla, estoy seguro de que accederás a darme en cambio unas flores... Aquí tienes el cesto; procura llenarlo casi por completo. —¿Casi por completo?— dijo el pequeño Hans, bastante afligido, porque el cesto era de grandes dimensiones y comprendía que si lo llenaba no tendría ya flores para llevar al mercado y estaba deseando rescatar sus botones de plata.»\nTomado de: El amigo fiel, El Príncipe Feliz y otros cuentos.\nA partir del texto anterior, ¿cuál es el conflicto al que se enfrenta Hans?',
        options: ['Poner los intereses de los demás por encima de sus propias necesidades.', 'Tener pocas flores, por lo que no puede abastecer a todo el pueblo.', 'Abandonar la siembra de las flores por un mejor negocio.', 'La envidia hacia la carretilla nueva del molinero.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Se encontraba una higuera a la orilla de un camino, y una zorra vio junto a ella una serpiente dormida. Envidiando aquel cuerpo tan largo, y pensando en que podría igualarlo, se echó la zorra a tierra al lado de la serpiente e intentó estirarse cuanto pudo. Tanto esfuerzo hizo, hasta que, al fin, por vanidosa, se reventó.»\nTomado de: La zorra y la serpiente, Fábulas de Esopo.\nSegún el texto anterior, se deduce que la zorra se caracterizaba por ser',
        options: ['envidiosa', 'desconfiada', 'manipuladora', 'generosa'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Poco tardó Heidi en compadecer ante la abuela, y al ver los grandes libros llenos de bellas estampas, que la señora Sesemann le enseñó, sus ojos se animaron. De pronto dio un grito; luego, súbitamente, sus ojos se llenaron de lágrimas y prorrumpió en amargo llanto. La abuela miró la estampa. Representaba una hermosa pradera verde donde pacían toda clase de animales; en medio de ellos estaba el pastor, apoyado en un gran cayado. —Hija mía, vamos —le dijo afectuosamente—, no llores más. Esta estampa te ha recordado sin duda algo familiar.»\nTomado de: Heidi.\nSegún el texto anterior, Heidi sintió',
        options: ['angustia por no poder leer con la abuela.', 'rabia al no entender las estampas del libro.', 'tristeza al ver algo en el libro que le traía recuerdos.', 'alegría al descubrir un libro nuevo en la biblioteca.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Al día siguiente la Cucarachita puso al fuego una gran olla de arroz con leche, cogió dos tinajas que colocó una sobre la cabeza y otra en el cuadril, y se fue por agua. Antes de salir dijo a su marido: —Véame el fuego y cuidadito con golosear en esa olla de arroz con leche. Pero apenas hubo salido su esposa, el Ratón Pérez le pasó el picaporte a la puerta y se fue a curiosear en la olla. Pero como eran muchas las ganas de golosear, acercó un banco al fuego y se subió a él para mirar dentro de la olla.»\nTomado de: La Cucarachita Mandinga, Cuentos de mi Tía Panchita.\nSegún el texto anterior, el comportamiento del Ratón Pérez fue',
        options: ['desobediente: no hizo caso de lo dicho por su esposa.', 'egoísta: no compartió con nadie la olla de arroz con leche.', 'cuidadoso: estuvo pendiente del arroz que se cocinaba en la olla.', 'valiente: enfrentó a la bruja para proteger la comida.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      }
```

Insert these 7 objects as the last elements of `analisis-de-personajes`'s `quiz` array.

- [ ] **Step 2: Run the structural test**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/lessons/espanol.js
git commit -m "feat: add 7 analisis-de-personajes quiz questions from espanol.md"
```

---

## Task 12: Final verification

**Files:** none modified — verification only.

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: builds with no errors (catches JS syntax errors from accents/quotes/em-dashes in the new string literals).

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Full test suite**

Run: `npx vitest run`
Expected: all tests PASS, including `src/tests/lessonsData.test.js`.

- [ ] **Step 4: Verify final question counts per lesson**

Run:

```bash
node --input-type=module -e "
import { espanolLessons } from './src/data/lessons/espanol.js';
for (const l of espanolLessons) console.log(l.id, l.sections.length, 'sections,', l.quiz.length, 'quiz');
"
```

Expected output:
- `ideas-fundamentales-y-complementarias 4 sections, 18 quiz`
- `relaciones-causa-efecto 4 sections, 15 quiz`
- `tema-e-ideologia-del-texto 5 sections, 16 quiz`
- `informacion-implicita 4 sections, 6 quiz`
- `analisis-de-personajes 5 sections, 15 quiz`
- `repaso-espanol-primer-examen 5 sections, 139 quiz`

- [ ] **Step 5: Manually re-verify `correct` indices**

For each of the 37 newly-converted questions (Tasks 7–11), open `src/data/lessons/espanol.js` and re-read the `options` array against the `correct` index, confirming the indexed option is in fact the right answer per the source passage. This is the step most likely to catch a silent off-by-one bug, per the spec's risk table.

- [ ] **Step 6: Spot-check in the dev server**

Run: `npm run dev`, navigate to `/espanol/grade/6` (or the relevant grade route), open each of the 5 lessons touched, and:
- Confirm the new sections render without broken HTML (check for unescaped quotes/tags).
- Take one full quiz attempt per lesson, confirming sampled questions display correctly and the score matches expected correct/incorrect feedback.

- [ ] **Step 7: Final commit (if Step 5 found any index fixes)**

If Step 5 uncovered any wrong `correct` index, fix it in `src/data/lessons/espanol.js`, then:

```bash
git add src/data/lessons/espanol.js
git commit -m "fix: correct quiz answer index found during final verification"
```

If no fixes were needed, no commit is necessary — the work is already fully committed from Tasks 1–11.

