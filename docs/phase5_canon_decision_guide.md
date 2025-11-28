# AtlasForge Phase 5 — Canon Decision Guide (Preflight)

## 1. Purpose of this Guide
This guide is for the Master Architect to review before using `/admin/atlas-decisions.html`. The console renders blocks from `data/decision_blocks.json` and maps them via `docs/atlasforge_canon_index.md`; this document explains what each block controls so selections are intentional. It is a preflight map of decisions, not the final canon, and the JSON export from the console is the authoritative input for Phase 5 canon lock.

## 2. How to Use This Guide
- Treat each dropdown as a dial for **visibility** (how loud), **role/importance** (how central), **maturity/status** (how real), **transparency** (how public the guardrails are), and **contact openness** (how reachable you are).
- Read the block summaries below to understand which site areas each dial touches (home, nav, product pages, governance, contact). 
- While deciding, ask: how public should this be right now, how core is it to the story, and how far along is it? The admin console simply records those dial positions for export.

## 3. Block-by-Block Decision Overview
Each block below follows the order in `data/decision_blocks.json` and uses multi-level dropdowns instead of binary toggles.

### 3.1 Core Pillars Visibility
- **Block ID:** core_pillars_visibility — items: 8
- **Dial:** Visibility (hidden → hero)
- **Purpose:** Ranks AtlasForge pillars (umbrella, Games, Media, Studio/Tools, Atlas-V/Engine, Merch, Labs, Contact) across hero, nav, sections, and footer.
- **Pages/Areas Affected:** Global navigation shell, homepage hero and pillar sections, footer emphasis, any “What we build” summaries.

### 3.2 Brand Roles and Importance
- **Block ID:** brand_roles_and_importance — items: 14
- **Dial:** Role/importance (internal-only → primary driver) with maturity shades where relevant.
- **Purpose:** Defines ecosystem roles for AtlasForge umbrella, Atlas-V, AtlasStudio, Atlas Engine, Media, Games, SKB/Audio, VoiceForge, Hypercasual Forge, Template Factory, MerchForge, Narrative Labs, Documentary Labs, and Media labeling.
- **Pages/Areas Affected:** About/Studio copy, Atlas-V page framing, AtlasStudio positioning, sub-brand mentions across product and media hubs.

### 3.3 Brand Narrative Tone
- **Block ID:** brand_narrative_tone — items: 10
- **Dial:** Tone/voice (playful, grounded, technical, experimental, reflective variants tailored per brand/IP).
- **Purpose:** Chooses public tone/voice per brand and key IP (AtlasForge, Atlas-V, AtlasStudio, Octopus in Action, AtlasForge Media).
- **Pages/Areas Affected:** Marketing copy tone on homepage, Atlas-V, AtlasStudio, Media, and IP highlights.

### 3.4 Atlas-V Behavior and Messaging
- **Block ID:** atlasv_behavior_and_messaging — items: 12
- **Dial:** Visibility + role framing (quiet utility → headline engine) and transparency depth for governance/loops.
- **Purpose:** Frames Atlas-V identity, governance and loop visibility, explanation depth, CTA intensity, and decision-engine references.
- **Pages/Areas Affected:** atlasv.html, homepage Atlas-V sections, governance blurbs, any Atlas-V Lite mentions.

### 3.5 AtlasStudio Surface and Scope
- **Block ID:** atlasstudio_surface_and_scope — items: 12
- **Dial:** Visibility/prominence and maturity (prototype → active product) with detail depth for UI/mocks and CTAs.
- **Purpose:** Determines AtlasStudio visibility level, product vs prototype framing, depth of UI/mocks, CTA strength, and tab references.
- **Pages/Areas Affected:** atlasstudio.html, homepage AtlasStudio block, nav/footer entries, studio overview copy.

### 3.6 Website Structure and Navigation
- **Block ID:** website_structure_and_nav — items: 18
- **Dial:** Visibility placement (hidden/footer → primary nav with hubs) per page plus grouping choices.
- **Purpose:** Controls which pages are present and how they appear (home, Atlas-V, AtlasStudio, OIA, SKB, About/Studio, Media/Ecosystem hubs, roadmap/governance pages) including hub grouping under Ecosystem.
- **Pages/Areas Affected:** Global navigation menus, footer links, page existence/visibility (atlasv.html, atlasstudio.html, oia.html, skb.html, about.html, roadmap/governance slots).

### 3.7 Homepage Content Blocks
- **Block ID:** homepage_content_blocks — items: 15
- **Dial:** Visibility (hidden → hero-level placement) for each homepage section.
- **Purpose:** Selects which homepage sections exist and their prominence (AtlasForge overview, Atlas-V how-it-works, AtlasStudio teaser, OIA highlight, Labs/Under Construction, governance blurb, contact/work-with-us, and other featured blocks).
- **Pages/Areas Affected:** index.html section ordering and inclusion, footer mentions for lower-priority blocks.

### 3.8 Subsidiaries and Lines
- **Block ID:** subsidiaries_and_lines — items: 14
- **Dial:** Maturity/visibility blend (internal-only → fully branded line → legacy) per sub-label.
- **Purpose:** Approves or backlogs sub-labels like Hypercasual Forge, Template Factory, MerchForge, Narrative Labs, Documentary Labs, Labs variants, and SKB/VoiceForge positioning.
- **Pages/Areas Affected:** Sub-brand references across homepage, media sections, about/studio pages, and any ecosystem lists.

### 3.9 Game IP Status
- **Block ID:** game_ip_status — items: 14
- **Dial:** Status/visibility (idea → concept → in development → live/hero) for each IP and its site prominence.
- **Purpose:** Sets visibility/status for Octopus in Action, Neighborhood Watch, and other named IPs; defines how OIA appears (hero/section/nav/footer) and whether Neighborhood Watch is mentioned.
- **Pages/Areas Affected:** oia.html, games.html, homepage game highlights, navigation links, roadmap mentions.

### 3.10 Media Lines and Focus
- **Block ID:** media_lines_and_focus — items: 12
- **Dial:** Maturity/visibility (internal-only → future lane → active lane → central lane) and grouping under AtlasForge Media vs sub-labels.
- **Purpose:** Approves media lanes (true crime/mystery, educational/STEM, commentary/essays, devlogs/behind-the-scenes), cadence expectations, safety/merch linkage.
- **Pages/Areas Affected:** Media sections on homepage, media/press hub pages, about/studio storytelling, footer references.

### 3.11 Governance and Public Boundaries
- **Block ID:** governance_and_public_boundaries — items: 12
- **Dial:** Transparency (internal-only → light summary → standard page → deep transparency) with visibility of governance/safety content.
- **Purpose:** Sets governance/safety transparency level, presence of governance page/sections, decision-engine references, and guardrail acknowledgments.
- **Pages/Areas Affected:** Governance/Safety page or sections, Atlas-V messaging, footer acknowledgments, any roadmap or transparency statements.

### 3.12 Collaboration and Contact Policy
- **Block ID:** collaboration_and_contact_policy — items: 10
- **Dial:** Contact openness (no CTA → case-by-case → selective filters → open with filters → actively seeking) plus related touchpoints.
- **Purpose:** Configures contact/hiring/partnership touchpoints, inquiry filters, community channels, privacy positioning, and CTA prominence.
- **Pages/Areas Affected:** Contact/work-with-us CTAs on homepage and footer, about/studio contact language, potential forms or email callouts.

## 4. Coverage Check & Potential Gaps
- All block and item IDs in `data/decision_blocks.json` are represented in `docs/atlasforge_canon_index.md`; no conflict markers remain.
- Descriptions that reference future states are intentional option contexts rather than missing content.

## 5. AtlasStudio & Enterprise Touchpoints
Canon choices set how prominently AtlasStudio appears (hero, secondary, nav) and whether it is framed as prototype, future product, or active product. The same decisions affect mentions of Atlas-V Lite/Engine in AtlasStudio context. AtlasStudio Enterprise, defined in `docs/AtlasStudio_Enterprise.md`, is a decision-engine pattern for Microsoft 365-style workflows; Phase 5 choices govern how and where it is described on marketing pages without exposing internal details.

## 6. Suggested Mindset When Making Decisions
- Are we presenting AtlasForge as a focused studio or a broad ecosystem with multiple pillars?
- Which offerings must be visible now versus kept background or internal?
- What governance transparency level feels safe and appropriate for public pages?
- How should Atlas-V and AtlasStudio share emphasis compared to game/IP highlights like Octopus in Action?
- Should concept-stage IPs remain labeled as concepts rather than active projects?
- Each dropdown is a dial for visibility, role/importance, maturity/status, transparency, or contact openness; set the intensity to match what should be public today versus staged for later.

## 7. After You Export JSON
1. Use the admin console to select options per block.
2. Export JSON from the console (copy or download). The export is the authoritative input for canon lock.
3. Send the JSON to the Master Architect (this chat).
4. The Canon Resolver will read the export, generate `docs/atlasforge_canon.md`, produce the Phase 5 rewrite plan, and drive content updates across the site.
5. This guide remains the reference while making selections; the export plus resolver produces the final canon text.
