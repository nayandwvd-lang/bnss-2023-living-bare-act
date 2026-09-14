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
