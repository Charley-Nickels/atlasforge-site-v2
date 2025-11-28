# AtlasForge Phase 5 — Canon Decision Guide (Preflight)

## 1. Purpose of this Guide
This guide is for the Master Architect to review before using `/admin/atlas-decisions.html`. The console reads `data/decision_blocks.json` and maps to `docs/atlasforge_canon_index.md`. Each item is phrased as a canon-expansion question that blends organizational signals (brand roles, nav prominence, CTAs) with in-universe stakes (how the AtlasForge story is told). This document explains what each block controls across the site and canon so choices in the console are intentional. It is a map of decisions, not the final canon.

## 2. How the Decision Engine Connects to Phase 5
Phase 5 locks brand canon (roles, tone, visibility), navigation and homepage structure, IP visibility (OIA, Neighborhood Watch, others), governance transparency, and positioning for AtlasStudio and Atlas-V. The console renders the structured blocks from `data/decision_blocks.json`, and `docs/atlasforge_canon_index.md` describes how those decisions feed the future `docs/atlasforge_canon.md`. Each dial is written to merge world lore (“how it exists in the AtlasForge universe”) with public-facing expression (“how it shows up on pages”). AtlasStudio Enterprise (see `docs/AtlasStudio_Enterprise.md`) defines a decision-engine pattern for Microsoft 365-style workflows; Phase 5 canon choices influence how it is described and surfaced on marketing pages but do not add backend features yet.

## 3. Block-by-Block Decision Overview
Below follows each block in the order defined in `data/decision_blocks.json`, with its intent and primary areas affected.

### 3.1 Core Pillars Visibility
- **Block ID:** core_pillars_visibility — items: 8
- **Dial:** Visibility runs from **HiddenInternal → BackgroundMention → FooterOnly → MinorSection → MajorSection → Hero** to set how each pillar shows up.
- **Questions Cover:** How each pillar (AtlasForge umbrella, Games, Media, Studio/Tools, Atlas-V/Engine, Merch, Labs, Contact) is canonized in-world and where it appears (hidden, footer, sections, hero) across site surfaces.
- **Pages/Areas Affected:** Global navigation shell, homepage hero and pillar sections, footer emphasis, any “What we build” summaries.

### 3.2 Brand Roles and Importance
- **Block ID:** brand_roles_and_importance — items: 14
- **Dial:** Role runs from **NotInPublicCanon → BackgroundTag → SupportingBrand → MajorBrand → FlagshipBrand** to set how serious and visible each label is.
- **Questions Cover:** How official each label (AtlasForge, Atlas-V, AtlasStudio, Atlas Engine, Media, Games, SKB/VoiceForge/other lines) is inside the universe and how boldly it is credited on the site.
- **Pages/Areas Affected:** About/Studio copy, Atlas-V page framing, AtlasStudio positioning, sub-brand mentions across product and media hubs.

### 3.3 Brand Narrative Tone
- **Block ID:** brand_narrative_tone — items: 10
- **Dial:** Tone runs from **NeutralPractical → WarmInviting → PlayfulExperimental → BoldDistinctive → DeepLoreHeavy** for each brand/IP voice.
- **Questions Cover:** How each brand or IP speaks in-world and to visitors—whether pragmatic, welcoming, playful, bold, or lore-forward—and how that voice informs page copy and UI cues.
- **Pages/Areas Affected:** Marketing copy tone on homepage, Atlas-V, AtlasStudio, Media, and IP highlights.

### 3.4 Atlas-V Behavior and Messaging
- **Block ID:** atlasv_behavior_and_messaging — items: 12
- **Dials:**
  - Messaging depth uses **TaglineOnly → ShortPitch → DetailedSection → DeepTechnicalAppendix** for how much detail is shown.
  - Governance/guardrail visibility uses **HiddenInternal → FooterMention → MinorSection → MajorSection** for how prominently constraints are surfaced.
- **Questions Cover:** Whether Atlas-V is framed as a character/system, how much of its loops and mechanics we reveal, how we connect Lite, how CTA voice works, and how governance/constraints are surfaced in canon and on pages.
- **Pages/Areas Affected:** atlasv.html, homepage Atlas-V sections, governance blurbs, any Atlas-V Lite mentions.

### 3.5 AtlasStudio Surface and Scope
- **Block ID:** atlasstudio_surface_and_scope — items: 12
- **Dial:** Presence dial runs **HiddenInternal → LabsOnly → MinorShowcase → MajorShowcase → HeroTool** to set visibility and promise level for the workstation surface.
- **Questions Cover:** How AtlasStudio is framed as the workshop (position relative to Atlas-V), how much UI, data, demos, tabs/modules, use cases, CTAs, and team story are canonized for public view.
- **Pages/Areas Affected:** atlasstudio.html, homepage AtlasStudio block, nav/footer entries, studio overview copy.

### 3.6 Website Structure and Navigation
- **Block ID:** website_structure_and_nav — items: 18
- **Dial:** Nav prominence runs **NotInNav → FooterOnly → SecondaryNav → PrimaryNav → HubPage**; structural items use hub/combined/split options where needed.
- **Questions Cover:** Which destinations (Atlas-V, AtlasStudio, OIA, SKB, Games, Media, About, Contact, Merch, Labs, Blog, Roadmap, Governance) earn nav or hub placement and whether we split or combine tools/engine hubs.
- **Pages/Areas Affected:** Global navigation menus, footer links, page existence/visibility (atlasv.html, atlasstudio.html, oia.html, skb.html, about.html, roadmap/governance slots).

### 3.7 Homepage Content Blocks
- **Block ID:** homepage_content_blocks — items: 15
- **Dial:** Block strength runs **Omit → FooterOnly → SmallTeaserBlock → FullSection → HeroEligible** per homepage section.
- **Questions Cover:** How strongly to feature each storyline (AtlasForge overview, Atlas-V, AtlasStudio, OIA, Labs, Governance, Contact, Media, Games, Engine explainer, case studies, roadmap, Merch, testimonials, newsletter) on the homepage.
- **Pages/Areas Affected:** index.html section ordering and inclusion, footer mentions for lower-priority blocks.

### 3.8 Subsidiaries and Lines
- **Block ID:** subsidiaries_and_lines — items: 14
- **Dial:** Line priority runs **NotPursuing → FutureIdea → LowPriority → ActiveSideLabel → CoreLabel** for each sub-label.
- **Questions Cover:** Which specialty houses (Hypercasual Forge, Template Factory, MerchForge, Narrative/Documentary Labs, VoiceForge/SKB, partnerships, education, toolkits, research) are canonized now versus treated as future or side experiments.
- **Pages/Areas Affected:** Sub-brand references across homepage, media sections, about/studio pages, and any ecosystem lists.

### 3.9 Game IP Status
- **Block ID:** game_ip_status — items: 14
- **Dial:** IP readiness runs **ConceptOnly → InternalPrototype → InActiveDevelopment → SoftPublicMention → FlagshipWorld** for each title.
- **Questions Cover:** Where each IP (OIA, Neighborhood Watch, new IP slots) sits in production/readiness, how visible it is, how it ties to Atlas-V/Engine and merch, and how much platform/cadence detail we canonize.
- **Pages/Areas Affected:** oia.html, games.html, homepage game highlights, navigation links, roadmap mentions.

### 3.10 Media Lines and Focus
- **Block ID:** media_lines_and_focus — items: 12
- **Dial:** Media emphasis runs **NotActive → Occasional → RegularButQuiet → MajorFocus → FlagshipSeries** per lane.
- **Questions Cover:** Which media lanes (true crime, educational, commentary, devlogs, interactive, merch-linked) are active, how often they publish, whether they consolidate under AtlasForge Media, and how much distribution/cadence/voice crediting is public.
- **Pages/Areas Affected:** Media sections on homepage, media/press hub pages, about/studio storytelling, footer references.

### 3.11 Governance and Public Boundaries
- **Block ID:** governance_and_public_boundaries — items: 12
- **Dial:** Transparency runs **InternalOnly → HighLevelSummaryOnly → SummaryPlusExamples → DeepPublicDocs** for governance and guardrail exposure.
- **Questions Cover:** How visible governance/safety pages are, how explicitly we frame constraints, tools, compliance, public docs, the decision console, data stance, audience clarity, and feedback channels.
- **Pages/Areas Affected:** Governance/Safety page or sections, Atlas-V messaging, footer acknowledgments, any roadmap or transparency statements.

### 3.12 Collaboration and Contact Policy
- **Block ID:** collaboration_and_contact_policy — items: 10
- **Dial:** Openness runs **NoPublicContact → InviteOnly → FilteredContactForm → OpenContactForm → ProactiveOutreach** for each pathway.
- **Questions Cover:** How open the doors are for sales/partners, hiring, newsletter, social, partner filters, support, press, community, demos, and privacy messaging—framed as in-world gateways and practical channels.
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
