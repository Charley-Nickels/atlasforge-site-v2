# Notes and Assumptions for Schema v01

This document captures the assumptions and design considerations made when defining **Schema v01** for the Decision Console.  Understanding these assumptions will help guide implementation and future iterations.

## Naming Conventions

- **IDs:** All identifiers (`id`, `recordId`, `projectId`, `categoryId`, `flagId`, `revisionId`) are strings.  We assume they are generated using a globally unique method (e.g., UUIDs) to avoid collisions across files and sessions.
- **File names:** The schema files (`decision_queue.json`, `canon_records.json`, `projects.json`, `categories.json`, `flags.json`) represent collections and are pluralized for clarity.  Data files following these schemas should use the same names to make import/export straightforward.
- **Property names:** Use camelCase for property names (e.g., `timestampCreated`, `userResponse`) to be consistent with JavaScript/TypeScript conventions and to reduce ambiguity.

## Data Relationships

- **Project and Category linkage:** Decisions, canon records, and categories all reference projects via `projectId`.  Categories also carry a `projectId` to ensure that category identifiers remain unique within a project.  The UI should ensure that only categories belonging to the selected project are displayed when creating or answering decisions.
- **Cross‑references:** Canon records store `originalDecisionId` to trace back to the queue.  Flags reference `recordId` to identify which canon entry is flagged.  These references rely on IDs being stable and unique.

## Response Handling

- **responseType:** Four basic response types are defined: `yes_no`, `approve_deny`, `multiple_choice`, and `free_text`.  If a new type is required, it should be added to the enumerations in all relevant schemas.  For multiple choice questions, the `options` array must contain at least two unique strings.
- **userResponse and answer:** The schemas allow `userResponse` and `answer` to be either a string or an array of strings.  This flexibility supports free text, single selection, and multi‑selection answers.  It is up to the UI to enforce the expected shape based on the response type.

## Status Flags

- **Decision statuses:** `pending` (awaiting input), `answered` (user responded), and `closed` (removed without becoming canon).  A decision becomes `closed` either when it is exported and processed by Codex or when the system discards it.
- **Canon statuses:** `canon` (accepted and active), `rejected` (discarded), and `to_revise` (needs revision).  When a canon record is flagged for revision, its status is set to `to_revise`.
- **Flag statuses:** `open` means a flag is awaiting resolution; `resolved` indicates it has been handled.  Resolved flags may include a `resolutionNote` describing the outcome (e.g., “Revised and new canon record created”).

## Import/Export Flow

- **Exporting from the Decision Console**: The console should export full JSON files, not fragments.  Exporting partial data (e.g., only answered decisions) is possible but requires the receiver (Codex) to handle merging; exporting complete files reduces complexity.
- **Codex processing:** Codex is responsible for reading the exported files, updating or creating canon records, clearing answered decisions from the queue, and resolving flags.  It will then return updated versions of `canon_records.json` and `decision_queue.json` (plus `flags.json` if flags were resolved) for the console to reload.
- **Synchronization:** It is assumed that only one actor edits a file at a time.  There is no concurrency mechanism in Schema v01.  Future versions may introduce versioning or locking to prevent conflicts when multiple users interact simultaneously.

## Revision Handling

- When a canon entry’s status is set to `to_revise`, Codex will generate a new decision and insert it into `decision_queue.json`.  The `originalDecisionId` field in the resulting canon record provides traceability back to the initial decision.  The `revisionHistory` array in the canon record holds a chronological record of changes, including new answers and timestamps.

## Implementation Note

Schema v01 is intentionally minimal to allow rapid implementation.  It does not include advanced constraints like unique ID enforcement or relational integrity.  The Decision Console and Codex should implement additional checks (e.g., ensuring that `projectId` and `categoryId` references exist) in code.  When the workflow stabilizes, a future schema version can incorporate more complex validation rules.