/**
 * EL TRAZO A MANO.
 *
 * Los dibujos de la web (el mapa de la portada, el bucle, las cabeceras de los
 * caminos) no son imágenes: se dibujan AL COMPILAR a partir de unos pocos
 * puntos que viven, legibles, en cada componente. Este fichero convierte esos
 * puntos en trazados SVG con aire de dibujo hecho a mano: curvas suaves, un
 * temblor pequeño y siempre el mismo (va con semilla) y un grosor que cambia
 * como el de un rotulador.
 *
 * Para retocar un dibujo no hay que tocar nada de aquí: se mueven los puntos
 * del componente. Nada de este fichero llega al navegador como JavaScript.
 */

export type Punto = [number, number];

/** Aleatorio con semilla (mulberry32): el mismo dibujo en cada compilación. */
export function azar(semilla: number) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;
const par = (p: Punto) => `${r1(p[0])} ${r1(p[1])}`;
const dist = (a: Punto, b: Punto) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/** Punto de la curva de Catmull-Rom entre p1 y p2 (t de 0 a 1). */
function catmull(p0: Punto, p1: Punto, p2: Punto, p3: Punto, t: number): Punto {
  const t2 = t * t;
  const t3 = t2 * t;
  const eje = (i: 0 | 1) =>
    0.5 *
    (2 * p1[i] +
      (-p0[i] + p2[i]) * t +
      (2 * p0[i] - 5 * p1[i] + 4 * p2[i] - p3[i]) * t2 +
      (-p0[i] + 3 * p1[i] - 3 * p2[i] + p3[i]) * t3);
  return [eje(0), eje(1)];
}

/** Curva suave que pasa por todos los puntos (Catmull-Rom escrita como Bézier). */
export function curva(pts: Punto[], cerrada = false): string {
  const n = pts.length;
  if (n < 2) return '';
  const P = (i: number): Punto =>
    cerrada ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))];
  let d = `M${par(pts[0])}`;
  const tramos = cerrada ? n : n - 1;
  for (let i = 0; i < tramos; i++) {
    const p0 = P(i - 1);
    const p1 = P(i);
    const p2 = P(i + 1);
    const p3 = P(i + 2);
    const c1: Punto = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Punto = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${par(c1)} ${par(c2)} ${par(p2)}`;
  }
  return cerrada ? `${d}Z` : d;
}

/** La misma curva, pero como lista de puntos seguidos (unos cada `paso` px). */
export function muestrea(pts: Punto[], paso = 3, cerrada = false): Punto[] {
  const n = pts.length;
  if (n < 2) return [...pts];
  const P = (i: number): Punto =>
    cerrada ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))];
  const salida: Punto[] = [];
  const tramos = cerrada ? n : n - 1;
  for (let i = 0; i < tramos; i++) {
    const p1 = P(i);
    const p2 = P(i + 1);
    const pasos = Math.max(2, Math.ceil(dist(p1, p2) / paso));
    for (let k = 0; k < pasos; k++) salida.push(catmull(P(i - 1), p1, p2, P(i + 2), k / pasos));
  }
  if (!cerrada) salida.push(pts[n - 1]);
  return salida;
}

/** Normal (perpendicular, a la izquierda del avance) en cada punto. */
function normales(pts: Punto[]): Punto[] {
  return pts.map((_, i) => {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    const L = dist(a, b) || 1;
    return [-(b[1] - a[1]) / L, (b[0] - a[0]) / L];
  });
}

/** Ruido suave a lo largo de la línea: dos ondas con fase al azar. */
function onda(semilla: number, largo1 = 90, largo2 = 37) {
  const r = azar(semilla);
  const f1 = r() * Math.PI * 2;
  const f2 = r() * Math.PI * 2;
  return (s: number) =>
    0.65 * Math.sin((s / largo1) * Math.PI * 2 + f1) + 0.35 * Math.sin((s / largo2) * Math.PI * 2 + f2);
}

/** Temblor de mano: cada punto se aparta un poco de la línea, de forma suave. */
export function temblor(pts: Punto[], amplitud: number, semilla: number): Punto[] {
  const n = normales(pts);
  const ruido = onda(semilla);
  let s = 0;
  return pts.map((p, i) => {
    if (i > 0) s += dist(pts[i - 1], p);
    const k = amplitud * ruido(s);
    return [p[0] + n[i][0] * k, p[1] + n[i][1] * k];
  });
}

/** Una línea paralela a otra, a `d` px (positivo: a la izquierda del avance). */
export function paralela(pts: Punto[], d: number): Punto[] {
  const n = normales(pts);
  return pts.map((p, i) => [p[0] + n[i][0] * d, p[1] + n[i][1] * d]);
}

/** Polilínea con los puntos imprescindibles (Ramer-Douglas-Peucker). */
function simplifica(pts: Punto[], eps: number): Punto[] {
  if (pts.length < 3) return pts;
  const dentro = new Array(pts.length).fill(false);
  dentro[0] = dentro[pts.length - 1] = true;
  const pila: [number, number][] = [[0, pts.length - 1]];
  while (pila.length) {
    const [a, b] = pila.pop()!;
    let mejor = -1;
    let idx = -1;
    const [ax, ay] = pts[a];
    const [bx, by] = pts[b];
    const L = Math.hypot(bx - ax, by - ay) || 1e-9;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((bx - ax) * (pts[i][1] - ay) - (by - ay) * (pts[i][0] - ax)) / L;
      if (d > mejor) {
        mejor = d;
        idx = i;
      }
    }
    if (mejor > eps) {
      dentro[idx] = true;
      pila.push([a, idx], [idx, b]);
    }
  }
  return pts.filter((_, i) => dentro[i]);
}

const polilinea = (pts: Punto[]) => `M${pts.map(par).join(' L')}`;

/**
 * La senda que va y vuelve: sale por un lado del camino, da la vuelta
 * alrededor del destino y regresa por el otro lado al mismo punto de partida.
 * `camino` va del origen hasta el destino; la senda se para al llegar al lazo.
 */
export function raqueta(
  camino: Punto[],
  destino: Punto,
  radio: number,
  semilla: number,
  separacion = 2.6
): string {
  const r = azar(semilla);
  // El camino llega hasta el destino; la senda se para al tocar el lazo.
  const linea = muestrea(camino, 4).filter((p) => dist(p, destino) > radio * 0.95);
  const ida = temblor(paralela(linea, separacion), 0.9, semilla);
  const vuelta = temblor(paralela([...linea].reverse(), separacion), 0.9, semilla + 7);
  const angulo = (p: Punto) => Math.atan2(p[1] - destino[1], p[0] - destino[0]);
  const vuelta360 = (a: number) => ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  // El lazo va del final de la ida al principio de la vuelta rodeando el
  // destino por el lado de fuera (el opuesto a por donde se llega).
  const aI = angulo(ida[ida.length - 1]);
  const aV = angulo(vuelta[0]);
  const lejos = angulo(linea[linea.length - 1]) + Math.PI;
  const barrido = vuelta360(aV - aI);
  const sentido = vuelta360(lejos - aI) < barrido ? 1 : -1;
  const recorrido = sentido === 1 ? barrido : 2 * Math.PI - barrido;
  const lazo: Punto[] = [];
  for (let k = 1; k < 10; k++) {
    const a = aI + sentido * (k / 10) * recorrido;
    const rad = radio * (1 + (r() - 0.5) * 0.2);
    lazo.push([destino[0] + rad * Math.cos(a), destino[1] + rad * Math.sin(a)]);
  }
  const guia = [...simplifica(ida, 1.2), ...lazo, ...simplifica(vuelta, 1.2)];
  return curva(guia);
}

/** Curva de nivel cerrada e irregular alrededor de un centro. */
export function anillo(
  centro: Punto,
  rx: number,
  ry: number,
  semilla: number,
  irregular = 0.1,
  giro = 0,
  puntos = 13
): Punto[] {
  const r = azar(semilla);
  const g = (giro * Math.PI) / 180;
  const salida: Punto[] = [];
  for (let k = 0; k < puntos; k++) {
    const a = (k / puntos) * Math.PI * 2;
    const f = 1 + (r() - 0.5) * 2 * irregular;
    const x = Math.cos(a) * rx * f;
    const y = Math.sin(a) * ry * f;
    salida.push([centro[0] + x * Math.cos(g) - y * Math.sin(g), centro[1] + x * Math.sin(g) + y * Math.cos(g)]);
  }
  return salida;
}

/**
 * Barbas: rayitas cortas hacia dentro, como marcan los mapas una hondonada.
 * Solo en el arco que va de `desde` a `hasta` (en grados), con paso y largo
 * irregulares para que no se lea como una esfera de reloj.
 */
export function barbas(
  contorno: Punto[],
  centro: Punto,
  cada: number,
  largo: number,
  semilla: number,
  desde = 0,
  hasta = 360
): string {
  const r = azar(semilla);
  const pts = muestrea(contorno, 1.5, true);
  const trazos: string[] = [];
  let recorrido = 0;
  let siguiente = cada * r();
  for (let i = 1; i < pts.length; i++) {
    recorrido += dist(pts[i - 1], pts[i]);
    if (recorrido < siguiente) continue;
    siguiente = recorrido + cada * (0.75 + r() * 0.5);
    const [x, y] = pts[i];
    let ang = (Math.atan2(y - centro[1], x - centro[0]) * 180) / Math.PI;
    if (ang < 0) ang += 360;
    const enArco = desde <= hasta ? ang >= desde && ang <= hasta : ang >= desde || ang <= hasta;
    if (!enArco) continue;
    const dx = centro[0] - x;
    const dy = centro[1] - y;
    const L = Math.hypot(dx, dy) || 1;
    const l = largo * (0.7 + r() * 0.6);
    trazos.push(`M${par([x, y])}L${par([x + (dx / L) * l, y + (dy / L) * l])}`);
  }
  return trazos.join('');
}

/**
 * Pincel: el trazo como una mancha de tinta con grosor variable (más fino al
 * empezar y al acabar, y con la presión que cambia por el camino). Devuelve un
 * polígono para rellenar, no una línea.
 */
export function pincel(
  pts: Punto[],
  ancho: number,
  variacion: number,
  semilla: number,
  afinado = 0.12
): string {
  const linea = muestrea(pts, 2.5);
  const n = normales(linea);
  const ruido = onda(semilla, 120, 45);
  const total = linea.reduce((s, p, i) => (i ? s + dist(linea[i - 1], p) : 0), 0);
  let s = 0;
  const izq: Punto[] = [];
  const der: Punto[] = [];
  linea.forEach((p, i) => {
    if (i > 0) s += dist(linea[i - 1], p);
    const t = s / (total || 1);
    const punta = Math.min(1, t / afinado, (1 - t) / afinado);
    const w = (ancho / 2) * (1 + variacion * ruido(s)) * (0.45 + 0.55 * Math.sqrt(Math.max(0, punta)));
    izq.push([p[0] + n[i][0] * w, p[1] + n[i][1] * w]);
    der.push([p[0] - n[i][0] * w, p[1] - n[i][1] * w]);
  });
  const contorno = [...simplifica(izq, 0.12), ...simplifica(der.reverse(), 0.12)];
  return `${polilinea(contorno)}Z`;
}

/** Punto a una fracción `t` (0 a 1) del recorrido de una curva por puntos. */
export function puntoEn(pts: Punto[], t: number): Punto {
  const linea = muestrea(pts, 2);
  const largos = [0];
  for (let i = 1; i < linea.length; i++) largos.push(largos[i - 1] + dist(linea[i - 1], linea[i]));
  const objetivo = t * largos[largos.length - 1];
  const i = Math.max(1, largos.findIndex((l) => l >= objetivo));
  const k = (objetivo - largos[i - 1]) / (largos[i] - largos[i - 1] || 1);
  return [
    linea[i - 1][0] + (linea[i][0] - linea[i - 1][0]) * k,
    linea[i - 1][1] + (linea[i][1] - linea[i - 1][1]) * k,
  ];
}
