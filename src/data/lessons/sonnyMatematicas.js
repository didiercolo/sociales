// src/data/lessons/sonnyMatematicas.js
// Resumen de estudio para el examen de Matemática – VI Nivel (Sonny).
// Base: enVision Matemáticas, Tema 3 (Expresiones numéricas y algebraicas)
// y Tema 4 (Representar y resolver ecuaciones y desigualdades).
export const sonnyMatematicasLesson = {
  id: 'sonny-resumen-matematicas',
  mepBloque: 'algebra',
  title: 'Resumen de Matemática – VI Nivel',
  description: 'Repaso del I Semestre: exponentes, M.C.D. y m.c.m., expresiones numéricas y algebraicas, y ecuaciones de un paso (Temas 3 y 4 de enVision).',
  questionCount: 10,
  extraMaterial: {
    title: 'Hoja de práctica + respuestas (imprimible)',
    url: '/docs/practica-matematica-sonny.html',
    type: 'HTML'
  },
  sections: [
    {
      title: 'Antes de empezar',
      content: [
        '<p><strong>Prueba de Matemática · I Semestre 2026 · Profesora Adriana Rodríguez</strong></p>',
        '<p>El repaso se basa en el libro <em>enVision Matemáticas</em>:</p>',
        '<ul>',
        '<li><strong>Tema 3 – Expresiones numéricas y algebraicas:</strong> lecciones 3-1 a 3-5.</li>',
        '<li><strong>Tema 4 – Ecuaciones:</strong> lecciones 4-3, 4-4 y 4-5 (ecuaciones de un paso).</li>',
        '</ul>',
        '<p>Páginas de repaso del cuaderno: <strong>153 (5–7), 144 (A–B), 157 y 174</strong>, más el «Práctico de examen» del 19/8/26 (ecuaciones de un paso).</p>',
        '<p><strong>Regla de oro de la profesora:</strong> en los problemas con palabras hay que <em>leer con atención, asignarle una letra a la incógnita, traducir el lenguaje algebraico, plantear la igualdad y despejar la variable</em>. Y no olvidar escribir la respuesta.</p>',
        '<p>En las ecuaciones siempre hay que <strong>mostrar el procedimiento</strong>: la operación inversa aplicada a los dos lados y la comprobación final.</p>'
      ]
    },
    {
      title: 'Lección 3-1: Entender y representar los exponentes',
      content: [
        '<p>Un <strong>exponente</strong> indica cuántas veces se usa la <strong>base</strong> como factor, es decir, cuántas veces se multiplica por sí misma.</p>',
        '<p><strong>Ejemplo:</strong> 6 × 6 × 6 = 6³ = 216. Aquí <strong>6 es la base</strong> y <strong>3 es el exponente</strong> («el 6 se usa como factor 3 veces»).</p>',
        '<h3>Cómo escribirlo</h3>',
        '<ul>',
        '<li>8 × 8 × 8 × 8 × 8 × 8 × 8 = <strong>8⁷</strong> (el 8 aparece 7 veces).</li>',
        '<li>2 × 2 × 2 × 2 = <strong>2⁴</strong> = 16.</li>',
        '</ul>',
        '<h3>Regla especial</h3>',
        '<p><strong>Todo número elevado a 0 es igual a 1.</strong> Por ejemplo: 6⁰ = 1, 3 105⁰ = 1, 10⁰ = 1.</p>',
        '<h3>Valores que conviene saber de memoria</h3>',
        '<table class="summary-table"><thead><tr><th>Potencia</th><th>Se lee</th><th>Valor</th></tr></thead><tbody>' +
          '<tr><td>9²</td><td>nueve al cuadrado</td><td>81</td></tr>' +
          '<tr><td>22²</td><td>veintidós al cuadrado</td><td>484</td></tr>' +
          '<tr><td>3⁴</td><td>tres a la cuarta</td><td>81</td></tr>' +
          '<tr><td>2⁷</td><td>dos a la séptima</td><td>128</td></tr>' +
          '<tr><td>5³</td><td>cinco al cubo</td><td>125</td></tr>' +
        '</tbody></table>',
        '<p><strong>Concepto clave:</strong> el exponente <em>no</em> multiplica a la base. 2⁴ no es 2×4 = 8, es 2×2×2×2 = 16.</p>'
      ]
    },
    {
      title: 'Lección 3-2: M.C.D. y m.c.m.',
      content: [
        '<p><strong>M.C.D. (máximo común divisor):</strong> el número más grande que divide exactamente a dos números.</p>',
        '<p><strong>m.c.m. (mínimo común múltiplo):</strong> el número más pequeño que es múltiplo de los dos números.</p>',
        '<h3>Método de la escalera (el que se usa en clase)</h3>',
        '<p>Se dividen los dos números entre factores primos comunes, uno debajo del otro:</p>',
        '<pre class="math-block">  75 | 125 | 5\n  15 |  25 | 5\n   3 |   5 |\n\nM.C.D. = 5 × 5 = 25</pre>',
        '<p>Para el <strong>M.C.D.</strong> se multiplican solo los factores que dividen a <em>los dos</em> números a la vez.</p>',
        '<p>Para el <strong>m.c.m.</strong> se sigue dividiendo hasta que <em>ambos</em> lleguen a 1, y se multiplican <em>todos</em> los factores de la columna derecha:</p>',
        '<pre class="math-block">  15 | 21 | 3\n   5 |  7 | 5\n   1 |  7 | 7\n   1 |  1 |\n\nm.c.m. = 3 × 5 × 7 = 105</pre>',
        '<h3>Con factores primos (el método del libro)</h3>',
        '<p>Ejemplo con 12 y 6: 12 = 2×2×3 y 6 = 2×3.</p>',
        '<ul>',
        '<li><strong>M.C.D.:</strong> factores comunes → 2×3 = <strong>6</strong>.</li>',
        '<li><strong>m.c.m.:</strong> la mayor cantidad de veces que aparece cada factor → 2×2×3 = <strong>12</strong>.</li>',
        '</ul>',
        '<h3>M.C.D. y propiedad distributiva</h3>',
        '<p>El M.C.D. sirve para reescribir una suma: 30 + 100, con M.C.D. = 10, se escribe <strong>10(3 + 10)</strong>.</p>',
        '<h3>¿Cuándo uso cada uno? (clave para el examen)</h3>',
        '<table class="summary-table"><thead><tr><th>Si el problema pide…</th><th>Se usa</th></tr></thead><tbody>' +
          '<tr><td>Repartir dos cantidades en bolsas / paquetes / grupos <em>idénticos</em>, lo más grandes posible</td><td><strong>M.C.D.</strong></td></tr>' +
          '<tr><td>Saber cuándo dos eventos que se repiten vuelven a <em>coincidir</em> (días, minutos, vueltas)</td><td><strong>m.c.m.</strong></td></tr>' +
        '</tbody></table>',
        '<p><strong>Ejemplo de bolsas (M.C.D.):</strong> hay 75 bolitas azules y 125 rojas y se quieren armar bolsas idénticas sin que sobre nada. M.C.D.(75, 125) = <strong>25 bolsas</strong>, cada una con 3 azules y 5 rojas.</p>',
        '<p><strong>Ejemplo de coincidencia (m.c.m.):</strong> dos corredores dan una vuelta cada 15 y cada 21 minutos. Vuelven a encontrarse en la salida a los m.c.m.(15, 21) = <strong>105 minutos</strong>.</p>',
        '<p><strong>Truco para no confundirse:</strong> el M.C.D. siempre da un número <em>menor o igual</em> que los datos (se reparte); el m.c.m. siempre da un número <em>mayor o igual</em> (se espera).</p>'
      ]
    },
    {
      title: 'Lección 3-3: Escribir y evaluar expresiones numéricas',
      content: [
        '<p>Una <strong>expresión numérica</strong> combina números y operaciones, sin variables. Para calcular su valor se sigue el <strong>orden de las operaciones</strong>:</p>',
        '<ol>',
        '<li><strong>Paréntesis y corchetes</strong> (de adentro hacia afuera).</li>',
        '<li><strong>Exponentes.</strong></li>',
        '<li><strong>Multiplicación y división</strong>, de izquierda a derecha.</li>',
        '<li><strong>Suma y resta</strong>, de izquierda a derecha.</li>',
        '</ol>',
        '<h3>Ejemplo resuelto paso a paso</h3>',
        '<pre class="math-block">3² + 2[(21 − 9) ÷ 4]\n= 3² + 2[12 ÷ 4]   ← primero el paréntesis\n= 3² + 2 × 3       ← luego el corchete\n= 9 + 6            ← el exponente\n= 15</pre>',
        '<h3>Otro ejemplo</h3>',
        '<pre class="math-block">80 − 4² ÷ 8\n= 80 − 16 ÷ 8   ← exponente\n= 80 − 2        ← división\n= 78</pre>',
        '<p><strong>Ojo con las fracciones:</strong> dividir entre una fracción es lo mismo que multiplicar por su <strong>recíproco</strong> (la fracción volteada). Por ejemplo, 20 ÷ ½ = 20 × 2 = 40.</p>',
        '<pre class="math-block">[(2³ × 2,5) ÷ ½] + 120\n= [20 ÷ ½] + 120\n= 40 + 120\n= 160</pre>',
        '<p><strong>Concepto clave:</strong> cambiar el orden cambia el resultado. 80 − 4² ÷ 8 no es lo mismo que (80 − 4²) ÷ 8.</p>'
      ]
    },
    {
      title: 'Lección 3-4: Escribir expresiones algebraicas',
      content: [
        '<p>Una <strong>expresión algebraica</strong> tiene al menos una <strong>variable</strong> (una letra) y al menos una operación. No lleva signo de igual.</p>',
        '<h3>De las palabras a la expresión</h3>',
        '<table class="summary-table"><thead><tr><th>Frase</th><th>Expresión</th></tr></thead><tbody>' +
          '<tr><td>la suma de 8 y un número <em>a</em></td><td>8 + a</td></tr>' +
          '<tr><td>cinco menos que un número <em>b</em></td><td>b − 5</td></tr>' +
          '<tr><td>el producto de 8 y un número <em>c</em></td><td>8c</td></tr>' +
          '<tr><td>el cociente de <em>d</em> dividido por 2</td><td>d ÷ 2</td></tr>' +
          '<tr><td>22 menos que 5 por un número <em>f</em></td><td>5f − 22</td></tr>' +
          '<tr><td>3 por la suma de <em>m</em> y 7</td><td>3(m + 7)</td></tr>' +
        '</tbody></table>',
        '<p><strong>Cuidado con «menos que»:</strong> «cinco menos que b» es <strong>b − 5</strong>, no 5 − b. El orden se invierte.</p>',
        '<p>La multiplicación se puede escribir de tres maneras equivalentes: <strong>4 • n</strong>, <strong>4(n)</strong> o <strong>4n</strong>.</p>',
        '<h3>Vocabulario que preguntan</h3>',
        '<ul>',
        '<li><strong>Término:</strong> cada parte separada por + o −.</li>',
        '<li><strong>Coeficiente:</strong> el número que multiplica a la variable.</li>',
        '<li><strong>Constante:</strong> el término que es solo un número.</li>',
        '<li><strong>Producto:</strong> resultado de multiplicar. <strong>Cociente:</strong> resultado de dividir.</li>',
        '</ul>',
        '<p><strong>Ejemplo analizado:</strong> 12r + r/2 − 19 tiene <strong>tres términos</strong>: 12r (coeficiente 12), r/2 (un cociente) y 19 (la constante).</p>'
      ]
    },
    {
      title: 'Lección 3-5: Evaluar expresiones algebraicas',
      content: [
        '<p><strong>Evaluar</strong> es sustituir la variable por su valor numérico y luego aplicar el orden de las operaciones.</p>',
        '<h3>Con números enteros</h3>',
        '<pre class="math-block">Evaluar 20 + 3c\nc = 10 → 20 + 3(10) = 50\nc = 12 → 20 + 3(12) = 56\nc = 14 → 20 + 3(14) = 62</pre>',
        '<h3>Con decimales</h3>',
        '<p>Si m = r ÷ g, con r = 1 560 y g = 60, entonces m = 1 560 ÷ 60 = <strong>26</strong>.</p>',
        '<h3>Con fracciones</h3>',
        '<pre class="math-block">Evaluar 27 ÷ l²  con l = ⅓\n= 27 ÷ (⅓ × ⅓)\n= 27 ÷ 1/9\n= 27 × 9        ← se multiplica por el recíproco\n= 243</pre>',
        '<p><strong>Concepto clave:</strong> primero se sustituye, después se calcula. Si la variable aparece varias veces, se reemplaza en todas.</p>',
        '<p>En los problemas de tarifas (alquiler de un carro, collares con cuentas, etc.) el orden es: <strong>1)</strong> escribir la expresión con la variable, <strong>2)</strong> sustituir el valor que pide el problema, <strong>3)</strong> escribir la respuesta con su unidad.</p>'
      ]
    },
    {
      title: 'Tema 4: Vocabulario y propiedades de la igualdad',
      content: [
        '<table class="summary-table"><thead><tr><th>Palabra</th><th>Significado</th></tr></thead><tbody>' +
          '<tr><td>Variable</td><td>Letra que representa una cantidad desconocida</td></tr>' +
          '<tr><td>Expresión algebraica</td><td>Tiene variable(s) y operación(es), <strong>sin</strong> signo de igual</td></tr>' +
          '<tr><td>Ecuación</td><td>Dos expresiones unidas por un signo <strong>=</strong></td></tr>' +
          '<tr><td>Evaluar</td><td>Hallar el valor de una expresión</td></tr>' +
          '<tr><td>Coeficiente</td><td>Número que multiplica a la variable</td></tr>' +
          '<tr><td>Relación inversa</td><td>Operación que deshace otra: suma ↔ resta, multiplicación ↔ división</td></tr>' +
        '</tbody></table>',
        '<p><strong>Propiedades de la igualdad:</strong> lo que se le hace a un lado de la ecuación hay que hacérselo al otro. Así la balanza se mantiene equilibrada.</p>',
        '<p><strong>Diferencia que preguntan mucho:</strong> 5x + 3 es una <em>expresión</em>; 5x + 3 = 18 es una <em>ecuación</em>.</p>'
      ]
    },
    {
      title: 'Lección 4-3: Ecuaciones de suma y de resta',
      content: [
        '<p>Se despeja la variable usando la <strong>operación inversa</strong> en <strong>ambos lados</strong>.</p>',
        '<h3>Ejemplo de suma</h3>',
        '<pre class="math-block">c + 7 = 25\nc + 7 − 7 = 25 − 7   ← se resta 7 en los dos lados\nc = 18\n\nComprobación: 18 + 7 = 25 ✓</pre>',
        '<h3>Ejemplo de resta</h3>',
        '<pre class="math-block">a − 19 = 34\na − 19 + 19 = 34 + 19   ← se suma 19 en los dos lados\na = 53\n\nComprobación: 53 − 19 = 34 ✓</pre>',
        '<h3>Para practicar</h3>',
        '<p>y − 12 = 89 → y = 101 ; 80 + r = 160 → r = 80 ; 60 = x − 16 → x = 76 ; 20 = y + 12 → y = 8 ; x + 2 = 19 → x = 17 ; z − 313 = 176 → z = 489</p>',
        '<h3>Problema con palabras</h3>',
        '<p>«Le das 21 cromos a un amigo y te quedan 9. ¿Cuántos tenías al inicio?»</p>',
        '<pre class="math-block">c = cromos al inicio\nc − 21 = 9\nc − 21 + 21 = 9 + 21\nc = 30\n\nRespuesta: tenía 30 cromos. Comprobación: 30 − 21 = 9 ✓</pre>',
        '<p><strong>Formato que exige la profesora:</strong> escribir la ecuación → aplicar la operación inversa a los dos lados → resolver → comprobar sustituyendo → escribir la respuesta.</p>'
      ]
    },
    {
      title: 'Lección 4-4: Ecuaciones de multiplicación y de división',
      content: [
        '<p>Misma idea, pero la relación inversa ahora es multiplicación ↔ división.</p>',
        '<pre class="math-block">9z = 63\n9z ÷ 9 = 63 ÷ 9   ← se divide entre 9 en los dos lados\nz = 7\n\nComprobación: 9 × 7 = 63 ✓</pre>',
        '<pre class="math-block">c ÷ 4 = 24\nc ÷ 4 × 4 = 24 × 4   ← se multiplica por 4 en los dos lados\nc = 96\n\nComprobación: 96 ÷ 4 = 24 ✓</pre>',
        '<h3>Para practicar</h3>',
        '<p>8x = 64 → x = 8 ; x ÷ 20 = 120 → x = 2 400 ; 7x = 77 → x = 11 ; 26 = 13x → x = 2 ; 2 448 ÷ 48 = x → x = 51</p>',
        '<p><strong>Cuidado:</strong> si la variable está multiplicada (9z), se <em>divide</em>; si está dividida (c ÷ 4), se <em>multiplica</em>. Siempre lo contrario de lo que muestra la ecuación.</p>'
      ]
    },
    {
      title: 'Lección 4-5: Ecuaciones con números racionales',
      content: [
        '<p>El procedimiento es exactamente el mismo, solo que los números son fracciones o decimales.</p>',
        '<h3>Con fracciones mixtas</h3>',
        '<pre class="math-block">w + 4⅓ = 7\nw = 7 − 4⅓\nw = 2⅔\n\nComprobación: 2⅔ + 4⅓ = 7 ✓</pre>',
        '<h3>Multiplicación por el recíproco</h3>',
        '<pre class="math-block">(3/5)n = 2/3\n(5/3) × (3/5)n = (5/3) × (2/3)   ← recíproco en los dos lados\nn = 10/9 = 1 1/9</pre>',
        '<h3>Con decimales</h3>',
        '<pre class="math-block">12x = 19,2\nx = 19,2 ÷ 12\nx = 1,6\n\nComprobación: 12 × 1,6 = 19,2 ✓</pre>',
        '<p><strong>Para practicar:</strong> x + 3⅝ = 7¼ → x = 3⅝ ; x − 4/8 = 4¼ → x = 4¾ ; x ÷ 15 = 8⅓ → x = 125 ; x ÷ 3 = 9 → x = 27 ; 17,9 − x = 12,8 → x = 5,1</p>',
        '<p><strong>Recordatorio:</strong> el <strong>recíproco</strong> de una fracción es la misma fracción volteada (el de 3/5 es 5/3). Dividir entre una fracción = multiplicar por su recíproco.</p>'
      ]
    },
    {
      title: 'Repaso rápido antes del examen',
      content: [
        '<ul>',
        '<li><strong>Exponente:</strong> cuántas veces se usa la base como factor. Cualquier número a la 0 = 1.</li>',
        '<li><strong>M.C.D.:</strong> repartir en grupos idénticos. <strong>m.c.m.:</strong> volver a coincidir.</li>',
        '<li><strong>Orden de operaciones:</strong> paréntesis → exponentes → × y ÷ → + y −.</li>',
        '<li><strong>Expresión:</strong> sin signo de igual. <strong>Ecuación:</strong> con signo de igual.</li>',
        '<li><strong>«menos que»</strong> invierte el orden: «7 menos que n» = n − 7.</li>',
        '<li><strong>Para despejar:</strong> operación inversa a los dos lados y comprobar.</li>',
        '<li>En los problemas con palabras: <strong>asignar la letra, traducir, plantear, despejar y escribir la respuesta.</strong></li>',
        '</ul>'
      ]
    }
  ],
  quiz: [
    // ── 3-1 Exponentes ──
    { question: 'En la potencia 6³, ¿qué representa el 3?', options: ['La base', 'El exponente, que indica cuántas veces se usa el 6 como factor', 'El resultado de la multiplicación', 'El número de sumandos'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 6³?', options: ['18', '36', '216', '666'], correct: 2, mepBloque: 'numeros' },
    { question: '8 × 8 × 8 × 8 × 8 × 8 × 8 se escribe como:', options: ['8⁶', '8⁷', '7⁸', '8 × 7'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 3 105⁰?', options: ['0', '1', '3 105', 'No se puede calcular'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 2⁷?', options: ['14', '49', '128', '256'], correct: 2, mepBloque: 'numeros' },
    { question: '¿Cuál afirmación es correcta?', options: ['2⁴ = 2 × 4 = 8', '2⁴ = 2 × 2 × 2 × 2 = 16', '2⁴ = 4 × 4 × 4 × 4 = 256', '2⁴ = 4 + 4 = 8'], correct: 1, mepBloque: 'numeros' },

    // ── 3-2 M.C.D. y m.c.m. ──
    { question: 'El máximo común divisor de dos números es:', options: ['El menor múltiplo que tienen en común', 'El mayor número que divide exactamente a los dos', 'La suma de sus factores primos', 'El número más grande de los dos'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el M.C.D. de 75 y 125?', options: ['5', '15', '25', '375'], correct: 2, mepBloque: 'numeros' },
    { question: 'Si 12 = 2×2×3 y 6 = 2×3, ¿cuál es el m.c.m. de 12 y 6?', options: ['6', '12', '18', '72'], correct: 1, mepBloque: 'numeros' },
    { question: 'Se quieren armar bolsas idénticas con 75 bolitas azules y 125 rojas, sin que sobre ninguna. ¿Qué se debe calcular?', options: ['El m.c.m. de 75 y 125', 'El M.C.D. de 75 y 125', 'La suma 75 + 125', 'El promedio de 75 y 125'], correct: 1, mepBloque: 'numeros' },
    { question: 'Dos corredores dan una vuelta a la pista cada 15 y cada 21 minutos. ¿Cada cuántos minutos vuelven a coincidir en la salida?', options: ['36 minutos', '105 minutos', '315 minutos', '3 minutos'], correct: 1, mepBloque: 'numeros' },
    { question: 'Usando el M.C.D., la suma 30 + 100 se puede reescribir como:', options: ['10(3 + 10)', '5(6 + 20) + 10', '30(1 + 100)', '10(30 + 100)'], correct: 0, mepBloque: 'numeros' },
    { question: 'Un problema pregunta cada cuántos días vuelven a coincidir dos actividades que se repiten. Se resuelve con:', options: ['El M.C.D.', 'El m.c.m.', 'La resta de los dos números', 'Los criterios de divisibilidad'], correct: 1, mepBloque: 'numeros' },

    // ── 3-3 Expresiones numéricas ──
    { question: '¿Cuál es el orden correcto de las operaciones?', options: ['Suma y resta → multiplicación y división → exponentes → paréntesis', 'Paréntesis → exponentes → multiplicación y división → suma y resta', 'Exponentes → paréntesis → suma y resta → multiplicación y división', 'De izquierda a derecha siempre, sin excepciones'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 3² + 2[(21 − 9) ÷ 4]?', options: ['15', '21', '33', '9'], correct: 0, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 80 − 4² ÷ 8?', options: ['8', '78', '64', '2'], correct: 1, mepBloque: 'numeros' },
    { question: '¿Cuál es el valor de 92,3 − (3,2 ÷ 0,4) × 2³?', options: ['28,3', '84,3', '64', '92,3'], correct: 0, mepBloque: 'numeros' },
    { question: '20 ÷ ½ es igual a:', options: ['10', '20', '40', '2'], correct: 2, mepBloque: 'numeros' },

    // ── 3-4 Expresiones algebraicas ──
    { question: 'Una expresión algebraica siempre tiene:', options: ['Un signo de igual', 'Al menos una variable y al menos una operación', 'Solamente números', 'Un exponente'], correct: 1, mepBloque: 'algebra' },
    { question: '«22 menos que 5 por un número f» se escribe:', options: ['22 − 5f', '5f − 22', '5(f − 22)', '22f − 5'], correct: 1, mepBloque: 'algebra' },
    { question: '«3 por la suma de m y 7» se escribe:', options: ['3m + 7', '3 + m + 7', '3(m + 7)', 'm + 21'], correct: 2, mepBloque: 'algebra' },
    { question: 'En la expresión 12r + r/2 − 19, ¿cuántos términos hay?', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], correct: 2, mepBloque: 'algebra' },
    { question: 'En el término 12r, el número 12 se llama:', options: ['Constante', 'Coeficiente', 'Exponente', 'Cociente'], correct: 1, mepBloque: 'algebra' },
    { question: '«Una cantidad de huevos h dividida por 12» se escribe:', options: ['12h', '12 ÷ h', 'h ÷ 12', 'h − 12'], correct: 2, mepBloque: 'algebra' },
    { question: '¿Cuál NO es una forma válida de escribir el producto de 4 y n?', options: ['4 • n', '4(n)', '4n', '4 + n'], correct: 3, mepBloque: 'algebra' },

    // ── 3-5 Evaluar expresiones ──
    { question: 'Evaluar una expresión algebraica significa:', options: ['Sustituir la variable por su valor y calcular el resultado', 'Escribirla con palabras', 'Encontrar el valor de la variable', 'Simplificar los paréntesis'], correct: 0, mepBloque: 'algebra' },
    { question: '¿Cuál es el valor de 20 + 3c cuando c = 12?', options: ['35', '56', '60', '236'], correct: 1, mepBloque: 'algebra' },
    { question: 'Si m = r ÷ g, con r = 1 560 y g = 60, ¿cuánto vale m?', options: ['16', '26', '260', '2,6'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es el valor de 27 ÷ l² cuando l = ⅓?', options: ['3', '9', '81', '243'], correct: 3, mepBloque: 'algebra' },

    // ── Tema 4: ecuaciones ──
    { question: '¿Cuál de las siguientes es una ecuación?', options: ['5x + 3', '5x + 3 = 18', '5 + 3', '5x'], correct: 1, mepBloque: 'algebra' },
    { question: 'Para resolver c + 7 = 25 se debe:', options: ['Sumar 7 a los dos lados', 'Restar 7 a los dos lados', 'Multiplicar por 7 los dos lados', 'Dividir entre 7 los dos lados'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de a − 19 = 34?', options: ['a = 15', 'a = 53', 'a = 25', 'a = 646'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de 60 = x − 16?', options: ['x = 44', 'x = 76', 'x = 16', 'x = 960'], correct: 1, mepBloque: 'algebra' },
    { question: 'Le das 21 cromos a un amigo y te quedan 9. ¿Qué ecuación representa la situación?', options: ['c + 21 = 9', 'c − 21 = 9', '21 − c = 9', '21c = 9'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de 9z = 63?', options: ['z = 7', 'z = 54', 'z = 72', 'z = 567'], correct: 0, mepBloque: 'algebra' },
    { question: 'Para resolver c ÷ 4 = 24 se debe:', options: ['Dividir entre 4 los dos lados', 'Multiplicar por 4 los dos lados', 'Restar 4 a los dos lados', 'Sumar 4 a los dos lados'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de 26 = 13x?', options: ['x = 2', 'x = 13', 'x = 39', 'x = 338'], correct: 0, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de w + 4⅓ = 7?', options: ['w = 2⅔', 'w = 3⅓', 'w = 11⅓', 'w = 2⅓'], correct: 0, mepBloque: 'algebra' },
    { question: 'Para resolver (3/5)n = 2/3 se multiplican ambos lados por:', options: ['3/5', '5/3', '2/3', '3/2'], correct: 1, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de 12x = 19,2?', options: ['x = 1,6', 'x = 7,2', 'x = 16', 'x = 230,4'], correct: 0, mepBloque: 'algebra' },
    { question: '¿Cuál es la solución de 17,9 − x = 12,8?', options: ['x = 5,1', 'x = 30,7', 'x = 4,9', 'x = 12,8'], correct: 0, mepBloque: 'algebra' },
    { question: 'Después de despejar la variable, ¿qué se debe hacer siempre?', options: ['Borrar el procedimiento', 'Comprobar sustituyendo el valor hallado en la ecuación original', 'Cambiar el signo de igual', 'Volver a escribir la ecuación con otra letra'], correct: 1, mepBloque: 'algebra' }
  ],
  openQuestions: [
    { question: '¿Qué indica el exponente en una potencia como 6³?', acceptableAnswers: ['veces', 'factor', 'multiplica', 'repetida'] },
    { question: '¿Cuánto vale cualquier número elevado a 0?', acceptableAnswers: ['1', 'uno'] },
    { question: 'Escribí 8 × 8 × 8 × 8 × 8 × 8 × 8 usando un exponente.', acceptableAnswers: ['87', '8⁷', '8^7', 'elevado a la 7', 'a la 7', 'la septima'] },
    { question: '¿Cuál es el valor de 3⁴?', acceptableAnswers: ['81'] },
    { question: '¿Qué es el máximo común divisor (M.C.D.)?', acceptableAnswers: ['mayor'] },
    { question: '¿Qué es el mínimo común múltiplo (m.c.m.)?', acceptableAnswers: ['menor', 'mas pequeno', 'pequeno'] },
    { question: '¿Cuál es el M.C.D. de 84 y 126?', acceptableAnswers: ['42'] },
    { question: '¿Cuál es el m.c.m. de 15 y 21?', acceptableAnswers: ['105'] },
    { question: 'Si un problema pide repartir dos cantidades en bolsas idénticas sin que sobre nada, ¿se usa M.C.D. o m.c.m.?', acceptableAnswers: ['mcd', 'm.c.d', 'maximo', 'divisor'] },
    { question: 'Si un problema pregunta cada cuántos días coinciden dos eventos que se repiten, ¿se usa M.C.D. o m.c.m.?', acceptableAnswers: ['mcm', 'm.c.m', 'minimo', 'multiplo'] },
    { question: 'Escribí en orden los cuatro pasos del orden de las operaciones.', acceptableAnswers: ['parentesis', 'exponentes', 'multiplicacion', 'suma'] },
    { question: '¿Cuál es el valor de 3² + 2[(21 − 9) ÷ 4]?', acceptableAnswers: ['15'] },
    { question: '¿Cuál es el valor de 80 − 4² ÷ 8?', acceptableAnswers: ['78'] },
    { question: '¿Qué debe tener siempre una expresión algebraica?', acceptableAnswers: ['variable', 'letra', 'operacion'] },
    { question: 'Escribí «cinco menos que un número b» como expresión algebraica.', acceptableAnswers: ['b5', 'b  5', 'b − 5', 'b menos 5'] },
    { question: '¿Cómo se llama el número que multiplica a una variable?', acceptableAnswers: ['coeficiente'] },
    { question: '¿Cuántos términos tiene la expresión 12r + r/2 − 19?', acceptableAnswers: ['3', 'tres'] },
    { question: '¿Cuál es el valor de 20 + 3c cuando c = 14?', acceptableAnswers: ['62'] },
    { question: '¿Cuál es la diferencia entre una expresión y una ecuación?', acceptableAnswers: ['igual', 'igualdad', 'signo'] },
    { question: '¿Qué dicen las propiedades de la igualdad sobre lo que se hace a un lado de la ecuación?', acceptableAnswers: ['otro', 'ambos', 'dos lados', 'mismo'] },
    { question: 'Resolvé: c + 7 = 25. ¿Cuánto vale c?', acceptableAnswers: ['18'] },
    { question: 'Resolvé: a − 19 = 34. ¿Cuánto vale a?', acceptableAnswers: ['53'] },
    { question: 'Resolvé: y − 12 = 89. ¿Cuánto vale y?', acceptableAnswers: ['101'] },
    { question: 'Resolvé: 7x = 77. ¿Cuánto vale x?', acceptableAnswers: ['11', 'once'] },
    { question: 'Resolvé: c ÷ 4 = 24. ¿Cuánto vale c?', acceptableAnswers: ['96'] },
    { question: 'Resolvé: 17,9 − x = 12,8. ¿Cuánto vale x?', acceptableAnswers: ['51', '5,1'] },
    { question: '¿Qué es el recíproco de una fracción y para qué sirve?', acceptableAnswers: ['volteada', 'invertida', 'invierte', 'dividir', 'multiplicar'] },
    { question: '¿Cuál es el recíproco de 3/5?', acceptableAnswers: ['5/3', 'cinco tercios'] },
    { question: 'Según la profesora, ¿qué hay que hacer primero al leer un problema con palabras?', acceptableAnswers: ['leer', 'atencion', 'letra', 'incognita', 'asignar'] },
    { question: '¿Qué se debe hacer después de hallar el valor de la variable?', acceptableAnswers: ['comprobar', 'comprobacion', 'sustituir', 'verificar', 'respuesta'] }
  ]
};
