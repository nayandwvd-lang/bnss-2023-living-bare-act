# Chapter XXIII — Plea Bargaining

## Section 289 — Who can even ask: the eligibility gate into plea bargaining

### The dispute this solves

::: oneminute Plea bargaining is a negotiated, mutually-satisfactory disposition of a criminal case — but before any negotiation can begin, section 289 decides who is even allowed to ask for one. Two origin gateways are open: a case where the police have forwarded a section 193 report alleging an offence, or a case where a Magistrate has taken cognizance on complaint, examined the complainant and witnesses under section 223, and issued process under section 227. Either way, the offence must not carry death, life imprisonment, or imprisonment exceeding seven years — this Chapter is confined to comparatively less serious offences. And even within that severity band, two categorical exclusions apply regardless of how minor the offence looks on paper: an offence affecting the socio-economic condition of the country (a category the Central Government itself defines by notification under section 289(2)) and any offence committed against a woman or a child. Both exclusions are absolute — they are not weighed against the offence's punishment band, they simply take the case outside this Chapter altogether.
:::

::: story A cheating case, a seven-year ceiling, and a notification that decides the outcome before negotiation even starts
An accused is proceeded against on a police report alleging an offence punishable with up to five years' imprisonment — comfortably under section 289(1)'s seven-year ceiling, and originating through the section 193 police-report gateway. Before advising a plea-bargaining application, counsel checks whether the offence has been notified by the Central Government as one affecting the socio-economic condition of the country under section 289(2). If it has, the case is excluded from this Chapter no matter how far under the seven-year ceiling it falls — the notification, not the punishment band, is what ultimately decides whether the door is open.
:::

> **289. (1)** This Chapter [[!shall]] apply in respect of an accused against whom—
> (a) the report has been forwarded by the officer in charge of the police station under section 193 alleging therein that an offence appears to have been committed by him other than an offence for which the punishment of death or of imprisonment for life or of imprisonment for a term exceeding seven years has been provided under the law for the time being in force; or
> (b) a Magistrate has taken cognizance of an offence on complaint, other than an offence for which the punishment of death or of imprisonment for life or of imprisonment for a term exceeding seven years, has been provided under the law for the time being in force, and after examining complainant and witnesses under section 223, issued the process under section 227,
>
> but does not apply where such offence affects the socio-economic condition of the country or has been committed against a woman, or a child.
>
> **(2)** For the purposes of sub-section (1), the Central Government [[!shall]], by notification, determine the offences under the law for the time being in force which shall be the offences affecting the socio-economic condition of the country.

::: proviso Section 289(1) has exactly two origin gateways, both already built elsewhere in this guide
Clause (a) is the police-report track, keyed to section 193 (Chapter XIII, already built). Clause (b) is the complaint track, keyed to sections 223 and 227 (Chapters XVI and XVII, already built) — examination of the complainant and witnesses followed by issue of process. A case that has not travelled through either gateway is not eligible for this Chapter, whatever its offence and punishment band.
:::

::: proviso The socio-economic-offence and offence-against-a-woman-or-child exclusions are categorical, not a balancing test
Section 289(1)'s closing words — "but does not apply where such offence affects the socio-economic condition of the country or has been committed against a woman, or a child" — are not weighed against the seven-year severity ceiling or against anything else. Either exclusion, once it applies, removes the case from this Chapter entirely, regardless of how comparatively minor the offence's punishment otherwise is.
:::

### How this actually runs

<MicroTree
  input="Is this accused's case eligible for plea bargaining under section 289?"
  :gates="[
    { q: 'Did the case originate either from a police report under section 193, or from a Magistrate\'s cognizance on complaint followed by examination under section 223 and process under section 227?',
      note: 'These are section 289(1)\'s only two origin gateways',
      no: 'The case has not originated through either gateway, and this Chapter does not apply' },
    { q: 'Is the offence punishable with something less than death, imprisonment for life, or imprisonment exceeding seven years?',
      note: 'This ceiling applies regardless of which origin gateway the case travelled through',
      no: 'The offence exceeds section 289(1)\'s severity ceiling, and this Chapter does not apply' },
    { q: 'Does the offence avoid being one notified as affecting the socio-economic condition of the country, and avoid being an offence committed against a woman or a child?',
      note: 'Both exclusions are categorical, not weighed against the severity band',
      no: 'The offence falls within one of section 289(1)\'s categorical exclusions, and this Chapter does not apply even though the origin gateway and severity band are otherwise satisfied' }
  ]"
  result="The accused is eligible to file an application for plea bargaining under section 290"
  resultKind="discretionary"
  caveat="Eligibility under section 289 only opens the door — it does not itself trigger plea bargaining. The accused must still choose to file an application, and the process can revert to ordinary trial at several later checkpoints even after an eligible application is filed." />

### In plain English

Section 289 is a gate, not a guarantee. Three conditions have to line up before an accused can even ask for plea bargaining: the case has to have started the right way (police report or complaint-with-process), the offence can't be among the most serious ones the law punishes, and the offence can't fall into either of two categories the legislature has decided are unsuitable for negotiated disposition regardless of severity — offences the Central Government notifies as touching the country's socio-economic fabric, and any offence against a woman or a child. Get past all three, and the accused has standing to apply under section 290 — nothing more, yet.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: this Chapter as a whole appears to track CrPC Chapter XXIA (Plea Bargaining), which used a lettered sub-numbering scheme — sections 265A through 265L — rather than sequential section numbers. On that basis, BNSS section 289 appears to correspond to CrPC section 265A (application of the Chapter). The marginal heading recorded against section 289 in the bare Act text itself — "Application of Chapter" — matches CrPC 265A's heading exactly, which gives this specific mapping higher confidence than the numeric-shift concordance used for the surrounding trial chapters. No departure is flagged for this cluster; the eligibility gate reads as structurally continuous with its CrPC predecessor.*

### Test your instinct

:::: instinct An accused, proceeded against by police report for an offence punishable with up to four years' imprisonment, applies for plea bargaining. The offence has not been notified by the Central Government as affecting the socio-economic condition of the country, but it was committed against a child.
::: ruling The offence-against-a-child exclusion applies regardless of the socio-economic notification
Section 289(1)'s closing exclusion covers offences against a woman or a child independently of the socio-economic-offence category — the absence of a Central Government notification for the latter does not rescue an application that falls foul of the former. This accused's case is outside this Chapter.
:::
::::

:::: instinct A complainant-initiated case has reached the stage where the Magistrate has examined the complainant under section 223 but has not yet issued process under section 227, and the accused wishes to apply for plea bargaining at this point.
::: ruling Section 289(1)(b) is not yet satisfied
Clause (b) requires both the section 223 examination *and* the issue of process under section 227. Until process has actually issued, the complaint-track origin gateway is incomplete, and the case is not yet eligible for this Chapter on that route.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield** for an accused who wants a negotiated disposition, section 289 is the first checkpoint to clear before investing time in an application — confirming eligibility early avoids a wasted filing. As a **sword**, the prosecution or complainant can resist a plea-bargaining application at the threshold by establishing that the offence exceeds the seven-year ceiling, or falls within the socio-economic-offence notification, or was committed against a woman or a child — any one of these defeats the application without reaching the merits of any proposed disposition.

#### The limitation clock

Section 289 itself fixes no filing deadline; the thirty-day application window is fixed separately by section 290, built in the next cluster.

#### Interlocking matrix

Section 289(1)(a) interlocks with section 193 (Chapter XIII, already built). Section 289(1)(b) interlocks with sections 223 and 227 (Chapters XVI and XVII, already built). Section 289(2)'s socio-economic-offence notification power sits with the Central Government and is not independently verifiable from within this repository.

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Confirm which of section 289(1)'s two origin gateways the case actually travelled through before advising a plea-bargaining application — an incomplete complaint-track case (examination without process, or vice versa) is not yet eligible.
2. Check the offence's punishment band against the seven-year ceiling precisely; an offence at or above the ceiling is excluded regardless of the accused's own view of its comparative seriousness.
3. Check for a Central Government notification bringing the offence within the socio-economic-offence category before advising an application — this notification is not something visible on the face of the offence's own definition.
4. Treat an offence against a woman or a child as an absolute bar under this Chapter; do not advise a plea-bargaining application in such a case regardless of the severity band.

---

## Sections 290–292 — Filing the application, testing voluntariness in camera, and the meeting that either produces a deal or sends the case back

### The dispute this solves

::: oneminute Getting past section 289's eligibility gate is only the start. Section 290 governs the application itself: it must be filed within thirty days of the framing of charge, must briefly describe the case, and must be accompanied by an affidavit in which the accused swears two things — that he has voluntarily chosen plea bargaining after understanding the punishment the law provides, and that he has not previously been convicted by a Court on the same offence. The Court then examines the accused in camera, with the other party (the Public Prosecutor or the complainant) excluded from that specific examination, to test whether the application really is voluntary. Satisfied, the Court opens a sixty-day window to work out a disposition, which may include the accused paying the victim compensation and expenses. Not satisfied — involuntary, or a prior same-offence conviction comes to light — the case simply resumes under the ordinary provisions of the Sanhita from the point the application was filed, as though the detour never happened. Section 291 then governs how the negotiation meeting itself runs, splitting into two tracks depending on the case's origin: a police-report case brings in the Public Prosecutor, the investigating officer, the accused and the victim; a complaint case brings in only the accused and the victim. Both tracks carry the same twin safeguards — an explicit judicial duty to keep the whole process voluntary, and an explicit right for the parties to bring their advocates. Section 292 closes the loop: a disposition actually worked out becomes a signed report; no disposition, and the case reverts to ordinary procedure exactly as section 290(4)(b) already provides for an involuntary application.
:::

::: story A sixty-day window, a victim's compensation, and a negotiation that fails without prejudice to anyone
An accused, charged with an offence within section 289's eligible band, files a plea-bargaining application on day twenty-five after the charge was framed — inside the thirty-day window. At the in-camera examination, with the Public Prosecutor excluded from the room, the Court satisfies itself the application is genuinely voluntary and opens a sixty-day negotiation window. A meeting is convened under section 291(a), since the case was instituted on a police report — the Public Prosecutor, the investigating officer, the accused, and the victim all participate, with the accused's advocate present at his request. The parties cannot agree on compensation terms within the window. The Court records that no disposition was reached and the case resumes under the ordinary trial procedure from precisely the stage the application was filed — the failed negotiation leaves no formal trace on the trial that follows.
:::

> **290. (1)** A person accused of an offence [[?may]] file an application for plea bargaining within a period of thirty days from the date of framing of charge in the Court in which such offence is pending for trial.
>
> **(2)** The application under sub-section (1) [[!shall]] contain a brief description of the case relating to which the application is filed including the offence to which the case relates and [[!shall]] be accompanied by an affidavit sworn by the accused stating therein that he has voluntarily preferred, after understanding the nature and extent of punishment provided under the law for the offence, the plea bargaining in his case and that he has not previously been convicted by a Court in which he had been charged with the same offence.
>
> **(3)** After receiving the application under sub-section (1), the Court [[!shall]] issue notice to the Public Prosecutor or the complainant of the case and to the accused to appear on the date fixed for the case.
>
> **(4)** When the Public Prosecutor or the complainant of the case and the accused appear on the date fixed under sub-section (3), the Court [[!shall]] examine the accused in camera, where the other party in the case shall not be present, to satisfy itself that the accused has filed the application voluntarily and where—
> (a) the Court is satisfied that the application has been filed by the accused voluntarily, it [[!shall]] provide time, not exceeding sixty days, to the Public Prosecutor or the complainant of the case and the accused to work out a mutually satisfactory disposition of the case which may include giving to the victim by the accused the compensation and other expenses during the case and thereafter fix the date for further hearing of the case;
> (b) the Court finds that the application has been filed involuntarily by the accused or he has previously been convicted by a Court in a case in which he had been charged with the same offence, it [[!shall]] proceed further in accordance with the provisions of this Sanhita from the stage such application has been filed under sub-section (1).
>
> **291.** In working out a mutually satisfactory disposition under clause (a) of sub-section (4) of section 290, the Court [[!shall]] follow the following procedure, namely:—
> (a) in a case instituted on a police report, the Court [[!shall]] issue notice to the Public Prosecutor, the police officer who has investigated the case, the accused and the victim of the case to participate in the meeting to work out a satisfactory disposition of the case:
> Provided that throughout such process of working out a satisfactory disposition of the case, it shall be the duty of the Court to ensure that the entire process is completed voluntarily by the parties participating in the meeting:
> Provided further that the accused, if he so desires, [[?may]] participate in such meeting with his advocate, if any, engaged in the case;
> (b) in a case instituted otherwise than on police report, the Court [[!shall]] issue notice to the accused and the victim of the case to participate in a meeting to work out a satisfactory disposition of the case:
> Provided that it shall be the duty of the Court to ensure, throughout such process of working out a satisfactory disposition of the case, that it is completed voluntarily by the parties participating in the meeting:
> Provided further that if the victim of the case or the accused so desires, he [[?may]] participate in such meeting with his advocate engaged in the case.
>
> **292.** Where in a meeting under section 291, a satisfactory disposition of the case has been worked out, the Court [[!shall]] prepare a report of such disposition which shall be signed by the presiding officer of the Court and all other persons who participated in the meeting and if no such disposition has been worked out, the Court [[!shall]] record such observation and proceed further in accordance with the provisions of this Sanhita from the stage the application under sub-section (1) of section 290 has been filed in such case.

::: proviso "Proceed further ... from the stage such application has been filed" is the recurring safety phrase across this Chapter — a failed plea-bargaining attempt leaves no formal trace
Both section 290(4)(b) and section 292 revert the case to ordinary Sanhita procedure using identical language, picking the case back up at the point the application was filed. Nothing said or done during a failed voluntariness examination or a failed negotiation meeting is itself carried into the ordinary trial as a formal matter — the closest thing to an exception is section 299's separate confidentiality rule, built in the final cluster of this chapter, which specifically bars using the accused's application statements for any purpose outside this Chapter.
:::

::: proviso Section 291's two negotiation tracks differ only in who is invited, not in the voluntariness safeguard or the advocate right
A police-report case adds the investigating officer to the meeting — a participant with no counterpart on the complaint track, since there is no police investigation to represent there. Everything else is structurally identical across both tracks: an explicit judicial duty to keep the process voluntary throughout, and an explicit right for the accused (and, on the complaint track, the victim as well) to bring an advocate.
:::

### How this actually runs

<MicroTree
  input="An accused has filed a plea-bargaining application under section 290(1) — what happens next?"
  :gates="[
    { q: 'Was the application filed within thirty days of the framing of charge, briefly describing the case, and accompanied by the required affidavit (voluntary preference, no prior conviction for the same offence)?',
      note: 'Both the time limit and the affidavit\'s two sworn representations are conditions on a validly filed application',
      no: 'The application does not satisfy section 290(1)-(2), and the case proceeds without this Chapter\'s involvement' },
    { q: 'On in-camera examination under section 290(4), with the other party excluded, is the Court satisfied the application was filed voluntarily and that the accused has no prior conviction for the same offence?',
      note: 'The other party\'s exclusion from this specific examination is deliberate',
      no: 'The Court proceeds further under the ordinary provisions of this Sanhita from the stage the application was filed, under section 290(4)(b)' },
    { q: 'In the meeting convened under section 291, has a mutually satisfactory disposition actually been worked out?',
      note: 'The meeting\'s participants and safeguards differ by track (police-report versus complaint) but the voluntariness duty is identical on both',
      no: 'The Court records that no disposition was reached and proceeds further under the ordinary provisions of this Sanhita from the stage the application was filed, under section 292' }
  ]"
  result="The Court prepares a signed report of the mutually satisfactory disposition under section 292, and the case moves to disposal under section 293"
  resultKind="mandatory"
  caveat="At either the voluntariness-examination stage or the negotiation-meeting stage, the case can revert to ordinary trial procedure exactly as if the plea-bargaining application had never been filed — the attempt itself does not prejudice the accused going forward." />

### In plain English

Three checkpoints stand between a filed application and an actual deal. First, is the application itself in order — filed in time, with a genuine affidavit? Second, does the Court believe, from a private conversation with the accused alone, that this really is his voluntary choice? Third, once negotiation is allowed to happen, do the parties in the room actually reach an agreement? A "no" at either of the last two checkpoints doesn't punish the accused — it just puts the case back exactly where it was before the application, and the ordinary trial carries on as if plea bargaining had never been raised.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 290 appears to track CrPC section 265B (application for plea bargaining), BNSS section 291 appears to track CrPC section 265C (guidelines for mutually satisfactory disposition of the case), and BNSS section 292 appears to track CrPC section 265D (report of the mutually satisfactory disposition to be submitted before the Court) — again cross-checked against the marginal headings recorded in the bare Act text itself, which match these CrPC titles closely. No departure is flagged for this cluster; the application, in-camera examination, and negotiation-meeting mechanism all read as structurally continuous with their CrPC predecessors.*

### Test your instinct

:::: instinct An accused files a plea-bargaining application on the thirty-fifth day after the charge was framed.
::: ruling Out of time under section 290(1)
The thirty-day window runs from the date of framing of charge, and has expired. The application is not validly filed regardless of the strength of its contents or the accused's genuine willingness to negotiate.
:::
::::

:::: instinct At the in-camera examination under section 290(4), the Public Prosecutor insists on being present in the room to confirm the accused is not being pressured by defence counsel into filing the application.
::: ruling The examination excludes the other party by design
Section 290(4) requires the examination to occur "where the other party in the case shall not be present." The safeguard against coercion built into this stage is the Court's own private assessment of the accused, not oversight by the opposing side — the Public Prosecutor's presence, however well-intentioned, is not permitted here.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield**, the accused benefits twice over in this cluster: the in-camera examination excludes the prosecution or complainant, protecting against pressure to accept an unfavourable outcome merely to be seen negotiating, and a failed negotiation carries no formal penalty — the case simply resumes where it stood. As a **sword**, the prosecution or complainant should treat the negotiation meeting itself, not the earlier voluntariness examination (from which they are excluded), as the point to secure concrete victim-compensation terms, since a successful disposition report under section 292 feeds directly into the sentencing calculus built in the next cluster's section 293.

#### The limitation clock

Section 290(1)'s thirty-day window, running from the date of framing of charge, is the defining limitation entry for this Chapter — miss it, and the application is not validly filed at all.

#### Interlocking matrix

Section 290(1)'s thirty-day clock runs from the framing of charge, tying back to the charge-framing provisions already built across Chapters XVIII–XXI. Section 291(a)'s police-report track interlocks with the investigation framework of Chapter XIII (already built). A successful section 292 report feeds forward into section 293's disposal mechanics (next cluster); a reversion under either section 290(4)(b) or section 292 sends the case back into whichever ordinary trial track already built in this guide fits its classification.

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Calendar the thirty-day window from the exact charge-framing date before advising a plea-bargaining application — late filing is fatal regardless of the merits.
2. Draft the accused's affidavit carefully on both sworn representations — voluntariness and the absence of a prior same-offence conviction — since either proving false at the in-camera stage sends the case straight back to ordinary procedure.
3. Prepare the client specifically for the in-camera examination's exclusionary format, since it is his account alone, without the other party present, that the Court will be testing.
4. In a police-report negotiation meeting, factor in the investigating officer's presence — a participant with no counterpart on the complaint track — since his input can shape the disposition terms differently than a purely complaint-driven negotiation.

---
