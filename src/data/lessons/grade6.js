export const grade6Lessons = [
    {
        id: 1,
        title: "Lección 1: La Campaña Nacional de Costa Rica (1856-1857)",
        description: "Consolidación de la independencia y lucha contra los filibusteros.",
        extraMaterial: {
            title: "Examen de Repaso: Estudios Sociales",
            url: "/sociales/docs/Examen_EstudiosSociales_6toGrado_2026.pdf",
            type: "PDF"
        },
        sections: [
            {
                title: "1. Primera Campaña de la Guerra (Ruta y Preparación)",
                content: [
                    "<p><strong>La Ruta de los Héroes:</strong> El ejército costarricense usó dos rutas para enfrentar a los filibusteros: por mar hacia Nicaragua (Océano Pacífico) y al norte usando los ríos Sarapiquí y San Carlos para proteger la Vía de Tránsito.</p>",
                    "<p><strong>Proyecto 'Federación Caribe':</strong> Walker envió a Schlessinger para que Costa Rica se anexara voluntariamente. El presidente Mora rechazó la propuesta y expulsó a los emisarios.</p>",
                    "<h3>Medidas de Preparación</h3><ul><li>Desconocer al gobierno nicaragüense provisorio.</li><li>Préstamo nacional de 100,000 pesos.</li><li>Incrementar el ejército a 9,000 hombres.</li><li>Mora asumió el mando personalmente dejando a Francisco María Oreamuno a cargo de la presidencia.</li></ul>"
                ]
            },
            {
                title: "2. Primera Fase: Las Batallas y la Peste",
                content: [
                    "<h3>Batallas Principales</h3><ul><li><strong>Batalla de Santa Rosa (20 de marzo, 1856):</strong> Triunfo tico en 14 minutos en Guanacaste contra Schlessinger.</li><li><strong>Batalla de Sardinal (10 de abril, 1856):</strong> Triunfo en los ríos Sarapiquí y Sardinal.</li><li><strong>Batalla de Rivas (11 de abril, 1856):</strong> <strong>Juan Santamaría</strong> logró quemar el Mesón de Guerra corriendo en zigzag, asegurando la victoria.</li></ul>",
                    "<h3>La Peste del Cólera (Mayo-Agosto 1856)</h3><p>Al regresar, el ejército trajo la enfermedad del cólera por consumir agua contaminada. Mató al <strong>8.5% de la población</strong> (unas 9,000 personas), incluyendo al presidente en ejercicio Francisco María Oreamuno.</p>"
                ]
            },
            {
                title: "3. Segunda Campaña y Final (Campaña del Tránsito)",
                content: [
                    "<p>Tras recuperarse del cólera (Fase Intermedia), en <strong>diciembre de 1856</strong> Mora retomó las armas para bloquear la Vía de Tránsito y el río San Juan.</p>",
                    "<ul><li><strong>Aliados:</strong> El Comodoro Vanderbilt ayudó a los ticos contra Walker enviando al Capitán Sylvanus Spencer.</li><li><strong>Héroe Nicolás Aguilar:</strong> Destacó manejando un cañón en el Río San Juan.</li></ul>",
                    "<h3>El Final de los Filibusteros</h3><p>Al perder el control del río San Juan se quedaron sin provisiones. Walker se rindió el <strong>10 de mayo de 1857</strong>. Más tarde intentó volver dos veces hasta que fue fusilado en Honduras en 1860.</p>"
                ]
            },
            {
                title: "4. Participación de Mujeres, Niños y Pueblos Indígenas",
                content: [
                    "<p>La Campaña Nacional fue un esfuerzo de <strong>todo el pueblo costarricense</strong>.</p>",
                    "<ul><li><strong>Mujeres:</strong> Asumieron el control del país (cultivos, ganado, educación y crianza) mientras los hombres luchaban. <strong>Pancha Carrasco</strong> fue la figura femenina más destacada que participó activamente en la defensa.</li><li><strong>Pueblos Indígenas:</strong> Apoyaron activamente al ejército costarricense en su lucha contra los invasores.</li></ul>"
                ]
            },
            {
                title: "5. Vocabulario Clave",
                content: [
                    "<ul><li><strong>Filibustero:</strong> Extranjero que usa la fuerza para apoderarse de un territorio.</li><li><strong>Doctrina Monroe:</strong> 'América para los americanos' (estadounidenses).</li><li><strong>Destino Manifiesto:</strong> Creencia de EE.UU. de que debía expandir su cultura.</li><li><strong>Vía del Tránsito:</strong> Ruta por San Juan y el lago de Nicaragua.</li><li><strong>Mercenario:</strong> Soldado que pelea por dinero.</li></ul>"
                ]
            }
        ],
        quiz: [
            // Tema 1
            { question: "¿A quiénes encomendó Walker convencer a Costa Rica de unirse a su 'Federación Caribe'?", options: ["A Francisco Castellón", "Al Comandante Schlessinger", "Al Comodoro Vanderbilt", "A Sylvanus Spencer"], correct: 1 },
            { question: "¿Qué hizo el presidente Juan Rafael Mora Porras ante la propuesta de unirse a la 'Federación Caribe'?", options: ["La aceptó inmediatamente", "La consultó con el Congreso", "La rechazó y expulsó a los emisarios", "Se unió secretamente"], correct: 2 },
            { question: "¿Cuáles fueron las dos rutas que siguió el ejército costarricense hacia Nicaragua?", options: ["Por aire y tierra", "Por mar hacia el Pacífico y al norte por ríos Sarapiquí y San Carlos", "Por el Caribe y por Panamá", "Por Honduras y El Salvador"], correct: 1 },
            { question: "¿A cargo de quién dejó Mora la presidencia de la República mientras iba a la guerra?", options: ["José Joaquín Mora", "Máximo Blanco", "Francisco María Oreamuno", "Pancha Carrasco"], correct: 2 },
            // Tema 2
            { question: "¿Cuánto tiempo duró aproximadamente el combate principal de la Batalla de Santa Rosa?", options: ["5 horas", "2 días", "14 minutos", "30 minutos"], correct: 2 },
            { question: "¿En qué batalla las tropas al mando del general Florentino detuvieron a los filibusteros en los ríos del norte?", options: ["Batalla de Sardinal", "Batalla de Santa Rosa", "Batalla de Rivas", "Batalla de San Jorge"], correct: 0 },
            { question: "¿Quién fue el soldado que finalmente logró incendiar el Mesón en Rivas corriendo en zigzag?", options: ["Luis Pacheco Bertora", "Joaquín Rosales", "Nicolás Aguilar", "Juan Santamaría Carvajal"], correct: 3 },
            { question: "¿Por qué el ejército costarricense tuvo que regresar precipitadamente de Rivas?", options: ["Por falta de municiones", "Por la peste del cólera", "Porque habían perdido la batalla", "Por un terremoto"], correct: 1 },
            { question: "¿Qué enfermedad causó la muerte de aproximadamente el 8.5% de la población costarricense en 1856?", options: ["Fiebre amarilla", "Cólera", "Malaria", "Viruela"], correct: 1 },
            { question: "¿Qué figura política importante falleció como víctima de la epidemia del cólera?", options: ["Juan Rafael Mora Porras", "William Walker", "Francisco María Oreamuno", "José Joaquín Mora"], correct: 2 },
            // Tema 3
            { question: "¿Qué ocurrió políticamente durante la 'fase intermedia' de la guerra que fortaleció a Costa Rica?", options: ["Estados Unidos invadió", "Walker se declaró presidente de Nicaragua ganándose el odio de toda Centroamérica", "Costa Rica se rindió", "Inglaterra envió tropas"], correct: 1 },
            { question: "¿Cuál era el principal objetivo militar de la Segunda Campaña o Campaña del Tránsito?", options: ["Atacar San José", "Invadir Honduras", "Controlar la Vía del Tránsito y el Río San Juan", "Gobernar El Salvador"], correct: 2 },
            { question: "¿Por qué el control de la Vía del Tránsito era decisivo para derrotar a los filibusteros?", options: ["Era donde escondían su oro", "Les cortaba el suministro de provisiones y tropas desde EE.UU.", "Era su única fuente de agua", "Era un lugar turístico"], correct: 1 },
            { question: "¿Qué magnate naviero estadounidense se convirtió en aliado de Costa Rica enviando a Sylvanus Spencer?", options: ["Cornelius Vanderbilt", "Henry Ford", "John D. Rockefeller", "Andrew Carnegie"], correct: 0 },
            { question: "¿Quién fue el soldado costarricense que destacó en el Río San Juan manejando un cañón?", options: ["Juan Santamaría", "Nicolás Aguilar", "Máximo Blanco", "Pierre Barillier"], correct: 1 },
            { question: "¿En qué fecha se rindió oficialmente William Walker?", options: ["20 de marzo de 1856", "11 de abril de 1856", "10 de mayo de 1857", "12 de septiembre de 1860"], correct: 2 },
            { question: "¿En qué país centroamericano fue Walker finalmente juzgado y fusilado en 1860?", options: ["Nicaragua", "El Salvador", "Costa Rica", "Honduras"], correct: 3 },
            // Tema 4 y Vocabulario
            { question: "¿Qué rol clave desempeñaron las mujeres costarricenses durante la Campaña Nacional?", options: ["Solo cuidaron a los niños", "Fueron presidentas", "Asumieron los cultivos, ganado, educación y crianza mientras los hombres luchaban", "Se fueron a vivir a Nicaragua"], correct: 2 },
            { question: "¿Qué mujer destacó en el campo de batalla llamando a otras a participar activamente en la defensa?", options: ["Pacífica Fernández", "Dolores Bedoya", "Pancha Carrasco", "Luisa Molina"], correct: 2 },
            { question: "¿Cuál era la idea de la 'Doctrina Monroe'?", options: ["Todo para todos", "América para los americanos (estadounidenses)", "Libertad de esclavos", "Paz mundial"], correct: 1 }
        ]
    },
    {
        id: 2,
        disabled: true,
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
            },
            {
                question: "¿Cuál era el objetivo principal de construir el ferrocarril al Atlántico?",
                options: ["Transportar turistas", "Exportar café a Europa de forma más directa", "Unir con Panamá"],
                correct: 1
            },
            {
                question: "¿Quién fue el empresario estadounidense encargado de terminar el ferrocarril?",
                options: ["Minor Keith", "William Walker", "Brajlio Carrillo"],
                correct: 0
            },
            {
                question: "¿Qué empresa fundó Minor Keith para comercializar banano?",
                options: ["United Fruit Company", "Intel", "Amazon"],
                correct: 0
            },
            {
                question: "¿Cómo se llamó el contrato firmado para financiar el ferrocarril a cambio de tierras?",
                options: ["Contrato Soto-Keith", "Pacto de Concordia", "Tratado de Rivas"],
                correct: 0
            },
            {
                question: "¿Qué grupos de inmigrantes llegaron para trabajar en el ferrocarril?",
                options: ["Solo españoles", "Chinos, italianos y afroantillanos (jamaiquinos)", "Solo nicaragüenses"],
                correct: 1
            },
            {
                question: "¿Qué características tiene la educación desde 1886?",
                options: ["Solo para ricos", "Gratuita, obligatoria y laica", "Privada y religiosa"],
                correct: 1
            },
            {
                question: "¿Qué significa que la educación sea 'laica'?",
                options: ["Que es muy difícil", "Que es independiente de cualquier religión", "Que es solo para hombres"],
                correct: 1
            },
            {
                question: "¿Qué edificio emblemático se construyó con un impuesto al café a finales del siglo XIX?",
                options: ["El Estadio Nacional", "El Teatro Nacional", "La Basílica de los Ángeles"],
                correct: 1
            },
            {
                question: "¿Qué reforma jurídica permitió el fin del matrimonio controlado solo por la iglesia?",
                options: ["Ley de presupuesto", "Ley de Matrimonio Civil y Divorcio", "Ley de Aguas"],
                correct: 1
            },
            {
                question: "¿Qué pasó con los cementerios en la época liberal?",
                options: ["Se cerraron", "Pasaron de la Iglesia al control del Estado (secularización)", "Se volvieron privados"],
                correct: 1
            },
            {
                question: "¿Qué presidente impulsó la construcción del Teatro Nacional y el Liceo de Costa Rica?",
                options: ["Bernardo Soto", "Rafael Yglesias", "José Joaquín Rodríguez"],
                correct: 0
            },
            {
                question: "¿Cómo se le llamó al grupo de intelectuales que lideraron estas reformas?",
                options: ["Los Conquistadores", "La Generación del Olimpo (o del 88)", "Los Independentistas"],
                correct: 1
            },
            {
                question: "¿Qué institución se fundó para formar a las mujeres de la época?",
                options: ["Colegio de Señoritas", "Liceo de Heredia", "Universidad de Costa Rica"],
                correct: 0
            },
            {
                question: "¿Cuál fue la principal fuente de riqueza de Costa Rica antes del banano?",
                options: ["El oro", "El café", "El turismo"],
                correct: 1
            },
            {
                question: "¿Qué metal precioso perdió importancia frente al café en el siglo XIX?",
                options: ["Bronce", "Plata", "Oro"],
                correct: 2
            },
            {
                question: "¿Qué color de piel y cultura trajeron los trabajadores de Jamaica a Limón?",
                options: ["Cultura afrodescendiente y lengua inglesa/limonense", "Cultura asiática", "Cultura europea"],
                correct: 0
            },
            {
                question: "¿Qué problema enfrentaron los trabajadores italianos en el ferrocarril?",
                options: ["Falta de comida", "Huelgas por malas condiciones de vida y salud", "No querían trabajar"],
                correct: 1
            },
            {
                question: "¿Qué enfermedad causó miles de muertes durante la construcción en la zona del Caribe?",
                options: ["Fiebre amarilla y malaria", "Gripe común", "Sarampión"],
                correct: 0
            },
            {
                question: "¿Qué significa el concepto de 'Progreso' para los liberales?",
                options: ["Volver al pasado", "Uso de la razón, ciencia y tecnología para mejorar el país", "No hacer nada"],
                correct: 1
            },
            {
                question: "¿Qué ciudad se convirtió en el principal puerto del Caribe?",
                options: ["Puntarenas", "Limón", "Quepos"],
                correct: 1
            },
            {
                question: "¿Quién era la esposa de Tomás Guardia que influyó en temas sociales?",
                options: ["Emilia Solórzano", "Pacífica Fernández", "Pancha Carrasco"],
                correct: 0
            },
            {
                question: "¿Qué libertad permitía a las personas practicar la religión de su elección?",
                options: ["Libertad de expresión", "Libertad de culto", "Libertad de prensa"],
                correct: 1
            },
            {
                question: "¿Qué reforma eliminó la enseñanza de la religión como materia obligatoria inicialmente?",
                options: ["Reforma Educativa de Mauro Fernández", "Constitución de 1871", "Leyes de Reforma"],
                correct: 0
            },
            {
                question: "¿Qué pasó con las tierras que el Estado le dio a Minor Keith?",
                options: ["Se quedaron vacías", "Se usaron para plantar banano a gran escala", "Se vendieron a España"],
                correct: 1
            },
            {
                question: "¿Cuál fue el mayor beneficio del banano para el país?",
                options: ["Diversificó la economía (no dependíamos solo del café)", "Trajo orden", "Ninguno"],
                correct: 0
            },
            {
                question: "¿Qué influencia arquitectónica tiene el Teatro Nacional?",
                options: ["Estilo neoclásico europeo", "Estilo colonial español", "Estilo moderno"],
                correct: 0
            },
            {
                question: "¿Cómo se financiaba el Estado principalmente?",
                options: ["Con donaciones", "Con impuestos a las exportaciones e importaciones (aduana)", "No había dinero"],
                correct: 1
            },
            {
                question: "¿Qué herramienta tecnológica llegó junto al ferrocarril para mejorar la comunicación?",
                options: ["Telégrafo", "Internet", "Radio"],
                correct: 0
            },
            {
                question: "¿Qué valores promovía la educación liberal?",
                options: ["Obediencia ciega", "Pensamiento crítico, patriotismo y ciencia", "Solo religión"],
                correct: 1
            },
            {
                question: "¿Qué ciudad costarricense fue la primera en tener luz eléctrica en Latinoamérica (y tercera en el mundo)?",
                options: ["Cartago", "San José", "Alajuela"],
                correct: 1
            },
            {
                question: "¿Qué favoreció el crecimiento de la clase media en esta época?",
                options: ["La educación y el comercio", "La guerra", "La agricultura de subsistencia"],
                correct: 0
            },
            {
                question: "¿Qué papel jugaba el Banco Anglo Costarricense en este tiempo?",
                options: ["Ninguno", "Daba préstamos para la agricultura y el comercio", "Era solo para ahorros"],
                correct: 1
            },
            {
                question: "¿Cuál es el puerto del Pacífico que se usaba antes del de Limón para el café?",
                options: ["Caldera / Puntarenas", "Guanacaste", "Golfito"],
                correct: 0
            },
            {
                question: "¿Por qué los liberales querían separar la Iglesia del Estado?",
                options: ["Para que el Estado tuviera el control de la vida civil y las leyes", "Porque odiaban la religión", "Para gastar menos"],
                correct: 0
            },
            {
                question: "¿Qué obra de ingeniería fue la más difícil de la época?",
                options: ["El Estadio", "El Ferrocarril al Atlántico", "El puente sobre el río Grande"],
                correct: 1
            },
            {
                question: "¿Qué significa que el Estado sea el 'soberano' para los liberales?",
                options: ["Que el pueblo y sus leyes mandan, no poderes externos o religiosos", "Que el Rey manda", "Que manda una empresa"],
                correct: 0
            }
        ]
    },
    {
        id: 3,
        disabled: true,
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
            },
            {
                question: "¿En qué año se fundó la Universidad de Costa Rica (UCR)?",
                options: ["1940", "1821", "1950"],
                correct: 0
            },
            {
                question: "¿Qué documento legal de 1943 protege los derechos de los trabajadores?",
                options: ["Código Civil", "Código de Trabajo", "Constitución de 1871"],
                correct: 1
            },
            {
                question: "¿Qué tres grupos formaron la 'Alianza Histórica' para las reformas?",
                options: ["Ejército, Banqueros y Políticos", "Gobierno, Iglesia Católica y Partido Comunista", "Solo los sindicatos"],
                correct: 1
            },
            {
                question: "¿Quién era el líder de la Iglesia Católica que apoyó las reformas?",
                options: ["Monseñor Víctor Manuel Sanabria", "Juan Rafael Mora", "Padre Minor"],
                correct: 0
            },
            {
                question: "¿Quién era el líder del Partido Comunista que apoyó a Calderón Guardia?",
                options: ["Manuel Mora Valverde", "José Figueres", "Mauro Fernández"],
                correct: 0
            },
            {
                question: "¿Qué derecho permite a los trabajadores suspender labores para pedir mejoras?",
                options: ["Derecho a huelga", "Derecho al olvido", "Derecho a la pereza"],
                correct: 0
            },
            {
                question: "¿Qué garantiza que un trabajador reciba atención médica y pensión?",
                options: ["El Banco Central", "La Caja Costarricense de Seguro Social (CCSS)", "El Ministerio de Hacienda"],
                correct: 1
            },
            {
                question: "¿Qué significa que el seguro social sea obligatorio?",
                options: ["Que solo algunos lo pagan", "Que todos los patronos y trabajadores deben contribuir para la salud pública", "Que es gratis para todos sin pagar nada"],
                correct: 1
            },
            {
                question: "¿Qué reforma permitió que el Estado diera casas baratas a los trabajadores?",
                options: ["Casas Baratas (Invu posterior)", "Ley de Tierras", "No hubo esa reforma"],
                correct: 0
            },
            {
                question: "¿Cómo se llama el pago adicional que reciben los trabajadores en diciembre?",
                options: ["Bono de guerra", "Aguinaldo", "Salario escolar"],
                correct: 1
            },
            {
                question: "¿Qué derecho permite tener días de descanso pagados tras un año de trabajo?",
                options: ["Vacaciones pagadas", "Preaviso", "Cesantía"],
                correct: 0
            },
            {
                question: "¿Qué es el salario mínimo?",
                options: ["Lo que el patrono quiera pagar", "La cantidad menor que un patrono debe pagar por ley para cubrir necesidades básicas", "Un salario muy pequeño"],
                correct: 1
            },
            {
                question: "¿Qué capítulo de la Constitución contiene los derechos de los trabajadores?",
                options: ["Capítulo de Educación", "Capítulo de Garantías Sociales", "Capítulo de Guerra"],
                correct: 1
            },
            {
                question: "¿Quién es conocido como 'El Reformador Social'?",
                options: ["José Figueres", "Rafael Ángel Calderón Guardia", "Tomás Guardia"],
                correct: 1
            },
            {
                question: "¿Qué beneficio trajo la UCR a la juventud costarricense?",
                options: ["Poder estudiar una carrera profesional en el país de forma moderna", "Solo viajes", "No trajo beneficios"],
                correct: 0
            },
            {
                question: "¿Qué reforma protege a la mujer embarazada en su trabajo?",
                options: ["Fuero de maternidad", "Derecho al voto", "Leyes liberales"],
                correct: 0
            },
            {
                question: "¿Qué sucede si un trabajador es despedido sin causa justa?",
                options: ["Nada", "Tiene derecho a recibir auxilio de cesantía", "Se va a la cárcel"],
                correct: 1
            },
            {
                question: "¿Qué motivó a Calderón Guardia a buscar aliados tan diferentes?",
                options: ["La necesidad de apoyo para aprobar leyes que beneficiaran a los más pobres", "Querían hacer una fiesta", "No tenían otra opción"],
                correct: 0
            },
            {
                question: "¿Qué nombre recibe el sistema donde el Estado, el patrono y el trabajador pagan el seguro?",
                options: ["Sistema Tripartito", "Sistema Único", "Sistema Libre"],
                correct: 0
            },
            {
                question: "¿Cuál fue la principal oposición a las reformas del 40?",
                options: ["Los grupos económicos poderosos y la oposición política", "Los estudiantes", "Nadie se opuso"],
                correct: 0
            },
            {
                question: "¿Qué garantizó que las reformas no se perdieran con el tiempo?",
                options: ["Su inclusión en la Constitución Política", "Un apretón de manos", "Se escribieron en un periódico"],
                correct: 0
            },
            {
                question: "¿Qué significó el Código de Trabajo para la paz social?",
                options: ["Reglas claras para evitar abusos y conflictos entre trabajadores y jefes", "Más peleas", "Menos trabajo"],
                correct: 0
            },
            {
                question: "¿Qué es el Seguro de Invalidez, Vejez y Muerte (IVM)?",
                options: ["Un seguro de vida", "El sistema de pensiones de la CCSS", "Un impuesto"],
                correct: 1
            },
            {
                question: "¿Qué institución precedió a la UCR en el siglo XIX?",
                options: ["Universidad de Santo Tomás", "Universidad Nacional", "Tecnológico de CR"],
                correct: 0
            },
            {
                question: "¿Qué derecho permite a los trabajadores unirse para defender sus intereses?",
                options: ["Libertad sindical", "Derecho de propiedad", "Libertad de culto"],
                correct: 0
            },
            {
                question: "¿Qué importancia tiene la 'solidaridad' en el seguro social?",
                options: ["Que los que más ganan ayudan a financiar a los que menos ganan", "Que cada uno paga lo suyo", "Que es opcional"],
                correct: 0
            },
            {
                question: "¿En qué década ocurrió la mayor transformación de los derechos sociales en Costa Rica?",
                options: ["Década de 1820", "Década de 1940", "Década de 1980"],
                correct: 1
            },
            {
                question: "¿Cuál era la situación de salud antes de la CCSS?",
                options: ["Había muchos hospitales privados", "Muchos morían por enfermedades curables y falta de dinero para médicos", "Todo era perfecto"],
                correct: 1
            },
            {
                question: "¿Qué reforma permitió que el trabajo sea visto como un derecho y un deber social?",
                options: ["Garantías Sociales", "Leyes de Reforma", "Constitución de 1821"],
                correct: 0
            },
            {
                question: "¿Quién era el presidente del Congreso que ayudó a Calderón Guardia?",
                options: ["Teodoro Picado", "José María Castro Madriz", "Braulio Carrillo"],
                correct: 0
            },
            {
                question: "¿Qué valor humano promueven las Garantías Sociales?",
                options: ["El egoísmo", "La justicia social y la dignidad humana", "El miedo"],
                correct: 1
            },
            {
                question: "¿Qué derecho protege el descanso semanal de los trabajadores?",
                options: ["Día de descanso obligatorio (domingo o rotativo)", "Vacaciones", "Cesantía"],
                correct: 0
            },
            {
                question: "¿Por qué el Código de Trabajo es un triunfo para el país?",
                options: ["Porque ordenó las leyes laborales en un solo documento", "Porque es muy largo", "Porque lo hizo un presidente"],
                correct: 0
            },
            {
                question: "¿Qué papel juega el Estado en las reformas sociales?",
                options: ["Espectador", "Garante y protector de los derechos de los más débiles", "Administrador de empresas"],
                correct: 1
            },
            {
                question: "¿Qué otro nombre se le daba al Partido Comunista en esa época?",
                options: ["Vanguardia Popular", "Unidad Social", "Libertad Nacional"],
                correct: 0
            },
            {
                question: "¿Cuál es el hospital más antiguo que pasó a manos de la CCSS?",
                options: ["Hospital San Juan de Dios", "Hospital México", "Hospital Calderón Guardia"],
                correct: 0
            },
            {
                question: "¿Qué legado nos dejaron las reformas del 40?",
                options: ["Un país con mayor equidad y protección para su gente", "Pocas esperanzas", "Deudas"],
                correct: 0
            }
        ]
    },
    {
        id: 4,
        disabled: true,
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
            },
            {
                question: "¿Cuál fue la causa principal que desató la Guerra de 1948?",
                options: ["La anulación de las elecciones presidenciales", "Un ataque extranjero", "Problemas con el café"],
                correct: 0
            },
            {
                question: "¿Quién era el candidato que ganó las elecciones y cuya victoria fue anulada?",
                options: ["Rafael Ángel Calderón Guardia", "Otilio Ulate Blanco", "José Figueres"],
                correct: 1
            },
            {
                question: "¿Cómo se llamó el grupo armado liderado por Pepe Figueres?",
                options: ["Fuerza Pública", "Ejército de Liberación Nacional", "Legión del Caribe"],
                correct: 1
            },
            {
                question: "¿En qué finca inició el levantamiento armado de Figueres?",
                options: ["La Lucha Sin Fin", "Finca El Rodeo", "Finca La Caja"],
                correct: 0
            },
            {
                question: "¿Cuánto tiempo duró la Guerra Civil de 1948?",
                options: ["Un año", "44 días", "Dos semanas"],
                correct: 1
            },
            {
                question: "¿Qué importante decisión tomó Figueres el 1 de diciembre de 1948?",
                options: ["Fundar un banco", "Abolir el ejército como institución permanente", "Cambiar la bandera"],
                correct: 1
            },
            {
                question: "¿En qué lugar ocurrió el acto simbólico de mazazo a la muralla del Cuartel Bellavista?",
                options: ["Parque Central", "Cuartel Bellavista (hoy Museo Nacional)", "Casa Presidencial"],
                correct: 1
            },
            {
                question: "¿Qué nombre recibió el gobierno provisional tras la guerra?",
                options: ["Consejo de Estado", "Junta Fundadora de la Segunda República", "Gobierno de Unidad"],
                correct: 1
            },
            {
                question: "¿En qué año entró en vigencia la actual Constitución Política?",
                options: ["1948", "1949", "1950"],
                correct: 1
            },
            {
                question: "¿Qué derecho político fundamental ganaron las mujeres en la Constitución de 1949?",
                options: ["Derecho a trabajar", "Derecho al voto (sufragio)", "Derecho a viajar"],
                correct: 1
            },
            {
                question: "¿Qué grupo étnico también obtuvo el derecho al voto y a la nacionalidad en 1949?",
                options: ["Solo españoles", "La población afrocostarricense y de origen asiático", "Nadie nuevo"],
                correct: 1
            },
            {
                question: "¿Qué significa que la Segunda República 'respetó' las Garantías Sociales del 40?",
                options: ["Que las eliminaron", "Que a pesar de la guerra, se mantuvieron y fortalecieron los derechos sociales", "Que cambiaron los nombres"],
                correct: 1
            },
            {
                question: "¿Qué institución se creó para evitar que los políticos controlaran el dinero del país?",
                options: ["Nacionalización de la Banca y creación del Banco Central", "Ministerio de Educación", "Aduanas"],
                correct: 0
            },
            {
                question: "¿Qué significó abolir el ejército para la educación?",
                options: ["Menos dinero para escuelas", "Que el presupuesto de guerra se pudo usar en educación y salud", "Nada"],
                correct: 1
            },
            {
                question: "¿Quién era el presidente de Costa Rica al estallar la guerra (aunque gobernaba bajo mucha presión)?",
                options: ["Teodoro Picado Michalski", "León Cortés Castro", "Braulio Carrillo"],
                correct: 0
            },
            {
                question: "¿Qué pacto puso fin a la guerra de forma pacífica?",
                options: ["Pacto de Ochomogo y Pacto de la Embajada de México", "Pacto de Concordia", "Tratado de Rivas"],
                correct: 0
            },
            {
                question: "¿Qué representa la Segunda República en nuestra historia?",
                options: ["Un periodo de dictadura", "Una etapa de fortalecimiento democrático y desarrollo social", "El inicio de la colonia"],
                correct: 1
            },
            {
                question: "¿Qué valor cívico destaca a Costa Rica a nivel mundial tras 1948?",
                options: ["Ser un país de paz sin ejército", "Tener mucho oro", "Tener el ejército más grande"],
                correct: 0
            },
            {
                question: "¿Qué pasa si hay un conflicto electoral hoy en día?",
                options: ["Hay una guerra", "El TSE decide de forma independiente siguiendo la ley", "El presidente decide"],
                correct: 1
            },
            {
                question: "¿Qué otro nombre se le da a José Figueres Ferrer?",
                options: ["Don Pepe", "El Benemérito", "El Libertador"],
                correct: 0
            },
            {
                question: "¿Qué impuesto del 10% se aplicó tras la guerra para reconstruir el país?",
                options: ["Impuesto a la riqueza (capital)", "Impuesto al banano", "Impuesto al aire"],
                correct: 0
            },
            {
                question: "¿Quién fue la primera mujer en votar en Costa Rica?",
                options: ["Bernarda Vásquez", "Carmen Lyra", "Pacífica Fernández"],
                correct: 0
            },
            {
                question: "¿En qué batalla murieron muchos jóvenes del grupo opositor y es recordada con dolor?",
                options: ["Batalla de Rivas", "Batalla del Tejar (Cartago)", "Batalla de Sardinal"],
                correct: 1
            },
            {
                question: "¿Qué significa que el voto sea 'secreto y universal'?",
                options: ["Que nadie sabe por quién votas y todos (hombres y mujeres) pueden hacerlo", "Que solo los ricos votan", "Que se dice el voto en voz alta"],
                correct: 0
            },
            {
                question: "¿Qué institución nació en 1949 para dar electricidad y teléfonos al país?",
                options: ["ICE", "RECOPE", "AYA"],
                correct: 0
            },
            {
                question: "¿Qué derecho civil prohíbe la Constitución de 1949?",
                options: ["Derecho a la vida", "La pena de muerte (ya estaba, pero se reafirmó la inviolabilidad de la vida)", "Derecho al estudio"],
                correct: 1
            },
            {
                question: "¿Cómo se llama la fuerza que cuida el país hoy en lugar de un ejército?",
                options: ["Fuerza Pública (Policía)", "Marines", "Cascos Azules"],
                correct: 0
            },
            {
                question: "¿A qué ciudad llegó el Ejército de Liberación Nacional para ganar la guerra?",
                options: ["San José", "Cartago", "Limón"],
                correct: 1
            },
            {
                question: "¿Cómo se llaman las reglas máximas de un país?",
                options: ["Constitución Política", "Libro de actas", "Periódico"],
                correct: 0
            },
            {
                question: "¿Qué figura literaria y política fue exiliada tras la guerra?",
                options: ["Carmen Lyra", "Aquileo J. Echeverría", "Nadie"],
                correct: 0
            },
            {
                question: "¿Cuántas constituciones ha tenido Costa Rica aproximadamente (incluyendo estatutos)?",
                options: ["Solo una", "Más de 10 a lo largo de su historia", "Tres"],
                correct: 1
            },
            {
                question: "¿Por qué el 1º de diciembre es feriado hoy?",
                options: ["Día de la Abolición del Ejército", "Día del trabajador", "Día de la madre"],
                correct: 0
            },
            {
                question: "¿Qué significa ser ciudadano costarricense hoy?",
                options: ["Poder votar a los 18 años y tener derechos y deberes", "Que solo el gobierno manda", "Solo tener una identificación"],
                correct: 0
            },
            {
                question: "¿Qué garantizó el Pacto de Ochomogo entre Figueres y Manuel Mora?",
                options: ["Que las Garantías Sociales no se quitarían", "Que la guerra seguiría", "Que el país se dividiría"],
                correct: 0
            },
            {
                question: "¿Qué paso con Calderón Guardia tras la guerra?",
                options: ["Fue presidente de nuevo", "Tuvo que salir al exilio para evitar más violencia", "Se quedó gobernando"],
                correct: 1
            },
            {
                question: "¿Qué institución maneja el agua potable y nació en esta época de cambios?",
                options: ["AyA", "RECOPE", "Inamu"],
                correct: 0
            },
            {
                question: "¿Por qué Costa Rica es ejemplo de democracia?",
                options: ["Porque resolvemos diferencias con votos y no con balas", "Porque tenemos mucho petróleo", "Porque somos un país muy grande"],
                correct: 0
            }
        ]
    },
    {
        id: 5,
        disabled: true,
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
            },
            {
                question: "¿Qué es ser un buen ciudadano?",
                options: ["Solo vivir en el país", "Cumplir con deberes y ejercer derechos para mejorar la sociedad", "No hablar con nadie"],
                correct: 1
            },
            {
                question: "¿De qué forma pueden participar los estudiantes en la toma de decisiones de su escuela?",
                options: ["A través del Gobierno Estudiantil", "No pueden participar", "Solo los adultos deciden"],
                correct: 0
            },
            {
                question: "¿Por qué es importante la Cultura Fiscal?",
                options: ["Para que el Estado tenga recursos para servicios públicos", "Para gastar el dinero", "Para que no haya bancos"],
                correct: 0
            },
            {
                question: "¿Qué significa el término 'rendición de cuentas'?",
                options: ["Que los gobernantes deben explicar qué hacen con el dinero público", "Esconder la información", "Contar cuentos"],
                correct: 0
            },
            {
                question: "¿Cuál es el mejor factor de protección contra el consumo de drogas?",
                options: ["La soledad", "La familia, el deporte y la comunicación", "Ver mucha televisión"],
                correct: 1
            },
            {
                question: "¿Qué debemos evitar compartir en redes sociales con desconocidos?",
                options: ["Nuestra dirección, teléfono y fotos privadas", "Recetas de cocina", "Dibujos animados"],
                correct: 0
            },
            {
                question: "¿Qué norma de seguridad vial es fundamental para los peatones?",
                options: ["Cruzar por la mitad de la cuadra corriendo", "Usar los pasos peatonales y semáforos", "Caminar por el borde de la carretera"],
                correct: 1
            },
            {
                question: "¿Qué significa tener un plan de emergencias en el hogar?",
                options: ["Saber qué hacer y a dónde ir en caso de sismo o inundación", "Tener comida rica", "Ver noticias"],
                correct: 0
            },
            {
                question: "¿Por qué debemos respetar las señales de tránsito?",
                options: ["Para evitar multas solamente", "Para proteger nuestra vida y la de los demás", "Porque son de colores bonitos"],
                correct: 1
            },
            {
                question: "¿Qué es la tolerancia?",
                options: ["Respetar las ideas y formas de vida diferentes a las nuestras", "Estar de acuerdo con todo", "No decir nada"],
                correct: 0
            },
            {
                question: "¿Qué institution nos brinda seguridad en las calles?",
                options: ["Correos de Costa Rica", "Fuerza Pública (Policía)", "El ICE"],
                correct: 1
            },
            {
                question: "¿Cómo podemos ayudar a proteger el medio ambiente desde casa?",
                options: ["Tirando basura al río", "Reciclando, ahorrando agua y electricidad", "Usando más bolsas de plástico"],
                correct: 1
            },
            {
                question: "¿Qué significa participar en un simulacro?",
                options: ["Practicar cómo actuar ante una emergencia real para salvar vidas", "Jugar a las escondidas", "Perder el tiempo"],
                correct: 0
            },
            {
                question: "¿Qué es un derecho humano?",
                options: ["Algo que solo tienen los niños", "Libertades y garantías que todas las personas tienen por el solo hecho de existir", "Un premio"],
                correct: 1
            },
            {
                question: "¿Qué deber tenemos los estudiantes respecto a la propiedad pública?",
                options: ["Rayar las paredes y romper pupitres", "Cuidar la escuela y los parques porque son de todos", "No nos corresponde cuidarla"],
                correct: 1
            },
            {
                question: "¿Qué significa el diálogo en la resolución de conflictos?",
                options: ["Gritar más fuerte", "Hablar y escucharse para llegar a acuerdos sin violencia", "Pelear"],
                correct: 1
            },
            {
                question: "¿Qué riesgo corremos al usar WiFi público?",
                options: ["Que se acabe la batería", "Que alguien robe nuestros datos personales", "Ninguno"],
                correct: 1
            },
            {
                question: "¿Qué es la seguridad vial?",
                options: ["Saber manejar rápido", "Conjunto de normas y acciones para prevenir accidentes de tránsito", "Arreglar calles"],
                correct: 1
            },
            {
                question: "¿Para qué sirve el semáforo?",
                options: ["Para decorar la calle", "Para regular el paso de vehículos y peatones", "Para dar luz"],
                correct: 1
            },
            {
                question: "¿Qué significa 'Gestión de Riesgo'?",
                options: ["Prevenir y prepararse ante posibles desastres naturales", "Esperar a que pase algo", "Limpiar la casa"],
                correct: 0
            },
            {
                question: "¿Qué debe hacerse si vemos a alguien sufriendo ciberbullying?",
                options: ["Ignorarlo", "Avisar a un adulto de confianza o profesor", "Burlarse también"],
                correct: 1
            },
            {
                question: "¿Por qué es importante el voto estudiantil?",
                options: ["Porque nos prepara para la democracia adulta", "Para no tener clases ese día", "Para ser famosos"],
                correct: 0
            },
            {
                question: "¿Qué es la identidad nacional?",
                options: ["Solo tener pasaporte", "Sentimiento de pertenencia a un país, compartiendo historia y cultura", "Vivir en otro país"],
                correct: 1
            },
            {
                question: "¿Qué significa 'desarrollo sostenible'?",
                options: ["Gastar todo ahora", "Usar los recursos con cuidado para que alcancen para el futuro", "No usar recursos"],
                correct: 1
            },
            {
                question: "¿Qué valor es fundamental para vivir en paz?",
                options: ["El respeto", "La envidia", "La competencia"],
                correct: 0
            },
            {
                question: "¿Cuál es el número de emergencias en Costa Rica?",
                options: ["117", "911", "123"],
                correct: 1
            },
            {
                question: "¿Qué significa ser honesto en un examen?",
                options: ["No copiar y demostrar lo que uno sabe", "Pasar las respuestas", "Preguntar al vecino"],
                correct: 0
            },
            {
                question: "¿Qué institution protege los derechos de los niños en Costa Rica?",
                options: ["PANI", "Hacienda", "CONAVI"],
                correct: 0
            },
            {
                question: "¿Qué es la solidaridad?",
                options: ["Ayudar a los demás cuando lo necesitan", "Pensar solo en uno mismo", "Ser indiferente"],
                correct: 0
            },
            {
                question: "¿Para qué sirve tener un maletín de emergencias?",
                options: ["Para pasear", "Para sobrevivir las primeras 72 horas tras un desastre", "Para guardar ropa vieja"],
                correct: 1
            },
            {
                question: "¿Qué significa ser un peatón responsable?",
                options: ["No fijarse al cruzar", "Respetar señales y estar alerta al entorno", "Usar audífonos a todo volumen"],
                correct: 1
            },
            {
                question: "¿Qué debemos hacer con el agua cuando nos lavamos los dientes?",
                options: ["Dejar el tubo abierto", "Cerrar el tubo mientras nos cepillamos", "Gastar mucha agua"],
                correct: 1
            },
            {
                question: "¿Qué es la cultura de legalidad?",
                options: ["Seguir las leyes porque entendemos que ayudan a vivir mejor", "Hacer lo que uno quiera", "Solo seguir leyes si nos ven"],
                correct: 0
            },
            {
                question: "¿Cómo afecta el ruido excesivo a la salud?",
                options: ["Produce estrés y cansancio", "Nos hace más felices", "No tiene ningún efecto"],
                correct: 0
            },
            {
                question: "¿Por qué los árboles son importantes para las ciudades?",
                options: ["Porque dan sombra y limpian el aire", "Porque estorban a los cables", "No son importantes"],
                correct: 0
            },
            {
                question: "¿Qué significa la frase 'Costa Rica es multiétnica y pluricultural'?",
                options: ["Que todos somos iguales", "Que convivimos muchas culturas y grupos diferentes en paz", "Que solo hay una cultura"],
                correct: 1
            },
            {
                question: "¿Cuál es la base de una sociedad democrática?",
                options: ["La fuerza", "La participación y el respeto a la ley", "El dinero"],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        disabled: true,
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
            },
            {
                question: "¿Quién fue el presidente líder de la Campaña Nacional de 1856?",
                options: ["Juan Rafael Mora Porras", "Tomás Guardia", "José Figueres Ferrer"],
                correct: 0
            },
            {
                question: "¿Qué ambiciones tenía William Walker en Centroamérica?",
                options: ["Instaurar la esclavitud y anexar territorios a EE.UU.", "Ayudar a los pobres", "Construir un canal"],
                correct: 0
            },
            {
                question: "¿En qué batalla se detuvo el avance filibustero en territorio costarricense el 20 de marzo?",
                options: ["Batalla de Santa Rosa", "Batalla de Rivas", "Batalla del Sardinal"],
                correct: 0
            },
            {
                question: "¿Qué enfermedad diezmó al ejército y población tras la batalla de Rivas?",
                options: ["La peste del cólera", "Gripe", "Malaria"],
                correct: 0
            },
            {
                question: "¿Quién impulsó la reforma educativa 'gratuita, obligatoria y laica' en 1886?",
                options: ["Mauro Fernández", "Tomás Guardia", "Bernardo Soto"],
                correct: 0
            },
            {
                question: "¿Qué producto impulsó la construcción del ferrocarril al Atlántico?",
                options: ["Bananos", "Café", "Cacao"],
                correct: 1
            },
            {
                question: "¿Quién terminó la construcción del ferrocarril y fundó la United Fruit Company?",
                options: ["Minor Keith", "William Walker", "Braulio Carrillo"],
                correct: 0
            },
            {
                question: "¿Qué presidente liberal abolió la pena de muerte en 1870?",
                options: ["Tomás Guardia", "Rafael Ángel Calderón Guardia", "Otilio Ulate"],
                correct: 0
            },
            {
                question: "¿Qué institución nació en 1941 para brindar salud y pensiones?",
                options: ["CCSS", "UCR", "ICE"],
                correct: 0
            },
            {
                question: "¿Qué documento de 1943 protege legalmente al trabajador?",
                options: ["Código de Trabajo", "Constitución de 1871", "Garantías Sociales"],
                correct: 0
            },
            {
                question: "¿Quiénes formaron la 'Alianza Histórica' en la década de 1940?",
                options: ["Calderón Guardia, Monseñor Sanabria y Manuel Mora", "Figueres, Ulate y Morgan", "Solo el gobierno"],
                correct: 0
            },
            {
                question: "¿Cuál fue la causa principal de la Guerra Civil de 1948?",
                options: ["La anulación de las elecciones", "El precio del café", "Una invasión extranjera"],
                correct: 0
            },
            {
                question: "¿En qué fecha se abolió el ejército simbólicamente con un mazazo?",
                options: ["1 de diciembre de 1948", "15 de septiembre", "11 de abril"],
                correct: 0
            },
            {
                question: "¿Qué derecho ganaron las mujeres en la Constitución de 1949?",
                options: ["Derecho al voto", "Derecho al trabajo", "Derecho a viajar"],
                correct: 0
            },
            {
                question: "¿Qué institución se encarga de organizar las elecciones desde 1949?",
                options: ["TSE", "CCSS", "AyA"],
                correct: 0
            },
            {
                question: "¿Para qué sirven los impuestos que pagamos al Estado?",
                options: ["Para financiar servicios públicos como educación y salud", "Para nada", "Para que los gobernantes sean ricos"],
                correct: 0
            },
            {
                question: "¿Qué es el ciberbullying?",
                options: ["Acoso sexual", "Acoso o humillación a través de medios digitales", "Un juego de video"],
                correct: 1
            },
            {
                question: "¿Qué debe contener un maletín de emergencias?",
                options: ["Agua, comida enlatada, linterna y radio", "Juguetes", "Solo ropa"],
                correct: 0
            },
            {
                question: "¿Qué valor permite resolver conflictos mediante el habla y la escucha?",
                options: ["El diálogo", "La fuerza", "El silencio"],
                correct: 0
            },
            {
                question: "¿Cuál fue la primera victoria naval de Costa Rica en 1856?",
                options: ["Combate de San Juan del Sur", "Batalla del Sardinal", "Batalla de Santa Rosa"],
                correct: 0
            },
            {
                question: "¿Qué significa que Costa Rica sea un Estado de Derecho?",
                options: ["Que todos debemos respetar las leyes", "Que el presidente manda sobre todos", "Que no hay leyes"],
                correct: 0
            },
            {
                question: "¿Qué grupo de inmigrantes trajo la cultura afrodescendiente a Limón?",
                options: ["Afroantillanos (principalmente jamaiquinos)", "Chinos", "Italianos"],
                correct: 0
            },
            {
                question: "¿Qué edificio se construyó con un impuesto especial al café?",
                options: ["Teatro Nacional", "Estadio Nacional", "Museo de Oro"],
                correct: 0
            },
            {
                question: "¿Qué es el sufragio universal?",
                options: ["Que todos los ciudadanos con edad legal pueden votar", "Que solo los hombres votan", "Que solo se vota en el espacio"],
                correct: 0
            },
            {
                question: "¿Qué significa que la educación sea 'laica'?",
                options: ["Independiente de la religión", "Que es obligatoria", "Que es gratis"],
                correct: 0
            },
            {
                question: "¿Cuál es el principal factor de protección contra las drogas?",
                options: ["La comunicación familiar y el deporte", "Estar solo", "Ver televisión"],
                correct: 0
            },
            {
                question: "¿Qué puente ferroviario sobre el río Grande fue una gran obra técnica?",
                options: ["Puente del río Grande", "Puente de la Amistad", "Puente del Tempisque"],
                correct: 0
            },
            {
                question: "¿Qué significa que la vida humana sea 'inviolable'?",
                options: ["Que nadie tiene derecho a quitarle la vida a otro", "Que no se puede enfermar", "Que es eterna"],
                correct: 0
            },
            {
                question: "¿Qué pasó con los cementerios en la época liberal?",
                options: ["Pasaron al control del Estado", "Se cerraron", "Pertenecieron solo a la Iglesia"],
                correct: 0
            },
            {
                question: "¿Qué institución nacionalizó la banca tras 1948?",
                options: ["Junta Fundadora de la Segunda República", "Hacienda", "Poder Judicial"],
                correct: 0
            },
            {
                question: "¿Para qué sirve el semáforo peatonal?",
                options: ["Indicar al peatón cuándo es seguro cruzar", "Para que los carros vayan rápido", "Como adorno"],
                correct: 0
            },
            {
                question: "¿Cómo se llama la ley máxima de Costa Rica?",
                options: ["Constitución Política", "Código Civil", "Ley de Tránsito"],
                correct: 0
            },
            {
                question: "¿Qué significa ser multiétnico?",
                options: ["Que convivimos muchas etnias y orígenes diferentes", "Que todos somos de la misma familia", "Que solo hay una lengua"],
                correct: 0
            },
            {
                question: "¿Por qué el 11 de abril es un día patrio?",
                options: ["Batalla de Rivas y gesta de Juan Santamaría", "Independencia", "Anexión de Nicoya"],
                correct: 0
            },
            {
                question: "¿Qué es el ahorro escolar?",
                options: ["Una forma de aprender a manejar el dinero desde niños", "Un gasto", "Un regalo del gobierno"],
                correct: 0
            },
            {
                question: "¿Qué representa el Museo Nacional hoy (antiguo Cuartel Bellavista)?",
                options: ["La paz y el fin del militarismo", "La guerra", "Solo el pasado"],
                correct: 0
            },
            {
                question: "¿Cuál es el papel del ciudadano en la democracia?",
                options: ["Participar, votar y respetar a los demás", "No hacer nada", "Solo quejarse"],
                correct: 0
            }
        ]
    }
];
