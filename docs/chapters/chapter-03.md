# Chapter III — Power of Courts

## Sections 21–23 — Which court tries which offence, and the sentencing ceiling each level of court can impose

### The dispute this solves

::: oneminute This cluster answers two questions every prosecution and every defence must answer before a single witness is examined: which court has the power to try this offence at all, and, if convicted, what is the maximum sentence that particular court can actually impose? Section 21 allocates trial forums — BNS offences to the High Court, Court of Session, or whichever court the First Schedule names; other-law offences to whatever court that law names, or, failing that, the same First Schedule route — with a distinctive new proviso requiring specified sexual-offence trials to be presided over by a woman judge as far as practicable. Sections 22 and 23 then cap sentencing power by rank: High Courts and Sessions Judges may pass any lawful sentence (subject to death-sentence confirmation), while Chief Judicial Magistrates, Magistrates of the first class, and Magistrates of the second class each face a hard ceiling, with the first-class and second-class ceilings including a codified "community service" option.
Get the forum wrong and the trial is void for want of jurisdiction; get the sentencing ceiling wrong and the sentence itself is liable to be set aside regardless of how sound the conviction is.
:::

::: story The Magistrate of the second class who tried to impose two years
A Magistrate of the second class convicts an accused of an offence carrying a maximum of three years' imprisonment under the substantive law, and — persuaded the facts are serious — sentences him to two years. Section 23(3) fixes the ceiling for a Magistrate of the second class at one year's imprisonment, a fine not exceeding ten thousand rupees, or both, or community service; it does not matter that the substantive offence itself permits a longer term, or that the Magistrate believed the facts warranted more. The sentence of two years is beyond the Magistrate's competence and is liable to be set aside as excessive on that ground alone, independent of any challenge to the conviction itself.
:::

### The Act, decompiled

::: proviso Section 21 — Courts by which offences are triable
"21. Subject to the other provisions of this Sanhita,—
(a) any offence under the Bharatiya Nyaya Sanhita, 2023 [[?may]] be tried by—
(i) the High Court; or
(ii) the Court of Session; or
(iii) any other Court by which such offence is shown in the First Schedule to be triable:
Provided that any offence under section 64, section 65, section 66, section 67, section 68, section 69, section 70 or section 71 of the Bharatiya Nyaya Sanhita, 2023 [[!shall]] be tried as far as practicable by a Court presided over by a woman;
(b) any offence under any other law [[!shall]], when any Court is mentioned in this behalf in such law, be tried by such Court and when no Court is so mentioned, [[?may]] be tried by—
(i) the High Court; or
(ii) any other Court by which such offence is shown in the First Schedule to be triable."
:::

::: proviso Section 22 — Sentences which High Courts and Sessions Judges may pass
"22. (1) A High Court [[?may]] pass any sentence authorised by law.
(2) A Sessions Judge or Additional Sessions Judge [[?may]] pass any sentence authorised by law; but any sentence of death passed by any such Judge [[!shall]] be subject to confirmation by the High Court."
:::

::: proviso Section 23 — Sentences which Magistrates may pass
"23. (1) The Court of a Chief Judicial Magistrate [[?may]] pass any sentence authorised by law except a sentence of death or of imprisonment for life or of imprisonment for a term exceeding seven years.
(2) The Court of a Magistrate of the first class [[?may]] pass a sentence of imprisonment for a term not exceeding three years, or of fine not exceeding fifty thousand rupees, or of both, or of community service.
(3) The Court of Magistrate of the second class [[?may]] pass a sentence of imprisonment for a term not exceeding one year, or of fine not exceeding ten thousand rupees, or of both, or of community service.
Explanation.—'Community service' shall mean the work which the Court may order a convict to perform as a form of punishment that benefits the community, for which he shall not be entitled to any remuneration."
:::

### How this actually runs

<MicroTree
  input="A conviction has been entered, or a trial forum needs to be identified. Which court can try the case, and what is the maximum sentence it can impose?"
  :gates="[
    { q: 'Is the offence charged one under the Bharatiya Nyaya Sanhita, 2023, as opposed to another law?', note: 'Section 21(a) applies: the High Court, the Court of Session, or the specific court the First Schedule names for that offence.', no: 'Section 21(b) applies: the specific court the other law names, or, if none, the same First Schedule route.' },
    { q: 'Is the offence one under section 64, 65, 66, 67, 68, 69, 70, or 71 of the Bharatiya Nyaya Sanhita, 2023?', note: 'The proviso to section 21(a) requires the trial to be presided over by a woman as far as practicable — confirm this was arranged or, if not, that practicability genuinely prevented it.', no: 'The proviso does not apply; the ordinary forum allocation under section 21 governs without the woman-presiding requirement.' },
    { q: 'Is the trial before a High Court or a Sessions Judge/Additional Sessions Judge?', note: 'Section 22 permits any lawful sentence, but a death sentence passed by a Sessions Judge or Additional Sessions Judge requires High Court confirmation before it can be executed.', no: 'The trial is before a Magistrate; sentencing power is capped by rank under section 23.' },
    { q: 'If before a Magistrate, which class — Chief Judicial Magistrate, first class, or second class?', note: 'Chief Judicial Magistrate: any sentence except death, life imprisonment, or imprisonment exceeding seven years. First class: up to three years, or a fine up to fifty thousand rupees, or both, or community service. Second class: up to one year, or a fine up to ten thousand rupees, or both, or community service.', no: 'Confirm the Magistrate’s class before assuming which of the three ceilings in section 23 applies.' }
  ]"
  result="Which court had jurisdiction to try the offence, whether the woman-presiding proviso to section 21(a) applied, and whether the sentence actually imposed falls within the ceiling the trying court's rank permits under section 22 or section 23, are each confirmed before a conviction and sentence are treated as sound."
  resultKind="mandatory"
  caveat="A sentence beyond the trying court's competence under section 23 is liable to be set aside as excessive independent of the soundness of the conviction itself — the two are separate grounds of challenge."
/>

### In plain English

Think of sections 21 to 23 as answering, in order, "where does this case go" and then "how hard can that forum hit." Section 21 is the forum-allocation rule: BNS offences default to the First Schedule's table (which names a specific class of court for most offences, with the High Court and Court of Session available as of right), other-law offences follow whatever that law itself says, and — new to this Sanhita — certain serious sexual offences must, as far as practicable, be tried by a woman judge. Sections 22 and 23 are the sentencing ceiling ladder: High Courts and Sessions Judges are essentially unlimited (subject to the built-in check that a death sentence needs High Court confirmation even when a Sessions Judge passed it), while the three Magistrate tiers — Chief Judicial Magistrate, first class, second class — each have a hard numeric ceiling on imprisonment and fine, with "community service" now an explicitly codified sentencing option for the first- and second-class tiers rather than something read in from elsewhere.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 21 through 23 are believed to correspond to CrPC sections 26, 28, and 29 respectively — the numbering gap reflects CrPC section 27's separate juvenile-jurisdiction provision, which BNSS does not carry forward in this Chapter given that juvenile matters are governed by the Juvenile Justice Act rather than the general criminal procedure code. This correspondence should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

Two changes stand out here. First, the proviso to section 21(a) — mandating, as far as practicable, a woman-presided trial for the specified Bharatiya Nyaya Sanhita sexual-offence sections — has no CrPC counterpart; it is a new procedural safeguard tied to the substantive offence list in the new penal code. Second, section 23's monetary fine ceilings for Magistrates are raised well above the CrPC's corresponding figures, and "community service" is now an explicit, named sentencing option for the first- and second-class Magistrate tiers rather than a punishment BNSS had to borrow interpretively from elsewhere — both changes should be checked against the exact superseded CrPC figures before being cited as the "old" position in argument.

### Test your instinct

:::: instinct The sexual-offence trial that proceeded before a male judge because no woman judge was posted
A trial under one of the specified Bharatiya Nyaya Sanhita sections falls to be heard in a court where, at the relevant time, no woman judge is posted at that station at all. The trial proceeds before the male judge who is posted there. The defence later argues the conviction is void for non-compliance with the proviso to section 21(a). Is the argument correct?

::: ruling
Likely no, given the proviso's own "as far as practicable" qualification. The requirement is not an absolute jurisdictional bar but a practicability-qualified direction — if no woman judge was genuinely available to hear the matter at that station, and the record reflects that unavailability rather than mere administrative convenience, the proviso's own terms accommodate the trial proceeding before the judge who was actually posted there. The stronger practitioner move is to test, on the specific facts, whether "as far as practicable" was genuinely satisfied — was a transfer to a station with a woman judge realistically available and simply not pursued? — rather than to argue the proviso is an unqualified rule admitting no exception.
:::
::::

:::: instinct The consecutive fine that exceeded the Magistrate's individual ceiling in total
A Magistrate of the first class convicts an accused of one offence and imposes the maximum available fine of fifty thousand rupees under section 23(2). The defence argues the sentence is invalid because the accused, a person of limited means, could never realistically pay that amount. Is the argument a valid challenge to the Magistrate's sentencing power under section 23?

::: ruling
No, not as a section 23 competence challenge. Section 23(2) fixes the outer ceiling the Magistrate may impose — up to fifty thousand rupees — and a Magistrate acting within that ceiling has not exceeded his sentencing power merely because the convict may struggle to pay. The accused's means may be a relevant mitigating factor going to how the sentencing discretion within the ceiling was exercised, and may bear on the default-imprisonment consequence under section 24, but it does not convert a within-ceiling fine into an excess-of-jurisdiction sentence the way exceeding the numeric or term ceiling itself would.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority confirming the precise scope of the "as far as practicable" qualification in the proviso to section 21(a), or addressing the raised monetary ceilings and codified community-service option in section 23, is confidently available for promotion here, given how recently this Sanhita has come into force. This should be treated as a research gap to fill with current authority before relying on a specific citation in drafting or argument.
:::

#### Sword and shield

As a sword: a prosecution relies on section 21 to establish the trying court had jurisdiction over the offence charged, and on sections 22-23 to defend a sentence as within the trying court's competence. As a shield: a defence advocate tests the forum allocation under section 21 as a threshold jurisdictional objection, separately tests any death sentence passed by a Sessions Judge for the mandatory High Court confirmation under section 22(2), and independently tests any Magistrate-passed sentence against the exact numeric ceilings in section 23 regardless of how sound the underlying conviction is.

#### The limitation clock

This cluster does not itself start a limitation clock; forum allocation and sentencing ceilings apply once a prosecution has already been validly launched. Limitation for the underlying offence runs under the provisions specifically governing limitation, not from sections 21 to 23.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Identifying the forum for a BNS offence | Section 21(a) | High Court, Court of Session, or the First Schedule's named court |
| Identifying the forum for an other-law offence | Section 21(b) | The court that other law names, or the First Schedule route if none is named |
| Trial of a specified sexual offence under the Bharatiya Nyaya Sanhita, 2023 | Proviso to section 21(a) | As far as practicable, presided over by a woman |
| Testing a death sentence passed by a Sessions Judge | Section 22(2) | Subject to mandatory High Court confirmation |
| Testing whether a Magistrate-passed sentence exceeds competence | Section 23 | Compare against the Chief Judicial Magistrate / first-class / second-class ceiling by rank |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Before filing, confirm the offence's First Schedule classification and the specific court it names — do not assume the Court of Session is always available as of right without checking whether the offence is one the First Schedule reserves to a Magistrate tier.
2. In a specified sexual-offence trial, build a contemporaneous record of whether a woman judge was practicably available, rather than leaving the point to be argued only after an adverse verdict.
3. When challenging a Magistrate-passed sentence, check the exact figure and term against section 23's numeric ceilings line by line — an excess in fine alone, even where the term is within limits, is independently challengeable.

**Timing.** Raise a forum-jurisdiction objection under section 21 at the earliest possible stage, ideally before the trial proceeds on the merits; raise a sentence-competence objection under section 23 at the sentencing stage itself or promptly in appeal, since it is a discrete, easily verified numeric comparison that does not benefit from being held back.

**Model checklist before sentencing or accepting a sentence:**

1. Confirm the trying court's jurisdiction over the offence under section 21, including the First Schedule classification.
2. For the specified sexual offences, confirm the record reflects whether a woman-presided trial was practicable and, if not, why.
3. For a death sentence passed by a Sessions Judge, confirm High Court confirmation has been obtained under section 22(2).
4. For any Magistrate-passed sentence, check the imprisonment term and fine amount against the exact ceiling for that Magistrate's class under section 23.

---

## Sections 24–25 — Default sentences for unpaid fines, and stacking punishments where one trial convicts of several offences

### The dispute this solves

::: oneminute Two sentencing mechanics questions recur constantly: what happens if a fine goes unpaid, and what happens when one trial convicts a person of several offences at once? Section 24 answers the first — a Magistrate may award imprisonment in default of fine payment, but that default term is itself capped, both by the Magistrate's own section 23 ceiling and by a one-fourth rule where a substantive imprisonment term has also been awarded. Section 25 answers the second — a court may sentence a person convicted of two or more offences at one trial to run the punishments concurrently or consecutively, but consecutive sentencing carries its own twin caps: an absolute twenty-year ceiling, and a rule that the aggregate cannot exceed twice what the court could impose for a single offence.
Both provisions exist to prevent a Magistrate's or court's numeric sentencing ceiling from being circumvented indirectly — through a default-fine term, or through stacking multiple convictions — in a way the direct sentencing ceiling itself would not permit.
:::

::: story The default-fine term that quietly exceeded the substantive sentence's own ceiling
A Magistrate of the second class convicts an accused and imposes the maximum substantive sentence of one year's imprisonment, plus a fine, with six months' imprisonment in default of payment of the fine. Section 24(1)(b)'s proviso caps a default-fine term, where a substantive imprisonment sentence has also been awarded, at one-fourth of the term the Magistrate is competent to inflict for the offence otherwise than as a default term — here, one-fourth of one year is three months. A default term of six months breaches that cap outright, regardless of whether the underlying fine itself was validly imposed within section 23(3)'s ceiling.
:::

### The Act, decompiled

::: proviso Section 24 — Sentence of imprisonment in default of fine
"24. (1) The Court of a Magistrate [[?may]] award such term of imprisonment in default of payment of fine as is authorised by law:
Provided that the term—
(a) is not in excess of the powers of the Magistrate under section 23;
(b) [[!shall]] not, where imprisonment has been awarded as part of the substantive sentence, exceed one-fourth of the term of imprisonment which the Magistrate is competent to inflict as punishment for the offence otherwise than as imprisonment in default of payment of the fine.
(2) The imprisonment awarded under this section [[?may]] be in addition to a substantive sentence of imprisonment for the maximum term awardable by the Magistrate under section 23."
:::

::: proviso Section 25 — Sentence in cases of conviction of several offences at one trial
"25. (1) When a person is convicted at one trial of two or more offences, the Court [[?may]], subject to the provisions of section 9 of the Bharatiya Nyaya Sanhita, 2023, sentence him for such offences, to the several punishments prescribed therefor which such Court is competent to inflict and the Court [[!shall]], considering the gravity of offences, order such punishments to run concurrently or consecutively.
(2) In the case of consecutive sentences, it [[!shall]] not be necessary for the Court by reason only of the aggregate punishment for the several offences being in excess of the punishment which it is competent to inflict on conviction of a single offence, to send the offender for trial before a higher Court:
Provided that—
(a) in no case [[!shall]] such person be sentenced to imprisonment for a longer period than twenty years;
(b) the aggregate punishment [[!shall]] not exceed twice the amount of punishment which the Court is competent to inflict for a single offence.
(3) For the purpose of appeal by a convicted person, the aggregate of the consecutive sentences passed against him under this section [[!shall]] be deemed to be a single sentence."
:::

### How this actually runs

<MicroTree
  input="A fine has gone unpaid, or a single trial has produced convictions on two or more offences. What sentencing limit governs?"
  :gates="[
    { q: 'Is imprisonment being awarded in default of payment of a fine under section 24?', note: 'Check two ceilings independently: the default term cannot exceed the Magistrate’s own section 23 competence, and, where a substantive imprisonment term was also awarded, the default term separately cannot exceed one-fourth of that substantive term.', no: 'Section 24 does not apply; assess the sentence under section 23 alone or, for multiple offences, under section 25.' },
    { q: 'Was a substantive imprisonment sentence also awarded alongside the fine?', note: 'The one-fourth cap in the proviso to section 24(1)(b) applies specifically in this situation — calculate one-fourth of the Magistrate’s competence for the offence, not one-fourth of the sentence actually imposed.', no: 'Only the general section 23 competence ceiling applies to the default term, without the additional one-fourth restriction.' },
    { q: 'Was the person convicted of two or more offences at one trial?', note: 'Section 25(1) lets the Court order the several sentences to run concurrently or consecutively, having regard to the gravity of the offences.', no: 'Section 25 does not apply; a single-offence conviction is sentenced under section 22 or section 23 alone.' },
    { q: 'If the sentences are ordered to run consecutively, does the aggregate exceed twenty years, or exceed twice what the Court could impose for a single offence?', note: 'Both caps in the proviso to section 25(2) apply independently — breaching either one, even while satisfying the other, makes the aggregate consecutive sentence excessive.', no: 'The consecutive sentence is within the section 25(2) ceiling; for appeal purposes, section 25(3) treats the aggregate as a single sentence.' }
  ]"
  result="Whether a default-fine imprisonment term stays within both the Magistrate's own competence and, where relevant, the one-fourth cap, and whether a consecutive-sentence aggregate stays within both the twenty-year ceiling and the twice-single-offence ceiling, are each confirmed before treating a sentence for an unpaid fine or multiple convictions as sound."
  resultKind="mandatory"
  caveat="The two caps in each provision — section 23 competence and the one-fourth rule under section 24; the twenty-year ceiling and the twice-single-offence rule under section 25 — are cumulative, independent restrictions. Satisfying one does not excuse a breach of the other."
/>

### In plain English

Section 24 stops a Magistrate from using a default-fine term to smuggle in more imprisonment than the Magistrate could otherwise impose. There are two independent checks: the default term itself cannot exceed what section 23 lets the Magistrate impose at all, and, if a substantive prison term has also been handed down, the default term separately cannot exceed a quarter of that substantive term — a deliberately tight limit meant to keep the default-fine mechanism a genuine fallback rather than a second sentence in disguise. Section 25 deals with the very different situation of one trial producing several convictions. The court gets real discretion — it can run the punishments together (concurrently) or one after another (consecutively), guided by how serious the offences are, and it does not need to kick the case up to a higher court just because the total, added up, exceeds what it could impose for any one offence alone. But that discretion is not unlimited: no one goes to prison for more than twenty years under this mechanism, and the total cannot exceed double what the court could impose for a single offence, whichever of the two caps bites first.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 24 and 25 are believed to correspond to CrPC sections 30 and 31 respectively, carrying forward the same default-fine and consecutive-sentencing mechanics in substance, including the twenty-year and twice-single-offence caps. This correspondence should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

The substantive mechanics of both sections track the CrPC closely. The main point worth flagging for practitioners moving from CrPC practice is indirect rather than textual: section 25(1)'s cross-reference is now to section 9 of the Bharatiya Nyaya Sanhita, 2023 (the new penal code's own provision on punishment for multiple offences arising from the same act or series of acts), not to the corresponding Indian Penal Code provision — the substantive interlock has moved, even where the procedural mechanics have not.

### Test your instinct

:::: instinct The default-fine term calculated as one-fourth of the sentence actually imposed, not the Magistrate's competence
A Magistrate of the first class, competent to impose up to three years under section 23(2), actually sentences an accused to one year's substantive imprisonment (a lenient sentence relative to his own ceiling) plus a fine, with a default term calculated as one-fourth of that one-year substantive sentence — three months. The defence argues the default term should instead be calculated as one-fourth of the Magistrate's full three-year competence, i.e., nine months, and that the Magistrate under-utilised his own sentencing power. Is the defence's calculation the correct reading of the proviso to section 24(1)(b)?

::: ruling
No — and the error here actually favours the accused, not the reverse. The proviso to section 24(1)(b) caps the default term at one-fourth of "the term of imprisonment which the Magistrate is competent to inflict as punishment for the offence otherwise than as imprisonment in default of payment of the fine" — read together with section 24(1)(a)'s separate requirement that the default term not exceed the Magistrate's powers under section 23, the better view is that the one-fourth calculation runs off the Magistrate's own maximum competence for that offence under section 23, not the lower substantive sentence actually chosen in that case. On this reading the Magistrate's nine-month cap (one-fourth of three years) is the correct outer limit, and a default term of three months is comfortably within it — the defence's proposed nine-month figure would, if anything, permit a longer default term than the three months actually imposed, not a shorter one.
:::
::::

:::: instinct The consecutive sentence that stayed under twenty years but still exceeded the doubling cap
A Court of Session convicts a person of three offences at one trial, each carrying a maximum sentence of six years, and orders the sentences to run consecutively for a total of eighteen years — under the twenty-year ceiling in the proviso to section 25(2)(a). The defence argues the sentence is still excessive. Is the defence correct?

::: ruling
Possibly yes, depending on the court's competence for a single offence. The proviso to section 25(2) imposes two independent caps, not one: clause (a)'s twenty-year absolute ceiling, and clause (b)'s rule that the aggregate cannot exceed twice the punishment the court is competent to inflict for a single offence. If the court's competence for a single one of these offences is six years, twice that is twelve years — and an eighteen-year aggregate breaches clause (b) even though it comfortably clears clause (a)'s twenty-year mark. Staying under one cap does not cure a breach of the other; both must be satisfied.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority on the precise base figure for the one-fourth calculation under the proviso to section 24(1)(b), or on the interaction between the two independent caps in the proviso to section 25(2), is confidently available for promotion here. This should be treated as a research gap to fill with current authority before relying on a specific citation in drafting or argument.
:::

#### Sword and shield

As a sword: a prosecution defends a default-fine term or a consecutive sentence by showing both applicable caps were independently respected. As a shield: a defence advocate recalculates both caps independently for any default-fine term or consecutive sentence — the one-fourth rule and section 23 competence for section 24; the twenty-year ceiling and the twice-single-offence rule for section 25 — since a sentence that clears one cap can still be vulnerable on the other.

#### The limitation clock

This cluster governs sentencing mechanics after conviction; it does not itself start any limitation clock for the underlying prosecution.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Calculating a default-fine imprisonment term | Section 24(1) and proviso | Capped by the Magistrate's section 23 competence, and separately by one-fourth of the substantive term where one was awarded |
| Substantive and default terms awarded together | Section 24(2) | The default term may be additional to the maximum substantive term the Magistrate could award |
| Sentencing after conviction of multiple offences at one trial | Section 25(1) | Concurrent or consecutive, per the court's discretion on gravity, subject to section 9 of the Bharatiya Nyaya Sanhita, 2023 |
| Consecutive sentencing exceeding single-offence competence | Section 25(2) and proviso | Capped at twenty years absolute, and separately at twice the single-offence competence |
| Appeal against an aggregate consecutive sentence | Section 25(3) | Treated as a single sentence for appeal purposes |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. When computing a default-fine term, run both caps independently — the Magistrate's section 23 competence and, where a substantive term was also awarded, the one-fourth rule — rather than assuming clearing one automatically clears the other.
2. When challenging a consecutive sentence, run both the twenty-year ceiling and the twice-single-offence ceiling under the proviso to section 25(2) separately; a sentence within one cap can still fail the other.
3. Check which substantive provision (section 9 of the Bharatiya Nyaya Sanhita, 2023) actually governs the multiple-offence sentencing question before assuming a CrPC-era Indian Penal Code cross-reference still applies.

**Timing.** Raise a default-term or aggregate-sentence miscalculation at the sentencing stage itself where possible — these are numeric, mechanically verifiable errors that are best caught before the sentence is executed rather than litigated afterward.

**Model checklist before accepting a default-fine or consecutive sentence:**

1. For a default-fine term, confirm it does not exceed the Magistrate's section 23 competence.
2. Where a substantive term was also awarded, separately confirm the default term does not exceed one-fourth of that competence.
3. For a consecutive sentence, confirm the aggregate does not exceed twenty years.
4. Separately confirm the aggregate does not exceed twice the court's competence for a single one of the offences involved.

---

## Sections 26–29 — How courts confer, transfer, and withdraw statutory powers, and who exercises them when a Judge or Magistrate moves on

### The dispute this solves

::: oneminute This cluster is the administrative plumbing behind every other power in the Sanhita — how a power gets conferred on a named person or office in the first place, what happens to that power when the person is promoted, how it can be withdrawn, and who steps into a Judge's or Magistrate's shoes when he is no longer available. Section 26 fixes how the High Court or State Government confers powers — by name or by office — and when that conferral takes effect. Section 27 is a continuity rule: an officer invested with powers throughout a local area who is promoted to an equal or higher office within the same local area keeps exercising the same powers unless directed otherwise. Section 28 is the mirror-image withdrawal power. Section 29 answers who exercises a Judge's or Magistrate's powers when there is doubt about who his successor-in-office actually is.
The practical stakes: an order passed by someone whose power was never validly conferred, was withdrawn, or had lapsed on a transfer without the section 27 continuity rule applying, is an order passed without jurisdiction — a first-line challenge available in any proceeding.
:::

::: story The officer transferred to a higher post in a different district who kept signing orders under his old powers
An officer invested with powers throughout a local area is promoted to an equal-or-higher office, but in a different district — not "a like local area under the same State Government" as section 27 requires. He continues signing orders under the powers he held in his old post, assuming the promotion carried them forward automatically. Section 27's continuity rule applies only where the new office is of the same nature, within a like local area, under the same State Government; a cross-district promotion to a materially different post falls outside that narrow continuity rule entirely. Any order he signs relying on the old conferral, without a fresh conferral covering the new post, is vulnerable to challenge as passed without power.
:::

### The Act, decompiled

::: proviso Section 26 — Mode of conferring powers
"26. (1) In conferring powers under this Sanhita, the High Court or the State Government, as the case may be, [[?may]], by order, empower persons specially by name or in virtue of their offices or classes of officials generally be their official titles.
(2) Every such order [[!shall]] take effect from the date on which it is communicated to the person so empowered."
:::

::: proviso Section 27 — Powers of officers appointed
"27. Whenever any person holding an office in the service of Government who has been invested by the High Court or the State Government with any powers under this Sanhita throughout any local area is appointed to an equal or higher office of the same nature, within a like local area under the same State Government, he [[!shall]], unless the High Court or the State Government, as the case may be, otherwise directs, or has otherwise directed, exercise the same powers in the local area in which he is so appointed."
:::

::: proviso Section 28 — Withdrawal of powers
"28. (1) The High Court or the State Government, as the case may be, [[?may]] withdraw all or any of the powers conferred by it under this Sanhita on any person or by any officer subordinate to it.
(2) Any powers conferred by the Chief Judicial Magistrate or by the District Magistrate [[?may]] be withdrawn by the respective Magistrate by whom such powers were conferred."
:::

::: proviso Section 29 — Powers of Judges and Magistrates exercisable by their successors
"29. (1) Subject to the other provisions of this Sanhita, the powers and duties of a Judge or Magistrate [[?may]] be exercised or performed by his successor-in-office.
(2) When there is any doubt as to who is the successor-in-office, the Sessions Judge [[!shall]] determine by order in writing the Judge who [[!shall]], for the purposes of this Sanhita or of any proceedings or order thereunder, be deemed to be the successor-in-office.
(3) When there is any doubt as to who is the successor-in-office of any Magistrate, the Chief Judicial Magistrate, or the District Magistrate, as the case may be, [[!shall]] determine by order in writing the Magistrate who [[!shall]], for the purpose of this Sanhita or of any proceedings or order thereunder, be deemed to be the successor-in-office of such Magistrate."
:::

### How this actually runs

<MicroTree
  input="An order has been passed by someone exercising a power under the Sanhita. Was that power validly held at the time?"
  :gates="[
    { q: 'Was the power originally conferred by an order of the High Court or State Government under section 26, naming the person or his office?', note: 'Confirm the order was communicated to the person — section 26(2) makes communication, not merely the date of the order, the point at which it takes effect.', no: 'No valid conferral exists under section 26; check instead whether the power arises directly from another Sanhita provision without needing a section 26 conferral.' },
    { q: 'Has the person since been promoted to an equal or higher office of the same nature, in a like local area, under the same State Government?', note: 'Section 27’s continuity rule preserves the same powers in the new post automatically, unless the High Court or State Government has directed otherwise.', no: 'If promoted to a materially different post, a different local area, or under a different State Government, section 27 does not apply — a fresh conferral is needed for the new post.' },
    { q: 'Has the conferring authority — the High Court, State Government, Chief Judicial Magistrate, or District Magistrate, as applicable — withdrawn the power under section 28?', note: 'Only the specific authority that conferred the power (or, under section 28(1), the High Court/State Government over any subordinate officer) may withdraw it — check who actually conferred it before assuming who may withdraw it.', no: 'The power remains conferred unless some other basis for its lapse applies.' },
    { q: 'Is there doubt about who the successor-in-office actually is, following the original Judge or Magistrate leaving the post?', note: 'Section 29(2) routes the determination to the Sessions Judge for a Judge’s successor; section 29(3) routes it to the Chief Judicial Magistrate or District Magistrate, as applicable, for a Magistrate’s successor — by order in writing.', no: 'Section 29(1) applies directly: the successor-in-office exercises the predecessor’s powers and duties without needing a separate determination.' }
  ]"
  result="Whether the power was validly conferred and communicated under section 26, whether any promotion falls within section 27's narrow continuity rule, whether the conferring authority withdrew the power under section 28, and whether any doubt about a successor-in-office was resolved under section 29, are each confirmed before treating an order as validly within the power of the officer who passed it."
  resultKind="mandatory"
  caveat="Section 27's continuity rule is narrow — same nature of office, like local area, same State Government — and does not extend automatically to every promotion or transfer; do not assume powers travel with an officer to a materially different post."
/>

### In plain English

These four sections are about the mechanics of power itself, separate from who is competent in the abstract to hold a given power. Section 26 says powers get conferred by a formal order — naming a person or an office — and that order only bites once it has actually been communicated to the person, not from whatever earlier date the order happens to be signed. Section 27 is a narrow continuity rule for a common real-world event: an officer gets promoted. If the promotion is to an equal or higher post of the same kind, in a similarly-sized area, under the same State Government, his old powers simply carry over to the new post automatically — no need for a fresh conferral — unless the High Court or State Government has specifically said otherwise. Section 28 is the mirror image: whoever conferred a power can take it back, and a Chief Judicial Magistrate or District Magistrate specifically can withdraw only what he himself conferred, not what someone else conferred. Section 29 handles the very ordinary situation of a Judge or Magistrate being unavailable — his successor generally just steps into his shoes, and if it is genuinely unclear who that successor actually is, the Sessions Judge (for Judges) or the Chief Judicial Magistrate or District Magistrate (for Magistrates) resolves that doubt by a written order.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 26 through 29 are believed to correspond to CrPC sections 32 through 35 respectively, carrying forward the same conferral, continuity, withdrawal, and successor-in-office mechanics in substance. This correspondence should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

This administrative machinery tracks the CrPC closely, with no structural change of the kind seen in the Metropolitan Magistrate abolition elsewhere in this Chapter's earlier clusters. Practitioners moving from CrPC practice should be able to rely on prior interpretive learning on conferral, continuity, withdrawal, and successorship largely without adjustment, subject to the ordinary caution of confirming the exact renumbering.

### Test your instinct

:::: instinct The power conferred by order but never actually communicated
The High Court signs an order conferring specific powers on a named Judicial Magistrate, dated the first of the month. Before the order is communicated to the Magistrate, he purports to exercise the conferred power in a matter arising on the fifth of the month, having heard informally through a colleague that the order had been signed. Was the power validly exercised?

::: ruling
No, on a plain reading of section 26(2). The order "shall take effect from the date on which it is communicated to the person so empowered" — not the date it was signed. Informal knowledge gained through a colleague is not communication of the order to the person in the sense section 26(2) contemplates; the statute ties legal effect specifically to communication to the empowered person. Until that formal communication occurs, the Magistrate does not hold the power, regardless of when the order was actually signed or how he came to hear of it.
:::
::::

:::: instinct The District Magistrate attempting to withdraw a power the Chief Judicial Magistrate had conferred
A District Magistrate purports to withdraw a power that had originally been conferred on a Magistrate not by the District Magistrate himself, but by the Chief Judicial Magistrate under a separate conferral. Is the withdrawal valid?

::: ruling
No. Section 28(2) is precise: powers conferred by the Chief Judicial Magistrate may be withdrawn only by "the respective Magistrate by whom such powers were conferred" — meaning the Chief Judicial Magistrate, in this case, not the District Magistrate. The District Magistrate has no general authority under section 28(2) to withdraw a power he did not himself confer; withdrawal authority tracks conferral authority precisely, not office seniority generally. The District Magistrate's purported withdrawal is accordingly without effect.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority on the precise communication requirement under section 26(2), or on the narrow scope of the same-nature/like-local-area continuity rule under section 27, is confidently available for promotion here. This should be treated as a research gap to fill with current authority before relying on a specific citation in drafting or argument.
:::

#### Sword and shield

As a sword: a party relying on an officer's order establishes the chain — valid conferral and communication under section 26, continuity under section 27 if the officer has since been promoted or transferred, and no withdrawal under section 28. As a shield: a party challenging an officer's order tests each link in that same chain independently — was the power actually communicated, does any promotion genuinely fall within section 27's narrow continuity conditions, and was the power withdrawn by someone with authority to withdraw it under section 28.

#### The limitation clock

This cluster governs the administrative validity of a power's holder; it does not itself start any limitation clock for the underlying proceeding in which the power was exercised.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Confirming a power was validly conferred | Section 26 | Order by name or office, effective from communication to the person, not the date of signing |
| Officer promoted or transferred | Section 27 | Powers continue automatically only if same nature of office, like local area, same State Government, absent a contrary direction |
| Testing whether a power was withdrawn | Section 28 | Only the authority that conferred it (or the High Court/State Government generally) may withdraw it |
| Doubt about who exercises a departed Judge's or Magistrate's powers | Section 29 | Successor-in-office exercises them; genuine doubt is resolved by written order of the Sessions Judge, Chief Judicial Magistrate, or District Magistrate as applicable |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Before relying on an officer's order, confirm not just that a conferral order exists but that it was actually communicated to him — the effective date is communication, not signature.
2. On any promotion or transfer, test section 27's continuity rule against all three of its conditions — same nature of office, like local area, same State Government — rather than assuming powers travel with the person as a matter of course.
3. When challenging a withdrawal of power, confirm the withdrawing authority is the same authority (or a properly authorised superior authority under section 28(1)) that originally conferred the power.

**Timing.** Raise a want-of-power challenge as a threshold jurisdictional objection at the earliest opportunity in the proceeding — like the forum and sentencing-competence challenges earlier in this Chapter, this goes to the validity of the order itself and is best not held back until after an adverse outcome.

**Model checklist before relying on an officer's exercise of a Sanhita power:**

1. Confirm a valid conferral order exists under section 26 and was communicated to the officer before the date of the act in question.
2. If the officer has been promoted or transferred since conferral, test the move against all three conditions of section 27's continuity rule.
3. Confirm the power has not been withdrawn under section 28 by the authority that actually conferred it.
4. If the original Judge or Magistrate is unavailable, confirm the person purporting to act is genuinely the successor-in-office, or that any doubt was resolved under section 29(2) or (3).

---
