# Chapter XXXVIII — Limitation for Taking Cognizance of Certain Offences

## Sections 513–514 — What counts as the period of limitation, and the graduated bar it places on taking cognizance

### The dispute this solves

::: oneminute Not every offence can be prosecuted forever — for a defined band of less serious offences, the Sanhita builds in a hard deadline on when a court may even take cognizance at all, separate from anything to do with the merits of the case. Section 513 is a short definitions clause fixing what "period of limitation" means for the whole chapter — it is whatever section 514 specifies. Section 514 does the actual work: except where the Sanhita itself provides otherwise, no court can take cognizance of an offence in the specified category after the period of limitation has expired, and the period itself is graduated purely by the maximum punishment the offence carries — six months for a fine-only offence, one year for an offence punishable with imprisonment up to one year, three years for an offence punishable with imprisonment exceeding one year but not exceeding three years. Offences punishable with more than three years' imprisonment fall outside this chapter's limitation scheme entirely. Where offences that may be tried together carry different maximum punishments, the whole group's limitation period is set by whichever offence carries the most severe punishment, and the clock's reference date is fixed by an Explanation to run from either the date of filing a complaint under section 223 or the date of recording information under section 173, as the case may be.
:::

::: story A fine-only offence prosecuted after seven months
An offence punishable with fine only is committed, and the relevant date for computing limitation — the date of recording information under section 173 — falls seven months before a complaint is finally filed. Because a fine-only offence carries a six-month period of limitation under section 514(2)(a), and no exception under the Sanhita is shown to apply, section 514(1) bars the court from taking cognizance at all — the case is time-barred before the merits are ever reached. In a separate case, two offences are triable together against the same accused arising from the same transaction — one punishable with a fine only, the other punishable with imprisonment for two years. Section 514(3) does not let the accused pick the shorter, six-month period for the whole prosecution; the limitation period for the joint trial is fixed by the more severely punishable offence, giving the prosecution the benefit of the three-year period under section 514(2)(c) for the whole group.
:::

### The Act, decompiled

::: proviso Section 513 — Definitions
"513. For the purposes of this Chapter, unless the context otherwise requires, 'period of limitation' means the period specified in section 514 for taking cognizance of an offence."
:::

::: proviso Section 514 — Bar to taking cognizance after lapse of period of limitation
"514. (1) Except as otherwise provided in this Sanhita, no Court [[!shall]] take cognizance of an offence of the category specified in sub-section (2), after the expiry of the period of limitation.
(2) The period of limitation [[!shall]] be—
(a) six months, if the offence is punishable with fine only;
(b) one year, if the offence is punishable with imprisonment for a term not exceeding one year;
(c) three years, if the offence is punishable with imprisonment for a term exceeding one year but not exceeding three years.
(3) For the purposes of this section, the period of limitation, in relation to offences which may be tried together, [[!shall]] be determined with reference to the offence which is punishable with the more severe punishment or, as the case may be, the most severe punishment.
Explanation.—For the purpose of computing the period of limitation, the relevant date [[!shall]] be the date of filing complaint under section 223 or the date of recording of information under section 173."
:::

### How this actually runs

<MicroTree
  input="A court is deciding whether it can still take cognizance of an offence, and needs to know whether the period of limitation under this chapter has expired."
  :gates="[
    { q: 'Does the offence carry a maximum punishment exceeding three years imprisonment, or does some other provision of the Sanhita say this chapters limitation scheme does not apply?', no: 'Move to the next gate to identify which of the three graduated periods governs' },
    { q: 'Is the offence being tried together with one or more other offences carrying a different maximum punishment?', no: 'The limitation period is fixed directly by that single offences own punishment band under section 514(2)' },
    { q: 'If tried together, has the limitation period for the whole group been fixed by reference to whichever offence in the group carries the most severe punishment, rather than the least severe?', no: 'Section 514(3) requires the more severe or most severe offences period to govern the entire group, not a shorter period some other offence in the group might otherwise carry' },
    { q: 'Counting from the relevant date fixed by the Explanation to section 514 -- the date of filing complaint under section 223, or the date of recording information under section 173, as applicable -- has the applicable period (six months, one year, or three years) already expired?', no: 'Cognizance can still be taken; the period has not yet run out' }
  ]"
  result="An offence carrying more than three years imprisonment falls outside this chapters bar altogether. Within the chapters scope, the applicable period is six months, one year, or three years depending on the maximum punishment, with the most severely punishable offence in a joint trial controlling the whole groups clock, counted from the section-223 complaint date or the section-173 information-recording date."
  resultKind="mandatory"
  caveat="Section 514(1) opens with an express carve-out for anything the Sanhita itself provides otherwise -- a specific provision elsewhere setting a different period, or dispensing with one entirely, displaces the graduated scheme in section 514(2) for that particular offence, so the general scheme should never be applied without first checking for such a specific override."
/>

### In plain English

Section 513 is easy to skim past, but it matters because it tells you the phrase "period of limitation" throughout this whole chapter is not a free-floating concept — it means exactly what section 514 says and nothing more. Section 514 itself is where the real content sits: for a defined band of less serious offences (up to three years' imprisonment, or fine-only), the Sanhita puts a hard clock on the prosecution's ability to even get the case started, regardless of how strong the evidence might be. The clock length scales with how serious the offence is — six months for the least serious band, up to three years for the most serious band the chapter still covers. The one twist worth internalising is the joint-trial rule: if several offences with different punishment bands are being tried together, you do not get to argue for the shortest applicable period just because one of the offences in the mix happens to carry it — the whole prosecution gets however long the single most severely punishable offence in the group would get on its own.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 513–514 are provisionally mapped to CrPC sections 467–468 (CrPC Chapter XXXVI, "Limitation for Taking Cognizance of Certain Offences"). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The definitional structure and the three-tier graduated period in section 514(2) track the presumed CrPC scheme closely. The Explanation fixing the relevant date by reference to "section 223" (complaint filing) and "section 173" (recording of information) uses BNSS-specific cross-references that replace whatever the equivalent CrPC provisions were — each must be independently confirmed rather than assumed to correspond numerically, since a wrong cross-reference here would misstate the very date from which the limitation clock is computed.

### Test your instinct

:::: instinct An offence punishable with imprisonment for two years is prosecuted, and the complaint is filed two years and two months after the relevant date. The prosecution argues the offence is not time-barred because it does not fall in the shortest, six-month band. Is that argument correct?

::: ruling No, but for a different reason than the prosecution thinks. The offence falls in the three-year band under section 514(2)(c), since it is punishable with imprisonment exceeding one year but not exceeding three years. Two years and two months is within that three-year period, so the prosecution is right that cognizance is not barred -- but the reasoning has to track the correct band the offence actually falls in, not simply the observation that it is not the shortest band.
:::
::::

:::: instinct Two offences are tried together: one punishable with imprisonment for six months, the other punishable with imprisonment for three years. The defence argues the six-month offence should be time-barred after six months even though the joint trial as a whole continues. Does section 514(3) support that argument?

::: ruling No. Section 514(3) fixes the limitation period for offences tried together by reference to whichever offence carries the more severe or most severe punishment -- here, the three-year offence. The six-month offences own individual band does not control when it is being tried jointly with a more severely punishable offence; the whole group gets the three-year period.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 513–514 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial body of limitation case law under the presumed predecessor sections remains conceptually relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before being pleaded.
:::

#### Sword and shield

As a shield, section 514 is the defence's first line of attack against a stale prosecution for a lower-band offence — a limitation objection, if it holds up, disposes of the case without any inquiry into guilt at all. As a sword for the prosecution, section 514(3)'s joint-trial rule is worth invoking affirmatively wherever multiple offences of differing severity are being tried together, since it can rescue an otherwise time-barred lesser offence by anchoring the whole prosecution's clock to a more serious co-offence.

#### The limitation clock

This entire cluster is the limitation clock — six months, one year, or three years depending on the punishment band, running from the relevant date fixed by the Explanation, and controlled by the most severe offence where several are tried together.

#### Interlocking matrix

Section 514's relevant-date Explanation interlocks directly with section 223 (complaint filing) and section 173 (recording of information) — an advocate computing limitation must be certain which of the two dates actually applies to the case at hand. It also interlocks with sections 515 and 516 later in this chapter, which respectively govern when the clock starts and what stretches of time do not count against it.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

When raising a limitation objection under section 514, plead the specific punishment band and the specific relevant date relied on explicitly — a bare assertion that the prosecution is time-barred, without identifying which sub-clause of section 514(2) applies and which relevant-date trigger under the Explanation governs, invites the court to simply ask the advocate to be more precise rather than rule on the merits. When resisting such an objection in a joint-trial scenario, always check whether a co-offence in the same trial carries a longer period before conceding the point.

## Sections 515–516 — When the clock starts running, and the stretches of time that do not count against it

### The dispute this solves

::: oneminute Section 514 fixes how long the limitation period is; sections 515 and 516 fix when it starts and what does not count against it. Section 515 sets the commencement date itself, and it is not always simply the date of the offence — where the offence's commission was unknown to the aggrieved person or to any police officer, the clock starts from the first day it comes to either one's knowledge; where the offender's identity itself was unknown, the clock starts from the first day that identity became known to the aggrieved person or the investigating police officer, whichever is earlier. Section 516 then lists four distinct categories of time that get excluded from the running clock regardless of when it started: time spent diligently prosecuting another good-faith proceeding on the same facts in a court that could not entertain it for want of jurisdiction or similar cause; time during which an injunction or order stayed the institution of the prosecution; time consumed by a required notice of prosecution or by obtaining government or other authority consent or sanction; and time during which the offender was absent from India (or from Central Government-administered territory outside India) or was absconding or concealing himself to avoid arrest.
:::

::: story An offender whose identity was unknown for a year
An offence is committed, but for a full year afterward neither the aggrieved person nor the investigating police officer knows who committed it. On the day the offender's identity finally becomes known to the police officer, section 515(1)(c) fixes that day — not the date of the offence itself — as the day the limitation clock starts running. In a separate case, a complainant diligently prosecutes a case in good faith in a court that turns out to lack jurisdiction over it, then promptly refiles in the correct court once that defect is discovered. Section 516(1) excludes the entire time spent in the first, jurisdictionally defective prosecution from the limitation computation for the second — the complainant is not penalised for the honest mistake, provided the proviso's good-faith and same-facts conditions are met.
:::

### The Act, decompiled

::: proviso Section 515 — Commencement of period of limitation
"515. (1) The period of limitation, in relation to an offender, [[!shall]] commence,—
(a) on the date of the offence; or
(b) where the commission of the offence was not known to the person aggrieved by the offence or to any police officer, the first day on which such offence comes to the knowledge of such person or to any police officer, whichever is earlier; or
(c) where it is not known by whom the offence was committed, the first day on which the identity of the offender is known to the person aggrieved by the offence or to the police officer making investigation into the offence, whichever is earlier.
(2) In computing the said period, the day from which such period is to be computed [[!shall]] be excluded."
:::

::: proviso Section 516 — Exclusion of time in certain cases
"516. (1) In computing the period of limitation, the time during which any person has been prosecuting with due diligence another prosecution, whether in a Court of first instance or in a Court of appeal or revision, against the offender, [[!shall]] be excluded:
Provided that no such exclusion [[!shall]] be made unless the prosecution relates to the same facts and is prosecuted in good faith in a Court which from defect of jurisdiction or other cause of a like nature, is unable to entertain it.
(2) Where the institution of the prosecution in respect of an offence has been stayed by an injunction or order, then, in computing the period of limitation, the period of the continuance of the injunction or order, the day on which it was issued or made, and the day on which it was withdrawn, [[!shall]] be excluded.
(3) Where notice of prosecution for an offence has been given, or where, under any law for the time being in force, the previous consent or sanction of the Government or any other authority is required for the institution of any prosecution for an offence, then, in computing the period of limitation, the period of such notice or, as the case may be, the time required for obtaining such consent or sanction [[!shall]] be excluded.
Explanation.—In computing the time required for obtaining the consent or sanction of the Government or any other authority, the date on which the application was made for obtaining the consent or sanction and the date of receipt of the order of the Government or other authority [[!shall]] both be excluded.
(4) In computing the period of limitation, the time during which the offender—
(a) has been absent from India or from any territory outside India which is under the administration of the Central Government; or
(b) has avoided arrest by absconding or concealing himself,
[[!shall]] be excluded."
:::

### How this actually runs

<MicroTree
  input="A party needs to fix the date the limitation clock started under section 515, and then determine whether any stretch of time between that start date and today should be excluded under section 516 before deciding whether the period has actually run out."
  :gates="[
    { q: 'Was the commission of the offence known to the person aggrieved or to any police officer from the outset, with the offenders identity also known?', no: 'The clock commences later than the date of the offence itself -- move to the next gate to fix exactly when' },
    { q: 'If the commission of the offence itself was unknown, has the first day it came to the knowledge of the aggrieved person or any police officer, whichever is earlier, been identified as the commencement date?', no: 'Section 515(1)(b) fixes commencement at that first-knowledge date, not the offence date' },
    { q: 'If instead only the offenders identity was unknown, has the first day that identity became known to the aggrieved person or the investigating police officer, whichever is earlier, been identified as the commencement date?', no: 'Section 515(1)(c) fixes commencement at that first-identity-known date' },
    { q: 'Between the commencement date and now, is there any stretch of time falling into one of the four section 516 categories -- a diligent good-faith prosecution on the same facts in a jurisdictionally defective court, a stay by injunction or order, time consumed by a required notice or consent/sanction process, or time the offender spent absent from India or evading arrest?', no: 'No exclusion applies; the full elapsed time since commencement counts toward the period of limitation' }
  ]"
  result="The limitation clock commences on the offence date only where both the offence and the offenders identity were known from the outset; otherwise it commences on the later date fixed by section 515(1)(b) or (c). Any time falling within one of the four section 516 categories is then excluded from the computation, meaning the true elapsed time counted against the period can be considerably shorter than the calendar time that has actually passed."
  resultKind="mandatory"
  caveat="The section 516(1) proviso is a genuine trap for a party invoking the due-diligence exclusion -- it only rescues time spent in a prosecution that was in good faith, on the same facts, and defeated specifically by a jurisdictional or like defect; a prosecution abandoned for other reasons, or pursued on different facts, gets no exclusion under this sub-section at all."
/>

### In plain English

These two sections work as a pair: section 515 answers "when does the stopwatch start," and section 516 answers "which stretches of time do not count even after it has started." The default start date is simply the date of the offence, but the Sanhita recognises that limitation should not run against someone who genuinely could not have known a crime happened, or could not have known who did it — in either of those situations, the clock waits until the relevant knowledge actually arrives. Once the clock is running, section 516 then carves out four specific categories of "dead time" that get subtracted before you ask whether the period has expired: an honest but jurisdictionally misdirected earlier prosecution, a court-ordered stay on starting the prosecution, the bureaucratic time needed for a required notice or official sanction, and any period the offender spent dodging the law by leaving the country or hiding. The practical upshot is that "how much time has passed since the offence" and "how much time counts against the limitation period" are frequently two very different numbers, and getting the second number right requires working through both sections in sequence.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 515–516 are provisionally mapped to CrPC sections 469–470 (CrPC Chapter XXXVI, "Limitation for Taking Cognizance of Certain Offences"). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The commencement rules in section 515 and the four-category exclusion scheme in section 516, including the due-diligence proviso, the injunction-stay exclusion, the notice/sanction exclusion with its own Explanation, and the absence/absconding exclusion, all track the presumed CrPC scheme closely and appear to carry forward with no substantive change beyond renumbering. As with every provisional mapping in this chapter, the section numbers themselves must be independently verified before being relied upon in a filing.

### Test your instinct

:::: instinct An accused was absent from India for eight months during the limitation period, then returned. The defence argues that the eight months should still count toward the limitation period because the offence itself was committed and known well before the accused left the country. Is the defence right?

::: ruling No. Section 516(4)(a) requires the time during which the offender was absent from India (or from Central Government-administered territory outside India) to be excluded from the computation of the limitation period, regardless of when the offence was committed or discovered. The eight months abroad do not count against the running clock.
:::
::::

:::: instinct A complainant prosecuted a case in good faith in a court that, it later emerged, lacked territorial jurisdiction, but the complainant had in fact been pursuing a slightly different set of facts than those now alleged in the fresh prosecution. The complainant seeks to exclude the time spent in the first prosecution under section 516(1). Should that exclusion be allowed?

::: ruling No, as put. The proviso to section 516(1) requires the earlier prosecution to relate to the same facts as the present one, in addition to being pursued in good faith and defeated by a jurisdictional or like defect. A prosecution on a materially different set of facts does not satisfy the same-facts condition, and the exclusion would not be available on those facts alone.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 515–516 of the BNSS is cited here, given the recency of the numbering. The CrPC's established case law on limitation commencement and exclusion of time remains conceptually relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before being pleaded.
:::

#### Sword and shield

For the defence, section 515's knowledge-based commencement rules are worth scrutinising closely in any case where the prosecution argues a late commencement date — the burden of establishing exactly when knowledge of the offence or the offender's identity actually arrived sits naturally with whichever side benefits from that later date, and a vague assertion should be tested. For the prosecution, section 516 is the primary sword for rescuing an apparently time-barred case — each of the four exclusion categories should be checked systematically before conceding that a prosecution is out of time.

#### The limitation clock

Section 515 fixes the start of the clock itself; section 516 is entirely about what does not count once the clock has started. Neither section fixes an independent limitation period of its own — both operate on the period already fixed by section 514.

#### Interlocking matrix

Section 516(3)'s notice/sanction exclusion interlocks with whatever specific provision of the Sanhita or other law actually requires prior notice or government/authority sanction for the particular offence being prosecuted — the exclusion is only as good as an accurate identification of that underlying requirement and the actual dates the notice or sanction process took.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

When invoking a section 516 exclusion, plead each category's specific factual conditions separately and with exact dates — for the due-diligence exclusion, plead the same-facts and good-faith elements expressly rather than assuming they are self-evident; for the notice/sanction exclusion, plead the exact date of application and the exact date of receipt of the order, since the Explanation excludes both bookend dates specifically. A limitation computation that skips straight to a final number without showing the sub-section-by-sub-section arithmetic invites the court to redo the computation itself, often to the pleading party's disadvantage.

## Sections 517–519 — Court-closed days, continuing offences, and the residual power to excuse a late cognizance

### The dispute this solves

::: oneminute The chapter's final three provisions round out the limitation scheme with a mechanical rule, a special-case rule, and a safety valve. Section 517 handles the narrow mechanical problem of a limitation period expiring on a day the court happens to be closed — cognizance can still be taken the day the court reopens, with an Explanation defining closure by reference to the court remaining closed during its normal working hours on that day. Section 518 addresses continuing offences specifically: rather than one clock running from a single moment, a fresh period of limitation begins to run at every moment during which the offence continues, so a continuing offence effectively never goes fully time-barred while it continues. Section 519 is the broadest of the three and sits above everything else in the chapter — notwithstanding any of the foregoing provisions, any court may take cognizance of an offence even after the period of limitation has expired, provided it is satisfied the delay has been properly explained or that taking cognizance despite the delay is necessary in the interests of justice.
:::

::: story A complaint filed the day the court reopens after a holiday closure
The period of limitation for an offence expires on a public holiday when the court is closed for the entire day during its normal working hours. The complainant files the next working day, the day the court reopens. Section 517 expressly permits the court to take cognizance on that reopening day despite the technical expiry falling on the closed day, and the Explanation confirms the court counts as closed for this purpose because it remained shut throughout its normal working hours on the expiry date itself. In a separate case, a prosecution is filed eight months after an offence that would ordinarily carry a six-month limitation period, and no specific exclusion under sections 515 or 516 applies. The prosecution instead invokes section 519, satisfying the court that a specific, genuine reason accounts for the two-month delay and that taking cognizance despite the delay serves the interests of justice. Section 519 lets the court take cognizance on that footing even though the ordinary period has already run out, because it operates notwithstanding everything that comes before it in the chapter.
:::

### The Act, decompiled

::: proviso Section 517 — Exclusion of date on which Court is closed
"517. Where the period of limitation expires on a day when the Court is closed, the Court [[?may]] take cognizance on the day on which the Court reopens.
Explanation.—A Court [[!shall]] be deemed to be closed on any day within the meaning of this section, if, during its normal working hours, it remains closed on that day."
:::

::: proviso Section 518 — Continuing offence
"518. In the case of a continuing offence, a fresh period of limitation [[!shall]] begin to run at every moment of the time during which the offence continues."
:::

::: proviso Section 519 — Extension of period of limitation in certain cases
"519. Notwithstanding anything contained in the foregoing provisions of this Chapter, any Court [[?may]] take cognizance of an offence after the expiry of the period of limitation, if it is satisfied on the facts and in the circumstances of the case that the delay has been properly explained or that it is necessary so to do in the interests of justice."
:::

### How this actually runs

<MicroTree
  input="The ordinary period of limitation appears to have expired, and a party wants to know whether cognizance can still be taken on some basis recognised elsewhere in this chapter."
  :gates="[
    { q: 'Did the period of limitation expire specifically on a day the court was closed throughout its normal working hours?', no: 'Section 517 does not apply -- move to the next gate' },
    { q: 'Is the offence instead a continuing offence, one that keeps being committed rather than being complete at a single moment?', no: 'Section 518 does not apply -- move to the final gate' },
    { q: 'Has the party seeking cognizance despite the expiry shown either that the delay has been properly explained, or that taking cognizance despite the delay is necessary in the interests of justice, to the courts satisfaction?', no: 'Section 519 provides no automatic rescue -- without one of those two showings, the expired period stands as a bar' }
  ]"
  result="A period expiring on a closed court-day is cured simply by taking cognizance on the reopening day. A continuing offence effectively resets its own clock at every moment it continues, so an expiry argument against it needs to identify the specific moment the offence is treated as having ceased. Failing both of those, section 519 is the residual safety valve, but it is not automatic -- it requires an affirmative court finding of properly explained delay or a genuine interests-of-justice necessity."
  resultKind="discretionary"
  caveat="Section 519 opens with the word notwithstanding, meaning it overrides everything else in the chapter including the graduated periods in section 514 and the exclusions in section 516 -- but that override is entirely discretionary and fact-dependent, and a party relying on it should not treat it as a routine fallback available for the asking."
/>

### In plain English

Section 517 solves a purely mechanical problem — nobody should lose a prosecution just because the deadline happened to fall on a day the courthouse doors were locked, so the clock effectively pauses until the next working day. Section 518 solves a conceptual problem specific to offences that are not a single instant but an ongoing state of affairs — if the wrong keeps happening, it does not make sense to freeze the limitation clock at the very first moment it started, so the Sanhita instead treats every continuing moment as generating its own fresh clock. Section 519 is the most powerful and the most different of the three: it is a general escape hatch that lets a court take cognizance of an otherwise time-barred offence at all, but only where the court is genuinely satisfied either that there is a real explanation for the delay or that justice actually requires overlooking it — this is a discretionary judicial call, not a right the prosecution can simply invoke to erase an inconvenient limitation problem.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 517–519 are provisionally mapped to CrPC sections 471–473 (CrPC Chapter XXXVI, "Limitation for Taking Cognizance of Certain Offences"). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The court-closed-day rule, the continuing-offence rule, and the notwithstanding-clause condonation power in section 519 all track the presumed CrPC scheme closely and read as continuations rather than BNSS-original creations. Practitioners should note that section 519's discretionary condonation power is the provision most likely to be actively litigated in practice, since its two triggers — properly explained delay, or the interests of justice — are inherently fact-sensitive standards rather than bright-line rules, and any settled CrPC-era case law interpreting those same standards should be independently re-verified against the BNSS's renumbering before being cited.

### Test your instinct

:::: instinct The period of limitation for an offence expires on a Sunday, and the court's normal working days do not include Sundays. The complainant files the complaint on the following Monday, the first working day. Is cognizance barred because the expiry date itself fell before the filing?

::: ruling No. Section 517 permits the court to take cognizance on the day it reopens where the period of limitation expires on a day the court is closed, and the Explanation confirms a court is deemed closed on any day it remains shut throughout its normal working hours. A Sunday on which the court does not sit qualifies, and the Monday filing on the reopening day is not barred on this ground.
:::
::::

:::: instinct A prosecution is filed after the ordinary limitation period has expired, and the only justification offered is that the investigating officer was occupied with other case files during the relevant period, without any further specific explanation. The prosecution asks the court to invoke section 519 on this basis alone. Should the court treat this as sufficient?

::: ruling Not necessarily, and a bare, generic assertion of being occupied with other work is unlikely to satisfy either of section 519's two triggers on its own. Section 519 requires the court to be actually satisfied, on the facts and circumstances of the case, that the delay has been properly explained or that cognizance despite the delay is necessary in the interests of justice -- a vague, unparticularised reason for delay invites the court to scrutinise the explanation rather than accept it automatically, and the prosecution bears the burden of making a genuine, fact-specific showing.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 517–519 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial case law on condonation of delay in taking cognizance, developed under the presumed predecessor provision, remains conceptually relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before being pleaded.
:::

#### Sword and shield

Section 517 and section 518 are largely mechanical and rarely contested on their own terms — the live battleground in this cluster is section 519, which functions as a sword for the prosecution seeking to rescue an apparently time-barred case, and correspondingly as a shield for the defence resisting that rescue by attacking the sufficiency of the explanation offered or the genuineness of the interests-of-justice claim.

#### The limitation clock

Section 517 is a narrow, one-day mechanical adjustment to the clock. Section 518 is a structural feature of how the clock applies to continuing offences at all. Section 519 does not adjust the clock itself — it overrides the consequence of the clock having already run out, on a discretionary and fact-specific basis.

#### Interlocking matrix

Section 519's interests-of-justice standard interlocks conceptually with the same standard used throughout the Sanhita in other discretionary contexts, and a persuasive section 519 application typically benefits from drawing on how courts have approached that standard elsewhere, subject to the same independent-verification discipline as every other cross-reference in this chapter.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

When invoking section 517, simply plead the closure fact and the reopening date — this is a mechanical point that rarely needs more. When invoking section 518 for a continuing offence, plead specifically why the offence is continuing in nature rather than a completed, single-moment act, since that characterisation is itself often the real fight. When invoking section 519, build a genuinely particularised explanation for the delay — specific dates, specific obstacles, specific reasons the delay could not have been avoided — rather than a generic plea of oversight or workload, since the provision requires the court's actual satisfaction on the facts of the case, not a formulaic recitation.
