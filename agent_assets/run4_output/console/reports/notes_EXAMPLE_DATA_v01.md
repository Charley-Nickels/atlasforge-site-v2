# Notes and Assumptions for Example Data v01

This document explains the assumptions and design decisions made while creating **Example Data v01** for the Decision Console.  The example data is fictional but aims to be realistic within the Atlasforge ecosystem.

## General Assumptions

1. **Fictional IDs:** The identifiers used (e.g., `dec-001`, `can-001`, `flag-001`) follow a simple prefixed numbering scheme for clarity.  In production, IDs would likely be UUIDs or generated automatically.
2. **Timestamps:** Example timestamps are set within November 2025 and use `Z` suffix for UTC.  These can be adjusted to the actual current time when testing the console.
3. **User Identifiers:** Flags use placeholder user identifiers such as `user-creative-director` and `user-marketing`.  Real implementations should capture actual user IDs or names.
4. **Response Types:** Only the response types defined in **Schema v01** are used (yes/no and multiple choice).  Free text and approve/deny responses are not included but are supported by the schema.
5. **Revision History:** Only one canon record (`can-001`) contains a revision history to demonstrate the structure.  More revisions can be added if needed.
6. **Marketing Request Example:** The resolved flag (`flag-002`) implies that marketing requested a new decision for a gradient theme.  The actual new decision is not included here, as it would appear in a subsequent decision queue after Codex processes the flag.

## Project and Category Selection

* The projects and categories reflect typical areas of decision‑making within the Atlasforge ecosystem: map and character design for **OIA**, theme and layout for the **Website**, UI and workflow for **AtlasStudio**, and engine parameters for **Atlas‑V**.
* Categories specify allowed response types.  For instance, `map_design` allows yes/no, multiple choice, and approve/deny, while `ui_appearance` uses yes/no and multiple choice.  These restrictions help guide the type of questions asked.

## Pending vs. Answered Decisions

* Four decisions remain `pending`, representing tasks the Creative Director has not yet answered.
* One decision (`dec-005`) is `answered` to demonstrate how user responses are stored in the decision queue prior to being moved into canon.  The example uses `yes` as the response.

## Canon Records and Flags

* Canon records mirror the answered decisions and include additional metadata such as `timestampApproved` and `status`.
* The open flag (`flag-001`) highlights how a canon record can trigger the creation of a new decision when revision is needed.  The open status shows that action is still required.
* The resolved flag (`flag-002`) demonstrates that flags are not permanent.  A `resolutionNote` explains the outcome, tying the flag to the new decision that was created.

## Using the Example Data

* The example data is meant for development and demonstration purposes.  It should not be used as final canon content.
* To avoid confusion, replace the example IDs and descriptions with actual content when deploying the Decision Console.

## Future Enhancements

* Additional projects and categories can be added to cover more areas of the Atlasforge ecosystem.
* Scenarios involving free text responses and approve/deny decisions could be created to fully exercise the schema.
* More complex revision histories and multiple flagged canon entries could help test edge cases in the console’s flagging system.