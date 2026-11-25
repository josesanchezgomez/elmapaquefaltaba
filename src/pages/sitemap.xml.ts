/**
 * sitemap.xml · las páginas que se quieren en Google, con su URL canónica
 * (sin «.html» ni barra final). Sale de las páginas que existen: una página
 * nueva entra sola. Fuera, las que llevan noindex: gracias, la 404 y los
 * legales (01/10: que no compitan con las secciones en los enlaces de
 * debajo del resultado; siguen enlazados en el pie).
 * Sin <lastmod> en las secciones: una fecha que no cambia de verdad Google
 * la ignora, y su texto sale de un solo fichero (contenido.ts), así que no se
 * puede saber cuál cambió.
 * 06/10: más los artículos del blog que se construyen (sin borradores).
 * 25/11 (plan SEO, paso 0): los artículos sí llevan <lastmod>, su fecha real
 * («actualizado» o, si no lo hay, «fecha»), y /blog, la del artículo más
 * reciente. Así Google sabe cuándo vuelve a leerlos.
 */
import type { APIRoute } from 'astro';
import { rutaLimpia } from '../lib/ruta';
import { articulos } from '../lib/blog';

const FUERA = ['/gracias', '/gracias-lista', '/404', '/aviso-legal', '/privacidad', '/cookies'];

const rutas = Object.keys(import.meta.glob('./*.astro'))
  .map((f) => rutaLimpia(f.replace(/^\./, '').replace(/\.astro$/, '')))
  .filter((r) => !FUERA.includes(r))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

const dia = (f: Date) => f.toISOString().slice(0, 10);

export const GET: APIRoute = async ({ site }) => {
  const lista = await articulos();
  const fechas = new Map<string, string>(
    lista.map((a) => [`/blog/${a.id}`, dia(a.data.actualizado ?? a.data.fecha)]),
  );
  const ultima = [...fechas.values()].sort().at(-1);
  if (ultima) fechas.set('/blog', ultima);
  const urls = [...rutas, ...fechas.keys()]
    .filter((r, i, todas) => todas.indexOf(r) === i)
    .map((r) => {
      const f = fechas.get(r);
      return `  <url><loc>${new URL(r, site).href}</loc>${f ? `<lastmod>${f}</lastmod>` : ''}</url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
