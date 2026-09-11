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
