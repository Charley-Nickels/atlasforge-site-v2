# How to Integrate – Site Map & Page Specs v01

This guide explains how Codex should use the site map and page section specifications to build the AtlasForge website. It assumes you have access to the theme tokens v02, glow assets and the content files created in earlier runs.

## 1 Navigation and routing

1. Read `website/ia/site_map_v01.json`. Create your site’s routing configuration (e.g. React Router, Vue Router or server‑side routes) based on the `path` fields.
2. Render navigation links in the `<header>` according to pages where `inMainNav` is `true`. Include `comingSoon` indicators (e.g. small “Coming soon” badge or disabled link) for `Decision Console` and `AtlasWave`.
3. Pages marked `inFooter` should appear only in the footer navigation. Use the `navLabel` property for link text.

## 2 Page structure

1. Open `website/ia/page_sections_v01.json`. For each page (e.g. `home`, `atlas-v`, `atlasstudio`), iterate through the array of section objects in order.
2. Each section’s `id` should become a CSS class or `id` attribute (`id="hero"`, `id="overview"`, etc.). Add a `data-section` attribute if helpful for analytics or styling.
3. Use the `contentRef` value to locate the appropriate content:
   - Strings starting with `product_blurbs` map to specific headings in `website/content_v01/product_blurbs.md`.
   - Strings starting with `site_sections.what_is_atlasforge` or `site_sections.features.*` reference sections within `website/content_v01/site_sections.md`.
   - Strings starting with `site_sections.coming_soon.*` reference the coming‑soon paragraphs at the end of `site_sections.md`.
4. Render the referenced copy inside the section. For lists, break the bullet points into `<li>` elements or card components.
5. Consult the `visual` field for styling cues:
   - **hero_panel_glow_frame**: use the hero panel glow frame asset or replicate its look with CSS (dark panel, gradient border, glow effect).
   - **ambient glow spheres**: position radial gradients or import glow SVGs behind the section’s container.
   - **halo bars** (e.g. `halo_bar_multicolor`, `halo_bar_teal_gold`): insert thin gradient dividers between sections with the specified colour transitions.
   - **accent colours**: apply the product’s accent colours to backgrounds, buttons and glows using variables from `theme_tokens_v02.json`.

## 3 Home page skeleton (optional)

An example scaffold is provided in `website/code_skeletons/home_v01/`. Use it as a starting point:

```
<header>
  <!-- navigation -->
</header>
<main>
  <section id="hero" data-section="hero"></section>
  <section id="introduction" data-section="introduction"></section>
  <section id="product_overview" data-section="product_overview"></section>
  <section id="features_overview" data-section="features_overview"></section>
  <section id="coming_soon_teaser" data-section="coming_soon_teaser"></section>
</main>
<footer data-section="footer"></footer>
```

Each section contains placeholder text. Replace it with the actual content and apply the styles described above.

## 4 Styling and assets

1. Import the variables from `theme_tokens_v02.json` into your stylesheets (e.g. as CSS custom properties or via a SCSS map).
2. Use the glow usage guidelines (`website/docs/glow_usage_guidelines_v01.md`) to determine which glow colours and accent combinations to apply on each page.
3. Load the glow SVGs from `website/glow_pack_v01/` as backgrounds or masks. For hero panels and cards, either embed the SVGs directly or recreate the effect with CSS radial gradients.
4. Apply consistent spacing and corner radii using the `spacing` and `radius` tokens.

## 5 Content updates

If additional products or pages are introduced, update `site_map_v01.json` and `page_sections_v01.json` accordingly. Maintain the naming conventions and keep `comingSoon` flags up to date.

By following this blueprint, Codex can implement the website with a clear structure and consistent glow aesthetic.
