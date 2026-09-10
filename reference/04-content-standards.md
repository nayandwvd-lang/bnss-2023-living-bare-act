# 04 — Content Standards

Voice, honesty, and case-law discipline. This file is what keeps two hundred provisions written across forty sessions sounding like one author.

---

## Voice

**Write as a senior practitioner explaining something to a capable junior**, not as a textbook and not as a blog.

Concretely:

- **Declarative sentences.** "Miss any one and the objection is dead." Not "it may be observed that non-compliance with any one of the aforesaid conditions could potentially prove fatal."
- **Short sentences carry the load.** Long ones are allowed when the thought is genuinely long, but a paragraph of only long sentences means you have not decided what matters.
- **Second person for the practitioner, third person for the parties.** "You cannot fight a case for four years and then say the court was wrong." "Anita was arrested at 9 p.m."
- **Name the mechanism, not the vibe.** "The third condition is a causation requirement" beats "the third condition is quite strict."
- **No hedging filler.** Cut "it is important to note", "it may be argued", "generally speaking", "in essence". If a proposition is genuinely uncertain, say what is uncertain and why — that is different from hedging.
- **No exclamation marks. No rhetorical questions except as the closing line of an instinct scenario.**
- **Indian English and Indian legal register.** ₹ for rupees. "Sanhita" where the statute uses it. "Learned trial court". Dates as `1 July 2024`.

**Bold is for structural leads and operative words**, not for emphasis-by-shouting. A paragraph opening with a bolded lead phrase is navigable by scanning; a paragraph with six bolded words in the middle is not.

---

## Intellectual honesty

This is the standard that distinguishes the site from every other CPC/BNSS resource, and it is easy to quietly abandon under time pressure.

**1. Some scenarios must end with the sympathetic party losing.**

If every instinct block ends with the reader's intuition vindicated, the site teaches nothing about litigation. Write scenarios where the defendant did everything correctly and still lost — and then explain why the law is built that way. A reader who understands *why* a correct party loses understands the provision; a reader who only collects wins does not.

**2. Steelman the opponent before answering him.**

When a judgment is routinely misquoted, concede that the opponent is quoting it **accurately** and attack the *use*, not the quotation. "The judgment-debtor is reading *Kiran Singh* correctly. What he is not reading is the paragraph three lines later where the same Bench takes most of it back." This is more useful and more honest than pretending the opposing citation is bad.

**3. Name the limits of your own best authority.**

Every promoted winning ratio gets its limits written into the block. A reader who is ambushed in court by the obvious counter to the proposition you handed him has been failed by the site.

**4. Where the law is genuinely unsettled, say so.**

"There is no Supreme Court decision on this yet; the High Courts are divided, and the argument on each side is as follows." Do not manufacture certainty. Do not paper over a split with "courts have held".

**5. Distinguish power from discretion, everywhere.**

A point about the court's **power** disposes of a matter at the threshold, cannot be cured by consent, and is not waived by a respondent who fails to take it. A point about **discretion** is fact-sensitive and can go either way on the day. Readers conflate them constantly. Every time both are in play, separate them explicitly.

---

## Case-law discipline

**The rule: never invent a citation.** Not the case name, not the year, not the SCC volume, not the bench strength.

This is not a style preference. A reader will copy a citation from this site into a written submission. A hallucinated citation put before a court is professional damage to the reader and reputational damage to the project.

**The operating procedure:**

1. Cite only judgments you are **certain** exist, with a citation you are **certain** of.
2. If you are confident of the proposition but not the citation, **state the proposition and describe the case without a citation**, and add:

   ```markdown
   ::: info Verify before citing
   The citations in this block are given from memory and must be checked against
   SCC Online or the Supreme Court's own reports before being placed before a court.
   :::
   ```

3. If you are not certain the case exists at all, **do not mention it**. Write the proposition on principle instead. A well-reasoned unattributed proposition is worth more than a confident fake.
4. Prefer very well-known judgments. The best-known cases are the ones you are least likely to be wrong about, and they are also the ones a court will accept without argument.
5. Never state a bench strength you are not sure of. "Constitution Bench" is a specific claim.

**Each case entry contains:** name in bold, citation, bench strength, one line of facts, the **ratio** as an operative test, and how it is actually used.

**Do not front-load a block with a case.** The reasoning comes first and the case supports it. A page that reads as a citation list is the academic reference manual this project exists to replace.

---

## The BNSS-specific citation problem

**Almost every authority you will cite is CrPC-era.** This is not a defect to be hidden; it is the central fact about the subject right now, and handling it well is the site's competitive advantage.

**Rules:**

1. **Always give the judgment's own statutory frame.** *Lalita Kumari* is about **CrPC s. 154**. Say so, then give the BNSS successor. Never silently rewrite a judgment as though it had been decided under the Sanhita.

2. **State the survival position explicitly.** Use the delta bucket from `01-cognitive-schema.md`:
   - *Renumbered only* → "the reasoning applies unchanged to BNSS s. X."
   - *Renumbered with drafting changes* → "the reasoning applies; the words it construed now read as follows."
   - *Substantively amended* → "the reasoning survives only to the extent it does not depend on the changed words. It construed the requirement of Y, which the Sanhita has replaced with Z. To that extent it no longer runs."
   - *New provision* → "there is no direct authority. The nearest analogy is …, and it is only an analogy."

3. **Never write that a judgment has been "overruled by the BNSS."** A statute does not overrule a judgment; it can remove the text the judgment construed. The honest form is: *"the reasoning turned on the words 'X', which no longer appear. Whether it survives on the new text is open."*

4. **Do not assume a High Court has already ruled on a BNSS provision.** The statute is recent. If you do not know of a decision, say there appears to be none, rather than inventing one.

5. **Where a settled CrPC practice is displaced by a new BNSS timeline or safeguard**, that is the single most valuable paragraph on the page. Give it its own bolded lead in `#### Strategy and drafting` — a practitioner running on muscle memory is exactly who will miss it.

---

## The invented cast

Reuse the same names across the whole site. Recurring characters make scenarios instantly parseable and stop every block opening with "A, B and C".

| Name | Role |
|---|---|
| **Anita** | complainant / informant / applicant |
| **Bharat** | accused / respondent |
| **Chetan** | third party — surety, witness, purchaser, intervenor |
| **Deepa / Deepak** | co-accused, co-complainant, or the second-round party |
| **Inspector Farhan** | investigating officer |
| **Magistrate Gokhale** | the Judicial Magistrate |

Every `::: story` container is labelled "Worked example · invented facts" by the renderer, so the reader is never at risk of taking a scenario for a reported case. Keep it that way: **never give an invented scenario a citation**, and never name an invented party after a real litigant.

Scenarios need **dates, amounts and times**. "Arrested on 3 March at 9.40 p.m., produced on 5 March at 11 a.m." is answerable. "Arrested and produced late" is not.

---

## Formatting conventions

- **Tables** for anything with a repeating shape — statutory mechanics, deltas, limitation, interlocks, sword/shield. Three or four columns maximum; wider tables are unreadable on a phone.
- **Numbered lists** only where order or count matters — cumulative conditions, grounds in a pleading, steps in a procedure. Readers copy numbered grounds directly, so number them the way they should appear in a petition.
- **Bulleted lists sparingly.** Bullets fragment reasoning. Stage 3b (`In plain English`) in particular must be prose with bolded leads, not a bullet farm.
- **Blockquotes are for statutory text only.** Never for emphasis, never for a case extract. If a reader sees a blockquote, it must be the Act.
- **Headings are fixed by the schema.** Do not invent new `###` levels. Sub-structure inside a stage uses bolded leads.

---

## Length

A single well-litigated section runs 400–600 lines. A cluster of three or four related sections runs 500–800. A chapter file with six provisions plus a consolidation runs 2,500–3,000 lines.

**Do not pad to reach these numbers, and do not truncate a stage to stay under them.** They are calibration, not targets. The real test is the seven-question checklist at the end of `01-cognitive-schema.md`.

The one place to resist compression is `#### Strategy and drafting`. It is the last block on the page and therefore the first casualty of fatigue — and it is the block practitioners actually use.
