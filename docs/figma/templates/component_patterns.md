# Component Pattern Guide (Phase 6 — Run F6)

Component patterns extend the Run F2 inventory and Run F3 mappings with variant usage, constraints, responsive expectations, and Figma behavior cues.

## Navigation
- **Top Nav (Desktop):** Global.Nav.Primary; aligns center or right; hover/focus states per interaction spec; collapses to drawer on tablet.
- **Mobile Nav / Drawer:** Global.Nav.Mobile; slide/overlay behavior conceptual only; ensure focus trapping in future builds.

## Heroes
- **AF.HeroUmbrella (Hero.Primary):** Dual CTA variant (Primary + Ghost); supports Atlas-V governance badge.
- **Hero.SubHero:** Used for label pages; optional Tag/Pill; single primary CTA standard.
- **AV.BrandHero / OIA.HeroBlock:** Brand palettes; primary CTA; governance copy inline.
- **AS.Hero:** Cozy tone; paired with playground context; primary + ghost CTAs.

## CTA Buttons
- **Primary/Secondary/Ghost/Footer:** Shared states; stacks vertically on mobile; footer CTAs inherit ghost/primary pairing.
- **Usage Constraint:** Avoid introducing new color tokens; bind to existing token hooks from F1.

## Cards & Grids
- **Cards.Product/Tool:** Standard 3→2→1 grid; includes CTA footer row when needed.
- **Cards.Game:** Supports screenshot thumbnail; ties to PoweredBy.AtlasV microcopy.
- **Cards.Media:** For articles/episodes; may pair with MediaList.
- **Cards.Labs:** Experimental tone; allow badges for category tags.
- **Cards.Audio/SKB:** Audio-first cards; can pair with AudioList.
- **Cards.ConceptVault:** Lore/concept tiles; repurposable for admin stacked view.
- **Variant Constraint:** Keep radii/shadows aligned to token defaults; no bespoke values yet.

## Lists & Galleries
- **ScreenshotGallery (GallerySystem):** Hover tint + selection cues (per interaction spec); mobile behavior pending P6-F5-001.
- **AudioList:** Vertical list; supports inline controls; tap targets follow accessibility spec.
- **MediaList/ArticleList:** Text-forward list; may co-exist with cards.
- **FeatureList:** Bulleted list; paired with SectionHeader.

## Governance & Badges
- **AV.SafetyBlock:** Single-column block; used in Home, Atlas-V, OIA, Admin; badge placement needs consistency (P6-F5-003).
- **Badges/StatusChips/Tags/Pills:** Inline metadata; used in heroes, cards, labs categories; ensure focusable when interactive.

## AtlasStudio Shell
- **AS.PlaygroundShell:** Frame housing tabs, console, and drawer; detachable frames for Figma; mobile stacks console above drawer.
- **AS.TabsStrip:** Tab rail variants (Game/Excel/Policy/Writing/Web); highlight/selected states per interaction spec.
- **AS.GhostConsole:** Faux terminal feed; scroll container guidance; paired with tab selection.
- **AS.TaskDrawer:** Task/workflow preview; minimized state pending P6-F5-004.
- **AS.CoachingSidebar:** Cozy notes and badge chips; stacks under shell on mobile.

## Admin Console
- **ConsoleHybrid:** Decisions table vs card stack; responsive choice pending P6-F5-002; export controls remain PlaceholderBlock.
- **ExportControls Placeholder:** CTA + filter row; inherits CTA patterns.

## Placeholder Blocks
- **Timeline/History:** Used in About; to be replaced with bespoke timeline component.
- **Policy/Export Slots:** Admin/OIA placeholders tied to existing spacing/typography tokens; no new styling.

## Responsive Expectations (Shared)
- Use 12/8/4 column guides; grids degrade 3→2→1; CTA groups stack on mobile.
- Focus styles must remain visible per accessibility spec; hover distinct from focus.
- No new token values introduced in patterns; all visual values reference existing tokens from Run F1.
