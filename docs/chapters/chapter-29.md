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

## Sections 394–396 — Notifying a repeat offender's address, ordering compensation, and the victim compensation scheme

### The dispute this solves

::: oneminute A judgment doesn't just convict and sentence — it can also reach forward into the offender's post-release life and backward into the harm the offence caused. Section 394 lets a Court, when sentencing a repeat serious offender, order that his residence and any change of it be notified for up to five years after release — a surveillance-adjacent measure distinct from the sentence itself. Section 395 lets the Court direct that a fine actually recovered, or a compensation amount ordered even where no fine was imposed, go to defray prosecution costs or to compensate the person harmed — civil-remedy machinery folded into the criminal judgment itself. Section 396 goes further still: it obliges every State Government to run a standing victim compensation scheme, funded and administered through the Legal Services Authorities, that operates independently of whether the offender is ever convicted, or even identified.
:::

::: story A victim compensated though the accused was acquitted
A prosecution for a serious assault ends in acquittal — the complainant's identification is found unreliable, and the Court gives the accused the benefit of the doubt. At the conclusion of the trial, the Court is nonetheless satisfied that the complainant, as the victim, requires rehabilitation for the injuries actually sustained, injuries not seriously disputed in the evidence. Because the case ended in acquittal, no compensation could be ordered under section 395, which depends on a sentence being passed. The Court instead makes a recommendation for compensation under section 396(3), forwarding it to the District Legal Services Authority, which decides the quantum and awards it under the State's victim compensation scheme within the two-month period sub-section (5) contemplates — entirely independent of the acquittal, because section 396 compensation is not a consequence of conviction at all.
:::

### The Act, decompiled

::: proviso Section 394 — Order for notifying address of previously convicted offender

"394. (1) When any person, having been convicted by a Court in India of an offence punishable with imprisonment for a term of three years, or upwards, is again convicted of any offence punishable with imprisonment for a term of three years or upwards by any Court other than that of a Magistrate of the second class, such Court [[?may]], if it thinks fit, at the time of passing a sentence of imprisonment on such person, also order that his residence and any change of, or absence from, such residence after release be notified as hereinafter provided for a term not exceeding five years from the date of the expiration of such sentence.
(2) The provisions of sub-section (1) shall also apply to criminal conspiracies to commit such offences and to the abetment of such offences and attempts to commit them.
(3) If such conviction is set aside on appeal or otherwise, such order shall become void.
(4) An order under this section [[?may]] also be made by an Appellate Court or by the High Court or Court of Session when exercising its powers of revision.
(5) The State Government [[?may]], by notification, make rules to carry out the provisions of this section relating to the notification of residence or change of, or absence from, residence by released convicts.
(6) Such rules may provide for punishment for the breach thereof and any person charged with a breach of any such rule may be tried by a Magistrate of competent jurisdiction in the district in which the place last notified by him as his place of residence is situated."
:::

::: proviso Section 395 — Order to pay compensation

"395. (1) When a Court imposes a sentence of fine or a sentence (including a sentence of death) of which fine forms a part, the Court [[?may]], when passing judgment, order the whole or any part of the fine recovered to be applied—
(a) in defraying the expenses properly incurred in the prosecution;
(b) in the payment to any person of compensation for any loss or injury caused by the offence, when compensation is, in the opinion of the Court, recoverable by such person in a Civil Court;
(c) when any person is convicted of any offence for having caused the death of another person or of having abetted the commission of such an offence, in paying compensation to the persons who are, under the Fatal Accidents Act, 1855, entitled to recover damages from the person sentenced for the loss resulting to them from such death;
(d) when any person is convicted of any offence which includes theft, criminal misappropriation, criminal breach of trust, or cheating, or of having dishonestly received or retained, or of having voluntarily assisted in disposing of, stolen property knowing or having reason to believe the same to be stolen, in compensating any bona fide purchaser of such property for the loss of the same if such property is restored to the possession of the person entitled thereto.
(2) If the fine is imposed in a case which is subject to appeal, no such payment shall be made before the period allowed for presenting the appeal has elapsed, or, if an appeal be presented, before the decision of the appeal.
(3) When a Court imposes a sentence, of which fine does not form a part, the Court [[?may]], when passing judgment, order the accused person to pay, by way of compensation, such amount as may be specified in the order to the person who has suffered any loss or injury by reason of the act for which the accused person has been so sentenced.
(4) An order under this section [[?may]] also be made by an Appellate Court or by the High Court or Court of Session when exercising its powers of revision.
(5) At the time of awarding compensation in any subsequent civil suit relating to the same matter, the Court [[!shall]] take into account any sum paid or recovered as compensation under this section."
:::

::: proviso Section 396 — Victim compensation scheme

"396. (1) Every State Government in co-ordination with the Central Government [[!shall]] prepare a scheme for providing funds for the purpose of compensation to the victim or his dependents who have suffered loss or injury as a result of the crime and who require rehabilitation.
(2) Whenever a recommendation is made by the Court for compensation, the District Legal Service Authority or the State Legal Service Authority, as the case may be, [[!shall]] decide the quantum of compensation to be awarded under the scheme referred to in sub-section (1).
(3) If the trial Court, at the conclusion of the trial, is satisfied, that the compensation awarded under section 395 is not adequate for such rehabilitation, or where the cases end in acquittal or discharge and the victim has to be rehabilitated, it [[?may]] make recommendation for compensation.
(4) Where the offender is not traced or identified, but the victim is identified, and where no trial takes place, the victim or his dependents [[?may]] make an application to the State or the District Legal Services Authority for award of compensation.
(5) On receipt of such recommendations or on the application under sub-section (4), the State or the District Legal Services Authority [[!shall]], after due enquiry award adequate compensation by completing the enquiry within two months.
(6) The State or the District Legal Services Authority, as the case may be, to alleviate the suffering of the victim, [[?may]] order for immediate first-aid facility or medical benefits to be made available free of cost on the certificate of the police officer not below the rank of the officer in charge of the police station or a Magistrate of the area concerned, or any other interim relief as the appropriate authority deems fit.
(7) The compensation payable by the State Government under this section shall be in addition to the payment of fine to the victim under section 65, section 70 and sub-section (1) of section 124 of the Bharatiya Nyaya Sanhita, 2023."
:::

### How this actually runs

<MicroTree
  input="A Court is passing judgment and sentence in a criminal trial, or a victim is seeking rehabilitation for harm suffered by an offence."
  :gates="[
    { q: 'Is this a case of a repeat serious offender — a second conviction for a three-year-or-more offence, following an earlier such conviction?', no: 'Section 394 residence-notification is not available on this conviction; sections 395-396 compensation questions are assessed independently of section 394' },
    { q: 'Did the sentence include a fine, or fine-forming sentence, that was actually recovered — or does the Court wish to order compensation even absent a fine?', no: 'Section 395(1) fine-application does not arise; section 395(3) direct-compensation-without-fine, or a section 396 recommendation, may still be available' },
    { q: 'Did the trial end in conviction with adequate section 395 compensation, or does the case end in acquittal, discharge, or an untraced offender leaving the victim unrehabilitated?', no: 'No section 396 recommendation or application is triggered; the victim\'s rehabilitation, if needed, is not addressed by this cluster\'s machinery' }
  ]"
  result="A repeat serious offender may additionally face a five-year residence-notification order under section 394; recovered fines or direct compensation orders under section 395 can defray prosecution costs and compensate loss; and, wherever section 395 proves inadequate or unavailable — including in acquittal, discharge, or untraced-offender cases — the victim compensation scheme under section 396 remains independently available through the Legal Services Authorities."
  resultKind="discretionary"
  caveat="Section 396 compensation is not conditioned on conviction at all — sub-sections (3) and (4) expressly extend it to acquittals, discharges, and cases where no trial takes place because the offender was never traced, provided the victim is identified."
/>

### In plain English

Section 394 is a narrow, opt-in surveillance tool aimed specifically at a person who has now been convicted twice of serious offences — it is not automatic, and it lapses the moment the second conviction is set aside on appeal. Sections 395 and 396 are where the chapter's real weight sits, and they work as a two-tier safety net: section 395 is the first tier, letting the sentencing Court itself direct that a recovered fine, or a freestanding compensation order even without a fine, go to the person actually harmed — but it depends on there being a conviction and a sentence to hang the order on. Section 396 is the second, wider tier — a State-run compensation scheme that does not care whether there was ever a conviction at all. An acquittal, a discharge, or an offender who was never even caught can all still end with the victim compensated, because rehabilitating the victim and punishing the offender are treated as two separate questions, not one.

### What changed from the CrPC

⚠️ *Provisional mapping, not yet independently verified against a bare CrPC text held in this repository. Continuing the flat minus-39 offset hypothesis used elsewhere in this guide, this guide's working view is that BNSS section 394 corresponds to CrPC section 356, BNSS section 395 to CrPC section 357, and BNSS section 396 to CrPC section 357A. Section 396's cross-references to BNS sections 65, 70 and 124(1) are reproduced as they appear in the BNSS text itself and have not been independently checked against a bare BNS text held in this repository — treat the specific BNS section numbers as flagged pending that verification, not as confirmed.*

### Test your instinct

:::: instinct A trial Court convicts an accused of theft and sentences him to a fine, but does not order any part of the recovered fine to be paid as compensation to the person from whom the property was stolen, on the view that compensation is a civil-suit remedy and not the criminal Court's business.
::: ruling A misreading of section 395 — the criminal Court has an express, discretionary power to compensate from the fine
Section 395(1)(b) squarely contemplates the Court ordering the fine recovered to be applied "in the payment to any person of compensation for any loss or injury caused by the offence, when compensation is, in the opinion of the Court, recoverable by such person in a Civil Court." The power is discretionary, not mandatory — but declining to even consider it on the mistaken premise that compensation belongs exclusively to a civil suit misstates what section 395 does.
:::
::::

:::: instinct A complainant, whose assailant is acquitted for want of reliable identification evidence, is told by the trial Court that no compensation of any kind is available to her because there is no conviction to hang an order on.
::: ruling Incorrect — section 396(3) exists precisely for this situation
Section 396(3) expressly empowers the trial Court, at the conclusion of a trial that "end[s] in acquittal or discharge," to make a recommendation for compensation where the victim needs rehabilitation. The absence of a conviction forecloses section 395, not section 396 — the two provisions are designed to cover different situations, not to duplicate each other.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ Research gap — no citation is promoted for this cluster. The scope of the criminal Court's compensation power and its relationship to the State victim compensation scheme are propositions this guide has not yet matched to a specific promoted Supreme Court authority.

#### Sword and shield

As a **sword**, counsel for a complainant or victim should press for a section 395 compensation order at the sentencing stage as a matter of course wherever loss or injury is shown, and, where the trial ends adversely to the prosecution or the section 395 award proves inadequate, should pursue a section 396 recommendation or direct application rather than treating the criminal case's outcome as the end of the road. As a **shield**, an accused facing a section 394 residence-notification order should confirm both convictions genuinely carry a three-year-or-more sentence exposure and that the order is confined to the five-year outer limit — and should immediately move to have the order treated as void the moment the underlying conviction is set aside on appeal, since sub-section (3) makes that automatic rather than requiring a fresh application.

#### The limitation clock

No independent limitation period runs under sections 394–396 for the making of these orders at judgment. Section 396(5)'s own internal clock binds the State or District Legal Services Authority, not the victim: the Authority must complete its enquiry and award adequate compensation "within two months" of receiving a recommendation or application. Section 394's own five-year clock runs from the expiration of the sentence, not from conviction.

#### Interlocking matrix

Section 395 interlocks with the Fatal Accidents Act, 1855 for death-causing offences, and with any subsequent civil suit on the same facts, which section 395(5) requires to account for compensation already paid or recovered. Section 396 interlocks with the Legal Services Authorities Act machinery (District and State Legal Services Authorities) and with BNS sections 65, 70 and 124(1) for fine-based victim payments that stack on top of, rather than substitute for, the section 396 scheme. Section 397 (built in the next cluster) supplies the parallel first-aid and treatment obligation on hospitals that this cluster's compensation machinery assumes exists.

#### Strategy and drafting

**Model checklist for the section 394–396 stage:**

1. Before seeking a section 394 order, confirm on the record that both the present and the prior conviction independently carry three-year-or-more imprisonment exposure — the section does not apply to a first serious conviction, however grave.
2. At every sentencing hearing involving a fine or provable loss, raise section 395 compensation affirmatively rather than leaving it to the Court's own initiative — the power is discretionary and easily overlooked if not pressed.
3. Where a trial is heading toward acquittal, discharge, or has stalled because the offender cannot be traced, advise the victim early that a section 396 recommendation or direct application remains available, and identify the correct Legal Services Authority (District or State) to approach.
4. Track the two-month enquiry clock under section 396(5) once a recommendation or application is filed, and escalate within the Legal Services Authority structure if that clock is not met.

---
