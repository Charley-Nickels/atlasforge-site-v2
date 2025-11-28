# Section Pattern Catalog (Phase 6 — Run F6)

Global section patterns consolidate recurring blocks seen across wireframes (Run F5) and layout blueprints (Run F4). Each pattern lists canonical components, responsive behavior, and Figma notes.

## Hero Patterns
- **Hero.Primary:** AF.HeroUmbrella with dual CTAs; 2-column desktop, stacked mobile; Atlas-V badge optional.
- **Hero.SubHero:** Secondary hero used for labels (Games, Media, SKB, Labs, About, Admin); lighter density; supports Tag/Pill.
- **Hero.Brand:** Brand-specific hero (Atlas-V, OIA) with brand palette and single primary CTA.
- **Hero.Studio:** AtlasStudio tone with CTA pair and cozy copy; pairs with PlaygroundShell.

## Grid Patterns
- **Grid.3to2to1:** Default for product, games, media, labs, SKB cards; 3 columns desktop → 2 tablet → 1 mobile; gutters follow spacing tokens.
- **Grid.4to2to1:** Optional high-density grid for media/articles when needed; use caution for readability.
- **Grid.2to1:** Used for labs category grids and timelines; supports stacked text + media.

## List Patterns
- **List.Feature:** Bulleted feature or pillar lists paired with SectionHeader.
- **List.Media/Article:** Vertical list for media/episodes under media hero; may pair with cards.
- **List.Audio:** Audio list or playlist stack; aligns with SKB/Media sections.
- **List.ConceptVault:** Vertical concept vault entries with title/summary; used in OIA/About/Admin variants.

## CTA Patterns
- **CTA.PrimaryStack:** Primary + Ghost stacked on mobile, inline on desktop.
- **CTA.Split:** Primary + Secondary horizontal pair; collapses to stack on mobile.
- **CTA.FooterStack:** CTA group placed at bottom of a section or page; inherits primary/ghost styles.

## Governance Patterns
- **Governance.Badge:** Atlas-V badge/tag used in heroes, governance blurbs, and footers.
- **Governance.Block:** AV.SafetyBlock as standalone section; single-column layout with concise copy.

## Cross-Brand Link Patterns
- **PoweredBy.AtlasV:** Microcopy within games/media/labs sections referencing Atlas-V; detachable tag or badge.
- **CrossPromo.AtlasStudio:** Playground teaser blocks in Home/AtlasStudio linking to Studio shell.

## Specialized Patterns
- **PlaygroundShell:** AtlasStudio shell containing tabs strip, console, and task drawer; mobile stacks console/drawer.
- **ConsoleHybrid:** Admin decisions console layout; table or card-stack variant depending on responsive decision (P6-F5-002).
- **GallerySystem:** Screenshot gallery block with hover/selection cues; mobile behavior pending decision P6-F5-001.
- **PlaceholderBlock:** Temporary frame for bespoke widgets (timeline, export controls) mapped to existing spacing/typography tokens.
