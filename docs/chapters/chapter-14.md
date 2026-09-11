# Chapter XIV — Jurisdiction of the Criminal Courts in Inquiries and Trials

## Sections 197–200 — Where the trial happens: the general territorial rules

### The dispute this solves

::: oneminute Guilt and venue are two different questions. Before any court can even ask whether a crime was committed, it has to ask whether it is the right court to be asking at all.
A criminal trial does not happen wherever it is convenient — it happens where the Sanhita says it must, and getting that wrong is not a technicality, it goes to the Court's power to try the case at all. The default rule in section 197 sounds almost too obvious to need stating: a Court tries offences committed within its own local jurisdiction. But real offences rarely stay put — a fraud is planned in one district and executed in another, a theft's stolen goods travel across a state, a forged document is created in Delhi and used in Mumbai. Sections 198 to 200 are what the Sanhita does with all the ways a single offence can straddle more than one Court's territory, so that a prosecution never fails simply because the crime refused to stay in one place.
:::

::: story The fraud that crossed a state line
Deepak, in Nagpur, sends a series of fabricated invoices to a company in Bhopal, which pays out based on those invoices. Where should he be tried — Nagpur, where he sent the deception, or Bhopal, where the money actually left the company's account? Section 199 answers exactly this: where an act is an offence "by reason of anything which has been done and of a consequence which has ensued," the offence may be tried where the thing was done or where the consequence ensued — either Court has jurisdiction, and the prosecution is not forced to guess which one a Court will later say was the "real" venue. In a different case, investigators are simply unsure which of three neighbouring districts a robbery actually took place in, because the victim was disoriented and the gang moved quickly across a district boundary mid-robbery — section 198 exists precisely for that uncertainty, letting any of the local Courts with a plausible claim take up the case rather than letting the uncertainty itself become a shield for the accused.
:::

> **197.** Every offence [[!shall]] ordinarily be inquired into and tried by a Court within whose local jurisdiction it was committed.
>
> **198.** (a) When it is uncertain in which of several local areas an offence was committed; or
>
> (b) where an offence is committed partly in one local area and partly in another; or
>
> (c) where an offence is a continuing one, and continues to be committed in more local areas than one; or
>
> (d) where it consists of several acts done in different local areas,
>
> it [[?may]] be inquired into or tried by a Court having jurisdiction over any of such local areas.
>
> **199.** When an act is an offence by reason of anything which has been done and of a consequence which has ensued, the offence [[?may]] be inquired into or tried by a Court within whose local jurisdiction such thing has been done or such consequence has ensued.
>
> **200.** When an act is an offence by reason of its relation to any other act which is also an offence or which would be an offence if the doer were capable of committing an offence, the first-mentioned offence [[?may]] be inquired into or tried by a Court within whose local jurisdiction either act was done.

::: proviso Section 197's "ordinarily" is doing real work
Section 197 does not say a Court "shall only" try offences committed within its local jurisdiction — it says "ordinarily," and the very next three sections are the Sanhita's own list of departures from that default. Reading section 197 in isolation, without sections 198–200 (and the offence-specific rules immediately after), risks missing that the general rule is deliberately the *starting* point, not the whole answer, whenever an offence's facts do not sit neatly inside one Court's territory.
:::

### How this actually runs

<MicroTree
  input="An offence has been committed, and the question is which Court has territorial jurisdiction to inquire into or try it"
  :gates="[
    { q: 'Was the offence committed entirely within one Court’s local jurisdiction?',
      note: 'This is section 197’s ordinary case — the overwhelming majority of prosecutions never leave this branch',
      no: 'One of sections 198–200 must be examined next' },
    { q: 'Is the uncertainty about which of several areas the offence occurred in, or does it straddle several areas, continue across several areas, or consist of acts done in different areas?',
      note: 'Section 198’s four limbs (a)–(d) are not mutually exclusive — more than one can describe the same offence',
      no: 'Move to the section 199/200 analysis instead' },
    { q: 'Is the offence one where an act was done in one place and its consequence ensued in another, or one defined by its relation to a separate act elsewhere?',
      note: 'Sections 199 and 200 both give jurisdiction to more than one Court simultaneously — this is deliberate, not an oversight',
      no: 'None of these extended-venue rules apply on these facts' }
  ]"
  result="More than one Court can validly have territorial jurisdiction — the prosecution is not confined to a single, difficult-to-pin-down venue"
  resultKind="discretionary"
  caveat="These are venue rules, not rules about which Court first took cognizance — where two Courts both properly have jurisdiction under this Chapter, section 206 (not this cluster) resolves any resulting conflict" />

### In plain English

Section 197 is the default everyone already intuitively expects: try the case where the crime happened. Sections 198–200 exist because real offences do not always cooperate with that tidy picture. Section 198 covers straightforward geographic messiness — genuine uncertainty about which area, an offence split across areas, an offence that keeps happening in new areas, or an offence built out of acts in different areas. Section 199 covers the act/consequence split precisely — plan in one place, harm lands in another, either Court can hear it. Section 200 covers offences that are only offences *because* of their relationship to some other act — the venue for the first offence can follow either act's location. None of this dilutes the accused's rights; it simply prevents an accused from escaping trial altogether by arguing that no single Court can claim the whole offence as its own.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 197–200 appear to track CrPC ss. 177–180 (ordinary place of inquiry and trial; place of trial where act is offence by reason of relation to another offence; place of trial for offence committed partly in different jurisdictions; place of trial for offence triable where act done or consequence ensues) closely in substance, though the ordering within the cluster has not been independently cross-checked section-by-section against the old CrPC sequence. Flagged for verification before relying on the exact CrPC-to-BNSS section correspondence in a filing.*

### Test your instinct

:::: instinct A cheque is signed in Pune and the payment is dishonoured when presented at a bank branch in Kolkata. The accused argues only the Pune Court has jurisdiction, because that is where he personally acted.
::: ruling Kolkata may also have jurisdiction
Where an act is an offence by reason of something done and a consequence that ensued, section 199 gives jurisdiction to the Court where the act was done *or* where the consequence ensued — not exclusively the former. An accused cannot unilaterally select the more convenient venue for himself by insisting that only the place of his own act counts; the statute deliberately keeps both Courts available.
:::
::::

:::: instinct A gang commits a series of thefts that begin in one district and continue, without a clear break, into a neighbouring district, and investigators cannot say precisely where the "core" offence occurred.
::: ruling Either district's Court may proceed
This is squarely section 198's territory — uncertainty about the exact local area, or an offence continuing across more than one area, does not defeat jurisdiction. Any Court with jurisdiction over one of the implicated areas may inquire into or try the case; the accused cannot manufacture a jurisdictional gap simply because the offence itself was geographically untidy.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 197–200 are jurisdiction-allocation mechanics rather than doctrine attracting a single defining Supreme Court authority in this reading — territorial-jurisdiction challenges are typically fact-specific and decided on the particular offence's own act/consequence structure rather than on a general rule requiring a promoted citation.*

#### Sword and shield

As a **shield**, sections 198–200 protect a prosecution from being defeated purely on venue technicalities when an offence's facts naturally span more than one Court's territory. As a **sword** for the defence, a territorial-jurisdiction objection remains available where none of sections 198–200 in fact apply — an offence wholly local to one area, wrongly filed in another, is not rescued by these extended-venue rules.

#### The limitation clock

No independent limitation period is fixed by this cluster; territorial jurisdiction is assessed at the point cognizance is taken, not on a separate clock of its own.

#### Interlocking matrix

This cluster interlocks directly with section 206 (resolving jurisdiction disputes where two or more Courts have taken cognizance of the same offence) and with the offence-specific venue rules in sections 201–203 immediately following — sections 197–200 are the general rules that the offence-specific provisions then particularise for specific categories of crime.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before filing, map the offence's act(s) and consequence(s) against sections 197–200 to identify every Court that could validly have territorial jurisdiction — do not assume only one venue is available.
2. Where the defence intends to raise a territorial-jurisdiction objection, confirm affirmatively that none of sections 198–200's extended bases apply — a bare assertion that "the offence happened elsewhere" is not enough once any of these sections is in play.
3. Where an offence spans jurisdictions, consider strategically which of the available Courts is the more favourable venue before the prosecution locks in a choice.
4. Keep this cluster's general rules distinct from the offence-specific venue provisions that follow in sections 201–203 — the analysis differs by category of offence.

## Sections 201–203 — Venue rules built for specific categories of offence

### The dispute this solves

::: oneminute Some offences are inherently mobile — the offender moves, the property moves, the message travels. The general rules in sections 197–200 are not always sharp enough for these; sections 201–203 supply purpose-built venue rules for exactly the offences most likely to cross a boundary.
Dacoits do not confine themselves to one district; stolen property travels with whoever is carrying it; a kidnapped person is moved, concealed, detained in places far from where the abduction began; a cheating scheme sent by electronic message can originate in one city and land in another entirely. For this specific list of offences — the ones where geography is practically built into how the crime is committed — the Sanhita does not leave the venue question to the general rules alone. It gives each category its own tailored answer, and it adds a distinct rule for offences timed to a journey or voyage, where the offender and victim may be crossing several jurisdictions in the course of a single, continuous trip.
:::

::: story The stolen phone that changed hands three times
A phone is stolen in Lucknow, sold to a fence in Kanpur, and later found in the possession of a buyer in Agra who claims he did not know it was stolen. Section 201(3) gives the prosecution a real choice: try the theft where it was committed, or where the stolen property was found in the possession of anyone who received or retained it knowing or having reason to believe it was stolen — Kanpur and Agra are both live options, not just Lucknow. In a separate case, a scammer in Chennai sends fraudulent investment messages by WhatsApp to a victim in Delhi, who transfers money electronically. Section 202(1) makes clear that where deception is practised through electronic communications, the Court where the message was sent and the Court where it was received both have jurisdiction — geography built on the technology of the offence itself, not just the old physical-presence model.
:::

> **201. (1)** Any offence of dacoity, or of dacoity with murder, of belonging to a gang of dacoits, or of escaping from custody, [[?may]] be inquired into or tried by a Court within whose local jurisdiction the offence was committed or the accused person is found.
>
> **(2)** Any offence of kidnapping or abduction of a person [[?may]] be inquired into or tried by a Court within whose local jurisdiction the person was kidnapped or abducted or was conveyed or concealed or detained.
>
> **(3)** Any offence of theft, extortion or robbery [[?may]] be inquired into or tried by a Court within whose local jurisdiction the offence was committed or the stolen property which is the subject of the offence was possessed by any person committing it or by any person who received or retained such property knowing or having reason to believe it to be stolen property.
>
> **(4)** Any offence of criminal misappropriation or of criminal breach of trust [[?may]] be inquired into or tried by a Court within whose local jurisdiction the offence was committed or any part of the property which is the subject of the offence was received or retained, or was required to be returned or accounted for, by the accused person.
>
> **(5)** Any offence which includes the possession of stolen property [[?may]] be inquired into or tried by a Court within whose local jurisdiction the offence was committed or the stolen property was possessed by any person who received or retained it knowing or having reason to believe it to be stolen property.
>
> **202. (1)** Any offence which includes cheating, [[?may]], if the deception is practised by means of electronic communications or letters or telecommunication messages, be inquired into or tried by any Court within whose local jurisdiction such electronic communications or letters or messages were sent or were received; and any offence of cheating and dishonestly inducing delivery of property [[?may]] be inquired into or tried by a Court within whose local jurisdiction the property was delivered by the person deceived or was received by the accused person.
>
> **(2)** Any offence punishable under ⚠️ *section 82 of the Bharatiya Nyaya Sanhita, 2023* [[?may]] be inquired into or tried by a Court within whose local jurisdiction the offence was committed or the offender last resided with his or her spouse by the first marriage, or the wife by the first marriage has taken up permanent residence after the commission of the offence.
>
> **203.** When an offence is committed whilst the person by or against whom, or the thing in respect of which, the offence is committed is in the course of performing a journey or voyage, the offence [[?may]] be inquired into or tried by a Court through or into whose local jurisdiction that person or thing passed in the course of that journey or voyage.

::: proviso Section 201's list is closed, not illustrative
Section 201 names specific offence categories — dacoity and its variants, kidnapping/abduction, theft/extortion/robbery, criminal misappropriation/breach of trust, and possession of stolen property. It is not a general template for "any offence involving movement of property or person" — an offence outside this named list falls back to the general rules in sections 197–200, not to section 201 by analogy.
:::

### How this actually runs

<MicroTree
  input="An offence within one of section 201–203’s specific categories has been committed across more than one local area"
  :gates="[
    { q: 'Is the offence dacoity (or its variants), kidnapping/abduction, theft/extortion/robbery, misappropriation/breach of trust, or possession of stolen property?',
      note: 'Section 201’s five sub-sections are offence-specific, not a general movable-property rule — match the facts to the exact sub-section',
      no: 'Section 201 does not apply; check sections 202–203 or fall back to the general rules in sections 197–200' },
    { q: 'Does the offence involve cheating practised through electronic communications, letters, or telecommunication messages, or a bigamy-type offence under BNS 2023 ⚠️ s. 82?',
      note: 'Section 202 gives jurisdiction to both the sending and receiving ends for electronic-cheating offences, and to both the offence location and the first spouse’s residence for the bigamy-type offence',
      no: 'Section 202 does not apply on these facts' },
    { q: 'Was the offence committed while a person or thing was in the course of a journey or voyage?',
      note: 'Section 203 covers the whole route of the journey, not merely the start or end point',
      no: 'None of the offence-specific venue rules in this cluster apply' }
  ]"
  result="Any of the Courts connected to the offence under the applicable specific rule may inquire into or try it"
  resultKind="discretionary"
  caveat="These provisions are cumulative with, not substitutes for, the general venue rules in sections 197–200 — where an offence falls outside sections 201–203’s named categories, the general rules still apply" />

### In plain English

Sections 201–203 are the Sanhita being specific about the offences it already knows, from experience, are the most likely to be geographically messy. Dacoity gangs move, so section 201(1) lets the trial follow either the crime scene or wherever the accused is found. Kidnapping victims are moved, concealed, detained — section 201(2) follows all of it. Theft, extortion, robbery, misappropriation, and stolen-property offences follow the property itself, not just the original act. Cheating by electronic message follows the message's two ends; the BNS ⚠️ s. 82 offence (bigamy-type) follows either the offence location or the abandoned spouse's residence — recognising that the harm of that offence is felt where the first spouse actually lives, which may be far from where the offence technically occurred. And section 203 recognises that some offences happen mid-transit, so the entire route, not just a single point on it, is fair territorial game.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 201–203 appear to track CrPC ss. 181–182 (place of trial in case of certain offences; place of trial for offences committed by letters, etc.) closely, extended in s.202(1) to cover electronic communications explicitly, which is a natural modernisation of the CrPC's letter-based language rather than a substantive departure — but the precise pre-BNSS wording should be checked before asserting "electronic communications" as a genuinely new addition versus a judicially-read-in extension of "letters." The BNS 2023 s.82 cross-reference in s.202(2) has not been independently verified against BNS's own text, which is outside this repository's verified corpus, and is flagged accordingly.*

### Test your instinct

:::: instinct A person is kidnapped in Jaipur, moved through two other districts, and eventually released in Udaipur. The accused argues only the Jaipur Court (where the kidnapping began) has jurisdiction.
::: ruling All four districts may have jurisdiction
Section 201(2) does not confine jurisdiction to the place the kidnapping began — it extends to every local area through which the person "was kidnapped or abducted or was conveyed or concealed or detained." Each district the victim passed through or was held in is a potential venue; the accused cannot narrow the prosecution's choice down to the single earliest point in the chain.
:::
::::

:::: instinct A fraudulent email is drafted and sent from a server physically located outside the sender's home city, and opened by the victim on a phone while travelling. The accused argues jurisdiction is impossible to fix because neither party was in a fixed location.
::: ruling Jurisdiction still lies, under section 202(1) or section 203
Section 202(1) fixes jurisdiction by where the communication was sent or received, not by where the parties were domiciled or where a server happened to be routed through — and if the victim was travelling at the relevant time, section 203's journey rule independently extends jurisdiction to every local area the victim passed through while the offence was being committed against him. The offence's mobility does not defeat jurisdiction; these sections exist precisely to answer that argument.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. These are offence-specific venue-allocation rules rather than doctrine in this reading; venue challenges under this cluster tend to turn on the specific statutory sub-section's wording rather than a general body of case law.*

#### Sword and shield

As a **sword**, this cluster gives the prosecution real flexibility to file in the most practical or evidentially convenient of several valid venues for these specific offence categories. As a **shield**, a defence venue challenge remains available where the offence charged genuinely falls outside section 201's closed list of categories, or outside section 202's electronic-communication/BNS s.82 scope, or where no journey or voyage was in fact underway for section 203 to apply.

#### The limitation clock

No independent limitation period is fixed by this cluster; venue is assessed at the point cognizance is taken.

#### Interlocking matrix

This cluster interlocks with sections 197–200 as the offence-specific layer sitting on top of the general venue rules, and with section 204 immediately following (venue for offences triable together) where multiple offences under this cluster's categories are jointly charged. Section 202(2)'s bigamy-type cross-reference interlocks with ⚠️ BNS 2023 s.82, verification of which is outside this repository's confirmed corpus.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Match the offence precisely to one of section 201's five named sub-sections before relying on it — an offence just outside the list does not get the benefit of this cluster by analogy.
2. In electronic-cheating cases, identify both the sending and receiving jurisdictions early, since either is available under section 202(1) and the choice may materially affect the practical conduct of the case.
3. In a bigamy-type prosecution under ⚠️ BNS s. 82, consider the first spouse's current residence as an independent venue basis, not just the location of the offence itself.
4. Where an offence occurred mid-journey, map the entire route under section 203 before conceding that only the origin or destination point can be the venue.

## Sections 204–206 — Joint trials, State-directed transfers, and resolving a jurisdictional standoff

### The dispute this solves

::: oneminute One trial for offences that belong together, a State Government power to move cases between sessions divisions, and a tie-breaker when two Courts both think the case is theirs. Sections 204–206 close out the general venue framework with the rules for what happens once more than one Court is genuinely in the picture.
Charging every offence separately, in whatever Court happens to have jurisdiction over each individual act, would multiply trials and fragment evidence that really belongs together — section 204 avoids that by letting a single competent Court try offences that could lawfully be charged and tried together under the joinder provisions. Section 205 hands the State Government a broader administrative lever, letting it redirect cases between sessions divisions for reasons of efficient administration, subject to not overriding a superior court's own direction. And section 206 is the actual tie-breaker: when two or more Courts have both taken cognizance of the same offence, the Sanhita does not leave the resulting standoff to chance — it names exactly which High Court decides, and shuts down every other pending proceeding once that decision is made.
:::

::: story Two Courts, one offence, one winner
A complaint against Nikhil is filed in Court A in one district; unaware of this, the police also submit a charge sheet for the very same offence to Court B in a neighbouring district. Both Courts take cognizance. Neither is obviously wrong under sections 197–203 — jurisdiction genuinely overlaps. Section 206 resolves it cleanly: if both Courts are subordinate to the same High Court, that High Court decides which one proceeds; if they are subordinate to different High Courts, the High Court within whose appellate jurisdiction proceedings were first commenced decides. The moment that High Court rules, every other proceeding on that same offence stops — Nikhil is not tried twice, and the system is not left running two parallel prosecutions on the same facts.
:::

> **204.** Where—
>
> (a) the offences committed by any person are such that he [[?may]] be charged with, and tried at one trial for, each such offence by virtue of the provisions of section 242, section 243 or section 244; or
>
> (b) the offence or offences committed by several persons are such that they [[?may]] be charged with and tried together by virtue of the provisions of section 246,
>
> the offences [[?may]] be inquired into or tried by any Court competent to inquire into or try any of the offences.
>
> **205.** Notwithstanding anything contained in the preceding provisions of this Chapter, the State Government [[?may]] direct that any case or class of cases committed for trial in any district [[?may]] be tried in any sessions division:
>
> Provided that such direction is not repugnant to any direction previously issued by the High Court or the Supreme Court under the Constitution, or under this Sanhita or any other law for the time being in force.
>
> **206.** Where two or more Courts have taken cognizance of the same offence and a question arises as to which of them ought to inquire into or try that offence, the question [[!shall]] be decided—
>
> (a) if the Courts are subordinate to the same High Court, by that High Court;
>
> (b) if the Courts are not subordinate to the same High Court, by the High Court within the local limits of whose appellate criminal jurisdiction the proceedings were first commenced,
>
> and thereupon all other proceedings in respect of that offence [[!shall]] be discontinued.

::: proviso Section 205's State power is deliberately subordinate to the courts
Section 205 opens with "notwithstanding anything contained in the preceding provisions of this Chapter" — a real non-obstante clause, giving the State Government's redirection power priority over the ordinary venue rules. But the proviso immediately caps that power: it cannot be exercised in a way that is repugnant to a High Court or Supreme Court direction. This is a deliberately asymmetric hierarchy — administrative convenience yields to judicial direction, not the other way round.
:::

### How this actually runs

<MicroTree
  input="More than one offence, or more than one Court, is potentially in play for the same set of facts"
  :gates="[
    { q: 'Are the offences ones that could lawfully be charged and tried at one trial under sections 242, 243, 244 (same person) or section 246 (several persons)?',
      note: 'Section 204 does not create a new joinder rule — it borrows the joinder eligibility already fixed elsewhere and simply answers the venue question for it',
      no: 'Section 204 does not extend jurisdiction on this basis; each offence’s own venue rule governs separately' },
    { q: 'Has the State Government issued a direction under section 205 moving the case or class of cases to a different sessions division?',
      note: 'Check first whether that direction conflicts with any existing High Court or Supreme Court direction — if it does, the section 205 direction does not prevail',
      no: 'The ordinary venue determined under sections 197–204 stands' },
    { q: 'Have two or more Courts already taken cognizance of the same offence?',
      note: 'Section 206’s two-limb rule turns on whether the Courts share a common High Court — same-High-Court cases and different-High-Court cases are decided by different deciding authorities',
      no: 'No section 206 conflict has yet arisen' }
  ]"
  result="A single competent Court proceeds with the case — through joinder venue, a State-directed sessions division, or a High Court’s resolution of a jurisdictional conflict — and every other proceeding on the same offence stops"
  resultKind="mandatory"
  caveat="Section 206’s discontinuance is mandatory once the deciding High Court rules — it is not a further discretionary step left to the losing Court" />

### In plain English

Section 204 is efficiency, not a new source of jurisdiction — if the joinder rules elsewhere in the Sanhita already permit trying several offences (or several people) together, section 204 simply confirms that any Court competent for any one of those offences can hear the whole joined case. Section 205 is the State Government's administrative override — able to redirect cases between sessions divisions for reasons of its own, but deliberately fenced in so it cannot contradict a court's own direction. Section 206 is the Sanhita refusing to leave a genuine jurisdictional standoff unresolved: it names the deciding authority precisely (same High Court, or the High Court where proceedings started first if the Courts answer to different High Courts) and makes the losing side's proceeding stop automatically, not as a matter of further discretion.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 204–206 appear to track CrPC ss. 184–186 (place of trial for offences triable together; power to order cases to be tried in different sessions divisions; High Court to decide, in case of doubt, district where inquiry or trial shall take place) closely, with the joinder cross-references in s.204 updated to the BNSS's own renumbered joinder provisions (sections 242–244, 246) rather than the CrPC's original section numbers — those cross-references should be independently confirmed against BNSS's own joinder chapter before relying on them.*

### Test your instinct

:::: instinct Two Courts subordinate to different High Courts have both taken cognizance of the same offence. The accused simply picks whichever result he prefers and asks that Court to proceed.
::: ruling Not the accused's choice — a fixed statutory tie-breaker applies
Section 206(b) does not leave the choice of forum to either party — where the Courts are subordinate to different High Courts, the deciding authority is specifically the High Court within whose appellate criminal jurisdiction proceedings were first commenced. Neither the accused nor the prosecution gets to select the more favourable Court; the statute fixes the decision-maker by reference to a neutral, factual criterion (which proceeding started first).
:::
::::

:::: instinct The State Government directs that a case be tried in a different sessions division, but a High Court had already issued its own direction on the same case pointing the other way. The State proceeds with its direction regardless.
::: ruling The State's direction does not prevail
Section 205's proviso is explicit: the State Government's redirection power cannot be exercised in a manner repugnant to a direction already issued by the High Court (or Supreme Court). The non-obstante opening of section 205 gives the State priority over the Chapter's ordinary venue rules, but not over a superior court's own direction — proceeding with the State's contrary direction here exceeds what section 205 authorises.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 204–206 are jurisdiction-consolidation and conflict-resolution mechanics rather than doctrine attracting a defining authority in this reading.*

#### Sword and shield

As a **sword**, section 204 lets the prosecution consolidate genuinely joinable offences or accused persons into a single trial rather than fragmenting the case across multiple Courts. As a **shield**, section 206 protects an accused from facing simultaneous, duplicate proceedings on the same offence in different Courts — the mandatory discontinuance of all but the winning proceeding is the structural safeguard against that risk.

#### The limitation clock

No independent limitation period is fixed by this cluster.

#### Interlocking matrix

Section 204 interlocks directly with the joinder-of-charges provisions (sections 242, 243, 244, 246) elsewhere in the Sanhita — it borrows their eligibility criteria wholesale rather than restating them. Section 206 interlocks with sections 197–203 as the resolution mechanism for exactly the kind of overlapping jurisdiction those sections deliberately create by naming more than one valid venue.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before seeking a joint trial under section 204, confirm the underlying joinder eligibility under sections 242, 243, 244, or 246 independently — section 204 does not itself establish that offences or persons may be tried together.
2. Where a State Government direction under section 205 is invoked or challenged, check first for any pre-existing High Court or Supreme Court direction on the same case — repugnancy to that direction is a complete answer to the State's power.
3. On discovering parallel proceedings on the same offence, move promptly under section 206 rather than letting both proceedings run — delay risks duplicated evidence and conflicting findings before the tie-breaker is even invoked.
4. Once the deciding High Court rules under section 206, treat the discontinuance of the other proceeding as automatic — do not wait for a separate order from the losing Court.

## Sections 207–209 — When the offence, or the offender, is beyond the local Court's reach entirely

### The dispute this solves

::: oneminute Everything so far in this Chapter assumes the offence happened somewhere in India, within reach of some Indian Court. Sections 207–209 are what happens when even that assumption breaks down.
A Magistrate can believe, with good reason, that someone within his local jurisdiction has committed an offence entirely outside it — even outside India — and still needs a way to compel that person to answer for it. Section 207 gives a first-class Magistrate a limited, bridging power: inquire as though the offence happened locally, then route the person to wherever jurisdiction actually lies. Sections 208 and 209 go further still, into offences committed genuinely outside India — by a citizen anywhere, or by anyone on an Indian-registered ship or aircraft — and build the two things that make such a prosecution practically possible: a legal fiction that lets India treat the offence as though committed within it (subject to the Central Government's prior sanction), and a mechanism for actually getting evidence from foreign proceedings into an Indian courtroom.
:::

::: story The offence committed on the high seas
A crew member on an Indian-registered cargo ship commits an assault while the vessel is on the high seas, outside any country's territorial waters. Section 208 makes this triable in India — the offence is treated as if committed at any place in India where the accused is found, or where it is registered — but only with the Central Government's previous sanction, a deliberate check on prosecuting extraterritorial conduct without executive-level oversight. If the case also needs evidence taken abroad — say a deposition from a foreign port authority — section 209 lets the Central Government direct that depositions or exhibits from a foreign judicial officer, or from an Indian diplomatic or consular representative posted there, be received as evidence in the Indian trial, in any case where the Court could otherwise have issued a commission to take that evidence itself.
:::

> **207. (1)** When a Magistrate of the first class sees reason to believe that any person within his local jurisdiction has committed outside such jurisdiction (whether within or outside India) an offence which cannot, under the provisions of sections 197 to 205 (both inclusive), or any other law for the time being in force, be inquired into or tried within such jurisdiction but is under any law for the time being in force triable in India, such Magistrate [[?may]] inquire into the offence as if it had been committed within such local jurisdiction and compel such person in the manner hereinbefore provided to appear before him, and send such person to the Magistrate having jurisdiction to inquire into or try such offence, or, if such offence is not punishable with death or imprisonment for life and such person is ready and willing to give bail to the satisfaction of the Magistrate acting under this section, take a bond or bail bond for his appearance before the Magistrate having such jurisdiction.
>
> **(2)** When there are more Magistrates than one having such jurisdiction and the Magistrate acting under this section cannot satisfy himself as to the Magistrate to or before whom such person should be sent or bound to appear, the case [[!shall]] be reported for the orders of the High Court.
>
> **208.** When an offence is committed outside India—
>
> (a) by a citizen of India, whether on the high seas or elsewhere; or
>
> (b) by a person, not being such citizen, on any ship or aircraft registered in India,
>
> he [[?may]] be dealt with in respect of such offence as if it had been committed at any place within India at which he may be found or where the offence is registered in India:
>
> Provided that notwithstanding anything in any of the preceding sections of this Chapter, no such offence [[!shall]] be inquired into or tried in India except with the previous sanction of the Central Government.
>
> **209.** When any offence alleged to have been committed in a territory outside India is being inquired into or tried under the provisions of section 208, the Central Government [[?may]], if it thinks fit, direct that copies of depositions made or exhibits produced, either in physical form or in electronic form, before a judicial officer, in or for that territory or before a diplomatic or consular representative of India in or for that territory [[?may]] be received as evidence by the Court holding such inquiry or trial in any case in which such Court might issue a commission for taking evidence as to the matters to which such depositions or exhibits relate.

::: proviso Section 208's fiction does not operate without the Central Government's say-so
Section 208 lets an extraterritorial offence be treated as if committed in India — but the proviso is absolute: "no such offence shall be inquired into or tried in India except with the previous sanction of the Central Government." This is not a formality that can be supplied after the fact or cured mid-trial; it is a jurisdictional precondition to the trial happening at all, and the proviso expressly overrides anything else in this Chapter that might otherwise suggest a Court could proceed without it.
:::

### How this actually runs

<MicroTree
  input="A Magistrate believes an offence has been committed by a person within his local jurisdiction, but the offence itself occurred elsewhere — possibly outside India"
  :gates="[
    { q: 'Is the offence one that cannot be tried within the Magistrate’s own jurisdiction under sections 197–205 or any other law, but is triable somewhere in India?',
      note: 'Section 207 is a bridging power — it lets the Magistrate compel appearance and route the person onward, not decide the case himself',
      no: 'The ordinary venue rules already fix the correct forum; section 207 is unnecessary' },
    { q: 'Was the offence in fact committed outside India, by an Indian citizen anywhere or by anyone on an Indian-registered ship or aircraft?',
      note: 'Section 208’s fiction only operates for this specific pair of categories — citizenship of the offender, or the Indian registration of the vessel',
      no: 'Section 208 does not extend jurisdiction to this offence' },
    { q: 'Has the Central Government given its previous sanction to inquire into or try the offence in India?',
      note: 'This is an absolute precondition under the proviso — nothing else in the Chapter can substitute for it',
      no: 'The offence may not be inquired into or tried in India at all, regardless of how clearly section 208’s fiction would otherwise apply' },
    { q: 'Does the case require evidence taken abroad — depositions or exhibits from a foreign judicial officer or an Indian diplomatic/consular representative?',
      note: 'Section 209 is available only where the Court could otherwise have issued a commission for that same evidence — it is not a separate, broader evidence-gathering power',
      no: 'Ordinary evidence rules apply without section 209' }
  ]"
  result="The offence is inquired into or tried in India — through section 207’s routing power, or section 208’s fiction with the Central Government’s sanction — with section 209 available to bring in evidence taken abroad"
  resultKind="discretionary"
  caveat="Section 208’s previous-sanction requirement is not curable after the trial has begun — it is a precondition, and its absence goes to the Court’s jurisdiction to try the offence at all" />

### In plain English

Section 207 is a practical fix for a narrow problem: a Magistrate who correctly recognises an offence is not his to try, but who still needs the power to compel the accused's appearance and get him to the right forum, rather than being powerless simply because the crime happened elsewhere. Section 208 tackles a bigger problem — genuinely extraterritorial offences — with a legal fiction that pretends the offence happened in India, but Parliament was careful to fence that fiction in with an absolute Central Government sanction requirement, since prosecuting conduct that happened entirely outside India's territory carries real diplomatic and jurisdictional weight that should not rest on a single Magistrate's or even a High Court's decision alone. Section 209 then solves the practical evidentiary problem that naturally follows from section 208 prosecutions: how do you get testimony from a foreign port, a foreign court, or a foreign proceeding into an Indian trial — by letting the Central Government authorise depositions and exhibits from abroad to stand in for evidence the Court could otherwise have taken by commission.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS ss. 207–209 appear to track CrPC ss. 188–189 and the surrounding extraterritorial-jurisdiction provisions (offences committed outside India; and the corresponding evidence-receipt mechanism) closely, with s.207 apparently corresponding to a CrPC provision on Magistrates' power to compel appearance for offences committed beyond local jurisdiction. Section 209's explicit inclusion of "electronic form" for depositions and exhibits is flagged as a plausible BNSS-era modernisation, not confirmed against the CrPC's original wording — check before relying on the comparison.*

### Test your instinct

:::: instinct An Indian citizen commits an offence while on a private trip abroad, entirely outside any ship or aircraft. On returning to India, he is put on trial without any Central Government sanction being sought, on the theory that citizenship alone is enough.
::: ruling Citizenship is necessary but not sufficient — sanction is still required
Section 208(a) does extend to an offence committed outside India "by a citizen of India, whether on the high seas or elsewhere" — so citizenship alone can bring the offence within the section's fiction. But the proviso is a separate, additional requirement: no such offence may be inquired into or tried in India except with the Central Government's previous sanction. Citizenship satisfies the threshold category; it does not substitute for the sanction the proviso independently demands.
:::
::::

:::: instinct A Court needs testimony from a witness who gave a deposition before a foreign judicial officer in a country where the offence was committed, but the Court itself could never have issued a commission to take evidence in that country under the ordinary rules.
::: ruling Section 209 does not apply
Section 209's power to direct that foreign depositions or exhibits be received as evidence is explicitly limited to "any case in which such Court might issue a commission for taking evidence as to the matters to which such depositions or exhibits relate." Where the Court could never have issued a commission for that evidence in the first place, section 209 supplies no independent, broader route to bring it in regardless.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 207–209 are jurisdictional-machinery provisions for a relatively rare category of case (extraterritorial offences); while Supreme Court authority on Central Government sanction requirements for extraterritorial prosecutions likely exists, no specific citation is held with sufficient confidence to promote here.*

#### Sword and shield

As a **shield**, section 208's Central Government sanction requirement is an absolute jurisdictional defence available to any accused facing an extraterritorial-offence prosecution where sanction was never obtained — this goes to the Court's power to try the case at all, not merely to a procedural irregularity. As a **sword**, section 207 lets the prosecution keep a case alive administratively (through the routing and bail-bond mechanism) even when the arresting Magistrate is not the one who will ultimately try it.

#### The limitation clock

No independent limitation period is fixed by this cluster.

#### Interlocking matrix

Section 207 interlocks with sections 197–205 as the fallback for offences those sections cannot place within any single Magistrate's jurisdiction. Section 209 interlocks directly with section 208 — it is only available for offences actually being tried under that section's extraterritorial fiction, and it interlocks with the Sanhita's general commission-for-evidence provisions as the reference point for when it may be invoked.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. In any extraterritorial-offence prosecution under section 208, verify at the earliest possible stage that Central Government sanction was in fact obtained — its absence is a complete, threshold defence.
2. Where section 207 is invoked, confirm the arresting Magistrate has correctly identified that the offence cannot be tried within his own jurisdiction under sections 197–205 before treating the routing power as available.
3. Before relying on foreign depositions or exhibits under section 209, confirm the Court could independently have issued a commission for that same evidence — section 209 is not a general gateway for foreign evidence.
4. Where an accused is bailable under section 207(1) pending transfer to the proper Magistrate, ensure the bond is properly conditioned on appearance before that Magistrate specifically, not before the referring Magistrate.

---
