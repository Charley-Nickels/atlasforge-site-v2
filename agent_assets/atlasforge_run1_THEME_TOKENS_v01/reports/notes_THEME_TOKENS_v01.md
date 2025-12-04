# Notes & Assumptions – Theme Tokens

## Brand vibe

The AtlasForge brand evokes exploration, innovation and craftsmanship.  To avoid the “AI template” aesthetic, we opted for a deep, moody base palette reminiscent of space and forging new worlds.  Bright accents such as cyan, teal, purple, orange and gold hint at the energy and creativity of the products without feeling childish.  The selected fonts (Montserrat and Open Sans) are modern and legible, supporting both professional communication and playful headings.  JetBrains Mono was chosen for any technical code snippets because it’s easy on the eyes and reinforces the engineering credentials of the studio.

## Tone considerations

1. **Professional yet approachable** – Colours are saturated but not neon; fonts are clean and balanced.  We aim for trustworthiness, not hype.
2. **Creative flexibility** – The range of accent colours allows each product to stand out while still belonging to the same family.  Designers can reorder or swap accent roles depending on the mood of a page.
3. **Subtle sci‑fi cues** – Dark backgrounds and gradient waves reference outer space and advanced technology, but the look remains grounded and human.

## Technical assumptions

* The website uses a modern build system capable of parsing JSON or reading design tokens into CSS.  If not, the variables can be copied manually.
* Google Fonts can be used; if offline or self‑hosted, ensure that the font weights defined in the tokens (300–700) are available.
* The project will later integrate theme tokens via CSS variables; we have not created ready‑to‑use CSS or JS frameworks but provided guidance in the integration document.
* The decorative SVGs may require slight adjustments (e.g. size or opacity) depending on the layout.  They are intentionally light so they do not distract from content.

These notes should inform later work on layout and copywriting.  They summarise the visual intent behind the tokens and can be revisited as the project evolves.