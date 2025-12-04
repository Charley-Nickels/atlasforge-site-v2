# Summary – Theme Tokens (Run 1)

## Run plan for up to four runs

We propose the following structure for our engagement with the AtlasForge site redesign:

1. **Run 1: THEME_TOKENS_v01 (this run)**  – Establish visual fundamentals.  We defined colour palettes, typography stacks, spacing/radius scales and created three decorative SVG backgrounds.  These tokens will inform all later work.
2. **Run 2: LAYOUT_CONCEPTS_v01**  – Recommend layouts for the homepage and individual product pages.  This will describe hero sections, calls‑to‑action, content blocks and image placements using the tokens defined in Run 1.
3. **Run 3: PRODUCT_COPY_v01**  – Write concise blurbs and extended descriptions for each offering: Atlas‑V, AtlasStudio, Octopus in Action and Loop decision systems.
4. **Run 4 (optional)**  – If needed, refine the theme or copy based on feedback or provide an alternative palette.

## Key items delivered in this run

### Theme tokens

The file `website/theme/theme_tokens_v01.json` contains a JSON object describing reusable design tokens.  It includes:

| Token group | Purpose |
| --- | --- |
| **Colours** | Core palette for the AtlasForge brand and per‑product accent palettes.  The base brand uses a deep navy background (#0F1827), secondary surfaces (#1F2A40) and vibrant accents such as cyan (#00BCD4) and warm gold (#F4B400).  Each product (Atlas‑V, AtlasStudio, Octopus in Action and Loop) has its own primary/secondary/accent colours to distinguish pages while still fitting within the family. |
| **Typography** | Font families for headings, body copy and monospace text.  Headings use **Montserrat**, body copy uses **Open Sans** and code samples use **JetBrains Mono**.  The file also defines weight scales (light, regular, medium, bold), font‑size scales (from `xs` to `4xl`) and three line‑height options. |
| **Spacing** | A scale of rem‑based values (0–6 rem) to ensure consistent margins and padding. |
| **Radius** | Radii definitions (`none`, `sm`, `md`, `lg`, `xl`, `full`) to control corner rounding. |

### Decorative SVG backgrounds

Three simple vector assets reside in `website/theme/background_art_v01/`:

| File | Description |
| --- | --- |
| `swirl_wave.svg` | An abstract wave pattern with layered curves.  The gradient transitions between cyan, teal and purple to hint at motion and creativity.  Use it at the bottom of hero sections or as a footer divider. |
| `circle_frame.svg` | A radial burst with a faint orange glow and a thin gold ring.  Useful behind the AtlasForge or product logos to create depth without distraction. |
| `spiral_loop.svg` | A subtle spiral of concentric loops coloured with a gradient.  This references the iterative nature of the Atlas‑V methodology and can be placed lightly behind content blocks. |

These assets are intentionally minimal so they can be tinted or blurred without overwhelming the content.

## Reasoning and assumptions

AtlasForge wants to feel like a small studio with serious ambitions rather than a generic AI‑portfolio.  We chose a deep, almost cosmic base palette and bold accent colours to convey professionalism, creativity and a hint of sci‑fi.  The per‑product colour accents (greens, purples, oranges and teals) give each offering its own identity while keeping them harmonious.  Typography choices emphasise readability and modernity.  The spacing and radius scales are intentionally conservative to avoid the cluttered look common to template sites.

The decorative SVGs were created to provide subtle texture and motion.  They can be scaled or recoloured using CSS, making them flexible across different sections.