# 01 — The Cognitive Schema

The architecture that makes the site a teaching machine rather than a styled bare Act. Read this before writing a single line of content.

---

## The skeleton

Every provision block, without exception, in this order and with these exact heading texts:

```markdown
## <Provision heading>

### The dispute this solves
### The Act, decompiled
### How this actually runs
### In plain English
### What changed from the CrPC
### Test your instinct
### Practitioner HUD — operational realities
#### The winning ratio
#### Sword and shield
#### The limitation clock
#### Interlocking matrix
#### The authorities
#### Strategy and drafting
```

`### What changed from the CrPC` is **BNSS-only**. It does not exist in the CPC project. It is the highest-value thing this site can offer.

A "provision" may be a single section or a tight cluster that must be read together (for example, the arrest provisions, or bail and bail bonds). Cluster when the sections genuinely interlock; do not cluster to save effort.

---

## Stage 1 — Ground-Zero Anchor · `### The dispute this solves`

**Purpose.** Put a human being in trouble in front of the reader *before* any statutory language. The reader must know what is at stake before they are asked to care about a section number.

**Contains, in order:**

1. A `::: oneminute` container with an **inline title that is a complete sentence** — a claim, not a topic label.
2. A `::: story` container with an inline title, giving the conceptual map.

**The `oneminute` block.** Three to six short paragraphs. Written so a person who has never opened a bare Act finishes it knowing what the provision does and why anyone fights about it. It must:

- open with the human situation, not the section;
- state the operative rule in plain words;
- name the one thing most people get wrong.

**The `story` block.** This is where the conceptual scaffolding goes — the taxonomy, the "two kinds of X and why lawyers confuse them", the policy reason behind the rule. It is longer than the `oneminute`. It is allowed to be genuinely intellectual. It is not allowed to be abstract: every proposition lands on a concrete consequence.

**Forbidden in Stage 1:** section numbers in the first sentence; the words "this section provides that"; any citation; any statutory quotation.

**Title discipline.** Both containers **must carry an inline title on the opener line**. Without one they render at the wrong nesting depth and lose their header. Titles that work:

> `::: oneminute You cannot fight a case for four years, lose, and then say the court was the wrong one.`
> `::: story Two kinds of "no jurisdiction", and why lawyers confuse them`

Titles that fail: `::: oneminute Overview`, `::: story Background`.

---

## Stage 2 — The Living Bare Act · `### The Act, decompiled`

**Purpose.** The reader reads the actual statutory text, and the text explains itself as they read it.

**Contains, in order:**

1. A short orienting paragraph — what to watch for in the text below (the double negative, the two "ands", the missing category).
2. The **verbatim statutory text** in a blockquote, with inline badges applied.
3. A **statutory mechanics table**: operative expression → character → consequence.
4. One or two `::: proviso` containers, each with an inline title, unpacking the gate that decides most cases.

**Badge discipline.** This is the heart of the stage.

| Syntax | Renders | Apply to |
|---|---|---|
| `[[!shall be allowed]]` | red, "Mandatory" | commands: *shall*, *shall not*, *no … shall*, *must* |
| `[[?may direct]]` | blue, "Discretionary" | powers: *may*, *it shall be lawful*, *if it thinks fit* |
| `[[=reason to believe]]` | dotted, "Term of art" | defined or judicially loaded expressions |

Badge the **operative words only**. A blockquote where half the words are badged teaches nothing — the eye stops distinguishing. Aim for roughly five to twelve badges in a typical sub-section.

The badged word stays plain text in the rendered HTML, so search still finds it. Never nest a badge inside another badge; never let a badge span a newline.

**Verbatim means verbatim.** Reproduce the statutory text exactly, including the archaic punctuation and the Explanations. Do not paraphrase inside the blockquote. If the section is very long, quote the sub-sections that matter and note explicitly which ones you have omitted.

**The `proviso` container** is not only for literal provisos. Use it for whatever gate actually decides cases — the cumulative conditions, the exception that swallows the rule, the category conspicuously missing from a list. Give it a title that states the insight:

> `::: proviso The three "ands" — why almost every objection dies on the third`
> `::: proviso What is missing from the list, and why it changes everything`

---

## Stage 3 — Mechanical Micro-Tree · `### How this actually runs`

**Purpose.** Reduce the provision to the sequence of gates a real case passes through, so the reader can see exactly where a case dies.

**Contains:** one or two `<MicroTree>` components, each preceded by a one-line framing sentence if needed.

**Design rules.**

- `input` is a **question a party actually asks**, in the voice of the cast — not a restatement of the section. Good: *"Bharat says the court had no jurisdiction. Will an appellate court even look at the point?"* Bad: *"Application of Section 21."*
- Three to six gates. Fewer than three is not a tree; more than six is a flowchart nobody reads.
- Each gate's `q` is a **yes/no question**. The `note` explains how to answer it. The `no` says what happens if the answer is no — and this is the most valuable field in the component, because the failure branch is where litigation actually lives. Write the `no` as a full consequence, not "application fails".
- `result` states what the court does if every gate is passed.
- `resultKind` is `'mandatory'` or `'discretionary'` and must match the statute. If the section says *may*, the result is discretionary and the component correctly renders "Then the court MAY".
- `caveat` carries the qualification that would otherwise mislead.

**Syntax traps — these will break your build.** See `02-component-system.md`. Two that must be internalised now:

1. Use **typographic curly quotes** (`" " ' '`) inside prop strings. Backslash-escaped ASCII quotes fail to compile.
2. **Never put a `[[…]]` badge inside a MicroTree prop.** Badges are markdown-level; props are not markdown.

---

## Stage 3b — Conceptual demystification · `### In plain English`

**Purpose.** Break the doctrine into independent sub-modules, each with a bolded lead so the reader can navigate by scanning.

This is where a compound doctrine gets taken apart. Each element gets its own bolded lead paragraph and a concrete example. If the provision has Explanations, each Explanation is dealt with separately — never summarised collectively as "the Explanations clarify that…".

Written as prose with bolded leads, not as a bullet list. Bullets fragment reasoning; this stage is where the reasoning has to hold together.

---

## Stage 6 — Concordance · `### What changed from the CrPC`

**BNSS-only. This stage is the reason the site exists for practitioners.**

**Purpose.** A practitioner who knows the CrPC arrives with a mental model. Tell him, precisely, whether it still works.

**Contains, in order:**

1. A **concordance line**, unmissable, at the top:

   > **CrPC 1973, s. 154 → BNSS 2023, s. 173.** *(verify against bare Act)*

   If the mapping is not one-to-one — a section split across several, or several merged into one — say so explicitly. Renumbering is not the interesting part; splits and merges are.

2. A **delta classification**. Every provision falls into exactly one of four buckets, and the bucket must be stated by name:

   | Bucket | Meaning | What it does to CrPC authority |
   |---|---|---|
   | **Renumbered only** | Text materially identical | CrPC precedent survives intact. Cite it, and cite the new number alongside. |
   | **Renumbered with drafting changes** | Wording modernised, substance unchanged | Precedent survives, but the argument must be reframed in the new words. Flag the changed words. |
   | **Substantively amended** | A condition, a timeline, a power or a safeguard has changed | Precedent survives **only to the extent the reasoning does not depend on the changed text**. This is the dangerous bucket. Identify precisely which part of the ratio still stands. |
   | **New provision** | No CrPC ancestor | No direct authority. Analogous reasoning only, and say so openly. |

3. A **side-by-side text comparison** where the text changed. Table with two columns, CrPC text and BNSS text, with the altered words bolded in both. Do not describe the change in prose when you can show it.

4. **The practical consequence**, in one short paragraph. Not "the provision has been modernised" — that tells nobody anything. Say what a practitioner must now *do differently*: a new deadline to diarise, a new authority to approach, a new safeguard to invoke, an old argument that no longer runs.

**The survival rule, stated explicitly wherever it bites.**

> CrPC-era authority binds on a BNSS provision to the extent the two are *pari materia*. Where the text has changed, the precedent survives only so far as its reasoning is independent of the changed words. Where the change goes to the very condition the judgment construed, the precedent is persuasive at best, and you must say so before your opponent does.

**Never assert that a case has been overruled or displaced by the BNSS unless you are certain.** The honest form is: *"the reasoning in X construed the words 'Y', which no longer appear; whether it survives is open."*

---

## Stage 4 — Test your instinct · `### Test your instinct`

**Purpose.** Force the reader to commit to an answer before seeing it. Retrieval beats re-reading; this is the only stage that produces durable recall.

**Contains:** four to six `::::instinct` blocks, each holding a `:::ruling` accordion.

**Structure of each block:**

```markdown
::::instinct <A title that is a fact pattern, not a topic>

<Two to four paragraphs of facts. Named parties. Dates. Amounts.
Ending in a sharp question addressed to the reader.>

:::ruling Reveal the ruling
<The answer, with reasoning, and the authority.>
::::
```

The outer `::::` closer closes both. **Do not nest a third container inside `:::ruling`** — put any `::: info` / `::: warning` after the `::::` closer.

**Scenario design rules.**

- Facts must be specific enough to be answerable. "A files a suit" is not a scenario.
- Vary the outcome. At least one scenario in every provision must end with **the reader's instinct being wrong**, and at least one must end with **the technically-correct party losing** — with an explanation of why that is by design, not a defect.
- The ruling explains *why*, and names the authority. It never says "the court will decide on the facts."
- Titles are fact patterns: *"The objection that waited three years"*, *"The objection taken on day one that still lost"*. Not *"Scenario 2"*.

---

## Stage 5 — Practitioner HUD · `### Practitioner HUD — operational realities`

Six `####` sub-blocks, always in this order.

### `#### The winning ratio`

**Exactly one case.** The single proposition a practitioner would want in his written submissions on this provision.

Contains: case name in bold, citation, bench strength, one line of facts, the **ratio** stated as the operative test, and a **practitioner takeaway** — the actual sentence to say in court, in quotation marks.

**Selection principle.** Prefer the proposition that is about **power** over the one about discretion; a power point disposes of a matter at the threshold, cannot be cured by consent, and is not waived by a respondent who fails to take it. Prefer the Constitution Bench. Prefer the case whose ratio is stable over the one that is fact-sensitive.

**BNSS caveat.** State whether the winning ratio is a CrPC-era judgment and, if so, which delta bucket the provision falls in. A winning ratio in the "substantively amended" bucket must carry an explicit note on the extent of its survival.

### `#### Sword and shield`

A two-column table: how the provision is used offensively (by the prosecution or complainant / by the accused, depending on the provision) and defensively. Concrete moves, not descriptions.

### `#### The limitation clock`

Every deadline the provision triggers, with its source. **For BNSS this is not the Limitation Act 1963.** Criminal limitation runs on the BNSS's own provisions (the successors to CrPC Chapter XXXVI), plus statute-specific periods and the many hard timelines the BNSS newly imposes — forwarding of information, forensic examination, completion of investigation, supply of documents, judgment pronouncement. **The new statutory timelines are among the most important content on the whole site**; do not bury them.

Table form: event → period → source → consequence of default.

### `#### Interlocking matrix`

What this provision connects to. Rows for: other BNSS provisions, **BNS 2023** offence provisions, **BSA 2023** evidence provisions, the applicable forms and the court fee or bond implications, and the application that is actually filed.

Never write "IPC" or "Evidence Act" here except in the concordance stage when explaining what changed.

### `#### The authorities`

The remaining cases. Each with citation, one-line facts, ratio, and how it is used. Followed by a `::: info Verify before citing` note where any citation is not certain.

If a judgment is CrPC-era and construes text that has changed, say so **in this block**, next to the case, not only in the concordance stage.

### `#### Strategy and drafting`

The most practical block on the page. Drafting traps that get an application dismissed at the threshold; timing decisions; the model prayer checklist. Numbered grounds where a pleading is involved, because a reader will copy them.

---

## Chapter consolidation

At the end of each chapter file, one `## Chapter consolidation — <a question>` section that ties the provisions together and answers the practical question a reader arrives with. Not a summary; a decision aid.

---

## What good looks like — the test

Before committing a provision, ask:

1. Could a reader who has never opened a bare Act follow Stage 1 to the end?
2. Does the badged blockquote let the eye find the operative words in two seconds?
3. Does the MicroTree's failure branch tell me what actually happens, or does it say "application fails"?
4. Does the concordance tell a CrPC practitioner what to **do differently**?
5. Does at least one instinct scenario end badly for the sympathetic party, with an honest explanation?
6. Is there exactly one winning ratio, and is it the one about power?
7. Would I be comfortable if a judge read this page over my shoulder?

If any answer is no, the provision is not finished.
