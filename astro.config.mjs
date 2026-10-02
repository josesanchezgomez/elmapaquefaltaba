// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://elmapaquefaltaba.com',
  // URLs sin barra final (/comunidad), iguales en la canonical, el sitemap y los
  // enlaces internos: GitHub Pages sirve comunidad.html en /comunidad sin
  // redirigir. Con carpetas (/comunidad/) cada enlace interno pasaba por un 308.
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
