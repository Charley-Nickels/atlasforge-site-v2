# Integration Guide – Product Copy (Run 3)

This document explains how to incorporate the product copy delivered in Run 3 into the AtlasForge site.  The copy is meant to be flexible: it can be used in static markup, a CMS, or injected through JavaScript frameworks.  Wherever possible, keep the language intact to preserve tone and clarity.

## 1. Product blurbs

The file `website/content_v01/product_blurbs.md` contains Markdown sections for each product.  To integrate:

1. Parse or copy the blurb text into the corresponding product page templates (e.g. `atlasforge.com/atlas-v`, `atlasforge.com/studio`, etc.).
2. Use semantic HTML elements such as `<h2>` for product names and `<p>` for the body text.  Break paragraphs only where line breaks are present in the Markdown.
3. Align the copy with the colour palette defined in the theme tokens (Run 1).  For example, on the Atlas‑V page, wrap the blurb in a container that uses the green accent colours.
4. Ensure the text remains legible on dark backgrounds.  Use the `onPrimary` colour tokens for body text and headings.

## 2. Hero taglines

Four hero tagline variations are provided in `site_sections.md`.  Choose one for the main hero of the home page or rotate them dynamically.  The selected tagline should be prominent, paired with a short subheading or call‑to‑action (e.g. “Explore the AtlasForge stack”).  Use a large font size (e.g. `--font-size-4xl`) and the accent colour relevant to the page context.

## 3. “What is AtlasForge?” paragraph

Place this paragraph on the About or Home page beneath the hero section.  It serves as an introduction to the brand.  Wrap it in a `<section>` with generous padding and ensure the line length is comfortable for reading (45–75 characters per line).  You may emphasise keywords like **Atlas‑V**, **AtlasStudio** and **Octopus in Action** using `<strong>` tags or by applying a lighter accent colour.

## 4. Feature lists

The feature lists are organised by product.  They can be used in various contexts:

* On the home page, summarise each product with its top three features in the highlights section.  Use cards or list items styled with the product’s accent colour.
* On individual product pages, expand the list into a more detailed breakdown, perhaps with accompanying icons or mini‑diagrams.

When rendering the lists in HTML, use `<ul>` and `<li>` elements.  Avoid long sentences; each bullet should be concise and start with a verb or key phrase.

## 5. Coming soon messages

The “coming soon” messages for the Decision Console and AtlasWave should be displayed on their respective landing pages or as teaser cards.  They can be used to drive newsletter sign‑ups or beta registrations.  Consider placing them inside the **Coming Soon** block template created in Run 2’s components (see `component_coming_soon.png`).  Use the Loop accent colour for the card background and include a sign‑up button.

## 6. Tone and consistency

The copy is designed to be professional, modern and approachable.  When integrating:

* Do not rewrite large portions of the text unless required for brevity on smaller screens.
* Maintain proper sentence case and punctuation.
* Use consistent typographic scales and line heights defined in the theme tokens.

## 7. Extensibility

If new products or tools are added in the future, follow the same structure: a short blurb (80–150 words), a feature list (3–5 bullets) and, if applicable, a “coming soon” statement.  Store new content in the `website/content_v01` directory under appropriately named files.

By following these guidelines, Codex will be able to populate the AtlasForge website with coherent, brand‑aligned copy that complements the visual designs from Run 2.