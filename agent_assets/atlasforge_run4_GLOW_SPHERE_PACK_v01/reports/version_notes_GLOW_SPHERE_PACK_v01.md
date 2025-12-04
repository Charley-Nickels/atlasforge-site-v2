# Version Notes – Glow Sphere Pack v01

Version v01 introduces the glow/orb aesthetic into the AtlasForge design system.  It is intended to complement the existing dark theme and product colour palettes established in previous runs.

## New in v01

* **Glowing orb library** – 10 SVG spheres of various sizes and colours for background and decorative use.
* **Gradient halo bars** – Two horizontally oriented gradients to separate content sections.
* **Hero glow frame** – A multicolour frame with an outer Gaussian blur effect for hero panels.
* **Ambient glow spheres** – Three large, faint glows for atmospheric backgrounds.
* **Theme token extension** – Added `glow` colour palette and `elevation` drop‑shadow presets in `theme_tokens_v02.json`.
* **Mockup** – A PNG demonstration of the glow aesthetic applied to home hero, product tiles and footer.

## Compatibility

* **Backward compatible** – The original tokens from v01 remain unchanged.  Projects using `theme_tokens_v01.json` can migrate to v02 by merging the new `glow` and `elevation` entries.
* **Naming conventions** – File names follow the pattern `glow_orb_[colour|size].svg` for easy identification.  Halo bars and ambient spheres are similarly descriptive.
* **Usage** – The assets are generic and can be reused across multiple pages and products.  They do not prescribe layout but rather provide building blocks for the glow aesthetic.

## Looking ahead to v02

The next iteration (v02) will refine these assets:

* Introduce deeper gradients and improved edge softness.
* Increase luminance in selected orbs for stronger focal points.
* Provide multiple shadow variants to support different elevation levels.
* Offer three enhanced hero background scenes and a “glow‑powered” CTA button set.
* Deliver a full page‑width decorative glow field (SVG) for hero or landing pages.

Codex should integrate v01 assets where appropriate but leave room for v02 enhancements.  When v02 is delivered, update imports and theme tokens accordingly.