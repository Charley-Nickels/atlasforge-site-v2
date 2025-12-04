# Glow Pack v01 – Usage Guidelines

This folder contains the first set of glow assets for AtlasForge websites. Each SVG is designed to work with the theme tokens and brand colours defined in `theme_tokens_v02.json`.

## Available Assets

| Asset | Recommended Use | Notes |
| --- | --- | --- |
| `glow_orb_magenta.svg` | AtlasForge home hero background, AtlasForge tiles | Core AtlasForge accent; pairs with cyan for yin–yang effect. |
| `glow_orb_cyan.svg` | Atlas-V hero backgrounds | Matches Atlas-V green/teal palette; use sparingly behind panels. |
| `glow_orb_green.svg` | Atlas-V panels, Decision Console tiles | Highlights governance and structure. |
| `glow_orb_purple.svg` | AtlasStudio hero and feature sections | Complements the purple/orange palette of AtlasStudio. |
| `glow_orb_orange.svg` | Octopus in Action callouts | Evokes the playful warmth of the game without overwhelming text. |
| `glow_orb_teal.svg` | Loop / workflow previews | Works with AtlasForge loops and decision tools. |
| `glow_orb_gold.svg` | Decision Console highlights | Signals importance and decision points. |
| `glow_orb_pink_blue.svg` | AtlasWave or Labs experiments | Experimental gradient; use for ambient backgrounds only. |
| `glow_orb_small_cyan.svg` | Decorative dots on product tiles | Provides subtle point lights; avoid clustering. |
| `glow_orb_small_magenta.svg` | Decorative dots on product tiles | Use with magenta orb or by itself for tiny accents. |
| `halo_bar_multicolor.svg` | Section dividers on home and AtlasForge pages | A multicolour gradient bar to separate content. |
| `halo_bar_teal_gold.svg` | Section dividers on Atlas-V and Decision Console | Muted gradient; pairs with green/gold palettes. |
| `hero_panel_glow_frame.svg` | Around hero copy boxes on every brand page | Creates a defined space for hero text; the gradient adapts to the brand accent. |
| `ambient_glow_sphere*.svg` | Large background ambience | Place partially off‑screen behind hero or footer to add depth. |

## Usage Recommendations

1. **Limit the number of active glows per viewport.** Too many spheres compete for attention and reduce the premium feel. One large ambient sphere and one or two smaller orbs per section is usually sufficient.
2. **Blend with brand colours.** When using orbs on a product page, pick the orb whose hue matches the brand accent (see table above). Avoid mixing complementary colours on the same section unless it’s intentional (e.g. pink/blue gradient for AtlasWave experiments).
3. **Use halo bars between sections.** The halo bars are ideal for dividing content without drawing too much attention. Choose the bar variant that best matches the page palette.
4. **Hero panel frames.** Wrap hero copy in a `<div class="hero-panel">` and overlay the `hero_panel_glow_frame.svg` or use the CSS class `.hero-panel` defined in `glow.css` to achieve a similar effect. Ensure text remains legible.
5. **Experimental assets.** Assets not listed above (e.g. additional orbs you may add later) can be stored in this folder. Mark them as **experimental** in this README and avoid using them until the design is vetted.

## Brand Accent Combinations

- **AtlasForge**: magenta + cyan + teal; halo bar multicolour.
- **Atlas‑V Engine**: green + teal; halo bar teal/gold.
- **AtlasStudio**: purple + orange; halo bar multicolour.
- **Octopus in Action**: orange + gold; halo bar multicolour.
- **Decision Console**: gold + magenta; halo bar teal/gold.
- **AtlasWave**: pink/blue gradient + teal; experimental assets welcomed.

Following these guidelines will help maintain a coherent glow system across all pages. When in doubt, favour fewer glows and rely on the base brand colours for emphasis.