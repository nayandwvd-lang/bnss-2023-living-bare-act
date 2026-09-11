# Chapter XXIV — Attendance of Persons Confined or Detained in Prisons

## Sections 301–303 — Definitions, the power to summon a prisoner into Court, and the government's power to switch it off

### The dispute this solves

::: oneminute A witness or an accused who happens to be in prison — serving a sentence, under preventive detention, or held in an institution this Chapter deliberately defines broadly enough to reach a subsidiary jail, a reformatory or a Borstal institution — cannot simply walk into Court to give evidence or answer a charge. Section 302 supplies the mechanism: any Criminal Court conducting an inquiry, trial or proceeding under the Sanhita may order the officer in charge of the prison to produce that person, either to answer a charge or to be examined as a witness. A second-class Magistrate's own order under this section carries extra friction — it does not go anywhere until the Chief Judicial Magistrate countersigns it, on a statement of the reasons the order is necessary, and the Chief Judicial Magistrate may simply decline. Section 303 then hands the executive its own override: the State Government, or the Central Government where its own central agency instituted the case, can by general or special order block a person or class of persons from being removed from prison at all, having regard to the offence, the risk of public-order disturbance, and public interest generally — and while that order stands, no section 302 order has any effect on the people it covers, whenever that section 302 order was made.
:::

::: story A witness behind bars, and a Chief Judicial Magistrate who says no
A Sessions Court trying a case identifies a crucial eyewitness who is currently serving a sentence in a different State's prison for an unrelated offence. The trial Magistrate — a second-class Magistrate assisting with a connected proceeding — signs an order under section 302 directing the prison to produce the witness. Before the order can be sent anywhere, it must go to the Chief Judicial Magistrate to whom this Magistrate is subordinate, accompanied by a statement of why the witness's production is necessary. The Chief Judicial Magistrate reads the statement, is unconvinced the witness's evidence is genuinely necessary given other available evidence, and declines to countersign. The order goes nowhere — not because the trial Court lacked the power to seek the witness, but because section 302(2)'s countersigning safeguard is a real check, not a formality, when the order originates from a second-class Magistrate.
:::

> **301.** In this Chapter,—
> (a) "detained" includes detained under any law providing for [[=preventive detention]];
> (b) "prison" includes,—
> (i) any place which has been declared by the State Government, by general or special order, to be a subsidiary jail;
> (ii) any reformatory, Borstal institution or other institution of a like nature.
>
> **302. (1)** Whenever, in the course of an inquiry, trial or proceeding under this Sanhita, it appears to a Criminal Court,—
> (a) that a person confined or detained in a prison should be brought before the Court for answering to a charge of an offence, or for the purpose of any proceedings against him; or
> (b) that it is necessary for the ends of justice to examine such person as a witness,
>
> the Court [[?may]] make an order requiring the officer in charge of the prison to produce such person before the Court answering to the charge or for the purpose of such proceeding or for giving evidence.
>
> **(2)** Where an order under sub-section (1) is made by a Magistrate of the second class, it [[!shall not]] be forwarded to, or acted upon by, the officer in charge of the prison unless it is countersigned by the Chief Judicial Magistrate, to whom such Magistrate is subordinate.
>
> **(3)** Every order submitted for countersigning under sub-section (2) [[!shall]] be accompanied by a statement of the facts which, in the opinion of the Magistrate, render the order necessary, and the Chief Judicial Magistrate to whom it is submitted [[?may]], after considering such statement, decline to countersign the order.
>
> **303. (1)** The State Government or the Central Government, as the case may be, [[?may]], at any time, having regard to the matters specified in sub-section (2), by general or special order, direct that any person or class of persons [[!shall not]] be removed from the prison in which he or they may be confined or detained, and thereupon, so long as the order remains in force, no order made under section 302, whether before or after the order of the State Government or the Central Government, [[!shall]] have effect in respect of such person or class of persons.
>
> **(2)** Before making an order under sub-section (1), the State Government or the Central Government in the cases instituted by its central agency, as the case may be, [[!shall]] have regard to the following matters, namely:—
> (a) the nature of the offence for which, or the grounds on which, the person or class of persons has been ordered to be confined or detained in prison;
> (b) the likelihood of the disturbance of public order if the person or class of persons is allowed to be removed from the prison;
> (c) the public interest, generally.

::: proviso "Prison" is defined wider than the word suggests
Section 301(b) reaches beyond the ordinary meaning of a jail — a State-Government-declared subsidiary jail, and any reformatory, Borstal institution or other institution of a like nature, are all "prison" for this Chapter's purposes. A person held in any of these is within section 302's reach exactly as a person held in an ordinary jail would be.
:::

::: proviso The countersigning safeguard is class-specific and can defeat the order outright
Section 302(2)'s countersigning requirement applies only where a second-class Magistrate made the order — a Sessions Court or a first-class Magistrate's order under section 302 needs no countersigning at all. Where it does apply, section 302(3) gives the Chief Judicial Magistrate a genuine gatekeeping power, not a rubber stamp: he may decline to countersign after considering the statement of reasons, and a declined order simply does not reach the prison.
:::

### How this actually runs

<MicroTree
  input="A Criminal Court wants to secure the attendance of a person currently confined in prison — will a section 302 order actually produce him?"
  :gates="[
    { q: 'Does the Court reasonably consider that the person should answer a charge, face proceedings, or be examined as a witness for the ends of justice?',
      note: 'This is the threshold judgment section 302(1) leaves to the Court\'s own assessment',
      no: 'There is no basis for an order under section 302(1) at all' },
    { q: 'If the order is made by a second-class Magistrate, has it been countersigned by the Chief Judicial Magistrate on a statement of reasons?',
      note: 'Orders made by a Sessions Court or a first-class Magistrate need no countersigning under section 302(2)',
      no: 'The order cannot be forwarded to, or acted upon by, the officer in charge of the prison at all' },
    { q: 'Is the person free of a standing State Government or Central Government order under section 303 blocking his removal from that prison?',
      note: 'A section 303 order overrides any section 302 order touching the same person, whether the section 302 order came before or after it',
      no: 'The section 303 order controls, and the section 302 order has no effect for as long as it remains in force' }
  ]"
  result="The officer in charge of the prison must act on the order under section 305, built in the next cluster"
  resultKind="mandatory"
  caveat="Even a validly countersigned, unblocked section 302 order is not the end of the story — section 304, built in the next cluster, gives the officer in charge his own independent grounds to abstain from carrying it out." />

### In plain English

Three checkpoints, in order. First, does the Court actually want this prisoner produced, either to face the case or to give evidence? Second, if a second-class Magistrate is the one asking, has a more senior judicial officer signed off on it after being told why it's necessary — a safeguard against a junior Magistrate's order being used carelessly? Third, has the executive — State or Central Government — decided, for public-order or public-interest reasons, that this particular person simply isn't to leave prison at all, an order that trumps any Court order on the point? Only a person who clears all three checkpoints is actually on his way to Court under this Chapter — and even then, as the next cluster shows, the prison officer himself has one more set of reasons he can refuse to comply.

### What changed from the CrPC

⚠️ *This Chapter's CrPC counterpart is not a chapter of the CrPC itself. Attendance of prisoners in Court proceedings was governed, under the CrPC regime, by the separate Prisoners (Attendance in Courts) Act, 1955 — a standalone statute, not a CrPC chapter — and BNSS Chapter XXIV appears to fold that Act's substance directly into the Sanhita. This is a structural observation, not a verified section-by-section mapping: no confident CrPC section numbers are asserted for ss.301–303, and the Prisoners (Attendance in Courts) Act, 1955 itself has not been independently checked against this text. Treat any specific CrPC-section correspondence claim for this chapter as unverified until checked directly against that Act.*

### Test your instinct

:::: instinct A Sessions Court itself — not a second-class Magistrate — makes an order under section 302 directing a prison to produce a person as a witness. The prison objects that the order has not been countersigned by any Chief Judicial Magistrate.
::: ruling Countersigning is required only for second-class Magistrates' orders
Section 302(2) applies specifically "where an order under sub-section (1) is made by a Magistrate of the second class." A Sessions Court's own order carries no such requirement — it is valid and actionable without any countersigning step.
:::
::::

:::: instinct The Central Government makes an order under section 303 blocking the removal of a person from a particular prison, citing public-order concerns. A Sessions Court, unaware of the order, later makes its own order under section 302 directing that same person's production as a witness.
::: ruling The section 303 order still controls, regardless of timing
Section 303(1) expressly provides that its order overrides any section 302 order "whether before or after" the section 303 order was made. The later-in-time section 302 order does not escape the block — the person remains unremovable so long as the section 303 order is in force.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **sword**, counsel seeking a prison witness's production should draft the section 302 application to anticipate the countersigning step if it will be heard by a second-class Magistrate — supplying the necessary statement of facts up front avoids a second round of delay. As a **shield**, the State or Central Government's section 303 power is a genuine, standing check available even after a section 302 order has already issued — counsel for the State in a public-order-sensitive matter should know this override exists independently of anything the trial Court itself decides.

#### The limitation clock

No filing deadline is fixed by ss.301–303; the Court's power under section 302 may be exercised at any point during an inquiry, trial or proceeding, and a section 303 order may be made "at any time."

#### Interlocking matrix

Section 302(2)'s countersigning chain ties to the Chief Judicial Magistrate's supervisory role over second-class Magistrates, a structural feature of the Magistracy addressed in Chapter II (⚠️ not yet built in this repository). Section 303's public-order and public-interest factors are executive, not judicial, determinations and are not independently verifiable from within this repository.

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Identify at the outset whether the order-making Magistrate is second-class — if so, build the countersigning step into the timeline before assuming the witness or accused will actually be produced.
2. Check for a standing section 303 exclusion order before investing effort in a section 302 application for a particular prisoner — the exclusion order controls regardless of when the section 302 order is made.
3. When drafting the statement of facts for countersigning under section 302(3), address necessity concretely — the Chief Judicial Magistrate's power to decline is real, not a formality.
4. Remember that "prison" under section 301(b) reaches subsidiary jails, reformatories and Borstal institutions — do not assume this Chapter is confined to ordinary jails when identifying whether a person is within its scope.

---
