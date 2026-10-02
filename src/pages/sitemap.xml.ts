/**
 * sitemap.xml · las páginas que se quieren en Google, con su URL canónica
 * (sin «.html» ni barra final). Sale de las páginas que existen: una página
 * nueva entra sola. Fuera, las que llevan noindex: gracias, la 404 y los
 * legales (01/10: que no compitan con las secciones en los enlaces de
 * debajo del resultado; siguen enlazados en el pie).
 * Sin <lastmod>: una fecha que no cambia de verdad Google la ignora.
 */
import type { APIRoute } from 'astro';
import { rutaLimpia } from '../lib/ruta';

const FUERA = ['/gracias', '/gracias-lista', '/404', '/aviso-legal', '/privacidad', '/cookies'];

const rutas = Object.keys(import.meta.glob('./*.astro'))
  .map((f) => rutaLimpia(f.replace(/^\./, '').replace(/\.astro$/, '')))
  .filter((r) => !FUERA.includes(r))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

export const GET: APIRoute = ({ site }) => {
  const urls = rutas.map((r) => `  <url><loc>${new URL(r, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
