# AtlasForge Canon Decision Index

This file is the canon decision index for AtlasForge Phase 5. The structured decisions live in `data/decision_blocks.json` and will drive generation of `docs/atlasforge_canon.md` after Basil selects options via the internal console.

Whenever you change branding, navigation, homepage content, or AtlasForge canon, you MUST read this file and `docs/atlasforge_canon.md` first and honor all decisions.

Each section below lists block ids and items with their mapping fields to guide future Codex/ChatGPT runs when resolving canon choices into site updates and documentation.

## core_pillars_visibility — Core Pillars Visibility
Decide how core AtlasForge pillars appear on the site (hero, sections, nav, internal).

- **core_pillars_visibility_atlasforge** — AtlasForge umbrella visibility (canon_section: `pillars`, canon_key: `pillar.atlasforge.visibility`) — Visibility priority for AtlasForge umbrella brand across site surfaces.
- **core_pillars_visibility_games** — AtlasForge Games pillar (canon_section: `pillars`, canon_key: `pillar.games.visibility`) — Placement emphasis for AtlasForge Games pillar in public surfaces.
- **core_pillars_visibility_media** — AtlasForge Media pillar (canon_section: `pillars`, canon_key: `pillar.media.visibility`) — Visibility level for AtlasForge Media lane on site.
- **core_pillars_visibility_studio** — AtlasForge Studio pillar (canon_section: `pillars`, canon_key: `pillar.studio.visibility`) — How prominently the Studio/Tools pillar appears (AtlasStudio + tools).
- **core_pillars_visibility_atlasv** — Atlas Engine / Atlas-V pillar (canon_section: `pillars`, canon_key: `pillar.atlasv.visibility`) — Surface priority for Atlas Engine / Atlas-V narrative.
- **core_pillars_visibility_merch** — Merch pillar (canon_section: `pillars`, canon_key: `pillar.merch.visibility`) — Presence of AtlasForge Merch offerings in public areas.
- **core_pillars_visibility_labs** — Labs / Experimental pillar (canon_section: `pillars`, canon_key: `pillar.labs.visibility`) — Whether experimental labs/under-construction work gets a defined pillar slot.
- **core_pillars_visibility_contact** — Contact / Work With Us touchpoint (canon_section: `pillars`, canon_key: `pillar.contact.visibility`) — Placement for contact/hiring/partner CTA within core pillars.

## brand_roles_and_importance — Brand Roles and Importance
Define ecosystem role for each main brand/label.

- **brand_roles_atlasforge** — AtlasForge umbrella role (canon_section: `brands`, canon_key: `brand.atlasforge.role`) — Role of AtlasForge as the parent studio and ecosystem owner.
- **brand_roles_atlasv** — Atlas-V role (canon_section: `brands`, canon_key: `brand.atlasv.role`) — Ecosystem role for Atlas-V as engine brain / copilot.
- **brand_roles_atlasstudio** — AtlasStudio role (canon_section: `brands`, canon_key: `brand.atlasstudio.role`) — Role of AtlasStudio workstation surface within the stack.
- **brand_roles_atlasengine** — Atlas Engine role (canon_section: `brands`, canon_key: `brand.atlasengine.role`) — Public vs internal framing of Atlas Engine governance layer.
- **brand_roles_media** — AtlasForge Media role (canon_section: `brands`, canon_key: `brand.media.role`) — Importance of Media lane as a public-facing label.
- **brand_roles_games** — AtlasForge Games role (canon_section: `brands`, canon_key: `brand.games.role`) — Positioning of Games as a primary output line.
- **brand_roles_skb** — SKB / Audio label role (canon_section: `brands`, canon_key: `brand.skb.role`) — Importance of SKB audio/music label within ecosystem.
- **brand_roles_voiceforge** — VoiceForge role (canon_section: `brands`, canon_key: `brand.voiceforge.role`) — Visibility and seriousness of VoiceForge narration/voice brand.
- **brand_roles_hypercasual** — Hypercasual Forge role (canon_section: `brands`, canon_key: `brand.hypercasual_forge.role`) — Status of Hypercasual Forge as a sub-brand for small games.
- **brand_roles_template_factory** — Template Factory role (canon_section: `brands`, canon_key: `brand.template_factory.role`) — Treatment of Template Factory (templates marketplace).
- **brand_roles_merchforge** — MerchForge role (canon_section: `brands`, canon_key: `brand.merchforge.role`) — Role of MerchForge merch line under AtlasForge.
- **brand_roles_narrative_labs** — Narrative Labs role (canon_section: `brands`, canon_key: `brand.narrative_labs.role`) — Importance of Narrative Labs storytelling experiments.
- **brand_roles_documentary_labs** — Documentary Labs role (canon_section: `brands`, canon_key: `brand.documentary_labs.role`) — Positioning of Documentary Labs content line.
- **brand_roles_atlasforge_media_labeling** — Media label framing (canon_section: `brands`, canon_key: `brand.media.labeling`) — Whether media stays under a single AtlasForge Media label or multiple sub-labels.

## brand_narrative_tone — Brand Narrative Tone
Decide tone/personality for public-facing content per brand.

- **brand_tone_atlasforge** — AtlasForge overall tone (canon_section: `tone`, canon_key: `tone.atlasforge`) — Tone for umbrella brand messaging.
- **brand_tone_atlasv** — Atlas-V tone (canon_section: `tone`, canon_key: `tone.atlasv`) — Personality for Atlas-V descriptions and copy.
- **brand_tone_atlasstudio** — AtlasStudio tone (canon_section: `tone`, canon_key: `tone.atlasstudio`) — Voice for AtlasStudio workstation messaging.
- **brand_tone_atlasforge_media** — AtlasForge Media tone (canon_section: `tone`, canon_key: `tone.media`) — Tone for media/streaming/podcast style content.
- **brand_tone_oia** — Octopus in Action tone (canon_section: `tone`, canon_key: `tone.oia`) — Tone for OIA marketing copy and page content.
- **brand_tone_neighborhood_watch** — Neighborhood Watch tone (canon_section: `tone`, canon_key: `tone.neighborhood_watch`) — Tone for Neighborhood Watch concept mentions.
- **brand_tone_atlas_engine** — Atlas Engine tone (canon_section: `tone`, canon_key: `tone.atlas_engine`) — Tone when referencing Atlas Engine governance layer publicly.
- **brand_tone_skb** — SKB / Audio label tone (canon_section: `tone`, canon_key: `tone.skb`) — Voice for SKB music/audio label content.
- **brand_tone_atlasv_lite** — Atlas-V Lite tone (canon_section: `tone`, canon_key: `tone.atlasv_lite`) — Tone for Lite assistant references.
- **brand_tone_hypercasual** — Hypercasual Forge tone (canon_section: `tone`, canon_key: `tone.hypercasual_forge`) — Tone for Hypercasual Forge sub-brand snippets.

## atlasv_behavior_and_messaging — Atlas-V Behavior and Messaging
Decide how Atlas-V is framed and how deeply we explain it.

- **atlasv_identity** — Atlas-V primary identity (canon_section: `atlasv`, canon_key: `atlasv.identity`) — How Atlas-V is framed (copilot, engine brain, governance layer).
- **atlasv_explanation_depth** — Phases/Runs explanation depth (canon_section: `atlasv`, canon_key: `atlasv.explanation_depth`) — Depth of explaining Atlas-V loops and phase/run model.
- **atlasv_governance_visibility** — Governance visibility (canon_section: `atlasv`, canon_key: `atlasv.governance_visibility`) — Visibility of Atlas-V governance/safety role in public content.
- **atlasv_internal_mechanics** — Internal mechanics hinting (canon_section: `atlasv`, canon_key: `atlasv.internal_mechanics`) — Whether to hint at internal mechanics (decision engine, prompt discipline).
- **atlasv_scope_span** — Atlas-V scope (canon_section: `atlasv`, canon_key: `atlasv.scope`) — Scope positioning: single project, multi-project, or orchestration brain.
- **atlasv_loop_visibility** — Loop visibility (canon_section: `atlasv`, canon_key: `atlasv.loop_visibility`) — How much of the loop (phase/run/prompt/report) is shown publicly.
- **atlasv_safety_positioning** — Safety positioning (canon_section: `atlasv`, canon_key: `atlasv.safety_positioning`) — Balance between capability messaging and safety/governance messaging.
- **atlasv_lite_relationship** — Atlas-V Lite relationship (canon_section: `atlasv`, canon_key: `atlasv.lite_relationship`) — How Atlas-V Lite is described relative to Atlas-V.
- **atlasv_cta_style** — Atlas-V call-to-action (canon_section: `atlasv`, canon_key: `atlasv.cta`) — CTA pattern for Atlas-V (contact, waitlist, internal invite).
- **atlasv_examples_depth** — Example depth (canon_section: `atlasv`, canon_key: `atlasv.examples_depth`) — Depth of public examples or case studies for Atlas-V.
- **atlasv_decision_engine_reference** — Decision engine framing (canon_section: `atlasv`, canon_key: `atlasv.decision_engine_reference`) — Whether to reference decision engine concept in public copy.
- **atlasv_persona_voice** — Atlas-V persona voice (canon_section: `atlasv`, canon_key: `atlasv.persona_voice`) — Public persona voice for Atlas-V (guide vs partner vs neutral).

## atlasstudio_surface_and_scope — AtlasStudio Surface and Scope
Decide AtlasStudio’s presence, promises, and framing.

- **atlasstudio_page_visibility** — AtlasStudio page presence (canon_section: `atlasstudio`, canon_key: `atlasstudio.page_visibility`) — Whether AtlasStudio has its own top-level page.
- **atlasstudio_framing** — AtlasStudio framing (canon_section: `atlasstudio`, canon_key: `atlasstudio.framing`) — Frame AtlasStudio as prototype, future product, or active product.
- **atlasstudio_scope** — AtlasStudio scope depth (canon_section: `atlasstudio`, canon_key: `atlasstudio.scope`) — Scope: concept only, concept + mockups, soft launch, or hard launch later.
- **atlasstudio_ui_detail** — UI detail shown (canon_section: `atlasstudio`, canon_key: `atlasstudio.ui_detail`) — How much UI detail to show (diagrams, mockups, screenshots).
- **atlasstudio_tabs_mention** — AtlasStudio tabs callout (canon_section: `atlasstudio`, canon_key: `atlasstudio.tabs_mention`) — Whether to mention tabs like Game/Excel/Policy/Writing/Web.
- **atlasstudio_role_relative** — AtlasStudio role vs Atlas-V (canon_section: `atlasstudio`, canon_key: `atlasstudio.role_relative`) — Positioning of AtlasStudio relative to Atlas-V (guided surface vs standalone).
- **atlasstudio_cta** — AtlasStudio CTA (canon_section: `atlasstudio`, canon_key: `atlasstudio.cta`) — CTA style for AtlasStudio (waitlist, contact, coming soon).
- **atlasstudio_teamstory** — Team story depth (canon_section: `atlasstudio`, canon_key: `atlasstudio.teamstory`) — Whether to include behind-the-scenes team/process stories for AtlasStudio.
- **atlasstudio_powered_by** — Powered-by callout (canon_section: `atlasstudio`, canon_key: `atlasstudio.powered_by`) — Whether to highlight Atlas-V/Engine powering AtlasStudio.
- **atlasstudio_usecases** — Use case breadth (canon_section: `atlasstudio`, canon_key: `atlasstudio.usecases`) — Range of use cases shown (games, media, docs, web).
- **atlasstudio_data_layer** — Data layer framing (canon_section: `atlasstudio`, canon_key: `atlasstudio.data_layer`) — Whether to mention governance/decision data powering Studio.
- **atlasstudio_demo_depth** — Demo depth (canon_section: `atlasstudio`, canon_key: `atlasstudio.demo_depth`) — Depth of demo walkthroughs (animated slice vs static).

## website_structure_and_nav — Website Structure and Navigation
Decide which pages exist and how they appear in navigation.

- **nav_home** — Home page placement (canon_section: `website_structure`, canon_key: `nav.home`) — Visibility of Home/AtlasForge umbrella page in nav.
- **nav_atlasv** — Atlas-V page (canon_section: `website_structure`, canon_key: `nav.atlasv`) — Navigation placement for Atlas-V page.
- **nav_atlasstudio** — AtlasStudio page (canon_section: `website_structure`, canon_key: `nav.atlasstudio`) — Navigation placement for AtlasStudio page.
- **nav_oia** — Octopus in Action page (canon_section: `website_structure`, canon_key: `nav.oia`) — Visibility of OIA page.
- **nav_octopus_alt** — Octopus page duplicate (canon_section: `website_structure`, canon_key: `nav.octopus_page`) — Treatment of octopus.html relative to OIA page.
- **nav_skb** — SKB / audio page (canon_section: `website_structure`, canon_key: `nav.skb`) — Placement for SKB/audio label page.
- **nav_games** — Games hub page (canon_section: `website_structure`, canon_key: `nav.games`) — Navigation treatment for games.html.
- **nav_media** — Media hub page (canon_section: `website_structure`, canon_key: `nav.media`) — Placement for media/streams/podcasts hub.
- **nav_about** — About / Studio page (canon_section: `website_structure`, canon_key: `nav.about`) — Placement for about.html / studio story.
- **nav_studio_tools** — Studio tools page (canon_section: `website_structure`, canon_key: `nav.studio_tools`) — Whether studio-tools.html appears in nav.
- **nav_ecosystem_grouping** — Ecosystem grouping (canon_section: `website_structure`, canon_key: `nav.ecosystem_grouping`) — Whether to group products under a single Ecosystem menu item.
- **nav_roadmap_page** — Roadmap page (canon_section: `website_structure`, canon_key: `nav.roadmap`) — Whether to have a roadmap page or keep roadmap internal.
- **nav_governance_page** — Governance/Safety page (canon_section: `website_structure`, canon_key: `nav.governance`) — Presence of governance/safety page in nav.
- **nav_contact_page** — Contact / Work With Us page (canon_section: `website_structure`, canon_key: `nav.contact`) — Visibility of contact/hiring page.
- **nav_merch** — Merch page (canon_section: `website_structure`, canon_key: `nav.merch`) — Placement for merch page or link.
- **nav_blog** — Blog / Devlog (canon_section: `website_structure`, canon_key: `nav.blog`) — Whether to include a blog/devlog page in navigation.
- **nav_labs** — Labs hub (canon_section: `website_structure`, canon_key: `nav.labs`) — Visibility of Labs/Under Construction hub page.
- **nav_media_grouping** — Media label grouping (canon_section: `website_structure`, canon_key: `nav.media_grouping`) — Whether media lanes are grouped under AtlasForge Media nav item.

## homepage_content_blocks — Homepage Content Blocks
Decide which content blocks appear on the homepage and their prominence.

- **home_atlasforge_overview** — AtlasForge overview block (canon_section: `homepage`, canon_key: `home.overview`) — Include AtlasForge umbrella overview on homepage.
- **home_atlasv_block** — Atlas-V feature block (canon_section: `homepage`, canon_key: `home.atlasv`) — Include Atlas-V how-it-works or feature block on homepage.
- **home_atlasstudio_block** — AtlasStudio teaser block (canon_section: `homepage`, canon_key: `home.atlasstudio`) — Include AtlasStudio teaser block on homepage.
- **home_oia_highlight** — Octopus in Action highlight (canon_section: `homepage`, canon_key: `home.oia`) — Placement of OIA highlight block on homepage.
- **home_labs_block** — Labs / Under Construction block (canon_section: `homepage`, canon_key: `home.labs`) — Include labs/under construction block on homepage.
- **home_governance_blurb** — Governance/Safety blurb (canon_section: `homepage`, canon_key: `home.governance`) — Include governance/safety blurb on homepage.
- **home_contact_block** — Contact / Work With Us block (canon_section: `homepage`, canon_key: `home.contact`) — Include contact/hiring/partner CTA block on homepage.
- **home_media_block** — Media lane block (canon_section: `homepage`, canon_key: `home.media`) — Include media lanes sampler block on homepage.
- **home_games_block** — Games outputs block (canon_section: `homepage`, canon_key: `home.games`) — Include games outputs summary block on homepage.
- **home_atlas_engine_block** — Atlas Engine explainer block (canon_section: `homepage`, canon_key: `home.atlas_engine`) — Include high-level Atlas Engine explainer on homepage.
- **home_case_studies** — Case studies / examples (canon_section: `homepage`, canon_key: `home.case_studies`) — Include case studies or example projects block.
- **home_roadmap_snippet** — Roadmap teaser (canon_section: `homepage`, canon_key: `home.roadmap`) — Include roadmap/coming-soon teaser block.
- **home_merch_block** — Merch feature block (canon_section: `homepage`, canon_key: `home.merch`) — Include merch callout on homepage.
- **home_testimonials** — Testimonials / quotes (canon_section: `homepage`, canon_key: `home.testimonials`) — Whether to include testimonials/quotes block.
- **home_newsletter** — Newsletter signup (canon_section: `homepage`, canon_key: `home.newsletter`) — Include newsletter signup on homepage.

## subsidiaries_and_lines — Subsidiaries and Lines
Decide which sub-labels/subsidiaries are canon and their seriousness.

- **subs_hypercasual_forge** — Hypercasual Forge line (canon_section: `subsidiaries`, canon_key: `subs.hypercasual_forge`) — Status and seriousness of Hypercasual Forge sub-label.
- **subs_template_factory** — Template Factory line (canon_section: `subsidiaries`, canon_key: `subs.template_factory`) — Status of Template Factory templates marketplace.
- **subs_merchforge** — MerchForge line (canon_section: `subsidiaries`, canon_key: `subs.merchforge`) — Status of MerchForge merch and drops.
- **subs_narrative_labs** — Narrative Labs line (canon_section: `subsidiaries`, canon_key: `subs.narrative_labs`) — Status of Narrative Labs storytelling experiments.
- **subs_documentary_labs** — Documentary Labs line (canon_section: `subsidiaries`, canon_key: `subs.documentary_labs`) — Status of Documentary Labs content line.
- **subs_voiceforge** — VoiceForge line (canon_section: `subsidiaries`, canon_key: `subs.voiceforge`) — Status of VoiceForge narration/voice label.
- **subs_skb** — SKB / Audio label line (canon_section: `subsidiaries`, canon_key: `subs.skb`) — Status of SKB music/audio label.
- **subs_game_tools** — Game tools line (canon_section: `subsidiaries`, canon_key: `subs.game_tools`) — Status of game tools utilities spun out of AtlasStudio.
- **subs_media_labeling** — Media label grouping (canon_section: `subsidiaries`, canon_key: `subs.media_labeling`) — Whether media lanes stay under AtlasForge Media or split into sub-labels.
- **subs_labs_bucket** — Labs bucket (canon_section: `subsidiaries`, canon_key: `subs.labs_bucket`) — Status of umbrella Labs bucket for experiments.
- **subs_partnerships** — Partnerships line (canon_section: `subsidiaries`, canon_key: `subs.partnerships`) — Status of external partnership/collab line (services/consult).
- **subs_education** — Education / learning line (canon_section: `subsidiaries`, canon_key: `subs.education`) — Status of educational content/products line.
- **subs_toolkits** — Toolkits / starter packs (canon_section: `subsidiaries`, canon_key: `subs.toolkits`) — Status of starter packs/toolkits offering.
- **subs_research** — Research notes line (canon_section: `subsidiaries`, canon_key: `subs.research`) — Status of research/whitepaper style outputs.

## game_ip_status — Game IP Status
Capture high-level status/visibility for IP without deep design.

- **game_oia_status** — Octopus in Action status (canon_section: `games`, canon_key: `game.oia.status`) — High-level status/priority for Octopus in Action.
- **game_oia_visibility** — Octopus in Action visibility (canon_section: `games`, canon_key: `game.oia.visibility`) — How OIA appears on the site (hero vs section vs nav vs footer).
- **game_neighborhood_watch_status** — Neighborhood Watch status (canon_section: `games`, canon_key: `game.neighborhood_watch.status`) — Status for Neighborhood Watch concept.
- **game_neighborhood_watch_visibility** — Neighborhood Watch visibility (canon_section: `games`, canon_key: `game.neighborhood_watch.visibility`) — Whether Neighborhood Watch is mentioned publicly.
- **game_flagship_rotation** — Flagship game rotation (canon_section: `games`, canon_key: `game.flagship_rotation`) — Whether to call out a single flagship or rotating slate.
- **game_backlog_listing** — Backlog game listing (canon_section: `games`, canon_key: `game.backlog_listing`) — Whether to list backlog/concept games publicly.
- **game_engine_callout** — Powered-by callout (canon_section: `games`, canon_key: `game.powered_by`) — Whether to note Atlas-V/Studio powering games.
- **game_platforms** — Platform targeting (canon_section: `games`, canon_key: `game.platforms`) — Platform mentions (web, mobile, PC).
- **game_update_cadence** — Update cadence (canon_section: `games`, canon_key: `game.update_cadence`) — How often updates/devlogs for games are shown.
- **game_oia_demo_depth** — OIA demo depth (canon_section: `games`, canon_key: `game.oia.demo_depth`) — Depth of OIA demo/preview shown on site.
- **game_new_ip_slots** — New IP slots (canon_section: `games`, canon_key: `game.new_ip_slots`) — Whether to reserve space for new IP mentions.
- **game_services_positioning** — Game services positioning (canon_section: `games`, canon_key: `game.services`) — Whether to mention game services/consulting.
- **game_cross_promo** — Cross-promo with Studio/Atlas-V (canon_section: `games`, canon_key: `game.cross_promo`) — How games cross-promote tools and Atlas-V.
- **game_merch_linkage** — Merch linkage (canon_section: `games`, canon_key: `game.merch_linkage`) — Whether game pages link to related merch.

## media_lines_and_focus — Media Lines and Focus
Decide which content lanes exist and how visible they are.

- **media_true_crime** — True crime / mystery lane (canon_section: `media`, canon_key: `media.true_crime`) — Status of true crime/mystery media lane.
- **media_educational** — Educational / STEM lane (canon_section: `media`, canon_key: `media.educational`) — Status of educational/STEM/practical engineering media lane.
- **media_commentary** — Commentary / essays lane (canon_section: `media`, canon_key: `media.commentary`) — Status of commentary/essays/analysis lane.
- **media_devlogs** — Devlogs / behind-the-scenes (canon_section: `media`, canon_key: `media.devlogs`) — Status of devlogs/behind-the-scenes lane.
- **media_grouping_under_brand** — Grouping under AtlasForge Media (canon_section: `media`, canon_key: `media.grouping`) — Whether media is primarily grouped under AtlasForge Media.
- **media_coming_soon_framing** — Coming-soon framing (canon_section: `media`, canon_key: `media.coming_soon`) — Whether media is referenced mainly as coming soon.
- **media_distribution** — Distribution channels (canon_section: `media`, canon_key: `media.distribution`) — Mentioned distribution channels (site, YouTube, podcast).
- **media_schedule** — Release cadence (canon_section: `media`, canon_key: `media.cadence`) — Cadence messaging for media releases.
- **media_voice_credit** — Voice talent credit (canon_section: `media`, canon_key: `media.voice_credit`) — Whether to feature VoiceForge/voice talent credits.
- **media_safety_note** — Safety/governance note (canon_section: `media`, canon_key: `media.safety_note`) — Whether to attach governance/safety note to media lane.
- **media_interactivity** — Interactive media experiments (canon_section: `media`, canon_key: `media.interactivity`) — Status of interactive/branching media experiments.
- **media_merch_link** — Media-to-merch linkage (canon_section: `media`, canon_key: `media.merch_link`) — Whether media pages link to merch drops.

## governance_and_public_boundaries — Governance and Public Boundaries
Decide how much governance, safety, and internal process we show publicly.

- **governance_page_presence** — Governance/Safety page presence (canon_section: `governance`, canon_key: `governance.page_presence`) — Whether there is a Governance/Safety page.
- **governance_transparency** — Transparency level (canon_section: `governance`, canon_key: `governance.transparency`) — How much governance and safety is shown publicly.
- **governance_engine_framing** — Engine framing (canon_section: `governance`, canon_key: `governance.engine_framing`) — How Atlas Engine is framed (capabilities vs safety).
- **governance_internal_tools** — Internal tools mention (canon_section: `governance`, canon_key: `governance.internal_tools`) — Whether to mention internal tools like decision engine conceptually.
- **governance_constraints_ack** — Constraints acknowledgment (canon_section: `governance`, canon_key: `governance.constraints`) — Whether to acknowledge constraints/guardrails in marketing text.
- **governance_compliance** — Compliance statement (canon_section: `governance`, canon_key: `governance.compliance`) — Whether to include compliance/ethics statements.
- **governance_contact** — Governance contact (canon_section: `governance`, canon_key: `governance.contact`) — Whether to provide governance/safety contact pathway.
- **governance_public_docs** — Public docs linkage (canon_section: `governance`, canon_key: `governance.docs`) — Whether to link governance docs from site.
- **governance_decision_console** — Decision console visibility (canon_section: `governance`, canon_key: `governance.decision_console`) — Whether to hint at internal decision console existence.
- **governance_user_data** — User data stance (canon_section: `governance`, canon_key: `governance.data`) — Whether to state data/privacy stance for tooling.
- **governance_audience_clarity** — Audience clarity (canon_section: `governance`, canon_key: `governance.audience`) — Clarify whether site speaks to players, partners, or builders.
- **governance_feedback** — Feedback channel (canon_section: `governance`, canon_key: `governance.feedback`) — Whether to include feedback/reporting channel for governance.

## collaboration_and_contact_policy — Collaboration and Contact Policy
Decide how collaboration, hiring, and contact touchpoints are presented.

- **contact_sales** — Work with us CTA (canon_section: `contact`, canon_key: `contact.work_with_us`) — Placement and strength of work-with-us/service CTA.
- **contact_hiring** — Hiring signals (canon_section: `contact`, canon_key: `contact.hiring`) — Whether to signal hiring/open roles.
- **contact_newsletter** — Newsletter opt-in (canon_section: `contact`, canon_key: `contact.newsletter`) — Whether to promote newsletter signup beyond homepage footer.
- **contact_social_links** — Social links (canon_section: `contact`, canon_key: `contact.social`) — Whether to include social links (X/YouTube/etc.).
- **contact_partner_filters** — Partner filter messaging (canon_section: `contact`, canon_key: `contact.partner_filters`) — Whether to include partner fit criteria on contact pathways.
- **contact_support_channel** — Support channel (canon_section: `contact`, canon_key: `contact.support`) — Whether to list support/help channel.
- **contact_press** — Press/contact for media (canon_section: `contact`, canon_key: `contact.press`) — Whether to list press contact for media inquiries.
- **contact_community** — Community hub (canon_section: `contact`, canon_key: `contact.community`) — Whether to reference community/Discord hub.
- **contact_demo_requests** — Demo request handling (canon_section: `contact`, canon_key: `contact.demos`) — How demo requests are handled (form vs email vs none).
- **contact_privacy** — Privacy note (canon_section: `contact`, canon_key: `contact.privacy`) — Whether to include privacy/data handling note on contact forms.

## Next Step
- Basil will use the internal decision console to choose options for each item.
- The console will export a decisions JSON object capturing those selections.
- A future Codex run will read that exported JSON and this index, then generate `docs/atlasforge_canon.md` with resolved canon text, navigation implications, and brand guidance that align with the choices.