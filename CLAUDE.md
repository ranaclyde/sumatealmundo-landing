# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Documentos de referencia

Leerlos antes de cambiar contenido o diseño:

- `PRODUCT.md`: para quién es el sitio, propósito, posicionamiento ("viajar con propósito"), restricciones de contenido, voz de marca y qué evidencia existe (y cuál no se puede inventar). Es la fuente de verdad del producto.
- `DESIGN.md`: sistema de diseño "Diario de viaje". El frontmatter YAML tiene los tokens normativos (colores, tipografía, radios, espaciado, componentes); el cuerpo explica cómo aplicarlos y las reglas con nombre (por ejemplo, "la regla de la aguja": el naranja solo para acción y novedad). Si un cambio visual se aparta de estas reglas, consultarlo antes.
- `.impeccable/design.json`: complemento de `DESIGN.md` para la skill impeccable (escalas tonales, sombras, movimiento, breakpoints y snippets de componentes). Si se regenera `DESIGN.md` (`/impeccable document`), regenerar también este archivo.
- `AGENTS.md`: links a la documentación de Astro e instrucciones del dev server.

Si cambia el código de diseño (tokens del `@theme` de `global.css`, componentes nuevos), actualizar `DESIGN.md` para que no quede desfasado.

## Qué es

Landing estática de una sola página de **Sumate al Mundo (SAM)**, una agencia de viajes argentina (EVT). Se sirve en `https://sumatealmundo.tur.ar` (el "local virtual" registrado de la agencia) y lleva a los visitantes a la web principal, `https://sumatealmundo.com/`. Reemplazó a una landing anterior hecha con Next.js + Chakra UI. Todos los textos están en español rioplatense con voseo ("Viajá", "Sumergite", "Preparate").

## Comandos

El gestor de paquetes es pnpm (versión fijada en `packageManager` de `package.json`).

- `pnpm install`
- `astro dev --background` / `astro dev stop` / `astro dev status` / `astro dev logs`: usar el modo en segundo plano, según `AGENTS.md` (correr con `npx astro …` o `pnpm astro …`). Si el puerto 4321 está ocupado usa otro; verlo con `astro dev status`.
- `pnpm build`: build estático en `dist/`. No hay tests ni linter; la verificación es un build sin errores más una revisión visual en escritorio y celular.
- `pnpm preview`: sirve el `dist/` generado.

## Arquitectura

- `src/pages/index.astro` es la única página: Header → Hero → lista "Más formas de viajar" → cita de Margaret Mead → cierre "Sumate con nosotros" → Footer. La lista de programas es el array `ways` de ese archivo; un ítem con `badge` se muestra destacado en naranja con la etiqueta "Nuevo".
- `src/data/links.ts` centraliza las URLs (web principal, contacto, redes), los atributos `NEW_TAB` y las frases rotativas del hero (`TAGLINES`, que se muestran como "Viajá" + frase). Regla: los links que no son de sumatealmundo.com (redes, sitios del gobierno, PDFs) se abren en una pestaña nueva con `{...NEW_TAB}`; los de sumatealmundo.com, en la misma.
- `src/components/Hero.astro` apila todas las frases en una misma celda de grid (así no se mueve el layout) y alterna el atributo `data-active` con un script inline. Con `prefers-reduced-motion` queda fijo. Las frases tienen `aria-hidden` y se repiten en un `span` `sr-only` para lectores de pantalla.
- Estilos con **Tailwind CSS 4** (plugin `@tailwindcss/vite` en `astro.config.mjs`, sin `tailwind.config`). `src/styles/global.css` declara los tokens de `DESIGN.md` en `@theme` con los mismos nombres en español, así que las clases son `bg-papel`, `text-azul-tinta`, `text-naranja-brujula-profundo`, `font-display`, `text-headline`, `py-section`, `px-gutter`, `ease-salida`, `shadow-accion`, etc. Cada token `--text-*` ya trae interlineado, tracking y peso. Hay dos utilidades propias: `wrap` (contenedor centrado) y `velo-hero` (degradado sobre la foto). Los estilos base (fondo, tipografía, foco, selección) están en `@layer base`. No hay bloques `<style>` en los componentes.
- Ojo con las clases de tamaño de Tailwind (`text-base`, `text-lg`…): traen su propio interlineado y rompen el 1.6 heredado del body. Para tamaños sueltos usar valores arbitrarios (`text-[1rem]`) o un token `--text-*` del tema.
- `src/components/Button.astro` es el botón píldora del sistema (`variant`: `primary` | `ghost` | `outline`; `size`: `md` | `sm`; `arrow` agrega la flecha).
- Los breakpoints replican los del diseño original con valores arbitrarios (`min-[561px]:`, `min-[641px]:`, `min-[721px]:`, `min-[861px]:`, `max-[359px]:`), no los de Tailwind por defecto.
- Las imágenes van en `src/assets/` y pasan por `astro:assets` (`<Picture>`/`<Image>`), que genera AVIF/WebP responsivos. Por eso no hace falta achicar el `hero.jpg` original.
- Los PDFs van en `public/docs/` y se sirven tal cual. Los `href` de `src/components/Footer.astro` tienen que coincidir exactamente con los nombres de archivo. El contenido legal del footer (licencia, documentos, links de defensa del consumidor) lo provee el dueño; no cambiarlo si no lo pide.
- Los favicons de `public/` (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`) se generaron una vez a partir de `src/assets/logo.jpg` (centrado en un cuadrado blanco con ffmpeg). No se regeneran solos.

## Reglas de contenido (pedidas por el dueño)

Resumen; el detalle está en `PRODUCT.md`.

- Los textos salen de la web principal (sumatealmundo.com) o están aprobados explícitamente; marcar para revisión cualquier texto nuevo o reescrito.
- No mencionar países (por ejemplo, se dejó afuera a propósito "Programas con Brasil" de la web principal).
- El contenido de voluntariado se quitó a propósito.

## Deploy

Netlify hace el build según `netlify.toml` (`pnpm build`, publica `dist`, Node 24, cache inmutable para `/_astro/*`). El `site` de `astro.config.mjs` es `https://sumatealmundo.tur.ar`. El trabajo se hace en ramas con PRs a `ranaclyde/sumatealmundo-landing`. El remoto usa el alias SSH `github-personal`, porque la clave por defecto de `github.com` en esta máquina es de otra cuenta de GitHub.
