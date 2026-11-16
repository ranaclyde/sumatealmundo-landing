# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Viajeros interesados:** personas que están pensando en viajar, estudiar o hacer un programa intercultural y llegan para conocer la agencia antes de pasar a la web principal.
- **Verificación de la agencia:** personas u organismos que llegan por el dominio `.tur.ar` para comprobar que la agencia está habilitada (licencia, legajo E.V.T., local virtual, datos del titular).

## Product Purpose

Landing de **Sumate al Mundo (SAM)**, Empresa de Viajes y Turismo (Legajo 18281, Ministerio de Turismo y Deportes), publicada en `https://sumatealmundo.tur.ar`. Cumple dos funciones: presentar la propuesta de la agencia y derivar a la web principal (`https://sumatealmundo.com/`, contacto en `?mod=contacto`), y exponer la documentación legal que exige la habilitación. Tiene éxito cuando un viajero entiende en segundos qué ofrece SAM y pasa a la web principal o al contacto, y cuando quien verifica encuentra la documentación sin buscarla.

## Positioning

Viajar con propósito: SAM organiza experiencias interculturales (inmersión en otra cultura e idioma, inmersión académica, High School, prácticas profesionales, y viajes exóticos, especiales e históricos) donde el viaje transforma a la persona y "cambia el mundo". No se presenta como una agencia de paquetes turísticos.

## Operating Context

- Página única y estática. La web principal (sumatealmundo.com) es la fuente de los programas y el contacto.
- Los documentos legales son PDFs (`public/docs/`) provistos por el dueño: quiénes somos, licencia, local virtual. También se enlazan Defensa del Consumidor y la denuncia contra agencias (argentina.gob.ar).

## Capabilities and Constraints

- Hoy es una puerta de entrada liviana, pero **puede crecer** con secciones o novedades propias.
- Stack existente: Astro estático, desplegado en Netlify.
- No mencionar países específicos.
- El voluntariado se quitó a propósito; no reincorporarlo sin pedido.
- El contenido legal del footer lo provee y aprueba el dueño.
- Los textos salen de sumatealmundo.com o se aprueban explícitamente; todo texto nuevo o reescrito se marca para revisión.
- Los links fuera de sumatealmundo.com se abren en una pestaña nueva.

## Brand Commitments

- Nombre: "Sumate al Mundo", sigla SAM. Logo SAM existente (`src/assets/logo.jpg`).
- Voz: español rioplatense con voseo ("Viajá", "Sumergite", "Preparate"), cálida e invitante.
- Frases propias de la marca: "Viajá…" (como turista o como viajera/o, sintiéndote libre, y sumergite en otra cultura, cambiando el mundo), "¿Querés sumarte al mundo?", "Vos cambiás el mundo", "Sumate con nosotros".
- Lenguaje inclusivo con barra ("viajera/o").

## Evidence on Hand

- Logo y foto del hero en `src/assets/`.
- PDFs legales en `public/docs/`.
- Cita de Margaret Mead usada en la web principal (la redacción en español la eligió Claude y está pendiente de confirmar contra el original).
- No hay testimonios, cifras, destinos ni precios. No inventarlos.

## Product Principles

1. **Primero el propósito:** cada sección tiene que transmitir viajar para conocer y transformarse, no vender un paquete.
2. **Confianza visible:** la habilitación y la documentación legal siempre a mano, sin esconderlas.
3. **Derivar, no duplicar:** la web principal es la fuente de verdad de programas y contacto; la landing invita a ir ahí.
4. **Liviana y rápida:** una página que carga al instante, también en el celular.
