/**
 * La ruta limpia de una página («/comunidad»). Con `build.format: 'file'`,
 * Astro.url.pathname trae «.html» al compilar («/comunidad.html»): la
 * canonical, el menú y el sitemap tienen que ver siempre la misma URL que
 * enlazan las páginas y que sirve GitHub Pages.
 */
export const rutaLimpia = (pathname: string): string =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/+$/, '$1') || '/';
