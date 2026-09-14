# Chapter XXXVI — Disposal of Property

## Sections 497–499 — Custody and disposal of property pending and after trial, and the innocent purchaser's claim

### The dispute this solves

::: oneminute Property seized in a criminal case — a stolen vehicle, cash, a weapon, a phone — does not sit in a police malkhana forever. This cluster is the machinery for what happens to it, in two stages. Section 497 governs custody and disposal while the case is still running: the Court or Magistrate before whom the property is produced decides how it is kept safe, and can order an early sale if it is perishable or otherwise sensible to sell it now rather than later — but section 497 also imposes a new, tightly timed documentation duty that did not exist in this form before: a fourteen-day statement of the property, a mandatory photograph (and, where necessary, a video), and a thirty-day deadline to actually order what happens to the property next. Section 498 governs the end state: once the investigation, inquiry or trial has actually concluded, the Court or Magistrate makes the final disposal order — destruction, confiscation, or delivery to whoever is entitled to it. Section 499 is a narrow equitable carve-out sitting between the two: where a convicted thief sold stolen property to an innocent buyer who paid good money for it in ignorance, and that money was recovered from the thief on arrest, the innocent buyer can get some of that money back.
:::

::: story A mobile phone, a fourteen-day clock, and a trial that takes three years
A mobile phone allegedly used to commit an offence is seized and produced before a Magistrate during investigation. Under section 497(1), the Magistrate orders it kept in safe custody pending the conclusion of the case — an ordinary, discretionary custody order. But section 497 does not stop there: within fourteen days of the phone being produced, the Magistrate's office must prepare a statement describing the property, and must cause a photograph (and, if necessary, a video) of it to be taken. That statement and photograph are not paperwork for its own sake — section 497(4) makes them usable as evidence in the case itself, which matters three years later when the phone's chain of custody is challenged at trial and the contemporaneous statement and photograph become the answer to that challenge. Separately, when the trial finally concludes with a conviction, the Magistrate does not simply hand the phone back informally — section 498 requires a fresh, formal disposal order, made only once the investigation, inquiry or trial has actually concluded, addressing whether the phone is destroyed, confiscated, or delivered to whoever is entitled to it.
:::

### The Act, decompiled

::: proviso Section 497 — Order for custody and disposal of property pending trial in certain cases

"497. (1) When any property is produced before any Criminal Court or the Magistrate empowered to take cognizance or commit the case for trial during any investigation, inquiry or trial, the Court or the Magistrate [[?may]] make such order as it thinks fit for the proper custody of such property pending the conclusion of the investigation, inquiry or trial, and, if the property is subject to speedy and natural decay, or if it is otherwise expedient so to do, the Court or the Magistrate [[?may]], after recording such evidence as it thinks necessary, order it to be sold or otherwise disposed of.
Explanation.—For the purposes of this section, "property" includes—
(a) property of any kind or document which is produced before the Court or which is in its custody;
(b) any property regarding which an offence appears to have been committed or which appears to have been used for the commission of any offence.
(2) The Court or the Magistrate [[!shall]], within a period of fourteen days from the production of the property referred to in sub-section (1) before it, prepare a statement of such property containing its description in such form and manner as the State Government may, by rules, provide.
(3) The Court or the Magistrate [[!shall]] cause to be taken the photograph and if necessary, videograph on mobile phone or any electronic media, of the property referred to in sub-section (1).
(4) The statement prepared under sub-section (2) and the photograph or the videography taken under sub-section (3) [[!shall]] be used as evidence in any inquiry, trial or other proceeding under the Sanhita.
(5) The Court or the Magistrate [[!shall]], within a period of thirty days after the statement has been prepared under sub-section (2) and the photograph or the videography has been taken under sub-section (3), order the disposal, destruction, confiscation or delivery of the property in the manner specified hereinafter."
:::

::: proviso Section 498 — Order for disposal of property at conclusion of trial

"498. (1) When an investigation, inquiry or trial in any criminal case is concluded, the Court or the Magistrate [[?may]] make such order as it thinks fit for the disposal, by destruction, confiscation or delivery to any person claiming to be entitled to possession thereof or otherwise, of any property or document produced before it or in its custody, or regarding which any offence appears to have been committed, or which has been used for the commission of any offence.
(2) An order [[?may]] be made under sub-section (1) for the delivery of any property to any person claiming to be entitled to the possession thereof, without any condition or on condition that he executes a bond, with or without securities, to the satisfaction of the Court or the Magistrate, engaging to restore such property to the Court if the order made under sub-section (1) is modified or set aside on appeal or revision.
(3) A Court of Session [[?may]], instead of itself making an order under sub-section (1), direct the property to be delivered to the Chief Judicial Magistrate, who [[!shall]] thereupon deal with it in the manner provided in sections 503, 504 and 505.
(4) Except where the property is livestock or is subject to speedy and natural decay, or where a bond has been executed in pursuance of sub-section (2), an order made under sub-section (1) [[!shall]] not be carried out for two months, or when an appeal is presented, until such appeal has been disposed of.
(5) In this section, the term "property" includes, in the case of property regarding which an offence appears to have been committed, not only such property as has been originally in the possession or under the control of any party, but also any property into or for which the same may have been converted or exchanged, and anything acquired by such conversion or exchange, whether immediately or otherwise."
:::

::: proviso Section 499 — Payment to innocent purchaser of money found on accused

"499. When any person is convicted of any offence which includes, or amounts to, theft or receiving stolen property, and it is proved that any other person bought the stolen property from him without knowing or having reason to believe that the same was stolen, and that any money has on his arrest been taken out of the possession of the convicted person, the Court [[?may]], on the application of such purchaser and on the restitution of the stolen property to the person entitled to the possession thereof, order that out of such money a sum not exceeding the price paid by such purchaser be delivered to him within six months from the date of such order."
:::

### How this actually runs

<MicroTree
  input="Property connected to a criminal case is before a Criminal Court or Magistrate, and a decision about its custody or disposal is needed."
  :gates="[
    { q: 'Is the investigation, inquiry or trial still ongoing, so that only interim custody or an early sale of perishable/sensitive property is in question?', no: 'Section 497 is not the governing provision on these facts; move to section 498, since the proceeding has concluded' },
    { q: 'Under section 497, have the fourteen-day statement and the photograph/videograph mandate actually been complied with?', no: 'Section 497(2)-(3) has not been satisfied — the property\'s evidentiary record is incomplete, and the thirty-day disposal-order clock under section 497(5) has not properly started running' },
    { q: 'Has the investigation, inquiry or trial now concluded, so that a final section 498 disposal order (destruction, confiscation, or delivery) is due?', no: 'Section 498 is not yet engaged; the property remains governed by section 497\'s interim custody regime' },
    { q: 'Is there a person who bought stolen property in good faith from a convicted thief, with recovered money available to compensate that purchaser?', no: 'Section 499 is not triggered on these facts; any property disposal proceeds under sections 497-498 alone' }
  ]"
  result="Property moves through a two-stage regime — interim custody and documentation under section 497 while the case is live, followed by a final disposal order under section 498 once the proceeding concludes — with section 499 available as a narrow, separate equitable remedy for an innocent purchaser of stolen goods, entirely independent of how the underlying property itself is disposed of."
  resultKind="discretionary"
  caveat="Sections 497(2)-(5)'s statement, photograph/videograph, and thirty-day timelines are drafted as mandatory duties on the Court or Magistrate, not on the parties — a party cannot waive them, though the practical consequence of non-compliance (as opposed to the duty itself) is not spelt out in the section's own text."
/>

### In plain English

Think of section 497 as the property's holding pattern while the case is still in the air, and section 498 as the landing. While a case is pending, the Court or Magistrate has discretion to keep property safe or, if it is perishable or otherwise sensible, sell it off early — but the Sanhita now insists on a paper (and photographic) trail: a description within fourteen days, a photograph or video, and a decision on what happens next within thirty days of that documentation being complete. Once the case actually ends, section 498 is the real disposal order — destroy it, confiscate it, or hand it to whoever is entitled to it, sometimes on the condition that they promise to bring it back if an appeal changes the outcome. Section 499 is a small act of fairness tucked into this scheme: if someone unknowingly bought stolen goods from a thief who is later convicted, and the thief's ill-gotten cash was seized on arrest, that innocent buyer can apply to get some of their money back out of that seized cash — up to what they actually paid, within six months of the order.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 497–499 are provisionally mapped to CrPC sections 451–453 (CrPC Chapter XXXIV, "Disposal of Property"), continuing what appears to be a consistent flat offset of 46 across this entire chapter. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Sections 498 and 499 read as close continuations of their apparent CrPC counterparts. Section 497 is the more significant departure: CrPC section 451's custody-and-early-sale power appears to have been a short, single-paragraph discretionary provision, whereas BNSS section 497 adds sub-sections (2)-(5) — the fourteen-day statement, the mandatory photograph/videograph (explicitly including mobile-phone photography as a permitted method), the evidentiary status of that record, and the thirty-day disposal-order deadline. This reads as a genuine, deliberate reform rather than a renumbered carryover, consistent with the Sanhita's broader pattern (seen elsewhere in electronic-evidence and timeline provisions) of building forensic documentation and statutory deadlines into ordinary police-and-court property handling. Verify the exact CrPC section 451 text independently before asserting this comparison in any submission.

### Test your instinct

:::: instinct A Magistrate receives seized property during investigation and orders it kept in custody under section 497(1), but the office does not prepare the fourteen-day statement or take a photograph until the forty-fifth day. At trial, the defence argues the property's evidentiary record is entirely inadmissible because section 497(2)-(3)'s deadlines were missed. Is the defence correct that the record is inadmissible?

::: ruling Not necessarily, though the delay is a genuine irregularity worth raising. Section 497(2) and (3) are drafted as mandatory duties on the Court or Magistrate ("shall"), and a forty-five day delay against a fourteen-day deadline is a clear breach of that duty. But the section does not itself say that a late-prepared statement or photograph becomes inadmissible — section 497(4) simply makes the statement and photograph, once prepared, usable as evidence; it does not condition that usability on timeliness. The stronger argument for the defence is not blanket inadmissibility but rather that the delay undermines the weight and reliability of the record — inviting scrutiny of what happened to the property in the unrecorded forty-five-day gap — which is a question of evidentiary weight for the trial court to assess, not an automatic bar.
:::
::::

:::: instinct A person is convicted of receiving stolen property (a laptop) that he had, in turn, sold to a third party who paid full market price without any reason to suspect it was stolen. No money was recovered from the convicted person on arrest — he had already spent it. Can the innocent third-party purchaser recover anything under section 499?

::: ruling No, not under section 499 as drafted. The section's remedy is specifically tied to money "taken out of the possession of the convicted person" on arrest — it is a mechanism for redirecting recovered cash to the innocent purchaser, not a general compensation scheme. Where no money was recovered because the convicted person had already spent it, there is no fund for section 499 to operate on, and the section provides no independent right to compensation from the convicted person's other assets or from the State. The innocent purchaser's remedy, if any, lies elsewhere — most plausibly a civil claim against the convicted person for the price paid, which is a separate proceeding entirely outside the scope of this section.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 497–499 of the BNSS is cited here, given the recency of the numbering. The CrPC's case law on custody and disposal of case property, and on the innocent-purchaser remedy, remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions — and, for section 497 specifically, against its materially expanded text — before it is pleaded.
:::

#### Sword and shield

For the **defence**, section 497(2)-(5)'s documentation timeline is a genuine audit trail worth demanding at the earliest opportunity — a missing or late statement, or the absence of a mandated photograph, is a concrete, checkable fact that can be used to challenge the reliability of the property's custody chain at trial. For the **prosecution**, timely compliance with section 497's fourteen-day and thirty-day deadlines is now a discipline worth building into standard case management, since failure to comply hands the defence exactly the kind of documentary gap described above. For a **third-party claimant**, section 498(2)'s conditional-delivery mechanism (a bond to restore the property if the order is later modified or set aside) is the practical route to getting property back early without waiting out the full appeal timeline, and section 499 is worth raising promptly and specifically wherever a client bought goods in good faith that later turn out to be stolen.

#### The limitation clock

Section 497(2) imposes a fourteen-day deadline (from production of the property) for the statement, and section 497(5) imposes a thirty-day deadline (from completion of the statement and photograph/videograph) for the disposal order. Section 498(4) separately bars carrying out most disposal orders for two months, or until a pending appeal is disposed of. Section 499's innocent-purchaser remedy must be exercised within six months of the order granting it. These are four distinct clocks; a practitioner tracking property recovery should calendar each one separately rather than treating this cluster as having a single limitation period.

#### Interlocking matrix

- **Sections 503–505 (this Chapter, cluster 3)** — the parallel disposal regime for property seized by police but never produced before a Criminal Court; section 498(3) expressly cross-refers to this track when a Court of Session routes property through the Chief Judicial Magistrate.
- **Section 500 (this Chapter, cluster 2)** — the appeal mechanism against orders made under sections 498 and 499; no disposal order under either section is truly final until this appeal window has run.
- **Bharatiya Sakshya Adhiniyam, 2023** — the evidentiary framework into which section 497(4)'s statement and photograph/videograph feed; verify the specific admissibility provisions governing electronic and photographic records before relying on this record at trial.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- Calendar all four timelines in this cluster separately at the moment property is seized: the fourteen-day statement deadline, the thirty-day disposal-order deadline, the two-month (or appeal-pending) bar on carrying out a section 498 order, and the six-month window for a section 499 application.
- Where a client's seized property has not been photographed or videographed within the section 497(3) timeframe, raise the gap in writing at the earliest hearing — creating a contemporaneous record of the irregularity is far more useful than raising it for the first time at trial.
- For a claimant seeking early release of property under section 498(2), draft the bond application to address both possession and the restoration condition explicitly, since the Court's willingness to release property early often turns on how concrete and enforceable the proposed bond terms are.
- Before advising a purchaser client on a section 499 application, confirm as a threshold fact whether any money was actually recovered from the convicted person on arrest — absent a recovered fund, the section provides no remedy, however sympathetic the purchaser's position.

---

## Sections 500–502 — Appeals against disposal orders, destruction of libellous and unsafe goods, and restoring evicted possession

### The dispute this solves

::: oneminute This cluster covers what happens after a disposal order is made, and two special categories of property that get their own dedicated destruction and restoration powers. Section 500 gives a person aggrieved by a section 498 or section 499 order a right of appeal, and lets the appellate Court stay, modify, alter or annul the order — importantly, the same power is also available to any Court already handling an appeal, confirmation, or revision in the underlying case, so a separate appeal is not always necessary. Section 501 is a narrow destruction power tied to specific Bharatiya Nyaya Sanhita convictions: obscene material and objectionable material get their copies destroyed on conviction, and so do adulterated food, drink, drugs or medical preparations. Section 502 addresses forcible dispossession of immovable property: where a conviction shows a person was thrown out of land or a house by criminal force or intimidation, the Court can order possession restored — but only within a tight one-month window after conviction.
:::

::: story A conviction for criminal intimidation, and a landlord evicted at gunpoint
A person is convicted of criminal intimidation after threatening a tenant with violence and forcibly evicting him from a rented house, taking over the premises himself. Section 502(1) lets the convicting Court, if it thinks fit, order that possession of the house be restored to the evicted tenant — evicting the convicted person by force if necessary — but only if the order is made within one month of the conviction; the proviso is absolute on this point. Suppose the trial Court, absorbed in sentencing, does not think to make this order within the month, and the case proceeds to appeal. Section 502(2) is the safety valve: the Court of appeal, confirmation, or revision may still make the restoration order while disposing of that appeal, reference, or revision, even though the trial Court's own one-month window has closed. And whichever Court ultimately makes the order, section 502(3) folds it into section 500's appeal machinery — the party dispossessed by the restoration order (the wrongdoer who is now being evicted in turn) gets the same right of appeal as anyone aggrieved by a section 498 or 499 order, while section 502(4) leaves the door open for either party to fight out the real, underlying property dispute in a civil suit.
:::

### The Act, decompiled

::: proviso Section 500 — Appeal against orders under section 498 or section 499

"500. (1) Any person aggrieved by an order made by a Court or Magistrate under section 498 or section 499, [[?may]] appeal against it to the Court to which appeals ordinarily lie from convictions by the former Court.
(2) On such appeal, the Appellate Court [[?may]] direct the order to be stayed pending disposal of the appeal, or may modify, alter or annul the order and make any further orders that may be just.
(3) The powers referred to in sub-section (2) [[?may]] also be exercised by a Court of appeal, confirmation or revision while dealing with the case in which the order referred to in sub-section (1) was made."
:::

::: proviso Section 501 — Destruction of libellous and other matter

"501. (1) On a conviction under section 294, section 295, or sub-sections (3) and (4) of section 356 of the Bharatiya Nyaya Sanhita, 2023, the Court [[?may]] order the destruction of all the copies of the thing in respect of which the conviction was had, and which are in the custody of the Court or remain in the possession or power of the person convicted.
(2) The Court [[?may]], in like manner, on a conviction under section 274, section 275, section 276 or section 277 of the Bharatiya Nyaya Sanhita, 2023, order the food, drink, drug or medical preparation in respect of which the conviction was had, to be destroyed."
:::

::: proviso Section 502 — Power to restore possession of immovable property

"502. (1) When a person is convicted of an offence by use of criminal force or show of force or by criminal intimidation, and it appears to the Court that, by such use of force or show of force or intimidation, any person has been dispossessed of any immovable property, the Court [[?may]], if it thinks fit, order that possession of the same be restored to that person after evicting by force, if necessary, any other person who may be in possession of the property:
Provided that no such order [[!shall]] be made by the Court more than one month after the date of the conviction.
(2) Where the Court trying the offence has not made an order under sub-section (1), the Court of appeal, confirmation or revision [[?may]], if it thinks fit, make such order while disposing of the appeal, reference or revision, as the case may be.
(3) Where an order has been made under sub-section (1), the provisions of section 500 [[!shall]] apply in relation thereto as they apply in relation to an order under section 499.
(4) No order made under this section [[!shall]] prejudice any right or interest to or in such immovable property which any person may be able to establish in a civil suit."
:::

### How this actually runs

<MicroTree
  input="A disposal order under section 498 or 499 has been made, or a conviction raises the possibility of libellous/unsafe-goods destruction or restoration of dispossessed immovable property."
  :gates="[
    { q: 'Is a person aggrieved by a section 498 or section 499 disposal order, and has that order not yet been appealed or otherwise finally settled?', no: 'Section 500\'s appeal route is not what is needed on these facts; consider whether sections 501 or 502 instead govern' },
    { q: 'Does the conviction fall under the specific BNS provisions listed in section 501 — obscene/objectionable-material offences or adulterated food/drink/drug offences?', no: 'Section 501\'s destruction power is not engaged; it applies only to the specific conviction categories the section names' },
    { q: 'Does the conviction show dispossession of immovable property by criminal force, show of force, or criminal intimidation, and is the trial Court still within one month of the conviction (or is an appeal, confirmation, or revision still pending)?', no: 'Section 502\'s restoration power is unavailable on these facts — either the dispossession was not by qualifying force/intimidation, or both the one-month trial-court window and any pending appellate proceeding have closed' }
  ]"
  result="A section 498/499 disposal order remains subject to appeal and stay/modification under section 500; specific BNS convictions for obscene, objectionable, or adulterated-goods offences trigger a discretionary destruction power under section 501; and a conviction showing forcible dispossession of immovable property triggers a discretionary, but time-boxed (or appellate-stage), restoration power under section 502 — itself folded back into section 500's appeal machinery."
  resultKind="discretionary"
  caveat="Section 502(1)'s one-month bar is strict at the trial-court level, but section 502(2) is a genuine second chance at the appellate stage — do not assume a missed one-month window forecloses restoration entirely if the matter is still in appeal, confirmation, or revision."
/>

### In plain English

Section 500 is the safety net over sections 498 and 499: nobody's property disposal order is truly beyond challenge, because an aggrieved person can appeal, and the appellate Court (or, more efficiently, whatever Court is already handling an appeal, confirmation, or revision in the case) can stay, modify, alter, or cancel it. Section 501 is a tightly scoped power to physically destroy the guilty object itself once there is a conviction for specific offences — obscene or objectionable material, or adulterated food, drink, drugs, or medicines — rather than leaving those copies or substances in circulation. Section 502 is about restoring someone forcibly thrown off their own land or out of their own house: if a conviction shows that is what happened, the Court can order possession handed back, using force if needed to remove the wrongdoer — but the trial Court only gets one month to do it, after which the power passes up to whichever appellate, confirmation, or revisional Court is handling the case next. And none of this forecloses a full civil suit over who actually owns or is entitled to the property in the long run.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 500–502 are provisionally mapped to CrPC sections 454–456 (CrPC Chapter XXXIV), continuing the same flat offset of 46 seen across this chapter. Section 501's cross-references are to the Bharatiya Nyaya Sanhita, 2023 rather than the Indian Penal Code, which is the expected substitution rather than a substantive change. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Nothing in the extracted text of sections 500-502 signals a substantive departure from the CrPC scheme beyond the expected substitution of BNS section numbers for the corresponding IPC provisions in section 501. Re-verify each specific numbering pair — including which BNS sections actually correspond to the obscene-material and adulterated-goods offences referenced — before citing it in submissions.

### Test your instinct

:::: instinct A trial Court convicts a person of criminal intimidation resulting in dispossession of a shop but does not make a section 502(1) restoration order within one month — the point simply is not raised by counsel. Six weeks later, the matter is still within the appeal period but no appeal has actually been filed yet. Can the dispossessed shop-owner still get a restoration order at this stage?

::: ruling Not through section 502(2) as it stands, on these facts, because that sub-section requires the matter to be before "the Court of appeal, confirmation or revision" — a proceeding that has not yet come into existence if no appeal has been filed. The shop-owner's most direct route is to ensure an appeal (or, if available, a revision) is actually filed, at which point section 502(2) becomes available to the appellate or revisional Court to make the restoration order while disposing of that proceeding. Simply waiting within the appeal period without filing does not itself revive the trial Court's own one-month power, which has already lapsed under section 502(1)'s proviso.
:::
::::

:::: instinct A person is convicted under section 501's adulterated-food provisions, and the Court orders destruction of the adulterated stock under section 501(2). The convicted person argues the stock has commercial value and should instead be confiscated and sold, with proceeds going to the State, rather than destroyed outright. Does section 501 permit this alternative?

::: ruling No. Section 501(2)'s power, as drafted, is specifically a destruction power — the Court may order the food, drink, drug or medical preparation "to be destroyed," with no alternative of confiscation-and-sale built into the section's own text. This is a deliberate distinction from sections 498 and 499, which do offer confiscation or delivery as alternatives to destruction; section 501 does not import that flexibility. Whatever commercial value the adulterated stock might have, section 501 does not authorise the Court to preserve that value through sale — the public-safety rationale behind destroying adulterated food, drink, drugs, or medical preparations overrides any argument for realising their market value.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 500–502 of the BNSS is cited here, given the recency of the numbering. CrPC case law on appeals against disposal orders and on restoration of possession following forcible dispossession remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For a party **aggrieved by a disposal order**, section 500 is worth invoking promptly — and worth raising even without filing a fresh appeal where an appeal, confirmation, or revision in the underlying case is already pending, since section 500(3) lets that Court exercise the same stay/modify/annul powers without a separate proceeding. For a **dispossessed party** under section 502, the one-month trial-court window is the priority target — counsel should raise the restoration request at sentencing itself, in writing, rather than risk the window lapsing and having to rely on an appellate Court's discretion under section 502(2). For a party facing **section 501 destruction**, there is little room to argue for a commercial alternative to destruction; the stronger available argument, if any, is to dispute whether the conviction actually falls within the specific BNS provisions the section lists.

#### The limitation clock

Section 502(1)'s proviso creates a hard one-month deadline, running from the date of conviction, for the trial Court's own restoration power — after which the power shifts (not extends) to whatever appellate, confirmation, or revisional proceeding is or becomes available under section 502(2). Section 500 does not itself specify a limitation period for the appeal it creates; that period is governed by whatever general appeal-limitation provisions apply to appeals from the convicting Court, which should be checked separately rather than assumed.

#### Interlocking matrix

- **Sections 498–499 (this Chapter, cluster 1)** — the disposal orders that section 500's appeal mechanism operates against; section 502(3) expressly imports section 500's machinery for restoration orders as well.
- **Sections 294, 295, 356(3)-(4), 274-277 of the Bharatiya Nyaya Sanhita, 2023** — the specific substantive offences that trigger section 501's destruction power; confirm the exact current numbering of each before citing.
- **Civil suit remedies** — section 502(4)'s express saving of civil rights and interests in the immovable property means a section 502 order is a criminal-process interim measure, not a substitute for a title or possession suit.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- Where a section 498 or 499 order is adverse, check first whether an appeal, confirmation, or revision is already pending in the underlying case before filing a fresh section 500 appeal — the pending proceeding may already be the faster route to the same relief.
- In any criminal-force or criminal-intimidation case involving dispossession from land or a house, flag section 502 explicitly at the sentencing stage and request the restoration order in writing before the one-month window can lapse.
- For section 501 matters, verify the exact BNS section numbers cited in the charge and conviction match the specific list in section 501(1)-(2) before assuming the destruction power is available — the power does not extend to every obscenity or food-safety-adjacent offence, only the ones the section names.
- Where a section 502 restoration order is contemplated, advise the client that it does not foreclose a civil suit over the underlying title or right to possession — plead and preserve that civil remedy separately rather than treating the criminal order as final.

---

## Sections 503–505 — Unclaimed seized property: proclamation, forfeiture to the State, and expedited sale

### The dispute this solves

::: oneminute Not all seized property ends up before a Criminal Court during a trial — a lot of it is seized by police and never produced in that way, either because no one is ever prosecuted or because the case does not require it. This cluster is the separate track for that property, run by the Magistrate rather than a trial Court. Section 503 lets the Magistrate order disposal or delivery of such property once its seizure is reported, and — where the entitled person cannot be found — requires a public proclamation giving anyone with a claim six months to come forward. Section 504 is what happens if nobody claims it in time: if the person who had it cannot show it was legally acquired, it goes to the State Government to be sold. Section 505 is the fast-track exception cutting across both: where the property is perishable, worth selling for the owner's benefit, or worth less than ten thousand rupees, the Magistrate does not have to wait out any of this — an immediate sale is permitted, with the proceeds then following the same rules that would have applied to the property itself.
:::

::: story A stack of unclaimed mobile phones and a Magistrate's proclamation
A police station reports to the Magistrate the seizure of a mobile phone recovered during a routine check, where no one has been arrested or charged and no criminal case has been registered against any identified person. The phone is never produced before a Criminal Court during any inquiry or trial — there is no trial. Under section 503(1), the Magistrate has independent power to decide what happens to it. Because the true owner is unknown, section 503(2) requires the Magistrate to issue a proclamation describing the phone and calling on anyone with a claim to appear within six months. Suppose no one appears, and the person who was found in possession of the phone cannot show it was legally acquired — section 504 then lets the Magistrate order it forfeited to the State Government for sale, with an appeal available to whichever Court ordinarily hears appeals from that Magistrate's convictions. Now suppose instead the seized item was not a durable phone but a quantity of fresh produce, or the phone itself was valued at only four thousand rupees — section 505 would let the Magistrate skip the six-month proclamation process entirely and order an immediate sale, since the property is either perishable or below the ten-thousand-rupee threshold, with the sale proceeds then standing in for the property under sections 503 and 504.
:::

### The Act, decompiled

::: proviso Section 503 — Procedure by police upon seizure of property

"503. (1) Whenever the seizure of property by any police officer is reported to a Magistrate under the provisions of this Sanhita, and such property is not produced before a Criminal Court during an inquiry or trial, the Magistrate [[?may]] make such order as he thinks fit respecting the disposal of such property or the delivery of such property to the person entitled to the possession thereof, or if such person cannot be ascertained, respecting the custody and production of such property.
(2) If the person so entitled is known, the Magistrate [[?may]] order the property to be delivered to him on such conditions (if any) as the Magistrate thinks fit and if such person is unknown, the Magistrate [[?may]] detain it and [[!shall]], in such case, issue a proclamation specifying the articles of which such property consists, and requiring any person who may have a claim thereto, to appear before him and establish his claim within six months from the date of such proclamation."
:::

::: proviso Section 504 — Procedure when no claimant appears within such period

"504. (1) If no person within such period establishes his claim to such property, and if the person in whose possession such property was found is unable to show that it was legally acquired by him, the Magistrate [[?may]] by order direct that such property shall be at the disposal of the State Government and may be sold by that Government and the proceeds of such sale shall be dealt with in such manner as the State Government may, by rules, provide.
(2) An appeal [[!shall]] lie against any such order to the Court to which appeals ordinarily lie from convictions by the Magistrate."
:::

::: proviso Section 505 — Power to sell perishable property

"505. If the person entitled to the possession of such property is unknown or absent and the property is subject to speedy and natural decay, or if the Magistrate to whom its seizure is reported is of opinion that its sale would be for the benefit of the owner, or that the value of such property is less than ten thousand rupees, the Magistrate [[?may]] at any time direct it to be sold; and the provisions of sections 503 and 504 [[!shall]], as nearly as may be practicable, apply to the net proceeds of such sale."
:::

### How this actually runs

<MicroTree
  input="Property has been seized by police and reported to a Magistrate, but has not been produced before a Criminal Court during an inquiry or trial."
  :gates="[
    { q: 'Is the property subject to speedy and natural decay, or does the Magistrate consider immediate sale to be for the owner\'s benefit, or is its value less than ten thousand rupees?', no: 'Section 505\'s fast-track sale is unavailable; the ordinary section 503-504 sequence applies instead' },
    { q: 'Is the person entitled to the property known, so that the Magistrate can simply order delivery under section 503(2)?', no: 'The Magistrate must detain the property and issue a section 503(2) proclamation, opening a six-month claim window' },
    { q: 'Has the six-month proclamation period expired without any successful claim, and can the person found in possession not show legal acquisition?', no: 'Section 504\'s forfeiture-to-the-State power is not yet available; the property remains in the section 503 custody/proclamation phase' }
  ]"
  result="Property never produced before a Criminal Court is disposed of by the Magistrate alone: delivered directly if the entitled person is known, held under a six-month public proclamation if not, and forfeited to the State Government for sale if that period lapses without a valid claim — subject throughout to section 505's fast-track sale for perishable, low-value, or owner-beneficial-sale property, which converts the property into cash but keeps it inside the same sections 503-504 framework."
  resultKind="discretionary"
  caveat="Section 505's fast-track sale changes the timing and form of disposal, not the underlying entitlement rules — the net proceeds still have to be dealt with under sections 503 and 504 as if they were the property itself, so an entitled claimant is not worse off merely because the property was sold quickly."
/>

### In plain English

This cluster handles the large volume of seized property that never becomes trial exhibit material — recovered goods where no case goes forward, or where the case does not need the item produced in court. The Magistrate runs this track independently. If the true owner is known, section 503 lets the Magistrate simply hand it back, possibly with conditions. If not, there has to be a genuine effort to find the owner: a public proclamation giving anyone with a claim six months to step forward. If nobody does, and the person who had the property cannot show they came by it honestly, section 504 lets the State take it and sell it. Section 505 exists because waiting six months does not make sense for everything — perishable goods obviously cannot wait, and neither, practically, can very low-value items (anything under ten thousand rupees) or property that is simply better off sold quickly for the owner's own benefit. In all of those cases, the Magistrate can order an immediate sale, and the money from that sale then gets treated exactly as the physical property would have been under sections 503 and 504.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 503–505 are provisionally mapped to CrPC sections 457–459 (CrPC Chapter XXXIV), completing the flat offset of 46 that appears to run through this entire chapter from section 497 onward. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Nothing in the extracted text of sections 503-505 signals a substantive departure from the CrPC's apparent scheme for unclaimed seized property — the proclamation mechanism, the six-month claim window, the forfeiture-on-default rule, and the perishable/low-value fast-track sale all read as continuations rather than reforms. The ten-thousand-rupee threshold in section 505 should be specifically checked against the current CrPC figure, since monetary thresholds are a common point of legislative updating even where the surrounding structure is unchanged. Re-verify each specific numbering pair independently before relying on it in submissions.

### Test your instinct

:::: instinct Police seize a laptop during a search and report the seizure to the Magistrate, but no criminal case is ever registered because no offence is ultimately made out. Eighteen months pass with no proclamation ever issued and no order made. Can the person from whose possession the laptop was seized simply demand its return, arguing the Magistrate's inaction has forfeited any right to invoke sections 503-505?

::: ruling The stronger argument is that the person can demand the Magistrate actually exercise the section 503 power — including delivery under section 503(2) if entitlement is not in dispute — rather than that the Magistrate's delay has automatically extinguished the sections 503-505 framework itself. Nothing in the text of sections 503-505 creates a deadline by which the Magistrate must act, or a consequence of forfeiting State power through delay; the sections describe what the Magistrate may and must do once engaged, not a time limit on engaging with the property at all. The practical remedy for an eighteen-month unexplained delay is to apply to the Magistrate directly for an order under section 503, or, if that fails, to seek appropriate relief from a superior court compelling the Magistrate to act — not to treat the delay itself as self-executing entitlement to return of the property.
:::
::::

:::: instinct A Magistrate, seized of a report of an unclaimed motorcycle worth approximately eight thousand rupees, decides to skip the six-month proclamation under section 505 on the basis that its value is under ten thousand rupees, and orders an immediate sale. No proclamation is ever issued, and a genuine owner later comes forward wanting the motorcycle back, only to learn it has already been sold. Does the genuine owner have any remedy?

::: ruling The genuine owner's remedy lies in the sale proceeds, not the motorcycle itself, because section 505 expressly converts the property into money and then applies sections 503 and 504 "as nearly as may be practicable" to those net proceeds — meaning the genuine owner should be able to establish a claim to the proceeds in essentially the same way they would have claimed the motorcycle itself under section 503(2), even without a proclamation having been separately issued for the sale proceeds. Section 505 does not eliminate the entitled owner's claim; it only changes the form the property takes by the time the claim is made. The owner cannot demand the motorcycle back once genuinely and properly sold under section 505, but is not left without recourse — the practical remedy is to pursue the proceeds before the Magistrate.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 503–505 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial body of case law on unclaimed seized property, proclamation requirements, and the perishable-property fast-track sale remains substantively relevant, but every citation must be independently re-verified against the BNSS's renumbered provisions before it is pleaded.
:::

#### Sword and shield

For a **claimant** whose property was seized but never produced in a criminal case, the first move is to write to the Magistrate directly invoking section 503 and asserting entitlement — this can shortcut the six-month proclamation process entirely where entitlement is not genuinely in dispute. For a **person in possession** at risk of section 504 forfeiture, the critical task is assembling proof of legal acquisition (purchase receipts, transfer records, prior ownership documentation) before the six-month window closes, since the burden under section 504(1) falls on the possessor to show lawful acquisition, not on the State to disprove it. For anyone concerned about a **section 505 fast-track sale**, the practical safeguard is to register a claim with the Magistrate as early as possible — the proceeds-based remedy after sale is workable but is inherently a weaker position than an intact claim to the original property.

#### The limitation clock

Section 503(2)'s proclamation opens a hard six-month window for claims to be established. Section 505's fast-track sale has no independent limitation period of its own — it can be invoked "at any time" the qualifying conditions (perishability, owner-benefit, or the value threshold) are met, which is precisely what makes it a fast-track. There is no explicit deadline within which the Magistrate must initially act under section 503, which is the gap worth flagging in the interlocking matrix below.

#### Interlocking matrix

- **Sections 497–499 (this Chapter, cluster 1)** and **section 498(3)** specifically — the trial-track disposal regime this cluster's Magistrate-only track exists alongside; section 498(3) is the express bridge, routing Court-of-Session property through the Chief Judicial Magistrate to be dealt with under sections 503-505.
- **Section 500 (this Chapter, cluster 2)** — note that section 500's appeal right is worded for orders under sections 498/499; section 504(2) independently creates its own appeal right for forfeiture orders under this cluster, so the two appeal routes should not be conflated.
- **General Clauses / State Government rule-making provisions** — sections 497(2) and 504(1) both defer procedural detail to State Government rules; verify the applicable State's rules before advising on the precise form of a statement or the manner of dealing with sale proceeds.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

- File a written claim with the Magistrate under section 503 as early as possible once seizure is known, rather than waiting for a proclamation to issue — this preserves the strongest possible position regardless of how the property is later disposed of.
- When defending against a likely section 504 forfeiture, compile documentary proof of legal acquisition well before the six-month proclamation period expires; the burden of showing lawful acquisition sits with the possessor.
- Where section 505's fast-track sale has already occurred, redirect the claim to the sale proceeds before the Magistrate under sections 503-504 "as nearly as may be practicable," rather than pursuing a claim to the property itself.
- In any case involving a Court of Session's disposal decision, check whether section 498(3) has routed the property to the Chief Judicial Magistrate for handling under this cluster, since that changes both the applicable procedure and the correct forum for any further application.
