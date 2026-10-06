/**
 * Todo lo que José tiene pendiente de decidir vive AQUÍ, en un solo sitio.
 * Cambiar un valor de este fichero actualiza la web entera.
 */

export const MARCA = {
  nombre: 'El mapa que faltaba',
  rotulo: 'El mapa que faltaba',
  firma: 'El mapa está en ti. Y yo te acompaño.',
  persona: 'José',
  apellido: '', // ← pendiente de José
  usuario: '@el_mapa_que_faltaba',
  dominio: 'elmapaquefaltaba.com', // ← pendiente de decidir (también en astro.config.mjs)
} as const;

/**
 * El titular de la web, para el aviso legal y la privacidad (LSSI, art. 10, y
 * RGPD, art. 13). Datos de José, 30/09. El correo lo exige la ley: mientras
 * esté vacío, los legales enseñan el hueco y no se puede publicar.
 */
export const TITULAR = {
  nombre: 'José Sánchez Gómez',
  nif: '48506736N',
  domicilio: 'Isaac Peral, 5. 30570',
  correo: 'josesanchezgomez9575@gmail.com',
} as const;

if (!TITULAR.correo && import.meta.env.SSR) {
  console.warn('⚠  Falta TITULAR.correo en src/consts.ts: el aviso legal y la privacidad salen con el hueco del correo.');
}

export const REDES = {
  instagram: 'https://instagram.com/el_mapa_que_faltaba',
  youtube: 'https://youtube.com/@el_mapa_que_faltaba',
  /** Abre directamente el mensaje privado de Instagram. */
  instagramDM: 'https://ig.me/m/el_mapa_que_faltaba',
  // Enlace de invitación al grupo de la comunidad: es el botón «Quiero entrar»
  // de la página de la comunidad (entrada directa, decisión de José, 25/09).
  whatsapp: 'https://chat.whatsapp.com/DMJmetGUcyBAHxdxOqTvoh',
} as const;

/**
 * El WhatsApp PERSONAL de José (01/10). Contra el spam, el número no está en
 * el repositorio ni escrito en la web:
 *   · vive en .env, como WHATSAPP_PERSONAL (número completo en formato
 *     internacional, sin «+», ceros, paréntesis ni guiones: lo que pide la
 *     ayuda de WhatsApp para los enlaces wa.me). Al publicar, va en una
 *     variable del repositorio, como la clave del formulario;
 *   · en el HTML va del revés y en base64 (whatsappCifrado): los robots que
 *     buscan teléfonos leen el HTML y ahí no hay ninguna cifra. El enlace lo
 *     arma la carta en el navegador cuando alguien va a usar el botón.
 * Sale solo en la carta (portada y 1 a 1). Sin número, no hay botón.
 */
export const WHATSAPP_PERSONAL: string = (import.meta.env.WHATSAPP_PERSONAL ?? '').replace(/\D/g, '');

/** El número del revés y en base64, o cadena vacía si no hay número. */
export const whatsappCifrado = () =>
  WHATSAPP_PERSONAL ? btoa([...WHATSAPP_PERSONAL].reverse().join('')) : '';

/** Entrega del formulario (Web3Forms, al correo de José). La clave es pública
    (va en el HTML), pero vive en .env y no en el repo; al publicar en GitHub
    Pages, el flujo de publicación tiene que dársela al compilar. Sin JavaScript,
    Web3Forms redirige a /gracias del dominio de `site` (astro.config.mjs); con
    JavaScript, la web va a su propia /gracias. */
export const FORMULARIO = {
  endpoint: 'https://api.web3forms.com/submit',
  clave: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

// Sin clave el formulario se ve, pero Web3Forms rechaza los envíos: se avisa al compilar.
if (!FORMULARIO.clave && import.meta.env.SSR) {
  console.warn('⚠  Falta PUBLIC_WEB3FORMS_KEY en .env: el formulario se compila sin clave y los envíos no llegarán.');
}

/** Los vídeos del canal. El póster es un fotograma de su propio vídeo,
    servido desde la web: hasta que se pulsa, no se carga nada de YouTube.
    `posterMovil` es el mismo fotograma a 640 px (lo que se ve en el móvil).
    `cara` dice dónde está José dentro del fotograma (fracciones del alto,
    arriba y abajo): la barra fija se aparta solo cuando pasa por ahí. */
export const VIDEOS: {
  id: string;
  titulo: string;
  poster: string;
  posterMovil: string;
  duracion: string;
  cara: string;
  /** false si el vídeo tiene desactivado «Permitir inserción» en YouTube
      Studio: entonces se abre en YouTube en vez de reproducirse aquí. */
  incrustable?: boolean;
  /** Para los datos estructurados (VideoObject), tal como los da YouTube en la
      página del vídeo (uploadDate y lengthSeconds), comprobados el 30/09. */
  publicado: string;
  duracionISO: string;
}[] = [
  {
    id: 'uxZVDcW8aPc',
    titulo: 'La razón real por la que siempre repites los mismos patrones',
    poster: '/videos/yt04.webp',
    posterMovil: '/videos/yt04-640.webp',
    duracion: '16 min',
    cara: '0.04 0.38',
    publicado: '2026-09-21T01:33:47-07:00',
    duracionISO: 'PT15M46S',
  },
  {
    id: 'CCU9a_4WONk',
    titulo: 'No eres lo que piensas, eres el observador',
    poster: '/videos/yt05.webp',
    posterMovil: '/videos/yt05-640.webp',
    duracion: '15 min',
    cara: '0.04 0.46',
    publicado: '2026-09-24T07:58:04-07:00',
    duracionISO: 'PT14M45S',
  },
];

/**
 * Las fotos de José. Hoy son fotogramas de sus grabaciones del canal (es él,
 * no es stock), a la espera de la sesión de fotos de 20 minutos.
 * Cambiar la ruta aquí cambia la foto en toda la web; con la ruta vacía, el
 * bloque que la usa no se pinta.
 */
export const FOTOS = {
  // La ventana de la portada: retrato a cámara, 4:5 (José, 30/09:
  // «Imagen de ChatGPT 30 sept 2026, 12_48_42.png»).
  portada: { src: '/img/jose-ventana.webp', ancho: 480, alto: 600 },
  // «Yo fui mi primer caso»: en un mirador sobre la ciudad, 3:4 (José, 30/09:
  // «IMG_20260906_082052~3.jpg», recortada en él). `cara`: dónde está su cara,
  // en fracciones del alto (BarraFija no se le pone encima).
  quienSoy: {
    src: '/img/jose-quien-soy.webp',
    ancho: 900,
    alto: 1200,
    cara: '0.27 0.43',
    alt: 'José, sentado en el muro de un mirador, mirando la ciudad al amanecer',
  },
  // Junto a la carta: «Lo leo yo. Te contesto yo.». 4:5, escribiendo en su
  // ordenador (José, 30/09: «Gemini_Generated_Image_o4yw8zo4yw8zo4yw.jpeg»).
  carta: { src: '/img/jose-carta.webp', ancho: 400, alto: 500, alt: 'José, leyendo en su ordenador' },
  // La miniatura de la barra fija, cuadrada: su cara, de la foto de la ventana.
  mini: { src: '/img/jose-mini.webp', ancho: 192, alto: 192 },
  // v6 (plantilla LifeCoach): las fotos de José en grande.
  verde: { src: '/img/jose-verde.webp', ancho: 900, alto: 1125, alt: 'José, con camisa verde, mirando a cámara' },
  americana: { src: '/img/jose-americana.webp', ancho: 900, alto: 1200, alt: 'José, con americana, mirando a cámara' },
  escritorio: { src: '/img/jose-escritorio.webp', ancho: 896, alto: 1195, alt: 'José, trabajando en su ordenador' },
  // 01/10: subiendo un sendero entre pinos (el grupal, junto a su entrada; la
  // camisa verde se queda solo en la portada, José).
  sendero: { src: '/img/jose-sendero.webp', ancho: 900, alto: 1125, alt: 'José, subiendo un sendero entre pinos' },
} as const;

/**
 * v6 · LAS FOTOS DE LAS CABECERAS (José, 01/10: «te pongo estas fotos para la
 * web… si las fotos que pone sustituir foto José no dicen nada, las quitamos»).
 * Sustituyen a las cuatro de stock de la plantilla, que ya no están. Son suyas,
 * recortadas de los originales (IMG_2026…, en Descargas) a 16:9.
 *   · `foco`: qué parte de la foto se queda a la vista al recortarla.
 */
export const FONDOS = {
  // Un camino entre robles: la portada, el titular centrado sobre el camino.
  portada: {
    src: '/img/camino-bosque.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'Un camino de tierra entre robles',
    foco: '50% 55%',
  },
  // Un árbol grande de dos troncos y una sola copa: el 1 a 1.
  unoAUno: {
    src: '/img/arbol-dos-troncos.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'Un árbol grande, de dos troncos, en un prado',
    // Abajo: lo que cuenta son los dos troncos.
    foco: '40% 82%',
  },
  // El acantilado sobre el mar (José, 01/10, tarde: IMG_20260912_103511.jpg):
  // la roca a la izquierda y el mar abierto donde va el titular. El grupal.
  grupal: {
    src: '/img/acantilado-mar.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'Un acantilado sobre el mar, con un islote a lo lejos',
    foco: '28% 58%',
  },
  // José sentado en la ladera con su perro, de espaldas, mirando el monte
  // (José, 01/10, tarde: IMG_20260912_103021.jpg). La comunidad. «No me
  // hagas zoom»: la cabecera tiene la forma de la foto (.heroe--entera en
  // comunidad.astro), así se ve entera también en el móvil.
  comunidad: {
    src: '/img/jose-monte-perro.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'José, sentado de espaldas en la ladera de un monte, con su perro',
    foco: '50% 85%',
  },
  // José en lo alto de un monte, con el valle entero detrás: «el mapa
  // completo» de la escuela.
  escuela: {
    src: '/img/jose-panorama.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'José, agachado en lo alto de un monte, con el valle detrás',
    foco: '40% 55%',
  },
  // José en un prado junto al bosque, con los ojos cerrados y un brazo abierto
  // (IMG_20260803_195617.jpg, la séptima foto, sin usar hasta el 06/10): el blog.
  // José queda a la derecha; el titular, a la izquierda.
  blog: {
    src: '/img/jose-pradera.webp',
    ancho: 1920,
    alto: 1080,
    alt: 'José, con los ojos cerrados y un brazo abierto, en un prado junto al bosque',
    foco: '62% 40%',
  },
} as const;

/**
 * La navegación (ASTRA, v7): la portada y los caminos. Un menú lleva a
 * páginas, no a trozos de la página en la que ya estás.
 * v6, 01/10: con el acompañamiento grupal, los dos acompañamientos van juntos
 * bajo «Acompañamientos» (la sección del grupal lo pide así para no saturar la
 * cabecera). En el escritorio es un desplegable; en el menú del móvil y en el
 * pie van seguidos, sin grupo (MENU_PLANO).
 * La acción de escribir («Cuéntame tu caso», ACCION.caso en contenido.ts) no
 * es una entrada del menú: es el botón de la cabecera, y su destino depende de
 * la página (se resuelve en Cabecera.astro).
 */
type Enlace = { texto: string; ruta: string };
type Grupo = { texto: string; hijos: readonly Enlace[] };

export const MENU: readonly (Enlace | Grupo)[] = [
  { texto: 'Inicio', ruta: '/' },
  {
    texto: 'Acompañamientos',
    hijos: [
      { texto: 'Acompañamiento 1 a 1', ruta: '/acompanamiento-1-a-1' },
      { texto: 'Acompañamiento grupal', ruta: '/acompanamiento-grupal' },
    ],
  },
  { texto: 'Comunidad', ruta: '/comunidad' },
  { texto: 'La escuela', ruta: '/escuela' },
  // 06/10: el blog, un artículo por vídeo (borrador, a la espera de José).
  { texto: 'Blog', ruta: '/blog' },
];

/** El menú sin grupos: cada página, una vez y en su orden. */
export const MENU_PLANO: readonly Enlace[] = MENU.flatMap((e) => ('hijos' in e ? e.hijos : [e]));

/** Las páginas con su propio formulario de contacto (#contacto). */
export const CON_CONTACTO = ['/', '/acompanamiento-1-a-1', '/acompanamiento-grupal'] as const;
