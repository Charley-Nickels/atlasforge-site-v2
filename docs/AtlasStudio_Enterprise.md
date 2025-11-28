# AtlasStudio Enterprise — Decision Engine for Workflows & Automation

## Overview
AtlasStudio Enterprise is a decision-engine-driven assistant powered by Atlas-V that helps organizations design workflows, data structures, automation, and documentation. It uses structured decision blocks to guide teams through planning and can be delivered through familiar interfaces such as Excel Online, SharePoint lists, or custom apps. While optimized for Microsoft 365 environments, the approach is adaptable to other ecosystems.

## Quickstart: Using AtlasStudio Enterprise
1. **Define a project.** Examples include a new intake workflow, QA tracker, escalation pipeline, or reporting loop.
2. **Generate decision blocks.** Ask an AI assistant to produce blocks with items and options using the AtlasStudio Enterprise schema.
3. **Create an interactive decision UI.** Implement decisions as dropdowns or fields in Excel Online, a SharePoint list, a Loop component, or a custom internal tool.
4. **Review and finalize decisions.** Stakeholders select options and annotate decisions directly in the UI.
5. **Export decision JSON.** Use a script, Power Automate, or another tool to export the current decisions into a JSON object that follows the AtlasStudio Enterprise schema.
6. **Use the JSON with an AI assistant.** In Microsoft 365 Copilot or another model, paste a short excerpt from this spec, add the decision JSON, and request SOPs, workflows, templates, and flow outlines.
7. **Implement and refine.** Build the artifacts in Word, Excel, SharePoint, Power Automate, and related tools, adjusting decisions and re-exporting JSON as you iterate.

## Core Concept — Decision Engine
AtlasStudio Enterprise follows a repeatable loop:
1. **Define the project.** Examples include a new intake process, QA tracker, escalation pipeline, or reporting cadence.
2. **Generate structured decisions.** The system creates blocks with items and options that capture choices about workflow stages, ownership, SLAs, data storage, and automation.
3. **Review and answer decisions.** Teams interact with the decisions through an interface of their choice (Excel, SharePoint, Loop, or a custom decision console) and select options.
4. **Export decisions as JSON.** Finalized choices are exported in a consistent schema that downstream tools can interpret.
5. **Generate assets.** AI assistants such as Microsoft 365 Copilot use the decision JSON to propose process flows, SOPs, Excel templates, SharePoint lists, Power Automate flow outlines, and reporting structures.

This pattern is reusable across many project types: define the scope, answer decisions, export JSON, and generate the supporting assets.

## Decision JSON Schema (High-Level)
AtlasStudio Enterprise uses a simple, flexible JSON schema (see `data/atlasstudio_enterprise_schema.json`) to capture decisions:
- **meta:** project-level metadata describing the schema version, intent, and example project types.
- **blocks:** an array of decision blocks, each with:
  - `id`, `title`, `description`
  - `items`: decision entries with `id`, `label`, `description`, `type`, `options`, `default`, `tags`, and `impact` notes.
- **items:** typically `select` type with predefined options, though text fields can be used for freeform inputs. Tags help group items (e.g., workflow, SLA, ownership), and impact notes explain why each decision matters.

This schema is UI-agnostic: dropdowns in Excel, choice fields in SharePoint, or any interactive form can be mapped to these fields. The exported JSON remains consistent regardless of the UI.

## Example Decision JSON Fragment
```json
{
  "meta": {
    "schema_version": "1.0",
    "description": "Example fragment for an AtlasStudio Enterprise project.",
    "project_name": "Sample Intake Workflow"
  },
  "blocks": [
    {
      "id": "project_overview",
      "title": "Project Overview",
      "description": "High-level context for the workflow.",
      "items": [
        {
          "id": "priority_level",
          "label": "Project Priority",
          "description": "How urgent and visible this workflow is within the organization.",
          "type": "select",
          "options": ["Low", "Medium", "High", "Critical"],
          "default": "Medium",
          "tags": ["governance", "planning"],
          "impact": "Higher priority may require stricter SLAs, more automation, and clearer reporting."
        }
      ]
    }
  ]
}
```

## Example Use Cases (Generic)
- **Call center escalation workflow:** decisions around triage steps, escalation owners, time thresholds, and automated alerts. Outputs: Word SOP, Excel escalation log, Power Automate notifications, and a SharePoint case list.
- **Quality assurance and coaching tracker:** decisions for scoring categories, calibration cadence, ownership, and reporting frequency. Outputs: Excel scorecard template, Power BI dashboard outline, and coaching SOP.
- **Intake form and triage pipeline:** decisions about required fields, validation rules, routing logic, and approval steps. Outputs: SharePoint intake list, Power Automate triage flow, and a process map.
- **Knowledge article intake and publishing:** decisions on submission criteria, review states, approver roles, and publishing channels. Outputs: SharePoint knowledge base list, approval flow sketch, and authoring checklist.
- **Coverage and capacity planning:** decisions on scheduling granularity, forecast horizon, and exception handling. Outputs: Excel coverage planner, reporting views, and a rollout SOP.

## Using AtlasStudio Enterprise with Microsoft 365 Copilot
Follow these steps to apply the pattern with Copilot:
1. **Start a project** by generating decision blocks in the AtlasStudio Enterprise schema.
2. **Create an interactive UI** (Excel Online table, SharePoint list, Loop component, or custom app) using decision items as rows and options as dropdowns.
3. **Finalize decisions** by selecting options for each item.
4. **Export to JSON** that matches the schema (via Power Automate, script, or built-in export).
5. **Prompt Copilot** with a concise instruction set and the decision JSON:
   - Include an excerpt from the schema overview explaining how to interpret decisions.
   - Provide the exported JSON.
   - Request specific outputs.

**Ready-to-copy Copilot prompt:**
> You are AtlasStudio Enterprise. I will provide a decision JSON that describes a business workflow in the AtlasStudio Enterprise schema.\
> Parse the decisions and then generate: 1) a step-by-step workflow description, 2) a draft SOP in Word format, 3) an Excel table schema (headers, data types, validation), and 4) a high-level Power Automate flow outline.

This prompt tells Copilot how to read the JSON and what deliverables to produce.

## Copilot 365 Prompt Snippets
1. **Design decisions for a new project**
   > You are AtlasStudio Enterprise. I will describe a business workflow. Using the AtlasStudio Enterprise decision schema (blocks, items, and select options), generate a set of decision blocks that covers workflow structure, ownership, data storage, reporting needs, and automation opportunities. Format the output as JSON compatible with the AtlasStudio Enterprise schema.

2. **Turn decision JSON into SOP and assets**
   > You are AtlasStudio Enterprise. I will provide a decision JSON object that follows the AtlasStudio Enterprise schema. 1) Parse the decisions. 2) Generate a step-by-step workflow description. 3) Draft an SOP outline suitable for a Word document. 4) Propose an Excel (or SharePoint) table schema, including column names, data types, and any recommended validation rules. 5) Outline a Power Automate flow (trigger, key conditions, and actions) that automates the workflow described.

3. **Refine an existing decision set**
   > Review this existing decision JSON and suggest 3–5 follow-up decisions that would improve clarity, governance, or reporting. Return updated decision blocks in the same schema.

## Implementation Notes
- The JSON schema supports interactive decision consoles and can back Excel or SharePoint dropdowns without custom code.
- Exported JSON is portable and can be consumed by AI assistants, documentation generators, or automation scaffolding tools.
- The approach is tool-agnostic but tuned for Microsoft 365: Excel/Power BI for data, SharePoint for structured lists, and Power Automate for flows.

## How to Interpret Decision JSON (for Copilot or other AI)
- Treat each block as a thematic group (e.g., workflow structure, data storage, reporting cadence).
- Use the `tags` field to understand intent (e.g., `workflow`, `sla`, `ownership`, `data_structure`).
- Respect the `default` values if an item is unanswered.
- Use the `impact` notes to explain why a choice matters when generating SOPs or automations.

Provide the decision JSON alongside this guidance when prompting Copilot so it can map choices to the desired outputs.
