/**
 * Las imágenes al compartir un enlace (Open Graph, 1200×630), una por página:
 * lo que ve quien recibe la web por WhatsApp o Instagram. Llevan el antetítulo
 * y el titular de cada página, la foto de José y los dos tonos de la v4. Se
 * generan con scripts/og.mts (local) a public/img/og/.
 */
import { ACOMPANAMIENTO, COMUNIDAD, ESCUELA, GRUPAL, HERO } from '../contenido';
import { MARCA } from '../consts';

const alt = (antes: string, titular: string) =>
  `${MARCA.nombre}. ${antes} «${titular}» José, ${MARCA.usuario}.`;

export const OG = {
  portada: { src: '/img/og/portada.jpg', alt: alt(HERO.antetitulo, HERO.titular) },
  acompanamiento: { src: '/img/og/acompanamiento.jpg', alt: alt(`${ACOMPANAMIENTO.antetitulo}.`, ACOMPANAMIENTO.titulo) },
  grupal: { src: '/img/og/grupal.jpg', alt: alt(`${GRUPAL.antetitulo}.`, GRUPAL.titulo) },
  comunidad: { src: '/img/og/comunidad.jpg', alt: alt(`${COMUNIDAD.antetitulo}.`, COMUNIDAD.titulo) },
  escuela: { src: '/img/og/escuela.jpg', alt: alt(`${ESCUELA.rotulo}. ${ESCUELA.titulo}.`, ESCUELA.pregunta) },
} as const;
