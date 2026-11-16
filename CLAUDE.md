# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ver también `AGENTS.md` (links a la documentación de Astro e instrucciones del dev server).

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
- `src/styles/global.css` tiene los tokens de diseño (azul marino `--ink` y naranja `--flame`/`--flame-deep`, tomados del logo SAM, y el fondo papel `--paper`), el contenedor `.wrap` y las variantes de `.btn`. Cada componente tiene su propio `<style>`. Las fuentes se sirven desde el propio sitio con `@fontsource-variable` (Bricolage Grotesque para títulos, Figtree para texto) y se importan en `src/layouts/Layout.astro`.
- Las imágenes van en `src/assets/` y pasan por `astro:assets` (`<Picture>`/`<Image>`), que genera AVIF/WebP responsivos. Por eso no hace falta achicar el `hero.jpg` original.
- Los PDFs van en `public/docs/` y se sirven tal cual. Los `href` de `src/components/Footer.astro` tienen que coincidir exactamente con los nombres de archivo. El contenido legal del footer (licencia, documentos, links de defensa del consumidor) lo provee el dueño; no cambiarlo si no lo pide.
- Los favicons de `public/` (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`) se generaron una vez a partir de `src/assets/logo.jpg` (centrado en un cuadrado blanco con ffmpeg). No se regeneran solos.

## Reglas de contenido (pedidas por el dueño)

- Los textos salen de la web principal (sumatealmundo.com) o están aprobados explícitamente; marcar para revisión cualquier texto nuevo o reescrito.
- No mencionar países (por ejemplo, se dejó afuera a propósito "Programas con Brasil" de la web principal).
- El contenido de voluntariado se quitó a propósito.

## Deploy

Netlify hace el build según `netlify.toml` (`pnpm build`, publica `dist`, Node 24, cache inmutable para `/_astro/*`). El `site` de `astro.config.mjs` es `https://sumatealmundo.tur.ar`. El trabajo se hace en ramas con PRs a `ranaclyde/sumatealmundo-landing`. El remoto usa el alias SSH `github-personal`, porque la clave por defecto de `github.com` en esta máquina es de otra cuenta de GitHub.
