/**
 * Datos estructurados (JSON-LD) para los buscadores, v5 (SEO).
 *
 * La regla: solo lo que la página enseña. Cada texto sale de contenido.ts o de
 * consts.ts, igual que en la página, sin frases nuevas. No hay precios, reseñas,
 * puntuaciones ni negocio local: el acompañamiento es online y no tiene precio
 * publicado.
 *
 * Cada página lleva un @graph: José (Person) y la web (WebSite) en todas, su
 * WebPage y, según la página, sus migas, el servicio, sus preguntas frecuentes
 * o el vídeo.
 *
 * v22 (01/10): el WebSite le da a Google el nombre de la web, el que sale
 * encima del enlace («El Corte Inglés» en su resultado). Va en todas las
 * páginas, y Google lo lee en la portada.
 */
import { MARCA, REDES, FOTOS, VIDEOS } from '../consts';
import { CANAL, PIE, ACOMPANAMIENTO, GRUPAL } from '../contenido';
import { sinMarcas } from './texto';

export type Nodo = Record<string, unknown>;

const abs = (ruta: string, site: URL) => new URL(ruta, site).href;
const id = (site: URL, ancla: string, ruta = '/') => `${abs(ruta, site)}#${ancla}`;

/** José y la web: van en todas las páginas y el resto los enlaza por @id. */
export const base = (site: URL): Nodo[] => [
  {
    '@type': 'Person',
    '@id': id(site, 'jose'),
    name: [MARCA.persona, MARCA.apellido].filter(Boolean).join(' '),
    url: abs('/', site),
    image: abs(FOTOS.quienSoy.src, site),
    jobTitle: 'Coach de transformación personal',
    // Lo que la web cuenta que trabaja (1 a 1, grupal, preguntas frecuentes,
    // comunidad y canal).
    // José, 01/10: el eje es la transformación personal y los patrones; lo
    // adictivo, uno más. 02/10: fuera «Espiritualidad» (José la quita de las
    // páginas) y «Crecimiento personal» (ninguna página lo dice).
    knowsAbout: [
      'Coaching',
      'Transformación personal',
      'Patrones de conducta',
      'Conductas repetitivas',
      'Conductas adictivas',
    ],
    sameAs: [REDES.instagram, REDES.youtube],
  },
  {
    '@type': 'WebSite',
    '@id': id(site, 'web'),
    name: MARCA.nombre,
    // Si Google no se queda con el nombre, que use el dominio.
    alternateName: [MARCA.dominio],
    url: abs('/', site),
    description: PIE.lema,
    inLanguage: 'es-ES',
    publisher: { '@id': id(site, 'jose') },
  },
];

/** La página: su URL canónica, su título y su descripción de buscador. */
export const pagina = (
  site: URL,
  ruta: string,
  titulo: string,
  descripcion: string,
  imagen: string,
): Nodo => ({
  '@type': 'WebPage',
  '@id': id(site, 'pagina', ruta),
  url: abs(ruta, site),
  name: titulo,
  description: descripcion,
  inLanguage: 'es-ES',
  isPartOf: { '@id': id(site, 'web') },
  about: { '@id': id(site, 'jose') },
  primaryImageOfPage: { '@type': 'ImageObject', url: imagen, width: 1200, height: 630 },
});

/** Las migas de la página, las mismas que se leen bajo la foto: Inicio › la
    página. Google las usa en lugar de la URL debajo del título. */
export const migas = (site: URL, ruta: string, nombre: string): Nodo => ({
  '@type': 'BreadcrumbList',
  '@id': id(site, 'migas', ruta),
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: abs('/', site) },
    { '@type': 'ListItem', position: 2, name: nombre, item: abs(ruta, site) },
  ],
});

/** Los acompañamientos: el servicio de cada página, con sus palabras y sin
    precio. El grupal (01/10) no dice «online» en la página: aquí tampoco. */
const SERVICIOS = {
  unoAUno: { name: ACOMPANAMIENTO.antetitulo, serviceType: 'Coaching individual online', description: ACOMPANAMIENTO.ficha },
  grupal: { name: GRUPAL.nombre, serviceType: 'Coaching grupal', description: GRUPAL.presentacion },
} as const;

export const servicio = (site: URL, ruta: string, cual: keyof typeof SERVICIOS = 'unoAUno'): Nodo => ({
  '@type': 'Service',
  '@id': id(site, 'servicio', ruta),
  ...SERVICIOS[cual],
  url: abs(ruta, site),
  provider: { '@id': id(site, 'jose') },
  availableChannel: { '@type': 'ServiceChannel', serviceUrl: abs(`${ruta}#contacto`, site), availableLanguage: 'es' },
});

/** Las preguntas frecuentes, tal como se leen (sin las marcas de negrita). */
export const preguntas = (
  site: URL,
  ruta: string,
  lista: readonly { pregunta: string; respuesta: string | readonly string[] }[],
): Nodo => ({
  '@type': 'FAQPage',
  '@id': id(site, 'preguntas', ruta),
  isPartOf: { '@id': id(site, 'pagina', ruta) },
  mainEntity: lista.map((f) => ({
    '@type': 'Question',
    name: f.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: (typeof f.respuesta === 'string' ? [f.respuesta] : f.respuesta).map(sinMarcas).join(' '),
    },
  })),
});

/** Los vídeos que se ven en la página. El que no deja insertarse se abre en
    YouTube: no está en la página y no se declara. */
export const videos = (site: URL): Nodo[] =>
  VIDEOS.filter((v) => v.incrustable !== false).map((v) => ({
    '@type': 'VideoObject',
    '@id': id(site, `video-${v.id}`),
    name: v.titulo,
    description: sinMarcas(CANAL.parrafos[0]),
    thumbnailUrl: abs(v.poster, site),
    uploadDate: v.publicado,
    duration: v.duracionISO,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    url: `https://www.youtube.com/watch?v=${v.id}`,
    inLanguage: 'es',
    author: { '@id': id(site, 'jose') },
  }));

/** El JSON listo para <script type="application/ld+json">: «<» escapado para
    que ningún texto pueda cerrar la etiqueta. */
export const aJsonLd = (grafo: Nodo[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(/</g, '\\u003c');

