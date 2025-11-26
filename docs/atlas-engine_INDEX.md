# Atlas Engine Governance Index

This index organizes governance and behavior references for Atlas Engine and its assistant shards. Use it to navigate current canon and future versions.

## Version Freeze Notice

- v1 is the current stable governance set; treat it as frozen except for critical fixes.
- New versions (v2, v3, …) should be added alongside v1; do not overwrite the existing canon.
- Each version should document changes and update this index to point to the latest stable release.

## Current Documents

- [atlas-engine_Governance_v1.md](atlas-engine_Governance_v1.md)
  - Full governance root for Atlas Engine v1, including canon, loops, and philosophy.
- Key sections:
  - [Governance Canon Harmonization (v1)](atlas-engine_Governance_v1.md#governance-canon-harmonization-v1)
  - [Public-Facing Canon Layer (External)](atlas-engine_Governance_v1.md#public-facing-canon-layer-external)
  - [Internal Canon Layer (Non-Public)](atlas-engine_Governance_v1.md#internal-canon-layer-non-public)
  - [Subsystem Role Definitions (v1)](atlas-engine_Governance_v1.md#subsystem-role-definitions-v1)
  - [Copy-Paste Efficiency Rules (Canon v1)](atlas-engine_Governance_v1.md#copy-paste-efficiency-rules-canon-v1)
  - [Prompt File Format Guidelines](atlas-engine_Governance_v1.md#prompt-file-format-guidelines)
  - [Run Prompt Structure (Codex-oriented)](atlas-engine_Governance_v1.md#run-prompt-structure-codex-oriented)
  - [Prompt Memory Protection Rules](atlas-engine_Governance_v1.md#prompt-memory-protection-rules)
  - [No Invisible Memory Anchors](atlas-engine_Governance_v1.md#no-invisible-memory-anchors)
- [atlas-v-lite_GovernanceShard_v1.md](atlas-v-lite_GovernanceShard_v1.md)
  - Condensed shard for GPT-style assistants powered by Atlas Engine v1.
- [atlas-engine_README.md](atlas-engine_README.md)
  - Overview and quick orientation for the governance folder.

## Versioning

- v1 is the current authoritative canon.
- Future versions should be added as new files (e.g., `atlas-engine_Governance_v2.md`, `atlas-engine_Governance_v3.md`).
- When a new version is introduced:
  - Keep prior versions for reference.
  - Note breaking changes and amendments inside each file’s changelog.
  - Update this index to point to the latest stable version.

## Navigation Model

- Governance root → Lite shard → README → future shards.
- Current path: `atlas-engine_Governance_v1.md` → `atlas-v-lite_GovernanceShard_v1.md` → `atlas-engine_README.md` → (future shard/versions).
- All links remain relative within `/docs/` for portability.

## Canonical Code Block Rule

- Atlas-V → Codex implementation prompts must be delivered inside a single clean code block with no surrounding text.
- Codex → Atlas-V Run Reports must be returned inside a single clean code block with no surrounding text.
- This rule applies across governance versions unless superseded by a later canon update.
- Copy-Paste Efficiency Rules, Prompt File Format Guidelines, Run Prompt Structure, Prompt Memory Protection Rules, and No Invisible Memory Anchors are part of v1 canon; keep them intact unless a later version supersedes them.

## Planned Shards and Extensions

Use these placeholders to align future documents without moving current files:

- Atlas Engine governance v2 and v3 (new files alongside v1).
- Atlas-V Prime / core engine shard (future detailed behaviors).
- AtlasStudio governance shard (workstation-specific guidance).
- Manager Mode, Game Mode, or other subsystem shards as they are formalized.
- Public-Facing Canon Layer reference (section-level; no separate file required).

## Navigation Notes

- All links are relative within `/docs/` for portability.
- External marketing or site pages should reference these documents at a high level but not duplicate them.
- Navigation path for new rules: Governance root → relevant section anchor → Lite shard inheritance notes.
