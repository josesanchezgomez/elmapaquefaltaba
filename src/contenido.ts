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

/** La etiqueta de la acción de escribir. José, 05/10 (v32, tras la auditoría UX):
    «nombre único Cuéntame tu caso»; sale «Cuéntame qué te pasa» de la portada. */
export const ACCION = {
  /** Cabecera, barra fija, portada y acompañamientos. */
  caso: 'Cuéntame tu caso',
  /** v36 (PER-D-162): WhatsApp primero. La acción principal de la portada y
      del 1 a 1 y el primer botón de sus contactos. */
  whatsapp: 'Escríbeme por WhatsApp',
};

/* ═══════════════════════════════ PORTADA ═══════════════════════════════ */

export const HERO = {
  // José, 27/09, literal (Nacho: «Mantener»).
  // v36 (27/11, PER-D-162 y PER-D-163): quién es y qué hace, en lugar de «Te
  // acompaño a encontrar tu propio camino.». Texto de la sesión de la oferta
  // (11-web-v36-texto.md), literal.
  // v36 (PER-D-164, 27/11 tarde): la cabecera se aligera. La línea larga pasa a
  // abrir «Yo fui mi primer caso» (QUIEN_SOY.presentacion).
  // 27/11 noche: José rechaza «Soy Jose, coach emocional.» (dice lo que es, no
  // lo que gana quien llega).
  antetitulo: 'Soy Jose y te ayudo a volver a ser feliz.',
  // José, 01/10: la franja de debajo de la portada (con el grupal, ya no solo
  // «individual»). El 1 a 1 sigue con su ficha.
  franja: 'Acompañamiento online.',
  // v36 (PER-D-164): sale la ficha del 1 a 1; su última frase se queda aquí.
  franjaPrimero: 'Primero hablamos de lo que estás viviendo.',
  // v36: la promesa arriba (PER-D-162).
  titular: 'Lo tienes todo y aun así no estás bien.',
  /** v36: la promesa, debajo del titular. */
  promesa: 'Puedes volver a estar en paz contigo y con los tuyos sin tirar lo que has construido.',
  // Nacho, 30/09: los párrafos iniciales, «No sé si esa es tu historia…» y
  // «Comparto el mapa…», en su orden. v36: el primero cambia y sale el tercero
  // («También puede que hayas alcanzado…»), que ya dice una de las situaciones.
  parrafos: [
    'Quizá te has propuesto cambiar algo de tu vida, una relación o una forma de reaccionar y durante un tiempo lo has conseguido.',
    'Hasta que vuelve a aparecer la misma emoción, el mismo miedo o la misma necesidad… y acabas haciendo lo de siempre.',
    '**Cambian las circunstancias. Pero algo dentro sigue llevándote al mismo lugar.**',
    'No sé si esa es tu historia. Durante años fue parte de la mía.',
    'Comparto el mapa que me ayudó a comprender los mecanismos que dirigían mi vida, a dejar de luchar constantemente con lo que sentía y a empezar a transformar desde dentro lo que llevaba años intentando cambiar desde fuera.',
  ],
  /** Cierra la apertura. */
  lema: 'Comprender qué te mantiene atrapado. Dejar de repetir lo mismo. Y abrir espacio a una forma distinta de vivir.',
  /** Acción secundaria: baja a la explicación (#mapa). v36: «Qué es el mapa»
      (antes «Descubre el mapa»); la principal es WhatsApp (ACCION.whatsapp). */
  accion: 'Qué es el mapa',
  // v36 (PER-D-163): sale el manifiesto («Comprender el ego. Liberar la sombra.
  // Despertar tu esencia.»). La cita de Jung se queda.
  cita: '«Quien mira hacia afuera, sueña. Quien mira hacia adentro, despierta.»',
  citaAutor: 'Carl Jung, carta a Fanny Bowditch (1916)',
};

export const RECONOCIMIENTO = {
  titulo: '¿Cuánto de lo que haces es para no detenerte?',
  /** v36 (PER-D-164, 27/11 tarde): la fibra sale de la cabecera y abre esta sección. */
  fibra: '**Cumples con todo y con todos. Con todos menos contigo.**',
  entrada: 'Puede que te reconozcas en alguna de estas situaciones:',
  lineas: [
    // v36: ocho situaciones (la ruptura y el fin de semana, nuevas) y sin coma
    // junto a la «y» en las que cambian.
    'Por fuera todo parece estar en orden, pero por dentro hace tiempo que algo se apaga.',
    'Se ha terminado tu relación de pareja y llenas el hueco para no sentir la pérdida.',
    'Cuando algo te duele, te llenas de trabajo, planes, objetivos o distracciones para no quedarte demasiado tiempo ahí.',
    'Puedes con todo hasta que llegas a casa o llega el fin de semana. Entonces necesitas escapar como sea.',
    'Has llegado a lugares que deseabas durante años y al alcanzarlos la sensación ha durado mucho menos de lo que esperabas.',
    'Hay algo que llevas tiempo prometiéndote dejar y cuando llega determinado momento vuelves.',
    'Cambian las personas o las circunstancias, pero la historia emocional se parece demasiado.',
    'Has leído, reflexionado o entendido muchas cosas sobre ti… y aun así sigues reaccionando igual cuando aparece el disparador de siempre.',
  ],
  /** v36: la frase que cierra la lista, en negrita. */
  cierre: '**Cumplir con todo también puede ser la forma más aplaudida de no pararte a sentir.**',
  /** El bloque final, tras la lista (Nacho: en negrita la primera y la última). */
  absolucion: {
    blanca: 'Si te has visto en alguna, no significa que algo en ti esté roto ni que te falte voluntad.',
    remate:
      'Muchas veces intentamos cambiar directamente la conducta sin llegar a ver qué ocurre dentro de nosotros justo antes de repetirla.',
    ahi: 'Ahí empieza el mapa.',
  },
};

/** La explicación: adonde lleva «Descubre el mapa» (#mapa). */
export const MAPA = {
  titulo: 'Lo que repites no empieza en lo que haces.',
  parrafos: [
    // v36: el mecanismo en su orden (primero lo que sientes).
    'Cuando hablo de «mecanismo» me refiero a lo que pasa dentro de ti entre lo que ocurre y lo que haces. Primero aparece lo que sientes. Después te cuentas algo para explicarlo. Y al final respondes como siempre.',
    'A veces esa respuesta te alivia durante unos minutos, unas horas o unos días. Pero después te devuelve al mismo punto.',
    'Puedes distraerte. Controlar. Buscar aprobación. Exigirte más. Comer. Trabajar. Discutir. Callarte. Perseguir otro objetivo.',
    'La forma cambia. **El mecanismo puede ser el mismo.**',
    'Cuando empiezas a verlo con claridad, ya no estás solamente intentando corregir la última conducta. Empiezas a comprender qué la sostiene.',
  ],
};

export const QUIEN_SOY = {
  titulo: 'Yo fui mi primer caso.',
  /** v36 (PER-D-164, 27/11 tarde): la línea que estaba en la cabecera abre la sección. */
  presentacion:
    'Soy Jose. Cumplía con todos menos conmigo y tapaba lo que sentía con lo que tuviera a mano. Hoy acompaño a otras personas a dejar de huir de sí mismas.',
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
    // v36 (PER-D-163): una línea de su Historia.
    'Durante años viví pensando que cuando consiguiera el siguiente objetivo estaría bien. Lo conseguía y el vacío volvía.',
    'Perseguí logros, placer, relaciones y nuevas metas buscando fuera algo que no sabía encontrar dentro. Cambiaban los objetivos. Cambiaban las circunstancias. Pero el fondo de mi sufrimiento volvía a aparecer.',
    '**Fui y volví del infierno tantas veces que terminé aprendiendo el camino de ida y, sobre todo, el de vuelta.**',
    'No llegué a este trabajo solo leyendo sobre el ego o la consciencia. Llegué después de tener que observar mis propios patrones, reconocer cuánto controlaba mi vida aquello de lo que intentaba escapar y aprender a relacionarme de otra manera con lo que sentía.',
    'Las enseñanzas del psiquiatra David R. Hawkins me dieron un marco que me ayudó a ordenar muchas de esas piezas.',
    'Empecé a ver un mecanismo que antes dirigía mi vida sin que yo fuera consciente.',
    '**Ese es el mapa que hoy comparto contigo.**',
    'Porque cuando ves el mecanismo, dejas de luchar únicamente contra sus consecuencias.',
  ],
  // José, 02/10: en lugar de «Mi historia, en diez imágenes (en Instagram)» y
  // «El canal», botones a Instagram, WhatsApp y YouTube.
  redes: 'Puedes encontrarme en:',
  /** v36 (PER-D-164): la llamada a la acción tras su historia. */
  llamada: 'Yo salí de ahí. Si tú estás ahí ahora, escríbeme.',
};

/** La dimensión espiritual: va entre «Yo fui mi primer caso.» y el método. */
export const RENDICION = {
  titulo: 'Comprender no es lo mismo que dejar de luchar.',
  // José, 30/09, literal. La última frase («No necesitas compartir mi forma de
  // entenderlo…») la quitó él. «rendición», en negrita, como en el v9.
  parrafos: [
    'Puedes identificar perfectamente una reacción y aun así encontrarte con ella una y otra vez.',
    'A mí no me bastó con entender intelectualmente lo que me pasaba. Tuve que aprender a relacionarme de otra manera conmigo mismo.',
    // v36 (PER-D-163): la rendición con palabras de todos los días. Salen los
    // dos párrafos siguientes y el último.
    'Aprendí a dejar de pelear con lo que sentía. A ese movimiento lo llamo rendición. No es resignarse ni dejar de actuar. Es dejar de luchar contra lo que ya está ahí para que pierda la fuerza que tiene sobre ti.',
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
        'Partimos de una situación real. Qué pasó, qué sentiste, qué te contaste y qué hiciste después. Sin buscar una explicación perfecta ni juzgarte por haber reaccionado así.',
    },
    {
      nombre: 'Reconocer el mecanismo',
      texto:
        'Observamos qué se repite y qué función cumple esa respuesta: qué intentas evitar, conseguir, controlar o proteger. Las enseñanzas de David R. Hawkins forman parte de las referencias de mi enfoque.',
    },
    {
      // v36: lo que se practica es quedarse con lo que sientes.
      nombre: 'Dejar de pelear con lo que sientes',
      texto:
        'No se trata solo de entenderte mejor. Se trata de aprender a quedarte con lo que sientes sin salir corriendo. Cuando lo haces, la respuesta distinta llega sola y decides desde un lugar más consciente.',
    },
  ],
  cierre: 'Comprender. Reconocer. Soltar. Y llevarlo a tu vida.',
};

export const CANAL = {
  titulo: 'Empieza por escuchar',
  parrafos: [
    'En el canal desarrollo distintas piezas del mapa: patrones, pensamientos, emociones, sentimientos, mente consciente e inconsciente, niveles de conciencia del Dr. David R. Hawkins.',
    '**No necesitas empezar por el principio. Empieza por aquello que ahora mismo más se parece a tu vida.**',
    // v36: la salida discreta para quien prefiere leer (revisión SEO del 27/11).
    'Si prefieres leer, empieza por [«Por qué lo tienes todo y no eres feliz»](/blog/lo-tengo-todo-y-no-soy-feliz) o por [«Cómo soltar el control de todo»](/blog/como-soltar-el-control).',
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
      // Nacho, ajuste del 30/09: sin precio, sesiones ni duración.
      // v36 (PER-D-159): la oferta.
      texto:
        // v36 (PER-D-164): lo que se lleva, sin las sesiones.
        'Te acompaño a dejar de necesitar una vía de escape y a volver a estar en paz contigo y con los tuyos.',
      // José, 05/10 (v31): como las otras tres puertas, lleva al principio de su
      // página («Conocer…»). Antes llevaba a la carta del final del 1 a 1.
      accion: 'Conocer el acompañamiento 1 a 1',
      ruta: '/acompanamiento-1-a-1',
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
        // v36: sin el «en preparación» repetido (ya lo dice el dato).
        'Una escuela para reunir el mapa completo y aprender a reconocer por ti mismo las piezas que intervienen en aquello que repites.',
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
      // v36 (PER-D-162): sin hablar de tratamientos; dice lo que es.
      respuesta: 'No. Es acompañamiento emocional. Trabajo contigo desde lo que yo viví y desde cómo salí de ahí.',
    },
    {
      // v36 (PER-D-162): el precio no se publica.
      pregunta: '¿Cuánto cuesta?',
      respuesta: 'Te lo cuento en la primera conversación, cuando sepa qué estás viviendo y qué necesitas.',
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
  /** v36: bajo el botón de WhatsApp de la portada, antes del formulario. */
  formularioDebajo: 'Si prefieres escribirlo con calma, tienes el formulario aquí debajo.',
  // José, 01/10: sin «MAPA»; debajo, los botones de Instagram y WhatsApp.
  // v36: el WhatsApp ya va arriba; aquí queda Instagram.
  privado: 'También puedes escribirme por:',
  // José, 01/10: el mensaje que WhatsApp deja escrito al abrir el chat con
  // su número (va en el enlace, no en la página). v36: pide menos.
  mensajeWhatsApp: 'Hola, Jose. Vengo de tu web y me gustaría hablar contigo.',
  error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por Instagram.',
};

/* ════════════════════ PÁGINA · ACOMPAÑAMIENTO 1 A 1 ════════════════════ */

export const ACOMPANAMIENTO = {
  antetitulo: 'Acompañamiento 1 a 1',
  // v36 (PER-D-159 y PER-D-162): la promesa arriba, distinta del titular de la
  // portada para que no compitan en Google.
  titulo: 'En dos meses puedes volver a estar en paz contigo y con los tuyos.',
  /** v36: debajo del titular. */
  // v36 (PER-D-164): sin nombrar el fin de semana como la vía de escape.
  subtitulo: 'Sin tirar lo que has construido. Sin tener que escaparte para estar bien.',
  /** v36: qué es estar en paz y la escena de su cliente, antes de la entrada. */
  paz: 'Estar en paz contigo mismo no es que no vuelva a dolerte nada. Es que cuando duele ya no necesitas salir corriendo.',
  escena: '**El lunes te prometes que no vuelve a pasar. El viernes vuelve a pasar.**',
  parrafos: [
    'Puede que entiendas perfectamente lo que «deberías» hacer. Que hayas leído, reflexionado o trabajado mucho en ti.',
    'Aun así vuelves a lo conocido cuando aparece determinada emoción, una relación, el miedo, la culpa o la necesidad de control.',
    '**Ahí es donde empieza mi trabajo contigo.**',
    'No para decirte cómo tienes que vivir, sino para ayudarte a ver el mecanismo que está operando cuando vuelves a caer en lo mismo.',
    'Porque cuando empiezas a reconocer qué sucede dentro de ti antes de reaccionar, puedes empezar a responder desde un lugar diferente.',
  ],
  // v36 (PER-D-164): sale la ficha. Las tres frases que van encima de cada
  // «Escríbeme por WhatsApp».
  llamadas: {
    arriba: 'Escríbeme y cuéntame qué te pasa. Si veo que puedo ayudarte, te lo digo y empezamos.',
    encaja: 'Si te has visto aquí, esto tiene salida. Yo la encontré y te acompaño a encontrar la tuya.',
    // v36 (PER-D-164, 27/11 tarde): se mueve de «Lo que cambia» a «Cómo empezamos».
    empezamos: 'Ya sabes cómo empezamos. El primer paso es escribirme.',
  },
  /** v36 (PER-D-164): el bucle de su cliente, dibujado, y su salida. */
  bucle: {
    pasos: [
      'Algo te pesa y no sabes ni qué es.',
      'Necesitas desconectar.',
      'Un rato estás bien.',
      'Se pasa y vuelve el peso, ahora con culpa.',
      'Te prometes que se acabó.',
      'Vuelves. Dejas de creerte y acabas pensando «yo soy así».',
    ],
    salida: 'No eres así. Es lo que aprendiste para no sentir y se puede soltar.',
  },
  /** v36 (PER-D-164): el antes y el después, lado a lado. */
  cambia: {
    titulo: 'Lo que cambia',
    columnas: ['Lo que vives hoy', 'Lo que puede cambiar'],
    // Cada fila: lo de hoy y lo que puede cambiar (objetos, para volcar-texto).
    parejas: [
      { hoy: 'Cumples con todos menos contigo.', luego: 'Te cuentas entre las personas que cuidas.' },
      { hoy: 'Necesitas algo para desconectar.', luego: 'Puedes parar sin tener que huir.' },
      { hoy: 'Tras cada logro llega el bajón.', luego: 'Disfrutas lo que consigues sin correr a por lo siguiente.' },
      { hoy: 'Te prometes que no más y vuelves.', luego: 'Ya no te hace falta prometértelo.' },
      { hoy: 'Te tragas lo que sientes para no molestar.', luego: 'Lo sientes sin que te desborde.' },
      { hoy: 'Piensas «yo soy así».', luego: 'Ves que eso lo aprendiste y que se puede soltar.' },
    ],
  },
  // v36: sale «Trabajamos sobre situaciones reales de tu vida» (repetía «Qué
  // vamos a trabajar»); su última frase pasa al final de «Cómo empezamos».
  encaja: {
    titulo: 'Puede encajar contigo si…',
    lineas: [
      'Hay una conducta, reacción o relación que sabes que te hace daño y aun así vuelves a ella.',
      'Entre semana cumples con todo y cuando llega el viernes necesitas desconectar como sea.',
      'Has entendido muchas cosas sobre ti, pero entenderlas no ha sido suficiente para dejar de repetirlas.',
      'Has conseguido cosas que pensabas que iban a hacerte sentir bien y el alivio ha durado menos de lo esperado.',
      'Se ha terminado tu relación de pareja y llenas el hueco con trabajo, salidas o pantallas.',
      'Te descubres buscando aprobación, intentando controlarlo todo, evitando determinadas emociones o llenando el tiempo para no detenerte.',
      'Quieres comprender qué ocurre dentro de ti cuando se activa el patrón, no solo intentar contener sus consecuencias.',
      'Buscas un espacio individual donde poder mirar todo esto con continuidad y honestidad.',
    ],
  },
  trabajo: {
    titulo: 'Qué vamos a trabajar',
    // Sin «Cuatro sesiones nos dan un primer marco…» (ajuste §2).
    // v36 (PER-D-159): el resultado, en lugar de «No prometo un resultado concreto».
    entrada:
      'Cada proceso es distinto. Lo que buscamos es que vuelvas a estar en paz contigo y con los tuyos sin tirar lo que has construido. Que puedas parar sin tener que huir de lo que sientes.',
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
        // v36: más corto. Sin enlace en la tarjeta (el del control va en la portada).
        texto:
          'Observamos tu relación con los pensamientos, el control y la imagen que has construido de ti. Aprendes a soltar el conflicto que llevas dentro. Mejora la relación contigo, con tu propósito y con los demás.',
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
          'Por WhatsApp o desde el formulario. Cuéntame qué se está repitiendo, qué te está pesando o qué llevas tiempo intentando cambiar. No necesitas saber explicarlo perfectamente.',
      },
      {
        nombre: 'Leo personalmente tu caso',
        texto: 'Quiero entender qué estás viviendo antes de hablarte de ningún proceso.',
      },
      {
        nombre: 'Hablamos',
        texto:
          'Si veo que puedo ayudarte, hablamos por WhatsApp o en una llamada para conocernos y mirar con más calma lo que está ocurriendo.',
      },
      {
        nombre: 'Te explico cómo trabajaría contigo',
        texto:
          'Después de escucharte, te explicaré con claridad cómo plantearía el acompañamiento, el formato y qué puedes esperar de mí.',
      },
      {
        nombre: 'Tú decides',
        texto: 'La conversación también sirve para que tú notes si quieres recorrer este tramo conmigo.',
      },
    ],
    /** v36: viene del bloque que sale («Trabajamos sobre situaciones reales…»). */
    cierre: 'No necesitas tener todas las respuestas antes de empezar.',
  },
  // Nacho, 30/09: sustituye entero a «Tu compromiso contigo mismo».
  compromiso: {
    titulo: 'Yo puedo acompañarte, pero no puedo hacer el proceso por ti',
    parrafos: [
      'Mi compromiso es poner a tu disposición mi experiencia, mi atención y todo lo que he aprendido recorriendo este camino. Entre sesión y sesión me tienes por WhatsApp y el ritmo lo marcas tú.',
      'El tuyo es venir dispuesto a observarte con honestidad y llevar lo que descubramos fuera de nuestras conversaciones.',
      // Sin «por pagar 320 € ni» ni «La inversión económica abre el espacio.»
      // (ajuste §2: fuera el precio y lo que justifica la inversión).
      '**La transformación no ocurre por hablar conmigo una hora.**',
      'Ocurre cuando empiezas a reconocer en tu vida aquello que antes sucedía de forma automática y te quedas con lo que sientes en vez de salir corriendo. La respuesta distinta llega después.',
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
        // v36: «Sí.» y sin «ni competir con otros procesos…».
        respuesta: [
          'Sí.',
          'No necesito que olvides nada de lo que ya has aprendido.',
          '**Trabajamos sobre lo que sigue ocurriendo hoy.**',
          'Si hay algo que comprendes intelectualmente pero continúa gobernándote cuando aparece una emoción, una relación o una situación concreta, ahí tenemos algo real que observar.',
        ],
      },
      {
        // v36 (PER-D-159): lo que incluye la oferta.
        pregunta: '¿Cuánto dura y qué incluye?',
        respuesta:
          // v36 (PER-D-164): sale la ficha; la búsqueda del título se queda
          // aquí, en el texto visible (revisión SEO del 27/11).
          'Es un acompañamiento emocional online de seis sesiones. Después de cada una te llevas un ejercicio y antes de la siguiente te devuelvo por escrito lo que veo en él. Entre sesiones me tienes por WhatsApp. Vamos a tu ritmo, en dos meses como mínimo.',
      },
      {
        // v36 (PER-D-162): el precio no se publica.
        pregunta: '¿Cuánto cuesta?',
        respuesta: 'Te lo cuento en la primera conversación, cuando sepa qué estás viviendo y qué necesitas.',
      },
      {
        // v36 (PER-D-164): los dos frenos de su cliente.
        pregunta: 'No tengo tiempo para esto.',
        respuesta:
          'Las sesiones son online y el ritmo lo marcas tú. Entre sesión y sesión me tienes por WhatsApp. Lo que más tiempo te quita hoy es lo que haces para no sentir.',
      },
      {
        pregunta: 'Me cuesta contar lo que me pasa.',
        respuesta: 'A mí también me costó. Empieza por lo que puedas contar y lo demás va saliendo.',
      },
      {
        pregunta: '¿Cómo puedes ayudarme a transformar lo que estoy viviendo?',
        // v36: más corta, con el enlace al artículo «Lo tengo todo».
        respuesta: [
          'Mi forma de acompañar nace de mi propia experiencia. Te ayudo a ver qué te mantiene atrapado en lo mismo y qué sientes debajo de lo que haces. Después aprendes a quedarte con eso sin tener que escapar. Desde ahí empiezas a decidir con más libertad. Lo cuento también en [«Por qué lo tienes todo y no eres feliz»](/blog/lo-tengo-todo-y-no-soy-feliz).',
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
        // José, 25/11 (plan SEO, paso 0): «psicoterapia», una de sus tres palabras.
        pregunta: '¿Esto es psicoterapia?',
        // v36 (PER-D-162): sin hablar de tratamientos; «coach emocional» en el
        // texto (SEO: la palabra del título de la página).
        respuesta:
          'No. Soy coach emocional y trabajo contigo sobre los patrones, decisiones y experiencias que aparecen en tu vida, desde lo que yo viví y desde cómo salí de ahí.',
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
      'Si veo que puedo ayudarte, te respondo para que hablemos.',
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
  // José, 25/11 (plan SEO, paso 0; DECISIONES-v35.md): «La B». Fuera «Conductas
  // adictivas» (PER-D-063, PER-D-154) y dentro «online» (todo será online).
  antetitulo: 'Acompañamiento grupal online · Patrones repetitivos',
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
    accion: 'Quiero hablar con Jose',
  },
  // Bloque 8 · Preguntas frecuentes
  frecuentes: {
    titulo: 'Preguntas frecuentes',
    lista: [
      {
        pregunta: '¿Necesito tener una adicción para participar?',
        respuesta: [
          // v36 (PER-D-063, PER-D-154): la respuesta entera, sin la frase que repetía.
          'No. Trabajamos los patrones que se repiten y te hacen sufrir, también las conductas adictivas. En la conversación previa veremos qué grupo es adecuado para lo que estás viviendo.',
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
      // v36: sin «las opciones disponibles» (no se dan opciones, se recomienda).
      '**Te escucho primero en privado. Después te digo cómo puedo acompañarte.**',
    ],
    boton: 'Quiero contarte mi caso',
    /** El mensaje que WhatsApp deja escrito desde esta página (va en el botón). */
    mensajeWhatsApp:
      'Hola, Jose. He leído la sección de acompañamiento grupal y me gustaría contarte mi situación para conocer cómo trabajas y si esta modalidad puede encajar conmigo. ¿Podemos hablar?',
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
          // v36 (PER-D-162): sin hablar de tratamientos.
          'No. Es un espacio de comunidad, reflexión y aprendizaje. No incluye el trabajo individual del acompañamiento 1 a 1.',
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

/* ═══════════════════════════════ BLOG ═══════════════════════════════ */

/** El blog (06/10, BORRADOR a la espera de José): la portada del blog y los
    rótulos de cada artículo. Los artículos van en src/content/blog/*.md. */
export const BLOG = {
  rotulo: 'Blog',
  titulo: 'Blog',
  entrada: 'Artículos sobre el mecanismo que te hace repetir lo mismo.',
  leer: 'Leer el artículo',
  autor: 'Jose',
  minutos: 'min de lectura',
  video: {
    titulo: 'Este artículo sale de mi vídeo',
  },
  cierre: {
    titulo: '¿Te reconoces en esto?',
    texto: 'Si quieres mirarlo conmigo, cuéntame qué estás viviendo.',
  },
  volver: 'Todos los artículos',
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
    // José, 14/10: la marca delante, para la búsqueda «el mapa que faltaba».
    titulo: 'El mapa que faltaba · ¿Por qué repites patrones?',
    descripcion:
      // José, 01/10: la síntesis del v23 y el v24 (las dos enteras pasan de 300
      // caracteres y Google corta hacia los 155). José, 04/10 (v30): empieza por la
      // marca para que Google la use al buscar «El mapa que faltaba» (antes tomaba el pie).
      // v36 (27/11): la promesa, con la marca delante.
      'El mapa que faltaba. Lo tienes todo y no estás bien. Vuelve a estar en paz contigo sin tirar lo que has construido. Acompañamiento online con Jose.',
  },
  acompanamiento: {
    // José, 25/11 (plan SEO, paso 0; DECISIONES-v35.md): sus tres palabras, una en
    // cada sitio (título, descripción y la pregunta de la página). «Cómo dejar de
    // reaccionar» no trajo ni una impresión: irá a un artículo del blog. El título
    // empieza por el nombre del menú (regla de v24, que vigila auditoria-seo).
    titulo: 'Acompañamiento 1 a 1 · Coach emocional online',
    descripcion:
      // v36 (27/11): la promesa del 1 a 1, distinta de la portada. El título no cambia.
      'En dos meses puedes volver a estar en paz contigo y con los tuyos sin tirar lo que has construido. Acompañamiento emocional online con Jose.',
  },
  grupal: {
    // José, 04/10 (v30): más corto, Google lo cortaba con «…».
    titulo: 'Acompañamiento grupal · Siempre vuelves a lo mismo',
    descripcion:
      'Intentas cambiar y siempre vuelves a lo mismo. Un grupo guiado por Jose para ver qué ocurre antes de repetir, con el apoyo de otros. Primer contacto privado.',
  },
  // José, 01/10: «Comunidad · El mapa que faltaba».
  comunidad: {
    titulo: 'Comunidad · El mapa que faltaba',
    descripcion:
      'Para hablar de lo que repites sin aparentar: una comunidad en WhatsApp para compartir este camino con Jose y otras personas. Participa o escucha.',
  },
  // 06/10 (borrador): la portada del blog. Cada artículo lleva su título y su
  // descripción en su propio fichero (src/content/blog).
  blog: {
    titulo: 'Blog · El mapa que faltaba',
    descripcion:
      'Artículos de Jose sobre el mecanismo que te hace repetir patrones y conductas.',
  },
  escuela: {
    titulo: 'La escuela · Las piezas del Mecanismo · El mapa que faltaba',
    descripcion:
      'Para reconocer el mecanismo antes de volver a caer en lo mismo: la escuela de Jose, en preparación, para verlo por ti mismo. Te aviso cuando abra.',
  },
};
