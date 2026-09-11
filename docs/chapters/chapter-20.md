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

## Sections 267–270 — The complaint-instituted track, and the cross-examination election that makes it different

### The dispute this solves

::: oneminute Part B covers warrant-cases instituted otherwise than on a police report — typically a private complaint. The sequence inverts Part A's order: evidence comes first, charge-framing comes later. Section 267 has the Magistrate hear the prosecution and take all its evidence up front, with compulsory process available on the prosecution's application. Section 268 then gives a discharge power at that point (or earlier, at any previous stage) if, for recorded reasons, no case has been made out that would warrant conviction if unrebutted, or the charge is otherwise groundless. Section 269 is where this track becomes genuinely different from Part A: if the case survives discharge, the Magistrate frames a charge, reads and explains it, and takes the guilty-plea/claim-to-be-tried fork just as before — but if the accused does not plead guilty, he is not automatically entitled to cross-examine every prosecution witness who has already given evidence. Instead, at the next hearing (or forthwith, for recorded reasons), he must state which witnesses, if any, he wishes to cross-examine; only those named are recalled for cross-examination and re-examination, and the remaining witnesses' evidence is simply taken as it stands. A proviso in section 269(7) lets the Magistrate close the prosecution evidence and proceed on the existing record, for recorded reasons, if named witnesses cannot be secured for cross-examination despite reasonable efforts. Section 270 then opens the defence stage, applying section 266's procedure wholesale.
:::

::: story A complainant's case, and a defence that only wants to cross-examine two of six witnesses
A private complaint alleging criminal intimidation proceeds under Part B. Under section 267, the complainant leads all six of his witnesses before any charge is framed. The Magistrate, unpersuaded by a discharge application at that stage, frames a charge under section 269(1) and reads it to the accused, who claims to be tried. At the next hearing, as section 269(4) requires, the accused states that he wishes to cross-examine only two of the six witnesses — the two whose testimony most directly implicates him — and has no need to cross-examine the remaining four, whose evidence largely goes to background facts he does not dispute. Under section 269(5), only those two are recalled; under section 269(6), the other four are simply discharged without further examination. The accused then enters his defence under section 270, which applies section 266's procedure in full.
:::

> **267. (1)** When, in any warrant-case instituted otherwise than on a police report, the accused appears or is brought before a Magistrate, the Magistrate [[!shall]] proceed to hear the prosecution and take all such evidence as may be produced in support of the prosecution.
>
> **(2)** The Magistrate [[?may]], on the application of the prosecution, issue a summons to any of its witnesses directing him to attend or to produce any document or other thing.
>
> **268. (1)** If, upon taking all the evidence referred to in section 267, the Magistrate considers, for reasons to be recorded, that no case against the accused has been made out which, if unrebutted, would warrant his conviction, the Magistrate [[!shall]] discharge him.
>
> **(2)** Nothing in this section shall be deemed to prevent a Magistrate from discharging the accused at any previous stage of the case if, for reasons to be recorded by such Magistrate, he considers the charge to be groundless.
>
> **269. (1)** If, when such evidence has been taken, or at any previous stage of the case, the Magistrate is of opinion that there is ground for presuming that the accused has committed an offence triable under this Chapter, which such Magistrate is competent to try and which, in his opinion, could be adequately punished by him, he [[!shall]] frame in writing a charge against the accused.
>
> **(2)** The charge [[!shall]] then be read and explained to the accused, and he [[!shall]] be asked whether he pleads guilty or has any defence to make.
>
> **(3)** If the accused pleads guilty, the Magistrate [[!shall]] record the plea, and [[?may]], in his discretion, convict him thereon.
>
> **(4)** If the accused refuses to plead, or does not plead or claims to be tried or if the accused is not convicted under sub-section (3), he [[!shall]] be required to state, at the commencement of the next hearing of the case, or, if the Magistrate for reasons to be recorded in writing so thinks fit, forthwith, whether he wishes to cross-examine any, and, if so, which, of the witnesses for the prosecution whose evidence has been taken.
>
> **(5)** If he says he does so wish, the witnesses named by him [[!shall]] be recalled and, after cross-examination and re-examination (if any), they [[!shall]] be discharged.
>
> **(6)** The evidence of any remaining witnesses for the prosecution [[!shall]] next be taken, and after cross-examination and re-examination (if any), they [[!shall]] also be discharged.
>
> **(7)** Where, despite giving opportunity to the prosecution and after taking all reasonable measures under this Sanhita, if the attendance of the prosecution witnesses under sub-sections (5) and (6) cannot be secured for cross-examination, it [[!shall]] be deemed that such witness has not been examined for not being available, and the Magistrate [[?may]] close the prosecution evidence for reasons to be recorded in writing and proceed with the case on the basis of the materials on record.
>
> **270.** The accused [[!shall]] then be called upon to enter upon his defence and produce his evidence; and the provisions of section 266 shall apply to the case.

::: proviso Section 267's evidence-first sequence is Part B's defining departure from Part A
In a police-report case under Part A, the discharge decision and charge-framing happen before the prosecution formally leads its trial evidence — the discharge stage looks only at the police report and section 193 documents. In a complaint-instituted case under Part B, the prosecution's actual witnesses are examined first, under section 267, and only then does the Magistrate decide discharge (section 268) or charge (section 269) on the strength of that evidence.
:::

::: proviso Section 269(4)'s cross-examination election is not a waiver by default — it requires the accused to actively choose
An accused who says nothing, or fails to specify which witnesses he wishes to cross-examine when called upon under section 269(4), risks having none of the prosecution witnesses recalled — the section places the burden of naming witnesses on the accused, not on the Magistrate to ask witness-by-witness. Advocates should treat the section 269(4) hearing as a critical juncture requiring a deliberate, on-record election, not a formality to be passed over.
:::

### How this actually runs

<MicroTree
  input="A warrant-case instituted otherwise than on a police report has reached the Magistrate — how does the evidence and charge sequence run?"
  :gates="[
    { q: 'Has the Magistrate heard the prosecution and taken all its evidence under section 267?',
      note: 'Unlike Part A, evidence is taken before discharge or charge is decided',
      no: 'The section 268 discharge / section 269 charge-framing stage has not yet been reached' },
    { q: 'On that evidence (or at any earlier stage), does the Magistrate find no case made out, or the charge groundless, under section 268?',
      note: 'Section 268(2) preserves an earlier discharge power independent of section 268(1)\'s post-evidence test',
      no: 'The case survives discharge and the Magistrate proceeds to frame a charge under section 269(1)' },
    { q: 'Does the accused, when called upon under section 269(4), name specific prosecution witnesses he wishes to cross-examine?',
      note: 'This is an active election at the next hearing, or forthwith for recorded reasons — silence risks no recall at all',
      no: 'Only witnesses actually named are recalled; unnamed witnesses\' evidence stands as already taken' }
  ]"
  result="Named witnesses are recalled for cross-examination and re-examination under section 269(5) and then discharged; the remaining prosecution witnesses' evidence is taken as it stands, and the accused then enters his defence under section 270 following section 266's procedure in full"
  resultKind="mandatory"
  caveat="If a named witness cannot be secured for cross-examination despite reasonable efforts, section 269(7) lets the Magistrate deem that witness not examined and close the prosecution evidence on the existing record, for recorded reasons." />

### In plain English

Part B flips the order Part A uses: instead of screening the case on paper before hearing evidence, the Magistrate hears the actual witnesses first, then decides whether the case survives. The real procedural novelty is section 269(4)–(7): because the witnesses were already examined before the charge was even framed, the accused doesn't automatically get to cross-examine everyone who has testified — he has to say, specifically, who he wants to cross-examine. It's an efficiency mechanism (no need to redundantly recall witnesses the defence has no quarrel with) but it puts real weight on the defence advocate making a considered, on-record choice at that hearing, because an unnamed witness's evidence simply stands.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 267 appears to track CrPC section 244 (evidence for prosecution), BNSS section 268 appears to track CrPC section 245 (when accused shall be discharged), BNSS section 269 appears to track CrPC section 246 (procedure where accused is not discharged), and BNSS section 270 appears to track CrPC section 247 (evidence for defence). No significant departure is flagged for this cluster; the cross-examination-election mechanism in section 269(4)–(7) reads as substantively continuous with its CrPC predecessor, though this has not been independently cross-checked clause-by-clause.*

### Test your instinct

:::: instinct At the section 269(4) hearing, the accused's advocate states that the accused wishes to reserve his position and will decide later which witnesses to cross-examine.
::: ruling This does not satisfy section 269(4)'s requirement to state which witnesses he wishes to cross-examine
Section 269(4) calls for the accused to state, at the specified hearing, whether he wishes to cross-examine any witnesses and, if so, which ones. A reservation of position without naming witnesses leaves the Magistrate with nothing to act on — the safer course is to seek a short adjournment to make the election properly, rather than risk the hearing proceeding on the basis that no witnesses were named.
:::
::::

:::: instinct A witness named for recall under section 269(5) has since become untraceable despite the Magistrate directing reasonable efforts to secure his attendance.
::: ruling Section 269(7) lets the Magistrate deem the witness not examined and close the prosecution evidence
Where reasonable measures have been taken and the named witness still cannot be secured for cross-examination, section 269(7) treats that witness's evidence as not given (for not being available) and allows the Magistrate, for recorded reasons, to close the prosecution evidence and proceed on the materials actually on record.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield**, section 269(4)'s cross-examination election protects the accused from being forced to sit through pointless recall of witnesses whose evidence he does not dispute, focusing his defence resources on the witnesses that matter. As a **sword**, it cuts the other way too: a defence advocate who fails to name a witness at the section 269(4) hearing loses the opportunity to cross-examine that witness at all absent some later application — the prosecution's countervailing interest is simply in holding the accused to whatever he stated, or failed to state, at that hearing.

#### The limitation clock

No independent limitation period is fixed by this cluster; section 269(4) requires the cross-examination election "at the commencement of the next hearing," or forthwith for recorded reasons — a procedural timing rule within an ongoing trial, not a filing deadline.

#### Interlocking matrix

Section 270 interlocks directly with section 266 (Chapter XX, this chapter, cluster 2 — already built), whose defence-evidence procedure it adopts wholesale, including the vexation/delay/defeating-justice compulsory-process standard. Section 268(1)'s "no case… if unrebutted" language echoes the acquittal-checkpoint standard in section 255 (Chapter XIX, already built).

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. In any Part B complaint case, prepare the section 269(4) cross-examination election in advance of the hearing — treat it as a substantive strategic decision, not a formality, since an unnamed witness's evidence stands unchallenged.
2. Where a client insists on reserving the cross-examination decision, seek a short, specific adjournment rather than allowing the hearing to proceed without any election on record.
3. If a named witness becomes unavailable, document every reasonable effort made to secure attendance — section 269(7)'s deemed-not-examined route requires the Magistrate to find those efforts were actually made.
4. At the section 268 discharge stage, remember evidence has already been led under section 267 — the discharge argument here is evidentiary ("no case, if unrebutted, would warrant conviction"), not merely a paper-record argument as under Part A's section 262.

---

## Sections 271–273 — Acquittal or conviction, the complainant who doesn't show, and the cost of a baseless accusation

### The dispute this solves

::: oneminute Part C closes the chapter with three provisions that apply across both tracks. Section 271 is the trial's actual verdict: not guilty means acquittal, recorded outright; guilty means a mandatory sentence hearing (unless section 364 or section 401 diverts the case), followed by sentence according to law; and where a previous conviction was charged under section 234(7) and the accused disputes it, evidence on that dispute is taken and a finding recorded only *after* conviction — the previous-conviction charge itself stays out of the trial, unread and unreferenced, until then. Section 272 is a narrow, discretionary escape valve for complaint cases: if the complainant is absent on a hearing date and the offence is compoundable or non-cognizable, the Magistrate may, after giving the complainant thirty days to appear, discharge the accused at any point before charge is framed — notwithstanding anything else in the chapter. Section 273 is the flagship, and the reason this cluster matters most: where a Magistrate discharges or acquits an accused in any case instituted on complaint or information, and forms the opinion there was no reasonable ground for making the accusation, he can call on the complainant or informant to show cause why he should not pay compensation — up to the amount of fine the Magistrate could himself impose — to the accused. Default in payment can mean simple imprisonment up to thirty days. The compensation order doesn't exempt the complainant from other civil or criminal liability, though any amount actually paid is set off against a later civil suit on the same matter. A complainant ordered to pay more than two thousand rupees by a second-class Magistrate can appeal as if he himself had been convicted, and payment is held back pending that appeal (or, if none is filed, for one month). Section 273(8) makes clear the whole mechanism applies to summons-cases as well as warrant-cases.
:::

::: story A complaint that collapses at trial, and the compensation order that follows
A private complainant alleges criminal breach of trust against a former business partner, but at trial his own testimony is internally inconsistent, and the only supporting witness he names disavows the complaint's central allegation under cross-examination. The Magistrate acquits the accused under section 271(1), and — going further — records a specific finding that there was no reasonable ground for making the accusation at all, not merely that the case wasn't proved. Under section 273(1), the Magistrate calls on the complainant, present at the hearing, to show cause why he should not pay compensation to the acquitted accused. The complainant's explanation — that he genuinely believed his allegations — fails to satisfy the Magistrate given the specific, particularised finding already made, and an order for compensation of eight thousand rupees is passed, recoverable by simple imprisonment of up to thirty days in default. The complainant, having been ordered to pay more than two thousand rupees, appeals as though he had himself been convicted; payment is held back until that appeal is decided.
:::

> **271. (1)** If, in any case under this Chapter in which a charge has been framed, the Magistrate finds the accused not guilty, he [[!shall]] record an order of acquittal.
>
> **(2)** Where, in any case under this Chapter, the Magistrate finds the accused guilty, but does not proceed in accordance with the provisions of section 364 or section 401, he [[!shall]], after hearing the accused on the question of sentence, pass sentence upon him according to law.
>
> **(3)** Where, in any case under this Chapter, a previous conviction is charged under the provisions of sub-section (7) of section 234 and the accused does not admit that he has been previously convicted as alleged in the charge, the Magistrate [[?may]], after he has convicted the said accused, take evidence in respect of the alleged previous conviction, and [[!shall]] record a finding thereon:
>
> Provided that no such charge shall be read out by the Magistrate nor shall the accused be asked to plead thereto nor shall the previous conviction be referred to by the prosecution or in any evidence adduced by it, unless and until the accused has been convicted under sub-section (2).
>
> **272.** When the proceedings have been instituted upon complaint, and on any day fixed for the hearing of the case, the complainant is absent, and the offence may be lawfully compounded or is not a cognizable offence, the Magistrate [[?may]] after giving thirty days' time to the complainant to be present, in his discretion, notwithstanding anything hereinbefore contained, at any time before the charge has been framed, discharge the accused.
>
> **273. (1)** If, in any case instituted upon complaint or upon information given to a police officer or to a Magistrate, one or more persons is or are accused before a Magistrate of any offence triable by a Magistrate, and the Magistrate by whom the case is heard discharges or acquits all or any of the accused, and is of opinion that there was no reasonable ground for making the accusation against them or any of them, the Magistrate [[?may]], by his order of discharge or acquittal, if the person upon whose complaint or information the accusation was made is present, call upon him forthwith to show cause why he should not pay compensation to such accused or to each or any of such accused when there are more than one; or, if such person is not present, direct the issue of a summons to him to appear and show cause as aforesaid.
>
> **(2)** The Magistrate [[!shall]] record and consider any cause which such complainant or informant may show, and if he is satisfied that there was no reasonable ground for making the accusation, [[?may]], for reasons to be recorded, make an order that compensation to such amount, not exceeding the amount of fine he is empowered to impose, as he may determine, be paid by such complainant or informant to the accused or to each or any of them.
>
> **(3)** The Magistrate [[?may]], by the order directing payment of the compensation under sub-section (2), further order that, in default of payment, the person ordered to pay such compensation shall undergo simple imprisonment for a period not exceeding thirty days.
>
> **(4)** When any person is imprisoned under sub-section (3), the provisions of sub-section (6) of section 8 of the Bharatiya Nyaya Sanhita, 2023 shall, so far as may be, apply.
>
> **(5)** No person who has been directed to pay compensation under this section shall, by reason of such order, be exempted from any civil or criminal liability in respect of the complaint made or information given by him:
>
> Provided that any amount paid to an accused person under this section shall be taken into account in awarding compensation to such person in any subsequent civil suit relating to the same matter.
>
> **(6)** A complainant or informant who has been ordered under sub-section (2) by a Magistrate of the second class to pay compensation exceeding two thousand rupees, [[?may]] appeal from the order, as if such complainant or informant had been convicted on a trial held by such Magistrate.
>
> **(7)** When an order for payment of compensation to an accused person is made in a case which is subject to appeal under sub-section (6), the compensation shall not be paid to him before the period allowed for the presentation of the appeal has elapsed, or, if an appeal is presented, before the appeal has been decided; and where such order is made in a case which is not so subject to appeal the compensation shall not be paid before the expiration of one month from the date of the order.
>
> **(8)** The provisions of this section apply to summons-cases as well as to warrant-cases.

::: proviso Section 271(3)'s previous-conviction procedure keeps the jury (and the Magistrate's own mind, insofar as guilt is concerned) uncontaminated until after conviction
This mirrors the identical safeguard already built for Sessions trials at section 259 (Chapter XIX): the previous-conviction charge under section 234(7) is not read out, the accused is not asked to plead to it, and neither the prosecution nor its evidence may refer to it until the accused has actually been convicted of the offence presently on trial. Only then does the previous-conviction dispute get litigated.
:::

::: proviso Section 273's compensation power requires a specific finding of no reasonable ground, not merely a discharge or acquittal
A bare acquittal or discharge — even a comprehensive one — does not by itself trigger section 273. The Magistrate must go further and form the opinion, stated as such, that there was no reasonable ground for making the accusation in the first place. Where the case simply wasn't proved to the requisite standard, without more, the ordinary consequence is acquittal alone; compensation requires the additional, specific finding.
:::

### How this actually runs

<MicroTree
  input="A warrant-case trial under this Chapter has concluded on the evidence — what happens at judgment, and can the complainant himself face consequences?"
  :gates="[
    { q: 'Does the Magistrate find the accused not guilty?',
      no: 'The Magistrate proceeds to the sentence hearing and sentence under section 271(2), subject to sections 364/401' },
    { q: 'Is the case one where a previous conviction was charged under section 234(7) and disputed by the accused?',
      note: 'This evidence and finding is taken only after conviction, mirroring section 259 from Chapter XIX',
      no: 'No separate previous-conviction procedure is triggered' },
    { q: 'On discharge or acquittal, does the Magistrate additionally find there was no reasonable ground for making the accusation?',
      note: 'This is a specific finding beyond the discharge/acquittal itself — section 273 does not follow automatically from either',
      no: 'The complainant or informant faces no compensation exposure under section 273' }
  ]"
  result="The Magistrate may call on the complainant or informant to show cause why he should not pay compensation to the accused, and — if the cause shown does not satisfy him — order compensation up to the fine amount he could himself impose, recoverable by up to thirty days' simple imprisonment in default, appealable if it exceeds two thousand rupees ordered by a second-class Magistrate, with payment held pending any such appeal"
  resultKind="discretionary"
  caveat="Compensation paid under section 273 does not exempt the complainant from other civil or criminal liability, but any amount paid is set off against a later civil suit on the same matter — and the whole mechanism applies to summons-cases too, under section 273(8)." />

### In plain English

Section 271 is the ordinary verdict machinery: acquit if not guilty, hear-then-sentence if guilty, and keep any disputed previous-conviction question walled off until after the guilt question is settled. Section 272 is a minor housekeeping valve for complaint cases where a complainant simply stops showing up to a minor, compoundable or non-cognizable matter. Section 273 is the provision with teeth: it recognises that a criminal complaint is not a costless tool, and where a Magistrate specifically finds an accusation had no reasonable basis at all — not just that it wasn't proved — the person who made it can be made to answer for that in the same proceeding, without the accused needing to file a separate civil suit for malicious prosecution.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 271 appears to track CrPC section 248 (acquittal or conviction), BNSS section 272 appears to track CrPC section 249 (absence of complainant), and BNSS section 273 appears to track CrPC section 250 (compensation for accusation without reasonable cause). No significant departure is flagged for this cluster — the mechanism reads as substantively continuous with its CrPC predecessor, mirroring the generalised version of the same compensation idea already seen in section 260 (Chapter XIX) for the narrower defamation-complaint context, though this has not been independently cross-checked clause-by-clause. The cross-reference in section 271(3) to "section 234(7)" and in section 271(2) to "section 364 or section 401" is drawn directly from the bare Act text; sections 364 and 401 themselves are ⚠️ not yet built in this repository, so their exact scope (sentencing procedure / probation-type disposal, respectively) is flagged rather than asserted.*

### Test your instinct

:::: instinct The Magistrate acquits the accused, stating only that the prosecution failed to prove its case beyond reasonable doubt, without commenting on whether the accusation had any reasonable ground.
::: ruling Section 273 is not automatically triggered by this acquittal alone
Section 273(1) requires the Magistrate to be "of opinion that there was no reasonable ground for making the accusation" before the show-cause mechanism is even engaged. An acquittal resting solely on the prosecution's failure to meet its burden of proof, without an accompanying finding that the accusation itself lacked reasonable ground, does not by itself expose the complainant to a compensation order.
:::
::::

:::: instinct A complainant ordered to pay compensation of fifteen hundred rupees by a second-class Magistrate wants to appeal that order.
::: ruling Section 273(6)'s appeal right is limited to orders exceeding two thousand rupees
Section 273(6) grants an appeal, as if the complainant had himself been convicted, only where a Magistrate of the second class orders compensation exceeding two thousand rupees. An order of fifteen hundred rupees from a second-class Magistrate falls below that threshold and would not carry this specific appeal right under this sub-section.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield**, section 273 protects an accused who has been dragged through a baseless accusation, giving him a compensation route within the very proceeding that cleared him, without a separate civil suit. As a **sword**, defence counsel securing an acquittal should press the Magistrate, at the point of recording the acquittal, to make the further specific finding that the accusation lacked reasonable ground — since that finding, not the acquittal alone, is what unlocks section 273. The complainant's countervailing tool is section 273(2)'s show-cause opportunity itself: a genuine, good-faith explanation for having made the complaint can defeat the compensation order even where the case failed on the merits.

#### The limitation clock

Section 273(7) is this cluster's limitation-adjacent entry: compensation ordered in an appealable case cannot be paid until the appeal period has lapsed, or, if an appeal is filed, until it is decided; in a non-appealable case, payment is withheld for one month from the order. Section 272's complainant-absence discharge carries its own thirty-day notice requirement before discharge can follow.

#### Interlocking matrix

Section 271(3) interlocks directly with section 234(7) (Chapter XVIII, already built) for the previous-conviction pleading mechanism, and mirrors section 259's identical sequencing safeguard (Chapter XIX, already built). Section 273 generalises the compensation mechanism already seen in the narrower, high-office-holder-specific defamation context of section 260 (Chapter XIX, already built) to any complaint or information case before a Magistrate. Section 271(2)'s cross-references to sections 364 and 401 flag both as ⚠️ not yet built in this repository.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. On securing an acquittal or discharge for a client who was the target of what appears to be a baseless private complaint, explicitly invite the Magistrate to record a finding of no reasonable ground — the acquittal order alone will not trigger section 273.
2. When representing a complainant facing a section 273(1) show-cause notice, prepare a genuine, documented explanation of the basis for the original complaint — a good-faith explanation can defeat the compensation order even after an adverse verdict on the underlying case.
3. Calendar the section 273(7) payment-hold period correctly depending on whether the order is appealable — releasing compensation prematurely risks having to claw it back if the appeal succeeds.
4. Where a client has already recovered compensation under section 273, factor the set-off proviso to section 273(5) into any later civil suit for the same matter — it reduces, but does not eliminate, the civil claim.

---
