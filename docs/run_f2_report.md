# Phase 6 — Run F2 Report: Component Inventory Expansion

## Scope
Run F2 documents the full Figma-ready component inventory across AtlasForge Site V2 without altering visuals. Outputs include global and brand component inventories plus surfaced decisions.

## Component Inventory
- **Global components**: Top Nav (desktop), Mobile Nav/Drawer, Footer base & clusters, Hero, Sub-hero, Section Headers, Section Wrappers, CTA Buttons (Primary/Secondary/Ghost/Footer), Cards (Product/Tool, Game, Media, Labs, Audio/SKB, Concept Vault), Lists & Grids (feature lists, stack diagram blocks, concept vault lists), Badges/Status Chips, Tags/Pills, Screenshot Galleries, Audio Lists, Placeholder Blocks.
- **Brand components**: AF_HeroUmbrella, AF_StackDiagramBlock, AV_WorkflowDiagram, AV_SafetyGovernanceBlock, AS_PlaygroundShell, AS_TabsStrip, AS_GhostConsoleSidecar, Games_GameCatalogGrid, Games_ConceptVaultTiles, OIA_HeroBlock, OIA_SpeciesIntroPanels, OIA_ScreenshotGallerySystem, SKB_TrackCards, SKB_PlaylistLists, Media_PillarCards, Media_ArticleEpisodeCards, Labs_ExperimentCards, Labs_CategoryGrids, Merch_TeaserCards.

## Gaps / Follow-ups
- **Image assets**: Multiple gallery and card placeholders indicate pending asset swaps (needs Phase 6 asset plan).
- **Interactivity notes**: Tab/constraint buttons have implied pressed/selected states but lack a documented focus pattern for accessibility.
- **Merch**: Teaser cards exist only conceptually; requires final structure once product list is known.
- **Motion**: No motion specs captured; needs motion token plan before component prototyping.

## Naming Conventions
- Global components use plain names (e.g., `Hero.Primary`, `Card.Product`, `Nav.Top`).
- Brand components use brand prefixes (e.g., `AF_HeroUmbrella`, `AV_WorkflowDiagram`, `AS_PlaygroundShell`).
- Variants expressed as suffixes (e.g., `.Primary`, `.Secondary`, `.Ghost`, `.Featured`).
- States follow `Default / Hover / Focus / Active / Selected` where applicable.

## Decisions (Phase 6)
- **F2-D1**: Should the mobile drawer inherit unique background tokens per brand or stay neutral? (affects Nav/Drawer component set).
- **F2-D2**: Confirm canonical tab/constraint selected styles for AtlasStudio and Atlas-V controls (pressed vs filled vs underline).
- **F2-D3**: Define a shared focus outline token for cards and buttons to align accessibility across brands.
- **F2-D4**: Choose whether Merch teaser cards adopt AtlasForge accent or a neutral merch palette.
- **F2-D5**: Determine motion token defaults (hover/press elevations) before translating to Figma variants.
