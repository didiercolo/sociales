// src/data/socialesExtraExams.js
// Pre-built MEP extra exam question sets for Estudios Sociales.
// Source: documents/AI Geneterated exams/Estudios_Sociales_100_Preguntas_Formato_MEP.md
// All 100 questions are mepBloque "geografia-historia".
// Exams 1 & 2: 35 unique questions each. Exam 3: 30 unique + 5 repeats (options reordered).

const MEP_BLOQUE = "geografia-historia";

// All 100 source questions, indexed Q1..Q100 by array position (1-based).
// Index 0 is null so Q[N] === question N.
const Q = [
  null,
  // Q1
  {
    stimulus: "Costa Rica se localiza en el istmo centroamericano, entre los paralelos 8° y 11° de latitud norte. Esta posición ubica al país completamente al norte de la línea ecuatorial y al oeste del meridiano de Greenwich.",
    source: "Instituto Geográfico Nacional.",
    question: "De acuerdo con la información anterior, Costa Rica se ubica en los hemisferios",
    options: [
      "sur y occidental.",
      "norte y oriental.",
      "norte y occidental.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q2
  {
    stimulus: "Costa Rica limita al norte con Nicaragua y al sureste con Panamá. Esta posición, en el centro del continente americano, convierte al país en un paso obligado entre Norteamérica y Sudamérica.",
    source: "Atlas de Costa Rica.",
    question: "Según el texto anterior, ¿qué función geográfica cumple Costa Rica gracias a su ubicación entre dos subcontinentes?",
    options: [
      "Actúa como puente biológico entre especies de Norteamérica y Sudamérica.",
      "Impide el paso de especies entre Norteamérica y Sudamérica.",
      "Separa completamente la fauna de ambos subcontinentes.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q3
  {
    stimulus: "Gracias a su posición entre el océano Pacífico y el mar Caribe, Costa Rica cuenta con dos litorales que permiten el comercio internacional y el desarrollo del turismo de playa en ambas costas.",
    source: "Instituto Costarricense de Turismo.",
    question: "De acuerdo con el texto, una ventaja de tener costas en dos océanos es que",
    options: [
      "se reduce la cantidad de especies marinas en el país.",
      "se facilita el comercio y el turismo en ambos litorales.",
      "se elimina el riesgo de fenómenos naturales en las costas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q4
  {
    stimulus: "La actividad volcánica de la Cordillera Volcánica Central, combinada con las abundantes lluvias tropicales, ha generado suelos ricos en minerales en buena parte del territorio costarricense.",
    source: "Ministerio de Agricultura y Ganadería.",
    question: "Según la información anterior, una consecuencia de la actividad volcánica para la agricultura costarricense es que",
    options: [
      "los suelos se vuelven menos fértiles cada año.",
      "se favorece la fertilidad de los suelos para el cultivo.",
      "se impide por completo el cultivo en las zonas volcánicas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q5
  {
    stimulus: "Costa Rica posee un clima tropical con una estación seca y una lluviosa, además de numerosos microclimas que varían según la altitud y la cercanía al mar.",
    source: "Instituto Meteorológico Nacional.",
    question: "De acuerdo con el texto, la variedad de microclimas en Costa Rica favorece principalmente",
    options: [
      "la disminución de la biodiversidad del país.",
      "la existencia de una gran variedad de flora y fauna.",
      "la eliminación de las estaciones climáticas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q6
  {
    stimulus: "Cada año, distintos huracanes y tormentas tropicales que se forman en el océano Atlántico provocan fuertes lluvias en la vertiente del Pacífico costarricense, debido a la circulación de los vientos.",
    source: "Instituto Meteorológico Nacional.",
    question: "Según el texto, este fenómeno representa una desventaja relacionada con",
    options: [
      "la posición geográfica del país y su exposición a fenómenos climáticos.",
      "la forma irregular de las costas del país.",
      "la falta de biodiversidad en el territorio nacional.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q7
  {
    stimulus: "El terreno montañoso y la actividad de las placas tectónicas hacen que Costa Rica sea un país con alta actividad sísmica, donde los movimientos de tierra pueden ocasionar daños en la infraestructura.",
    source: "Red Sismológica Nacional.",
    question: "De acuerdo con el texto, ¿a qué fenómeno natural hace referencia la información anterior?",
    options: [
      "Sequías",
      "Terremotos",
      "Erupciones volcánicas",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q8
  {
    stimulus: "Cuando las lluvias son muy intensas, los ríos de las llanuras costarricenses pueden desbordarse y provocar daños en viviendas y cultivos, además de deslizamientos en zonas montañosas.",
    source: "Comisión Nacional de Emergencias.",
    question: "Según la información, el texto describe principalmente",
    options: [
      "inundaciones causadas por el exceso de lluvia.",
      "sequías provocadas por la falta de lluvia.",
      "erupciones causadas por la actividad volcánica.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q9
  {
    stimulus: "La Cordillera de Talamanca es la más extensa y elevada de Costa Rica. En ella se encuentra el cerro Chirripó, la montaña más alta del país.",
    source: "Sistema Nacional de Áreas de Conservación.",
    question: "De acuerdo con el texto anterior, ¿cuál característica distingue a la Cordillera de Talamanca de las demás cordilleras del país?",
    options: [
      "Es la cordillera más pequeña y baja del territorio.",
      "Contiene el volcán más activo de Costa Rica.",
      "Es la más larga y alta, e incluye la montaña más elevada del país.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q10
  {
    stimulus: "En la región norte de Guanacaste se localiza el volcán Rincón de la Vieja, uno de los principales atractivos de la Cordillera de Guanacaste, conocida por su actividad geotérmica.",
    source: "Sistema Nacional de Áreas de Conservación.",
    question: "Según el texto, el volcán Rincón de la Vieja pertenece a la cordillera de",
    options: [
      "Talamanca.",
      "Guanacaste.",
      "Tilarán.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q11
  {
    stimulus: "Entre la Cordillera de Guanacaste y la zona norte del país se ubica la Cordillera de Tilarán, donde los fuertes vientos han favorecido la instalación de plantas de energía eólica.",
    source: "Instituto Costarricense de Electricidad.",
    question: "De acuerdo con el texto, la Cordillera de Tilarán se localiza entre",
    options: [
      "la Cordillera de Guanacaste y la zona norte.",
      "la Cordillera de Talamanca y el Caribe.",
      "el Pacífico y la Cordillera Volcánica Central.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q12
  {
    stimulus: "El Valle Central, ubicado entre montañas, concentra la mayor parte de la población costarricense y de las actividades agrícolas e industriales del país, en parte porque por él pasan importantes ríos.",
    source: "Instituto Nacional de Estadística y Censos.",
    question: "Según la información anterior, una razón por la que el Valle Central concentra tanta población es que",
    options: [
      "los valles son terrenos altos y de difícil acceso.",
      "los valles son terrenos bajos, fértiles y con acceso a ríos.",
      "los valles carecen de tierras aptas para la agricultura.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q13
  {
    stimulus: "Las Llanuras del Caribe y las del Norte son zonas planas y bajas, cercanas al nivel del mar, cuyos suelos son ideales para actividades agrícolas y ganaderas a gran escala.",
    source: "Ministerio de Agricultura y Ganadería.",
    question: "De acuerdo con el texto, ¿cuál es la principal característica de las llanuras costarricenses?",
    options: [
      "Son terrenos altos y rocosos sin uso agrícola.",
      "Son terrenos planos y fértiles, aptos para la agricultura.",
      "Son terrenos volcánicos sin posibilidad de cultivo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q14
  {
    stimulus: "Costa Rica posee costas en el océano Pacífico y en el mar Caribe; algunas presentan playas extensas, mientras otras tienen acantilados o desembocaduras de ríos.",
    source: "Instituto Costarricense de Turismo.",
    question: "Según el texto, ¿cuáles son los dos litorales que conforman las costas de Costa Rica?",
    options: [
      "El Pacífico y el Atlántico Norte.",
      "El Caribe y el Golfo de México.",
      "El Pacífico y el mar Caribe.",
    ],
    correct: 2,
    mepBloque: MEP_BLOQUE,
  },
  // Q15
  {
    stimulus: "Debido a su pequeño tamaño territorial, una persona puede desplazarse desde la costa del Pacífico hasta la costa del Caribe en pocas horas, lo que favorece el turismo y la diversidad de experiencias en un mismo viaje.",
    source: "Instituto Costarricense de Turismo.",
    question: "De acuerdo con el texto, el tamaño territorial de Costa Rica representa una ventaja porque",
    options: [
      "impide conocer ambas costas en un solo viaje.",
      "permite recorrer ambas costas en poco tiempo.",
      "limita el desarrollo del turismo en el país.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q16
  {
    stimulus: "Los primeros habitantes de Costa Rica, hace aproximadamente 12 000 años, no contaban con viviendas fijas. Se desplazaban de un lugar a otro siguiendo a los animales que cazaban para alimentarse.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según el texto, ¿cómo se describe el estilo de vida de los primeros pobladores del territorio costarricense?",
    options: [
      "Sedentario, viviendo siempre en el mismo lugar.",
      "Nómada, desplazándose en busca de alimento.",
      "Urbano, organizado en grandes ciudades.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q17
  {
    stimulus: "La evidencia arqueológica de los primeros cazadores y recolectores de Costa Rica se ha encontrado principalmente en las regiones de Guanacaste y Turrialba, donde se hallaron herramientas de piedra.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿en qué regiones se ha hallado mayor evidencia de los primeros pobladores?",
    options: [
      "Limón y Puntarenas.",
      "Guanacaste y Turrialba.",
      "Cartago y Heredia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q18
  {
    stimulus: "Los primeros pobladores cazaban grandes animales hoy extintos, conocidos como megafauna, entre los que se encontraban el armadillo gigante, el perezoso gigante y el mastodonte.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué tipo de animales formaban parte de la dieta de los primeros pobladores?",
    options: [
      "Megafauna, como el mastodonte y el perezoso gigante.",
      "Animales domésticos traídos de Europa.",
      "Únicamente peces y aves marinas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q19
  {
    stimulus: "Alrededor del año 2000 a.C., los habitantes del territorio costarricense aprendieron a sembrar maíz, frijoles y yuca, lo que les permitió establecerse en un mismo lugar y formar las primeras aldeas.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué cambio provocó el desarrollo de la agricultura en los pobladores de esa época?",
    options: [
      "El abandono total de los cultivos.",
      "El paso de la vida nómada a la vida en aldeas permanentes.",
      "El regreso a la caza como única actividad.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q20
  {
    stimulus: "Durante el período de los aldeanos igualitarios, todos los miembros de la comunidad compartían la tierra y los productos de la cosecha; no existían personas con más riquezas que otras.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cómo era la propiedad de la tierra en esta etapa?",
    options: [
      "Privada, cada familia poseía grandes extensiones.",
      "Colectiva, compartida por toda la comunidad.",
      "Exclusiva del cacique de la aldea.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q21
  {
    stimulus: "Entre el año 500 y el 1500 d.C., las sociedades del territorio costarricense se volvieron más complejas: aparecieron líderes llamados caciques y guías religiosos llamados chamanes.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué caracterizó a la sociedad de los aldeanos cacicales?",
    options: [
      "La ausencia total de líderes o jerarquías.",
      "La aparición de líderes políticos y religiosos y la diferenciación social.",
      "El regreso a una vida nómada sin asentamientos.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q22
  {
    stimulus: "Durante la etapa cacical, los objetos de jade se convirtieron en adornos muy valorados que indicaban el rango social de quien los portaba dentro de la comunidad.",
    source: "Museo del Jade.",
    question: "Según la información anterior, ¿qué función cumplían los objetos de jade en las sociedades cacicales?",
    options: [
      "Servían como moneda de intercambio comercial.",
      "Indicaban el rango social de las personas.",
      "Se utilizaban únicamente para cazar animales.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q23
  {
    stimulus: "Los chorotegas, asentados principalmente en la región de Guanacaste, consideraban al maíz como una divinidad y realizaban ceremonias y comidas especiales relacionadas con este cultivo.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué relación tenían los chorotegas con el maíz?",
    options: [
      "Lo consideraban un alimento prohibido.",
      "Lo veneraban como una divinidad.",
      "No lo incluían en su dieta diaria.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q24
  {
    stimulus: "El pueblo huetar, asentado en la región central del país, rendía culto al Sol y a la Luna mediante danzas, cantos y la construcción de altares de piedra.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿a qué elementos rendían culto principalmente los huetares?",
    options: [
      "Al Sol y a la Luna.",
      "A los ríos y a las montañas.",
      "Únicamente a sus antepasados.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q25
  {
    stimulus: "Entre los cabécares, un sacerdote llamado Jawá cumplía la función de intermediario entre el mundo espiritual y el mundo físico de la comunidad.",
    source: "Centro de Investigación y Conservación del Patrimonio Cultural.",
    question: "De acuerdo con el texto, ¿cuál era la función del Jawá entre los cabécares?",
    options: [
      "Liderar las batallas militares de la comunidad.",
      "Servir de intermediario entre lo espiritual y lo físico.",
      "Organizar el comercio con otras etnias.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q26
  {
    stimulus: "Los bribris realizan la danza ancestral del Sorbón, en la cual hombres y mujeres forman un gran círculo que simboliza la solidaridad y la pertenencia a la tierra.",
    source: "Centro de Investigación y Conservación del Patrimonio Cultural.",
    question: "Según la información anterior, ¿qué simboliza la danza del Sorbón para el pueblo bribri?",
    options: [
      "La solidaridad y la pertenencia a la tierra.",
      "La rivalidad entre distintas comunidades.",
      "La celebración del fin de la cosecha de café.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q27
  {
    stimulus: "Cada 31 de diciembre, el pueblo brunca o boruca celebra el Baile de los Diablitos, una manifestación cultural en la que los participantes confeccionan máscaras artesanales.",
    source: "Ministerio de Cultura y Juventud.",
    question: "De acuerdo con el texto, ¿qué elemento artesanal es central en la celebración del Baile de los Diablitos?",
    options: [
      "Las máscaras confeccionadas por la comunidad.",
      "Los instrumentos musicales de cuerda.",
      "Las vasijas de barro decoradas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q28
  {
    stimulus: "El pueblo maleku, asentado en la zona norte del país, entierra a sus muertos dentro de las viviendas porque cree que los espíritus continúan influyendo de manera benéfica sobre la familia.",
    source: "Centro de Investigación y Conservación del Patrimonio Cultural.",
    question: "Según la información anterior, ¿por qué el pueblo maleku entierra a sus muertos dentro de las viviendas?",
    options: [
      "Porque consideran que los espíritus siguen ayudando a la familia.",
      "Porque no cuentan con terrenos disponibles fuera de la vivienda.",
      "Porque es una práctica impuesta por los misioneros españoles.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q29
  {
    stimulus: "Los térrabas consideran que la roca conocida como \"la Mano de Tigre\", ubicada en una montaña cercana a su comunidad, es un elemento venerado que forma parte de su identidad cultural.",
    source: "Centro de Investigación y Conservación del Patrimonio Cultural.",
    question: "De acuerdo con el texto, ¿qué representa \"la Mano de Tigre\" para el pueblo térraba?",
    options: [
      "Un elemento natural venerado por la comunidad.",
      "Una construcción realizada por los españoles.",
      "Un instrumento musical tradicional.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q30
  {
    stimulus: "Las mujeres del pueblo ngäbe o guaymí confeccionan chácaras, que son bolsas tejidas a mano, además de collares elaborados con cuentas, conchas y huesos.",
    source: "Centro de Investigación y Conservación del Patrimonio Cultural.",
    question: "Según la información anterior, ¿qué objeto artesanal confeccionan tradicionalmente las mujeres ngäbes?",
    options: [
      "Vasijas de cerámica policroma.",
      "Chácaras o bolsas tejidas.",
      "Instrumentos musicales de viento.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q31
  {
    stimulus: "Muchas palabras que usamos hoy en el español de Costa Rica, como \"aguacate\", \"elote\" y \"chocolate\", provienen de las lenguas de los pueblos originarios.",
    source: "Academia Costarricense de la Lengua.",
    question: "De acuerdo con el texto, ¿qué aporte de los pueblos originarios se describe en la información anterior?",
    options: [
      "Técnicas de construcción de viviendas.",
      "Palabras incorporadas al español costarricense.",
      "Instrumentos de trabajo agrícola.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q32
  {
    stimulus: "Las esferas de piedra del Diquís, elaboradas por los pueblos precolombinos del sur de Costa Rica, fueron declaradas Patrimonio de la Humanidad por su valor histórico y cultural.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué reconocimiento internacional recibieron las esferas de piedra del Diquís?",
    options: [
      "Fueron declaradas Patrimonio de la Humanidad.",
      "Fueron destruidas por su antigüedad.",
      "Fueron trasladadas a un museo en España.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q33
  {
    stimulus: "Muchas comunidades indígenas de Costa Rica enfrentan actualmente dificultades para acceder a escuelas y centros de salud cercanos, debido a la falta de buenas vías de comunicación hacia sus territorios.",
    source: "Fondo de las Naciones Unidas para la Infancia.",
    question: "De acuerdo con el texto, ¿cuál es uno de los desafíos actuales de los pueblos originarios de Costa Rica?",
    options: [
      "El exceso de escuelas y hospitales en sus territorios.",
      "La falta de vías de comunicación hacia servicios básicos.",
      "La prohibición total de practicar sus costumbres.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q34
  {
    stimulus: "Diversas organizaciones señalan que muchas comunidades indígenas costarricenses todavía enfrentan pobreza y pocas oportunidades económicas, por lo que se promueven proyectos para mejorar el comercio en sus territorios.",
    source: "Fondo de las Naciones Unidas para la Infancia.",
    question: "Según la información anterior, ¿qué se busca con los proyectos mencionados en el texto?",
    options: [
      "Reducir el comercio en los territorios indígenas.",
      "Aumentar las oportunidades económicas de las comunidades indígenas.",
      "Eliminar las tradiciones culturales de los pueblos originarios.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q35
  {
    stimulus: "La cerámica de los pueblos originarios de Costa Rica incluía piezas con formas de figuras humanas, llamadas antropomorfas, y con formas de animales, llamadas zoomorfas.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué tipos de formas se destacan en la cerámica indígena costarricense?",
    options: [
      "Formas geométricas únicamente.",
      "Formas antropomorfas y zoomorfas.",
      "Formas exclusivamente religiosas europeas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q36
  {
    stimulus: "En 1502, durante su cuarto viaje, Cristóbal Colón llegó por primera vez a las costas del actual territorio costarricense, lo que marcó el inicio del contacto entre españoles y pueblos originarios.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿en qué año se produjo el primer contacto entre Cristóbal Colón y el territorio costarricense?",
    options: [
      "1492",
      "1502",
      "1575",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q37
  {
    stimulus: "España necesitaba nuevos mercados para vender sus productos, buscaba oro y otros metales preciosos, y deseaba expandir la religión católica entre los pueblos de América.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuáles fueron algunas de las causas de la conquista española en América?",
    options: [
      "La búsqueda de nuevos mercados, oro y la expansión religiosa.",
      "El interés de los pueblos indígenas por comerciar con Europa.",
      "La necesidad de aprender nuevas lenguas indígenas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q38
  {
    stimulus: "El terreno montañoso, el clima tropical húmedo y la resistencia de los pueblos indígenas hicieron que la conquista del territorio costarricense fuera más lenta que en otras regiones de América.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué factores dificultaron el avance de la conquista española en Costa Rica?",
    options: [
      "La ausencia total de población indígena.",
      "El terreno, el clima y la resistencia indígena.",
      "La falta de armas de fuego entre los españoles.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q39
  {
    stimulus: "Tras la llegada de los españoles, la población indígena de Costa Rica disminuyó drásticamente debido a enfermedades como la viruela y el sarampión, así como a los trabajos forzados impuestos.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuáles fueron causas de la disminución de la población indígena durante la conquista?",
    options: [
      "Las enfermedades europeas y los trabajos forzados.",
      "La emigración voluntaria hacia otros países.",
      "El aumento en la producción de alimentos.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q40
  {
    stimulus: "Con la llegada de los españoles se introdujeron nuevos cultivos como el trigo, el arroz y la caña de azúcar, además de animales de granja como caballos, vacas y cerdos.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué elementos introdujeron los españoles en el territorio costarricense durante la conquista?",
    options: [
      "Nuevos cultivos y animales de granja.",
      "Instrumentos musicales indígenas.",
      "Técnicas de pesca artesanal.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q41
  {
    stimulus: "La mezcla entre españoles, indígenas y, posteriormente, personas de origen africano dio origen a nuevas etnias con costumbres propias dentro del territorio costarricense.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cómo se denomina el proceso descrito en la información anterior?",
    options: [
      "Independencia",
      "Mestizaje",
      "Colonización",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q42
  {
    stimulus: "Durante el período colonial, Costa Rica fue una pequeña provincia que dependía de la Capitanía General de Guatemala, la cual, a su vez, formaba parte del Virreinato de Nueva España.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿de qué entidad política dependía directamente la provincia de Costa Rica durante la colonia?",
    options: [
      "De la Capitanía General de Guatemala.",
      "Del Virreinato del Perú.",
      "Del Reino de Nicaragua.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q43
  {
    stimulus: "Durante la colonia, Cartago fue designada como la capital de la provincia de Costa Rica, sede del gobernador y centro de la vida política y religiosa del territorio.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuál ciudad fungió como capital de Costa Rica durante el período colonial?",
    options: [
      "San José",
      "Cartago",
      "Limón",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q44
  {
    stimulus: "Al ser una de las provincias más alejadas del centro administrativo colonial, Costa Rica sufrió aislamiento económico, escasez de metales preciosos y poca disponibilidad de mano de obra indígena.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué consecuencia tuvo para Costa Rica el estar alejada del centro administrativo colonial?",
    options: [
      "Un rápido crecimiento económico y comercial.",
      "Aislamiento económico y escasez de recursos.",
      "Una mayor cantidad de metales preciosos disponibles.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q45
  {
    stimulus: "Durante la colonia se utilizaron tres formas principales de aprovechar la tierra: la chacra, para el consumo familiar; la plantación, orientada al comercio; y la hacienda, dedicada a la ganadería y la agricultura en gran escala.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuál de estas formas de uso de la tierra estaba orientada principalmente al comercio?",
    options: [
      "La chacra",
      "La plantación",
      "La hacienda",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q46
  {
    stimulus: "La exportación de ganado, cacao y tabaco fue una de las principales actividades económicas de Costa Rica durante la época colonial, sostenida primero por mano de obra indígena y luego por esclavos africanos.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con la información anterior, la economía colonial costarricense se caracterizó por",
    options: [
      "depender únicamente del comercio con Europa.",
      "usar mano de obra indígena y, después, esclava africana.",
      "prohibir cualquier tipo de exportación agrícola.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q47
  {
    stimulus: "Durante la colonia, la sociedad costarricense estaba organizada de manera jerárquica: en la cima se ubicaban los peninsulares y sus descendientes, mientras que mestizos, indígenas y esclavos ocupaban los niveles más bajos.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿en qué se basaba principalmente la posición social durante la época colonial?",
    options: [
      "En el nivel educativo de cada persona.",
      "En el origen y el color de piel de las personas.",
      "En la cantidad de tierras heredadas por igual.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q48
  {
    stimulus: "Bajo el sistema de la encomienda, un grupo de personas indígenas trabajaba las tierras de un español llamado encomendero, quien debía, en teoría, cuidar su salud y alimentación.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué era la encomienda durante la colonia?",
    options: [
      "Un sistema en el que indígenas trabajaban para un encomendero español.",
      "Una escuela donde se enseñaba a los indígenas a leer.",
      "Un impuesto que pagaban los españoles a la Corona.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q49
  {
    stimulus: "Durante la colonia, los esclavos de origen africano trabajaron principalmente en plantaciones de cacao, en la ganadería, en la construcción de caminos e iglesias, y en labores domésticas.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿en qué actividades se empleaba principalmente a las personas esclavizadas de origen africano?",
    options: [
      "En plantaciones, ganadería, construcción y labores domésticas.",
      "Únicamente en la administración del gobierno colonial.",
      "Solo en la enseñanza religiosa a los indígenas.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q50
  {
    stimulus: "La Iglesia Católica tuvo un papel central durante la colonia: organizó fiestas religiosas, controló la educación bajo principios morales y religiosos, e influyó fuertemente en el arte de la época.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué institución tuvo un papel central en la vida social y cultural durante el período colonial?",
    options: [
      "El Cabildo Municipal.",
      "La Iglesia Católica.",
      "El Tribunal Supremo de Elecciones.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q51
  {
    stimulus: "El 15 de septiembre de 1821, las provincias centroamericanas, entre ellas Costa Rica, proclamaron su independencia de España, dando inicio a una nueva etapa política en la región.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué evento ocurrió el 15 de septiembre de 1821?",
    options: [
      "Se firmó el Pacto de Concordia.",
      "Centroamérica proclamó su independencia de España.",
      "Se anexó el Partido de Nicoya a Costa Rica.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q52
  {
    stimulus: "La noticia de la independencia de Centroamérica tardó casi un mes en llegar a Cartago, debido a la falta de medios rápidos de comunicación en la época.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿por qué la noticia de la independencia tardó en llegar a Costa Rica?",
    options: [
      "Porque Costa Rica decidió no participar del proceso.",
      "Porque no existían medios rápidos de comunicación.",
      "Porque España bloqueó la noticia durante varios años.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q53
  {
    stimulus: "Las ideas de la Ilustración europea, que defendían la libertad y la igualdad, junto con el descontento de los criollos por no poder ocupar cargos importantes, impulsaron el deseo de independencia en Centroamérica.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuáles fueron causas de la independencia centroamericana?",
    options: [
      "Las ideas de la Ilustración y el descontento de los criollos.",
      "El aumento del comercio entre España y sus colonias.",
      "La desaparición de la Iglesia Católica en América.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q54
  {
    stimulus: "España exigía que sus colonias comerciaran únicamente con la Corona española, lo que limitaba el desarrollo económico de provincias como Costa Rica.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cómo se denomina la práctica comercial descrita en el texto?",
    options: [
      "Libre comercio",
      "Monopolio comercial",
      "Comercio justo",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q55
  {
    stimulus: "A diferencia de otros procesos de independencia en América, el de Costa Rica se caracterizó por el diálogo entre los habitantes, sin enfrentamientos armados significativos.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cómo se caracteriza el proceso de independencia de Costa Rica?",
    options: [
      "Como un proceso violento y prolongado.",
      "Como un proceso pacífico, basado en el diálogo.",
      "Como una invasión extranjera.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q56
  {
    stimulus: "En 1823, surgió un conflicto entre quienes en Cartago apoyaban la unión con México y quienes en San José y Alajuela preferían la independencia total de Centroamérica.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué grupos se enfrentaron en la Batalla de Ochomogo?",
    options: [
      "Costa Rica contra Nicaragua.",
      "Quienes apoyaban la unión a México y quienes querían la independencia total.",
      "Los filibusteros contra el ejército costarricense.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q57
  {
    stimulus: "Tras el triunfo de San José y Alajuela en el conflicto de 1823, la sede del gobierno costarricense se trasladó de Cartago a San José, ciudad que se convirtió en la nueva capital.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué consecuencia tuvo la Batalla de Ochomogo para la organización política de Costa Rica?",
    options: [
      "El traslado de la capital de Cartago a San José.",
      "La anexión inmediata del Partido de Nicoya.",
      "La firma del Pacto de Concordia.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q58
  {
    stimulus: "En 1824, Costa Rica adoptó la Ley Fundamental del Estado Libre de Costa Rica, que estableció la separación de poderes y un sistema de gobierno republicano.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué estableció la Ley Fundamental del Estado Libre de Costa Rica en 1824?",
    options: [
      "La separación de poderes y un gobierno republicano.",
      "La unión definitiva con el Imperio Mexicano.",
      "El fin de la esclavitud en el territorio nacional.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q59
  {
    stimulus: "El 1° de diciembre de 1821, una junta de legados redactó un documento que organizó el funcionamiento del nuevo Estado costarricense, estableciendo un gobierno formado por una Junta Superior Gubernativa de siete miembros.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿a qué documento histórico hace referencia la información anterior?",
    options: [
      "La Constitución de 1871.",
      "El Pacto de Concordia.",
      "La Ley Fundamental de 1824.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q60
  {
    stimulus: "El Pacto de Concordia, también conocido como Pacto Social Fundamental Interino de Costa Rica, declaró la religión católica y el idioma español como oficiales del nuevo Estado.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué declaró oficialmente el Pacto de Concordia?",
    options: [
      "El idioma inglés y la religión protestante.",
      "La religión católica y el idioma español.",
      "La abolición de la esclavitud.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q61
  {
    stimulus: "El Pacto de Concordia estuvo vigente solamente durante dos años, pero su importancia histórica permanece porque fue el primer documento que organizó políticamente a Costa Rica como Estado libre.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿por qué se considera importante el Pacto de Concordia a pesar de su corta vigencia?",
    options: [
      "Porque fue la primera Constitución Política del país.",
      "Porque continúa vigente en la actualidad.",
      "Porque estableció la independencia definitiva de México.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q62
  {
    stimulus: "En 1824, el Partido de Nicoya, que anteriormente pertenecía a Nicaragua, decidió de manera voluntaria unirse al territorio de Costa Rica.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cómo se llevó a cabo la anexión del Partido de Nicoya a Costa Rica?",
    options: [
      "Mediante una invasión militar costarricense.",
      "De manera voluntaria, por decisión de sus habitantes.",
      "Por orden directa del gobierno español.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q63
  {
    stimulus: "La anexión del Partido de Nicoya enriqueció la cultura costarricense con canciones folclóricas como \"El Torito\" y \"Pasión\", además de instrumentos como la marimba y los quijongos.",
    source: "Ministerio de Cultura y Juventud.",
    question: "De acuerdo con el texto, ¿qué aporte cultural trajo la anexión del Partido de Nicoya a Costa Rica?",
    options: [
      "El folclor musical, con canciones e instrumentos tradicionales.",
      "La eliminación de las tradiciones costarricenses previas.",
      "La prohibición de cultivos agrícolas en la zona.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q64
  {
    stimulus: "La incorporación de Guanacaste también trajo tierras fértiles para el cultivo de arroz, caña de azúcar y sorgo, así como para el desarrollo de la ganadería.",
    source: "Ministerio de Agricultura y Ganadería.",
    question: "Según la información anterior, ¿qué aporte económico trajo la anexión del Partido de Nicoya?",
    options: [
      "Tierras fértiles para la agricultura y la ganadería.",
      "La eliminación del comercio agrícola del país.",
      "Recursos minerales para la exportación.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q65
  {
    stimulus: "A lo largo del siglo XX, el derecho al voto en Costa Rica evolucionó: en 1913 se estableció el voto directo, en 1925 el voto secreto, y en 1949 y 1952 se otorgó este derecho a las mujeres.",
    source: "Tribunal Supremo de Elecciones.",
    question: "De acuerdo con el texto, ¿en qué años obtuvieron las mujeres costarricenses el derecho al voto?",
    options: [
      "1913 y 1925",
      "1949 y 1952",
      "1821 y 1824",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q66
  {
    stimulus: "Entre 1856 y 1857, un grupo de mercenarios extranjeros, conocidos como filibusteros y liderados por William Walker, intentó apoderarse de Centroamérica, lo que llevó a Costa Rica a organizar su defensa.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿quién lideraba el grupo de mercenarios que invadió Centroamérica?",
    options: [
      "Juan Rafael Mora Porras.",
      "William Walker.",
      "Juan Santamaría.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q67
  {
    stimulus: "El presidente Juan Rafael Mora Porras organizó y lideró la defensa nacional costarricense ante la amenaza de los filibusteros, logrando que personas de distintas clases sociales se unieran a la lucha.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿quién organizó la defensa de Costa Rica durante la Campaña Nacional?",
    options: [
      "Juan Santamaría.",
      "Juan Rafael Mora Porras.",
      "William Walker.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q68
  {
    stimulus: "El 20 de marzo de 1856, en la hacienda Santa Rosa de Guanacaste, las fuerzas costarricenses enfrentaron al ejército filibustero en un combate que duró apenas entre 15 y 20 minutos.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿en qué lugar se desarrolló la primera batalla de la Campaña Nacional?",
    options: [
      "En la hacienda Santa Rosa, Guanacaste.",
      "En el fuerte de San Carlos.",
      "En la ciudad de Rivas, Nicaragua.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q69
  {
    stimulus: "Tras una carga de bayonetas en la hacienda Santa Rosa, los filibusteros huyeron derrotados en dirección a la ciudad nicaragüense de Rivas.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué táctica utilizaron los costarricenses para derrotar a los filibusteros en Santa Rosa?",
    options: [
      "Una carga de bayonetas.",
      "Un ataque con artillería pesada.",
      "Un asedio prolongado de varios meses.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q70
  {
    stimulus: "Para asegurar una posición estratégica contra los filibusteros, una columna de 300 soldados costarricenses cruzó el río San Juan el 7 de abril de 1856 y ocupó territorio nicaragüense.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué objetivo tenía el cruce del río San Juan por parte de las tropas costarricenses?",
    options: [
      "Retirarse definitivamente del conflicto.",
      "Asegurar una posición estratégica contra los filibusteros.",
      "Establecer relaciones comerciales con Nicaragua.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q71
  {
    stimulus: "En la Batalla de Rivas, ocurrida el 11 de abril de 1856, los filibusteros se atrincheraron en un edificio conocido como el Mesón, desde donde atacaban a las fuerzas costarricenses.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué táctica utilizó el ejército costarricense para desalojar a los filibusteros del Mesón en Rivas?",
    options: [
      "Excavar un túnel hacia el edificio.",
      "Incendiar el edificio donde se refugiaban.",
      "Negociar una rendición pacífica.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q72
  {
    stimulus: "Juan Santamaría, un tamborilero originario de Alajuela, se ofreció voluntariamente para incendiar el Mesón de Guerra durante la Batalla de Rivas, logrando que los filibusteros se retiraran.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué reconocimiento recibió Juan Santamaría por su acción en Rivas?",
    options: [
      "Fue declarado Héroe Nacional de Costa Rica.",
      "Fue nombrado presidente de la República.",
      "Fue exiliado del país por su acción.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q73
  {
    stimulus: "El 22 de diciembre de 1856, en el sitio conocido como la Vía del Tránsito, donde se unen el río San Juan y el lago de Nicaragua, el ejército costarricense tomó posiciones que marcaron el principio del fin de la presencia filibustera.",
    source: "Ministerio de Cultura y Juventud.",
    question: "En el contexto de la Campaña Nacional, ¿a cuál combate hace referencia el texto anterior?",
    options: [
      "Batalla de Santa Rosa.",
      "Combate de la Trinidad.",
      "Batalla de Sardinal.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q74
  {
    stimulus: "El 30 de diciembre de 1856, las fuerzas costarricenses lograron tomar el fuerte de San Carlos, un punto estratégico que conectaba con el lago de Nicaragua a través del río San Juan.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿por qué era estratégico el fuerte de San Carlos para el control del territorio?",
    options: [
      "Porque conectaba con el lago de Nicaragua a través del río San Juan.",
      "Porque era la capital administrativa de los filibusteros.",
      "Porque allí se ubicaba el gobierno costarricense.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q75
  {
    stimulus: "La Campaña Nacional unió a costarricenses de distintas clases sociales y regiones del país en defensa de su territorio, fortaleciendo la identidad nacional y consolidando la independencia proclamada en 1821.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cuál fue uno de los principales legados de la Campaña Nacional para Costa Rica?",
    options: [
      "El debilitamiento del sentido de identidad nacional.",
      "El fortalecimiento de la identidad nacional y la unión del país.",
      "La división del país en distintas regiones independientes.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q76
  {
    stimulus: "A finales del siglo XIX, Costa Rica vivió un proceso de cambios conocido como las Reformas Liberales, orientado a modernizar el Estado y reducir la influencia de la Iglesia Católica en la vida pública.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cuál era uno de los principales objetivos de las Reformas Liberales?",
    options: [
      "Fortalecer el poder de la Iglesia Católica.",
      "Modernizar el Estado y reducir la influencia eclesiástica.",
      "Restaurar el sistema colonial español.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q77
  {
    stimulus: "La Constitución Política de 1871 mantuvo la división de poderes, pero otorgó mayor fuerza al Poder Ejecutivo, permitiendo al presidente nombrar y remover gobernadores y secretarios de Estado.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué cambio introdujo la Constitución de 1871 respecto al Poder Ejecutivo?",
    options: [
      "Eliminó por completo la figura del presidente.",
      "Le otorgó mayor poder e influencia al presidente.",
      "Trasladó todas sus funciones al Poder Legislativo.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q78
  {
    stimulus: "Durante las Reformas Liberales, el Estado expulsó al obispo Bernardo Augusto Thiel y a los jesuitas, además de prohibir las órdenes monásticas y la enseñanza religiosa en instituciones estatales.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cómo se conoce al conjunto de medidas que limitaron el poder de la Iglesia Católica durante esta época?",
    options: [
      "Garantías Sociales",
      "Leyes anticlericales",
      "Ley Fundamental del Estado",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q79
  {
    stimulus: "Como parte de las leyes anticlericales, los cementerios pasaron de estar bajo control eclesiástico a ser administrados por el Estado.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué cambio describe la información anterior?",
    options: [
      "La secularización de los cementerios.",
      "La construcción de nuevos templos religiosos.",
      "El aumento del poder político de la Iglesia.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q80
  {
    stimulus: "A finales del siglo XIX, el licenciado Mauro Fernández Acuña impulsó una reforma educativa que centralizó el sistema escolar bajo el Ministerio de Instrucción Pública, en lugar de dejarlo a cargo de cada municipalidad por separado.",
    source: "Sandoval, A. (2009).",
    question: "De acuerdo con el texto anterior, ¿qué acción de las Reformas Liberales ayudó a fortalecer la enseñanza en todo el territorio nacional?",
    options: [
      "El mantenimiento de la autonomía municipal en la educación.",
      "La centralización del sistema educativo bajo un ministerio.",
      "La eliminación total de las escuelas primarias.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q81
  {
    stimulus: "Gracias a las Reformas Liberales, la educación primaria en Costa Rica pasó a ser gratuita, obligatoria, laica y financiada por el Estado, garantizando el acceso sin distinción de religión o clase social.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué características adquirió la educación primaria costarricense con las Reformas Liberales?",
    options: [
      "Privada, opcional y costeada por las familias.",
      "Gratuita, obligatoria, laica y costeada por el Estado.",
      "Exclusiva para estudiantes de clases sociales altas.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q82
  {
    stimulus: "Durante las Reformas Liberales se fundaron importantes centros de educación secundaria, como el Instituto de Alajuela, el Liceo de Costa Rica y el Colegio de Señoritas.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿cuáles instituciones educativas se crearon durante las Reformas Liberales?",
    options: [
      "La Universidad de Costa Rica y el Colegio de Señoritas.",
      "El Instituto de Alajuela, el Liceo de Costa Rica y el Colegio de Señoritas.",
      "La Escuela Normal y el Instituto Tecnológico.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q83
  {
    stimulus: "Como parte del impulso a la educación y la cultura, durante las Reformas Liberales se fundaron la Biblioteca Nacional y el Archivo Nacional de Costa Rica.",
    source: "Sistema Nacional de Bibliotecas.",
    question: "De acuerdo con el texto, ¿qué instituciones culturales se fundaron durante las Reformas Liberales?",
    options: [
      "La Biblioteca Nacional y el Archivo Nacional.",
      "El Museo Nacional y el Teatro Nacional.",
      "La Casa Presidencial y el Tribunal Supremo de Elecciones.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q84
  {
    stimulus: "El café se convirtió en el principal producto de exportación de Costa Rica durante las Reformas Liberales, generando riqueza que permitió desarrollar nueva infraestructura en el país.",
    source: "Instituto del Café de Costa Rica.",
    question: "Según la información anterior, ¿qué producto impulsó el desarrollo económico durante las Reformas Liberales?",
    options: [
      "El cacao",
      "El café",
      "El banano",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q85
  {
    stimulus: "Para transportar el café desde el Valle Central hasta el puerto de Limón en el Caribe, Costa Rica construyó una vía férrea que facilitó el comercio internacional del país.",
    source: "Instituto Costarricense de Ferrocarriles.",
    question: "De acuerdo con el texto, ¿qué obra de infraestructura se construyó para facilitar la exportación del café?",
    options: [
      "El Canal de Panamá.",
      "El ferrocarril al Caribe.",
      "Una carretera hacia Nicaragua.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q86
  {
    stimulus: "Durante la década de 1940, el presidente Rafael Ángel Calderón Guardia impulsó importantes reformas sociales con el apoyo de la Iglesia Católica, representada por monseñor Víctor Manuel Sanabria, y del Partido Comunista Costarricense, liderado por Manuel Mora Valverde.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué actores apoyaron al presidente Calderón Guardia en sus reformas sociales?",
    options: [
      "La Iglesia Católica y el Partido Comunista Costarricense.",
      "El gobierno de Estados Unidos y empresas extranjeras.",
      "Los partidos de oposición conservadora.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q87
  {
    stimulus: "La Caja Costarricense de Seguro Social, creada en 1941, se financia con aportes de los trabajadores, los patronos y el Estado, lo que permitió construir clínicas y hospitales públicos en todo el país.",
    source: "Caja Costarricense de Seguro Social.",
    question: "De acuerdo con el texto, ¿cómo se financia la Caja Costarricense de Seguro Social?",
    options: [
      "Únicamente con fondos del Estado.",
      "Con aportes de trabajadores, patronos y el Estado.",
      "Con donaciones de organizaciones internacionales.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q88
  {
    stimulus: "Gracias a la creación de la Caja Costarricense de Seguro Social en 1941, fue posible aumentar la esperanza de vida de la población y reducir la mortalidad infantil en el país.",
    source: "Caja Costarricense de Seguro Social.",
    question: "Según la información anterior, ¿qué beneficios trajo la creación de la CCSS para la población costarricense?",
    options: [
      "El aumento de la mortalidad infantil.",
      "El aumento de la esperanza de vida y la reducción de la mortalidad infantil.",
      "La disminución del acceso a la salud pública.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q89
  {
    stimulus: "El Código de Trabajo de 1943 estableció una jornada laboral de 48 horas semanales, el derecho a vacaciones pagadas y la prohibición del trabajo infantil en Costa Rica.",
    source: "Ministerio de Trabajo y Seguridad Social.",
    question: "De acuerdo con el texto, ¿cuáles derechos laborales estableció el Código de Trabajo de 1943?",
    options: [
      "Jornada de 48 horas semanales, vacaciones pagadas y prohibición del trabajo infantil.",
      "Jornadas laborales sin límite de horas.",
      "La eliminación del salario mínimo.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q90
  {
    stimulus: "Las Garantías Sociales, integradas en la Constitución Política en 1942, incluyeron el derecho a la sindicalización, la negociación colectiva y la seguridad social para los trabajadores costarricenses.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿en qué año se integraron las Garantías Sociales a la Constitución Política?",
    options: [
      "1940",
      "1942",
      "1949",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q91
  {
    stimulus: "En 1941, el gobierno de Calderón Guardia fundó la Universidad de Costa Rica para preparar a los profesionales que el país necesitaba, después de que la antigua Universidad de Santo Tomás había cerrado durante la época liberal.",
    source: "Universidad de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué institución de educación superior se fundó en 1941?",
    options: [
      "El Instituto Tecnológico de Costa Rica.",
      "La Universidad de Costa Rica.",
      "La Universidad Nacional.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q92
  {
    stimulus: "En las elecciones presidenciales del 8 de febrero de 1948, el candidato Otilio Ulate Blanco resultó vencedor frente al candidato oficialista, lo que generó una fuerte disputa política en el país.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué ocurrió en las elecciones presidenciales de febrero de 1948?",
    options: [
      "Otilio Ulate resultó ganador frente al candidato del gobierno.",
      "Se reformó la Constitución Política del país.",
      "Se abolió el ejército costarricense.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q93
  {
    stimulus: "Tras las elecciones de 1948, el Congreso, controlado por los seguidores del gobierno, anuló los resultados electorales, lo que generó un fuerte descontento entre los seguidores de Otilio Ulate.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué decisión del Congreso provocó el descontento que llevó al conflicto armado de 1948?",
    options: [
      "La anulación de los resultados de las elecciones.",
      "La creación de la Caja Costarricense de Seguro Social.",
      "La firma de la Constitución de 1871.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q94
  {
    stimulus: "Ante la anulación de los resultados electorales, José Figueres Ferrer organizó un grupo armado conocido como el Ejército de Liberación Nacional desde su finca llamada \"La Lucha\", iniciando así un conflicto armado en el país.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿quién lideró el levantamiento armado tras la anulación de las elecciones de 1948?",
    options: [
      "Otilio Ulate Blanco.",
      "José Figueres Ferrer.",
      "Rafael Ángel Calderón Guardia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q95
  {
    stimulus: "El conflicto armado de 1948 se desarrolló durante varias semanas en distintas regiones del país, con enfrentamientos en zonas como San Isidro de El General y Cartago.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿cómo se conoce este conflicto armado ocurrido en Costa Rica en 1948?",
    options: [
      "La Campaña Nacional.",
      "La Guerra Civil de 1948.",
      "Las Reformas Liberales.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q96
  {
    stimulus: "El conflicto armado de 1948 finalizó con la firma de un acuerdo de paz en la embajada de México, mediante el cual las partes enfrentadas acordaron poner fin a la confrontación.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿dónde se firmó el acuerdo que puso fin a la Guerra Civil de 1948?",
    options: [
      "En el Cuartel Bellavista.",
      "En la embajada de México.",
      "En el Congreso de la República.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q97
  {
    stimulus: "Tras la Guerra Civil de 1948, se estableció una Junta Fundadora de la Segunda República, liderada por José Figueres Ferrer, encargada de gobernar el país durante un período de transición.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué entidad gobernó Costa Rica durante el período de transición posterior a la Guerra Civil de 1948?",
    options: [
      "La Junta Fundadora de la Segunda República.",
      "El Congreso controlado por Calderón Guardia.",
      "El gobierno provisional de Otilio Ulate.",
    ],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Q98
  {
    stimulus: "El 1° de diciembre de 1948, en un acto simbólico realizado en el antiguo Cuartel Bellavista, se anunció la disolución del ejército costarricense como institución permanente.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué decisión histórica se anunció el 1° de diciembre de 1948?",
    options: [
      "La creación de un nuevo ejército nacional.",
      "La abolición del ejército como institución permanente.",
      "La firma del Pacto de Concordia.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q99
  {
    stimulus: "El antiguo Cuartel Bellavista, donde se anunció la abolición del ejército, fue transformado posteriormente en un espacio cultural dedicado a la conservación de la historia del país.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿en qué institución se convirtió el antiguo Cuartel Bellavista?",
    options: [
      "En la sede del Tribunal Supremo de Elecciones.",
      "En el Museo Nacional de Costa Rica.",
      "En la nueva Casa Presidencial.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
  // Q100
  {
    stimulus: "La nueva Constitución Política, promulgada en 1949 tras la Guerra Civil, mantuvo las Garantías Sociales establecidas en la década de 1940 e incluyó un artículo que prohíbe el mantenimiento de un ejército permanente en el país.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿qué aspectos incluyó la Constitución Política de 1949?",
    options: [
      "La eliminación de las Garantías Sociales y la creación de un nuevo ejército.",
      "El mantenimiento de las Garantías Sociales y la prohibición de un ejército permanente.",
      "El regreso al sistema colonial español.",
    ],
    correct: 1,
    mepBloque: MEP_BLOQUE,
  },
];

// Helper: pick questions by 1-based indices
const pick = (indices) => indices.map((i) => ({ ...Q[i] }));

const exam1 = pick([
  1, 16, 36, 51, 66, 76, 86,
  2, 17, 37, 52, 67, 77, 87,
  3, 18, 38, 53, 68, 78, 88,
  4, 19, 39, 54, 69, 79, 89,
  5, 20, 40, 55, 70, 80, 90,
]);

const exam2 = pick([
  6, 21, 41, 56, 71, 81, 91,
  7, 22, 42, 57, 72, 82, 92,
  8, 23, 43, 58, 73, 83, 93,
  9, 24, 44, 59, 74, 84, 94,
  10, 25, 45, 60, 75, 85, 95,
]);

const exam3Unique = pick([
  11, 26, 46, 61, 96,
  12, 27, 47, 62, 97,
  13, 28, 48, 63, 98,
  14, 29, 49, 64, 99,
  15, 30, 50, 65, 100,
  31, 32, 33, 34, 35,
]);

// 5 repeated questions for Exam 3 with options reordered so correct is at index 0
const exam3Repeats = [
  // Repeat of Q1 — correct moved to index 0
  {
    stimulus: "Costa Rica se localiza en el istmo centroamericano, entre los paralelos 8° y 11° de latitud norte. Esta posición ubica al país completamente al norte de la línea ecuatorial y al oeste del meridiano de Greenwich.",
    source: "Instituto Geográfico Nacional.",
    question: "De acuerdo con la información anterior, Costa Rica se ubica en los hemisferios",
    options: ["norte y occidental.", "sur y occidental.", "norte y oriental."],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q16 — correct moved to index 0
  {
    stimulus: "Los primeros habitantes de Costa Rica, hace aproximadamente 12 000 años, no contaban con viviendas fijas. Se desplazaban de un lugar a otro siguiendo a los animales que cazaban para alimentarse.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según el texto, ¿cómo se describe el estilo de vida de los primeros pobladores del territorio costarricense?",
    options: ["Nómada, desplazándose en busca de alimento.", "Sedentario, viviendo siempre en el mismo lugar.", "Urbano, organizado en grandes ciudades."],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q36 — correct moved to index 0
  {
    stimulus: "En 1502, durante su cuarto viaje, Cristóbal Colón llegó por primera vez a las costas del actual territorio costarricense, lo que marcó el inicio del contacto entre españoles y pueblos originarios.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿en qué año se produjo el primer contacto entre Cristóbal Colón y el territorio costarricense?",
    options: ["1502", "1492", "1575"],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q51 — correct moved to index 0
  {
    stimulus: "El 15 de septiembre de 1821, las provincias centroamericanas, entre ellas Costa Rica, proclamaron su independencia de España, dando inicio a una nueva etapa política en la región.",
    source: "Museo Nacional de Costa Rica.",
    question: "De acuerdo con el texto, ¿qué evento ocurrió el 15 de septiembre de 1821?",
    options: ["Centroamérica proclamó su independencia de España.", "Se firmó el Pacto de Concordia.", "Se anexó el Partido de Nicoya a Costa Rica."],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
  // Repeat of Q66 — correct moved to index 0
  {
    stimulus: "Entre 1856 y 1857, un grupo de mercenarios extranjeros, conocidos como filibusteros y liderados por William Walker, intentó apoderarse de Centroamérica, lo que llevó a Costa Rica a organizar su defensa.",
    source: "Museo Nacional de Costa Rica.",
    question: "Según la información anterior, ¿quién lideraba el grupo de mercenarios que invadió Centroamérica?",
    options: ["William Walker.", "Juan Rafael Mora Porras.", "Juan Santamaría."],
    correct: 0,
    mepBloque: MEP_BLOQUE,
  },
];

const exam3 = [...exam3Unique, ...exam3Repeats];

export const socialesExtraExams = [exam1, exam2, exam3];
