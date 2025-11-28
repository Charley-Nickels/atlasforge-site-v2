# Phase 7 Run Plan — Figma-First, POC-Second

Phase 7 is split into two parts: **Figma System (F12–F19)** and **POC Implementation (F20+)**. Runs F12–F19 establish the design system in Figma; F20+ uses the published library to build visual POCs.

## Figma System Runs (F12–F19)
- **F12 — Figma Architecture Setup (this run)**
  - Scope: Team/project/file/page structure, naming conventions, token-to-style mapping rules.
  - Output: Repo documentation only; report in console code block.
  - Constraints: No HTML/CSS/JS or visual changes.

- **F13 — Tokens → Styles**
  - Scope: Translate Phase 6 tokens into Figma color/text/effect styles; document spacing/breakpoint guidance.
  - Output: Figma styles + repo docs; no visual changes in repo.
  - Constraints: Must align with Phase 6 token canon; accessibility checks noted.

- **F14 — Core Global Components**
  - Scope: Nav, footer, heroes, CTAs, section headers/wrappers, badges, tags, galleries, audio lists baseline variants.
  - Output: Figma components + repo docs; no site visuals altered.
  - Constraints: Use published styles; maintain state variants (default/hover/focus/pressed/disabled/selected where relevant).

- **F15 — Card Families & Section Wrappers**
  - Scope: Product/game/media/labs/audio/SKB/concept vault cards; wrappers/containers; grid/list patterns.
  - Output: Figma components + documentation; no repo visual changes.
  - Constraints: Responsive auto-layout variants (desktop/tablet/mobile) reflecting 3→2→1 or 2→1 rules.

- **F16 — Advanced Systems**
  - Scope: Galleries with featured frames, audio systems, governance badges/modules, accordions/list blocks, placeholder widgets.
  - Output: Figma advanced components + docs.
  - Constraints: Prototype-ready interaction states consistent with state matrix.

- **F17 — AtlasStudio Components (Playground Shell)**
  - Scope: Tab rail, console viewport, task drawer, ghost sidecar, shell frames; playground master component.
  - Output: Figma components + docs; align with AtlasStudio wireframes and interaction blueprints.
  - Constraints: Keep pseudo-interaction fidelity within approved decision hooks.

- **F18 — Admin Console Components**
  - Scope: Responsive table + stacked card variants, filters, freeze toggle, export controls.
  - Output: Figma components + docs; no repo visual changes.
  - Constraints: Reflect pending decisions on table vs cards, export states.

- **F19 — Page Templates**
  - Scope: Build Home, Atlas-V, AtlasStudio, Games, OIA, SKB, Media, Labs, About, Admin templates using library components.
  - Output: Figma page templates + docs; no repo visual changes.
  - Constraints: Apply breakpoint variants and cross-brand governance hooks; respect section order from wireframes.

## POC Implementation Runs (F20+)
- **F20+ — POC Builds (AtlasStudio, Atlas-V, Atlas Engine, AtlasForge umbrella)**
  - Scope: Assemble visual POCs using published components/styles; simulate interactions per blueprints and flow maps.
  - Output: Figma prototypes and, when authorized, repo-aligned documentation or static assets; code changes only when allowed in later phases.
  - Constraints: POC fidelity stays within approved decisions; no deviation from design system tokens/styles.

## Delivery Rules
- Maintain Figma as the primary source of visual truth; repo updates lag until Phase 8 engineering.
- Each run documents outputs in repo markdown (except run reports that are console-only when specified) and keeps site visuals unchanged until explicitly authorized.
