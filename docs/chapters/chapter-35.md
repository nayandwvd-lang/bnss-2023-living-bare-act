# Chapter XXXV — Provisions as to Bail and Bonds

## Section 478 — Bail as of right in bailable offences

### The dispute this solves

::: oneminute Bail in a bailable offence is not a favour the officer or the Court grants — it is a right the statute takes away their discretion to refuse.
Not every arrest is the same kind of fight. The Sanhita itself sorts every offence in advance, in its First Schedule, into "bailable" and "non-bailable" — and for the bailable half, the entire question of *whether* to release the person is already answered by Parliament, not left to the officer or the Court on the facts of the day. Section 478 is the machinery that makes that classification actually operate: once an offence is bailable, a person who is prepared to furnish bail **shall** be released — not "may," not "at the officer's discretion," but a mandatory outcome the statute does not allow the officer or Court to second-guess. The only real fight left is what happens to a person too poor to arrange a surety, and what happens the second time around if he broke his word the first.
:::

::: story Manoj can't find a surety
Manoj is arrested on a cheque-bounce complaint — a bailable offence. He has no money for a lawyer, no local relatives to stand surety, and has been in the lock-up for five days. Under the old CrPC muscle memory, many officers and even some courts would tell him to "arrange a surety and come back," effectively converting a right into a favour conditioned on connections. Section 478(1)'s first proviso exists precisely for Manoj: if he cannot furnish surety, the officer or Court **shall** discharge him on his own bond instead — no cash, no sureties, no intermediary. The Explanation goes further and does his arguing for him: a week's failure to arrange bail bond is, by itself, sufficient ground to presume he is indigent, so Manoj does not have to prove poverty from scratch.
:::

> **478. (1)** When any person other than a person accused of a non-bailable offence is arrested or detained without warrant by an officer in charge of a police station, or appears or is brought before a Court, and is prepared at any time while in the custody of such officer or at any stage of the proceeding before such Court to give bail, such person [[!shall]] be released on bail:
>
> Provided that such officer or Court, if he or it thinks fit, [[?may]], and [[!shall]], if such person is indigent and is unable to furnish surety, instead of taking bail bond from such person, discharge him on his executing a bond for his appearance as hereinafter provided.
>
> Explanation.—Where a person is unable to give bail bond within a week of the date of his arrest, it shall be a sufficient ground for the officer or the Court to presume that he is an [[=indigent person]] for the purposes of this proviso:
>
> Provided further that nothing in this section shall be deemed to affect the provisions of sub-section (3) of section 135 or section 492.
>
> **(2)** Notwithstanding anything in sub-section (1), where a person has failed to comply with the conditions of the bond or bail bond as regards the time and place of attendance, the Court [[?may]] refuse to release him on bail, when on a subsequent occasion in the same case he appears before the Court or is brought in custody, and any such refusal shall be without prejudice to the powers of the Court to call upon any person bound by such bond or bail bond to pay the penalty thereof under section 491.

::: proviso The one-week silence is not neutral — it is deemed poverty
Section 478(1)'s Explanation does not merely permit an officer or Court to *consider* indigence after a week of failed attempts to arrange bail — it makes a week of failure **sufficient ground to presume** indigence. The burden effectively shifts: past that week, the person does not have to affirmatively prove he is poor before the plain-bond alternative becomes available; the officer or Court has to have a reason to disbelieve it.
:::

### How this actually runs

<MicroTree
  input="A person, arrested or before the Court on a bailable offence, is prepared to give bail"
  :gates="[
    { q: 'Is this the same person’s first application in this case, with no earlier breach of a bond’s attendance conditions?',
      note: 'Section 478(2) is the one exception to the “shall” — a track record of non-appearance opens the door to refusal on a later occasion',
      no: 'The Court may refuse bail on this occasion, without prejudice to still proceeding under section 491 against anyone bound by the earlier bond' },
    { q: 'Can the person furnish a surety?',
      note: 'A week of inability to arrange one is, by the Explanation, sufficient ground to presume indigence',
      no: 'The officer or Court must discharge the person on his own bond instead of a bail bond with sureties — this branch is mandatory, not discretionary' }
  ]"
  result="The person is released on bail (or, if indigent, on his own bond) as a matter of statutory right"
  resultKind="mandatory"
  caveat="Section 478 governs bailable offences only — it does not touch the separate, discretionary regime for non-bailable offences under section 480" />

### In plain English

Bailable offences are pre-decided: the statute has already made the call that this category of accused person does not need to be kept in custody pending trial, so the officer or Court's job under section 478 is administrative, not adjudicative — confirm the offence is bailable, take the bail (or the plain bond if the person is indigent), and release. The one carve-out is a person who has already broken a bond's attendance terms once in the same case: the Court may, on the *next* occasion, refuse — but that refusal is itself narrow, tied to that specific history, and does not touch the separate power under section 491 to go after the penalty on the earlier bond.

### What changed from the CrPC

> **CrPC 1973, s. 436 → BNSS 2023, s. 478.** Renumbered with drafting refinements; substantively continuous. The indigent-accused proviso and the presumption-of-indigence Explanation both existed in CrPC s. 436 (inserted by the Code of Criminal Procedure (Amendment) Act, 2005) and carry forward into s. 478 largely unchanged. Section 478(2)'s bar on release after a bond breach on a subsequent occasion in the same case mirrors CrPC s. 436(2). ⚠️ *Confirm the precise CrPC 1973 s. 436(2) text against a verified source before treating the two as word-for-word identical — the concordance page should record the comparison once built.*

### Test your instinct

:::: instinct The officer tells Manoj to "arrange a surety and come back"
Manoj is arrested on a bailable cheque-bounce complaint. He has no surety and has been in custody five days. The station officer tells him bail will only be granted once he produces a surety, and refuses to consider his own bond.
::: ruling What actually happens
This is a straightforward section 478(1) violation on two independent grounds. First, bail in a bailable offence is not discretionary at all — the officer has no power to withhold it once Manoj is prepared to give bail. Second, once five days have passed without a surety, the Explanation's one-week threshold is close enough that the officer should already be turning his mind to the indigence presumption rather than insisting on a surety as the only route out. The correct course was to discharge Manoj on his own bond once it became clear a surety was not forthcoming.
:::
::::

:::: instinct A second bail application after a missed hearing
A person was released on bail in a bailable-offence case, missed a hearing without informing the Court, and is now brought back into custody. He immediately applies for bail again in the same case.
::: ruling What actually happens
Section 478(2) is precisely this situation, and it is the one place the "shall" of section 478(1) does not control. The Court may refuse to release him on this subsequent occasion because of the earlier non-compliance — this is a discretionary power, not an automatic bar, so the Court will still look at why the hearing was missed. Separately, and without prejudice to whatever the Court decides on the fresh bail application, the earlier surety or bond remains exposed to forfeiture proceedings under section 491.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Section 478 restates and continues a long-settled statutory rule — bail as of right in bailable offences, including the 2005-vintage indigent-accused proviso — and the drafter is not confident enough of a specific Supreme Court citation squarely on this exact BNSS-era provision to promote one; the project's anti-fabrication discipline counsels against forcing a citation in.

#### Sword and shield

As a **sword**, an accused person in a bailable-offence case can insist on release the moment he is prepared to furnish bail — there is no "convince the officer" step, and an unreasoned refusal is itself actionable. As a **shield** for an indigent accused specifically, section 478(1)'s Explanation supplies a ready-made argument: a week's inability to arrange a surety is not a failure that keeps him in custody, it is the trigger for release on his own bond.

#### The limitation clock

No independent limitation period attaches to section 478 itself; the right to be released on bail in a bailable offence exists the moment the person is in custody and prepared to furnish bail, and any refusal should be challenged immediately rather than allowed to sit.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person in a bailable-offence case, first application, ready to furnish bail | Section 478(1) | Mandatory release on bail |
| Same person, cannot furnish surety, a week has passed | Section 478(1), Explanation | Presumed indigent — mandatory release on his own bond |
| Same person, prior breach of a bond's attendance conditions in this case | Section 478(2) | Court may refuse on this occasion; section 491 forfeiture proceedings remain separately available |
| Non-bailable offence | Not section 478 | Governed instead by the discretionary regime under section 480 |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not plead section 478 bail as though it required the Court's discretionary satisfaction on the facts — the argument is entitlement, not persuasion, once the offence is confirmed bailable.
2. Do not let an indigence argument wait for a formal affidavit of means if a week has already passed without a surety — invoke the Explanation's presumption directly and put the burden back on the officer or Court to displace it.
3. Do not conflate a section 478(2) refusal with a permanent bar — it is confined to "on a subsequent occasion," and the Court's exercise of that discretion should still be reasoned.

**Timing.** Raise the indigence presumption the moment the one-week mark is reached, not later — waiting to affirmatively prove poverty concedes a burden the Explanation was written to remove.

**Model checklist for reviewing this cluster's provisions:**

1. Confirm the offence is classified bailable under the First Schedule before invoking section 478 rather than section 480.
2. Where a surety has not been arranged, check the date of arrest against the one-week Explanation threshold.
3. Where bail is refused, confirm whether the refusal is being made under section 478(2)'s narrow subsequent-occasion exception — if not, the refusal has no basis in the section at all.

---

## Section 479 — The undertrial detention ceiling

### The dispute this solves

::: oneminute An undertrial can now spend more of a sentence in custody, awaiting trial, than he would have served if convicted — and section 479 is the statute's answer to that arithmetic.
Trials in India routinely take years. For an undertrial prisoner too poor to make bail, or charged with an offence where bail is discretionary and being refused, custody pending trial can — and regularly did, under the CrPC — run longer than the sentence he would eventually have received if convicted and sentenced to the maximum term. The CrPC tried to fix this once, in 2005, by inserting section 436A: detention past half the maximum sentence triggered mandatory release. Section 479 keeps that half-sentence rule and adds two sharper edges to it — a faster one-third threshold for a person who has never been convicted of anything before, and an explicit statutory duty on the jail superintendent to flag the case rather than wait for the prisoner's lawyer to notice. It also adds a trap the CrPC version did not carry in the same terms: the whole mechanism switches off if the person has more than one case or offence pending against him.
:::

::: story Farhan crosses the halfway mark
Farhan has been an undertrial for three years on a charge carrying a maximum of six years' imprisonment — he has now crossed the three-year, one-half mark. He has no prior convictions. Under section 479(1)'s first proviso, because he is a first-time offender, he did not even need to wait for the halfway point — he became eligible for release on bond once he had served one-third of the maximum, two years in. Under section 479(3), it was not supposed to be Farhan's overworked legal-aid lawyer who had to notice and file first: the Superintendent of the jail where Farhan is held has an independent, freestanding statutory duty to apply to the Court on his behalf the moment the one-third mark is reached. The catch: if Farhan has a second, unrelated case pending against him elsewhere, section 479(2) switches the whole entitlement off — he does not get released under this section at all until that is resolved.
:::

> **479. (1)** Where a person has, during the period of investigation, inquiry or trial under this Sanhita of an offence under any law (not being an offence for which the punishment of death or life imprisonment has been specified as one of the punishments under that law) undergone detention for a period extending up to one-half of the maximum period of imprisonment specified for that offence under that law, he [[!shall]] be released by the Court on bail:
>
> Provided that where such person is a first-time offender (who has never been convicted of any offence in the past) he [[!shall]] be released on bond by the Court, if he has undergone detention for the period extending up to one-third of the maximum period of imprisonment specified for such offence under that law:
>
> Provided further that the Court [[?may]], after hearing the Public Prosecutor and for reasons to be recorded by it in writing, order the continued detention of such person for a period longer than one-half of the said period or release him on bail bond instead of his bond:
>
> Provided also that no such person shall in any case be detained during the period of investigation, inquiry or trial for more than the maximum period of imprisonment provided for the said offence under that law.
>
> Explanation.—In computing the period of detention under this section for granting bail, the period of detention passed due to delay in proceeding caused by the accused shall be excluded.
>
> **(2)** Notwithstanding anything in sub-section (1), and subject to the third proviso thereof, where an investigation, inquiry or trial in more than one offence or in multiple cases are pending against a person, he shall [[!not]] be released on bail by the Court.
>
> **(3)** The Superintendent of jail, where the accused person is detained, on completion of one-half or one-third of the period mentioned in sub-section (1), as the case may be, [[!shall]] forthwith make an application in writing to the Court to proceed under sub-section (1) for the release of such person on bail.

::: proviso The one-third and one-half thresholds are floors, not choices — but the absolute ceiling never moves
Section 479(1)'s second proviso lets a Court push detention *past* the one-half point on recorded reasons after hearing the Public Prosecutor — but the third proviso is a hard stop that no recorded reason can override: nobody is detained, under this section, for longer than the maximum sentence the offence itself carries. The discretion to extend operates only inside that outer boundary.
:::

### How this actually runs

<MicroTree
  input="An undertrial prisoner has spent time in custody during investigation, inquiry, or trial"
  :gates="[
    { q: 'Is the offence one where death or life imprisonment is a specified punishment?',
      note: 'Section 479(1) is carved out entirely for offences at that upper end — they never get the halfway or one-third release',
      no: 'Section 479 does not apply to this offence at all; detention questions here are governed by the ordinary discretionary bail provisions instead' },
    { q: 'Does the person have more than one offence or more than one case pending against him?',
      note: 'Section 479(2) is a blanket switch-off, not a factor to be weighed against the person’s favour',
      no: 'Move to the next gate — the multiple-case bar does not apply' },
    { q: 'Has he undergone detention up to one-half the maximum sentence (or one-third, if he is a genuine first-time offender)?',
      note: 'The jail Superintendent has an independent section 479(3) duty to apply for release once this threshold is reached — this is not solely the defence counsel’s job',
      no: 'Not yet eligible under this section — but the third proviso’s absolute cap still applies regardless' }
  ]"
  result="The person must be released on bail (or, if a first-time offender at the one-third mark, on bond) — subject only to the Court’s recorded-reasons power to extend past one-half, and never past the offence’s own maximum sentence"
  resultKind="mandatory"
  caveat="This is a release entitlement tied to time served, not an acquittal or a finding on the merits — the underlying prosecution continues" />

### In plain English

Section 479 does the arithmetic the CrPC's section 436A used to do, but sharper: instead of one flat halfway rule for everyone, a person who has never been convicted before gets there faster, at one-third. The section does not wait passively for the defence to notice the clock has run out — it puts the duty to notice and apply on the jail Superintendent, in writing, the moment either threshold is crossed. The trade-off for that generosity is sub-section (2)'s multiple-case bar: a person facing more than one pending case does not get this fast lane at all, no matter how long he has already spent inside on any one of them, until that plurality is resolved. And no matter how the Court's discretion under the second proviso is exercised, nobody is ever detained under this section beyond the outer limit of the sentence the offence itself carries.

### What changed from the CrPC

> **CrPC 1973, s. 436A → BNSS 2023, s. 479.** Substantially continuous on the core one-half detention rule, but with real additions. The **first-time-offender one-third threshold** in the first proviso has no counterpart in CrPC s. 436A as originally enacted — this is new, and it is the single biggest practical change in this section for a first offender facing a long trial. The **section 479(2) multiple-case bar** is likewise a sharper, more explicit switch-off than anything in the older provision's plain text. The jail Superintendent's duty to move the application in sub-section (3) tracks a safeguard that CrPC s. 436A also carried by the time of its later amendments, so this piece is continuity rather than novelty. ⚠️ *Confirm the precise pre-BNSS text and amendment history of CrPC s. 436A — including whether the first-time-offender one-third threshold and the multiple-case bar existed there in any form — against a verified source before finalising the concordance page; do not rely on this note alone.*

### Test your instinct

:::: instinct A first-time offender told to wait for the halfway mark
Deepak has been in custody for two years on a charge carrying a six-year maximum — exactly one-third of the maximum, not yet one-half. He has no prior convictions. The jail administration tells him he is not yet eligible for release because he has not reached the halfway point, and his own lawyer has not yet filed anything.
::: ruling What actually happens
This is a clear section 479(3) failure layered on a section 479(1) first-proviso entitlement. Deepak, as a genuine first-time offender, became eligible for release on bond the moment he crossed one-third of the maximum sentence — he did not need to wait for the halfway mark at all, and that is precisely the distinction the first proviso exists to draw. Separately, and independently of whether his own lawyer had filed anything, the Superintendent of the jail holding him had an independent statutory duty under sub-section (3) to make a written application to the Court the moment that one-third threshold was reached — the section does not make this contingent on the defence noticing first.
:::
::::

:::: instinct The undertrial with a second, unrelated case pending
Priya has crossed the one-half detention mark in Case A, a theft charge. She would ordinarily be released under section 479(1). It emerges that she also has a separate, unrelated cheating case, Case B, pending against her in a different court. The prosecution opposes release, citing Case B.
::: ruling What actually happens
Section 479(2) resolves this against Priya, and it does so as a blanket rule rather than a factor the Court weighs against her favour: "where an investigation, inquiry or trial in more than one offence or in multiple cases are pending against a person, he shall not be released on bail" under this section. It does not matter that Case B is factually unrelated to Case A, or that she has otherwise met every condition of sub-section (1) on Case A alone — the mere pendency of a second case switches the entitlement off, subject only to the third proviso's absolute ceiling on total detention. Her remedy, if any, lies in the ordinary discretionary bail provisions or in resolving Case B, not in section 479 itself.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

**Bhim Singh v. Union of India** — a Supreme Court decision on the implementation of CrPC s. 436A, directing that undertrial prisoners who had completed the statutory detention period be identified and produced before the appropriate court for release, and that jail Superintendents and courts bear an active, non-defence-dependent responsibility for making this happen rather than leaving it to the prisoner to assert the right himself. **Practitioner takeaway:** the duty to invoke section 479 is not solely the defence's — a jail Superintendent's failure to move the sub-section (3) application is itself a default that can be pointed to in a release application, independent of any lapse by defence counsel. ⚠️ *Verify before citing — confirm the exact reported citation (SCC volume and page) and bench strength against a verified source before using this in a filing; the proposition and case name are recalled with reasonable confidence, the precise citation is not.*

#### Sword and shield

As a **sword**, a first-time-offender undertrial can invoke the one-third threshold affirmatively and does not have to wait, or argue, for the halfway point his non-first-time-offender co-accused might need. As a **shield** against institutional inertia, sub-section (3)'s jail-Superintendent duty gives every undertrial a second, independent trigger for release that does not depend on defence counsel's diligence or the case being listed.

#### The limitation clock

There is no filing deadline as such, but the substantive clock is the detention period itself: one-third of the maximum sentence for a genuine first-time offender, one-half for everyone else within scope, and an absolute outer ceiling at the full maximum sentence for the offence that no extension can cross.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Offence carries death or life imprisonment as a specified punishment | Section 479(1), opening words | Section 479 does not apply at all |
| First-time offender, detained up to one-third of maximum sentence | Section 479(1), first proviso | Mandatory release on bond |
| Any other qualifying person, detained up to one-half of maximum sentence | Section 479(1) | Mandatory release on bail |
| Court wishes to detain past one-half | Section 479(1), second proviso | Permitted only after hearing the Public Prosecutor and recording reasons in writing |
| Detention reaching the offence's full maximum sentence | Section 479(1), third proviso | Absolute release — no discretion can extend past this point |
| More than one offence or case pending against the person | Section 479(2) | No release under this section at all, regardless of time served on any one case |
| One-third or one-half threshold reached | Section 479(3) | Jail Superintendent has an independent duty to apply in writing for release |

#### The authorities

None beyond the promoted ratio above.

#### Strategy and drafting

**Drafting traps.**

1. Do not assume every undertrial gets the same halfway threshold — check prior-conviction history first; a genuine first-time offender's clock runs at one-third, not one-half.
2. Do not treat a pending, unrelated second case as merely a discretionary factor against release — section 479(2) is a categorical bar, and arguing it as a balancing consideration misstates the section.
3. Do not let a section 479 application sit on the assumption that the jail administration will file it — sub-section (3) creates a duty, but a duty unenforced in practice is still worth a direct application by the defence rather than a wait-and-see approach.
4. Do not overlook the third proviso's absolute ceiling when opposing a bail application on the Public Prosecutor's request to extend detention under the second proviso — the extension has an outer limit that is not itself subject to further extension.

**Timing.** Calendar the one-third mark the day custody begins for any first-time-offender client, not just the one-half mark — and file (or press the jail Superintendent to file) the moment that date arrives rather than waiting for it to be raised at the next listed hearing.

**Model checklist for reviewing this cluster's provisions:**

1. Confirm whether the offence carries death or life imprisonment as a specified punishment — if so, section 479 does not apply.
2. Confirm prior-conviction history to fix whether the one-third or one-half threshold governs.
3. Check for any other pending case or offence against the person before relying on section 479(1) — a positive finding under section 479(2) defeats the application regardless of time served.
4. Where detention has been extended past one-half under the second proviso, confirm the Public Prosecutor was heard and reasons were recorded in writing.
5. Track total detention against the offence's own maximum sentence — the third proviso's ceiling is absolute.

---

## Section 480 — Bail in non-bailable offences

### The dispute this solves

::: oneminute Non-bailable does not mean unbailable — it means the presumption flips and the fight moves from "why should I get bail" to "why should I not."
A bailable offence answers its own bail question by classification; a non-bailable offence hands the question to a human being — the officer in charge of the police station, or the Court — and asks for a judgment call. Section 480 is the statute's attempt to structure that judgment call so it is not pure discretion: it names two categories of person who presumptively should not be released (those facing credible death-or-life-imprisonment suspicion, and repeat offenders of a specific kind), then immediately carves out exceptions to its own exclusions for children, women, the sick and infirm, and for any "special reason" a Court finds just and proper. The provision this site's readers litigate most often is exactly this one — not because it is complicated, but because the words "reasonable grounds for believing" carry the whole weight of a person's liberty.
:::

::: story Two co-accused, two outcomes
Ramesh and Suresh are jointly accused of a robbery in which a shot was fired — an offence that, on this telling, is punishable with life imprisonment. Ramesh has no criminal history. Suresh was twice previously convicted of robbery, each time drawing a five-year sentence. When both apply for bail, section 480(1)(i) puts the "reasonable grounds for believing he is guilty of a life-imprisonment offence" question to each of them individually — this is not a formality, it requires the Court to actually look at the material, not recite the clause and refuse. Suppose the Court finds reasonable grounds against both. Ramesh's case ends there — he stays in on clause (i) alone, subject to the child/woman/sick/infirm proviso, which does not apply to him on these facts. Suresh's case has a second problem layered on the first: clause (ii)'s exclusion for a cognizable offence after two or more prior convictions carrying three-to-seven years each. Even if the Court found no reasonable grounds under clause (i) for Suresh, clause (ii) would still block him — unless the Court finds a special reason under the second proviso to release him anyway.
:::

> **480. (1)** When any person accused of, or suspected of, the commission of any non-bailable offence is arrested or detained without warrant by an officer in charge of a police station or appears or is brought before a Court other than the High Court or Court of Session, he [[?may]] be released on bail, but—
>
> (i) such person shall [[!not]] be so released if there appear reasonable grounds for believing that he has been guilty of an offence punishable with death or imprisonment for life;
>
> (ii) such person shall [[!not]] be so released if such offence is a cognizable offence and he had been previously convicted of an offence punishable with death, imprisonment for life or imprisonment for seven years or more, or he had been previously convicted on two or more occasions of a cognizable offence punishable with imprisonment for three years or more but less than seven years:
>
> Provided that the Court [[?may]] direct that a person referred to in clause (i) or clause (ii) be released on bail if such person is a child or is a woman or is sick or infirm:
>
> Provided further that the Court [[?may]] also direct that a person referred to in clause (ii) be released on bail if it is satisfied that it is [[=just and proper]] so to do for any other special reason:
>
> Provided also that the mere fact that an accused person may be required for being identified by witnesses during investigation or for police custody beyond the first fifteen days shall [[!not]] be sufficient ground for refusing to grant bail if he is otherwise entitled to be released on bail and gives an undertaking that he shall comply with such directions as may be given by the Court:
>
> Provided also that no person shall, if the offence alleged to have been committed by him is punishable with death, imprisonment for life, or imprisonment for seven years or more, be released on bail by the Court under this sub-section without giving an [[!opportunity of hearing]] to the Public Prosecutor.
>
> **(2)** If it appears to such officer or Court at any stage of the investigation, inquiry or trial, as the case may be, that there are not reasonable grounds for believing that the accused has committed a non-bailable offence, but that there are sufficient grounds for further inquiry into his guilt, the accused shall, subject to the provisions of section 492 and pending such inquiry, be released on bail, or, at the discretion of such officer or Court, on the execution by him of a bond for his appearance as hereinafter provided.
>
> **(3)** When a person accused or suspected of the commission of an offence punishable with imprisonment which may extend to seven years or more or of an offence under Chapter VI, Chapter VII or Chapter XVII of the Bharatiya Nyaya Sanhita, 2023 or abetment of, or conspiracy or attempt to commit, any such offence, is released on bail under sub-section (1), the Court [[!shall]] impose the conditions,—
>
> (a) that such person shall attend in accordance with the conditions of the bond executed under this Chapter;
>
> (b) that such person shall not commit an offence similar to the offence of which he is accused, or suspected, of the commission of which he is suspected; and
>
> (c) that such person shall not directly or indirectly make any inducement, threat or promise to any person acquainted with the facts of the case so as to dissuade him from disclosing such facts to the Court or to any police officer or tamper with the evidence,
>
> and [[?may]] also impose, in the interests of justice, such other conditions as it considers necessary.
>
> **(4)** An officer or a Court releasing any person on bail under sub-section (1) or sub-section (2), [[!shall]] record in writing his or its reasons or special reasons for so doing.
>
> **(5)** Any Court which has released a person on bail under sub-section (1) or sub-section (2), [[?may]], if it considers it necessary so to do, direct that such person be arrested and commit him to custody.
>
> **(6)** If, in any case triable by a Magistrate, the trial of a person accused of any non-bailable offence is not concluded within a period of sixty days from the first date fixed for taking evidence in the case, such person shall, if he is in custody during the whole of the said period, be released on bail to the satisfaction of the Magistrate, unless for reasons to be recorded in writing, the Magistrate otherwise directs.
>
> **(7)** If, at any time, after the conclusion of the trial of a person accused of a non-bailable offence and before judgment is delivered, the Court is of opinion that there are reasonable grounds for believing that the accused is not guilty of any such offence, it [[!shall]] release the accused, if he is in custody, on the execution by him of a bond for his appearance to hear judgment delivered.

::: proviso The 15-day/identification proviso stops a common stalling tactic dead
Section 480(1)'s third proviso exists because "we might need him for a test identification parade" or "we might need more custody" was, in practice, being used as an open-ended reason to defeat an otherwise-entitled bail application. The proviso says plainly that this, by itself, is never sufficient — if the person is otherwise entitled to bail and is prepared to undertake compliance with the Court's directions, the mere possibility of a future identification exercise or custody beyond the first fifteen days cannot be the reason he stays in.
:::

⚠️ *This site has not independently confirmed the current content of BNS 2023 Chapter VI, Chapter VII or Chapter XVII against the bare Act — do not assert what offence categories these chapters cover until that is verified; the sub-section (3) mandatory-conditions trigger for those chapters is quoted verbatim above but not yet glossed.*

### How this actually runs

<MicroTree
  input="A person accused of a non-bailable offence seeks bail from an officer in charge of a police station, or a Court short of the High Court or Court of Session"
  :gates="[
    { q: 'Do reasonable grounds exist for believing the person guilty of a death- or life-imprisonment offence?',
      note: 'This is clause (i) — the Court must actually assess the material, not merely recite the offence category',
      no: 'Move to the next gate — clause (i) does not block release' },
    { q: 'Is it a cognizable offence with the specific repeat-conviction history in clause (ii)?',
      note: 'A single prior conviction for a death/life/seven-plus-year offence, OR two or more prior convictions for a three-to-seven-year cognizable offence',
      no: 'Neither statutory exclusion applies — release on bail is the default outcome, subject to sub-section (3) conditions if the offence carries seven years or more' },
    { q: 'Is the person a child, a woman, sick, or infirm — or does the Court find a special reason making release just and proper?',
      note: 'The first proviso covers clause (i) or (ii); the second proviso’s “special reason” route covers clause (ii) only',
      no: 'The exclusion in clause (i) or (ii) stands, and bail is refused at this stage' }
  ]"
  result="Bail is granted — either because neither exclusion applies, or because a proviso overrides an exclusion that does"
  resultKind="discretionary"
  caveat="If the offence carries death, life imprisonment, or seven years or more, the fourth proviso requires the Public Prosecutor be given an opportunity of hearing before any release under this sub-section" />

### In plain English

Section 480 is built as a general discretion (bail "may" be granted) immediately narrowed by two specific exclusions, which are themselves immediately softened by two specific provisos. That layered structure is the whole provision: the Court is not asked "is this person a good candidate for release" in the abstract, it is asked to walk through a checklist — do the death/life-imprisonment grounds exist, does the repeat-offender history apply, and if either does, does the person's own vulnerability or a special reason override it anyway. Sub-sections (2) through (7) are less argued over but still load-bearing: the "further inquiry" release when the evidence looks weak, the mandatory conditions for serious-offence bail, the standing duty to record reasons, the Court's power to send a released person back into custody, the 60-day trial-delay release, and the pre-judgment release where the Court itself doubts guilt before pronouncing.

### What changed from the CrPC

> **CrPC 1973, s. 437 → BNSS 2023, s. 480.** Renumbered with the sub-section structure preserved closely — the (1)–(7) breakdown, the two exclusion clauses, the four provisos, and the seven-year/specified-offence conditions regime all track the older provision's architecture. The reference to "Chapter VI, Chapter VII or Chapter XVII of the Bharatiya Nyaya Sanhita, 2023" in sub-section (3) replaces the CrPC's IPC chapter cross-references — a substantive interlock change even where the surrounding structure is unchanged, since the underlying BNS chapters must be checked afresh rather than assumed identical to their IPC counterparts. ⚠️ *Confirm the exact CrPC 1973 s. 437 sub-section numbering and the specific IPC chapters it cross-referenced before asserting a clause-for-clause match on the concordance page.*

### Test your instinct

:::: instinct Bail refused solely because an identification parade might be needed
An accused, otherwise meeting every condition for bail under section 480(1), is refused release because the investigating officer states he may be required for a test identification parade at some point in the investigation.
::: ruling What actually happens
This is exactly what the third proviso to section 480(1) forecloses. The mere possibility of a future identification exercise — or of custody being sought beyond the first fifteen days — is expressly stated not to be sufficient ground for refusal, provided the person is otherwise entitled to bail and undertakes to comply with the Court's directions. A refusal resting on this ground alone, with the undertaking on record, does not survive the proviso's plain words.
:::
::::

:::: instinct A repeat offender released on a "special reason"
Suresh, with two prior convictions each carrying five years for a cognizable offence, falls squarely within clause (ii)'s exclusion. His counsel argues for release anyway on the ground that Suresh is the sole caregiver for a terminally ill parent with no other family support, and that his continued detention would leave the parent without care.
::: ruling What actually happens
This is precisely the kind of fact pattern the second proviso to section 480(1) is built to reach — it lets the Court release a clause (ii) case if satisfied it is just and proper for "any other special reason." Caregiving responsibility for a dependant with no alternative support has been treated as capable of amounting to such a special reason in comparable discretionary bail contexts, though the finding is fact-specific and the Court retains full discretion to weigh it against the seriousness of the repeat-offence history. What defeats the objection that clause (ii) is an absolute bar is simply that the second proviso exists at all — clause (ii) is not, on the statute's own terms, the last word.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

**State of Rajasthan v. Balchand alias Baliay**, AIR 1977 SC 2447 — Krishna Iyer, J., on the philosophy underlying discretionary bail: the basic rule is bail, not jail, and pre-trial detention should be the exception justified by the risk the accused poses to a fair investigation or trial, not the default response to a serious accusation. **Practitioner takeaway:** frame every section 480(1) application around the proposition that liberty is the rule and custody the exception requiring justification — do not let the argument be reframed as the accused having to justify why he deserves release.

#### Sword and shield

As a **sword**, the prosecution can rely on clause (i) or (ii) to resist bail where the material genuinely supports "reasonable grounds," and can insist on the fourth proviso's Public-Prosecutor hearing right for grave offences. As a **shield**, the defence can invoke the third proviso to strip away identification-parade and custody-extension arguments that do not independently justify refusal, and can invoke the first or second proviso to reach release even where clause (i) or (ii) technically applies.

#### The limitation clock

No independent limitation period attaches to section 480 itself; sub-section (6) supplies its own internal clock — 60 days from the first date fixed for taking evidence, in a Magistrate-triable case, before continued custody requires the Magistrate's recorded reasons.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Reasonable grounds of guilt for a death/life-imprisonment offence | Section 480(1)(i) | Bail excluded, subject to the first proviso |
| Cognizable offence, specific repeat-conviction history | Section 480(1)(ii) | Bail excluded, subject to the first or second proviso |
| Person is a child, woman, sick, or infirm | Section 480(1), first proviso | Court may release despite clause (i) or (ii) |
| Special reason making release just and proper | Section 480(1), second proviso | Court may release despite clause (ii) |
| Weak evidence, grounds for further inquiry only | Section 480(2) | Release on bail or bond pending inquiry, subject to section 492 |
| Offence carries seven years or more, or falls under the specified BNS chapters | Section 480(3) | Mandatory attendance/non-repetition/non-tampering conditions on release |
| Trial not concluded within 60 days of first evidence date (Magistrate-triable) | Section 480(6) | Release unless the Magistrate records reasons otherwise |
| Court doubts guilt after trial, before judgment | Section 480(7) | Mandatory release on bond pending judgment |

#### The authorities

None beyond the promoted ratio above.

#### Strategy and drafting

**Drafting traps.**

1. Do not argue a clause (i) or (ii) exclusion as though it were absolute — always test it against the first and second provisos before conceding the point.
2. Do not let "possible identification parade" or "possible further custody" stand unchallenged as a refusal ground — invoke the third proviso by name and put the compliance undertaking on record.
3. Do not overlook the fourth proviso's Public Prosecutor hearing requirement for grave-offence bail — a grant made without it is procedurally vulnerable regardless of the merits.
4. Do not assume the sub-section (3) mandatory conditions apply to every bail grant — they are triggered specifically by a seven-year-or-more offence or the named BNS chapters, not by section 480 generally.

**Timing.** Track the 60-day clock in sub-section (6) from the first date fixed for evidence, not from the date of arrest or framing of charge — and be ready to press for release the moment it lapses without a reasoned order extending custody.

**Model checklist for reviewing this cluster's provisions:**

1. Identify whether clause (i), clause (ii), both, or neither exclusion is engaged on the material actually before the Court.
2. If an exclusion is engaged, check for a first- or second-proviso override on the specific facts.
3. Confirm whether the third proviso's identification/custody non-ground applies to any refusal reasoning offered.
4. Where the offence carries seven years or more, confirm the sub-section (3) conditions were actually imposed and are separately drafted into the bail order.
5. Where sixty days have passed since the first evidence date in a Magistrate-triable case, check for a recorded-reasons order under sub-section (6) before assuming continued custody is lawful.

---

## Section 481 — The bond that outlives the trial court

### The dispute this solves

::: oneminute A conviction does not automatically re-arrest a person who was on bail — section 481 is the bridge bond that keeps him at liberty into the appeal, on a clock of its own.
An accused who has been on bail throughout trial faces a strange gap the moment judgment is pronounced: the trial court's job is done, but the appellate process has not yet even begun, and no summons from the higher court exists yet to answer. Left unaddressed, that gap invites exactly the wrong incentive — disappear now, before an appellate court has even had the chance to issue notice. Section 481 closes the gap in advance: before the trial even concludes, the trial court (or the appellate court, once there is an appeal before it) makes the accused execute a bond to appear whenever the higher court calls, and fixes that bond's life at six months.
:::

::: story Convicted, but still on bail
Meera is convicted at trial but was on bail throughout the proceedings; she intends to appeal. Before the trial court pronounces its final orders, section 481(1) requires it to take a bond from her — not tied to a specific appeal hearing date, because none exists yet, but tied to "as and when" the Appellate Court issues notice on whatever appeal or petition is eventually filed against the judgment. That bond is good for six months. If Meera fails to appear when the Appellate Court does eventually call her, the bond stands forfeited and the ordinary forfeiture machinery of section 491 takes over from there.
:::

> **481. (1)** Before conclusion of the trial and before disposal of the appeal, the Court trying the offence or the Appellate Court, as the case may be, [[!shall]] require the accused to execute a bond or bail bond, to appear before the higher Court as and when such Court issues notice in respect of any appeal or petition filed against the judgment of the respective Court and such bond shall be in force for [[=six months]].
>
> **(2)** If such accused fails to appear, the bond stand forfeited and the procedure under section 491 [[!shall]] apply.

### How this actually runs

<MicroTree
  input="Trial is about to conclude, or an appeal/petition against the judgment is before the Appellate Court"
  :gates="[
    { q: 'Was the accused on bail during the proceeding now concluding?',
      note: 'Section 481 is the bridge mechanism specifically for a person who was, or is, at liberty and needs to remain reachable for the next stage',
      no: 'A person already in custody has no bond gap to bridge — section 481 has nothing to add here' }
  ]"
  result="The trial or Appellate Court must take a bond or bail bond from the accused to appear whenever the higher court issues notice, valid for six months"
  resultKind="mandatory"
  caveat="The six-month validity is a fixed statutory term, not a discretionary duration the Court can shorten or extend on this bond alone" />

### In plain English

Section 481 is entirely mechanical: it does not ask whether the accused deserves to remain on bail into the appeal — it simply makes sure that, having already been found suitable for liberty at trial, he stays procedurally reachable once the case moves up a level. The bond is forward-looking by design — it is taken before an appeal has even been filed, because waiting for the appeal to exist before securing the accused's future appearance would recreate exactly the gap the section is meant to close. A breach triggers the same forfeiture track as any other bond under this Chapter, via section 491.

### What changed from the CrPC

> **CrPC 1973, s. 437-A → BNSS 2023, s. 481.** Renumbered with the substance carried forward essentially unchanged — the six-month bond-to-appear-before-the-Appellate-Court mechanism, inserted into the CrPC by amendment, continues into the BNSS without apparent structural change. ⚠️ *Confirm the exact CrPC 1973 s. 437-A text and its amendment year against a verified source before asserting the two provisions are word-for-word identical.*

### Test your instinct

:::: instinct No appeal has been filed yet — is the bond premature?
A trial court, pronouncing judgment against a person who was on bail throughout trial, takes a section 481 bond from him "to appear before the Appellate Court as and when it issues notice," even though no appeal has actually been filed by anyone at that point.
::: ruling What actually happens
This is exactly how section 481 is meant to operate, not a procedural error. The bond is deliberately taken "before conclusion of the trial and before disposal of the appeal" — it does not wait for an appeal to exist, because the entire point is to have the accused already bound to appear the moment one is filed and notice is issued. An objection that the bond is premature because no appeal yet exists misreads the section's whole structure.
:::
::::

:::: instinct The bond lapses before the appeal is heard
A section 481 bond is taken on the date of conviction. Eight months later — beyond the bond's six-month statutory life — the Appellate Court finally issues notice on a pending appeal, and the accused does not appear, arguing the bond had already expired.
::: ruling What actually happens
The six-month figure in section 481(1) is the bond's fixed validity period, and if it has genuinely lapsed before notice was issued, the accused's argument that this particular bond no longer binds him has force on its own terms. That is not, however, the end of the matter — a lapsed section 481 bond is a gap in continuity that the prosecution or the Appellate Court should have caught and cured with a fresh bond well before the six months ran out; the accused's non-appearance on an expired instrument is a different question from whether he can lawfully be compelled to appear and bonded afresh now that the gap has been noticed.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Section 481 is a short, mechanical bridge provision, and no specific Supreme Court authority squarely on this precise six-month bond mechanism is confidently recalled; the project's anti-fabrication discipline counsels against forcing one in.

#### Sword and shield

As a **shield**, an accused whose section 481 bond has genuinely lapsed beyond six months can resist an appearance demand resting on that specific, expired instrument. As a **sword**, the prosecution or the Appellate Court registry can rely on section 481(2) to trigger section 491 forfeiture proceedings the moment a bound accused fails to appear on notice.

#### The limitation clock

The bond itself carries a fixed six-month validity from execution — track that date independently of the appeal's own filing or hearing timeline, since the two clocks are not otherwise linked.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Accused was on bail at trial, judgment about to be pronounced | Section 481(1) | Trial court takes a bond to appear on future appellate notice, valid six months |
| Appeal or petition later filed, Appellate Court issues notice | Section 481(1) | Bond obliges appearance "as and when" notice issues |
| Bond's six-month period lapses before notice issues | Section 481(1) | A fresh bond is needed to maintain continuity |
| Bound accused fails to appear on notice | Section 481(2) | Bond forfeited; section 491 procedure applies |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not treat a section 481 bond as premature merely because no appeal has yet been filed — the section is explicitly designed to be taken before that point.
2. Do not let a section 481 bond's six-month clock run out unnoticed while an appeal is still pending or expected — calendar the renewal date independently of the appeal's own timeline.
3. Do not assume a bond breach automatically means the accused loses his liberty for the appeal itself — section 481(2) triggers section 491 forfeiture procedure, a separate question from bail on the appeal going forward.

**Timing.** Diarise the six-month expiry the same day a section 481 bond is executed, and seek a fresh bond well before it lapses if the appeal is still pending.

**Model checklist for reviewing this cluster's provisions:**

1. Confirm the accused was on bail at the relevant trial or appellate stage before assuming section 481 applies.
2. Check the execution date of any section 481 bond against the six-month validity period before relying on it to compel appearance.
3. Where an accused has failed to appear on notice, confirm the bond was still within its six-month life before invoking section 491 forfeiture.

---

## Section 482 — Anticipatory bail

### The dispute this solves

::: oneminute Anticipatory bail lets a person go to court before the handcuffs, not after — it is a shield built for the moment fear of arrest, not arrest itself, becomes real.
Most of this Chapter operates after arrest: someone is already in custody, and the question is how to get out. Section 482 operates in the gap before that — when a person has genuine reason to believe he may be arrested on a non-bailable accusation, and wants a court's protection lined up before it happens rather than scrambling for it in a lock-up. It is deliberately not a general amnesty from arrest: the High Court or Court of Session decides whether to grant the direction at all, can load it with conditions, and — new in the BNSS — the whole remedy is switched off entirely for two named categories of offence.
:::

::: story Ananya hears she is about to be named
Ananya learns, through a business associate, that a former partner has filed a criminal complaint naming her in a cheating and breach-of-trust matter, and that the police may arrest her within days. Rather than wait for that arrest, she approaches the Court of Session under section 482(1) for a direction that, if she is arrested on this accusation, she be released on bail. The Court can grant that direction with conditions attached — say, that she make herself available for questioning and not leave the country without permission — under section 482(2). If the police do then arrest her, section 482(3) makes that direction operative immediately: she is released on bail as soon as she is prepared to furnish it, without having to re-litigate the question from a police lock-up.
:::

> **482. (1)** When any person has reason to believe that he may be arrested on an accusation of having committed a non-bailable offence, he [[?may]] apply to the High Court or the Court of Session for a direction under this section; and that Court [[?may]], if it thinks fit, direct that in the event of such arrest, he shall be released on bail.
>
> **(2)** When the High Court or the Court of Session makes a direction under sub-section (1), it [[?may]] include such conditions in such directions in the light of the facts of the particular case, as it may think fit, including—
>
> (i) a condition that the person shall make himself available for interrogation by a police officer as and when required;
>
> (ii) a condition that the person shall not, directly or indirectly, make any inducement, threat or promise to any person acquainted with the facts of the case so as to dissuade him from disclosing such facts to the Court or to any police officer;
>
> (iii) a condition that the person shall not leave India without the previous permission of the Court;
>
> (iv) such other condition as may be imposed under sub-section (3) of section 480, as if the bail were granted under that section.
>
> **(3)** If such person is thereafter arrested without warrant by an officer in charge of a police station on such accusation, and is prepared either at the time of arrest or at any time while in the custody of such officer to give bail, he [[!shall]] be released on bail; and if a Magistrate taking cognizance of such offence decides that a warrant should be issued in the first instance against that person, he [[!shall]] issue a [[=bailable warrant]] in conformity with the direction of the Court under sub-section (1).
>
> **(4)** Nothing in this section shall apply to any case involving the arrest of any person on accusation of having committed an offence under section 65 and sub-section (2) of section 70 of the Bharatiya Nyaya Sanhita, 2023.

::: proviso Sub-section (4) is a hard, offence-specific switch-off — not a factor to be argued around
Section 482(4) does not merely disfavour anticipatory bail for the offences it names — it removes section 482 from the table entirely for an accusation under BNS 2023 section 65 or section 70(2). Where sub-section (4) applies, there is no anticipatory-bail application to make under this section at all, regardless of how compelling the individual facts might otherwise seem. ⚠️ *This site has not independently confirmed the content of BNS 2023 sections 65 and 70(2) against the bare Act — do not assert what these offences are until verified; the statutory cross-reference is quoted verbatim above but not yet glossed.*
:::

### How this actually runs

<MicroTree
  input="A person has reason to believe he may be arrested on a non-bailable accusation"
  :gates="[
    { q: 'Is the accusation for an offence under BNS 2023 section 65 or section 70(2)?',
      note: 'Section 482(4) removes the remedy entirely for these — verify the offence classification before proceeding',
      no: 'The application may proceed to the High Court or Court of Session' },
    { q: 'Does the High Court or Court of Session think fit to grant a direction on the facts of the particular case?',
      note: 'This is a genuine discretion, not a formality — the Court weighs the material actually placed before it',
      no: 'No direction issues; the person has no anticipatory protection under this section' }
  ]"
  result="The Court directs that, in the event of arrest on this accusation, the person shall be released on bail — with such conditions as the Court thinks fit"
  resultKind="discretionary"
  caveat="The direction protects against this specific accusation as it stood when granted — it is not a general immunity from arrest on unrelated or later-arising conduct" />

### In plain English

Section 482 has three moving parts, in order: first, only the High Court or the Court of Session can grant this — no Magistrate, and no police officer, has any part in the decision to grant it. Second, the grant is not automatic; the Court weighs the specific facts and can attach conditions ranging from interrogation availability to a foreign-travel restriction. Third, once granted, the direction is not merely advisory — if the person is actually arrested afterward, sub-section (3) makes his release effectively automatic, and even converts what would otherwise be a first-instance non-bailable warrant into a bailable one. Sub-section (4) then draws a hard line around all of that: for the two named categories of offence, none of this machinery is available at all.

### What changed from the CrPC

> **CrPC 1973, s. 438 → BNSS 2023, s. 482.** The core anticipatory-bail mechanism — application to the High Court or Court of Session, discretionary grant, conditions modelled on the ordinary bail conditions, and the bailable-warrant consequence on arrest — continues substantially unchanged in structure. **Sub-section (4)'s blanket exclusion for BNS 2023 section 65 and section 70(2) offences is new relative to CrPC s. 438 in its original form** — the CrPC's own restriction on anticipatory bail for certain sexual offences was added later by State-level and Central amendments over the years, so this is continuity of a trend rather than a wholly novel idea, but the specific BNS cross-reference itself is new machinery. ⚠️ *Confirm the precise pre-BNSS amendment history of CrPC s. 438's offence-specific exclusions, and the content of BNS 2023 ss. 65 and 70(2), before finalising the concordance page.*

### Test your instinct

:::: instinct A rigid list of pre-conditions before anticipatory bail will even be considered
A Court of Session refuses to even entertain an anticipatory bail application unless the applicant first surrenders his passport, furnishes character certificates from three referees, and undertakes not to apply for regular bail for six months — treating these as threshold conditions rather than terms of a grant.
::: ruling What actually happens
Section 482(2) empowers the Court to impose conditions once it has decided to grant a direction — it does not authorise treating an arbitrary checklist as a gatekeeping requirement before the application can even be considered on its merits. The discretion under sub-section (1) is to grant or refuse the direction on the facts of the particular case; conditions under sub-section (2) attach to a grant, they do not substitute for the merits inquiry or convert the remedy into something available only to applicants who pre-comply with demands the statute does not itself impose.
:::
::::

:::: instinct An anticipatory bail application in a section 65 accusation
An accused, apprehending arrest on an accusation that squarely falls within BNS 2023 section 65, applies under section 482 for anticipatory bail, arguing the facts are otherwise sympathetic and his personal circumstances warrant protection.
::: ruling What actually happens
Sub-section (4) forecloses this before the merits are even reached. Once the accusation is confirmed to fall within section 65 or section 70(2) of the BNS 2023, section 482 simply does not apply — there is no discretion to weigh sympathetic facts against, because the remedy itself has been withdrawn by Parliament for this category of accusation. Any relief here would have to be sought through a different route entirely, not by arguing for a favourable exercise of section 482 discretion.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

**Gurbaksh Singh Sibbia v. State of Punjab**, (1980) 2 SCC 565 — a Constitution Bench decision holding that the power to grant anticipatory bail is an extraordinary but not a rare or exceptional power, that it should not be hedged in with rigid, inflexible pre-conditions not found in the statute itself, and that the Court must exercise a genuine discretion on the facts of each case rather than mechanically applying a fixed checklist. **Practitioner takeaway:** resist any attempt — by the Court or the opposing side — to convert section 482's discretionary inquiry into a rigid, statute-unsupported set of pre-conditions; the correct question is always whether the direction is warranted on the specific facts, not whether the applicant has satisfied an invented checklist.

#### Sword and shield

As a **shield**, a person genuinely apprehending arrest can secure protection before ever being taken into custody, avoiding the disadvantage of arguing for bail from inside a lock-up. As a **sword**, the prosecution can point to sub-section (4) to foreclose the remedy altogether for the offences it names, without needing to argue the merits at all.

#### The limitation clock

No independent limitation period governs when a section 482 application must be filed; it is available as soon as the person has genuine reason to believe arrest is apprehended, and loses its purpose once arrest has already occurred (at which point the ordinary bail provisions take over).

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Accusation falls under BNS 2023 s. 65 or s. 70(2) | Section 482(4) | No anticipatory bail application lies under this section at all |
| Person has reason to believe arrest is apprehended, offence outside sub-section (4) | Section 482(1) | May apply to the High Court or Court of Session for a direction |
| Court decides to grant a direction | Section 482(2) | May attach conditions, including those available under section 480(3) |
| Person subsequently arrested on the accusation | Section 482(3) | Release on bail essentially automatic; any first-instance warrant must be bailable |

#### The authorities

**Sushila Aggarwal v. State (NCT of Delhi)**, (2020) 5 SCC 1 — a later Constitution Bench addressing whether an anticipatory bail direction must be time-bound, generally holding it should not automatically expire and may continue until the conclusion of trial absent case-specific reasons to limit it. Not promoted as the winning ratio here because it answers a narrower, duration-specific question layered on top of Sibbia's foundational discretion principle, which is where this cluster's central dispute sits. ⚠️ *Verify before citing — confirm bench strength and the precise holding against a verified source before relying on this in a filing.*

#### Strategy and drafting

**Drafting traps.**

1. Do not draft an anticipatory bail application as though it must satisfy a rigid, judicially or informally imposed checklist — ground the argument in the specific facts, per Sibbia.
2. Do not overlook sub-section (4) at the intake stage — confirm the accusation does not fall within BNS 2023 s. 65 or s. 70(2) before investing in an application that the section itself bars.
3. Do not assume the conditions under sub-section (2) are optional extras the applicant can negotiate away — once imposed, they bind exactly as the ordinary section 480(3) conditions would.
4. Do not treat sub-section (3)'s bailable-warrant consequence as automatic without first confirming the direction under sub-section (1) was actually granted and remains in force at the time of arrest.

**Timing.** File the moment genuine apprehension of arrest crystallises — waiting until arrest is imminent or has already occurred defeats the purpose of the remedy and shifts the applicant into the different, less favourable posture of ordinary post-arrest bail.

**Model checklist for reviewing this cluster's provisions:**

1. Confirm the accusation does not fall within BNS 2023 s. 65 or s. 70(2) before proceeding under this section.
2. Confirm the application is made to the High Court or Court of Session — no other forum has this power.
3. Where a direction has been granted, identify precisely which conditions were attached and confirm compliance before relying on it.
4. Where arrest has occurred after a direction, confirm the arresting officer and any Magistrate issuing a warrant are put on notice of the section 482(1) direction so sub-section (3) actually operates.

## Section 483 — Special powers of the High Court or Court of Session regarding bail

### The dispute this solves

::: oneminute Section 482 gets a person bail before arrest. Section 483 is what happens once a Magistrate has already ruled — and the higher court has the last word, in both directions.
A Magistrate's bail order is not the end of the road. Section 483 gives the High Court and the Court of Session a wider, standalone power to grant bail (or to loosen or tighten a Magistrate's conditions) that does not depend on showing the Magistrate went wrong — it is an independent jurisdiction, not an appeal. But the same section also hands the higher court the mirror-image power: to send a person already out on bail back into custody. And for the gravest category of case — one that could end in the death penalty or life imprisonment — the section will not let the Court decide either way without first hearing the Public Prosecutor, and, where the case is one of the two specified BNS offences, without the informant being present too.
:::

::: story Two applications, two very different outcomes
Rekha's husband is charged with an offence exclusively triable by the Court of Session; the Magistrate had no power to grant bail at all, so she moves the Court of Session directly under section 483(1)(a). Because the offence carries a possible life sentence, the Court cannot decide her application without first giving the Public Prosecutor a chance to be heard — that is not a courtesy, it is a precondition the section itself imposes, absent a recorded reason why notice was not practicable. Two courtrooms over, Vikram was granted bail by a Magistrate with a condition his lawyer thinks is unnecessarily harsh; he does not need to show the Magistrate erred — section 483(1)(b) lets the Sessions Court simply reconsider the condition on its own wider power. And in a third file, the State moves under section 483(3) to have a bailed accused re-arrested and recommitted after he was seen threatening a witness — the same section that can free a person can just as easily put him back inside.
:::

> **483. (1)** A High Court or Court of Session [[?may]] direct,—
>
> (a) that any person accused of an offence and in custody be released on bail, and if the offence is of the nature specified in sub-section (3) of section 480, [[?may]] impose any condition which it considers necessary for the purposes mentioned in that sub-section;
>
> (b) that any condition imposed by a Magistrate when releasing any person on bail be set aside or modified:
>
> Provided that the High Court or the Court of Session [[!shall]], before granting bail to a person who is accused of an offence which is triable exclusively by the Court of Session or which, though not so triable, is punishable with imprisonment for life, give notice of the application for bail to the Public Prosecutor unless it is, for reasons to be recorded in writing, of opinion that it is not practicable to give such notice:
>
> Provided further that the High Court or the Court of Session [[!shall]], in an application for bail of a person accused of an offence triable under sub-section (3) of section 480 [i.e. punishable under BNS 2023 ⚠️ s. 65 or s. 70(2)], give notice of the application to the Public Prosecutor within fifteen days from the date of receipt of the notice of such application.
>
> **(2)** The presence of the informant or any person authorised by him [[!shall]] be obligatory at the time of hearing of the application for bail to the person under sub-section (3) of section 480.
>
> **(3)** A High Court or Court of Session [[?may]] direct that any person who has been released on bail under this Chapter be arrested and committed to custody.

::: proviso Notice to the Public Prosecutor is the default, not an option
For the two most serious categories in sub-section (1) — Sessions-exclusive-triable offences and offences carrying possible life imprisonment — the Court cannot simply decide the bail application on the papers in front of it. The first proviso makes Public Prosecutor notice the rule; skipping it requires the Court to actually record, in writing, why notice was not practicable — a silent file does not satisfy the proviso. The second proviso is narrower and stricter still: for the ⚠️ BNS s. 65 / s. 70(2) category, notice to the Public Prosecutor is not merely required, it is time-bound — within fifteen days of the application being received.
:::

### How this actually runs

<MicroTree
  input="An application is made to the High Court or Court of Session concerning bail already dealt with (or triable exclusively) at that level"
  :gates="[
    { q: 'Is the offence triable exclusively by the Court of Session, or punishable with life imprisonment?',
      note: 'This is the first proviso’s trigger — it is about offence category, not about who already ruled',
      no: 'The Court may decide the bail application on its ordinary wider power under sub-section (1), without the mandatory Public Prosecutor notice step' },
    { q: 'Has the Court recorded, in writing, that Public Prosecutor notice is not practicable?',
      note: 'Silence does not count — the proviso requires an actual recorded reason before notice can be skipped',
      no: 'The Court must give the Public Prosecutor notice of the application before deciding it' },
    { q: 'Is the offence one triable under section 480(3) — the ⚠️ BNS s. 65 / s. 70(2) category?',
      note: 'This triggers both the fifteen-day Public Prosecutor notice clock in the second proviso and the informant’s mandatory presence under sub-section (2)',
      no: 'No additional victim-participation or time-bound notice requirement applies under this section' }
  ]"
  result="The application may be decided — granting bail, varying a Magistrate’s conditions, or (under sub-section (3)) sending a bailed person back into custody"
  resultKind="discretionary"
  caveat="Section 483 is an independent jurisdiction, not an appeal against the Magistrate’s order — the High Court or Court of Session does not need to find the Magistrate wrong to exercise it" />

### In plain English

Section 483 is the higher courts' all-purpose bail toolkit, cutting both ways. Sub-section (1)(a) lets a High Court or Court of Session grant bail directly — most often where the offence is one only that court can try in the first place, so no Magistrate could have granted it. Sub-section (1)(b) lets the same courts revisit and soften (or, implicitly, tighten) a Magistrate's bail conditions without needing to sit in appeal. The two provisos exist because the stakes rise with the offence: the graver the charge, the less a court is allowed to decide unilaterally without the prosecution's input, and for the narrowest, most serious category, that input is not just required but clocked. Sub-section (2) gives the complainant a seat at the table for that same narrow category. Sub-section (3) is the reverse gear — the same wide power that frees a person can also, on fresh grounds, send him back.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS s. 483 tracks CrPC s. 439 closely in structure — the (1)(a)/(1)(b) split, the Public Prosecutor notice proviso, and the section 439(2)-equivalent re-arrest power in sub-section (3) all appear to carry over largely unchanged. Sub-section (2)'s mandatory informant presence at the hearing appears to track CrPC s. 439(1A), inserted by the Criminal Law (Amendment) Act, 2018 in response to the Nirbhaya-era reforms — if so, this is continuity of a relatively recent CrPC provision rather than a wholly new BNSS innovation, but the exact 2018 text should be checked against this rendering before relying on the comparison. The second proviso's fifteen-day Public Prosecutor notice clock for the BNS s. 65/s. 70(2) category has not been located in the pre-2018 or post-2018 CrPC s. 439 text and may be a genuine BNSS addition — flagged for verification rather than asserted either way.*

### Test your instinct

:::: instinct The Sessions Court grants bail to a person accused of an offence punishable with life imprisonment, without issuing notice to the Public Prosecutor, and the order does not record any reason why notice was skipped.
::: ruling Bail order vulnerable to challenge
The first proviso to section 483(1) does not merely encourage Public Prosecutor notice for this category of offence — it makes notice mandatory unless the Court records, in writing, why notice was not practicable. An order silent on that point has not satisfied the proviso's own condition, and is exposed to challenge on that ground alone, independent of the merits of the bail decision itself.
:::
::::

:::: instinct A High Court, exercising its section 483(1)(b) power, modifies a bail condition imposed by a Magistrate — making it less strict — without any fresh evidence of changed circumstances.
::: ruling Within power, because this is not an appeal
Section 483(1)(b) does not require the High Court to find the Magistrate erred, and it does not require new facts — it is a free-standing power to revisit conditions, not a corrective appellate jurisdiction confined to the original record. The absence of "changed circumstances" is not, by itself, a defect in the exercise of this power, though it may bear on how persuasively the Court explains its reasoning.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Section 483 is largely a jurisdiction-and-procedure provision — the propositions likely to matter in practice (the mandatory character of Public Prosecutor notice, the non-appellate nature of the power) are close readings of the text itself rather than doctrine requiring a promoted authority. Advocates should independently verify whether recent decisions on CrPC s. 439(1A) informant-presence compliance remain good law before relying on any specific citation.*

#### Sword and shield

As a **sword**, section 483 is the direct route to the Court of Session or High Court for an accused facing a Sessions-exclusive or life-imprisonment offence, where no Magistrate could have granted bail in the first place — and the route to loosen an unreasonably strict Magistrate condition without needing to show error. As a **shield**, the prosecution's sword: sub-section (3) is the State's route to re-arrest and recommit a person already on bail, on fresh grounds such as witness tampering or bond violation, without waiting for a fresh trial-court application.

#### The limitation clock

No independent limitation period attaches to a section 483 application itself. The second proviso's fifteen-day window runs the other way — it binds the Court to give Public Prosecutor notice within fifteen days of receiving a BNS s. 65/s. 70(2)-category application, not the applicant.

#### Interlocking matrix

Section 483(1)(a)'s reference to "the nature specified in sub-section (3) of section 480" pulls in the mandatory-condition regime built for regular non-bailable bail; section 483(2)'s informant-presence rule and the second proviso both hinge on the same ⚠️ BNS s. 65/s. 70(2) category defined by cross-reference to section 480(3). Section 483(3)'s re-arrest power interlocks with section 491's bond-forfeiture machinery — re-arrest and forfeiture are separate consequences that can both follow from the same breach.

#### The authorities

⚠️ *None promoted for this cluster. Decisions on CrPC s. 439(1A) compliance (mandatory informant/victim notice) would be the natural body of authority to consult once the BNSS s. 483(2) mapping above is independently confirmed — flagged rather than cited, since no specific citation is held with confidence.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Confirm whether the application is a fresh section 483(1)(a) application (no Magistrate had power to grant bail) or a section 483(1)(b) variation of an existing Magistrate order — the drafting and framing differ.
2. For Sessions-exclusive or life-imprisonment offences, confirm Public Prosecutor notice was given, or that the order records in writing why it was not practicable — an unrecorded skip is a ready ground of challenge.
3. For the ⚠️ BNS s. 65/s. 70(2) category, confirm both the fifteen-day Public Prosecutor notice clock and the informant's presence at the hearing — two independent, cumulative requirements, not alternatives.
4. Where seeking re-arrest under sub-section (3), build the fresh-grounds record carefully — this is not a re-run of the original bail hearing, and the application should be framed around what has changed since release.

## Sections 484–487 — The bond itself: amount, execution, sureties' declaration, discharge from custody

### The dispute this solves

::: oneminute A bail order is a promise on paper. Sections 484–487 are what turns "released on bail" into a document with legal teeth — and what stops an officer from turning a right into an obstacle by fixing the bond too high.
Winning the bail argument is only half the fight. Every bail order, of whatever kind and under whatever section, cashes out into the same four mechanical steps: someone fixes an amount, someone executes a bond in that amount (with or without sureties), any surety puts their own credibility on the record, and only then does the jail actually let the person out. Each of those four steps is a separate point of potential abuse — an inflated bond amount can defeat a bail order as surely as refusing it outright, a surety who is secretly standing behind ten other accused persons is worthless collateral, and a jail that drags its feet after the bond is executed converts a granted bail into a still-detained accused. Sections 484 to 487 are the machinery that closes each of those gaps.
:::

::: story The bond that was bail in name only
A Magistrate grants Suresh bail in a bailable offence — a right under section 478 — but fixes the bond at an amount so far beyond Suresh's means that he might as well have been refused outright. Section 484(1) exists for exactly this manoeuvre: the amount must have "due regard to the circumstances of the case" and must not be excessive — an excessive figure is not a valid exercise of the fixing power, it is bail defeated by another name. Meanwhile, three cells over, Farida stands surety for a stranger she barely knows, not realising section 486 requires her to declare, on the record, every other accused person she has already stood surety for — a rule built to stop professional sureties from quietly overextending themselves across a dozen unrelated cases with no real capacity to produce any of them.
:::

> **484. (1)** The amount of every bond executed under this Chapter [[!shall]] be fixed with due regard to the circumstances of the case and [[!shall]] not be excessive.
>
> **(2)** The High Court or the Court of Session [[?may]] direct that the bail required by a police officer or Magistrate be reduced.
>
> **485. (1)** Before any person is released on bond or bail bond, a bond for such sum of money as the police officer or Court, as the case may be, thinks sufficient [[!shall]] be executed by such person, and, when he is released on bond or bail bond, by one or more sufficient sureties conditioned that such person [[!shall]] attend at the time and place mentioned in the bond, and [[!shall]] continue so to attend until otherwise directed by the police officer or Court, as the case may be.
>
> **(2)** Where any condition is imposed for the release of any person on bail, the bond or bail bond [[!shall]] also contain that condition.
>
> **(3)** If the case so requires, the bond or bail bond [[!shall]] also bind the person released on bail to appear when called upon at the High Court, Court of Session or other Court to answer the charge.
>
> **(4)** For the purpose of determining whether the sureties are fit or sufficient, the Court [[?may]] accept affidavits in proof of the facts contained therein relating to the sufficiency or fitness of the sureties, or, if it considers necessary, [[?may]] either hold an enquiry itself or cause an inquiry to be made by a Magistrate subordinate to the Court, as to such sufficiency or fitness.
>
> **486.** Every person standing surety to an accused person for his release on bail, [[!shall]] make a declaration before the Court as to the number of persons to whom he has stood surety including the accused, giving therein all the relevant particulars.
>
> **487. (1)** As soon as the bond or bail bond has been executed, the person for whose appearance it has been executed [[!shall]] be released; and, when he is in jail, the court admitting him to bail [[!shall]] issue an order of release to the officer in charge of the jail, and such officer on receipt of the orders [[!shall]] release him.
>
> **(2)** Nothing in this section, section 478 or section 480, shall be deemed to require the release of any person liable to be detained for some matter other than that in respect of which the bond or bail bond was executed.

::: proviso "Not excessive" is a real constraint, not a formality
Section 484(1) does not merely counsel moderation — it imposes a binding cap on the bond-fixing power: due regard to the circumstances of the case, and never excessive. An officer or Magistrate who fixes a bond figure a person plainly cannot meet, in a case where a modest figure would secure attendance just as well, has not exercised the section 484(1) power correctly — and section 484(2) gives the High Court or Court of Session an express, standalone power to step in and reduce it, independent of any appeal against the bail order itself.
:::

### How this actually runs

<MicroTree
  input="A bail order (of any kind, under any section of this Chapter) has been made and now needs to be executed"
  :gates="[
    { q: 'Has the fixing authority set a bond amount with due regard to the case’s circumstances, keeping it non-excessive?',
      note: 'Section 484(1)’s cap is binding, not aspirational — an inflated figure defeats the bail order in substance even if not in form',
      no: 'The High Court or Court of Session may independently direct that the bond be reduced under section 484(2)' },
    { q: 'Has the bond (with any required sureties and any imposed conditions) actually been executed, and has every surety made the section 486 declaration of other suretyships?',
      note: 'A bond is not complete until execution — an unexecuted order is not yet a release',
      no: 'The person remains in custody until execution is completed; an undisclosed surety over-extension under section 486 is itself a ground to question sufficiency' },
    { q: 'Is the person currently in jail?',
      note: 'Section 487(1) puts an affirmative duty on the court to issue the release order to the jail, and on the jail officer to act on it without delay',
      no: 'Release follows directly from execution' }
  ]"
  result="The person is released — unless liable to be detained for a wholly separate matter, which section 487(2) expressly preserves"
  resultKind="mandatory"
  caveat="These four sections apply uniformly to every bond executed anywhere in this Chapter — they are not specific to any one bail-granting section" />

### In plain English

Think of sections 484–487 as the assembly line that runs after any bail decision, however that decision was reached. Section 484 caps what the bond can cost the accused, and gives the higher courts a standalone lever to bring an inflated figure back down. Section 485 spells out what the bond actually has to say — the attendance promise, any conditions, and, if the case demands it, a promise to appear before a higher court too. Section 486 makes sureties put their own track record on the table, so a court can tell a genuine guarantor from someone quietly over-committed across many cases. Section 487 is the release itself — not a discretionary courtesy from the jail, but a duty running from the court's order straight through to the jail officer's action, with only one carve-out: a person wanted for something else entirely stays in custody on that separate footing.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 484–487 appear to track CrPC ss. 440–442 in substance (bond amount and reduction; bond execution and content; discharge from custody), continuing the same mechanical sequence with no apparent structural change. Section 486's surety-declaration duty appears to correspond to a similar CrPC provision on disclosure by sureties, but the precise prior section number has not been independently confirmed here and should be checked before citing the concordance in a filing.*

### Test your instinct

:::: instinct A Magistrate grants bail in a minor bailable offence but fixes the bond at an amount roughly equal to a year of the accused's income, reasoning that a high figure will better guarantee attendance.
::: ruling Excessive, and vulnerable under section 484(1)
The statute does not ask for the figure most likely to guarantee attendance in the abstract — it asks for a figure fixed with due regard to the circumstances of the case, expressly capped at "not excessive." A bond calibrated to be maximally coercive rather than proportionate to the offence and the person's means is the precise failure section 484(1) is written to prevent, and section 484(2) gives a higher court an express route to correct it.
:::
::::

:::: instinct A surety who has already stood surety for four other accused persons in unrelated cases signs a bond for a fifth, without disclosing the earlier four.
::: ruling Declaration required, and its absence undermines the bond
Section 486 does not make disclosure optional or leave it to the surety's discretion — every person standing surety must declare, before the Court, the number of persons for whom they have already stood surety. A surety who conceals that history has not complied with the section, and a court that later learns of it has grounds to revisit the sufficiency of that surety under section 485(4)'s inquiry power.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 484–487 are bond-execution mechanics rather than doctrine — the operative propositions (the binding "not excessive" cap, the mandatory declaration, the duty running to the jail officer) are drawn directly from the statutory text rather than from case law requiring a promoted authority.*

#### Sword and shield

As a **sword**, section 484(2) is the direct route to challenge an inflated bond figure without re-litigating the underlying bail grant — take the bail order as won, and attack only the amount. As a **shield**, section 486 protects the system (and, indirectly, co-accused persons) against sureties who have overextended their real capacity to produce anyone; section 487(2) protects the State's separate, unrelated detention grounds from being swept away by an unrelated bail order.

#### The limitation clock

No independent limitation period attaches to these four sections — they are procedural mechanics triggered by, and running immediately from, the underlying bail order.

#### Interlocking matrix

Section 484(1)'s "not excessive" cap interlocks with every bail-granting section in this Chapter (478, 480, 482, 483) — it is the shared ceiling on all of them. Section 485(4)'s surety-sufficiency inquiry power interlocks with section 486's declaration duty — the declaration is often the very fact that triggers the inquiry. Section 487(2)'s carve-out interlocks with any separate detention order (for instance, a different case or a preventive-detention order) that is not disturbed by this Chapter's bail machinery.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Where a bond amount looks disproportionate to the offence or the accused's means, frame the challenge under section 484(1)/(2) specifically — do not conflate it with a challenge to the underlying bail grant.
2. Confirm every surety executing a bond has made the section 486 declaration, and cross-check declared suretyships for any pattern suggesting over-extension.
3. Where a client remains in custody despite an executed bond, check first whether the court has issued the section 487(1) release order to the jail and second whether the jail has acted on it — the failure point is often administrative, not judicial.
4. Before assuming release is complete, confirm there is no separate, unrelated detention ground preserved under section 487(2).

## Sections 488–490 — When the sureties themselves become the problem

### The dispute this solves

::: oneminute A bond is only as good as the people standing behind it. Sections 488–490 handle the three ways that backing can fail — it was never good enough, it wants out, or the accused would rather not need it at all.
Sureties are not permanent fixtures. A surety accepted in good faith can turn out to have lied about their assets; a surety who was perfectly solvent at the time can go bankrupt, move away, or simply lose the will to keep vouching for someone months into a long trial; and some accused persons would rather not depend on another person's goodwill at all, offering cash or Government paper instead. Sections 488 to 490 give the system a controlled way to handle all three without ever leaving the accused in limbo — mistaken sureties get fixed, unwilling sureties get released without punishing the accused for it, and a deposit becomes a lawful substitute for begging someone else to vouch for you.
:::

::: story The surety who wanted out
Six months into Arjun's trial, his surety — his uncle — decides he no longer wants the responsibility; family relations have soured, and he does not want to answer for Arjun's conduct anymore. Section 489 gives him a clean exit: he applies to a Magistrate to discharge the bond, the Magistrate issues a warrant to bring Arjun before it, and Arjun is then called on to find a fresh surety — his uncle's change of heart does not, by itself, send Arjun back to a cell unless he genuinely cannot find anyone else. Meanwhile, in a different courtroom, a Magistrate discovers that the "sufficient surety" accepted for another accused, Deepa, was in fact judgment-proof from the start — a fraud on the process. Section 488 gives the Magistrate the power to pull Deepa back in and demand a real surety this time, without needing to unwind the whole bail order.
:::

> **488.** If, through mistake, fraud or otherwise, insufficient sureties have been accepted, or if they afterwards become insufficient, the Court [[?may]] issue a warrant of arrest directing that the person released on bail be brought before it and [[?may]] order him to find sufficient sureties, and, on his failing so to do, [[?may]] commit him to jail.
>
> **489. (1)** All or any sureties for the attendance and appearance of a person released on bail [[?may]] at any time apply to a Magistrate to discharge the bond, either wholly or so far as relates to the applicants.
>
> **(2)** On such application being made, the Magistrate [[!shall]] issue his warrant of arrest directing that the person so released be brought before him.
>
> **(3)** On the appearance of such person pursuant to the warrant, or on his voluntary surrender, the Magistrate [[!shall]] direct the bond to be discharged either wholly or so far as relates to the applicants, and [[!shall]] call upon such person to find other sufficient sureties, and, if he fails to do so, [[?may]] commit him to jail.
>
> **490.** When any person is required by any Court or officer to execute a bond or bail bond, such Court or officer [[?may]], except in the case of a bond for good behaviour, permit him to deposit a sum of money or Government promissory notes to such amount as the Court or officer may fix in lieu of executing such bond.

::: proviso Fraud on the sureties question does not require restarting the bail application
Section 488 does not force the Court back to square one when a surety turns out to be insufficient — the person is not re-examined for bail eligibility, only re-examined for adequate backing. Custody under this section is a stopgap, contingent entirely on the person's own failure to produce a sufficient replacement; it is not a punitive re-arrest for the original offence.
:::

### How this actually runs

<MicroTree
  input="A surety-backed bond, already executed, runs into a problem — insufficiency, or the surety’s own wish to exit"
  :gates="[
    { q: 'Did the Court or officer discover the surety was, through mistake or fraud, insufficient (or has since become insufficient)?',
      note: 'Section 488 covers both an original defect and a later-arising one — the trigger is insufficiency at the point of discovery, not just at the point of acceptance',
      no: 'No section 488 warrant issues on this ground' },
    { q: 'Is it instead the surety who wants out, applying under section 489(1) to discharge the bond?',
      note: 'The Magistrate must issue a warrant to bring the accused back before deciding anything — the accused’s presence is a precondition, not an afterthought',
      no: 'Section 489 procedure does not apply' },
    { q: 'Has the accused, once brought before the Court, found a sufficient substitute — a fresh surety, or a section 490 cash/Government-paper deposit instead?',
      note: 'Section 490’s deposit option is available generally, not only as a fallback after a surety problem, except for good-behaviour bonds',
      no: 'The person may be committed to jail, but only for the specific failure to secure sufficient backing — not as a fresh determination that bail should never have been granted' }
  ]"
  result="The bond is either replaced with sufficient backing (fresh sureties or a deposit) or, failing that, the person is recommitted pending a sufficient substitute"
  resultKind="discretionary"
  caveat="Section 490’s deposit-in-lieu option does not extend to bonds for good behaviour — that category always requires actual sureties" />

### In plain English

These three sections cover every way a bond's human backing can go wrong, and one way to avoid depending on humans at all. Section 488 is the fraud/mistake-and-later-insolvency fix — the Court can pull the accused back and demand real security without treating this as a fresh bail refusal. Section 489 is the surety's own exit ramp — sureties are not indentured to an accused person forever, and can walk away, but only through a structured process that first secures the accused's presence and then gives them a genuine chance to find someone else before any consequence attaches. Section 490 sidesteps the surety question altogether: instead of finding a person to vouch for you, put up cash or Government paper instead — available for ordinary bonds, but pointedly withheld from good-behaviour bonds, where the statute apparently wants a human guarantor's ongoing oversight rather than money sitting in a court account.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 488–490 appear to track CrPC ss. 443–445 (insufficient sureties, discharge of sureties, deposit instead of recognizance) closely, with no apparent structural change identified in this reading. The good-behaviour-bond carve-out in section 490 should be cross-checked against the CrPC's equivalent wording before relying on the exact scope of the exclusion in a filing.*

### Test your instinct

:::: instinct A surety applies under section 489(1) to be discharged. The Magistrate discharges the bond immediately, without first securing the accused's presence before the Court.
::: ruling Procedurally incomplete
Section 489(2) is not optional sequencing — on the application being made, the Magistrate "shall" issue a warrant to bring the accused before it, and only then, under sub-section (3), direct discharge and call on the accused to find fresh sureties. Discharging the bond first and skipping the accused's appearance inverts a sequence the statute fixes deliberately, since the whole point is to give the accused a real opportunity to find a replacement before any consequence attaches.
:::
::::

:::: instinct An accused offers to deposit Government promissory notes in lieu of executing a bond for good behaviour, and the Magistrate accepts.
::: ruling Outside section 490's power
Section 490 expressly excludes bonds for good behaviour from the deposit-in-lieu option — "except in the case of a bond for good behaviour" is not a stylistic aside, it is the boundary of the power itself. A Magistrate accepting a deposit in place of a good-behaviour bond has exceeded what section 490 authorises, whatever the accused's willingness to pay.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 488–490 are procedural safeguards around bond administration rather than doctrine attracting a body of promoted case law in this reading.*

#### Sword and shield

As a **sword**, section 490 is the practical answer for a client who has the means but not the network — cash or Government paper instead of chasing down a willing surety. As a **shield**, section 489's structured discharge procedure protects a surety from being permanently bound against their present wishes, while section 488's procedure protects the State's interest in a bond that is only ever as strong as its weakest surety.

#### The limitation clock

No independent limitation period attaches; each section is triggered by an event (discovered insufficiency, a surety's application, or an accused's offer to deposit) rather than a filing deadline.

#### Interlocking matrix

Section 488 interlocks with section 485(4)'s surety-sufficiency inquiry power — an inquiry under 485(4) at the execution stage is the natural preventive counterpart to a post hoc 488 correction. Section 489's discharge procedure interlocks with section 491's forfeiture machinery only in the sense that a surety who has properly exited under 489 is no longer exposed to forfeiture for events after discharge. Section 490's deposit option interlocks with section 485(1)'s general execution requirement as the money-in-lieu alternative to it.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Where a surety's sufficiency is in doubt, consider whether section 488 (Court-initiated, insufficiency-driven) or section 489 (surety-initiated, discharge-driven) is the operative route — the procedural sequence differs.
2. On a section 489 application, confirm the accused's presence has actually been secured through the warrant before treating discharge as final.
3. Where a client has liquid assets but no ready surety, consider a section 490 deposit application early — but confirm the bond in question is not one for good behaviour.
4. In either a section 488 or 489 scenario, build the record around the accused's genuine opportunity (and, if relevant, failure) to find a sufficient replacement before any committal follows.

## Sections 491–493 — Forfeiture: what happens when the bond is broken (flagship)

### The dispute this solves

::: oneminute A bond is a promise backed by money and by another person's word. Section 491 is what happens when that promise is broken — and it is not a formality, it is a proceeding with its own due-process floor.
Every bond in this Chapter exists to be enforced if broken — but enforcement is not automatic forfeiture on the strength of a missed appearance alone. Section 491 requires the Court to be satisfied, on proof, that the bond has actually been forfeited, to record why, and only then to call on the bound person to pay the penalty or show cause why not. Section 492 layers on the specific consequence for a breached appearance bond — the bond itself is cancelled, and the person cannot simply walk back onto their own bond a second time without a fresh showing. Section 493 covers the separate scenario where nobody has broken any promise at all — the surety has died or gone insolvent through no fault of anyone — and gives the Court a mechanism to demand fresh security rather than treating the case as though bail itself has failed.
:::

::: story The surety who paid twice
Ramesh stood surety for his nephew Anil's bail bond. Anil skips two hearings and cannot be traced. The Court does not simply debit Ramesh's account — section 491(1) requires the Court to be satisfied on proof that the bond is forfeited, record its grounds, and call on Ramesh to pay the penalty or show cause. Ramesh cannot show cause — Anil genuinely absconded — so the Court proceeds to recover the penalty as a fine. Separately, under section 492, Anil's own personal bond and Ramesh's surety bond both stand cancelled the moment forfeiture for the breach is established; if Anil is later caught and the Court is satisfied there was no sufficient cause for his non-appearance, he cannot be released again on his own bond alone — a fresh personal bond and fresh sureties are required. In a different file, a different surety, Meena, simply dies of natural causes before any forfeiture ever arises — section 491(4) closes that book cleanly: her estate owes nothing.
:::

> **491. (1)** Where,—
>
> (a) a bond under this Sanhita is for appearance, or for production of property, before a Court and it is proved to the satisfaction of that Court, or of any Court to which the case has subsequently been transferred, that the bond has been forfeited; or
>
> (b) in respect of any other bond under this Sanhita, it is proved to the satisfaction of the Court by which the bond was taken, or of any Court to which the case has subsequently been transferred, or of the Court of any Magistrate of the first class, that the bond has been forfeited,
>
> the Court [[!shall]] record the grounds of such proof, and [[?may]] call upon any person bound by such bond to pay the penalty thereof or to show cause why it should not be paid.
>
> Explanation.—A condition in a bond for appearance, or for production of property, before a Court shall be construed as including a condition for appearance, or as the case may be, for production of property, before any Court to which the case may subsequently be transferred.
>
> **(2)** If sufficient cause is not shown and the penalty is not paid, the Court [[?may]] proceed to recover the same as if such penalty were a fine imposed by it under this Sanhita:
>
> Provided that where such penalty is not paid and cannot be recovered in the manner aforesaid, the person so bound as surety [[!shall]] be liable, by order of the Court ordering the recovery of the penalty, to imprisonment in civil jail for a term which may extend to six months.
>
> **(3)** The Court [[?may]], after recording its reasons for doing so, remit any portion of the penalty mentioned and enforce payment in part only.
>
> **(4)** Where a surety to a bond dies before the bond is forfeited, his estate [[!shall]] be discharged from all liability in respect of the bond.
>
> **(5)** Where any person who has furnished security under section 125 or section 136 or section 401 is convicted of an offence the commission of which constitutes a breach of the conditions of his bond, or of a bond executed in lieu of his bond under section 494, a certified copy of the judgment of the Court by which he was convicted of such offence [[?may]] be used as evidence in proceedings under this section against his surety or sureties, and, if such certified copy is so used, the Court [[!shall]] presume that such offence was committed by him unless the contrary is proved.
>
> **492.** Without prejudice to the provisions of section 491, where a bond or bail bond under this Sanhita is for appearance of a person in a case and it is forfeited for breach of a condition,—
>
> (a) the bond executed by such person as well as the bond, if any, executed by one or more of his sureties in that case [[!shall]] stand cancelled; and
>
> (b) thereafter no such person [[!shall]] be released only on his own bond in that case, if the police officer or the Court, as the case may be, for appearance before whom the bond was executed, is satisfied that there was no sufficient cause for the failure of the person bound by the bond to comply with its condition:
>
> Provided that subject to any other provisions of this Sanhita he [[?may]] be released in that case upon the execution of a fresh personal bond for such sum of money and bond by one or more of such sureties as the police officer or the Court, as the case may be, thinks sufficient.
>
> **493.** When any surety to a bail bond under this Sanhita becomes insolvent or dies, or when any bond is forfeited under the provisions of section 491, the Court by whose order such bond was taken, or a Magistrate of the first class [[?may]] order the person from whom such security was demanded to furnish fresh security in accordance with the directions of the original order, and if such security is not furnished, such Court or Magistrate [[?may]] proceed as if there had been a default in complying with such original order.

::: proviso Forfeiture is a proceeding, not a bookkeeping entry
Section 491(1) does not let a Court treat forfeiture as automatic on a missed appearance — it must be satisfied on proof, and must record the grounds of that proof, before it can even call on the bound person to pay or show cause. Show-cause is not a courtesy: sufficient cause defeats recovery of the penalty entirely, and even where cause is insufficient, section 491(3) gives the Court an express, reasoned power to remit part of the penalty rather than enforcing the full amount mechanically.
:::

### How this actually runs

<MicroTree
  input="A bond under this Chapter has not been complied with, or the surety behind it has died or become insolvent"
  :gates="[
    { q: 'Is the Court satisfied, on proof, that the bond has actually been forfeited — and has it recorded the grounds?',
      note: 'This is a proceeding with its own evidentiary floor, not an automatic consequence of a missed date',
      no: 'No forfeiture, and no penalty proceeding, may follow' },
    { q: 'Has the bound person shown sufficient cause why the penalty should not be paid?',
      note: 'Sufficient cause defeats recovery outright; even without it, section 491(3) allows a reasoned partial remission',
      no: 'The Court may recover the penalty as a fine, with civil-jail imprisonment as the ultimate fallback if it cannot be recovered' },
    { q: 'Was the forfeited bond specifically one for the person’s own appearance?',
      note: 'This is what triggers section 492’s automatic cancellation of both the accused’s and the sureties’ bonds — a distinct, non-monetary consequence layered on top of section 491’s penalty machinery',
      no: 'Section 492’s cancellation-and-no-own-bond-release rule does not apply, though section 491’s penalty proceeding still can' },
    { q: 'Did a surety instead die or become insolvent, with no breach by anyone at all?',
      note: 'Section 493 exists precisely for this no-fault scenario, distinct from forfeiture for breach',
      no: 'No section 493 fresh-security order is triggered on this ground' }
  ]"
  result="The penalty is recovered (in full, in part, or not at all on sufficient cause), the appearance bond is cancelled if that was its subject, and fresh security may be demanded going forward"
  resultKind="discretionary"
  caveat="A surety who dies before forfeiture is entirely discharged under section 491(4) — death after forfeiture and death before forfeiture have opposite consequences for the estate" />

### In plain English

Section 491 is the enforcement engine for every bond in this Chapter, and it is deliberately not summary — proof, recorded grounds, and a genuine opportunity to show cause come before any penalty is exacted, and even then the Court can choose to remit part of it. Section 492 adds a specific, non-monetary sting for appearance bonds: forfeiture does not just cost money, it cancels the bond outright and closes the door — at least temporarily — on being released again on one's own word alone, unless the police or Court is satisfied there was sufficient cause for the earlier failure. Section 493 is the no-fault cousin of both: a surety's death or insolvency is nobody's breach, but it still leaves a bond without real backing, so the Court can simply order fresh security rather than treating it as a forfeiture event.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 491–493 appear to track CrPC ss. 446–446A (procedure when bond forfeited; cancellation of bond and bail bond) closely, and BNSS s.493 appears to correspond to a CrPC provision addressing surety insolvency/death, though the exact prior section number for that specific provision has not been independently confirmed in this reading. The section 491(5) evidentiary presumption tied to sections 125/136/401 securities should be checked against the CrPC's corresponding cross-references before relying on the concordance in a filing.*

### Test your instinct

:::: instinct A surety fails to pay a forfeited bond's penalty. The Court, without recording any reasons, orders him committed to civil jail for six months as the default consequence.
::: ruling Procedurally defective on two counts
Civil jail imprisonment under the proviso to section 491(2) is available only where the penalty "is not paid and cannot be recovered in the manner aforesaid" — it is the fallback after recovery-as-a-fine has been attempted and failed, not a default first resort. And section 491(3) gives the Court an express power to remit part of the penalty after recording reasons — an order that skips straight to the maximum civil-jail term without engaging that remission power, or without first attempting recovery as a fine, has not followed the section's own sequence.
:::
::::

:::: instinct An accused's appearance bond is forfeited for a missed hearing, but the Court finds his car broke down and he was in fact only four hours late, having appeared and surrendered voluntarily the same day. The police officer treats section 492(b) as an automatic bar on releasing him on his own bond again.
::: ruling Not automatic — "sufficient cause" is a live question
Section 492(b)'s bar on own-bond release applies only "if the police officer or the Court... is satisfied that there was no sufficient cause for the failure" — it is conditional, not automatic on forfeiture alone. A breakdown followed by same-day voluntary surrender is squarely the kind of fact pattern the sufficient-cause inquiry exists to catch; treating forfeiture itself as conclusively establishing insufficient cause collapses a two-step inquiry into one.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster despite its flagship status. Section 491's procedural floor (proof, recorded grounds, show-cause, discretionary remission) is drawn directly from the text; a body of case law on forfeiture-proceeding due process likely exists but no specific citation is held with sufficient confidence to promote here rather than risk a fabricated or misremembered reference.*

#### Sword and shield

As a **shield** for a surety or accused, section 491(1)'s "proved to the satisfaction of the Court" and recorded-grounds requirement is the first line of defence against a casual or clerical forfeiture; the show-cause opportunity and section 491(3)'s remission power are the second and third. As a **sword** for the prosecution or the State, section 492's automatic bond cancellation and conditional bar on own-bond release is real leverage against a track record of non-appearance, distinct from and additional to the monetary penalty under section 491.

#### The limitation clock

No independent limitation period is fixed for initiating a section 491 forfeiture proceeding; it runs from the event of breach, on the Court's own satisfaction that forfeiture has occurred.

#### Interlocking matrix

Section 491(5)'s presumption clause interlocks with sections 125, 136, 401 and 494 — a conviction on a breach of any of those bonds becomes usable evidence against the surety in the section 491 proceeding itself, with a reverse evidentiary presumption once that certified copy is used. Section 492's cancellation rule interlocks with section 478(2)'s own already-established discretion to refuse bail on a subsequent occasion after an earlier breach — the two sections reinforce each other for a repeat non-appearer. Section 493's fresh-security order interlocks with sections 485 (bond execution) and 490 (deposit in lieu) as the available mechanisms for actually furnishing that fresh security.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering. A search for Supreme Court authority on the due-process floor for bond-forfeiture proceedings (proof, recorded grounds, and the remission power) would be the natural next step before relying on this cluster in a contested forfeiture matter.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. In defending a forfeiture proceeding, test the record for actual proof and recorded grounds before conceding forfeiture — section 491(1) is not satisfied by a mere docket entry of non-appearance.
2. Always plead sufficient cause affirmatively and in detail — it is a complete defence to the penalty, not merely a mitigating factor, and it is also the gateway question under section 492(b) for own-bond release afterward.
3. Where full recovery is not realistic, invoke section 491(3)'s remission power explicitly rather than leaving the Court to consider it unprompted.
4. On a surety's death or insolvency discovered mid-case, move under section 493 promptly for fresh-security directions rather than waiting for a forfeiture event to force the issue.

## Sections 494–496 — Closing the Chapter: a child's bond, the appeal, and levy of the amount

### The dispute this solves

::: oneminute Three short, mechanical sections close out the Chapter: one protects a child from having to execute a personal bond at all, one gives a forfeiture order somewhere to go on appeal, and one lets the amount actually be collected once due.
A child cannot meaningfully undertake a personal financial obligation the way an adult can — section 494 recognises that and lets the burden fall on a surety alone. Section 491's forfeiture order is not the end of the road either way — section 495 gives it an appellate path, differentiated by who made the original order. And once a bond amount is actually due and the ordinary recovery process under section 491(2) has run its course, section 496 gives the High Court or Court of Session a direct route to have a Magistrate levy the amount, rather than leaving collection to chase the person indefinitely.
:::

::: story The bond that was never asked of the child
Fourteen-year-old Rohit is required to execute a bond in a proceeding under this Sanhita. Section 494 spares him from being made to personally undertake a financial obligation he cannot meaningfully bear — the Court accepts a bond executed by a surety or sureties alone instead. Elsewhere, a Magistrate's forfeiture order against a surety, Prakash, is appealed — section 495 sends it to the Sessions Judge, because the original order came from a Magistrate; had a Court of Session made the order instead, the appeal would run to whichever court an appeal from that Session order ordinarily lies to. And in a third file, a High Court, having already found a bond forfeited, simply directs a Magistrate under section 496 to levy the amount — collection made practical, not left to chase the person across jurisdictions.
:::

> **494.** When the person required by any Court, or officer to execute a bond is a child, such Court or officer [[?may]] accept, in lieu thereof, a bond executed by a surety or sureties only.
>
> **495.** All orders passed under section 491 [[!shall]] be appealable,—
>
> (i) in the case of an order made by a Magistrate, to the Sessions Judge;
>
> (ii) in the case of an order made by a Court of Session, to the Court to which an appeal lies from an order made by such Court.
>
> **496.** The High Court or Court of Session [[?may]] direct any Magistrate to levy the amount due on a bond for appearance or attendance at such High Court or Court of Session.

::: proviso A child's bond is a surety's bond, not a fiction of the child's own promise
Section 494 does not merely permit leniency in enforcing a child's bond after the fact — it removes the child from the personal-obligation structure at the point of execution itself. The bond that results is genuinely the surety's undertaking, not a legal fiction dressed up as the child's own; this matters directly for section 491's forfeiture machinery, since forfeiture and the resulting penalty proceeding run against the actual obligor on the bond.
:::

### How this actually runs

<MicroTree
  input="A bond needs to be executed, or a section 491 forfeiture order needs a next step"
  :gates="[
    { q: 'Is the person required to execute the bond a child?',
      note: 'Section 494 substitutes a surety-only bond for a personal one — the child is not made to undertake the obligation directly',
      no: 'The ordinary section 485 execution rules apply without modification' },
    { q: 'Has a section 491 forfeiture order been made, and is it now being appealed?',
      note: 'The appellate forum under section 495 turns on who made the original order — a Magistrate’s order and a Court of Session’s order do not go to the same place',
      no: 'No section 495 appeal question arises yet' },
    { q: 'Is the amount due on a bond for appearance or attendance specifically at the High Court or Court of Session?',
      note: 'Section 496 is a direct levy-direction power confined to that higher-court context — it is not a general collection mechanism for every bond in the Chapter',
      no: 'Recovery proceeds instead through section 491(2)’s ordinary fine-recovery machinery' }
  ]"
  result="The child’s obligation is properly structured through a surety alone, a forfeiture order has a defined appellate path, and a higher-court bond amount can be levied directly through a Magistrate"
  resultKind="discretionary"
  caveat="Section 496’s levy-direction power is additional to, not a replacement for, the ordinary section 491(2) recovery-as-a-fine process for bonds generally" />

### In plain English

These three sections tie off loose ends the rest of the Chapter creates. Section 494 keeps a child out of the personal-obligation structure altogether — practical recognition that a child cannot meaningfully be bound the way an adult can, so the burden sits entirely with a surety. Section 495 makes sure a section 491 forfeiture order is not the final word — there is always somewhere to appeal, and the destination simply tracks the level of the court that made the order in the first place. Section 496 is a narrower, practical convenience: where a bond was for appearance specifically at the High Court or Court of Session, that higher court does not have to run the entire section 491(2) recovery process itself — it can simply direct a Magistrate to levy the amount.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS s.494 appears to correspond to the CrPC's equivalent minor's-bond provision, with "child" as the term used here rather than "minor" — a terminology point worth confirming against the BNSS's own definitions clause rather than assuming synonymy. BNSS s.495 (appeal from section 491 orders) and s.496 (levy direction) appear to track the corresponding CrPC provisions on appeal from forfeiture orders and levy of bond amounts, with no structural change identified in this reading. Exact prior CrPC section numbers for all three should be independently confirmed before citing the concordance in a filing.*

### Test your instinct

:::: instinct A Magistrate requires a fifteen-year-old accused to personally execute a bond, alongside a surety, reasoning that involving the child directly reinforces the seriousness of the undertaking.
::: ruling Contrary to the structure of section 494
Section 494 exists to substitute a surety-only bond in place of the child's own — not to supplement the child's personal undertaking with a surety's backing. Requiring the child to execute a bond personally, even alongside a surety, misreads the section's purpose: the child is meant to be relieved of the personal obligation entirely, not made a co-obligor to reinforce the message.
:::
::::

:::: instinct A surety, aggrieved by a Court of Session's forfeiture order under section 491, files the appeal before the Sessions Judge, believing that is the uniform appellate forum for all section 491 orders.
::: ruling Wrong forum
Section 495 does not send every section 491 order to the Sessions Judge — that destination is specifically for orders made by a Magistrate. An order made by a Court of Session itself goes instead to whichever court an appeal from that Court of Session's orders would ordinarily lie to. Filing in the wrong forum risks a threshold dismissal wholly apart from the merits of the forfeiture challenge.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 494–496 are structural and appellate-routing mechanics rather than doctrine attracting a distinct body of case law in this reading.*

#### Sword and shield

As a **shield**, section 494 protects a child accused or witness from a personal financial obligation they cannot meaningfully bear. As a **sword** in an appellate posture, section 495 is the surety's or accused's guaranteed route to challenge a forfeiture order, however adverse; as a practical collection tool, section 496 is the higher court's sword against a bond amount that would otherwise require the court itself to run a full recovery process.

#### The limitation clock

No independent limitation period is fixed by these three sections themselves for filing a section 495 appeal — the applicable limitation period runs under the general appeal-limitation framework elsewhere in the Sanhita or under the Limitation Act as applied to criminal appeals; ⚠️ this should be checked against the specific appellate provision actually invoked before relying on a filing deadline.

#### Interlocking matrix

Section 494 interlocks with section 485(1)'s general execution requirement as a child-specific modification of it, and with section 491's forfeiture machinery, since it determines who the actual obligor is when forfeiture is later assessed. Section 495 interlocks directly with section 491 as its dedicated appellate pathway. Section 496 interlocks with section 491(2)'s recovery-as-a-fine process as an alternative, higher-court-specific collection route.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Where the person required to execute a bond is a child, insist on a surety-only bond under section 494 rather than accepting a personal-and-surety hybrid.
2. On appealing a forfeiture order, confirm at the outset whether the original order was made by a Magistrate or a Court of Session — the section 495 forum differs, and getting it wrong risks a threshold dismissal.
3. Where the bond in question was specifically for appearance at the High Court or Court of Session, consider whether a section 496 levy direction offers a faster practical route than the general section 491(2) process.
4. Independently verify the applicable limitation period before filing a section 495 appeal — it is not fixed within this cluster's own text.

---
