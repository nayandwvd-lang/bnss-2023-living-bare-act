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

---
