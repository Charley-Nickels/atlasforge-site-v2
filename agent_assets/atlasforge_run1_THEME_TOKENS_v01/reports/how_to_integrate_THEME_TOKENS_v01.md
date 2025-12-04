# Integration Guide – Theme Tokens (Run 1)

This guide explains how to plug the design tokens and SVG assets delivered in this run into the existing AtlasForge website code base.  The website’s front‑end team can adapt the instructions to their preferred framework (plain CSS, SCSS, Tailwind or a component library).

## 1. Converting tokens into CSS variables

1. **Parse the JSON**: The file `website/theme/theme_tokens_v01.json` contains a nested structure of colours, typography, spacing and radius scales.  Import this JSON into your build system or manually copy the values into a style sheet.
2. **Define root variables**: Create a CSS file (e.g. `:root { … }`) where each token becomes a custom property.  Group variables by category, for example:

```css
:root {
  /* AtlasForge base palette */
  --color-primary: #0F1827;
  --color-secondary: #1F2A40;
  --color-accent-1: #00BCD4;
  --color-accent-2: #F4B400;
  --color-surface: #162033;
  --color-background: #0F1827;
  --color-on-primary: #FFFFFF;

  /* Atlas-V specific colours */
  --atlas-v-primary: #00A572;
  --atlas-v-accent: #8BC34A;
  /* …and so on for the other products */

  /* Typography */
  --font-heading: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  --line-height-normal: 1.5;
  --font-size-md: 1rem;
  /* Additional sizes/weights as needed */

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 2rem;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```
3. **Use in components**: Reference these variables throughout your styles.  For example:

```css
.button {
  background-color: var(--color-accent-1);
  color: var(--color-on-primary);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-medium);
}

.product-card.atlas-v {
  background: var(--atlas-v-primary);
  border-radius: var(--radius-lg);
}
```

## 2. Loading fonts

Use Google Fonts or self‑host the fonts to ensure consistent typography.  Include the following in your HTML `<head>` or through your build pipeline:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Ensure fallback fonts are specified in the variables to provide graceful degradation.

## 3. Using the decorative SVGs

The SVG assets under `website/theme/background_art_v01/` are intentionally simple and can be integrated in multiple ways:

1. **As inline SVG**: Copy the contents into your HTML markup or a React component.  You can then manipulate the `fill`, `stroke` and `opacity` attributes via CSS variables to match page themes.
2. **As background images**: Reference them in CSS using `background-image: url('/path/to/swirl_wave.svg');`.  Because they are vector images, they scale without loss of quality.  You can recolour them by applying CSS `filter` or by editing the SVG file itself.
3. **Masking or overlay**: Use the shapes as masks for hero sections or overlay them behind logos to add depth.  For example:

```css
.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: url('/theme/background_art_v01/swirl_wave.svg') no-repeat bottom center / cover;
  opacity: 0.5;
}
```

## 4. Scoping per‑product themes

Each product page can define a class on the `<body>` or root container (e.g. `.product-atlas-v`) to override the default accent colours.  For example:

```css
.product-atlas-v {
  --color-accent-1: var(--atlas-v-primary);
  --color-accent-2: var(--atlas-v-accent);
}

.product-atlasstudio {
  --color-accent-1: #6C63FF;
  --color-accent-2: #C5B4E3;
}
```

By scoping variables you can reuse the same components across all product pages while changing the colour scheme automatically.