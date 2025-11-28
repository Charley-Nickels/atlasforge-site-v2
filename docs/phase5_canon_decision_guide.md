# AtlasForge Phase 5 — Canon Decision Guide (Preflight)

## 1. Purpose of this Guide
This guide is for the Master Architect to review before using `/admin/atlas-decisions.html`. The console reads `data/decision_blocks.json` and maps to `docs/atlasforge_canon_index.md`. This document explains what each block controls across the site and canon so choices in the console are intentional. It is a map of decisions, not the final canon.

## 2. How the Decision Engine Connects to Phase 5
Phase 5 locks brand canon (roles, tone, visibility), navigation and homepage structure, IP visibility (OIA, Neighborhood Watch, others), governance transparency, and positioning for AtlasStudio and Atlas-V. The console renders the structured blocks from `data/decision_blocks.json`, and `docs/atlasforge_canon_index.md` describes how those decisions feed the future `docs/atlasforge_canon.md`. AtlasStudio Enterprise (see `docs/AtlasStudio_Enterprise.md`) defines a decision-engine pattern for Microsoft 365-style workflows; Phase 5 canon choices influence how it is described and surfaced on marketing pages but do not add backend features yet.

## 3. Block-by-Block Decision Overview
Below follows each block in the order defined in `data/decision_blocks.json`, with its intent and primary areas affected.

### 3.1 Core Pillars Visibility
- **Block ID:** core_pillars_visibility — items: 8
- **Purpose:** Sets how AtlasForge pillars (umbrella, Games, Media, Studio/Tools, Atlas-V/Engine, Merch, Labs, Contact) rank across hero, nav, sections, and footer.
- **Pages/Areas Affected:** Global navigation shell, homepage hero and pillar sections, footer emphasis, any “What we build” summaries.

### 3.2 Brand Roles and Importance
- **Block ID:** brand_roles_and_importance — items: 14
- **Purpose:** Defines ecosystem roles for AtlasForge umbrella, Atlas-V, AtlasStudio, Atlas Engine, Media, Games, SKB/Audio, VoiceForge, Hypercasual Forge, Template Factory, MerchForge, Narrative Labs, Documentary Labs, and Media labeling.
- **Pages/Areas Affected:** About/Studio copy, Atlas-V page framing, AtlasStudio positioning, sub-brand mentions across product and media hubs.

### 3.3 Brand Narrative Tone
- **Block ID:** brand_narrative_tone — items: 10
- **Purpose:** Chooses public tone/voice per brand and key IP (AtlasForge, Atlas-V, AtlasStudio, Octopus in Action, AtlasForge Media) ranging from playful to technical or polished.
- **Pages/Areas Affected:** Marketing copy tone on homepage, Atlas-V, AtlasStudio, Media, and IP highlights.

### 3.4 Atlas-V Behavior and Messaging
- **Block ID:** atlasv_behavior_and_messaging — items: 12
- **Purpose:** Frames Atlas-V identity (copilot/engine/governance), governance visibility, phase/run explanation depth, CTA emphasis, and whether safety/decision engine mechanics surface publicly.
- **Pages/Areas Affected:** atlasv.html, homepage Atlas-V sections, governance blurbs, any Atlas-V Lite mentions.

### 3.5 AtlasStudio Surface and Scope
- **Block ID:** atlasstudio_surface_and_scope — items: 12
- **Purpose:** Determines AtlasStudio visibility level, product vs prototype framing, UI detail/mocks allowance, CTA strength, and references to tabs (Game/Excel/Policy/Writing/Web).
- **Pages/Areas Affected:** atlasstudio.html, homepage AtlasStudio block, nav/footer entries, studio overview copy.

### 3.6 Website Structure and Navigation
- **Block ID:** website_structure_and_nav — items: 18
- **Purpose:** Controls which pages are present and how they appear (home, Atlas-V, AtlasStudio, OIA, SKB, About/Studio, Media/Ecosystem hubs, roadmap/governance pages), plus grouping under Ecosystem or similar nav hubs.
- **Pages/Areas Affected:** Global navigation menus, footer links, page existence/visibility (atlasv.html, atlasstudio.html, oia.html, skb.html, about.html, roadmap/governance slots).

### 3.7 Homepage Content Blocks
- **Block ID:** homepage_content_blocks — items: 15
- **Purpose:** Selects which homepage sections exist and their prominence (AtlasForge overview, Atlas-V how-it-works, AtlasStudio teaser, OIA highlight, Labs/Under Construction, governance blurb, contact/work-with-us, and other featured blocks).
- **Pages/Areas Affected:** index.html section ordering and inclusion, footer mentions for lower-priority blocks.

### 3.8 Subsidiaries and Lines
- **Block ID:** subsidiaries_and_lines — items: 14
- **Purpose:** Approves or backlogs sub-labels like Hypercasual Forge, Template Factory, MerchForge, Narrative Labs, Documentary Labs, Labs variants, and SKB/VoiceForge positioning.
- **Pages/Areas Affected:** Sub-brand references across homepage, media sections, about/studio pages, and any ecosystem lists.

### 3.9 Game IP Status
- **Block ID:** game_ip_status — items: 14
- **Purpose:** Sets visibility/status for Octopus in Action, Neighborhood Watch, and other named IPs; defines how OIA appears (hero/section/nav/footer) and whether Neighborhood Watch is mentioned.
- **Pages/Areas Affected:** oia.html, games.html, homepage game highlights, navigation links, roadmap mentions.

### 3.10 Media Lines and Focus
- **Block ID:** media_lines_and_focus — items: 12
- **Purpose:** Approves media lanes (true crime/mystery, educational/STEM, commentary/essays, devlogs/behind-the-scenes), decides grouping under AtlasForge Media versus sub-labels, cadence expectations, and safety/merch linkage.
- **Pages/Areas Affected:** Media sections on homepage, media/press hub pages, about/studio storytelling, footer references.

### 3.11 Governance and Public Boundaries
- **Block ID:** governance_and_public_boundaries — items: 12
- **Purpose:** Sets governance/safety transparency level, presence of governance page/sections, whether decision engine mechanics are referenced, and how constraints/guardrails are acknowledged.
- **Pages/Areas Affected:** Governance/Safety page or sections, Atlas-V messaging, footer acknowledgments, any roadmap or transparency statements.

### 3.12 Collaboration and Contact Policy
- **Block ID:** collaboration_and_contact_policy — items: 10
- **Purpose:** Configures contact/hiring/partnership touchpoints, inquiry filters, community channels, privacy positioning, and whether to surface policies prominently or quietly.
- **Pages/Areas Affected:** Contact/work-with-us CTAs on homepage and footer, about/studio contact language, potential forms or email callouts.

## 4. Coverage Check & Potential Gaps
- All block IDs in `data/decision_blocks.json` appear in `docs/atlasforge_canon_index.md`; the index includes one extra heading labeled “Next Step” for navigation purposes.
- All 151 item IDs in `data/decision_blocks.json` are represented in the index; no missing or extra item IDs detected.
- Some descriptions reference future states (e.g., hard launch later for AtlasStudio), which are intentional options rather than gaps.

## 5. AtlasStudio & Enterprise Touchpoints
Canon choices will set how prominently AtlasStudio appears (hero, secondary, nav) and whether it is framed as prototype, future product, or active product. The same decisions affect mentions of Atlas-V Lite/Engine in AtlasStudio context. AtlasStudio Enterprise, defined in `docs/AtlasStudio_Enterprise.md`, is a decision-engine pattern for Microsoft 365-style workflows; Phase 5 choices govern how and where it is described on marketing pages without exposing internal details.

## 6. Suggested Mindset When Making Decisions
- Are we presenting AtlasForge as a focused studio or a broad ecosystem with multiple pillars?
- Which offerings must be visible now versus kept background or internal?
- What governance transparency level feels safe and appropriate for public pages?
- How should Atlas-V and AtlasStudio share emphasis compared to game/IP highlights like Octopus in Action?
- Should concept-stage IPs remain labeled as concepts rather than active projects?

## 7. Next Steps After Decisions
1. Use the admin console to select options per block.
2. Export JSON from the console (copy or download).
3. Send the JSON to the Master Architect (this chat).
4. The Canon Resolver will read the export, generate `docs/atlasforge_canon.md`, produce the Phase 5 rewrite plan, and drive content updates across the site.
5. This guide remains the reference while making selections; the export plus resolver produces the final canon text.
