// src/data/lessons/espanol.js
import { sonnyEspanolLesson } from './sonnyEspanol';

export const espanolLessons = [
  sonnyEspanolLesson,
  // ─── COMPRENSIÓN LECTORA ─────────────────────────────────
  {
    id: 'relaciones-causa-efecto',
    mepBloque: 'comprension-lectora',
    title: 'Relaciones de Causa y Efecto',
    description: 'Aprende a identificar las relaciones de causa y efecto en textos informativos, científicos e históricos usando conectores causales y consecutivos.',
    sections: [
      {
        title: '¿Qué son las relaciones de causa y efecto?',
        content: [
          '<p>Las relaciones de <strong>causa y efecto</strong> en textos no literarios son conexiones que explican por qué ocurre algo (causa) y qué sucede como resultado (efecto).</p>',
          '<p>Una <strong>causa</strong> es la razón por la que ocurre un hecho. El resultado de esa causa se llama <strong>efecto</strong>.</p>',
          '<p>Este tipo de relación es muy común en textos informativos, científicos, históricos, periodísticos e instructivos.</p>',
          '<h3>Ejemplo sencillo</h3>',
          '<p><em>Texto:</em> "La carretera estaba mojada, <strong>por eso</strong> hubo muchos accidentes."</p>',
          '<ul>',
          '<li><strong>Causa:</strong> La carretera estaba mojada.</li>',
          '<li><strong>Efecto:</strong> Hubo muchos accidentes.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Conectores causales y consecutivos',
        content: [
          '<p>Se pueden reconocer las relaciones de causa y efecto gracias a <strong>conectores causales y consecutivos</strong>:</p>',
          '<h3>Palabras clave que indican causa</h3>',
          '<ul>',
          '<li>Porque</li>',
          '<li>Debido a</li>',
          '<li>A causa de</li>',
          '<li>Ya que</li>',
          '<li>Como resultado de</li>',
          '<li>Dado que</li>',
          '</ul>',
          '<h3>Palabras clave que indican efecto</h3>',
          '<ul>',
          '<li>Por eso</li>',
          '<li>Como consecuencia</li>',
          '<li>Entonces</li>',
          '<li>Así que</li>',
          '<li>De modo que</li>',
          '<li>En consecuencia</li>',
          '<li>Por lo tanto</li>',
          '</ul>'
        ]
      },
      {
        title: '¿Por qué son importantes?',
        content: [
          '<p>Entender las relaciones de causa y efecto ayuda a:</p>',
          '<ul>',
          '<li>Comprender mejor el mensaje del texto.</li>',
          '<li>Explicar procesos, hechos o situaciones.</li>',
          '<li>Establecer conexiones lógicas entre ideas.</li>',
          '</ul>',
          '<p>Al leer un texto, busca los conectores causales para encontrar la <strong>causa</strong>, y los conectores consecutivos para encontrar el <strong>efecto</strong>.</p>'
        ]
      }
    ],
    quiz: [
      {
        question: 'Lea el siguiente texto:\n«¿Desde cuándo existe el chocolate? Esta pregunta es más que un acertijo infantil. El tema ha sido, durante mucho tiempo, objeto de interés de biólogos y antropólogos que investigan cómo y por qué llegó a ser tan importante el cacao para las civilizaciones antiguas de Mesoamérica, como los mayas y aztecas, quienes incluso utilizaban chocolate en ritos religiosos y el cacao como moneda.\nExisten pruebas arqueológicas de que el cacao se utilizó por primera vez en Mesoamérica hace unos 3 900 años.»\nTomado de: National Geographic Latinoamérica. (2024).\n¿Cuál opción presenta la idea fundamental del texto anterior?',
        options: ['Los mayas y aztecas consumían bebidas hechas a partir del cacao.', 'El ser humano disfruta del chocolate gracias a los mesoamericanos.', 'El cacao ha sido utilizado por las civilizaciones desde la antigüedad.', 'Los aztecas usaban el cacao exclusivamente como moneda en rituales.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El Desierto de Atacama, situado en el norte de Chile, es el más árido del planeta. Sin embargo, en ocasiones excepcionales este entorno extremo da lugar a un fenómeno natural sorprendente conocido como desierto florido. Tras precipitaciones inusuales y abundantes, el suelo desértico —normalmente estéril— se cubre de una gran variedad de flores silvestres. Las autoridades locales recuerdan la importancia de admirar este patrimonio natural sin dañarlo, ya que la vegetación emergente es muy frágil.»\nTomado de: Loreto, C. (2024).\n¿Cuál es la idea fundamental del texto anterior?',
        options: ['Las autoridades locales han declarado patrimonio natural el desierto de Atacama.', 'Las inusuales lluvias abundantes provocan una floración silvestre en el desierto de Atacama.', 'Los fenómenos climáticos reactivan temporalmente la diversidad de flora y fauna en el norte de Chile.', 'El desierto de Atacama es el lugar más seco y árido de todo el continente americano.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Hace muchos miles de millones de años una gran nube de polvo flotaba en el Universo. Ese polvo se fue juntando en grupos y formó el Sol, los planetas y todos los astros que hay en el Sistema Solar. Se considera que la Tierra tiene unos 4 mil 500 millones de años de haberse formado. Al principio era una masa muy caliente. Pasaron muchos millones de años y la Tierra se fue enfriando. Se formaron los mares y la tierra firme sobresalió sobre el agua.»\nTomado de: Escuela para todos. (2010).\n¿Cuál es la idea fundamental del texto anterior?',
        options: ['La Tierra se formó a partir de muchos cambios, durante millones de años.', 'La Tierra fue constantemente bombardeada por rocas que caían del espacio.', 'Las fuertes tormentas que azotaron la Tierra hicieron que se formaran los mares.', 'El Sistema Solar es el resultado de una gran explosión de polvo cósmico hace millones de años.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Cuando se piensa en un organismo vivo que figura entre los más grandes del mundo, vienen a la mente animales de toneladas como la ballena azul o enormes cuadrúpedos como el elefante africano. Pero, según unos científicos que estudian los bosques del este de Oregón, ese título es para un hongo. El organismo identificado es Armillaria ostoyae, también conocido como hongo de la miel. La publicación detalla que el hongo Armillaria ostoyae ocupa un espacio de unas 965 hectáreas o casi 10 kilómetros cuadrados de suelo.»\nTomado de: National Geographic. (2024).\n¿Cuál es la idea fundamental del texto anterior?',
        options: ['El organismo vivo más grande del mundo es el hongo de la miel.', 'El hongo Armillaria ostoyae se conoce también como hongo de la miel.', 'Los bosques de Oregón tienen el organismo vivo más grande del mundo.', 'La ballena azul es el mamífero más grande conocido en el planeta Tierra.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El Sol es la estrella de nuestro sistema solar. Su gravedad mantiene a la Tierra y a nuestros vecinos planetarios en su órbita. Con un diámetro de 1,4 millones de kilómetros, es el objeto más grande de nuestro sistema solar. En la Tierra, su influencia se siente en el clima, las estaciones, el tiempo y más. El Sol está formado por gases de hidrógeno y helio.»\nTomado de: Nasa kids. (2024).\nLa idea fundamental del texto anterior destaca que el Sol como estrella del sistema solar',
        options: ['afecta el clima, las estaciones y el paso del tiempo en la Tierra.', 'posee un núcleo compuesto por gases que crean el calor y la luz.', 'mantiene con su gravedad en su órbita a la Tierra y demás planetas.', 'es la estrella más grande de todo el universo conocido por los científicos.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El desierto del Sahara, en África, es el desierto más grande, seco y caliente del mundo. Ese lugar hace millones de años estaba cubierto por hielo, pues esas tierras estaban entonces cerca del Polo Sur. Como en las zonas cercanas a los polos el Sol llega con menos fuerza, esos lugares son muy fríos. Pero poco a poco, por el movimiento de los continentes, África se fue alejando del polo y el clima del Sahara cambió.»\nTomado de: Escuela para todos. (2009).\n¿Cuál es una idea complementaria presente en el texto anterior?',
        options: ['Las zonas menos calientes del Sahara se cubren de hielo en invierno.', 'Los lugares cercanos a los polos son más fríos porque llega menos sol.', 'El desierto del Sahara estaba cerca del Polo Norte, hace millones de años.', 'África es actualmente el continente más caliente del planeta Tierra.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El delfín rosado, conocido localmente como bufeo, es la especie más grande de los delfines de río, con una longitud máxima de 2,5 metros de largo. Aunque se le llama delfín rosado, los adultos pueden ser de color rosa o gris y los recién nacidos son siempre grises. Es el único delfín que tiene el cuello flexible, que se puede mover de lado a lado.»\nTomado de: Tirira, D. (2017).\n¿Cuál es una idea complementaria del texto anterior?',
        options: ['Los delfines recién nacidos son de color rosado.', 'El delfín rosado es la especie más grande de los delfines de río.', 'El cuello de los delfines rosados es flexible y les permite navegar mejor.', 'Los delfines de río son más inteligentes que los delfines de mar abierto.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Si realizamos un repaso por todas las actividades que realizamos a lo largo de un día seremos conscientes de que la energía eléctrica está presente en la mayoría de ellas. Por un lado, algunas fuentes de energía se agotan, es decir, existen de forma limitada en la naturaleza por lo que se consideran no renovables. Además, el modo de transportar, extraer y consumir esta energía también tiene su impacto en el medioambiente.»\nTomado de: Endesa Fundación. (2024).\n¿Cuál opción identifica una idea complementaria presente en el texto anterior?',
        options: ['El ahorro eléctrico beneficia la economía de los hogares.', 'La producción de energía eléctrica es un recurso inagotable.', 'La forma en que se consume energía altera el medioambiente.', 'La energía solar es la alternativa más limpia para las familias.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Los asteroides son restos de la formación de nuestro sistema solar. Nuestro sistema solar se originó hace unos 4 600 millones de años cuando una gran nube de gas y polvo colapsó. Los objetos del cinturón de asteroides nunca tuvieron la oportunidad de integrarse en planetas, ya que son restos de aquella época lejana en la que se formaron los planetas.»\nTomado de: Space Place. (2024).\n¿Cuál opción identifica una idea complementaria presente en el texto anterior?',
        options: ['El sistema solar se originó hace unos 4 600 millones de años.', 'Los asteroides son restos que se desprenden de los planetas.', 'La mayor parte de los asteroides se localiza alrededor del Sol.', 'Los cometas y los asteroides se formaron de la misma manera.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El cerebro depende en gran medida de un equilibrio adecuado de líquidos para funcionar correctamente. "Cuando el cuerpo está deshidratado disminuye el suministro de sangre al cerebro, lo que puede afectar negativamente el rendimiento cognitivo y la función cerebral en general. La deshidratación puede llevar a dificultades en la concentración, la memoria, el procesamiento de información y la toma de decisiones." Además, el efecto dañino en el cerebro no se limita a grupos etarios específicos.»\nTomado de: Ziccardi, V. (2023).\nEn el texto anterior, una idea complementaria destaca que la deshidratación',
        options: ['daña principalmente el cerebro de los adultos mayores y niños.', 'interfiere constantemente con todas las funciones del organismo.', 'puede provocar dificultades en procesos mentales y la toma de decisiones.', 'produce daños irreversibles en todos los órganos del cuerpo humano.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«"Hay una guerra en las calles ocasionada por el estado actual de agresividad de la mayoría de la gente", dice Esteban Arrieta, un profesional que utiliza su motocicleta cada día para ir a su trabajo. Hay personas que salen tarde de sus casas en las mañanas, por ejemplo, y entonces con el estrés que les da por tratar de llegar a tiempo suscitan una verdadera guerra en las calles y carreteras.»\nTomado de: Juncos, C. y Sossa, R. (2017).\nSegún el texto anterior, ¿cuál es una causa del estrés de las personas en las calles y carreteras?',
        options: ['El exceso de velocidad en sus vehículos.', 'La necesidad de llegar a tiempo a su destino.', 'La gran cantidad de imprudencias de los peatones.', 'El uso de motocicletas como medio de transporte cotidiano.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El desarrollo tecnológico de las últimas décadas se caracteriza por la integración de áreas como la robótica, la inteligencia artificial y la nanotecnología. Este conjunto de nuevas tecnologías innovadoras ha abierto la posibilidad de automatizar tareas que antes se consideraban difíciles de abordar tecnológicamente. Este progreso tecnológico plantea desafíos y riesgos, ya que diversas tareas y ocupaciones corren el peligro de ser reemplazadas o transformadas de manera significativa.»\nTomado de: Espíndola, E. y Suárez, J. (2023).\nSegún el texto anterior, ¿cuál es la causa de la automatización de las tareas en la vida cotidiana y en el mundo laboral?',
        options: ['El progreso social.', 'La nanotecnología.', 'El avance tecnológico.', 'La reducción de los costos de producción.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«La producción de color en los insectos está influida por factores ambientales como la temperatura, las precipitaciones y la luz solar. En particular, la temperatura tiene un efecto directo en la generación de pigmentos. Por ejemplo, los ambientes más fríos favorecen la producción de melanina, lo que da lugar a insectos más oscuros. Este color les permite absorber más luz y, por ende, acumular más calor.»\nTomado de: Santillo, L. (2024).\nSegún el texto anterior, ¿cuál es la causa de que los insectos de zonas frías sean más oscuros?',
        options: ['La exposición constante a la luz solar.', 'La disminución de luz solar en climas cálidos.', 'La estimulación de la producción de melanina.', 'La adaptación genética heredada de generaciones anteriores.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Los historiadores creen que los incas llegaron al valle donde más tarde construirían su capital, Cusco, alrededor del año 1100. Era un lugar difícil para vivir: la lluvia no caía con frecuencia, por lo que era difícil cultivar. Eso significaba que los grupos a menudo luchaban por las mejores tierras cerca de los ríos.»\nTomado de: National Geographic Kids. (2022).\nSegún el texto anterior, ¿cuál fue la causa por la que los incas luchaban por las mejores tierras cerca de los ríos?',
        options: ['La guerra civil iniciada por dos hermanos descontentos.', 'Las dificultades para el cultivo debido a la escasez de lluvias.', 'El deseo de controlar el valle del Cusco alrededor del año 1300.', 'La necesidad de expandir el territorio para crear un gran imperio.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El emperador es el único pingüino que se atreve a criar en invierno. La razón de elegir el invierno para reproducirse tiene que ver con las duras dificultades del clima. Cuando varios miles de polluelos salen de sus huevos en una colonia de pingüinos, requieren toneladas de peces, calamares y camarones para alimentarse. Y resulta que esas presas solo están disponibles en primavera. Como incubar un huevo precisa cuatro meses, eso implica que deben empezar en invierno.»\nTomado de: Rivera, L. (2024).\nSegún el texto anterior, ¿cuál es la causa de que el pingüino emperador prefiera el invierno para incubar sus huevos?',
        options: ['Evita la presencia de depredadores marinos.', 'Aprovecha el mar congelado como un escudo protector.', 'Garantiza que en primavera podrá alimentar a sus polluelos.', 'El invierno ofrece temperaturas más estables para incubar.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El Niño es un patrón climático. En los años de El Niño, las aguas del océano a lo largo de América del Sur y California se calientan por encima de las temperaturas normales. Muchas nubes de lluvia se forman sobre esta parte cálida del océano y se mueven hacia el interior, arrojando más lluvia de lo habitual en América del Sur y Central y en los Estados Unidos. El Niño es una condición que a veces ocurre en el océano Pacífico, pero es tan grande que afecta el clima en todo el mundo.»\nTomado de: Space Place. (2023).\nSegún el texto anterior, ¿cuál es el efecto del fenómeno denominado El Niño?',
        options: ['Altera el clima en todo el mundo.', 'Llueve menos en América Central.', 'Baja la temperatura en el mar Caribe.', 'Produce sequías en la costa del Pacífico.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El aire de la Tierra se acumula en más cantidad en las bajuras, pero en las partes más altas o cerros hay menos aire, es decir, es más ralo. Al ser más ralo deja escapar parte de ese calor que devuelve el suelo. Y al irse ese calor, todo es más frío. Por eso mientras más alta sea una zona o cerro, el clima es más frío.»\nTomado de: Escuela para todos. (2010).\nSegún el texto anterior, ¿cuál es el efecto de que una zona o cerro tenga más altura?',
        options: ['El calor aumenta.', 'El clima es más frío.', 'Hay mucho más aire.', 'La presión atmosférica sube considerablemente.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El cuerpo humano conduce muy bien la electricidad. Eso significa que la electricidad pasa con mucha facilidad a través de nuestro cuerpo. El contacto directo con una corriente eléctrica puede ser mortal. Aunque algunas quemaduras eléctricas parecen menores, es posible que aún haya daño interno grave, sobre todo en el corazón, los músculos o el cerebro.»\nTomado de: Medline Plus. (2023).\nSegún el texto anterior, un efecto de la corriente eléctrica en las personas consiste en',
        options: ['provocar lesiones internas.', 'ser expulsado del vehículo.', 'producir cosquilleo corporal.', 'mejorar la conductividad nerviosa del cuerpo.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Practicar deporte es muy importante para el ser humano, sea cual sea su edad. Consiste en dedicar una parte de nuestro tiempo a realizar una actividad física. El deporte tiene muchos beneficios. Nos ayuda a fortalecer los músculos y los huesos, y en general mejora nuestra condición física y el aspecto de nuestro cuerpo. Además, hacer ejercicio nos entretiene y nos relaja.»\nTomado de: Mundo Primaria. (2023).\nSegún el texto anterior, ¿cuál es un efecto de practicar un deporte?',
        options: ['Eleva la competitividad para vencer a los rivales.', 'Mejora la condición física y el aspecto del cuerpo.', 'Facilita la relajación sin requerir un esfuerzo físico continuo.', 'Garantiza el éxito académico en los estudiantes deportistas.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«─Sí; quería que aprendieran cómo el bienestar de todos depende de que cada una haga fielmente su parte. ¿No piensan que es más agradable ayudarse unas a otras y tomarse algún trabajo y molestia para que el hogar sea cómodo? El trabajo es saludable y hay bastante para todas; nos libra del aburrimiento y de la malicia, es bueno para la salud y el espíritu.»\nTomado de: Mujercitas.\n¿Cuál es el tema tratado en el texto anterior?',
        options: ['La obediencia obligatoria a las madres.', 'La ayuda a las hijas para que sean mejores.', 'El valor del trabajo en la vida de las personas.', 'La importancia de dividir las tareas del hogar equitativamente.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Había una zorra que nunca había visto un león. La puso el destino un día delante de la real fiera. Y como era la primera vez que le veía, sintió un miedo espantoso y se alejó tan rápido como pudo. Al encontrar al león por segunda vez, aún sintió miedo, pero menos que antes. En fin, al verlo por tercera vez, se envalentonó lo suficiente hasta llegar a acercarse a él para entablar conversación.»\nTomado de: Fábulas de Esopo.\nEn el texto anterior, ¿cuál es el tema tratado?',
        options: ['La valentía para luchar contra seres peligrosos.', 'La prudencia para actuar ante los desconocidos.', 'La astucia para dominar a quienes son más fuertes.', 'La curiosidad como motor del conocimiento entre animales.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Cuentan que Ginko es el árbol sagrado del Japón y sus hojas tienen forma de mariposas. Parece ser que, un día los árboles de hoja ancha desafiaron al viento y este, furioso, respondió violentamente. Pero un árbol de hojas finas, que había perdido ya sus hojas en el temporal, dio refugio a unas pobres mariposas. Estas, en señal de agradecimiento, se las ingeniaron para que al árbol nunca le faltasen hojas.»\nTomado de: Cuentos para todo el año.\n¿Cuál es el tema tratado en el texto anterior?',
        options: ['La descripción de un árbol típico del Japón.', 'La relación de gratitud entre las mariposas y el árbol.', 'Las consecuencias de desafiar al viento en la naturaleza.', 'La importancia de cuidar los árboles sagrados en Asia.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«La magia, lo mismo la buena que la mala no es cosa fácil. En realidad, cualquier clase de acción mágica es enormemente complicada: requiere conocimientos enormes, gran cantidad de accesorios, materiales difíciles de conseguir y una preparación que puede durar días e incluso meses. Además, el trabajo es siempre sumamente peligroso, pues el más pequeño error puede tener consecuencias totalmente imprevisibles.»\nTomado de: El ponche de los deseos.\nEn el texto anterior, el tema tratado expone la',
        options: ['similitud de la magia con la dirección musical.', 'falta de talento de algunos magos impostores.', 'complejidad y lo riesgoso de practicar la magia.', 'historia de cómo se originó la magia en la antigüedad.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—¡Muy bien, Pinocho! ¡Por el buen corazón que has demostrado tener, te perdono todas las travesuras que has hecho hasta hoy! Los muchachos que atienden amorosamente a sus padres en la miseria y en la enfermedad, merecen siempre ser queridos, aunque no se los pueda citar como modelos de obediencia ni de buena conducta.»\nTomado de: Pinocho.\nSegún el texto anterior, ¿cuál es el pensamiento evidenciado por el Hada?',
        options: ['Las personas que demuestran tener un buen corazón, serán felices toda su vida.', 'Los muchachos que cuidan a sus padres en la miseria, son modelos de buena conducta.', 'Los hijos que atienden con amor a sus padres en la enfermedad, merecen ser queridos siempre.', 'El arrepentimiento sincero puede borrar todas las travesuras cometidas en la infancia.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El león se moría y deseaba que todos sus súbditos lo visitaran y supiesen qué dejaba a cada uno de ellos en su testamento. El zorro, que nunca había soñado siquiera con estar ausente cuando daban algo, fue presurosamente al cubil del león. Pero, a medida que se acercaba, caminaba con mayor lentitud. Pensaba. Cuando llegó a la entrada del cubil, en vez de entrar se ocultó detrás de un arbusto y esperó para ver qué sucedía.»\nTomado de: Fábulas de Esopo.\nSegún el texto anterior, ¿cuál pensamiento se infiere del personaje el zorro?',
        options: ['Los animales veloces y astutos recibirán más regalos.', 'El león podría ser peligroso a pesar de su aparente debilidad.', 'Los beneficios del testamento son para quienes llegan de primero.', 'Es mejor observar antes de actuar en situaciones desconocidas.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«El Hermano Tigre dijo: —No puedo atravesar el río porque me puede tragar. Anancy le dijo: —Allá viene un botecito, ¡míralo! El hermano Tigre respondió: —¡No, no, yo no puedo! Anancy le dijo: —Yo me voy. Y atravesó el río en el bote. Luego le envió de nuevo el bote al Tigre. —Voy a mandarle el bote para que Hermano Tigre se suba y cuando se monte, caiga dentro del agua —pensó Anancy.»\nTomado de: Cuentos afrocaribeños de la araña Anancy.\nSegún el texto anterior, ¿cuál es el pensamiento que muestra el Hermano Anancy?',
        options: ['Desear que Tigre sea valiente al atravesar el río.', 'Planear que el Hermano Tigre termine en el agua.', 'Ayudar al temeroso Tigre a subir en el bote y cruzar.', 'Demostrar que él es más valiente y hábil que el Tigre.'],
        correct: 1,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—¡Gracias —dijo Bastián—, muchas gracias por ocuparse constantemente de mis asuntos! Pero, a decir verdad, preferiría mucho más que me dejaran en paz de una vez. Soy yo quien salvó a Fantasía; soy yo a quien la Hija de la Luna ha confiado su poder. ¿Quieres que te diga por qué quieres realmente que te dé a Auryn? Porque, sencillamente, estás celoso de mí, nada más que celoso.»\nTomado de: La historia interminable.\nSegún el texto anterior, el pensamiento evidenciado por Bastián era que él',
        options: ['era envidiado por sus amigos y enemigos.', 'estaba preparado para ser rey del reino de Fantasía.', 'tenía la capacidad de asumir las tareas que le encomendaran.', 'debía proteger el poder que le fue confiado por encima de todo.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—Veamos, pequeño, ¿por qué se te ocurrió entrar aquí? ¿Acaso no sabés leer? En la puerta hay un rótulo claramente escrito. Yo, tumbado en el piso, solamente palpaba las gotas de sudor que bajaban por mi frente. No podía decir nada. —No te dejaré marchar de mi laboratorio sin que me expliques la razón por la que ibas a agarrar ese tubo de ensayo y ese papel.»\nTomado de: Escuela de hechicería, matrícula abierta.\nEn el texto anterior, ¿cuál conflicto enfrenta el pequeño?',
        options: ['Estar retenido hasta que justifique su presencia en el laboratorio.', 'Tener que buscar una puerta abierta para escapar del laboratorio.', 'Ingresar a una propiedad privada por no leer el rótulo en la puerta.', 'Enfrentar al dueño del laboratorio sin poder explicarse por el miedo.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Peter se lanzó sobre los cajones y ya había recuperado su sombra. Lo único que pensaba era que su sombra y él, cuando se juntaran, se unirían como dos gotas de agua y cuando no fue así se quedó horrorizado. Intentó pegársela con jabón del cuarto de baño, pero eso también falló. Un escalofrío recorrió a Peter, que se sentó en el suelo y se echó a llorar.»\nTomado de: Peter Pan y Wendy.\nSegún el texto anterior, ¿cuál conflicto enfrenta Peter?',
        options: ['El olvido de Campanilla dentro del cajón.', 'El desorden causado al buscar la sombra.', 'La imposibilidad de pegar su sombra al cuerpo.', 'La frustración de no poder volar sin su sombra.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«—Levante esa piedra que está al lado de mi hijito, y ahí hallará la Flor del Olivar. Así lo hizo el príncipe y en una cuevita que había bajo la piedra, estaba la Flor. La cortó, besó al niño, se despidió de la mujer y partió. Al pasar por donde estaban sus hermanos, les enseñó la Flor. En la comida le hicieron beber tanto vino que se embriagó. Cuando estuvo dormido, se lo llevaron al campo, lo mataron, le quitaron la Flor y lo enterraron.»\nTomado de: Los cuentos de mi tía Panchita.\nEn el texto anterior, ¿cuál conflicto enfrenta el príncipe?',
        options: ['Encontrar la Flor del Olivar antes que sus hermanos.', 'Compartir la Flor del Olivar con sus hermanos o mantenerla para sí.', 'Enfrentar la traición de sus hermanos al regresar con la Flor del Olivar.', 'Perder la Flor del Olivar antes de poder entregarla a quien la necesitaba.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«En tiempos muy remotos vivía en Amarganz una Anciana de Plata llamada Quana, que reinaba en la ciudad. Quana tenía un hijo llamado Qüin, que era un gran cazador. Un día, Qüin vio en los bosques un unicornio que tenía una piedra luminosa en la punta de su cuerno. Mató al animal y se llevó la piedra a casa. Con ello atrajo una gran desgracia sobre la ciudad de Amarganz. Sus habitantes tuvieron cada vez menos hijos. Pero no era posible volver a la vida al unicornio y no sabía qué hacer.»\nTomado de: La historia interminable.\nSegún el texto anterior, ¿cuál fue el conflicto padecido por Qüin?',
        options: ['Conseguir que Amarganz fuese una ciudad pobre y desamparada.', 'Lograr que los unicornios desaparecieran de los bosques de Amarganz.', 'Ser incapaz de solucionar el problema causado a la ciudad de Amarganz.', 'Defender a su madre la Anciana de Plata de las amenazas del exterior.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Estaba un señor Cuervo posado en un árbol, y tenía en el pico un queso. Atraído por el tufillo, el señor Zorro le habló: "¡Gallardo y hermoso eres en verdad! Si el canto corresponde a la pluma, os digo que entre los huéspedes de este bosque tú eres el Ave Fénix". El Cuervo al oír esto, no cabía en la piel de gozo, y para hacer alarde de su magnífica voz, abrió el pico, dejando caer la presa. La tomó el Zorro.»\nTomado de: Fábulas de La Fontaine.\nEn el texto anterior, ¿cuál comportamiento evidencia el Cuervo?',
        options: ['Solidario: compartió el queso con su amigo el Zorro.', 'Impulsivo: tiró su queso porque estaba muy enfadado.', 'Ingenuo: cayó en la trampa del Zorro y perdió el queso.', 'Orgulloso: demostró su magnífica voz a todos en el bosque.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Había una vez, en tiempos ya lejanos, un rey poseedor de un castillo muy grande y lujoso. Su pueblo lo quería y lo respetaba pues siempre estaba de buenas y ayudaba al necesitado. Era un viejo muy sonriente y de buen aspecto. Fue por su don de ofrecer y repartir que los suyos lo llamaban don Generoso.»\nTomado de: Cuentos de valores.\nEn el texto anterior, ¿cuál comportamiento evidencia el rey?',
        options: ['Demuestra interés por ayudar a su pueblo.', 'Siempre mostraba pena y dolor por las necesidades.', 'Permite que cualquier persona entre a su hermoso castillo.', 'Reparte sus riquezas únicamente entre los nobles del reino.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Alicia Paf hacía pompas de jabón. De golpe, tal vez por soplar demasiado fuerte, hizo una pompa más gorda que las otras y cayó dentro de ella con pajita y todo. La pompa pasó por encima de la barandilla, el viento la impulsó hacia arriba, y habría llegado a estallar contra el canalón si Alicia, volviéndose hacia el otro lado, no la hubiese obligado a desviarse con su peso.»\nTomado de: Los traspiés de Alicia Paf.\nEn el texto anterior, ¿cuál es el comportamiento de Alicia cuando cayó dentro de la pompa?',
        options: ['Ágil y resolutiva, Alicia modifica su posición corporal para redirigir el curso de la pompa con su peso.', 'Imaginativa pero evasiva, se consuela con pensamientos fantásticos sin intervenir activamente en la situación.', 'Insegura y paralizada, permanece pasiva dentro de la pompa sin tomar acciones concretas para evitar el peligro.', 'Asustada y temerosa, grita para pedir ayuda a quienes están cerca de la barandilla.'],
        correct: 0,
        mepBloque: 'comprension-lectora'
      },
      {
        question: 'Lea el siguiente texto:\n«Volvieron al campamento los exploradores e informaron de que la Torre de Marfil estaba ya muy cerca. Pero Bastián parecía indeciso. Ordenaba hacer altos con más frecuencia que hasta entonces y luego, repentinamente, reanudaba la marcha. Nadie en la expedición comprendía los motivos. Tampoco Atreyu y Fújur podían explicarse ya el comportamiento de Bastián.»\nTomado de: La historia interminable.\nSegún el texto anterior, el comportamiento mostrado por Bastián era',
        options: ['cauteloso, el Monasterio le causaba desconfianza e inquietud.', 'estratégico, deseaba que los demás pensaran que era un inútil.', 'extraño, dirigía la expedición de forma indecisa y contradictoria.', 'valiente, buscaba proteger a la expedición de los peligros del camino.'],
        correct: 2,
        mepBloque: 'comprension-lectora'
      }
    ]
  },

  {
    id: 'tema-e-ideologia-del-texto',
    mepBloque: 'comprension-lectora',
    title: 'Tema e Ideología del Texto',
    description: 'Aprende a inferir el tema central de un texto literario y a identificar la posición ideológica de sus personajes a través de sus decisiones, valores y relaciones.',
    sections: [
      {
        title: 'El tema de un texto literario',
        content: [
          '<p>El <strong>tema</strong> del texto es la idea principal que se va desarrollando en la lectura. No siempre se encuentra explícito; muchas veces debemos <strong>inferirlo</strong> a partir de una lectura cuidadosa.</p>',
          '<p>Para comprender el tema de un texto debes:</p>',
          '<ul>',
          '<li>Observar con atención el <strong>título</strong> del texto.</li>',
          '<li>Leer con mucha atención para comprender la totalidad del texto.</li>',
          '<li>Subrayar las ideas más importantes y repetitivas.</li>',
          '</ul>',
          '<h3>Preguntas guía para encontrar el tema</h3>',
          '<ul>',
          '<li>¿De qué trata realmente este texto?</li>',
          '<li>¿Qué me quiere decir el autor con esta historia?</li>',
          '<li>¿Cuál es el mensaje o reflexión que se desprende?</li>',
          '</ul>'
        ]
      },
      {
        title: 'Posición ideológica de los personajes',
        content: [
          '<p>La <strong>posición ideológica</strong> de los personajes es el conjunto de ideas, valores, creencias o puntos de vista que un personaje tiene sobre temas importantes como la sociedad, la política, la justicia, la moral y la religión.</p>',
          '<p>En otras palabras: es cómo piensa y actúa un personaje con base en lo que cree que está bien o mal, justo o injusto, correcto o incorrecto.</p>',
          '<h3>¿Cómo se nota en un texto?</h3>',
          '<p>Se puede observar a través de:</p>',
          '<ul>',
          '<li>Lo que el personaje <strong>dice</strong>.</li>',
          '<li>Las <strong>decisiones</strong> que toma.</li>',
          '<li>Cómo <strong>reacciona</strong> ante ciertos problemas o conflictos.</li>',
          '<li>Sus <strong>relaciones</strong> con otros personajes.</li>',
          '</ul>'
        ]
      },
      {
        title: '¿Por qué es importante identificar el tema y la ideología?',
        content: [
          '<p>Conocer el tema central y la posición ideológica de los personajes ayuda a:</p>',
          '<ul>',
          '<li>Entender mejor las acciones de cada personaje.</li>',
          '<li>Analizar los conflictos del relato.</li>',
          '<li>Reflexionar sobre los mensajes del autor.</li>',
          '<li>Diferenciar el <strong>tema central</strong> de las ideas secundarias del texto.</li>',
          '</ul>',
          '<h3>Ejemplo</h3>',
          '<p>En una historia sobre una guerra, un personaje que cree en la paz puede oponerse a luchar, mientras que otro que cree en la defensa de su patria puede estar dispuesto a ir al frente. Cada uno tiene una <strong>posición ideológica diferente</strong>.</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'informacion-implicita',
    mepBloque: 'comprension-lectora',
    title: 'Información Implícita',
    description: 'Aprende a leer entre líneas e identificar la información que el autor no expresa directamente pero da a entender mediante inferencias y pistas del contexto.',
    sections: [
      {
        title: '¿Qué es la información implícita?',
        content: [
          '<p>La <strong>información implícita</strong> en un texto es aquella que no está escrita de forma directa, pero que se puede deducir o <strong>inferir</strong> a partir de lo que el texto dice y del conocimiento del lector.</p>',
          '<p>En otras palabras: es lo que el autor <em>no dice con palabras exactas</em>, pero da a entender. El lector tiene que <strong>leer entre líneas</strong> para descubrirla.</p>',
          '<h3>Ejemplo</h3>',
          '<p><em>Texto:</em> "Juan llegó a casa con la ropa mojada y los zapatos llenos de barro. Su madre lo miró con una ceja levantada."</p>',
          '<p><strong>Información implícita:</strong> No se dice directamente, pero se puede inferir que estaba lloviendo y que la madre está molesta o sorprendida.</p>'
        ]
      },
      {
        title: 'Diferencia entre información explícita e implícita',
        content: [
          '<ul>',
          '<li><strong>Información explícita:</strong> Está escrita directamente en el texto. El lector la encuentra sin necesidad de interpretar.</li>',
          '<li><strong>Información implícita:</strong> No está escrita, pero se puede deducir usando pistas del texto y el conocimiento previo del lector.</li>',
          '</ul>',
          '<h3>¿Cómo se identifica la información implícita?</h3>',
          '<p>Para encontrar información implícita debes:</p>',
          '<ul>',
          '<li>Leer con atención.</li>',
          '<li>Usar pistas del texto (palabras, situaciones, reacciones).</li>',
          '<li>Pensar en lo que sabes del mundo.</li>',
          '<li>Hacer <strong>inferencias</strong> lógicas.</li>',
          '</ul>'
        ]
      },
      {
        title: '¿Por qué es importante la información implícita?',
        content: [
          '<p>Entender la información implícita:</p>',
          '<ul>',
          '<li>Mejora la <strong>comprensión lectora</strong>.</li>',
          '<li>Permite entender mejor las intenciones del autor o los personajes.</li>',
          '<li>Ayuda a captar los <strong>mensajes profundos</strong> de un texto.</li>',
          '<li>Desarrolla el pensamiento crítico y la capacidad de análisis.</li>',
          '</ul>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'analisis-de-personajes',
    mepBloque: 'comprension-lectora',
    title: 'Análisis de Personajes',
    description: 'Aprende a analizar los conflictos, comportamientos, personalidades y motivaciones de los personajes en textos literarios.',
    sections: [
      {
        title: 'Conflicto de los personajes',
        content: [
          '<p>Un <strong>conflicto</strong> es una situación en la que uno o varios personajes (<strong>protagonistas</strong>) no pueden lograr lo que desean debido a una circunstancia especial o a las acciones de otro personaje (<strong>antagonista</strong>). Esto genera una serie de problemas que deben resolver.</p>',
          '<h3>Recomendaciones para identificar los conflictos</h3>',
          '<ul>',
          '<li>Leer todo el texto con atención e identificar a los personajes.</li>',
          '<li>Identificar los deseos y necesidades del personaje principal.</li>',
          '<li>Detectar los problemas que enfrenta para lograr sus deseos.</li>',
          '<li>Observar cómo reacciona el personaje ante esos problemas.</li>',
          '<li>Reconocer las decisiones que toma y cómo afectan la historia.</li>',
          '<li>Analizar cómo se relaciona con los otros personajes.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Comportamiento y personalidad de los personajes',
        content: [
          '<p>La <strong>personalidad</strong> de un personaje es el conjunto de características emocionales y atributos simbólicos que se relacionan con su forma de actuar en su entorno.</p>',
          '<p>Los personajes pueden actuar de diferentes maneras según la situación. Por ejemplo, ante una amenaza, algunos huyen con miedo y otros enfrentan con agresividad.</p>',
          '<h3>Rasgos de personalidad comunes en los personajes</h3>',
          '<ul>',
          '<li><strong>Valiente:</strong> Enfrenta el peligro sin retroceder.</li>',
          '<li><strong>Cobarde:</strong> Evita los problemas y huye de los conflictos.</li>',
          '<li><strong>Honesto:</strong> Dice la verdad y actúa con integridad.</li>',
          '<li><strong>Compasivo:</strong> Siente empatía y ayuda a los demás.</li>',
          '<li><strong>Malhumorado:</strong> Reacciona con enojo o irritación frecuente.</li>',
          '</ul>'
        ]
      },
      {
        title: 'Motivaciones del personaje',
        content: [
          '<p>Las <strong>motivaciones</strong> son las razones internas o externas que impulsan a un personaje a actuar de determinada manera. Entenderlas es clave para analizar la historia.</p>',
          '<h3>Recomendaciones para identificar el comportamiento</h3>',
          '<ul>',
          '<li>Observar la personalidad del personaje (valiente, cobarde, amoroso, etc.).</li>',
          '<li>Relacionar lo que hace el personaje con su personalidad.</li>',
          '<li>Identificar su reacción ante problemas y conflictos.</li>',
          '<li>Observar cómo se relaciona con los demás personajes de la historia.</li>',
          '</ul>',
          '<p>Recuerda: el análisis de personajes ayuda a <strong>comprender los mensajes</strong> que el autor quiere transmitir a través de la historia.</p>'
        ]
      }
    ],
    quiz: []
  },

  {
    id: 'repaso-espanol-primer-examen',
    mepBloque: 'comprension-lectora',
    title: 'Repaso de Español: Primer Examen',
    description: 'Repaso de Tipos de Lenguaje, Comunicación, Sinónimos/Antónimos, Acentuación y Uso de Letras.',
    extraMaterial: {
      title: 'Examen de Repaso: Primer Examen',
      url: '/docs/Examen_Espanol_6toGrado_2026.pdf',
      type: 'PDF'
    },
    questionCount: 20,
    sections: [
      {
        title: '1. Diversos Tipos de Lenguaje',
        content: [
          '<p>El <strong>lenguaje</strong> es un sistema de comunicación que usamos para transmitir ideas, pensamientos y emociones. Puede ser oral o escrito.</p>',
          '<h3>🎩 Lenguaje Formal</h3><p>Usado en situaciones serias, profesionales o académicas. Sigue reglas gramaticales estrictas.</p><blockquote>Ejemplo: "Estimada directora: Reciba un cordial saludo."</blockquote>',
          '<h3>😊 Lenguaje Coloquial</h3><p>Usado en el día a día, de forma relajada con amigos. Puede incluir expresiones idiomáticas.</p><blockquote>Ejemplo: "¡Hola! ¿Pura vida?"</blockquote>',
          '<h3>🔬 Lenguaje Técnico</h3><p>Usado en áreas especializadas como ciencia, medicina o tecnología. Es objetivo y preciso.</p><blockquote>Ejemplo: "La fotosíntesis es el proceso biológico..."</blockquote>',
          '<h3>🎨 Lenguaje Figurado (Literario)</h3><p>Usa las palabras de una manera diferente a su significado literal. Se usa en poesía y literatura.</p><blockquote>Ejemplo: "Sus mejillas son manzanas que se asoman por la ventana."</blockquote>'
        ]
      },
      {
        title: '2. La Comunicación y sus Elementos',
        content: [
          '<p>La comunicación es el proceso que nos permite intercambiar información, ideas y emociones con otras personas.</p>',
          '<ul>',
          '<li><strong>Emisor:</strong> Persona que desea transmitir un mensaje.</li>',
          '<li><strong>Mensaje:</strong> La información o idea que se desea comunicar.</li>',
          '<li><strong>Canal:</strong> Medio a través del cual se transmite el mensaje (ej. WhatsApp, carta, voz).</li>',
          '<li><strong>Receptor:</strong> Persona que recibe y debe comprender el mensaje.</li>',
          '<li><strong>Decodificación:</strong> Proceso por el cual el receptor interpreta el mensaje.</li>',
          '<li><strong>Retroalimentación:</strong> Respuesta del receptor al mensaje.</li>',
          '</ul>',
          '<h3>Tipos de Código</h3>',
          '<p><strong>Verbal:</strong> Palabras orales o escritas.</p>',
          '<p><strong>No Verbal:</strong> Signos, gestos, miradas o imágenes.</p>'
        ]
      },
      {
        title: '3. Sinónimos y Antónimos',
        content: [
          '<h3>🟦 Sinónimos</h3>',
          '<p>Son palabras que tienen un <strong>significado similar o casi idéntico</strong>, pero se pronuncian diferente. Se usan para no repetir la misma palabra.</p>',
          '<p>Ejemplo: Feliz → Contento, Interesante → Llamativo, Viejo → Antiguo.</p>',
          '<h3>🟪 Antónimos</h3>',
          '<p>Son palabras que tienen <strong>significados opuestos o contrarios</strong>.</p>',
          '<p>Ejemplo: Pequeño → Grande, Amor → Odio, Claro → Oscuro.</p>'
        ]
      },
      {
        title: '4. Acentuación de Palabras',
        content: [
          '<p>Todas las palabras tienen una <strong>sílaba tónica</strong> (se pronuncia con más fuerza) y <strong>sílabas átonas</strong> (menor fuerza de voz).</p>',
          '<ul>',
          '<li><strong>Agudas:</strong> Acento en la última sílaba. Llevan tilde si terminan en N, S o vocal (ej. café, corazón).</li>',
          '<li><strong>Graves (o Llanas):</strong> Acento en la penúltima sílaba. Llevan tilde si terminan en consonante que NO sea N, S (ej. árbol).</li>',
          '<li><strong>Esdrújulas:</strong> Acento en la antepenúltima sílaba. <strong>Siempre llevan tilde</strong> (ej. plástico).</li>',
          '<li><strong>Sobreesdrújulas:</strong> Acento antes de la antepenúltima. <strong>Siempre llevan tilde</strong> (ej. díganselo).</li>',
          '</ul>'
        ]
      },
      {
        title: '5. Uso de las letras B, V, C, S y Z',
        content: [
          '<h3>Letra B</h3><p>Se usa en terminaciones -bilidad (amabilidad), prefijos sub-, bi- y verbos en -bir (escribir). También en terminaciones -aba (caminaba).</p>',
          '<h3>Letra V</h3><p>Se usa después de \'d\' y \'n\' (invierno), y en terminaciones -ívoro (carnívoro), adjetivos -ivo (activo).</p>',
          '<h3>Letra C</h3><p>Se usa en diminutivos -cito (pececito), sustantivos -ancia (tolerancia) y plurales de z (lápiz → lápices).</p>',
          '<h3>Letra S</h3><p>Se usa en gentilicios -ense (costarricense), terminaciones -ísimo (bellísima) y -oso (valioso).</p>',
          '<h3>Letra Z</h3><p>Se usa en terminaciones -zón (corazón), -eza (esperanza) y adjetivos -az (audaz).</p>'
        ]
      }
    ],
    quiz: [
      // Tema 1 - Tipos de Lenguaje (20 preguntas)
      { question: "¿Qué es el lenguaje?", options: ["Un sistema de comunicación para transmitir ideas", "Un tipo de idioma antiguo", "Sólo palabras escritas en un libro", "Un conjunto de letras sin significado"], correct: 0 },
      { question: "¿Cuáles son los cuatro tipos de lenguaje estudiados?", options: ["Deportivo, Musical, Artístico, Matemático", "Formal, Coloquial, Técnico, Figurado", "Escrito, Leído, Cantado, Hablado", "Largo, Corto, Agudo, Grave"], correct: 1 },
      { question: "¿En qué situaciones se usa el lenguaje formal?", options: ["Entre amigos y familia", "En el día a día", "Situaciones serias, profesionales o académicas", "Solamente en poesía y libros"], correct: 2 },
      { question: "¿Qué caracteriza al lenguaje formal?", options: ["Uso de contracciones y bromas", "Vocabulario preciso y reglas estrictas", "Exageraciones y comparaciones", "Palabras raras e inventadas"], correct: 1 },
      { question: "¿Qué es el lenguaje coloquial?", options: ["El que se usa estrictamente en el trabajo", "El lenguaje usado en ciencia", "El usado en el día a día con amigos, relajado", "El que usa figuras retóricas"], correct: 2 },
      { question: "¿Qué caracteriza al lenguaje coloquial?", options: ["Usa palabras familiares y expresiones idiomáticas", "No se permiten contracciones", "Usa títulos como 'Doctor' o 'Señor'", "Debe apegarse a manuales de ingeniería"], correct: 0 },
      { question: "¿En qué se diferencia el técnico del coloquial?", options: ["Es relajado", "Es especializado, preciso y se usa en ciencias", "Usa refranes comunes", "No significa lo que las palabras dicen"], correct: 1 },
      { question: "¿En qué áreas se usa principalmente el técnico?", options: ["Ciencia, tecnología y medicina", "Deportes y recreación", "En las fiestas familiares", "Escribiendo cartas a amigos"], correct: 0 },
      { question: "¿Qué es el lenguaje figurado?", options: ["El que dibuja figuras", "Aquel donde las palabras tienen un significado distinto al literal", "Exclusivo de los científicos", "El más formal de todos"], correct: 1 },
      { question: "¿Qué elementos son propios del lenguaje figurado?", options: ["Abreviaturas y siglas", "Fórmulas matemáticas", "Metáforas y personificaciones", "Reglas sintácticas estrictas"], correct: 2 },
      { question: "¿Qué tipo es: '¡Ey, ¿qué hay de nuevo?'", options: ["Coloquial", "Técnico", "Figurado", "Formal"], correct: 0 },
      { question: "¿Qué tipo es: 'El ADN contiene la información genética'?", options: ["Formal", "Coloquial", "Figurado", "Técnico"], correct: 3 },
      { question: "¿Qué tipo es: 'Estimada directora: Reciba un cordial saludo'?", options: ["Figurado", "Técnico", "Coloquial", "Formal"], correct: 3 },
      { question: "¿Qué tipo es: 'Sus palabras eran flechas afiladas'?", options: ["Técnico", "Formal", "Figurado", "Coloquial"], correct: 2 },
      { question: "¿Cuál usarías para escribirle al director de la escuela?", options: ["Formal, por respeto", "Figurado, para impresionarlo", "Coloquial, para ser amigable", "Técnico, para sonar inteligente"], correct: 0 },
      { question: "¿Qué tipo de lenguaje se usa más en la poesía?", options: ["Técnico", "Figurado", "Formal", "Coloquial"], correct: 1 },
      { question: "¿Por qué es importante conocer los tipos de lenguaje?", options: ["Para enseñar español", "Para aprender inglés", "Cada situación requiere un registro adecuado que muestra respeto", "Para no tener que escribir mucho"], correct: 2 },
      { question: "El lenguaje coloquial sigue estrictas reglas...", options: ["Verdadero", "Falso", "Depende del día", "A veces"], correct: 1 },
      { question: "'¡Nos vemos al rato!' es un claro ejemplo de lenguaje:", options: ["Técnico", "Figurado", "Formal", "Coloquial"], correct: 3 },
      { question: "La frase 'Sus ojos son dos luceros' pertenece a:", options: ["Lenguaje figurado", "Lenguaje formal", "Lenguaje coloquial", "Lenguaje técnico"], correct: 0 },
      { question: "Identifique el registro: 'el sol parece una gran bola de fuego que pinta el cielo... las nubes parecen barcos'", options: ["Formal", "Coloquial", "Figurado", "Técnico"], correct: 2 },
      { question: "Identifique el registro: 'amigos conversan sobre el partido... casi meten otro gol... van a entrenar más.'", options: ["Formal", "Técnico", "Figurado", "Coloquial"], correct: 3 },
      { question: "Identifique el registro: 'la directora se dirige con un tono claro y respetuoso... agradece la colaboración.'", options: ["Técnico", "Formal", "Figurado", "Coloquial"], correct: 1 },
      { question: "Identifique el registro: 'las plantas producen su propio alimento mediante la fotosíntesis... liberando oxígeno.'", options: ["Coloquial", "Formal", "Figurado", "Técnico"], correct: 3 },

      // Tema 2 - La Comunicación (20 preguntas)
      { question: "¿Qué es el proceso de comunicación?", options: ["Intercambio de información e ideas", "Hablar solo", "Leer un libro en silencio", "Solo enviar señales de humo"], correct: 0 },
      { question: "¿Cuáles son los 6 elementos de la comunicación?", options: ["Emisor, Mensaje, Canal, Receptor, Decodificación, Retroalimentación", "Persona, Carta, Teléfono, Sello, Buzón, Correo", "Hablar, Escuchar, Ver, Leer, Escribir, Pensar", "Lápiz, Papel, Borrador, Tinta, Texto, Palabra"], correct: 0 },
      { question: "¿Qué es el emisor?", options: ["Quien grita más fuerte", "El que dibuja el mensaje", "La persona que recibe y lee", "La persona que desea transmitir un mensaje"], correct: 3 },
      { question: "¿Qué es el receptor?", options: ["El que transmite el mensaje", "El canal de la carta", "La persona que recibe e interpreta el mensaje", "La respuesta final"], correct: 2 },
      { question: "¿Qué es el mensaje?", options: ["La información que el emisor transmite", "El celular que se usa", "La persona que escucha", "La respuesta del que lee"], correct: 0 },
      { question: "¿Qué es el canal?", options: ["Un tipo de radio", "El medio físico o método usado (WhatsApp, voz, carta) para transmitir", "El agua del río", "Lo opuesto al emisor"], correct: 1 },
      { question: "¿Qué es la decodificación?", options: ["Gritar el mensaje", "Usar el canal correcto", "El emisor escribiendo", "Proceso del receptor para interpretar el mensaje usando el idioma"], correct: 3 },
      { question: "¿Qué es la retroalimentación?", options: ["El pago por el mensaje", "El ruido en la línea", "El mensaje original", "La respuesta del receptor al mensaje original"], correct: 3 },
      { question: "¿Cuál es la diferencia entre el código verbal y no verbal?", options: ["Verbal usa palabras, No verbal usa gestos y signos", "Verbal es más rápido", "No verbal solo por escrito", "Ninguna, son lo mismo"], correct: 0 },
      { question: "¿Cuál es un ejemplo de código verbal?", options: ["Un correo electrónico o carta", "Un semáforo en rojo", "Una sonrisa de lejos", "Un fuerte abrazo"], correct: 0 },
      { question: "¿Cuál es un ejemplo de código no verbal?", options: ["Una señal de tránsito o gesto", "Cantar una canción a coro", "Leer un cuento en voz alta", "Escribir un ensayo en el cuaderno"], correct: 0 },
      { question: "En: 'El padre envía un WhatsApp a los amigos anunciando la fiesta', ¿Quién es el emisor?", options: ["Los amigos", "WhatsApp", "El padre", "La fiesta"], correct: 2 },
      { question: "En el mismo caso, ¿Cuál es el canal?", options: ["Teléfono / WhatsApp", "Los amigos", "La fiesta", "El mensaje hablado"], correct: 0 },
      { question: "¿Puede la retroalimentación ser no verbal?", options: ["Nunca", "Sí, como asentar con la cabeza sin hablar", "Solo por carta", "Solo si se grita"], correct: 1 },
      { question: "¿Qué pasaría si el receptor no conoce el idioma del emisor?", options: ["Lo aprende mágicamente", "No podría decodificar el mensaje y fracasaría la comunicación", "El canal revienta", "Simplemente sonríe y ya"], correct: 1 },
      { question: "El canal siempre tiene que ser una llamada telefónica.", options: ["Verdadero", "Falso", "Sólo a veces", "En la mañana sí"], correct: 1 },
      { question: "¿Por qué la comunicación es esencial?", options: ["Es un pasatiempo divertido", "Permite compartir ideas, organizarnos y resolver problemas", "Es un buen ejercicio pulmonar", "Hace que el tiempo pase más rápido"], correct: 1 },
      { question: "Si alguien hace una señal con la mano de 'adiós', ¿Qué código es?", options: ["Verbal", "Secreto", "Morse", "No verbal"], correct: 3 },
      { question: "¿Cuál elemento garantiza que el mensaje fue comprendido?", options: ["El sobre usado", "El canal electrónico", "La retroalimentación (feedback) del receptor", "El emisor lo adivina"], correct: 2 },
      { question: "¿Qué diferencia básica hay entre emisor y receptor?", options: ["El emisor gana dinero, el receptor paga", "El emisor está siempre enojado, el receptor feliz", "Ambos hacen lo mismo", "El emisor envía/habla, el receptor recibe/escucha"], correct: 3 },

      // Tema 3 - Sinónimos y Antónimos (20 preguntas)
      { question: "¿Qué son los sinónimos?", options: ["Palabras idénticas", "Palabras parecidas en significado pero de distinta escritura", "Palabras de sonido igual", "Palabras con significado totalmente opuesto"], correct: 1 },
      { question: "¿Para qué se usan los sinónimos en la escritura?", options: ["Hacer el texto más aburrido", "Repetir muchas veces la palabra", "Para evitar repetir la misma palabra y enriquecer el texto", "Para confundir al lector"], correct: 2 },
      { question: "¿Qué son los antónimos?", options: ["Palabras mal escritas", "Palabras que significan lo mismo", "Palabras que rima juntas", "Palabras que tienen significados opuestos o contrarios"], correct: 3 },
      { question: "El sinónimo de Caminar es:", options: ["Correr", "Volar", "Andar", "Saltar"], correct: 2 },
      { question: "El sinónimo de Feliz es:", options: ["Triste", "Miserable", "Contento", "Enojado"], correct: 2 },
      { question: "El antónimo de Alegre es:", options: ["Feliz", "Sonriente", "Gritón", "Triste"], correct: 3 },
      { question: "El antónimo de Comenzar es:", options: ["Llegar", "Empezar", "Iniciar", "Terminar"], correct: 3 },
      { question: "¿'Feliz' y 'contento' son?", options: ["Antónimos", "Sustantivos", "Verbos", "Sinónimos"], correct: 3 },
      { question: "¿'Amor' y 'odio' son?", options: ["Adjetivos", "Antónimos", "Cualidades", "Sinónimos"], correct: 1 },
      { question: "¿'Rápido' y 'veloz' son?", options: ["Antónimos", "Verbos", "Pronombres", "Sinónimos"], correct: 3 },
      { question: "¿'Grande' y 'pequeño' son?", options: ["Antónimos", "Amistosos", "Ninguno de los anteriores", "Sinónimos"], correct: 0 },
      { question: "Reemplaza Rápido con un sinónimo: 'El animal fue rápido.'", options: ["Veloz", "Lento", "Grande", "Suave"], correct: 0 },
      { question: "Reemplaza Claro con un antónimo: 'El cielo estaba claro.'", options: ["Oscuro", "Azul", "Brillante", "Bonito"], correct: 0 },
      { question: "El sinónimo de Miedo es:", options: ["Temor", "Valor", "Risa", "Odio"], correct: 0 },
      { question: "El antónimo de Mentira es:", options: ["Falso", "Verdad", "Duda", "Secreto"], correct: 1 },
      { question: "El sinónimo de Dormir es:", options: ["Saltar", "Soñar", "Correr", "Descansar"], correct: 3 },
      { question: "El antónimo de Vacío es:", options: ["Pobre", "Triste", "Lleno", "Limpio"], correct: 2 },
      { question: "Los sinónimos se pronuncian exactamente igual a su pareja.", options: ["Verdadero", "Falso", "Sólo los largos", "A veces"], correct: 1 },
      { question: "Sinónimo de Difícil:", options: ["Complejo", "Fácil", "Sencillo", "Claro"], correct: 0 },
      { question: "Antónimo de Hablar:", options: ["Callar", "Conversar", "Gritar", "Platicar"], correct: 0 },

      // Tema 4 - Acentuación (20 preguntas)
      { question: "¿Qué es la sílaba tónica?", options: ["La primera sílaba siempre", "La sílaba que se pronuncia con menor fuerza", "La sílaba que se pronuncia con mayor fuerza de voz", "La última sílaba siempre"], correct: 2 },
      { question: "¿Qué es una sílaba átona?", options: ["La más importante del texto", "La que lleva el acento", "Las sílabas que se pronuncian con menor fuerza", "Sílaba de una sola letra"], correct: 2 },
      { question: "¿Cómo se llaman las palabras acentuadas en la última sílaba?", options: ["Cambiantes", "Agudas", "Esdrújulas", "Graves"], correct: 1 },
      { question: "¿Cuándo se tildan las agudas?", options: ["Siempre", "Si terminan en L o D", "Si terminan en N, S o vocal", "Nunca se tildan"], correct: 2 },
      { question: "¿Cómo se llaman las palabras acentuadas en la penúltima sílaba?", options: ["Esdrújulas", "Últimas", "Graves o Llanas", "Agudas"], correct: 2 },
      { question: "¿Cuándo se tildan las graves?", options: ["Si terminan en N", "Si terminan en consonante que NO sea N, S", "Nunca", "Si terminan en vocal"], correct: 1 },
      { question: "¿Dónde se acentúan las esdrújulas?", options: ["Penúltima sílaba", "Segunda sílaba", "Antepenúltima sílaba", "Última sílaba"], correct: 2 },
      { question: "¿Cuándo llevan tilde las esdrújulas?", options: ["Siempre llevan tilde", "Sólo en verano", "Si terminan en vocal", "Nunca"], correct: 0 },
      { question: "¿Dónde se acentúan las sobreesdrújulas?", options: ["Última sílaba", "Al principio", "La penúltima sílaba", "Antes de la antepenúltima"], correct: 3 },
      { question: "La palabra 'canción' es:", options: ["Esdrújula", "Sobreesdrújula", "Grave", "Aguda"], correct: 3 },
      { question: "La palabra 'árbol' es:", options: ["Esdrújula", "Aguda", "Grave", "Sobreesdrújula"], correct: 2 },
      { question: "La palabra 'música' es:", options: ["Esdrújula", "Grave", "Aguda", "Ninguna de las tres"], correct: 0 },
      { question: "¿Por qué 'árbol' lleva tilde siendo grave?", options: ["Porque termina en L (consonante distinta de N o S)", "Porque a alguien se le ocurrió", "Porque termina en vocal", "Porque es aguda"], correct: 0 },
      { question: "¿Por qué 'reloj' no lleva tilde si es aguda?", options: ["Termina en 'j', y las agudas piden terminar en 'n,s' o 'vocal' para tildarse", "Porque es muy corta", "Porque es esdrújula en secreto", "Porque empieza con R"], correct: 0 },
      { question: "Verdadero o falso: Todas las palabras graves llevan tilde.", options: ["Verdadero", "Falso", "Si son largas sí", "No existen las graves"], correct: 1 },
      { question: "¿Dónde está la sílaba tónica en 'im-pa-cien-te'?", options: ["te", "im", "cien", "pa"], correct: 2 },
      { question: "¿Cuál de estas opciones es una palabra Esdrújula?", options: ["Camioneta", "Plástico", "Café", "Mesa"], correct: 1 },
      { question: "La palabra 'protección' (pro-tec-ción) ¿por qué se tilda?", options: ["Porque fue declarada grave", "Porque es tilde diacrítica", "Porque es aguda terminada en 'n'", "Por ser muy difícil"], correct: 2 },
      { question: "¿Cuál es la sílaba tónica en 're-to-ño'?", options: ["to", "ño", "re", "ninguna"], correct: 0 },
      { question: "Diferencia entre acento prosódico y ortográfico:", options: ["Ninguna, son iguales", "Prosódico es sonido en todas las palabras; ortográfico es la tilde (´) escrita", "El ortográfico se usa solo en inglés", "Prosódico no suena"], correct: 1 },

      // Tema 5 - Uso de B y V (10 preguntas para dejar espacio)
      { question: "¿Cuándo se usa B en las terminaciones de palabras?", options: ["-ura", "-mente", "-bilidad (amabilidad)", "-ción"], correct: 2 },
      { question: "¿Qué regla se aplica a palabras con 'bl' y 'br'?", options: ["Siempre usan V", "Solo si es plural", "Se pueden usar ambas letras", "Siempre se escriben con B (blanco, broma)"], correct: 3 },
      { question: "¿Qué prefijos siempre usan B?", options: ["in-, des-", "ex-, re-", "sub- y bi- (submarino, bilingüe)", "pro-, anti-"], correct: 2 },
      { question: "¿Qué letra sigue SIEMPRE después de 'm'?", options: ["p", "b (cambio, cumbia)", "v (comveniente)", "s"], correct: 1 },
      { question: "¿Los verbos terminados en '-bir' usan?", options: ["b (escribir)", "v (escrevir)", "z (escribiz)", "s (escribis)"], correct: 0 },
      { question: "¿Qué terminación del verbo en pasado se usa con B?", options: ["-aba, -aban (caminaba, jugaban)", "-ava, -avan (llevava)", "-ivo", "-ando"], correct: 0 },
      { question: "Después de la 'd' o la 'n' siempre va:", options: ["B (adnverso)", "V (invierno, advertir)", "G", "M"], correct: 1 },
      { question: "¿Qué terminación animal se usa con V?", options: ["-ivo", "-ívoro (omnìvoro, carnívoro)", "-ero", "-ario"], correct: 1 },
      { question: "El prefijo que siempre usa V y significa 'en vez de' es:", options: ["bi-", "anti-", "vice- (vicepresidente)", "re-"], correct: 2 },
      { question: "¿Lleva B o V la palabra 'in_ierno'?", options: ["V", "B", "W", "F"], correct: 0 },
      { question: "Complete la oración: 'El científico realizó un experimento en el la__oratorio.'", options: ["b", "v", "d", "p"], correct: 0 },
      { question: "Complete la oración: 'Mi hermano siempre se le__anta muy temprano.'", options: ["b", "v", "f", "d"], correct: 1 },
      { question: "Complete la oración: 'El perro mo__ía la cola cuando veía a su dueño.'", options: ["b", "v", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'En la excursión o__servamos muchas plantas y animales.'", options: ["v", "b", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'Mi mamá compró una nue__a mochila para el colegio.'", options: ["b", "v", "j", "g"], correct: 1 },
      { question: "Complete la oración: 'El estudiante escri__ió una historia muy interesante.'", options: ["v", "b", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'Los niños canta__an y juga__an en el recreo.'", options: ["v", "b", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'El a__uelo nos contó historias de su infancia.'", options: ["v", "b", "c", "z"], correct: 1 },
      { question: "Complete la oración: 'El atleta tuvo que su__ir una montaña muy alta.'", options: ["v", "b", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'La profesora nos pidió descri__ir el paisaje.'", options: ["v", "c", "b", "s"], correct: 2 },
      { question: "Complete la oración: 'El gato se su__ió al tejado de la casa.'", options: ["v", "c", "b", "s"], correct: 2 },
      { question: "Complete la oración: 'La maestra re__isó las tareas antes de la clase.'", options: ["b", "v", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'El niño reci__ió un premio por su esfuerzo.'", options: ["v", "b", "c", "z"], correct: 1 },
      { question: "Complete la oración: 'Nosotros ser__imos jugo natural en la fiesta.'", options: ["b", "v", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'El a__ión voló sobre las montañas.'", options: ["b", "v", "c", "z"], correct: 1 },
      { question: "Complete la oración: 'El estudiante resol__ió el problema de matemáticas.'", options: ["b", "v", "c", "s"], correct: 1 },
      { question: "Complete la oración: 'Mi familia con__ivió un momento muy especial.'", options: ["b", "v", "c", "s"], correct: 1 },

      // Tema 6 - Uso de C, S y Z (10 preguntas para balancear 120 total)
      { question: "¿Qué terminaciones de diminutivos usan C?", options: ["-mente, -dad", "-ismo", "-oso, -osa", "-cito, -cillo (pececito, jardincillo)"], correct: 3 },
      { question: "Los plurales de palabras que terminan en 'z' (como lápiz) adoptan la:", options: ["C (lápices)", "Z (lápizes)", "S (lápises)", "X (lápixes)"], correct: 0 },
      { question: "¿Qué letra usan gentilicios como 'costarricen_e'?", options: ["s (-ense)", "c (-ence)", "z (-enze)", "x"], correct: 0 },
      { question: "Las palabras muy grandes (superlativos) como 'bellí_ima' usan:", options: ["s (-ísima)", "c", "z", "j"], correct: 0 },
      { question: "¿Qué terminación usa '-sa', '-so', '-oso'?", options: ["X", "C", "S (valioso, poderosa)", "Z"], correct: 2 },
      { question: "¿Adjetivos terminados en '-az' (audaz, feroz) terminan en?", options: ["Z", "C", "S", "D"], correct: 0 },
      { question: "Las palabras con sufijo aumentativo o de golpe '-zón' usan:", options: ["c", "z (corazón, caparazón)", "s", "x"], correct: 1 },
      { question: "¿'Pe__es' y 'fuga__es' van con?", options: ["z (pez -> pezes)", "c (porque en plural z pasa a c)", "s (fugas)", "x"], correct: 1 },
      { question: "¿'Gigan_e_co' va con?", options: ["gigantesco (terminación -esco con s)", "gigantezco", "gigantecco", "gigantecco"], correct: 0 },
      { question: "Identifica el error:", options: ["Veloces", "Costarricenze", "Estadounidense", "Corazón"], correct: 1 },
      { question: "Complete la palabra: 'La profe__ora explicó la lección con mucha claridad.'", options: ["c", "z", "s", "x"], correct: 2 },
      { question: "Complete la palabra: 'El estudiante mostró mucho interé__ por la lectura.'", options: ["c", "z", "x", "s"], correct: 3 },
      { question: "Complete la palabra: 'Mi mamá preparó un deli__ioso almuerzo.'", options: ["s", "c", "z", "x"], correct: 1 },
      { question: "Complete la palabra: 'El atleta hizo un gran esfuer__o durante la competencia.'", options: ["s", "c", "z", "x"], correct: 2 },
      { question: "Complete la palabra: 'La maripo__a volaba sobre las flores del jardín.'", options: ["c", "z", "s", "x"], correct: 2 },
      { question: "Complete la palabra: 'El niño pidió permi__o para salir al recreo.'", options: ["c", "z", "x", "s"], correct: 3 },
      { question: "Complete la palabra: 'En el zoológico vimos un fero__ tigre.'", options: ["s", "c", "z", "x"], correct: 2 },
      { question: "Complete la palabra: 'La maestra revisó la redac__ión de los estudiantes.'", options: ["s", "z", "x", "c"], correct: 3 },
      { question: "Complete la palabra: 'La pa__iencia es una virtud importante para aprender.'", options: ["s", "z", "c", "x"], correct: 2 },
      { question: "Complete la palabra: 'El alumno tomó una buena deci__ión.'", options: ["c", "z", "s", "x"], correct: 2 },
      { question: "Complete la palabra: 'El lápi__ se cayó debajo del pupitre.'", options: ["s", "c", "x", "z"], correct: 3 },
      { question: "Complete la palabra: 'La noticia causó gran sorpre__a en el pueblo.'", options: ["c", "z", "s", "x"], correct: 2 },
      { question: "Complete la palabra: 'El campesino sembró maí__ en su parcela.'", options: ["s", "c", "z", "x"], correct: 2 },
      { question: "Complete la palabra: 'Los estudiantes escucharon con aten__ión las instrucciones.'", options: ["s", "z", "x", "c"], correct: 3 },
      { question: "Complete la palabra: 'La enfermera explicó la importan__ia de lavarse las manos.'", options: ["s", "z", "c", "x"], correct: 2 },
      { question: "Complete la palabra: 'El pescador atrapó un gran pe__ en el río.'", options: ["s", "c", "z", "x"], correct: 2 },
      { question: "Complete la palabra: 'La maestra pidió silen__io durante el examen.'", options: ["s", "z", "c", "x"], correct: 2 },
      { question: "Complete la palabra: 'Los alumnos escribieron una compo__ición sobre el medio ambiente.'", options: ["c", "z", "x", "s"], correct: 3 }
    ]
  }
];
