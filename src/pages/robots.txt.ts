/**
 * robots.txt · todo abierto a los buscadores y el sitemap, con el dominio de
 * `site` (astro.config.mjs): al cambiar el dominio, cambia solo. Las páginas
 * que no deben salir en Google (gracias, 404) llevan noindex en su <head>: si
 * se bloquearan aquí, Google no podría leer ese noindex.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
