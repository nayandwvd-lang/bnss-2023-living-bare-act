# Chapter XXIX — The Judgment

## Sections 392–393 — Pronouncing the judgment, and what it must contain

### The dispute this solves

::: oneminute A trial has concluded — evidence taken, arguments heard — and the case now turns on how the Court actually delivers its decision, and what that decision is required to say. Section 392 is the mechanics of delivery: the judgment must be pronounced in open Court, either at once or within forty-five days on notice to the parties, and it can be delivered in full, read out in full, or read out in operative-part-plus-explanation form for an accused who needs it in a language he understands — with the accused's presence secured, in person or by video, unless he is out on a fine-only or attendance-dispensed matter. Section 393 is the mechanics of content: every judgment must state the points for determination, the decision on each, and the reasons — and where the sentence is death, or an unusually short term for a normally longer-sentence offence, the reasons must go further and justify the departure specifically.
:::

::: story The judgment read out in Hindi for an accused who reads no English
A Sessions trial concludes after eleven days of evidence. The Judge reserves judgment and lists the matter for pronouncement three weeks later, well within section 392's forty-five-day outer limit, with notice going to both advocates. On the appointed date, rather than reading out the full forty-page judgment, the Judge reads out the operative part — conviction on two counts, acquittal on a third — and then explains, in Hindi, the substance of the reasoning, since the accused does not read English and the trial Court's record language is English. The full judgment is made available to both advocates free of cost immediately, and the Court's staff upload the signed copy to the portal within the following week. Because the sentence includes a term of ten years — well above the three-year alternative-sentence trigger the Court considered and rejected — section 393(3) and (4) required the Judge to record why that term, and not a shorter one, was warranted; the judgment does so in a dedicated paragraph, distinct from the paragraphs deciding guilt itself.
:::

### The Act, decompiled

::: proviso Section 392 — Judgment (pronouncement)

"392. (1) The judgment in every trial in any Criminal Court of original jurisdiction [[!shall]] be pronounced in open Court by the presiding officer immediately after the termination of the trial or at some subsequent time not later than forty-five days of which notice shall be given to the parties or their advocates,—
(a) by delivering the whole of the judgment; or
(b) by reading out the whole of the judgment; or
(c) by reading out the operative part of the judgment and explaining the substance of the judgment in a language which is understood by the accused or his advocate.
(2) Where the judgment is delivered under clause (a) of sub-section (1), the presiding officer [[!shall]] cause it to be taken down in short-hand, sign the transcript and every page thereof as soon as it is made ready, and write on it the date of the delivery of the judgment in open Court.
(3) Where the judgment or the operative part thereof is read out under clause (b) or clause (c) of sub-section (1), as the case may be, it [[!shall]] be dated and signed by the presiding officer in open Court, and if it is not written with his own hand, every page of the judgment shall be signed by him.
(4) Where the judgment is pronounced in the manner specified in clause (c) of sub-section (1), the whole judgment or a copy thereof [[!shall]] be immediately made available for the perusal of the parties or their advocates free of cost:

Provided that the Court shall, as far as practicable, upload the copy of the judgment on its portal within a period of seven days from the date of judgment.

(5) If the accused is in custody, he [[!shall]] be brought up to hear the judgment pronounced either in person or through audio-video electronic means.
(6) If the accused is not in custody, he [[!shall]] be required by the Court to attend to hear the judgment pronounced, except where his personal attendance during the trial has been dispensed with and the sentence is one of fine only or he is acquitted:

Provided that where there are more accused persons than one, and one or more of them do not attend the Court on the date on which the judgment is to be pronounced, the presiding officer [[?may]], in order to avoid undue delay in the disposal of the case, pronounce the judgment notwithstanding their absence.

(7) No judgment delivered by any Criminal Court shall be deemed to be invalid by reason only of the absence of any party or his advocate on the day or from the place notified for the delivery thereof, or of any omission to serve, or defect in serving, on the parties or their advocates, or any of them, the notice of such day and place.
(8) Nothing in this section shall be construed to limit in any way the extent of the provisions of section 511."
:::

::: proviso Section 393 — Language and contents of judgment

"393. (1) Except as otherwise expressly provided by this Sanhita, every judgment referred to in section 392,—
(a) [[!shall]] be written in the language of the Court;
(b) [[!shall]] contain the point or points for determination, the decision thereon and the reasons for the decision;
(c) [[!shall]] specify the offence (if any) of which, and the section of the Bharatiya Nyaya Sanhita, 2023 or other law under which, the accused is convicted, and the punishment to which he is sentenced;
(d) if it be a judgment of acquittal, [[!shall]] state the offence of which the accused is acquitted and direct that he be set at liberty.
(2) When the conviction is under the Bharatiya Nyaya Sanhita, 2023 and it is doubtful under which of two sections, or under which of two parts of the same section, of that Sanhita the offence falls, the Court [[!shall]] distinctly express the same, and pass judgment in the alternative.
(3) When the conviction is for an offence punishable with death or, in the alternative, with imprisonment for life or imprisonment for a term of years, the judgment [[!shall]] state the reasons for the sentence awarded, and, in the case of sentence of death, the special reasons for such sentence.
(4) When the conviction is for an offence punishable with imprisonment for a term of one year or more, but the Court imposes a sentence of imprisonment for a term of less than three months, it [[!shall]] record its reasons for awarding such sentence, unless the sentence is one of imprisonment till the rising of the Court or unless the case was tried summarily under the provisions of this Sanhita.
(5) When any person is sentenced to death, the sentence [[!shall]] direct that he be hanged by the neck till he is dead.
(6) Every order under section 136 or sub-section (2) of section 157 and every final order made under section 144, section 164 or section 166 [[!shall]] contain the point or points for determination, the decision thereon and the reasons for the decision."
:::

### How this actually runs

<MicroTree
  input="A trial in a Criminal Court of original jurisdiction has concluded, and the Court is about to pronounce judgment."
  :gates="[
    { q: 'Is the judgment pronounced in open Court, either immediately or within forty-five days on notice to the parties or their advocates?', no: 'The pronouncement does not satisfy section 392(1) — a judgment delivered outside open Court, or beyond the forty-five day outer limit without the required notice, does not comply with the section on its face' },
    { q: 'If the operative-part-plus-explanation route under clause (c) is used, is the whole judgment made immediately available to the parties or their advocates free of cost?', no: 'Sub-section (4) is not satisfied — the explanation-only route requires immediate free access to the full text as its counterpart' },
    { q: 'Does the judgment contain the points for determination, the decision on each, and the reasons — with special reasons where the sentence is death or an unusually short term?', no: 'The judgment falls short of section 393(1) and, where relevant, section 393(3)-(4) — an appellate court can fault the judgment on this ground alone, independent of the correctness of the result' }
  ]"
  result="A judgment that is pronounced in open Court within time, made available in full where read out in summary form, and that states the points for determination, the decision, and adequately-reasoned sentencing — including special reasons for a death sentence or an unusually lenient term — satisfies sections 392 and 393."
  resultKind="mandatory"
  caveat="Section 392(7) is a curative provision, not an escape from the above: a party's mere absence from the pronouncement, or a defect in serving notice of it, does not by itself invalidate an otherwise compliant judgment — but that is a separate question from whether the judgment's own content and delivery independently satisfy sections 392 and 393."
/>

### In plain English

Section 392 answers "how does a judgment actually get delivered?" — in open court, promptly or within a firm forty-five-day cap, in one of three permitted formats, with the accused either present or securely linked in, and with a real, immediate copy available if the Court chooses the shortcut of reading out only the operative part. Section 393 answers the different question, "what must the judgment actually say?" — not just a bottom-line verdict, but the questions the Court decided, its answer to each, and its reasons, with the reasoning bar raised sharply for the two situations where the state is taking the most from a person: a death sentence, and a sentence markedly shorter than what the offence would ordinarily attract. Together the two sections are less about the outcome of a case and more about the discipline of producing a judgment that a losing party — or an appellate court — can actually test.

### What changed from the CrPC

⚠️ *Provisional mapping, not yet independently verified against a bare CrPC text held in this repository. Continuing the flat minus-39 offset hypothesis used elsewhere in this guide, this guide's working view is that BNSS section 392 corresponds to CrPC section 353, and BNSS section 393 to CrPC section 354. The forty-five-day outer limit on pronouncement in section 392(1), the audio-video attendance route in section 392(5), and the seven-day portal-upload proviso in section 392(4) are new procedural features not carried over from the CrPC in this form; this guide has not independently verified whether CrPC section 353 contained an equivalent timeline or electronic-attendance provision, and that comparison should not be assumed without checking a bare CrPC text.*

### Test your instinct

:::: instinct A Sessions Judge, wishing to save time, reads out only the operative part of a lengthy judgment and explains its substance to the accused in Hindi, but does not make the full written judgment available to the accused's advocate until the following week.
::: ruling Defective — section 392(4) requires immediate, not eventual, availability
The text requires that "the whole judgment or a copy thereof shall be immediately made available for the perusal of the parties or their advocates free of cost" where the operative-part route is used. A week's delay does not satisfy "immediately"; the seven-day period in the accompanying proviso governs portal upload, a distinct and additional obligation, not a substitute deadline for furnishing the judgment to the parties themselves.
:::
::::

:::: instinct A trial Court convicts an accused of an offence ordinarily carrying a minimum sentence well above one year, but sentences him to twenty days' imprisonment because the sentence is one of imprisonment till the rising of the Court, and does not record any separate reasons for the leniency.
::: ruling Correct — section 393(4) carves out exactly this situation
Section 393(4) requires recorded reasons for a below-three-month sentence on a one-year-or-more offence "unless the sentence is one of imprisonment till the rising of the Court or unless the case was tried summarily." A till-the-rising-of-the-Court sentence is expressly exempted from the separate-reasons requirement; no defect arises from the absence of a dedicated sentencing-reasons paragraph here.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ Research gap — no citation is promoted for this cluster. The content requirements of a valid criminal judgment, and the consequences of a defectively-reasoned sentence, are propositions this guide has not yet matched to a specific promoted Supreme Court authority; the point is well-trodden in appellate practice and a citation should be added once independently verified rather than left unresearched indefinitely.

#### Sword and shield

As a **shield**, defence counsel confronted with a judgment that states a bare conclusion — guilty, sentenced to X — without stating the points for determination and the reasons for the decision, should treat section 393(1)(b)'s omission as an independent appellate ground, distinct from any challenge to the correctness of the verdict itself. As a **sword**, counsel seeking a death sentence be set aside, or an unusually short sentence be treated as within the trial Court's discretion, should scrutinise whether the "special reasons" or "reasons" respectively required by section 393(3)-(4) were actually recorded in the judgment itself, not merely articulated orally from the bench and left unrecorded.

#### The limitation clock

No independent limitation period runs under sections 392–393. Section 392(1)'s own internal clock is the forty-five-day outer limit on pronouncement after conclusion of trial, on notice to the parties; section 392(4)'s proviso adds a further, distinct seven-day clock for portal upload once judgment is pronounced — the two should not be conflated when advising a client on when to expect the judgment or when to expect the uploaded copy.

#### Interlocking matrix

Section 392(8) expressly preserves section 511's inherent-type powers without limitation from this section. Section 393(6) draws in orders under section 136, section 157(2), and sections 144, 164 and 166 — pulling those orders into the same "points for determination, decision, reasons" discipline even though they are not judgments in the strict sense. The reasoning requirements in section 393(3)-(4) interlock directly with Chapter XXX (Submission of Death Sentences for Confirmation) and Chapter XXXI (Appeals), both of which depend on the trial Court's judgment being adequately reasoned in the first place.

#### Strategy and drafting

**Model checklist for the section 392–393 stage:**

1. On receiving notice of a pronouncement date beyond the trial's conclusion, calendar the forty-five-day outer limit under section 392(1) and be prepared to raise a section 392 compliance objection if that limit is exceeded without adequate explanation.
2. Where judgment is delivered by the operative-part-plus-explanation route, confirm the full written judgment is actually furnished immediately, not merely promised — and separately track the seven-day portal-upload proviso as a distinct compliance point.
3. On receiving a judgment, check section 393(1)(b) compliance first — points for determination, decision, and reasons — before addressing the merits; a judgment that fails this structural test is vulnerable regardless of whether the underlying decision seems correct.
4. Where a death sentence or an unusually short sentence has been imposed, isolate the "special reasons" or "reasons" paragraph in the judgment and assess independently whether it actually engages with the sentencing question, rather than restating the conviction reasoning.

---
