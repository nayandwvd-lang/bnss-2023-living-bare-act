# Chapter XVII — Commencement of Proceedings Before Magistrates

## Sections 227–229 — Issue of process: summons, warrant, and the petty-offence shortcut

### The dispute this solves

::: oneminute Taking cognizance is not the same as summoning the accused. Section 227 is the hinge between the two: once a Magistrate forms the opinion that there is sufficient ground for proceeding, he has to sort the case into one of two tracks — a summons-case, where summons must issue, or a warrant-case, where he can choose a warrant or, if he thinks fit, a summons instead. Two conditions have to be satisfied before either can actually go out: the prosecution's witness list has to be filed, and if the case began with a written complaint, a copy of that complaint has to travel with the summons or warrant. Section 228 then lets the Magistrate spare an accused the burden of personal attendance in a summons-case, while keeping the power to demand it back at any stage. Section 229 is a distinct, self-contained shortcut for petty offences — small-fine cases that can be disposed of almost entirely by post, without the accused ever appearing in person at all.
The summons-case/warrant-case split is not new law being invented here; it is the standard BNSS-era classification of offences by their punishment (summons-cases carry the lighter punishments, warrant-cases the heavier ones), and section 227(1) simply tells the Magistrate what process follows from which classification. What is worth noticing is the pair of gates section 227(2) and (3) place ahead of any process at all — the witness list requirement and the complaint-copy requirement — because both convert what might look like a routine clerical step into something the defence can actually test.
:::

::: story The warrant-case Magistrate who chose a summons, and the driver who pleaded guilty by post
A case of criminal breach of trust is squarely a warrant-case. Section 227(1)(b) does not compel the Magistrate to issue a warrant even so — he may issue a warrant, "or, if he thinks fit, a summons," judging that this particular accused, a settled local businessman with no flight risk, is unlikely to abscond. The statute leaves that judgment to him. In an unrelated matter, an accused is alleged to have caused a minor public nuisance punishable only with a fine of up to three thousand rupees — a section 229 "petty offence." Rather than appearing before the Magistrate at all, the accused posts in his plea of guilty along with the fine amount by the specified date, and the case concludes without him ever entering the courtroom.
:::

> **227. (1)** If in the opinion of a Magistrate taking cognizance of an offence there is sufficient ground for proceeding, and the case appears to be—
>
> (a) a [[=summons-case]], he [[!shall]] issue summons to the accused for his attendance; or
>
> (b) a [[=warrant-case]], he [[?may]] issue a warrant, or, if he thinks fit, a summons, for causing the accused to be brought or to appear at a certain time before such Magistrate or (if he has no jurisdiction himself) some other Magistrate having jurisdiction:
>
> *Provided that summons or warrants [[?may]] also be issued through electronic means.*
>
> **(2)** No summons or warrant [[!shall]] be issued against the accused under sub-section (1) until a list of the prosecution witnesses has been filed.
>
> **(3)** In a proceeding instituted upon a complaint made in writing, every summons or warrant issued under sub-section (1) [[!shall]] be accompanied by a copy of such complaint.
>
> **(4)** When by any law for the time being in force any process-fees or other fees are payable, no process [[!shall]] be issued until the fees are paid and, if such fees are not paid within a reasonable time, the Magistrate [[?may]] dismiss the complaint.
>
> **(5)** Nothing in this section shall be deemed to affect the provisions of section 90.
>
> **228. (1)** Whenever a Magistrate issues a summons, he [[?may]], if he sees reason so to do, dispense with the personal attendance of the accused and permit him to appear by his advocate.
>
> **(2)** But the Magistrate inquiring into or trying the case [[?may]], in his discretion, at any stage of the proceedings, direct the personal attendance of the accused, and, if necessary, enforce such attendance in the manner hereinbefore provided.
>
> **229. (1)** If, in the opinion of a Magistrate taking cognizance of a [[=petty offence]], the case may be summarily disposed of under section 283 or section 284, the Magistrate [[!shall]], except where he is, for reasons to be recorded in writing of a contrary opinion, issue summons to the accused requiring him either to appear in person or by an advocate before the Magistrate on a specified date, or if he desires to plead guilty to the charge without appearing before the Magistrate, to transmit before the specified date, by post or by messenger to the Magistrate, the said plea in writing and the amount of fine specified in the summons or if he desires to appear by an advocate and to plead guilty to the charge through such advocate, to authorise, in writing, the advocate to plead guilty to the charge on his behalf and to pay the fine through such advocate:
>
> *Provided that the amount of the fine specified in such summons shall not exceed five thousand rupees.*
>
> **(2)** For the purposes of this section, "petty offence" means any offence punishable only with fine not exceeding five thousand rupees, but does not include any offence so punishable under the Motor Vehicles Act, 1988, or under any other law which provides for convicting the accused person in his absence on a plea of guilty.
>
> **(3)** The State Government [[?may]], by notification, specially empower any Magistrate to exercise the powers conferred by sub-section (1) in relation to any offence which is compoundable under section 359 or any offence punishable with imprisonment for a term not exceeding three months, or with fine, or with both where the Magistrate is of opinion that, having regard to the facts and circumstances of the case, the imposition of fine only would meet the ends of justice.

::: proviso Section 227(2) and (3) are gates on process, not mere formalities
The witness-list filing requirement in section 227(2) and the complaint-copy requirement in section 227(3) are both phrased as absolute bars — "no summons or warrant shall be issued" until they are met. A summons or warrant issued in their absence is not simply irregular paperwork; the statute makes satisfying both a precondition to the very issuing of process.
:::

::: proviso Section 228's dispensation and section 90's warrant-in-lieu power are separate tools
Section 228(1) lets a Magistrate excuse an accused from personal attendance once summons has already issued, permitting appearance by advocate instead. This is distinct from section 90 (Chapter VI, already built), which lets a Court take a bond in lieu of, or in addition to, a summons or warrant at the point process is first issued. The two operate at different moments and section 227(5) expressly preserves section 90 rather than displacing it.
:::

### How this actually runs

<MicroTree
  input="A Magistrate has formed the opinion that there is sufficient ground for proceeding — what has to happen before the accused is actually brought before the court?"
  :gates="[
    { q: 'Does the case appear to be a summons-case?',
      note: 'Section 227(1)(a) makes issuing summons to the accused mandatory here',
      no: 'Check whether it is instead a warrant-case' },
    { q: 'Does the case instead appear to be a warrant-case?',
      note: 'Section 227(1)(b) gives the Magistrate a choice — a warrant, or, if he thinks fit, a summons instead — directed to this Magistrate or, if he lacks jurisdiction, to another Magistrate who has it',
      no: 'Neither route under section 227(1) applies on these facts' },
    { q: 'Has a list of the prosecution witnesses been filed?',
      note: 'Section 227(2) bars issuing any summons or warrant at all until this list is filed',
      no: 'No summons or warrant may yet be issued' },
    { q: 'Was the proceeding instituted upon a complaint made in writing?',
      note: 'Section 227(3) then makes it mandatory that a copy of that complaint accompany the summons or warrant',
      no: 'Section 227(3) does not apply on these facts' }
  ]"
  result="Summons issues in a summons-case, and a warrant — or, at the Magistrate's discretion, a summons instead — issues in a warrant-case; process may also be issued through electronic means, but only once the witness list is filed and, for a written complaint, only accompanied by a copy of it"
  resultKind="mandatory"
  caveat="Where process-fees or other fees are payable by law, no process issues until they are paid, and the Magistrate may dismiss the complaint if the fees remain unpaid after a reasonable time — section 227(4). None of this disturbs section 90's separate warrant-in-lieu-of-summons power (Chapter VI)." />

### In plain English

Section 227 is the moment a case stops being paperwork and starts summoning a person. If it is a summons-case, the Magistrate has no choice — summons must issue. If it is a warrant-case, he has room to judge the accused's likely conduct and can issue a summons even where a warrant would have been available. Either way, two gates must clear first: the prosecution's witness list has to be on file, and a written complaint has to travel with the process as a copy. Section 228 then gives the Magistrate room to spare a cooperative accused the burden of showing up in person in a summons-case — he can appear through an advocate instead — while keeping the power to snap that back and demand personal attendance if the case later needs it. Section 229 sits apart from all of this: for genuinely minor, small-fine offences, the accused can plead guilty by post and pay the fine without ever walking into the courtroom, provided the fine on offer does not exceed five thousand rupees and the offence is not a Motor Vehicles Act matter or one that otherwise allows conviction in absentia.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 227 appears to track CrPC section 204 (issue of process), BNSS section 228 appears to track CrPC section 205 (Magistrate may dispense with personal attendance of accused), and BNSS section 229 appears to track CrPC section 206 (special summons in cases of petty offence). One feature is flagged rather than asserted: section 227(2)'s mandatory pre-filing of the prosecution's witness list before any summons or warrant may issue does not appear, on this reading, to have a direct counterpart in CrPC section 204 — if confirmed, this looks like a genuine BNSS-era addition rather than continuity. The electronic-means proviso to section 227(1) is part of this Sanhita's general digitisation pattern seen across earlier chapters, not something specific to this cluster.*

### Test your instinct

:::: instinct A Magistrate takes cognizance of an offence that is unambiguously a warrant-case. Believing warrants to be mandatory in every warrant-case, he issues a warrant without considering whether a summons would do.
::: ruling A summons was always available — but the choice, not the outcome, is what matters
Section 227(1)(b) gives the Magistrate a warrant "or, if he thinks fit, a summons" — the word "may" attaches to the warrant, and the summons alternative is expressly available at his discretion. Nothing in the section makes a warrant compulsory merely because the case is a warrant-case. The Magistrate's warrant is not unlawful for that reason alone, but the premise that he had no choice is wrong; he was free to consider a summons and simply did not.
:::
::::

:::: instinct A summons is issued in a proceeding instituted on a written complaint, but no copy of the complaint accompanies it. The defence later raises this as a defect.
::: ruling The defect is real — section 227(3) is mandatory
Section 227(3) is drafted as an unqualified "shall": every summons or warrant issued in a proceeding instituted on a written complaint must be accompanied by a copy of that complaint. Its omission is not a matter of degree or prejudice to be weighed case by case on the face of the section — it is a plain failure to comply with a mandatory requirement attached to the issuing of process itself.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

Pepsi Foods Ltd. v. Special Judicial Magistrate, (1998) 5 SCC 749. The Court held that issuing summons in a criminal case is a serious matter, not a mechanical or automatic act — a Magistrate must apply his mind to the facts and the law before deciding that there is sufficient ground for proceeding and directing process to issue. **Practitioner takeaway**: an order issuing process under section 227 that shows no application of mind to whether there is sufficient ground for proceeding is vulnerable to challenge on that basis alone, independent of any defect in the witness-list or complaint-copy requirements.

#### Sword and shield

As a **shield**, sections 227(2) and (3) give the defence two hard, checkable preconditions to process — the witness list and, for written complaints, the complaint copy — either of which, if unmet, undermines the validity of the summons or warrant. Section 228 additionally shields a cooperative accused from the burden of personal attendance once summons has issued. As a **sword**, the prosecution's answer to a section 227 challenge is that "sufficient ground" is a low, prima facie threshold under Pepsi Foods, not a mini-trial — and that section 228(2) lets the Magistrate compel personal attendance at any later stage regardless of an earlier dispensation.

#### The limitation clock

No independent limitation period is fixed by this cluster.

#### Interlocking matrix

Section 227(5) interlocks directly with section 90 (Chapter VI, already built) — the warrant-in-lieu-of-summons bond power, expressly preserved rather than displaced. Section 229's summary-disposal route interlocks forward with sections 283–284, both ⚠️ *not yet built in this repository as of this rendering — cross-check before relying on the summary-trial mechanics themselves.* Section 229(3)'s compounding cross-reference to section 359 is likewise ⚠️ *not yet built in this repository.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before treating process as validly issued, confirm the prosecution's witness list was on file and, for a written complaint, that a copy of the complaint accompanied the summons or warrant.
2. Where a warrant issued in a warrant-case, check whether the order reflects any consideration of the summons alternative — not because a warrant is per se defective, but because a wholly mechanical order is vulnerable under Pepsi Foods.
3. Where personal attendance was earlier dispensed with under section 228(1), confirm any later demand for personal attendance under section 228(2) was properly made before treating non-appearance as a default.
4. For a genuinely petty, small-fine offence, confirm the fine on offer does not exceed five thousand rupees and that the offence is not excluded under section 229(2) before advising a client toward the postal guilty-plea route.

---

## Sections 230–231 — Mandatory disclosure of the prosecution's papers, before the case moves further

### The dispute this solves

::: oneminute An accused cannot meaningfully defend himself against papers he has never seen. Section 230 makes that impossible in a police-report case: within fourteen days of the accused's production or appearance — not "eventually," a hard clock — the Magistrate must hand over, free of cost, the police report, the FIR, the witness statements the prosecution intends to rely on, any recorded confessions, and any other document forwarded with the police report. Section 231 does the same job for the very different situation of a complaint case that turns out to be triable exclusively by the Court of Session: the statements taken under sections 223 or 225, any confessions, and any documents the prosecution intends to produce, all furnished forthwith and free of cost.
Both sections share the same underlying design: give the accused, before things move further, honest and complete access to what the prosecution has, with two safety valves for practical reality. If any part of a witness statement was excluded from disclosure at the investigation stage under section 193(7), the Magistrate can still direct that part be furnished after weighing the police officer's stated reasons. And if a document is voluminous, the Magistrate can furnish it electronically or simply let the accused inspect it in court rather than photocopy it in full — with electronic supply expressly treated as due furnishing either way.
:::

::: story The fourteen-day clock, and the voluminous case diary
An accused is produced before the Magistrate in a case instituted on a police report. Section 230 does not leave the timing to the Magistrate's convenience — the copies of the police report, the FIR, the relied-upon witness statements, any confessions, and any other forwarded documents must reach the accused and a represented victim "without delay, and in no case beyond fourteen days" from that production. In a separate, document-heavy economic offence, the prosecution's file runs to thousands of pages. Rather than photocopying the entire file for the accused, the Magistrate — satisfied the material is voluminous — directs that it be furnished electronically instead, a course the statute treats as fully satisfying the disclosure obligation just as a paper copy would.
:::

> **230.** In any case where the proceeding has been instituted on a police report, the Magistrate [[!shall]] without delay, and in no case beyond fourteen days from the date of production or appearance of the accused, furnish to the accused and the victim (if represented by an advocate) free of cost, a copy of each of the following:—
>
> (i) the police report;
>
> (ii) the first information report recorded under section 173;
>
> (iii) the statements recorded under sub-section (3) of section 180 of all persons whom the prosecution proposes to examine as its witnesses, excluding therefrom any part in regard to which a request for such exclusion has been made by the police officer under sub-section (7) of section 193;
>
> (iv) the confessions and statements, if any, recorded under section 183;
>
> (v) any other document or relevant extract thereof forwarded to the Magistrate with the police report under sub-section (6) of section 193:
>
> *Provided that the Magistrate [[?may]], after perusing any such part of a statement as is referred to in clause (iii) and considering the reasons given by the police officer for the request, direct that a copy of that part of the statement or of such portion thereof as the Magistrate thinks proper, shall be furnished to the accused:*
>
> *Provided further that if the Magistrate is satisfied that any such document is voluminous, he shall, instead of furnishing the accused and the victim (if represented by an advocate) with a copy thereof, [[?may]] furnish the copies through electronic means or direct that he will only be allowed to inspect it either personally or through an advocate in Court:*
>
> *Provided also that supply of documents in electronic form shall be considered as duly furnished.*
>
> **231.** Where, in a case instituted otherwise than on a police report, it appears to the Magistrate issuing process under section 227 that the offence is triable exclusively by the Court of Session, the Magistrate [[!shall]] forthwith furnish to the accused, free of cost, a copy of each of the following:—
>
> (i) the statements recorded under section 223 or section 225, of all persons examined by the Magistrate;
>
> (ii) the statements and confessions, if any, recorded under section 180 or section 183;
>
> (iii) any documents produced before the Magistrate on which the prosecution proposes to rely:
>
> *Provided that if the Magistrate is satisfied that any such document is voluminous, he [[?may]], instead of furnishing the accused with a copy thereof, direct that he will only be allowed to inspect it either personally or through an advocate in Court:*
>
> *Provided further that supply of documents in electronic form shall be considered as duly furnished.*

::: proviso The fourteen-day clock in section 230 has no counterpart in section 231's "forthwith"
Section 230 fixes an outer limit — fourteen days from the accused's production or appearance — for a police-report case. Section 231 uses "forthwith" instead, without a numbered outer limit, for a complaint case found to be exclusively Sessions-triable. The two disclosure duties are structurally parallel but are not timed identically, and a practitioner should not assume the fourteen-day figure transfers across.
:::

### How this actually runs

<MicroTree
  input="A Magistrate has issued process — what documents must be furnished to the accused, and on what timeline, before the case can move further?"
  :gates="[
    { q: 'Was the proceeding instituted on a police report?',
      note: 'Section 230 applies — the police report, the FIR, the relied-upon witness statements, any confessions, and any other forwarded document, furnished free of cost within fourteen days of the accused’s production or appearance',
      no: 'Check whether it is instead a complaint case found to be exclusively Sessions-triable' },
    { q: 'Was the proceeding instead instituted otherwise than on a police report, and does it appear to the Magistrate to be exclusively triable by the Court of Session?',
      note: 'Section 231 applies instead — the section 223/225 statements, any confessions, and any documents relied on, furnished forthwith and free of cost',
      no: 'Neither section 230 nor section 231 applies on these facts' },
    { q: 'Is any part of a witness statement subject to an exclusion request made under section 193(7) at the investigation stage?',
      note: 'The Magistrate may still direct that part be furnished after perusing it and weighing the police officer’s stated reasons — section 230’s first proviso',
      no: 'No exclusion issue arises' },
    { q: 'Is the material in question voluminous?',
      note: 'The Magistrate may furnish it electronically or direct inspection in Court instead of a full copy — electronic supply is treated as due furnishing either way',
      no: 'The ordinary copy-furnishing obligation applies without modification' }
  ]"
  result="The accused (and, in a police-report case, a represented victim) receives free copies of the specified papers on the applicable timeline — without delay and within fourteen days for a police-report case, forthwith for an exclusively Sessions-triable complaint case"
  resultKind="mandatory"
  caveat="Neither section 230 nor section 231 requires furnishing documents the prosecution does not propose to rely on or produce — both sections are scoped to specified categories of material, not the entire police or Magistrate's file." />

### In plain English

Once process has issued, the accused is entitled to see the prosecution's actual papers, not just hear a summary of the case against him. If the case began with a police report, section 230 puts a hard fourteen-day clock on it — the police report, the FIR, the statements of the witnesses the prosecution intends to call, any confessions, and any other forwarded material, all handed over free of cost, with any victim who has an advocate getting the same. If instead the case is a private complaint that turns out to be one only a Court of Session can try, section 231 does the equivalent job on a "forthwith" timeline rather than a numbered one — the statements already taken from witnesses, any confessions, and the documents the prosecution means to produce. Both sections build in the same two pressure valves: material excluded at the investigation stage can still be ordered furnished after the Magistrate looks at the police officer's reasons, and a genuinely voluminous file can be supplied electronically or simply made available for inspection, rather than forcing the machinery to photocopy everything by hand.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 230 appears to track CrPC section 207 (supply to the accused of copy of police report and other documents), and BNSS section 231 appears to track CrPC section 208 (supply of copies of statements and documents to accused in other cases triable by Court of Session). One feature is flagged as a likely genuine BNSS-era addition rather than continuity: the explicit fourteen-day outer limit in section 230, running from the date of the accused's production or appearance, does not appear to have had a fixed numbered counterpart under CrPC section 207, which is generally recalled as requiring disclosure "without delay" but without a stated day-count ceiling — if confirmed, this converts what was a general diligence standard into an enforceable deadline. The electronic-supply provisos in both sections are part of this Sanhita's general digitisation pattern already seen across earlier chapters.*

### Test your instinct

:::: instinct Sixteen days after the accused's production before the Magistrate in a police-report case, the accused still has not received copies of the witness statements the prosecution intends to rely on. The prosecution argues the delay is minor and the accused suffered no real prejudice.
::: ruling The fourteen-day limit in section 230 has already been breached
Section 230 fixes an outer limit of fourteen days from the date of the accused's production or appearance — "in no case beyond." Sixteen days exceeds that limit on the section's own terms. Whether the breach ultimately affects the validity of subsequent proceedings is a separate question from whether the limit was breached at all; on the timing alone, it was.
:::
::::

:::: instinct In a complaint case later found to be exclusively triable by the Court of Session, the Magistrate furnishes the accused with copies of the section 223 statements but withholds a lengthy forensic report on the ground that it is voluminous, without offering inspection or electronic supply as an alternative.
::: ruling The voluminous-document proviso was not properly applied
Section 231's proviso permits withholding a full copy of a voluminous document only if the Magistrate instead directs that the accused be allowed to inspect it, personally or through an advocate, in Court — or, under the general electronic-supply proviso, furnishes it electronically. Withholding the report outright, with no substitute access offered at all, satisfies neither the inspection alternative nor the electronic-supply alternative, and does not comply with section 231.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

V.K. Sasikala v. State represented by the Superintendent of Police, (2012) 9 SCC 771. The Court held that an accused's right to inspect and obtain copies of documents in the custody of the prosecution — going to a fair trial under Article 21 — is not confined to material the prosecution formally relies on, and that this right of access does not evaporate once the trial is underway. **Practitioner takeaway**: sections 230 and 231's document-furnishing obligations are the statutory floor, not the ceiling, of an accused's disclosure rights — a fair-trial argument for access to material outside either section's listed categories remains independently available.

#### Sword and shield

As a **shield**, sections 230 and 231 give the accused a hard, checkable entitlement to specified prosecution papers on a defined timeline, free of cost. As a **sword**, the defence can challenge a Magistrate's failure to meet the fourteen-day clock in a police-report case, or the "forthwith" standard in a Sessions-triable complaint case, and can press for inspection or electronic supply where a voluminous-document withholding offers no substitute access at all — while the prosecution's countervailing point, under the exclusion proviso to section 230, is that some material can legitimately be withheld where the police officer's stated reasons for exclusion under section 193(7) persuade the Magistrate.

#### The limitation clock

Section 230's fourteen-day outer limit for disclosure in a police-report case is the operative clock in this cluster; section 231 carries no equivalent fixed number, using "forthwith" instead.

#### Interlocking matrix

Section 230 interlocks directly with section 173 (Chapter XIII, FIR), section 180(3) and section 183 (Chapter XIII, statements and confessions during investigation), and section 193(6)–(7) (Chapter XIII, forwarding documents with the police report and the exclusion-request mechanism) — all already built. Section 231 interlocks directly with sections 223 and 225 (Chapter XVI, already built) for the statements it requires be furnished.

#### The authorities

⚠️ *None further promoted beyond the winning ratio; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. In a police-report case, calendar the fourteen-day clock from the date of the accused's production or appearance, and object promptly if disclosure runs past it.
2. In a complaint case found exclusively Sessions-triable, confirm the section 223/225 statements, confessions, and relied-upon documents were furnished forthwith, not merely "eventually."
3. Where any material was withheld as voluminous, confirm the Magistrate actually directed inspection or electronic supply as a substitute — a bare withholding with no alternative access satisfies neither section.
4. Where a witness statement was partly excluded under section 193(7) at the investigation stage, press for the Magistrate's own review of the police officer's reasons under section 230's first proviso before accepting the exclusion as final.

---
