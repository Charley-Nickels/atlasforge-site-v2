# Page Template Map (Phase 6 — Run F6)

Template family names align to wireframes (Run F5), component inventory (Runs F2–F3), and layout blueprints (Run F4). Each entry lists the primary template, section sequence, component bindings, responsive intent, and token/Figma dependencies.

## Home / Hub
- **Assigned Template:** Hub.HeroStack
- **Section Pattern List:** Hero.Primary → EcosystemIntro.Stack → ToolsGrid → GamesFeed → MediaFeed.Audio → LabsTeaser → GovernanceBlurb → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.Primary → AF.HeroUmbrella + CTA.Primary/Ghost
  - EcosystemIntro.Stack → SectionHeader + AF.StackDiagram
  - ToolsGrid → Cards.Product/Tool + CTA.FooterStack
  - GamesFeed → Cards.Game + ScreenshotGallery
  - MediaFeed.Audio → Cards.Media + AudioList
  - LabsTeaser → Cards.Labs
  - GovernanceBlurb → AV.SafetyBlock
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Use 12/8/4 column frames; preserve 3→2→1 grid degradation; badge hooks for Atlas-V references remain detachable.
- **Token/Dependency Notes:** Relies on global spacing/typography tokens; governance badge uses Atlas-V palette; CTA buttons inherit global states.

## Atlas-V
- **Assigned Template:** Brand.HeroStack (AV)
- **Section Pattern List:** Hero.Brand → Promise/WhatWeMake → WorkflowDiagram → SafetyGovernance → ToolsCTA → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.Brand → AV.BrandHero + CTA.Primary
  - Promise/WhatWeMake → SectionHeader + FeatureList
  - WorkflowDiagram → AV.WorkflowDiagram
  - SafetyGovernance → AV.SafetyBlock (expanded)
  - ToolsCTA → Cards.Product/Tool (Atlas-V aligned) + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Maintain logic-first tone; consider 2-column hero on desktop collapsing to stacked text/CTA; governance badges reused from AV token set.
- **Token/Dependency Notes:** AV cyan palette references; copy density moderate; shadows minimal per AV tone.

## AtlasStudio
- **Assigned Template:** Studio.PlaygroundShell
- **Section Pattern List:** Hero.Studio → PlaygroundShell → TabsStrip + Console → TaskDrawer → CozySidebar → CTA.FooterStack
- **Block-Level Component Mapping:**
  - Hero.Studio → AS.Hero + CTA.Primary/Ghost
  - PlaygroundShell → AS.PlaygroundShell frame
  - TabsStrip + Console → AS.TabsStrip + AS.GhostConsole
  - TaskDrawer → AS.TaskDrawer (Concept)
  - CozySidebar → AS.CoachingSidebar + BadgeChips
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
- **Notes for Figma:** Keep shell detachable; tab strip and console as separate frames; drawer may need minimized variant (decision from P6-F5-004); ensure responsive stacking of console/drawer on mobile.
- **Token/Dependency Notes:** Warm ember palette references; spacing follows global rhythm; radius/shadow align to studio cozy tone.

## Games
- **Assigned Template:** Label.CatalogGrid
- **Section Pattern List:** Hero.SubHero → GamesGrid → ScreenshotGallery → CTA.FooterStack → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero + Tag/Pill
  - GamesGrid → Cards.Game
  - ScreenshotGallery → ScreenshotGallery (with Atlas-V microcopy)
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Grid flows 3→2→1; decision P6-F5-001 governs mobile gallery (carousel vs scroll); tone playful but aligned to brand neutrals.
- **Token/Dependency Notes:** Use global spacing; game accents align to Games label palette; buttons use global tokens.

## OIA
- **Assigned Template:** Brand.GalleryNarrative
- **Section Pattern List:** Hero.Brand → SpeciesIntro → GallerySystem → ConceptVault → SafetyBadge → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.Brand → OIA.HeroBlock + CTA.Primary
  - SpeciesIntro → SpeciesIntroPanels + SectionHeader
  - GallerySystem → ScreenshotGallery
  - ConceptVault → Cards.ConceptVault
  - SafetyBadge → AV.SafetyBlock (OIA flavor)
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Balance lore tone with clarity; galleries allow 2→1 degradation; badge placement referenced in P6-F5-003.
- **Token/Dependency Notes:** Warm aquatic palette; spacing moderate; typography follows global hierarchy.

## SKB
- **Assigned Template:** Label.AudioFirst
- **Section Pattern List:** Hero.SubHero → TrackCards/Playlist → AudioList → CTA.FooterStack → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero + Tag/Pill
  - TrackCards/Playlist → Cards.Audio/SKB
  - AudioList → AudioList (stacked)
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Emphasize audio controls in wireframes; grid 3→2→1; playlist may collapse to accordion on mobile.
- **Token/Dependency Notes:** SKB accents minimal; rely on global spacing/typography; focus styles per interaction spec.

## Media
- **Assigned Template:** Label.MediaGrid
- **Section Pattern List:** Hero.SubHero → MediaCards → Episode/ArticleList → CTA.FooterStack → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero + AV badge hook
  - MediaCards → Cards.Media
  - Episode/ArticleList → MediaList/ArticleList pattern
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Consider Atlas-V governance badge placement (P6-F5-003); maintain 3→2→1 grid; audio list optional inline.
- **Token/Dependency Notes:** Neutral palette; shadows minimal; token alignment to global.

## Labs
- **Assigned Template:** Label.ExperimentGrid
- **Section Pattern List:** Hero.SubHero → ExperimentCards → CategoryGrid → CTA.FooterStack → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero + BadgeChip (Labs)
  - ExperimentCards → Cards.Labs
  - CategoryGrid → Labs.CategoryGrid (2→1)
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Density moderate; highlight experimental tone; allow messy notes via PlaceholderBlocks if needed.
- **Token/Dependency Notes:** Labs palette experimental; ensure focus states align to accessibility spec.

## About
- **Assigned Template:** Informational.Stack
- **Section Pattern List:** Hero.SubHero → Mission/Story → Timeline/Lore → Leadership/Badges → CTA.FooterStack → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero
  - Mission/Story → SectionHeader + FeatureList
  - Timeline/Lore → PlaceholderBlock (timeline) + Cards.ConceptVault
  - Leadership/Badges → Badges/StatusChips (Atlas-V governance hook)
  - CTA.FooterStack → CTA.Primary + CTA.Ghost
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Keep density light to moderate; timeline placeholder flagged for future bespoke component.
- **Token/Dependency Notes:** Global palette; governance badge optional.

## Admin (Atlas Decisions Console)
- **Assigned Template:** Internal.ConsoleHybrid
- **Section Pattern List:** Hero.SubHero → ExportControls → DecisionsTable/CardStack → GovernanceNotes → Footer.Core
- **Block-Level Component Mapping:**
  - Hero.SubHero → Hero.SubHero (internal tone)
  - ExportControls → PlaceholderBlock (export CTA + filters)
  - DecisionsTable/CardStack → Table/Grid placeholder tied to cards from ConceptVault if stacked
  - GovernanceNotes → AV.SafetyBlock (admin flavor)
  - Footer.Core → Footer.Base + Footer.Clusters
- **Notes for Figma:** Decision P6-F5-002 on responsive table vs card stack; consider landmark roles for console region; keep visuals minimal.
- **Token/Dependency Notes:** Neutral palette; rely on global spacing/typography; focus outlines per accessibility spec.

---

# Phase 7 — Run F19 Template Specifications
The following Phase 7 updates consolidate page template construction for Figma assembly. Use these as the authoritative frames for F20–F21 builds; earlier Phase 6 mappings remain for traceability.

## Global Construction Rules
- All templates must be built with Auto Layout and align to a 12-column grid (desktop) with tablet/mobile degradations captured as separate frames.
- Section blocks stay modular and drag-reorderable; margins follow the global spacing scale and CTA clusters may stack on smaller breakpoints.
- Cross-brand governance hooks reference Atlas-V badges/cards; placeholder blocks remain where future components are planned.

## Home Template
- **Section Order:** Hero (AF.Hero.Umbrella) → Ecosystem/Stack Diagram → Tools/Products grid → Games/Media/Labs teasers → Governance badge block → CTA cluster → Footer.
- **Key Components:** Hero.Primary, Card.ProductGrid, Card.BrandTeaser, Governance.Badge, CTA.Primary/Secondary, Footer.Global.
- **Responsive:** Desktop 3–4 columns; tablet 2 columns; mobile single column with stacked CTAs.

## Atlas-V Template
- **Section Order:** Brand hero → Workflow grid → Governance detail block → Use case cards → CTA segment → Footer.
- **Key Components:** Hero.Brand, Card.Workflow, Governance.Card, Card.UseCase, CTA.Primary, Footer.Global.
- **Responsive:** Desktop 3→2 grids; tablet compresses diagrams; mobile stacks with drawer nav.

## AtlasStudio Template
- **Section Order:** Hero → Playground Shell (Tabs → Panels → Console → Drawer → Ghost Sidecar) → Coaching/FAQ → CTA → Footer.
- **Key Components:** Hero.Brand, AS.PlaygroundShell (tabs, console, drawer, sidecar), CTA.Primary/Secondary, Footer.Global.
- **Responsive:** Desktop full shell; tablet compressed rail; mobile stacked panels with overlay drawer.

## Games Template
- **Section Order:** Hero → Catalog grid → Screenshot gallery → CTA → Footer.
- **Key Components:** Hero.Brand, Card.Game, Gallery.Game, CTA.Primary, Footer.Global.
- **Responsive:** Desktop 3→2 grids; tablet 2 columns; mobile single column with tap-to-advance gallery (carousel vs scroll pending P6-F5-001).

## OIA Template
- **Section Order:** Hero → Species intro panels → Image gallery → CTA → Footer.
- **Key Components:** Hero.Brand, SpeciesIntroPanels, GallerySystem, CTA.Primary, Footer.Global.
- **Responsive:** Desktop 3→2→1 for panels; tablet 2 columns; mobile stacked gallery.

## SKB Template
- **Section Order:** Hero → Playlist cards + audio list → CTA → Footer.
- **Key Components:** Hero.Label, Card.Audio/SKB, AudioList, CTA.Primary/Secondary, Footer.Global.
- **Responsive:** Desktop 3→2 grids; tablet 2 columns; mobile single-column playlists with tap-to-play.

## Media Template
- **Section Order:** Hero → Pillar cards → Articles/episodes list → CTA → Footer.
- **Key Components:** Hero.Brand, MediaPillarCards, MediaArticleCards, CTA.Primary, Footer.Global.
- **Responsive:** Desktop 3→2 grids; tablet 2 columns; mobile single-column lists.

## Labs Template
- **Section Order:** Hero → Experiment cards → Category grids → CTA → Footer.
- **Key Components:** Hero.Brand, LabsExperimentCards, LabsCategoryGrid, CTA.Primary, Footer.Global.
- **Responsive:** Desktop 3→2 grids; tablet 2 columns; mobile accordions for experiments; decision P6-F19-003 tracks layout parity with Media.

## About Template
- **Section Order:** Hero → Timeline/lore placeholder → Mission/values → CTA → Footer.
- **Key Components:** Hero.Label, PlaceholderBlock (timeline/lore), Mission/Values cards, CTA.Primary/Secondary, Footer.Global.
- **Responsive:** Desktop 2-column where applicable; tablet single column; mobile stacked. Placeholder styling awaiting P6-F19-002.

## Admin Template
- **Section Order:** Hero/instruction block → Filters + Freeze toggle → Table OR Cards → Export CTA → Footer/Notes.
- **Key Components:** Admin.Table or Admin.Cards, Admin.Filters, Admin.Freeze, Admin.Export, Governance footnote (optional), CTA.Primary.
- **Responsive:** Desktop/tablet favor tables; mobile uses stacked cards if approved (P6-F5-002). Filters move to overlay; export CTA follows button states; preparing state pending P6-F18-001.

## Template Construction Rules
- All templates require desktop/tablet/mobile frames in Figma with consistent padding and gutter rules.
- CTA treatment remains dual-CTA capable unless P6-F19-001 standardizes heroes to primary-only.
- Placeholder blocks remain in About and Admin until upgraded; cross-brand badges appear consistently per governance decisions.
