// src/data/lessons/matematicas.js
// Flat array of 18 Matemática lessons for EduPortal CR (Sexto Año)
// Content sourced from OCR of scanned PDF (Profesora Adriana Gutiérrez Rodríguez)
// Organized by mepBloque: numeros | geometria | medidas | algebra | estadistica

export const matematicasLessons = [

  // ─── NÚMEROS ─────────────────────────────────────────────

  {
    id: 'numeros-clasificacion',
    mepBloque: 'numeros',
    title: 'Números: Clasificación y Notación',
    description: 'Estudio del valor posicional, notación desarrollada, números pares e impares, múltiplos, divisores y criterios de divisibilidad.',
    sections: [
      {
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
      {
        title: '2. Números Pares e Impares',
        content: [
          '<ul>' +
            '<li><strong>Números pares:</strong> Son aquellos divisibles entre 2 (no queda residuo). Siempre terminan en 0, 2, 4, 6 u 8. Ejemplos: 2, 4, 6, 8, 10, 12...</li>' +
            '<li><strong>Números impares:</strong> No se pueden dividir exactamente entre 2 (queda residuo 1). Siempre terminan en 1, 3, 5, 7 o 9. Ejemplos: 1, 3, 5, 7, 9, 11...</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Múltiplos y Divisores',
        content: [
          '<p><strong>Múltiplos:</strong> Son todos los números que se obtienen al multiplicar un número entero por cualquier otro número entero natural.</p>',
          '<p>Ejemplo — Primeros ocho múltiplos del 3: m(3) = {0, 3, 6, 9, 12, 15, 18, 21}</p>',
          '<p><strong>Divisores:</strong> Son los números que dividen a otro en forma exacta (sin residuo). También se les llama factores.</p>',
          '<p>Ejemplo — Divisores del 40: D(40) = {1, 2, 4, 5, 8, 10, 20, 40}</p>'
        ]
      },
      {
        title: '4. Criterios de Divisibilidad y Números Primos',
        content: [
          '<ul>' +
            '<li><strong>Divisible entre 2:</strong> Si el número termina en cifra par (0, 2, 4, 6, 8). Ejemplos: 34, 560, 896.</li>' +
            '<li><strong>Divisible entre 3:</strong> Si la suma de sus cifras es múltiplo de 3. Ejemplo: 78 (7+8=15).</li>' +
            '<li><strong>Divisible entre 5:</strong> Si termina en 0 o en 5. Ejemplos: 20, 185.</li>' +
            '<li><strong>Divisible entre 10:</strong> Si termina en 0. Ejemplos: 80, 970.</li>' +
          '</ul>',
          '<p><strong>Números primos:</strong> Son mayores que 1 y solo divisibles por ellos mismos y por 1 (tienen exactamente dos divisores). Ejemplo: 13.</p>',
          '<p><strong>Números compuestos:</strong> Son mayores que 1 y divisibles entre más de dos factores. Ejemplo: 15 tiene los divisores 1, 3, 5 y 15.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'La siguiente tabla muestra la cantidad de lluvia acumulada, en milímetros, que se registró durante un día en cada una de tres regiones de Costa Rica:\nValle Central: 29,7 mm\nHuetar Norte: 29,07 mm\nPacífico Norte: 29,007 mm\nDe acuerdo con la información anterior, ¿cuál región muestra una cantidad de lluvia cuya representación literal es «veintinueve unidades con siete milésimas»?',
        options: ['Valle Central', 'Huetar Norte', 'Pacífico Norte', 'Zona Sur'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'En una competencia de natación se otorga una medalla de oro a la persona que obtenga el menor tiempo. La siguiente tabla muestra el tiempo, en segundos:\nAna: 35,15 s\nSilvia: 35,05 s\nMargarita: 35,5 s\nDe acuerdo con la información anterior, ¿a cuál persona se le otorgó la medalla de oro?',
        options: ['Ana', 'Silvia', 'Margarita', 'Ninguna, empataron'],
        correct: 1,
        mepBloque: 'numeros'
      },
      {
        question: 'En un año determinado se reportaron 4745 especies de animales marinos en Costa Rica. De acuerdo con la información anterior, la notación desarrollada del número de especies que se reportaron ese año corresponde a',
        options: ['4 + 7×10¹ + 4×10² + 5×10³', '4×10³ + 7×10² + 4×10¹ + 5', '4×10⁴ + 7×10³ + 4×10² + 5×10¹', '4×10³ + 7×10¹ + 4×10² + 5×10⁴'],
        correct: 1,
        mepBloque: 'numeros'
      },
      {
        question: 'La siguiente tabla muestra la cantidad de vehículos que pasaron por un peaje durante cada uno de tres días:\nLunes: 2344\nMartes: 1535\nMiércoles: 4722\nDe acuerdo con la información anterior, ¿en cuál día la cantidad de vehículos corresponde a un número múltiplo de seis?',
        options: ['Lunes', 'Martes', 'Miércoles', 'En ningún día'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'La siguiente tabla muestra la cantidad de estudiantes en cada grupo de música de una escuela:\nPiano: 35 estudiantes\nGuitarra: 34 estudiantes\nTrompeta: 31 estudiantes\nEl director necesita elegir un grupo para formar dos subgrupos con la misma cantidad de estudiantes, sin que ningún estudiante quede fuera. ¿Cuál grupo cumple con esas condiciones?',
        options: ['Piano', 'Guitarra', 'Trompeta', 'Ningún grupo cumple la condición'],
        correct: 1,
        mepBloque: 'numeros'
      }
    ]
  },

  {
    id: 'operaciones-con-decimales',
    mepBloque: 'numeros',
    title: 'Operaciones con Números Decimales',
    description: 'Suma, resta, multiplicación y división de decimales, incluyendo división de decimal entre decimal y multiplicación abreviada.',
    sections: [
      {
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
      {
        title: '2. División de Decimal entre Entero',
        content: [
          '<p>Pasos:</p>',
          '<ol>' +
            '<li>Coloca el número decimal (dividendo) dentro de la "casita" y el entero (divisor) afuera.</li>' +
            '<li>Divide los números antes de la coma normalmente.</li>' +
            '<li>Cuando llegues a la coma del dividendo, colócala también en el cociente.</li>' +
            '<li>Agrega ceros si es necesario y sigue dividiendo.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> 77,7 ÷ 25 = <strong>3,108</strong></p>'
        ]
      },
      {
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
      {
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

  {
    id: 'potencias-y-raices',
    mepBloque: 'numeros',
    title: 'Potencias y Raíces',
    description: 'Concepto de potenciación con base y exponente, cuadrados perfectos, cubos perfectos y descomposición de números en potencias de base 10.',
    sections: [
      {
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
      {
        title: '2. Cuadrados y Cubos Perfectos',
        content: [
          '<p><strong>Cuadrado perfecto:</strong> Es el resultado de multiplicar un número por sí mismo (n²).</p>',
          '<p>Cuadrados perfectos comunes: <strong>1, 4, 9, 16, 25, 36, 49, 64, 81, 100</strong></p>',
          '<p>Ejemplos: 2² = 4; 5² = 25</p>',
          '<p><strong>Cubo perfecto:</strong> Es el resultado de multiplicar un número por sí mismo tres veces (n³).</p>',
          '<p>Cubos perfectos comunes: <strong>1, 8, 27, 64, 125, 216, 343, 512, 729, 1000</strong></p>',
          '<p>Ejemplos: 2³ = 8; 3³ = 27</p>'
        ]
      },
      {
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

  {
    id: 'fracciones',
    mepBloque: 'numeros',
    title: 'Fracciones: Operaciones',
    description: 'Simplificación y amplificación de fracciones, multiplicación, división con inverso multiplicativo, y suma y resta de fracciones homogéneas y heterogéneas.',
    sections: [
      {
        title: '1. Simplificación y Amplificación',
        content: [
          '<p><strong>Simplificar</strong> una fracción significa reducirla para encontrar una equivalente más pequeña. Se dividen el numerador y el denominador por un mismo número natural mayor que 1 que sea divisor común de ambos.</p>',
          '<p>Ejemplo: 4/8 ÷ 2 = <strong>2/4</strong>; 4/8 ÷ 4 = <strong>1/2</strong></p>',
          '<p><strong>Amplificar</strong> una fracción significa aumentarla para obtener una equivalente. Se multiplican el numerador y el denominador por un mismo número natural mayor que 1.</p>',
          '<p>Ejemplo: 1/2 × 2 = <strong>2/4</strong>; 1/2 × 4 = <strong>4/8</strong></p>'
        ]
      },
      {
        title: '2. Multiplicación y División de Fracciones',
        content: [
          '<p><strong>Multiplicación:</strong> Se multiplican los numeradores entre sí y los denominadores entre sí.</p>',
          '<p>Fórmula: (a/b) × (c/d) = (a×c)/(b×d)</p>',
          '<p>Ejemplo: 2/3 × 4/5 = 8/15</p>',
          '<p><strong>División:</strong> Para dividir fracciones se usa el <em>inverso multiplicativo</em>. El inverso de una fracción es darle vuelta (numerador y denominador se intercambian). Luego se convierte la división en multiplicación.</p>',
          '<p>Ejemplo: (5/8) ÷ (3/4) = (5/8) × (4/3) = 20/24 = <strong>5/6</strong></p>'
        ]
      },
      {
        title: '3. Suma y Resta de Fracciones Homogéneas',
        content: [
          '<p>Las <strong>fracciones homogéneas</strong> tienen el mismo denominador.</p>',
          '<ul>' +
            '<li><strong>Suma:</strong> Se suman los numeradores y el denominador se deja igual.</li>' +
            '<li><strong>Resta:</strong> Se restan los numeradores y el denominador se deja igual.</li>' +
          '</ul>',
          '<p>Consejo: Siempre que las fracciones tengan el mismo denominador, puedes sumar o restar directamente los numeradores.</p>'
        ]
      },
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
      {
        question: 'Para una carrera de atletismo, María José entrenó dos días por semana: el martes recorrió 6,5 km y el jueves recorrió 5,6 km. De acuerdo con la información anterior, ¿cuántos kilómetros en total recorrió María José esa semana como parte del entrenamiento?',
        options: ['0,9 km', '11,1 km', '12,1 km', '13,5 km'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'Francisco fue a la feria de su comunidad y compró 10 naranjas y 12 guayabas. El precio de cada naranja era ₡120 y el de cada guayaba ₡280. De acuerdo con la información anterior, ¿cuál de los siguientes procedimientos permite conocer el monto total que pagó Francisco por esa compra?',
        options: ['10 × (120 + 12) × 280', '(10 + 12) × (120 + 280)', '(10 × 120) + (12 × 280)', '(10 + 12) × 120 × 280'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'Durante una campaña de reforestación, se plantaron 48 árboles en una zona protegida. De esos árboles, se espera que sobreviva 3/4 del total durante la estación seca. De acuerdo con la información anterior, ¿cuántos árboles se espera que sobrevivan durante la estación seca?',
        options: ['12', '36', '64', '48'],
        correct: 1,
        mepBloque: 'numeros'
      },
      {
        question: 'Para un proyecto de costura, Mariana compró una tela cuya medida es 22/7 m. Ella decide escribir esa cantidad en notación mixta. De acuerdo con la información anterior, ¿cuál es la notación mixta correspondiente a la medida de la tela?',
        options: ['3 1/7 m', '7 1/3 m', '1 3/7 m', '2 8/7 m'],
        correct: 0,
        mepBloque: 'numeros'
      },
      {
        question: 'Durante una caminata en un parque nacional, un grupo de estudiantes recorrió un sendero dividido en ocho tramos de igual longitud. Al completar el quinto tramo observaron un letrero. Posteriormente, al completar el segundo tramo después del letrero, observaron un baño. De acuerdo con la información anterior, ¿qué fracción de la longitud total del sendero habían completado cuando observaron el baño?',
        options: ['1/8', '2/8', '7/8', '5/8'],
        correct: 2,
        mepBloque: 'numeros'
      },
      {
        question: 'Durante una clase de ciencias, Karina midió el volumen de agua de un recipiente y obtuvo 0,75 L. Luego, la maestra le pidió que representara esa cantidad como una fracción. De acuerdo con la información anterior, ¿cuál opción corresponde a la fracción que representa el volumen de agua?',
        options: ['1/4 L', '3/4 L', '4/3 L', '2/3 L'],
        correct: 1,
        mepBloque: 'numeros'
      }
    ]
  },

  {
    id: 'porcentajes',
    mepBloque: 'numeros',
    title: 'Porcentajes',
    description: 'Conversión de porcentaje a decimal y cálculo del porcentaje de una cantidad con aplicaciones en situaciones cotidianas.',
    sections: [
      {
        title: '1. ¿Qué es un Porcentaje?',
        content: [
          '<p>Un <strong>porcentaje</strong> es una forma de expresar una cantidad como parte de 100. El símbolo es <strong>%</strong>.</p>',
          '<p>Para convertir un porcentaje a forma decimal, se divide entre 100.</p>',
          '<p>Ejemplo: 30% = 30 ÷ 100 = <strong>0,30</strong></p>'
        ]
      },
      {
        title: '2. Calcular el Porcentaje de una Cantidad',
        content: [
          '<p>Pasos:</p>',
          '<ol>' +
            '<li>Convierte el porcentaje a forma decimal (divide entre 100).</li>' +
            '<li>Multiplica ese decimal por la cantidad total.</li>' +
          '</ol>',
          '<p><strong>Ejemplo:</strong> ¿Cuánto es el 30% de 900?</p>',
          '<ul>' +
            '<li>30% = 30 ÷ 100 = 0,30</li>' +
            '<li>0,30 × 900 = <strong>270</strong></li>' +
          '</ul>',
          '<p>Resultado: El 30% de 900 es 270.</p>'
        ]
      },
      {
        title: '3. Aplicaciones Cotidianas',
        content: [
          '<p>Los porcentajes se usan en muchas situaciones de la vida diaria:</p>',
          '<ul>' +
            '<li>Descuentos en tiendas: "20% de descuento" significa pagar menos el 20% del precio.</li>' +
            '<li>Calificaciones: Obtener un 80% en un examen de 50 puntos equivale a 40 puntos.</li>' +
            '<li>Intereses bancarios: Un 5% de interés sobre ₡100 000 produce ₡5 000.</li>' +
            '<li>Estadísticas: "El 60% de los estudiantes aprobó" indica la proporción sobre el total.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  // ─── GEOMETRÍA ───────────────────────────────────────────

  {
    id: 'triangulos-y-cuadrilateros',
    mepBloque: 'geometria',
    title: 'Triángulos y Cuadriláteros',
    description: 'Elementos del triángulo y cuadrilátero, clasificación de triángulos por lados y ángulos, y tipos de cuadriláteros paralelogramos y no paralelogramos.',
    sections: [
      {
        title: '1. Elementos del Triángulo',
        content: [
          '<p>Los <strong>triángulos</strong> son polígonos compuestos por tres lados y tres ángulos.</p>',
          '<ul>' +
            '<li><strong>Vértice:</strong> Punto donde se unen dos lados del triángulo.</li>' +
            '<li><strong>Lado:</strong> Cada uno de los tres segmentos que forman el triángulo.</li>' +
            '<li><strong>Altura:</strong> Segmento perpendicular que va desde un vértice hasta el lado opuesto.</li>' +
            '<li><strong>Base:</strong> Cualquier lado del triángulo sobre el cual se apoya.</li>' +
            '<li><strong>Ángulo:</strong> Abertura formada entre dos lados del triángulo.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Clasificación de Triángulos',
        content: [
          '<p><strong>Por sus lados:</strong></p>',
          '<ul>' +
            '<li><strong>Equilátero:</strong> Sus tres lados tienen la misma medida.</li>' +
            '<li><strong>Isósceles:</strong> Posee solo dos lados de la misma medida y uno diferente.</li>' +
            '<li><strong>Escaleno:</strong> Sus tres lados tienen diferente medida.</li>' +
          '</ul>',
          '<p><strong>Por sus ángulos:</strong></p>',
          '<ul>' +
            '<li><strong>Acutángulo:</strong> Sus tres ángulos internos son agudos (menores de 90°).</li>' +
            '<li><strong>Rectángulo:</strong> Posee un ángulo recto (de exactamente 90°).</li>' +
            '<li><strong>Obtusángulo:</strong> Posee un ángulo obtuso (mayor de 90°).</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Cuadriláteros: Elementos y Tipos',
        content: [
          '<p>Un <strong>cuadrilátero</strong> es un polígono que posee cuatro lados y cuatro ángulos. Sus elementos son: lados, ángulos, vértices, altura y diagonal.</p>',
          '<p><strong>Cuadriláteros paralelogramos</strong> (lados opuestos paralelos entre sí):</p>',
          '<ul>' +
            '<li><strong>Cuadrado:</strong> Cuatro lados iguales y cuatro ángulos iguales.</li>' +
            '<li><strong>Rectángulo:</strong> Lados opuestos paralelos e iguales.</li>' +
            '<li><strong>Rombo:</strong> Cuatro lados iguales, ángulos opuestos iguales.</li>' +
            '<li><strong>Romboide:</strong> Lados opuestos paralelos e iguales, ángulos opuestos iguales.</li>' +
          '</ul>',
          '<p><strong>Cuadriláteros no paralelogramos:</strong></p>',
          '<ul>' +
            '<li><strong>Trapecio:</strong> Solo posee dos lados paralelos.</li>' +
            '<li><strong>Trapezoide:</strong> No posee lados paralelos.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: [
      {
        question: 'En un parque con forma de trapecio, cuatro puntos son el banco (B), la tienda (T), el restaurante (R) y la escuela (E). Las distancias entre ellos son: B a T = 30 m, T a R = 35 m, R a E = 50 m, E a B = 35 m. Javier recorrió de B a E y luego de E a R. Marcos recorrió de T a B y luego de B a E. Gilberto recorrió de R a T y luego de T a B. ¿Quién recorrió la mayor distancia?',
        options: ['Javier', 'Marcos', 'Gilberto', 'Los tres recorrieron la misma distancia'],
        correct: 0,
        mepBloque: 'geometria'
      },
      {
        question: 'La siguiente tabla describe tres figuras geométricas que representan parques:\nFigura I: triángulo con lados de 4 cm, 4 cm y 2,5 cm\nFigura II: rombo con lados de 4 cm pero con ángulos desiguales\nFigura III: cuadrado con todos sus lados de 4 cm y todos sus ángulos iguales\nDe acuerdo con la información anterior, ¿cuál figura corresponde a un polígono regular?',
        options: ['I', 'II', 'III', 'Ninguna de las tres figuras'],
        correct: 2,
        mepBloque: 'geometria'
      },
      {
        question: 'La siguiente tabla muestra tres triángulos que representan la forma de la superficie de terrenos:\nTriángulo I: lados de 30 m, 30 m y 40 m\nTriángulo II: lados de 60 m, 60 m y 60 m\nTriángulo III: lados de 30 m, 40 m y 60 m\nDe acuerdo con la información anterior, ¿cuál triángulo se clasifica como escaleno?',
        options: ['I', 'II', 'III', 'Los tres son escalenos'],
        correct: 2,
        mepBloque: 'geometria'
      }
    ]
  },

  {
    id: 'poligonos-y-circunferencia',
    mepBloque: 'geometria',
    title: 'Polígonos y Circunferencia',
    description: 'Polígonos regulares e irregulares con sus elementos, elementos de la circunferencia (radio, diámetro, cuerda, arco, pi) y polígono regular inscrito.',
    sections: [
      {
        title: '1. Polígonos Regulares e Irregulares',
        content: [
          '<p>Un <strong>polígono</strong> es una figura plana con lados rectos y cerrados. Una figura con líneas curvas o abiertas no se considera polígono.</p>',
          '<p><strong>Polígonos regulares:</strong> Tienen todos sus lados y ángulos iguales. Tienen simetría completa.</p>',
          '<p>Ejemplos: triángulo equilátero, cuadrado, pentágono regular, hexágono regular.</p>',
          '<p><strong>Polígonos irregulares:</strong> No tienen todos sus lados ni ángulos iguales. Tienen menor simetría o ninguna.</p>',
          '<p>Los elementos de un polígono regular son: <strong>lados, vértices, ángulos, centro, radio, apotema y diagonal</strong>.</p>'
        ]
      },
      {
        title: '2. Elementos de la Circunferencia',
        content: [
          '<p>La <strong>circunferencia</strong> es la línea curva plana cerrada cuyos puntos están a la misma distancia del centro. El <strong>círculo</strong> es la superficie formada por la circunferencia y su interior.</p>',
          '<ul>' +
            '<li><strong>Radio:</strong> Segmento desde cualquier punto de la circunferencia al centro. Mide la mitad del diámetro.</li>' +
            '<li><strong>Diámetro:</strong> Segmento que pasa por el centro. Mide el doble del radio.</li>' +
            '<li><strong>Cuerda:</strong> Segmento de recta cuyos extremos están en la circunferencia.</li>' +
            '<li><strong>Arco:</strong> Parte de la circunferencia comprendida entre dos puntos.</li>' +
            '<li><strong>Ángulo central:</strong> Ángulo cuyo vértice está en el centro de la circunferencia.</li>' +
            '<li><strong>Pi (π):</strong> Número irracional aproximadamente igual a 3,14, que representa la relación entre la longitud de la circunferencia y su diámetro.</li>' +
          '</ul>'
        ]
      },
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

  {
    id: 'cuerpos-solidos',
    mepBloque: 'geometria',
    title: 'Cuerpos Sólidos',
    description: 'Características del cubo (caras, aristas, vértices), prismas con bases y caras laterales, y cilindros como cuerpos sólidos con bases circulares.',
    sections: [
      {
        title: '1. El Cubo',
        content: [
          '<p>Un <strong>cubo</strong> es un cuerpo sólido formado por seis caras que son cuadradas.</p>',
          '<ul>' +
            '<li><strong>Caras:</strong> 6 caras cuadradas e iguales.</li>' +
            '<li><strong>Aristas:</strong> Los segmentos que unen las caras (12 en total). Cada cara está formada por cuatro aristas.</li>' +
            '<li><strong>Vértices:</strong> Los puntos donde se unen tres aristas (8 en total).</li>' +
          '</ul>',
          '<p><strong>Fórmula del volumen del cubo:</strong> V = lado³ = lado × lado × lado</p>'
        ]
      },
      {
        title: '2. El Prisma',
        content: [
          '<p>Los <strong>prismas</strong> poseen solo superficies planas y tienen las siguientes características:</p>',
          '<ul>' +
            '<li>Tienen dos bases iguales y paralelas (pueden ser triángulos, cuadriláteros u otros polígonos).</li>' +
            '<li>Todas sus caras laterales están conformadas por rectángulos.</li>' +
            '<li>La <strong>altura</strong> es la distancia perpendicular entre las dos bases.</li>' +
            '<li>El <strong>área lateral</strong> es la suma de las áreas de todas las caras laterales rectangulares.</li>' +
          '</ul>'
        ]
      },
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

  {
    id: 'perimetro-y-area',
    mepBloque: 'geometria',
    title: 'Perímetro y Área',
    description: 'Longitud de circunferencia (2πr), área del círculo (πr²), perímetro de polígonos regulares y cálculo de perímetro y área de figuras compuestas.',
    sections: [
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
      {
        title: '2. Longitud y Área del Círculo',
        content: [
          '<p>La <strong>longitud de la circunferencia</strong> es equivalente al perímetro del círculo.</p>',
          '<ul>' +
            '<li>Fórmula: C = d × π = 2 × r × π (donde d = diámetro, r = radio, π ≈ 3,14)</li>' +
          '</ul>',
          '<p>El <strong>área del círculo</strong> corresponde a la cantidad de unidades cuadradas que conforman el círculo.</p>',
          '<ul>' +
            '<li>Fórmula: A = π × r²</li>' +
          '</ul>'
        ]
      },
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
      {
        question: 'Dos terrenos tienen forma de cuadrilátero. El terreno M es un rombo con diagonales de 30 m y 20 m. El terreno P es un cuadrado con lado de 30 m. Si se requiere colocar zacate en la totalidad de la superficie de cada terreno, ¿qué cantidad de zacate requiere M comparado con P?',
        options: ['igual que la que requiere P.', 'menor que la que requiere P.', 'mayor que la que requiere P.', 'el doble de la que requiere P.'],
        correct: 1,
        mepBloque: 'geometria'
      },
      {
        question: 'La superficie de una mesa de cemento tiene forma de círculo, cuyo radio mide 55 cm. Si se requiere colocar una cinta adhesiva sobre la totalidad del borde de esa superficie, entonces la menor longitud de esa cinta que se requiere colocar es aproximadamente igual a',
        options: ['110,0 cm.', '345,4 cm.', '9498,5 cm.', '172,7 cm.'],
        correct: 1,
        mepBloque: 'geometria'
      },
      {
        question: 'La superficie de una mesa tiene forma de cuadrado, cuyo perímetro es 12 m. Si se requiere cubrir la totalidad de la superficie de la mesa con plástico adhesivo, entonces, ¿cuál es la cantidad mínima de plástico necesaria?',
        options: ['12 m²', '9 m²', '6 m²', '3 m²'],
        correct: 1,
        mepBloque: 'geometria'
      }
    ]
  },

  {
    id: 'simetria-y-plano-cartesiano',
    mepBloque: 'geometria',
    title: 'Simetría y Plano Cartesiano',
    description: 'Eje de simetría y puntos homólogos, traslaciones y rotaciones, y ubicación de puntos en el plano cartesiano con coordenadas x e y.',
    sections: [
      {
        title: '1. Eje de Simetría',
        content: [
          '<p>El <strong>eje de simetría</strong> es una línea que divide el dibujo en dos partes idénticas. La línea puede ser vertical, horizontal o diagonal.</p>',
          '<p>Cuando se traza un eje de simetría, la figura se divide en dos partes iguales. Los puntos que están a la misma distancia del eje de simetría se llaman <strong>puntos homólogos</strong>.</p>',
          '<p><strong>Puntos homólogos:</strong> Son pares de puntos que ocupan posiciones equivalentes en dos figuras relacionadas por una transformación (simetría, traslación, rotación o escala).</p>'
        ]
      },
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
      {
        title: '3. Plano Cartesiano',
        content: [
          '<p>El <strong>plano cartesiano</strong> posee un eje horizontal (eje x) y un eje vertical (eje y). El punto de intersección entre ambos ejes se llama <strong>origen (0,0)</strong>.</p>',
          '<p>Las <strong>coordenadas</strong> permiten encontrar la posición de un punto:</p>',
          '<ul>' +
            '<li>Los puntos se escriben entre paréntesis con la forma <strong>(x, y)</strong>.</li>' +
            '<li>Primero se escribe el número del eje x (horizontal) y luego el número del eje y (vertical).</li>' +
          '</ul>',
          '<p>Ejemplos de coordenadas: A=(0,7), B=(3,5), C=(4,0), D=(7,1)</p>',
          '<p>El plano cartesiano se divide en cuatro <strong>cuadrantes</strong> según el signo de las coordenadas.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Una figura simétrica tiene un eje de simetría vertical. Ocho puntos están marcados: M (esquina superior izquierda), P (izquierda media), N (esquina superior derecha), E, F (centro), G (derecha media), H y D. Los puntos homólogos entre sí respecto al eje de simetría de esa figura se identifican con las letras',
        options: ['F y H.', 'P y G.', 'M y N.', 'E y D.'],
        correct: 1,
        mepBloque: 'geometria'
      },
      {
        question: 'Una alfombra rectangular tiene tres esquinas marcadas: F en (4, 1), G en (6, 1) y H en (8, 1). En el piso hay una marca Z en las coordenadas (1, 5). La alfombra se traslada 120 cm al oeste y 160 cm al norte (cada cuadro de la cuadrícula mide 40 cm). De acuerdo con la información anterior, ¿cuál esquina de la alfombra coincide con la marca Z del piso?',
        options: ['F', 'G', 'H', 'Ninguna coincide con Z'],
        correct: 0,
        mepBloque: 'geometria'
      }
    ]
  },

  // ─── MEDIDAS ─────────────────────────────────────────────

  {
    id: 'medidas-longitud-masa-capacidad',
    mepBloque: 'medidas',
    title: 'Medidas de Longitud, Masa y Capacidad',
    description: 'Unidades del Sistema Internacional para longitud (km a mm), masa (kg, g, mg) y capacidad (L, mL), con equivalencias y conversiones entre unidades.',
    sections: [
      {
        title: '1. Medidas de Longitud',
        content: [
          '<p>La <strong>longitud</strong> es la medida de lo largo, alto o distancia entre dos puntos. La unidad principal es el <strong>metro (m)</strong>.</p>',
          '<p><strong>Múltiplos del metro</strong> (más grandes):</p>',
          '<ul>' +
            '<li>Decámetro (dam): 1 dam = 10 m</li>' +
            '<li>Hectómetro (hm): 1 hm = 100 m</li>' +
            '<li>Kilómetro (km): 1 km = 1000 m</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del metro</strong> (más pequeños):</p>',
          '<ul>' +
            '<li>Decímetro (dm): 1 m = 10 dm</li>' +
            '<li>Centímetro (cm): 1 m = 100 cm</li>' +
            '<li>Milímetro (mm): 1 m = 1000 mm</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Medidas de Masa',
        content: [
          '<p>La <strong>masa</strong> es la cantidad de materia que tiene un objeto. La unidad principal es el <strong>gramo (g)</strong>.</p>',
          '<p><strong>Múltiplos del gramo</strong>:</p>',
          '<ul>' +
            '<li>Decagramo (dag): 1 dag = 10 g</li>' +
            '<li>Hectogramo (hg): 1 hg = 100 g</li>' +
            '<li>Kilogramo (kg): 1 kg = 1000 g</li>' +
          '</ul>',
          '<p><strong>Submúltiplos del gramo</strong>:</p>',
          '<ul>' +
            '<li>Decigramo (dg): 1 g = 10 dg</li>' +
            '<li>Centigramo (cg): 1 g = 100 cg</li>' +
            '<li>Miligramo (mg): 1 g = 1000 mg</li>' +
          '</ul>',
          '<p>Dato útil: 2 medios kilogramos = 1 kilogramo; 4 cuartos de kilogramo = 1 kilogramo.</p>'
        ]
      },
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

  {
    id: 'medidas-area-y-volumen',
    mepBloque: 'medidas',
    title: 'Medidas de Área y Volumen',
    description: 'Unidades de área (m², cm², km²) y sus conversiones, medidas de volumen (m³, cm³) y la relación entre cm³ y mililitros.',
    sections: [
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

  // ─── RELACIONES Y ÁLGEBRA ────────────────────────────────

  {
    id: 'patrones-y-sucesiones',
    mepBloque: 'algebra',
    title: 'Patrones y Sucesiones',
    description: 'Reconocer la regla de cambio en secuencias numéricas o geométricas, completar términos faltantes y trabajar con patrones cíclicos.',
    sections: [
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
      {
        title: '3. Variables, Constantes y Escala',
        content: [
          '<p>Las expresiones matemáticas están formadas por:</p>',
          '<ul>' +
            '<li><strong>Constantes:</strong> Son cantidades que no cambian su valor. Ejemplo: el número 2 en "2x".</li>' +
            '<li><strong>Variables:</strong> Son cantidades que pueden cambiar. Se representan con letras (x, y, n...).</li>' +
          '</ul>',
          '<p><strong>Variable independiente:</strong> No depende de otra variable (ejemplo: cantidad de cajas de leche).</p>',
          '<p><strong>Variable dependiente:</strong> Depende del valor de la variable independiente (ejemplo: precio total que se paga).</p>',
          '<p><strong>Escala:</strong> Es la relación de proporción entre las dimensiones reales de un objeto y las del dibujo que lo representa. Ejemplo: una escala 1:2 significa que la figura es la mitad del tamaño original.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Randall fue al banco para cambiar un billete de ₡10 000 en billetes de ₡2000 y monedas de ₡500. Si él recibió la misma cantidad de billetes que de monedas, entonces, ¿cuántas monedas de ₡500 recibió Randall?',
        options: ['4', '5', '10', '8'],
        correct: 0,
        mepBloque: 'algebra'
      },
      {
        question: 'Para preparar cierta cantidad de refresco natural, se necesitan 3/4 kg de sandía (₡600 por kg), 500 g de azúcar (₡800 por kg) y 2 limones (₡100 la unidad). Si se compraron los ingredientes en el supermercado, ¿cuál fue el monto total pagado?',
        options: ['₡750', '₡1050', '₡1450', '₡850'],
        correct: 1,
        mepBloque: 'algebra'
      },
      {
        question: 'En una exposición de arte callejero, un grupo de personas colocó 20 figuras en una pared. La siguiente tabla muestra la cantidad de círculos de las primeras cuatro figuras:\nPosición 1: 4 círculos\nPosición 2: 7 círculos\nPosición 3: 10 círculos\nPosición 4: 13 círculos\nSi se mantuvo el patrón, ¿cuántos círculos tenía la figura en la posición 18?',
        options: ['49', '52', '55', '58'],
        correct: 2,
        mepBloque: 'algebra'
      },
      {
        question: 'En una escuela, un grupo de estudiantes decoró pizarras rectangulares con trozos de cinta. La siguiente tabla muestra la cantidad de trozos de cinta según la cantidad de pizarras en fila:\n1 pizarra: 4 trozos\n2 pizarras: 9 trozos\n3 pizarras: 16 trozos\n4 pizarras: 25 trozos\nSi se mantiene el patrón, ¿cuántos trozos de cinta se requieren si se forma una fila con cinco pizarras?',
        options: ['25', '36', '49', '30'],
        correct: 1,
        mepBloque: 'algebra'
      }
    ]
  },

  {
    id: 'proporcionalidad-y-regla-de-tres',
    mepBloque: 'algebra',
    title: 'Proporcionalidad Directa y Regla de Tres',
    description: 'Definición de proporcionalidad directa, cálculo del término faltante en una proporción y regla de tres simple con ejemplos de la vida real.',
    sections: [
      {
        title: '1. Proporcionalidad Directa',
        content: [
          '<p>La <strong>proporcionalidad directa</strong> ocurre cuando dos magnitudes se multiplican o dividen por el mismo número:</p>',
          '<ul>' +
            '<li>Si una magnitud <strong>aumenta</strong>, la otra también aumenta.</li>' +
            '<li>Si una magnitud <strong>disminuye</strong>, la otra también disminuye.</li>' +
          '</ul>',
          '<p>Ejemplo: La cantidad de cajas de leche compradas y el precio total pagado son magnitudes directamente proporcionales.</p>'
        ]
      },
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

  {
    id: 'ecuaciones',
    mepBloque: 'algebra',
    title: 'Resolución de Ecuaciones',
    description: 'Concepto de ecuación como igualdad con incógnita, sus términos (incógnita, coeficiente, término independiente) y resolución de ecuaciones con suma y resta por despejo.',
    sections: [
      {
        title: '1. ¿Qué es una Ecuación?',
        content: [
          '<p>Una <strong>ecuación</strong> es una igualdad entre dos expresiones algebraicas en las que aparece al menos una incógnita.</p>',
          '<p>Las <strong>incógnitas</strong> son valores desconocidos que se pueden averiguar al despejar la ecuación. Se representan con letras (x, y, n...).</p>',
          '<p>Ejemplo de ecuación: <strong>x + 5 = 7</strong></p>'
        ]
      },
      {
        title: '2. Términos de una Ecuación',
        content: [
          '<p>Los términos de una ecuación son:</p>',
          '<ul>' +
            '<li><strong>Incógnita:</strong> El valor desconocido que se busca (ejemplo: x).</li>' +
            '<li><strong>Coeficiente:</strong> El número que multiplica a la incógnita (ejemplo: en 3x, el coeficiente es 3).</li>' +
            '<li><strong>Término independiente:</strong> El número que no tiene incógnita (ejemplo: en x + 5 = 7, el 5 y el 7 son términos independientes).</li>' +
          '</ul>'
        ]
      },
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
      {
        question: 'Juan conduce un taxi cuya ocupación máxima es de cinco pasajeros y diariamente realiza distinta cantidad de viajes. La rapidez del taxi en cada viaje varía entre 0 km/h y 80 km/h. De acuerdo con la información anterior, una cantidad constante corresponde a la',
        options: ['ocupación máxima del taxi.', 'rapidez del taxi en cada viaje.', 'cantidad de viajes realizados en los distintos días.', 'distancia recorrida en cada viaje.'],
        correct: 0,
        mepBloque: 'algebra'
      },
      {
        question: 'En una feria del agricultor, se vende piña picada en tres puestos (R, S y T):\n• En R cada envase cuesta ₡950.\n• En S cada envase cuesta ₡1000 con 10 % de descuento.\n• En T cada envase cuesta ₡1200, con 20 % de descuento si se compran dos o más.\nSi Elena quiere comprar seis envases, ¿en cuál puesto pagaría la menor cantidad?',
        options: ['R', 'S', 'T', 'Los tres puestos tienen el mismo precio'],
        correct: 1,
        mepBloque: 'algebra'
      },
      {
        question: 'En una actividad cultural, Fernando trabajó vendiendo entradas. Por cada 4 horas de trabajo recibió ₡8800. Si al finalizar recibió un pago total de ₡35 200, ¿cuántas horas trabajó en total?',
        options: ['12', '16', '20', '24'],
        correct: 1,
        mepBloque: 'algebra'
      },
      {
        question: 'Una biblioteca tiene varios estantes y en cada estante hay igual cantidad de libros. En la siguiente expresión, cada ▲ representa la cantidad de libros que hay en cada estante:\n▲ + ▲ + 18 = 60\nDe acuerdo con la información anterior, ¿cuántos libros hay en cada estante de esa biblioteca?',
        options: ['18', '21', '42', '39'],
        correct: 1,
        mepBloque: 'algebra'
      },
      {
        question: 'Una caja contiene varias bolsas y cada una de estas bolsas contiene la misma cantidad de bolitas de plástico. En la siguiente ecuación, «c» representa la cantidad de bolitas que hay en cada bolsa:\n48 ÷ c = 6\nDe acuerdo con la información anterior, ¿cuántas bolitas hay en cada bolsa?',
        options: ['8', '42', '288', '54'],
        correct: 0,
        mepBloque: 'algebra'
      }
    ]
  },

  // ─── ESTADÍSTICA Y PROBABILIDAD ──────────────────────────

  {
    id: 'tablas-y-graficos',
    mepBloque: 'estadistica',
    title: 'Tablas de Frecuencias y Gráficos de Barras',
    description: 'Organizar datos en tablas de frecuencias, representarlos con gráficos de barras y leer e interpretar los gráficos resultantes.',
    sections: [
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
      {
        title: '2. Gráficos de Barras',
        content: [
          '<p>Los <strong>gráficos de barras</strong> representan los datos de una tabla mediante rectángulos (barras) colocados uno al lado del otro.</p>',
          '<ul>' +
            '<li>La <strong>altura</strong> de cada barra indica la frecuencia con que aparece cada dato.</li>' +
            '<li>El <strong>eje horizontal</strong> (eje x) muestra las categorías o grupos.</li>' +
            '<li>El <strong>eje vertical</strong> (eje y) muestra la escala de frecuencias.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Lectura e Interpretación de Gráficos',
        content: [
          '<p>Para leer e interpretar un gráfico de barras correctamente:</p>',
          '<ol>' +
            '<li>Lee el <strong>título</strong> del gráfico para entender qué datos representa.</li>' +
            '<li>Identifica las <strong>categorías</strong> en el eje horizontal.</li>' +
            '<li>Lee la <strong>escala</strong> en el eje vertical.</li>' +
            '<li>Observa la <strong>altura</strong> de cada barra para determinar la frecuencia.</li>' +
            '<li>Compara las barras para sacar conclusiones (¿cuál es mayor?, ¿cuál es menor?).</li>' +
          '</ol>'
        ]
      }
    ],
    quiz: [
      {
        question: 'La siguiente tabla muestra el tiempo, en minutos, que tardaron en llegar a la escuela seis estudiantes:\nIleana: 34, Liseth: 80, Gabriela: 55, Joaquín: 76, Rodolfo: 25, Alejandro: 68\nDe acuerdo con la información anterior, ¿cuál opción corresponde a la operación que permite calcular la mayor diferencia en minutos de esos tiempos?',
        options: ['68 – 34', '76 – 55', '80 – 25', '80 – 34'],
        correct: 2,
        mepBloque: 'estadistica'
      },
      {
        question: 'Una empresa quiere conocer la opinión de los clientes de una cafetería sobre la calidad del servicio. Para ello, se seleccionan al azar 200 clientes de esa cafetería y se les aplica una encuesta. De acuerdo con la información anterior, la muestra de ese estudio corresponde a',
        options: ['todos los clientes de la cafetería.', 'los clientes de la cafetería que fueron seleccionados al azar.', 'la opinión que tienen los clientes sobre la calidad de ese servicio.', 'el personal del servicio al cliente de la cafetería.'],
        correct: 1,
        mepBloque: 'estadistica'
      }
    ]
  },

  {
    id: 'medidas-estadisticas',
    mepBloque: 'estadistica',
    title: 'Medidas Estadísticas',
    description: 'Moda como valor más frecuente, máximo y mínimo de un conjunto de datos, recorrido (máximo menos mínimo) y frecuencia absoluta y porcentual.',
    sections: [
      {
        title: '1. Moda, Máximo y Mínimo',
        content: [
          '<p>Las <strong>medidas estadísticas</strong> resumen información sobre un conjunto de datos.</p>',
          '<ul>' +
            '<li><strong>Moda:</strong> El valor que más se repite en un conjunto de datos. Ejemplo: en {23, 15, 18, 15, 15, 13, 18} la moda es <strong>15</strong> (aparece 3 veces).</li>' +
            '<li><strong>Máximo:</strong> El valor más alto del conjunto. Ejemplo: <strong>23</strong>.</li>' +
            '<li><strong>Mínimo:</strong> El valor más bajo del conjunto. Ejemplo: <strong>13</strong>.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Recorrido',
        content: [
          '<p>El <strong>recorrido</strong> (también llamado rango) se calcula restando el mínimo al máximo:</p>',
          '<p><strong>Recorrido = Máximo − Mínimo</strong></p>',
          '<p>Ejemplo: Con los datos {23, 15, 18, 15, 15, 13, 18}:</p>',
          '<ul>' +
            '<li>Máximo = 23, Mínimo = 13</li>' +
            '<li>Recorrido = 23 − 13 = <strong>10</strong></li>' +
          '</ul>',
          '<p>El recorrido indica qué tan dispersos están los datos entre sí.</p>'
        ]
      },
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

  {
    id: 'probabilidad-eventos-aleatorios',
    mepBloque: 'estadistica',
    title: 'Probabilidad: Eventos Aleatorios',
    description: 'Tipos de eventos: seguros (ocurren con certeza), probables (pueden ocurrir) e imposibles (no pueden ocurrir), y concepto de experimento aleatorio.',
    sections: [
      {
        title: '1. Experimentos Aleatorios',
        content: [
          '<p>Un <strong>experimento aleatorio</strong> es aquel cuyo resultado no se puede predecir con certeza antes de realizarlo.</p>',
          '<p>Los resultados de los experimentos aleatorios se pueden clasificar en tres grupos:</p>',
          '<ul>' +
            '<li>Eventos <strong>seguros</strong></li>' +
            '<li>Eventos <strong>probables</strong></li>' +
            '<li>Eventos <strong>imposibles</strong></li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Tipos de Eventos',
        content: [
          '<p><strong>Evento seguro:</strong> Son aquellos que van a ocurrir con total seguridad. La probabilidad es 1 (o 100%).</p>',
          '<p>Ejemplo: Si una caja contiene únicamente lápices verdes, es seguro que el niño saque un lápiz verde.</p>',
          '<p><strong>Evento probable:</strong> Son aquellos que tienen posibilidades de suceder, pero no es seguro que ocurran. La probabilidad está entre 0 y 1.</p>',
          '<p>Ejemplo: Si la caja tiene lápices de varios colores, es probable (pero no seguro) sacar un lápiz amarillo.</p>',
          '<p><strong>Evento imposible:</strong> Son aquellos que no pueden ocurrir bajo ninguna circunstancia. La probabilidad es 0.</p>',
          '<p>Ejemplo: Si no hay lápices azules en la caja, es imposible que el niño saque uno azul.</p>'
        ]
      },
      {
        title: '3. Aplicaciones de la Probabilidad',
        content: [
          '<p>La probabilidad se usa en muchas situaciones de la vida diaria:</p>',
          '<ul>' +
            '<li>Lanzar una moneda: puede caer cara o sello (dos resultados igualmente probables).</li>' +
            '<li>Lanzar un dado: puede salir cualquier número del 1 al 6.</li>' +
            '<li>Pronóstico del tiempo: "80% de probabilidad de lluvia" indica un evento probable.</li>' +
            '<li>Juegos de azar: se usan probabilidades para determinar las posibilidades de ganar.</li>' +
          '</ul>',
          '<p>Comprender la probabilidad ayuda a tomar mejores decisiones en situaciones de incertidumbre.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'En una caja hay 28 lápices, los cuales se diferencian solo por su color. Seis de esos lápices son azules, siete son rojos, ocho son verdes y el resto amarillos. Si se escoge al azar un lápiz de esa caja, entonces el evento «obtener un lápiz amarillo» es igualmente probable que el evento «obtener un lápiz»',
        options: ['verde.', 'azul.', 'rojo.', 'azul o verde.'],
        correct: 2,
        mepBloque: 'estadistica'
      }
    ]
  }

];
