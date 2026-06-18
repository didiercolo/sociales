// src/data/cienciasExtraExams.js
// Pre-built MEP extra exam question sets for Ciencias.
// Source: documents/AI Geneterated exams/Ciencias_100_Preguntas_Formato_MEP.md
// Bloques: cuerpo-humano (Q1-30), biodiversidad (Q31-60), energia (Q61-85), geofisica (Q86-100).
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

// All 100 source questions, indexed Q1..Q100 by array position (1-based).
// Index 0 is null so Q[N] === question N.
const Q = [
  null,
  // Q1
  {
    stimulus: "La sangre es un tejido líquido formado por varios componentes. Uno de ellos es un líquido amarillento compuesto por agua, sales, proteínas y vitaminas que sirve para transportar las células sanguíneas por todo el cuerpo.",
    source: "Ministerio de Educación Pública de Costa Rica.",
    question: "De acuerdo con la información anterior, el componente de la sangre que se describe es el",
    options: [
      "glóbulo rojo.",
      "glóbulo blanco.",
      "plasma.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q2
  {
    stimulus: "En clase de Ciencias, la maestra explica que cuando el cuerpo sufre un corte, ciertos componentes de la sangre actúan de inmediato para detener el sangrado y formar una costra protectora sobre la herida.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según la información anterior, los componentes de la sangre que intervienen en este proceso son las",
    options: [
      "vitaminas.",
      "plaquetas.",
      "proteínas.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q3
  {
    stimulus: "Los glóbulos rojos contienen una proteína de color rojo que les permite transportar el oxígeno desde los pulmones hasta todas las células del cuerpo. Esta proteína le da a la sangre su característico color rojo.",
    source: "Atlas de Ciencias para Primaria.",
    question: "De acuerdo con el texto, la proteína que se encuentra en los glóbulos rojos y que transporta el oxígeno se llama",
    options: [
      "hemoglobina.",
      "leucocito.",
      "trombocito.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Q4
  {
    stimulus: "Una estudiante de sexto grado se realizó un examen de sangre. El médico le explicó que cuando el organismo está combatiendo una infección causada por bacterias, la cantidad de un tipo de célula sanguínea aumenta considerablemente para defender el cuerpo.",
    source: "Guía de Salud Escolar, MEP.",
    question: "Según la información anterior, las células cuya cantidad aumenta durante una infección son los",
    options: [
      "glóbulos rojos.",
      "trombocitos.",
      "glóbulos blancos.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q5
  {
    stimulus: "Las vacunas son sustancias que se aplican al cuerpo para estimular la producción de proteínas defensoras. Gracias a ellas, cuando la persona entra en contacto con la enfermedad en el futuro, su organismo ya sabe cómo combatirla.",
    source: "Ministerio de Salud de Costa Rica.",
    question: "Según el texto, la función principal de las vacunas es",
    options: [
      "curar enfermedades que ya están desarrolladas en el organismo.",
      "eliminar directamente los microorganismos del cuerpo.",
      "preparar al organismo para defenderse de enfermedades futuras.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q6
  {
    stimulus: "En una campaña de salud escolar se indicó que ciertas enfermedades que antes causaban miles de muertes han desaparecido casi por completo gracias a programas de vacunación masiva a nivel mundial.",
    source: "Organización Panamericana de la Salud.",
    question: "De acuerdo con la información anterior, uno de los beneficios más importantes de las vacunas es que permiten",
    options: [
      "reducir el precio de los medicamentos.",
      "erradicar enfermedades contagiosas mortales.",
      "sustituir los tratamientos médicos en hospitales.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q7
  {
    stimulus: "En clase de Ciencias, los estudiantes aprendieron sobre los sistemas del cuerpo humano. El sistema que se encarga de transformar los alimentos en sustancias más simples que pueden pasar a la sangre y nutrir las células recibe un nombre específico.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El sistema que se describe en el texto anterior es el sistema",
    options: [
      "circulatorio.",
      "renal.",
      "digestivo.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q8
  {
    stimulus: "El hígado es un órgano que produce una sustancia verdosa que se encarga de procesar las grasas que ingresan con los alimentos. Además, ayuda a controlar los niveles de colesterol en la sangre.",
    source: "Atlas de Ciencias para Primaria.",
    question: "Según el texto, la sustancia producida por el hígado que se describe es la",
    options: [
      "insulina.",
      "bilis.",
      "saliva.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q9
  {
    stimulus: "El corazón realiza dos movimientos al funcionar: en uno de ellos se contrae para expulsar la sangre hacia los vasos sanguíneos; en el otro, se dilata para recibir la sangre que regresa de los tejidos del cuerpo.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información anterior, el movimiento del corazón cuando se contrae para expulsar la sangre se llama",
    options: [
      "sístole.",
      "diástole.",
      "válvula.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Q10
  {
    stimulus: "Los vasos sanguíneos encargados de transportar los desechos y el dióxido de carbono desde los tejidos del cuerpo de vuelta hacia el corazón reciben un nombre específico. Son de color más oscuro que las arterias.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Los vasos sanguíneos que se describen en el texto son las",
    options: [
      "arterias.",
      "capilares.",
      "venas.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q11
  {
    stimulus: "El sistema respiratorio cumple una función fundamental para que el organismo pueda vivir. Uno de sus procesos consiste en tomar el oxígeno del aire para que llegue a la sangre y expulsar el dióxido de carbono que producen las células.",
    source: "Ministerio de Educación Pública de Costa Rica.",
    question: "La función descrita en el texto anterior se llama",
    options: [
      "digestión.",
      "intercambio gaseoso.",
      "filtración sanguínea.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q12
  {
    stimulus: "Una estructura del sistema respiratorio funciona como una válvula que se abre y se cierra para evitar que los alimentos que tragamos lleguen accidentalmente a los pulmones. Es fundamental en el momento de deglutir.",
    source: "Atlas de Ciencias para Primaria.",
    question: "La estructura que se describe en el texto es la",
    options: [
      "laringe.",
      "tráquea.",
      "epiglotis.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q13
  {
    stimulus: "Los riñones filtran la sangre constantemente a través de estructuras microscópicas. El líquido resultante de ese proceso de filtración es almacenado en un órgano específico hasta que el cuerpo lo expulsa al exterior.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El órgano que almacena la orina hasta su expulsión es la",
    options: [
      "uretra.",
      "nefrona.",
      "vejiga.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q14
  {
    stimulus: "El sistema nervioso controla todas las funciones del cuerpo. Está formado por células altamente especializadas que transmiten impulsos eléctricos a lo largo de una red de comunicación extensa que conecta el cerebro con todos los órganos.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información anterior, las células que forman el sistema nervioso y transmiten los impulsos eléctricos se llaman",
    options: [
      "plaquetas.",
      "eritrocitos.",
      "neuronas.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q15
  {
    stimulus: "Esta estructura del sistema nervioso se encuentra en la parte inferior del cerebro. Se encarga de coordinar los movimientos musculares para que sean precisos y fluidos, como caminar, escribir o tocar un instrumento musical.",
    source: "Atlas de Ciencias para Primaria.",
    question: "La estructura que se describe en el texto es el",
    options: [
      "bulbo raquídeo.",
      "cerebro.",
      "cerebelo.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q16
  {
    stimulus: "En el cuerpo humano hay un sistema formado por glándulas que fabrican sustancias químicas llamadas mensajeros. Estas sustancias viajan por la sangre llevando instrucciones de una parte del cuerpo a otra.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El sistema que se describe en el texto es el sistema",
    options: [
      "nervioso.",
      "circulatorio.",
      "endocrino.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q17
  {
    stimulus: "Un estudiante de sexto grado aprendió que los malos hábitos afectan los sistemas del cuerpo. Por ejemplo, consumir exceso de azúcar y grasas puede dañar un órgano encargado de producir una hormona que regula el nivel de azúcar en la sangre.",
    source: "Ministerio de Salud de Costa Rica.",
    question: "Según el texto, el órgano que puede dañarse por el consumo excesivo de azúcar y que produce insulina es el",
    options: [
      "hígado.",
      "páncreas.",
      "riñón.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q18
  {
    stimulus: "Los sistemas del cuerpo humano no trabajan de forma independiente. Por ejemplo, cuando los pulmones toman el oxígeno del aire, necesitan de otro sistema para que ese oxígeno llegue a todas las células del organismo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, el sistema que trabaja junto con el respiratorio para distribuir el oxígeno a las células es el sistema",
    options: [
      "digestivo.",
      "renal.",
      "circulatorio.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q19
  {
    stimulus: "Una médica le explicó a sus pacientes que existen procedimientos modernos mediante los cuales un órgano enfermo puede ser reemplazado por uno sano proveniente de otra persona, lo que puede salvar vidas en casos críticos.",
    source: "Caja Costarricense de Seguro Social.",
    question: "El procedimiento médico que se describe en el texto se llama",
    options: [
      "clonación.",
      "trasplante de órganos.",
      "vacunación.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q20
  {
    stimulus: "En una clínica, una doctora utilizó un aparato que emite ondas de alta frecuencia para observar el interior del cuerpo de una paciente embarazada sin necesidad de realizarle ninguna cirugía.",
    source: "Caja Costarricense de Seguro Social.",
    question: "El aparato médico descrito en el texto se llama",
    options: [
      "bomba de cobalto.",
      "ultrasonido.",
      "rayos X.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q21
  {
    stimulus: "El sistema reproductor femenino cumple varias funciones. Una de ellas es producir las células sexuales femeninas que, al unirse con las células sexuales masculinas, pueden dar origen a un nuevo ser humano.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Las células sexuales femeninas que se producen en los ovarios se llaman",
    options: [
      "óvulos.",
      "espermatozoides.",
      "embriones.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Q22
  {
    stimulus: "La médula espinal tiene dos funciones principales: transmitir mensajes entre el cerebro y el resto del cuerpo, y coordinar las respuestas inmediatas que el cuerpo realiza ante situaciones de peligro sin que el cerebro tenga que ordenarlas.",
    source: "Atlas de Ciencias para Primaria.",
    question: "Las respuestas rápidas del cuerpo que describe el texto, que no requieren intervención directa del cerebro, se llaman",
    options: [
      "impulsos.",
      "hormonas.",
      "actos reflejos.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q23
  {
    stimulus: "Cuando el sistema inmunitario del cuerpo detecta la entrada de microorganismos dañinos como bacterias o virus, activa mecanismos de defensa para eliminarlos. Uno de esos mecanismos consiste en producir proteínas especiales que neutralizan a los invasores.",
    source: "Ministerio de Salud de Costa Rica.",
    question: "Las proteínas defensoras del cuerpo que se mencionan en el texto se llaman",
    options: [
      "hormonas.",
      "plaquetas.",
      "anticuerpos.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q24
  {
    stimulus: "Las arterias son vasos sanguíneos que tienen paredes gruesas y elásticas porque la sangre que circula por ellas proviene directamente del corazón y lo hace con mucha presión, llevando oxígeno y nutrientes a todos los tejidos.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según el texto, la función principal de las arterias es",
    options: [
      "transportar la sangre con dióxido de carbono hacia el corazón.",
      "almacenar la sangre en los órganos principales.",
      "llevar la sangre con oxígeno desde el corazón hacia los tejidos.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q25
  {
    stimulus: "El intestino delgado es el órgano donde ocurre la mayor parte del proceso de absorción de sustancias nutritivas. Desde ahí, esas sustancias pasan directamente a un sistema que las distribuye por todo el organismo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El sistema que recibe los nutrientes del intestino delgado y los distribuye por el cuerpo es el sistema",
    options: [
      "renal.",
      "circulatorio.",
      "nervioso.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q26
  {
    stimulus: "Una niña le preguntó a su maestra por qué la piel se pone de \"gallina\" cuando hace frío. La maestra le explicó que esa reacción es controlada por un sistema que regula las respuestas del cuerpo ante estímulos del ambiente, como los cambios de temperatura.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El sistema que controla las respuestas del cuerpo ante estímulos como el frío es el sistema",
    options: [
      "nervioso.",
      "endocrino.",
      "digestivo.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Q27
  {
    stimulus: "El bulbo raquídeo es una parte del sistema nervioso que conecta la médula espinal con el encéfalo. Entre sus funciones más importantes está el control de procesos que ocurren de forma automática en el cuerpo, sin que la persona tenga que pensar en ellos.",
    source: "Atlas de Ciencias para Primaria.",
    question: "Según el texto, un ejemplo de función que controla el bulbo raquídeo es",
    options: [
      "memorizar información nueva.",
      "coordinar movimientos al bailar.",
      "regular los latidos del corazón y la respiración.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q28
  {
    stimulus: "Los rayos X son una herramienta médica que emite radiaciones capaces de atravesar los tejidos blandos del cuerpo pero que son absorbidas por las estructuras más densas, permitiéndole al médico observarlas en una imagen.",
    source: "Caja Costarricense de Seguro Social.",
    question: "Según la información anterior, los rayos X se utilizan principalmente para observar",
    options: [
      "órganos como el estómago o los intestinos.",
      "estructuras duras del cuerpo como los huesos.",
      "el movimiento del corazón en tiempo real.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q29
  {
    stimulus: "Para mantener el cuerpo sano, es importante seguir ciertas recomendaciones. Una de las más importantes es suministrarle al organismo las vacunas que corresponden en cada etapa de la vida, ya que esto evita enfermedades contagiosas graves.",
    source: "Ministerio de Salud de Costa Rica.",
    question: "Según el texto, el principal beneficio de aplicarse las vacunas según el calendario establecido es",
    options: [
      "aumentar la velocidad de crecimiento del cuerpo.",
      "mejorar el funcionamiento del sistema digestivo.",
      "prevenir enfermedades contagiosas y proteger la salud.",
    ],
    correct: 2,
    mepBloque: "cuerpo-humano",
  },
  // Q30
  {
    stimulus: "Los sistemas del cuerpo humano trabajan juntos para mantener el organismo en funcionamiento. Por ejemplo, el sistema muscular y el sistema óseo actúan de manera coordinada para permitir el movimiento del cuerpo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, la relación entre el sistema muscular y el sistema óseo sirve para",
    options: [
      "producir hormonas necesarias para el crecimiento.",
      "posibilitar el movimiento del cuerpo.",
      "filtrar sustancias de desecho de la sangre.",
    ],
    correct: 1,
    mepBloque: "cuerpo-humano",
  },
  // Q31
  {
    stimulus: "La biodiversidad se refiere a la variedad de seres vivos que existe en un lugar determinado. Costa Rica es uno de los países con mayor riqueza biológica del mundo gracias a factores como su posición geográfica y la variedad de sus ecosistemas.",
    source: "SINAC, Sistema Nacional de Áreas de Conservación.",
    question: "Según el texto, el término que hace referencia a la variedad de seres vivos en un lugar es",
    options: [
      "ecosistema.",
      "biodiversidad.",
      "nicho ecológico.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q32
  {
    stimulus: "En un bosque viven cientos de aves de la misma especie. Todas ellas comparten el mismo territorio, se alimentan de los mismos recursos y se reproducen entre sí.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Al conjunto de individuos de la misma especie que viven en el mismo lugar se le llama",
    options: [
      "comunidad.",
      "población.",
      "ecosistema.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q33
  {
    stimulus: "En el Parque Nacional Corcovado conviven jaguares, tapires, monos, serpientes, cientos de especies de plantas, hongos y microorganismos, todos interactuando entre sí y con el ambiente que los rodea.",
    source: "SINAC, Sistema Nacional de Áreas de Conservación.",
    question: "Al conjunto de todos los seres vivos y su ambiente no vivo que interactúan en ese lugar se le llama",
    options: [
      "población.",
      "comunidad.",
      "ecosistema.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q34
  {
    stimulus: "Las plantas son organismos que elaboran su propio alimento a partir de la luz solar, el agua y el dióxido de carbono del ambiente. Este proceso ocurre principalmente en sus hojas y les permite crecer y desarrollarse sin necesitar alimentarse de otros seres vivos.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información anterior, los organismos que producen su propio alimento como las plantas se clasifican como",
    options: [
      "heterótrofos.",
      "descomponedores.",
      "autótrofos.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q35
  {
    stimulus: "Los organismos que no pueden producir su propio alimento deben obtenerlo consumiendo a otros seres vivos. Algunos se alimentan de plantas, otros de animales, y algunos de ambos.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Los organismos que obtienen su alimento consumiendo a otros seres vivos se clasifican como",
    options: [
      "heterótrofos.",
      "autótrofos.",
      "productores.",
    ],
    correct: 0,
    mepBloque: "biodiversidad",
  },
  // Q36
  {
    stimulus: "El pájaro carpintero tiene un pico largo, rígido y en forma de cincel que le permite golpear la madera de los árboles para encontrar insectos que se esconden debajo de la corteza. Esta característica le permite sobrevivir en el bosque.",
    source: "Atlas de Fauna Costarricense.",
    question: "La característica del pico del pájaro carpintero descrita en el texto es un ejemplo de adaptación para",
    options: [
      "la reproducción.",
      "la defensa contra depredadores.",
      "la alimentación.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q37
  {
    stimulus: "Algunas ranas de los bosques tropicales poseen colores muy vivos y llamativos, como el rojo, el amarillo o el azul. Estos colores brillantes funcionan como una advertencia para otros animales, indicándoles que son tóxicas y que no deben ser consumidas.",
    source: "Instituto Nacional de Biodiversidad, INBio.",
    question: "Los colores llamativos de las ranas venenosas son una adaptación para",
    options: [
      "atraer a sus presas.",
      "defenderse de sus depredadores.",
      "encontrar pareja durante la reproducción.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q38
  {
    stimulus: "Los peces tienen en su cuerpo unas estructuras en forma de láminas que les permiten absorber el oxígeno disuelto en el agua para respirar. Gracias a ellas pueden vivir completamente sumergidos en ríos, lagos y océanos.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Las estructuras que utilizan los peces para respirar bajo el agua se llaman",
    options: [
      "pulmones.",
      "tráqueas.",
      "branquias.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q39
  {
    stimulus: "Las bacterias son organismos microscópicos que están formados por una sola célula. A diferencia de las células de los animales y las plantas, sus células no poseen un núcleo definido o con membrana que separe su material genético del resto del contenido celular.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, las bacterias pertenecen al reino",
    options: [
      "Protista.",
      "Fungi.",
      "Monera.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q40
  {
    stimulus: "Los hongos son organismos que no pueden realizar fotosíntesis, por lo que obtienen sus nutrientes descomponiendo materia orgánica en descomposición o absorbiendo nutrientes de otros seres vivos. Un ejemplo común son los champiñones.",
    source: "Instituto Nacional de Biodiversidad, INBio.",
    question: "Los champiñones y otros organismos similares pertenecen al reino",
    options: [
      "Monera.",
      "Plantae.",
      "Fungi.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q41
  {
    stimulus: "La fotosíntesis es el proceso mediante el cual las plantas capturan la energía de la luz solar y la utilizan para transformar el agua y el dióxido de carbono en glucosa. Como resultado de este proceso también se libera oxígeno al ambiente.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información anterior, el gas que se libera al ambiente como resultado de la fotosíntesis es el",
    options: [
      "dióxido de carbono.",
      "nitrógeno.",
      "oxígeno.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q42
  {
    stimulus: "Para que una planta realice el proceso de fotosíntesis necesita ciertos ingredientes del ambiente. Los científicos han identificado tres elementos fundamentales sin los cuales este proceso no puede llevarse a cabo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, los tres elementos necesarios para la fotosíntesis son",
    options: [
      "oxígeno, glucosa y sales minerales.",
      "suelo fértil, temperatura cálida y humedad.",
      "luz solar, agua y dióxido de carbono.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q43
  {
    stimulus: "En un prado, las plantas producen su propio alimento. Un conejo se alimenta de las plantas. Una serpiente caza y come al conejo.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información anterior, en esta cadena alimentaria la serpiente ocupa el nivel de",
    options: [
      "productor.",
      "consumidor primario.",
      "consumidor secundario.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q44
  {
    stimulus: "Una relación entre dos especies en la que ambas se benefician mutuamente recibe un nombre específico en biología. Un ejemplo es la relación entre las flores y las abejas: las flores brindan néctar a las abejas y estas, al moverse, transportan el polen entre flores.",
    source: "Instituto Nacional de Biodiversidad, INBio.",
    question: "La relación entre la flor y la abeja descrita en el texto se clasifica como",
    options: [
      "parasitismo.",
      "comensalismo.",
      "mutualismo.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q45
  {
    stimulus: "En la naturaleza existen relaciones entre organismos en las que uno de ellos se beneficia sin causarle daño ni beneficio al otro. Un ejemplo es el rémora, un pez que se adhiere a los tiburones para alimentarse de sus restos de comida sin perjudicar al tiburón.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La relación descrita en el texto se clasifica como",
    options: [
      "mutualismo.",
      "parasitismo.",
      "comensalismo.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q46
  {
    stimulus: "El clima de Costa Rica tiene una influencia directa sobre la gran variedad de seres vivos que habitan el país. La combinación de temperatura, precipitación y humedad crea condiciones favorables para que miles de especies puedan vivir.",
    source: "SINAC, Sistema Nacional de Áreas de Conservación.",
    question: "Según el texto, el factor que más favorece la biodiversidad de Costa Rica es",
    options: [
      "la falta de estaciones climáticas.",
      "la variedad de condiciones climáticas en el territorio.",
      "la escasa presencia de volcanes activos.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q47
  {
    stimulus: "La deforestación es la tala masiva de árboles en áreas boscosas para utilizarlos como madera o para convertir los terrenos en zonas agrícolas o urbanas. Esta práctica tiene consecuencias graves para los seres vivos que dependen del bosque para sobrevivir.",
    source: "Ministerio de Ambiente y Energía, MINAE.",
    question: "Según el texto, una consecuencia directa de la deforestación para la biodiversidad es",
    options: [
      "el aumento de la producción de oxígeno en el ambiente.",
      "la pérdida del hábitat de muchas especies animales y vegetales.",
      "la mejora en la calidad del suelo de los bosques.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q48
  {
    stimulus: "En una laguna, la proliferación excesiva de algas verdes causó la muerte de numerosos peces. Los científicos explicaron que esto se debió a que las algas consumieron casi todo el oxígeno disuelto en el agua, desequilibrando el ecosistema.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El texto describe una situación en la que el ecosistema perdió su",
    options: [
      "temperatura habitual.",
      "diversidad de algas.",
      "equilibrio ecológico.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q49
  {
    stimulus: "Las lombrices de tierra viven en el suelo y se alimentan de materia orgánica en descomposición. Al hacerlo, ayudan a descomponer los residuos y devuelven nutrientes al suelo, haciéndolo más fértil para las plantas.",
    source: "Instituto Nacional de Biodiversidad, INBio.",
    question: "Según el texto, la función ecológica de las lombrices en la cadena alimentaria es la de",
    options: [
      "productor.",
      "consumidor primario.",
      "descomponedor.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q50
  {
    stimulus: "Las plantas de las selvas tropicales responden a los cambios de luz orientando sus tallos y hojas hacia la fuente de luz solar. Esta respuesta de movimiento ante un estímulo lumínico es característica de los vegetales.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La respuesta de las plantas al estímulo de la luz que se describe en el texto se llama",
    options: [
      "simbiosis.",
      "tropismo.",
      "fotosíntesis.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q51
  {
    stimulus: "Los hongos del género Penicillium produjeron de forma natural una sustancia que los científicos lograron aislar y utilizar para crear medicamentos capaces de combatir infecciones bacterianas en los seres humanos.",
    source: "Instituto Nacional de Biodiversidad, INBio.",
    question: "La sustancia producida por el hongo Penicillium que se usa para combatir infecciones es la",
    options: [
      "insulina.",
      "penicilina.",
      "bilis.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q52
  {
    stimulus: "En una investigación escolar, un grupo de estudiantes encontró en el suelo organismos unicelulares que tenían núcleo definido. Algunos de ellos se movían por sí solos usando estructuras en forma de látigo; otros estaban formados por colonias.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según la información, los organismos descritos pertenecen al reino",
    options: [
      "Fungi.",
      "Monera.",
      "Protista.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q53
  {
    stimulus: "Los invertebrados son animales que carecen de columna vertebral. Entre ellos se encuentran los insectos, los arácnidos, los moluscos y los gusanos. Estos organismos representan la mayor parte de la fauna del planeta.",
    source: "Atlas de Fauna Costarricense.",
    question: "Según la información anterior, los arácnidos pertenecen al reino",
    options: [
      "Fungi.",
      "Plantae.",
      "Animalia.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q54
  {
    stimulus: "El calentamiento global ha provocado que las temperaturas de los océanos aumenten, lo que ha causado el blanqueamiento de los arrecifes de coral. Este fenómeno afecta a cientos de especies marinas que dependen del coral para alimentarse y refugiarse.",
    source: "Ministerio de Ambiente y Energía, MINAE.",
    question: "El blanqueamiento de los arrecifes de coral es una consecuencia de la ruptura del equilibrio ecológico causada principalmente por",
    options: [
      "la actividad volcánica submarina.",
      "la pesca excesiva en los arrecifes.",
      "el aumento de la temperatura del océano por el calentamiento global.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q55
  {
    stimulus: "Una erupción volcánica puede destruir miles de hectáreas de bosque, acabar con poblaciones de animales y alterar completamente la composición del suelo en una región. Sin embargo, con el tiempo, la vida regresa y coloniza nuevamente el área afectada.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "La erupción volcánica descrita es un ejemplo de evento natural que",
    options: [
      "mejora permanentemente el ecosistema.",
      "no afecta el equilibrio ecológico.",
      "altera temporalmente el equilibrio ecológico.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q56
  {
    stimulus: "Los organismos pluricelulares, como las plantas, están organizados en niveles de complejidad creciente. El primer nivel es la célula; varias células iguales forman el segundo nivel, que realiza una función específica dentro del organismo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El segundo nivel de organización que describe el texto, formado por células iguales que realizan una función específica, se llama",
    options: [
      "órgano.",
      "tejido.",
      "sistema.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q57
  {
    stimulus: "La reproducción asexual es aquella en la que un solo organismo produce descendencia genéticamente idéntica a él mismo, sin necesitar de otro individuo. Un ejemplo son los organismos que se reproducen por bipartición o fragmentación.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según el texto, la principal característica de la reproducción asexual es que",
    options: [
      "produce descendencia a partir de un solo individuo, sin necesitar pareja.",
      "mezcla características genéticas de dos individuos diferentes.",
      "solo ocurre en organismos pluricelulares complejos.",
    ],
    correct: 0,
    mepBloque: "biodiversidad",
  },
  // Q58
  {
    stimulus: "En las selvas de Costa Rica, la gran diversidad de altitudes y relieves crea diferentes microhábitats. En cada uno de estos microhábitats viven especies específicas que han desarrollado adaptaciones para sobrevivir en esas condiciones particulares.",
    source: "SINAC, Sistema Nacional de Áreas de Conservación.",
    question: "El espacio específico dentro de un ecosistema que ocupa una especie y que incluye sus condiciones particulares de vida se llama",
    options: [
      "comunidad.",
      "nicho ecológico.",
      "hábitat.",
    ],
    correct: 1,
    mepBloque: "biodiversidad",
  },
  // Q59
  {
    stimulus: "Durante las migraciones, muchas especies de aves recorren miles de kilómetros guiándose por las estrellas, el Sol o el campo magnético de la Tierra. Este comportamiento les permite llegar a regiones cálidas cuando el frío llega a su lugar de origen.",
    source: "Atlas de Fauna Costarricense.",
    question: "La migración de las aves es un ejemplo de adaptación relacionada con",
    options: [
      "la alimentación.",
      "la defensa contra depredadores.",
      "la respuesta a cambios ambientales para sobrevivir.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q60
  {
    stimulus: "El ser humano también pertenece al reino animal. Al igual que otros mamíferos, el ser humano es un organismo pluricelular, heterótrofo, con núcleo celular definido y con la capacidad de desplazarse de un lugar a otro.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, el ser humano se clasifica dentro del reino",
    options: [
      "Protista.",
      "Plantae.",
      "Animalia.",
    ],
    correct: 2,
    mepBloque: "biodiversidad",
  },
  // Q61
  {
    stimulus: "En clase de Ciencias están estudiando las formas en que el calor se transmite de un cuerpo a otro. El maestro explica que cuando un metal se calienta en un extremo, el calor viaja a lo largo del material hasta que todo el objeto alcanza la misma temperatura.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La forma de transmisión del calor que describe el texto se llama",
    options: [
      "convección.",
      "radiación.",
      "conducción.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q62
  {
    stimulus: "Cuando el Sol calienta la superficie de la Tierra, no necesita ningún material sólido ni líquido para transferir su energía. Esta forma de transmisión del calor puede viajar incluso a través del vacío del espacio exterior.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La forma de transmisión del calor descrita en el texto se llama",
    options: [
      "conducción.",
      "convección.",
      "radiación.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q63
  {
    stimulus: "En un experimento, los estudiantes observaron que al calentar agua en una olla, el agua del fondo sube cuando se calienta y el agua más fría baja, creando un movimiento circular continuo que distribuye el calor de manera uniforme en el líquido.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La forma de transmisión del calor observada en el experimento se llama",
    options: [
      "conducción.",
      "convección.",
      "radiación.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q64
  {
    stimulus: "Cuando un rayo de luz pasa de un medio a otro de diferente densidad, como del aire al agua, cambia de velocidad y en algunos casos cambia de dirección. Este fenómeno es el que hace que un lápiz parezca doblarse cuando se introduce en un vaso con agua.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El fenómeno descrito en el texto se llama",
    options: [
      "reflexión.",
      "refracción.",
      "descomposición.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q65
  {
    stimulus: "Cuando la luz solar pasa a través de un prisma de vidrio, el rayo blanco se descompone en los colores del arco iris: rojo, anaranjado, amarillo, verde, azul, índigo y violeta. El mismo fenómeno ocurre cuando la lluvia descompone la luz solar en el cielo.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El fenómeno que produce el arco iris y que consiste en la separación de la luz blanca en sus colores se llama",
    options: [
      "refracción.",
      "reflexión.",
      "descomposición de la luz.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q66
  {
    stimulus: "Un espejo plano devuelve la luz que llega a su superficie hacia el mismo lado de donde provino. Gracias a este fenómeno podemos ver nuestra imagen cuando nos miramos en un espejo.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El fenómeno que describe el texto, en el que la luz rebota sobre una superficie y regresa hacia su origen, se llama",
    options: [
      "reflexión.",
      "refracción.",
      "conducción.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q67
  {
    stimulus: "Un objeto es transparente cuando deja pasar la luz completamente a través de él, permitiendo ver con claridad los objetos del otro lado. El vidrio de una ventana limpia es un ejemplo de este tipo de material.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, el vidrio de una ventana limpia se clasifica como un material",
    options: [
      "transparente.",
      "translúcido.",
      "opaco.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q68
  {
    stimulus: "Las lentes de los anteojos aprovechan las propiedades de la luz para corregir problemas de visión. Dependiendo del tipo de problema, la lente puede hacer que los rayos de luz converjan o diverjan antes de entrar al ojo, lo que mejora la calidad de la imagen que percibe la persona.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El fenómeno de la luz que aprovechan las lentes de los anteojos para corregir la visión es la",
    options: [
      "reflexión.",
      "refracción.",
      "descomposición.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q69
  {
    stimulus: "En un experimento escolar, los estudiantes construyeron un molinillo de papel y lo colocaron frente a un ventilador. Observaron que el movimiento del aire hacía girar el molinillo. La energía del molinillo en movimiento se llama energía de movimiento.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La energía que posee el molinillo cuando está girando, debida a su movimiento, se llama energía",
    options: [
      "potencial.",
      "química.",
      "cinética.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q70
  {
    stimulus: "Un esquiador en la cima de una montaña, antes de empezar a descender, posee una forma de energía almacenada relacionada con su posición elevada. Mientras más alta sea la montaña, mayor será esta energía almacenada.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La energía que posee el esquiador en la cima de la montaña, antes de empezar el descenso, se llama energía",
    options: [
      "potencial.",
      "cinética.",
      "solar.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q71
  {
    stimulus: "Las plantas almacenan la energía del Sol en sus frutos y semillas en forma de azúcares. Cuando los animales o las personas comen esos alimentos, su cuerpo libera la energía almacenada en ellos para utilizarla en sus actividades diarias.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La energía almacenada en los alimentos que el cuerpo libera al digerirlos es la energía",
    options: [
      "cinética.",
      "eléctrica.",
      "química.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q72
  {
    stimulus: "Las centrales geotérmicas aprovechan el calor del interior de la Tierra para generar electricidad. En Costa Rica, el volcán Miravalles alberga una de las plantas geotérmicas más importantes del país.",
    source: "Instituto Costarricense de Electricidad, ICE.",
    question: "Según el texto, la energía que aprovechan las plantas geotérmicas proviene del",
    options: [
      "movimiento del viento.",
      "calor del Sol.",
      "calor del interior de la Tierra.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q73
  {
    stimulus: "Los combustibles fósiles como el petróleo, el carbón y el gas natural se formaron hace millones de años a partir de restos de seres vivos. Existen en cantidades limitadas y al quemarse liberan gases que contribuyen al efecto invernadero.",
    source: "Ministerio de Ambiente y Energía, MINAE.",
    question: "Según el texto, los combustibles fósiles se consideran una fuente de energía no renovable porque",
    options: [
      "producen electricidad de manera eficiente.",
      "existen en cantidades limitadas y no pueden regenerarse.",
      "son capaces de funcionar sin contaminar el ambiente.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q74
  {
    stimulus: "Las fuentes de energía renovables tienen la capacidad de regenerarse de manera natural en períodos de tiempo relativamente cortos. Son consideradas amigables con el ambiente porque no producen gases de efecto invernadero al ser utilizadas.",
    source: "Instituto Costarricense de Electricidad, ICE.",
    question: "Según el texto, una característica que diferencia las fuentes de energía renovables de las no renovables es que las renovables",
    options: [
      "producen más electricidad que las no renovables.",
      "pueden regenerarse de manera natural y no contaminan.",
      "solo pueden utilizarse en países desarrollados.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q75
  {
    stimulus: "Costa Rica genera la mayor parte de su electricidad a partir de fuentes limpias. El agua de los ríos es utilizada en represas para generar electricidad, lo que convierte al país en un referente mundial en el uso de energías limpias.",
    source: "Instituto Costarricense de Electricidad, ICE.",
    question: "Según el texto, el tipo de energía que se genera a partir de la fuerza del agua en las represas costarricenses se llama energía",
    options: [
      "solar.",
      "eólica.",
      "hidroeléctrica.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q76
  {
    stimulus: "En una feria científica, un estudiante demostró que al encender una lámpara, la energía eléctrica que llega a ella se transforma en dos formas de energía diferentes: una que permite ver en la oscuridad y otra que se siente como calor al acercar la mano.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Las dos formas de energía en las que se transforma la energía eléctrica al encender una lámpara son",
    options: [
      "cinética y sonora.",
      "química y eólica.",
      "lumínica y calorífica.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q77
  {
    stimulus: "Los circuitos eléctricos tienen elementos básicos que los componen. Uno de estos elementos es el encargado de producir o suministrar la energía eléctrica necesaria para que los otros componentes del circuito funcionen. Las baterías o pilas son un ejemplo de este elemento.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El elemento del circuito eléctrico que suministra la energía es el",
    options: [
      "generador.",
      "interruptor.",
      "conductor.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q78
  {
    stimulus: "En un circuito eléctrico, si uno de los bombillos se funde, todos los demás se apagan también, porque solo existe un camino para que la corriente eléctrica circule. Las luces navideñas antiguas funcionaban de esta manera.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "El tipo de circuito que se describe en el texto se llama circuito",
    options: [
      "en serie.",
      "en paralelo.",
      "alterno.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q79
  {
    stimulus: "En el tipo de circuito eléctrico que se usa en las casas, si una bombilla se funde, las demás continúan funcionando normalmente porque la electricidad tiene varios caminos independientes para llegar a cada dispositivo.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El tipo de circuito que se usa en las casas y que permite que cada dispositivo funcione de forma independiente se llama circuito",
    options: [
      "en serie.",
      "en paralelo.",
      "continuo.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q80
  {
    stimulus: "Las cargas eléctricas positivas y negativas interactúan entre sí de una manera predecible: cuando dos cargas tienen el mismo signo, se empujan; cuando tienen signos diferentes, se atraen.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "Según el texto, cuando dos cargas eléctricas tienen signos opuestos (una positiva y una negativa),",
    options: [
      "no ocurre ninguna interacción entre ellas.",
      "se repelen mutuamente.",
      "se atraen mutuamente.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q81
  {
    stimulus: "La energía eólica aprovecha el movimiento del viento para hacer girar grandes aspas unidas a un generador que convierte ese movimiento en electricidad. Esta energía no produce gases contaminantes y es inagotable.",
    source: "Instituto Costarricense de Electricidad, ICE.",
    question: "Según el texto, la energía eólica se produce a partir de",
    options: [
      "el calor del Sol.",
      "la fuerza del viento.",
      "el movimiento del agua en los ríos.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q82
  {
    stimulus: "La energía nuclear se obtiene de reacciones que ocurren en el núcleo de los átomos. Si bien no produce emisiones de dióxido de carbono directamente, genera residuos radiactivos que son difíciles de almacenar de forma segura.",
    source: "Ministerio de Ambiente y Energía, MINAE.",
    question: "Según el texto, el principal problema ambiental de la energía nuclear es que",
    options: [
      "produce grandes cantidades de dióxido de carbono.",
      "genera residuos radiactivos de difícil manejo.",
      "depende de condiciones climáticas variables para funcionar.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q83
  {
    stimulus: "Un panel solar instalado en el techo de una casa capta la luz del Sol y la convierte en electricidad. Este proceso representa una transformación de un tipo de energía en otro tipo de energía diferente.",
    source: "Instituto Costarricense de Electricidad, ICE.",
    question: "Según la información anterior, la transformación de energía que ocurre en el panel solar es de energía",
    options: [
      "química a eléctrica.",
      "cinética a lumínica.",
      "solar a eléctrica.",
    ],
    correct: 2,
    mepBloque: "energia",
  },
  // Q84
  {
    stimulus: "La corriente eléctrica que se utiliza en los hogares y que se genera en las plantas eléctricas cambia de dirección constantemente y a gran velocidad. Esta característica la diferencia de la corriente que producen las baterías.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La corriente eléctrica que cambia de dirección de manera continua y que se usa en los hogares se llama corriente",
    options: [
      "alterna.",
      "continua.",
      "estática.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Q85
  {
    stimulus: "La energía que almacenan los alimentos que consumimos es fundamental para que el cuerpo pueda realizar todas sus funciones vitales. Cuando el cuerpo utiliza esa energía para moverse, trabaja o genera calor, se produce una transformación de energía.",
    source: "Ministerio de Salud de Costa Rica.",
    question: "La transformación de energía que ocurre cuando el cuerpo utiliza los nutrientes de los alimentos para moverse es de energía",
    options: [
      "eléctrica a térmica.",
      "química a cinética.",
      "lumínica a química.",
    ],
    correct: 1,
    mepBloque: "energia",
  },
  // Q86
  {
    stimulus: "La Tierra está formada por capas concéntricas. La capa más externa, sobre la que vivimos y en la que se encuentran los continentes y los fondos oceánicos, es la más delgada de todas las capas del planeta.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La capa más externa de la Tierra descrita en el texto se llama",
    options: [
      "manto.",
      "núcleo.",
      "corteza.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q87
  {
    stimulus: "En el interior de la Tierra existe una capa formada por roca fundida y materiales en estado semisólido, que se encuentra entre la corteza terrestre y el núcleo. Esta capa es la más gruesa del planeta.",
    source: "Libro de Ciencias, Morfho Editorial.",
    question: "La capa del interior de la Tierra descrita en el texto es el",
    options: [
      "núcleo externo.",
      "manto.",
      "núcleo interno.",
    ],
    correct: 1,
    mepBloque: "geofisica",
  },
  // Q88
  {
    stimulus: "La teoría de la tectónica de placas explica que la corteza terrestre está dividida en grandes fragmentos que flotan sobre el manto y se desplazan lentamente. El encuentro o separación de estos fragmentos genera fenómenos geológicos importantes.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Los grandes fragmentos de la corteza terrestre que se desplazan lentamente sobre el manto se llaman",
    options: [
      "fallas geológicas.",
      "placas tectónicas.",
      "capas tectónicas.",
    ],
    correct: 1,
    mepBloque: "geofisica",
  },
  // Q89
  {
    stimulus: "En las zonas donde dos placas tectónicas colisionan, una de ellas puede hundirse bajo la otra. Al hundirse, el material se funde y puede ascender a la superficie a través de aberturas en la corteza terrestre, creando estructuras volcánicas.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "Según el texto, los volcanes se forman principalmente como resultado del",
    options: [
      "movimiento de rotación de la Tierra.",
      "enfriamiento del núcleo terrestre.",
      "desplazamiento y colisión de las placas tectónicas.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q90
  {
    stimulus: "Los terremotos son vibraciones que se producen en la corteza terrestre como resultado del movimiento repentino de las rocas a lo largo de fracturas o fallas geológicas. La energía liberada se propaga en todas direcciones en forma de ondas.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "Las vibraciones que viajan a través de la corteza terrestre durante un terremoto se llaman",
    options: [
      "erupciones.",
      "ondas sísmicas.",
      "mareas.",
    ],
    correct: 1,
    mepBloque: "geofisica",
  },
  // Q91
  {
    stimulus: "La escala Richter es un instrumento de medición que permite cuantificar la magnitud de la energía liberada durante un terremoto. Fue diseñada por el científico Charles Richter en 1935 y se usa ampliamente en sismología.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "Según la información anterior, la escala Richter se utiliza para medir",
    options: [
      "la profundidad a la que se origina un terremoto.",
      "la velocidad de desplazamiento de las placas tectónicas.",
      "la magnitud de la energía liberada en un terremoto.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q92
  {
    stimulus: "La Tierra realiza un movimiento sobre su propio eje imaginario que dura aproximadamente 24 horas. Como resultado de este movimiento, las partes del planeta que están orientadas hacia el Sol reciben luz y calor, mientras que las que están de espaldas quedan en oscuridad.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El movimiento de la Tierra sobre su propio eje que origina el día y la noche se llama movimiento de",
    options: [
      "rotación.",
      "traslación.",
      "revolución.",
    ],
    correct: 0,
    mepBloque: "geofisica",
  },
  // Q93
  {
    stimulus: "La Tierra también realiza un recorrido alrededor del Sol a lo largo de un año. Durante este recorrido, la inclinación del eje terrestre provoca que diferentes partes del planeta reciban más o menos luz solar en distintas épocas del año.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "El movimiento de la Tierra alrededor del Sol que origina las estaciones del año se llama movimiento de",
    options: [
      "rotación.",
      "traslación.",
      "precesión.",
    ],
    correct: 1,
    mepBloque: "geofisica",
  },
  // Q94
  {
    stimulus: "La atmósfera terrestre está compuesta por varias capas de gases que envuelven al planeta. La capa más cercana a la superficie, donde ocurren los fenómenos meteorológicos como las lluvias, los vientos y las tormentas, recibe un nombre específico.",
    source: "Instituto Meteorológico Nacional.",
    question: "La capa de la atmósfera más cercana a la superficie donde ocurren los fenómenos del tiempo se llama",
    options: [
      "tropósfera.",
      "estratósfera.",
      "mesósfera.",
    ],
    correct: 0,
    mepBloque: "geofisica",
  },
  // Q95
  {
    stimulus: "La Luna realiza dos movimientos simultáneos: uno en el que gira sobre su propio eje y otro en el que da una vuelta completa alrededor de la Tierra. La duración de ambos movimientos es prácticamente igual, lo que explica por qué siempre vemos la misma cara de la Luna desde la Tierra.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Según el texto, el movimiento de la Luna alrededor de la Tierra se llama",
    options: [
      "rotación lunar.",
      "traslación lunar.",
      "revolución solar.",
    ],
    correct: 1,
    mepBloque: "geofisica",
  },
  // Q96
  {
    stimulus: "Las fases de la Luna son los distintos aspectos que presenta desde la Tierra a medida que avanza en su órbita alrededor del planeta. Estas fases se producen porque la parte iluminada por el Sol que podemos ver varía con su posición relativa.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "Las fases de la Luna se producen por cambios en",
    options: [
      "el tamaño real de la Luna en su órbita.",
      "la distancia entre la Tierra y el Sol.",
      "la porción de la Luna iluminada por el Sol que vemos desde la Tierra.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q97
  {
    stimulus: "El sistema solar está formado por una estrella central y todos los objetos que orbitan a su alrededor gracias a la fuerza de gravedad. Entre esos objetos se encuentran los planetas, sus satélites, los cometas y los asteroides.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La estrella que ocupa el centro del sistema solar y alrededor de la cual orbitan los planetas es el",
    options: [
      "Sol.",
      "cometa.",
      "asteroide.",
    ],
    correct: 0,
    mepBloque: "geofisica",
  },
  // Q98
  {
    stimulus: "Las galaxias son enormes agrupaciones de estrellas, gas y polvo cósmico que se mantienen unidas por la fuerza de gravedad. La galaxia en la que se encuentra nuestro sistema solar recibe un nombre particular.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La galaxia en la que se encuentra nuestro sistema solar se llama",
    options: [
      "Andrómeda.",
      "Gran Nube de Magallanes.",
      "Vía Láctea.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q99
  {
    stimulus: "Un terremoto de alta magnitud en el fondo del océano puede desplazar grandes volúmenes de agua, generando olas gigantes que viajan a gran velocidad hacia las costas. Estas olas pueden causar grandes destrucciones al llegar a tierra firme.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "Las olas gigantes generadas por terremotos submarinos que describe el texto se llaman",
    options: [
      "huracanes.",
      "tormentas.",
      "tsunamis.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
  // Q100
  {
    stimulus: "En Costa Rica, la Cordillera Volcánica Central, que incluye volcanes como el Poás, el Irazú y el Turrialba, fue formada por la actividad de las placas tectónicas a lo largo de millones de años. Esta actividad continua sigue modificando el relieve del territorio nacional.",
    source: "OVSICORI, Observatorio Vulcanológico de Costa Rica.",
    question: "Según el texto, la formación de la Cordillera Volcánica Central de Costa Rica se debe a",
    options: [
      "los movimientos de rotación y traslación de la Tierra.",
      "la acumulación de sedimentos en el fondo del océano.",
      "la actividad de las placas tectónicas a lo largo del tiempo.",
    ],
    correct: 2,
    mepBloque: "geofisica",
  },
];

// Helper: pick questions by 1-based indices
const pick = (indices) => indices.map((i) => ({ ...Q[i] }));

const exam1 = pick([
1, 4, 7, 10, 13, 16, 18, 21, 24, 27, 30, 31, 35, 38, 41, 44, 47, 50, 53, 56, 59, 61, 64, 67, 70, 73, 76, 79, 82, 85, 86, 90, 93, 96, 99
]);

const exam2 = pick([
2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 34, 37, 40, 43, 46, 48, 51, 54, 57, 60, 62, 65, 68, 71, 74, 77, 80, 83, 87, 89, 92, 94, 97, 100
]);

const exam3Unique = pick([
3, 6, 9, 12, 15, 19, 22, 25, 28, 33, 36, 39, 42, 45, 49, 52, 55, 58, 63, 66, 69, 72, 75, 78, 81, 84, 88, 91, 95, 98
]);

// 5 repeated questions for Exam 3 with options reordered so correct is at index 0
const exam3Repeats = [
  // Repeat of Q1 — correct moved to index 0
  {
    stimulus: "La sangre es un tejido líquido formado por varios componentes. Uno de ellos es un líquido amarillento compuesto por agua, sales, proteínas y vitaminas que sirve para transportar las células sanguíneas por todo el cuerpo.",
    source: "Ministerio de Educación Pública de Costa Rica.",
    question: "De acuerdo con la información anterior, el componente de la sangre que se describe es el",
    options: [
      "plasma.",
      "glóbulo rojo.",
      "glóbulo blanco.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Repeat of Q4 — correct moved to index 0
  {
    stimulus: "Una estudiante de sexto grado se realizó un examen de sangre. El médico le explicó que cuando el organismo está combatiendo una infección causada por bacterias, la cantidad de un tipo de célula sanguínea aumenta considerablemente para defender el cuerpo.",
    source: "Guía de Salud Escolar, MEP.",
    question: "Según la información anterior, las células cuya cantidad aumenta durante una infección son los",
    options: [
      "glóbulos blancos.",
      "glóbulos rojos.",
      "trombocitos.",
    ],
    correct: 0,
    mepBloque: "cuerpo-humano",
  },
  // Repeat of Q31 — correct moved to index 0
  {
    stimulus: "La biodiversidad se refiere a la variedad de seres vivos que existe en un lugar determinado. Costa Rica es uno de los países con mayor riqueza biológica del mundo gracias a factores como su posición geográfica y la variedad de sus ecosistemas.",
    source: "SINAC, Sistema Nacional de Áreas de Conservación.",
    question: "Según el texto, el término que hace referencia a la variedad de seres vivos en un lugar es",
    options: [
      "biodiversidad.",
      "nicho ecológico.",
      "ecosistema.",
    ],
    correct: 0,
    mepBloque: "biodiversidad",
  },
  // Repeat of Q61 — correct moved to index 0
  {
    stimulus: "En clase de Ciencias están estudiando las formas en que el calor se transmite de un cuerpo a otro. El maestro explica que cuando un metal se calienta en un extremo, el calor viaja a lo largo del material hasta que todo el objeto alcanza la misma temperatura.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La forma de transmisión del calor que describe el texto se llama",
    options: [
      "conducción.",
      "convección.",
      "radiación.",
    ],
    correct: 0,
    mepBloque: "energia",
  },
  // Repeat of Q86 — correct moved to index 0
  {
    stimulus: "La Tierra está formada por capas concéntricas. La capa más externa, sobre la que vivimos y en la que se encuentran los continentes y los fondos oceánicos, es la más delgada de todas las capas del planeta.",
    source: "Guía de Ciencias, Primaria Diurna, MEP.",
    question: "La capa más externa de la Tierra descrita en el texto se llama",
    options: [
      "corteza.",
      "manto.",
      "núcleo.",
    ],
    correct: 0,
    mepBloque: "geofisica",
  },
];

const exam3 = [...exam3Unique, ...exam3Repeats];

export const cienciasExtraExams = [exam1, exam2, exam3];
