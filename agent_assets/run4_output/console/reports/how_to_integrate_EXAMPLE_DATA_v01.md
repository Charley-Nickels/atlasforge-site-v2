# How to Integrate Example Data v01 into the Decision Console

This guide explains how to use the example data files provided in **Example Data v01**.  These files populate the Decision Console with sample projects, categories, decisions, canon records, and flags so that developers can test features and demonstrate functionality.

## 1. Set Up the Data Directory

Place the example files into your local `data` directory or wherever the Decision Console expects to find its JSON files.  The recommended layout is:

```
data/
  decision_queue.json      → use `decision_queue_example.json` as a starting point
  canon_records.json       → use `canon_records_example.json`
  flags.json               → use `flags_example.json`
  projects.json            → use `projects_example.json`
  categories.json          → use `categories_example.json`
```

Rename the example files accordingly (removing the `_example` suffix) or copy their contents into your working files.

## 2. Loading the Example Data

When the Decision Console starts up:

1. **Read projects and categories:** Load `projects.json` and `categories.json` first.  The UI uses these to populate project and category drop‑downs and to validate that decisions reference valid project/category IDs.
2. **Read the decision queue:** Load `decision_queue.json`.  Display all decisions where `status` is `pending` or `answered`.  The example file contains four pending decisions and one answered decision.  The answered decision demonstrates how `userResponse` and `timestampAnswered` should be represented.
3. **Read canon records:** Load `canon_records.json`.  Show the four canon entries by project and category.  Note that the first canon record contains a `revisionHistory` with one revision.  Expand this to illustrate revision tracking in your UI.
4. **Read flags:** Load `flags.json`.  Highlight the flagged canon records in the UI.  Display the reasons and statuses, and allow the user to mark flags as resolved or open new ones.

## 3. Interacting with the Example Data

### Answering Pending Decisions

Use the UI to answer any of the four pending decisions.  Once answered:

* Update the decision’s `status` to `answered`, record the `userResponse` (string or array depending on the `responseType`), and set `timestampAnswered` to the current time.
* Save `decision_queue.json`.  The example file demonstrates this structure with `dec-005`.

### Moving Answers to Canon (Simulated)

When exporting to Codex, the console would normally send only the answered decisions.  For demonstration purposes, you can simulate this by copying answered decisions from `decision_queue.json` into new entries in `canon_records.json`.  Use the `canonical_records_example.json` file as a template:

* Copy `questionText`, `responseType`, and `userResponse` into `answer`.
* Assign a new `recordId` (e.g., `can-005`), store the original `id` in `originalDecisionId`, set `status` to `canon`, and record a `timestampApproved`.
* Reset or remove the decision from the queue.

### Handling Flags and Revisions

To experiment with flags:

* Open the flag list using `flags.json`.  Click on `flag-001` to view the associated canon record.  The revision history shows how a decision initially approved can be revised later.
* Resolve `flag-001` by providing a `resolutionNote` in the UI and updating the `status` to `resolved`.  Save the updated `flags.json`.
* Create a new decision in the queue when a flag has `status = open`.  The new decision should be similar to the original but with updated options or context.  Use `flag-002` as an example, which resulted in a new multiple‑choice decision for gradient themes.

## 4. Validation Against the Schema

Use the JSON Schema files from **Schema v01** to validate the example data.  This ensures that:

* Every decision has required fields (`id`, `questionText`, `responseType`, `projectId`, `categoryId`, `status`, `timestampCreated`).
* Canon records reference valid original decision IDs and contain proper `answer` types.
* Flags reference valid canon records.
* Projects and categories exist for every reference.

The example data has been verified against the schema, but you should maintain validation in your application to catch errors in future edits.

---

These example files provide a baseline dataset for development and demonstration.  Modify or extend them as needed for further testing, always keeping the schema requirements in mind.