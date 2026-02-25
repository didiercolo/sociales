/**
 * @typedef {Object} QuizQuestion
 * @property {string} question
 * @property {string[]} options
 * @property {number} correct
 */

/**
 * @typedef {Object} LessonSection
 * @property {string} title
 * @property {string[]} content
 * @property {string} [videoId]
 */

/**
 * @typedef {Object} Lesson
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {LessonSection[]} sections
 * @property {QuizQuestion[]} quiz
 */

/**
 * @type {Object.<number, Lesson[]>}
 */
export const lessonsData = {
    4: [
        {
            id: 1,
            title: "Lección 1: Costa Rica y su Geografía",
            description: "Costa Rica y su Geografía",
            sections: [
                {
                    title: "1. Líneas Imaginarias",
                    content: [
                        "Las líneas imaginarias nos ayudan a ubicar lugares en la Tierra. No son reales, pero son muy importantes.",
                        "<h3>Paralelos</h3><ul><li>Van de este a oeste.</li><li>Miden la <strong>latitud</strong>.</li><li>El más importante es el <strong>Ecuador (0°)</strong>.</li><li>Divide la Tierra en Hemisferio Norte y Hemisferio Sur.</li></ul>",
                        "<h3>Meridianos</h3><ul><li>Van de norte a sur.</li><li>Miden la <strong>longitud</strong>.</li><li>El más importante es el <strong>Meridiano de Greenwich (0°)</strong>.</li><li>Divide la Tierra en Hemisferio Oriental y Hemisferio Occidental.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cómo se llaman las líneas que miden la latitud?</li><li>¿Cuál es el meridiano más importante?</li><li>¿En qué hemisferios divide el Ecuador a la Tierra?</li></ul>"
                    ],
                    videoId: "r6Mg005jCds"
                },
                {
                    title: "2. Ubicación de Costa Rica",
                    content: [
                        "Costa Rica se ubica en:",
                        "<ul><li><strong>Hemisferio Norte</strong> (al norte del Ecuador).</li><li><strong>Hemisferio Occidental</strong> (al oeste de Greenwich).</li><li>En <strong>América Central</strong>, entre América del Norte y América del Sur.</li><li>Entre el Océano Pacífico y el Mar Caribe.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué hemisferios se ubica Costa Rica?</li><li>¿En qué parte del continente americano se encuentra nuestro país?</li><li>¿Cuáles son los dos cuerpos de agua que rodean a Costa Rica?</li></ul>"
                    ]
                },
                {
                    title: "3. Océanos y Continentes",
                    content: [
                        "<h3>Océanos</h3><p>Los cinco océanos son: Pacífico, Atlántico, Índico, Ártico y Antártico.</p>",
                        "<h3>Continentes</h3><p>Los continentes son: Asia, África, Europa, América, Oceanía y Antártida.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione el nombre de los cinco océanos.</li><li>¿Cuántos continentes existen y cuáles son sus nombres?</li></ul>"
                    ],
                    videoId: "QDfJ4m1t1mQ"
                },
                {
                    title: "4. Costas de Costa Rica",
                    content: [
                        "<h3>Costa Pacífica</h3><ul><li>Es más grande.</li><li>Tiene muchos golfos, bahías y penínsulas.</li><li>Importante para turismo y pesca.</li></ul>",
                        "<h3>Costa Caribe</h3><ul><li>Es más pequeña.</li><li>Tiene playas hermosas.</li><li>Importante para puertos y comercio.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál de las dos costas de Costa Rica es la más extensa?</li><li>¿Qué actividades económicas son importantes en la costa pacífica?</li><li>¿Para qué son importantes los puertos en el Caribe?</li></ul>"
                    ]
                },
                {
                    title: "5. Sistemas Montañosos",
                    content: [
                        "Principales cordilleras:<ul><li>Cordillera Volcánica Central</li><li>Cordillera de Talamanca</li><li>Cordillera de Guanacaste</li><li>Cordillera de Tilarán</li></ul>",
                        "Estas montañas tienen volcanes, ayudan a formar ríos, afectan el clima y son importantes para la naturaleza y el turismo.",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione dos de las principales cordilleras de Costa Rica.</li><li>¿Por qué son importantes las montañas para nuestro país?</li></ul>"
                    ]
                },
                {
                    title: "6. Ventajas y Desventajas de la Ubicación",
                    content: [
                        "<h3>Ventajas</h3><ul><li>Acceso a dos océanos.</li><li>Rica en biodiversidad.</li><li>Bellas playas y bosques.</li><li>Buenas oportunidades de comercio.</li></ul>",
                        "<h3>Desventajas</h3><ul><li>Puede tener terremotos y huracanes.</li><li>Inundaciones en algunas áreas.</li><li>Actividad volcánica.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione dos ventajas de la ubicación geográfica de Costa Rica.</li><li>¿Cuáles son algunos riesgos naturales que enfrenta el país?</li></ul>"
                    ]
                },
                {
                    title: "7. Importancia de Estudios Sociales y Cívica",
                    content: [
                        "<p><strong>Estudios Sociales:</strong> Nos ayuda a entender historia y geografía, aprender sobre nuestro país y ser ciudadanos responsables.</p>",
                        "<p><strong>Educación Cívica:</strong> Nos enseña respeto, responsabilidad, democracia y cómo vivir en paz con los demás.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué nos ayuda la materia de Estudios Sociales?</li><li>¿Qué valores nos enseña la Educación Cívica?</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Qué nos ayudan a ubicar las líneas imaginarias?",
                    options: ["Lugares en la Tierra", "Estrellas en el cielo", "Peces en el mar"],
                    correct: 0
                },
                {
                    question: "¿Cómo se llaman las líneas que van de este a oeste?",
                    options: ["Meridianos", "Ecuador", "Paralelos"],
                    correct: 2
                },
                {
                    question: "¿Cuál es el paralelo más importante?",
                    options: ["Meridiano de Greenwich", "El Ecuador", "Trópico de Cáncer"],
                    correct: 1
                },
                {
                    question: "¿Qué miden los paralelos?",
                    options: ["Latitud", "Longitud", "Altitud"],
                    correct: 0
                },
                {
                    question: "¿En qué hemisferios divide el Ecuador a la Tierra?",
                    options: ["Este y Oeste", "Norte y Sur", "Arriba y Abajo"],
                    correct: 1
                }
            ]
        }
    ],
    5: [
        {
            id: 1,
            title: "Lección 1: Historia antigua de Costa Rica",
            description: "Los primeros pobladores y sus modos de vida.",
            sections: [
                {
                    title: "El pasado precolombino",
                    content: [
                        "Costa Rica fue habitada por grupos humanos desde hace aproximadamente 12,000 años. Los costarricenses de hoy son producto del mestizaje entre indígenas, blancos, negros y otras etnias. Los modos de vida se dividen en cuatro etapas.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Hace cuántos años aproximadamente llegaron los primeros pobladores a Costa Rica?</li><li>¿Cuáles son las cuatro etapas de los modos de vida precolombinos?</li></ul>"
                    ]
                },
                {
                    title: "Cazadores y recolectores (12,000 a.C. – 2,000 a.C.)",
                    content: [
                        "Eran nómadas que buscaban alimento. Los hombres cazaban animales de la <strong>megafauna</strong> como el mastodonte y el perezoso gigante, mientras las mujeres recolectaban frutos.",
                        "Usaban herramientas de piedra, hueso y madera, como puntas de lanza y raspadores. Con el tiempo, la megafauna desapareció por cambios climáticos y empezaron a cazar animales pequeños como venados y dantas.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué significa ser nómada?</li><li>¿Qué tipo de animales de la megafauna cazaban los primeros pobladores?</li><li>¿Qué herramientas utilizaban para cazar?</li></ul>"
                    ]
                },
                {
                    title: "Aldeanos igualitarios (2,000 a.C. – 500 a.C.)",
                    content: [
                        "La agricultura se volvió central y los pobladores se hicieron sedentarios. No existían jefes: todos eran iguales. Fabricaban cerámica de colores para guardar cultivos.",
                        "Practicaban la <strong>semicultura</strong> (siembra de semillas como el maíz) y la <strong>vegecultura</strong> (siembra de tubérculos como la yuca). Usaban la técnica de roza y quema para preparar la tierra.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál es la diferencia entre semicultura y vegecultura?</li><li>¿Por qué se les llama 'aldeanos igualitarios' a los pobladores de este periodo?</li><li>¿En qué consiste la técnica de roza y quema?</li></ul>"
                    ]
                },
                {
                    title: "Aldeanos cacicales (500 a.C. – 1,500 d.C.)",
                    content: [
                        "Las aldeas crecieron y surgieron líderes: caciques (políticos) y chamanes (religiosos). La sociedad se dividió en clases sociales.",
                        "Se fabricaron objetos de jade y luego de oro. Las aldeas se hicieron complejas, con construcciones como <strong>montículos</strong> y calzadas.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué funciones tenía el cacique y quién era el líder religioso?</li><li>¿Qué tipo de construcciones complejas se hicieron en las aldeas cacicales?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "Los primeros pobladores de Costa Rica evolucionaron de ser nómadas cazadores a formar sociedades organizadas con agricultura, líderes y arte."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Hace cuántos años aproximadamente llegaron los primeros pobladores a Costa Rica?",
                    options: ["12,000 años", "5,000 años", "1,000 años"],
                    correct: 0
                },
                {
                    question: "¿Qué animales grandes cazaban los primeros pobladores?",
                    options: ["Dinosaurios", "Megafauna (Mastodontes)", "Elefantes"],
                    correct: 1
                },
                {
                    question: "¿Cómo se llamaban los grupos que no tenían jefes y todos eran iguales?",
                    options: ["Cazadores", "Caciques", "Aldeanos igualitarios"],
                    correct: 2
                },
                {
                    question: "¿Quién era el líder político en las sociedades cacicales?",
                    options: ["Cacique", "Chamán", "Rey"],
                    correct: 0
                },
                {
                    question: "¿Qué técnica usaban para preparar la tierra para cultivar?",
                    options: ["Riego automático", "Roza y quema", "Invernaderos"],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Lección 2: Etnias de la Costa Rica antigua",
            description: "Áreas culturales y las 8 etnias indígenas.",
            sections: [
                {
                    title: "Áreas culturales de América",
                    content: [
                        "<strong>Área Mesoamericana:</strong> Desde México hasta el norte de Costa Rica. Civilizaciones como aztecas y mayas. Tenían escritura, calendarios y dieta de maíz.",
                        "<strong>Área Intermedia:</strong> Desde Honduras hasta Colombia y Venezuela. Organización en tribus con caciques. Trabajo en piedra, jade, oro y barro. Famosas esferas de piedra.",
                        "<strong>Área Andina:</strong> Cordillera de los Andes, con los Incas como cultura principal. Cultivo en terrazas y uso de quipus.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuáles son las tres áreas culturales de América que influyeron en Costa Rica?</li><li>¿Qué dieta caracterizaba al Área Mesoamericana?</li><li>¿Qué civilización fue la más importante en el Área Andina?</li></ul>"
                    ]
                },
                {
                    title: "Regiones arqueológicas de Costa Rica",
                    content: [
                        "<strong>Gran Nicoya:</strong> Guanacaste y norte de Puntarenas. Influencia mesoamericana (Chorotegas). Cerámica policroma.",
                        "<strong>Región Central:</strong> Centro del país. Influencia de las tres áreas. Habitada por huetares y malekus. Monumento Guayabo.",
                        "<strong>Subregión Diquís:</strong> Sureste del país. Influencia andina. Esferas de piedra.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuáles son las tres regiones arqueológicas de Costa Rica?</li><li>¿En qué región se encuentra el Monumento Nacional Guayabo?</li><li>¿Qué influencia recibió la Gran Nicoya?</li></ul>"
                    ]
                },
                {
                    title: "Las 8 etnias indígenas de Costa Rica",
                    content: [
                        "<strong>1. Chorotegas:</strong> En Matambú, Guanacaste. Adoraban al jaguar y el maíz. Famosos por su cerámica de barro.",
                        "<strong>2. Huetares:</strong> En Quitirrisí y Zapatón. Rendían culto al Sol y la Luna. Fabricaban cestas y usaban la ocarina.",
                        "<strong>3. Cabécares:</strong> En Talamanca. Creen en Sibö y su líder es el Jawá. Danzas en círculo.",
                        "<strong>4. Bribris:</strong> Talamanca. Practican la danza del Sorbón y se especializan en cestería.",
                        "<strong>5. Bruncas:</strong> En Puntarenas. Celebran el 'Baile de los Diablitos' cada 31 de diciembre.",
                        "<strong>6. Malekus:</strong> Alajuela. Creen en el dios Tocu. Trabajan madera de balsa.",
                        "<strong>7. Térrabas:</strong> Buenos Aires. Veneran la Mano de Tigre. Hacen artesanías con jícaras.",
                        "<strong>8. Ngäbes:</strong> Pacífico Sur. Las mujeres usan vestidos coloridos. Fabrican bolsas (chácaras).",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuáles son las ocho etnias indígenas de Costa Rica?</li><li>¿Qué celebran los bruncas cada 31 de diciembre?</li><li>¿Quién es el dios creador para los cabécares y bribris?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "Costa Rica fue un puente cultural entre las grandes civilizaciones americanas, y sus ocho etnias indígenas conservan tradiciones valiosas que enriquecen nuestra identidad."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Qué área cultural influyó en el Guanacaste (Chorotegas)?",
                    options: ["Área Mesoamericana", "Área Andina", "Área del Caribe"],
                    correct: 0
                },
                {
                    question: "¿En qué región se encuentran las famosas esferas de piedra?",
                    options: ["Gran Nicoya", "Subregión Diquís", "Región Central"],
                    correct: 1
                },
                {
                    question: "¿Qué etnia celebra el 'Baile de los Diablitos'?",
                    options: ["Bribris", "Ngäbes", "Bruncas (Borucas)"],
                    correct: 2
                },
                {
                    question: "¿Quién es el dios creador para los Cabécares y Bribris?",
                    options: ["Sibö", "Tocu", "Jaguar"],
                    correct: 0
                },
                {
                    question: "¿Qué etnia es famosa por su cerámica policroma en Matambú?",
                    options: ["Huetares", "Chorotegas", "Térrabas"],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Lección 3: Situación actual de los pueblos originarios",
            description: "Legados y desafíos de los indígenas hoy.",
            sections: [
                {
                    title: "Legado Indígena",
                    content: [
                        "<strong>Alimentación:</strong> Maíz, frijoles, cacao, tortillas, tamales.",
                        "<strong>Palabras:</strong> Aguacate, chocolate, tomate, iguana.",
                        "<strong>Medicina:</strong> Conocimiento de plantas como sábila, manzanilla y romero.",
                        "<strong>Otros:</strong> Orfebrería, esferas de piedra, respeto por la naturaleza y leyendas.",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione tres productos alimenticios que heredamos de los indígenas.</li><li>¿Qué plantas medicinales son parte de la herencia indígena?</li><li>Mencione tres palabras que provienen de lenguas indígenas.</li></ul>"
                    ]
                },
                {
                    title: "Desafíos Actuales",
                    content: [
                        "Los pueblos indígenas enfrentan retos como la falta de caminos, pobreza extrema (90%) y el riesgo de perder sus lenguas nativas.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué porcentaje de la población indígena vive en pobreza extrema?</li><li>Mencione dos desafíos que enfrentan los pueblos originarios actualmente.</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "Debemos valorar y proteger el legado indígena, y trabajar para que los pueblos originarios tengan las mismas oportunidades que el resto de los costarricenses."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Cuál de estas palabras es herencia indígena?",
                    options: ["Computadora", "Avión", "Chocolate"],
                    correct: 2
                },
                {
                    question: "¿Qué porcentaje aproximado de indígenas vive en pobreza hoy?",
                    options: ["90%", "50%", "10%"],
                    correct: 0
                },
                {
                    question: "¿Cuál es un legado indígena en la alimentación?",
                    options: ["Pizza", "Tortillas y tamales", "Sushi"],
                    correct: 1
                },
                {
                    question: "¿Qué planta medicinal es herencia de su conocimiento?",
                    options: ["Sábila", "Rosas", "Trigo"],
                    correct: 0
                }
            ]
        },
        {
            id: 4,
            title: "Lección 4: Costa Rica, sociedad intercultural",
            description: "Nuestra identidad multiétnica y plurilingüe.",
            sections: [
                {
                    title: "República Multiétnica",
                    content: [
                        "Desde 2015, la Constitución reconoce a Costa Rica como 'multiétnica y pluricultural'.",
                        "Nuestra identidad se forma por indígenas, afrodescendientes, chinos, europeos y migrantes de todo el mundo.",
                        "<strong>Mestizo:</strong> El costarricense tiene raíces de diversas culturas y todas merecen respeto e igualdad.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué significa que Costa Rica sea un país multiétnico y pluricultural?</li><li>¿En qué año se reformó la Constitución para este reconocimiento?</li><li>¿Qué significa ser mestizo?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "La diversidad cultural es una riqueza que debemos valorar y respetar, ya que todas las etnias han contribuido a construir Costa Rica."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿En qué año se reconoció a Costa Rica como multiétnica en la Constitución?",
                    options: ["1821", "2015", "1948"],
                    correct: 1
                },
                {
                    question: "¿Qué significa que Costa Rica sea pluricultural?",
                    options: ["Que conviven muchas culturas y todas merecen respeto", "Que todos somos iguales de una misma etnia", "Que solo hay una religión"],
                    correct: 0
                }
            ]
        },
        {
            id: 5,
            title: "Lección 5: El momento del contacto (Colón)",
            description: "Los viajes de Colón y la conquista.",
            sections: [
                {
                    title: "El encuentro",
                    content: [
                        "El 18 de septiembre de 1502, Cristóbal Colón llegó a Cariay (Limón) en su cuarto viaje.",
                        "Para los indígenas fue algo sobrenatural por la vestimenta, animales e idioma diferentes.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué fecha llegó Cristóbal Colón a Costa Rica?</li><li>¿Cómo llamaban los indígenas al lugar donde llegó Colón?</li><li>¿Por qué Colón llamó a estas tierras 'Costa Rica'?</li></ul>"
                    ]
                },
                {
                    title: "Los cuatro viajes de Colón",
                    content: [
                        "<strong>1er (1492):</strong> Descubrió San Salvador y La Española.",
                        "<strong>2do (1493):</strong> Descubrió Dominica y Puerto Rico con 17 barcos.",
                        "<strong>3er (1498):</strong> Llegó a Venezuela (tierra continental).",
                        "<strong>4to (1502):</strong> Llegó a Costa Rica. Murió en 1506 sin saber que era un nuevo continente.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué tierras descubrió Colón en su primer viaje?</li><li>¿En cuál de sus viajes llegó por primera vez a tierra continental (Venezuela)?</li><li>¿Cuántos barcos llevó Colón en su segundo viaje?</li></ul>"
                    ]
                },
                {
                    title: "Fases de la conquista",
                    content: [
                        "<strong>Primera fase (1502-1543):</strong> Exploración de las costas por Gil González Dávila y otros. Sin poblaciones estables.",
                        "<strong>Segunda fase (1560-1575):</strong> <strong>Juan de Cavallón</strong> introdujo el ganado. <strong>Vásquez de Coronado</strong> fundó Cartago. <strong>Perafán de Rivera</strong> impuso la encomienda.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál es la diferencia entre la primera y la segunda fase de la conquista?</li><li>¿Quién fundó la ciudad de Cartago y es considerado el verdadero conquistador?</li><li>¿Qué introdujo Juan de Cavallón en Costa Rica?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "La llegada de los españoles cambió para siempre la vida de los pueblos indígenas, trayendo tanto destrucción como el inicio de una nueva sociedad mestiza."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿En qué viaje llegó Colón a las costas de Limón?",
                    options: ["Cuarto viaje", "Primer viaje", "Segundo viaje"],
                    correct: 0
                },
                {
                    question: "¿En qué fecha llegó Colón a Costa Rica?",
                    options: ["12 de octubre de 1492", "15 de agosto de 1519", "18 de septiembre de 1502"],
                    correct: 2
                },
                {
                    question: "¿Quién es considerado el 'verdadero conquistador' al fundar Cartago?",
                    options: ["Juan de Cavallón", "Juan Vásquez de Coronado", "Perafán de Rivera"],
                    correct: 1
                }
            ]
        },
        {
            id: 6,
            title: "Lección 6: La sociedad colonial",
            description: "Vida, economía y clases sociales.",
            sections: [
                {
                    title: "Instituciones Políticas",
                    content: [
                        "España controló sus colonias mediante instituciones:",
                        "<ul><li><strong>En España:</strong> Consejo de Indias (leyes) y Casa de Contratación de Sevilla (comercio).</li><li><strong>En América:</strong> Virreinatos, Capitanías Generales y Cabildos.</li></ul>",
                        "Costa Rica pertenecía a la <strong>Capitanía General de Guatemala</strong>.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿A qué capitanía general pertenecía la provincia de Costa Rica?</li><li>¿Qué institución en España se encargaba de crear las leyes para América?</li><li>¿Cuál era la función de la Casa de Contratación de Sevilla?</li></ul>"
                    ]
                },
                {
                    title: "Economía Colonial",
                    content: [
                        "Costa Rica era una provincia pobre y aislada. La capital era Cartago.",
                        "<strong>Chacra:</strong> Pequeñas fincas de subsistencia (Valle Central).",
                        "<strong>Hacienda:</strong> Grandes extensiones de ganadería (Guanacaste).",
                        "<strong>Plantación:</strong> Cultivo de cacao (Matina).",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál fue la capital de Costa Rica durante la mayor parte de la colonia?</li><li>¿Qué era una chacra y qué se producía en ella?</li><li>¿En qué zona se ubicaban las plantaciones de cacao?</li></ul>"
                    ]
                },
                {
                    title: "Clases Sociales",
                    content: [
                        "La sociedad era desigual, basada en el color de piel:",
                        "<ul><li><strong>Peninsulares:</strong> Nacidos en España, tenían el poder.</li><li><strong>Criollos:</strong> Hijos de españoles nacidos en América.</li><li><strong>Mestizos:</strong> Blanco e indígena.</li><li><strong>Mulatos y Zambos:</strong> Mezclas con afrodescendientes, discriminados.</li><li><strong>Negros:</strong> Esclavos traídos de África.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál era la diferencia entre un español peninsular y un criollo?</li><li>¿Quiénes ocupaban el lugar más alto en la pirámide social colonial?</li></ul>"
                    ]
                },
                {
                    title: "Sistemas de Trabajo y Resistencia",
                    content: [
                        "<strong>Encomienda:</strong> Sistema donde un español controlaba un grupo de indígenas para trabajo o tributo.",
                        "<strong>Resistencia:</strong> Líderes como <strong>Pablo Presbere</strong> (Talamanca) lucharon contra la dominación española.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué consistía el sistema de encomienda?</li><li>¿Quién fue Pablo Presbere y por qué es importante en nuestra historia?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "La colonia fue un período de gran desigualdad donde el poder, la riqueza y los derechos dependían del color de piel y el origen de las personas."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Cuál era la capital de Costa Rica durante la colonia?",
                    options: ["San José", "Cartago", "Alajuela"],
                    correct: 1
                },
                {
                    question: "¿Cómo se llamaban las pequeñas fincas familiares de subsistencia?",
                    options: ["Chacras", "Haciendas", "Plantaciones"],
                    correct: 0
                },
                {
                    question: "¿Qué sistema obligaba a los indígenas a trabajar para los españoles?",
                    options: ["Cooperativa", "Democracia", "Encomienda"],
                    correct: 2
                },
                {
                    question: "¿Quiénes tenían el poder político total?",
                    options: ["Indígenas", "Españoles Peninsulares", "Mestizos"],
                    correct: 1
                }
            ]
        },
        {
            id: 7,
            title: "Lección 7: Causas de la independencia",
            description: "Ideas de libertad y eventos mundiales.",
            sections: [
                {
                    title: "Causas Externas",
                    content: [
                        "<strong>Ilustración:</strong> Ideas de libertad de pensadores como <strong>Locke, Montesquieu y Rousseau</strong>.",
                        "<strong>Independencia de EE.UU. (1776):</strong> George Washington y Thomas Jefferson inspiraron a los criollos.",
                        "<strong>Revolución Francesa (1789):</strong> Declaración de los derechos del hombre.",
                        "<strong>Independencia de Haití:</strong> Primera república negra libre.",
                        "<strong>Invasión Napoleónica:</strong> Napoleon encarceló al rey de España, debilitando su control.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué ideas promovía el movimiento de la Ilustración?</li><li>¿En qué año se independizaron las Trece Colonias de Inglaterra?</li><li>¿Qué sucedió con el rey de España durante la invasión napoleónica?</li></ul>"
                    ]
                },
                {
                    title: "Causas Internas",
                    content: [
                        "<strong>Descontento Criollo:</strong> No podían ocupar cargos públicos.",
                        "<strong>Monopolio comercial:</strong> Solo se podía comerciar con España.",
                        "<strong>Cortes de Cádiz:</strong> Intento de dar más libertades que luego el Rey eliminó.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Por qué estaban descontentos los criollos con la corona española?</li><li>¿En qué consistía el monopolio comercial?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "La independencia de Hispanoamérica fue resultado de ideas de libertad llegadas de Europa y del descontento interno de los criollos por la injusticia del sistema colonial."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Qué evento de 1789 inspiró la independencia?",
                    options: ["Independencia de EE.UU.", "Llegada de Colón", "Revolución Francesa"],
                    correct: 2
                },
                {
                    question: "¿Por qué estaban descontentos los criollos?",
                    options: ["Porque no podían ocupar cargos políticos", "Por el clima", "Porque no les gustaba el cacao"],
                    correct: 0
                },
                {
                    question: "¿Qué movimiento europeo trajo ideas de libertad e igualdad?",
                    options: ["El Renacimiento", "La Ilustración", "La Colonia"],
                    correct: 1
                }
            ]
        },
        {
            id: 8,
            title: "Lección 8: La libertad política de Costa Rica",
            description: "Independencia y formación de la República.",
            sections: [
                {
                    title: "Independencia (1821)",
                    content: [
                        "El 15 de septiembre se firmó el acta en Guatemala. <strong>Dolores Bedoya</strong> animó al pueblo a presionar por la libertad.",
                        "El Acta llegó a Cartago el 13 de octubre junto con el 'Acta de los Nublados'. El 29 de octubre, Costa Rica firmó su independencia.",
                        "El <strong>Pacto de Concordia</strong> (diciembre 1821) fue la primera Constitución. Estableció un gobierno rotativo.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué fecha firmó Costa Rica su acta de independencia?</li><li>¿Quién fue Dolores Bedoya y qué hizo para apoyar la independencia?</li><li>¿Cómo se llamó nuestra primera Constitución Política?</li></ul>"
                    ]
                },
                {
                    title: "Guerra de Ochomogo (1823)",
                    content: [
                        "Guerra civil entre imperialistas (Cartago/Heredia) y republicanos (San José/Alajuela).",
                        "<strong>Gregorio José Ramírez</strong> lideró a los republicanos y ganó. La capital pasó de Cartago a San José.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué provincias se enfrentaron en la Guerra de Ochomogo?</li><li>¿Quién lideró a los republicanos y cuál fue el resultado de la guerra?</li><li>¿A qué ciudad pasó la capital después de este conflicto?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "Costa Rica logró su independencia de forma pacífica, pero tuvo que librar una pequeña guerra civil para decidir su futuro como república libre."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿En qué fecha se firmó el acta de independencia en Costa Rica?",
                    options: ["15 de septiembre", "29 de octubre", "1 de diciembre"],
                    correct: 1
                },
                {
                    question: "¿Cuál fue nuestra primera Constitución?",
                    options: ["Constitución de 1949", "Ley Fundamental", "Pacto de Concordia"],
                    correct: 2
                },
                {
                    question: "¿A qué ciudad pasó la capital después de la Guerra de Ochomogo?",
                    options: ["San José", "Alajuela", "Heredia"],
                    correct: 0
                }
            ]
        },
        {
            id: 9,
            title: "Lección 9: La anexión del Partido de Nicoya",
            description: "Unión voluntaria de Guanacaste a Costa Rica.",
            sections: [
                {
                    title: "El proceso",
                    content: [
                        "El Jefe de Estado <strong>Juan Mora Fernández</strong> invitó a Nicoya a unirse. El <strong>25 de julio de 1824</strong>, Nicoya, Santa Cruz y Guanacaste (Liberia) decidieron unirse.",
                        "El alcalde <strong>Cupertino Briceño</strong> organizó el cabildo bajo el lema: 'De la Patria por nuestra voluntad'.",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué fecha se celebra la Anexión del Partido de Nicoya?</li><li>¿Quién era el Jefe de Estado de Costa Rica que invitó a Nicoya a unirse?</li><li>¿Qué significa la frase 'De la Patria por nuestra voluntad'?</li></ul>"
                    ]
                },
                {
                    title: "Aportes de Guanacaste",
                    content: [
                        "<strong>Cultura:</strong> La marimba, el quijongo, las bombas y retahílas.",
                        "<strong>Comida:</strong> Tortillas, tamales, pozol.",
                        "<strong>Economía:</strong> Tierras para ganadería y hermosas playas para el turismo.",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione tres aportes culturales de Guanacaste a Costa Rica.</li><li>¿Qué beneficios económicos obtuvo el país con esta anexión?</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "La anexión del Partido de Nicoya fue una decisión libre de sus habitantes que enriqurecró enormemente a Costa Rica en territorio, cultura y economía."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿En qué fecha se celebra la Anexión del Partido de Nicoya?",
                    options: ["25 de julio", "11 de abril", "15 de septiembre"],
                    correct: 0
                },
                {
                    question: "¿Cuál era el lema de los habitantes de Nicoya al unirse?",
                    options: ["¡Viva Costa Rica!", "De la Patria por nuestra voluntad", "Pura Vida"],
                    correct: 1
                },
                {
                    question: "¿Qué instrumento musical es símbolo de la cultura guanacasteca?",
                    options: ["Piano", "Guitarra", "Marimba"],
                    correct: 2
                }
            ]
        },
        {
            id: 10,
            title: "Lección 10: Los símbolos nacionales",
            description: "Representaciones de nuestra identidad.",
            sections: [
                {
                    title: "Símbolos Principales",
                    content: [
                        "<strong>Bandera Nacional (1848):</strong> Diseñada por Pacífica Fernández. Inspirada en Francia (azul, blanco y rojo).",
                        "<strong>Escudo Nacional (1848):</strong> Marco dorado, tres volcanes, un valle entre dos océanos con barcos mercantes, un sol naciente y siete estrellas.",
                        "<strong>Himno Nacional:</strong> Música de Manuel María Gutiérrez (1852) y letra de José María Zeledón (1903).",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Quién diseñó la bandera actual y en qué país se inspiró?</li><li>¿Qué representan los tres volcanes y las siete estrellas en el escudo?</li><li>¿Quiénes compusieron la música y la letra del Himno Nacional?</li></ul>"
                    ]
                },
                {
                    title: "Emblemas Nacionales",
                    content: [
                        "<ul>",
                        "<li><strong>Árbol de Guanacaste (1959):</strong> Su sombra representa la protección del Estado.</li>",
                        "<li><strong>Guaria Morada (1939):</strong> Flor nacional.</li>",
                        "<li><strong>Yigüirro (1977):</strong> Su canto anuncia las lluvias.</li>",
                        "<li><strong>Carreta típica (1988):</strong> Símbolo del trabajo y el progreso.</li>",
                        "<li><strong>Marimba (1996):</strong> Instrumento musical nacional.</li>",
                        "<li><strong>Venado cola blanca (1995):</strong> Símbolo de la fauna.</li>",
                        "<li><strong>Antorcha de la Independencia (2005):</strong> Recorre Centroamérica cada setiembre.</li>",
                        "<li><strong>Crestones del Chirripó (2011):</strong> Sitio turístico nacional.</li>",
                        "<li><strong>Manatí (2014):</strong> Símbolo de la fauna marina.</li>",
                        "<li><strong>Esferas de piedra (2014):</strong> Herencia indígena.</li>",
                        "<li><strong>Teatro Nacional (2018):</strong> Símbolo del arte y la cultura.</li>",
                        "</ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Por qué se eligió al yigüirro como ave nacional?</li><li>¿Qué representa la carreta típica como símbolo nacional?</li><li>Mencione tres emblemas nacionales que representen nuestra fauna.</li></ul>"
                    ]
                },
                {
                    title: "Idea principal",
                    content: [
                        "Los símbolos y emblemas nacionales representan nuestra historia, naturaleza, cultura y valores como pueblo, y debemos respetarlos y valorarlos."
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Quién diseñó la bandera de Costa Rica?",
                    options: ["Juan Mora Fernández", "Pacífica Fernández", "Juan Rafael Mora"],
                    correct: 1
                },
                {
                    question: "¿Qué representan las siete estrellas del escudo?",
                    options: ["Las siete provincias", "Los siete días de la semana", "Siete volcanes"],
                    correct: 0
                },
                {
                    question: "¿Cuál es el ave nacional de Costa Rica?",
                    options: ["Lapa Roja", "Colibrí", "Yigüirro"],
                    correct: 2
                },
                {
                    question: "¿Qué representa la carreta típica?",
                    options: ["El transporte de lujo", "El trabajo y el progreso", "Las fiestas patronales"],
                    correct: 1
                }
            ]
        },
        {
            id: 11,
            title: "Banco de Preguntas Completo",
            description: "Guía de estudio integral con las 200 preguntas de quinto grado para repaso general.",
            sections: [
                {
                    title: "Taller 1: Historia antigua de Costa Rica",
                    content: [
                        "1. ¿Hace cuántos años aproximadamente llegaron los primeros pobladores al territorio de Costa Rica?",
                        "2. ¿Qué es un modo de vida?",
                        "3. ¿Cuáles son los cuatro modos de vida de la época precolombina en Costa Rica?",
                        "4. ¿Qué significa ser nómada?",
                        "5. ¿Qué tipo de animales cazaban los primeros pobladores y cómo se les llamaba?",
                        "6. Mencione tres ejemplos de animales de megafauna.",
                        "7. ¿Cuál era la diferencia entre las actividades de los hombres y las mujeres en los cazadores-recolectores?",
                        "8. ¿Por qué desapareció la megafauna?",
                        "9. ¿Qué herramienta característica utilizaban los primeros cazadores para cazar?",
                        "10. ¿Qué es la semicultura y qué es la vegecultura? Dé un ejemplo de cada una.",
                        "11. ¿En qué consistía la técnica de roza y quema?",
                        "12. ¿Por qué se les llama 'aldeanos igualitarios' a los pobladores del período 2,000 a.C. – 500 a.C.?",
                        "13. ¿Qué es un cacique y qué funciones tenía?",
                        "14. ¿Qué es un chamán y cuál era su papel en la sociedad?",
                        "15. ¿Qué diferencia hay entre una persona sedentaria y una nómada?",
                        "16. ¿Para qué se utilizaban los objetos de jade en las sociedades cacicales?",
                        "17. Mencione cinco cultivos importantes de los primeros pobladores.",
                        "18. ¿Qué tipo de cerámica fabricaban los aldeanos igualitarios y para qué la usaban?",
                        "19. ¿Cuáles son las tres etapas de los aldeanos cacicales?",
                        "20. ¿Por qué el descubrimiento de la agricultura fue tan importante para los primeros pobladores?"
                    ]
                },
                {
                    title: "Taller 2: Etnias de la Costa Rica antigua",
                    content: [
                        "1. ¿Cuáles son las tres áreas culturales de América que influyeron en Costa Rica?",
                        "2. ¿Qué territorios abarcaba el Área Mesoamericana?",
                        "3. Mencione tres civilizaciones importantes del Área Mesoamericana.",
                        "4. ¿Cuál era la base de la dieta de los pueblos mesoamericanos?",
                        "5. ¿Qué territorios abarcaba el Área Intermedia y cuáles pueblos la habitaban?",
                        "6. ¿Qué objetos famosos se encuentran en Costa Rica pertenecientes al Área Intermedia?",
                        "7. ¿Qué territorios abarcaba el Área Andina y cuál era su civilización más importante?",
                        "8. ¿Para qué se utilizaban las llamas en el Área Andina?",
                        "9. ¿Qué eran los quipus y para qué servían?",
                        "10. ¿Cuáles son las tres áreas culturales de Costa Rica?",
                        "11. ¿Qué grupo indígena habitaba la Región Gran Nicoya y qué influencia recibió?",
                        "12. ¿Dónde se encuentra el Monumento Nacional Guayabo y a cuál región cultural pertenece?",
                        "13. ¿Cuáles grupos indígenas habitaban la Subregión Diquís?",
                        "14. ¿Por qué se dice que Costa Rica es un 'puente cultural'?",
                        "15. ¿Cuáles son las ocho etnias indígenas de Costa Rica?",
                        "16. ¿En qué creen los cabécares y los bribris? ¿Quién es su dios?",
                        "17. ¿Qué celebran los bruncas cada 31 de diciembre?",
                        "18. ¿Dónde viven los malekus y en qué dios creen?",
                        "19. ¿Qué simbolizan los vestidos de las mujeres ngäbes?",
                        "20. ¿Qué es la cosmovisión?"
                    ]
                },
                {
                    title: "Taller 3: Situación actual de los pueblos originarios",
                    content: [
                        "1. Mencione cinco productos alimenticios que heredamos de los indígenas.",
                        "2. Mencione cinco palabras del idioma español que provienen de lenguas indígenas.",
                        "3. ¿Cuál es la importancia de la cerámica indígena para la sociedad actual?",
                        "4. ¿En qué consiste la técnica de cultivo de roza y quema y por qué es importante?",
                        "5. ¿Qué son las plantas medicinales? Mencione tres ejemplos.",
                        "6. ¿Por qué debemos aprender del respeto que los indígenas tienen por la naturaleza?",
                        "7. ¿Qué es la orfebrería?",
                        "8. ¿Por qué son importantes las esferas de piedra para Costa Rica?",
                        "9. Mencione tres ejemplos de manifestaciones culturales indígenas que se conservan hoy.",
                        "10. ¿Qué problemas enfrentan los pueblos indígenas con las vías de comunicación?",
                        "11. ¿Por qué es difícil para los niños indígenas asistir a la escuela?",
                        "12. ¿Qué porcentaje de los indígenas de Costa Rica vive en pobreza?",
                        "13. ¿Qué son las reservas indígenas y para qué sirven?",
                        "14. ¿Por qué es importante preservar las lenguas indígenas?",
                        "15. ¿Cuáles productos a base de maíz heredamos de los indígenas?",
                        "16. ¿Qué desafíos económicos enfrentan las comunidades indígenas actualmente?",
                        "17. ¿Cómo ha contribuido el conocimiento indígena de plantas medicinales a la medicina moderna?",
                        "18. ¿Por qué se dice que los indígenas son un ejemplo de convivencia con la naturaleza?",
                        "19. ¿Qué necesitan las comunidades indígenas en cuanto a participación política?",
                        "20. ¿Por qué es importante que la sociedad costarricense valore los legados indígenas?"
                    ]
                },
                {
                    title: "Taller 4: Costa Rica, sociedad intercultural, multiétnica y plurilingüe",
                    content: [
                        "1. ¿Qué es la interculturalidad?",
                        "2. ¿Qué significa que Costa Rica sea un país multiétnico?",
                        "3. ¿Qué significa que Costa Rica sea un país plurilingüe?",
                        "4. ¿Qué dice el artículo 1 reformado de la Constitución Política de Costa Rica?",
                        "5. ¿En qué año se reformó el artículo 1 de la Constitución?",
                        "6. ¿Qué es una etnia? Dé un ejemplo.",
                        "7. ¿Por qué se dice que el costarricense es mestizo?",
                        "8. ¿Cuáles grupos étnicos y migrantes conforman la sociedad costarricense?",
                        "9. ¿Qué idiomas indígenas se hablan en Costa Rica? Mencione dos.",
                        "10. ¿Cuál fue la ley que definió a Costa Rica como país multiétnico y pluricultural?",
                        "11. ¿Por qué es importante que los niños indígenas reciban clases en su lengua materna?",
                        "12. ¿Qué beneficios trae la diversidad cultural a un país?",
                        "13. ¿Qué lengua heredaron los afrodescendientes de sus antepasados?",
                        "14. ¿Por qué debemos respetar las diferentes culturas que existen en Costa Rica?",
                        "15. ¿Qué ejemplo de diversidad cultural nos dan las comidas de diferentes grupos étnicos?",
                        "16. ¿Cuáles raíces culturales tiene el pueblo costarricense?",
                        "17. ¿Qué importancia tiene la reforma constitucional para las minorías étnicas?",
                        "18. ¿Qué grupos migrantes han contribuido a la cultura costarricense?",
                        "19. ¿Qué diferencia hay entre pluricultural y plurilingüe?",
                        "20. ¿Por qué es importante la convivencia armoniosa entre diferentes culturas?"
                    ]
                },
                {
                    title: "Unidad 2 - Taller 1: El momento del contacto",
                    content: [
                        "1. ¿En qué año llegó Cristóbal Colón a las costas de Costa Rica?",
                        "2. ¿A qué lugar de Costa Rica llegó Colón y cómo lo llamaban los indígenas?",
                        "3. ¿Por qué Colón le dio el nombre de 'Costa Rica' a nuestro territorio?",
                        "4. ¿Qué era la Ruta de la Seda y por qué era importante?",
                        "5. ¿Qué sucedió en Constantinopla que obligó a buscar nuevas rutas de comercio?",
                        "6. ¿Dónde nació Cristóbal Colón y en qué año?",
                        "7. ¿Cuáles fueron los dos errores de cálculo que cometió Colón?",
                        "8. ¿Qué eran las Capitulaciones de Santa Fe?",
                        "9. ¿Cuáles eran las tres carabelas del primer viaje de Colón?",
                        "10. ¿Qué tierras descubrió Colón en su primer viaje?",
                        "11. ¿Cuál era el objetivo del segundo viaje de Colón?",
                        "12. ¿Qué sucedió durante el tercer viaje de Colón?",
                        "13. ¿Cuántos días permaneció Colón en territorio costarricense durante su cuarto viaje?",
                        "14. ¿Quién fue Américo Vespucio y por qué es importante?",
                        "15. ¿Cuáles son las dos fases de la conquista española en Costa Rica?",
                        "16. Mencione tres características de la primera fase de conquista.",
                        "17. Mencione tres características de la segunda fase de conquista.",
                        "18. ¿Quién es considerado el verdadero conquistador de Costa Rica y por qué?",
                        "19. ¿Qué consecuencias tuvo la conquista para la población indígena?",
                        "20. ¿Quién fue Bartolomé de las Casas y cuál fue su papel?"
                    ]
                },
                {
                    title: "Unidad 2 - Taller 2: La sociedad colonial en Costa Rica",
                    content: [
                        "1. ¿Entre qué años se desarrolló el período colonial en Costa Rica?",
                        "2. ¿Cuál era la capital de Costa Rica durante la colonia?",
                        "3. ¿A cuál virreinato y capitanía general pertenecía Costa Rica?",
                        "4. ¿Qué es un virreinato y quién lo gobernaba?",
                        "5. ¿Cuáles eran los cuatro virreinatos de América?",
                        "6. ¿Qué era una Capitanía General y cuál era su función?",
                        "7. ¿Cuál era la diferencia entre un cabildo abierto y un cabildo cerrado?",
                        "8. ¿Qué era el Consejo de Indias y cuáles eran sus funciones?",
                        "9. ¿Por qué Costa Rica era una provincia pobre durante la colonia?",
                        "10. ¿Cuáles eran las tres formas de uso de la tierra durante la colonia?",
                        "11. ¿Qué era una chacra, dónde se ubicaba y a qué se dedicaba?",
                        "12. ¿Qué era una hacienda, dónde se ubicaba y a qué se dedicaba?",
                        "13. ¿Qué era una plantación, dónde se ubicaba y qué se cultivaba?",
                        "14. ¿Qué eran las 'ferias de Matina'?",
                        "15. ¿Cuáles son las clases sociales de la pirámide social colonial, de mayor a menor?",
                        "16. ¿Qué diferencia había entre un español peninsular y un criollo?",
                        "17. ¿Qué era el sistema de encomiendas y cuáles eran sus dos tipos?",
                        "18. ¿Quiénes fueron Pablo Presbere y Garabito, y por qué son importantes?",
                        "19. ¿Cuál era la situación de los esclavos negros durante la colonia?",
                        "20. Mencione cinco costumbres o tradiciones heredadas de la época colonial."
                    ]
                },
                {
                    title: "Unidad 3 - Taller 1: Causas de la independencia",
                    content: [
                        "1. ¿Qué fue la Ilustración y en qué siglo se desarrolló?",
                        "2. ¿Cuáles fueron las principales ideas que promovía la Ilustración?",
                        "3. ¿Qué propuso John Locke?",
                        "4. ¿Qué propuso el Barón de Montesquieu?",
                        "5. ¿Qué criticaba Voltaire?",
                        "6. ¿Qué ideas promovió Rousseau en 'El Contrato Social'?",
                        "7. ¿Qué fue 'La Enciclopedia' y quiénes la editaron?",
                        "8. ¿Por qué se independizaron las Trece Colonias de Inglaterra?",
                        "9. ¿Quién lideró el ejército de las Trece Colonias y quién redactó la Declaración de Independencia?",
                        "10. ¿Cuáles fueron las causas de la Revolución Francesa?",
                        "11. ¿En cuáles tres Estados estaba dividida la sociedad francesa?",
                        "12. ¿Qué sucedió el 14 de julio de 1789 en Francia?",
                        "13. ¿Qué fue la Declaración de los Derechos del Hombre y del Ciudadano?",
                        "14. ¿Qué importancia tuvo la independencia de Haití?",
                        "15. ¿Qué hizo Napoleón Bonaparte con el rey de España Fernando VII?",
                        "16. ¿Por qué estaban descontentos los criollos con la Corona española?",
                        "17. ¿Por qué expulsaron a los jesuitas de las colonias americanas?",
                        "18. ¿Cuál fue el papel de los periódicos y los sacerdotes en la independencia?",
                        "19. ¿En qué consistía el monopolio comercial español?",
                        "20. ¿Qué sucedió con las Cortes de Cádiz que enfureció a los criollos?"
                    ]
                },
                {
                    title: "Unidad 3 - Taller 2: La libertad política de Costa Rica",
                    content: [
                        "1. ¿En qué fecha se firmó el Acta de Independencia de Centroamérica?",
                        "2. ¿Quién fue Gabino Gaínza y cuál fue su papel?",
                        "3. ¿Qué propuso Pedro Molina y qué propuso José Cecilio del Valle?",
                        "4. ¿Quién fue Dolores Bedoya y qué hizo la noche del 14 de setiembre?",
                        "5. ¿Quién redactó el Acta de Independencia de Centroamérica?",
                        "6. ¿Qué era el 'Acta de los Nublados' y quién la envió?",
                        "7. ¿Quién recibió las actas en Costa Rica y en qué fecha llegaron?",
                        "8. ¿Quiénes fueron los miembros de la Junta de Legados de los Ayuntamientos?",
                        "9. ¿En qué fecha firmó Costa Rica su propia acta de independencia?",
                        "10. Mencione tres limitaciones del Acta del 15 de setiembre.",
                        "11. ¿Cómo se llamó la primera Constitución Política de Costa Rica?",
                        "12. ¿En qué fecha entró en vigencia el Pacto de Concordia?",
                        "13. Mencione tres disposiciones del Pacto de Concordia.",
                        "14. ¿Qué provincias eran imperialistas y cuáles eran republicanas en la Guerra de Ochomogo?",
                        "15. ¿Quién fue Gregorio José Ramírez y cuál fue su papel?",
                        "16. ¿Quién fue Rafael Francisco Osejo?",
                        "17. ¿En qué fecha y lugar se libró la Guerra de Ochomogo?",
                        "18. ¿Quién ganó la Guerra de Ochomogo?",
                        "19. Mencione tres consecuencias de la Guerra de Ochomogo.",
                        "20. ¿Por qué se dice que los costarricenses que murieron en Ochomogo lucharon por un imperio que ya no existía?"
                    ]
                },
                {
                    title: "Unidad 3 - Taller 3: La anexión del Partido de Nicoya",
                    content: [
                        "1. ¿Qué era el Partido de Nicoya?",
                        "2. ¿Cuáles pueblos conformaban el Partido de Nicoya?",
                        "3. ¿A cuál país o provincia pertenecía el Partido de Nicoya durante la colonia?",
                        "4. ¿Por qué el Partido de Nicoya tenía fuertes lazos comerciales con Costa Rica?",
                        "5. ¿Quién fue Florencio del Castillo y cuál fue su importancia?",
                        "6. ¿Por qué Nicaragua quería anexar el Partido de Nicoya?",
                        "7. ¿Por qué los nicoyanos no querían unirse a Nicaragua?",
                        "8. ¿Quién era el Jefe de Estado de Costa Rica que invitó a Nicoya a unirse al país?",
                        "9. ¿Quién era Cupertino Briceño y cuál fue su papel?",
                        "10. ¿En qué fecha se anexó el Partido de Nicoya a Costa Rica?",
                        "11. ¿Cuál fue el lema de la anexión?",
                        "12. ¿En qué tratado quedó registrada la anexión del Partido de Nicoya?",
                        "13. ¿En qué año Guanacaste recibió la categoría de provincia?",
                        "14. ¿Cuántos cantones tiene actualmente la provincia de Guanacaste?",
                        "15. Mencione tres beneficios económicos que Costa Rica obtuvo con la anexión.",
                        "16. Mencione tres aportes culturales de Guanacaste a Costa Rica.",
                        "17. ¿Cuáles instrumentos musicales aportó Guanacaste a la cultura nacional?",
                        "18. ¿Por qué es incorrecto decir 'anexión de Guanacaste' en vez de 'anexión del Partido de Nicoya'?",
                        "19. ¿Cuál árbol fue declarado emblema nacional en honor a la anexión?",
                        "20. ¿Qué significa la frase 'De la Patria por nuestra voluntad'?"
                    ]
                },
                {
                    title: "Unidad 3 - Taller 4: Los símbolos nacionales de Costa Rica",
                    content: [
                        "1. ¿Quién diseñó la bandera actual de Costa Rica y en qué se inspiró?",
                        "2. ¿En qué año se creó la bandera actual y durante la administración de cuál presidente?",
                        "3. ¿Cuáles son los colores de la bandera de Costa Rica y cómo están distribuidos?",
                        "4. ¿Cuál es la diferencia entre la Bandera Nacional y el Pabellón Nacional?",
                        "5. ¿Qué representan los tres volcanes del Escudo Nacional?",
                        "6. ¿Qué representan las siete estrellas del Escudo Nacional?",
                        "7. ¿Qué representa el sol naciente en el Escudo Nacional?",
                        "8. ¿Qué representa el marco dorado del Escudo Nacional?",
                        "9. ¿Quién compuso la música del Himno Nacional y por orden de cuál presidente?",
                        "10. ¿Quién escribió la letra del Himno Nacional y en qué año?",
                        "11. ¿Por qué se escogió al árbol de Guanacaste como emblema nacional?",
                        "12. ¿En qué año y cómo fue elegida la Guaria Morada como Flor Nacional?",
                        "13. ¿Por qué el yigüirro fue declarado ave nacional?",
                        "14. ¿Qué representa la carreta típica como símbolo nacional?",
                        "15. ¿En qué año fue declarada la marimba como instrumento musical nacional?",
                        "16. ¿Qué recorrido hace la Antorcha de la Independencia cada setiembre?",
                        "17. ¿Por qué los Crestones del Chirripó son un símbolo especial?",
                        "18. ¿Qué simboliza el manatí como emblema nacional?",
                        "19. ¿Por qué las esferas de piedra fueron declaradas símbolo patrio?",
                        "20. ¿En qué año fue construido el Teatro Nacional y por qué es un símbolo nacional?"
                    ]
                }
            ]
        }
    ],
    6: [
        {
            id: 1,
            title: "Lección 1: La Campaña Nacional de Costa Rica (1856-1857)",
            description: "Consolidación de la independencia y lucha contra los filibusteros.",
            sections: [
                {
                    title: "1. Conociendo a los personajes",
                    content: [
                        "<p><strong>Juan Rafael Mora Porras:</strong> Nació en San José en 1814. Fue presidente tres veces (1849-1859). Promovió el café, el alumbrado público y dirigió la defensa nacional. A pesar de no tener educación formal, fue un líder extraordinario.</p>",
                        "<p><strong>William Walker:</strong> Estadounidense ambicioso (médico y abogado) que intentó conquistar Centroamérica. Se declaró presidente de Nicaragua en 1856 y buscaba extender la esclavitud.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Quién fue Juan Rafael Mora Porras y cuántas veces fue presidente?</li><li>¿Qué ambiciones tenía William Walker en Nicaragua?</li></ul>"
                    ]
                },
                {
                    title: "2. Antecedentes y Causas",
                    content: [
                        "<h3>Causas Internacionales</h3><ul><li><strong>Imperialismo:</strong> Potencias como Inglaterra y EE.UU. querían controlar la región.</li><li><strong>Destino Manifiesto:</strong> Idea de que EE.UU. debía expandirse por todo el continente.</li><li><strong>Doctrina Monroe:</strong> 'América para los americanos'.</li></ul>",
                        "<h3>Vía del Tránsito</h3><p>Nicaragua era clave para viajar a California (Fiebre del Oro) por el río San Juan y el lago, siendo el punto estratégico que Walker quería controlar.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué significaba la frase 'América para los americanos' en la Doctrina Monroe?</li><li>¿Por qué era importante la Vía del Tránsito para Estados Unidos?</li></ul>"
                    ]
                },
                {
                    title: "3. La Guerra en Nicaragua",
                    content: [
                        "<p>Nicaragua estaba en guerra civil entre <strong>Liberales (León)</strong> y <strong>Conservadores (Granada)</strong>. Los liberales contrataron a Walker y sus filibusteros como mercenarios.</p>",
                        "<p><strong>¿Qué es un filibustero?</strong> Invasores extranjeros que usan la fuerza para apoderarse de territorios y convertirlos en colonias.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué grupos peleaban en la guerra civil de Nicaragua?</li><li>¿Qué es un filibustero?</li></ul>"
                    ]
                },
                {
                    title: "4. Primera Fase: Batallas Principales",
                    content: [
                        "<ul><li><strong>Batalla de Santa Rosa (20 de marzo, 1856):</strong> Primera victoria tica en Guanacaste en solo 14 minutos.</li><li><strong>Batalla de Sardinal (10 de abril, 1856):</strong> Se detuvo el avance filibustero por el río Sarapiquí.</li><li><strong>Batalla de Rivas (11 de abril, 1856):</strong> <strong>Juan Santamaría</strong> quemó el Mesón de Guerra, obligando a Walker a huir.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿En qué batalla Juan Santamaría quemó el Mesón de Guerra?</li><li>¿Cuál fue la primera victoria costarricense en territorio nacional?</li></ul>"
                    ]
                },
                {
                    title: "5. Peste del Cólera y Consecuencias",
                    content: [
                        "<p>La <strong>peste del cólera</strong> obligó al ejército a regresar. Murieron cerca de 10,000 personas (10% de la población). Fue más letal que las balas.</p>",
                        "<h3>Consecuencias finales</h3><ul><li>Consolidación de la identidad nacional.</li><li>Nacimiento de héroes como Santamaría, Mora y <strong>Pancha Carrasco</strong>.</li><li>Fortalecimiento de la unión centroamericana.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cómo afectó la peste del cólera a la población costarricense?</li><li>Mencione dos consecuencias de la Campaña Nacional.</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Quién fue el presidente que lideró la Campaña Nacional?",
                    options: ["Juan Rafael Mora Porras", "Tomás Guardia", "José Figueres"],
                    correct: 0
                },
                {
                    question: "¿Qué edificio quemó Juan Santamaría en la Batalla de Rivas?",
                    options: ["El Cuartel", "El Mesón de Guerra", "La Catedral"],
                    correct: 1
                },
                {
                    question: "¿Qué enfermedad causó más muertes que la guerra misma?",
                    options: ["Gripe", "Cólera", "Fiebre Amarilla"],
                    correct: 1
                },
                {
                    question: "¿En qué país nació William Walker?",
                    options: ["Inglaterra", "Nicaragua", "Estados Unidos"],
                    correct: 2
                },
                {
                    question: "¿Cuál fue la primera batalla ganada en territorio costarricense?",
                    options: ["Rivas", "Santa Rosa", "Sardinal"],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Lección 2: El Estado Liberal y los Sueños de Progreso",
            description: "Modernización del país, ferrocarril y reformas.",
            sections: [
                {
                    title: "1. El Estado Liberal",
                    content: [
                        "<p>A finales del siglo XIX, bajo el lema <strong>'Orden y Progreso'</strong>, Costa Rica inició una modernización liderada por el general <strong>Tomás Guardia</strong> (1870).</p>",
                        "<h3>Características</h3><ul><li>Desarrollo económico.</li><li>Libertades individuales (expresión, culto).</li><li>Separación de la Iglesia y el Estado.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Quién fue el líder que inició la modernización del Estado Liberal?</li><li>¿Cuál era el lema de esta época?</li></ul>"
                    ]
                },
                {
                    title: "2. El Ferrocarril al Caribe",
                    content: [
                        "<p>Para exportar café a Europa más barato, era necesario un puerto en Limón. Se pidió un préstamo a Inglaterra, pero no alcanzó.</p>",
                        "<p>El estadounidense <strong>Minor Keith</strong> terminó la obra a cambio de tierras para cultivar banano, lo que cambió la economía del Caribe.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Por qué era necesario construir un ferrocarril al Caribe?</li><li>¿Quién fue Minor Keith y qué cultivo impulsó?</li></ul>"
                    ]
                },
                {
                    title: "3. Reformas Liberales",
                    content: [
                        "<h3>Reforma Educativa (1886)</h3><p><strong>Mauro Fernández</strong> impulsó leyes para que la educación primaria fuera <strong>gratuita, obligatoria y laica</strong>.</p>",
                        "<h3>Otras reformas</h3><ul><li><strong>Jurídica:</strong> Matrimonio civil y divorcio.</li><li><strong>Religiosa:</strong> Cementerios pasaron al Estado (secularización).</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuáles son las tres características de la educación según la reforma de 1886?</li><li>Mencione una reforma jurídica o religiosa de la época liberal.</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Quién impulsó la reforma educativa en 1886?",
                    options: ["Juan Rafael Mora", "Mauro Fernández", "Tomás Guardia"],
                    correct: 1
                },
                {
                    question: "¿Qué producto se empezó a cultivar masivamente gracias al ferrocarril?",
                    options: ["Café", "Bananos", "Cacao"],
                    correct: 1
                },
                {
                    question: "¿Cuál era el lema del Estado Liberal?",
                    options: ["Pura Vida", "Libertad o Muerte", "Orden y Progreso"],
                    correct: 2
                },
                {
                    question: "¿Qué presidente liberal abolió la pena de muerte?",
                    options: ["Tomás Guardia", "Braulio Carrillo", "Rafael Yglesias"],
                    correct: 0
                }
            ]
        },
        {
            id: 3,
            title: "Lección 3: El Estado Social y las Reformas de 1940",
            description: "La creación de la CCSS, UCR y garantías sociales.",
            sections: [
                {
                    title: "1. Crisis del Modelo Liberal",
                    content: [
                        "<p>El modelo liberal dejó problemas: pobreza, desnutrición y falta de derechos laborales. Los trabajadores no tenían salario mínimo ni seguro médico.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué problemas sociales dejó el modelo liberal sin resolver?</li><li>¿Por qué era necesaria una reforma en los derechos de los trabajadores?</li></ul>"
                    ]
                },
                {
                    title: "2. Las Grandes Reformas",
                    content: [
                        "<p>El presidente <strong>Rafael Ángel Calderón Guardia</strong> impulsó cambios profundos con una alianza histórica entre el Gobierno, la Iglesia Católica y el Partido Comunista.</p>",
                        "<ul>",
                        "<li><strong>UCR (1941):</strong> Creación de la primera universidad pública moderna.</li>",
                        "<li><strong>CCSS:</strong> Seguro social para salud y pensiones.</li>",
                        "<li><strong>Garantías Sociales:</strong> Derechos incluidos en la Constitución (vacaciones, huelga, 8 horas).</li>",
                        "<li><strong>Código de Trabajo (1943):</strong> Leyes que protegen al trabajador frente al patrono.</li>",
                        "</ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione tres de las reformas sociales más importantes de esta década.</li><li>¿Qué actores formaron la 'Alianza Histórica' para estas reformas?</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Quién fue el presidente de las Reformas Sociales de 1940?",
                    options: ["José Figueres", "Rafael Ángel Calderón Guardia", "Otilio Ulate"],
                    correct: 1
                },
                {
                    question: "¿Qué significan las siglas CCSS?",
                    options: ["Caja Costarricense de Seguro Social", "Centro de Salud y Seguridad", "Código Civil de Seguridad"],
                    correct: 0
                },
                {
                    question: "¿Cuántas horas es la jornada laboral máxima según las Garantías Sociales?",
                    options: ["10 horas", "6 horas", "8 horas"],
                    correct: 2
                }
            ]
        },
        {
            id: 4,
            title: "Lección 4: La Guerra Civil de 1948",
            description: "Abolición del ejército y la nueva Constitución.",
            sections: [
                {
                    title: "1. Causas de la Guerra",
                    content: [
                        "<p>La <strong>anulación de las elecciones de 1948</strong> (donde ganó Otilio Ulate) y la corrupción electoral llevaron al país al conflicto armado.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuál fue la causa principal del estallido de la Guerra Civil?</li><li>¿Quién ganó oficialmente las elecciones de 1948 antes de ser anuladas?</li></ul>"
                    ]
                },
                {
                    title: "2. José Figueres Ferrer y el Conflicto",
                    content: [
                        "<p>Figueres lideró el Ejército de Liberación Nacional. La guerra duró 44 días y cambió el rumbo del país.</p>",
                        "<h3>Logros de la Segunda República</h3><ul><li><strong>Abolición del Ejército (1º dic, 1948):</strong> Se eliminaron las fuerzas armadas para invertir en educación.</li><li><strong>Voto Femenino:</strong> Las mujeres pudieron votar por primera vez.</li><li><strong>TSE:</strong> Creación del tribunal para garantizar elecciones limpias.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Por qué es importante la abolición del ejército para Costa Rica?</li><li>¿Qué nuevos derechos políticos se otorgaron tras la guerra?</li></ul>"
                    ]
                },
                {
                    title: "3. Constitución de 1949",
                    content: [
                        "<p>Es la ley fundamental que nos rige hoy. Estableció el derecho a la vida, la libertad de pensamiento y prohibió el ejército permanentemente.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Qué derechos fundamentales establece la Constitución de 1949?</li><li>¿Qué significa que la vida humana sea inviolable según la ley?</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿En qué año se abolió el ejército en Costa Rica?",
                    options: ["1821", "1948", "2015"],
                    correct: 1
                },
                {
                    question: "¿Quién lideró el Ejército de Liberación Nacional?",
                    options: ["Calderón Guardia", "Juan Santamaría", "José Figueres Ferrer"],
                    correct: 2
                },
                {
                    question: "¿Qué institution se encarga hoy de las elecciones en el país?",
                    options: ["ICE", "TSE", "CCSS"],
                    correct: 1
                }
            ]
        },
        {
            id: 5,
            title: "Lección 5: Ciudadanía y Desafíos Actuales",
            description: "Participación, seguridad y desafíos de la sociedad.",
            sections: [
                {
                    title: "1. Participación Ciudadana",
                    content: [
                        "<p>Ser ciudadano no es solo votar. Es participar en el <strong>Gobierno Estudiantil</strong>, comités comunales y actos cívicos.</p>",
                        "<h3>Cultura Fiscal</h3><p>Pagar <strong>impuestos</strong> es necesario para que el Estado construya escuelas, hospitales y carreteras.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿De qué formas pueden participar los estudiantes en su escuela?</li><li>¿Por qué es importante pagar los impuestos?</li></ul>"
                    ]
                },
                {
                    title: "2. Desafíos Sociales",
                    content: [
                        "<h3>Prevención de Drogas</h3><p>Las drogas alteran el organismo y causan dependencia. La familia y el deporte son los mejores factores de protección.</p>",
                        "<h3>Redes Sociales</h3><p>Evitar el <strong>ciberbullying</strong> y no compartir datos personales con desconocidos.</p>",
                        "<h4>Preguntas de repaso</h4><ul><li>¿Cuáles son los principales factores de protección contra las drogas?</li><li>Mencione un riesgo de las redes sociales y cómo evitarlo.</li></ul>"
                    ]
                },
                {
                    title: "3. Seguridad Vial y Riesgos",
                    content: [
                        "<ul><li><strong>Seguridad Vial:</strong> Cruzar por las esquinas, usar semáforos y respetar señales previene muertes.</li><li><strong>Gestión de Riesgo:</strong> Tener un plan de emergencias y un maletín listo ante terremotos o inundaciones.</li></ul>",
                        "<h4>Preguntas de repaso</h4><ul><li>Mencione dos normas fundamentales para los peatones.</li><li>¿Qué debe contener un kit o maletín de emergencias?</li></ul>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Para qué sirven los impuestos que recolecta Hacienda?",
                    options: ["Para viajes de políticos", "Para construir escuelas y hospitales", "Para nada"],
                    correct: 1
                },
                {
                    question: "¿Qué es el ciberbullying?",
                    options: ["Un juego online", "Acoso o humillación en medios digitales", "Ver videos en YouTube"],
                    correct: 1
                },
                {
                    question: "¿Qué debe incluir un maletín de emergencias?",
                    options: ["Juguetes", "Agua, alimentos y linterna", "Solo dinero"],
                    correct: 1
                }
            ]
        },
        {
            id: 6,
            title: "Lección 6: Banco de Preguntas Completo (6°)",
            description: "Repaso general de todos los temas de 6to grado.",
            sections: [
                {
                    title: "1. La Campaña Nacional y el Estado Liberal",
                    content: [
                        "<p>👉 ¿Quién fue Juan Rafael Mora Porras y cuántas veces fue presidente?</p>",
                        "<p>👉 ¿Qué ambiciones tenía William Walker en Nicaragua?</p>",
                        "<p>👉 ¿Qué significaba la frase 'América para los americanos' en la Doctrina Monroe?</p>",
                        "<p>👉 ¿Por qué era importante la Vía del Tránsito para Estados Unidos?</p>",
                        "<p>👉 ¿Qué grupos peleaban en la guerra civil de Nicaragua?</p>",
                        "<p>👉 ¿Qué es un filibustero?</p>",
                        "<p>👉 ¿En qué batalla Juan Santamaría quemó el Mesón de Guerra?</p>",
                        "<p>👉 ¿Cuál fue la primera victoria costarricense en territorio nacional?</p>",
                        "<p>👉 ¿Cómo afectó la peste del cólera a la población costarricense?</p>",
                        "<p>👉 Mencione dos consecuencias de la Campaña Nacional.</p>",
                        "<p>👉 ¿Quién fue el líder que inició la modernización del Estado Liberal?</p>",
                        "<p>👉 ¿Cuál era el lema de esta época?</p>",
                        "<p>👉 ¿Por qué era necesario construir un ferrocarril al Caribe?</p>",
                        "<p>👉 ¿Quién fue Minor Keith y qué cultivo impulsó?</p>",
                        "<p>👉 ¿Cuáles son las tres características de la educación según la reforma de 1886?</p>",
                        "<p>👉 Mencione una reforma jurídica o religiosa de la época liberal.</p>"
                    ]
                },
                {
                    title: "2. Reformas del 40, Guerra del 48 y Constitución",
                    content: [
                        "<p>👉 ¿Qué problemas sociales dejó el modelo liberal sin resolver?</p>",
                        "<p>👉 ¿Por qué era necesaria una reforma en los derechos de los trabajadores?</p>",
                        "<p>👉 Mencione tres de las reformas sociales más importantes de la década de 1940.</p>",
                        "<p>👉 ¿Qué actores formaron la 'Alianza Histórica' para estas reformas?</p>",
                        "<p>👉 ¿Cuál fue la causa principal del estallido de la Guerra Civil de 1948?</p>",
                        "<p>👉 ¿Quién ganó oficialmente las elecciones de 1948 antes de ser anuladas?</p>",
                        "<p>👉 ¿Por qué es importante la abolición del ejército para Costa Rica?</p>",
                        "<p>👉 ¿Qué nuevos derechos políticos se otorgaron tras la guerra de 1948?</p>",
                        "<p>👉 ¿Qué derechos fundamentales establece la Constitución de 1949?</p>",
                        "<p>👉 ¿Qué significa que la vida humana sea inviolable según la ley?</p>"
                    ]
                },
                {
                    title: "3. Ciudadanía y Desafíos del Siglo XXI",
                    content: [
                        "<p>👉 ¿De qué formas pueden participar los estudiantes en su escuela?</p>",
                        "<p>👉 ¿Por qué es importante pagar los impuestos?</p>",
                        "<p>👉 ¿Cuáles son los principales factores de protección contra las drogas?</p>",
                        "<p>👉 Mencione un riesgo de las redes sociales y cómo evitarlo.</p>",
                        "<p>👉 Mencione dos normas fundamentales para los peatones.</p>",
                        "<p>👉 ¿Qué debe contener un kit o maletín de emergencias?</p>"
                    ]
                }
            ],
            quiz: [
                {
                    question: "¿Cuál es el lema del Estado Liberal?",
                    options: ["Pura Vida", "Orden y Progreso", "Paz y Trabajo"],
                    correct: 1
                },
                {
                    question: "¿En qué año se abolió el ejército en Costa Rica?",
                    options: ["1948", "1949", "1856"],
                    correct: 0
                },
                {
                    question: "¿Quién es el héroe que quemó el Mesón de Guerra?",
                    options: ["Juan Rafael Mora", "Juan Santamaría", "Minor Keith"],
                    correct: 1
                }
            ]
        }
    ]
};
