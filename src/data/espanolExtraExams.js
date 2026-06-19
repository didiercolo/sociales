// src/data/espanolExtraExams.js
// Pre-built MEP extra exam question sets for Español.
// Source: documents/AI Geneterated exams/Espanol_100_Preguntas_Formato_MEP.md
// All 100 questions are mepBloque "comprension-lectora" — the source has no
// writing/production items, so the other official bloque never applies.
// Source markdown has no per-question citation line, so questions omit `source`.
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

const MEP_BLOQUE = "comprension-lectora";

// All 100 source questions, indexed Q1..Q100 by array position (1-based).
// Index 0 is null so Q[N] === question N.
const Q = [
  null,
  // Q1
  {
    stimulus: "El reciclaje es una práctica que permite reutilizar materiales como el papel, el vidrio y el plástico en lugar de desecharlos. Gracias a esta práctica se reduce la cantidad de basura que llega a los rellenos sanitarios. Además, se disminuye la necesidad de extraer nuevas materias primas de la naturaleza, lo que protege los bosques y los recursos del planeta.",
    question: "¿Cuál es la idea fundamental del párrafo anterior?",
    options: [
      "Los rellenos sanitarios reciben menos basura cada año.",
      "El reciclaje permite reutilizar materiales en lugar de desecharlos.",
      "Los bosques se protegen gracias a la extracción de materias primas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q2
  {
    stimulus: "Las abejas cumplen una función esencial en los ecosistemas porque transportan el polen de una flor a otra, permitiendo que las plantas se reproduzcan. Sin este proceso, muchas frutas y verduras que consumimos a diario no podrían producirse. Por esta razón, la disminución de las poblaciones de abejas preocupa a los científicos de todo el mundo.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "los científicos están preocupados por el clima mundial.",
      "las frutas y verduras se producen sin ayuda de insectos.",
      "las abejas cumplen una función esencial al transportar el polen entre flores.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q3
  {
    stimulus: "El sistema de transporte público de una ciudad incluye autobuses, trenes y taxis. Estos medios permiten que las personas se trasladen de un lugar a otro sin necesidad de tener un vehículo propio. Su uso reduce la congestión vial y disminuye la contaminación del aire en las zonas urbanas.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "Los trenes son el medio de transporte más utilizado en las ciudades.",
      "El transporte público permite trasladarse sin necesidad de vehículo propio.",
      "La congestión vial ha aumentado en los últimos años.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q4
  {
    stimulus: "Durante la Edad Media, los castillos europeos cumplían una doble función: servían como residencia para la nobleza y como fortaleza de defensa frente a posibles ataques enemigos. Sus altos muros y fosos rodeantes dificultaban el acceso de los invasores.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "los fosos rodeaban completamente los castillos medievales.",
      "los castillos medievales cumplían funciones de residencia y defensa.",
      "la nobleza vivía exclusivamente en las ciudades durante la Edad Media.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q5
  {
    stimulus: "El agua potable es un recurso fundamental para la vida humana. Sin embargo, millones de personas en el mundo no tienen acceso a fuentes seguras de agua. Esta situación provoca enfermedades graves, especialmente en niños de comunidades vulnerables.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "Las enfermedades afectan principalmente a los adultos mayores.",
      "El agua potable se obtiene únicamente de los ríos.",
      "Millones de personas carecen de acceso a fuentes seguras de agua potable.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q6
  {
    stimulus: "Los volcanes activos liberan gases, cenizas y lava cuando entran en erupción. Estos materiales pueden viajar largas distancias y afectar la calidad del aire, la agricultura y la salud de las personas que viven cerca. Por esta razón, los científicos monitorean constantemente la actividad volcánica.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "los materiales liberados por los volcanes activos pueden afectar el ambiente y la salud.",
      "los científicos solo monitorean los volcanes inactivos.",
      "la lava nunca llega a zonas habitadas por personas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q7
  {
    stimulus: "Las bibliotecas públicas ofrecen a la comunidad acceso gratuito a libros, computadoras e internet. Además, organizan actividades culturales como talleres de lectura y clubes de cuentacuentos para niños. Estos espacios fomentan el hábito de la lectura y reducen las brechas de acceso a la información.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "Los talleres de lectura están dirigidos exclusivamente a adultos.",
      "Las bibliotecas públicas brindan acceso gratuito a información y fomentan la lectura.",
      "El internet es el único recurso disponible en las bibliotecas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q8
  {
    stimulus: "Las plantas medicinales han sido utilizadas por diversas culturas desde hace miles de años para tratar enfermedades. Algunas, como la manzanilla, ayudan a calmar problemas digestivos, mientras que otras se usan para aliviar dolores musculares. La investigación científica actual estudia sus propiedades para desarrollar nuevos medicamentos.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "la manzanilla es la única planta medicinal reconocida científicamente.",
      "las plantas medicinales han sido utilizadas por diversas culturas para tratar enfermedades.",
      "los medicamentos modernos han reemplazado por completo las plantas medicinales.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q9
  {
    stimulus: "El reciclaje del papel comienza con la separación de los materiales en los hogares y oficinas. Posteriormente, el papel se transporta a plantas especializadas donde se tritura, se mezcla con agua y se procesa para producir pulpa. Esta pulpa se utiliza para fabricar papel nuevo, reduciendo así la tala de árboles.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "El papel se transporta directamente sin ningún proceso de separación.",
      "La pulpa de papel se usa exclusivamente para fabricar cartón.",
      "El proceso de reciclaje de papel reduce la necesidad de talar árboles.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q10
  {
    stimulus: "Las orquestas sinfónicas están compuestas por diferentes secciones de instrumentos: cuerdas, vientos, percusión y metales. Cada sección aporta un timbre particular que, combinado con las demás, produce la riqueza sonora característica de la música orquestal.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "la percusión es la sección más importante de la orquesta.",
      "las diferentes secciones de instrumentos combinan sus timbres para crear la sonoridad orquestal.",
      "los instrumentos de viento no forman parte de las orquestas modernas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q11
  {
    stimulus: "Las redes sociales han transformado la manera en que las personas se comunican. Permiten compartir información de forma instantánea con personas de todo el mundo. Sin embargo, también plantean retos relacionados con la privacidad y la veracidad de la información que circula en ellas.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "La privacidad nunca se ve afectada por el uso de redes sociales.",
      "Las redes sociales transformaron la comunicación, aunque también generan nuevos retos.",
      "Toda la información que circula en redes sociales es siempre verdadera.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q12
  {
    stimulus: "Para mantener un huerto orgánico saludable, es necesario rotar los cultivos cada temporada. Esta práctica evita que el suelo pierda nutrientes específicos y reduce la proliferación de plagas que afectan a un mismo tipo de planta cultivada de forma repetida.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "las plagas no afectan a los huertos orgánicos bajo ninguna circunstancia.",
      "la rotación de cultivos evita el desgaste del suelo y reduce las plagas.",
      "los huertos orgánicos no requieren ningún tipo de cuidado especial.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q13
  {
    stimulus: "Durante el siglo XIX, la invención del ferrocarril transformó el comercio y el transporte de personas. Las distancias que antes tomaban semanas en recorrerse a caballo podían cubrirse en cuestión de días, lo que impulsó el crecimiento económico de muchas regiones.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "El caballo siguió siendo el medio de transporte más rápido del siglo XIX.",
      "La invención del ferrocarril transformó el comercio y el transporte en el siglo XIX.",
      "El crecimiento económico se detuvo con la llegada del ferrocarril.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q14
  {
    stimulus: "Los arrecifes de coral albergan una enorme diversidad de especies marinas, a pesar de cubrir menos del uno por ciento del fondo oceánico. Funcionan como criaderos para peces, refugio contra depredadores y fuente de alimento para miles de organismos.",
    question: "La idea fundamental del párrafo anterior es",
    options: [
      "los arrecifes de coral albergan gran diversidad de vida marina pese a su tamaño reducido.",
      "los arrecifes de coral cubren la mayor parte del fondo oceánico.",
      "los peces no dependen de los arrecifes de coral para sobrevivir.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q15
  {
    stimulus: "El cuerpo humano necesita dormir entre siete y nueve horas diarias para funcionar adecuadamente. Durante el sueño, el cerebro consolida la información aprendida durante el día y el cuerpo repara tejidos dañados. La falta de sueño constante puede afectar la concentración y el estado de ánimo.",
    question: "¿Cuál es la idea fundamental del texto anterior?",
    options: [
      "Dormir afecta negativamente la capacidad de concentración.",
      "El sueño adecuado es necesario para el funcionamiento físico y mental del cuerpo.",
      "El cerebro deja de funcionar completamente durante el sueño.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q16
  {
    stimulus: "En la comunidad de Puntarenas, la pesca excesiva durante varios años provocó una disminución considerable en la población de peces. Como consecuencia, muchos pescadores tuvieron que buscar otras formas de generar ingresos para sus familias.",
    question: "Según el texto anterior, ¿cuál es el efecto de la pesca excesiva?",
    options: [
      "El aumento en la población de peces de la zona.",
      "La disminución de la población de peces y la necesidad de buscar otros ingresos.",
      "La mejora en las condiciones económicas de los pescadores.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q17
  {
    stimulus: "Durante varias semanas no llovió en la región agrícola, por lo que el suelo se secó completamente. Los agricultores observaron cómo sus cultivos de maíz comenzaban a marchitarse antes de poder cosecharlos.",
    question: "¿Cuál fue la causa de que los cultivos de maíz se marchitaran?",
    options: [
      "El exceso de lluvia durante varias semanas.",
      "La falta de lluvia que secó el suelo agrícola.",
      "La cosecha temprana realizada por los agricultores.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q18
  {
    stimulus: "Un grupo de estudiantes olvidó apagar las luces del laboratorio escolar al salir de clases. Esto provocó un gasto innecesario de electricidad que la escuela tuvo que asumir al final del mes.",
    question: "Según el texto anterior, ¿cuál fue la causa del gasto innecesario de electricidad?",
    options: [
      "El uso adecuado de los recursos del laboratorio.",
      "El olvido de los estudiantes de apagar las luces.",
      "El aumento en el precio de la electricidad ese mes.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q19
  {
    stimulus: "La construcción de un nuevo puente en la comunidad redujo el tiempo de viaje entre dos pueblos de dos horas a solo veinte minutos. Como resultado, más comerciantes comenzaron a trasladar sus productos entre ambas localidades.",
    question: "¿Cuál es el efecto de la construcción del puente?",
    options: [
      "El aumento en el tiempo de viaje entre los pueblos.",
      "La reducción del tiempo de viaje, lo que facilitó el comercio entre pueblos.",
      "La disminución del número de comerciantes en la región.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q20
  {
    stimulus: "Una fábrica vertió desechos químicos en un río cercano sin ningún tratamiento previo. Meses después, los habitantes de la zona notaron que los peces del río habían desaparecido casi por completo.",
    question: "Según el texto anterior, ¿cuál fue la causa de la desaparición de los peces?",
    options: [
      "La pesca excesiva realizada por los habitantes de la zona.",
      "El vertido de desechos químicos sin tratamiento en el río.",
      "La construcción de una represa en el río.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q21
  {
    stimulus: "Durante el huracán, los fuertes vientos derribaron varios árboles que cayeron sobre las líneas eléctricas. Por esta razón, miles de hogares de la ciudad se quedaron sin electricidad durante casi tres días.",
    question: "¿Cuál fue el efecto de la caída de los árboles sobre las líneas eléctricas?",
    options: [
      "El fortalecimiento del servicio eléctrico de la ciudad.",
      "La pérdida del servicio eléctrico en miles de hogares.",
      "La reducción en la velocidad de los vientos del huracán.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q22
  {
    stimulus: "Un estudiante practicó diariamente sus lecciones de piano durante varios meses antes del concierto escolar. Gracias a esta dedicación, logró interpretar la pieza musical sin ningún error frente a todo el público.",
    question: "Según el texto anterior, ¿cuál fue la causa de que el estudiante tocara sin errores?",
    options: [
      "La práctica diaria que realizó durante varios meses.",
      "La elección de una pieza musical sencilla.",
      "El apoyo del público durante el concierto.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q23
  {
    stimulus: "La sequía prolongada que afectó la región disminuyó considerablemente el nivel de los embalses utilizados para generar electricidad. Como consecuencia, las autoridades tuvieron que implementar racionamientos eléctricos en varias comunidades.",
    question: "¿Cuál es el efecto descrito en el texto anterior?",
    options: [
      "El aumento del nivel de agua en los embalses.",
      "La implementación de racionamientos eléctricos en las comunidades.",
      "La finalización inmediata de la sequía en la región.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q24
  {
    stimulus: "Los científicos descubrieron que el uso excesivo de plásticos de un solo uso estaba contaminando gravemente los océanos. Esta situación llevó a varios países a prohibir la fabricación de bolsas y popotes plásticos.",
    question: "Según el texto anterior, ¿cuál fue la causa de que varios países prohibieran ciertos plásticos?",
    options: [
      "La disminución en la producción de plásticos a nivel mundial.",
      "La contaminación grave de los océanos por plásticos de un solo uso.",
      "El aumento en el precio de los materiales plásticos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q25
  {
    stimulus: "Una niña dejó su bicicleta bajo la lluvia durante toda la noche sin cubrirla. Al día siguiente, notó que la cadena se había oxidado y que ya no podía pedalear con la misma facilidad.",
    question: "¿Cuál fue el efecto de dejar la bicicleta bajo la lluvia?",
    options: [
      "La mejora en el funcionamiento de la cadena.",
      "La oxidación de la cadena, que dificultó pedalear.",
      "La desaparición completa de la bicicleta.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q26
  {
    stimulus: "El equipo de fútbol entrenó intensamente durante todo el verano siguiendo un plan físico riguroso. Como resultado, llegaron al campeonato regional en mejores condiciones que sus rivales y lograron ganar el torneo.",
    question: "Según el texto anterior, ¿cuál fue la causa de que el equipo ganara el torneo?",
    options: [
      "El entrenamiento intenso que realizaron durante el verano.",
      "La falta de preparación física de los equipos rivales.",
      "La selección de un campo de juego favorable.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q27
  {
    stimulus: "Debido a la erupción de un volcán cercano, una capa de ceniza cubrió los cultivos de café de la región durante varios días. Los agricultores tuvieron que limpiar manualmente cada planta antes de que la ceniza dañara las hojas de forma permanente.",
    question: "¿Cuál es el efecto de la erupción volcánica descrita en el texto?",
    options: [
      "El crecimiento acelerado de los cultivos de café.",
      "La necesidad de limpiar manualmente los cultivos cubiertos de ceniza.",
      "La eliminación total de la actividad volcánica en la región.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q28
  {
    stimulus: "Una empresa de transporte decidió implementar autobuses eléctricos en lugar de los tradicionales de combustión. Gracias a este cambio, los niveles de contaminación del aire en el centro de la ciudad disminuyeron notablemente en pocos meses.",
    question: "Según el texto anterior, ¿cuál fue la causa de la disminución de la contaminación?",
    options: [
      "El aumento en el número de autobuses tradicionales.",
      "La implementación de autobuses eléctricos en lugar de los de combustión.",
      "La reducción en el horario de circulación de los autobuses.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q29
  {
    stimulus: "Un grupo de estudiantes no estudió para el examen de matemáticas porque dedicaron toda la semana a ensayar para la obra de teatro escolar. Como resultado, varios de ellos obtuvieron calificaciones bajas en esa materia.",
    question: "¿Cuál es el efecto descrito en el texto anterior?",
    options: [
      "El éxito de la obra de teatro escolar.",
      "Las calificaciones bajas obtenidas en el examen de matemáticas.",
      "La cancelación del examen de matemáticas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q30
  {
    stimulus: "La instalación de paneles solares en una escuela rural permitió generar electricidad propia para todo el centro educativo. Gracias a esto, la institución dejó de depender completamente de la red eléctrica pública y redujo sus gastos mensuales.",
    question: "Según el texto anterior, ¿cuál fue la causa de que la escuela redujera sus gastos?",
    options: [
      "El aumento en el precio de la electricidad pública.",
      "La instalación de paneles solares que generaron electricidad propia.",
      "La disminución en el número de estudiantes matriculados.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q31
  {
    stimulus: "Un viejo roble crecía solitario en medio de una pradera. Cada año, las tormentas más fuertes intentaban derribarlo, pero sus raíces se aferraban profundamente a la tierra. Una mañana, un joven sauce que había crecido junto al río le preguntó cómo lograba mantenerse en pie a pesar de los vientos. El roble respondió: \"No es la fuerza de mis ramas lo que me sostiene, sino la profundidad de mis raíces.\"",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La belleza de las praderas durante las tormentas.",
      "La fortaleza interior como base para resistir las dificultades.",
      "La comparación entre los árboles de diferentes regiones.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q32
  {
    stimulus: "Una pequeña hormiga encontró un grano de trigo demasiado pesado para cargarlo sola. En lugar de rendirse, llamó a sus compañeras del hormiguero. Juntas, lograron transportar el grano hasta su nido en poco tiempo, mucho antes de lo que la hormiga había imaginado posible.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "La dificultad de encontrar alimento en el bosque.",
      "El valor del trabajo en equipo para lograr objetivos difíciles.",
      "La competencia entre distintas especies de insectos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q33
  {
    stimulus: "En un pueblo lejano vivía un relojero que se negaba a reparar relojes que consideraba \"perdidos\". Un día, una anciana le llevó un reloj roto que había pertenecido a su esposo fallecido. El relojero, conmovido por la historia, trabajó toda la noche hasta lograr que el reloj volviera a funcionar.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La importancia de comprar relojes nuevos en lugar de repararlos.",
      "La compasión que puede surgir al conocer la historia de otra persona.",
      "Las técnicas utilizadas por los relojeros antiguos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q34
  {
    stimulus: "Un pez pequeño nadaba siempre cerca del fondo del océano, temeroso de aventurarse a aguas más profundas. Un día, una tortuga marina lo invitó a explorar una cueva cercana. Aunque al principio sintió miedo, el pez descubrió un mundo lleno de colores que nunca había imaginado.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "Superar los miedos permite descubrir nuevas experiencias.",
      "Las tortugas marinas son más inteligentes que los peces.",
      "Los océanos son lugares peligrosos para los animales pequeños.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q35
  {
    stimulus: "Dos hermanos heredaron un pequeño terreno de su padre. Uno de ellos decidió sembrar inmediatamente sin planificar nada, mientras que el otro estudió el tipo de suelo y el clima antes de elegir qué cultivar. Al final de la temporada, la cosecha del segundo hermano fue mucho más abundante.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La rivalidad constante entre hermanos por una herencia.",
      "La importancia de planificar antes de actuar para obtener mejores resultados.",
      "Las dificultades de cultivar la tierra en terrenos pequeños.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q36
  {
    stimulus: "Un músico callejero tocaba su violín todos los días en la misma esquina, aunque pocas personas se detenían a escucharlo. Una tarde, una niña dejó caer una moneda en su estuche y le dijo que su música la había hecho sentir feliz después de un día difícil. Desde entonces, el músico siguió tocando con más entusiasmo.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "La dificultad de ganar dinero como músico callejero.",
      "El valor de un pequeño gesto de aprecio para motivar a otra persona.",
      "Las técnicas necesarias para aprender a tocar el violín.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q37
  {
    stimulus: "En la cima de una montaña vivía un águila que se negaba a volar lejos de su nido por miedo a perderse. Un día, observó a otras aves migrando hacia tierras lejanas en busca de mejor clima. Aunque tenía miedo, decidió seguirlas y descubrió valles llenos de alimento que jamás había imaginado.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "Los peligros de volar largas distancias sin compañía.",
      "El valor de atreverse a explorar lo desconocido a pesar del miedo.",
      "La importancia de construir nidos seguros en las montañas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q38
  {
    stimulus: "Un campesino encontró una semilla extraña que nadie en su pueblo reconocía. A pesar de las burlas de sus vecinos, decidió sembrarla y cuidarla con paciencia durante meses. Finalmente, la planta creció y dio frutos deliciosos que nunca antes se habían visto en la región.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "Las burlas que reciben los agricultores en los pueblos pequeños.",
      "La perseverancia ante las dudas de los demás puede traer buenos resultados.",
      "La dificultad de identificar nuevas especies de plantas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q39
  {
    stimulus: "Una tejedora ciega aprendió a crear hermosos tapices guiándose únicamente por el tacto de los hilos. Cuando le preguntaron cómo lograba combinar tan bien los colores sin verlos, ella respondió que conocía cada hilo por su textura y que confiaba en su memoria para recordar dónde había colocado cada tono.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "Las dificultades que enfrentan las personas con discapacidad visual.",
      "La capacidad humana de adaptarse y desarrollar otras habilidades ante una limitación.",
      "Las técnicas tradicionales utilizadas en la fabricación de tapices.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q40
  {
    stimulus: "Un río que solía fluir con fuerza comenzó a secarse poco a poco debido a la falta de lluvias. Los animales que dependían de él emigraron hacia otras zonas, excepto un pequeño grupo de peces que decidió permanecer, confiando en que las lluvias regresarían pronto.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "La migración constante de los animales del bosque.",
      "La esperanza frente a las dificultades del ambiente.",
      "Las consecuencias negativas de vivir cerca de un río.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q41
  {
    stimulus: "Un niño encontró un pajarito con el ala rota cerca de su casa. A pesar de que sus amigos le dijeron que lo dejara, decidió cuidarlo durante varias semanas, alimentándolo y protegiéndolo del frío. Cuando finalmente el ave pudo volar de nuevo, regresó cada mañana a posarse en la ventana del niño.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La dificultad de cuidar animales silvestres en casa.",
      "El valor de la compasión y el cuidado hacia los seres más vulnerables.",
      "Las consecuencias de desobedecer los consejos de los amigos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q42
  {
    stimulus: "Una tortuga decidió participar en una carrera contra varios animales más veloces que ella. Mientras los demás se distraían y se detenían a descansar confiados en su velocidad, la tortuga avanzó sin parar, con paso lento pero constante, hasta llegar primero a la meta.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "La velocidad es la única forma de ganar una competencia.",
      "La constancia y la disciplina pueden superar la velocidad y la confianza excesiva.",
      "Las tortugas son los animales más fuertes del bosque.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q43
  {
    stimulus: "En una aldea de pescadores, un anciano enseñaba a los niños a remendar las redes rotas en lugar de comprar nuevas. Decía que cada red reparada contaba una historia y que aprender a arreglarla era más valioso que simplemente reemplazarla.",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La importancia de comprar herramientas nuevas para pescar.",
      "El valor de aprender a reparar y cuidar lo que ya tenemos.",
      "Las dificultades económicas de las aldeas de pescadores.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q44
  {
    stimulus: "Una estrella muy brillante se sentía triste porque, al estar tan lejos, pensaba que nadie en la Tierra podría notarla. Una noche, escuchó a un niño señalarla y decirle a su madre que esa era su estrella favorita del cielo. Desde entonces, brilló con más intensidad cada noche.",
    question: "¿Cuál es el tema central del relato anterior?",
    options: [
      "La distancia entre las estrellas y la Tierra es imposible de medir.",
      "Sentirse valorado por otros puede transformar la forma en que nos vemos a nosotros mismos.",
      "Las estrellas más brillantes son siempre las más cercanas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q45
  {
    stimulus: "—No pienso compartir mi almuerzo con nadie —dijo Marcos mientras guardaba su comida en la mochila—. Si cada quien trajera lo suyo, no tendríamos este problema. Su compañera Lucía, en cambio, siempre dividía su almuerzo entre quienes lo necesitaban, sin importar si después le quedaba poco para ella.",
    question: "A partir del texto anterior, la posición ideológica de Marcos refleja",
    options: [
      "generosidad hacia sus compañeros de clase.",
      "individualismo frente a las necesidades de los demás.",
      "preocupación por el bienestar del grupo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q46
  {
    stimulus: "—Las reglas existen para cumplirse, no importa cuán difíciles parezcan —afirmó el capitán del barco—. Si las rompemos una vez, los marineros dejarán de confiar en el orden. Uno de los tripulantes más jóvenes pensaba diferente: creía que las reglas debían adaptarse cuando ponían en peligro la vida de alguien.",
    question: "Según el texto anterior, ¿qué posición ideológica representa el capitán del barco?",
    options: [
      "Las normas deben respetarse sin excepción para mantener el orden.",
      "Las reglas deben cambiarse constantemente según la situación.",
      "La opinión de los marineros jóvenes es siempre más importante.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q47
  {
    stimulus: "—El dinero que ganamos debe usarse primero para ayudar a quienes tienen menos —decía la anciana comerciante a su nieto—. Lo que sobra, ya se verá qué hacer con ello. El nieto, en cambio, prefería ahorrar todo lo posible antes de pensar en ayudar a otros.",
    question: "A partir del texto anterior, la posición ideológica de la anciana comerciante refleja",
    options: [
      "un interés principal por aumentar sus ahorros personales.",
      "la prioridad de ayudar a otros antes que acumular riqueza.",
      "la desconfianza hacia los miembros de su propia familia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q48
  {
    stimulus: "—No hace falta estudiar tanto si uno es inteligente —comentó Pablo antes del examen, mientras sus compañeros repasaban sus apuntes—. Yo confío en mi memoria. Su amiga Carla, sin embargo, repasaba cada noche convencida de que el esfuerzo constante era la única forma segura de aprender.",
    question: "Según el texto anterior, ¿qué posición ideológica representa Pablo?",
    options: [
      "El esfuerzo diario es indispensable para obtener buenos resultados.",
      "La inteligencia natural es suficiente, sin necesidad de esforzarse demasiado.",
      "Memorizar la información no sirve para los exámenes.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q49
  {
    stimulus: "—Los animales del bosque no necesitan nuestra ayuda, ellos siempre han sobrevivido solos —opinaba el guardabosques mayor. Su aprendiz, en cambio, creía firmemente que los humanos debían intervenir para proteger a las especies en peligro causado por la actividad humana misma.",
    question: "A partir del texto anterior, ¿qué posición ideológica representa el aprendiz del guardabosques?",
    options: [
      "La naturaleza debe resolver sus propios problemas sin intervención humana.",
      "Los seres humanos tienen la responsabilidad de proteger a las especies que ellos mismos han afectado.",
      "Los animales del bosque no corren ningún peligro actualmente.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q50
  {
    stimulus: "—Prefiero quedarme en mi pueblo toda la vida, aquí conozco a todos y me siento seguro —decía don Ramón. Su hijo, en cambio, soñaba con viajar y conocer otros países, convencido de que las nuevas experiencias eran necesarias para crecer como persona.",
    question: "Según el texto anterior, ¿qué posición ideológica representa el hijo de don Ramón?",
    options: [
      "La seguridad de quedarse en un solo lugar es más valiosa que cualquier experiencia nueva.",
      "Conocer nuevos lugares y vivir nuevas experiencias es fundamental para el crecimiento personal.",
      "Los viajes a otros países son innecesarios para llevar una vida plena.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q51
  {
    stimulus: "—Si alguien comete un error, merece una segunda oportunidad para corregirlo —decía la maestra ante la clase. Otro profesor, en cambio, opinaba que los errores debían tener consecuencias inmediatas y sin excepciones, para que los estudiantes aprendieran a ser responsables desde el principio.",
    question: "A partir del texto anterior, la posición ideológica de la maestra refleja",
    options: [
      "la creencia de que las personas merecen oportunidades para corregir sus errores.",
      "la idea de que los errores deben ser castigados sin excepción.",
      "el desinterés por el comportamiento de los estudiantes.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q52
  {
    stimulus: "—La tradición de nuestros abuelos debe mantenerse exactamente igual, sin cambiar nada —insistía el líder comunitario mayor. Una joven del pueblo, sin embargo, pensaba que las tradiciones podían adaptarse a los nuevos tiempos sin perder su esencia.",
    question: "Según el texto anterior, ¿qué posición ideológica representa la joven del pueblo?",
    options: [
      "Las tradiciones deben mantenerse exactamente igual sin ningún cambio.",
      "Las tradiciones pueden evolucionar con el tiempo sin perder su esencia.",
      "Las costumbres antiguas deben desaparecer por completo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q53
  {
    stimulus: "—Ganar es lo único que importa en una competencia —afirmaba el entrenador del equipo rival. El entrenador del equipo local, en cambio, les decía a sus jugadores que el esfuerzo y el compañerismo eran más valiosos que cualquier trofeo.",
    question: "A partir del texto anterior, la posición ideológica del entrenador local refleja",
    options: [
      "la importancia absoluta de ganar sobre cualquier otro valor.",
      "la valoración del esfuerzo y el compañerismo por encima del resultado final.",
      "el desinterés total por el desempeño del equipo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q54
  {
    stimulus: "—No debemos confiar en los extraños, podrían querer hacernos daño —advertía la madre a sus hijos. El padre, en cambio, pensaba que la mayoría de las personas eran buenas y que había que aprender a confiar con precaución, sin cerrarse por completo a los demás.",
    question: "Según el texto anterior, ¿qué posición ideológica representa el padre?",
    options: [
      "Ninguna persona desconocida merece confianza bajo ninguna circunstancia.",
      "Es posible confiar en los demás manteniendo cierta precaución razonable.",
      "Los extraños siempre representan un peligro inmediato.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q55
  {
    stimulus: "—El verdadero éxito se mide por la cantidad de dinero que se gana —comentaba un comerciante adinerado. Su vecino, un maestro de escuela, pensaba que el verdadero éxito se medía por el impacto positivo que se generaba en la vida de otras personas.",
    question: "A partir del texto anterior, la posición ideológica del maestro de escuela refleja",
    options: [
      "la creencia de que el dinero es el único indicador de éxito.",
      "la idea de que el éxito se mide por el impacto positivo en la vida de los demás.",
      "el desinterés por contribuir positivamente a la sociedad.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q56
  {
    stimulus: "—Cada quien debe resolver sus propios problemas, nadie tiene por qué meterse —decía uno de los vecinos del barrio cuando había algún conflicto. Doña Marta, en cambio, siempre se acercaba a mediar y ayudar cuando veía algún problema entre los vecinos.",
    question: "Según el texto anterior, ¿qué posición ideológica representa doña Marta?",
    options: [
      "Los problemas ajenos no deben importarle a nadie más que a los involucrados.",
      "Es importante involucrarse y ayudar a resolver los conflictos de la comunidad.",
      "Los vecinos deben evitar cualquier tipo de contacto entre ellos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q57
  {
    stimulus: "—Lo más importante es obedecer sin cuestionar lo que dicen los mayores —sostenía el abuelo de la familia. Su nieta, sin embargo, creía que era válido hacer preguntas y expresar una opinión diferente, siempre con respeto.",
    question: "A partir del texto anterior, la posición ideológica de la nieta refleja",
    options: [
      "la obediencia absoluta hacia las decisiones de los mayores.",
      "la creencia de que se puede cuestionar y opinar de manera respetuosa.",
      "el rechazo total hacia cualquier consejo de los adultos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q58
  {
    stimulus: "—Los animales no sienten lo mismo que los humanos, por eso no hay problema en usarlos solo para el trabajo —opinaba un granjero. Su hija, en cambio, defendía que los animales merecían un trato digno y cuidados adecuados, sin importar su utilidad para las labores del campo.",
    question: "Según el texto anterior, ¿qué posición ideológica representa la hija del granjero?",
    options: [
      "Los animales solo deben recibir cuidado si son útiles para el trabajo.",
      "Los animales merecen un trato digno independientemente de su utilidad.",
      "Los animales de granja no requieren ningún tipo de cuidado especial.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q59
  {
    stimulus: "Sofía llegó a la escuela con el cabello mojado y los zapatos llenos de barro, a pesar de que el sol brillaba con fuerza en el cielo.",
    question: "¿Qué se puede inferir del texto anterior?",
    options: [
      "Sofía se bañó justo antes de salir de su casa.",
      "Probablemente llovió poco antes de que Sofía llegara a la escuela.",
      "Sofía vive muy cerca de un río que se desbordó.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q60
  {
    stimulus: "Don Esteban revisó su reloj por tercera vez en cinco minutos y comenzó a caminar de un lado a otro frente a la puerta del aeropuerto, mirando constantemente hacia la sala de llegadas.",
    question: "¿Qué se puede inferir sobre el estado de ánimo de don Esteban?",
    options: [
      "Está completamente relajado esperando a alguien.",
      "Está ansioso o nervioso esperando la llegada de alguien.",
      "Está aburrido porque no tiene nada que hacer.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q61
  {
    stimulus: "La cocina olía a canela y vainilla, y sobre la mesa había harina esparcida junto a un libro abierto en la página titulada \"Pasteles tradicionales\".",
    question: "¿Qué se puede inferir del texto anterior?",
    options: [
      "Alguien acaba de terminar de limpiar la cocina por completo.",
      "Alguien está preparando o acaba de preparar un pastel.",
      "La cocina ha estado cerrada durante varios días.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q62
  {
    stimulus: "Camila guardó su mochila en el armario, apagó la luz de su cuarto a las siete de la noche y se acostó en su cama, aunque todavía no tenía sueño.",
    question: "¿Qué se puede inferir sobre la razón por la que Camila se acostó tan temprano?",
    options: [
      "Camila tiene mucho sueño después de un día agotador.",
      "Probablemente Camila tiene que levantarse muy temprano al día siguiente.",
      "Camila no tiene tarea ni actividades pendientes.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q63
  {
    stimulus: "El entrenador miró el marcador del partido, suspiró profundamente y guardó silencio mientras los jugadores del equipo contrario celebraban con gritos de alegría en el centro de la cancha.",
    question: "¿Qué se puede inferir del resultado del partido?",
    options: [
      "El equipo del entrenador ganó el partido fácilmente.",
      "El equipo del entrenador perdió el partido.",
      "El partido terminó en un empate sin ningún ganador.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q64
  {
    stimulus: "Daniel revisó su mochila tres veces antes de salir de su casa, repasando en voz baja las fórmulas matemáticas mientras caminaba hacia la escuela.",
    question: "¿Qué se puede inferir sobre lo que está a punto de suceder en la escuela?",
    options: [
      "Daniel tiene un partido de fútbol esa misma mañana.",
      "Daniel probablemente tiene un examen de matemáticas ese día.",
      "Daniel olvidó por completo sus materiales escolares.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q65
  {
    stimulus: "La abuela sacó del armario una caja vieja llena de fotografías en blanco y negro y, con los ojos brillantes, comenzó a contarle a su nieta historias de un pueblo que ya no existía de la misma forma.",
    question: "¿Qué se puede inferir sobre el estado emocional de la abuela?",
    options: [
      "Siente indiferencia hacia su pasado y su pueblo natal.",
      "Siente nostalgia al recordar su pasado.",
      "Siente miedo de mostrarle las fotografías a su nieta.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q66
  {
    stimulus: "El cielo se oscureció de repente, el viento comenzó a soplar con fuerza y las hojas de los árboles se agitaron violentamente mientras la gente apresuraba el paso por las calles.",
    question: "¿Qué se puede inferir de la situación descrita en el texto?",
    options: [
      "Se acerca una tarde tranquila y soleada.",
      "Es probable que esté por comenzar una tormenta.",
      "Las personas están saliendo a pasear sin ninguna prisa.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q67
  {
    stimulus: "Mariana llegó a la fiesta con un ramo de flores envuelto en papel celofán y una tarjeta firmada por todos sus compañeros de clase.",
    question: "¿Qué se puede inferir sobre la fiesta a la que asistió Mariana?",
    options: [
      "Es una fiesta de despedida sin ninguna celebración especial.",
      "Probablemente es una fiesta de cumpleaños o un evento de celebración para alguien.",
      "Mariana llegó por error a una fiesta que no conocía.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q68
  {
    stimulus: "El perro de la familia se escondió debajo de la cama temblando apenas escuchó los primeros truenos a lo lejos.",
    question: "¿Qué se puede inferir sobre el comportamiento del perro?",
    options: [
      "El perro está emocionado por la llegada de la lluvia.",
      "El perro siente miedo o le teme a los truenos.",
      "El perro quiere jugar debajo de la cama.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q69
  {
    stimulus: "Jorge llegó al salón de clases con el uniforme arrugado, sin haber desayunado y con los ojos entrecerrados por el sueño, apenas unos minutos antes de que sonara el timbre.",
    question: "¿Qué se puede inferir sobre la mañana de Jorge?",
    options: [
      "Jorge se levantó con mucho tiempo de anticipación ese día.",
      "Jorge probablemente se levantó tarde esa mañana.",
      "Jorge decidió no asistir a la escuela ese día.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q70
  {
    stimulus: "La maestra colocó sobre el escritorio una caja decorada con globos y, al verla, todos los estudiantes comenzaron a sonreír y a susurrar entre ellos con emoción.",
    question: "¿Qué se puede inferir de la situación descrita en el texto?",
    options: [
      "Los estudiantes están a punto de recibir un examen sorpresa.",
      "Es probable que esté por celebrarse algo especial en el salón de clases.",
      "La maestra está a punto de anunciar una mala noticia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q71
  {
    stimulus: "El jardín, que antes estaba lleno de flores de distintos colores, ahora mostraba solo tierra seca y algunas ramas marchitas bajo el sol del mediodía.",
    question: "¿Qué se puede inferir sobre el jardín descrito en el texto?",
    options: [
      "El jardín ha sido recientemente regado y cuidado con esmero.",
      "El jardín ha estado abandonado o sin recibir suficiente agua durante un tiempo.",
      "El jardín fue sembrado por primera vez ese mismo día.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q72
  {
    stimulus: "Valeria abrazó fuertemente a su madre en el aeropuerto, mientras las lágrimas corrían por su rostro y sostenía con fuerza una maleta grande junto a su pasaporte.",
    question: "¿Qué se puede inferir sobre la situación de Valeria?",
    options: [
      "Valeria está regresando de unas vacaciones cortas.",
      "Valeria probablemente está despidiéndose de su madre antes de un viaje largo.",
      "Valeria nunca antes había viajado en avión.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q73
  {
    stimulus: "Tomás soñaba con participar en el concurso de pintura de la escuela, pero no tenía dinero suficiente para comprar los materiales que necesitaba. Cada día observaba el anuncio del concurso en el pasillo, sintiendo que su sueño se alejaba cada vez más.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta Tomás?",
    options: [
      "La falta de talento artístico para participar en el concurso.",
      "La falta de dinero para comprar los materiales necesarios.",
      "El desinterés total por participar en actividades escolares.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q74
  {
    stimulus: "Camila quería defender a su mejor amiga de las burlas de otros compañeros, pero temía que, si lo hacía, ella también se convertiría en blanco de las críticas del grupo.",
    question: "¿Cuál es el conflicto que enfrenta Camila en el texto anterior?",
    options: [
      "El deseo de unirse a las burlas contra su amiga.",
      "El miedo a las consecuencias de defender a su amiga frente al grupo.",
      "La indiferencia total ante la situación de su amiga.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q75
  {
    stimulus: "El joven granjero había trabajado toda la temporada esperando una buena cosecha, pero una plaga inesperada comenzó a destruir sus cultivos justo antes de la fecha en que pensaba venderlos en el mercado.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta el granjero?",
    options: [
      "La falta de comprador para sus productos en el mercado.",
      "La pérdida de su cosecha debido a una plaga inesperada.",
      "El exceso de cosecha que no puede vender a tiempo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q76
  {
    stimulus: "Andrés deseaba unirse al equipo de natación, pero su familia no contaba con el dinero suficiente para pagar las cuotas mensuales del club deportivo.",
    question: "¿Cuál es el conflicto que enfrenta Andrés en el texto anterior?",
    options: [
      "El desinterés de Andrés por practicar deportes acuáticos.",
      "La falta de recursos económicos para pagar el club deportivo.",
      "La prohibición de su familia para practicar natación.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q77
  {
    stimulus: "La capitana del barco debía decidir si continuaba el viaje a pesar de la tormenta que se aproximaba, o regresaba al puerto y perdía la oportunidad de entregar la carga a tiempo.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta la capitana?",
    options: [
      "Debe elegir entre arriesgarse con la tormenta o perder la entrega a tiempo.",
      "No sabe cómo navegar correctamente el barco.",
      "La tripulación se niega por completo a obedecer sus órdenes.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q78
  {
    stimulus: "Luisa quería contarle la verdad a su mejor amiga sobre un error que había cometido, pero temía que, al confesarlo, perdería su amistad para siempre.",
    question: "¿Cuál es el conflicto que enfrenta Luisa en el texto anterior?",
    options: [
      "El deseo de mentirle constantemente a su amiga.",
      "El temor a perder la amistad si confiesa la verdad.",
      "La indiferencia hacia la opinión de su amiga.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q79
  {
    stimulus: "El pequeño oso polar debía aprender a nadar rápidamente, ya que el hielo donde vivía se derretía cada vez más rápido y la distancia hasta la siguiente zona segura aumentaba cada día.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta el oso polar?",
    options: [
      "La falta de alimento disponible en su territorio.",
      "La necesidad urgente de adaptarse al derretimiento acelerado del hielo.",
      "La competencia con otros osos por el mismo territorio.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q80
  {
    stimulus: "El joven músico había sido invitado a tocar en un concierto importante, pero su instrumento se dañó justo dos días antes de la presentación y no contaba con dinero para repararlo.",
    question: "¿Cuál es el conflicto que enfrenta el músico en el texto anterior?",
    options: [
      "La falta de invitación para participar en el concierto.",
      "El instrumento dañado y la falta de recursos para repararlo a tiempo.",
      "El desinterés por presentarse ante el público.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q81
  {
    stimulus: "La exploradora debía decidir entre seguir el camino más corto a través de un terreno desconocido y peligroso, o tomar la ruta más larga pero segura, sabiendo que el tiempo se le agotaba para encontrar el campamento antes de que oscureciera.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta la exploradora?",
    options: [
      "La pérdida total de su equipo de exploración.",
      "Debe elegir entre un camino rápido pero riesgoso y uno seguro pero lento, con el tiempo en contra.",
      "No sabe cómo regresar al punto de partida del viaje.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q82
  {
    stimulus: "El niño quería confesarle a su maestra que había sido él quien rompió el florero del salón, pero temía el castigo que podría recibir y que sus compañeros lo señalaran frente a toda la clase.",
    question: "¿Cuál es el conflicto que enfrenta el niño en el texto anterior?",
    options: [
      "El deseo de culpar a otro compañero por el accidente.",
      "El miedo a las consecuencias de confesar la verdad ante la clase.",
      "La indiferencia total ante lo sucedido con el florero.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q83
  {
    stimulus: "El anciano pescador necesitaba salir al mar para alimentar a su familia, pero su bote presentaba una grieta que podía empeorar con el oleaje fuerte que se anunciaba para esa tarde.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta el pescador?",
    options: [
      "La falta de peces disponibles en la zona donde pesca.",
      "El riesgo de salir al mar con un bote dañado para poder alimentar a su familia.",
      "La prohibición de pescar impuesta por las autoridades.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q84
  {
    stimulus: "La estudiante había trabajado durante semanas en su proyecto de ciencias, pero la noche anterior a la presentación su computadora se dañó y perdió todo el trabajo que tenía guardado.",
    question: "¿Cuál es el conflicto que enfrenta la estudiante en el texto anterior?",
    options: [
      "La falta de interés en el proyecto de ciencias.",
      "La pérdida de todo su trabajo justo antes de la presentación.",
      "La cancelación de la presentación por parte de la escuela.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q85
  {
    stimulus: "El joven actor debía elegir entre aceptar un papel importante en una obra lejos de su ciudad natal o quedarse cerca de su familia, que atravesaba un momento difícil y necesitaba su apoyo.",
    question: "Según el texto anterior, ¿cuál es el conflicto que enfrenta el actor?",
    options: [
      "Debe elegir entre una oportunidad profesional importante y permanecer cerca de su familia.",
      "No cuenta con el talento suficiente para el papel ofrecido.",
      "Su familia se opone completamente a su carrera como actor.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q86
  {
    stimulus: "El equipo de robótica había construido un prototipo durante meses, pero al llegar a la competencia descubrieron que las reglas habían cambiado y su diseño ya no cumplía con los nuevos requisitos.",
    question: "¿Cuál es el conflicto que enfrenta el equipo en el texto anterior?",
    options: [
      "La falta de interés del equipo en participar en la competencia.",
      "El cambio inesperado de reglas que invalidó su diseño original.",
      "La descalificación del equipo por llegar tarde a la competencia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q87
  {
    stimulus: "Cuando el perro del vecino se escapó de su patio, Diego dejó de jugar inmediatamente y corrió varias cuadras para ayudar a atraparlo, sin importarle que se ensuciara su ropa nueva.",
    question: "Según el texto anterior, el comportamiento de Diego se caracteriza por ser",
    options: [
      "indiferente ante los problemas de los demás.",
      "solidario y dispuesto a ayudar sin pensar en sí mismo.",
      "temeroso frente a los animales desconocidos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q88
  {
    stimulus: "Aunque todos sus compañeros se burlaron de la idea, Valentina insistió en presentar su proyecto de reciclaje frente a toda la escuela, convencida de que su propuesta podía ayudar al ambiente.",
    question: "¿Qué comportamiento demuestra Valentina en el texto anterior?",
    options: [
      "Inseguridad frente a las opiniones de los demás.",
      "Determinación y confianza en sus propias ideas.",
      "Indiferencia hacia el cuidado del medio ambiente.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q89
  {
    stimulus: "Cuando el examen resultó más difícil de lo esperado, varios estudiantes comenzaron a quejarse en voz alta, pero Mateo simplemente respiró profundo, organizó sus ideas y continuó respondiendo con calma.",
    question: "Según el texto anterior, el comportamiento de Mateo se caracteriza por ser",
    options: [
      "ansioso e impaciente ante los retos académicos.",
      "tranquilo y sereno frente a una situación difícil.",
      "indiferente respecto a su desempeño en el examen.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q90
  {
    stimulus: "Después de perder el partido final, algunos jugadores del equipo se enojaron y culparon al árbitro, pero Sebastián se acercó a felicitar al equipo contrario y reconoció que habían jugado mejor.",
    question: "¿Qué comportamiento demuestra Sebastián en el texto anterior?",
    options: [
      "Resentimiento hacia el equipo ganador.",
      "Deportividad y capacidad de reconocer el mérito ajeno.",
      "Indiferencia total ante el resultado del partido.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q91
  {
    stimulus: "Cuando vio que un compañero nuevo comía solo en el comedor, Ana se levantó de su mesa, se sentó junto a él y comenzó a conversar para que se sintiera bienvenido en la escuela.",
    question: "Según el texto anterior, el comportamiento de Ana se caracteriza por ser",
    options: [
      "tímido frente a personas desconocidas.",
      "empático y amable hacia quienes lo necesitan.",
      "desconfiado ante los compañeros nuevos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q92
  {
    stimulus: "Aunque tenía mucho miedo a las alturas, Felipe decidió subir al escenario para entregar el premio que había ganado el equipo, controlando su nerviosismo frente a todo el público.",
    question: "¿Qué comportamiento demuestra Felipe en el texto anterior?",
    options: [
      "Cobardía frente a situaciones desafiantes.",
      "Valentía al enfrentar su miedo por cumplir con una responsabilidad.",
      "Indiferencia ante el reconocimiento recibido.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q93
  {
    stimulus: "Cuando se le preguntó quién había roto la ventana del salón, Gabriel admitió de inmediato que había sido él, aunque sabía que recibiría una sanción por su error.",
    question: "Según el texto anterior, el comportamiento de Gabriel se caracteriza por ser",
    options: [
      "deshonesto al intentar evitar la responsabilidad.",
      "honesto al asumir las consecuencias de sus actos.",
      "indiferente ante lo sucedido con la ventana.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q94
  {
    stimulus: "Durante la actividad grupal, Rocío escuchó con atención cada una de las ideas de sus compañeros antes de compartir la suya, asegurándose de que todos pudieran participar por igual.",
    question: "¿Qué comportamiento demuestra Rocío en el texto anterior?",
    options: [
      "Autoritarismo al imponer su opinión sobre las demás.",
      "Respeto e inclusión hacia las opiniones de sus compañeros.",
      "Desinterés por el trabajo en equipo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q95
  {
    stimulus: "Cuando notó que un anciano tenía dificultades para cruzar la calle, Joaquín se acercó de inmediato, le ofreció su brazo y caminó a su lado hasta llegar a la otra acera con seguridad.",
    question: "Según el texto anterior, el comportamiento de Joaquín se caracteriza por ser",
    options: [
      "indiferente ante las personas mayores de su comunidad.",
      "servicial y atento hacia las necesidades de los demás.",
      "impaciente frente a situaciones que requieren tiempo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q96
  {
    stimulus: "A pesar de que su equipo perdía por varios puntos, Daniela siguió animando a sus compañeras hasta el último segundo del partido, recordándoles que el esfuerzo importaba más que el resultado.",
    question: "¿Qué comportamiento demuestra Daniela en el texto anterior?",
    options: [
      "Pesimismo frente a las dificultades del juego.",
      "Optimismo y perseverancia incluso en momentos difíciles.",
      "Indiferencia hacia el desempeño de su equipo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q97
  {
    stimulus: "Cuando un compañero olvidó su almuerzo en casa, Esteban dividió el suyo en dos partes sin que nadie se lo pidiera, asegurándose de que ambos tuvieran suficiente para comer.",
    question: "Según el texto anterior, el comportamiento de Esteban se caracteriza por ser",
    options: [
      "egoísta al priorizar únicamente sus propias necesidades.",
      "generoso al compartir lo que tiene sin que se lo soliciten.",
      "indiferente ante la situación de su compañero.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q98
  {
    stimulus: "Antes de tomar una decisión sobre el proyecto final, Natalia investigó durante varios días, consultó distintas fuentes y comparó la información para asegurarse de presentar datos correctos.",
    question: "¿Qué comportamiento demuestra Natalia en el texto anterior?",
    options: [
      "Descuido al no verificar la información que utilizaba.",
      "Responsabilidad y rigurosidad al investigar antes de actuar.",
      "Indiferencia hacia la calidad de su proyecto final.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q99
  {
    stimulus: "Cuando el grupo se equivocó en la presentación frente a la clase, algunos estudiantes se rieron, pero Adrián se mantuvo en silencio y luego, en privado, animó a sus compañeros recordándoles que cualquiera puede cometer errores.",
    question: "Según el texto anterior, el comportamiento de Adrián se caracteriza por ser",
    options: [
      "burlón frente a los errores de los demás.",
      "comprensivo y respetuoso ante los errores ajenos.",
      "indiferente frente a los sentimientos de sus compañeros.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q100
  {
    stimulus: "Cuando se enteró de que la biblioteca del barrio necesitaba voluntarios, Camila se ofreció de inmediato para ayudar todos los sábados, organizando libros y leyendo cuentos a los niños más pequeños de la comunidad.",
    question: "¿Qué comportamiento demuestra Camila en el texto anterior?",
    options: [
      "Desinterés por las actividades comunitarias de su barrio.",
      "Compromiso y disposición para contribuir con su comunidad.",
      "Timidez frente a la interacción con otras personas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
];

// Helper: pick questions by 1-based indices
const pick = (indices) => indices.map((i) => ({ ...Q[i] }));

const exam1 = pick([
1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 31, 32, 33, 34, 35, 45, 46, 47, 48, 49, 59, 60, 61, 62, 63, 73, 74, 75, 76, 77, 87, 88, 89, 90, 91
]);

const exam2 = pick([
6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 36, 37, 38, 39, 40, 50, 51, 52, 53, 54, 64, 65, 66, 67, 68, 78, 79, 80, 81, 82, 92, 93, 94, 95, 96
]);

const exam3Unique = pick([
11, 12, 13, 14, 15, 26, 27, 28, 29, 30, 41, 42, 43, 44, 55, 56, 57, 58, 69, 70, 71, 72, 83, 84, 85, 86, 97, 98, 99, 100
]);

// 5 repeated questions for Exam 3 with options reordered so correct is at index 0
const exam3Repeats = [
  // Repeat of Q1 — correct moved to index 0
  {
    stimulus: "El reciclaje es una práctica que permite reutilizar materiales como el papel, el vidrio y el plástico en lugar de desecharlos. Gracias a esta práctica se reduce la cantidad de basura que llega a los rellenos sanitarios. Además, se disminuye la necesidad de extraer nuevas materias primas de la naturaleza, lo que protege los bosques y los recursos del planeta.",
    question: "¿Cuál es la idea fundamental del párrafo anterior?",
    options: [
      "El reciclaje permite reutilizar materiales en lugar de desecharlos.",
      "Los bosques se protegen gracias a la extracción de materias primas.",
      "Los rellenos sanitarios reciben menos basura cada año.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q16 — correct moved to index 0
  {
    stimulus: "En la comunidad de Puntarenas, la pesca excesiva durante varios años provocó una disminución considerable en la población de peces. Como consecuencia, muchos pescadores tuvieron que buscar otras formas de generar ingresos para sus familias.",
    question: "Según el texto anterior, ¿cuál es el efecto de la pesca excesiva?",
    options: [
      "La disminución de la población de peces y la necesidad de buscar otros ingresos.",
      "La mejora en las condiciones económicas de los pescadores.",
      "El aumento en la población de peces de la zona.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q31 — correct moved to index 0
  {
    stimulus: "Un viejo roble crecía solitario en medio de una pradera. Cada año, las tormentas más fuertes intentaban derribarlo, pero sus raíces se aferraban profundamente a la tierra. Una mañana, un joven sauce que había crecido junto al río le preguntó cómo lograba mantenerse en pie a pesar de los vientos. El roble respondió: \"No es la fuerza de mis ramas lo que me sostiene, sino la profundidad de mis raíces.\"",
    question: "¿Cuál es el tema central del texto anterior?",
    options: [
      "La fortaleza interior como base para resistir las dificultades.",
      "La comparación entre los árboles de diferentes regiones.",
      "La belleza de las praderas durante las tormentas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q45 — correct moved to index 0
  {
    stimulus: "—No pienso compartir mi almuerzo con nadie —dijo Marcos mientras guardaba su comida en la mochila—. Si cada quien trajera lo suyo, no tendríamos este problema. Su compañera Lucía, en cambio, siempre dividía su almuerzo entre quienes lo necesitaban, sin importar si después le quedaba poco para ella.",
    question: "A partir del texto anterior, la posición ideológica de Marcos refleja",
    options: [
      "individualismo frente a las necesidades de los demás.",
      "preocupación por el bienestar del grupo.",
      "generosidad hacia sus compañeros de clase.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q59 — correct moved to index 0
  {
    stimulus: "Sofía llegó a la escuela con el cabello mojado y los zapatos llenos de barro, a pesar de que el sol brillaba con fuerza en el cielo.",
    question: "¿Qué se puede inferir del texto anterior?",
    options: [
      "Probablemente llovió poco antes de que Sofía llegara a la escuela.",
      "Sofía vive muy cerca de un río que se desbordó.",
      "Sofía se bañó justo antes de salir de su casa.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
];

const exam3 = [...exam3Unique, ...exam3Repeats];

export const espanolExtraExams = [exam1, exam2, exam3];
