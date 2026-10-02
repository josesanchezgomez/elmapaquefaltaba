# El mapa que faltaba · elmapaquefaltaba.com

> **El repositorio de la web publicada** (José, 02/10/2026), vinculado al dominio
> `elmapaquefaltaba.com`. Lleva la versión 6 (plantilla [LifeCoach de Colorlib](https://colorlib.com)
> con el texto de la web) y empieza con un historial limpio. Se trabaja en `develop`; `main` es la
> web publicada y solo recibe cambios por PR desde `develop` (ver «Publicación»). Las pruebas
> anteriores viven en `el-mapa-que-faltaba-v6` (v6) y `el-mapa-que-faltaba` (v1 a v5).

Para verla: `npm ci`, `npm run build` y `npm run preview -- --port 4436` → http://localhost:4436
(el formulario y el botón de WhatsApp necesitan `PUBLIC_WEB3FORMS_KEY` y `WHATSAPP_PERSONAL` en un
`.env`, a partir de `.env.example`; el número de José no va en el repositorio).

## Acompañamiento grupal (01/10)

Página nueva, `/acompanamiento-grupal`, con el texto que trajo José (literal) y el recorrido del 1 a 1.
En la cabecera, los dos acompañamientos van juntos en el desplegable «Acompañamientos» (en el móvil y
en el pie, seguidos). La portada tiene una cuarta tarjeta y las tarjetas van de dos en dos. Lleva su
SEO: título, descripción, imagen al compartir y datos estructurados (servicio y preguntas). Sin fotos
de stock: la cabecera es la foto de José en el mirador.

## Qué se ha tomado de la plantilla

- **La letra:** Poppins, autoalojada.
- **Los colores:** blanco y gris azulado muy claro alternos, banda turquesa y lima de acento.
- **La portada:** foto a sangre con velo, antetítulo en mayúsculas espaciadas y botón blanco.
- **Las páginas interiores:** foto a sangre con las migas («Inicio › …»).
- **La cabecera:**
  - la barra de arriba;
  - el logotipo en dos tonos («EL MAPA» / «QUE FALTABA»);
  - el menú en mayúsculas, con la página actual en su bloque lima.
- **Los bloques de la plantilla, con el texto de José:**

| Bloque de la plantilla | Aquí |
|---|---|
| Franja «Call us / Opening hours / Appointment» | La ficha del 1 a 1 y su botón |
| «Why coaching work?» (foto y lista con iconos) | Sus párrafos y el lema; el mapa (bucle); «Yo fui mi primer caso»; el método |
| Servicios en tarjetas con icono en círculo turquesa | «Qué vamos a trabajar» (1 a 1) y las preguntas de la escuela |
| **Contadores** | **El manifiesto** («Comprender el ego…»): la web no lleva cifras |
| **Testimonios** (banda turquesa) | **La cita de Jung**; en el 1 a 1, «No acompaño esto solo porque lo haya estudiado»: la web no lleva testimonios |
| Blog | Los vídeos del canal |
| Paquetes con precio | Los tres caminos (sin precios; «Gratis.» y «En preparación.» donde iba el precio) |
| Página de contacto (panel lima y formulario) | La carta |
| Suscripción | «Avísame cuando abra» de la escuela |
| Pie (negro) | Pie claro con panel turquesa: la firma de José y el botón |

## Qué NO se ha tomado, a propósito

- **jQuery, carrusel, animaciones al hacer scroll, Google Maps, Google Fonts, Font Awesome:** la
  web sigue sin cargar nada de terceros.
- **Contadores y testimonios:** la web no lleva cifras de resultado ni testimonios.
- **Los iconos de Flaticon:** tienen su propia licencia. Los de aquí están dibujados para esta web.
- **Negro:** la barra de arriba y el pie de la plantilla son negros; aquí, claros. José no quiere
  fondos oscuros.
- **Contraste:** la plantilla pone el texto blanco sobre el lima (1,7:1) y las etiquetas en lima
  sobre blanco (1,7:1). Aquí:
  - el botón lleva el texto oscuro (9,8:1);
  - las etiquetas, lima oscuro (6,2:1);
  - el texto, gris a 6:1.

## Fotos (01/10): todas de José, ninguna de stock

José pasó sus fotos (los originales están en su carpeta de Descargas). Las cuatro de stock de la
plantilla, con su etiqueta «sustituir», ya no están.

| Sitio | Foto |
|---|---|
| Cabecera de la portada | Un camino de tierra entre robles (`camino-bosque.webp`) |
| Cabecera del 1 a 1 | Un árbol grande de dos troncos y una copa (`arbol-dos-troncos.webp`) |
| Cabecera del grupal | Un acantilado sobre el mar (`acantilado-mar.webp`) |
| Cabecera de la comunidad | José en la ladera de un monte, con su perro; se ve entera (`jose-monte-perro.webp`) |
| Cabecera de la escuela | José en lo alto de un monte, con el valle detrás: «el mapa completo» (`jose-panorama.webp`) |
| Grupal, junto a la entrada | José subiendo un sendero entre pinos (`jose-sendero.webp`) |

- **Camisa verde:** José quiere que salga solo en la portada.
- **Traje azul:** en el 1 a 1, junto a la entrada.
- **Mirador (vertical):** «Yo fui mi primer caso».
- **Escritorio:** el método y la carta.
- **Dónde se definen:** las cabeceras, en `FONDOS` de `src/consts.ts`, donde `foco` es la parte de
  la foto que queda a la vista; el resto, en `FOTOS`.
- **Cabeceras con el titular a la derecha** (`heroe--derecha`): en el 1 a 1, el grupal y la
  escuela, donde José o el árbol quedan a la izquierda.

## Licencia de la plantilla

CC BY 3.0 (Colorlib). José quitó el crédito del pie (01/10): el reconocimiento que pide la licencia
va en el aviso legal, en «Propiedad intelectual» («El diseño parte de la plantilla «LifeCoach» de
Colorlib…»). Colorlib pide además el enlace del pie salvo que se compre su licencia
(https://colorlib.com/wp/licence/): si la v6 se publica, comprarla deja todo sin dudas.

## Publicación (GitHub Pages, desde `main`)

La v6 es la que se publica. `main` es la web publicada y solo recibe cambios por PR desde
`develop`. Cada cambio que entra en `main` lo publica solo `.github/workflows/publicar.yml`.

Antes de la primera publicación hacen falta tres cosas:
1. **Los dos secretos del repositorio** (Settings → Secrets and variables → Actions): `PUBLIC_WEB3FORMS_KEY` y `WHATSAPP_PERSONAL`. Sin ellos no se publica.
2. **Pages activado** (Settings → Pages → Source: «GitHub Actions») y el dominio `elmapaquefaltaba.com` en «Custom domain», con su DNS apuntando a GitHub.
3. **Un repositorio que Pages pueda publicar.** Con un repositorio privado, GitHub Pages exige un plan de pago (Pro). Este repositorio puede hacerse público sin más: su historial empieza limpio (el número de WhatsApp nunca ha estado en él).

## Verificado (30/09)

- **Texto:** `node scripts/verificar-texto.mjs` ✓ 270, literal respecto al texto v13 de la v5.
- **QA a 8 anchos, 10 rutas:**
  - sin scroll lateral;
  - un H1 por página;
  - sin terceros;
  - sin errores.
  Quedan los falsos positivos de siempre y el texto blanco sobre foto, que la herramienta no puede
  medir.
- **Velocidad (móvil lento simulado):** LCP de 1,4 a 1,8 s y CLS 0.
