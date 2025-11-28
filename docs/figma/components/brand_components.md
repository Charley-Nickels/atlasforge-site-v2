# Brand-Specific Components (Phase 6 – Run F2)

Components below are scoped to specific AtlasForge brands and mirror current HTML/CSS without visual changes. Naming uses brand prefixes for Figma readiness.

## AF_HeroUmbrella
- **Description**: AtlasForge umbrella hero variant with badge, CTA row, and stack chip list.
- **Placement**: Home hero and AtlasForge-branded pages using `.mf-hero--forge`.
- **Tone rules**: Confident but invitational; emphasize governed creativity and ecosystem umbrella language.
- **Unique states/variants**: Two-column layout with stack chip inline list; CTA trio including internal anchor.
- **Brand palette notes**: Uses magenta/pink accent gradient and neutral overlays from AtlasForge palette.
- **Token mapping**: Brand accent gradient tokens, hero badge radius (`--radius-12`), chip radius (`--radius-pill`), button tokens matching primary/ghost styles.

## AF_StackDiagramBlock
- **Description**: Ecosystem stack diagram with layered list and parallax wrapper (`.mf-stack-diagram`).
- **Placement**: Home page “Stack diagram” section.
- **Tone rules**: Systems-focused, clear sequencing of Atlas Engine, Atlas-V, Atlas-V Lite, and Atlas Studio POC.
- **Unique states/variants**: Layered foreground/background with parallax effect; four-item list.
- **Brand palette notes**: Neutral surfaces with AtlasForge accent strokes.
- **Token mapping**: Container width tokens, layer surface overlays, list spacing tokens, subtle shadow/outline tokens.

## AV_WorkflowDiagram
- **Description**: Atlas-V lattice diagram placeholder SVG highlighting Navigator/Memory/Guard/FlowSim nodes.
- **Placement**: Atlas-V page “System diagram” section.
- **Tone rules**: Serious, dependable, public-safe governance language.
- **Unique states/variants**: Gradient frame, four connected nodes with accent circles; hidden panels toggle via buttons above.
- **Brand palette notes**: Cyan/blue accent tokens for Atlas-V with neutral stroke overlays.
- **Token mapping**: Brand accent gradient (`--brand-accent`), overlay lines, radius for container (`rx="18"`), spacing from section wrapper.

## AV_SafetyGovernanceBlock
- **Description**: Governance constraints card set with toggle buttons and detail panels.
- **Placement**: Atlas-V page “Governance (light)” section using `.mf-constraint-list` and detail cards.
- **Tone rules**: Light-touch guardrails; non-technical wording.
- **Unique states/variants**: Button strip with pressed states; detail cards revealed per selection.
- **Brand palette notes**: Atlas-V accent for active states; neutral cards otherwise.
- **Token mapping**: Button/outline tokens, card surface and radius tokens, spacing tokens for list gutters.

## AS_PlaygroundShell
- **Description**: AtlasStudio Playground workstation shell with hero, tab primer, shell frame, and cozy workstation sidebar.
- **Placement**: `atlasstudio.html` Playground section and `/atlasstudio/playground.html`.
- **Tone rules**: Cozy, supportive, clearly conceptual (not production); highlights mock workflows.
- **Unique states/variants**: Multi-column layout with hero, tab rail mock, faux terminal feed, task drawer, workspace cards, and sidecar panels.
- **Brand palette notes**: Warm ember/amber accent tokens with neutral shell surfaces.
- **Token mapping**: Shell surface overlays, card radii (`--radius-12`), spacing (`--space-12`–`--space-24`), badge/button tokens for CTA prompts.

## AS_TabsStrip
- **Description**: Tab strip representing Game/Excel/Policy/Writing/Web previews inside Playground.
- **Placement**: AtlasStudio Playground shell.
- **Tone rules**: Playful but organized; clarifies previews are conceptual.
- **Unique states/variants**: Tab buttons (default/selected) aligned to mock content panes.
- **Brand palette notes**: Warm accent highlight for active tab; neutral for inactive.
- **Token mapping**: Tab padding tokens, border/underline accents, radius tokens for pill-like ends, text tokens for labels.

## AS_GhostConsoleSidecar
- **Description**: Faux terminal / Codex ghost sidecar with log lines and status chips.
- **Placement**: AtlasStudio Playground console column.
- **Tone rules**: Supportive narrator voice; concept-only.
- **Unique states/variants**: Scrollable feed, highlighted callouts, badge chips.
- **Brand palette notes**: Amber accent highlights; dark neutral surface.
- **Token mapping**: Surface tokens for console, monospace text tokens, spacing for line stack, chip radius tokens.

## Games_GameCatalogGrid
- **Description**: Grid of game cards with titles and placeholder art.
- **Placement**: `games.html` catalog sections.
- **Tone rules**: Enthusiastic, playful while referencing governance through AtlasForge.
- **Unique states/variants**: Multi-column grid responsive to width; clickable card behaviors mirror global card states.
- **Brand palette notes**: Uses AtlasForge base palette with playful accent chips.
- **Token mapping**: Card surfaces, radii, spacing tokens for grid gaps, text tokens for titles.

## Games_ConceptVaultTiles
- **Description**: Concept Vault list/tiles highlighting prototypes and experiment notes.
- **Placement**: `games.html` concept vault section.
- **Tone rules**: Experimental, preview-only, invites exploration.
- **Unique states/variants**: List or tile layout; optional “Powered by Atlas-V” badges.
- **Brand palette notes**: AtlasForge neutral base with accent badges.
- **Token mapping**: Card/list tokens, badge/chip tokens, spacing for list rhythm.

## OIA_HeroBlock
- **Description**: OIA hero variant featuring flagship world language and CTA pair.
- **Placement**: `oia.html` hero using `.mf-hero--oia`.
- **Tone rules**: Warm aquatic tone with narrative emphasis; public-safe lore framing.
- **Unique states/variants**: Two-column hero with story-forward copy and gallery anchors.
- **Brand palette notes**: Orange/aqua accent blend for backgrounds and chips.
- **Token mapping**: Brand gradient tokens, hero spacing, badge radius, CTA button tokens.

## OIA_SpeciesIntroPanels
- **Description**: Panels introducing species/factions with short descriptions.
- **Placement**: `oia.html` species section.
- **Tone rules**: Lore-rich yet concise; focus on discoverability not detail dumps.
- **Unique states/variants**: Card-like panels with inline badges.
- **Brand palette notes**: Warm accent chips on dark surfaces.
- **Token mapping**: Card surface/radius tokens, spacing stack tokens, badge tokens.

## OIA_ScreenshotGallerySystem
- **Description**: Screenshot gallery grid dedicated to OIA visuals.
- **Placement**: `oia.html` gallery section.
- **Tone rules**: Cinematic, inviting exploration.
- **Unique states/variants**: Grid of placeholders/images with captions; responsive column counts.
- **Brand palette notes**: OIA accents on hover borders/chips.
- **Token mapping**: Gallery spacing tokens, card radius, caption text tokens.

## SKB_TrackCards
- **Description**: Cards representing SKB tracks/releases with notes.
- **Placement**: `skb.html` track sections and callouts.
- **Tone rules**: Supportive, cozy creator tone; sequencing and milestone-friendly.
- **Unique states/variants**: Featured track vs standard track; inline badges for status.
- **Brand palette notes**: Purple/lilac accent references with neutral shells.
- **Token mapping**: Card surface tokens, spacing for metadata stacks, badge tokens, text tokens for small print.

## SKB_PlaylistLists
- **Description**: Playlist-style lists outlining track groups or timelines.
- **Placement**: `skb.html` playlist sections.
- **Tone rules**: Calm, organized sequencing language.
- **Unique states/variants**: Ordered/stacked rows with optional CTA.
- **Brand palette notes**: Accent dividers/bullets in SKB palette.
- **Token mapping**: List spacing tokens, line/border tokens, small-text tokens.

## Media_PillarCards
- **Description**: Media pillar cards describing the media verticals.
- **Placement**: `media.html` intro sections.
- **Tone rules**: Minimal, curated storytelling; neutral voice.
- **Unique states/variants**: Grid of pillar cards; optional icon slots.
- **Brand palette notes**: Neutral palette with subtle accent for active/hover.
- **Token mapping**: Card surfaces, radii, spacing, typography tokens for headings/body.

## Media_ArticleEpisodeCards
- **Description**: Cards for articles or episodes with title, excerpt, and meta.
- **Placement**: `media.html` listings.
- **Tone rules**: Editorial, concise, accessible.
- **Unique states/variants**: Standard card vs featured highlight; hover elevation.
- **Brand palette notes**: Soft accent underline/badge for media category.
- **Token mapping**: Card tokens, spacing for meta rows, badge tokens.

## Labs_ExperimentCards
- **Description**: Experiment cards showcasing prototypes or tests.
- **Placement**: `labs.html` sections.
- **Tone rules**: Experimental but clear about sandbox status.
- **Unique states/variants**: Card tiles with optional status chips (“in experiment”).
- **Brand palette notes**: Energetic accent (labs) applied to chips/borders.
- **Token mapping**: Card surface tokens, chip tokens, spacing tokens.

## Labs_CategoryGrids
- **Description**: Category grid that groups experiments or lab areas.
- **Placement**: `labs.html` category section.
- **Tone rules**: Organizing chaos into clear clusters; supportive language.
- **Unique states/variants**: Responsive grid; optional icon slot.
- **Brand palette notes**: Labs accent highlights on hover/active.
- **Token mapping**: Grid spacing tokens, card radius, heading/body text tokens.

## Merch_TeaserCards
- **Description**: Placeholder/teaser cards for future merch reveals.
- **Placement**: Merch mentions/teaser slots across pages.
- **Tone rules**: Light, anticipatory; clearly placeholder.
- **Unique states/variants**: Placeholder art block plus caption/CTA.
- **Brand palette notes**: Neutral with subtle AtlasForge accent hints.
- **Token mapping**: Placeholder skeleton tokens, card radius, spacing tokens, CTA button tokens.
