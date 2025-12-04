# Summary of Example Data v01 for Decision Console

This summary describes the sample datasets created to illustrate the **Decision Console** workflow.  These files serve as realistic examples for testing the UI and demonstrating how the schemas defined in **Schema v01** can be populated.

## Files and Contents

| File | Purpose |
|------|---------|
| `decision_queue_example.json` | Contains five decisions, four pending and one already answered.  They cover map design for **OIA**, theme selection for the **Website**, dark mode settings for **AtlasStudio**, physics engine selection for **Atlas‑V**, and dynamic weather for **OIA**. |
| `canon_records_example.json` | Shows four canon records derived from answered decisions.  One record (dynamic weather) includes a revision history to demonstrate how updates are tracked. |
| `flags_example.json` | Contains two flags: an open flag for the dynamic weather canon record due to performance issues, and a resolved flag for the website theme after marketing requested a palette update. |
| `projects_example.json` | Lists four projects: **Octopus In Action (OIA)**, **AtlasStudio**, **Atlas‑V**, and **Atlasforge Website**.  Each project has a description. |
| `categories_example.json` | Defines categories for each project, such as `map_design`, `theme`, `ui_appearance`, and `engine_params`.  Each category specifies which response types are allowed. |

These example datasets are self‑contained and conform to the JSON schemas produced in Run 1.  Identifiers (e.g., `dec-001`, `can-001`) are unique strings, and timestamps follow ISO 8601 format.

## Highlights

### Decision Scenarios

* **OIA Map Design:** A pending decision asks whether to include a hidden underwater cave.  Another decision about dynamic weather has already been answered (“yes”) but later revised to “no,” illustrating how a decision moves through the queue into canon and then through revision.
* **Website Theme:** A pending multiple‑choice question prompts the user to choose between Blue, Purple, and Orange.  The canon record shows “Purple” selected, with a resolved flag noting a subsequent branding change.
* **AtlasStudio UI:** A yes/no question about enabling dark mode demonstrates how UI‑related preferences can be stored and answered.
* **Atlas‑V Engine:** A multiple‑choice decision selects a physics engine (PhysX) for the game engine, showing how technical decisions are represented.

### Flags and Revisions

* The open flag (`flag-001`) highlights a canon record that needs re‑evaluation due to performance issues.  The corresponding canon entry has a revision history indicating that dynamic weather was initially approved and later disabled.
* The resolved flag (`flag-002`) shows how a flag can be handled with a `resolutionNote` describing the outcome (“New decision created with gradient theme options”).

## Usage

These example files can be loaded into the Decision Console to simulate a real workflow.  Developers can use them to validate UI components, test import/export routines, and demonstrate how decisions flow from pending to canon, how flags trigger revisions, and how projects and categories organize content.