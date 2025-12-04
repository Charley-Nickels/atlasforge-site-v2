# Glow Usage Guidelines v01

These guidelines help designers and developers apply the **glow sphere pack** and elevation tokens throughout the AtlasForge website. Following these rules will ensure a consistent, premium look that aligns with our brand canon.

## General principles

1. **Less is more:** Use glows to accent important elements (hero panels, product cards, call‑to‑action buttons) rather than as decorative noise. One large glow per panel or group of cards is usually sufficient.
2. **Layering:** Place glow spheres behind surfaces or text blocks. Use `z‑index` to keep glows under content layers and apply blur filters to soften edges. Combine multiple glows only when they contribute to the narrative (e.g. hero section with magenta, cyan and purple spheres).
3. **Contrast:** Always ensure legibility. Dark surfaces should support the glow; text should remain white or light‑coloured on dark backgrounds. Avoid placing light text directly on bright glow areas.
4. **Transitions:** Use halo bars (thin gradient strips) between sections to guide the eye. Do not apply halo bars consecutively; they should be separated by content sections.
5. **Elevation:** Pair glows with appropriate shadow/elevation levels from the `elevation` token set. Higher cards (e.g. hero panel) can use `level3` or `level4` elevations, while smaller cards use `level1`.

## Accent combinations by brand

| Brand / Product | Primary accent colours | Recommended glows |
|-----------------|-----------------------|-------------------|
| **AtlasForge Interactive** (umbrella) | Magenta and cyan | Combine magenta, cyan and purple spheres. Use pink→blue gradient for hero borders. |
| **Atlas‑V Engine** | Green and teal | Use teal, green and cyan glows. Halo bars can transition from teal through green to gold. |
| **AtlasStudio** | Purple and orange | Use purple and orange glows; occasional magenta highlights can be added on buttons. |
| **Octopus in Action** | Orange and gold | Use orange and gold glows to evoke harbour lights. Avoid blue glows to maintain warmth. |
| **Decision Console** | Teal and gold | Use teal, green and gold glows; halo bars in teal→gold. |
| **AtlasWave** (experimental) | Magenta and purple | Use magenta, purple and blue glows; halo bars can shift from magenta to purple. |

## Dos and Don’ts

### Do

- Use large ambient spheres behind hero panels or section headers to create depth.
- Align glow colours with the product accent colours defined in `theme_tokens_v02.json`.
- Employ halo bars at the top of a section to indicate transitions.
- Pair glow effects with clean typography and generous spacing.
- Test glows across dark backgrounds to ensure they don’t overpower content.

### Don’t

- Stack more than two glow spheres behind a single element; it becomes noisy.
- Use neon‑bright colours not defined in the token palette; this dilutes brand consistency.
- Place long paragraphs or dense text directly on top of strong glows.
- Mix accent colour schemes (e.g. purple glows on the Atlas‑V page) unless intentionally blending brands.
- Overuse halo bars; they are dividers, not decorative ribbons.

Following these guidelines will help maintain the **systems‑with‑soul** aesthetic while keeping the interface polished, readable and true to the AtlasForge identity【923854715267635†L17-L49】.
