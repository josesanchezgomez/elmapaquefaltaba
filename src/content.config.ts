/**
 * El blog (06/10): un artículo por fichero en src/content/blog/*.md. Cada
 * artículo trata un tema elegido por lo que la gente busca en Google, escrito
 * con la voz de Hawkins y humanizado, y
 * responde a una búsqueda de dolor (tituloSeo).
 *
 * Un artículo con borrador: true solo se construye si se pide (BORRADORES=si
 * al construir): en GitHub no está esa variable, así que un borrador nunca
 * se publica por descuido.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    /** El h1 del artículo: la búsqueda de dolor con las palabras de José. */
    titulo: z.string(),
    /** El <title>: la búsqueda tal cual, 50 caracteres como mucho. */
    tituloSeo: z.string().max(50),
    /** La descripción de Google: sin «¿» al principio y 155 como mucho. */
    descripcion: z.string().max(155).refine((d) => !d.startsWith('¿'), 'Google quita el «¿» inicial'),
    /** Las dos líneas de la tarjeta en la portada del blog. */
    resumen: z.string(),
    fecha: z.coerce.date(),
    /** El vídeo del que sale (id de YouTube, en VIDEOS de consts.ts). */
    video: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
