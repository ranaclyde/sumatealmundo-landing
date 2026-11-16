# Sumate al Mundo

Landing de **Sumate al Mundo (SAM)**, Empresa de Viajes y Turismo (Legajo 18281). Se publica en [sumatealmundo.tur.ar](https://sumatealmundo.tur.ar) y lleva a la web principal, [sumatealmundo.com](https://sumatealmundo.com/).

Es un sitio estático de una sola página hecho con [Astro](https://astro.build).

## Requisitos

- Node 22 o superior
- pnpm (la versión está fijada en `package.json`; con `corepack enable` se usa automáticamente)

## Comandos

| Comando                  | Qué hace                                          |
| :----------------------- | :------------------------------------------------ |
| `pnpm install`           | Instala las dependencias                          |
| `pnpm dev`               | Levanta el servidor local en `localhost:4321`     |
| `pnpm build`             | Genera el sitio de producción en `dist/`          |
| `pnpm preview`           | Sirve el build localmente para revisarlo          |

## Estructura

```text
public/
├── docs/            PDFs del footer (se sirven tal cual en /docs/…)
└── favicon.ico, favicon-32.png, apple-touch-icon.png
src/
├── assets/          Logo y foto del hero (Astro los optimiza)
├── components/      Header, Hero y Footer
├── data/links.ts    URLs, redes y frases rotativas del hero
├── layouts/         Layout base (fuentes, meta, favicons)
├── pages/index.astro  La página, con la lista de "Más formas de viajar"
└── styles/global.css  Colores, tipografía y botones
```

## Cambios habituales

- **Textos del hero:** editar `TAGLINES` en `src/data/links.ts`.
- **Programas de "Más formas de viajar":** editar el array `ways` en `src/pages/index.astro`. Agregar `badge: 'Nuevo'` destaca un ítem.
- **Documentos:** reemplazar el PDF en `public/docs/`. Si cambia el nombre del archivo, actualizar el link en `src/components/Footer.astro`.
- **Imágenes:** reemplazar `src/assets/hero.jpg` o `src/assets/logo.jpg` con el mismo nombre. Si cambia el logo, hay que regenerar los favicons de `public/`.

## Deploy

Netlify publica el sitio automáticamente con cada push a `main`, según la configuración de `netlify.toml`.
