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

---
