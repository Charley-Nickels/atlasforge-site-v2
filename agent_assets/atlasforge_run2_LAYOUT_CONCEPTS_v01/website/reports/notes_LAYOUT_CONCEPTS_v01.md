# Notes & Assumptions – Layout Concepts

## Assumptions

1. **Figma constraints** – In this environment the Figma tool was not accessible.  Instead, we generated layout sketches programmatically using Python and the Pillow library.  These PNGs should be considered placeholders for Figma frames.  If Figma becomes available later, these can be recreated as frames to become the single source of truth.
2. **Responsive behaviour** – The wireframes were drawn at a desktop resolution (1600 × 900 px) to illustrate relative proportions.  We assume that the site will need to be responsive, with sections stacking vertically on smaller viewports and navigation collapsing into a mobile menu.  These behaviours will be defined by Codex in CSS.
3. **Navigation content** – The navigation bar includes links for “Home”, “Atlas‑V”, “AtlasStudio”, “Octopus in Action”, “Loop” and “Contact”.  This may evolve as product pages are added or removed.
4. **Content placeholders** – All textual content (“Hero title goes here”, “Brief tagline”, etc.) is generic.  Actual copy will be provided in Run 3 when the product blurbs and descriptions are written.

## Design decisions

* **Dark base, vibrant accents** – The layouts maintain the deep navy base colour from the theme tokens, with surfaces in slightly lighter shades.  Accent colours highlight interactive or important sections (e.g. hero backgrounds, CTA strips, active nav underline).
* **Generous spacing** – Sections are separated by large padding and margins, echoing the spacing scale.  Cards have ample negative space to avoid the cramped look common in AI templates.
* **Rounded corners** – Cards, tiles and frames use the `md` or `lg` radius tokens to soften the dark aesthetic and make the interfaces feel inviting.
* **Clear section order** – Each page is designed as a narrative: introduction (hero), highlights or overview, details/features, call to action, then footer.
* **Simple components** – Rather than designing bespoke elements for every section, we focused on a few versatile components (tiles, dividers, frames) that can be reused across pages.  These will speed up development and ensure consistency.

## Open questions / next steps

* **Mobile navigation** – We did not design a mobile navigation pattern; a collapsing hamburger or side drawer should be explored in a later run or by Codex.
* **Illustrations and imagery** – The layouts leave room for hero illustrations or product screenshots.  Actual artwork must be created by Agent Studio or OIA.
* **Animation / micro‑interactions** – The static wireframes do not define animations (e.g. hover states on product tiles, scroll effects).  These will need to be designed and implemented separately.
* **Figma integration** – If Figma becomes available later, we recommend translating these wireframes into Figma frames to align with the Master Architect’s guidelines.  Figma components can then be exported as SVG or PNG for the build.

These notes capture the reasoning behind the layout concepts and highlight areas for future refinement.