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
