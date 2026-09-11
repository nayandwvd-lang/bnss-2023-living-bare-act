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
