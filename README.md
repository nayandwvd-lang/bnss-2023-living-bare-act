# BNSS Guide — Project Handoff Kit

A portable, self-contained kit for building a **Bharatiya Nagarik Suraksha Sanhita, 2023** website on the same architecture as the CPC Master Practitioner & Academic Guide.

Move this whole folder wherever you want the BNSS project to live. Nothing in here depends on the CPC repo being nearby.

---

## What is in this kit

| File | What it is |
|---|---|
| `README.md` | This file. Start here. |
| `CLAUDE.md` | Drop this at the root of the new repo. It is the standing project directive Claude reads automatically every session. |
| `PROMPTS.md` | The prompt library. Copy-paste prompts, phase by phase, from scaffolding to the hundredth provision. |
| `reference/01-cognitive-schema.md` | The five-stage schema, plus the BNSS-only sixth stage (CrPC concordance). The single most important file. |
| `reference/02-component-system.md` | Containers, badges, MicroTree. Exact syntax, and every trap that has actually bitten. |
| `reference/03-authoring-pipeline.md` | How to write a 500-line provision without hitting the output-token ceiling. Guarded splice scripts. |
| `reference/04-content-standards.md` | Voice, intellectual-honesty rules, case-law discipline, the invented cast. |
| `reference/05-bnss-roadmap.md` | Chapter batches, sidebar architecture, and the rules for handling CrPC-era authority. |
| `starter/` | Real working files, not descriptions of them. Copy them in verbatim. |

---

## The five-minute setup

1. Move this folder to wherever the project should live, and rename it if you like.
2. Copy `CLAUDE.md` to the repo root (it is already at the right level if you work inside this folder).
3. Open Claude Code in that folder.
4. Paste the **Phase 0 kickoff prompt** from `PROMPTS.md`.

That prompt tells Claude to read the `reference/` files first, scaffold VitePress, install the component system from `starter/`, and build one pilot provision end-to-end before touching anything else.

---

## What this kit is actually for

The CPC site is not a reference manual with nice styling. It is a **teaching machine** with a specific claim: a reader who has never opened a bare Act should be able to arrive cold at any provision and leave able to argue it.

That claim is enforced by an architecture, not by good intentions:

- **Stage 1 puts a human dispute before the section number.** The reader knows what is at stake before they meet any legal language.
- **Stage 2 decompiles the bare Act inline** — mandatory words, discretionary words and gating provisos are visually distinguished as you read, not summarised afterwards.
- **Stage 3 reduces the provision to a mechanical decision tree** so the reader can see exactly where a case dies.
- **Stage 4 makes the reader commit to an answer before revealing the ruling.** Recall beats re-reading.
- **Stage 5 is the operational layer** — limitation, sword/shield, drafting pitfalls, and one promoted winning ratio.

Everything in `reference/` exists to keep those five stages honest across hundreds of provisions written in different sessions.

---

## Why BNSS is not just "CPC with different numbers"

Read `reference/05-bnss-roadmap.md` before writing any content. The four things that genuinely differ:

1. **BNSS has no Orders.** The CPC's Section + First Schedule Order split does not exist. BNSS is 531 sections across 39 chapters, with Schedules that serve a different function. The sidebar must be **chapter-based**.
2. **Almost all authority is CrPC-era.** This is the defining problem. A site that cites *Lalita Kumari* without saying what happened to Section 154 is worse than useless. Hence the **sixth stage**.
3. **The interlocks are different statutes.** BNSS interlocks with the **BNS 2023** and the **BSA 2023** — not the IPC and the Evidence Act. Every Interlocking Matrix must be re-pointed.
4. **Renumbering is where hallucination is most dangerous.** A wrong CPC section number is embarrassing. A wrong BNSS section number cited in a bail application is professional damage. `reference/05` makes verification a hard gate, not a suggestion.

---

## Non-negotiables

These are the rules that, when broken in the CPC project, cost real time to undo.

- **Content lives in markdown, never inside a Vue component.** VitePress local search indexes rendered markdown. Anything you hide in a component's internals silently disappears from search. This is why the containers are hand-written markdown-it rules and why the accordion is a native `<details>`.
- **Never invent a citation.** Cite only judgments you are certain exist. If unsure, describe the proposition and mark it for verification. See `reference/04`.
- **Verify the rendered output, not the source.** Run the build and count the rendered classes. The check block is in `reference/02`.
- **One promoted winning ratio per provision.** Not three. The discipline of choosing is the value.

---

## A note on tooling

The CPC project ran on a machine with no `npm`, `npx`, `node` or `gh` on the PATH, using an ad-hoc Node binary at `.tooling/node`. If your new environment has a normal Node install, ignore all of that and use plain `npm`. `reference/03` covers both paths.
