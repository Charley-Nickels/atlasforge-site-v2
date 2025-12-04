# Summary of Schema v01 for Decision Console

This summary describes the **JSON schemas** defined for the first version of the Decision Console.  The schemas provide a structured way to store and exchange data among the Master Architect, Codex, and the Creative Director.  They capture the lifecycle of decisions from the initial queue through canonical acceptance and eventual revision.

## Overview of Schemas

| File | Purpose |
|-----|---------|
| `decision_queue.json` | Defines the structure for pending or in‑progress decisions waiting on the Creative Director's input. |
| `canon_records.json` | Describes decisions that have been answered and accepted into the canon, including revision history. |
| `projects.json` | Lists projects (e.g., **OIA**, **AtlasStudio**, **Atlas‑V**, **Website**) that organize decisions. |
| `categories.json` | Specifies categories within projects to further classify decisions (e.g., story arcs, art style, gameplay). |
| `flags.json` | Details revision flags raised against canon records that require review or changes. |

Each schema uses a top‑level object containing an array (e.g., `decisions`, `canonRecords`, `projects`) to make export/import simple: one JSON file per entity type.  Identifiers (e.g., `id`, `projectId`, `categoryId`) are strings and should be globally unique.  Timestamps are ISO 8601 strings for easy parsing.

## Key Elements per Schema

### Decision Queue (`decision_queue.json`)

Pending decisions are stored in the `decisions` array.  Each decision includes:

- **id** – unique identifier (e.g., UUID).
- **questionText** – question or prompt requiring a decision.
- **responseType** – expected response: `yes_no`, `approve_deny`, `multiple_choice`, or `free_text`.
- **options** – choices for multiple‑choice questions (two or more unique strings).
- **projectId** and **categoryId** – link the decision to a project and category.
- **status** – current state: `pending` (awaiting user input), `answered` (user responded), or `closed` (removed without becoming canon).
- **userResponse** – the response captured from the Creative Director; string or array depending on `responseType`.
- **timestampCreated**, **timestampAnswered** – ISO 8601 timestamps marking creation and response.
- **notes** – optional additional context from the Master Architect or system.

### Canon Records (`canon_records.json`)

When a decision is accepted, it moves into the `canonRecords` array.  Each record contains:

- **recordId** – unique identifier for the canon entry.
- **originalDecisionId** – reference back to the decision that generated this record.
- **questionText**, **responseType**, **answer** – the original question, response type, and final answer (string or array).
- **projectId**, **categoryId** – references to the project and category.
- **status** – either `canon` (active), `rejected` (no longer valid), or `to_revise` (needs revision).
- **timestampApproved** – when the decision was accepted into canon.
- **revisionHistory** – array of past revisions, each with a `revisionId`, new answer, timestamp, and optional note.

### Projects (`projects.json`)

Projects define high‑level groupings for decisions.  Each project has:

- **projectId** – unique string (e.g., `OIA`, `AtlasStudio`).
- **name** – human‑readable name.
- **description** – optional text describing the project.

### Categories (`categories.json`)

Categories help group decisions within a project.  Each category includes:

- **categoryId** – unique identifier (e.g., `story_arcs`).
- **projectId** – project to which the category belongs.
- **name** – human‑readable category name.
- **description** – optional description of the category’s scope.
- **allowedResponseTypes** – optional array limiting which response types are valid for decisions in this category.

### Flags (`flags.json`)

Flags enable users to mark canon entries for review.  Each flag consists of:

- **flagId** – unique identifier for the flag.
- **recordId** – reference to the canon record being flagged.
- **flaggedBy** – identifier of the person or system raising the flag.
- **reason** – description of why the entry needs revision.
- **timestampFlagged** – ISO 8601 time when the flag was created.
- **status** – `open` (unresolved) or `resolved` (handled).
- **resolutionNote** – optional note explaining the resolution.

## Rationale

The schemas are intentionally **simple yet extensible**.  By using arrays at the root, the data can easily be exported/imported as single JSON files.  The use of UUIDs or short unique codes ensures identifiers don’t collide across files.  Timestamps with the `date-time` format enable straightforward sorting and auditing.  Optional fields and enumerations provide flexibility without requiring complex validation logic.