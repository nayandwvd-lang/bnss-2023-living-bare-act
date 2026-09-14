# Chapter XXX — Submission of Death Sentences for Confirmation

## Sections 407–409 — Sending the case up, the High Court's power to dig deeper, and its three options

### The dispute this solves

::: oneminute A Court of Session has just passed a sentence of death. That sentence cannot be carried out on the Sessions Judge's signature alone — section 407 makes the death sentence self-suspending: the whole proceeding must go up to the High Court forthwith, and the sentence sits unexecuted, with the convict in jail custody under warrant, until the High Court confirms it. Section 408 gives the High Court a tool the ordinary appellate process does not: if the record leaves a doubt about guilt or innocence, the High Court can order further inquiry or take additional evidence itself, or send the Sessions Court to do it, before deciding anything. Section 409 is the menu of what the High Court can then do — confirm, substitute a different lawful sentence, annul the conviction and convict of something else or order a retrial, or acquit outright — subject to one hard proviso: no confirmation order can be made until the appeal period has run, or any appeal actually filed has been disposed of.
:::

::: story The reference that surfaces a fingerprint report nobody had examined
A Sessions Court convicts an accused of murder and sentences him to death. The proceedings are submitted to the High Court under section 407 the same week, and the convict is committed to jail custody under warrant pending confirmation. Reviewing the record, the confirmation Bench notices that a fingerprint report referred to in the investigating officer's evidence was never formally proved or exhibited at trial — an omission neither side raised. Rather than deciding the confirmation reference on an incomplete record, the High Court invokes section 408(1) and directs the Sessions Court to record evidence proving or disproving the report, dispensing with the convict's personal presence for that limited exercise since nothing turns on his demeanour at this stage. The Sessions Court certifies the result back to the High Court. On the completed record, the High Court exercises its section 409 powers: it does not confirm the death sentence, but converts it to imprisonment for life, a sentence "warranted by law" on the now-complete evidence — an order it could only make once satisfied, per the section 409 proviso, that the appeal period had run and no separate appeal against conviction remained pending.
:::

### The Act, decompiled

::: proviso Section 407 — Sentence of death to be submitted by Court of Session for confirmation

"407. (1) When the Court of Session passes a sentence of death, the proceedings [[!shall]] forthwith be submitted to the High Court, and the sentence shall not be executed unless it is confirmed by the High Court.
(2) The Court passing the sentence [[!shall]] commit the convicted person to jail custody under a warrant."
:::

::: proviso Section 408 — Power to direct further inquiry to be made or additional evidence to be taken

"408. (1) If, when such proceedings are submitted, the High Court thinks that a further inquiry should be made into, or additional evidence taken upon, any point bearing upon the guilt or innocence of the convicted person, it [[?may]] make such inquiry or take such evidence itself, or direct it to be made or taken by the Court of Session.
(2) Unless the High Court otherwise directs, the presence of the convicted person [[?may]] be dispensed with when such inquiry is made or such evidence is taken.
(3) When the inquiry or evidence (if any) is not made or taken by the High Court, the result of such inquiry or evidence [[!shall]] be certified to such Court."
:::

::: proviso Section 409 — Power of High Court to confirm sentence or annul conviction

"409. In any case submitted under section 407, the High Court—
(a) [[?may]] confirm the sentence, or pass any other sentence warranted by law; or
(b) [[?may]] annul the conviction, and convict the accused of any offence of which the Court of Session might have convicted him, or order a new trial on the same or an amended charge; or
(c) [[?may]] acquit the accused person:

Provided that no order of confirmation [[!shall]] be made under this section until the period allowed for preferring an appeal has expired, or, if an appeal is presented within such period, until such appeal is disposed of."
:::

### How this actually runs

<MicroTree
  input="A Court of Session has passed a sentence of death and the proceedings are before the High Court under section 407."
  :gates="[
    { q: 'Has the death sentence actually been executed, or is the convict still held in jail custody under warrant pending the High Court\'s decision?', no: 'Section 407\'s automatic suspension has been breached — a death sentence cannot lawfully be carried into effect without High Court confirmation, whatever the Sessions Court order says' },
    { q: 'If the High Court has doubts about guilt or innocence on the existing record, has it invoked section 408 to order further inquiry or additional evidence, either itself or through the Court of Session, before deciding the reference?', no: 'The High Court is not obliged to invoke section 408 at all — an unclouded record can go straight to a section 409 decision; the gate only matters where a real doubt exists and is left unaddressed' },
    { q: 'Has the period for preferring an appeal expired, or has an appeal filed within that period actually been disposed of?', no: 'The section 409 proviso bars confirmation outright — the High Court may still annul the conviction or acquit, but it cannot confirm the death sentence while an appeal window remains open or a filed appeal is still pending' }
  ]"
  result="Once the appeal-period or pending-appeal condition in the section 409 proviso is satisfied, the High Court may confirm the sentence, substitute another lawful sentence, annul the conviction and convict differently or order a retrial, or acquit — and only a confirmed sentence may be executed."
  resultKind="mandatory"
  caveat="Section 408 is a power, not a duty — the High Court is not required to order further inquiry in every reference; it is the confirmation itself, and the proviso's timing bar, that are mandatory, not the further-inquiry route to reaching it."
/>

### In plain English

A death sentence in India is never final on the trial court's signature alone. The moment a Sessions Judge passes one, section 407 takes the decision out of that Judge's hands: the file goes to the High Court automatically — no application, no appeal needed to trigger it — and the sentence is legally inert until the High Court says otherwise, with the convict held under warrant in the meantime. Section 408 then gives the High Court something an ordinary appeal bench does not automatically have: the ability to reopen the factual record itself, calling for more evidence or a further inquiry, if what is on paper leaves guilt or innocence genuinely in doubt. Section 409 is the High Court's actual decision menu on the reference — confirm, substitute, annul-and-reconvict-or-retry, or acquit — but even a decision to confirm cannot be signed until the ordinary window for an appeal against the conviction has either lapsed or been used up and resolved. The reference and any appeal against the same conviction are, by design, heard and disposed of together.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 407–409 are provisionally mapped to CrPC sections 366–368 (Chapter XXVIII of the CrPC, "Submission of Death Sentences for Confirmation") on the strength of matching chapter titles and section content. This is a distinct, unverified numbering pattern from the flat "BNSS minus 39" offset used for earlier chapters, since Chapter XXX's position in the BNSS's overall sequence does not track the CrPC's chapter sequence one-for-one. Confirm each mapping against the CrPC bare-act text before relying on it in any filing.
:::

The substance of sections 407–409 tracks the CrPC's death-reference procedure closely — the automatic-submission mechanic, the further-inquiry power, and the three-way confirm/annul/acquit menu are not new to the BNSS. The BNSS's section 408(1) further-inquiry power against "guilt or innocence" and section 409's structure both read as continuations of the pre-existing scheme rather than reforms of it; nothing in the extracted text signals a substantive departure. Practitioners should nonetheless re-verify each numbering pair before citing it, since BNSS renumbered the surrounding chapters extensively even where the content is unchanged.

### Test your instinct

:::: instinct A Sessions Court passes a death sentence on 1 March. The convict's advocate files a criminal appeal against the conviction on 20 March, well within the appeal period. The section 407 reference reaches the High Court the same week. On 25 March — appeal period not yet expired, and the filed appeal still pending — the confirmation Bench, keen to clear its docket, signs an order confirming the death sentence, intending to hear the pending appeal separately at a later date. Is the confirmation order valid?

::: ruling No. The section 409 proviso is unambiguous: no order of confirmation may be made until the appeal period has expired, or, where an appeal is filed within that period, until that appeal is disposed of. Here neither condition is met — the appeal was filed in time and remains pending. A confirmation order signed before the appeal is disposed of is premature and does not comply with section 409, regardless of the Bench's reasons for wanting to move quickly. The proper course is to hear the reference and the appeal together, or at least to dispose of the appeal before signing any confirmation order — the intellectually honest reading of section 409 is that the proviso exists precisely to prevent this sequencing.
:::
::::

:::: instinct On a section 407 reference, the confirmation Bench reviews the trial record and is satisfied the conviction is sound, but has no doubt whatsoever about guilt — the evidence is, in the Bench's own words, "as clear as such evidence can be." No appeal has been filed and the appeal period has run out. Must the Bench nonetheless invoke section 408 and call for some further inquiry or additional evidence before it can confirm the sentence, simply because section 408 exists?

::: ruling No. Section 408 uses "may," not "shall" — it is a discretionary power exercisable only where the High Court itself "thinks that a further inquiry should be made... upon any point bearing upon the guilt or innocence of the convicted person." Where the Bench has no such doubt on the existing record, there is nothing in section 408 that compels it to manufacture one. The mandatory elements of this cluster are section 407's automatic submission and non-execution bar, and section 409's proviso on timing — not the further-inquiry route, which section 408's own "may" marks as optional and fact-dependent.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 407–409 of the BNSS is cited here; the BNSS is too recent for a settled line of confirmation-reference jurisprudence to exist under this numbering. The CrPC's own extensive confirmation-reference case law (on the scope of the further-inquiry power, and on the "rarest of rare" standard applied within the confirmation itself under the substantive sentencing law) remains directly relevant in substance, but every citation must be independently verified and re-checked against the corresponding BNSS section number before it is pleaded.
:::

#### Sword and shield

For the **State**, sections 407–409 are the mechanism that gets a trial court's death sentence to the point of actual execution — without a completed confirmation, the sentence is legally frozen, so timely and complete submission of the record under section 407 is a prosecution housekeeping duty, not an afterthought. For the **defence**, this cluster is a second, independent look at guilt: it is not framed as an appeal the convict must actively pursue to get a full merits review — the reference is automatic — and section 408 is an opening to press the High Court to call for evidence the trial left undeveloped, especially where trial counsel missed a gap the appellate record now reveals.

#### The limitation clock

There is no limitation period on the section 407 reference itself — the Sessions Court's obligation to submit "forthwith" is a duty of promptness, not a limitation deadline running against either party. The operative clock is the ordinary appeal-limitation period against the conviction (tracked under the Limitation Act's criminal-appeal provisions and BNSS Chapter XXXI), because the section 409 proviso ties confirmation to that period's expiry or to disposal of an appeal filed within it. Defence counsel who wants the reference and appeal heard together should file the appeal well within the limitation window rather than relying on the reference alone to carry the full merits challenge.

#### Interlocking matrix

- **Section 413 and Chapter XXXI (Appeals)** — the appeal against the same conviction, whose filing or non-filing directly controls when the section 409 proviso permits confirmation.
- **Section 433 (equal division on a Bench)** — cross-referenced by section 411 (next cluster) for the mechanism resolving a divided confirmation Bench.
- **Section 393(3)-(5) (Chapter XXIX)** — the trial court's own duty to record special reasons for the death sentence and direct hanging by the neck; the confirmation Bench reviews that reasoning as part of the reference.
- **BNS 2023 substantive sentencing provisions** — the "rarest of rare" threshold under the substantive offence provisions is not itself part of this procedural cluster, but governs whether confirmation is appropriate on the merits; cite the BNS text directly rather than assuming CrPC-era Penal Code numbering carries over.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- On the defence side, do not treat the section 407 reference as a formality awaiting the "real" appeal — file written submissions addressing both the reference and any appeal together, since section 409's proviso contemplates them being disposed of in tandem.
- Where trial counsel identifies an evidentiary gap only after conviction, frame the section 408 request specifically: identify the point bearing on guilt or innocence and why the existing record is inadequate on it, rather than a general request to "reopen evidence" — the section speaks to a targeted inquiry, not a retrial in substance.
- Confirm, before filing any submission that leans on a specific section 409 outcome (annulment-and-reconviction versus straightforward acquittal), whether the record supports the Sessions Court's having been legally able to convict on the alternative offence — the annulment route in clause (b) only reaches offences the Court of Session "might have convicted him" of.
- Track the appeal-period clock independently of the reference; a confirmation signed in violation of the section 409 proviso is a procedural infirmity worth raising immediately, not one to save for a later stage.

---

## Sections 410–412 — Two signatures, a divided Bench, and getting the order back down to the trial court

### The dispute this solves

::: oneminute The confirmation power under section 409 is deliberately not a one-Judge decision: section 410 requires that where the High Court hearing the reference consists of two or more Judges, the confirmation or any new sentence or order must be made, passed, and signed by at least two of them — a single Judge's view, however clear, cannot dispose of a death reference alone. Section 411 addresses what happens when a Bench that does sit is evenly split: rather than leaving the case in limbo, it is decided the same way a divided appeal Bench is resolved under section 433 — referred to a third Judge, whose opinion becomes the judgment. Section 412 is the closing administrative step: once the High Court's order is made, its proper officer must send a sealed, signed copy down to the Court of Session without delay, physically or electronically, so the trial court can act on it.
:::

::: story A two-Judge Bench splits, and a third Judge breaks the tie
A death reference under section 407 is heard by a Division Bench of two Judges. One Judge is satisfied the conviction and sentence should be confirmed; the other, reviewing the same record, would annul the conviction and order a retrial on the ground that a material prosecution witness's cross-examination was cut short. Because the two Judges are equally divided, section 411 takes over: the case, together with both Judges' recorded opinions, is laid before a third Judge of the High Court. That Judge hears the matter afresh — not bound by either original opinion — and delivers a decision; under the section 433 mechanism the reference incorporates, the final order follows the third Judge's opinion. Once signed — and, since the Bench that ultimately disposes of the matter still consists of at least two Judges' worth of adjudication within the meaning of section 410, properly authenticated — the High Court's registry, acting under section 412, transmits a sealed and signed copy of the order to the Court of Session without delay, using the portal for speed and following up with the physical copy for the record. Only once that copy reaches the Sessions Court can the trial court act on whatever the High Court has finally ordered.
:::

### The Act, decompiled

::: proviso Section 410 — Confirmation or new sentence to be signed by two Judges

"410. In every case so submitted, the confirmation of the sentence, or any new sentence or order passed by the High Court, [[!shall]], when such Court consists of two or more Judges, be made, passed and signed by at least two of them."
:::

::: proviso Section 411 — Procedure in case of difference of opinion

"411. Where any such case is heard before a Bench of Judges and such Judges are equally divided in opinion, the case [[!shall]] be decided in the manner provided by section 433."
:::

::: proviso Section 412 — Revision of sentence of death

"412. In cases submitted by the Court of Session to the High Court for the confirmation of a sentence of death, the proper officer of the High Court [[!shall]], without delay, after the order of confirmation or other order has been made by the High Court, send either physically, or through electronic means, a copy of the order, under the seal of the High Court and attested with his official signature, to the Court of Session."
:::

### How this actually runs

<MicroTree
  input="A High Court Bench has heard a section 407 death reference and is about to make, pass, and sign its order."
  :gates="[
    { q: 'Does the Bench hearing the reference consist of two or more Judges, and has the resulting order been made, passed, and signed by at least two of them?', no: 'Section 410 is not satisfied — a confirmation or new sentence signed by only one Judge of a multi-Judge Court does not comply with the section, whatever the substance of the decision' },
    { q: 'If the Bench was equally divided in opinion, was the case referred onward and decided in the manner provided by section 433 — that is, laid before a further Judge whose opinion the final order follows?', no: 'An equally-divided Bench cannot simply resolve the tie by seniority, casting vote, or re-hearing among the same two Judges — section 411 mandates the section 433 route specifically' },
    { q: 'Has the High Court\'s proper officer sent a sealed, signed copy of the final order to the Court of Session, physically or electronically, without delay?', no: 'Section 412 has not been completed — the Sessions Court cannot act on a confirmation, substitution, annulment, or acquittal it has not yet formally received' }
  ]"
  result="A death-reference order is properly made once it carries at least two Judges' signatures where the Bench has that many members, once any equal division has been resolved through the section 433 mechanism, and once a sealed, signed copy has actually reached the Court of Session."
  resultKind="mandatory"
  caveat="Sections 410-412 are entirely about authentication and transmission, not about the substance of what the High Court decides under section 409 — a procedurally perfect two-signature order can still be substantively wrong, and a substantively correct order signed by only one Judge of a multi-Judge Bench is still non-compliant."
/>

### In plain English

These three sections are the machinery that makes a death-reference decision authentic and operative, as distinct from merely correct. Section 410 refuses to let a single Judge's signature carry the full weight of a death-sentence confirmation where the Court has more than one Judge available — at least two names must appear on the order. Section 411 solves the practical problem of what happens when those two Judges cannot agree: rather than a stalemate, or a rule that ties go to the prosecution or to the defence, the case is handed to a third Judge whose opinion becomes the Court's answer, using the same escalation route Chapter XXXI uses for divided appeal Benches. Section 412 is the unglamorous but essential last step — someone in the High Court's registry has to actually get a properly sealed and signed copy of the final order down to the trial court, because until that happens, the Sessions Court has nothing it can lawfully act on, whatever was decided in the High Court's own courtroom.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 410–412 are provisionally mapped to CrPC sections 369–371, continuing the same Chapter XXVIII (CrPC) correspondence noted for sections 407–409 above. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The two-Judge signature requirement, the equal-division reference mechanism, and the registry's duty to transmit a sealed copy all read as continuations of the pre-existing CrPC scheme. The one feature worth flagging as an update rather than a carryover is section 412's explicit "physically, or through electronic means" language — an express acknowledgment of electronic transmission that the CrPC-era provision, drafted well before routine e-transmission between courts, is unlikely to have contained in the same terms. Verify the exact CrPC 371 wording before asserting this as a genuine change rather than an interpretive gloss the courts had already read into the older provision.

### Test your instinct

:::: instinct A death reference is heard by a three-Judge Special Bench. Two of the three Judges agree the sentence should be confirmed; the third dissents, favouring acquittal. Since there is no equal division — it is two against one — does section 411 apply, and must the matter go to a further Judge before the order can be made?

::: ruling No. Section 411 is triggered only where the Judges "are equally divided in opinion." A two-to-one split is not an equal division; it is a majority decision, and the order can be made, passed, and signed by the two Judges in the majority, satisfying section 410's at-least-two-signatures requirement on its own terms. The section 433 reference-to-a-further-Judge mechanism exists specifically for the tie-breaking scenario — an evenly split Bench — not for ordinary majority decisions on a Bench of three or more.
:::
::::

:::: instinct The High Court confirms a death sentence, and the order is properly made and signed by two Judges as section 410 requires. The registry, however, is severely backlogged, and six weeks pass before a copy of the order is actually sent to the Court of Session under section 412. During those six weeks, does the confirmed sentence become executable, since the High Court has already validly made and signed its order?

::: ruling The confirmed sentence is not something the Court of Session — or anyone else — can act on until the Sessions Court actually has the order in hand. Section 412 requires the High Court's proper officer to send the sealed, signed copy "without delay," and a six-week gap is difficult to reconcile with that language; the delay is itself a compliance failure by the registry. But more fundamentally, execution of a death sentence is a step for the Court of Session to take on receiving the High Court's order (see Chapter XXXIV on execution of sentences), and a court cannot execute an order it has not received. The backlog is an administrative failure worth flagging and, where it causes real prejudice or delay to the convict, worth raising before the High Court directly — but it does not make the sentence executable in the interim on the strength of the signed-but-untransmitted order alone.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 410–412 of the BNSS is cited here, for the same reason given in the first cluster of this chapter: the numbering is too recent for a settled line of authority to exist under it. The CrPC's own case law on the two-Judge signature requirement and on the section-433-equivalent reference mechanism for divided Benches remains substantively relevant, but every citation must be independently verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For the **defence**, an equally divided Bench under section 411 is not a loss — it is a fresh, independent look by a third Judge unbound by either original opinion, and it is worth drawing the third Judge's attention to both recorded opinions rather than treating the reference to a further Judge as a mere formality. For the **State**, sections 410 and 412 are compliance checkpoints rather than substantive battlegrounds: verifying that a confirmation order actually carries two signatures, and that the registry has in fact transmitted a sealed copy to the Sessions Court, is basic due diligence before treating a confirmation as final and actionable.

#### The limitation clock

None of sections 410–412 create an independent limitation period; they govern the authentication and transmission of an order already made within the section 409 process. The only clock-sensitive language is section 412's "without delay," which is a standard of promptness for the registry's transmission duty, not a fixed number of days — but an unreasonably long gap is itself a ground to raise with the High Court, particularly where a convict's execution timeline or a pending clemency process is affected by the delay.

#### Interlocking matrix

- **Section 409's proviso (previous cluster)** — the confirmation these sections authenticate and transmit cannot itself be made until the appeal-period or pending-appeal condition is satisfied; sections 410–412 presuppose a section 409 decision has already been validly reached.
- **Section 433 (Chapter XXXI, Appeals)** — the actual mechanism section 411 borrows wholesale for resolving an equally divided Bench; read the two sections together, not section 411 in isolation.
- **Chapter XXXIV (Execution, Suspension, Remission and Commutation of Sentences)** — governs what the Court of Session does once it actually receives the section 412 order, including the procedure for carrying out a confirmed death sentence.
- **Article 72 and Article 161 of the Constitution (clemency powers)** — outside this Sanhita entirely, but practically relevant: a convict's clemency petition timeline is often reckoned from the point the death reference and any appeal stand finally disposed of, which is precisely the point sections 410–412 formalise and transmit.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- Before treating a confirmation order as final, verify on the record that it in fact carries at least two Judges' signatures where the Bench had two or more members — a single-Judge-signed order from a multi-Judge Bench is a defect worth raising immediately, not one to discover later.
- If a Bench you appeared before was evenly divided, request that both recorded opinions be placed before the referred Judge in full, and consider filing brief written submissions addressing both opinions directly rather than re-arguing the case from scratch.
- Track whether the Court of Session has actually received the section 412 order before assuming any execution or further-proceedings timeline has started running at the trial-court end — a signed High Court order sitting in the registry is not yet operative at the Sessions Court.
- Where clemency strategy is in play, calendar the clemency-petition timeline from the point of final disposal of both the reference and any connected appeal, cross-checking against when the section 412 transmission actually reached the Sessions Court, not merely when the High Court's order was signed.

---

