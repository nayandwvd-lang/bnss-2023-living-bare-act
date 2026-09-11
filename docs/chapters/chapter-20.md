# Chapter XX — Trial of Warrant-Cases by Magistrates

## Sections 261–263 — Starting the police-report track, and the discharge clock that gates it

### The dispute this solves

::: oneminute A warrant-case is one carrying a sentence of death, life imprisonment, or imprisonment beyond two years — serious enough that the trial procedure is more elaborate than a summons-case's. This chapter splits that procedure into two tracks depending on how the case reached the Magistrate: Part A for cases instituted on a police report, Part B for cases instituted otherwise (private complaint, or a Magistrate's own information). This cluster opens Part A. Section 261 is a checkpoint, not a fresh duty: before the trial proper begins, the Magistrate must satisfy himself that the mandatory pre-trial disclosure under section 230 — supplying the accused with copies of the police report, the FIR, statements, and other documents — has actually happened. Section 262 then gives the accused a discharge opportunity on a clock: an application for discharge may be filed within sixty days of receiving those section 230 documents, and if the Magistrate — after considering the police report, the case-diary-linked documents under section 193, and any examination of the accused (in person or by audio-video electronic means) he thinks necessary, and after hearing both sides — finds the charge groundless, he must discharge the accused and record his reasons. If the case survives that stage, section 263 takes over: the Magistrate frames the charge in writing within sixty days of the first hearing on charge, and it is then read and explained to the accused, who is asked to plead guilty or claim trial.
:::

::: story A discharge application built entirely on the police report itself
An accused is charged in a police-report warrant-case with an offence carrying a maximum sentence of five years. His advocate, within the sixty-day window under section 262, files a discharge application arguing that the police report's own narrative — read in isolation, without needing any defence material — does not disclose a case that could support a conviction: key witnesses named in the report themselves place the accused elsewhere at the relevant time, and no other evidence in the report contradicts that. The Magistrate, considering only the police report and the documents sent with it under section 193, together with the accused's written submissions, agrees that the charge is groundless on the prosecution's own showing and discharges the accused, recording reasons to that effect. No trial ever reaches section 263's charge-framing stage.
:::

> **261.** When, in any warrant-case instituted on a police report, the accused appears or is brought before a Magistrate at the commencement of the trial, the Magistrate [[!shall]] satisfy himself that he has complied with the provisions of section 230.
>
> **262. (1)** The accused [[?may]] prefer an application for discharge within a period of sixty days from the date of supply of copies of documents under section 230.
>
> **(2)** If, upon considering the police report and the documents sent with it under section 193 and making such examination, if any, of the accused, either physically or through audio-video electronic means, as the Magistrate thinks necessary and after giving the prosecution and the accused an opportunity of being heard, the Magistrate considers the charge against the accused to be groundless, he [[!shall]] discharge the accused, and record his reasons for so doing.
>
> **263. (1)** If, upon such consideration, examination, if any, and hearing, the Magistrate is of opinion that there is ground for presuming that the accused has committed an offence triable under this Chapter, which such Magistrate is competent to try and which, in his opinion, could be adequately punished by him, he [[!shall]] frame in writing a charge against the accused within a period of sixty days from the date of first hearing on charge.
>
> **(2)** The charge [[!shall]] then be read and explained to the accused, and he [[!shall]] be asked whether he pleads guilty of the offence charged or claims to be tried.

::: proviso Section 261 is a compliance check, not a fresh disclosure obligation
Section 261 does not create a new duty to supply documents — section 230, already built in Chapter XVII, is where that obligation lives. Section 261 only requires the Magistrate to confirm, at the trial's opening, that section 230 has in fact been complied with before the warrant-case procedure moves forward.
:::

::: proviso Section 262's discharge test looks only at what the prosecution has put on record
The Magistrate's discharge inquiry under section 262(2) is confined to the police report, the section 193 documents, and any examination of the accused the Magistrate himself thinks necessary — it is not an occasion for the accused to lead defence evidence or produce material of his own to rebut the prosecution's case. The accused's opportunity of being heard is a hearing on the record as it stands, not a mini-trial.
:::

### How this actually runs

<MicroTree
  input="A warrant-case instituted on a police report has reached the Magistrate — what happens before charge is framed?"
  :gates="[
    { q: 'Has the Magistrate satisfied himself that section 230 disclosure has been complied with?',
      note: 'Section 261 is a checkpoint the Magistrate must clear at the commencement of trial',
      no: 'The trial cannot properly proceed to the discharge/charge stage until section 261 is satisfied' },
    { q: 'Has the accused filed a discharge application within sixty days of receiving the section 230 documents?',
      note: 'Section 262(1) fixes this window; filing is the accused\'s own choice, not automatic',
      no: 'The case proceeds directly toward section 263 charge-framing without a discharge determination' },
    { q: 'On the police report, the section 193 documents, and any examination the Magistrate thinks necessary, does the Magistrate consider the charge groundless?',
      note: 'Section 262(2) confines this inquiry to the record as it stands, not defence evidence',
      no: 'The case survives discharge and proceeds to section 263' }
  ]"
  result="Where the charge is not found groundless at the section 262 discharge stage, the Magistrate frames a written charge within sixty days of the first hearing on charge, reads and explains it to the accused, and asks him to plead guilty or claim trial"
  resultKind="mandatory"
  caveat="A discharge finding under section 262(2) ends the case at that stage — the sixty-day charge-framing clock under section 263(1) never starts running." />

### In plain English

Think of this cluster as three gates in sequence. Section 261 is a paperwork gate: has the accused actually received what he is entitled to under section 230? Section 262 is a merits gate, but a narrow one: on the prosecution's own record, is there even a groundless case, evaluated without the accused having to prove anything? Section 263 is the pivot gate: if the case clears both, the Magistrate commits to trying it by framing a formal, written charge — and from that point on, a sixty-day clock starts running to keep the process moving.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 261 appears to track CrPC section 238 (compliance with section 207), BNSS section 262 appears to track CrPC section 239 (when accused shall be discharged), and BNSS section 263 appears to track CrPC section 240 (framing of charge). The sixty-day discharge-application window in section 262(1) and the sixty-day charge-framing clock in section 263(1) are both flagged as likely genuine BNSS additions — no fixed numerical deadline is recalled for the corresponding CrPC provisions, though this has not been independently verified against CrPC text held in this repository.*

### Test your instinct

:::: instinct The accused's advocate files a discharge application under section 262 attaching an alibi witness's affidavit that was never part of the police report or the section 193 documents.
::: ruling The affidavit falls outside section 262(2)'s discharge inquiry
Section 262(2) confines the Magistrate's discharge determination to the police report, the documents sent with it under section 193, and any examination of the accused the Magistrate himself thinks necessary. A defence affidavit is not part of that record; it is a matter for trial, not for the discharge stage.
:::
::::

:::: instinct The Magistrate, at the commencement of trial, proceeds straight to framing a charge without first confirming that section 230 documents were supplied to the accused.
::: ruling This skips section 261's mandatory compliance check
Section 261 requires the Magistrate to satisfy himself of section 230 compliance at the commencement of trial, before the case moves forward. Framing a charge without that checkpoint departs from the sequence the section lays down.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

State of Orissa v. Debendra Nath Padhi, (2005) 1 SCC 568. The Court held that at the stage of framing of charge or considering discharge, the accused has no right to produce material of his own — the court's inquiry is confined to the record placed before it by the prosecution, and any defence material the accused wishes to rely on is a matter for trial. **Practitioner takeaway**: resist any attempt by the defence to introduce affidavits, documents, or other material outside the police report and section 193 documents at the section 262 discharge stage — the objection is that such material is simply not within the scope of that inquiry, not that it lacks merit.

#### Sword and shield

As a **shield**, section 262 protects the accused from being made to stand trial where the prosecution's own record does not disclose a triable case — he need not disprove anything, only point to the gaps in what the prosecution has filed. As a **sword**, the prosecution's countervailing tool is Debendra Nath Padhi itself: any defence attempt to smuggle rebuttal material into the discharge hearing can be met with the objection that the inquiry is confined to the record as filed.

#### The limitation clock

Two clocks in this cluster: the accused's sixty-day window under section 262(1) to file a discharge application, running from the date of supply of section 230 documents; and the Magistrate's own sixty-day window under section 263(1) to frame the charge, running from the date of the first hearing on charge (which itself follows disposal of any discharge application).

#### Interlocking matrix

Section 261 interlocks directly with section 230 (mandatory pre-trial disclosure, Chapter XVII, already built). Section 262(2)'s reference to section 193 documents ties to the police-report/case-diary framework in Chapter XIII, already built. Section 263's charge-framing procedure interlocks with the general charge-content rules of Chapter XVIII (sections 234–235, already built) for the substance of what the written charge must contain.

#### The authorities

⚠️ *None further promoted beyond the winning ratio; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Confirm the trial record shows the Magistrate's section 261 compliance check before treating any subsequent charge as validly framed.
2. Calendar the section 262(1) sixty-day discharge-application window from the date section 230 documents were actually supplied — not from the date of appearance or any earlier event.
3. Draft a section 262 discharge application to rely exclusively on the police report and section 193 documents themselves — attaching outside material invites the Debendra Nath Padhi objection and weakens the application's footing.
4. Once a charge is framed under section 263, calendar the plea and confirm it is recorded accurately — the guilty-plea/claim-to-be-tried fork at section 263(2) determines which of sections 264 or 265 governs next.

---

## Sections 264–266 — The guilty-plea fork, and the evidence that follows when there isn't one

### The dispute this solves

::: oneminute Section 263(2) ends with a fork: does the accused plead guilty, or claim to be tried? Section 264 handles the first branch — if the accused pleads guilty, the Magistrate records the plea and *may*, in his discretion, convict him on it; a guilty plea does not compel conviction, it merely permits it. Section 265 handles the second branch, which is the ordinary case: the accused refuses to plead, doesn't plead, claims to be tried, or the Magistrate declines to convict on a guilty plea. The Magistrate fixes a date for prosecution witnesses, after first supplying the accused with the police statements of those witnesses recorded during investigation. He may issue compulsory process to secure any prosecution witness's attendance on the prosecution's application, and on the fixed date takes all the evidence the prosecution produces — with discretion to defer cross-examination until other witnesses are examined, or recall a witness for further cross-examination, and with a standing option to take any witness's evidence by audio-video electronic means. Section 266 then opens the defence's turn: the accused is called to enter his defence and produce evidence, any written statement he files goes on record, and — mirroring the prosecution's own compulsory-process right — he can compel the attendance of defence witnesses or production of documents, refusable only for recorded reasons of vexation, delay, or defeating the ends of justice, subject to a proviso curbing repeat process for a witness already cross-examined or given the opportunity to be.
:::

::: story A guilty plea the Magistrate declines to accept at face value
An accused, framed with a charge of criminal breach of trust under section 263, pleads guilty when the charge is read to him. The Magistrate, noting that the plea was made hastily and without apparent appreciation of the charge's full implications, declines to convict him on the plea alone under section 264's discretionary power, and instead directs the case to proceed under section 265. A date is fixed for prosecution witnesses; the accused, having already received the police statements of those witnesses as part of the section 230 disclosure, cross-examines each as they are called, with one witness's cross-examination deferred at the Magistrate's discretion until after a related witness has testified. Once the prosecution closes, the accused enters his defence under section 266, filing a written statement and successfully compelling the attendance of a defence witness whose testimony directly contradicts the prosecution's account.
:::

> **264.** If the accused pleads guilty, the Magistrate [[!shall]] record the plea and [[?may]], in his discretion, convict him thereon.
>
> **265. (1)** If the accused refuses to plead or does not plead, or claims to be tried or the Magistrate does not convict the accused under section 264, the Magistrate [[!shall]] fix a date for the examination of witnesses:
>
> Provided that the Magistrate [[!shall]] supply in advance to the accused, the statement of witnesses recorded during investigation by the police.
>
> **(2)** The Magistrate [[?may]], on the application of the prosecution, issue a summons to any of its witnesses directing him to attend or to produce any document or other thing.
>
> **(3)** On the date so fixed, the Magistrate [[!shall]] proceed to take all such evidence as may be produced in support of the prosecution:
>
> Provided that the Magistrate [[?may]] permit the cross-examination of any witness to be deferred until any other witness or witnesses have been examined or recall any witness for further cross-examination:
>
> Provided further that the examination of a witness under this sub-section [[?may]] be done by audio-video electronic means at the designated place to be notified by the State Government.
>
> **266. (1)** The accused [[!shall]] then be called upon to enter upon his defence and produce his evidence; and if the accused puts in any written statement, the Magistrate [[!shall]] file it with the record.
>
> **(2)** If the accused, after he has entered upon his defence, applies to the Magistrate to issue any process for compelling the attendance of any witness for the purpose of examination or cross-examination, or the production of any document or other thing, the Magistrate [[!shall]] issue such process unless he considers that such application should be refused on the ground that it is made for the purpose of vexation or delay or for defeating the ends of justice and such ground [[!shall]] be recorded by him in writing:
>
> Provided that when the accused has cross-examined or had the opportunity of cross-examining any witness before entering on his defence, the attendance of such witness [[!shall]] not be compelled under this section, unless the Magistrate is satisfied that it is necessary for the ends of justice:
>
> Provided further that the examination of a witness under this sub-section [[?may]] be done by audio-video electronic means at the designated place to be notified by the State Government.
>
> **(3)** The Magistrate [[?may]], before summoning any witness on an application under sub-section (2), require that the reasonable expenses incurred by the witness in attending for the purposes of the trial be deposited in Court.

::: proviso Section 264's guilty plea permits conviction, it does not compel it
A guilty plea under section 264 gives the Magistrate a discretionary power to convict, not a mandatory duty. Where the Magistrate has any doubt about the plea's voluntariness or the accused's appreciation of what he is pleading to, section 265's fuller evidence-taking procedure remains available.
:::

::: proviso Section 266(2)'s compulsory-process right for the defence mirrors, and is limited like, the prosecution's under section 265(2)
The refusal grounds — vexation, delay, defeating the ends of justice — are the same structure used for the recall-of-witnesses right in section 240 (Chapter XVIII) and the defence compulsory-process right in section 256 (Chapter XIX). The first proviso to section 266(2) adds a further limit specific to this section: a witness the accused has already cross-examined, or had the opportunity to cross-examine, before entering his defence cannot be recompelled under this section absent the Magistrate being satisfied it is necessary for the ends of justice.
:::

### How this actually runs

<MicroTree
  input="A charge has been framed and read under section 263 — what happens next?"
  :gates="[
    { q: 'Does the accused plead guilty?',
      note: 'Section 264 records the plea either way, but conviction on it is discretionary, not automatic',
      no: 'The case proceeds under section 265 to the evidence-taking stage' },
    { q: 'Does the Magistrate choose to convict on the guilty plea?',
      note: 'Section 264 gives the Magistrate discretion to decline conviction even on a guilty plea',
      no: 'The case proceeds under section 265 despite the guilty plea' },
    { q: 'Has the prosecution completed leading its evidence under section 265?',
      note: 'The accused receives police witness statements in advance, and the Magistrate may permit deferred cross-examination or recall',
      no: 'The prosecution evidence stage continues before the defence stage opens' }
  ]"
  result="Once the prosecution's evidence closes without an earlier guilty-plea conviction, the accused enters his defence under section 266, may file a written statement, and can compel the attendance of defence witnesses or production of documents on the same vexation/delay/defeating-justice refusal standard used elsewhere in this guide"
  resultKind="mandatory"
  caveat="A witness the accused already cross-examined before entering his defence cannot ordinarily be recompelled under section 266 — only where the Magistrate is satisfied it is necessary for the ends of justice." />

### In plain English

Section 264 is a shortcut, not a shortcut anyone is entitled to — the accused can offer a guilty plea, but the Magistrate decides whether to accept it as sufficient for conviction. Where the shortcut isn't taken, sections 265 and 266 lay out the trial's actual evidence phase in two mirrored halves: the prosecution goes first, with its witnesses' statements already in the accused's hands from disclosure and the Magistrate free to manage the order of cross-examination; then the defence gets its turn, with the same kind of compulsory-process power the prosecution had, subject to the same narrow refusal grounds and one extra guardrail against re-litigating witnesses already cross-examined.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 264 appears to track CrPC section 241 (conviction on plea of guilty), BNSS section 265 appears to track CrPC section 242 (evidence for prosecution), and BNSS section 266 appears to track CrPC section 243 (evidence for defence). The audio-video electronic means provisos in both section 265(3) and section 266(2) are flagged as likely genuine BNSS additions, unverified against CrPC text held in this repository. No other significant departure is flagged for this cluster.*

### Test your instinct

:::: instinct The accused pleads guilty under section 264, and the Magistrate — without further inquiry — records the plea and immediately proceeds to sentence.
::: ruling This is within the Magistrate's discretion, but is not compelled by section 264
Section 264 permits, but does not require, conviction on a guilty plea. A Magistrate who is satisfied the plea is voluntary and informed may record it and convict; nothing in the provision bars proceeding straight to sentence on that basis. But the same Magistrate is equally entitled to decline conviction and direct the case to sections 265–266 instead.
:::
::::

:::: instinct After the accused has fully cross-examined a prosecution witness during the section 265 evidence stage, he later applies under section 266(2) to recall that same witness for further cross-examination during his defence.
::: ruling The first proviso to section 266(2) presumptively bars this
Where the accused has already cross-examined, or had the opportunity to cross-examine, a witness before entering his defence, that witness's attendance cannot be compelled again under section 266 unless the Magistrate is satisfied recall is necessary for the ends of justice. A bare desire to revisit already-covered ground does not meet that standard.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield**, section 266(2) protects the accused from a defence case gutted by an uncooperative or unavailable witness — the Magistrate must issue compulsory process unless he records specific vexation/delay/defeating-justice reasons for refusing. As a **sword**, the prosecution's countervailing tool against a defence recall application is the first proviso to section 266(2): where the witness has already been cross-examined or the opportunity existed, recall is not automatic, and the prosecution can press the Magistrate to require a specific ends-of-justice justification before compelling it again.

#### The limitation clock

No independent limitation period is fixed by this cluster; it governs the sequencing of the evidence-taking phase within a trial already underway, not a filing deadline.

#### Interlocking matrix

Section 265's advance-supply proviso ties back to section 230 (Chapter XVII, already built) and section 261 of this chapter. Section 266(2)'s refusal standard mirrors section 240(a) (Chapter XVIII, already built) and section 256 (Chapter XIX, already built) — the same vexation/delay/defeating-justice formula recurs across the guide wherever a compulsory-process right is granted subject to judicial refusal.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Where a client is inclined to plead guilty, confirm the plea is fully informed before it is recorded — a Magistrate's discretion to decline conviction under section 264 is not a substitute for advising the client accurately in the first place.
2. Confirm police witness statements have actually been supplied in advance of the section 265 evidence date, as the proviso requires, before cross-examination begins.
3. When applying under section 266(2) to recall a witness already cross-examined, draft the application to specifically address why recall is necessary for the ends of justice — a bare request will not overcome the first proviso's bar.
4. Where audio-video electronic means is used for any witness's examination under section 265(3) or section 266(2), confirm the location is one actually notified by the State Government for that purpose before relying on the evidence's validity.

---
