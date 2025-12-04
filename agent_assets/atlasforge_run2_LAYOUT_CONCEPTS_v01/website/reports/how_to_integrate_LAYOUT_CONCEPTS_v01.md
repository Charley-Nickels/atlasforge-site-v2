# Integration Guide – Layout Concepts (Run 2)

This document explains how to translate the layout and component mockups generated in Run 2 into the working AtlasForge website.  It assumes you have access to the theme tokens defined in Run 1 (`theme_tokens_v01.json`) and that the website is built using modern HTML/CSS/JS (with or without a framework).

## 1. Use the layout images as structural references

The PNG files in `website/layouts_v01/` are high‑level wireframes, not production assets.  Use them to understand the **relative sizes** and **ordering** of sections on each page.  For example:

* The **home page** starts with a global navigation/header, followed by a hero section occupying roughly 30 % of the viewport height.  Beneath that lies a product highlights section with four equally sized tiles.  Next comes a methodology/philosophy area and finally a call‑to‑action strip before the footer.
* The **product page** uses the same header and footer but switches to the product’s accent colour for the hero and CTA strips.  It includes an overview section and a three‑column features grid.
* The **navigation/header & footer concept** shows how to arrange nav links with a subtle accent underline on the active item and a simple footer layout.

Implement these structures with semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).  Apply spacing using the spacing scale from the theme tokens, and corner rounding using the radius tokens.

## 2. Build reusable components

The files in `website/components_v01/` illustrate atomic components.  You can implement them as reusable components in your UI library:

| Component | Implementation tips |
| --- | --- |
| **Product Tile (`component_product_tiles.png`)** | Create a card component with a background colour bound to a product accent token (e.g. `--atlas-v-primary`).  Use CSS variables for border radius, padding and typographic sizes.  The tile should contain a heading for the product name and a tagline.  When used in the home page, arrange four cards in a responsive grid. |
| **Section Divider (`component_section_divider.png`)** | Implement as a full‑width element with a CSS linear gradient background.  Use the accent colours from the theme tokens (e.g. `--color-accent-1` to `--color-accent-2`) and apply a small height (e.g. `0.75rem`).  Place it between `<section>` elements to break content visually. |
| **Hero Banner Frame (`component_hero_banner_frame.png`)** | Build a container with a thick border of the accent colour and a padded inner area using a secondary surface colour.  The radius of the outer and inner rectangles should use the `lg` and `md` radius tokens respectively.  This frame can host hero copy or images. |
| **Coming Soon Block (`component_coming_soon.png`)** | Create a card that stands out using the Loop accent colour (`--loop-primary`).  Include a headline (“Coming soon”) and supporting text.  It can be inserted into product pages to tease future features. |

For each component, define CSS classes or React/Vue components that take variables for colours and copy.  This ensures consistency across the site.

## 3. Apply theme tokens

When implementing these layouts, always refer back to the theme tokens from Run 1:

* **Colours** – Use the base palette for backgrounds and surfaces (`--color-primary`, `--color-secondary`, `--color-surface`) and the product‑specific palettes for highlights.  Avoid random colours not defined in the tokens to keep the brand cohesive.
* **Typography** – Apply the `--font-heading` for large section titles and `--font-body` for paragraphs.  Use the font‑size scale (`--font-size-md`, `--font-size-xl`, etc.) to maintain vertical rhythm.
* **Spacing and radius** – Use the spacing scale for margins and paddings (e.g. `margin-bottom: var(--space-6)`) and radius tokens for corner rounding on cards and frames.

You may incorporate our decorative SVG backgrounds from Run 1 (e.g. the swirl wave or spiral loop) behind hero sections or in footers to add visual interest.

## 4. Make layouts responsive

The wireframes were drawn at 1600×900px for clarity.  To make the site responsive:

1. Use CSS grid or flexbox to arrange tiles and feature cards.  On smaller screens, stack elements vertically.
2. Adjust the height of hero sections to fit the viewport using `min-height: 60vh` or similar.
3. Scale font sizes using responsive units (`vw` or `clamp()` functions) while honouring the base sizes defined in the tokens.
4. Ensure sufficient contrast between text and backgrounds to maintain accessibility.

## 5. Navigation and footer

The navigation bar shows an underline under the active link.  This can be implemented with a pseudo‑element or a border on the active link.  Use the accent colour (`--color-accent-1`) as shown in the mock.  The footer should include legal text, navigation links or social icons aligned consistently with the header.

## Conclusion

These layout concepts provide a blueprint for building the AtlasForge website in a modular, token‑driven way.  Codex should translate these into real code while preserving the visual hierarchy, colours and spacing established here.