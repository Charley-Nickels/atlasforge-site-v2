# Schema and Data References for Decision Console

The Decision Console relies on several JSON schema definitions and example data files to structure and validate its data.  The following tables summarize where these resources are located within the repository.

## Schema Definitions (Run 1)

| Entity | File Path | Description |
|-------|-----------|-------------|
| **Decision Queue** | `console/schema/decision_queue.json` | Defines the shape of decisions in the queue, including fields for question text, response type, project/category IDs, status, timestamps, and user responses. |
| **Canon Records** | `console/schema/canon_records.json` | Describes finalized decisions stored in canon.  Records include answers, revision history, and status flags (canon, rejected, to_revise). |
| **Projects** | `console/schema/projects.json` | Lists all projects available in the system.  Each project has an ID, name and optional description. |
| **Categories** | `console/schema/categories.json` | Lists decision categories by project, along with allowed response types for each category. |
| **Flags** | `console/schema/flags.json` | Defines revision flags raised against canon entries, with fields for record ID, reason, status, and timestamps. |

## Example Data (Run 2)

| Entity | File Path | Description |
|-------|-----------|-------------|
| **Decision Queue Example** | `console/example_data_v01/decision_queue_example.json` | Sample data showing pending and answered decisions across multiple projects. |
| **Canon Records Example** | `console/example_data_v01/canon_records_example.json` | Example canon entries derived from answered decisions, including a revision history. |
| **Flags Example** | `console/example_data_v01/flags_example.json` | Illustrative revision flags, with both open and resolved statuses. |
| **Projects Example** | `console/example_data_v01/projects_example.json` | Example list of projects used in the sample data. |
| **Categories Example** | `console/example_data_v01/categories_example.json` | Example categories for each project, including allowed response types. |

## Flow Diagrams (Run 3)

| Diagram | File Path | Purpose |
|--------|-----------|--------|
| **Decision Flow** | `console/flows_v01/decision_flow.svg` | Visualizes the journey of a decision from creation to canon. |
| **Revision Flow** | `console/flows_v01/revision_flow.svg` | Shows the lifecycle of a canon record when a revision flag is raised. |
| **Project/Category Mapping** | `console/flows_v01/project_category_mapping.svg` | Maps each project to its categories. |
| **Logic Flow** | `console/flows_v01/logic_flow.svg` | Illustrates the approve/deny/skip decision logic. |

These resources provide the structural foundation and illustrative examples that Codex will use when implementing the Decision Console.  For integration details, see `integration_guide_DECISION_CONSOLE_STATEPACK_v01.md`.