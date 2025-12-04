# Summary of Flow Diagrams v01 for Decision Console

This summary describes four SVG diagrams created to visualize key workflows and relationships within the Decision Console.  The diagrams illustrate how decisions flow through the system, how revision flags operate, how projects map to categories, and the logic for handling user responses (approve, deny, or skip).

## Diagram Overview

| File | Description |
|------|-------------|
| `decision_flow.svg` | Depicts the high‑level path of a decision: generation by the Master Architect and Codex, placement in the decision queue, response by the Creative Director, and acceptance into the canon.  Arrows show the sequential progression. |
| `revision_flow.svg` | Shows the lifecycle of a canon record when a revision flag is raised.  It begins with an existing canon record, moves through the flag being raised, a new decision appearing in the queue, a new canon record being created, and ends with the flag’s resolution. |
| `project_category_mapping.svg` | Presents projects alongside their associated categories.  Each project box lists the categories relevant to that project, providing a quick reference for how decisions are organized. |
| `logic_flow.svg` | Illustrates the branching logic when the Creative Director responds to a decision.  The decision can be approved, denied, or skipped, leading respectively to creation of a canon record, marking the decision as rejected, or returning it to the queue. |

## Use Cases

These diagrams serve as visual aids for:

- **Onboarding and training:** New team members can quickly understand how decisions move through the system and how revisions are handled.
- **Documentation:** Integrators and developers can reference the diagrams when implementing features such as the revision workflow or mapping UI components to the underlying data model.
- **Stakeholder communication:** Stakeholders can use these visuals during presentations or design reviews to illustrate complex workflows without diving into code or data structures.

Each SVG is lightweight and scalable, making them suitable for embedding in web interfaces or documentation.  They are stored under `console/flows_v01/` and can be loaded directly in web pages or converted to other formats if needed.