# Integration Guide for Schema v01

This guide explains how to integrate the **Schema v01** into the Decision Console UI and the broader workflow involving the Master Architect, Codex, and the Creative Director.  It outlines the recommended file structures, how the console reads and writes data, and how export/import fits into the operational loop.

## 1. Directory Structure

We recommend maintaining a simple directory hierarchy for data files:

```
data/
  decision_queue.json      # pending decisions
  canon_records.json       # accepted decisions (canon)
  projects.json            # project definitions
  categories.json          # category definitions
  flags.json               # revision flags
```

The UI should read from and write to these JSON files directly.  Each file contains a single top‑level object with an array property (`decisions`, `canonRecords`, `projects`, `categories`, or `flags`).

## 2. Loading Data into the UI

Upon launching the Decision Console, the UI should:

1. **Load configuration:** Read `projects.json` and `categories.json` to populate drop‑downs for project and category selection.  Projects and categories are static or infrequently changed.
2. **Load queue:** Read `decision_queue.json` and display all items where `status` is `pending` or `answered` but not yet moved to canon.
3. **Load canon view:** Optionally display `canon_records.json` to let the user browse existing canon entries by project/category.
4. **Load flags:** Read `flags.json` to highlight canon entries flagged for revision.

## 3. User Interaction and Data Updates

### Answering Decisions

When the Creative Director answers a decision:

1. Update the corresponding decision’s `userResponse` with the selected answer (string or array).
2. Set the decision’s `status` to `answered` and record `timestampAnswered` with the current ISO 8601 date/time.
3. Save the updated `decision_queue.json`.

### Viewing Canon

To browse existing canon records, filter `canon_records.json` by `projectId` and `categoryId`.  The UI can show the history of revisions by expanding the `revisionHistory` array for a record.

### Flagging for Revision

If the user flags a canon record for revision:

1. Create a new entry in `flags.json` with a unique `flagId`, the `recordId` of the canon entry, the user’s identifier in `flaggedBy`, a `reason`, and the current time in `timestampFlagged`.  Set `status` to `open`.
2. Set the canon record’s `status` to `to_revise`.  This signals Codex to generate a new decision.
3. Save both `flags.json` and `canon_records.json`.

## 4. Exporting Decisions for Codex

When the user is ready to submit answers back to Codex:

1. Export the **entire `decision_queue.json` file** (or a filtered version containing only `answered` decisions) by downloading it from the UI.  The file should preserve the schema defined in `decision_queue.json`.
2. Optionally include `flags.json` for any revision flags that have been raised.

## 5. Importing into Codex

Codex will ingest the exported JSON files to update its internal state:

1. For each `decision` in `decision_queue.json` with `status` set to `answered`, Codex creates a new `canonRecord` in `canon_records.json`.  It copies over fields like `questionText`, `responseType`, `userResponse` (as `answer`), `projectId`, `categoryId`, and sets `status` to `canon`.  It also records the `originalDecisionId` and the `timestampApproved`.
2. The answered decisions are removed from `decision_queue.json` or their status is set to `closed`.
3. Flags from `flags.json` are processed: Codex generates new decisions based on flagged canon entries and resets the flag’s status to `resolved` with an appropriate `resolutionNote`.

## 6. Importing Changes Back into the Console

After Codex processes the answers and flags, it will return updated versions of `canon_records.json` and `decision_queue.json` (plus `flags.json` if flags were resolved).  The Decision Console UI should overwrite its local copies with these updated files.  This ensures that newly created canon records appear in the canon view and that new pending decisions (from revisions) show up in the queue.

## 7. Handling IDs and Timestamps

All identifiers (`id`, `recordId`, `flagId`, etc.) should be globally unique.  We suggest using UUIDs or a similar unique scheme.  Timestamps should be in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`) to facilitate sorting and comparison across systems.

## 8. Validation and Error Handling

The Decision Console should validate data before writing files or exporting.  Use the provided JSON schemas to ensure that:

- Required fields are present.
- Enumerated values (`responseType`, `status`) match the allowed set.
- `options` arrays for multiple choice have at least two unique entries.
- Timestamps follow the `date-time` format.

If validation fails, the UI should alert the user and prevent invalid data from being saved or exported.

---

By following this integration guide, the Decision Console will maintain a clean separation between pending decisions, canonical records, configuration data, and flags while enabling a smooth import/export loop with Codex and the Master Architect.