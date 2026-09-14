# Chapter XXXI — Appeals

## Sections 413–417 — The bar on appeals, the victim's new right, and who may not appeal at all

### The dispute this solves

::: oneminute Not every order a criminal court makes can be appealed — appeal is a creature of statute, not an inherent right, and this cluster is where that principle is stated and then immediately qualified. Section 413 opens with the bar: no appeal lies from any judgment or order of a Criminal Court except as this Sanhita or some other law provides — but its proviso creates a genuinely new right, letting a victim appeal against an acquittal, a conviction for a lesser offence, or inadequate compensation, using the same appellate route as an appeal against conviction. Section 414 gives a narrow appeal right to a person ordered to furnish a peace/good-behaviour security, or refused a surety, routing that appeal to the Court of Session. Section 415 is the map of which appellate forum a convicted person goes to, depending on which court convicted them and how severe the sentence was — with a new, specific six-month disposal deadline for appeals arising from certain Bharatiya Nyaya Sanhita sexual-offence convictions. Sections 416 and 417 are the two carve-outs that cut the other way: no appeal at all (or a sharply narrowed one) after a guilty plea, and no appeal at all for genuinely petty sentences.
:::

::: story A victim's appeal against a compensation order that looked generous on paper
A trial court convicts an accused of a lesser offence than the one actually charged, and separately orders a modest sum in compensation to the complainant. Under the old scheme, the complainant-victim's options to challenge either the lesser-offence conviction or the compensation amount were limited and indirect. Section 413's proviso changes this directly: the victim now has an explicit statutory right to appeal against precisely this combination — an order convicting for a lesser offence, or imposing inadequate compensation — using the same appellate route that would apply to an appeal against a conviction by that court. Meanwhile, in an unrelated case, a person convicted on a trial before a Sessions Judge is sentenced to nine years' imprisonment; under section 415(2), because the sentence exceeds seven years, the appeal goes to the High Court rather than being routed anywhere else. And in a third case, an accused pleads guilty before a Magistrate of the first class and is convicted on that plea and fined — section 416(ii) closes off an appeal against the conviction itself, but not against the extent or legality of the sentence, which the accused may still challenge.
:::

### The Act, decompiled

::: proviso Section 413 — No appeal to lie unless otherwise provided

"413. No appeal [[!shall]] lie from any judgment or order of a Criminal Court except as provided for by this Sanhita or by any other law for the time being in force:
Provided that the victim [[!shall]] have a right to prefer an appeal against any order passed by the Court acquitting the accused or convicting for a lesser offence or imposing inadequate compensation, and such appeal [[!shall]] lie to the Court to which an appeal ordinarily lies against the order of conviction of such Court."
:::

::: proviso Section 414 — Appeal from orders requiring security or refusal to accept or rejecting surety for keeping peace or good behaviour

"414. Any person,—
(i) who has been ordered under section 136 to give security for keeping the peace or for good behaviour; or
(ii) who is aggrieved by any order refusing to accept or rejecting a surety under section 140,
[[?may]] appeal against such order to the Court of Session:
Provided that nothing in this section [[!shall]] apply to persons the proceedings against whom are laid before a Sessions Judge in accordance with the provisions of sub-section (2) or sub-section (4) of section 141."
:::

::: proviso Section 415 — Appeals from convictions

"415. (1) Any person convicted on a trial held by a High Court in its extraordinary original criminal jurisdiction [[?may]] appeal to the Supreme Court.
(2) Any person convicted on a trial held by a Sessions Judge or an Additional Sessions Judge or on a trial held by any other Court in which a sentence of imprisonment for more than seven years has been passed against him or against any other person convicted at the same trial, [[?may]] appeal to the High Court.
(3) Save as otherwise provided in sub-section (2), any person,—
(a) convicted on a trial held by Magistrate of the first class, or of the second class; or
(b) sentenced under section 364; or
(c) in respect of whom an order has been made or a sentence has been passed under section 401 by any Magistrate,
[[?may]] appeal to the Court of Session.
(4) When an appeal has been filed against a sentence passed under section 64, section 65, section 66, section 67, section 68, section 70 or section 71 of the Bharatiya Nyaya Sanhita, 2023, the appeal [[!shall]] be disposed of within a period of six months from the date of filing of such appeal."
:::

::: proviso Section 416 — No appeal in certain cases when accused pleads guilty

"416. Notwithstanding anything in section 415, where an accused person has pleaded guilty and has been convicted on such plea, there [[!shall]] be no appeal,—
(i) if the conviction is by a High Court; or
(ii) if the conviction is by a Court of Session or Magistrate of the first or second class, except as to the extent or legality of the sentence."
:::

::: proviso Section 417 — No appeal in petty cases

"417. Notwithstanding anything in section 415, there [[!shall]] be no appeal by a convicted person in any of the following cases, namely:—
(a) where a High Court passes only a sentence of imprisonment for a term not exceeding three months or of fine not exceeding one thousand rupees, or of both such imprisonment and fine;
(b) where a Court of Session passes only a sentence of imprisonment for a term not exceeding three months or of fine not exceeding two hundred rupees, or of both such imprisonment and fine;
(c) where a Magistrate of the first class passes only a sentence of fine not exceeding one hundred rupees; or
(d) where, in a case tried summarily, a Magistrate empowered to act under section 283 passes only a sentence of fine not exceeding two hundred rupees:
Provided that an appeal [[?may]] be brought against any such sentence if any other punishment is combined with it, but such sentence [[!shall]] not be appealable merely on the ground—
(i) that the person convicted is ordered to furnish security to keep the peace; or
(ii) that a direction for imprisonment in default of payment of fine is included in the sentence; or
(iii) that more than one sentence of fine is passed in the case, if the total amount of fine imposed does not exceed the amount hereinbefore specified in respect of the case."
:::

### How this actually runs

<MicroTree
  input="A person wants to know whether an appeal lies against a particular criminal court order or conviction, and if so, to which forum."
  :gates="[
    { q: 'Does some provision of the Sanhita, or another law, actually create an appeal right for this order (section 413) -- or is this a victim seeking to appeal an acquittal, lesser-offence conviction, or inadequate compensation order under the section 413 proviso?', no: 'No appeal lies at all -- section 413 bars it outright, subject only to the victim proviso' },
    { q: 'Did the accused plead guilty and get convicted on that plea?', no: 'Section 416 does not bar the appeal; move to sections 415 and 417 to determine forum and whether a petty-case bar applies' },
    { q: 'Does the case fall within one of section 417 petty-sentence categories, with no other punishment combined and no qualifying excluded ground?', no: 'Section 417 does not bar the appeal; determine the correct forum under section 415' },
    { q: 'Applying section 415, does the forum turn out to be the Supreme Court, the High Court, or the Court of Session based on the convicting court and sentence length?', no: 'Re-check section 415(1)-(3) against the specific convicting court and sentence -- the forum is not discretionary once the facts are established' }
  ]"
  result="An appeal lies only where section 413 (including its victim proviso) actually creates the right, is not barred by section 416's guilty-plea rule or section 417's petty-case rule, and is then routed to the specific forum -- Supreme Court, High Court, or Court of Session -- that section 415 assigns based on the convicting court and the sentence imposed."
  resultKind="mandatory"
  caveat="Section 416's guilty-plea bar and section 417's petty-case bar are worded as absolute exclusions ('there shall be no appeal'), not discretionary limits -- but section 416(ii) and section 417's proviso both carve out a narrower surviving right to challenge the extent or legality of the sentence, which is easy to overlook when reading only the headline bar."
/>

### In plain English

Appeal is not automatic — section 413 says so bluntly, and everything else in this cluster is either a grant of a specific appeal right or a specific bar on one. The genuinely new piece is the victim's proviso in section 413: a victim is no longer limited to watching from the sidelines when the accused is acquitted, convicted of something lesser than charged, or given what looks like an inadequate compensation order — they can now appeal that themselves, through the same route a conviction appeal would take. Section 414 gives a narrower right to someone made to furnish a peace bond or refused a surety. Section 415 is essentially a routing table: extraordinary High Court trials go up to the Supreme Court, Sessions trials or anything with a sentence over seven years go to the High Court, and everything else (ordinary Magistrate convictions, certain specific sections) goes to the Court of Session — with a strict six-month appeal-disposal clock for a specific set of serious sexual-offence sentences. Sections 416 and 417 then narrow the field from the other direction: plead guilty, and you generally cannot appeal the conviction itself (though you can still challenge the sentence); get a genuinely minor sentence, and you generally cannot appeal at all.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 413–417 are provisionally mapped to CrPC sections 372–376 (CrPC Chapter XXIX, "Appeals"). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The victim's appeal right in section 413's proviso reads as a continuation of a provision inserted into the CrPC by amendment (the 2009 proviso to CrPC section 372) rather than a BNSS-original creation — but this lineage, and the exact scope of what the CrPC's amended provision covered versus what section 413's proviso now covers, should be independently verified rather than assumed identical. Section 415(4)'s six-month appeal-disposal deadline for the listed Bharatiya Nyaya Sanhita sexual-offence sentences reads as a genuine BNSS-era timeline addition, consistent with the Sanhita's broader pattern of building statutory deadlines into provisions that previously had none. Re-verify each specific numbering pair, and the sexual-offence section list itself, independently before relying on this comparison in submissions.

### Test your instinct

:::: instinct A victim wishes to appeal a trial court's order acquitting the accused, but the Public Prosecutor has separately decided not to pursue a State appeal against the same acquittal under section 419. Does the victim need the State's cooperation, or a State appeal to already be pending, before exercising the section 413 proviso right?

::: ruling No. Section 413's proviso creates the victim's appeal right independently of section 419 -- it is not conditioned on the State Government, the Central Government, or the Public Prosecutor also choosing to appeal, or on any such appeal being pending. The victim's right and the State's right under section 419 are two separate, freestanding routes to challenge an acquittal, and a decision by the prosecuting authority not to appeal does not extinguish or limit the victim's own statutory right under section 413's proviso.
:::
::::

:::: instinct An accused is convicted by a Magistrate of the first class after pleading guilty and is sentenced to six months' imprisonment. The accused wants to argue on appeal both that six months is excessive and that the underlying facts did not actually amount to the offence pleaded to. Can both arguments be raised on appeal?

::: ruling Only the first. Section 416(ii) bars an appeal against a conviction following a guilty plea before a Court of Session or a Magistrate of the first or second class, except as to the extent or legality of the sentence -- so the six-months-is-excessive argument is squarely within the surviving right and may be raised. The second argument -- that the facts did not amount to the offence -- is an attack on the conviction itself, which is precisely what section 416(ii) bars once a guilty plea has been entered and accepted. The accused's remedy for a genuinely improvident or involuntary guilty plea, if any, lies in challenging the plea's validity through other means, not in an ordinary section 415 appeal against the conviction.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 413–417 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial case law on the scope of the victim's appeal proviso, the guilty-plea bar, and the petty-case bar remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded in any court.
:::

#### Sword and shield

For a **victim**, section 413's proviso is worth invoking as a matter of course whenever an acquittal, a lesser-offence conviction, or an inadequate compensation order results -- do not assume the State's own appellate decision under section 418 or section 419 forecloses or substitutes for this independent right. For the **defence**, sections 416 and 417 are worth checking immediately whenever a client has pleaded guilty or received a genuinely minor sentence, since an appeal filed without regard to these bars risks summary rejection -- but the surviving right to challenge sentence extent or legality under section 416(ii) and section 417's proviso should not be overlooked merely because the headline bar applies. For the **prosecution**, section 415(4)'s six-month disposal clock on specified sexual-offence sentence appeals is worth flagging early to the appellate registry, since it is a statutory deadline rather than a target.

#### The limitation clock

Section 415(4) imposes a hard six-month disposal deadline (not a filing deadline) for appeals against sentences passed under the listed Bharatiya Nyaya Sanhita sexual-offence provisions, running from the date of filing. This cluster does not itself specify the filing-limitation period for an ordinary appeal under section 413/415 -- that period is governed by the general limitation framework for appeals under this Sanhita and should be checked separately rather than assumed from this cluster alone.

#### Interlocking matrix

- **Sections 418–421 (this Chapter, cluster 2)** — the State, Central Government, and complainant appeal rights against sentence-inadequacy and acquittal, which sit alongside (not instead of) the victim's section 413 proviso right.
- **Sections 136, 140, 141 (Chapter IX)** — the security-for-peace and surety provisions that section 414's appeal right operates against; confirm the current numbering of the security-proceedings chapter before citing.
- **Sections 364, 401, 283** — the specific provisions that route particular convictions or orders to the Court of Session under section 415(3), or that engage the summary-trial fine cap under section 417(d); each should be independently checked against its own chapter.
- **Bharatiya Nyaya Sanhita, 2023, sections 64, 65, 66, 67, 68, 70, 71** — the specific sexual-offence provisions whose sentence appeals attract section 415(4)'s six-month disposal deadline.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- Before filing any appeal, run the client's facts through sections 416 and 417 first -- a guilty-plea conviction or a genuinely petty sentence can foreclose the appeal (or narrow it to sentence-only) before the forum question in section 415 even becomes relevant.
- For a victim considering an appeal under section 413's proviso, draft the appeal to squarely target one of the three named grounds -- acquittal, lesser-offence conviction, or inadequate compensation -- rather than attempting to raise it as a general grievance appeal, since the proviso's right is scoped to those three categories.
- Where a section 415(4) sexual-offence sentence appeal is filed, calendar the six-month disposal deadline immediately and raise it proactively with the registry if the matter is not being listed with appropriate urgency.
- When advising on a guilty-plea conviction, be precise with the client about the narrow surviving right under section 416(ii) -- it covers the extent or legality of the sentence, not the underlying facts or the validity of the plea itself, and conflating the two risks a wasted appeal.

---

## Sections 418–421 — State and Central appeals against inadequate sentences and acquittals, the complainant's special leave route, and the right that survives a joint trial

### The dispute this solves

::: oneminute Sections 413-417 dealt with the convicted person's appeal rights (and their limits). This cluster flips to the other side: when the State, the Central Government, or even a private complainant thinks a sentence was too lenient or an acquittal was wrong, what can they do about it? Section 418 lets the State Government direct the Public Prosecutor to appeal a sentence as inadequate, with a parallel power for the Central Government where a Central agency investigated the offence -- but any such appeal comes with a due-process safeguard: the accused gets a chance to show cause before any enhancement. Section 419 is the mirror provision for acquittals, again split between District Magistrate/State Government and Central Government tracks, and it adds a further route for a private complainant to seek special leave to appeal an acquittal directly, on a strict limitation clock. Section 420 gives a further Supreme Court appeal right specifically where the High Court itself reversed an acquittal and imposed a serious sentence. Section 421 is a short but important guarantee: in a multi-accused trial, one person's appeal right is not swallowed up by what happens to the others.
:::

::: story A State appeal for inadequacy, and a complainant's race against a sixty-day clock
A Magistrate convicts an accused of a cognizable, non-bailable offence but imposes what the State considers an unduly lenient sentence. Under section 418(1)(a), the State Government may direct the Public Prosecutor to appeal that sentence to the Court of Session on the ground of inadequacy -- but section 418(3) means the accused must first be given a reasonable opportunity to show cause against any enhancement, and may use that opportunity to argue for acquittal or a further reduction rather than simply defending the existing sentence. In a separate case instituted on a private complaint, the accused is acquitted entirely. The complainant is not a public servant, so under section 419(5) the complainant has only sixty days from the date of the acquittal order to apply to the High Court for special leave to appeal under section 419(4) -- miss that window, and section 419(6) closes the door: a refusal of special leave (or a failure to timely seek it) means no appeal from that acquittal lies at all, regardless of how strong the complainant's case might otherwise be.
:::

### The Act, decompiled

::: proviso Section 418 — Appeal by State Government against sentence

"418. (1) Save as otherwise provided in sub-section (2), the State Government [[?may]], in any case of conviction on a trial held by any Court other than a High Court, direct the Public Prosecutor to present an appeal against the sentence on the ground of its inadequacy—
(a) to the Court of Session, if the sentence is passed by the Magistrate; and
(b) to the High Court, if the sentence is passed by any other Court.
(2) If such conviction is in a case in which the offence has been investigated by any agency empowered to make investigation into an offence under any Central Act other than this Sanhita, the Central Government [[?may]] also direct the Public Prosecutor to present an appeal against the sentence on the ground of its inadequacy—
(a) to the Court of Session, if the sentence is passed by the Magistrate; and
(b) to the High Court, if the sentence is passed by any other Court.
(3) When an appeal has been filed against the sentence on the ground of its inadequacy, the Court of Session or, as the case may be, the High Court [[!shall]] not enhance the sentence except after giving to the accused a reasonable opportunity of showing cause against such enhancement and while showing cause, the accused [[?may]] plead for his acquittal or for the reduction of the sentence.
(4) When an appeal has been filed against a sentence passed under section 64, section 65, section 66, section 67, section 68, section 70 or section 71 of the Bharatiya Nyaya Sanhita, 2023, the appeal [[!shall]] be disposed of within a period of six months from the date of filing of such appeal."
:::

::: proviso Section 419 — Appeal in case of acquittal

"419. (1) Save as otherwise provided in sub-section (2), and subject to the provisions of sub-sections (3) and (5),—
(a) the District Magistrate [[?may]], in any case, direct the Public Prosecutor to present an appeal to the Court of Session from an order of acquittal passed by a Magistrate in respect of a cognizable and non-bailable offence;
(b) the State Government [[?may]], in any case, direct the Public Prosecutor to present an appeal to the High Court from an original or appellate order of acquittal passed by any Court other than a High Court not being an order under clause (a) or an order of acquittal passed by the Court of Session in revision.
(2) If such an order of acquittal is passed in a case in which the offence has been investigated by any agency empowered to make investigation into an offence under any Central Act other than this Sanhita, the Central Government [[?may]], subject to the provisions of sub-section (3), also direct the Public Prosecutor to present an appeal—
(a) to the Court of Session, from an order of acquittal passed by a Magistrate in respect of a cognizable and non-bailable offence;
(b) to the High Court from an original or appellate order of an acquittal passed by any Court other than a High Court not being an order under clause (a) or an order of acquittal passed by the Court of Session in revision.
(3) No appeal to the High Court under sub-section (1) or sub-section (2) [[!shall]] be entertained except with the leave of the High Court.
(4) If such an order of acquittal is passed in any case instituted upon complaint and the High Court, on an application made to it by the complainant in this behalf, grants special leave to appeal from the order of acquittal, the complainant [[?may]] present such an appeal to the High Court.
(5) No application under sub-section (4) for the grant of special leave to appeal from an order of acquittal [[!shall]] be entertained by the High Court after the expiry of six months, where the complainant is a public servant, and sixty days in every other case, computed from the date of that order of acquittal.
(6) If, in any case, the application under sub-section (4) for the grant of special leave to appeal from an order of acquittal is refused, no appeal from that order of acquittal [[!shall]] lie under sub-section (1) or under sub-section (2)."
:::

::: proviso Section 420 — Appeal against conviction by High Court in certain cases

"420. Where the High Court has, on appeal, reversed an order of acquittal of an accused person and convicted him and sentenced him to death or to imprisonment for life or to imprisonment for a term of ten years or more, he [[?may]] appeal to the Supreme Court."
:::

::: proviso Section 421 — Special right of appeal in certain cases

"421. Notwithstanding anything in this Chapter, when more persons than one are convicted in one trial, and an appealable judgment or order has been passed in respect of any of such persons, all or any of the persons convicted at such trial [[!shall]] have a right of appeal."
:::

### How this actually runs

<MicroTree
  input="A State, the Central Government, or a private complainant is dissatisfied with a sentence as inadequate, or with an acquittal, and is considering an appeal."
  :gates="[
    { q: 'Is the challenge to the adequacy of a sentence (section 418), rather than to an acquittal (section 419)?', no: 'Move to section 419 -- this is an acquittal-appeal question, not a sentence-inadequacy question' },
    { q: 'For a section 418 sentence-inadequacy appeal, has the accused been given a reasonable opportunity to show cause before any enhancement is actually ordered?', no: 'Section 418(3) has not been satisfied -- no enhancement may be ordered yet, regardless of how the appeal otherwise proceeds' },
    { q: 'For a section 419 acquittal appeal, is the appeal being brought by the District Magistrate/State Government (or Central Government under section 419(2)), rather than by the private complainant under section 419(4)?', no: 'The complainant route applies instead -- special leave under section 419(4) must be sought, and sub-section (5)\'s strict sixty-day/six-month clock (from the date of acquittal) governs' },
    { q: 'Where the High Court itself reversed an acquittal and imposed death, life imprisonment, or ten years or more, is a further Supreme Court appeal under section 420 being considered?', no: 'Section 420 is not engaged; whatever appeal rights apply are exhausted at the High Court stage on this specific route' }
  ]"
  result="A State or Central appeal against sentence-inadequacy proceeds under section 418 with a mandatory show-cause safeguard before enhancement; a State, Central, or complainant appeal against an acquittal proceeds under section 419's layered scheme, with the complainant route gated by a strict, non-extendable limitation clock; and a further Supreme Court appeal lies under section 420 only where the High Court itself reversed an acquittal and imposed a sentence at or above the named thresholds -- with section 421 guaranteeing that none of this is diluted for a co-accused merely because they were tried jointly with others."
  resultKind="mandatory"
  caveat="Section 419(6) is an absolute bar, not a discretionary one -- a refused (or never-timely-sought) special leave application forecloses any further appeal from that acquittal under sub-sections (1) or (2) as well, not merely under sub-section (4); a complainant's missed sixty-day window can therefore extinguish the State's own appeal avenue on the same acquittal if the State has not independently and separately acted."
/>

### In plain English

This cluster is about who can push back when the prosecution side thinks a court got it wrong -- either by going too soft on sentencing or by acquitting outright. Section 418 lets the State (or, where a Central agency investigated, the Central Government) direct an appeal against an inadequate sentence, but builds in real due process: the accused must be given a chance to argue against any enhancement, and can use that same chance to argue for acquittal or an even lower sentence. Section 419 is the more elaborate scheme for acquittals -- a District Magistrate or State Government can direct an appeal in the ordinary run of cases, the Central Government has a parallel track for Central-agency-investigated offences, and a private complainant has their own separate route, but only by first obtaining the High Court's special leave, and only within a strict window: six months if the complainant is a public servant, sixty days otherwise. Miss that window, or get refused, and the door closes -- not just for the complainant's own appeal, but for any acquittal appeal on those facts. Section 420 gives a further right to go to the Supreme Court in the specific, serious scenario where the High Court itself flipped an acquittal into a death sentence, life imprisonment, or ten-plus years. And section 421 is the quiet but important guarantee running underneath all of this: being tried alongside other people does not shrink your own individual appeal rights.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 418–421 are provisionally mapped to CrPC sections 377–380 (CrPC Chapter XXIX). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The Central Government's parallel appeal power in sections 418(2) and 419(2), tied specifically to offences investigated by a Central agency, reads as a continuation of a similar mechanism already present in the CrPC scheme rather than a BNSS-original addition -- but the precise conditions and any refinements should be independently checked. Section 418(4)'s six-month disposal deadline for the listed sexual-offence sentence appeals is, as in the previous cluster, a plausible BNSS-era timeline addition. Nothing else in this cluster's extracted text signals a further substantive departure. Re-verify each specific numbering pair independently before citing it in submissions.

### Test your instinct

:::: instinct A private complainant applies for special leave to appeal an acquittal under section 419(4) but files the application on the seventy-fifth day after the order of acquittal, believing (incorrectly) that the complainant qualifies as a public servant and therefore has six months. The complainant is, in fact, not a public servant. Can the High Court still entertain the application?

::: ruling No. Section 419(5) is drafted as an absolute bar -- "no application... shall be entertained by the High Court after the expiry of... sixty days in every other case" -- with no discretion built in for genuine mistake about the complainant's status, and no general condonation-of-delay mechanism referenced in the section's own text. A complainant who is not a public servant and applies after sixty days from the date of the order of acquittal has applied out of time, regardless of a good-faith but mistaken belief about eligibility for the longer six-month period. The practical lesson is that complainant's counsel must verify the applicable limitation period at the very outset, since the sixty-day default applies to "every other case" and the six-month period is the narrow exception, not the norm.
:::
::::

:::: instinct Two co-accused are convicted at a joint trial. One of them files a timely appeal; the other, for reasons unrelated to the merits, does not file within the ordinary limitation period and is told by counsel that the appeal is now time-barred. Does section 421 revive the second co-accused's appeal right merely because the first co-accused's appeal is proceeding?

::: ruling No. Section 421 guarantees that "all or any of the persons convicted at such trial shall have a right of appeal" -- it protects each co-accused's appeal right from being treated as merged into or dependent on what happens to the others, but it does not itself create an exception to ordinary limitation rules, and it does not automatically extend or revive a right that has already lapsed through the second co-accused's own failure to file in time. The second co-accused's appeal right existed independently under section 421 from the outset; what has actually happened is that this independent right has separately become time-barred through inaction, which is a limitation problem, not a section 421 problem. Any remedy would have to come through whatever condonation-of-delay mechanism applies to the appeal generally, not through section 421 itself.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 418–421 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial case law on State appeals against sentence inadequacy, and particularly on the strict, non-extendable limitation periods for complainant special-leave applications against acquittals, remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For the **accused** facing a section 418 sentence-inadequacy appeal, the show-cause opportunity under section 418(3) is not a formality -- it is the moment to argue affirmatively for acquittal or a reduced sentence, not merely to defend the status quo. For a **private complainant**, the section 419(5) clock is the single most important fact to establish immediately after an acquittal -- confirm at once whether the complainant is a public servant (six months) or not (sixty days), and treat the shorter period as the operating assumption unless public-servant status is clearly established. For the **State or Central Government**, section 419(3)'s leave requirement for a High Court appeal means the leave application itself needs to be drafted with the same care as the substantive appeal, since a refusal at the leave stage forecloses the appeal entirely.

#### The limitation clock

Section 419(5) is the sharpest clock in this cluster: sixty days from the date of the order of acquittal for an ordinary complainant, six months for a public-servant complainant, with no condonation mechanism referenced in the section itself. Section 418(4) separately imposes a six-month disposal deadline (not filing deadline) for appeals against the listed Bharatiya Nyaya Sanhita sexual-offence sentences. Section 419(6)'s consequence for a refused or time-barred special leave application is absolute and cascades to bar appeals under sub-sections (1) and (2) as well on the same acquittal.

#### Interlocking matrix

- **Sections 413–417 (this Chapter, cluster 1)** — the convicted person's own appeal rights and bars, which operate independently of and alongside the prosecution-side rights in this cluster.
- **Sections 422–426 (this Chapter, cluster 3)** — the procedural mechanics (forum, petition form, notice, summary dismissal) that govern how any appeal under this cluster is actually conducted once the right to appeal is established.
- **Section 434 (this Chapter, cluster 5)** — the finality provision that expressly carves out sections 418 and 419 (and Chapter XXXII) as exceptions to the general finality of appellate judgments.
- **Bharatiya Nyaya Sanhita, 2023, sections 64, 65, 66, 67, 68, 70, 71** — the same sexual-offence provisions cross-referenced in section 415(4), here triggering section 418(4)'s parallel six-month disposal clock for State/Central sentence-inadequacy appeals.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- The moment an acquittal is received in a complainant-instituted case, calendar both possible section 419(5) deadlines (sixty days and six months) and resolve the complainant's public-servant status immediately -- do not wait to confirm this before beginning to prepare the special leave application.
- In a section 418 sentence-inadequacy appeal, prepare the show-cause response to address all three possible outcomes the accused may argue for -- resisting enhancement, seeking acquittal, and seeking further reduction -- since section 418(3) expressly opens all three to the accused.
- Where multiple co-accused are convicted at a joint trial and only some intend to appeal, advise each individually and promptly on their own independent limitation position under section 421 -- do not let any co-accused assume their appeal right is preserved merely because a co-accused is appealing.
- For a section 420 Supreme Court appeal following a High Court reversal of acquittal, confirm precisely which sentence threshold (death, life imprisonment, or ten years or more) is actually met on the facts before advising the client this route is available.

---

## Sections 422–426 — Which court hears the appeal, how the petition is filed, and what happens before a full hearing

### The dispute this solves

::: oneminute Once it is established that an appeal right exists, this cluster is the operating manual for actually filing and progressing it. Section 422 assigns which judicial officer hears a Court of Session appeal -- ordinarily the Sessions Judge or an Additional Sessions Judge, with a special carve-out letting the Chief Judicial Magistrate hear appeals from second-class Magistrate convictions. Section 423 sets the basic form: a written petition, with a copy of the judgment or order attached. Section 424 is the practical accommodation for an appellant who is in jail -- they can hand the petition to the jail officer in charge rather than needing to physically present it to the court themselves. Section 425 is the summary-dismissal gate: before any full hearing, the Appellate Court can screen out appeals with no sufficient ground for interfering, subject to real procedural safeguards depending on whether the appellant filed through counsel or through the jail route. Section 426 is what happens once an appeal survives that screening -- notice to the relevant parties, and the record being sent for and the parties heard.
:::

::: story An appellant in jail, a petition through the jail officer, and a summary dismissal that almost went wrong
An appellant, convicted and sentenced to imprisonment, is unable to personally present a petition of appeal to the Court of Session. Section 424 lets him instead present his petition, and the accompanying judgment copy, to the officer in charge of the jail, who is then obligated to forward it to the proper Appellate Court -- there is no requirement that the appellant appear in person or through counsel merely to get the appeal on file. When the petition arrives, the Appellate Court, on examining it, initially considers there is no sufficient ground for interfering and is inclined to dismiss it summarily under section 425(1). But section 425(2)(b)'s proviso applies specifically to appeals presented under section 424 (the jail route): such an appeal cannot be dismissed except after giving the appellant a reasonable opportunity to be heard in support of it -- unless the Court considers the appeal frivolous, or considers that producing the accused in custody would cause disproportionate inconvenience. The Court, recognising it has not yet given the appellant that opportunity, pauses the summary dismissal and instead arranges for the appellant to be heard, whether in person or otherwise, before making a final decision.
:::

### The Act, decompiled

::: proviso Section 422 — Appeal to Court of Session how heard

"422. (1) Subject to the provisions of sub-section (2), an appeal to the Court of Session or Sessions Judge [[!shall]] be heard by the Sessions Judge or by an Additional Sessions Judge:
Provided that an appeal against a conviction on a trial held by a Magistrate of the second class [[?may]] be heard and disposed of by the Chief Judicial Magistrate.
(2) An Additional Sessions Judge or a Chief Judicial Magistrate [[!shall]] hear only such appeals as the Sessions Judge of the division may, by general or special order, make over to him or as the High Court may, by special order, direct him to hear."
:::

::: proviso Section 423 — Petition of appeal

"423. Every appeal [[!shall]] be made in the form of a petition in writing presented by the appellant or his advocate, and every such petition [[!shall]] (unless the Court to which it is presented otherwise directs) be accompanied by a copy of the judgment or order appealed against."
:::

::: proviso Section 424 — Procedure when appellant in jail

"424. If the appellant is in jail, he [[?may]] present his petition of appeal and the copies accompanying the same to the officer in charge of the jail, who [[!shall]] thereupon forward such petition and copies to the proper Appellate Court."
:::

::: proviso Section 425 — Summary dismissal of appeal

"425. (1) If upon examining the petition of appeal and copy of the judgment received under section 423 or section 424, the Appellate Court considers that there is no sufficient ground for interfering, it [[?may]] dismiss the appeal summarily:
Provided that—
(a) no appeal presented under section 423 [[!shall]] be dismissed unless the appellant or his advocate has had a reasonable opportunity of being heard in support of the same;
(b) no appeal presented under section 424 [[!shall]] be dismissed except after giving the appellant a reasonable opportunity of being heard in support of the same, unless the Appellate Court considers that the appeal is frivolous or that the production of the accused in custody before the Court would involve such inconvenience as would be disproportionate in the circumstances of the case;
(c) no appeal presented under section 424 [[!shall]] be dismissed summarily until the period allowed for preferring such appeal has expired.
(2) Before dismissing an appeal under this section, the Court [[?may]] call for the record of the case.
(3) Where the Appellate Court dismissing an appeal under this section is a Court of Session or of the Chief Judicial Magistrate, it [[!shall]] record its reasons for doing so.
(4) Where an appeal presented under section 424 has been dismissed summarily under this section and the Appellate Court finds that another petition of appeal duly presented under section 423 on behalf of the same appellant has not been considered by it, that Court [[?may]], notwithstanding anything contained in section 434, if satisfied that it is necessary in the interests of justice so to do, hear and dispose of such appeal in accordance with law."
:::

::: proviso Section 426 — Procedure for hearing appeals not dismissed summarily

"426. (1) If the Appellate Court does not dismiss the appeal summarily, it [[!shall]] cause notice of the time and place at which such appeal will be heard to be given—
(i) to the appellant or his advocate;
(ii) to such officer as the State Government may appoint in this behalf;
(iii) if the appeal is from a judgment of conviction in a case instituted upon complaint, to the complainant;
(iv) if the appeal is under section 418 or section 419, to the accused, and [[!shall]] also furnish such officer, complainant and accused with a copy of the grounds of appeal.
(2) The Appellate Court [[!shall]] then send for the record of the case, if such record is not already available in that Court, and hear the parties:
Provided that if the appeal is only as to the extent or the legality of the sentence, the Court [[?may]] dispose of the appeal without sending for the record.
(3) Where the only ground for appeal from a conviction is the alleged severity of the sentence, the appellant [[!shall]] not, except with the leave of the Court, urge or be heard in support of any other ground."
:::

### How this actually runs

<MicroTree
  input="An appeal has been (or is about to be) filed, and the question is how it gets from filing to a full hearing -- or whether it gets screened out before that."
  :gates="[
    { q: 'Is this a Court of Session appeal, and if so, is it against a second-class Magistrate conviction (eligible for Chief Judicial Magistrate disposal) or an ordinary appeal for the Sessions Judge/Additional Sessions Judge?', no: 'Section 422 forum allocation is not in issue on these facts; the appeal proceeds before whichever forum section 415 or the relevant provision assigns' },
    { q: 'Was the petition presented through the ordinary section 423 route (appellant or advocate, in writing, with judgment copy), or through the section 424 jail route?', no: 'Confirm which route applies before assessing what summary-dismissal safeguards apply -- the two routes carry different protections under section 425(2)' },
    { q: 'Does the Appellate Court, on initial examination, consider there is no sufficient ground for interfering?', no: 'Summary dismissal under section 425 is not in play; the appeal proceeds directly to section 426 notice and hearing' },
    { q: 'If summary dismissal is being considered, have the applicable section 425(2) safeguards for that filing route (hearing opportunity, frivolousness/inconvenience exception, or the appeal-period-expiry bar for jail appeals) actually been satisfied?', no: 'The appeal cannot be summarily dismissed yet -- the relevant section 425(2) safeguard has not been met' }
  ]"
  result="An appeal is filed in writing (directly, or via the jail officer for an incarcerated appellant), is heard by the forum section 422 assigns, and may be summarily dismissed only after the specific safeguard applicable to its filing route under section 425(2) is satisfied -- failing which it proceeds to section 426's full notice-and-hearing procedure, itself subject to the narrowed record-and-hearing rule where the only ground is sentence severity."
  resultKind="mandatory"
  caveat="Section 425(4) is a genuine second chance, not mere formality -- if a jail-route appeal was dismissed summarily while a separate, properly presented section 423 petition for the same appellant and same matter had not yet been considered, the Court may revisit and dispose of that unconsidered petition even after the summary dismissal, and even notwithstanding section 434's general finality rule."
/>

### In plain English

This cluster is the plumbing that gets an appeal from paper to a courtroom. Section 422 sorts out who actually hears a Court of Session appeal — usually the Sessions Judge or an Additional Sessions Judge, but with a practical shortcut letting the Chief Judicial Magistrate handle appeals from second-class Magistrate convictions. Filing itself is simple under section 423: a written petition, with the judgment attached, from the appellant or their lawyer. Section 424 removes a real barrier for anyone who is actually in jail — they do not need to somehow get themselves or a lawyer to the courthouse just to file; handing the petition to the jail officer in charge is enough, and that officer must forward it on. Before any appeal gets a full hearing, section 425 lets the court do a preliminary screen and dismiss it summarily if there is plainly nothing to it — but the protections differ depending on how the appeal was filed: an ordinarily-filed appeal cannot be dismissed without the appellant or their advocate being heard, and a jail-route appeal gets even more protection, needing a hearing opportunity unless it is frivolous or bringing the accused to court would be disproportionately inconvenient, and it cannot be dismissed before the appeal period itself has even run out. If an appeal survives that screen, section 426 kicks in: real notice to everyone with a stake in the outcome, the record sent for, and a proper hearing — unless the appeal is only about whether the sentence was too harsh, in which case the court can decide it without even calling for the full record.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 422–426 are provisionally mapped to CrPC sections 381–385 (CrPC Chapter XXIX). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Nothing in the extracted text of sections 422-426 signals a substantive departure from the CrPC's apparent scheme for appeal forum allocation, petition filing, and summary dismissal safeguards. Re-verify each specific numbering pair independently before citing it in submissions, particularly the section 424/425(2)(b)-(c) jail-appellant safeguards, which are exactly the kind of procedural protection worth double-checking has not been altered in substance even where the numbering has changed.

### Test your instinct

:::: instinct An Appellate Court dismisses a jail-route appeal (filed under section 424) summarily, on the stated ground that the appeal is frivolous, without giving the appellant any hearing opportunity. The appeal period for the matter had not yet expired at the time of dismissal. Was the dismissal lawful?

::: ruling No, on the facts as stated, the dismissal is defective on at least one ground even if the frivolousness finding were otherwise sound. Section 425(2)(c) independently bars summary dismissal of a section 424 (jail-route) appeal until the period allowed for preferring the appeal has actually expired -- this is a freestanding safeguard, not conditioned on frivolousness, and applies regardless of whether the Court also relies on the frivolousness exception in section 425(2)(b) to skip the hearing requirement. A court could, in principle, properly invoke the frivolousness exception under section 425(2)(b) to dismiss without a hearing, but it cannot do so before the appeal period has expired, because section 425(2)(c) operates as a separate, unconditional bar on timing.
:::
::::

:::: instinct An appeal is filed challenging only the severity of the sentence imposed, not the underlying conviction. At the hearing, appellant's counsel, without seeking the Court's leave, also argues that the trial court's finding of guilt was against the weight of the evidence. Can the Court entertain this additional argument?

::: ruling Not without first granting leave. Section 426(3) is explicit: where the only ground of appeal is the alleged severity of the sentence, the appellant shall not, except with the leave of the Court, urge or be heard in support of any other ground. Counsel raising a conviction-related argument without having sought or obtained that leave is doing something the section does not permit as of right -- the Court may, at its discretion, grant leave on the spot if it considers it appropriate, but it is not obliged to entertain the argument merely because counsel raises it, and the correct procedural course is for counsel to expressly request leave before developing the point.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 422–426 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial procedural case law on summary dismissal safeguards and notice requirements remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For an **incarcerated appellant**, section 424's jail-officer filing route should be used and documented carefully -- keep a dated record of when the petition was handed to the jail officer, since this is the operative filing act and any forwarding delay by the jail administration should not be allowed to prejudice the appellant's position. For **any appellant facing summary dismissal**, identify immediately which filing route (section 423 or section 424) applies, since the applicable safeguard differs -- a jail-route appellant has the additional appeal-period-expiry protection under section 425(2)(c) that an ordinarily-filed appellant does not. For counsel intending to argue **grounds beyond sentence severity** in a sentence-only appeal, seek leave under section 426(3) explicitly and in advance of the hearing, not extemporaneously during argument.

#### The limitation clock

Section 425(2)(c) creates an important negative clock: a jail-route appeal cannot be summarily dismissed until the ordinary appeal-filing period has expired, effectively guaranteeing the appellant that window before any adverse summary decision. This cluster does not itself set the appeal-filing limitation period -- that is governed elsewhere and should be checked and calendared separately for each appeal.

#### Interlocking matrix

- **Sections 413–421 (this Chapter, clusters 1–2)** — the substantive appeal rights and forum questions that this cluster's filing and screening machinery operates on top of.
- **Sections 427–431 (this Chapter, cluster 4)** — what happens once an appeal survives the section 425 screen and the section 426 notice/hearing stage: the Appellate Court's substantive powers of disposal.
- **Section 434 (this Chapter, cluster 5)** — the finality provision that section 425(4) expressly overrides in the narrow circumstance of an unconsidered, properly-presented section 423 petition.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- For every incarcerated client, file the petition of appeal through the jail officer under section 424 promptly and obtain a dated acknowledgment of when it was handed over, to guard against any dispute about forwarding delay.
- Where a summary dismissal is threatened or has occurred, immediately identify and plead the specific section 425(2) safeguard applicable to the filing route used, rather than arguing summary dismissal generally is improper.
- If a section 424 jail-route appeal has been summarily dismissed and a separate, properly filed section 423 petition for the same appellant exists but was not considered, invoke section 425(4) directly and promptly -- this is a specific, narrow reopening mechanism, not a general review power.
- When the only intended ground of appeal is sentence severity, decide early whether any conviction-related argument might also need to be preserved, and seek section 426(3) leave explicitly at the earliest opportunity rather than waiting for the hearing itself.

---

## Sections 427–431 — What an Appellate Court can actually do, and what happens to the sentence while the appeal is pending

### The dispute this solves

::: oneminute Once an appeal is fully heard, section 427 is the toolbox -- a detailed menu of what the Appellate Court can order, differentiated by whether the appeal is from an acquittal, a conviction, or a sentence-enhancement request, with two hard limits: no enhancement without the accused first getting a chance to show cause, and no punishment greater than what the original trial court itself could have imposed. Section 428 extends the ordinary rules on how a trial court delivers judgment to how an appellate judgment gets delivered too. Section 429 is the administrative follow-through when a High Court decides an appeal -- its judgment has to be certified back down to the court whose decision was appealed, so that court can actually implement it. Section 430 is the practically vital bail provision: pending an appeal, the Appellate Court can suspend the sentence and release the appellant on bail, with a mandatory show-cause protection for the Public Prosecutor in the most serious cases, and a further guaranteed near-automatic bail right for genuinely short sentences or bailable offences where the appellant is already out. Section 431 is the flip side -- where the State appeals an acquittal, the High Court can have the acquitted person arrested and brought before it pending that appeal.
:::

::: story A death-sentence appellant, a mandatory show-cause notice, and a hurried Public Prosecutor
An accused convicted and sentenced to death appeals, and immediately after filing seeks release on his own bond pending the appeal, given his ongoing medical condition. Section 430(1)'s first proviso applies with full force here: because the offence is punishable with death, the Appellate Court cannot release him on his own bond or bail bond without first giving the Public Prosecutor an opportunity to show cause in writing against the release -- this is not a discretionary courtesy, it is a mandatory precondition. Suppose the Court, under time pressure, grants the bail application the same day it is filed, without in fact giving the Public Prosecutor any real chance to respond in writing. That order is vulnerable precisely because the proviso's show-cause requirement was not honoured — and separately, once the accused is actually released, section 430(1)'s second proviso keeps the door open for the Public Prosecutor to later apply for cancellation of that bail if circumstances change or new grounds emerge, rather than treating the initial release as beyond further scrutiny.
:::

### The Act, decompiled

::: proviso Section 427 — Powers of Appellate Court

"427. After perusing such record and hearing the appellant or his advocate, if he appears, and the Public Prosecutor if he appears, and in case of an appeal under section 418 or section 419, the accused, if he appears, the Appellate Court [[?may]], if it considers that there is no sufficient ground for interfering, dismiss the appeal, or [[?may]]—
(a) in an appeal from an order of acquittal, reverse such order and direct that further inquiry be made, or that the accused be re-tried or committed for trial, as the case may be, or find him guilty and pass sentence on him according to law;
(b) in an appeal from a conviction—
(i) reverse the finding and sentence and acquit or discharge the accused, or order him to be re-tried by a Court of competent jurisdiction subordinate to such Appellate Court or committed for trial; or
(ii) alter the finding, maintaining the sentence; or
(iii) with or without altering the finding, alter the nature or the extent, or the nature and extent, of the sentence, but not so as to enhance the same;
(c) in an appeal for enhancement of sentence—
(i) reverse the finding and sentence and acquit or discharge the accused or order him to be re-tried by a Court competent to try the offence; or
(ii) alter the finding maintaining the sentence; or
(iii) with or without altering the finding, alter the nature or the extent, or, the nature and extent, of the sentence, so as to enhance or reduce the same;
(d) in an appeal from any other order, alter or reverse such order;
(e) make any amendment or any consequential or incidental order that may be just or proper:
Provided that the sentence [[!shall]] not be enhanced unless the accused has had an opportunity of showing cause against such enhancement:
Provided further that the Appellate Court [[!shall]] not inflict greater punishment for the offence which in its opinion the accused has committed, than might have been inflicted for that offence by the Court passing the order or sentence under appeal."
:::

::: proviso Section 428 — Judgments of subordinate Appellate Court

"428. The rules contained in Chapter XXIX as to the judgment of a Criminal Court of original jurisdiction [[!shall]] apply, so far as may be practicable, to the judgment in appeal of a Court of Session or Chief Judicial Magistrate:
Provided that, unless the Appellate Court otherwise directs, the accused [[!shall]] not be brought up, or required to attend, to hear judgment delivered."
:::

::: proviso Section 429 — Order of High Court on appeal to be certified to lower Court

"429. (1) Whenever a case is decided on appeal by the High Court under this Chapter, it [[!shall]] certify its judgment or order to the Court by which the finding, sentence or order appealed against was recorded or passed and if such Court is that of a Judicial Magistrate other than the Chief Judicial Magistrate, the High Court's judgment or order [[!shall]] be sent through the Chief Judicial Magistrate, and if such Court is that of an Executive Magistrate, the High Court's judgment or order [[!shall]] be sent through the District Magistrate.
(2) The Court to which the High Court certifies its judgment or order [[!shall]] thereupon make such orders as are conformable to the judgment or order of the High Court; and if necessary, the record [[!shall]] be amended in accordance therewith."
:::

::: proviso Section 430 — Suspension of sentence pending appeal; release of appellant on bail

"430. (1) Pending any appeal by a convicted person, the Appellate Court [[?may]], for reasons to be recorded by it in writing, order that the execution of the sentence or order appealed against be suspended and, also, if he is in confinement, that he be released on bail, or on his own bond or bail bond:
Provided that the Appellate Court [[!shall]], before releasing on his own bond or bail bond a convicted person who is convicted of an offence punishable with death or imprisonment for life or imprisonment for a term of not less than ten years, [[!shall]] give opportunity to the Public Prosecutor for showing cause in writing against such release:
Provided further that in cases where a convicted person is released on bail it [[!shall]] be open to the Public Prosecutor to file an application for the cancellation of the bail.
(2) The power conferred by this section on an Appellate Court [[?may]] be exercised also by the High Court in the case of an appeal by a convicted person to a Court subordinate thereto.
(3) Where the convicted person satisfies the Court by which he is convicted that he intends to present an appeal, the Court [[!shall]],—
(i) where such person, being on bail, is sentenced to imprisonment for a term not exceeding three years; or
(ii) where the offence of which such person has been convicted is a bailable one, and he is on bail,
order that the convicted person be released on bail, unless there are special reasons for refusing bail, for such period as will afford sufficient time to present the appeal and obtain the orders of the Appellate Court under sub-section (1); and the sentence of imprisonment [[!shall]], so long as he is so released on bail, be deemed to be suspended.
(4) When the appellant is ultimately sentenced to imprisonment for a term or to imprisonment for life, the time during which he is so released [[!shall]] be excluded in computing the term for which he is so sentenced."
:::

::: proviso Section 431 — Arrest of accused in appeal from acquittal

"431. When an appeal is presented under section 419, the High Court [[?may]] issue a warrant directing that the accused be arrested and brought before it or any subordinate Court, and the Court before which he is brought [[?may]] commit him to prison pending the disposal of the appeal or admit him to bail."
:::

### How this actually runs

<MicroTree
  input="An Appellate Court has heard (or is hearing) an appeal, and the question is what it can order, or what happens to the appellant's liberty while the appeal remains pending."
  :gates="[
    { q: 'Is the question about the Appellate Court\'s power to dispose of the appeal on its merits (section 427), rather than about bail or arrest pending the appeal?', no: 'Move to section 430 (bail pending appeal for a convicted appellant) or section 431 (arrest pending a State acquittal appeal), whichever fits the facts' },
    { q: 'If section 427 enhancement is in play, has the accused actually been given an opportunity to show cause against it, and does the proposed punishment stay within what the original trial court itself could have imposed?', no: 'The enhancement cannot proceed -- both section 427 provisos are unmet or would be violated' },
    { q: 'If bail pending appeal under section 430 is in question, is the offence punishable with death, life imprisonment, or ten years or more?', no: 'The heightened section 430(1) first-proviso show-cause requirement for the Public Prosecutor does not apply; the Appellate Court\'s ordinary discretion under section 430(1) governs, subject to the sub-section (3) near-automatic bail rule where it fits' },
    { q: 'If the heightened threshold is met, has the Public Prosecutor actually been given the opportunity to show cause in writing before release on the convicted person\'s own bond or bail bond?', no: 'Release under section 430(1) cannot be ordered yet -- the mandatory show-cause opportunity has not been afforded' }
  ]"
  result="An Appellate Court's power to dispose of an appeal on the merits under section 427 is broad but bounded by the no-enhancement-without-notice and no-punishment-beyond-original-court-capacity provisos; bail pending appeal under section 430 is generally discretionary but becomes conditioned on a mandatory Public Prosecutor show-cause opportunity for the most serious offences, and becomes a near-automatic entitlement for short sentences or bailable offences under sub-section (3); and section 431 gives the High Court a parallel arrest power specifically where the State is appealing an acquittal."
  resultKind="mandatory"
  caveat="Section 430(1)'s second proviso means a bail grant, even where properly made after satisfying the first proviso's show-cause requirement, is not immune from later challenge -- the Public Prosecutor retains an express statutory right to seek cancellation if circumstances change or if grounds for cancellation independently arise."
/>

### In plain English

Section 427 is the appellate court's full toolkit once it has actually heard an appeal — it can dismiss, reverse an acquittal and order further inquiry or retrial or even conviction, reverse a conviction and acquit, adjust the finding while keeping the sentence, adjust the sentence itself (up or down, depending on who is appealing and why), or make whatever consequential order justice requires — but two lines it cannot cross: no enhancing a sentence without first letting the accused argue against it, and no punishment beyond what the original trial court itself had the power to impose. Section 428 simply says: the same care that goes into writing a trial court's judgment applies to an appellate judgment too, though the accused does not need to be personally present to hear it delivered. Section 429 is bureaucratic but essential — a High Court's appellate decision means nothing operationally until it is formally certified back down to whichever court has to actually carry it out. Section 430 is often the most practically urgent provision in the whole chapter: while an appeal is pending, should the convicted person be in jail or out on bail? The Appellate Court has real discretion here, but for the most serious offences, that discretion is fenced in by a mandatory notice to the Public Prosecutor first — and conversely, for short sentences or bailable offences where the person is already on bail, the trial court itself has to grant bail pending appeal almost as a matter of course, unless there is a real reason not to. Section 431 flips the liberty question around: where the State is appealing an acquittal, the High Court can have the previously-acquitted person arrested and brought in, pending the outcome.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 427–431 are provisionally mapped to CrPC sections 386–390 (CrPC Chapter XXIX). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Section 430(1)'s mandatory Public Prosecutor show-cause requirement before releasing on bond or bail bond a person convicted of an offence punishable with death, life imprisonment, or ten years or more reads as a continuation of a comparable requirement already present in the CrPC's bail-pending-appeal scheme, rather than a BNSS-original addition -- but the precise wording and threshold should be independently checked. Nothing else in this cluster's extracted text signals a further substantive departure. Re-verify each specific numbering pair independently before citing it in submissions.

### Test your instinct

:::: instinct An Appellate Court, hearing an appeal against a conviction where the trial court (a Magistrate of the second class, with limited sentencing power) had imposed the maximum sentence available to it, decides the facts actually warrant a considerably harsher sentence and purports to impose that harsher sentence directly under section 427(b)(iii). Is this within the Appellate Court's power?

::: ruling No, and section 427(b)(iii) makes this explicit on its own terms -- the power to "alter the nature or the extent... of the sentence" under an ordinary conviction appeal is expressly qualified "but not so as to enhance the same." Even setting that aside, section 427's second proviso independently bars the Appellate Court from inflicting "greater punishment for the offence... than might have been inflicted for that offence by the Court passing the order or sentence under appeal" -- meaning the Appellate Court's ceiling is capped at what the second-class Magistrate itself could have imposed, not at some higher sentence the Appellate Court considers more appropriate to the facts. If genuine enhancement is warranted, the correct route is a separate appeal for enhancement under section 418, not an enhancement smuggled into an ordinary conviction appeal under section 427(b).
:::
::::

:::: instinct A person convicted of an offence punishable with imprisonment for a term of exactly ten years applies for bail pending appeal under section 430(1). The Appellate Court, considering the application urgent, grants release on the convicted person's own bond the same day, without issuing any notice to the Public Prosecutor. Is the release order valid?

::: ruling No, on the facts as stated. Section 430(1)'s first proviso applies in terms to a person "convicted of an offence punishable with death or imprisonment for life or imprisonment for a term of not less than ten years" -- and a term of exactly ten years falls within "not less than ten years." The mandatory requirement that the Public Prosecutor be given an opportunity to show cause in writing against release therefore applies, and it was not satisfied merely because the Court considered the matter urgent. Urgency is not listed in the section as a ground for dispensing with the show-cause opportunity; the correct course, even under time pressure, is to issue prompt notice to the Public Prosecutor and allow a genuine (even if short) opportunity to respond before ordering release on the convicted person's own bond.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 427–431 of the BNSS is cited here, given the recency of the numbering. The CrPC's extensive case law on appellate powers, the no-enhancement-without-notice rule, and bail pending appeal remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For the **defence** in any enhancement appeal, section 427's second proviso is a hard ceiling worth pleading explicitly — calculate and state on the record exactly what the original trial court could have imposed, so the Appellate Court cannot inadvertently exceed it. For the **defence** seeking bail pending appeal in a serious-offence case, prepare for the Public Prosecutor's mandatory show-cause opportunity under section 430(1) as a real contest, not a formality, and build the bail application to pre-empt the likely grounds of opposition. For the **prosecution**, section 430(1)'s second proviso preserving the right to seek cancellation of bail is worth keeping in reserve — a bail grant properly made is not the end of the matter if the convicted person's conduct post-release, or newly emerging facts, justify a cancellation application. For the **State** appealing an acquittal, section 431's arrest power should be sought promptly where flight risk is a genuine concern, since it is discretionary and tied to the appeal actually being presented.

#### The limitation clock

This cluster does not itself impose fresh limitation periods; it operates within whatever appeal-filing timelines apply under the earlier clusters. The practically time-sensitive element is section 430(3)'s near-automatic bail entitlement, which is framed around affording "sufficient time to present the appeal" -- meaning the trial court's bail order under that sub-section must be calibrated to the appellant's actual filing timeline, not granted or measured arbitrarily.

#### Interlocking matrix

- **Sections 422–426 (this Chapter, cluster 3)** — the notice and hearing procedure that precedes the exercise of section 427's disposal powers.
- **Sections 418–419 (this Chapter, cluster 2)** — the enhancement and acquittal appeals whose outcomes are governed by section 427(a) and (c) specifically, distinct from the ordinary conviction-appeal powers in section 427(b).
- **Chapter XXIX (Sections 392–406, this site)** — the original-jurisdiction judgment rules that section 428 extends to appellate judgments; cross-reference that chapter's own schema for the mechanics being imported here.
- **Chapter XXXV (Bail and Bonds)** — the general bail framework alongside which section 430's appeal-specific bail power operates; confirm which provision's conditions actually govern a given bail application.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- In any enhancement-of-sentence appeal, draft submissions to expressly identify the maximum sentence the original trial court could have imposed, anchoring section 427's second-proviso ceiling in the record rather than leaving it implicit.
- For a section 430(1) bail application in a death/life/ten-years-or-more case, anticipate the Public Prosecutor's show-cause opportunity by pre-empting likely objections (flight risk, tampering, gravity of offence) in the bail application itself.
- Where a client already on bail is sentenced to three years or less, or convicted of a bailable offence, invoke section 430(3)'s near-automatic bail entitlement explicitly and promptly at the trial court itself, rather than waiting to raise bail only before the Appellate Court.
- For the prosecution monitoring a convicted person released on bail pending appeal, keep section 430(1)'s second-proviso cancellation route in mind as an ongoing option, and document any post-release conduct that might support a future cancellation application.

---

## Sections 432–435 — Additional evidence on appeal, a divided Bench, the limits of finality, and what happens when the appellant dies

### The dispute this solves

::: oneminute This final cluster in the chapter handles four distinct loose ends. Section 432 lets an Appellate Court take (or direct the taking of) additional evidence where it considers this necessary, with the accused guaranteed the right to be present when that evidence is taken. Section 433 is the procedure for a High Court Bench that cannot agree — the case goes to a third Judge, and the judgment follows that Judge's opinion, unless a larger Bench is specifically requested. Section 434 states the general rule that appellate judgments are final, but immediately carves out the exceptions this chapter has already built in — the section 418 and 419 State/complainant appeals, the section 425(4) reopening of an unconsidered petition, and the entire Chapter XXXII reference-and-revision jurisdiction. Section 435 addresses the genuinely difficult question of what happens when an appellant dies mid-appeal: most appeals simply abate, but a near relative gets a real, time-limited chance to step in and continue an appeal against a death sentence or imprisonment.
:::

::: story A convicted man dies during his appeal, and his sister has thirty days to decide
A man convicted and sentenced to a substantial term of imprisonment files an appeal, but dies of unrelated causes while the appeal is still pending. Under section 435(2)'s general rule, this appeal (not being an appeal from a sentence of fine, and not being a section 418/419 appeal, which abate under sub-section (1) regardless) would ordinarily abate on his death — meaning it simply ends, unresolved. But the proviso to section 435(2) gives his surviving sister, as a "near relative" within the Explanation's definition, thirty days from the date of his death to apply to the Appellate Court for leave to continue the appeal on his behalf. If she applies within that window and leave is granted, the appeal proceeds as though he had lived to see it through — a real, if narrow, mechanism for vindicating (or at least properly resolving) his conviction even after death, available because the underlying sentence was imprisonment rather than a mere fine.
:::

### The Act, decompiled

::: proviso Section 432 — Additional evidence to be taken

"432. (1) In dealing with any appeal under this Chapter, the Appellate Court, if it thinks additional evidence to be necessary, [[!shall]] record its reasons and [[?may]] either take such evidence itself, or direct it to be taken by a Magistrate or, when the Appellate Court is a High Court, by a Court of Session or a Magistrate.
(2) When the additional evidence is taken by the Court of Session or the Magistrate, it or he [[!shall]] certify such evidence to the Appellate Court, and such Court [[!shall]] thereupon proceed to dispose of the appeal.
(3) The accused or his advocate [[!shall]] have the right to be present when the additional evidence is taken.
(4) The taking of evidence under this section [[!shall]] be subject to the provisions of Chapter XXV, as if it were an inquiry."
:::

::: proviso Section 433 — Procedure in case of difference of opinion

"433. When an appeal under this Chapter is heard by a High Court before a Bench of Judges and they are divided in opinion, the appeal, with their opinions, [[!shall]] be laid before another Judge of that Court, and that Judge, after such hearing as he thinks fit, [[!shall]] deliver his opinion, and the judgment or order [[!shall]] follow that opinion:
Provided that if one of the Judges constituting the Bench, or, where the appeal is laid before another Judge under this section, that Judge, so requires, the appeal [[!shall]] be re-heard and decided by a larger Bench of Judges."
:::

::: proviso Section 434 — No appeal to lie unless otherwise provided [Finality of appellate judgments]

"434. Judgments and orders passed by an Appellate Court upon an appeal [[!shall]] be final, except in the cases provided for in section 418, section 419, sub-section (4) of section 425 or Chapter XXXII:
Provided that notwithstanding the final disposal of an appeal against conviction in any case, the Appellate Court [[?may]] hear and dispose of, on the merits,—
(a) an appeal against acquittal under section 419, arising out of the same case; or
(b) an appeal for the enhancement of sentence under section 418, arising out of the same case."
:::

::: proviso Section 435 — Abatement of appeals

"435. (1) Every appeal under section 418 or section 419 [[!shall]] finally abate on the death of the accused.
(2) Every other appeal under this Chapter (except an appeal from a sentence of fine) [[!shall]] finally abate on the death of the appellant:
Provided that where the appeal is against a conviction and sentence of death or of imprisonment, and the appellant dies during the pendency of the appeal, any of his near relatives [[?may]], within thirty days of the death of the appellant, apply to the Appellate Court for leave to continue the appeal; and if leave is granted, the appeal [[!shall]] not abate.
Explanation.—In this section, 'near relative' means a parent, spouse, lineal descendant, brother or sister."
:::

### How this actually runs

<MicroTree
  input="An appeal under this Chapter has reached a point where additional evidence is needed, a Bench is divided, a judgment's finality is in question, or the appellant has died."
  :gates="[
    { q: 'Does the Appellate Court consider additional evidence necessary to properly decide the appeal?', no: 'Section 432 is not engaged; the appeal proceeds on the existing record' },
    { q: 'If additional evidence is taken by a Court of Session or Magistrate on the Appellate Court\'s direction, has that evidence actually been certified back to the Appellate Court, and was the accused given the right to be present when it was taken?', no: 'Section 432(2)-(3) has not been satisfied -- the appeal cannot properly proceed to disposal on that additional evidence yet' },
    { q: 'Is this a High Court Bench appeal where the Judges are divided in opinion?', no: 'Section 433 is not engaged; move to sections 434-435 for finality and abatement questions' },
    { q: 'Has the appellant died during the pendency of an appeal that is not under section 418/419, and not from a sentence of fine, with the underlying sentence being death or imprisonment?', no: 'Section 435(2)\'s near-relative revival proviso is unavailable on these facts -- either the appeal simply proceeds unaffected by abatement rules, or it abates without a revival route' }
  ]"
  result="Additional evidence may be taken under section 432 with mandatory reasons, certification, and a guaranteed presence right for the accused; a divided High Court Bench resolves through a third Judge under section 433, with a re-hearing option before a larger Bench if requested; appellate judgments are final under section 434 except for the specific listed exceptions; and an appeal (other than under sections 418/419 or from a fine sentence) that abates on the appellant's death may still be revived by a near relative applying within thirty days, where the underlying sentence was death or imprisonment."
  resultKind="mandatory"
  caveat="Section 435(1)'s abatement of section 418/419 appeals on the death of the accused is a separate, harder rule than section 435(2) -- it has no near-relative revival proviso at all, unlike the general abatement rule in sub-section (2), so a State or complainant appeal against an acquittal or for sentence enhancement simply ends outright if the accused/acquitted person dies, with no route to continue it."
/>

### In plain English

This cluster ties off four separate threads. Section 432 lets an appellate court fill genuine evidentiary gaps rather than being stuck deciding on an incomplete record — but it has to explain why it is doing so, the accused gets to be present when the new evidence is taken, and the whole exercise runs under the same evidentiary rules that would apply to an ordinary inquiry. Section 433 solves the awkward problem of a High Court Bench that cannot agree: rather than a deadlock, the case goes to a third Judge, whose opinion becomes the decision — unless someone specifically asks for a full re-hearing before a larger Bench instead. Section 434 states the ordinary rule that once an appeal is decided, that is the end of it — but then immediately reminds the reader that this chapter itself has already created several genuine exceptions: State and complainant appeals, the narrow reopening of an unconsidered petition, and the entirely separate reference-and-revision jurisdiction in the next chapter. Section 435 is the human question underneath all the procedure: what if the appellant simply dies before the appeal is resolved? For most appeals, the answer is that it just ends — abates — unresolved. But where the conviction carried a death sentence or imprisonment (not a mere fine), a close family member — parent, spouse, child, sibling — gets thirty days to step forward and ask to carry the appeal on, so that a serious conviction does not simply evaporate, unexamined, because the person convicted did not live to see the appeal through. State and complainant appeals under sections 418/419, though, get no such lifeline — they abate outright on the accused's death, full stop.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 432–435 are provisionally mapped to CrPC sections 391–394 (CrPC Chapter XXIX). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Nothing in the extracted text of sections 432-435 signals a substantive departure from the CrPC's apparent scheme for additional evidence, divided Benches, finality, and abatement on death — including the thirty-day near-relative revival window and the "near relative" definition, which read as continuations rather than reforms. Re-verify each specific numbering pair independently before relying on it in submissions, and confirm section 434's cross-reference to "Chapter XXXII" (Reference and Revision) against the current chapter list before citing.

### Test your instinct

:::: instinct A High Court Bench hearing an appeal is divided in opinion, and the appeal is laid before a third Judge under section 433. The third Judge hears the matter and delivers an opinion agreeing substantially with one of the original two Judges. Neither original Judge, nor the third Judge, has called for a re-hearing before a larger Bench. Is the resulting judgment valid even though only three individual opinions (never a full three-Judge Bench sitting together) were ever actually recorded?

::: ruling Yes, this is precisely the mechanism section 433 contemplates as the default outcome. The section does not require the third Judge to sit together with the original Bench, or to conduct anything other than "such hearing as he thinks fit" before delivering an opinion — and it expressly provides that "the judgment or order shall follow that opinion," meaning the third Judge's opinion becomes operative without more, unless the further proviso is triggered. That proviso is opt-in: a re-hearing before a larger Bench happens only if one of the original Judges, or the third Judge, specifically requires it. Absent such a request from an eligible Judge, the process the facts describe — sequential individual opinions culminating in the third Judge's controlling view — is exactly how section 433 is meant to operate, not an irregularity.
:::
::::

:::: instinct An appellant convicted and sentenced to seven years' imprisonment dies forty days into the pendency of his appeal, before any near relative has applied to continue it. On day fifty, his adult daughter, having only just learned of the appeal's existence, applies to the Appellate Court for leave to continue the appeal. Can the Court grant leave?

::: ruling No, not under section 435(2)'s proviso as drafted. The thirty-day window runs "within thirty days of the death of the appellant" — it is not extended by the near relative's actual knowledge of the appellant's death or of the appeal's existence, and the section contains no discretionary condonation-of-delay mechanism for a late application. An application filed on day fifty, twenty days after the window closed, falls outside the proviso's terms regardless of the daughter's genuine and understandable lack of earlier knowledge. Once the thirty-day window lapses without a timely application, section 435(2)'s general rule reasserts itself and the appeal has already finally abated — there being no basis in the section's own text for reviving it after the fact.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 432–435 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial case law on additional evidence on appeal, divided Bench procedure, and abatement on death (including the near-relative revival mechanism) remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For counsel handling an appeal where the **appellant's health is precarious**, section 435(2)'s thirty-day window is a fact worth communicating clearly to the family in advance — waiting to act until after a death has occurred, rather than understanding the mechanism beforehand, risks losing the window through simple unfamiliarity with the thirty-day deadline. For the **defence** in a case where additional evidence might help the appellant's position, section 432 is worth invoking affirmatively rather than assuming the appellate record is fixed — request specific additional evidence and be ready to identify why it is necessary. For anyone tracking a **State or complainant appeal under sections 418/419**, remember section 435(1)'s harder rule: there is no revival mechanism at all if the accused (or acquitted person) dies during that specific kind of appeal.

#### The limitation clock

Section 435(2)'s proviso creates the operative clock in this cluster: thirty days from the appellant's death for a near relative to apply for leave to continue an appeal against a death sentence or imprisonment (not a fine). There is no equivalent window under section 435(1) for section 418/419 appeals — those abate outright and irrevocably on the relevant person's death.

#### Interlocking matrix

- **Chapter XXV (Evidence in Inquiries and Trials)** — the evidentiary framework section 432(4) expressly imports for the taking of additional evidence on appeal.
- **Chapter XXXII (Reference and Revision)** — the jurisdiction section 434 expressly preserves as an exception to appellate finality; the two remedies (appeal and revision) should not be conflated, and a party should confirm which is actually being pursued.
- **Sections 418–419, 425(4) (this Chapter)** — the other named exceptions to section 434's general finality rule; read together, these define the complete, closed list of ways an appellate judgment can still be revisited within this chapter's own framework.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- Where additional evidence might materially assist an appeal, apply under section 432 early and specifically, identifying the precise evidence sought and why it could not have been obtained or produced earlier.
- Brief family members of an appellant with a serious pending sentence (death or imprisonment) on section 435(2)'s thirty-day revival window as a precautionary matter, well before any health crisis makes the point urgent.
- When advising on a State or complainant appeal under section 418 or 419, flag section 435(1)'s harder abatement rule distinctly from the general rule, since there is no revival route available if the relevant person dies during that specific appeal.
- Before treating any appellate judgment as final, check it against all four of section 434's named exceptions (sections 418, 419, 425(4), and Chapter XXXII) rather than assuming finality by default.
