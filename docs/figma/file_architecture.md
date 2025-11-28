# Figma File Architecture (Phase 7 — Figma-First)

## Team / Project Layout
- **Team:** `AtlasForge Interactive`
- **Projects:**
  - `AtlasForge — Design System` (foundations, core components, patterns)
  - `AtlasForge — Product & Pages` (page templates, page-level flows)
  - `AtlasForge — Experiments & POCs` (AtlasStudio/Atlas-V/Atlas Engine sandbox flows)

## Core Figma Files
- `AF_01_Foundations`
- `AF_02_Core_Components`
- `AF_03_Brand_Kits`
- `AF_04_Page_Templates`
- `AF_05_Interactions_And_Flows`
- `AF_06_POCs_And_Sandboxes`

## Recommended Page Structure (per file)
Use numeric prefixes for ordering; reserve `xx_Archive` for parked work.

- `00_GUIDE`
- `01_Tokens`
- `02_Typography`
- `03_Components_Global`
- `04_Components_Brand_AtlasForge`
- `05_Components_Brand_AtlasV`
- `06_Components_Brand_AtlasStudio`
- `07_Components_Brand_Games`
- `08_Components_Brand_OIA`
- `09_Components_Brand_SKB`
- `10_Components_Brand_Media`
- `11_Components_Brand_Labs`
- `12_Page_Templates` (per-file as needed)
- `13_Interactions` (flows, hotspots)
- `14_POCs` (sandbox frames when applicable)
- `xx_Archive`

Notes:
- `AF_01_Foundations` focuses on tokens/styles; only include GUIDE/Tokens/Typography/Archive pages.
- `AF_02_Core_Components` contains global components plus brand-specific component pages.
- `AF_03_Brand_Kits` can mirror per-brand pages with dedicated palettes and component skins.
- `AF_04_Page_Templates` houses all page templates and responsive variants.
- `AF_05_Interactions_And_Flows` contains click/tap prototypes for nav, galleries, audio, governance, admin, playground.
- `AF_06_POCs_And_Sandboxes` holds AtlasStudio/Atlas-V/Atlas Engine/AtlasForge umbrella visual POCs after systemization.

## Naming Conventions
### Components
- Pattern: `Brand/Category/Component` → examples: `AF/Nav/Primary`, `AV/Hero/Main`, `AS/Shell/Playground`, `GAMES/Card/Catalog`, `OIA/Gallery/Species`, `SKB/Audio/Track`, `MEDIA/Card/Article`, `LABS/Card/Experiment`.
- Variants (properties): `state=default|hover|focus|pressed|disabled|selected`, `size=sm|md|lg`, `density=compact|regular|roomy`, `brand=AF|AV|AS|GAMES|OIA|SKB|MED|LABS`, `layout=desktop|tablet|mobile` where applicable.

### Styles
- Colors: `Color/Brand/AtlasV/Core`, `Color/Surface/Level.01`, `Color/Feedback/Warning`.
- Typography: `Text/H1/Desktop`, `Text/H2/Table`, `Text/Body/Default`, `Text/Caption/Meta`.
- Effects: `Effect/Shadow/Elevated.02`, `Effect/Glow/Focus`, `Effect/Border/Default`.
- Radii (if styled): `Effect/Radius/Sm|Md|Lg` (documented even if applied via components).

### Frame/Page Labels
- Use prefixes: `TEMP/` for work-in-progress, `ARCHIVE/` for deprecated, `SPEC/` for reference boards.
- Page names mirror page templates: `Page/Home`, `Page/AtlasV`, `Page/AtlasStudio`, etc.

## Token-to-Style Mapping Rules
- `color.*` → Figma **Color Styles** organized by brand and surface levels; governance badges use Atlas-V brand colors.
- `type.*` → **Text Styles** for display/heading/body/caption scales; align to breakpoints where needed (Desktop/Tablet/Mobile variants if necessary).
- `radius.*` and `shadow.*` → **Effect Styles** for corners and elevation tiers (e.g., `Effect/Shadow/Elevated.01` maps to `shadow.01`).
- `space.*` → spacing guidance documented in component auto-layout (not standalone styles); note grid unit (e.g., 8px base) and multiplier usage in descriptions.
- `breakpoint.*` → documented in page templates and component variants (`layout=desktop|tablet|mobile`).

## Assembly Guidance
- Keep **GUIDE** pages describing conventions and change logs.
- Place prototypes in `AF_05_Interactions_And_Flows`; keep design system components in `AF_02_Core_Components` to avoid duplicate sources.
- When building POCs, instance only from published libraries (no one-off detours) and tag frames with `POC/` to avoid polluting core components.
