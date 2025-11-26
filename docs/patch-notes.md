# Patch Notes

## Current build
- Rebuilt all HTML pages with consistent navigation, balanced lighting, and meta noindex tags.
- Added atlasstudio.html as canonical workstation overview and refreshed studio-tools.html as alias.
- Introduced stack diagram, case studies, and sample galleries on home.
- Updated Atlas-V page with intelligence modes, constraints, FlowSim stub, and lattice diagram.
- Refreshed AtlasStudio pages, gallery, and playground with deterministic task/snapshot logic.
- Expanded OIA and SKB pages with world/label-focused content only.
- Updated CSS tokens, marketing, and workstation styles for brand themes and skeletons.
- Updated JS for nav, atlasv interactions, workstation simulation, and hover effects.
- Refreshed documentation (atlas-canon) with Phase 4F rules.

## 2025-11-25 – Phase 5 audit and polish
- Normalized navigation/footer across all pages with ARIA-controlled mobile toggle, consistent active-state handling, and a pre-launch privacy note.
- Tightened copy tone (removed demo/prototype wording), reaffirmed mission/values, and aligned world/label narratives.
- Added alias-aware nav highlighting for Studio/OIA routes and ensured balanced accent lighting remains subtle.
- Hardened CSS component consistency and added footer note styling; verified brand body classes and noindex meta across pages.

## 2025-11-26 – Phase Controller pass
- Added AtlasForge storyboard chapter section on the home page and ensured brand-neutral pages use the umbrella brand class.
- Updated Games and About shells to adopt the AtlasForge theme tokens for consistent balanced lighting.
- Logged this pass; no behavioral changes beyond visual/navigation alignment.

## 2025-11-27 – Phase Controller accessibility sweep
- Added skip links and main-content anchors across all pages to improve keyboard navigation.
- Introduced shared skip-link styling and aria-current handling for active navigation items.
- Ensured workstation and marketing shells follow consistent landmark and balanced accent behaviors.

## 2025-11-28 – Run #3 – A11y Deep Pass + Interaction Hardening
- Added ARIA tab semantics and keyboard activation for Atlas-V mode/constraint controls with reduced-motion safeguards.
- Hardened global navigation/storyboard interactions with motion-aware fallbacks and mobile drawer polish.
- Announced assistant updates via aria-live in the workstation and recorded the pass.

## 2025-11-29 – Run #4 – Performance + Parallax + Heading/Tab Audit
- Added reduced-motion overrides for transforms and parallax layers to lighten animation cost and disable depth layers on mobile.
- Added reduced-motion guard for FlowSim playback and storyboard observers, and simplified parallax backgrounds for small screens.
- Ensured assistant feed uses aria-live, verified heading/tab order patterns, and documented the optimization pass.

## 2025-11-30 – Run #5 – Global Consistency & Brand Canon Pass
- Normalized nav active detection for root paths and ensured brand classes remain aligned to the correct pages.
- Removed inline spacing from the workstation panels in favor of tokenized utility spacing and added keyboard handling to Atlas-V constraint toggles.
- Refined reduced-motion safeguards for navigation/storyboard behaviors and logged the consistency pass.

## 2025-12-01 – Run #6 – Pre-Launch UI + Semantic QA
- Harmonized typography tokens for headings, reduced button shadow weight using shared shadow tiers, and aligned logo radii to token scales.
- Simplified parallax layers (removing unused mid-layer styles) and kept reduced-motion/mobile guards active for background depth.
- Hardened Atlas-V mode/constraint toggles with presence checks and documented the polish pass.

## 2025-12-02 – Run #7 – Semantic & Structural Integrity Pass
- Elevated hero subheadings to h2 for consistent heading flow across surfaces.
- Adjusted workstation panel headings to h2 for clearer hierarchy and kept snapshots as subheadings.
- Recorded semantic and accessibility refinements; no visual redesigns applied.

## 2025-12-03 – Run #8 – Microcopy, Semantics & HTML Hygiene Pass
- Standardized nav toggle semantics with explicit button types across all pages.
- Verified heading order and brand classes remain consistent, keeping balanced accent lighting intact.
- Logged the microcopy/semantic hygiene sweep ahead of pre-launch review.

## 2025-12-04 – Run #9 – Performance, Assets & Pre-Launch Audit Pass
- Added width/height attributes to navigation logos across all pages to reduce layout shift and keep header sizing consistent.
- Disabled parallax background layers for reduced-motion users, paused skeleton shimmer under reduced motion, and removed an unused logo reference stylesheet.
- Documented performance and asset hygiene updates ahead of launch readiness checks.

## 2025-12-05 – Run #10 – Visual Consistency Sweep + Layout Tightening
- Replaced remaining hardcoded white text with shared text tokens and aligned nav active states to tokenized colors.
- Standardized Atlas-V and workstation controls with explicit button semantics while maintaining balanced lighting.
- Logged token alignment and visual consistency notes for launch readiness.

## 2025-12-06 – Run #11 – Performance + Asset Audit + Integrity Pass
- Added lazy/async decoding to navigation logos across all pages to reduce layout shift without visual changes.
- Confirmed semantic structure and reduced-motion guards; no new visuals or features added.
- Logged minor housekeeping ahead of pre-launch checks.

## 2025-12-07 – Run #12 – Final Pre-Launch Seal Pass
- Added overlay tokens and applied them to overlays, diagrams, and cards for consistent lighting without new visuals.
- Updated Atlas-V diagram colors to brand tokens and set button semantics for mode, constraint, and FlowSim controls.
- Tuned ghost/primary buttons to token-based colors, retained reduced-motion guards, and verified balanced accent lighting.

## 2025-12-08 – Phase 5 – Run #1 – Baseline Visual Uplift
- Introduced elevated neutral tokens (`--surface-850`, `--surface-750`, `--border-strong`) and applied them to hero shells, cards, and panels for stronger readability.
- Refined hero surfaces, navigation chips, and storyboard tiles with higher-contrast gradients aligned to each brand accent.
- Harmonized workstation panels and Atlas-V diagram labeling to improve contrast without adding new motion.
