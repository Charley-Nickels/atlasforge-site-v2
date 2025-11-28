# Page Layout Blueprints (Phase 6 — Run F4)

Each blueprint aligns with components from Runs F2–F3 and expresses desktop/tablet/mobile expectations for Figma translation. Tone guidance reflects Phase 6 canon.

## Home / Hub (index.html)
- **Brand Tone & Role:** AtlasForge umbrella; governed, welcoming hub.
- **Layout Type:** Hero + stacked content sections with mixed grids.
- **Section Order (Desktop):**
  1) Hero (AF.HeroUmbrella, Global.Hero.Primary)
  2) Stack Diagram (AF.StackDiagram, Global.SectionWrapper)
  3) Case Studies (Global.SectionWrapper, Concept Cards)
  4) Sample Projects Gallery (Screenshot Gallery)
  5) Storyboard (Narrative list)
  6) Ecosystem Flow Tracks (Global.SectionWrapper)
  7) How It Works (two-column info grid)
  8) Audience Fit (grid)
  9) Merch Teaser (Merch Teaser Cards)
  10) Brand Strip (Brand navigation tiles)
  11) Footer (Global.Footer.Base)
- **Visual Density:** Moderate; alternates grid and list blocks.
- **Alignment:** Centered hero then left-aligned section headers with grid content.
- **Special Notes:** Stack diagram and flow tracks act as reusable ecosystem patterns.
- **Tablet Variant:** Hero splits to stacked badge and aside; grids reduce to 2 columns; brand strip tiles wrap; CTA groups stack vertically.
- **Mobile Variant:** Fully stacked; navigation uses Mobile Drawer; galleries become single-column cards; chips wrap with generous spacing; ensure tap targets on hero CTAs and brand strip tiles.

## Atlas-V (atlasv.html)
- **Brand Tone & Role:** Serious, governance-forward project copilot.
- **Layout Type:** Hero + structured informational stack with interactive-looking mode cards.
- **Section Order (Desktop):**
  1) Hero (AV.Hero, Global.Hero.Primary)
  2) Core Responsibilities (cards grid)
  3) Operating Modes (AV.WorkflowDiagram pattern with mode buttons and panels)
  4) Workflow (Phases/Runs grid)
  5) Governance/Guardrails (AV.SafetyBlock)
  6) Lattice Diagram (AV.WorkflowDiagram placeholder)
  7) Footer
- **Visual Density:** Moderate-rich with multiple card grids.
- **Alignment:** Hero split; grids are two-column; constraint list is inline card rail.
- **Special Notes:** Mode buttons should remain legible on smaller viewports; governance copy stays light.
- **Tablet Variant:** Hero stacks image/aside; grids shift to 2 columns; mode rail remains 2-up; constraint list wraps; CTA buttons stack.
- **Mobile Variant:** Single-column flow; mode cards become vertical list; constraint list stacks; hero actions stack; keep spacing for tappable cards.

## AtlasStudio (atlasstudio.html)
- **Brand Tone & Role:** Cozy, supportive workstation concept; mock playground.
- **Layout Type:** Hero + playground shell with multiple conceptual sandboxes.
- **Section Order (Desktop):**
  1) Hero (AS.Hero)
  2) Playground Shell (AS.PlaygroundShell with tabs, console, task drawer)
  3) Day-in-the-Studio primer (copy list)
  4) Tabs Preview (AS.TabsStrip)
  5) Ghost Console / Sidecar (AS.GhostConsole)
  6) Scenario Cards (AS.PlaygroundShell variants)
  7) Sandbox Panels (Concept Vault style)
  8) FlowSim / Guardrail cues
  9) Cross-Brand Workflow notes
  10) Coming Soon banner
  11) Footer CTA and Footer Base
- **Visual Density:** Rich; multiple stacked sandboxes and rails.
- **Alignment:** Hero split; playground shell uses two-column mock; subsequent sections centered with card grids.
- **Special Notes:** Maintain non-functional interactivity cues; sidecar/terminal remains adjacent to task drawer on desktop.
- **Tablet Variant:** Shell collapses to stacked panels (tabs above console); grids drop to 2 columns; CTA groups stack; keep copy short.
- **Mobile Variant:** Single-column; shell sections appear in scroll order (tabs, console, task drawer); hide none but condense spacing; ensure tap targets for tab rail and CTA chips.

## Games (games.html)
- **Brand Tone & Role:** AtlasForge Games label; playful but structured catalog.
- **Layout Type:** Hero + overview + concept grid.
- **Section Order (Desktop):**
  1) Hero
  2) Overview / Label purpose
  3) Concept Vault (Concept Vault Tiles)
  4) Game Catalog Grid (cards)
  5) Footer CTA + Footer
- **Visual Density:** Light-moderate.
- **Alignment:** Hero centered; grids 3-up then 2-up depending on width.
- **Special Notes:** Concept Vault uses cross-brand teaser tags.
- **Tablet Variant:** Grids become 2 columns; CTA stack; maintain breathing room around Concept Vault tags.
- **Mobile Variant:** Single-column list; navigation uses drawer; concept tiles stack with clear dividers.

## Octopus in Action (oia.html)
- **Brand Tone & Role:** Playful harbor sim; cozy + professional scaffolding.
- **Layout Type:** Hero + stacked cards and gallery.
- **Section Order (Desktop):**
  1) Hero (OIA.HeroBlock)
  2) World Intro highlights
  3) Species Panels (Case grid)
  4) Screenshot Gallery
  5) Status / Flow Tracks
  6) Designer Notes
  7) Footer
- **Visual Density:** Moderate.
- **Alignment:** Hero split; grids 2–3 columns; gallery uses 4-up cards.
- **Special Notes:** Always surface Powered by Atlas-V and Audio by SKB tags.
- **Tablet Variant:** Hero stacks; grids become 2 columns; gallery 2-up; status tracks stack with spacing.
- **Mobile Variant:** Single-column; CTA buttons stack; gallery cards full-width; keep status tracks separated for readability.

## SKB (skb.html)
- **Brand Tone & Role:** Audio label; cozy release cadence with cross-brand notes.
- **Layout Type:** Hero + track lists + playlists.
- **Section Order (Desktop):**
  1) Hero
  2) Track Cards list
  3) OIA Links / Cross-brand callouts
  4) Playlist Lists
  5) Footer CTA + Footer
- **Visual Density:** Light-moderate.
- **Alignment:** Hero centered; lists left-aligned; playlists in two-column list.
- **Special Notes:** Keep “Audio by SKB” anchor visible.
- **Tablet Variant:** Lists remain but use 2-column where available; CTA stack; OIA callouts inline with reduced padding.
- **Mobile Variant:** Single-column cards; playlist entries stacked; maintain generous spacing for tap targets.

## Media (media.html)
- **Brand Tone & Role:** Minimal news/updates; neutral neutrals.
- **Layout Type:** Hero + pillar cards + article/episode cards.
- **Section Order (Desktop):**
  1) Hero
  2) Media Pillars (cards)
  3) Articles (grid/list)
  4) Episodes (grid/list)
  5) Footer CTA + Footer
- **Visual Density:** Light.
- **Alignment:** Centered headers; cards in 3-up then 2-up grids.
- **Special Notes:** Keep tone informative and concise.
- **Tablet Variant:** Grids shift to 2 columns; CTA stack; maintain equal gutters.
- **Mobile Variant:** Single-column; nav drawer; reduce spacing between card metadata lines.

## Labs (labs.html)
- **Brand Tone & Role:** Experimental; exploratory but governed.
- **Layout Type:** Hero + experiment cards + category grids.
- **Section Order (Desktop):**
  1) Hero
  2) Experiment Cards
  3) Category Grid
  4) Cross-Brand Links
  5) Footer CTA + Footer
- **Visual Density:** Light-moderate with placeholder cards.
- **Alignment:** Centered headers; grids 3-up -> 2-up.
- **Special Notes:** Flag experimental status; avoid suggesting production readiness.
- **Tablet Variant:** Grids 2-up; CTA stack; cross-brand links align vertically.
- **Mobile Variant:** Single-column; keep experiment tags prominent; generous breathing room.

## About (about.html)
- **Brand Tone & Role:** Informational, transparent overview; neutral AtlasForge voice.
- **Layout Type:** Hero + informational grids.
- **Section Order (Desktop):**
  1) Hero
  2) Umbrella Overview cards
  3) Mission & Values storyboard
  4) Navigation Guide cards
  5) Goals cards
  6) Footer
- **Visual Density:** Light-moderate.
- **Alignment:** Centered hero; grids 3-up; storyboard uses vertical list.
- **Special Notes:** Keep copy concise; hero badge minimal.
- **Tablet Variant:** Grids 2-up; storyboard keeps vertical spacing; CTA stack if present.
- **Mobile Variant:** Single-column; badge/heading stacked; cards full-width with comfortable spacing.

## Admin Decisions (admin/atlas-decisions.html)
- **Brand Tone & Role:** Internal console reference; utilitarian.
- **Layout Type:** Card-based dashboard.
- **Section Order (Desktop):**
  1) Controls Panel (filters/actions)
  2) Admin Meta (status/info)
  3) Special Tracks (notices)
  4) Export Card
- **Visual Density:** Moderate but compact.
- **Alignment:** Left-aligned cards in single column.
- **Special Notes:** Keep console aesthetic; no public-branding flourish.
- **Tablet Variant:** Same single column; ensure buttons wrap; filters remain accessible.
- **Mobile Variant:** Single-column with increased padding; tap targets emphasized; tables scroll if present.

## Secondary Templates
- **Blog (blog.html) & Studio Tools (studio-tools.html):** Apply Home-derived stack with hero + list/grid content; mobile stacks single-column; keep navigation consistent.
- **Octopus.html / Octopus extras:** Treat as Labs/World variants if used; stack sections with gallery/list patterns.
