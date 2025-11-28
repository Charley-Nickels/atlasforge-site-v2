# AtlasForge Phase 5 — Canon Decision Guide (Preflight)

## Purpose
This guide helps Basil use `/admin/atlas-decisions.html` to lock Phase 5 business canon before rewriting site content. The console reads `data/decision_blocks.json`, and the exported JSON becomes the single source for navigation, page structure, product positioning, and governance messaging. Every item is phrased as a clear question; options are lettered (A–E/F) for visibility, maturity, transparency, and contact dials.

## How the console fits Phase 5
- Finalize what brands, products, and pages exist and how visible they are.
- Decide how Atlas-V, AtlasStudio, AtlasStudio Enterprise, and related tooling are described.
- Approve or park subsidiaries/lines (Hypercasual Forge, Template Factory, MerchForge, Narrative/Documentary Labs, VoiceForge/SKB, etc.).
- Set the maturity and visibility of Octopus in Action, Neighborhood Watch, and other IPs.
- Define governance transparency and contact openness.
- The export feeds `docs/atlasforge_canon_index.md` and will drive the Phase 5 rewrite plan and eventual public copy.

## Dial conventions
- **Visibility (A–F):** Internal only → Background mention → Footer → Minor section → Major section → Hero placement.
- **Brand role (A–E):** Internal only → Background tag → Supporting brand → Major brand → Flagship brand.
- **Tone (A–E):** Neutral/practical → Warm/inviting → Playful/experimental → Bold/distinctive → Deep specialist voice.
- **Atlas-V detail (A–D):** Tagline only → Short pitch → Detailed section → Deep technical appendix.
- **Governance visibility (A–D):** Internal only → Footer mention → Minor section → Major section.
- **AtlasStudio presence (A–E):** Internal only → Labs-only → Minor showcase → Major showcase → Hero tool presence.
- **Navigation prominence (A–E):** Not in nav → Footer-only → Secondary nav → Primary nav → Dedicated hub page.
- **Homepage blocks (A–E):** Omit → Footer-only → Small teaser → Full section → Hero-eligible.
- **Subsidiary priority (A–E):** Not pursuing → Future idea → Low priority → Active side label → Core label.
- **Game/IP status (A–E):** Concept only → Internal prototype → In active development → Soft public mention → Flagship page.
- **Media emphasis (A–E):** Not active → Occasional → Regular but quiet → Major focus → Flagship series.
- **Governance transparency (A–D):** Internal only → High-level summary → Summary with examples → Deep public docs.
- **Contact openness (A–E):** No public contact → Invite-only → Filtered form → Open form → Proactive outreach.
- Structural items use labeled choices such as **Keep combined / Split into hubs / Defer** and routing choices (e.g., redirect vs. standalone).

## Block overview (aligns with `data/decision_blocks.json`)
- **core_pillars_visibility (8 items):** Visibility for AtlasForge umbrella, Games, Media, Studio/Tools, Atlas-V/Engine, Merch, Labs, and Contact gateways.
- **brand_roles_and_importance (14 items):** Official role for each brand or line, from internal-only to flagship.
- **brand_narrative_tone (10 items):** Communication tone to use when writing public-facing material for each brand/IP.
- **atlasv_behavior_and_messaging (12 items):** Positioning, detail depth, governance visibility, CTA style, Lite relationship, and persona voice for Atlas-V.
- **atlasstudio_surface_and_scope (12 items):** Visibility, framing, scope, UI detail, module mentions, demos, use cases, data layer, and powered-by messaging for AtlasStudio.
- **website_structure_and_nav (18 items):** Navigation presence for key destinations (Atlas-V, AtlasStudio, OIA, SKB, Games, Media, About, Tools, Roadmap, Governance, Contact, Merch, Blog, Labs) and grouping/splitting decisions.
- **homepage_content_blocks (15 items):** Which homepage blocks appear and at what strength (overview, Atlas-V, AtlasStudio, OIA, Labs, Governance, Contact, Media, Games, Engine explainer, case studies, roadmap, Merch, testimonials, newsletter).
- **subsidiaries_and_lines (14 items):** Approval and visibility for Hypercasual Forge, Template Factory, MerchForge, Narrative/Documentary Labs, VoiceForge/SKB, partnerships, education, toolkits, research, and related lines.
- **game_ip_status (14 items):** Maturity and visibility for Octopus in Action, Neighborhood Watch, game backlog, engine callouts, platforms, cadence, demos, new IP slots, services, cross-promo, and merch linkage.
- **media_lines_and_focus (12 items):** Activity and presentation for true crime/mystery, educational/STEM, commentary, devlogs, media grouping, coming-soon framing, distribution detail, cadence, voice credit, safety notes, interactivity, and merch links.
- **governance_and_public_boundaries (12 items):** Visibility and depth for governance pages, constraints, tools, compliance, public docs, decision console, data stance, audience clarity, and feedback paths.
- **collaboration_and_contact_policy (10 items):** Openness for sales/partner intake, hiring signals, newsletter, social, partner filters, support, press, community, demo requests, and privacy notes.

## Coverage check
- `data/decision_blocks.json` currently holds **12 blocks** and **151 items** with stable IDs that match `docs/atlasforge_canon_index.md`.
- All options are lettered and use consistent scales; defaults remain aligned with prior intent.
- The admin console will render option labels from the JSON while storing the original option values for export.

## Usage checklist
1. Open `/admin/atlas-decisions.html` (Goblin gate still applies).
2. Expand each block, answer every question, and choose the lettered option that matches the desired Phase 5 canon.
3. Export/download the JSON once complete.
4. Provide the export to ChatGPT to drive the Phase 5 rewrite plan and downstream canonical documents.
