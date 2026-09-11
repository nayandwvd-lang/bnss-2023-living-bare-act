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
