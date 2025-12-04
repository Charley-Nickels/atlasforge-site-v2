# Summary – Site Map and Page Specs v01

In **Run 6** we formalised the information architecture for the AtlasForge website and defined how each page should be structured using the glow aesthetic.

## Deliverables

- **site_map_v01.json** in `website/ia/` – lists all primary pages (Home, Atlas‑V, AtlasStudio, Octopus in Action, Decision Console, AtlasWave) with their URL paths, navigation labels and whether they appear in the main navigation or footer. Coming‑soon pages are flagged.
- **page_sections_v01.json** in `website/ia/` – defines ordered sections for each page. Each section specifies a unique ID, references the relevant content blocks from `website/content_v01/` (blurbs, feature lists, coming‑soon messages) and notes recommended visual treatments (hero panels, halo bars, glow spheres, etc.).
- **glow_usage_guidelines_v01.md** in `website/docs/` – outlines how to use the glow orbs, halo bars and hero frames tastefully, including brand‑specific accent combinations and a list of dos and don’ts【923854715267635†L17-L49】.
- **Optional skeleton** – a minimal HTML/CSS scaffold for the home page located in `website/code_skeletons/home_v01/`. It includes semantic sections (`<header>`, `<section>`, `<footer>`) with `data-section` attributes corresponding to IDs in the page sections spec. This serves as a starting point for implementation.
- **Report documents** – summary, integration guidance and notes in `website/reports/` for the IA work.

## Purpose

These artefacts provide a clear blueprint for Codex to build out the AtlasForge website with consistent navigation, section ordering and styling. They tie together the theme tokens, glow assets and product copy created in earlier runs and ensure each page tells a coherent story.
