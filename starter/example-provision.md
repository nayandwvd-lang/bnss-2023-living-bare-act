# Example provision skeleton

Every container, badge and component in its correct place, with the traps annotated inline. Read it once, then work from `reference/01-cognitive-schema.md`.

The content below is **illustrative and deliberately generic**. The section number is a placeholder. Nothing here is to be copied into a real page as substance.

---

```markdown
## Section NNN — <marginal heading, verbatim from the bare Act>

### The dispute this solves

<!-- TRAP: both containers below MUST carry an inline title on the opener line.
     Without one they render at 3x instead of 4x and lose their header. The
     build does not fail; the page is just silently wrong. -->

::: oneminute A title that is a complete sentence making a claim, not a topic label.

Open on the human situation. A person, a problem, something at stake. No section
number in the first sentence.

State the operative rule in plain words. Three to six short paragraphs.

Close by naming the one thing most people get wrong.
:::

::: story Two kinds of X, and why practitioners confuse them

The conceptual map. Longer than the oneminute, and allowed to be genuinely
intellectual — but every proposition must land on a concrete consequence.

This is where a taxonomy goes, or the policy reason behind a rule, or the
distinction that makes the rest of the chapter legible.

Note the renderer labels this block "Worked example · invented facts", so the
reader can never mistake a scenario for a reported case. Never give an invented
scenario a citation.
:::

### The Act, decompiled

A short orienting paragraph: what to watch for in the text below. The double
negative. The two "ands". The category conspicuously missing from the list.

<!-- Verbatim statutory text, badged. Badge the OPERATIVE words only — roughly
     five to twelve per sub-section. A blockquote where every third word is
     badged teaches nothing.

     [[!...]] mandatory   [[?...]] discretionary   [[=...]] term of art

     A badge never spans a newline and never nests another badge. -->

> **NNN. Marginal heading.** — **(1)** Where an officer has [[=reason to believe]]
> that <condition>, he [[!shall]] <do the thing>, and [[?may]] <the discretionary
> part>, [[=within such period as may be prescribed]].
>
> **(2)** <second sub-section>
>
> ***Provided that*** <the proviso, quoted exactly>.

**Statutory mechanics.**

| Operative expression | Character | Consequence |
|---|---|---|
| "**shall**" | **Mandatory** | Non-compliance is not curable by consent. |
| "**may**" | **Discretionary** | Reviewable only for perversity or irrelevant considerations. |
| "**reason to believe**" | **Term of art** | Objective material on record; suspicion is not belief. |
| "*Provided that*" | **Gating condition** | Defeats the main limb entirely where it applies. |

::: proviso A title stating the insight, not the topic

Use this container for whatever gate actually decides cases — the cumulative
conditions, the exception that swallows the rule, the category missing from a
list. It need not be a literal proviso.

Spell out exactly where a case dies, and why most cases die there.
:::

### How this actually runs

<!-- TRAP 1: use CURLY quotes inside prop strings. Backslash-escaped ASCII
     quotes do not compile. The single quotes DELIMITING each JS string stay
     ASCII; only the ones inside the text become curly.
       BROKEN:  { q: 'the court\'s power' }
       RIGHT:   { q: 'the court’s power' }
     Check with: grep -n "[A-Za-z]'[A-Za-z]" <file>

     TRAP 2: no [[...]] badges and no markdown inside props. They render literal.

     TRAP 3: resultKind must match the statute. A "may" section with
     resultKind="mandatory" is a substantive error, not a styling one. -->

<MicroTree
  input="A question a party actually asks, in the voice of the cast — not a restatement of the section."
  :gates="[
    { q: 'First gate, as a yes/no question.', note: 'How to answer it: what the court actually looks at, and what the phrase means.', no: 'What happens if the answer is no — stated as a full consequence. This is the most valuable field in the component, because the failure branch is where litigation lives. Never write “the application fails”.' },
    { q: 'Second gate.', note: 'The material the court needs to see.', no: 'The consequence, in full.' },
    { q: 'Third gate — usually the one that actually decides it.', no: 'The consequence, and the alternative remedy if there is one.' }
  ]"
  result="What the court does when every gate is passed."
  caveat="The qualification that would otherwise mislead a reader who stopped at the result."
  resultKind="mandatory"
/>

### In plain English

**The first element.** Prose with a bolded lead, then a concrete example. Not a
bullet list — bullets fragment reasoning and this stage is where the reasoning
has to hold together.

**The second element.** Same shape.

**Explanation 1.** Each Explanation gets its own treatment. Never summarise them
collectively as "the Explanations clarify that…".

### What changed from the CrPC

<!-- BNSS-ONLY STAGE. The reason the site exists for practitioners. -->

> **CrPC 1973, s. NNN → BNSS 2023, s. NNN.** ⚠️ *Unverified — confirm against
> the bare Act before citing.*

<!-- Drop the flag ONLY after reading the section text. If chunk A says
     "verify" and chunk D quietly asserts the number as fact, the flag has
     done nothing. Grep for the flag before committing. -->

**Delta bucket: <renumbered only | renumbered with drafting changes |
substantively amended | new provision>.**

<!-- Name the bucket. Do not describe it vaguely. -->

| CrPC 1973, s. NNN | BNSS 2023, s. NNN |
|---|---|
| "…the officer **shall forthwith** …" | "…the officer **shall, within twenty-four hours,** …" |

**What survives.** The reasoning in *<Case>* construed the words "**X**", which
now read "**Y**". To the extent its ratio turns on X, it no longer runs; to the
extent it rests on <the independent principle>, it stands.

<!-- Never write that a judgment has been "overruled by the BNSS". A statute
     does not overrule a judgment; it removes the text the judgment construed.
     If it is genuinely open, say it is open. -->

**What a practitioner must now do differently.** One short paragraph, stated as
an instruction: a new deadline to diarise, a new authority to approach, an old
argument that no longer runs. Not "the provision has been modernised".

### Test your instinct

<!-- TRAP: the nesting pattern is exactly this. Four colons on the outer
     opener, three on the inner, and ONE `::::` closer that closes both.
     Do NOT add a `:::` closer as well — you get a stray literal ::: .

     TRAP: never nest ::: info / warning / danger / tip inside :::ruling.
     Put them AFTER the :::: closer. -->

::::instinct A title that is a fact pattern, not a topic

Anita is arrested on 3 March at 9.40 p.m. Inspector Farhan produces her before
Magistrate Gokhale on 5 March at 11 a.m. Specific dates, times and amounts —
a scenario without them is not answerable.

Two to four paragraphs, ending in a sharp question addressed to the reader.

Does the detention stand?

:::ruling Reveal the ruling
No — and the reason is not the one most people give.

The answer, the reasoning, and the authority. Never "the court will decide on
the facts."
::::

::::instinct A scenario where the sympathetic party loses

At least one scenario per provision must end with the technically-correct party
losing, with an honest explanation of why the law is built that way. A site
where the reader always wins teaches nothing about litigation.

Who succeeds?

:::ruling Reveal the ruling
Bharat — even though Anita did everything right. Here is why that is by design
rather than a defect.
::::

::: warning Drafting trap
Goes here, AFTER the `::::` closer. Never inside the ruling.
:::

### Practitioner HUD — operational realities

#### The winning ratio

<!-- EXACTLY ONE case. Prefer the proposition about POWER over the one about
     discretion: it disposes of a matter at the threshold, cannot be cured by
     consent, and is not waived by a respondent who fails to take it. -->

**<Case name>**, <citation> — <bench strength>.

*Facts in one line.*

**Ratio.** The operative test, stated as a test.

**Practitioner takeaway.** The actual sentence to say in court, in quotation marks.

**Its limits.** What this case does *not* decide, and the obvious counter your
opponent will run. A reader ambushed in court by the counter to the proposition
you handed him has been failed by this site.

**BNSS status.** CrPC-era judgment; provision falls in the <bucket> bucket;
survives <to what extent>.

#### Sword and shield

| Used offensively | Used defensively |
|---|---|
| Concrete move. | Concrete move. |

#### The limitation clock

<!-- NOT the Limitation Act 1963. Criminal limitation runs on the BNSS's own
     provisions, plus the many hard timelines the Sanhita newly imposes. Those
     new timelines are among the most valuable content on the site. -->

| Event | Period | Source | Consequence of default |
|---|---|---|---|
| … | … | BNSS s. NNN | … |

#### Interlocking matrix

<!-- BNS 2023 and BSA 2023 — never "IPC" or "Evidence Act" outside the
     concordance stage. -->

| Connects to | Provision | Why it matters |
|---|---|---|
| BNSS | s. NNN | … |
| BNS 2023 | s. NNN | the offence this procedure attaches to |
| BSA 2023 | s. NNN | admissibility of what this produces |
| Application actually filed | … | … |

#### The authorities

**<Case>**, <citation>. *Facts in one line.* **Ratio.** … **Use.** …

<!-- Say here, next to each case, if it is CrPC-era and construes changed text.
     Not only in the concordance stage. -->

::: info Verify before citing
The citations in this block are given from memory and must be checked against
the reports before being placed before a court.
:::

#### Strategy and drafting

**The trap that gets applications dismissed at the threshold.** …

**Timing.** …

**Model grounds.** Numbered, because readers copy them straight into a petition:

1. …
2. …
3. …

<!-- This block is the last on the page and therefore the first casualty of
     fatigue — and it is the block practitioners actually use. Do not compress it. -->
```

---

## After writing: verify the rendered output

```sh
f=docs/.vitepress/dist/chapters/<file>.html
for c in bnss-oneminute bnss-story bnss-proviso bnss-instinct bnss-ruling \
         bnss-tree bnss-mand bnss-disc bnss-art; do
  printf '%-18s %s\n' "$c" "$(grep -o "$c" $f | wc -l | tr -d ' ')"
done
printf '%-18s %s\n' 'LEAK :::' "$(grep -o '&gt;:::' $f | wc -l | tr -d ' ')"
printf '%-18s %s\n' 'LEAK [['  "$(grep -o '\[\[' $f | wc -l | tr -d ' ')"
```

The skeleton above authors, per provision: 1 `oneminute`, 1 `story`, 1 `proviso`, 2 `instinct`, 2 `ruling`.

Expected rendered counts — **4×** for `oneminute` / `story` / `proviso` / `instinct`, **2×** for `ruling`:

```
bnss-oneminute      4
bnss-story          4
bnss-proviso        4
bnss-instinct       8
bnss-ruling         4
LEAK :::            0
LEAK [[             0
```

Both leak counts must be exactly zero. If `bnss-oneminute` shows 3, the container is missing its inline title.
