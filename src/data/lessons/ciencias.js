// src/data/lessons/ciencias.js
// Flat array of 22 Ciencias lessons for EduPortal CR (Sexto Año)
// Organized by mepBloque: cuerpo-humano | biodiversidad | energia | geofisica

export const cienciasLessons = [

  // ─── CUERPO HUMANO ────────────────────────────────────────

  {
    id: 'la-celula',
    mepBloque: 'cuerpo-humano',
    title: 'La Célula',
    description: 'La célula es la unidad funcional de los seres vivos y realiza todas las funciones vitales.',
    sections: [
      {
        title: '1. ¿Qué es la célula?',
        content: [
          '<p>La <strong>célula</strong> es la unidad funcional de los seres vivos. Las células realizan funciones vitales: se reproducen, respiran, se alimentan, eliminan desechos, entre otras.</p>',
          '<p>Las células poseen diversas formas y tamaños y se encuentran en todas las partes del cuerpo. Gracias a ellas, tu cuerpo cumple con las condiciones para sobrevivir. Las plantas y los animales también poseen células.</p>'
        ]
      },
      {
        title: '2. Partes de la célula animal',
        content: [
          '<ul>' +
            '<li><strong>Membrana celular:</strong> Es la parte más externa de la célula. La envuelve y protege. Además, controla la entrada y la salida de sustancias de la célula.</li>' +
            '<li><strong>Citoplasma:</strong> Formado por sustancias orgánicas e inorgánicas mezcladas en agua; posee una consistencia viscosa.</li>' +
            '<li><strong>Núcleo celular:</strong> Es la parte más importante de la célula, ya que controla la actividad celular. Se encuentra dentro del citoplasma y guarda en su interior el ADN o material genético.</li>' +
            '<li><strong>Organelas:</strong> Estructuras especializadas dentro del citoplasma que cumplen funciones específicas.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Niveles de organización del cuerpo humano',
        content: [
          '<ul>' +
            '<li><strong>Célula:</strong> Unidad básica de la vida.</li>' +
            '<li><strong>Tejido:</strong> Células con función común agrupadas juntas.</li>' +
            '<li><strong>Órgano:</strong> Combinación de tejidos que forman una estructura funcional.</li>' +
            '<li><strong>Sistema:</strong> Conjunto de órganos que trabajan coordinadamente.</li>' +
            '<li><strong>Organismo:</strong> Ser vivo completo que realiza todas las funciones vitales.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'tejido-sanguineo',
    mepBloque: 'cuerpo-humano',
    title: 'Tejido Sanguíneo',
    description: 'El tejido sanguíneo está compuesto por plasma, glóbulos rojos, glóbulos blancos y plaquetas, y cumple funciones de transporte y defensa.',
    sections: [
      {
        title: '1. Componentes del tejido sanguíneo',
        content: [
          '<ul>' +
            '<li><strong>Plasma:</strong> Líquido amarillento formado por agua, sales, proteínas y vitaminas. Transporta glóbulos rojos, blancos y plaquetas.</li>' +
            '<li><strong>Glóbulos rojos (eritrocitos):</strong> También formados por proteínas; contienen hemoglobina, que da el color rojo a la sangre. Transportan oxígeno a todo el cuerpo.</li>' +
            '<li><strong>Glóbulos blancos (leucocitos):</strong> Defienden el cuerpo contra microorganismos y sustancias extrañas (infecciones).</li>' +
            '<li><strong>Plaquetas (trombocitos):</strong> Son fragmentos celulares sin núcleo. Intervienen en la coagulación al romperse un vaso sanguíneo.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Funciones del tejido sanguíneo',
        content: [
          '<ul>' +
            '<li>Transporta el <strong>oxígeno</strong> a las células del cuerpo.</li>' +
            '<li>Transporta los <strong>nutrientes</strong> a las células del cuerpo.</li>' +
            '<li>Defiende al organismo contra las <strong>enfermedades</strong>.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'vacunas-y-prevencion',
    mepBloque: 'cuerpo-humano',
    title: 'Vacunas y Prevención de Enfermedades',
    description: 'Las vacunas fortalecen el sistema inmunológico y la prevención de enfermedades protege la salud individual y colectiva.',
    sections: [
      {
        title: '1. Función de las vacunas',
        content: [
          '<p>Las <strong>vacunas</strong> son sustancias que permiten la creación de <strong>anticuerpos</strong> que nos defienden de algunas enfermedades, aunque lleguen mucho tiempo después de su aplicación. También permiten que el organismo esté preparado para la llegada de ciertas enfermedades y aprenda a atacarlas antes de que se genere algún daño importante.</p>'
        ]
      },
      {
        title: '2. Beneficios de las vacunas',
        content: [
          '<ol>' +
            '<li><strong>Prevención de enfermedades graves</strong> como el sarampión, la gripe y la polio.</li>' +
            '<li><strong>Fortalecen el sistema inmunológico:</strong> Estimulan la producción de anticuerpos que ayudan al cuerpo a reconocer y combatir virus o bacterias.</li>' +
            '<li><strong>Evitan brotes y epidemias:</strong> Al vacunar a muchas personas, se reduce la propagación de enfermedades en la comunidad.</li>' +
            '<li><strong>Protegen a los más vulnerables</strong> mediante la inmunidad colectiva, ya que algunas personas (bebés, personas con ciertas enfermedades) no pueden vacunarse.</li>' +
            '<li><strong>Ahorro en gastos médicos:</strong> Prevenir una enfermedad es más económico que tratarla.</li>' +
          '</ol>'
        ]
      },
      {
        title: '3. Recomendaciones para prevenir enfermedades',
        content: [
          '<ul>' +
            '<li>Realizar ejercicio físico regularmente.</li>' +
            '<li>Consumir alimentos saludables (frutas y vegetales).</li>' +
            '<li>Evitar el consumo de sustancias nocivas.</li>' +
            '<li>Evitar el estrés y realizar actividades recreativas.</li>' +
            '<li>Acudir al médico ante cualquier problema de salud.</li>' +
            '<li>Colocarse las vacunas necesarias.</li>' +
          '</ul>',
          '<blockquote style="background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);">La prevención y el diagnóstico a tiempo pueden evitar el desarrollo de enfermedades graves que incluso pueden causar la muerte.</blockquote>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'sistemas-del-cuerpo-humano',
    mepBloque: 'cuerpo-humano',
    title: 'Sistemas del Cuerpo Humano',
    description: 'Los sistemas del cuerpo humano trabajan coordinadamente para mantener las funciones vitales del organismo.',
    sections: [
      {
        title: '1. Sistema Digestivo',
        content: [
          '<p>El <strong>sistema digestivo</strong> es el encargado de transformar los alimentos en sustancias más sencillas y nutritivas que pueden pasar a la sangre.</p>',
          '<ul>' +
            '<li><strong>Boca:</strong> Inicia la digestión. Tritura los alimentos y los mezcla con la saliva.</li>' +
            '<li><strong>Faringe:</strong> Conduce el alimento desde la boca hacia el esófago.</li>' +
            '<li><strong>Esófago:</strong> Transporta el alimento hacia el estómago mediante movimientos musculares.</li>' +
            '<li><strong>Estómago:</strong> Mezcla el alimento con los jugos gástricos para formar una sustancia llamada quimo.</li>' +
            '<li><strong>Hígado:</strong> Produce la bilis, que ayuda a digerir las grasas.</li>' +
            '<li><strong>Vesícula biliar:</strong> Almacena la bilis producida por el hígado y la libera al intestino delgado.</li>' +
            '<li><strong>Páncreas:</strong> Libera jugos pancreáticos que ayudan a digerir proteínas, grasas y carbohidratos.</li>' +
            '<li><strong>Intestino delgado:</strong> Absorbe los nutrientes del alimento y los pasa a la sangre.</li>' +
            '<li><strong>Intestino grueso:</strong> Absorbe agua y forma las heces.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Sistema Respiratorio',
        content: [
          '<p>El <strong>sistema respiratorio</strong> es el encargado de suministrar oxígeno a las células del organismo y de eliminar el dióxido de carbono.</p>',
          '<ul>' +
            '<li><strong>Vías nasales:</strong> Dos cavidades que permiten la entrada del aire.</li>' +
            '<li><strong>Laringe:</strong> Conducto que transporta el aire hacia la tráquea.</li>' +
            '<li><strong>Faringe:</strong> Conducto que permite que el aire pase hacia las vías respiratorias inferiores.</li>' +
            '<li><strong>Epiglotis:</strong> Válvula que se abre y cierra para evitar que los alimentos pasen hacia los pulmones.</li>' +
            '<li><strong>Tráquea:</strong> Conducto formado por anillos cartilaginosos que lleva el aire a los pulmones.</li>' +
            '<li><strong>Bronquios:</strong> Ramificaciones que transportan el aire desde la tráquea hacia los bronquiolos.</li>' +
            '<li><strong>Pulmones:</strong> Realizan el intercambio gaseoso entre el oxígeno del aire y el dióxido de carbono de la sangre.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Sistema Circulatorio',
        content: [
          '<p>El <strong>sistema circulatorio</strong> es el encargado de transportar la sangre por todo el cuerpo, llevando oxígeno y nutrientes a los tejidos y eliminando desechos. Está compuesto por el corazón y los vasos sanguíneos.</p>',
          '<p>El corazón realiza dos movimientos: <strong>sístole</strong> (cuando se contrae) y <strong>diástole</strong> (cuando se relaja o se dilata).</p>',
          '<ul>' +
            '<li><strong>Arterias:</strong> Llevan la sangre con oxígeno desde el corazón hacia todo el cuerpo.</li>' +
            '<li><strong>Venas:</strong> Devuelven la sangre con dióxido de carbono y desechos desde los tejidos al corazón.</li>' +
            '<li><strong>Capilares:</strong> Son los vasos más pequeños. Conectan arterias y venas, y permiten el intercambio de oxígeno y nutrientes con las células.</li>' +
          '</ul>',
          '<p>El <strong>sistema inmunológico</strong> trabaja para protegernos de virus, bacterias y microorganismos (gérmenes). Es como un ejército defensor del cuerpo.</p>'
        ]
      },
      {
        title: '4. Sistema Renal, Endocrino y Nervioso',
        content: [
          '<p><strong>Sistema Renal:</strong> Se encarga de eliminar las sustancias nocivas producidas por el organismo a través de la orina. Compuesto por riñones, uréteres, vejiga y uretra.</p>',
          '<p><strong>Sistema Endocrino:</strong> Conjunto de glándulas que fabrican y liberan hormonas. Actúan como mensajeros químicos que viajan por la sangre y regulan muchas funciones del cuerpo (crecimiento, metabolismo, pubertad).</p>',
          '<p><strong>Sistema Nervioso:</strong> Es el conjunto de órganos y estructuras de control e información del cuerpo humano. Está formado por células altamente diferenciadas llamadas <strong>neuronas</strong>, capaces de transmitir impulsos eléctricos.</p>',
          '<ul>' +
            '<li><strong>Cerebro:</strong> Controla la atención, memoria, información sensorial, comportamiento, emociones e inteligencia.</li>' +
            '<li><strong>Cerebelo:</strong> Procesa información para realizar movimientos coordinados.</li>' +
            '<li><strong>Bulbo raquídeo:</strong> Controla funciones cardíacas, respiratorias y gastrointestinales.</li>' +
            '<li><strong>Médula espinal:</strong> Centro que controla los actos reflejos.</li>' +
          '</ul>',
          '<p><strong>Sistema Reproductor:</strong> Permite la reproducción humana. Existen dos tipos: masculino (produce espermatozoides) y femenino (produce óvulos, permite la fecundación y aloja al bebé).</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'cuidados-e-interrelacion',
    mepBloque: 'cuerpo-humano',
    title: 'Cuidados e Interrelación de Sistemas',
    description: 'Los sistemas del cuerpo humano se interrelacionan y requieren cuidados específicos para funcionar correctamente.',
    sections: [
      {
        title: '1. Cuidados de los sistemas del cuerpo humano',
        content: [
          '<ul>' +
            '<li>Visitar regularmente al médico.</li>' +
            '<li>Evitar el fumado.</li>' +
            '<li>Evitar el estrés y realizar actividades recreativas.</li>' +
            '<li>No utilizar ropa y zapatos ajustados.</li>' +
            '<li>Consumir frutas y vegetales.</li>' +
            '<li>Realizar suficiente ejercicio.</li>' +
            '<li>Beber suficiente agua.</li>' +
            '<li>Respirar por la nariz y no por la boca.</li>' +
            '<li>Evitar consumir alimentos con mucha grasa o mucha sal.</li>' +
            '<li>Utilizar bloqueador solar.</li>' +
            '<li>Colocarse las vacunas necesarias.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Implicaciones negativas de los malos hábitos',
        content: [
          '<ul>' +
            '<li>El exceso de azúcar puede producir caries.</li>' +
            '<li>El exceso de comida chatarra puede generar obesidad.</li>' +
            '<li>El fumado puede generar enfermedades respiratorias y cáncer de pulmón.</li>' +
            '<li>La falta de sueño puede generar problemas en el sistema nervioso.</li>' +
            '<li>Utilizar ropa muy ajustada puede generar problemas de circulación.</li>' +
            '<li>El exceso de sal puede producir piedras en los riñones.</li>' +
            '<li>La falta de ejercicio puede producir obesidad y problemas cardíacos.</li>' +
            '<li>La falta de vacunas genera un debilitamiento del sistema inmune.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Interrelación entre los sistemas del cuerpo humano',
        content: [
          '<ul>' +
            '<li><strong>Respiratorio + Circulatorio:</strong> El sistema respiratorio capta el oxígeno del aire; el circulatorio lo transporta por el cuerpo. El circulatorio también recoge el dióxido de carbono para que sea expulsado al exhalar.</li>' +
            '<li><strong>Digestivo + Circulatorio:</strong> El digestivo descompone los alimentos en nutrientes; el circulatorio los lleva a todas las células del cuerpo.</li>' +
            '<li><strong>Excretor + Circulatorio:</strong> El circulatorio lleva los desechos a los riñones; el excretor (renal) se encarga de eliminarlos mediante la orina.</li>' +
            '<li><strong>Muscular + Óseo:</strong> Trabajan juntos para permitir el movimiento del cuerpo. Los huesos dan soporte y los músculos permiten que nos podamos mover.</li>' +
            '<li><strong>Endocrino + Nervioso:</strong> Ambos sistemas se encargan de la regulación del funcionamiento del organismo. Las respuestas del organismo a las hormonas están controladas y reguladas por el cerebro.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'aplicaciones-cientificas-medicina',
    mepBloque: 'cuerpo-humano',
    title: 'Aplicaciones Científicas en Medicina',
    description: 'La ciencia médica ha desarrollado tecnologías como implantes, trasplantes, clonación y aparatos diagnósticos para mejorar la salud humana.',
    sections: [
      {
        title: '1. Implantes y Trasplantes',
        content: [
          '<p><strong>Implantes:</strong> Son dispositivos médicos creados para reemplazar, ayudar o mejorar alguna estructura biológica faltante. Ejemplos: prótesis dentales, aparatos para mejorar la audición, tornillos y placas para unir huesos.</p>',
          '<p><strong>Trasplantes de órganos y tejidos:</strong> Un trasplante consiste en trasladar un órgano, tejido o conjunto de células de una persona (donante) a otra (receptor). Órganos que se pueden trasplantar: riñones, corazón, hígado, pulmones y páncreas.</p>',
          '<p><strong>Reemplazo:</strong> Consiste en sustituir un órgano dañado por un dispositivo artificial que cumpla con las funciones vitales del órgano. Ejemplos: reemplazo de cadera y reemplazo de rodilla.</p>'
        ]
      },
      {
        title: '2. Clonación y Vacunas',
        content: [
          '<p><strong>Clonación:</strong> Es el proceso mediante el cual se obtienen dos células u organismos idénticos ya desarrollados. La oveja Dolly fue el primer mamífero clonado de la historia.</p>',
          '<p><strong>Las vacunas:</strong> Una vacuna es una preparación de antígenos (sustancias que permiten la formación de anticuerpos) para producir una respuesta de defensa dentro del organismo.</p>'
        ]
      },
      {
        title: '3. Aparatos tecnológicos en la medicina',
        content: [
          '<ul>' +
            '<li><strong>Rayos X:</strong> Tipo de radiación electromagnética que puede atravesar cuerpos opacos. Se utiliza para ver fracturas y diagnosticar algunas enfermedades.</li>' +
            '<li><strong>Rayos láser:</strong> Se utiliza un rayo de luz para hacer cortes, cauterizar tejidos o realizar cirugías.</li>' +
            '<li><strong>Bomba de cobalto:</strong> Máquina de radioterapia para tratamiento de algunas enfermedades.</li>' +
            '<li><strong>Ultrasonido:</strong> Vibración sonora de alta frecuencia que permite obtener imágenes del interior del cuerpo humano.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  // ─── BIODIVERSIDAD ───────────────────────────────────────

  {
    id: 'conceptos-biodiversidad',
    mepBloque: 'biodiversidad',
    title: 'Conceptos Básicos de Biodiversidad',
    description: 'La biodiversidad se organiza en niveles ecológicos que van desde el individuo hasta el ecosistema.',
    sections: [
      {
        title: '1. Conceptos básicos relacionados con la biodiversidad',
        content: [
          '<ul>' +
            '<li><strong>Individuo:</strong> Ser vivo particular en su especie.</li>' +
            '<li><strong>Población:</strong> Grupo de individuos de la misma especie.</li>' +
            '<li><strong>Comunidad:</strong> Conjunto de distintas poblaciones que conviven en un mismo lugar.</li>' +
            '<li><strong>Ecosistema:</strong> La comunidad y el medio donde habita.</li>' +
            '<li><strong>Hábitat:</strong> Lugar donde vive una especie.</li>' +
            '<li><strong>Nicho ecológico:</strong> Función que desempeña una especie dentro del ecosistema.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Componentes del ecosistema',
        content: [
          '<p>Los ecosistemas poseen dos tipos de componentes:</p>',
          '<ul>' +
            '<li><strong>Componentes abióticos:</strong> Elementos sin vida pero imprescindibles para la supervivencia de las especies. Ejemplos: luz solar, temperatura, suelo, agua.</li>' +
            '<li><strong>Componentes bióticos:</strong> Seres vivos que habitan en el ecosistema: plantas, animales, hongos y microorganismos.</li>' +
          '</ul>',
          '<p>Los componentes del ecosistema se relacionan entre sí. Por ejemplo, las plantas aprovechan la luz solar y el agua para producir el alimento que es ingerido por los animales.</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'funciones-vitales',
    mepBloque: 'biodiversidad',
    title: 'Funciones Vitales y Adaptaciones',
    description: 'Los seres vivos realizan funciones vitales como nutrición, relación y reproducción, y poseen adaptaciones especiales para sobrevivir.',
    sections: [
      {
        title: '1. Funciones vitales de los seres vivos',
        content: [
          '<ul>' +
            '<li><strong>Nutrición:</strong> Es el proceso por el cual los seres vivos obtienen energía y materiales para crecer y desarrollarse. Los animales se alimentan de otros seres vivos; las plantas producen su propio alimento (fotosíntesis).</li>' +
            '<li><strong>Relación:</strong> Es la capacidad de percibir lo que pasa alrededor y responder a los estímulos del ambiente. Ejemplo: un perro ladra si escucha un ruido; una planta gira hacia la luz del sol.</li>' +
            '<li><strong>Reproducción:</strong> Es la función que permite a los seres vivos tener descendencia y asegurar la continuidad de su especie. Los seres humanos tienen hijos; las flores producen semillas.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Tipos de nutrición',
        content: [
          '<ul>' +
            '<li><strong>Autótrofos (plantas y algas):</strong> Fabrican su propio alimento mediante la fotosíntesis, usando luz solar, agua y dióxido de carbono.</li>' +
            '<li><strong>Heterótrofos (animales):</strong> Obtienen nutrientes alimentándose de otros seres vivos. Usan diferentes estructuras según su tipo de alimentación: picos (aves), órganos de los sentidos (localizar alimento), dientes/piezas dentarias (triturar), extremidades (alcanzar la presa).</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Adaptaciones en la respiración y reproducción',
        content: [
          '<p><strong>Tipos de respiración en los animales:</strong></p>',
          '<ul>' +
            '<li><strong>Pulmonar:</strong> Ranas, serpientes, aves, delfines y perros.</li>' +
            '<li><strong>Cutánea:</strong> Animales que respiran a través de la piel, como la lombriz de tierra.</li>' +
            '<li><strong>Branquial:</strong> Animales acuáticos con branquias, como peces, camarones y pulpos.</li>' +
            '<li><strong>Traqueal:</strong> Característica de animales con tráqueas, como ciempiés, milpiés e insectos.</li>' +
          '</ul>',
          '<p><strong>Tipos de reproducción:</strong></p>',
          '<ul>' +
            '<li><strong>Reproducción sexual:</strong> Se necesita la participación de dos progenitores. Se produce la unión de dos células sexuales o gametos. Permite la variabilidad en la descendencia.</li>' +
            '<li><strong>Reproducción asexual:</strong> Un único progenitor origina nuevos individuos. Los hijos son idénticos al progenitor. Es propia de muchos organismos unicelulares.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'adaptaciones-al-ambiente',
    mepBloque: 'biodiversidad',
    title: 'Adaptaciones al Ambiente',
    description: 'Los seres vivos desarrollan adaptaciones conductuales y morfológicas para sobrevivir en su entorno.',
    sections: [
      {
        title: '1. Comportamientos adaptativos',
        content: [
          '<p>Las plantas y los animales poseen estructuras o estrategias que les permiten adaptarse a los cambios del ambiente.</p>',
          '<ul>' +
            '<li><strong>Migración:</strong> Es el desplazamiento de un animal hacia otro lugar en busca de alimento, mejor clima o para reproducirse. Ejemplos: algunas aves y mariposas migran desde regiones frías hacia zonas más cálidas; algunas tortugas nadan cientos de kilómetros para poner sus huevos.</li>' +
            '<li><strong>Hibernación:</strong> Estado de sueño profundo que permite a ciertos animales sobrevivir en ambientes con bajas temperaturas, sin necesidad de migrar. Ejemplos: ratones, ardillas, osos y murciélagos durante los meses de invierno.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Adaptaciones para la defensa',
        content: [
          '<ul>' +
            '<li><strong>Caparazones:</strong> Envolturas rígidas que protegen el cuerpo. Ejemplos: tortugas, caracoles, crustáceos.</li>' +
            '<li><strong>Espinas:</strong> Prolongaciones puntiagudas que sirven como defensa. Ejemplos: cactus, rosas, puercoespines.</li>' +
            '<li><strong>Mimetismo:</strong> Capacidad de parecerse a otros organismos o al entorno para protegerse. Ejemplos: camaleón, pulpo, mariposa búho.</li>' +
            '<li><strong>Cornamentas:</strong> Estructuras óseas en la cabeza que ayudan a defenderse, pelear o atraer pareja. Ejemplos: venados, toros.</li>' +
            '<li><strong>Olores:</strong> Algunos seres vivos emiten olores fuertes para ahuyentar enemigos. Ejemplos: zorrillo, mofeta, flor cadáver.</li>' +
            '<li><strong>Veneno:</strong> Algunas especies usan veneno como defensa, con colores llamativos para advertir del peligro. Ejemplos: rana roja, pulpo de anillos azules.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'reinos-biologicos',
    mepBloque: 'biodiversidad',
    title: 'Reinos Biológicos',
    description: 'Los seres vivos se clasifican en cinco reinos biológicos: Monera, Protista, Fungi, Plantae y Animalia.',
    sections: [
      {
        title: '1. Los cinco reinos biológicos',
        content: [
          '<p>En 1969, el científico <strong>Robert Whittaker</strong> propuso la creación de cinco reinos biológicos, clasificando los seres vivos según: nivel de complejidad (unicelular/pluricelular), tipo de células (procariotas/eucariotas), tipo de nutrición (autótrofa/heterótrofa) y tipo de movilidad.</p>',
          '<ul>' +
            '<li><strong>Reino Monera (Bacterias):</strong> Unicelulares, sin núcleo definido (procariotas). Pueden ser autótrofas o heterótrofas. Formas: cocos (esférica), bacilos (bastón), espirilos (espiral). Beneficios: digestión, prevención de enfermedades, fabricación de insulina, fijación de nitrógeno.</li>' +
            '<li><strong>Reino Protista:</strong> Eucariotas, en su mayoría unicelulares. Incluye: mohos deslizantes, protozoarios (organismos microscópicos que se mueven con cilios y flagelos) y algas. Algunos protozoarios causan enfermedades: malaria, disentería, enfermedad del sueño.</li>' +
            '<li><strong>Reino Fungi (Hongos):</strong> La mayoría son pluricelulares (la levadura es unicelular). Son heterótrofos e inmóviles. Pueden ser parásitos o descomponedores. Ejemplos: levaduras, champiñones, setas, moho del pan. Usos: alimento, penicilina. Algunos son venenosos (Amanita phalloides).</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Reino Plantae',
        content: [
          '<p>El reino Plantae está formado por todas las especies de plantas:</p>',
          '<ul>' +
            '<li>Son pluricelulares, autótrofos e inmóviles.</li>' +
            '<li>Producen su alimento por medio de la <strong>fotosíntesis</strong>.</li>' +
          '</ul>',
          '<p><strong>Fotosíntesis:</strong> Las plantas obtienen su alimento absorbiendo luz solar mediante la <strong>clorofila</strong> en los <strong>cloroplastos</strong>. Usan agua (raíces), dióxido de carbono (aire) y luz solar para producir azúcares (alimento) y liberar oxígeno.</p>',
          '<p><strong>Importancia de la fotosíntesis:</strong></p>',
          '<ul>' +
            '<li>Produce el oxígeno que necesitamos para respirar.</li>' +
            '<li>Contribuye al ciclo del agua.</li>' +
            '<li>Equilibra los gases atmosféricos.</li>' +
            '<li>Purifica el aire al absorber CO₂.</li>' +
            '<li>Elabora alimento para el consumo humano.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Reino Animalia',
        content: [
          '<p>El reino Animalia está conformado por todos los animales vertebrados e invertebrados. Son pluricelulares, heterótrofos y tienen la capacidad de desplazarse.</p>',
          '<p><strong>Animales invertebrados:</strong></p>',
          '<ul>' +
            '<li><strong>Moluscos:</strong> Cuerpo blando protegido por una concha. Viven en ambientes acuáticos.</li>' +
            '<li><strong>Esponjas:</strong> La mayoría viven en el mar; su cuerpo posee poros.</li>' +
            '<li><strong>Celenterados:</strong> La mayoría viven en el mar; su cuerpo posee tentáculos.</li>' +
            '<li><strong>Anélidos:</strong> Cuerpo cilíndrico formado por anillos. Se desplazan mediante contracciones musculares.</li>' +
            '<li><strong>Equinodermos:</strong> Animales exclusivamente marinos con piel espinosa.</li>' +
            '<li><strong>Artrópodos:</strong> Incluye insectos, arácnidos y crustáceos. Poseen exoesqueleto.</li>' +
          '</ul>',
          '<p><strong>Animales vertebrados:</strong> Peces (escamas, aletas, branquias), anfibios (cuatro patas, piel húmeda, sangre fría), reptiles (escamas, sangre fría), mamíferos (pelo, pulmones, sangre caliente) y aves (plumas, pico, alas, ponen huevos).</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'relaciones-y-cadenas-alimentarias',
    mepBloque: 'biodiversidad',
    title: 'Relaciones Ecológicas y Cadenas Alimentarias',
    description: 'Los seres vivos establecen relaciones intraespecíficas e interespecíficas y se organizan en cadenas y tramas alimentarias.',
    sections: [
      {
        title: '1. Relaciones entre organismos',
        content: [
          '<ul>' +
            '<li><strong>Relaciones intraespecíficas:</strong> Ocurren entre individuos de la misma especie. Ejemplo: un grupo de leones que vive, caza y se protege juntos. Pueden ser de cooperación o de competencia.</li>' +
            '<li><strong>Relaciones interespecíficas:</strong> Ocurren entre individuos de diferentes especies. Ejemplo: abejas y flores.</li>' +
          '</ul>',
          '<p><strong>Tipos de relaciones simbióticas:</strong></p>',
          '<ul>' +
            '<li><strong>Mutualismo:</strong> Ambos se benefician. Ejemplo: la abeja y la flor (la abeja obtiene néctar; la flor asegura su reproducción por polinización).</li>' +
            '<li><strong>Comensalismo:</strong> Uno se beneficia y el otro no se perjudica ni se beneficia. Ejemplo: la garza blanca y el ganado.</li>' +
          '</ul>',
          '<p><strong>Tipos de relaciones antagónicas:</strong></p>',
          '<ul>' +
            '<li><strong>Parasitismo:</strong> Un parásito depende de otro ser vivo (huésped) perjudicándolo. Ejemplo: la pulga y el perro.</li>' +
            '<li><strong>Depredación:</strong> Un depredador caza y se alimenta de una presa. Ejemplo: el oso y el salmón.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Cadenas y tramas alimentarias',
        content: [
          '<p>Las <strong>cadenas alimentarias</strong> representan la relación lineal entre organismos, determinando quién es el depredador y quién es la presa.</p>',
          '<p><strong>Niveles en la cadena alimentaria:</strong></p>',
          '<ul>' +
            '<li><strong>Productor (Nivel 1):</strong> Plantas — producen su alimento mediante fotosíntesis.</li>' +
            '<li><strong>Consumidor primario (Nivel 2):</strong> Animales herbívoros — se alimentan de productores.</li>' +
            '<li><strong>Consumidor secundario (Nivel 3):</strong> Animales carnívoros pequeños — se alimentan de herbívoros.</li>' +
            '<li><strong>Consumidor terciario (Nivel 4):</strong> Carnívoros grandes/depredadores — se alimentan de consumidores secundarios.</li>' +
            '<li><strong>Descomponedores:</strong> Hongos, bacterias, lombrices — descomponen materia orgánica y devuelven nutrientes al suelo.</li>' +
          '</ul>',
          '<p>Las <strong>tramas alimentarias</strong> son una interconexión de cadenas alimentarias que representa quién se come a quién dentro de una comunidad ecológica.</p>'
        ]
      },
      {
        title: '3. Pirámides tróficas y clasificación de heterótrofos',
        content: [
          '<p>Las <strong>pirámides tróficas</strong> representan las relaciones tróficas en un ecosistema; cada eslabón corresponde a un nivel trófico iniciando con los productores y finalizando con los consumidores terciarios.</p>',
          '<p><strong>Clasificación de organismos heterótrofos:</strong></p>',
          '<ul>' +
            '<li><strong>Consumidores primarios:</strong> Se alimentan de organismos productores (plantas).</li>' +
            '<li><strong>Consumidores secundarios/terciarios:</strong> Se alimentan de otros animales.</li>' +
            '<li><strong>Herbívoros:</strong> Se alimentan de plantas y animales.</li>' +
            '<li><strong>Carroñeros:</strong> Se alimentan de animales muertos.</li>' +
            '<li><strong>Detritívoros:</strong> Se alimentan (ingieren) partes descompuestas de plantas y animales.</li>' +
            '<li><strong>Descomponedores:</strong> Se alimentan de materia descompuesta sin ingerirla.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'equilibrio-ecologico',
    mepBloque: 'biodiversidad',
    title: 'Equilibrio Ecológico',
    description: 'El equilibrio ecológico es la armonía entre los seres vivos y su entorno, y puede ser alterado por fenómenos naturales o actividades humanas.',
    sections: [
      {
        title: '1. ¿Qué es el equilibrio ecológico?',
        content: [
          '<p>El <strong>equilibrio ecológico</strong> se produce cuando hay armonía y estabilidad entre los seres vivos y el medio en el que habitan. Sin embargo, existen fenómenos naturales y acciones provocadas por el ser humano que afectan este equilibrio.</p>'
        ]
      },
      {
        title: '2. Eventos naturales que alteran el equilibrio ecológico',
        content: [
          '<ul>' +
            '<li><strong>Huracanes:</strong> Fenómenos meteorológicos intensos con lluvias y vientos fuertes. Consecuencias: daño a arrecifes coralinos, pérdida de praderas marinas, afectación de manglares y playas, deterioro de la vegetación silvestre.</li>' +
            '<li><strong>Terremotos:</strong> Movimiento repentino de la Tierra causado por la liberación brusca de energía acumulada. Consecuencias: deslizamientos, tsunamis, incendios.</li>' +
            '<li><strong>Erupciones volcánicas:</strong> Emisión violenta de materiales (lava, cenizas, gases). Consecuencias: contaminación del suelo, quemaduras en la vegetación, contaminación de fuentes de agua, alteración de la calidad del aire.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Factores humanos que alteran el equilibrio ecológico',
        content: [
          '<ul>' +
            '<li><strong>Urbanismo descontrolado:</strong> Agota los recursos naturales, genera excesiva demanda energética y contaminación por combustibles fósiles.</li>' +
            '<li><strong>Deforestación:</strong> Destrucción de bosques para agricultura y ganadería; los ríos se secan y los animales pierden su hábitat.</li>' +
            '<li><strong>Mala planificación turística:</strong> Contaminación y sobreuso de recursos.</li>' +
            '<li><strong>Caza y pesca desmedida:</strong> Rompe el equilibrio ecológico y aumenta el número de especies en peligro de extinción.</li>' +
          '</ul>',
          '<p><strong>Consecuencias de la ruptura del equilibrio ecológico:</strong> modificación y destrucción de hábitats, calentamiento global, destrucción de la capa de ozono, alteración de la cadena alimentaria, erosión de los suelos y extinción de especies.</p>'
        ]
      }
    ],
    quiz: []
  },

  // ─── ENERGÍA ─────────────────────────────────────────────

  {
    id: 'gravedad-fuerzas',
    mepBloque: 'energia',
    title: 'Capítulo 1: La Gravedad y Otras Fuerzas',
    description: 'Explora la masa, el peso, las fuerzas, la gravedad y cómo se mueven los objetos en el espacio y el agua.',
    extraMaterial: {
      title: 'Examen de Repaso: Capítulo 1',
      url: '/sociales/docs/Science_Exam_Chapter1_6thGrade.pdf',
      type: 'PDF'
    },
    sections: [
      {
        title: '1. ¿Qué es la masa?',
        content: [
          '<p>La <strong>masa</strong> es la cantidad de <em>materia</em> (material) que tiene un objeto. <strong>Nunca cambia</strong> — ¡ya sea que estés en la Tierra, la Luna o Júpiter!</p>',
          '<ul><li>La masa se mide en <strong>gramos (g)</strong> o <strong>kilogramos (kg)</strong></li><li>Medimos la masa usando una <strong>balanza</strong> o una <strong>báscula</strong></li><li>La lectura de la báscula <em>muestra</em> tu masa, aunque en realidad está midiendo tu peso</li></ul>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>💡 Para reducir errores en las mediciones, podemos tomar lecturas repetidas y luego calcular el <strong>promedio</strong>.</blockquote>'
        ]
      },
      {
        title: '2. ¿Qué es el peso?',
        content: [
          '<p>El <strong>peso</strong> es la <em>fuerza de atracción</em> que ejerce la gravedad sobre un objeto. ¡A diferencia de la masa, el peso <strong>cambia</strong> dependiendo de dónde estés!</p>',
          '<ul><li>El peso se mide en <strong>Newtons (N)</strong></li><li>Una báscula mide el efecto de la gravedad sobre la masa de un objeto</li></ul>',
          '<h3>La Fórmula:</h3><blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'><strong>Peso = Masa × Fuerza de la Gravedad</strong></blockquote>',
          '<p><strong>Ejemplos:</strong><br/>- En la <strong>Tierra</strong> (gravedad = 9.8 N/kg): 40 kg × 9.8 = <strong>392 N</strong><br/>- En la <strong>Luna</strong> (gravedad = 1.6 N/kg): 40 kg × 1.6 = <strong>64 N</strong></p>',
          '<p>¡Por eso los astronautas pueden saltar tan alto en la Luna! 🌕 La gravedad de la Luna es aproximadamente <strong>1/6</strong> de la gravedad de la Tierra.</p>'
        ]
      },
      {
        title: '3. ¿Qué son las fuerzas?',
        content: [
          '<p>Una <strong>fuerza</strong> es un empuje o un jalón. En la vida real, muchas fuerzas pueden actuar sobre un objeto al mismo tiempo. El peso es solo una de ellas.</p>',
          '<p>Para predecir el efecto de las fuerzas sobre un objeto, debemos pensar en:</p><ul><li>El <strong>tamaño</strong> de la fuerza</li><li>La <strong>dirección</strong> de la fuerza</li></ul>',
          '<p>Usamos <strong>diagramas de fuerza</strong> con flechas para mostrar las fuerzas. Una flecha más larga = una fuerza mayor.</p>',
          '<h3>Fuerzas sobre un objeto en reposo</h3><p>Un trofeo sobre una mesa tiene <strong>dos fuerzas</strong> actuando sobre él:</p>',
          '<ul><li><strong>Peso</strong> (⬇️ Hacia abajo): La gravedad jala el trofeo hacia abajo</li><li><strong>Fuerza Normal</strong> (⬆️ Hacia arriba): La mesa empuja hacia arriba para sostenerlo</li></ul>',
          '<p>Cuando estas dos fuerzas son <strong>iguales y opuestas</strong>, el objeto permanece <strong>estacionario</strong> (en reposo).</p>'
        ]
      },
      {
        title: '4. ¿Qué es la gravedad?',
        content: [
          '<p>La gravedad es una <strong>fuerza de atracción</strong> entre objetos que tienen masa. ¡Cuanto mayor es la masa, más fuerte es la gravedad!</p>',
          '<h3>Dos Grandes Teorías:</h3>',
          '<ul><li>🍎 <strong>Sir Isaac Newton</strong> explicó que existe una fuerza de atracción debida a la gravedad entre los objetos. Este efecto de atracción da a un objeto su <strong>peso</strong>. La unidad de la gravedad es el <strong>Newton por kilogramo (N/kg)</strong>.</li>',
          '<li>🌀 <strong>Albert Einstein</strong> desarrolló una teoría que describe la gravedad como un efecto que resulta de la <strong>curvatura del espacio-tiempo</strong>. Esta curvatura hace que los planetas se muevan alrededor del Sol.</li></ul>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>De ambas teorías podemos decir que <strong>la gravedad es una propiedad de la materia</strong>.</blockquote>',
          '<h3>Datos clave sobre la gravedad:</h3><ul><li>La gravedad actúa <strong>hacia abajo</strong>, hacia el centro de la Tierra</li><li>Todo lo que tiene masa puede ejercer una fuerza de atracción debido a la gravedad</li><li>La fuerza de la gravedad es <strong>mayor en objetos con mayor masa</strong></li><li>Objetos muy masivos como los planetas, el Sol y la Luna tienen suficiente gravedad para atraer otros objetos hacia ellos</li><li>La gravedad de la Tierra = <strong>9.8 N/kg</strong> (esto significa que un objeto de 1 kg tiene un peso de 9.8 N)</li></ul>'
        ]
      },
      {
        title: '5. La Gravedad en Diferentes Planetas',
        content: [
          '<p>Cada planeta tiene una fuerza de gravedad diferente según su masa. Así se comparan:</p>',
          '<ul><li>Mercurio: 3.7 N/kg</li><li>Venus: 8.9 N/kg</li><li>🌍 <strong>Tierra: 9.8 N/kg</strong></li><li>Marte: 3.7 N/kg</li><li>⭐ <strong>Júpiter: 23.1 N/kg</strong></li><li>Saturno: 9.0 N/kg</li><li>Urano: 8.7 N/kg</li><li>Neptuno: 11.0 N/kg</li></ul>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>⭐ <strong>Júpiter</strong> tiene la gravedad más fuerte porque tiene la mayor masa.<br/><br/>📝 Nota: 10²⁴ significa que hay 24 ceros después del 1 — ¡es un número muy grande!</blockquote>'
        ]
      },
      {
        title: '6. La Luna y el Sistema Solar',
        content: [
          '<h3>La Gravedad del Sol</h3><p>El <strong>Sol</strong> tiene la mayor masa en el Sistema Solar, por lo que tiene la gravedad más fuerte. Este efecto de atracción hace que todos los planetas <strong>orbiten alrededor del Sol</strong>. Los planetas se conocen como los <strong>satélites naturales</strong> del Sol.</p>',
          '<ul><li>La Tierra es atraída hacia el Sol, por lo que <strong>orbita</strong> alrededor de él</li><li>Al mismo tiempo, la Tierra también <strong>gira sobre su propio eje</strong></li></ul>',
          '<h3>La Luna</h3><p>La <strong>Luna</strong> también es un satélite natural, pero de la Tierra, no del Sol. La gravedad de la Tierra mantiene a la Luna orbitando a su alrededor.</p>',
          '<ul><li>La Luna tarda aproximadamente <strong>28 días</strong> en orbitar la Tierra — esto se llama <strong>mes lunar</strong></li><li>Mientras la Luna orbita la Tierra, también gira sobre su propio eje</li><li>El mes lunar fue usado en muchas civilizaciones antiguas y en algunos calendarios</li></ul>'
        ]
      },
      {
        title: '7. Ciencia en Contexto y Vocabulario Clave',
        content: [
          '<h3>Newton vs Einstein sobre la Gravedad</h3><p>Ambos científicos estudiaron la gravedad pero la explicaron de manera diferente:</p><ul><li><strong>Newton</strong> vio la gravedad como una <em>fuerza</em> que atrae los objetos entre sí</li><li><strong>Einstein</strong> vio la gravedad como una <em>curvatura en el espacio-tiempo</em> causada por la masa</li></ul><p>Ambos coinciden en una cosa: <strong>la gravedad es una propiedad de la materia</strong> — ¡cualquier cosa con masa tiene gravedad!</p>',
          '<h3>Vocabulario Clave</h3>',
          '<ul><li><strong>Satélite</strong>: Un objeto que orbita otro objeto</li><li><strong>Órbita</strong>: El camino que recorre un objeto alrededor de otro</li><li><strong>Acelerar</strong>: Aumentar la velocidad — ocurre cuando se aplica una fuerza desequilibrada</li><li><strong>Desacelerar</strong>: Disminuir la velocidad — ocurre cuando se aplica una fuerza en dirección opuesta al movimiento</li><li><strong>Fricción</strong>: Una fuerza entre superficies que frena los objetos en movimiento</li><li><strong>Empuje / Fuerza de flotación</strong>: La fuerza hacia arriba que ejerce el agua sobre un objeto</li><li><strong>Desplazar</strong>: Cuando un objeto empuja el agua a un lado al ocupar espacio en ella</li></ul>'
        ]
      },
      {
        title: '8. Las Fuerzas Pueden Hacer que los Objetos Aceleren',
        content: [
          '<p>Cuando se aplica una fuerza a un objeto en reposo, la fuerza se vuelve <strong>desequilibrada</strong> y el objeto empieza a moverse. Cuando comienza a moverse en la dirección de la fuerza aplicada, decimos que el objeto <strong>acelera</strong> desde el reposo.</p>',
          '<ul><li><strong>Cuanto más fuerte empujas</strong>, más rápido se mueve el objeto (mayor aceleración)</li><li>Cuando un objeto se mueve, la <strong>fricción</strong> actúa entre la superficie y el objeto, haciendo que <strong>se desacelere</strong></li></ul>',
          '<h3>También Pueden Hacer que los Objetos Desaceleren</h3><p>Si empujas en la <strong>dirección opuesta</strong> al movimiento, el objeto puede detenerse. Decimos que el objeto está <strong>desacelerando</strong> y su velocidad está disminuyendo.</p>'
        ]
      },
      {
        title: '9. Fuerzas en el Agua: ¿Flota o se Hunde?',
        content: [
          '<p>Cuando un objeto se coloca en el agua, <strong>dos fuerzas</strong> actúan sobre él:</p>',
          '<ul><li><strong>Peso</strong> (⬇️ Hacia abajo): La gravedad jala el objeto hacia abajo</li><li><strong>Empuje (Fuerza de flotación)</strong> (⬆️ Hacia arriba): El agua empuja el objeto hacia arriba</li></ul>',
          '<p>El objeto <strong>desplaza</strong> (empuja a un lado) el agua cuando se coloca en ella. El peso del agua desplazada depende del <strong>volumen</strong> de agua desplazada.</p>',
          '<h3>✅ Fuerzas Equilibradas → FLOTA</h3><p>Un objeto <strong>flota</strong> cuando la fuerza de flotación es <strong>igual</strong> al peso del objeto.</p>',
          '<h3>❌ Fuerzas Desequilibradas → SE HUNDE</h3><p>Un objeto <strong>se hunde</strong> cuando la fuerza de flotación es <strong>menor</strong> que el peso del objeto.</p>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>💡 ¡La gravedad actúa sobre <strong>todos</strong> los objetos, incluso los que están en el agua!</blockquote>'
        ]
      }
    ],
    quiz: [
      {
        question: '¿Qué es la masa?',
        options: ['La fuerza de atracción debida a la gravedad', 'Una medida de cuánta materia tiene un objeto', 'La velocidad de un objeto', 'La fuerza que hace que los objetos floten'],
        correct: 1
      },
      {
        question: '¿En qué unidades se mide la masa?',
        options: ['Newtons (N)', 'Kilómetros (km)', 'Gramos (g) o kilogramos (kg)', 'Newton por kilogramo (N/kg)'],
        correct: 2
      },
      {
        question: '¿Qué es el peso?',
        options: ['Cuánta materia tiene un objeto', 'La velocidad a la que se mueve un objeto', 'La fuerza de atracción hacia abajo debida a la gravedad', 'La fuerza hacia arriba del agua sobre un objeto'],
        correct: 2
      },
      {
        question: '¿En qué unidades se mide el peso?',
        options: ['Kilogramos (kg)', 'Newtons (N)', 'Gramos (g)', 'Metros (m)'],
        correct: 1
      },
      {
        question: '¿Cuál es la fuerza de gravedad en la Tierra?',
        options: ['1.6 N/kg', '3.7 N/kg', '9.8 N/kg', '23.1 N/kg'],
        correct: 2
      },
      {
        question: 'Un niño tiene una masa de 40 kg. ¿Cuál es su peso en la Tierra? (gravedad = 9.8 N/kg)',
        options: ['40 N', '49 N', '392 N', '640 N'],
        correct: 2
      },
      {
        question: '¿Cuál es la fuerza de gravedad en la Luna?',
        options: ['9.8 N/kg', '3.7 N/kg', '8.9 N/kg', '1.6 N/kg'],
        correct: 3
      },
      {
        question: '¿Qué planeta tiene la gravedad más fuerte?',
        options: ['Saturno', 'Neptuno', 'Júpiter', 'Tierra'],
        correct: 2
      },
      {
        question: '¿Qué hace que los planetas orbiten alrededor del Sol?',
        options: ['La gravedad de la Luna', 'La gravedad del Sol', 'La fricción entre los planetas', 'La masa propia del planeta'],
        correct: 1
      },
      {
        question: '¿Cuánto tiempo tarda la Luna en orbitar la Tierra?',
        options: ['365 días', '24 horas', '28 días', '7 días'],
        correct: 2
      },
      {
        question: 'Según Isaac Newton, ¿qué es la gravedad?',
        options: ['Un efecto de la curvatura del espacio-tiempo', 'Una fuerza de atracción entre objetos', 'Un tipo de fricción', 'El peso de un objeto'],
        correct: 1
      },
      {
        question: 'Según Albert Einstein, ¿qué causa la gravedad?',
        options: ['La masa de la Luna', 'La fricción entre superficies', 'La curvatura del espacio-tiempo', 'La velocidad de los planetas'],
        correct: 2
      },
      {
        question: '¿Qué le pasa a un objeto cuando se le aplica una fuerza desequilibrada?',
        options: ['Se queda quieto', 'Desaparece', 'Empieza a moverse', 'Flota'],
        correct: 2
      },
      {
        question: '¿Qué es la fricción?',
        options: ['Una fuerza que hace que los objetos floten', 'Una fuerza entre superficies que frena los objetos en movimiento', 'La fuerza de atracción debida a la gravedad', 'El peso del agua desplazada'],
        correct: 1
      },
      {
        question: '¿Cuáles son las dos fuerzas que actúan sobre un objeto en el agua?',
        options: ['Fricción y gravedad', 'Fuerza normal y fricción', 'Peso y empuje', 'Masa y aceleración'],
        correct: 2
      },
      {
        question: '¿Qué es el empuje?',
        options: ['La fuerza hacia abajo debida a la gravedad', 'La fuerza hacia arriba que ejerce el agua sobre un objeto', 'La fuerza que hace que los objetos aceleren', 'El peso del objeto'],
        correct: 1
      },
      {
        question: '¿Cuándo flota un objeto en el agua?',
        options: ['Cuando su peso es mayor que la fuerza de flotación', 'Cuando la fuerza de flotación es igual al peso del objeto', 'Cuando no hay gravedad', 'Cuando el objeto tiene una masa grande'],
        correct: 1
      },
      {
        question: '¿Cuándo se hunde un objeto en el agua?',
        options: ['Cuando la fuerza de flotación es igual a su peso', 'Cuando el objeto es muy liviano', 'Cuando la fuerza de flotación es menor que el peso del objeto', 'Cuando el empuje es muy grande'],
        correct: 2
      },
      {
        question: 'Si empujas un objeto en dirección opuesta a su movimiento, ¿qué ocurre?',
        options: ['Acelera', 'Flota', 'Desacelera y puede detenerse', 'Su masa aumenta'],
        correct: 2
      },
      {
        question: '¿Qué instrumento usamos para medir la masa de un objeto?',
        options: ['Una regla', 'Un termómetro', 'Una balanza o báscula', 'Un medidor de Newton'],
        correct: 2
      }
    ]
  },

  {
    id: 'empuje-flotacion',
    mepBloque: 'energia',
    title: 'Empuje y Flotación',
    description: 'El empuje o fuerza de flotación es la fuerza que ejerce el agua sobre un objeto sumergido, determinando si flota o se hunde.',
    sections: [
      {
        title: '1. El empuje o fuerza de flotación',
        content: [
          '<p>El <strong>empuje</strong> (también llamado <em>fuerza de flotación</em>) es la fuerza hacia arriba que ejerce el agua sobre un objeto. Actúa en sentido contrario al peso del objeto.</p>',
          '<p>Cuando se coloca un objeto en el agua, ocurre un fenómeno llamado <strong>desplazamiento</strong>: el objeto empuja el agua a un lado al ocupar espacio en ella. El peso del agua desplazada determina la magnitud del empuje.</p>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>💡 Este principio fue descubierto por el científico griego <strong>Arquímedes</strong>: un objeto sumergido en un fluido experimenta un empuje igual al peso del fluido desplazado.</blockquote>'
        ]
      },
      {
        title: '2. ¿Cuándo flota un objeto y cuándo se hunde?',
        content: [
          '<p>Sobre cualquier objeto sumergido en agua actúan <strong>dos fuerzas</strong>:</p>',
          '<ul>' +
            '<li><strong>Peso</strong> (hacia abajo): La gravedad jala el objeto hacia el fondo.</li>' +
            '<li><strong>Empuje</strong> (hacia arriba): El agua empuja el objeto hacia la superficie.</li>' +
          '</ul>',
          '<h3>✅ Fuerzas Equilibradas → FLOTA</h3><p>Un objeto <strong>flota</strong> cuando el empuje es <strong>igual</strong> al peso del objeto. Las fuerzas están en equilibrio.</p>',
          '<h3>❌ Fuerzas Desequilibradas → SE HUNDE</h3><p>Un objeto <strong>se hunde</strong> cuando su peso es <strong>mayor</strong> que el empuje. Las fuerzas no están en equilibrio.</p>',
          '<p><strong>Ejemplo:</strong> Un barco de metal flota porque su forma hueca le permite desplazar una gran cantidad de agua, generando un empuje suficiente para equilibrar su peso. Un clavo de metal se hunde porque desplaza muy poca agua.</p>'
        ]
      },
      {
        title: '3. Densidad y flotación',
        content: [
          '<p>La <strong>densidad</strong> de un objeto también influye en si flota o se hunde:</p>',
          '<ul>' +
            '<li>Si un objeto tiene <strong>menor densidad</strong> que el agua, flota (como la madera).</li>' +
            '<li>Si un objeto tiene <strong>mayor densidad</strong> que el agua, se hunde (como la mayoría de los metales).</li>' +
            '<li>Si la densidad es <strong>igual</strong> a la del agua, el objeto queda suspendido en el agua (como algunos peces que controlan su vejiga natatoria).</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'movimiento-y-rapidez',
    mepBloque: 'energia',
    title: 'Movimiento y Rapidez',
    description: 'El movimiento es el cambio de posición de un objeto respecto a un punto de referencia, y la rapidez mide la distancia recorrida en un tiempo determinado.',
    sections: [
      {
        title: '1. El movimiento',
        content: [
          '<p>El <strong>movimiento</strong> es el cambio de posición que experimenta un objeto en algún lugar. El movimiento depende del tiempo y del <strong>punto de referencia</strong> (el lugar desde donde se observa).</p>',
          '<p><strong>Ejemplo:</strong> Un niño baja por el tobogán. Él está en movimiento porque lo vemos cambiar de lugar. El tobogán está quieto, así que es el punto de referencia. Sabemos que el niño se mueve porque el tobogán no lo hace.</p>'
        ]
      },
      {
        title: '2. La rapidez',
        content: [
          '<p>La <strong>rapidez</strong> es una característica del movimiento y se refiere a la distancia recorrida en un tiempo determinado. Entre más rápido sea un objeto, mayor distancia puede recorrer.</p>',
          '<ul>' +
            '<li>Se mide en <strong>metros por segundo (m/s)</strong> o <strong>kilómetros por hora (km/h)</strong>.</li>' +
          '</ul>',
          '<p><strong>Ejemplo:</strong> Ana corre 100 metros en 20 segundos; Luis corre 100 metros en 10 segundos. Aunque corrieron la misma distancia, Luis llegó primero porque fue más rápido. Luis tiene más rapidez que Ana, porque recorrió la misma distancia en menos tiempo.</p>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'><strong>Fórmula de rapidez:</strong> Rapidez = Distancia ÷ Tiempo</blockquote>'
        ]
      },
      {
        title: '3. Energía cinética y potencial',
        content: [
          '<ul>' +
            '<li><strong>Energía cinética:</strong> Es la energía que tiene un cuerpo cuando está en movimiento. Ejemplos: una bicicleta rodando, una pelota pateada, un niño deslizándose por el tobogán. Cuanto más rápido se mueve un objeto, más energía cinética tiene.</li>' +
            '<li><strong>Energía potencial:</strong> Es la energía almacenada que tiene un cuerpo por estar en una posición elevada o por tener tensión. Ejemplos: una pelota en lo alto de una colina, un resorte estirado, un columpio en el punto más alto. Es como la energía "guardada" que puede convertirse en movimiento.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'transmision-del-calor',
    mepBloque: 'energia',
    title: 'Transmisión del Calor',
    description: 'El calor es energía que se transfiere entre cuerpos de diferente temperatura mediante conducción, convección o radiación.',
    sections: [
      {
        title: '1. ¿Qué es el calor?',
        content: [
          '<p>El <strong>calor</strong> es energía que se manifiesta cuando un cuerpo de mayor temperatura le pasa su energía a otro de menor temperatura. Es originada por los movimientos vibratorios de los átomos y las moléculas que forman los cuerpos.</p>'
        ]
      },
      {
        title: '2. Formas de transmisión del calor',
        content: [
          '<ul>' +
            '<li><strong>Conducción:</strong> Es cuando el calor se pasa de una parte caliente a una parte fría a través de un material sólido. Ejemplo: una cuchara de metal en chocolate caliente.</li>' +
            '<li><strong>Convección:</strong> Ocurre en líquidos y gases. El calor sube y el frío baja, creando corrientes de convección. Ejemplo: agua calentándose en una olla.</li>' +
            '<li><strong>Radiación:</strong> Es cuando el calor se transmite por medio de ondas electromagnéticas, sin necesitar un medio material. Ejemplo: el calor del Sol que llega a la Tierra.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'la-luz',
    mepBloque: 'energia',
    title: 'La Luz',
    description: 'La luz es una forma de energía que nos permite ver los objetos y puede sufrir fenómenos como reflexión y refracción.',
    sections: [
      {
        title: '1. ¿Qué es la luz y cómo vemos?',
        content: [
          '<p>La <strong>luz</strong> es una forma de energía que nos permite ver los objetos. Sin luz, no podríamos ver nada.</p>',
          '<p><strong>¿Cómo vemos los objetos?</strong> Vemos los objetos porque la luz rebota en ellos y entra en nuestros ojos. Por ejemplo, cuando la luz del sol choca con una pelota, esa luz llega a nuestros ojos y por eso la vemos.</p>'
        ]
      },
      {
        title: '2. Los colores y la descomposición de la luz',
        content: [
          '<p>Los objetos tienen color porque <strong>reflejan unas partes de la luz y absorben otras</strong>. Una manzana es roja porque refleja el color rojo y absorbe los demás colores.</p>',
          '<p>La luz blanca está formada por todos los colores juntos. Cuando pasa por un <strong>prisma</strong> o una gota de agua, se separa en los colores del arcoíris: rojo, naranja, amarillo, verde, azul, añil y violeta.</p>',
          '<p><strong>Tipos de materiales según el paso de la luz:</strong></p>',
          '<ul>' +
            '<li><strong>Cuerpos transparentes:</strong> Dejan pasar la luz completamente. Permiten ver claramente. Ejemplos: el aire, el cristal de una ventana.</li>' +
            '<li><strong>Cuerpos translúcidos:</strong> Dejan pasar la luz parcialmente. No permiten ver con claridad. Ejemplo: cristal esmerilado.</li>' +
            '<li><strong>Cuerpos opacos:</strong> No dejan pasar la luz. No permiten ver los objetos detrás.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Fenómenos de la luz y sus aplicaciones',
        content: [
          '<p><strong>Reflexión de la luz:</strong> Es el cambio de dirección y sentido que sufren los rayos luminosos cuando chocan contra la superficie de un medio distinto. Los cuerpos que no producen luz propia pueden ser vistos gracias a que reflejan la luz. Ejemplo: un espejo.</p>',
          '<p><strong>Refracción de la luz:</strong> Se produce cuando la rapidez de un rayo de luz cambia al pasar de un medio a otro. Ejemplo: cuando se coloca un lápiz en un vaso de agua transparente, parece que el lápiz se dobla.</p>',
          '<p><strong>Aplicaciones cotidianas de la luz:</strong> anteojos, lupa, microscopio, telescopio, rayos láser, espejo.</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'clases-de-energia-tipos',
    mepBloque: 'energia',
    title: 'Clases de Energía',
    description: 'Existen diversas formas de energía en la naturaleza, cada una con características, fuentes y aplicaciones distintas.',
    sections: [
      {
        title: '1. Tipos de energía',
        content: [
          '<ul>' +
            '<li><strong>Energía hidroeléctrica:</strong> Se genera al transformar la fuerza del agua en energía eléctrica. Es la fuente de energía eléctrica más utilizada en Costa Rica.</li>' +
            '<li><strong>Energía lumínica (luminosa):</strong> Se produce por las ondas de la luz. Fuentes naturales: Sol, fuego, luciérnagas. Fuentes artificiales: bombillo, candela.</li>' +
            '<li><strong>Energía calórica:</strong> Energía en forma de calor producida por el movimiento de las moléculas. Se usa para cocinar, secar ropa, fundir metales. Fuentes naturales: Sol, fuego, magma. Fuentes artificiales: cocina, combustión de madera o carbón.</li>' +
            '<li><strong>Energía química:</strong> Se produce en una reacción química. Fuentes: combustibles fósiles, baterías.</li>' +
            '<li><strong>Energía nuclear:</strong> Almacenada en el núcleo de los átomos; se libera durante su desintegración. Se puede usar para producir electricidad.</li>' +
            '<li><strong>Energía geotérmica:</strong> Proviene del vapor de la roca caliente debajo de los volcanes. En Costa Rica existe el Proyecto Geotérmico Miravalles.</li>' +
            '<li><strong>Energía mareomotriz:</strong> Se produce gracias al movimiento de las mareas, moviendo turbinas que generan electricidad.</li>' +
            '<li><strong>Energía eólica:</strong> Se obtiene aprovechando la fuerza del viento mediante aerogeneradores.</li>' +
            '<li><strong>Energía sísmica:</strong> Se genera cuando ocurre un sismo o terremoto.</li>' +
            '<li><strong>Energía solar:</strong> Energía renovable proveniente de la radiación solar. Se usa para producir electricidad mediante paneles solares.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Transformaciones de la energía',
        content: [
          '<p>La energía puede transformarse de un tipo a otro. Algunos ejemplos:</p>',
          '<ul>' +
            '<li>Energía eléctrica → Energía calórica (plancha)</li>' +
            '<li>Energía solar → Energía química (fotosíntesis)</li>' +
            '<li>Energía eólica → Energía eléctrica (aerogenerador)</li>' +
            '<li>Energía química → Energía cinética (motor de vehículo)</li>' +
            '<li>Energía eléctrica → Energía sonora (parlante)</li>' +
            '<li>Energía eléctrica → Energía lumínica (bombillo)</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'energia-electrica',
    mepBloque: 'energia',
    title: 'Energía Eléctrica y Circuitos',
    description: 'La energía eléctrica se manifiesta en la naturaleza y en la vida cotidiana, y se transmite a través de circuitos eléctricos.',
    sections: [
      {
        title: '1. La energía eléctrica',
        content: [
          '<p>La <strong>energía eléctrica</strong> se manifiesta en la naturaleza de diversas maneras, por ejemplo, en los rayos durante las tormentas eléctricas o en las descargas de las anguilas eléctricas. En la vida cotidiana la encontramos en electrodomésticos, bombillos, autos y trenes eléctricos.</p>',
          '<ul>' +
            '<li><strong>Materiales conductores:</strong> Permiten el paso de la electricidad; sus electrones se mueven libremente. Ejemplos: cobre, aluminio, hierro, plata. Se usan para fabricar cables y partes internas de aparatos eléctricos.</li>' +
            '<li><strong>Materiales aislantes:</strong> No permiten el paso de electricidad; protegen a las personas de descargas eléctricas. Ejemplos: madera seca, goma, brea. Se usan para cubrir cables y fabricar mangos de herramientas.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Cargas eléctricas y circuitos',
        content: [
          '<p>Las <strong>cargas eléctricas</strong> son partículas que ejercen fuerzas atractivas y repulsivas. Existen cargas positivas (<strong>protones</strong>) y cargas negativas (<strong>electrones</strong>). Cargas con el mismo signo se repelen; cargas con diferente signo se atraen.</p>',
          '<p>Un <strong>circuito eléctrico</strong> es un conjunto de elementos conectados entre sí por los que puede circular una corriente eléctrica. Sus elementos son: generador, hilos conductores, receptor (bombillo, motor) e interruptor.</p>',
          '<ul>' +
            '<li><strong>Circuito en serie:</strong> Los componentes están conectados en una sola rama.</li>' +
            '<li><strong>Circuito en paralelo:</strong> Los componentes están conectados en varias ramas.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Corriente alterna y corriente continua',
        content: [
          '<ul>' +
            '<li><strong>Corriente alterna (CA):</strong> Invierte el sentido de circulación de las cargas eléctricas según una frecuencia determinada. La red de suministro eléctrico usa corriente alterna porque puede transferir grandes cantidades de energía a lo largo de distancias más largas.</li>' +
            '<li><strong>Corriente continua (CC):</strong> Fluye de forma constante en una dirección, como en una linterna o en aparatos con baterías. Este tipo de corriente no puede viajar grandes distancias.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'energias-limpias',
    mepBloque: 'energia',
    title: 'Energías Limpias y Renovables',
    description: 'Las energías limpias son fuentes renovables que no generan contaminantes, en contraste con las energías no renovables.',
    sections: [
      {
        title: '1. Energías limpias vs. energías contaminantes',
        content: [
          '<p><strong>Energías limpias (renovables):</strong></p>',
          '<ul>' +
            '<li>Las fuentes renovables se reponen constantemente.</li>' +
            '<li>No producen emisiones de gases contaminantes.</li>' +
            '<li>No generan sustancias tóxicas en el suelo y el agua.</li>' +
            '<li>Ejemplos: energía solar, energía eólica, energía hidroeléctrica, energía geotérmica, energía de biomasa.</li>' +
          '</ul>',
          '<p><strong>Energías contaminantes (no renovables):</strong></p>',
          '<ul>' +
            '<li>Las fuentes no renovables se agotan rápidamente.</li>' +
            '<li>Producen altas emisiones de gases contaminantes como CO₂.</li>' +
            '<li>Generan sustancias tóxicas que contaminan el suelo y el agua.</li>' +
            '<li>Ejemplos: petróleo, gas natural, carbón, energía nuclear.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Principales energías limpias en Costa Rica',
        content: [
          '<ul>' +
            '<li><strong>Energía hidroeléctrica:</strong> La más utilizada en Costa Rica. Aprovecha la fuerza del agua para generar electricidad.</li>' +
            '<li><strong>Energía geotérmica:</strong> Aprovecha el calor del interior de la Tierra. En Costa Rica existe el Proyecto Geotérmico Miravalles.</li>' +
            '<li><strong>Energía eólica:</strong> Utiliza la fuerza del viento mediante aerogeneradores.</li>' +
            '<li><strong>Energía solar:</strong> Aprovecha la radiación del sol mediante paneles solares. Es limpia, no contaminante e inagotable.</li>' +
          '</ul>',
          '<blockquote style=\'background-color: var(--primary-light); padding: 1rem; border-left: 4px solid var(--primary);\'>Costa Rica genera más del 98% de su electricidad a partir de fuentes renovables, siendo un ejemplo mundial en el uso de energías limpias.</blockquote>'
        ]
      }
    ],
    quiz: []
  },

  // ─── GEOFÍSICA ────────────────────────────────────────────

  {
    id: 'estructura-interna-tierra',
    mepBloque: 'geofisica',
    title: 'Estructura Interna de la Tierra',
    description: 'La Tierra está formada por capas internas (corteza, manto, núcleo) y capas externas (litosfera, hidrosfera, atmósfera, biosfera).',
    sections: [
      {
        title: '1. Estructura interna de la Tierra',
        content: [
          '<ul>' +
            '<li><strong>Corteza:</strong> La capa más externa y delgada. Donde vivimos. Está formada por rocas y continentes.</li>' +
            '<li><strong>Manto:</strong> Capa intermedia compuesta por rocas calientes y densas. Ocurren movimientos de placas tectónicas.</li>' +
            '<li><strong>Núcleo externo:</strong> Capa líquida formada por hierro y níquel. Genera el campo magnético de la Tierra.</li>' +
            '<li><strong>Núcleo interno:</strong> Es sólido debido a la alta presión. Formado por metales pesados como hierro y níquel.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Estructura externa de la Tierra',
        content: [
          '<ul>' +
            '<li><strong>Litosfera:</strong> Parte sólida de la superficie terrestre. Formada por la corteza y la parte superior del manto. Incluye montañas, valles, suelos y fondos marinos.</li>' +
            '<li><strong>Hidrosfera:</strong> Conjunto de todas las aguas del planeta. Incluye océanos, ríos, lagos, glaciares y aguas subterráneas.</li>' +
            '<li><strong>Atmósfera:</strong> Capa de gases que rodea la Tierra. Nos protege de los rayos solares y permite la vida al contener oxígeno y regular la temperatura.</li>' +
            '<li><strong>Biosfera:</strong> Zona donde existe vida: animales, plantas, personas y microorganismos. Interactúa con la litosfera, la atmósfera y la hidrosfera.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'tectonica-vulcanismo-terremotos',
    mepBloque: 'geofisica',
    title: 'Tectónica de Placas, Volcanes y Terremotos',
    description: 'El relieve terrestre cambia por fuerzas internas como el tectonismo, el vulcanismo y los sismos, y fuerzas externas como el agua, el viento y el hielo.',
    sections: [
      {
        title: '1. Fuerzas internas que modifican el relieve',
        content: [
          '<ul>' +
            '<li><strong>Tectonismo:</strong> Movimiento de placas tectónicas que forma montañas y fallas geológicas.</li>' +
            '<li><strong>Vulcanismo:</strong> Formación de volcanes y salida de magma hacia la superficie. Costa Rica, al estar en el "Cinturón de Fuego del Pacífico", tiene varios volcanes activos.</li>' +
            '<li><strong>Sismos o terremotos:</strong> Movimientos del suelo que deforman el terreno. Se producen por la liberación brusca de energía acumulada en las placas tectónicas.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Fuerzas externas que modifican el relieve',
        content: [
          '<ul>' +
            '<li><strong>Agua (ríos, lluvias, mares):</strong> Erosiona y transporta sedimentos.</li>' +
            '<li><strong>Viento:</strong> Desgasta y moldea zonas áridas.</li>' +
            '<li><strong>Hielo (glaciares):</strong> Desgasta el suelo y forma valles glaciares.</li>' +
            '<li><strong>Temperatura:</strong> Provoca dilatación y fractura de las rocas.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'movimientos-tierra-luna',
    mepBloque: 'geofisica',
    title: 'Movimientos de la Tierra y la Luna',
    description: 'La Tierra realiza movimientos de rotación y traslación, y la Luna también tiene sus propios movimientos que causan las fases lunares.',
    sections: [
      {
        title: '1. Movimientos de la Tierra',
        content: [
          '<ul>' +
            '<li><strong>Rotación:</strong> La Tierra gira sobre su propio eje. Dura aproximadamente <strong>24 horas</strong>. Causa el día y la noche.</li>' +
            '<li><strong>Traslación:</strong> La Tierra gira alrededor del Sol. Dura <strong>365 días y 6 horas</strong>. Causa las estaciones del año: verano, otoño, invierno y primavera.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Movimientos de la Luna',
        content: [
          '<ul>' +
            '<li><strong>Rotación lunar:</strong> La Luna gira sobre su propio eje. Dura aproximadamente <strong>28 días</strong>. Por eso siempre vemos la misma cara de la Luna desde la Tierra.</li>' +
            '<li><strong>Traslación lunar:</strong> La Luna gira alrededor de la Tierra. Dura también <strong>28 días</strong>. Causa las fases lunares.</li>' +
            '<li><strong>Revolución conjunta:</strong> La Luna acompaña a la Tierra en su movimiento alrededor del Sol.</li>' +
          '</ul>'
        ]
      },
      {
        title: '3. Fases de la Luna',
        content: [
          '<p>La Luna no emite luz propia, sino que refleja la luz del Sol. A medida que gira alrededor de la Tierra, observamos diferentes formas iluminadas. El ciclo completo dura aproximadamente <strong>28 días</strong>.</p>',
          '<ul>' +
            '<li><strong>Luna nueva:</strong> No se ve desde la Tierra porque el lado iluminado está opuesto a nosotros.</li>' +
            '<li><strong>Cuarto creciente:</strong> La Luna casi no se ve al inicio; poco a poco se aprecia en forma de "D".</li>' +
            '<li><strong>Luna llena:</strong> Se ve completamente iluminada. Ocurre cuando la Tierra está entre el Sol y la Luna.</li>' +
            '<li><strong>Cuarto menguante:</strong> Se ve una parte en forma de "C"; cada día se aprecia menos.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'universo-y-sistema-solar',
    mepBloque: 'geofisica',
    title: 'El Universo y el Sistema Solar',
    description: 'El Sistema Solar es un conjunto de cuerpos celestes que giran alrededor del Sol, dentro del vasto universo formado por galaxias, estrellas y planetas.',
    sections: [
      {
        title: '1. El Sistema Solar',
        content: [
          '<p>El <strong>Sistema Solar</strong> es un conjunto de cuerpos celestes que giran alrededor del Sol. Sus principales componentes son:</p>',
          '<ul>' +
            '<li><strong>Sol:</strong> Es una estrella y el centro del Sistema Solar. Tiene la mayor masa, lo que genera la gravedad que mantiene a los planetas en órbita.</li>' +
            '<li><strong>Planetas:</strong> Giran alrededor del Sol. Son ocho: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.</li>' +
            '<li><strong>Lunas o satélites naturales:</strong> Giran alrededor de los planetas (como la Luna alrededor de la Tierra).</li>' +
            '<li><strong>Asteroides y cometas:</strong> Pequeños cuerpos rocosos o de hielo que también orbitan el Sol.</li>' +
            '<li><strong>Cinturón de asteroides:</strong> Se encuentra entre Marte y Júpiter.</li>' +
          '</ul>'
        ]
      },
      {
        title: '2. Los cometas',
        content: [
          '<p>Los <strong>cometas</strong> están formados por hielo, polvo y rocas. Se les conoce como "bolas de nieve sucia". Orbitan alrededor del Sol en trayectorias muy alargadas.</p>'
        ]
      },
      {
        title: '3. El Universo',
        content: [
          '<p>El <strong>Universo</strong> es todo lo que existe: estrellas, planetas, galaxias, polvo, energía y espacio.</p>',
          '<ul>' +
            '<li><strong>Galaxias:</strong> Conjuntos gigantes de estrellas. Nuestra galaxia se llama <strong>Vía Láctea</strong>.</li>' +
            '<li><strong>Estrellas:</strong> Cuerpos que emiten luz y calor, como el Sol. Hay millones de sistemas solares más allá del nuestro.</li>' +
            '<li><strong>Nebulosas:</strong> Nubes de gas y polvo donde nacen nuevas estrellas.</li>' +
          '</ul>'
        ]
      }
    ],
    quiz: []
  }

];
