# Product Feature Matrix v01

This matrix summarizes which features are currently implemented on the AtlasForge website for each brand and highlights planned or preview‑only content. Use this as a reference when wiring pages and determining where to add dynamic behaviour.

| Brand | Implemented Features | Preview/Placeholder | Planned | Status |
| --- | --- | --- | --- | --- |
| **AtlasForge (home)** | Navigation bar & footer unified across pages; hero with glow frame; product tiles linking to other pages; ambient glow spheres in hero and footer; overview copy; site map & IA JSON | N/A | Ecosystem dashboard summarising real‑time project stats; dynamic loading of statuses from JSON | Live Beta |
| **Atlas‑V Engine** | Dedicated hero section with badge; description of roles and modes; static lattice diagram; FAQ; governance notes | Workflow diagrams and modes list placeholder content; Figma diagram placeholder | Interactive FlowSim and mode panels; real‑time governance prompts; dynamic diagram replacement | Prototype |
| **AtlasStudio Workstation** | Hero section with studio palette; overview blurbs; creative mode description; placeholder for workstation mockups | Workstation preview images; hero CTA linking to Decision Console; cross‑links back to Atlas‑V | Live creative workstation embedding; integration with Atlas‑V prompts; real‑time asset previews | In Development |
| **Octopus in Action** | Hero section with icon; game description and feature chips; call‑to‑actions to learn more and view all games; glow backgrounds | Game media and soundtrack are hinted; hero uses cosy orange/gold palette | Embedded gameplay trailer; interactive timeline of quests; integration with AtlasStudio for quest editing | Playable Alpha |
| **Decision Console** | Coming‑soon hero with conceptual description; cross‑links to Atlas‑V and AtlasStudio; uses gold/magenta glow combination | Placeholder panels for decision flows; no interactive content yet | Actual console interface to record and display decisions; dynamic data from runs and phases; integration with product_status JSON | In Design |
| **AtlasWave** | Coming‑soon hero featuring blue/pink gradient orb; description of future audio platform; links to OIA soundtrack | No actual audio player; hero uses ambient gradient; section appears only on home or labs pages | Full catalogue of tracks; streaming controls; cross‑links to games and media pages; dynamic playlist loading | Coming Soon |

## Codex Implementation Suggestions

1. **Centralize navigation data**: Extract the nav label and URL mapping into a single JSON (e.g. `site_map_v01.json`) and have `scripts/main.js` iterate over it to populate both header and footer navigation. This ensures consistency when adding new pages.
2. **Load product statuses dynamically**: Use the `product_status_v01.json` file to display status tags (e.g. Playable Alpha, Prototype) on product tiles in `index.html`. A simple fetch + DOM injection can keep statuses current across pages.
3. **Connect copy to content files**: Read `product_blurbs.md` and `site_sections.md` at build time or via a lightweight fetch to populate hero titles and descriptions. This avoids duplicating copy in HTML.
4. **Glow asset management**: Create a helper script that picks the correct glow orb SVG based on the current brand class on `<body>` and injects it into hero or footer backgrounds. This reduces manual markup and keeps usage consistent.
5. **Replace placeholders with live data**: For Atlas‑V diagrams and flow panels, link into actual governance data once the engine exposes an API. Meanwhile, implement stub functions that can be swapped later.
6. **Componentize hero panels and tiles**: Use a templating system (e.g. Nunjucks, React, or lit‑html) to generate hero and product tile markup. Feed in variables such as brand colours, headlines, and CTA links from JSON.
7. **Leverage elevation layers**: Apply the `--elevation-card`, `--elevation-overlay`, and `--elevation-hero` variables in CSS to create depth on cards, overlays, and hero panels without hard‑coded box‑shadow values.
8. **Hook up Decision Console**: When the console UI is ready, mount it inside the `decisions.html` page using a shadow DOM component. It should read from a central data store that also updates the status tags on other pages.
9. **AtlasWave integration**: Plan for a global audio player that can be triggered from any page. Use the coming‑soon page as a placeholder for the player container and progressive enhancement later.
10. **Maintain glow guidelines**: Reference `glow_usage_guidelines_v01.md` when adding new sections to ensure glow orbs and halo bars are used tastefully and consistently.