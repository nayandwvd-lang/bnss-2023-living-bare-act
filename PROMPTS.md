# Prompt Library

Copy-paste prompts, in order. Each is self-contained — Claude does not need to have seen the previous one, because the standing directives live in `CLAUDE.md` and the detail lives in `reference/`.

---

## Phase 0 — Kickoff

Paste this first, in a fresh Claude Code session opened in the project folder.

> Read `CLAUDE.md` and every file in `reference/` before doing anything else. They define the architecture, the schema and the traps for this project — treat them as binding, not advisory.
>
> Then scaffold the project:
>
> 1. Initialise a VitePress project. `package.json` with `"type": "module"`, VitePress 1.6.3 or later as the only dependency, and scripts for `dev`, `build` and `preview`.
> 2. Create `docs/`, `docs/chapters/`, `docs/drafts/`, `docs/.vitepress/`, `docs/.vitepress/markdown/`, `docs/.vitepress/theme/`, `docs/.vitepress/theme/components/`.
> 3. Copy the working files from `starter/` into place — `containers.mjs`, `MicroTree.vue`, `theme/index.js`, `custom.css`, `config.mjs`, `deploy.yml`. They are working code from a live project; use them as they are rather than rewriting them. Confirm every `bnss-` class name is consistent between the CSS and the container renderers.
> 4. Write `.gitignore`: `node_modules/`, `docs/.vitepress/dist/`, `docs/.vitepress/cache/`, `.tmp-*`, `TASKS.md`, `dashboard.html`.
> 5. Set the site title to "BNSS Practitioner & Academic Guide", local search on, `cleanUrls: true`, `base: process.env.DOCS_BASE ?? '/'`, and a theme colour distinct from the CPC site's `#8b1a1a`.
> 6. Build. Confirm it succeeds and that `MicroTree` and all five containers render on a throwaway test page. Then delete the test page.
>
> Report the sidebar structure you propose before writing any content. Do not start on a provision yet.

---

## Phase 0b — Bare Act ingestion

> I am putting the BNSS 2023 bare Act text at `reference/bare-act/`. Before any content is written, set up the verification workflow described in `reference/05-bnss-roadmap.md`:
>
> 1. Confirm the text is complete and machine-searchable, and tell me if it is not.
> 2. Build an index of section number → marginal heading, so a section number can be checked in one grep.
> 3. Confirm the actual chapter count, the chapter numbers and the chapter titles from the text, and correct the functional grouping in `reference/05` against what you find.
>
> From this point on, no BNSS section number goes into any page unless you have read the section text and confirmed it says what the page claims. If you cannot verify one, use the flagged form. Do not assert from memory, including for the "commonly cited mappings" table — that table is a place to look, not a source.

---

## Phase 1 — The pilot provision

> Build the pilot provision, end to end, following the six-stage schema in `reference/01-cognitive-schema.md` exactly.
>
> Provision: the BNSS section on **information in cognizable cases (the FIR provision)**, together with the electronic-registration and zero-FIR material that now sits with it. Verify the section number from the bare Act first and tell me what it is.
>
> Use the chunked guarded-splice pipeline in `reference/03-authoring-pipeline.md`. Four chunks, `.cjs` scripts with anchor assertions, badges as a separate counted pass.
>
> Requirements specific to the pilot:
> - Stage 1 opens on a person at a police station being turned away, not on a section number.
> - The `### What changed from the CrPC` stage must state the delta bucket by name, show the CrPC and BNSS text side by side with the changed words bolded, and say in one paragraph what a practitioner must now do differently.
> - The concordance must deal squarely with *Lalita Kumari* — what it decided, under which CrPC section, and precisely how much of it survives on the new text. Do not assert that it has been displaced unless the text supports it.
> - Five instinct scenarios. At least one where the complainant is clearly in the right and still gets nowhere, with an honest explanation of why.
>
> Then build, run the verification block from `reference/02`, and show me the class counts. Do not commit until both leak counts are zero and the 4× / 2× ratios hold.
>
> This provision sets the template for the whole site. Take the time.

---

## Phase 1b — Template review

> Show me the rendered pilot page, then answer the seven-question checklist at the end of `reference/01-cognitive-schema.md` honestly for it — including any question where the answer is no.
>
> Then tell me the three things about the format you would change now that you have written one for real, and why. I would rather fix the template on one provision than on thirty.

---

## Phase 2+ — Standard provision prompt

The workhorse. Use it for every provision after the pilot.

> Next provision: **<name / topic>**.
>
> Verify the BNSS section number(s) against the bare Act and tell me what you found before writing.
>
> Then build the full six-stage block, following `reference/01-cognitive-schema.md` and using the chunked splice pipeline in `reference/03`. Standards in `reference/04` apply — in particular: no invented citations, at least one scenario where the sympathetic party loses, exactly one promoted winning ratio, and the winning ratio's own limits written into the block.
>
> Before you start, tell me:
> 1. the delta bucket (renumbered only / drafting changes / substantively amended / new),
> 2. the case you intend to promote as the winning ratio and why, and
> 3. any cross-reference this provision has to material already written, so the two stay consistent.
>
> Then write it, build it, run the verification block, and commit naming the provision.

---

## Phase 2+ — Clustered provisions

> Next: the **<topic>** cluster — <sections>.
>
> These read together, so treat them as one block with a combined heading, the way `sec-21-and-21A` was handled in the CPC project. One set of six stages covering all of them, not one set per section.
>
> Before writing, tell me how you propose to divide the cluster across the four splice chunks, and where the natural fault lines are. If a single chunk would be too large, say so and split it into D1/D2 rather than compressing the HUD.

---

## Chapter consolidation

> The chapter file is now complete. Add the `## Chapter consolidation — <a question a reader actually arrives with>` section at the end.
>
> It is a decision aid, not a summary. It must answer the practical question directly and route the reader to the right provision for each branch. Do not restate what the provisions already say.
>
> Then run the verification block across the whole file and report the totals per container against the number authored.

---

## Concordance page

> Update the CrPC → BNSS concordance page with the provisions completed since it was last touched.
>
> Only verified rows go on it. Each row: CrPC section, BNSS section, delta bucket, one line on the practical consequence, and a link to the provision page.
>
> If a row is on the page unverified from an earlier session, either verify it now or remove it. Tell me which you did.
>
> Do not add rows for provisions that have not been written yet.

---

## Diagnostic prompts

**When the build fails after a splice:**

> The build failed. Before changing anything, work out whether this is (a) an unclosed container, (b) an ASCII apostrophe inside a MicroTree prop, (c) a badge inside a prop, or (d) a splice that landed in the wrong provision block. Run `grep -n "[A-Za-z]'[A-Za-z]"` on the file and check the container closers first — those are the top two causes. Tell me the cause before you tell me the fix.

**When the class ratios are wrong:**

> The verification block shows `<container>` at `<n>` where I expected `<4 × authored>`. That ratio is almost always a `::: oneminute` or `::: story` opened without an inline title. Find every container opener in the file, list the ones with no title on the opener line, and fix them.

**When an Edit is rejected as stale:**

> That is the expected consequence of the splice scripts rewriting the file. Re-read the narrow affected range and re-issue the identical edit. Do not investigate it further.

**When you are not sure a citation is real:**

> Do not write it. Use the fallback in `reference/04`: state the proposition, describe the case without a citation, and add the `::: info Verify before citing` note. Tell me which propositions you had to handle that way so I can check them.

---

## Session-resume prompt

For picking up after a break or a context reset.

> Resume the BNSS project. Read `CLAUDE.md` and `reference/01-cognitive-schema.md`, then `TASKS.md`, then check `git log --oneline -10` and `git status`.
>
> Tell me: what was last completed, what is next in the roadmap in `reference/05`, and whether the working tree is clean. Then continue with the next provision using the standard provision prompt. Do not re-verify work that is already committed and building clean.

---

## Quality-audit prompt

Run every ten provisions or so.

> Audit the last ten provisions against `reference/04-content-standards.md`. Specifically:
>
> 1. Any citation you are not certain of, and whether it carries a `Verify before citing` note.
> 2. Any provision where every instinct scenario ends with the sympathetic party winning.
> 3. Any provision with more than one promoted winning ratio, or with a winning ratio whose limits are not stated.
> 4. Any `### What changed from the CrPC` that does not name its delta bucket, or that asserts a section number without having verified it.
> 5. Any concordance flag (`⚠️ Unverified`) that has been silently dropped in a later chunk of the same provision.
> 6. Any block that reads as a citation list rather than as reasoning supported by citations.
>
> Report findings as a list with file and line. Do not fix anything yet — I want to see the whole picture first.
