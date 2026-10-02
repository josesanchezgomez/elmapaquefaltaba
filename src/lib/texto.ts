/**
 * Ajustes de composición que NO cambian el texto de José.
 *
 * atarRayas: la raya de un inciso («—adictivas o no—») no puede quedarse sola
 * al principio o al final de una línea, separada de su palabra. Se le pega un
 * UNIDOR INVISIBLE (U+2060), que no se ve, no se lee en voz alta y no cambia
 * ni una letra: solo impide que la línea se corte por ahí.
 *   · raya que abre  («—adictivas») → unida a la palabra que la sigue;
 *   · raya que cierra («no—,»)      → unida a la palabra que la precede.
 * scripts/verificar-texto.mjs ya ignora el unidor al comparar.
 */
const UNIDOR = '\u2060';

export const atarRayas = (texto: string): string =>
  texto
    // cierra: pegada a lo que lleva delante
    .replace(/(\S)—/g, `$1${UNIDOR}—`)
    // abre: pegada a lo que lleva detrás
    .replace(/(^|\s)—(?=\S)/g, `$1—${UNIDOR}`);

/**
 * atarCifras: una cantidad no se separa de su símbolo («320 €», «80 €»). Un
 * espacio duro (U+00A0) en lugar del normal: no cambia ni una letra y
 * verificar-texto lo lee como un espacio.
 */
export const atarCifras = (texto: string): string => texto.replace(/(\d) (€)/g, '$1\u00a0$2');

/**
 * atarCortas: en los titulares (h2), una palabra corta («y», «a», «la», «lo»,
 * «de», «el»…) no se queda sola al final de un renglón: va en el renglón de la
 * palabra que la sigue. «Precio y / preguntas prácticas» pasa a «Precio / y
 * preguntas prácticas»; «Entender lo / que se repite.», a «Entender / lo que se
 * repite.». Varias cortas seguidas («por lo que hoy») van juntas con la
 * siguiente.
 *
 * Devuelve HTML (se pinta con set:html): el texto escapado y cada grupo dentro
 * de <span class="nw"> (global.css: sin corte de línea). El textContent queda
 * idéntico letra a letra, así que verificar-texto sigue encontrándolo.
 */
const CORTAS = new Set([
  'y', 'e', 'o', 'u', 'a', 'al', 'el', 'la', 'las', 'lo', 'los', 'de', 'del',
  'en', 'un', 'una', 'tu', 'mi', 'su', 'te', 'se', 'que', 'por', 'con', 'sin',
  'es', 'no', 'si',
]);

const escapa = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * negritas: las negritas del brief de Nacho van en contenido.ts entre
 * **dobles asteriscos**. Aquí pasan a <strong> (seminegrita). Devuelve HTML
 * (se pinta con set:html) con el texto escapado, las rayas y las cifras
 * atadas. El textContent es el texto sin los asteriscos, que es lo que
 * compara verificar-texto.
 */
export const negritas = (texto: string): string =>
  escapa(atarCifras(atarRayas(texto))).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/** ¿El párrafo entero va en negrita? (para darle su paso de la escala). */
export const esFuerte = (texto: string): boolean => /^\*\*[^*]+\*\*$/.test(texto);

/** El texto sin las marcas de negrita (atributos, cortes por frase…). */
export const sinMarcas = (texto: string): string => texto.replace(/\*\*/g, '');

export const atarCortas = (texto: string): string => {
  const salida: string[] = [];
  let grupo: string[] = [];
  const cierra = () => {
    if (!grupo.length) return;
    const t = escapa(grupo.join(' '));
    salida.push(grupo.length > 1 ? `<span class="nw">${t}</span>` : t);
    grupo = [];
  };
  for (const palabra of texto.split(' ')) {
    grupo.push(palabra);
    const limpia = palabra.toLocaleLowerCase('es').replace(/[¿¡«»"(),.:;…?!]/g, '');
    if (!CORTAS.has(limpia)) cierra();
  }
  // Si el titular acabara en palabra corta, se queda con la de antes.
  if (grupo.length && salida.length) {
    const antes = salida.pop()!.replace(/^<span class="nw">|<\/span>$/g, '');
    grupo.unshift(antes);
    salida.push(`<span class="nw">${grupo.map((g, i) => (i ? escapa(g) : g)).join(' ')}</span>`);
  } else cierra();
  return salida.join(' ');
};
