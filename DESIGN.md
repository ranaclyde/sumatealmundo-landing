---
name: Sumate al Mundo
description: Landing de una agencia de viajes con propósito, con el estilo de un diario de viaje.
colors:
  azul-tinta: "#1f2257"
  azul-tinta-suave: "#4a4d7c"
  naranja-brujula: "#e4572e"
  naranja-brujula-profundo: "#c2411c"
  naranja-brujula-oscuro: "#a8360f"
  durazno: "#ffb196"
  papel: "#f6f1e7"
  papel-profundo: "#ece4d3"
  azul-noche: "#141640"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(2.75rem, 8.5vw, 6rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  cierre:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  quote:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(1.875rem, 4.6vw, 3.625rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  question:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)"
    fontWeight: 500
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
  button:
    fontFamily: "Bricolage Grotesque Variable, Figtree Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    letterSpacing: "-0.01em"
rounded:
  focus: "4px"
  logo: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  container: "76rem"
  section: "clamp(4.5rem, 11vw, 8.5rem)"
  item: "clamp(1.5rem, 3vw, 2.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.naranja-brujula-profundo}"
    textColor: "{colors.blanco}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.naranja-brujula-oscuro}"
    textColor: "{colors.blanco}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.blanco}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.6em 1.15em"
  button-ghost-hover:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.azul-tinta}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.azul-tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.4em"
  button-outline-hover:
    backgroundColor: "{colors.azul-tinta}"
    textColor: "{colors.blanco}"
  badge-nuevo:
    backgroundColor: "{colors.naranja-brujula-profundo}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.8em"
---

# Design System: Sumate al Mundo

> Implementación: los tokens del frontmatter están declarados en el `@theme` de Tailwind (`src/styles/global.css`) con los mismos nombres, así que cada token es una clase (`bg-papel`, `text-headline`, `shadow-accion`…). Si cambia un valor, cambiarlo en los dos lugares.

## Overview

**Creative North Star: "Diario de viaje"**

La landing se lee como un cuaderno de viaje con propósito: papel cálido, tinta azul marino y un único acento naranja que marca el rumbo, como la aguja de una brújula. La foto del hero (un mapa con manos que trazan una ruta) abre el diario; después la página se vuelve editorial y tranquila, con listas separadas por líneas finas, títulos grandes y mucho aire.

La identidad sale del logo SAM: el azul y el naranja son los suyos. La tipografía de títulos (Bricolage Grotesque) tiene el mismo carácter robusto y un poco artesanal de las letras del logo; la de texto (Figtree) es clara y amable. El tono visual es cálido y decidido, nunca corporativo ni de folleto de paquetes turísticos.

La densidad es baja: pocas secciones, cada una con una sola idea. El movimiento es escaso y con intención: un único momento protagonista (las frases "Viajá…" que rotan en el hero) y respuestas sutiles al pasar el mouse.

**Key Characteristics:**
- Fondo papel cálido, nunca blanco puro.
- Azul tinta para texto y superficies oscuras; naranja brújula solo para acción y novedad.
- Títulos grandes y compactos en Bricolage Grotesque; texto en Figtree.
- Listas editoriales separadas por líneas finas en lugar de tarjetas.
- Botones tipo píldora, cálidos y decididos.

## Colors

Una paleta de dos tintas sobre papel: azul marino y naranja, ambos tomados del logo SAM.

### Primary
- **Naranja brújula profundo** (`naranja-brujula-profundo`): el color de la acción. Fondo de los botones principales, etiqueta "Nuevo", títulos destacados, links de texto y selección de texto. Es la versión del naranja con contraste suficiente para texto blanco encima.
- **Naranja brújula** (`naranja-brujula`): el naranja vivo del logo. Solo como detalle decorativo (comillas de la cita, anillo de foco, selección); nunca de fondo bajo texto chico.
- **Naranja brújula oscuro** (`naranja-brujula-oscuro`): el estado hover del botón principal.
- **Durazno** (`durazno`): el naranja en versión clara para fondos oscuros. Es la palabra "Viajá" sobre la foto y el hover de los links del footer.

### Neutral
- **Azul tinta** (`azul-tinta`): el texto principal, los títulos y el footer. También el `theme-color` del navegador.
- **Azul noche** (`azul-noche`): solo para el velo sobre la foto del hero, siempre con transparencia. Es un azul tinta más oscuro para que el texto blanco tenga contraste sobre cualquier zona de la foto. Lo forman dos degradados: uno desde arriba (55% de opacidad que desaparece al 22% del alto, para el header) y otro diagonal a 20° desde abajo a la izquierda (94% → 70% → 15%), que es donde va el texto.
- **Azul tinta suave** (`azul-tinta-suave`): texto secundario, como párrafos de apoyo, descripciones y la firma de la cita.
- **Papel** (`papel`): el fondo de la página.
- **Papel profundo** (`papel-profundo`): banda de fondo para separar una sección (la cita) sin usar líneas ni sombras.
- **Blanco** (`blanco`): texto sobre azul tinta o naranja, y el fondo del logo.
- **Línea**: azul tinta al 18% (`color-mix`), para los separadores de las listas.

### Named Rules
**La regla de la aguja.** El naranja marca el rumbo: solo va donde hay que actuar o mirar (botones, novedades, un título destacado). Si en una pantalla hay naranja en más de dos o tres lugares, sobra.

**La regla del papel.** El fondo es siempre papel cálido o azul tinta. El blanco puro no se usa como fondo de sección.

## Typography

**Display Font:** Bricolage Grotesque Variable (con Figtree como respaldo)
**Body Font:** Figtree Variable (con system-ui como respaldo)

**Character:** Bricolage Grotesque aporta títulos robustos, compactos y con personalidad, emparentados con el logo; Figtree mantiene el texto liviano y fácil de leer. Las dos se sirven desde el propio sitio con `@fontsource-variable`.

### Hierarchy
- **Display** (750, `clamp(2.75rem, 8.5vw, 6rem)`, 1.02): solo el título del hero, "Viajá" más la frase rotativa. Ancho máximo de unas 14 letras por línea.
- **Headline** (750, `clamp(2.25rem, 4.6vw, 3.75rem)`, 1.02): títulos de sección ("Más formas de viajar, la misma esencia.").
- **Cierre** (750, `clamp(2.25rem, 5vw, 4rem)`, 1.02): el título del bloque final, "Sumate con nosotros". Un poco más grande que Headline en pantallas medianas, porque comparte fila con los botones.
- **Quote** (600, `clamp(1.875rem, 4.6vw, 3.625rem)`, 1.1): la cita destacada; ancho máximo de unas 22 letras por línea.
- **Title** (650, `clamp(1.5rem, 2.6vw, 2.125rem)`, 1.02): los nombres de cada programa en la lista.
- **Question** (500, `clamp(1.25rem, 2.4vw, 1.625rem)`, tracking -0.015em): la pregunta "¿Querés sumarte al mundo?" junto al botón del hero, en blanco al 92%. Es un puente entre el título y el botón: más grande que el texto, sin competir con el display.
- **Body** (400, 1.0625rem, 1.6): párrafos.
- **Body grande** (`body-lg`, 1.125rem, 1.6): textos de apoyo, como la introducción de una sección (ancho máximo de unas 38 letras por línea), y el nombre de la marca en el header (en Bricolage, 700).
- **Small** (0.9375rem, 1.6): el footer y el botón chico del header.
- **Label** (700, 0.8125rem, letter-spacing 0.08em, mayúsculas): solo la etiqueta "Nuevo".

### Named Rules
**La regla del título compacto.** Los títulos llevan interlineado ajustado (1.02), tracking negativo (-0.03em) y `text-wrap: balance`. El tracking nunca baja de -0.04em.

**La regla de la etiqueta única.** No se ponen etiquetas ni subtítulos chicos arriba de los títulos. La única excepción es la etiqueta "Nuevo", que comunica una novedad real.

## Layout

Contenedor centrado de hasta 76rem con márgenes laterales fluidos (`clamp(1rem, 4vw, 3.5rem)`). Las secciones respiran con un padding vertical generoso (`clamp(4.5rem, 11vw, 8.5rem)`).

- **Hero:** ocupa toda la altura de la pantalla (`100svh`), con el contenido abajo a la izquierda. La frase rotativa reserva el alto de la frase más larga para que el layout no se mueva.
- **Lista de programas:** en escritorio, dos columnas (5/12 para la introducción, que queda fija al hacer scroll, y 7/12 para la lista). Cada ítem divide nombre y descripción en dos columnas. Debajo de 860px la introducción pasa arriba, y debajo de 560px cada ítem queda en una sola columna.
- **Cierre:** título y botones en una fila que se acomoda en varias líneas si no entra.
- **Footer:** tres columnas (marca y redes, documentación, consumidores); debajo de 720px la marca ocupa todo el ancho y las listas quedan en dos columnas.

## Elevation & Depth

El sistema es plano. La profundidad se arma con capas de tono (papel, papel profundo, azul tinta) y con el velo degradado sobre la foto del hero, no con sombras. Las únicas sombras son resplandores suaves, siempre con desplazamiento hacia abajo, bajo los elementos naranjas.

### Shadow Vocabulary
- **Resplandor de acción** (`0 8px 24px -10px` naranja profundo al 70%): debajo del botón principal.
- **Resplandor de etiqueta** (`0 6px 16px -8px` naranja profundo al 80%): debajo de la etiqueta "Nuevo".

### Named Rules
**La regla de las capas de papel.** Para separar una sección se cambia el tono del fondo, no se agregan bordes ni tarjetas con sombra.

## Shapes

Formas redondeadas solo donde hay interacción: botones, etiquetas y botones de redes son píldoras o círculos. El contenido no va en cajas: las listas se separan con líneas finas de 1px. El logo lleva esquinas suaves (10px en el header, 12px en el footer) sobre un fondo blanco.

## Components

### Buttons
Cálidos y decididos: forma de píldora, tipografía de títulos y un movimiento corto al pasar el mouse.
- **Shape:** píldora (`rounded.pill`).
- **Primary:** fondo naranja brújula profundo, texto blanco y flecha a la derecha. Es la acción principal ("Quiero sumarme").
- **Hover / Focus:** el fondo se oscurece, el botón sube 1px y la flecha se desplaza 3px a la derecha; transiciones de 0.3s con `cubic-bezier(0.16, 1, 0.3, 1)`. El foco muestra un anillo naranja de 2px con 3px de separación.
- **Ghost:** borde blanco al 55% sobre la foto; al pasar el mouse se rellena de blanco con texto azul ("Contactanos" en el header).
- **Outline:** borde azul tinta sobre papel; al pasar el mouse se rellena de azul ("Contactanos" en el cierre).

### Chips
- **Etiqueta "Nuevo":** píldora naranja brújula profundo con texto blanco en mayúsculas y resplandor suave. Va arriba del título del ítem destacado, cuyo título también pasa a naranja.

### Navigation
- **Header:** transparente sobre la foto del hero, con el logo y el nombre a la izquierda y el botón ghost "Contactanos" a la derecha. Debajo de 359px se oculta el nombre y queda solo el logo.
- **Footer:** azul tinta. Los títulos de grupo van en blanco y los links en blanco al 82%, que pasan a durazno con subrayado al pasar el mouse. Las redes son círculos con borde que se rellenan de blanco. Los datos legales van al pie, con una línea divisoria.

### Rotador "Viajá…"
El componente característico. "Viajá" queda fijo en durazno y la frase de abajo cambia cada 2.8s: la frase nueva entra desde abajo con un fundido y un desenfoque que se aclaran, y la saliente sube y se desvanece (0.7s). Con `prefers-reduced-motion` queda fijo en la primera frase. Las frases no las leen los lectores de pantalla; se ofrecen todas juntas en un texto oculto.

### Lista editorial
Ítems separados por líneas finas, con el nombre del programa a la izquierda y la descripción a la derecha. Al pasar el mouse el contenido se desplaza 0.75rem a la derecha y el título pasa a naranja.

## Do's and Don'ts

### Do:
- **Do** usar papel (`papel`) como fondo y azul tinta (`azul-tinta`) para el texto.
- **Do** reservar el naranja brújula profundo para acciones y novedades (regla de la aguja).
- **Do** usar el durazno (`durazno`) cuando el naranja va sobre azul tinta o sobre la foto.
- **Do** separar el contenido con líneas finas o con cambios de tono de fondo.
- **Do** mover solo `transform`, `opacity` y `filter` en las animaciones, con `cubic-bezier(0.16, 1, 0.3, 1)`, y respetar `prefers-reduced-motion`.
- **Do** dibujar los íconos como SVG de trazo de 1.75–2px con extremos redondeados, como los actuales.

### Don't:
- **Don't** usar tarjetas iguales con ícono, título y texto como estructura de una sección.
- **Don't** poner etiquetas o subtítulos chicos arriba de los títulos (salvo "Nuevo").
- **Don't** usar texto con degradado ni sombras de bloque sin desenfoque.
- **Don't** poner texto blanco chico sobre el naranja brújula vivo (`naranja-brujula`): no tiene contraste suficiente; usar el profundo.
- **Don't** agregar un segundo momento animado que compita con el rotador del hero.
