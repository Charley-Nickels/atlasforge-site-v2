# Notes and Assumptions for Flow Diagrams v01

This document captures the design choices, assumptions, and limitations encountered while creating the flow diagrams for **Flow Diagrams v01**.  Understanding these points will help guide future iterations and contextualize the visuals.

## Design Choices

1. **Simple Geometric Shapes:** The diagrams use rectangles and straight arrows to keep the visuals uncluttered and easy to interpret.  Rounded corners or drop shadows were avoided to maintain a clean, schematic look consistent with the Atlasforge brand.
2. **Colour Palette:** Each diagram uses a distinct, muted colour scheme (blues for decision flow, yellows for revision flow, greens for project mapping, and oranges for logic flow).  This differentiation helps users quickly associate each visual with a particular concept while maintaining harmony with the overall brand palette.
3. **Fixed Dimensions:** All SVGs are set to fixed widths and heights.  They can be scaled uniformly without loss of quality, but extremely narrow or wide aspect ratios may distort the layout.  If necessary, adjust `width` and `height` attributes proportionally.
4. **Single‑Column Project Mapping:** Rather than drawing lines between separate project and category nodes, the `project_category_mapping.svg` lists categories inside each project box.  This simplified representation still conveys the mapping without complex connection lines.  A future version could use a more detailed network diagram if needed.
5. **Branching Logic:** In `logic_flow.svg`, the decision branching uses three diagonal lines from the top box to the bottom choices to visually suggest divergent paths.  Additional branches (e.g., for multiple choice options) could be added similarly.

## Assumptions

1. **Static Workflow:** The diagrams assume a linear or straightforward workflow.  They do not depict alternative loops (e.g., repeated revisions) or asynchronous processes (e.g., multiple flags at once).  In practice, workflows can be more complex.
2. **Terminology:** Labels such as “Canon Records,” “Flag Raised,” and “Return to Queue” rely on terminology defined in **Schema v01** and **Example Data v01**.  If naming changes, diagrams should be updated accordingly.
3. **Audience Familiarity:** It is assumed that viewers have some knowledge of the Decision Console ecosystem.  The diagrams are not exhaustive; they supplement textual explanations rather than replace them.

## Limitations and Future Enhancements

* **Interactivity:** The SVGs are static; they do not animate or respond to user interaction.  Interactive diagrams could help users explore complex flows (e.g., clicking a flag to see resulting decisions).
* **Scalability:** For larger projects with many categories or more nuanced logic (e.g., multiple response types), additional diagrams or more complex layouts may be necessary.  Dynamic generation via tools like Graphviz could reduce manual editing.
* **Accessibility:** Text contrast and font sizes were chosen for readability, but accessibility guidelines (e.g., colour contrast ratios) should be validated if these diagrams are used in public‑facing documentation.

---

These notes provide context for the current diagrams and highlight areas for potential improvement.  As the Decision Console evolves, the diagrams can be updated to reflect new workflows, entities, or terminologies.