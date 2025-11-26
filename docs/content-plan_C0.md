# Phase 5 — Content Track — Site-wide Canon Rewrite Plan (C0)

## Purpose
This plan defines how public-facing copy across the AtlasForge site will be rewritten to align with Atlas Engine v1 governance, the public-facing canon layer, and Phase 5 content goals. It guides future implementation runs without altering site files in this pass.

## Canon Snapshot for Content Writers
- AtlasForge Interactive: umbrella studio spanning games, software, tools, and ecosystem outputs.
- Atlas Engine: governance and logic backbone; not a user-facing product.
- Atlas-V: full project copilot that runs phases, runs, execution prompts, and run reports; “Powered by Atlas Engine”.
- Atlas-V Lite: GPT-delivered assistant based on the Atlas-V pattern for general users; inherits public-facing canon and prompt discipline.
- Atlas Studio POC: proof-of-concept workstation surface (web + Excel-like) guided by Atlas-V; early-stage, not the full IDE.
- Public-facing canon layer: safe marketing descriptions of capabilities and workflows; keep internal logic, constraints, and enforcement details out of site copy.

## Global Rewrite Goals
- Remove “static front-end only” and similar prototype disclaimers from public copy while keeping an honest in-development framing.
- Remove personal details, call-center references, and job-specific language.
- Introduce Atlas Engine, Atlas-V, Atlas-V Lite, and Atlas Studio POC consistently under the public-facing canon layer.
- Reframe the Excel/web sheet as the Atlas Studio POC and Atlas-V example workspace, not a job-specific tool.
- Present OIA, SKB, and other outputs as creations powered by the stack, not as system demos.
- Maintain momentum for future high-end visuals without promising unreleased features or timelines.

## Page-by-Page Rewrite Plan

### 1) index.html
- Current issues: “static front-end only” framing; missing Atlas Engine/Atlas-V/Lite/Studio POC summaries.
- Rewrite goals: Position AtlasForge as a governed stack studio; introduce Engine, Atlas-V, Lite, Studio POC at marketing level.
- Canon elements to include: Public-facing canon overview; blurbs for Engine, Atlas-V, Lite, Studio POC.
- Content to remove/avoid: Prototype-only phrasing; internal governance details.
- Content to add: Updated hero copy; “How it all fits together” block.
- Dependencies: Align with atlasv.html, atlasstudio.html, about.html.

### 2) atlasv.html
- Current issues: Heavy “simulated front-end” language; non-canon mode labels; missing public-facing canon layer.
- Rewrite goals: Present Atlas-V as the full project copilot under Atlas Engine; clarify difference from Lite.
- Canon elements to include: Powered-by-Engine message; Atlas-V vs Lite contrast; public-facing workflow example.
- Content to remove/avoid: Strong simulation disclaimers; unsupported mode names unless clearly conceptual.
- Content to add: Workflow slice showing Atlas-V driving phases/runs; safe module descriptions; Lite differentiation block.
- Dependencies: Consistency with index.html and about.html.

### 3) atlasstudio.html
- Current issues: Emphasis on simulated tri-panel UI and modes; missing Engine/Lite context.
- Rewrite goals: Describe Atlas Studio as a POC workstation surface guided by Atlas-V and governed by Engine.
- Canon elements to include: Studio POC framing; relationship to Atlas-V and public canon.
- Content to remove/avoid: Implying full backend implementation; over-detailed mode promises.
- Content to add: POC positioning; examples of Atlas-V assisting projects; simple workflow description.
- Dependencies: Match Studio narratives on index.html and about.html.

### 4) studio-tools.html
- Current issues: Duplicates atlasstudio.html with simulated language.
- Rewrite goals: Serve as concise tools index or pointer to main Studio page; keep canon-aligned.
- Canon elements to include: Public-facing canon references only.
- Content to remove/avoid: Redundant copy conflicting with atlasstudio.html.
- Content to add: Brief “Tools under the Studio POC” summary and link to atlasstudio.html.
- Dependencies: Must remain consistent with atlasstudio.html.

### 5) oia.html
- Current issues: Lacks governed stack context; no Atlas-V/Lite mentions.
- Rewrite goals: Keep as game/world page; optionally note “Powered by Atlas-V / built with Atlas Studio POC” without overshadowing the IP.
- Canon elements to include: Optional powered-by phrasing; stack tie-in kept minimal.
- Content to remove/avoid: Any suggestion OIA is a tooling demo.
- Content to add: Brief mention of stack support where appropriate.
- Dependencies: Language should echo games.html.

### 6) octopus.html
- Current issues: Duplicates OIA content without canon alignment.
- Rewrite goals: Decide on consolidation with oia.html or keep as short pointer page.
- Canon elements to include: Same public-facing canon snippet as oia.html if retained.
- Content to remove/avoid: Full duplicate text creating maintenance drift.
- Content to add: If retained, concise description plus link to oia.html.
- Dependencies: Must stay aligned with oia.html.

### 7) skb.html
- Current issues: Missing public-facing canon context; positioning unclear.
- Rewrite goals: Present SKB as a creative output/label with future releases; optional powered-by stack note.
- Canon elements to include: Optional “Powered by Atlas-V / built with Atlas Studio POC” line.
- Content to remove/avoid: Implying SKB is a software tool; detailed artist specifics.
- Content to add: Label mission and high-level direction.
- Dependencies: Align with games.html and about.html regarding outputs vs tools.

### 8) games.html
- Current issues: Outputs listed without canon framing.
- Rewrite goals: Frame games as AtlasForge outputs powered by the governed stack.
- Canon elements to include: High-level description of Atlas-V and Studio POC support for game projects.
- Content to remove/avoid: Suggesting tooling functionality.
- Content to add: “How we build games” block referencing the stack at a public-facing level.
- Dependencies: Consistent with oia.html, skb.html, index.html, about.html.

### 9) about.html
- Current issues: “Static front-end” framing; outdated navigation; missing stack overview.
- Rewrite goals: Provide clearest public-facing description of AtlasForge, Atlas Engine, Atlas-V, Atlas-V Lite, Atlas Studio POC, and outputs.
- Canon elements to include: Public-facing canon summary and subsystem roles.
- Content to remove/avoid: Static-front-end language; personal or job-specific references.
- Content to add: Updated mission, current state vs future direction, governed stack overview.
- Dependencies: Harmonize with index.html and atlasv.html.

## Implementation Run Outline (Content Only)
- Run C1: Completed content audit and gap map.
- Run C2: Rewrite core pages (index.html, atlasv.html, atlasstudio.html, about.html) for canon alignment.
- Run C3: Rewrite supporting pages (studio-tools.html, games.html, SKB, OIA/octopus consolidation).
- Run C4: Messaging refinement and final canon consistency check.
- Visual/structural polish will occur in separate visual runs with possible CSS/layout updates; not in scope for this content plan.

## Visual and Structure Alignment Notes (for Future Visual Runs)
- Aim for visual quality comparable to leading product sites while maintaining accessibility and brand canon.
- Future visual runs may introduce new CSS patterns, tokens, or components to deliver premium presentation.
- Any new visuals or assets must respect governance boundaries, brand rules, and public-facing canon.

## Constraints and Non-Disclosure Boundaries
- Public site copy must not expose internal governance logic, decision rules, or enforcement mechanics.
- Communicate capabilities and vision without revealing implementation details or internal-only canon.
- Keep references within public-facing canon; internal layer stays confined to governance documents.
