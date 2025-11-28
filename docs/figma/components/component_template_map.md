# Component → Template Map (Run F3)

## Global Components
- **Global.Nav.Top**
  - **Files:** index.html, atlasv.html, atlasstudio.html, atlasstudio/playground.html, games.html, media.html, oia.html, skb.html, labs.html, about.html, admin.html
  - **Line ranges:** Header block near top of each document (lines 10–35 depending on file).
  - **Variants/Notes:** Includes primary and secondary nav groups; paired with mobile toggle control.
  - **Figma Handoff:** Translate to responsive nav component with desktop and mobile variants.

- **Global.Nav.MobileToggle**
  - **Files:** Same as Global.Nav.Top.
  - **Line ranges:** Immediately before the nav toggle button in each header.
  - **Variants/Notes:** Single toggle state documented; open/closed states to be defined in Figma.
  - **Figma Handoff:** Provide collapsed/expanded mobile drawer states.

- **Global.Hero.Primary**
  - **Files:** index.html, atlasv.html, atlasstudio.html, games.html, media.html, oia.html, skb.html, labs.html, about.html, admin.html
  - **Line ranges:** First section under `<main>` in each page (approx. lines 30–80).
  - **Variants/Notes:** Brand-specific badges and CTAs; AtlasStudio and Atlas-V use themed hero modifiers.
  - **Figma Handoff:** Build base hero with slots for eyebrow/badge, heading, body, CTA group, and optional aside.

- **Global.SectionWrapper**
  - **Files:** All HTML pages above where sections carry `.mf-section` wrappers; repeated across index, atlasv, atlasstudio, games, media, oia, skb, labs, about, admin, and playground shell context.
  - **Line ranges:** Throughout mid-page content sections (varies per file).
  - **Variants/Notes:** Paired with `.mf-container` and `.mf-section-header` blocks.
  - **Figma Handoff:** Provide section wrapper with padding tokens and optional background/surface tokens.

- **Global.SectionHeaders**
  - **Files:** All pages containing `.mf-section-header` (same set as SectionWrapper).
  - **Line ranges:** Near top of each section content cluster.
  - **Variants/Notes:** Eyebrow + H2 + optional paragraph; supports subtext.
  - **Figma Handoff:** Build reusable header component with eyebrow/heading/description slots.

- **Global.CTAButtons**
  - **Files:** Heroes and action bars across all pages; AtlasStudio Playground controls; admin prompt.
  - **Line ranges:** Within hero action groups and console/toolbars.
  - **Variants/Notes:** Primary, ghost, and contextual decision buttons (Playground snapshot/decision bar).
  - **Figma Handoff:** Define button variants (Primary, Secondary, Ghost, Footer) with states.

- **Global.Cards.ProductTool**
  - **Files:** index.html (case studies, stack cards, etc.), about.html (overview grid).
  - **Line ranges:** Mid-page grids (approx. lines 90–200 on index/about).
  - **Variants/Notes:** Simple card with heading/body/meta optional.
  - **Figma Handoff:** Card shell with slots for title, description, meta.

- **Global.Cards.Game**
  - **Files:** games.html (flagship and concept grids), oia.html (world primer/species cards).
  - **Variants/Notes:** Mix of placeholder skeletons and descriptive cards.
  - **Figma Handoff:** Game card variant with image placeholder, tag/meta rows.

- **Global.Cards.Media**
  - **Files:** media.html (upcoming drops), index.html (gallery samples).
  - **Figma Handoff:** Media card with cover placeholder, title, meta line.

- **Global.Cards.Labs**
  - **Files:** labs.html (experiment cards), games.html (Lab-sourced concept notes).
  - **Figma Handoff:** Experiment card with tag/meta hooks.

- **Global.Cards.Audio/SKB**
  - **Files:** skb.html (track styles), games.html (audio callouts), oia.html (status callouts referencing audio cues).
  - **Figma Handoff:** Audio card with runtime/meta row; badges for “Audio by SKB.”

- **Global.Cards.ConceptVault**
  - **Files:** games.html (Concept Vault), index.html (Concept/Story/Flow cards), atlasstudio.html (conceptual sandboxes).
  - **Figma Handoff:** Concept tile variant with note/meta rows and placeholder art.

- **Global.Lists.Feature**
  - **Files:** index.html (flow tracks, storyboard items), atlasv.html (mode lists, constraint lists), atlasstudio.html (flow tracks), skb.html (timeline steps).
  - **Figma Handoff:** List/grid styles for bulleted feature/step rows.

- **Global.Lists.StackDiagramBlocks**
  - **Files:** index.html (`mf-stack-diagram`), atlasv.html (lattice SVG + mode buttons).
  - **Figma Handoff:** Diagram block container for stack layering; placeholder for future SVG.

- **Global.Lists.ConceptVaultLists**
  - **Files:** games.html concept grid, labs.html experiment listings.
  - **Figma Handoff:** Tile grid with flexible tag rows.

- **Global.BadgesStatusChips**
  - **Files:** Throughout heroes and shells (index hero chips, atlasstudio tabs, playground chips, SKB tags).
  - **Figma Handoff:** Chip/pill component with states (default/active/disabled) and size tokens.

- **Global.TagsPills**
  - **Files:** Playground tabs (`mf-chip-pill`), hero chip lists, metadata labels.
  - **Figma Handoff:** Pill variant tied to badge tokens.

- **Global.ScreenshotGalleries**
  - **Files:** index.html (sample projects), oia.html (screenshot gallery), atlasstudio.html (conceptual sandboxes placeholders).
  - **Figma Handoff:** Gallery grid with image placeholder slot and caption/meta rows.

- **Global.AudioLists**
  - **Files:** skb.html (`mf-step` timeline), atlasstudio/playground.html (assistant feed/snapshot list placeholders).
  - **Figma Handoff:** List style with title + supporting text/meta.

- **Global.PlaceholderBlocks**
  - **Files:** All pages using `.mf-skeleton` or placeholder panels (index gallery, games flagship, media drops, atlasstudio showrooms).
  - **Figma Handoff:** Skeleton/loading block tokens for swapping with final art.

## Brand-Specific Components
- **AF.HeroUmbrella**
  - **Files:** index.html hero.
  - **Notes:** Umbrella badge + CTA trio; aligns with global hero structure.
  - **Figma Handoff:** AF-branded hero variant with badge and chip strip.

- **AF.StackDiagram**
  - **Files:** index.html stack diagram section.
  - **Notes:** Layered grid showing Engine/V/Lite/Studio; parallax wrappers.
  - **Figma Handoff:** Diagram frame with replaceable illustration.

- **AV.Hero**
  - **Files:** atlasv.html hero.
  - **Notes:** Technical tone; powered-by badge.
  - **Figma Handoff:** Atlas-V themed hero variant.

- **AV.WorkflowDiagram**
  - **Files:** atlasv.html capabilities section and lattice diagram panel.
  - **Notes:** Mode buttons + SVG lattice placeholder.
  - **Figma Handoff:** Workflow diagram component with responsive states.

- **AV.SafetyBlock**
  - **Files:** atlasv.html governance section.
  - **Notes:** Constraint buttons with detail cards.
  - **Figma Handoff:** Safety/Governance block with expandable items.

- **AS.Hero**
  - **Files:** atlasstudio.html hero.
  - **Notes:** Cozy/supportive tone with Powered by Atlas-V aside.
  - **Figma Handoff:** Hero variant with warm palette hooks.

- **AS.PlaygroundShell**
  - **Files:** atlasstudio.html shell section; atlasstudio/playground.html main shell and workstation cluster.
  - **Notes:** Tri-panel mock, task drawer, workspace preview, console, sidebar.
  - **Figma Handoff:** Shell component with nested panes and tab/console slots.

- **AS.TabsStrip**
  - **Files:** atlasstudio.html tabs primer; atlasstudio/playground.html tab rail.
  - **Notes:** Five-tab strip for conceptual modes.
  - **Figma Handoff:** Tab component with active/default/hover states.

- **AS.GhostConsole**
  - **Files:** atlasstudio.html terminal pane; atlasstudio/playground.html terminal sidecar.
  - **Notes:** Faux-terminal with chip header and log feed.
  - **Figma Handoff:** Console panel with monospaced text style.

- **Games.FlagshipHero**
  - **Files:** games.html flagship OIA section.
  - **Notes:** Hero + gallery for flagship title.
  - **Figma Handoff:** Game hero variant with skeleton art swap.

- **Games.ConceptVaultGrid**
  - **Files:** games.html concept grid; index.html concept/story cards.
  - **Notes:** Tile grid with note/meta rows.
  - **Figma Handoff:** Concept vault tile component.

- **OIA.HeroBlock**
  - **Files:** oia.html hero.
  - **Notes:** World badge, CTA pair, gameplay aside.
  - **Figma Handoff:** OIA-branded hero.

- **OIA.SpeciesIntroPanels**
  - **Files:** oia.html world primer and species sections.
  - **Notes:** Character/role cards with meta tags.
  - **Figma Handoff:** Species card variant.

- **OIA.ScreenshotGallery**
  - **Files:** oia.html screenshot gallery.
  - **Notes:** Skeleton placeholders for future captures.
  - **Figma Handoff:** Screenshot gallery grid.

- **SKB.TrackCards**
  - **Files:** skb.html track styles section.
  - **Notes:** Album cards with runtime/meta rows.
  - **Figma Handoff:** Track card with cover art slot and metadata stack.

- **SKB.PlaylistLists**
  - **Files:** skb.html OIA soundtrack timeline.
  - **Notes:** Step list representing playlist cues.
  - **Figma Handoff:** Playlist/timeline list component.

- **Media.PillarCards**
  - **Files:** media.html pillar section.
  - **Notes:** Cards describing media lanes.
  - **Figma Handoff:** Pillar card variant with eyebrow/meta hooks.

- **Media.ArticleEpisodeCards**
  - **Files:** media.html upcoming drops grid.
  - **Notes:** Placeholder cover + meta rows.
  - **Figma Handoff:** Article/Episode card with length format tags.

- **Labs.ExperimentCards**
  - **Files:** labs.html experiment listings.
  - **Notes:** Experiment tiles with status tags.
  - **Figma Handoff:** Experiment card variant for prototype notes.

- **Labs.CategoryGrid**
  - **Files:** labs.html category grid section.
  - **Notes:** Grid of lab categories with descriptive copy.
  - **Figma Handoff:** Category grid component.

- **Merch.TeaserCards**
  - **Files:** index.html merch teaser gallery.
  - **Notes:** Minimal placeholder cards with meta rows and skeleton art.
  - **Figma Handoff:** Merch teaser card placeholder for future drop art.
