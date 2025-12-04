# Notes – Site Map & Page Specs v01

## Assumptions and decisions

1. **URL structure:** We chose human‑readable, lowercase paths (`/atlas-v`, `/atlasstudio`, `/oia`, etc.) to maintain consistency. `Decision Console` and `AtlasWave` paths are defined even though the products are not yet available; they are flagged as coming soon.
2. **Navigation:** Only pages marked `inMainNav` appear in the top navigation. `AtlasWave` is relegated to the footer to reduce clutter until it matures. `Decision Console` remains in the top nav because of its strategic importance even though it isn’t released yet.
3. **Content references:** The JSON specs reference content blocks by keys (e.g. `product_blurbs.atlas_v`). Codex must map these keys to the correct sections in `product_blurbs.md` and `site_sections.md`. We assume that these files will remain stable; if the structure changes, the keys should be updated accordingly.
4. **Visual treatments:** We assumed that each section would have a distinct visual style (hero panels, cards, lists) but that these could be shared across pages. For example, halo bars and ambient glows appear in multiple pages with different colour transitions.
5. **Coming soon:** For products still in development (Decision Console and AtlasWave), the page spec includes a **coming_soon** section referencing the respective messages. When these products launch, replace the coming soon sections with real content and remove the `comingSoon` flag from `site_map_v01.json`.
6. **Optional skeleton:** We included a bare‑bones HTML/CSS skeleton for the home page to illustrate how sections map to the IA. This is purely illustrative; full implementation and styling are Codex’s responsibility.

## Open questions

1. Should there be a dedicated **About** page separate from the home page? Currently the “What is AtlasForge?” copy lives on the home page introduction. We could split this into a standalone About page if needed.
2. How will dynamic content (e.g. blog posts, documentation, user guides) be integrated into the site map? This IA assumes a static set of product pages.
3. Are there any licensing requirements or acknowledgements for the fonts or icons proposed in the theme tokens? We used placeholder fonts in our mockups but did not specify licensing details.

These notes should inform future refinement and decisions by the Master Architect and Codex teams.
