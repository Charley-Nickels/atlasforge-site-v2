# Run F0 Report — Figma Project Setup (Schematic Only)

## Figma Folder Structure
- 00_Global_Tokens
- 01_Brand_Systems
  - AtlasForge
  - Atlas-V
  - AtlasStudio
  - Games
  - OIA
  - SKB
  - Media
  - Labs
  - Merch
  - Docs/Academy
- 02_Component_Library
- 03_Page_Templates
- 04_Interactions
- 05_Prototypes
- 06_Exports
- 07_Docs

## Global Token Categories (Schemas Only)
- **Colors**: base primitives, semantic roles (text, backgrounds, surfaces, strokes), state overlays, accessibility contrasts, light/dark parity placeholders.
- **Typography**: font families, weights, sizes, line-heights, letter-spacing, paragraph spacing, responsive ramps, usage mappings to headings/body/utility.
- **Spacing**: scale tiers, object padding, section gutters, vertical rhythm steps, density modes, responsive adjustments.
- **Radii**: corner scales, shape categories (control, card, container), sharp-to-pill ladder, platform parity notes.
- **Shadows**: elevation levels, focus/active outlines, ambient vs. direct layers, motion-consistent blur/distance axes.
- **Motion Rules**: duration tiers, easing curves, interaction states (enter/exit/transform), reduced-motion fallbacks.
- **Breakpoints**: named sizes mapped to responsive ranges, tokenized widths, container constraints.
- **Layout Grid Tokens**: column counts, gutters, margins, fixed vs. fluid grids, density variants for views and templates.
- **Surface Tokens**: base surfaces, layered depth surfaces, scrim/overlay placeholders, glass/frosted optional hooks (disabled until approved).
- **Brand Palettes**: mapping hooks per brand (AtlasForge, Atlas-V, AtlasStudio, Games, OIA, SKB, Media, Labs, Merch, Docs/Academy) with roles for primary/secondary/accent/neutral; values pending brand approval.

## Component Library Skeleton
- CTA Buttons: Primary, Secondary, Ghost (state-ready: default, hover, focus, active, disabled).
- Navigation: Desktop, Mobile (global nav shell, dropdown hooks, utility links, account CTA).
- Footer: 3-tier minimal (utility links, legal, social/media placeholders).
- Hero Blocks: Primary, Subhero (slots for headline, subcopy, CTA, media container, background treatment hook).
- Cards: Tools, Games, Media, Labs, Audio (title, metadata, action slot, thumbnail/media slot, tag rail hook).
- Section Headers: title, eyebrow, description, CTA slot, alignment variants.
- Containers / Wrappers: content width locks, background surface hooks, padding modes, grid variants.
- Galleries: Screenshots, Audio (carousel/list toggles, captions, controls hooks).
- Concept Vault Panels: multi-column info blocks with tag rails and action slots.
- Tabs (AtlasStudio Preview): horizontal/vertical variants, icon/text combos, content panel linkage.
- Form Elements: input, textarea, select, checkbox, radio, toggle, slider, validation messaging hooks.
- Badge Chips: status/metadata chips with icon/text and dismissible option.

## Figma Page Templates (Per Core Page)
Each template lists: section order, expected components, tone, system dependencies.

- **Home (Hub-first)**: hero → featured tools/games cards → concept vault → media/gallery → labs preview → CTA rail → footer. Components: hero blocks, cards (tools/games/media/labs), galleries, section headers, CTA buttons, containers, footer, navigation. Tone: hub/overview, neutral platform-first. Dependencies: global tokens, navigation/footer, responsive grids.
- **AtlasForge**: hero → value props → product capabilities cards → concept vault panels → gallery (screens) → CTA rail → footer. Tone: product flagship, confident utility. Dependencies: AtlasForge brand palette hook, CTA buttons, cards, galleries, grids.
- **Atlas-V**: hero → cinematic storytelling strip → capabilities cards → media gallery (video/audio placeholders) → testimonial/quote block → CTA → footer. Tone: cinematic/immersive without visuals. Dependencies: Atlas-V brand palette hook, cards, galleries, section headers, navigation/footer.
- **AtlasStudio**: hero → IDE workflow tabs (AtlasStudio Preview tabs) → feature cards → audio/gallery → form CTA (waitlist/contact) → footer. Tone: builder/pro craftsmanship. Dependencies: AtlasStudio brand palette hook, tabs, cards, form elements, galleries.
- **Games Label**: hero → game lineup cards → roadmap/patch notes slice → media gallery → community CTA → footer. Tone: playful yet premium. Dependencies: Games brand palette hook, cards (games), galleries, section headers.
- **OIA (flagship)**: hero → mission/impact panels → toolchain cards → media gallery → CTA rail → footer. Tone: flagship authoritative. Dependencies: OIA brand palette hook, concept vault panels, cards, galleries.
- **SKB**: hero → knowledge base highlights → category tabs → cards list → CTA → footer. Tone: instructional/clarity-first. Dependencies: SKB brand palette hook, tabs, cards, section headers.
- **Media**: hero → featured media cards → galleries (audio/video) → category filters (tabs/chips) → CTA → footer. Tone: editorial/publishing. Dependencies: Media brand palette hook, galleries, badge chips, tabs, cards.
- **Labs**: hero → experiment highlights → cards (labs) → concept vault panels → signup CTA → footer. Tone: experimental/forward-looking. Dependencies: Labs brand palette hook, cards, concept panels, CTA buttons.
- **About**: hero → leadership/mission panels → timeline/metrics blocks → media/gallery → CTA → footer. Tone: institutional/trust-building. Dependencies: neutral/global palette, section headers, cards, galleries.
- **Admin (internal reference)**: hero/status strip → navigation shell → data table placeholder → form elements → notification toasts → footer. Tone: utilitarian/internal. Dependencies: admin-neutral tokens, form elements, navigation, footer, containers.

## Responsive Rule Schema (Naming & Placeholders)
- **Small (mobile)**: width range 320–599px; breakpoint token `bp-small`; layout constraints single-column priority, max grid 4 columns optional; edge padding 16–20px; components favor stacked layout and full-width CTA buttons.
- **Medium (tablet)**: width range 600–1023px; breakpoint token `bp-medium`; layout constraints 6–12 column grids, shared gutters; edge padding 24–32px; components allow split layouts and dual CTAs side-by-side.
- **Large (desktop)**: width range 1024px+; breakpoint token `bp-large`; layout constraints 12+ column grids, centered content with max-width tokens; edge padding 32–48px; components use multi-column card grids and expanded navigation.
- **Layout Notes**: breakpoints bind to layout grid tokens; containers/wrappers map to responsive padding modes; motion rules adopt reduced-motion at user setting; accessibility checks apply per breakpoint for touch vs. pointer targets.

## Phase 6 Decision Hooks
- **DEC-F0-001 (Tokens/Brand Palettes)**: Need confirmation on whether each brand requires unique accent neutrals or shared neutrals. Status: Pending council input.
- **DEC-F0-002 (Motion/Reduced Mode)**: Decide default behavior for motion reduction (per-system setting vs. toggle). Status: Pending council input.
- **DEC-F0-003 (Admin Template Tokens)**: Determine if admin uses global neutral palette or dedicated admin token set. Status: Pending council input.
- **DEC-F0-004 (Surface Tokens/Glass Option)**: Clarify whether glass/frosted surfaces are allowed; currently disabled. Status: Pending council input.
- **DEC-F0-005 (Navigation Depth)**: Confirm max navigation depth for desktop and mobile (e.g., single dropdown vs. mega menu). Status: Pending council input.

## Notes
- No visual rendering or token values included; this document establishes naming and structural scaffolding only.
