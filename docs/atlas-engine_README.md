# Atlas Engine Docs Index

This folder contains governance and behavior references for the **Atlas Engine** and related assistants.

## Files

- [`atlas-engine_Governance_v1.md`](atlas-engine_Governance_v1.md)
  Core governance document for Atlas Engine v1.
  Defines the roles, loops, constraints, and philosophy of the AtlasForge ecosystem’s logic layer.

- [`atlas-v-lite_GovernanceShard_v1.md`](atlas-v-lite_GovernanceShard_v1.md)
  Condensed behavior shard for GPT-style assistants (Atlas-V Lite).
  Encodes how a chat-based project copilot should behave when “Powered by Atlas Engine v1”.

- [`atlas-engine_INDEX.md`](atlas-engine_INDEX.md)
  Navigation hub for current and future governance files.

## Document Map

- Current canon: [atlas-engine_Governance_v1.md](atlas-engine_Governance_v1.md)
- Assistant shard: [atlas-v-lite_GovernanceShard_v1.md](atlas-v-lite_GovernanceShard_v1.md)
- Folder index: [atlas-engine_INDEX.md](atlas-engine_INDEX.md)
- Future versions: `atlas-engine_Governance_v2.md`, `atlas-engine_Governance_v3.md` (to be added alongside v1)
- Future shards: Atlas-V Prime/core engine, AtlasStudio, Manager Mode, Game Mode (add as separate shard files when ready)

## Notes

- These docs are **internal canon** for how AtlasForge tools and assistants are supposed to behave.
- Future versions (v2, v3, …) should be added alongside these files rather than overwriting them.
- External marketing pages (like the main site) should describe Atlas Engine and Atlas-V at a high level, but this folder is the detailed source-of-truth for behavior and governance.
- Public-facing content should rely on the [Public-Facing Canon Layer](atlas-engine_Governance_v1.md#public-facing-canon-layer-external) and avoid leaking internal enforcement details.

## How to Use These Docs

- Start with the governance root to understand the authoritative loop and rules.
- Consult the Lite shard when implementing GPT-only assistants that inherit Atlas Engine v1 behaviors.
- Use the index to navigate current canon and locate future versions or shards.
- Respect the Code Block Governance Rule: Atlas-V → Codex prompts and Codex → Atlas-V Run Reports must be wrapped in single clean code blocks with no surrounding text.
- Follow the governance root for [Copy-Paste Efficiency Rules](atlas-engine_Governance_v1.md#copy-paste-efficiency-rules-canon-v1), [Prompt File Format Guidelines](atlas-engine_Governance_v1.md#prompt-file-format-guidelines), [Run Prompt Structure](atlas-engine_Governance_v1.md#run-prompt-structure-codex-oriented), [Prompt Memory Protection Rules](atlas-engine_Governance_v1.md#prompt-memory-protection-rules), and [No Invisible Memory Anchors](atlas-engine_Governance_v1.md#no-invisible-memory-anchors).
- Reference the [Governance Canon Harmonization](atlas-engine_Governance_v1.md#governance-canon-harmonization-v1), [Public-Facing Canon Layer](atlas-engine_Governance_v1.md#public-facing-canon-layer-external), [Internal Canon Layer](atlas-engine_Governance_v1.md#internal-canon-layer-non-public), and [Subsystem Role Definitions](atlas-engine_Governance_v1.md#subsystem-role-definitions-v1) sections for scope and disclosure guidance.

## Where to Start (Governance v1 → Lite Shard → Index)

1. Read [`atlas-engine_Governance_v1.md`](atlas-engine_Governance_v1.md) for the full canon.
2. Apply [`atlas-v-lite_GovernanceShard_v1.md`](atlas-v-lite_GovernanceShard_v1.md) when working with GPT-only contexts.
3. Use [`atlas-engine_INDEX.md`](atlas-engine_INDEX.md) as the navigational hub for current and future documents.

## Updating Governance Safely

- Add new versions (e.g., `atlas-engine_Governance_v2.md`) alongside v1 rather than replacing it.
- Keep changelogs inside each versioned file and update the index to point to the latest stable version.
- Preserve the Code Block Governance Rule across versions unless explicitly superseded.
- Retain the [Copy-Paste Efficiency Rules](atlas-engine_Governance_v1.md#copy-paste-efficiency-rules-canon-v1), [Prompt File Format Guidelines](atlas-engine_Governance_v1.md#prompt-file-format-guidelines), [Run Prompt Structure](atlas-engine_Governance_v1.md#run-prompt-structure-codex-oriented), [Prompt Memory Protection Rules](atlas-engine_Governance_v1.md#prompt-memory-protection-rules), and [No Invisible Memory Anchors](atlas-engine_Governance_v1.md#no-invisible-memory-anchors) across updates unless a later version explicitly revises them.

## Governance Folder Layout (v1)

- Versioned governance roots remain alongside one another (v1 now; future v2/v3 later) without replacing prior versions.
- Shards (e.g., Lite) live as separate files that inherit from the current governance root.
- Public-facing canon summaries can be extracted from the governance root’s external layer for site use without duplicating internal logic.
- No new files or versions were added in Run G5; this layout describes intended placement for future additions.
