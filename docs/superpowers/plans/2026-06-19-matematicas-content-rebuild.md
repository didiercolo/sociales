# Matemáticas Content Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix theory gaps in 14 of 18 `matematicas.js` lessons, add 2 new sections (Temperatura, Sistema Monetario) to `medidas-longitud-masa-capacidad`, add a Media Aritmética section to `medidas-estadisticas`, and expand 8 empty/thin quizzes using `matematicas.md`'s exercise bank (hand-solved, since the source has no answer key).

**Architecture:** Each task edits one lesson object inside the `matematicasLessons` array in `src/data/lessons/matematicas.js` — either appending new strings to an existing section's `content[]` array, adding a new section object to `sections[]`, or appending new question objects to `quiz[]`. No new files, no schema changes. `src/tests/lessonsData.test.js` already validates structural invariants (id/title/mepBloque/sections present, mepBloque valid, ids unique) and is the regression check run after every task.

**Tech Stack:** Plain JS data file edits, Vitest for the existing structural test.

## Global Constraints

- Only content present in `documents/full-books/extracted/matematicas.md` is added as new theory. No invented facts, no invented worked examples.
- Exception: `cuerpos-solidos` section 3's "segmentos paralelos/perpendiculares" is a factual substitution for the source's "planos paralelos/perpendiculares" (edges vs. faces) — this gets corrected, not just supplemented.
- Pre-existing non-md-sourced content (e.g. `cuerpos-solidos`'s cube-volume formula, `simetria-y-plano-cartesiano`'s "Rotación"/"Escala") is left as-is — additive rule, not a mandate to strip.
- Quiz questions converted from the md's 3-option (A/B/C) EJERCICIOS bank get exactly one added 4th distractor — plausible but clearly wrong, grounded in a common student error for that problem type. `correct` is solved by hand (verified arithmetic in this plan, not guessed).
- Any EJERCICIOS item whose only specification is an unreproducible `[imagen: ...]` figure (a number line position, a sucesión's figures, a bar-chart reading) is skipped entirely — not redrawn or invented.
- No `mepBloque` retagging. No new lesson entries — the 2 missing topics (Temperatura, Sistema Monetario) become new sections in `medidas-longitud-masa-capacidad`, per the approved spec.
- After every task: run `npx vitest run src/tests/lessonsData.test.js` — must stay green (it validates `matematicasLessons` structure, not content correctness, but catches a malformed edit immediately).
- HTML tag vocabulary already used in this file: `<p>`, `<strong>`, `<ul><li>`, `<ol><li>`. Stay within it — don't introduce new tags.

---

### Task 1: `numeros-clasificacion` — add Fichas #1, #2

**Files:**
- Modify: `src/data/lessons/matematicas.js:17-30` (section 1's `content` array)

**Interfaces:**
- No new exports. This task only changes the `content` array of the first section (`title: '1. Notación Desarrollada'`) of the lesson with `id: 'numeros-clasificacion'`.

- [ ] **Step 1: Add the reading-numbers and comparison content**

In `src/data/lessons/matematicas.js`, find this exact block (lines 17-30):

```js
        title: '1. Notación Desarrollada',
        content: [
          '<p>La <strong>notación desarrollada</strong> es una manera de escribir un número al sumar el valor de sus dígitos. Se debe obtener el valor posicional de cada dígito y luego escribir la suma de esos valores.</p>',
          '<p><strong>Ejemplo:</strong> El número 58,3279 se puede escribir así:</p>',
          '<ul>' +
            '<li><strong>Notación fraccionaria:</strong> 50 + 8 + 3/10 + 2/100 + 7/1000 + 9/10000</li>' +
            '<li><strong>Notación decimal:</strong> 50 + 8 + 0,3 + 0,002 + 0,007 + 0,0009</li>' +
          '</ul>',
          '<p>Otro ejemplo — Número 42,731:</p>',
          '<ul>' +
            '<li>Notación fraccionaria: 40 + 2 + 7/10 + 3/100 + 1/1000</li>' +
            '<li>Notación decimal: 40 + 2 + 0,7 + 0,03 + 0,001</li>' +
          '</ul>'
        ]
      },
```

Replace it with (adds two new sections before it: reading naturals/decimals, and comparing decimals/fractions — renumber the existing section to "3."):

```js
        title: '1. Lectura de Números Naturales y Decimales',
        content: [
          '<p>Para <strong>leer un número natural</strong> se divide en grupos de tres cifras, siempre de izquierda a derecha.</p>',
          '<p><strong>Ejemplo:</strong> Lea el número 8 167 890 008 → <strong>ocho mil ciento sesenta y siete millones ochocientos noventa mil ocho</strong>.</p>',
          '<p>Para <strong>leer un número decimal</strong>, se lee primero la <strong>parte entera</strong> y después la <strong>parte decimal</strong> nombrando el lugar que ocupa la última cifra.</p>',
          '<p><strong>Ejemplo:</strong> ¿Cómo se lee el número 39,0062? Se lee <strong>treinta y nueve unidades con sesenta y dos diezmilésimas</strong>.</p>'
        ]
      },
      {
        title: '2. Comparación de Decimales y Fracciones',
        content: [
          '<p>Para <strong>comparar números decimales</strong> se deben comparar las partes enteras entre sí y luego las cifras decimales según su posición, comenzando por la de mayor valor (décimas), hasta que una sea menor o mayor que la otra.</p>',
          '<p><strong>Ejemplo:</strong> Compare 4,25 y 4,21 → 4,25 <strong>&gt;</strong> 4,21 (el 5 es mayor que el 1).</p>',
          '<p>Para <strong>comparar fracciones</strong>, se pueden multiplicar los numeradores y denominadores en forma de X (cruzado) y comparar los resultados.</p>',
          '<p><strong>Ejemplo:</strong> Compare 8/5 y 9/10 → 8 × 10 = 80 y 9 × 5 = 45. Como 80 &gt; 45, entonces 8/5 <strong>&gt;</strong> 9/10.</p>'
        ]
      },
      {
        title: '3. Notación Desarrollada',
        content: [
          '<p>La <strong>notación desarrollada</strong> es una manera de escribir un número al sumar el valor de sus dígitos. Se debe obtener el valor posicional de cada dígito y luego escribir la suma de esos valores.</p>',
          '<p><strong>Ejemplo:</strong> El número 58,3279 se puede escribir así:</p>',
          '<ul>' +
            '<li><strong>Notación fraccionaria:</strong> 50 + 8 + 3/10 + 2/100 + 7/1000 + 9/10000</li>' +
            '<li><strong>Notación decimal:</strong> 50 + 8 + 0,3 + 0,002 + 0,007 + 0,0009</li>' +
          '</ul>',
          '<p>Otro ejemplo — Número 42,731:</p>',
          '<ul>' +
            '<li>Notación fraccionaria: 40 + 2 + 7/10 + 3/100 + 1/1000</li>' +
            '<li>Notación decimal: 40 + 2 + 0,7 + 0,03 + 0,001</li>' +
          '</ul>'
        ]
      },
```

Note the remaining sections in this lesson (currently "2. Números Pares e Impares", "3. Múltiplos y Divisores", "4. Criterios de Divisibilidad y Números Primos") keep their own content unchanged, but their displayed numbers will now read 4, 5, 6 instead of 2, 3, 4 — update their `title` strings to match:

Find: `title: '2. Números Pares e Impares',` → Replace: `title: '4. Números Pares e Impares',`
Find: `title: '3. Múltiplos y Divisores',` → Replace: `title: '5. Múltiplos y Divisores',`
Find: `title: '4. Criterios de Divisibilidad y Números Primos',` → Replace: `title: '6. Criterios de Divisibilidad y Números Primos',`

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS (this test doesn't check section count or titles, only id/title/mepBloque/sections presence — it will pass as long as the file is valid JS with the required fields).

- [ ] **Step 3: Verify the file is valid JS (lint)**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add Fichas #1-2 content to numeros-clasificacion lesson"
```

---

### Task 2: `operaciones-con-decimales` — restore worked examples, add división abreviada, fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:104-159`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'operaciones-con-decimales'`.

- [ ] **Step 1: Restore the full long-multiplication example in section 1**

Find this exact block:

```js
        title: '1. Multiplicación de Números Decimales',
        content: [
          '<p>Pasos para multiplicar dos números decimales:</p>',
          '<ol>' +
            '<li>Ignora temporalmente las comas y multiplica los números como si fueran enteros.</li>' +
            '<li>Realiza la multiplicación normalmente.</li>' +
            '<li>Cuenta la cantidad total de cifras decimales de ambos factores.</li>' +
            '<li>Coloca la coma en el resultado contando desde la derecha hacia la izquierda tantas posiciones como cifras decimales haya.</li>' +
          '</ol>',
          '<p><strong>Ejemplos:</strong></p>',
          '<ul>' +
            '<li>4,2 × 1,5 → 42 × 15 = 630 → 2 decimales → resultado: <strong>6,30</strong></li>' +
            '<li>3,14 × 2 → 314 × 2 = 628 → 2 decimales → resultado: <strong>6,28</strong></li>' +
            '<li>0,6 × 0,4 → 6 × 4 = 24 → 2 decimales → resultado: <strong>0,24</strong></li>' +
          '</ul>'
        ]
      },
```

Replace it with (adds the dropped long-multiplication worked example):

```js
        title: '1. Multiplicación de Números Decimales',
        content: [
          '<p>Pasos para multiplicar dos números decimales:</p>',
          '<ol>' +
            '<li>Ignora temporalmente las comas y multiplica los números como si fueran enteros.</li>' +
            '<li>Realiza la multiplicación normalmente.</li>' +
            '<li>Cuenta la cantidad total de cifras decimales de ambos factores.</li>' +
            '<li>Coloca la coma en el resultado contando desde la derecha hacia la izquierda tantas posiciones como cifras decimales haya.</li>' +
          '</ol>',
          '<p><strong>Ejemplos:</strong></p>',
          '<ul>' +
            '<li>4,2 × 1,5 → 42 × 15 = 630 → 2 decimales → resultado: <strong>6,30</strong></li>' +
            '<li>3,14 × 2 → 314 × 2 = 628 → 2 decimales → resultado: <strong>6,28</strong></li>' +
            '<li>0,6 × 0,4 → 6 × 4 = 24 → 2 decimales → resultado: <strong>0,24</strong></li>' +
          '</ul>',
          '<p><strong>Ejemplo con números más grandes:</strong> Multiplique 641,85 × 5,1</p>',
          '<p>641,85 tiene 2 decimales; 5,1 tiene 1 decimal → el resultado debe tener 3 decimales.</p>',
          '<p>641,85 × 51 (ignorando comas) = 32 734 350 → colocando la coma 3 lugares desde la derecha → <strong>3 273,435</strong></p>'
        ]
      },
```

(Section 2, "División de Decimal entre Entero", is unchanged — its 77,7 ÷ 25 = 3,108 example already matches the source.)

- [ ] **Step 2: Add the second decimal÷decimal example and the RECUERDE callout to section 3**

Find this exact block:

```js
        title: '3. División de Decimal entre Decimal',
        content: [
          '<p>Para dividir un decimal entre otro decimal:</p>',
          '<ol>' +
            '<li><strong>Elimina la coma del divisor</strong> multiplicando ambos números (dividendo y divisor) por 10, 100 o 1000 según cuántos decimales tenga el divisor.</li>' +
            '<li>Realiza la división con los números enteros resultantes.</li>' +
            '<li>Coloca la coma en el resultado si es necesario.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> 4,8 ÷ 1,2 → multiplicar ambos por 10 → 48 ÷ 12 = <strong>4</strong></p>',
          '<p><strong>Otro ejemplo:</strong> 278 ÷ 3,6 → multiplicar ambos por 10 → 2780 ÷ 36 = <strong>77,2</strong></p>'
        ]
      },
```

Replace it with:

```js
        title: '3. División de Decimal entre Decimal',
        content: [
          '<p>Para dividir un decimal entre otro decimal:</p>',
          '<ol>' +
            '<li><strong>Elimina la coma del divisor</strong> multiplicando ambos números (dividendo y divisor) por 10, 100 o 1000 según cuántos decimales tenga el divisor.</li>' +
            '<li>Realiza la división con los números enteros resultantes.</li>' +
            '<li>Coloca la coma en el resultado si es necesario.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> 4,8 ÷ 1,2 → multiplicar ambos por 10 → 48 ÷ 12 = <strong>4</strong></p>',
          '<p><strong>Otro ejemplo (entero ÷ decimal):</strong> 278 ÷ 3,6 → multiplicar ambos por 10 → 2780 ÷ 36 = <strong>77,2</strong></p>',
          '<p><strong>Otro ejemplo (decimal ÷ decimal):</strong> 458,45 ÷ 2,1 → el divisor tiene 1 decimal, así que se multiplican ambos por 10 → 4584,5 ÷ 21 = <strong>218,3</strong></p>',
          '<p><strong>RECUERDE:</strong> en cualquier división, si al terminarla queda un residuo y se quiere llegar a que el resto sea cero, se escribe una coma en el cociente y se añade un cero en el dividendo. Si el residuo sigue sin ser cero, se siguen añadiendo ceros en el dividendo.</p>'
        ]
      },
```

- [ ] **Step 3: Add the missing "división abreviada" sub-topic to section 4**

Find this exact block:

```js
        title: '4. Multiplicación Abreviada',
        content: [
          '<p>La <strong>multiplicación abreviada</strong> es una forma más rápida de resolver multiplicaciones con ciertos patrones:</p>',
          '<ul>' +
            '<li><strong>Multiplicar por 10, 100, 1000:</strong> Solo se agregan ceros al final. Ejemplo: 25 × 10 = 250; 13 × 100 = 1300.</li>' +
            '<li><strong>Multiplicar números con ceros:</strong> Se multiplican los números sin ceros y luego se agregan los ceros al final. Ejemplo: 30 × 400 → 3 × 4 = 12 → agregar 3 ceros → <strong>12 000</strong>.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with (renames the section to cover both multiplication and division, adds the decimal×10/100/1000 case and the missing division-abbreviated case, and fills the quiz):

```js
        title: '4. Multiplicación y División Abreviada',
        content: [
          '<p>La <strong>multiplicación abreviada</strong> es una forma más rápida de resolver multiplicaciones con ciertos patrones:</p>',
          '<ul>' +
            '<li><strong>Multiplicar por 10, 100, 1000:</strong> Solo se agregan ceros al final. Ejemplo: 25 × 10 = 250; 13 × 100 = 1300.</li>' +
            '<li><strong>Multiplicar números con ceros:</strong> Se multiplican los números sin ceros y luego se agregan los ceros al final. Ejemplo: 30 × 400 → 3 × 4 = 12 → agregar 3 ceros → <strong>12 000</strong>.</li>' +
            '<li><strong>Multiplicar un decimal por 10, 100, 1000:</strong> Se mueve la coma hacia la derecha la cantidad de espacios igual a la cantidad de ceros del segundo factor. Si no quedan cifras decimales, se agregan ceros. Ejemplo: 4,7 × 10 = 47; 0,87 × 100 = 87; 1,2 × 1000 = 1200.</li>' +
          '</ul>',
          '<p>La <strong>división abreviada</strong> funciona de forma parecida, pero moviendo la coma hacia la <strong>izquierda</strong>:</p>',
          '<ul>' +
            '<li><strong>Dividir por 10, 100, 1000:</strong> Se mueve la coma hacia la izquierda la cantidad de espacios igual a la cantidad de ceros del divisor. Ejemplo: 47 ÷ 10 = 4,7; 87 ÷ 100 = 0,87; 1200 ÷ 1000 = 1,2.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Una empresa produce galletas. Si cada paquete se vende en ₡235 y se produjeron un total de 3765 paquetes de galletas. ¿Cuánto dinero esperan obtener por la venta?',
        options: ['₡466 900', '₡520 650', '₡884 775', '₡847 875'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'Un tanque rojo tiene capacidad de 300 litros; mientras que un tanque amarillo tiene 1,75 veces la capacidad del tanque rojo. ¿Cuál es la capacidad del tanque amarillo?',
        options: ['645 litros', '525 litros', '345,87 litros', '300 litros'],
        correct: 1,
        mepBloque: 'numeros'
      },
      {
        question: 'La Junta de Educación de una escuela compró 36 cajas de leche. Si el costo total fue de 24 170,5 colones. ¿Cuánto costó cada caja de leche?',
        options: ['₡254,43', '₡360,75', '₡671,40', '₡698,20'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'El papá de Ana se transporta en un vehículo de San José hasta San Ramón y tarda 1 hora en recorrer 60,21 km. Si la rapidez es la misma en todo el trayecto, ¿cuántos km recorrerá en 5,4 horas de viaje?',
        options: ['325,134 km', '89,563 km', '348,896 km', '301,05 km'],
        correct: 0,
        mepBloque: 'numeros'
      },
      {
        question: 'Si un paquete de café pesa 1045,65 gramos y se colocan 100 paquetes en una caja. ¿Cuánto pesará la caja en total?',
        options: ['10 456,5 g', '104 565 g', '1 045 650 g', '10 456 500 g'],
        correct: 1,
        mepBloque: 'numeros'
      }
    ]
  },
```

- [ ] **Step 4: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 5: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: restore worked examples, add división abreviada, fill quiz for operaciones-con-decimales"
```

---

### Task 3: `potencias-y-raices` — add exponent-0/1 rules, fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:163-202`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'potencias-y-raices'`.

- [ ] **Step 1: Add the exponent-0 and exponent-1 rules to section 1**

Find this exact block:

```js
        title: '1. Potenciación',
        content: [
          '<p>Una <strong>potencia</strong> es una forma abreviada de multiplicar un número por sí mismo varias veces.</p>',
          '<p>Ejemplo: 3⁴ = 3 × 3 × 3 × 3 = <strong>81</strong></p>',
          '<ul>' +
            '<li><strong>Base:</strong> El número que se multiplica (en el ejemplo: 3).</li>' +
            '<li><strong>Exponente:</strong> Indica cuántas veces se multiplica la base (en el ejemplo: 4).</li>' +
            '<li><strong>Potencia:</strong> El resultado de la operación (en el ejemplo: 81).</li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
        title: '1. Potenciación',
        content: [
          '<p>Una <strong>potencia</strong> es una forma abreviada de multiplicar un número por sí mismo varias veces.</p>',
          '<p>Ejemplo: 3⁴ = 3 × 3 × 3 × 3 = <strong>81</strong></p>',
          '<ul>' +
            '<li><strong>Base:</strong> El número que se multiplica (en el ejemplo: 3).</li>' +
            '<li><strong>Exponente:</strong> Indica cuántas veces se multiplica la base (en el ejemplo: 4).</li>' +
            '<li><strong>Potencia:</strong> El resultado de la operación (en el ejemplo: 81).</li>' +
          '</ul>',
          '<p><strong>Casos especiales:</strong></p>',
          '<ul>' +
            '<li>Todo número con <strong>exponente 0</strong> da como resultado <strong>1</strong>. Ejemplo: 8⁰ = <strong>1</strong>.</li>' +
            '<li>Todo número con <strong>exponente 1</strong> da como resultado el mismo número. Ejemplo: 7¹ = <strong>7</strong>.</li>' +
          '</ul>'
        ]
      },
```

- [ ] **Step 2: Fill the empty quiz**

Find this exact block (the end of the lesson):

```js
        title: '3. Descomposición en Potencias de Base 10',
        content: [
          '<p>Cualquier número puede expresarse como suma de potencias de base 10, usando los valores posicionales de cada dígito.</p>',
          '<p><strong>Ejemplo 1:</strong> 5 670 302</p>',
          '<p>= 5×10⁶ + 6×10⁵ + 7×10⁴ + 0×10³ + 3×10² + 0×10 + 2×1</p>',
          '<p><strong>Ejemplo 2:</strong> 4×10⁷ + 3×10⁵ + 5×10³ + 3×10 + 1×1 = <strong>40 305 031</strong></p>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with:

```js
        title: '3. Descomposición en Potencias de Base 10',
        content: [
          '<p>Cualquier número puede expresarse como suma de potencias de base 10, usando los valores posicionales de cada dígito.</p>',
          '<p><strong>Ejemplo 1:</strong> 5 670 302</p>',
          '<p>= 5×10⁶ + 6×10⁵ + 7×10⁴ + 0×10³ + 3×10² + 0×10 + 2×1</p>',
          '<p><strong>Ejemplo 2:</strong> 4×10⁷ + 3×10⁵ + 5×10³ + 3×10 + 1×1 = <strong>40 305 031</strong></p>'
        ]
      }
    ],
    quiz: [
      {
        question: '¿Cuál opción contiene la potencia 3⁵ expresada como multiplicación?',
        options: ['3 × 5', '5 × 5 × 5', '3 × 3 × 3 × 3 × 3', '3 × 3 × 3 × 3'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: '¿Cuál opción contiene el resultado de la potencia 5³?',
        options: ['15', '125', '343', '625'],
        correct: 1,
        mepBloque: 'numeros'
      },
      {
        question: 'Susana desea saber la edad de su maestra, así que le hizo la pregunta. La maestra le respondió que su edad es el resultado de elevar tres al cubo. ¿Cuántos años tiene la maestra de Susana?',
        options: ['27 años', '30 años', '36 años', '9 años'],
        correct: 0,
        mepBloque: 'numeros'
      },
      {
        question: '¿Cuál de las siguientes opciones corresponde a la potencia del número 1000?',
        options: ['10²', '10³', '10⁴', '10¹'],
        correct: 1,
        mepBloque: 'numeros'
      }
    ]
  },
```

- [ ] **Step 3: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 4: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add exponent-0/1 rules and fill quiz for potencias-y-raices"
```

---

### Task 4: `fracciones` — add Fichas #13, #14, #15 (tipos, número mixto, recta numérica)

**Files:**
- Modify: `src/data/lessons/matematicas.js:240-253`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'fracciones'`. No quiz change (already has 6 well-matched questions per the spec).

- [ ] **Step 1: Add 3 new sections after "Suma y Resta de Fracciones Heterogéneas"**

Find this exact block:

```js
      {
        title: '4. Suma y Resta de Fracciones Heterogéneas',
        content: [
          '<p>Las <strong>fracciones heterogéneas</strong> tienen diferente denominador. Pasos:</p>',
          '<ol>' +
            '<li>Multiplica el numerador de la primera fracción por el denominador de la segunda.</li>' +
            '<li>Multiplica el numerador de la segunda fracción por el denominador de la primera.</li>' +
            '<li>Multiplica ambos denominadores para obtener el nuevo denominador.</li>' +
            '<li>Realiza la operación entre los numeradores y conserva el denominador.</li>' +
            '<li>Simplifica el resultado si es posible.</li>' +
          '</ol>',
          '<p>Ejemplo: 5/4 + 2/6 = (5×6 + 2×4) / (4×6) = (30+8)/24 = 38/24 = <strong>19/12</strong></p>'
        ]
      }
    ],
    quiz: [
```

Replace it with:

```js
      {
        title: '4. Suma y Resta de Fracciones Heterogéneas',
        content: [
          '<p>Las <strong>fracciones heterogéneas</strong> tienen diferente denominador. Pasos:</p>',
          '<ol>' +
            '<li>Multiplica el numerador de la primera fracción por el denominador de la segunda.</li>' +
            '<li>Multiplica el numerador de la segunda fracción por el denominador de la primera.</li>' +
            '<li>Multiplica ambos denominadores para obtener el nuevo denominador.</li>' +
            '<li>Realiza la operación entre los numeradores y conserva el denominador.</li>' +
            '<li>Simplifica el resultado si es posible.</li>' +
          '</ol>',
          '<p>Ejemplo: 5/4 + 2/6 = (5×6 + 2×4) / (4×6) = (30+8)/24 = 38/24 = <strong>19/12</strong></p>'
        ]
      },
      {
        title: '5. Tipos de Fracciones',
        content: [
          '<p><strong>Fracciones propias:</strong> tienen el numerador menor que el denominador. Ejemplos: 3/7, 6/10, 13/25.</p>',
          '<p><strong>Fracciones impropias:</strong> tienen el numerador mayor que el denominador. Ejemplos: 11/8, 10/6, 20/6.</p>',
          '<p><strong>Fracciones homogéneas:</strong> poseen el mismo denominador. Ejemplos: 3/9, 8/9, 11/9, 15/9.</p>',
          '<p><strong>Fracciones heterogéneas:</strong> poseen distinto denominador. Ejemplos: 9/5, 1/2, 1/3, 2/7.</p>'
        ]
      },
      {
        title: '6. Fracciones Impropias y Números Mixtos',
        content: [
          '<p>Un <strong>número mixto</strong> es una forma de representar una fracción impropia; está compuesto por una parte entera y una parte fraccionaria. Ejemplo: 3 1/5.</p>',
          '<p><strong>De fracción impropia a número mixto:</strong> se divide el numerador entre el denominador. El cociente es el número entero, el residuo es el nuevo numerador y el divisor se mantiene como denominador.</p>',
          '<p>Ejemplo: 7/4 → 7 ÷ 4 = cociente 1, residuo 3 → <strong>1 3/4</strong></p>',
          '<p><strong>De número mixto a fracción impropia:</strong> se multiplica el número entero por el denominador y al resultado se le suma el numerador; el denominador se mantiene igual.</p>',
          '<p>Ejemplo: 3 1/5 = (3 × 5 + 1)/5 = <strong>16/5</strong></p>'
        ]
      },
      {
        title: '7. Fracciones entre Dos Números Consecutivos',
        content: [
          '<p><strong>Fracciones propias:</strong> todas se encuentran entre 0 y 1. Ejemplo: ¿entre cuáles números naturales está 1/2? Como 1 ÷ 2 = 0,5, la fracción 1/2 está entre <strong>0 y 1</strong>.</p>',
          '<p><strong>Fracciones impropias:</strong> se divide el numerador entre el denominador; la parte entera del resultado es uno de los números, y el sucesor de esa parte entera es el otro número.</p>',
          '<p>Ejemplo: ¿entre cuáles números naturales está 7/2? 7 ÷ 2 = 3,5 → parte entera 3, sucesor 4 → la fracción 7/2 está entre <strong>3 y 4</strong>.</p>'
        ]
      }
    ],
    quiz: [
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add tipos de fracciones, numero mixto, and recta numerica sections to fracciones"
```

---

### Task 5: `cuerpos-solidos` — correct "segmentos" → "planos" (Ficha #25), expand quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:468-519`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'cuerpos-solidos'`.

- [ ] **Step 1: Correct section 3 to teach planos, not segmentos**

The source (Ficha #25) explicitly teaches **planos** paralelos/perpendiculares (faces of the solid), not **segmentos** (edges) — these are different concepts, and the current lesson text teaches the wrong one. Find this exact block:

```js
      {
        title: '3. El Cilindro y Segmentos en Sólidos',
        content: [
          '<p>El <strong>cilindro</strong> está conformado por dos bases planas circulares y una superficie rectangular (lateral).</p>',
          '<ul>' +
            '<li><strong>Radio:</strong> Radio de la base circular.</li>' +
            '<li><strong>Altura:</strong> Distancia entre las dos bases.</li>' +
            '<li><strong>Diámetro:</strong> El doble del radio de la base.</li>' +
          '</ul>',
          '<p><strong>Segmentos paralelos:</strong> Líneas rectas que van en la misma dirección y nunca se cruzan. En un prisma rectangular, muchos bordes opuestos son paralelos entre sí.</p>',
          '<p><strong>Segmentos perpendiculares:</strong> Líneas rectas que se cruzan formando ángulos rectos. En un prisma rectangular, los bordes que se cruzan en las esquinas son perpendiculares.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Un prisma triangular representa una caja de plástico. ¿Cuántas caras de ese prisma corresponden a rectángulos?',
        options: ['3', '5', '7', '6'],
        correct: 0,
        mepBloque: 'geometria'
      }
    ]
  },
```

Replace it with:

```js
      {
        title: '3. El Cilindro y Planos en Sólidos',
        content: [
          '<p>El <strong>cilindro</strong> está conformado por dos bases planas circulares y una superficie rectangular (lateral).</p>',
          '<ul>' +
            '<li><strong>Radio:</strong> Radio de la base circular.</li>' +
            '<li><strong>Altura:</strong> Distancia entre las dos bases.</li>' +
            '<li><strong>Diámetro:</strong> El doble del radio de la base.</li>' +
          '</ul>',
          '<p><strong>Planos paralelos:</strong> Los cubos y los prismas están conformados por planos paralelos. Dos planos son paralelos cuando no poseen un punto en común y siempre se mantienen a una misma distancia.</p>',
          '<p><strong>Planos perpendiculares:</strong> Los cubos y los prismas están conformados por planos perpendiculares. Son aquellos que se intersecan entre sí y forman un ángulo de 90°.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Un prisma triangular representa una caja de plástico. ¿Cuántas caras de ese prisma corresponden a rectángulos?',
        options: ['3', '5', '7', '6'],
        correct: 0,
        mepBloque: 'geometria'
      },
      {
        question: 'En un prisma rectangular, la dimensión horizontal de la base (el lado más largo visto desde arriba) recibe el nombre de',
        options: ['altura', 'longitud', 'profundidad', 'ancho'],
        correct: 1,
        mepBloque: 'geometria'
      },
      {
        question: 'Una lata de gaseosa tiene forma de',
        options: ['cono', 'cubo', 'cilindro', 'esfera'],
        correct: 2,
        mepBloque: 'geometria'
      },
      {
        question: 'Lea las siguientes proposiciones:\n1. Los cubos y los prismas están conformados por planos paralelos y perpendiculares.\n2. Un cubo es un cuerpo sólido formado por ocho caras que son cuadradas.\n3. Los cilindros están conformados por dos bases planas circulares y una superficie rectangular.\n¿Cuáles de ellas son verdaderas?',
        options: ['1 y 2', '2 y 3', '1 y 3', 'Ninguna es verdadera'],
        correct: 2,
        mepBloque: 'geometria'
      }
    ]
  },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "fix: correct cuerpos-solidos to teach planos not segmentos, expand quiz"
```

---

### Task 6: `perimetro-y-area` — restore 4 dropped worked examples (Fichas #26, #27, #30, #32)

**Files:**
- Modify: `src/data/lessons/matematicas.js:527-570`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'perimetro-y-area'`. No quiz change (already has 3 well-matched questions).

- [ ] **Step 1: Add the alambre-de-púas perimeter example and the trapecio-pintura area example to section 1**

Find this exact block:

```js
      {
        title: '1. Perímetro de Triángulos y Cuadriláteros',
        content: [
          '<p>El <strong>perímetro</strong> es la suma de todos los lados de una figura.</p>',
          '<ul>' +
            '<li><strong>Triángulo:</strong> P = lado1 + lado2 + lado3. Ejemplo: 4+5+6 = 15 cm</li>' +
            '<li><strong>Cuadrado:</strong> P = 4 × lado. Ejemplo: 4 × 6 = 24 cm</li>' +
            '<li><strong>Rectángulo:</strong> P = 2×base + 2×altura. Ejemplo: 2×8 + 2×4 = 24 cm</li>' +
          '</ul>',
          '<p><strong>Área de figuras planas:</strong></p>',
          '<ul>' +
            '<li>Triángulo: A = (base × altura) ÷ 2</li>' +
            '<li>Cuadrado: A = lado × lado</li>' +
            '<li>Rectángulo: A = base × altura</li>' +
            '<li>Rombo: A = (diagonal mayor × diagonal menor) ÷ 2</li>' +
            '<li>Trapecio: A = (base mayor + base menor) × altura ÷ 2</li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
      {
        title: '1. Perímetro de Triángulos y Cuadriláteros',
        content: [
          '<p>El <strong>perímetro</strong> es la suma de todos los lados de una figura.</p>',
          '<ul>' +
            '<li><strong>Triángulo:</strong> P = lado1 + lado2 + lado3. Ejemplo: 4+5+6 = 15 cm</li>' +
            '<li><strong>Cuadrado:</strong> P = 4 × lado. Ejemplo: 4 × 6 = 24 cm</li>' +
            '<li><strong>Rectángulo:</strong> P = 2×base + 2×altura. Ejemplo: 2×8 + 2×4 = 24 cm</li>' +
          '</ul>',
          '<p><strong>Ejemplo de aplicación:</strong> Un finquero posee un terreno rectangular de 128 m de largo y 78 m de ancho, y desea cercarlo con alambre de púas dándole cinco vueltas completas. P = 128 + 78 + 128 + 78 = 412 m por vuelta; 412 × 5 = <strong>2060 m</strong> de alambre de púas.</p>',
          '<p><strong>Área de figuras planas:</strong></p>',
          '<ul>' +
            '<li>Triángulo: A = (base × altura) ÷ 2</li>' +
            '<li>Cuadrado: A = lado × lado</li>' +
            '<li>Rectángulo: A = base × altura</li>' +
            '<li>Rombo: A = (diagonal mayor × diagonal menor) ÷ 2</li>' +
            '<li>Trapecio: A = (base mayor + base menor) × altura ÷ 2</li>' +
          '</ul>',
          '<p><strong>Ejemplo de aplicación (trapecio):</strong> Una pared tiene forma de trapecio con 3 m de base mayor, 2 m de base menor y 2 m de altura. A = (3 + 2) × 2 ÷ 2 = <strong>5 m²</strong> se pueden pintar con la primera mano de pintura.</p>'
        ]
      },
```

- [ ] **Step 2: Add the pentágono-cercado example and the compound-area example to section 3**

Find this exact block:

```js
      {
        title: '3. Polígonos Regulares y Figuras Compuestas',
        content: [
          '<p><strong>Perímetro de polígonos regulares:</strong></p>',
          '<ul>' +
            '<li>Fórmula: P = n × l (donde n = número de lados, l = medida de cada lado)</li>' +
          '</ul>',
          '<p><strong>Perímetro de figuras compuestas:</strong> Se suman las medidas de todos los lados externos de la figura. Si falta alguna medida, se determina con los datos existentes.</p>',
          '<p><strong>Área de figuras compuestas:</strong> Se obtiene el área de cada figura geométrica que conforma el total y se suman. Recordar las fórmulas del círculo (A = πr²), triángulos y cuadriláteros.</p>'
        ]
      }
    ],
    quiz: [
```

Replace it with:

```js
      {
        title: '3. Polígonos Regulares y Figuras Compuestas',
        content: [
          '<p><strong>Perímetro de polígonos regulares:</strong></p>',
          '<ul>' +
            '<li>Fórmula: P = n × l (donde n = número de lados, l = medida de cada lado)</li>' +
          '</ul>',
          '<p><strong>Ejemplo de aplicación:</strong> Don Fernando posee un terreno pentagonal con lados de 12 m, y desea cercarlo con cinco líneas de alambre de púas a ₡1200 por metro. P = 5 × 12 = 60 m por línea; 60 × 5 = 300 m de alambre; 300 × 1200 = <strong>₡360 000</strong> debe invertir.</p>',
          '<p><strong>Perímetro de figuras compuestas:</strong> Se suman las medidas de todos los lados externos de la figura. Si falta alguna medida, se determina con los datos existentes.</p>',
          '<p><strong>Área de figuras compuestas:</strong> Se obtiene el área de cada figura geométrica que conforma el total y se suman. Recordar las fórmulas del círculo (A = πr²), triángulos y cuadriláteros.</p>',
          '<p><strong>Ejemplo de aplicación:</strong> Una figura está formada por un rectángulo de 12 cm × 8 cm con dos semicírculos de 4 cm de radio en los extremos (que juntos forman un círculo completo). Área del rectángulo = 12 × 8 = 96 cm². Área del círculo = 3,14 × 4 × 4 = 50,24 cm². Área total = 96 + 50,24 = <strong>146,24 cm²</strong>.</p>'
        ]
      }
    ],
    quiz: [
```

(The `quiz: [...]` array itself is unchanged — only the code immediately above it changed. Leave the 3 existing quiz questions as they are.)

- [ ] **Step 3: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 4: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: restore alambre, trapecio, pentagono and area compuesta worked examples to perimetro-y-area"
```

---

### Task 7: `simetria-y-plano-cartesiano` — restore traslación worked example (Ficha #35)

**Files:**
- Modify: `src/data/lessons/matematicas.js:608-618`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'simetria-y-plano-cartesiano'`. No quiz change (already has 2 well-matched questions).

- [ ] **Step 1: Expand the traslación sentence into a full worked example**

Find this exact block:

```js
      {
        title: '2. Transformaciones Geométricas',
        content: [
          '<p>Las principales transformaciones geométricas son:</p>',
          '<ul>' +
            '<li><strong>Simetría:</strong> Reflejo de una figura respecto a un eje, de modo que ambas partes son idénticas.</li>' +
            '<li><strong>Traslación:</strong> Desplazamiento de una figura de un lugar a otro sin rotarla ni reflejarla.</li>' +
            '<li><strong>Rotación:</strong> Giro de una figura alrededor de un punto fijo (centro de rotación).</li>' +
            '<li><strong>Escala:</strong> Cambio de tamaño manteniendo la forma (ampliación o reducción).</li>' +
          '</ul>'
        ]
      },
```

Replace it with (keeps the existing Rotación/Escala entries as pre-existing supplementary content, per the fidelity rule, and adds the dropped traslación method and worked example):

```js
      {
        title: '2. Transformaciones Geométricas',
        content: [
          '<p>Las principales transformaciones geométricas son:</p>',
          '<ul>' +
            '<li><strong>Simetría:</strong> Reflejo de una figura respecto a un eje, de modo que ambas partes son idénticas.</li>' +
            '<li><strong>Traslación:</strong> Desplazamiento de una figura de un lugar a otro sin rotarla ni reflejarla, a una distancia, dirección y sentido determinados.</li>' +
            '<li><strong>Rotación:</strong> Giro de una figura alrededor de un punto fijo (centro de rotación).</li>' +
            '<li><strong>Escala:</strong> Cambio de tamaño manteniendo la forma (ampliación o reducción).</li>' +
          '</ul>',
          '<p><strong>Ejemplo de traslación:</strong> Para trasladar el triángulo ABC cuatro unidades hacia la derecha y tres unidades hacia arriba, se ubica un punto fácil de visualizar (por ejemplo, el vértice B), se mueve cuatro lugares a la derecha (se pueden hacer "brinquitos" de un lugar a la vez) y luego tres lugares hacia arriba, marcando el nuevo punto B\'. Se repite el mismo proceso con los demás vértices (A\' y C\') y, al final, se unen los puntos trasladados con líneas para formar la figura imagen A\'B\'C\'.</p>'
        ]
      },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: restore full traslacion worked example to simetria-y-plano-cartesiano"
```

---

### Task 8: `medidas-longitud-masa-capacidad` — add conversion example (Ficha #40), add Temperatura and Sistema Monetario sections (Fichas #37, #41)

**Files:**
- Modify: `src/data/lessons/matematicas.js:695-734`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'medidas-longitud-masa-capacidad'`. No quiz change (already has 3 well-matched questions).

- [ ] **Step 1: Add the conversion-method worked examples to section 3, and append the 2 new sections**

Find this exact block:

```js
      {
        title: '3. Medidas de Capacidad y Conversiones',
        content: [
          '<p>La <strong>capacidad</strong> es la cantidad de líquido que puede contener un recipiente. La unidad principal es el <strong>litro (L)</strong>.</p>',
          '<p><strong>Múltiplos del litro</strong>:</p>',
          '<ul>' +
            '<li>Decalitro (dal): 1 dal = 10 L</li>' +
            '<li>Hectolitro (hl): 1 hl = 100 L</li>' +
            '<li>Kilolitro (kl): 1 kl = 1000 L</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del litro</strong>:</p>',
          '<ul>' +
            '<li>Decilitro (dl): 1 L = 10 dl</li>' +
            '<li>Centilitro (cl): 1 L = 100 cl</li>' +
            '<li>Mililitro (ml): 1 L = 1000 ml</li>' +
          '</ul>',
          '<p><strong>¿Cómo hacer conversiones?</strong> Para convertir entre unidades del sistema métrico se usa la escala decimal: solo tienes que multiplicar o dividir por 10, 100 o 1000 según el caso.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Cada saco de arroz que hay en un almacén pesa 49,75 kg. ¿Cuál es el peso total, en decagramos, de cinco de esos sacos?',
        options: ['24 875', '2487,5', '2,4875', '248 750'],
        correct: 0,
        mepBloque: 'medidas'
      },
      {
        question: 'Cuatro personas realizaron juntas una caminata y bebieron agua cada 24 minutos. La caminata duró 130 minutos en total. Cada persona bebió 100 mL de agua cada vez. De acuerdo con la información anterior, ¿cuál fue la cantidad total de agua que bebieron las cuatro personas al finalizar la caminata?',
        options: ['1,2 L', '2,0 L', '2,5 L', '3,0 L'],
        correct: 1,
        mepBloque: 'medidas'
      },
      {
        question: 'Javier compró un tanque para almacenar agua, cuya capacidad máxima es 2570 dL. ¿Cuál es la capacidad máxima, en litros, de ese tanque?',
        options: ['257', '2570', '25 700', '25,7'],
        correct: 0,
        mepBloque: 'medidas'
      }
    ]
  },
```

Replace it with:

```js
      {
        title: '3. Medidas de Capacidad y Conversiones',
        content: [
          '<p>La <strong>capacidad</strong> es la cantidad de líquido que puede contener un recipiente. La unidad principal es el <strong>litro (L)</strong>.</p>',
          '<p><strong>Múltiplos del litro</strong>:</p>',
          '<ul>' +
            '<li>Decalitro (dal): 1 dal = 10 L</li>' +
            '<li>Hectolitro (hl): 1 hl = 100 L</li>' +
            '<li>Kilolitro (kl): 1 kl = 1000 L</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del litro</strong>:</p>',
          '<ul>' +
            '<li>Decilitro (dl): 1 L = 10 dl</li>' +
            '<li>Centilitro (cl): 1 L = 100 cl</li>' +
            '<li>Mililitro (ml): 1 L = 1000 ml</li>' +
          '</ul>',
          '<p><strong>¿Cómo hacer conversiones?</strong> Para convertir entre unidades del sistema métrico se usa la escala decimal: solo tienes que multiplicar o dividir por 10, 100 o 1000 según el caso.</p>',
          '<p><strong>Ejemplo (masa):</strong> Una caja de cartón soporta un peso máximo de 36 kg. ¿Cuántos objetos de 3000 g se pueden guardar sin que se rompa? 36 kg = 36 × 1000 = 36 000 g; 36 000 g ÷ 3000 g = <strong>12 objetos</strong>.</p>',
          '<p><strong>Ejemplo (longitud):</strong> Convierta 40 000 dm a hm. De dm a hm hay tres espacios hacia la izquierda en la tabla de múltiplos/submúltiplos: 40 000 ÷ 1000 = <strong>40 hm</strong>.</p>'
        ]
      },
      {
        title: '4. Temperatura: Celsius y Fahrenheit',
        content: [
          '<p>Para convertir de <strong>Celsius a Fahrenheit</strong> se usa la fórmula: <strong>°F = 9/5 × °C + 32</strong>.</p>',
          '<p><strong>Ejemplo:</strong> Exprese 35°C en °F. °F = 9/5 × 35 + 32 = 63 + 32 = <strong>95°F</strong>.</p>',
          '<p>Para convertir de <strong>Fahrenheit a Celsius</strong> se usa la fórmula: <strong>°C = 5/9 × (°F − 32)</strong>.</p>',
          '<p><strong>Ejemplo:</strong> Exprese 41°F en °C. °C = 5/9 × (41 − 32) = 5/9 × 9 = <strong>5°C</strong>.</p>'
        ]
      },
      {
        title: '5. Sistema Monetario Nacional',
        content: [
          '<p>En Costa Rica existen diferentes denominaciones de <strong>billetes</strong> (desde ₡1000 hasta ₡20 000) y de <strong>monedas</strong> (entre ₡5 y ₡500).</p>',
          '<p><strong>Ejemplo:</strong> Un cajero recibe 400 billetes de ₡1000, 100 billetes de ₡2000 y 40 billetes de ₡5000, y debe cambiarlos por billetes de ₡20 000. Total recibido: (400 × 1000) + (100 × 2000) + (40 × 5000) = 400 000 + 200 000 + 200 000 = ₡800 000. Cantidad de billetes de ₡20 000: 800 000 ÷ 20 000 = <strong>40 billetes</strong>.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Cada saco de arroz que hay en un almacén pesa 49,75 kg. ¿Cuál es el peso total, en decagramos, de cinco de esos sacos?',
        options: ['24 875', '2487,5', '2,4875', '248 750'],
        correct: 0,
        mepBloque: 'medidas'
      },
      {
        question: 'Cuatro personas realizaron juntas una caminata y bebieron agua cada 24 minutos. La caminata duró 130 minutos en total. Cada persona bebió 100 mL de agua cada vez. De acuerdo con la información anterior, ¿cuál fue la cantidad total de agua que bebieron las cuatro personas al finalizar la caminata?',
        options: ['1,2 L', '2,0 L', '2,5 L', '3,0 L'],
        correct: 1,
        mepBloque: 'medidas'
      },
      {
        question: 'Javier compró un tanque para almacenar agua, cuya capacidad máxima es 2570 dL. ¿Cuál es la capacidad máxima, en litros, de ese tanque?',
        options: ['257', '2570', '25 700', '25,7'],
        correct: 0,
        mepBloque: 'medidas'
      }
    ]
  },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add conversion examples, temperatura and sistema monetario sections to medidas-longitud-masa-capacidad"
```

---

### Task 9: `medidas-area-y-volumen` — add 4 conversion examples (Fichas #36, #39), fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:743-791`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'medidas-area-y-volumen'`.

- [ ] **Step 1: Add the 2 área conversion examples to section 1**

Find this exact block:

```js
      {
        title: '1. Medidas de Área',
        content: [
          '<p>El <strong>área</strong> es el espacio que ocupa una superficie plana. Se mide en unidades cuadradas. La unidad principal es el <strong>metro cuadrado (m²)</strong>.</p>',
          '<p><strong>Múltiplos del metro cuadrado</strong>:</p>',
          '<ul>' +
            '<li>Decámetro cuadrado (dam²): 1 dam² = 100 m²</li>' +
            '<li>Hectómetro cuadrado (hm²): 1 hm² = 10 000 m²</li>' +
            '<li>Kilómetro cuadrado (km²): 1 km² = 1 000 000 m²</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del metro cuadrado</strong>:</p>',
          '<ul>' +
            '<li>Decímetro cuadrado (dm²): 1 m² = 100 dm²</li>' +
            '<li>Centímetro cuadrado (cm²): 1 m² = 10 000 cm²</li>' +
            '<li>Milímetro cuadrado (mm²): 1 m² = 1 000 000 mm²</li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
      {
        title: '1. Medidas de Área',
        content: [
          '<p>El <strong>área</strong> es el espacio que ocupa una superficie plana. Se mide en unidades cuadradas. La unidad principal es el <strong>metro cuadrado (m²)</strong>.</p>',
          '<p><strong>Múltiplos del metro cuadrado</strong>:</p>',
          '<ul>' +
            '<li>Decámetro cuadrado (dam²): 1 dam² = 100 m²</li>' +
            '<li>Hectómetro cuadrado (hm²): 1 hm² = 10 000 m²</li>' +
            '<li>Kilómetro cuadrado (km²): 1 km² = 1 000 000 m²</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del metro cuadrado</strong>:</p>',
          '<ul>' +
            '<li>Decímetro cuadrado (dm²): 1 m² = 100 dm²</li>' +
            '<li>Centímetro cuadrado (cm²): 1 m² = 10 000 cm²</li>' +
            '<li>Milímetro cuadrado (mm²): 1 m² = 1 000 000 mm²</li>' +
          '</ul>',
          '<p>Para convertir, cada paso entre unidades equivale a multiplicar o dividir por 100 (no por 10 como en longitud).</p>',
          '<p><strong>Ejemplo 1:</strong> Convierta 12,4 m² a cm². 12,4 × 10 000 = <strong>124 000 cm²</strong> (la coma se corre 4 lugares a la derecha).</p>',
          '<p><strong>Ejemplo 2:</strong> Convierta 78 000 m² a hm². 78 000 ÷ 10 000 = <strong>7,8 hm²</strong> (la coma se corre 4 lugares a la izquierda).</p>'
        ]
      },
```

- [ ] **Step 2: Add the 2 volumen conversion examples to section 2, and the bidón/capacidad example plus quiz fill after section 3**

Find this exact block:

```js
      {
        title: '2. Medidas de Volumen',
        content: [
          '<p>El <strong>volumen</strong> es la cantidad de espacio que ocupa un cuerpo o un objeto tridimensional (con largo, ancho y alto). La unidad principal es el <strong>metro cúbico (m³)</strong>.</p>',
          '<p><strong>Múltiplos del metro cúbico</strong>:</p>',
          '<ul>' +
            '<li>Decámetro cúbico (dam³): 1 dam³ = 1 000 m³</li>' +
            '<li>Hectómetro cúbico (hm³): 1 hm³ = 1 000 000 m³</li>' +
            '<li>Kilómetro cúbico (km³): 1 km³ = 1 000 000 000 m³</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del metro cúbico</strong>:</p>',
          '<ul>' +
            '<li>Decímetro cúbico (dm³): 1 m³ = 1 000 dm³</li>' +
            '<li>Centímetro cúbico (cm³): 1 m³ = 1 000 000 cm³</li>' +
            '<li>Milímetro cúbico (mm³): 1 m³ = 1 000 000 000 mm³</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Relación entre Volumen y Capacidad',
        content: [
          '<p>Existe una relación directa entre las unidades de volumen y las de capacidad:</p>',
          '<ul>' +
            '<li><strong>1 dm³ = 1 litro (L)</strong> — Esta equivalencia conecta el volumen con las medidas de capacidad.</li>' +
            '<li><strong>1 cm³ = 1 mililitro (mL)</strong></li>' +
            '<li><strong>1 m³ = 1 000 L</strong></li>' +
          '</ul>',
          '<p>Esta relación es muy útil para resolver problemas que mezclan medidas de volumen y capacidad, como calcular cuántos litros caben en un tanque de determinadas dimensiones.</p>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with:

```js
      {
        title: '2. Medidas de Volumen',
        content: [
          '<p>El <strong>volumen</strong> es la cantidad de espacio que ocupa un cuerpo o un objeto tridimensional (con largo, ancho y alto). La unidad principal es el <strong>metro cúbico (m³)</strong>.</p>',
          '<p><strong>Múltiplos del metro cúbico</strong>:</p>',
          '<ul>' +
            '<li>Decámetro cúbico (dam³): 1 dam³ = 1 000 m³</li>' +
            '<li>Hectómetro cúbico (hm³): 1 hm³ = 1 000 000 m³</li>' +
            '<li>Kilómetro cúbico (km³): 1 km³ = 1 000 000 000 m³</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del metro cúbico</strong>:</p>',
          '<ul>' +
            '<li>Decímetro cúbico (dm³): 1 m³ = 1 000 dm³</li>' +
            '<li>Centímetro cúbico (cm³): 1 m³ = 1 000 000 cm³</li>' +
            '<li>Milímetro cúbico (mm³): 1 m³ = 1 000 000 000 mm³</li>' +
          '</ul>',
          '<p>Para convertir, cada paso entre unidades equivale a multiplicar o dividir por 1000 (no por 10 como en longitud).</p>',
          '<p><strong>Ejemplo 1:</strong> Convierta 9678 cm³ a dam³. 9678 ÷ 1 000 000 000 = <strong>0,000009678 dam³</strong> (la coma se corre 9 lugares a la izquierda).</p>',
          '<p><strong>Ejemplo 2:</strong> Convierta 79,2 km³ a hm³. 79,2 × 1000 = <strong>79 200 hm³</strong> (la coma se corre 3 lugares a la derecha).</p>'
        ]
      },
      {
        title: '3. Relación entre Volumen y Capacidad',
        content: [
          '<p>Existe una relación directa entre las unidades de volumen y las de capacidad:</p>',
          '<ul>' +
            '<li><strong>1 dm³ = 1 litro (L)</strong> — Esta equivalencia conecta el volumen con las medidas de capacidad.</li>' +
            '<li><strong>1 cm³ = 1 mililitro (mL)</strong></li>' +
            '<li><strong>1 m³ = 1 000 L</strong></li>' +
          '</ul>',
          '<p>Esta relación es muy útil para resolver problemas que mezclan medidas de volumen y capacidad, como calcular cuántos litros caben en un tanque de determinadas dimensiones.</p>',
          '<p><strong>Ejemplo:</strong> Un bidón tiene capacidad para 7,5 dm³. ¿Cuántos centilitros se necesitan para llenarlo? Como 1 dm³ = 1 L, entonces 7,5 dm³ = 7,5 L. Convirtiendo a centilitros: 7,5 × 100 = <strong>750 cl</strong>.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Para hacer un mantel con forma cuadrada una costurera necesita 64 400 centímetros cuadrados de tela. ¿Cuántos metros cuadrados de tela se necesitan?',
        options: ['644 m²', '64,4 m²', '6,44 m²', '0,644 m²'],
        correct: 2,
        mepBloque: 'medidas'
      },
      {
        question: 'Una propiedad tiene un área de 3400 m². ¿Cuántos decámetros cuadrados mide la propiedad?',
        options: ['340 dam²', '34 dam²', '3,4 dam²', '3400 dam²'],
        correct: 1,
        mepBloque: 'medidas'
      },
      {
        question: '¿A cuántos m² equivalen 4,9 hm²?',
        options: ['490 m²', '4900 m²', '49 000 m²', '490 000 m²'],
        correct: 2,
        mepBloque: 'medidas'
      },
      {
        question: 'Una piscina tiene una capacidad de 48 metros cúbicos. ¿Cuántos litros de agua le caben a la piscina?',
        options: ['48 litros', '4800 litros', '48 000 litros', '480 000 litros'],
        correct: 2,
        mepBloque: 'medidas'
      }
    ]
  },
```

- [ ] **Step 3: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 4: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add conversion examples and fill quiz for medidas-area-y-volumen"
```

---

### Task 10: `patrones-y-sucesiones` — add point-figure and numeric sucesión examples (Fichas #42, #43)

**Files:**
- Modify: `src/data/lessons/matematicas.js:803-834`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'patrones-y-sucesiones'`. No quiz change (already has 4 well-matched questions).

- [ ] **Step 1: Add the point-figure worked example to section 1**

Find this exact block:

```js
      {
        title: '1. Patrones en Figuras',
        content: [
          '<p>Un <strong>patrón</strong> es una serie de imágenes o figuras que siguen un orden o regla. Cada figura en la secuencia cambia de forma, color, tamaño o posición siguiendo una regla.</p>',
          '<p>Tipos de cambio en patrones de figuras:</p>',
          '<ul>' +
            '<li>Cambio de forma</li>' +
            '<li>Cambio de color</li>' +
            '<li>Aumento de cantidad</li>' +
            '<li>Combinación de varios cambios</li>' +
          '</ul>',
          '<p>Pasos para identificar el patrón:</p>',
          '<ol>' +
            '<li>Observa las primeras figuras.</li>' +
            '<li>Detecta qué cambia (forma, color, número, tamaño...).</li>' +
            '<li>Sigue la misma regla para predecir las siguientes figuras.</li>' +
          '</ol>'
        ]
      },
```

Replace it with:

```js
      {
        title: '1. Patrones en Figuras',
        content: [
          '<p>Un <strong>patrón</strong> es una serie de imágenes o figuras que siguen un orden o regla. Cada figura en la secuencia cambia de forma, color, tamaño o posición siguiendo una regla.</p>',
          '<p>Tipos de cambio en patrones de figuras:</p>',
          '<ul>' +
            '<li>Cambio de forma</li>' +
            '<li>Cambio de color</li>' +
            '<li>Aumento de cantidad</li>' +
            '<li>Combinación de varios cambios</li>' +
          '</ul>',
          '<p>Pasos para identificar el patrón:</p>',
          '<ol>' +
            '<li>Observa las primeras figuras.</li>' +
            '<li>Detecta qué cambia (forma, color, número, tamaño...).</li>' +
            '<li>Sigue la misma regla para predecir las siguientes figuras.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> Una sucesión de figuras formadas por puntos tiene: Figura 1 = 3 puntos, Figura 2 = 5 puntos, Figura 3 = 7 puntos, Figura 4 = 9 puntos, Figura 5 = 11 puntos. El patrón de formación es <strong>sumar dos puntos en cada nueva figura</strong>. Siguiendo la regla, la Figura 6 tendría <strong>13 puntos</strong>.</p>'
        ]
      },
```

- [ ] **Step 2: Add the numeric sucesión worked example to section 2**

Find this exact block:

```js
      {
        title: '2. Sucesiones Numéricas',
        content: [
          '<p>Una <strong>sucesión numérica</strong> es una serie de números ordenados que siguen una regla o patrón. Cada número se llama <strong>término</strong> y se obtiene aplicando una regla al anterior.</p>',
          '<p>Tipos de sucesiones:</p>',
          '<ul>' +
            '<li><strong>Aditiva (suma fija):</strong> 2, 4, 6, 8, 10... (suma 2 cada vez)</li>' +
            '<li><strong>Sustractiva (resta fija):</strong> 10, 8, 6, 4, 2... (resta 2 cada vez)</li>' +
            '<li><strong>Multiplicativa:</strong> 1, 2, 4, 8, 16... (multiplica por 2)</li>' +
            '<li><strong>Divisiva:</strong> 100, 50, 25, 12,5... (divide entre 2)</li>' +
            '<li><strong>Alternante (cíclica):</strong> 3, 6, 3, 6... (se repite el patrón)</li>' +
            '<li><strong>Con números cuadrados:</strong> 1, 4, 9, 16, 25... (1², 2², 3²...)</li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
      {
        title: '2. Sucesiones Numéricas',
        content: [
          '<p>Una <strong>sucesión numérica</strong> es una serie de números ordenados que siguen una regla o patrón. Cada número se llama <strong>término</strong> y se obtiene aplicando una regla al anterior.</p>',
          '<p>Tipos de sucesiones:</p>',
          '<ul>' +
            '<li><strong>Aditiva (suma fija):</strong> 2, 4, 6, 8, 10... (suma 2 cada vez)</li>' +
            '<li><strong>Sustractiva (resta fija):</strong> 10, 8, 6, 4, 2... (resta 2 cada vez)</li>' +
            '<li><strong>Multiplicativa:</strong> 1, 2, 4, 8, 16... (multiplica por 2)</li>' +
            '<li><strong>Divisiva:</strong> 100, 50, 25, 12,5... (divide entre 2)</li>' +
            '<li><strong>Alternante (cíclica):</strong> 3, 6, 3, 6... (se repite el patrón)</li>' +
            '<li><strong>Con números cuadrados:</strong> 1, 4, 9, 16, 25... (1², 2², 3²...)</li>' +
          '</ul>',
          '<p><strong>Ejemplo:</strong> 12 − 24 − 36 − 48 − 60 − 72 − 84 (el patrón de formación es <strong>sumar 12 en cada término</strong>).</p>'
        ]
      },
```

- [ ] **Step 3: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 4: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add point-figure and numeric sucesion worked examples to patrones-y-sucesiones"
```

---

### Task 11: `proporcionalidad-y-regla-de-tres` — swap example for md's aguacate example, fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:896-925`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'proporcionalidad-y-regla-de-tres'`.

- [ ] **Step 1: Replace the invented lápices example with the md's aguacate example**

The md's Ficha #48 example (an agricultor selling aguacates) is reused verbatim in EJERCICIOS #170 — using the same example in the lesson reinforces quiz/lesson alignment. Find this exact block:

```js
      {
        title: '2. Regla de Tres Simple',
        content: [
          '<p>La <strong>regla de tres</strong> se usa para calcular un término faltante en una proporción. Requiere:</p>',
          '<ul>' +
            '<li>Tres datos conocidos relacionados con la situación.</li>' +
            '<li>Colocar correctamente los datos en la proporción.</li>' +
          '</ul>',
          '<p><strong>Ejemplo:</strong></p>',
          '<p>Si 4 lápices cuestan ₡800, ¿cuánto costarán 6 lápices?</p>',
          '<ul>' +
            '<li>Cantidad: 4 → Precio: 800</li>' +
            '<li>Cantidad: 6 → Precio: x</li>' +
            '<li>x = 800 × 6 ÷ 4 = <strong>₡1 200</strong></li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
      {
        title: '2. Regla de Tres Simple',
        content: [
          '<p>La <strong>regla de tres</strong> se usa para calcular un término faltante en una proporción. Requiere:</p>',
          '<ul>' +
            '<li>Tres datos conocidos relacionados con la situación.</li>' +
            '<li>Colocar correctamente los datos en la proporción.</li>' +
          '</ul>',
          '<p><strong>Ejemplo:</strong></p>',
          '<p>Un agricultor vende aguacates en la feria de los sábados. Si por la venta de 2 aguacates recibe ₡900, ¿cuánto dinero obtendrá si logra vender 15 aguacates?</p>',
          '<ul>' +
            '<li>Cantidad: 2 → Precio: 900</li>' +
            '<li>Cantidad: 15 → Precio: d</li>' +
            '<li>2/900 = 15/d → 900 × 15 = 2 × d → d = 13 500 ÷ 2 = <strong>₡6 750</strong></li>' +
          '</ul>'
        ]
      },
```

- [ ] **Step 2: Fill the empty quiz**

Find this exact block (the end of the lesson):

```js
      {
        title: '3. Porcentajes como Proporcionalidad',
        content: [
          '<p>Los porcentajes también son un caso de proporcionalidad. Para calcular el porcentaje de una cantidad:</p>',
          '<ol>' +
            '<li>Convierte el porcentaje a forma decimal (divide entre 100).</li>' +
            '<li>Multiplica ese decimal por la cantidad.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> El 30% de 900 = 0,30 × 900 = <strong>270</strong></p>',
          '<p>También se puede usar la regla de tres: si 100% equivale a 900, entonces 30% equivale a x. x = 900 × 30 ÷ 100 = 270.</p>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with:

```js
      {
        title: '3. Porcentajes como Proporcionalidad',
        content: [
          '<p>Los porcentajes también son un caso de proporcionalidad. Para calcular el porcentaje de una cantidad:</p>',
          '<ol>' +
            '<li>Convierte el porcentaje a forma decimal (divide entre 100).</li>' +
            '<li>Multiplica ese decimal por la cantidad.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> El 30% de 900 = 0,30 × 900 = <strong>270</strong></p>',
          '<p>También se puede usar la regla de tres: si 100% equivale a 900, entonces 30% equivale a x. x = 900 × 30 ÷ 100 = 270.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Si un obrero trabaja durante 8 horas se le paga ₡16 000, ¿cuántas horas debe trabajar para que la paga sea de ₡20 000?',
        options: ['4', '9', '10', '16'],
        correct: 2,
        mepBloque: 'algebra'
      },
      {
        question: 'Una torre de 36 m de altura da una sombra de 48 m. ¿Cuánto medirá la sombra de una torre de 12 m de altura?',
        options: ['16 m', '9 m', '8 m', '144 m'],
        correct: 0,
        mepBloque: 'algebra'
      },
      {
        question: 'En un bosque había 100 árboles, sin embargo, en las últimas semanas se han talado 29 árboles. ¿Qué porcentaje del bosque no fue talado?',
        options: ['2,9%', '29%', '71%', '79%'],
        correct: 2,
        mepBloque: 'algebra'
      },
      {
        question: 'Al adquirir un vehículo cuyo precio es de ₡8 600 000, nos hacen un descuento del 8%. ¿A cuánto dinero equivale el descuento?',
        options: ['₡688 000', '₡568 000', '₡448 000', '₡868 000'],
        correct: 0,
        mepBloque: 'algebra'
      },
      {
        question: 'Andrea está leyendo un libro que tiene 240 páginas en total. Si ya ha leído 180 páginas, ¿qué porcentaje del libro le falta por leer?',
        options: ['25%', '75%', '60%', '180%'],
        correct: 0,
        mepBloque: 'algebra'
      }
    ]
  },
```

- [ ] **Step 3: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 4: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: swap to aguacate example and fill quiz for proporcionalidad-y-regla-de-tres"
```

---

### Task 12: `ecuaciones` — add comprobación step (Ficha #49)

**Files:**
- Modify: `src/data/lessons/matematicas.js:954-967`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'ecuaciones'`. No quiz change (already has 5 well-matched questions).

- [ ] **Step 1: Add the verification-by-substitution step**

Find this exact block:

```js
      {
        title: '3. Resolución con Suma y Resta',
        content: [
          '<p>Para resolver una ecuación con suma o resta, se debe <strong>dejar sola la incógnita</strong> usando la operación contraria:</p>',
          '<ul>' +
            '<li>Si hay <strong>suma</strong> → se resta ese número de ambos lados.</li>' +
            '<li>Si hay <strong>resta</strong> → se suma ese número a ambos lados.</li>' +
          '</ul>',
          '<p><strong>Ejemplos:</strong></p>',
          '<ul>' +
            '<li>x + 5 = 7 → x = 7 − 5 → <strong>x = 2</strong></li>' +
            '<li>x − 3 = 8 → x = 8 + 3 → <strong>x = 11</strong></li>' +
            '<li>n + 12 = 20 → n = 20 − 12 → <strong>n = 8</strong></li>' +
          '</ul>'
        ]
      }
    ],
    quiz: [
```

Replace it with:

```js
      {
        title: '3. Resolución con Suma y Resta',
        content: [
          '<p>Para resolver una ecuación con suma o resta, se debe <strong>dejar sola la incógnita</strong> usando la operación contraria:</p>',
          '<ul>' +
            '<li>Si hay <strong>suma</strong> → se resta ese número de ambos lados.</li>' +
            '<li>Si hay <strong>resta</strong> → se suma ese número a ambos lados.</li>' +
          '</ul>',
          '<p><strong>Ejemplos:</strong></p>',
          '<ul>' +
            '<li>x + 5 = 7 → x = 7 − 5 → <strong>x = 2</strong></li>' +
            '<li>x − 3 = 8 → x = 8 + 3 → <strong>x = 11</strong></li>' +
            '<li>n + 12 = 20 → n = 20 − 12 → <strong>n = 8</strong></li>' +
          '</ul>',
          '<p><strong>Comprobación:</strong> después de despejar la incógnita, siempre se debe comprobar el resultado sustituyendo el valor obtenido en la ecuación original.</p>',
          '<p><strong>Ejemplo:</strong> m + 4 = 15 → m = 15 − 4 → m = 11. Comprobación: <strong>11</strong> + 4 = 15 → 15 = 15 ✓</p>'
        ]
      }
    ],
    quiz: [
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add comprobacion step to ecuaciones"
```

---

### Task 13: `tablas-y-graficos` — add población/muestra definition (Ficha #50, Evidencia 4)

**Files:**
- Modify: `src/data/lessons/matematicas.js:1013-1029`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'tablas-y-graficos'`. No quiz change (already has 2 questions, one of which tests this exact concept — this task makes the lesson actually teach it).

- [ ] **Step 1: Add the población/muestra definition**

Find this exact block:

```js
      {
        title: '1. Tablas de Frecuencias',
        content: [
          '<p>Las <strong>tablas de frecuencias</strong> se utilizan para organizar y mostrar de forma ordenada los datos obtenidos en un estudio estadístico.</p>',
          '<p>Una tabla de frecuencias típica tiene:</p>',
          '<ul>' +
            '<li><strong>Categoría o dato:</strong> Los valores que se están analizando.</li>' +
            '<li><strong>Frecuencia absoluta:</strong> La cantidad de veces que se repite cada dato.</li>' +
            '<li><strong>Frecuencia porcentual:</strong> El porcentaje que representa cada dato del total.</li>' +
          '</ul>',
          '<p>Ejemplo — Superhéroe favorito de 20 estudiantes:</p>',
          '<ul>' +
            '<li>Ironman: 6 estudiantes (30%)</li>' +
            '<li>Mujer maravilla: 4 estudiantes (20%)</li>' +
            '<li>Spiderman: 10 estudiantes (50%)</li>' +
            '<li>Total: 20 (100%)</li>' +
          '</ul>'
        ]
      },
```

Replace it with:

```js
      {
        title: '1. Tablas de Frecuencias',
        content: [
          '<p>Las <strong>tablas de frecuencias</strong> se utilizan para organizar y mostrar de forma ordenada los datos obtenidos en un estudio estadístico.</p>',
          '<p>Una tabla de frecuencias típica tiene:</p>',
          '<ul>' +
            '<li><strong>Categoría o dato:</strong> Los valores que se están analizando.</li>' +
            '<li><strong>Frecuencia absoluta:</strong> La cantidad de veces que se repite cada dato.</li>' +
            '<li><strong>Frecuencia porcentual:</strong> El porcentaje que representa cada dato del total.</li>' +
          '</ul>',
          '<p>Ejemplo — Superhéroe favorito de 20 estudiantes:</p>',
          '<ul>' +
            '<li>Ironman: 6 estudiantes (30%)</li>' +
            '<li>Mujer maravilla: 4 estudiantes (20%)</li>' +
            '<li>Spiderman: 10 estudiantes (50%)</li>' +
            '<li>Total: 20 (100%)</li>' +
          '</ul>',
          '<p><strong>Población y muestra:</strong> la <strong>población</strong> es el grupo completo que se quiere estudiar, mientras que la <strong>muestra</strong> es la parte de esa población que realmente se selecciona y se encuesta o mide.</p>'
        ]
      },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add poblacion y muestra definition to tablas-y-graficos"
```

---

### Task 14: `medidas-estadisticas` — add Media Aritmética section (Ficha #52), fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:1103-1121`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'medidas-estadisticas'`.

- [ ] **Step 1: Add the Media Aritmética section and fill the quiz**

Find this exact block (the end of the lesson):

```js
      {
        title: '3. Frecuencia Absoluta y Porcentual',
        content: [
          '<p>La <strong>frecuencia</strong> es el número de veces que se repite un valor o dato en una tabla o análisis.</p>',
          '<ul>' +
            '<li><strong>Frecuencia absoluta:</strong> La cantidad exacta de veces que se repite cada dato específico.</li>' +
            '<li><strong>Frecuencia porcentual:</strong> Se obtiene dividiendo la frecuencia absoluta entre el total de datos y multiplicando por 100.</li>' +
          '</ul>',
          '<p>Fórmula: Frecuencia porcentual = (frecuencia absoluta ÷ total de datos) × 100</p>',
          '<p>Ejemplo — 20 estudiantes eligieron su superhéroe favorito:</p>',
          '<ul>' +
            '<li>Ironman: 6 ÷ 20 × 100 = <strong>30%</strong></li>' +
            '<li>Mujer maravilla: 4 ÷ 20 × 100 = <strong>20%</strong></li>' +
            '<li>Spiderman: 10 ÷ 20 × 100 = <strong>50%</strong></li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with:

```js
      {
        title: '3. Frecuencia Absoluta y Porcentual',
        content: [
          '<p>La <strong>frecuencia</strong> es el número de veces que se repite un valor o dato en una tabla o análisis.</p>',
          '<ul>' +
            '<li><strong>Frecuencia absoluta:</strong> La cantidad exacta de veces que se repite cada dato específico.</li>' +
            '<li><strong>Frecuencia porcentual:</strong> Se obtiene dividiendo la frecuencia absoluta entre el total de datos y multiplicando por 100.</li>' +
          '</ul>',
          '<p>Fórmula: Frecuencia porcentual = (frecuencia absoluta ÷ total de datos) × 100</p>',
          '<p>Ejemplo — 20 estudiantes eligieron su superhéroe favorito:</p>',
          '<ul>' +
            '<li>Ironman: 6 ÷ 20 × 100 = <strong>30%</strong></li>' +
            '<li>Mujer maravilla: 4 ÷ 20 × 100 = <strong>20%</strong></li>' +
            '<li>Spiderman: 10 ÷ 20 × 100 = <strong>50%</strong></li>' +
          '</ul>'
        ]
      },
      {
        title: '4. Media Aritmética',
        content: [
          '<p>La <strong>media aritmética</strong> (o promedio) es la suma de todos los datos dividida entre el número total de datos. Se representa con el símbolo <strong>x̄</strong>.</p>',
          '<p><strong>Ejemplo:</strong> Las notas que obtuvieron cinco estudiantes en un examen de matemática son: 78, 92, 84, 90, 76.</p>',
          '<p>x̄ = (78 + 92 + 84 + 90 + 76) ÷ 5 = 420 ÷ 5 = <strong>84</strong></p>',
          '<p>El promedio de notas de los estudiantes en ese examen es de 84.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'A continuación se presentan las edades de un grupo de estudiantes: 10 – 8 – 9 – 10 – 8 – 7 – 10 – 10 – 9 – 9 – 10 – 8. La moda del grupo de datos anterior es:',
        options: ['8', '9', '10', '8 y 10 (bimodal)'],
        correct: 2,
        mepBloque: 'estadistica'
      },
      {
        question: 'La siguiente tabla muestra datos sobre el sabor de helado favorito de un grupo de 40 estudiantes de sexto grado:\nChicle: 16 estudiantes\nChocochips: 20 estudiantes\nFresa: 4 estudiantes\nLa frecuencia porcentual del helado de chicle es:',
        options: ['20%', '30%', '40%', '50%'],
        correct: 2,
        mepBloque: 'estadistica'
      }
    ]
  },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: add media aritmetica section and fill quiz for medidas-estadisticas"
```

---

### Task 15: `poligonos-y-circunferencia` — fill empty quiz

**Files:**
- Modify: `src/data/lessons/matematicas.js:451-465`

**Interfaces:**
- No new exports. Edits the lesson with `id: 'poligonos-y-circunferencia'`. No theory change — this lesson's content is already complete and faithful per the design spec.

- [ ] **Step 1: Fill the empty quiz**

Find this exact block (the end of the lesson):

```js
      {
        title: '3. Polígono Regular Inscrito en una Circunferencia',
        content: [
          '<p>Un polígono regular está <strong>inscrito</strong> en una circunferencia si todos sus vértices son puntos de la circunferencia.</p>',
          '<p>Sus elementos especiales son:</p>',
          '<ul>' +
            '<li><strong>Centro:</strong> Coincide con el centro de la circunferencia.</li>' +
            '<li><strong>Radio:</strong> Va del centro a un vértice del polígono; también es radio de la circunferencia.</li>' +
            '<li><strong>Apotema:</strong> Va del centro al punto medio de un lado; es perpendicular al lado.</li>' +
            '<li><strong>Ángulo central:</strong> Su medida se calcula como 360° ÷ n (donde n es el número de lados del polígono).</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },
```

Replace it with:

```js
      {
        title: '3. Polígono Regular Inscrito en una Circunferencia',
        content: [
          '<p>Un polígono regular está <strong>inscrito</strong> en una circunferencia si todos sus vértices son puntos de la circunferencia.</p>',
          '<p>Sus elementos especiales son:</p>',
          '<ul>' +
            '<li><strong>Centro:</strong> Coincide con el centro de la circunferencia.</li>' +
            '<li><strong>Radio:</strong> Va del centro a un vértice del polígono; también es radio de la circunferencia.</li>' +
            '<li><strong>Apotema:</strong> Va del centro al punto medio de un lado; es perpendicular al lado.</li>' +
            '<li><strong>Ángulo central:</strong> Su medida se calcula como 360° ÷ n (donde n es el número de lados del polígono).</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Un polígono regular tiene 6 lados, cada uno mide 7 m. ¿Cómo se llama ese polígono?',
        options: ['pentágono', 'hexágono', 'octágono', 'heptágono'],
        correct: 1,
        mepBloque: 'geometria'
      },
      {
        question: 'Carlos fue de paseo a Perú y pudo observar que algunas monedas tienen forma de octágono regular. ¿Cuántos lados tienen dichas monedas?',
        options: ['8 lados', '9 lados', '10 lados', '6 lados'],
        correct: 0,
        mepBloque: 'geometria'
      },
      {
        question: 'Al segmento que va desde cualquier punto de la circunferencia al centro se le llama:',
        options: ['diámetro', 'cuerda', 'radio', 'apotema'],
        correct: 2,
        mepBloque: 'geometria'
      }
    ]
  },
```

- [ ] **Step 2: Verify structural test still passes**

Run: `npx vitest run src/tests/lessonsData.test.js`
Expected: all tests PASS.

- [ ] **Step 3: Lint**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/lessons/matematicas.js
git commit -m "feat: fill empty quiz for poligonos-y-circunferencia"
```

---

### Task 16: Final full-suite verification

**Files:**
- None (verification only).

**Interfaces:**
- None.

- [ ] **Step 1: Run the full test suite once**

Run: `npx vitest run`
Expected: all test files PASS, including `src/tests/lessonsData.test.js`, with no regressions in any other test file.

- [ ] **Step 2: Lint the whole repo**

Run: `npx eslint src/data/lessons/matematicas.js`
Expected: no errors.

- [ ] **Step 3: Spot-check the rendered lesson list manually**

Run: `node -e "const {matematicasLessons} = await import('./src/data/lessons/matematicas.js'); console.log('lesson count:', matematicasLessons.length); matematicasLessons.forEach(l => console.log(l.id, '— sections:', l.sections.length, '— quiz:', l.quiz.length));"`

Expected: 18 lessons total (unchanged count — no lessons added or removed, only sections/quiz items added within existing lessons). Quiz counts should now read: `numeros-clasificacion` 5, `operaciones-con-decimales` 5, `potencias-y-raices` 4, `fracciones` 6, `porcentajes` 0, `triangulos-y-cuadrilateros` 3, `poligonos-y-circunferencia` 3, `cuerpos-solidos` 4, `perimetro-y-area` 3, `simetria-y-plano-cartesiano` 2, `medidas-longitud-masa-capacidad` 3, `medidas-area-y-volumen` 4, `patrones-y-sucesiones` 4, `proporcionalidad-y-regla-de-tres` 5, `ecuaciones` 5, `tablas-y-graficos` 2, `medidas-estadisticas` 2, `probabilidad-eventos-aleatorios` 1.

- [ ] **Step 4: Final commit (if Step 3's spot-check required any fix)**

If everything matches, no commit needed here — each task already committed its own changes. If Step 3 revealed a discrepancy, fix it in the relevant lesson and commit:

```bash
git add src/data/lessons/matematicas.js
git commit -m "fix: correct lesson content discrepancy found in final verification"
```

