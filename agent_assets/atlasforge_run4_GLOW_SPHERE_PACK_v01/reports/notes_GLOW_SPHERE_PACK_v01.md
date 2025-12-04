# Notes & Assumptions – Glow Sphere Pack v01

## Design rationale

The goal of this pack was to introduce a luminous aesthetic without overpowering the site’s dark, professional look.  Inspired by the “magenta energy core, orbit lines and clean geometry” of the AtlasForge brand【923854715267635†L17-L49】, we created radial glow orbs and gradient bars that feel like soft light sources rather than neon distractions.  Each orb uses a radial gradient with a bright centre fading smoothly to transparent edges.  The colours align with existing product accents while introducing subtle new hues (gold, teal).  The halo bars mix multiple glow colours across the width to guide the eye between sections.

## Assumptions

* **No Figma access** – The assets were crafted directly as SVG or via Python due to the absence of Figma.  If Figma becomes available, we recommend importing these SVGs into a Figma library and recreating the mockup there for version control.
* **Performance** – SVGs are lightweight and scale well, but too many large orbs could impact performance on low‑end devices.  Use sparingly and prefer ambient spheres with reduced opacity to heavy glows.
* **Accessibility** – We assumed dark backgrounds.  If used on lighter surfaces, adjust the glow colours and opacities to maintain sufficient contrast.
* **Browser support** – The hero frame uses an SVG filter (`feGaussianBlur`) for the outer glow.  This is widely supported in modern browsers but may need fallbacks (e.g. CSS box‑shadow) for legacy support.

## Potential improvements for v02

* **Deeper gradients** – The next run will experiment with more intricate gradient transitions (e.g. multi‑stop radial gradients) to add depth.
* **Edge softness** – We plan to soften orb edges further and add subtle noise to avoid banding.
* **Luminance control** – v02 may include variants with stronger central luminosity for CTA buttons or interactive elements.
* **Shadow variants** – Additional elevation presets will help differentiate between surfaces.
* **Hero backgrounds** – At least three new hero backgrounds will combine multiple orbs and halo bars into cohesive scenes.
* **Glow‑powered CTA buttons** – Buttons with inner glows and focus states will be included.
* **Full page decorative field** – A large SVG field with overlapping orbs and halos for decorative backgrounds.

## Open questions

1. **Animation** – Should any of these glow elements animate subtly (e.g. pulsing or drifting)?  This would require CSS or WebGL but could enhance immersion.
2. **Colour tuning** – Are the chosen colours (magenta, cyan, purple, orange, teal, gold) sufficient, or should additional hues (e.g. red or lime) be considered?
3. **Integration with OIA/Studio** – How will the glow aesthetic translate to tools like AtlasStudio and Octopus in Action?  Coordination with other agents will ensure consistency.

These notes capture design reasoning and set the stage for refinement in Glow Sphere Pack v02.