/**
 * EL TEXTO DE LA WEB · v11 (30/09/2026, noche) · VERSIÓN 4.
 *
 * El v11 es el v10 con los cambios de José del 30/09 por la noche (la
 * comunidad, dos preguntas del 1 a 1, «Soltar parte del control» y la
 * pregunta de la terapia de la portada). Registro en DECISIONES-v11.md.
 *
 * El v10:
 *
 * Es el v9 con el «ajuste del acompañamiento 1 a 1» de Nacho (30/09, tarde: el
 * 1 a 1 ya no se presenta como un pack con precio, sino como una conversación)
 * y la rendición reescrita por José. El registro está en
 * C:\Claude Code\projects\desprograma-web\texto\DECISIONES-v10.md.
 *
 * Lo que sigue es la cabecera del v9, que sigue valiendo:
 *
 * Es el v8 con la «reconfiguración de copy» de Nacho (30/09) aplicada entera:
 * sus textos entran literales, bloque por bloque, y cada bloque nuevo sustituye
 * al que decía lo mismo. Lo que Nacho no toca se queda como estaba en el v8.
 * El registro, con lo único que no sigue su brief al pie de la letra, está en
 * C:\Claude Code\projects\desprograma-web\texto\DECISIONES-v9.md.
 *
 * Claude no escribe frases nuevas: solo coloca las de Nacho y conserva las del v8.
 *
 * Las negritas del brief de Nacho van entre **dobles asteriscos**: la web las
 * pinta en seminegrita (negritas() en src/lib/texto.ts) y el volcado a
 * Markdown (TEXTO-v9.md) las enseña igual. verificar-texto las ignora al comparar.
 *
 * ⛔ NO SE TOCA UNA COMA AL MAQUETAR. Si una frase no cabe, se rediseña la caja,
 * no la frase. scripts/verificar-texto.mjs lo comprueba contra texto/TEXTO-v11.md.
 */

/** Las dos etiquetas de la acción de escribir. */
export const ACCION = {
  /** Cabecera, barra fija de las páginas y acompañamiento 1 a 1. */
  caso: 'Cuéntame tu caso',
  /** Botones de contacto de la portada. */
  portada: 'Cuéntame qué te pasa',
};

/* ═══════════════════════════════ PORTADA ═══════════════════════════════ */

export const HERO = {
  // José, 27/09, literal (Nacho: «Mantener»).
  antetitulo: 'Soy José. Te acompaño a encontrar tu propio camino.',
  // José, 01/10: la franja de debajo de la portada (con el grupal, ya no solo
  // «individual»). El 1 a 1 sigue con su ficha.
  franja: 'Acompañamiento online.',
  titular: '¿Y si no te falta fuerza de voluntad, sino comprender qué te lleva a repetir lo mismo?',
  // Nacho, 30/09: los párrafos iniciales, «No sé si esa es tu historia…» y
  // «Comparto el mapa…», en su orden.
  parrafos: [
    'Quizá te has propuesto cambiar una conducta, una relación o una forma de reaccionar y, durante un tiempo, lo has conseguido.',
    'Hasta que vuelve a aparecer la misma emoción, el mismo miedo o la misma necesidad… y acabas haciendo lo de siempre.',
    'También puede que hayas alcanzado cosas que pensabas que iban a hacerte sentir bien y, poco después, hayas necesitado otro objetivo, otra relación o algo nuevo que perseguir.',
    '**Cambian las circunstancias. Pero algo dentro sigue llevándote al mismo lugar.**',
    'No sé si esa es tu historia. Durante años fue parte de la mía.',
    'Comparto el mapa que me ayudó a comprender los mecanismos que dirigían mi vida, a dejar de luchar constantemente con lo que sentía y a empezar a transformar desde dentro lo que llevaba años intentando cambiar desde fuera.',
  ],
  /** Cierra la apertura. */
  lema: 'Comprender qué te mantiene atrapado. Dejar de repetir lo mismo. Y abrir espacio a una forma distinta de vivir.',
  /** Acción principal: baja a la explicación (#mapa). */
  accion: 'Descubre el mapa',
  /** Manifiesto visible bajo la portada. No es el H1. */
  // José, 02/10: «Despertar tu esencia.» en lugar de «Despertar el espíritu.».
  manifiesto: ['Comprender el ego.', 'Liberar la sombra.', 'Despertar tu esencia.'],
  cita: '«Quien mira hacia afuera, sueña. Quien mira hacia adentro, despierta.»',
  citaAutor: 'Carl Jung, carta a Fanny Bowditch (1916)',
};

export const RECONOCIMIENTO = {
  titulo: '¿Cuánto de lo que haces es para no detenerte?',
  entrada: 'Puede que te reconozcas en alguna de estas situaciones:',
  lineas: [
    'Por fuera todo parece estar en orden, pero por dentro hace tiempo que algo se apaga.',
    'Cuando algo te duele, te llenas de trabajo, planes, objetivos o distracciones para no quedarte demasiado tiempo ahí.',
    'Has llegado a lugares que deseabas durante años y, al alcanzarlos, la sensación ha durado mucho menos de lo que esperabas.',
    'Hay algo que llevas tiempo prometiéndote dejar y, cuando llega determinado momento, vuelves.',
    'Cambian las personas o las circunstancias, pero la historia emocional se parece demasiado.',
    'Has leído, reflexionado o entendido muchas cosas sobre ti… y aun así sigues reaccionando igual cuando aparece el disparador de siempre.',
  ],
  /** El bloque final, tras la lista (Nacho: en negrita la primera y la última). */
  absolucion: {
    blanca: 'Si te has visto en alguna, no significa que estés roto ni que te falte voluntad.',
    remate:
      'Muchas veces intentamos cambiar directamente la conducta sin llegar a ver qué ocurre dentro de nosotros justo antes de repetirla.',
    ahi: 'Ahí empieza el mapa.',
  },
};

/** La explicación: adonde lleva «Descubre el mapa» (#mapa). */
export const MAPA = {
  titulo: 'Lo que repites no empieza en lo que haces.',
  parrafos: [
    'Cuando hablo de «mecanismo», me refiero a la secuencia que se activa entre lo que ocurre, lo que interpretas, lo que sientes y la forma en que respondes.',
    'A veces esa respuesta te alivia durante unos minutos, unas horas o unos días. Pero después te devuelve al mismo punto.',
    'Puedes distraerte. Controlar. Buscar aprobación. Exigirte más. Comer. Trabajar. Discutir. Callarte. Perseguir otro objetivo.',
    'La forma cambia. **El mecanismo puede ser el mismo.**',
    'Cuando empiezas a verlo con claridad, ya no estás solamente intentando corregir la última conducta. Empiezas a comprender qué la sostiene.',
  ],
};

export const QUIEN_SOY = {
  titulo: 'Yo fui mi primer caso.',
  /** El puente hacia la historia: va justo encima del título. */
  puente: [
    'Puedes llegar aquí porque hay algo que quieres dejar de repetir.',
    'Pero cuando empiezas a mirar de verdad, la pregunta deja de ser solo **«¿cómo consigo no hacerlo?»** y empieza a convertirse en **«¿qué hay en mí que vuelve a necesitar esto?»**',
    'Esa pregunta cambió mi vida.',
  ],
  // Nacho, 30/09: el cuerpo nuevo y, al final, la frase posterior.
  parrafos: [
    'Cumplí con muchas de las cosas que se suponía que tenían que hacerme sentir bien: carrera, trabajo, casa, coche, pareja…',
    'Por fuera parecía que avanzaba. **Por dentro me iba apagando.**',
    'Perseguí logros, placer, relaciones y nuevas metas buscando fuera algo que no sabía encontrar dentro. Cambiaban los objetivos. Cambiaban las circunstancias. Pero el fondo de mi sufrimiento volvía a aparecer.',
    '**Fui y volví del infierno tantas veces que terminé aprendiendo el camino de ida y, sobre todo, el de vuelta.**',
    'No llegué a este trabajo solo leyendo sobre el ego o la consciencia. Llegué después de tener que observar mis propios patrones, reconocer cuánto controlaba mi vida aquello de lo que intentaba escapar y aprender a relacionarme de otra manera con lo que sentía.',
    'Las enseñanzas del Dr. David R. Hawkins me dieron un marco que me ayudó a ordenar muchas de esas piezas.',
    'Empecé a ver un mecanismo que antes dirigía mi vida sin que yo fuera consciente.',
    '**Ese es el mapa que hoy comparto contigo.**',
    'Porque cuando ves el mecanismo, dejas de luchar únicamente contra sus consecuencias.',
  ],
  // José, 02/10: en lugar de «Mi historia, en diez imágenes (en Instagram)» y
  // «El canal», botones a Instagram, WhatsApp y YouTube.
  redes: 'Puedes encontrarme en:',
};

/** La dimensión espiritual: va entre «Yo fui mi primer caso.» y el método. */
export const RENDICION = {
  titulo: 'Comprender no es lo mismo que dejar de luchar.',
  // José, 30/09, literal. La última frase («No necesitas compartir mi forma de
  // entenderlo…») la quitó él. «rendición», en negrita, como en el v9.
  parrafos: [
    'Puedes identificar perfectamente una reacción y aun así encontrarte con ella una y otra vez.',
    'A mí no me bastó con entender intelectualmente lo que me pasaba. Tuve que aprender a relacionarme de otra manera conmigo mismo.',
    'Dentro del camino que propongo, a ese movimiento de dejar de pelear con lo que aparece y aprender a liberar los conflictos que te mantienen anclado en la escasez le llamo **rendición**.',
    'No hablo de resignarse ni de dejar de actuar. Hablo de aceptar lo que ya está presente en cada uno de nosotros, reconocer hasta dónde llega nuestra pequeñez como individuo y abrir espacio a algo más grande.',
    'Todo forma parte de mi experiencia y del enfoque que comparto, junto con la observación e identificación de los patrones del ego y su aplicación a decisiones, relaciones y situaciones cotidianas.',
  ],
};

export const METODO = {
  titulo: 'Del patrón automático a una respuesta más consciente.',
  cita: '«Cuando una situación interior no se hace consciente, aparece fuera como destino.»',
  citaAutor: 'Carl Jung, Aion (1951)',
  pasos: [
    {
      nombre: 'Ver lo que realmente está ocurriendo',
      texto:
        'Partimos de una situación real. Qué pasó, qué interpretaste, qué sentiste y qué hiciste después. Sin buscar una explicación perfecta ni juzgarte por haber reaccionado así.',
    },
    {
      nombre: 'Reconocer el mecanismo',
      texto:
        'Observamos qué se repite y qué función cumple esa respuesta: qué intentas evitar, conseguir, controlar o proteger. Las enseñanzas de David R. Hawkins forman parte de las referencias de mi enfoque.',
    },
    {
      nombre: 'Practicar otra forma de responder',
      texto:
        'No se trata solo de entenderte mejor. Se trata de llevar esa comprensión a la vida real: aprender a dejar de luchar con lo que sientes, soltar parte del control y tomar decisiones desde un lugar más consciente.',
    },
  ],
  cierre: 'Comprender. Reconocer. Soltar. Y llevarlo a tu vida.',
};

export const CANAL = {
  titulo: 'Empieza por escuchar',
  parrafos: [
    'En el canal desarrollo distintas piezas del mapa: patrones, pensamientos, emociones, sentimientos, mente consciente e inconsciente, niveles de conciencia del Dr. David R. Hawkins.',
    '**No necesitas empezar por el principio. Empieza por aquello que ahora mismo más se parece a tu vida.**',
  ],
};

export const CAMINOS = {
  titulo: 'Encuentra tu punto de partida',
  entrada: [
    'No todo el mundo necesita lo mismo en el mismo momento.',
    'Hay quien necesita mirar una situación concreta acompañado. Hay quien todavía quiere observar y escuchar antes de dar ese paso. Y hay quien quiere comprender el mecanismo completo para aprender a reconocerlo por sí mismo.',
    // v6, 01/10: con el acompañamiento grupal, cuatro (solo cambia el número).
    '**Por eso existen cuatro puertas.**',
  ],
  lista: [
    {
      nombre: 'Acompañamiento 1 a 1',
      // Nacho, ajuste del 30/09: sin precio, sesiones ni duración; la acción
      // lleva a contar el caso (la carta del 1 a 1).
      texto:
        'Un espacio individual para mirar conmigo aquello que se está repitiendo en tu vida, comprender qué mecanismo hay detrás y empezar a relacionarte de otra manera con lo que hoy te está atrapando.',
      accion: 'Cuéntame tu caso',
      ruta: '/acompanamiento-1-a-1#contacto',
      estado: 'abierto' as const,
    },
    {
      // Nacho, 01/10 (versión definitiva del acompañamiento grupal): la tarjeta.
      nombre: 'Acompañamiento grupal',
      texto:
        'Encuentros guiados para comprender y trabajar las conductas y los patrones que quieres cambiar. La fuerza de compartir con otras personas, unida a una metodología para llevar lo aprendido a tu vida.',
      accion: 'Conocer el acompañamiento grupal',
      ruta: '/acompanamiento-grupal',
      estado: 'abierto' as const,
    },
    {
      nombre: 'La comunidad',
      texto:
        'Un espacio para seguir cerca del proyecto, escuchar, compartir preguntas y recorrer este camino con otras personas sin necesidad de tener todas las respuestas.',
      accion: 'Conocer la comunidad',
      ruta: '/comunidad',
      estado: 'abierto' as const,
    },
    {
      nombre: 'Las piezas del Mecanismo',
      texto:
        'Una escuela en preparación para reunir el mapa completo y aprender a reconocer por ti mismo las piezas que intervienen en aquello que repites.',
      dato: 'En preparación.',
      accion: 'Avísame cuando abra',
      ruta: '/escuela',
      estado: 'en-preparacion' as const,
    },
  ],
};

export const FRECUENTES_HOME = {
  titulo: 'Antes de escribirme',
  lista: [
    {
      pregunta: '¿Y si no sé exactamente qué me pasa?',
      respuesta:
        'No necesitas llegar con un diagnóstico ni una explicación ordenada. Podemos empezar por una situación, una emoción, una conducta que se repite o una pregunta que llevas tiempo haciéndote.',
    },
    {
      pregunta: 'He entendido muchas cosas sobre mí. ¿Por qué sigo repitiéndolas?',
      respuesta:
        'Porque comprender algo intelectualmente y responder de otra manera cuando aparece una emoción intensa no son lo mismo. Una parte importante de este trabajo consiste precisamente en observar qué ocurre entre ambas cosas.',
    },
    {
      pregunta: '¿Tengo que conocer a Hawkins o tener unas creencias concretas?',
      respuesta:
        'No. No necesitas conocimientos previos. Mi camino y mi enfoque sí tienen una dimensión espiritual y las enseñanzas de David R. Hawkins son una de mis referencias. Te lo mostraré con claridad para que tú decidas qué te resulta útil y qué resuena contigo.',
    },
    {
      pregunta: '¿Y si pienso que debería poder resolverlo solo?',
      respuesta:
        'Puedes recorrer muchas partes de este camino por ti mismo. Yo también lo intenté durante mucho tiempo. A veces una conversación, una mirada externa o un espacio donde no necesitas sostener una imagen de ti permite ver algo que desde dentro cuesta reconocer.',
    },
    {
      pregunta: '¿Esto es terapia?',
      // José, 30/09 (noche), literal.
      respuesta:
        'Es acompañamiento de coaching desde mi experiencia y mi enfoque de trabajo y es totalmente complementario al tratamiento psicológico convencional.',
    },
    {
      pregunta: '¿Puedo escribir por alguien a quien quiero?',
      respuesta:
        'Sí, si quieres hablar de lo que tú estás viviendo y de cómo te afecta. Si la otra persona quiere iniciar un proceso, tendrá que hacerlo por decisión propia.',
    },
  ],
};

/** El formulario común (portada y acompañamiento 1 a 1). */
export const CONTACTO = {
  titulo: 'Cuéntame qué te está pasando',
  // Nacho, 30/09: la entrada de la portada. Su tercera línea es la firma (abajo),
  // que en la portada va aquí, con su cara, y no junto al botón.
  entrada: [
    'No necesitas escribirlo bien ni tenerlo claro.',
    'Cuéntame qué se está repitiendo, qué te está pesando o qué llevas tiempo intentando cambiar.',
  ],
  campos: [
    { etiqueta: '¿Qué te gustaría comprender o cambiar?', opcional: false, filas: 5 },
    { etiqueta: '¿Desde cuándo te pasa?', opcional: true, filas: 2 },
    { etiqueta: '¿Qué has intentado hasta ahora?', opcional: true, filas: 3 },
    { etiqueta: '¿Qué te gustaría que fuera diferente?', opcional: true, filas: 3 },
  ],
  nombre: 'Tu nombre',
  contacto: 'Tu correo para responderte',
  boton: 'Enviar mi mensaje',
  firma: 'Lo leo yo. Te contesto yo.',
  // José, 01/10: sin «MAPA»; debajo, los botones de Instagram y WhatsApp.
  privado: 'También puedes escribirme por:',
  // José, 01/10: el mensaje que WhatsApp deja escrito al abrir el chat con
  // su número (va en el enlace, no en la página).
  mensajeWhatsApp:
    'Hola Jose. He estado leyendo tu web y me gustaría contarte lo que estoy viviendo y conocer un poco más tu acompañamiento. ¿Podemos hablar?',
  error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por Instagram.',
};

/* ════════════════════ PÁGINA · ACOMPAÑAMIENTO 1 A 1 ════════════════════ */

export const ACOMPANAMIENTO = {
  antetitulo: 'Acompañamiento 1 a 1',
  titulo: '¿Cuántas veces has decidido hacerlo diferente y, llegado el momento, has vuelto a reaccionar igual?',
  parrafos: [
    'Puede que entiendas perfectamente lo que «deberías» hacer. Que hayas leído, reflexionado o trabajado mucho en ti.',
    'Y aun así, cuando aparece determinada emoción, una relación, el miedo, la culpa o la necesidad de control, vuelves a lo conocido.',
    '**Ahí es donde empieza mi trabajo contigo.**',
    'No para decirte cómo tienes que vivir, sino para ayudarte a ver el mecanismo que está operando cuando vuelves a caer en lo mismo.',
    'Porque cuando empiezas a reconocer qué sucede dentro de ti antes de reaccionar, puedes empezar a responder desde un lugar diferente.',
  ],
  /** La ficha de la cabecera, junto al botón (ajuste de Nacho del 30/09, §3). */
  ficha: 'Acompañamiento individual online. Primero hablamos de lo que estás viviendo.',
  /** El bloque que Nacho añade justo después de la apertura (su primera línea, en
      negrita, es el título). Sin «Durante cuatro sesiones» (ajuste §2). */
  sesiones: {
    titulo: 'Trabajamos sobre situaciones reales de tu vida.',
    parrafos: [
      'Miramos qué activa el patrón, qué estás sintiendo, qué interpretación aparece, dónde entra el miedo, el control o la necesidad de aprobación y qué haces para intentar escapar de esa incomodidad.',
      'No buscamos únicamente comprenderlo. Buscamos que esa comprensión empiece a notarse en tus decisiones, tus relaciones y tu día a día.',
    ],
  },
  /** Sustituye al párrafo espiritual del v8. Sin «Primero hablamos y comprobamos
      si esta forma de trabajar encaja contigo.» (ajuste §8). */
  espiritualidad: [
    // José, 02/10, literal.
    'Mi enfoque une esta observación práctica con un trabajo de transformación interior: aprender a relacionarnos de otra manera con lo que sentimos, soltar la necesidad de control y dejar de luchar contra nosotros mismos para empezar a vivir con más consciencia, claridad y libertad.',
    'No necesitas tener todas las respuestas antes de empezar.',
  ],
  encaja: {
    titulo: 'Puede encajar contigo si…',
    lineas: [
      'Hay una conducta, reacción o relación que sabes que te hace daño y aun así vuelves a ella.',
      'Has entendido muchas cosas sobre ti, pero entenderlas no ha sido suficiente para dejar de repetirlas.',
      'Has conseguido cosas que pensabas que iban a hacerte sentir bien y el alivio ha durado menos de lo esperado.',
      'Te descubres buscando aprobación, intentando controlarlo todo, evitando determinadas emociones o llenando el tiempo para no detenerte.',
      'Quieres comprender qué ocurre dentro de ti cuando se activa el patrón, no solo intentar contener sus consecuencias.',
      'Buscas un espacio individual donde poder mirar todo esto con continuidad y honestidad.',
    ],
  },
  trabajo: {
    titulo: 'Qué vamos a trabajar',
    // Sin «Cuatro sesiones nos dan un primer marco…» (ajuste §2).
    entrada:
      'Cada proceso es distinto. No prometo un resultado concreto: trabajaremos con lo que vaya apareciendo en tu experiencia.',
    bloques: [
      {
        nombre: 'Reconocer tu patrón',
        texto:
          'Partimos de situaciones concretas: qué ocurre cuando te sientes rechazado, inseguro, frustrado o fuera de control. Observamos qué haces después: callarte, discutir, buscar aprobación, distraerte, exigirte más o huir de lo que sientes.',
      },
      {
        nombre: 'Comprender qué ocurre antes de reaccionar',
        texto:
          'Miramos qué emoción aparece, qué interpretación haces, qué necesitas en ese momento y qué respuesta se ha vuelto automática.',
      },
      {
        nombre: 'Soltar parte del control',
        // José, 30/09 (noche). Solo se arreglan los espacios junto a las comas y
        // la coma entre «mejorar» y lo que mejora.
        texto:
          'Observamos tu relación con los pensamientos, el control y la identidad que has construido. Dentro del marco que trabajaremos, aprenderás a liberarte del conflicto que habita en ti para mejorar la relación contigo mismo, la relación con tu propósito y aprenderás a construir relaciones sanas y duraderas.',
      },
      {
        nombre: 'Llevarlo a tu vida',
        texto:
          'Entre sesiones tendrás una observación o práctica concreta. Volvemos sobre lo que haya ocurrido y trabajamos desde tu experiencia real, no desde una teoría perfecta.',
      },
    ],
  },
  /** Nacho: «Antes de “Cómo es el proceso”, añadir». */
  autoridad: {
    titulo: 'No acompaño esto solo porque lo haya estudiado',
    parrafos: [
      'Durante años fui yo quien intentaba cambiar las consecuencias sin comprender del todo el mecanismo que había debajo.',
      'Sé lo que es buscar fuera, repetir una conducta que habías jurado dejar, intentar controlarte y acabar otra vez en el mismo lugar.',
      'Mi experiencia no hace que tu historia sea igual que la mía. Pero sí es una parte esencial de la forma en que escucho y acompaño este trabajo.',
    ],
    cierre: 'Yo fui mi primer caso.',
  },
  // Nacho, ajuste del 30/09 (§4): sustituye a «Cómo es el proceso».
  proceso: {
    titulo: 'Cómo empezamos',
    pasos: [
      {
        nombre: 'Me escribes',
        texto:
          'Cuéntame qué se está repitiendo, qué te está pesando o qué llevas tiempo intentando cambiar. No necesitas saber explicarlo perfectamente.',
      },
      {
        nombre: 'Leo personalmente tu caso',
        texto: 'Quiero entender qué estás viviendo antes de hablarte de ningún proceso.',
      },
      {
        nombre: 'Hablamos',
        texto:
          'Si siento que mi forma de trabajar puede aportar algo a tu situación, tendremos una conversación para conocernos y profundizar un poco más en lo que está ocurriendo.',
      },
      {
        nombre: 'Te explico cómo trabajaría contigo',
        texto:
          'Después de escucharte, te explicaré con claridad cómo plantearía el acompañamiento, el formato y qué puedes esperar de mí.',
      },
      {
        nombre: 'Tú decides',
        texto: 'Sin presión. La conversación también sirve para que tú notes si quieres recorrer este tramo conmigo.',
      },
    ],
  },
  // Nacho, 30/09: sustituye entero a «Tu compromiso contigo mismo».
  compromiso: {
    titulo: 'Yo puedo acompañarte, pero no puedo hacer el proceso por ti',
    parrafos: [
      'Mi compromiso es poner a tu disposición mi experiencia, mi atención y todo lo que he aprendido recorriendo este camino.',
      'El tuyo es venir dispuesto a observarte con honestidad y llevar lo que descubramos fuera de nuestras conversaciones.',
      // Sin «por pagar 320 € ni» ni «La inversión económica abre el espacio.»
      // (ajuste §2: fuera el precio y lo que justifica la inversión).
      '**La transformación no ocurre por hablar conmigo una hora.**',
      'Ocurre cuando empiezas a reconocer en tu vida aquello que antes sucedía de forma automática y practicas una respuesta diferente.',
      '**Tu atención y tu compromiso son los que pueden darle profundidad.**',
    ],
  },
  // Nacho, ajuste del 30/09 (§5 y §6): fuera «¿Cuánto cuesta?», «¿Cuánto dura?»
  // y «¿Puedo empezar ahora?»; estas seis sustituyen a las demás. El título ya
  // no puede hablar de precio: «Preguntas frecuentes», como en la comunidad.
  frecuentes: {
    titulo: 'Preguntas frecuentes',
    lista: [
      {
        pregunta: '¿Tengo que saber exactamente qué me pasa?',
        respuesta: [
          '**No. De hecho, muchas veces ese es precisamente el punto de partida.**',
          'Puede que solo sepas que vuelves a la misma relación, que reaccionas de una forma que después lamentas, que hay una conducta que no consigues dejar o que algo dentro de ti no está bien aunque por fuera todo parezca funcionar.',
          'Empezamos por ahí.',
        ],
      },
      {
        pregunta: 'Entiendo bastante bien lo que me pasa. ¿Por qué sigo repitiéndolo?',
        respuesta: [
          '**Porque entender el patrón no significa que hayas dejado de estar identificado con él cuando aparece.**',
          'Puedes saber perfectamente que buscas aprobación, que intentas controlarlo todo o que utilizas una conducta para no sentir algo y, llegado el momento, volver a hacerlo.',
          'En el acompañamiento no nos quedamos solo en comprenderlo. Miramos qué ocurre en ti cuando el mecanismo se activa de verdad.',
        ],
      },
      {
        pregunta: 'Ya he leído mucho, he trabajado en mí o he hecho terapia. ¿Tiene sentido?',
        respuesta: [
          'Puede tenerlo.',
          'No necesito que olvides nada de lo que ya has aprendido ni competir con otros procesos que te hayan ayudado.',
          '**Trabajamos sobre lo que sigue ocurriendo hoy.**',
          'Si hay algo que comprendes intelectualmente pero continúa gobernándote cuando aparece una emoción, una relación o una situación concreta, ahí tenemos algo real que observar.',
        ],
      },
      {
        pregunta: '¿Cómo puedes ayudarme a transformar lo que estoy viviendo?',
        // José, 01/10 (tarde): su respuesta nueva, literal.
        respuesta: [
          'Mi forma de acompañar nace de mi propia experiencia y del camino que me ayudó a transformar mi vida.',
          'Quiero ayudarte a comprender qué te mantiene atrapado en los mismos patrones, reconocer las emociones y creencias que pueden estar detrás de tus conductas y aprender a relacionarte de otra manera con lo que sientes, sin tener que escapar constantemente de ello.',
          'Trabajaremos para que puedas soltar parte del miedo y del control, dejar de identificarte tanto con los mecanismos del ego y empezar a tomar decisiones desde un lugar más consciente, libre y conectado con tu esencia.',
          'Mi propósito es compartir contigo lo que he aprendido y ayudarte a encontrar tu propia manera de llevarlo a la vida.',
        ],
      },
      {
        pregunta: '¿Trabajas con personas que tienen conductas adictivas?',
        // La respuesta de Nacho, entera. La segunda línea es de José (27/09) y se
        // queda: qué ofrece José no lo cambia una revisión de redacción.
        respuesta: [
          '**Sí. Es un terreno que también conozco desde mi propia experiencia.**',
          'La adicción es el efecto; yo puedo ayudar en la causa.',
          'En el acompañamiento podemos mirar lo que sucede alrededor de esa conducta: el impulso, la emoción que aparece, aquello de lo que intentas escapar, la necesidad de alivio, el control y el patrón que vuelve a ponerse en marcha.',
          // José, 30/09 (noche, tras el compact): fuera la línea de la dependencia.
        ],
      },
      {
        pregunta: '¿Esto es terapia?',
        // José, 30/09 (noche): «trasformación» pasa a «transformación», como en el
        // resto de la web. La segunda línea, reescrita por José tras el compact.
        respuesta: [
          '**Trabajo contigo sobre los patrones, mecanismos, decisiones y experiencias que aparecen en tu vida, desde mi experiencia y mi enfoque de coaching y transformación personal.**',
          'Si estás siguiendo un tratamiento, no tienes que abandonarlo para trabajar conmigo.',
        ],
      },
    ],
  },
  // Nacho, ajuste del 30/09 (§7): el cierre y su botón.
  contacto: {
    titulo: 'Cuéntame qué estás viviendo.',
    entrada: [
      'No necesitas saber explicarlo perfectamente.',
      'Cuéntame qué se repite, qué te está pesando o qué llevas tiempo intentando cambiar sin conseguir llegar al fondo.',
      '**Lo voy a leer yo.**',
      'Y si siento que mi forma de trabajar puede aportar algo a lo que estás viviendo, te responderé personalmente para que hablemos.',
      '**Ese es el primer paso.**',
    ],
    boton: 'Quiero contarte mi caso',
  },
};

/* ═════════════════ PÁGINA · ACOMPAÑAMIENTO GRUPAL (v6) ═════════════════ */

// Nacho, 01/10: «Versión definitiva para implementar con Claude» (copia en
// texto/fuentes/2026-10-01-acompanamiento-grupal-version-final-nacho.md),
// literal. Sustituye entera a la primera versión de la mañana, que queda
// descartada: no se mezclan. El porqué de cada pieza, en DECISIONES-v17.md.
// Sin grupos activos, fechas, plazas ni precios: todo se habla en privado.
export const GRUPAL = {
  /** El nombre de la página (la tarjeta de la portada, las migas). */
  nombre: 'Acompañamiento grupal',
  // Bloque 1 · Hero
  antetitulo: 'Acompañamiento grupal · Conductas adictivas y patrones repetitivos',
  // José, 01/10 (sobre la versión de Nacho): «cambiar algo» y «volviendo a hacer».
  titulo: '¿Cuántas veces has intentado cambiar algo y has terminado volviendo a hacer lo mismo?',
  parrafos: [
    'Puede que hayas probado a controlarte, cambiar de hábitos, hacerte promesas o empezar de cero. Durante un tiempo funciona. Pero cuando regresa el malestar, el impulso o esa emoción que no sabes cómo sostener, vuelves a lo conocido.',
    // José, 01/10.
    'Y entonces no solo aparece la frustración. También puede aparecer la culpa, la vergüenza, el autocastigo contigo mismo, la duda o la sensación de que siempre repites patrón.',
    '**No tienes que seguir enfrentándote a ese momento a ciegas ni recorrer el camino a solas.**',
  ],
  /** Qué es: va con la raya lima, como la ficha del 1 a 1. */
  presentacion:
    'Este acompañamiento grupal reúne dos cosas: personas con las que compartir el proceso y encuentros guiados en los que aprender a reconocer y trabajar los mecanismos que intervienen en aquello que quieres cambiar.',
  accion: 'Quiero contarte mi caso',
  bajoAccion: 'El primer contacto es privado. Hablamos antes de incorporarte a un grupo.',
  // Bloque 2 · Identificación con el dolor
  dolor: {
    // José, 01/10.
    titulo: 'Sabes lo que quieres cambiar. Lo difícil es identificar y reconducir lo que ocurre justo antes de volver a repetir.',
    entrada: 'Quizá te reconozcas en alguna de estas situaciones:',
    lineas: [
      'Recurres a una conducta para sentir alivio, aunque después te encuentres peor.',
      'Has conseguido estar un tiempo sin repetirla, pero cuando aparece determinado malestar vuelves al punto de partida.',
      'Te propones hacerlo mejor y acabas peleándote contigo mismo cada vez que no lo consigues.',
      'Intentas mantenerlo todo bajo control o buscas constantemente algo fuera que te ayude a no sentir lo que llevas dentro.',
      'Has hablado de lo que te pasa o has aprendido mucho sobre ti, pero en el momento del impulso te faltan recursos para responder de otra manera.',
    ],
    cierre:
      '**El trabajo no consiste solo en contener la conducta. Consiste también en comprender qué sucede dentro de ti cuando vuelve a aparecer.**',
  },
  // Bloque 3 · La historia de José como autoridad
  historia: {
    titulo: 'Yo también estuve ahí. Y sé el valor que puede tener un grupo.',
    parrafos: [
      'Las conductas adictivas y repetitivas fueron uno de los mayores dolores de mi vida. Intentaba cambiar lo que hacía, pero durante mucho tiempo volvía a encontrarme en el mismo lugar.',
      // José, 01/10: cambia desde «algunas…» (la frase empieza igual).
      'Pasé por grupos en los que había personas en distintas etapas, algunas queriendo estar en recuperación y otras trabajando la recuperación. Compartir aquel espacio me ayudaba durante algún tiempo. Pero había algo que yo echaba en falta: comprender de verdad qué mecanismo se ponía en marcha cuando volvía el impulso y tener una dirección clara para trabajar con él.',
      'En mi propio proceso tuve que mirar más adentro. Empecé a reconocer la relación que tenían mis conductas con la forma en que gestionaba —o evitaba— mis emociones, y con la culpa y la vergüenza que arrastraba desde niño.',
      '**Yo fui mi primer caso.**',
      'Aprender a observar esos mecanismos, dejar de luchar constantemente con lo que sentía y practicar otra forma de responder cambió profundamente mi vida.',
      // José, 01/10 (2.ª tanda). La entrada, en negrita como la que sustituye.
      '**De esa experiencia nace este acompañamiento:** un espacio donde compartir el camino con personas que también están viviendo su propio proceso, aprender a reconocer los mecanismos que te mantienen atrapado y descubrir cómo empezar a responder de otra manera cuando vuelven a aparecer en tu día a día.',
    ],
  },
  // Bloque 4 · Qué hace diferente a los encuentros
  diferente: {
    titulo: 'Un espacio para compartir. Un método para avanzar.',
    parrafos: [
      'Escuchar a alguien que ha vivido algo parecido puede ayudarte a sentirte comprendido y menos solo. Y a veces otra persona pone palabras a algo que tú todavía no habías conseguido reconocer.',
      'Quiero que esa cercanía forme parte del grupo. Pero también que cada encuentro tenga una dirección y que no todo termine cuando cerramos la conversación.',
    ],
    /** Los cuatro elementos de cada encuentro (no son cuatro sesiones: sin números). */
    elementos: [
      {
        nombre: 'Una pieza del mecanismo',
        texto:
          'En cada encuentro trabajamos un tema: el impulso, la evitación emocional, la culpa, la vergüenza, el ego, la necesidad de control o la búsqueda de aprobación. No como teoría aislada, sino conectándolo con la vida real.',
      },
      {
        nombre: 'Experiencias que nos ayudan a reconocernos',
        texto:
          'Abrimos espacio para compartir lo que cada persona está viviendo, escuchar sin competir ni juzgar y descubrir cómo una misma pieza puede aparecer de formas diferentes.',
      },
      {
        nombre: 'Observar el patrón mientras ocurre',
        texto:
          'Miramos qué activa la conducta, qué sentimos, cómo interpretamos la situación y qué respuesta hemos aprendido a repetir. El objetivo es reconocer el mecanismo, no quedarnos únicamente en sus consecuencias.',
      },
      {
        nombre: 'Algo concreto para llevarte a tu vida',
        texto:
          'Terminamos con una observación o práctica sencilla relacionada con el tema trabajado. En los siguientes encuentros podremos volver sobre lo que hayas descubierto.',
      },
    ],
    cierre:
      '**Comprender lo que te ocurre. Sentirte acompañado mientras lo trabajas. Y empezar a llevar esa comprensión a tus decisiones cotidianas.**',
  },
  // Bloque 5 · Beneficios y transformación posible
  beneficios: {
    titulo: 'Que el encuentro te acompañe también cuando vuelves a tu vida.',
    entrada:
      'Quiero que encuentres comprensión y apoyo durante los encuentros, pero también que puedas llevarte herramientas para afrontar de otra manera lo que sucede fuera del grupo.',
    antesLista: 'A través del trabajo compartido puedes empezar a:',
    lineas: [
      'Reconocer antes qué situaciones, pensamientos o emociones suelen activar tus patrones.',
      'Poner palabras a experiencias que hasta ahora vivías con culpa o en silencio.',
      'Escuchar otras perspectivas y descubrir que no eres el único que se enfrenta a determinadas dificultades.',
      'Practicar una relación menos reactiva con lo que sientes, sin exigirte resultados perfectos.',
      'Sostener tu compromiso personal con un espacio de continuidad y un trabajo que puedas aplicar a tu día a día.',
    ],
    cierre:
      '**El objetivo no es salir de cada encuentro con una solución mágica. Es que cada vez tengas más claridad sobre lo que te sucede y más recursos para responder de otra manera.**',
  },
  // Bloque 6 · Puede encajar contigo si…
  encaja: {
    titulo: 'Puede encajar contigo si…',
    lineas: [
      'Hay una conducta adictiva o repetitiva que quieres cambiar y sientes que intentarlo solo te está costando.',
      'Quieres algo más que hablar de lo que te pasa: te interesa comprender el mecanismo y llevar ese aprendizaje a tu vida.',
      'Crees que escuchar otras experiencias puede ayudarte a reconocer aspectos de la tuya.',
      'Buscas un espacio guiado, con respeto, donde compartir a tu ritmo y asumir un compromiso activo con tu proceso.',
    ],
    cierre:
      '**No necesitas tener todas las respuestas ni encontrarte en el mismo punto que otras personas para escribirme. Primero hablamos de tu situación.**',
  },
  // Bloque 7 · Cómo empezamos
  proceso: {
    titulo: 'Primero hablamos. El primer paso es personal.',
    pasos: [
      {
        nombre: 'Me escribes en privado',
        texto:
          'Me cuentas qué estás viviendo, qué te gustaría cambiar y qué te atrae de esta modalidad. No necesitas tenerlo todo claro.',
      },
      {
        nombre: 'Hablamos',
        texto:
          'Quiero escucharte, explicarte mi enfoque y conocer qué necesitas antes de plantearte la participación en un grupo.',
      },
      {
        // José, 01/10 (2.ª tanda): sin la inversión.
        nombre: 'Te explico',
        texto:
          'Hablaremos con calma, te contaré cómo son los encuentros y veremos si este es el espacio que necesitas en este momento.',
      },
      {
        nombre: 'Tú decides',
        texto:
          'Escribirme no te compromete a nada. Y si el acompañamiento grupal no es lo apropiado para ti en ese momento, te lo diré con claridad.',
      },
    ],
    accion: 'Quiero hablar con José',
  },
  // Bloque 8 · Preguntas frecuentes
  frecuentes: {
    titulo: 'Preguntas frecuentes',
    lista: [
      {
        pregunta: '¿Necesito tener una adicción para participar?',
        respuesta: [
          'No. El enfoque está centrado en las conductas adictivas y los patrones repetitivos que quieres cambiar. También podemos hablar de otras conductas o respuestas que se repiten y te hacen sufrir. En la conversación previa veremos qué grupo es adecuado para lo que estás viviendo.',
        ],
      },
      {
        // José, 01/10: la pregunta; la respuesta se queda.
        pregunta: '¿Y si suelo recaer en lo mismo siempre y parece que no aprendo?',
        respuesta: [
          // José, 01/10 (2.ª tanda): sin la frase de la atención especializada.
          'No doy por hecho que todas las personas estén en el mismo momento. Yo mismo participé en grupos con personas que se encontraban en etapas diferentes. Hablaremos de tu situación y de qué apoyo necesitas.',
        ],
      },
      {
        pregunta: '¿Tendré que contar mis problemas delante de desconocidos?',
        respuesta: [
          // José, 01/10 (2.ª tanda).
          'Puedes empezar escuchando y participar a tu ritmo. Trabajamos con normas de respeto y discreción, explicando antes de comenzar cada sesión los límites de la privacidad propios de cualquier grupo.',
        ],
      },
      {
        pregunta: '¿En qué se diferencia de la comunidad?',
        respuesta: [
          'La comunidad es un espacio abierto para compartir contenidos y reflexiones. En el acompañamiento grupal hay encuentros guiados por mí, con temas concretos, trabajo sobre experiencias reales y prácticas para llevar lo aprendido a tu día a día.',
        ],
      },
      {
        pregunta: '¿Son clases o hay espacio para compartir?',
        respuesta: [
          'Ambas cosas forman parte del encuentro. Presento una pieza del mecanismo y después la trabajamos a partir de situaciones y experiencias reales. No es un curso de lecciones consecutivas ni un espacio en el que solo nos reunimos para contar lo que nos ha pasado.',
        ],
      },
      // José, 01/10: fuera «¿Tengo que compartir tus creencias espirituales?».
      // José, 01/10 (2.ª tanda): fuera «¿Esto es terapia de grupo…?» y
      // «¿Cuándo son los encuentros y cuánto cuestan?».
    ],
  },
  // Bloque 9 · Cierre y contacto (el microtexto, «Lo leo yo. Te contesto yo.»,
  // es la promesa de la carta: CONTACTO.firma).
  contacto: {
    titulo: 'Puedes empezar por contarme qué estás viviendo.',
    entrada: [
      'Si llevas tiempo intentando abandonar una conducta o cambiar un patrón y quieres conocer el acompañamiento grupal, escríbeme.',
      'No necesitas explicar perfectamente tu historia ni saber todavía si esta es tu modalidad.',
      '**Te escucho primero en privado. Después hablamos de cómo puedo acompañarte y de las opciones disponibles.**',
    ],
    boton: 'Quiero contarte mi caso',
    /** El mensaje que WhatsApp deja escrito desde esta página (va en el botón). */
    mensajeWhatsApp:
      'Hola, José. He leído la sección de acompañamiento grupal y me gustaría contarte mi situación para conocer cómo trabajas y si esta modalidad puede encajar conmigo. ¿Podemos hablar?',
  },
};

/* ════════════════════════ PÁGINA · LA COMUNIDAD ════════════════════════ */

export const COMUNIDAD = {
  antetitulo: 'La comunidad',
  titulo: 'Hay preguntas que cambian cuando dejas de hacértelas a solas.',
  parrafos: [
    // José, 02/10, literal.
    '¿Con cuántas personas puedes hablar abiertamente de lo que te preocupa, de los patrones que repites o de las dificultades que estás atravesando sin sentirte juzgado ni tener que aparentar que tienes todas las respuestas?',
    'Quiero que esta comunidad sea un espacio de cercanía y confianza donde podamos compartir experiencias, comprender mejor los mecanismos del ego, cuestionar nuestras creencias y aprender juntos a relacionarnos de otra manera con nosotros mismos y con la vida.',
    'Yo también estaré presente, compartiendo reflexiones, audios, aprendizajes y experiencias de mi propio camino.',
    '**Aquí no tienes que demostrar nada ni estar en un punto determinado de tu proceso. Puedes compartir, preguntar o simplemente escuchar. Cada uno a su ritmo.**',
  ],
  boton: 'Quiero entrar',
  /** Pegado a cada botón que abre el grupo, también en la barra fija.
   *  José, 01/10 (tarde): sustituye a «La comunidad es gratis.» y al aviso del número. */
  aviso: 'Pulsa para ir a La comunidad, es un grupo de WhatsApp.',
  desde: {
    titulo: 'Puedes empezar desde donde estás',
    parrafos: [
      'Quizá acabas de llegar a El mapa que faltaba y todavía estás intentando entender de qué va todo esto.',
      'Quizá ya has trabajado conmigo y quieres seguir cerca del enfoque.',
      'O quizá llevas tiempo haciéndote preguntas que no encuentras con quién compartir.',
      '**No necesitas saber más, creer más ni tener una historia especial para entrar.**',
      'Esta comunidad nace también de una cercanía que yo eché en falta en algunos momentos de mi propia vida.',
    ],
  },
  encontraras: {
    titulo: 'Qué encontrarás',
    lineas: [
      'Un audio breve o una pregunta semanal para observar una pieza del mapa en tu propia vida.',
      'Herramientas prácticas para dejar de repetir lo que te hace daño y aprender a responder de otra manera.',
      'Un directo grupal al mes.',
      'Noticias sobre nuevos contenidos y sobre la escuela en preparación.',
    ],
  },
  // José, 30/09 (noche), literal: sustituye al bloque entero, norma incluida.
  funciona: {
    titulo: 'Cómo funciona',
    parrafos: [
      'Es un grupo de WhatsApp pensado para compartir este camino con calma, respeto y cercanía.',
      'Puedes presentarte al entrar o tomarte tu tiempo. Puedes participar, hacer preguntas o simplemente leer durante una temporada. No tienes que exponerte ni contar nada para lo que no estés preparado.',
      'Yo también estaré presente, compartiendo reflexiones, audios y preguntas para seguir profundizando juntos. No funciona como atención individual ni como un espacio de respuesta inmediata.',
    ],
    /** La norma del grupo, en su cartel. */
    cuidado: {
      titulo: 'Un espacio cuidado',
      parrafos: [
        'Queremos que puedas expresarte con confianza.',
        'Por eso pedimos a todos los miembros que traten con respeto y discreción lo que otras personas compartan dentro del grupo.',
        'Lo que alguien cuenta aquí pertenece a su historia y merece ser cuidado.',
        'Y, como en cualquier espacio compartido, tú decides hasta dónde quieres abrirte. Si algo es especialmente íntimo o sensible, siempre puedes reservarlo para un espacio individual.',
      ],
    },
  },
  frecuentes: {
    titulo: 'Preguntas frecuentes',
    lista: [
      {
        pregunta: '¿Tengo que participar?',
        respuesta:
          'No. Puedes pasar un tiempo simplemente escuchando y leyendo. Tú decides cuándo y cuánto quieres compartir.',
      },
      {
        pregunta: '¿Es terapia de grupo?',
        respuesta:
          'No. Es un espacio de comunidad, reflexión y aprendizaje. No sustituye terapia ni incluye el trabajo individual del acompañamiento 1 a 1.',
      },
      {
        pregunta: '¿Tengo que compartir unas creencias concretas?',
        respuesta:
          'No. Puedes acercarte con tus propias ideas, experiencias y preguntas. Aquí compartimos distintas formas de entendernos y crecer, siempre desde el respeto y sin imponer ninguna visión.',
      },
      {
        pregunta: '¿Y si me da vergüenza contar lo que me pasa?',
        respuesta:
          'No tienes que contar nada para lo que no estés preparado. Puedes entrar, observar y empezar escuchando.',
      },
      {
        pregunta: '¿Puedo salir cuando quiera?',
        respuesta: 'Sí. Puedes salir del grupo cuando quieras y sin dar explicaciones.',
      },
    ],
  },
  cierre: {
    titulo: 'Acércate a tu ritmo',
    lineas: [
      'No tienes que hablar más.',
      'No tienes que saber más.',
      'No tienes que estar «más avanzado».',
      '**Puedes empezar escuchando.**',
    ],
  },
};

/* ═════════════════════════ PÁGINA · LA ESCUELA ═════════════════════════ */

export const ESCUELA = {
  rotulo: 'La escuela · En preparación',
  titulo: 'Las piezas del Mecanismo',
  pregunta: '¿Qué cambiaría si pudieras reconocer el mecanismo antes de volver a caer en lo mismo?',
  parrafos: [
    'Mis vídeos de YouTube son piezas del mapa que me ayudó a transformar mi vida. En ellos comparto lo que aprendí de mi propia experiencia para comprender los mecanismos del ego, dejar de repetir patrones que me hacían daño y aprender a vivir con más consciencia y libertad.',
    '**La escuela nace para reunir esas piezas en un recorrido completo.**',
    'No solo para entender conceptos, sino para aprender a observar cómo aparecen en tu propia vida: qué activa un patrón, qué emoción hay debajo, qué haces para escapar de ella y qué cambia cuando empiezas a responder desde otro lugar.',
    'Quiero reunir aquí lo que me ayudó a comprender mis propios mecanismos y todo lo que he ido integrando a través de mi experiencia y de las enseñanzas que forman parte de mi camino.',
    'El contenido y el formato todavía están en preparación. Cuando estén listos, te presentaré el programa completo para que puedas decidir con calma si tiene sentido para ti.',
  ],
  reunir: {
    titulo: 'Del concepto al mecanismo completo',
    parrafos: [
      'No será acompañamiento individual ni una comunidad de conversación.',
      'La estoy preparando como un espacio para profundizar, a tu ritmo, en el mapa completo y aprender a llevarlo a situaciones concretas de tu vida.',
    ],
    preguntas: [
      '¿Por qué vuelves a algo que habías decidido dejar?',
      '¿Qué buscas realmente en el siguiente logro?',
      '¿Quién eres cuando dejas de sostener una imagen de ti?',
    ],
  },
  paraQuien: {
    titulo: 'Puede interesarte si…',
    lineas: [
      'Te reconoces en los contenidos del canal y quieres dejar de recibir las piezas por separado.',
      'Quieres comprender cómo se conectan emoción, pensamiento, identidad, ego, control y conducta.',
      'Has leído mucha teoría sobre desarrollo personal o espiritualidad, pero te cuesta reconocerla cuando el patrón está ocurriendo de verdad.',
      'Quieres aprender a observar estos mecanismos por ti mismo y llevarlos a tu vida cotidiana.',
      'Formas parte de la comunidad o has trabajado conmigo y quieres seguir profundizando.',
    ],
  },
  /** La frase central, que cierra «Puede interesarte si…». */
  cierre: [
    '**No necesitas acumular más teoría.**',
    'Necesitas poder reconocerla cuando estás delante de la relación, el miedo, la tentación, el conflicto o la decisión en la que vuelves a ser el de siempre.',
    '**Ahí es donde el mapa deja de ser teoría.**',
  ],
  avisame: {
    titulo: 'Quiero avisarte cuando el mapa esté completo',
    texto: [
      'Déjame tu nombre y tu correo.',
      'Te avisaré cuando pueda enseñarte el programa, el formato y la fecha de apertura.',
      'Podrás verlo todo antes de decidir.',
    ],
    boton: 'Avísame cuando abra',
    nota: 'Los de la comunidad se enteran antes.',
  },
};

/* ═══════════════════════════════ GRACIAS ═══════════════════════════════ */

/** Tras el formulario de contacto (portada y 1 a 1). */
export const GRACIAS = {
  titulo: 'Tu mensaje se ha enviado.',
  entrada: 'Lo leeré y te responderé al contacto que has indicado.',
  cuerpo:
    'Mientras tanto, una sola cosa: la próxima vez que vayas a tapar lo que sea que tapas, para tres segundos antes y fíjate en qué ibas a sentir. No hace falta que hagas nada con eso. Solo verlo.',
  firma: 'El mapa está en ti. Y yo te acompaño.',
};

/** Tras apuntarse a la lista de la escuela. */
export const GRACIAS_LISTA = {
  titulo: 'Ya estás en la lista.',
  entrada: 'Te escribiré cuando la información esté lista.',
  firma: 'El mapa está en ti. Y yo te acompaño.',
};

/* ═════════════════════════ NAVEGACIÓN · PIE · SEO ═════════════════════════ */

/** La barra de arriba (José, 02/10: «algo como Mis Redes Sociales: @el_mapa_que_faltaba»). */
export const CABECERA = {
  redes: 'Mis redes sociales:',
};

export const PIE = {
  // Nacho, 30/09: solo cambia la descripción; el nombre y la firma se quedan.
  lema: 'Un espacio para comprender lo que repites y abrir una forma distinta de relacionarte contigo y con tu vida.',
  firma: 'El mapa está en ti. Y yo te acompaño.',
};

/* v5 (SEO, 30/09): el título y la descripción que salen en Google, con las
   palabras clave de José (coach, coaching, acompañamiento, adicciones). No se
   ven en la página: el texto visible es el de la v4, sin tocar. Se escriben con
   trozos del texto ya aprobado; el origen de cada uno, en DECISIONES-v13.md.
   Título ≤ 60 caracteres (la comunidad, 63: se corta como mucho la marca) y
   descripción ≤ 155. La escuela se queda como estaba: aún no está abierta. */
/* SEO v24 (01/10, noche; DECISIONES-v24.md). José: «un humano no busca
   coaching de transformación personal, busca solucionar sus problemas». Cada
   título es el dolor que la persona escribe en Google, con las palabras del
   H1 de su página; cada descripción, la estructura de los textos en pequeño:
   dolor → mecanismo → posibilidad → José. Cinco búsquedas de dolor como
   máximo, una por página. Las secciones empiezan por su nombre del menú (los
   enlaces de debajo del resultado). «repetir» siempre con «patrones» o «lo
   mismo»: solo, Google lo lleva a la digestión («por qué repito la comida»).
   Las descripciones no empiezan por «¿»: Google lo quita al enseñarlas (v30). */
export const SEO = {
  portada: {
    // José, 02/10: más corto, para que la pestaña no lo corte sin sentido.
    titulo: '¿Por qué repites patrones? · El mapa que faltaba',
    descripcion:
      // José, 01/10: la síntesis del v23 y el v24 (las dos enteras pasan de 300
      // caracteres y Google corta hacia los 155). José, 04/10 (v30): empieza por la
      // marca para que Google la use al buscar «El mapa que faltaba» (antes tomaba el pie).
      'El mapa que faltaba: no te falta fuerza de voluntad, hay un mecanismo que te hace repetir patrones y conductas. Coaching de transformación personal con José.',
  },
  acompanamiento: {
    // José, 04/10 (v30): más corto, Google lo cortaba con «…».
    titulo: 'Acompañamiento 1 a 1 · Cómo dejar de reaccionar',
    descripcion:
      'Decides hacerlo diferente y vuelves a reaccionar igual. Vemos qué se activa antes de reaccionar y practicas otra respuesta. Coaching 1 a 1 online con José.',
  },
  grupal: {
    // José, 04/10 (v30): más corto, Google lo cortaba con «…».
    titulo: 'Acompañamiento grupal · Siempre vuelves a lo mismo',
    descripcion:
      'Intentas cambiar y siempre vuelves a lo mismo. Un grupo guiado por José para ver qué ocurre antes de repetir, con el apoyo de otros. Primer contacto privado.',
  },
  // José, 01/10: «Comunidad · El mapa que faltaba».
  comunidad: {
    titulo: 'Comunidad · El mapa que faltaba',
    descripcion:
      'Para hablar de lo que repites sin aparentar: una comunidad en WhatsApp para compartir este camino con José y otras personas. Participa o escucha.',
  },
  escuela: {
    titulo: 'La escuela · Las piezas del Mecanismo · El mapa que faltaba',
    descripcion:
      'Para reconocer el mecanismo antes de volver a caer en lo mismo: la escuela de José, en preparación, para verlo por ti mismo. Te aviso cuando abra.',
  },
};
