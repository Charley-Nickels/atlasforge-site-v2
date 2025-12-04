# How to Integrate – Home Page Glow Mock v01

This guide explains how to translate the provided mockups into responsive HTML/CSS using the AtlasForge design system. It assumes you have access to `theme_tokens_v02.json` and the assets in `glow_pack_v01/`.

## 1 Structure

Divide the home page into three main `<section>` elements:

1. **Hero (`<section id="hero">`):** Contains a wrapper `<div>` with a dark gradient background and the hero panel inside. Within the panel place a `<h1>` for the tagline, a `<p>` for the subheading and a `<button>` for the CTA.
2. **Products (`<section id="stack">`):** Includes a heading and a flex/grid container with three cards (one per product). Each card has a title and short description.
3. **Footer (`<footer>`):** Contains a halo divider at the top, optional glow backgrounds and a copyright line.

## 2 Colours and variables

1. Import the **theme tokens** from `theme_tokens_v02.json` into your CSS (e.g. via CSS custom properties).
2. Expose variables for background colours, glow colours and text colours. Example:

```css
:root {
  /* Base colours */
  --color-bg-primary: #0F1827;
  --color-bg-secondary: #1F2A40;
  --color-surface: #162033;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C8DCFF;
  /* Product accent colours */
  --color-accent-atlasv: #00A572;
  --color-accent-atlasstudio: #6C63FF;
  --color-accent-oia: #FF8C42;
  /* Glow colours */
  --glow-magenta: #FF5C8D;
  --glow-cyan: #00E8FF;
  --glow-purple: #7C5CFA;
  --glow-teal: #4CD2DE;
  --glow-green: #35FFAE;
  --glow-gold: #FFB84A;
}
```

Use these variables throughout your styles to maintain consistency with the tokens.

## 3 Hero section

1. **Background:** Apply a vertical `linear-gradient` from a very dark navy to a slightly lighter shade. To add ambient glows, place absolutely positioned `<div>`s with `radial-gradient` backgrounds using the magenta, cyan and purple glow colours. Alternatively, embed the SVG glow orbs (`glow_orb_*.svg`) as background images.
2. **Panel:** Create a `<div>` with a dark surface colour and rounded corners (e.g. border-radius: 40px). Use an `::before` pseudo‑element to draw a gradient border around the panel. This pseudo‑element should be slightly larger than the panel and have a transparent centre so only the border shows. Apply a blur via `filter: blur(8px)` to mimic the glow.
3. **Text:** Set the tagline `<h1>` using the primary type scale and bold font weight. Use secondary text colour for the subheading.
4. **Button:** Style the CTA button with a horizontal gradient from magenta to cyan, rounded corners (20–25px) and no border. Add padding and use a hover state that slightly brightens the gradient or adds a subtle shadow.

## 4 Product tiles

1. Wrap the three product cards in a flexbox container with equal spacing (`gap`). At desktop widths they appear in one row; use a media query to stack them vertically on mobile.
2. Each card should have:
   - A background colour set to the appropriate product accent (`var(--color-accent-atlasv)` etc.).
   - Rounded corners (30px) and padding.
   - A translucent overlay using `background-color: rgba(255,255,255,0.12)` to achieve the glass effect.
   - A large glow behind the card. Position an absolutely placed `<div>` behind each card with a radial gradient using the same accent colour. Adjust blur via `filter: blur(60px)`. Set `pointer-events: none` and negative z‑index so glows don’t interfere with interaction.
3. Use the type scale for card headings and descriptions; align text left and leave comfortable padding inside the card.

## 5 Footer

1. Apply a dark vertical gradient similar to the product section but slightly deeper.
2. **Halo bar:** Create a thin `<div>` across the full width at the top of the footer. Use a horizontal linear gradient from teal to green to gold. A height of 4–6px with slight opacity works well.
3. **Glows:** Position two radial gradients at the left and right of the footer to produce the coloured spots. Use teal and gold with low opacity and blur.
4. **Text:** Align the copyright line to the left or centre; use the secondary text colour and a small font size.

## 6 Responsive behaviour

1. Introduce media queries at breakpoints (e.g. 768 px) to stack the product cards and scale down font sizes and paddings.
2. Adjust the hero panel width and reposition glows at smaller widths. The border thickness and glow sizes can be reduced proportionally.
3. Use relative units (rem/em/%) for sizing rather than fixed pixels wherever possible to improve scalability.

## 7 Asset usage

1. Store PNG mockups only as references. The actual implementation should be built using CSS with the colours and glow gradients defined in the tokens and the **glow sphere pack** assets if necessary.
2. If using the provided SVGs, import them into your CSS or HTML and apply classes to control size and positioning. They can also be converted to CSS `background-image` definitions.

With these guidelines, Codex should be able to faithfully recreate the home page design, adapting it to different screen sizes while preserving the high‑end glow aesthetic.
