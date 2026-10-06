/**
 * Lo común del blog: qué artículos se construyen, en qué orden, su fecha en
 * castellano y los minutos de lectura.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

/** Los borradores solo con BORRADORES=si al construir (nunca en GitHub). */
const verBorradores = process.env.BORRADORES === 'si';

export type Articulo = CollectionEntry<'blog'>;

export const articulos = async (): Promise<Articulo[]> =>
  (await getCollection('blog', ({ data }) => verBorradores || !data.borrador)).sort(
    (a, b) => b.data.fecha.getTime() - a.data.fecha.getTime(),
  );

export const fechaLarga = (fecha: Date) =>
  new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(fecha);

/** A 200 palabras por minuto, que es una lectura tranquila. */
export const minutos = (cuerpo = '') => Math.max(1, Math.round(cuerpo.split(/\s+/).filter(Boolean).length / 200));
