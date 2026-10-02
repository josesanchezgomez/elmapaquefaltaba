/**
 * EL MAPA DE LAS SENDAS QUE VUELVEN.
 *
 * Monta, a partir de una composición (unos pocos puntos), el SVG del mapa:
 *   · la HONDONADA: dos o tres curvas de nivel cerradas con sus barbas hacia
 *     dentro, como marcan los mapas un hoyo (nunca una cumbre);
 *   · las SENDAS CORAL: cada una sale del mismo punto, rodea su destino
 *     («el siguiente logro», «entretenimiento», «compra», «persona») y vuelve al mismo
 *     punto. El objeto cambia; la causa, no;
 *   · la SENDA TURQUESA: la única que no vuelve. Baja, a mano, hacia la
 *     hondonada y sigue hacia abajo: es el hilo que recorre la página.
 *
 * Las composiciones (dónde va cada cosa) viven en el componente que dibuja el
 * mapa. Aquí solo está cómo se dibuja.
 */
import { anillo, barbas, curva, pincel, raqueta, type Punto } from './trazo';

export interface Senda {
  /** El rótulo, en una o dos líneas. */
  rotulo: string[];
  /** Por dónde pasa la senda, desde la casa hasta el destino. */
  camino: Punto[];
  destino: Punto;
  radio: number;
  texto: { x: number; y: number; ancla: 'start' | 'middle' | 'end' };
}

export interface Composicion {
  /** Prefijo de los id del SVG: tiene que ser único en la página. */
  id: string;
  ancho: number;
  alto: number;
  /** Cómo se encaja el dibujo en su caja (preserveAspectRatio). */
  encaje: string;
  /** El punto al que vuelven todas las sendas. */
  casa: Punto;
  hondonada: { centro: Punto; rx: number; ry: number; giro: number };
  sendas: Senda[];
  /** La senda turquesa: de la casa hacia abajo, cruzando la hondonada. */
  ruta: Punto[];
  grosorRuta: number;
  tamRotulo: number;
}

/**
 * El tamaño de los rótulos de los dibujos que van a lo ancho del móvil (el
 * mapa de la portada y el bucle de #mapa), en unidades de un dibujo de 390 de
 * ancho: el mismo en los dos, porque es el mismo papel. En un móvil de 320 se
 * ven a 15,2 px (nunca por debajo de 15); a 390, a 18,5.
 */
export const TAM_ROTULO = 18.5;

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function dibujaMapa(c: Composicion, clase = ''): string {
  const { id } = c;
  const h = c.hondonada;
  const d: string[] = [];
  const mascaras: string[] = [];

  // ── La hondonada: tres curvas cerradas, cada una un poco más al fondo ──
  const curvas = [1, 0.64, 0.31].map((k, i) =>
    anillo(
      [h.centro[0] - 5 * i, h.centro[1] + 4 * i],
      h.rx * k,
      h.ry * k,
      31 + i * 17,
      0.16,
      h.giro + i * 9
    )
  );
  d.push(`<g class="hondonada">`);
  curvas.forEach((pts, i) => d.push(`<path class="hondonada__curva hondonada__curva--${i}" d="${curva(pts, true)}"/>`));
  d.push(`<path class="hondonada__barbas" d="${barbas(curvas[0], h.centro, 12, h.rx * 0.1, 5)}"/>`);
  d.push(`</g>`);

  // ── Las sendas coral que vuelven ──
  c.sendas.forEach((s, i) => {
    const trazo = raqueta([c.casa, ...s.camino, s.destino], s.destino, s.radio, 101 + i * 13);
    mascaras.push(
      `<mask id="${id}-s${i}" maskUnits="userSpaceOnUse" x="-20" y="-20" width="${c.ancho + 40}" height="${c.alto + 40}">` +
        `<path class="mapa__revela" style="--i:${i}" pathLength="1" d="${trazo}" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round"/></mask>`
    );
    d.push(`<path class="senda" d="${trazo}" mask="url(#${id}-s${i})"/>`);
    // El destino: un punto, no un anillo (un anillo dentro del lazo se lee como una diana).
    d.push(`<circle class="destino" style="--i:${i}" cx="${s.destino[0]}" cy="${s.destino[1]}" r="${Math.max(2.4, s.radio * 0.14).toFixed(1)}"/>`);
  });

  // ── La senda turquesa: un pincel con grosor de mano ──
  const eje = curva(c.ruta);
  mascaras.push(
    `<mask id="${id}-r" maskUnits="userSpaceOnUse" x="-20" y="-20" width="${c.ancho + 40}" height="${c.alto + 40}">` +
      `<path class="mapa__revela mapa__revela--ruta" pathLength="1" d="${eje}" fill="none" stroke="#fff" stroke-width="${c.grosorRuta * 4}" stroke-linecap="round"/></mask>`
  );
  d.push(`<path class="ruta" d="${pincel(c.ruta, c.grosorRuta, 0.28, 7)}" mask="url(#${id}-r)"/>`);

  // ── La casa, con su poco de luz ──
  d.push(`<circle class="casa__luz" cx="${c.casa[0]}" cy="${c.casa[1]}" r="${c.tamRotulo * 1.6}" fill="url(#${id}-luz)"/>`);
  d.push(`<circle class="casa" cx="${c.casa[0]}" cy="${c.casa[1]}" r="${(c.tamRotulo * 0.33).toFixed(1)}"/>`);

  // ── Los rótulos ──
  c.sendas.forEach((s, i) => {
    const lineas = s.rotulo
      .map((l, k) => `<tspan x="${s.texto.x}" dy="${k === 0 ? 0 : (c.tamRotulo * 1.18).toFixed(1)}">${esc(l)}</tspan>`)
      .join('');
    d.push(
      `<text class="topo" style="--i:${i}" x="${s.texto.x}" y="${s.texto.y}" text-anchor="${s.texto.ancla}" font-size="${c.tamRotulo}">${lineas}</text>`
    );
  });

  const defs =
    `<defs><radialGradient id="${id}-luz"><stop offset="0" stop-color="#F1BE68" stop-opacity=".34"/>` +
    `<stop offset="1" stop-color="#F1BE68" stop-opacity="0"/></radialGradient>${mascaras.join('')}</defs>`;

  return (
    `<svg class="mapa__svg ${clase}" viewBox="0 0 ${c.ancho} ${c.alto}" preserveAspectRatio="${c.encaje}" ` +
    `aria-hidden="true" focusable="false">${defs}${d.join('')}</svg>`
  );
}
