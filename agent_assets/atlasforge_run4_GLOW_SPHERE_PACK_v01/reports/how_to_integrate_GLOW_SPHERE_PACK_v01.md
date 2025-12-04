# Integration Guide – Glow Sphere Pack v01 (Run 4)

This guide describes how to incorporate the glow/orb assets into the AtlasForge website.  The aesthetic builds on the existing dark theme and introduces luminous accents and soft gradients.

## 1. Importing the assets

1. **SVG orbs and bars** – The files in `website/glow_pack_v01/` are plain SVGs.  You can embed them inline in your HTML or reference them via `<img>`/`background-image` in CSS.  Because they use gradients, you can scale them to any size without loss of quality.
2. **Hero panel frame** – Use `hero_panel_glow_frame.svg` to wrap hero content.  Place text or images inside the inner dark rectangle.  You can adjust its size by editing the `viewBox` or scaling via CSS transforms.
3. **Theme tokens** – Load `theme_tokens_v02.json` into your design system or build pipeline.  Use the new `glow` colours for backgrounds and strokes, and the `elevation` tokens for drop shadows.  For example:

```css
/* Example CSS variables */
:root {
  --glow-magenta: #FF5C8D;
  --glow-cyan: #00E8FF;
  --elevation-level1: 0 0 10px 2px rgba(255, 92, 141, 0.3);
}

.glow-card {
  box-shadow: var(--elevation-level2);
  background: #162033;
  border-radius: var(--radius-lg);
}
```

## 2. Using glow orbs

Glowing orbs can be used as decorative elements behind headings, cards or entire sections:

* **Background ambience** – Place the large ambient spheres (`ambient_glow_sphere*.svg`) absolutely positioned behind content.  Set low opacity (e.g. 20–40 %) and experiment with layering multiple colours.
* **Section highlights** – Use medium‑sized orbs (500×500) near headings or call‑outs.  Position them off the edges of the container so the glow subtly bleeds into the visible area.
* **Icons and badges** – The small orbs (300×300) can serve as backgrounds for icons or numbers.  You can also clip them using CSS `mask-image` to create irregular shapes.

To change the colour of an orb, either edit the SVG’s gradient stops or override `stop-color` via inline CSS.  Alternatively, create new gradients using the `glow` colours from the tokens.

## 3. Halo bars and section dividers

Use the halo bar SVGs as full‑width dividers between major sections.  In CSS:

```css
.section-divider {
  width: 100%;
  height: 6rem;
  background: url('/glow_pack_v01/halo_bar_multicolor.svg') no-repeat center/cover;
}
```

Alternatively, embed them inline and adjust their `height` or gradient stops to fit your design.  The bars create a smooth, multicolour transition that draws the eye downward.

## 4. Hero panel glow frame

The hero frame provides a ready‑made container for the page hero:

1. Import `hero_panel_glow_frame.svg` as an inline SVG or background.
2. Position your headline, subtitle and call‑to‑action within the inner dark rectangle (the `<rect>` with fill `#162033`).
3. To adjust the glow strength, modify the `stdDeviation` value in the `feGaussianBlur` filter or adjust the stroke colours to match your chosen `glow` palette.

## 5. Updating your CSS with new tokens

* **Glow colours** – Expose each `glow` colour as a CSS variable (e.g. `--glow-magenta`).  Use them for text highlights, button backgrounds or icon strokes.
* **Elevation levels** – Map the `elevation` entries to `box-shadow` utilities.  Use higher levels (`level3`/`level4`) for modal dialogs or floating panels, and lower levels for cards.
* **Theming** – If you already load `theme_tokens_v01.json`, you can merge `theme_tokens_v02.json` into your configuration.  Ensure older variables remain intact so nothing breaks.

## 6. Applying the aesthetic to key sections

Refer to `mockup_glow_aesthetic.png` to see how the glow elements complement the layout:

* **Home hero** – Layer multiple orbs of different colours behind your headline.  Use the hero frame to contain text and CTA.  The brightest orb can sit slightly off‑canvas to create depth.
* **Product tiles** – Position a soft glow behind each card.  Pair each tile with its respective product accent colour (green, purple, orange, etc.) and apply a light shadow from the `elevation` tokens.
* **Footer** – Add small glow accents at the corners or underneath the footer text.  Keep their opacity low to avoid distraction.

When implementing, test in light and dark contexts to ensure sufficient contrast and avoid overwhelming the eye.  The glow aesthetic works best when used sparingly and balanced with ample negative space.