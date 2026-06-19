// src/data/matematicasExtraExams.js
// Pre-built MEP extra exam question sets for Matemáticas.
// Source: documents/AI Geneterated exams/Matematicas_100_Preguntas_Formato_MEP.md
// Bloques: numeros (Q1-22), geometria (Q23-42), medidas (Q43-60), algebra (Q61-80), estadistica (Q81-100).
// No stimulus/source fields — most problems fuse setup+question into one
// sentence; 5 questions (Q2, Q63, Q64, Q86, Q98) had an embedded markdown
// table hand-transcribed into readable text.
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

// All 100 source questions, indexed Q1..Q100 by array position (1-based).
// Index 0 is null so Q[N] === question N.
const Q = [
  null,
  // Q1
  {
    question: "Observe el siguiente número: 5 207 481 936. ¿Cuál es la forma correcta de leer este número?",
    options: [
      "cinco mil doscientos siete millones cuatrocientos ochenta y un mil novecientos treinta y seis.",
      "cinco millones doscientos siete mil cuatrocientos ochenta y uno.",
      "quinientos veinte millones setecientos cuarenta y ocho mil novecientos treinta y seis.",
    ],
    correct: 0,
    mepBloque: "numeros",
  },
  // Q2
  {
    question: "Observe la siguiente tabla de valor posicional: C: 2, D: 4, U: 5, Décimas: 3, Centésimas: 7, Milésimas: 8. ¿Cuál es la notación desarrollada del número 245,378?",
    options: [
      "200 + 40 + 5 + 3/10 + 7/100 + 8/1000",
      "200 + 40 + 5 + 0,3 + 0,07 + 0,008",
      "200 + 45 + 0,3 + 0,7 + 0,8",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q3
  {
    question: "Compare los siguientes números decimales: 6,45 y 6,054. ¿Cuál opción es verdadera?",
    options: [
      "6,45 < 6,054",
      "6,45 > 6,054",
      "6,45 = 6,054",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q4
  {
    question: "Compare las siguientes fracciones: 5/6 y 7/9. ¿Cuál opción es verdadera?",
    options: [
      "5/6 > 7/9",
      "5/6 < 7/9",
      "5/6 = 7/9",
    ],
    correct: 0,
    mepBloque: "numeros",
  },
  // Q5
  {
    question: "Observe la siguiente serie de múltiplos del número 7. ¿Cuáles son los primeros ocho múltiplos de 7, comenzando en cero?",
    options: [
      "{0, 7, 14, 21, 28, 35, 42, 50}",
      "{0, 7, 14, 21, 28, 35, 42, 49}",
      "{7, 14, 21, 28, 35, 42, 49, 56}",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q6
  {
    question: "Determine todos los divisores del número 36. ¿Cuántos divisores tiene el número 36?",
    options: [
      "7 divisores",
      "8 divisores",
      "9 divisores",
    ],
    correct: 2,
    mepBloque: "numeros",
  },
  // Q7
  {
    question: "Considere el número 47. ¿Por qué se afirma que 47 es un número primo?",
    options: [
      "Porque solo es divisible entre 1 y entre sí mismo.",
      "Porque es divisible entre 1, 47 y otros tres números más.",
      "Porque termina en un número impar.",
    ],
    correct: 0,
    mepBloque: "numeros",
  },
  // Q8
  {
    question: "Observe el número 432. ¿Es el número 432 divisible entre 3? Justifique con la regla de divisibilidad.",
    options: [
      "Sí, porque la suma de sus cifras (4+3+2=9) es múltiplo de 3.",
      "No, porque la suma de sus cifras no es múltiplo de 3.",
      "Sí, porque el número termina en una cifra par.",
    ],
    correct: 0,
    mepBloque: "numeros",
  },
  // Q9
  {
    question: "Una fábrica de telas produce 24,5 metros de tela por hora. Si la fábrica trabaja durante 3,2 horas seguidas, ¿cuántos metros de tela produce en total?",
    options: [
      "27,7 m",
      "75,4 m",
      "78,4 m",
    ],
    correct: 2,
    mepBloque: "numeros",
  },
  // Q10
  {
    question: "Un grupo de ocho amigos repartió en partes iguales una cuenta de restaurante de ₡156,80 (en miles de colones). Si cada uno paga la misma cantidad, ¿cuánto le corresponde pagar a cada persona, en miles de colones?",
    options: [
      "18,6",
      "19,6",
      "21,6",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q11
  {
    question: "Una distancia de 84 km debe recorrerse en tramos de 2,4 km cada uno. ¿En cuántos tramos se puede dividir esa distancia?",
    options: [
      "30 tramos",
      "35 tramos",
      "38 tramos",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q12
  {
    question: "Observe la siguiente multiplicación abreviada: 3,45 × 100. ¿Cuál es el resultado correcto?",
    options: [
      "34,5",
      "345",
      "3 450",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q13
  {
    question: "Observe la siguiente división abreviada: 670 ÷ 1000. ¿Cuál es el resultado correcto?",
    options: [
      "6,7",
      "0,67",
      "0,067",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q14
  {
    question: "Calcule la siguiente potencia: 5³. ¿Cuál es el resultado?",
    options: [
      "15",
      "25",
      "125",
    ],
    correct: 2,
    mepBloque: "numeros",
  },
  // Q15
  {
    question: "Simplifique la siguiente fracción a su mínima expresión: 24/36. ¿Cuál es la fracción simplificada?",
    options: [
      "4/6",
      "2/3",
      "3/4",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q16
  {
    question: "Calcule la siguiente suma de fracciones con distinto denominador: 1/4 + 1/6. ¿Cuál es el resultado?",
    options: [
      "2/10",
      "5/12",
      "1/2",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q17
  {
    question: "Calcule la siguiente multiplicación de fracciones: 2/3 × 3/5. ¿Cuál es el resultado?",
    options: [
      "6/15",
      "2/5",
      "5/8",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q18
  {
    question: "Observe la siguiente fracción impropia: 17/5. ¿Cuál es el número mixto equivalente?",
    options: [
      "2 entero y 7/5",
      "3 entero y 2/5",
      "4 entero y 1/5",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q19
  {
    question: "Una receta indica que se debe usar 0,75 de una taza de azúcar. ¿Cuál fracción representa correctamente esa cantidad decimal?",
    options: [
      "7/10",
      "1/4",
      "3/4",
    ],
    correct: 2,
    mepBloque: "numeros",
  },
  // Q20
  {
    question: "Redondee el número 7,468 a la centésima más cercana. ¿Cuál es el resultado correcto?",
    options: [
      "7,46",
      "7,47",
      "7,5",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q21
  {
    question: "Observe el siguiente número decimal ubicado en una recta numérica entre 0,3 y 0,4. ¿Cuál de las siguientes opciones representa un número que se ubica entre 0,3 y 0,4?",
    options: [
      "0,25",
      "0,35",
      "0,45",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q22
  {
    question: "Considere las fracciones 1/3 y 1/2. ¿Cuál de las siguientes fracciones se ubica entre 1/3 y 1/2?",
    options: [
      "1/6",
      "5/12",
      "2/3",
    ],
    correct: 1,
    mepBloque: "numeros",
  },
  // Q23
  {
    question: "Un terreno tiene forma triangular con una base de 18 m y una altura de 10 m. ¿Cuál es el área de ese terreno?",
    options: [
      "28 m²",
      "80 m²",
      "90 m²",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q24
  {
    question: "Un salón de clases tiene forma rectangular. Su largo mide 14 m y su ancho mide 9 m. ¿Cuál es el área del salón de clases?",
    options: [
      "23 m²",
      "63 m²",
      "126 m²",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q25
  {
    question: "Un mosaico decorativo tiene forma cuadrada con un lado de 12 cm. ¿Cuál es el área del mosaico?",
    options: [
      "24 cm²",
      "48 cm²",
      "144 cm²",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q26
  {
    question: "Un terreno rectangular tiene 45 m de largo y 30 m de ancho. Se desea cercarlo completamente con malla. ¿Cuántos metros de malla se necesitan para cercar todo el terreno?",
    options: [
      "75 m",
      "150 m",
      "1 350 m",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q27
  {
    question: "Una señal de tránsito tiene forma de romboide con una base de 22 cm y una altura de 9,5 cm. ¿Cuál es el área de la señal de tránsito?",
    options: [
      "31,5 cm²",
      "209 cm²",
      "220 cm²",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q28
  {
    question: "Una pared tiene forma de trapecio con una base mayor de 14 m, una base menor de 8 m y una altura de 6 m. ¿Cuál es el área de la pared?",
    options: [
      "28 m²",
      "44 m²",
      "66 m²",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q29
  {
    question: "Una cometa tiene forma de rombo con una diagonal mayor de 36 cm y una diagonal menor de 20 cm. ¿Cuál es el área de la cometa?",
    options: [
      "56 cm²",
      "180 cm²",
      "360 cm²",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q30
  {
    question: "Una mesa circular tiene un diámetro de 12 dm. ¿Cuál es la longitud de la circunferencia de la mesa? (use π = 3,14)",
    options: [
      "18,84 dm",
      "37,68 dm",
      "75,36 dm",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q31
  {
    question: "Un estanque circular tiene un radio de 10 m. ¿Cuál es el área del estanque? (use π = 3,14)",
    options: [
      "31,4 m²",
      "314 m²",
      "628 m²",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q32
  {
    question: "Don Marco posee un terreno con forma de hexágono regular. Cada lado mide 9 m. Desea cercarlo con tres líneas de alambre. ¿Cuántos metros de alambre necesita en total?",
    options: [
      "27 m",
      "54 m",
      "162 m",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q33
  {
    question: "Una figura compuesta está formada por un rectángulo de 10 cm de largo por 6 cm de ancho, unido a un triángulo con base de 10 cm y altura de 4 cm. ¿Cuál es el área total de la figura compuesta?",
    options: [
      "60 cm²",
      "80 cm²",
      "100 cm²",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q34
  {
    question: "Un círculo tiene un radio de 5 m. ¿Cuál es la longitud de su circunferencia? (use π = 3,14)",
    options: [
      "15,7 m",
      "31,4 m",
      "78,5 m",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q35
  {
    question: "Observe las siguientes medidas de los lados de tres triángulos: - Triángulo 1: 8 cm, 8 cm y 8 cm - Triángulo 2: 7 cm, 7 cm y 5 cm - Triángulo 3: 4 cm, 6 cm y 9 cm ¿Cuál de los triángulos se clasifica como escaleno?",
    options: [
      "Triángulo 1",
      "Triángulo 2",
      "Triángulo 3",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q36
  {
    question: "Observe un triángulo que posee un ángulo interno de 95°. ¿Cómo se clasifica este triángulo según la medida de su ángulo?",
    options: [
      "acutángulo",
      "rectángulo",
      "obtusángulo",
    ],
    correct: 2,
    mepBloque: "geometria",
  },
  // Q37
  {
    question: "Un cubo es un cuerpo sólido geométrico. ¿Cuántas caras, vértices y aristas tiene un cubo, respectivamente?",
    options: [
      "6 caras, 6 vértices, 8 aristas",
      "6 caras, 8 vértices, 12 aristas",
      "8 caras, 6 vértices, 12 aristas",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q38
  {
    question: "Una pirámide tiene base cuadrangular. ¿Cuántas caras tiene esa pirámide en total, incluyendo la base?",
    options: [
      "4 caras",
      "5 caras",
      "6 caras",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q39
  {
    question: "Un triángulo equilátero tiene un lado que mide 14 cm. ¿Cuál es el perímetro de ese triángulo?",
    options: [
      "28 cm",
      "42 cm",
      "56 cm",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q40
  {
    question: "Observe una figura geométrica trazada en un plano cartesiano que se traslada 4 unidades hacia la derecha y 2 unidades hacia arriba. Si uno de los vértices originales se ubica en el punto (1, 3), ¿en qué punto se ubicará ese mismo vértice después de la traslación?",
    options: [
      "(3, 1)",
      "(5, 5)",
      "(5, 1)",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q41
  {
    question: "Observe una figura simétrica dividida por una línea vertical que pasa exactamente por su centro, de modo que ambas mitades son idénticas. ¿Cómo se llama la línea que divide la figura en dos partes idénticas?",
    options: [
      "diagonal",
      "eje de simetría",
      "radio",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q42
  {
    question: "Un radio de una circunferencia mide 8 cm. ¿Cuánto mide el diámetro de esa misma circunferencia?",
    options: [
      "4 cm",
      "16 cm",
      "24 cm",
    ],
    correct: 1,
    mepBloque: "geometria",
  },
  // Q43
  {
    question: "Para fabricar una mesa de vidrio se necesitan 75 000 centímetros cuadrados de material. ¿A cuántos metros cuadrados equivale esa cantidad?",
    options: [
      "0,75 m²",
      "75 m²",
      "7,5 m²",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q44
  {
    question: "Una finca tiene un área de 2,8 hectómetros cuadrados. ¿A cuántos metros cuadrados equivale esa área?",
    options: [
      "280 m²",
      "2 800 m²",
      "28 000 m²",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q45
  {
    question: "En una mañana fría, la temperatura registrada en una estación meteorológica fue de 35 °C. ¿A cuántos grados Fahrenheit equivale esa temperatura?",
    options: [
      "67 °F",
      "85 °F",
      "95 °F",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q46
  {
    question: "En una ciudad, el termómetro marcó 86 °F durante la tarde. ¿A cuántos grados Celsius equivale esa temperatura?",
    options: [
      "24 °C",
      "30 °C",
      "36 °C",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q47
  {
    question: "Una estudiante entró a una clase de natación a las 8:15 a.m. y salió 45 minutos antes de las 10:00 a.m. ¿Cuántos segundos estuvo en la clase de natación?",
    options: [
      "1 800 segundos",
      "3 600 segundos",
      "5 400 segundos",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q48
  {
    question: "Erick practica deporte todos los días: corre 50 minutos, nada 1 200 segundos y hace yoga durante 0,25 horas. ¿Cuántos minutos en total dedica Erick al ejercicio en una semana?",
    options: [
      "525 minutos",
      "595 minutos",
      "630 minutos",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q49
  {
    question: "Una piscina olímpica tiene una capacidad de 36 metros cúbicos de agua. ¿Cuántos litros de agua le caben a la piscina?",
    options: [
      "360 litros",
      "3 600 litros",
      "36 000 litros",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q50
  {
    question: "Un tanque de agua tiene una capacidad de 18 decalitros. ¿A cuántos litros equivale esa capacidad?",
    options: [
      "1,8 litros",
      "180 litros",
      "1 800 litros",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q51
  {
    question: "Un saco de arroz pesa 25 kg. Durante la semana se utilizaron 1 200 decagramos de su contenido. ¿Cuántos gramos de arroz quedan en el saco?",
    options: [
      "1 300 gramos",
      "12 000 gramos",
      "13 000 gramos",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q52
  {
    question: "Un empresario necesita comprar dólares en el banco para pagar un pedido. Si necesita $850 a un tipo de cambio de venta de ₡620 por dólar, ¿cuántos colones debe entregar?",
    options: [
      "437 000 colones",
      "527 000 colones",
      "617 000 colones",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q53
  {
    question: "Marcela desea comprar un televisor que cuesta ₡145 000. Si paga con 8 billetes de ₡20 000 y 2 billetes de ₡5 000, ¿cuánto dinero le deben dar de vuelto?",
    options: [
      "15 000 colones",
      "20 000 colones",
      "25 000 colones",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q54
  {
    question: "Daniela desea comprar una refrigeradora que cuesta ₡256 400. Le entrega a la cajera 6 billetes de ₡20 000, 10 billetes de ₡10 000 y 4 billetes de ₡5 000 en efectivo, y el resto lo paga con tarjeta. ¿Cuánto dinero debe pagar con la tarjeta?",
    options: [
      "6 400 colones",
      "16 400 colones",
      "26 400 colones",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q55
  {
    question: "Una carretera tiene una longitud de 4 500 metros. ¿A cuántos kilómetros equivale esa longitud?",
    options: [
      "0,45 km",
      "4,5 km",
      "45 km",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q56
  {
    question: "Un paquete de azúcar pesa 3,2 kg. ¿A cuántos gramos equivale ese peso?",
    options: [
      "32 gramos",
      "320 gramos",
      "3 200 gramos",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q57
  {
    question: "Un entrenamiento de fútbol dura 3 horas y media. ¿A cuántos minutos equivale esa duración?",
    options: [
      "195 minutos",
      "210 minutos",
      "215 minutos",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q58
  {
    question: "Un tanque industrial tiene una capacidad de 2,5 hectolitros. ¿A cuántos litros equivale esa capacidad?",
    options: [
      "25 litros",
      "250 litros",
      "2 500 litros",
    ],
    correct: 1,
    mepBloque: "medidas",
  },
  // Q59
  {
    question: "Una tienda vende café en bolsas de 750 gramos. Un cliente compra 4 bolsas. ¿Cuántos kilogramos de café compró en total?",
    options: [
      "0,3 kg",
      "1,75 kg",
      "3 kg",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q60
  {
    question: "Un autobús recorre 0,6 hm más 35 dam en una sola dirección. ¿Cuántos metros recorrió en total?",
    options: [
      "95 m",
      "350 m",
      "410 m",
    ],
    correct: 2,
    mepBloque: "medidas",
  },
  // Q61
  {
    question: "Observe la siguiente sucesión numérica: 5 – 11 – 17 – 23 – ___ ¿Cuál número completa la sucesión anterior?",
    options: [
      "26",
      "28",
      "29",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q62
  {
    question: "Observe la siguiente sucesión de figuras formadas por cuadrados perfectos de puntos: 1 – 4 – 9 – ___ ¿Cuántos puntos tendrá la siguiente figura de la sucesión?",
    options: [
      "12",
      "13",
      "16",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q63
  {
    question: "Observe la siguiente tabla: Bolsa 1: 6 galletas. Bolsa 2: 12 galletas. Bolsa 3: ?. Bolsa 4: 24 galletas. ¿Cuál número completa la tabla anterior?",
    options: [
      "16",
      "18",
      "20",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q64
  {
    question: "Observe la siguiente tabla: Unidades 1: ₡450. Unidades 2: ?. Unidades 3: ₡1 350. ¿Cuál número completa la tabla anterior?",
    options: [
      "800",
      "900",
      "1 000",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q65
  {
    question: "Observe la siguiente sucesión numérica descendente: 100 – 91 – 82 – 73 – ___ ¿Cuál número completa la sucesión anterior?",
    options: [
      "70",
      "67",
      "64",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q66
  {
    question: "Observe la siguiente expresión algebraica: A = π × r² ¿Cómo se le llama al símbolo π en esta expresión?",
    options: [
      "variable",
      "constante",
      "resultado",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q67
  {
    question: "Un mapa fue dibujado con una escala de 1:50. Si la distancia entre dos puntos en el mapa mide 8 cm, ¿cuál es la distancia real entre esos dos puntos?",
    options: [
      "40 cm",
      "58 cm",
      "400 cm",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q68
  {
    question: "Si por la venta de 5 kg de naranjas se reciben ₡2 500, ¿cuánto dinero se recibirá por la venta de 12 kg de naranjas?",
    options: [
      "₡4 800",
      "₡5 500",
      "₡6 000",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q69
  {
    question: "Seis obreros terminan de construir un muro en 10 días. Si se contratan 4 obreros para realizar el mismo trabajo, ¿en cuántos días lo terminarán, suponiendo que todos trabajan al mismo ritmo?",
    options: [
      "6,7 días",
      "15 días",
      "24 días",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q70
  {
    question: "Si 3 kg de arroz cuestan ₡1 800, ¿cuánto costarán 7 kg del mismo arroz?",
    options: [
      "₡2 600",
      "₡3 600",
      "₡4 200",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q71
  {
    question: "En un colegio se aplicó un examen a 100 estudiantes, de los cuales 35 reprobaron. ¿Qué porcentaje de los estudiantes aprobó el examen?",
    options: [
      "35%",
      "55%",
      "65%",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q72
  {
    question: "Un electrodoméstico cuesta ₡45 000. La tienda ofrece un descuento del 12% por pago en efectivo. ¿A cuánto equivale el descuento?",
    options: [
      "₡3 600",
      "₡4 800",
      "₡5 400",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q73
  {
    question: "Un libro tiene 150 páginas en total. Camila ya ha leído 90 páginas. ¿Qué porcentaje del libro le falta por leer?",
    options: [
      "25%",
      "35%",
      "40%",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q74
  {
    question: "Un comerciante aumentó el precio de un producto que costaba ₡60 000 en un 15%. ¿Cuál es el nuevo precio del producto?",
    options: [
      "₡60 900",
      "₡63 000",
      "₡69 000",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q75
  {
    question: "¿Cuál es la solución de la siguiente ecuación? 8 + x = 35",
    options: [
      "x = 25",
      "x = 27",
      "x = 43",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q76
  {
    question: "¿Cuál es la solución de la siguiente ecuación? 56 – y = 19",
    options: [
      "y = 27",
      "y = 37",
      "y = 75",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q77
  {
    question: "¿Cuál es la solución de la siguiente ecuación? 3x = 81",
    options: [
      "x = 24",
      "x = 27",
      "x = 30",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q78
  {
    question: "¿Cuál es la solución de la siguiente ecuación? x ÷ 4 = 12",
    options: [
      "x = 3",
      "x = 16",
      "x = 48",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q79
  {
    question: "Un hermano mayor tiene el triple de la edad de su hermano menor. Si la suma de ambas edades es 64 años, ¿cuántos años tiene el hermano mayor?",
    options: [
      "16 años",
      "32 años",
      "48 años",
    ],
    correct: 2,
    mepBloque: "algebra",
  },
  // Q80
  {
    question: "Observe la siguiente expresión algebraica: P = 2 × (l + a) Si en esta fórmula l representa el largo y a representa el ancho de un rectángulo, ¿qué representa la letra P?",
    options: [
      "el área del rectángulo",
      "el perímetro del rectángulo",
      "la diagonal del rectángulo",
    ],
    correct: 1,
    mepBloque: "algebra",
  },
  // Q81
  {
    question: "A continuación se presentan las edades de un grupo de estudiantes: 7 – 8 – 8 – 9 – 7 – 8 – 10 – 8 – 9 – 7 – 8 – 9 ¿Cuál es la moda de este grupo de datos?",
    options: [
      "7",
      "8",
      "9",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q82
  {
    question: "En una encuesta realizada a 25 estudiantes sobre su deporte favorito, 10 de ellos eligieron fútbol. ¿Cuál es la frecuencia porcentual de los estudiantes que eligieron fútbol?",
    options: [
      "25%",
      "40%",
      "50%",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q83
  {
    question: "En una encuesta realizada a 50 estudiantes sobre su deporte favorito, 15 eligieron baloncesto. ¿Cuál es la frecuencia porcentual de los estudiantes que eligieron baloncesto?",
    options: [
      "15%",
      "30%",
      "35%",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q84
  {
    question: "Las calificaciones obtenidas por un estudiante en cinco exámenes fueron: 12, 15, 9, 18 y 11. ¿Cuál es la media aritmética de esas calificaciones?",
    options: [
      "11",
      "12",
      "13",
    ],
    correct: 2,
    mepBloque: "estadistica",
  },
  // Q85
  {
    question: "Observe el siguiente conjunto de datos correspondientes a las temperaturas registradas durante una semana: 23 – 45 – 12 – 67 – 34 – 8 – 56 ¿Cuáles son el valor máximo y el valor mínimo de este conjunto de datos?",
    options: [
      "máximo: 56, mínimo: 12",
      "máximo: 67, mínimo: 8",
      "máximo: 67, mínimo: 12",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q86
  {
    question: "Observe la siguiente tabla de frecuencias sobre la cantidad de niñas y niños en tres secciones de sexto grado: Sección A: 15 niñas y 12 niños. Sección B: 14 niñas y 19 niños. Sección C: 16 niñas y 13 niños. Según la tabla anterior, ¿cuál sección posee la mayor cantidad total de estudiantes?",
    options: [
      "Sección A",
      "Sección B",
      "Sección C",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q87
  {
    question: "Una bolsa contiene 4 canicas rojas, 3 canicas azules y 2 canicas verdes. Si se saca una canica al azar, ¿cuál es la probabilidad de que sea verde?",
    options: [
      "2/4",
      "3/9",
      "2/9",
    ],
    correct: 2,
    mepBloque: "estadistica",
  },
  // Q88
  {
    question: "Se lanza un dado de seis caras numerado del 1 al 6. ¿Cuál es la probabilidad de obtener un número par?",
    options: [
      "1/6",
      "1/3",
      "1/2",
    ],
    correct: 2,
    mepBloque: "estadistica",
  },
  // Q89
  {
    question: "En una encuesta realizada a 40 estudiantes sobre su deporte favorito, se obtuvieron los siguientes resultados: fútbol 18, baloncesto 12 y voleibol 10. ¿Cuál es la frecuencia porcentual del deporte fútbol?",
    options: [
      "35%",
      "45%",
      "50%",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q90
  {
    question: "Observe el siguiente conjunto de temperaturas registradas durante una semana, en grados Celsius: 24 – 26 – 23 – 27 – 25 – 22 – 28 ¿Cuál es la media aritmética de las temperaturas?",
    options: [
      "24 °C",
      "25 °C",
      "26 °C",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q91
  {
    question: "Observe el siguiente conjunto de datos: 5 – 7 – 7 – 8 – 9 – 7 – 10 – 6 ¿Cuál es la mediana de este conjunto de datos, ordenándolos de menor a mayor?",
    options: [
      "6",
      "7",
      "8",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q92
  {
    question: "Una ruleta está dividida en 8 espacios iguales, de los cuales 3 son rojos. ¿Cuál es la probabilidad de que la ruleta caiga en un espacio que no sea rojo?",
    options: [
      "3/8",
      "5/8",
      "6/8",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q93
  {
    question: "Una caja contiene 5 bolas numeradas del 1 al 5. ¿Cuál es la probabilidad de extraer una bola con un número impar?",
    options: [
      "2/5",
      "3/5",
      "4/5",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q94
  {
    question: "Observe el siguiente gráfico de barras con el número de libros leídos por un grupo de estudiantes durante el primer trimestre, organizados por mes: [gráfico de barras: enero 12 libros, febrero 18 libros, marzo 9 libros] Según el gráfico, ¿en qué mes se leyeron más libros?",
    options: [
      "enero",
      "febrero",
      "marzo",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q95
  {
    question: "Una tabla de frecuencias muestra el color de mochila favorito de 30 estudiantes: azul 12, rojo 9 y verde 9. ¿Cuál es la frecuencia porcentual del color azul?",
    options: [
      "30%",
      "35%",
      "40%",
    ],
    correct: 2,
    mepBloque: "estadistica",
  },
  // Q96
  {
    question: "Observe el siguiente conjunto de calificaciones de un grupo de estudiantes en una prueba: 80 – 95 – 70 – 85 – 90 – 75 – 100 ¿Cuál es el rango (diferencia entre el valor máximo y el mínimo) de este conjunto de datos?",
    options: [
      "20",
      "25",
      "30",
    ],
    correct: 2,
    mepBloque: "estadistica",
  },
  // Q97
  {
    question: "En una urna hay 6 fichas azules y 4 fichas amarillas. ¿Cuál es la probabilidad de extraer una ficha amarilla?",
    options: [
      "4/6",
      "4/10",
      "6/10",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q98
  {
    question: "Observe la siguiente tabla de frecuencias sobre las mascotas favoritas de 20 estudiantes: Perro: 8 (?), Gato: 7 (35%), Pez: 5 (25%), TOTAL: 20 (100%). ¿Cuál es la frecuencia porcentual correspondiente a la mascota perro?",
    options: [
      "35%",
      "40%",
      "45%",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q99
  {
    question: "Una bolsa contiene únicamente fichas de dos colores: 8 fichas blancas y 12 fichas negras. ¿Cuál es la probabilidad de extraer una ficha blanca?",
    options: [
      "8/12",
      "8/20",
      "12/20",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
  // Q100
  {
    question: "Observe el siguiente conjunto de datos correspondientes a la cantidad de goles anotados por un equipo en sus últimos 9 partidos: 2 – 1 – 3 – 2 – 0 – 2 – 4 – 1 – 2 ¿Cuál es la moda de este conjunto de datos?",
    options: [
      "1",
      "2",
      "3",
    ],
    correct: 1,
    mepBloque: "estadistica",
  },
];

// Helper: pick questions by 1-based indices
const pick = (indices) => indices.map((i) => ({ ...Q[i] }));

const exam1 = pick([
1, 2, 3, 4, 5, 6, 7, 8, 23, 24, 25, 26, 27, 28, 29, 43, 44, 45, 46, 47, 48, 61, 62, 63, 64, 65, 66, 67, 81, 82, 83, 84, 85, 86, 87
]);

const exam2 = pick([
9, 10, 11, 12, 13, 14, 15, 16, 30, 31, 32, 33, 34, 35, 36, 49, 50, 51, 52, 53, 54, 68, 69, 70, 71, 72, 73, 74, 88, 89, 90, 91, 92, 93, 94
]);

const exam3Unique = pick([
17, 18, 19, 20, 21, 22, 37, 38, 39, 40, 41, 42, 55, 56, 57, 58, 59, 60, 75, 76, 77, 78, 79, 80, 95, 96, 97, 98, 99, 100
]);

// 5 repeated questions for Exam 3 with options reordered so correct is at index 0
const exam3Repeats = [
  // Repeat of Q1 — correct moved to index 0
  {
    question: "Observe el siguiente número: 5 207 481 936. ¿Cuál es la forma correcta de leer este número?",
    options: [
      "cinco mil doscientos siete millones cuatrocientos ochenta y un mil novecientos treinta y seis.",
      "cinco millones doscientos siete mil cuatrocientos ochenta y uno.",
      "quinientos veinte millones setecientos cuarenta y ocho mil novecientos treinta y seis.",
    ],
    correct: 0,
    mepBloque: "numeros",
  },
  // Repeat of Q23 — correct moved to index 0
  {
    question: "Un terreno tiene forma triangular con una base de 18 m y una altura de 10 m. ¿Cuál es el área de ese terreno?",
    options: [
      "90 m²",
      "28 m²",
      "80 m²",
    ],
    correct: 0,
    mepBloque: "geometria",
  },
  // Repeat of Q43 — correct moved to index 0
  {
    question: "Para fabricar una mesa de vidrio se necesitan 75 000 centímetros cuadrados de material. ¿A cuántos metros cuadrados equivale esa cantidad?",
    options: [
      "7,5 m²",
      "0,75 m²",
      "75 m²",
    ],
    correct: 0,
    mepBloque: "medidas",
  },
  // Repeat of Q61 — correct moved to index 0
  {
    question: "Observe la siguiente sucesión numérica: 5 – 11 – 17 – 23 – ___ ¿Cuál número completa la sucesión anterior?",
    options: [
      "29",
      "26",
      "28",
    ],
    correct: 0,
    mepBloque: "algebra",
  },
  // Repeat of Q81 — correct moved to index 0
  {
    question: "A continuación se presentan las edades de un grupo de estudiantes: 7 – 8 – 8 – 9 – 7 – 8 – 10 – 8 – 9 – 7 – 8 – 9 ¿Cuál es la moda de este grupo de datos?",
    options: [
      "8",
      "9",
      "7",
    ],
    correct: 0,
    mepBloque: "estadistica",
  },
];

const exam3 = [...exam3Unique, ...exam3Repeats];

export const matematicasExtraExams = [exam1, exam2, exam3];
