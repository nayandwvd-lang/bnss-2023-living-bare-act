# Chapter XXIII — Plea Bargaining

## Section 289 — Who can even ask: the eligibility gate into plea bargaining

### The dispute this solves

::: oneminute Plea bargaining is a negotiated, mutually-satisfactory disposition of a criminal case — but before any negotiation can begin, section 289 decides who is even allowed to ask for one. Two origin gateways are open: a case where the police have forwarded a section 193 report alleging an offence, or a case where a Magistrate has taken cognizance on complaint, examined the complainant and witnesses under section 223, and issued process under section 227. Either way, the offence must not carry death, life imprisonment, or imprisonment exceeding seven years — this Chapter is confined to comparatively less serious offences. And even within that severity band, two categorical exclusions apply regardless of how minor the offence looks on paper: an offence affecting the socio-economic condition of the country (a category the Central Government itself defines by notification under section 289(2)) and any offence committed against a woman or a child. Both exclusions are absolute — they are not weighed against the offence's punishment band, they simply take the case outside this Chapter altogether.
:::

::: story A cheating case, a seven-year ceiling, and a notification that decides the outcome before negotiation even starts
An accused is proceeded against on a police report alleging an offence punishable with up to five years' imprisonment — comfortably under section 289(1)'s seven-year ceiling, and originating through the section 193 police-report gateway. Before advising a plea-bargaining application, counsel checks whether the offence has been notified by the Central Government as one affecting the socio-economic condition of the country under section 289(2). If it has, the case is excluded from this Chapter no matter how far under the seven-year ceiling it falls — the notification, not the punishment band, is what ultimately decides whether the door is open.
:::

> **289. (1)** This Chapter [[!shall]] apply in respect of an accused against whom—
> (a) the report has been forwarded by the officer in charge of the police station under section 193 alleging therein that an offence appears to have been committed by him other than an offence for which the punishment of death or of imprisonment for life or of imprisonment for a term exceeding seven years has been provided under the law for the time being in force; or
> (b) a Magistrate has taken cognizance of an offence on complaint, other than an offence for which the punishment of death or of imprisonment for life or of imprisonment for a term exceeding seven years, has been provided under the law for the time being in force, and after examining complainant and witnesses under section 223, issued the process under section 227,
>
> but does not apply where such offence affects the socio-economic condition of the country or has been committed against a woman, or a child.
>
> **(2)** For the purposes of sub-section (1), the Central Government [[!shall]], by notification, determine the offences under the law for the time being in force which shall be the offences affecting the socio-economic condition of the country.

::: proviso Section 289(1) has exactly two origin gateways, both already built elsewhere in this guide
Clause (a) is the police-report track, keyed to section 193 (Chapter XIII, already built). Clause (b) is the complaint track, keyed to sections 223 and 227 (Chapters XVI and XVII, already built) — examination of the complainant and witnesses followed by issue of process. A case that has not travelled through either gateway is not eligible for this Chapter, whatever its offence and punishment band.
:::

::: proviso The socio-economic-offence and offence-against-a-woman-or-child exclusions are categorical, not a balancing test
Section 289(1)'s closing words — "but does not apply where such offence affects the socio-economic condition of the country or has been committed against a woman, or a child" — are not weighed against the seven-year severity ceiling or against anything else. Either exclusion, once it applies, removes the case from this Chapter entirely, regardless of how comparatively minor the offence's punishment otherwise is.
:::

### How this actually runs

<MicroTree
  input="Is this accused's case eligible for plea bargaining under section 289?"
  :gates="[
    { q: 'Did the case originate either from a police report under section 193, or from a Magistrate\'s cognizance on complaint followed by examination under section 223 and process under section 227?',
      note: 'These are section 289(1)\'s only two origin gateways',
      no: 'The case has not originated through either gateway, and this Chapter does not apply' },
    { q: 'Is the offence punishable with something less than death, imprisonment for life, or imprisonment exceeding seven years?',
      note: 'This ceiling applies regardless of which origin gateway the case travelled through',
      no: 'The offence exceeds section 289(1)\'s severity ceiling, and this Chapter does not apply' },
    { q: 'Does the offence avoid being one notified as affecting the socio-economic condition of the country, and avoid being an offence committed against a woman or a child?',
      note: 'Both exclusions are categorical, not weighed against the severity band',
      no: 'The offence falls within one of section 289(1)\'s categorical exclusions, and this Chapter does not apply even though the origin gateway and severity band are otherwise satisfied' }
  ]"
  result="The accused is eligible to file an application for plea bargaining under section 290"
  resultKind="discretionary"
  caveat="Eligibility under section 289 only opens the door — it does not itself trigger plea bargaining. The accused must still choose to file an application, and the process can revert to ordinary trial at several later checkpoints even after an eligible application is filed." />

### In plain English

Section 289 is a gate, not a guarantee. Three conditions have to line up before an accused can even ask for plea bargaining: the case has to have started the right way (police report or complaint-with-process), the offence can't be among the most serious ones the law punishes, and the offence can't fall into either of two categories the legislature has decided are unsuitable for negotiated disposition regardless of severity — offences the Central Government notifies as touching the country's socio-economic fabric, and any offence against a woman or a child. Get past all three, and the accused has standing to apply under section 290 — nothing more, yet.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: this Chapter as a whole appears to track CrPC Chapter XXIA (Plea Bargaining), which used a lettered sub-numbering scheme — sections 265A through 265L — rather than sequential section numbers. On that basis, BNSS section 289 appears to correspond to CrPC section 265A (application of the Chapter). The marginal heading recorded against section 289 in the bare Act text itself — "Application of Chapter" — matches CrPC 265A's heading exactly, which gives this specific mapping higher confidence than the numeric-shift concordance used for the surrounding trial chapters. No departure is flagged for this cluster; the eligibility gate reads as structurally continuous with its CrPC predecessor.*

### Test your instinct

:::: instinct An accused, proceeded against by police report for an offence punishable with up to four years' imprisonment, applies for plea bargaining. The offence has not been notified by the Central Government as affecting the socio-economic condition of the country, but it was committed against a child.
::: ruling The offence-against-a-child exclusion applies regardless of the socio-economic notification
Section 289(1)'s closing exclusion covers offences against a woman or a child independently of the socio-economic-offence category — the absence of a Central Government notification for the latter does not rescue an application that falls foul of the former. This accused's case is outside this Chapter.
:::
::::

:::: instinct A complainant-initiated case has reached the stage where the Magistrate has examined the complainant under section 223 but has not yet issued process under section 227, and the accused wishes to apply for plea bargaining at this point.
::: ruling Section 289(1)(b) is not yet satisfied
Clause (b) requires both the section 223 examination *and* the issue of process under section 227. Until process has actually issued, the complaint-track origin gateway is incomplete, and the case is not yet eligible for this Chapter on that route.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *Research gap: no citation meets this guide's confidence bar for this specific cluster. This is treated as a research gap, not filled with a guessed citation.*

#### Sword and shield

As a **shield** for an accused who wants a negotiated disposition, section 289 is the first checkpoint to clear before investing time in an application — confirming eligibility early avoids a wasted filing. As a **sword**, the prosecution or complainant can resist a plea-bargaining application at the threshold by establishing that the offence exceeds the seven-year ceiling, or falls within the socio-economic-offence notification, or was committed against a woman or a child — any one of these defeats the application without reaching the merits of any proposed disposition.

#### The limitation clock

Section 289 itself fixes no filing deadline; the thirty-day application window is fixed separately by section 290, built in the next cluster.

#### Interlocking matrix

Section 289(1)(a) interlocks with section 193 (Chapter XIII, already built). Section 289(1)(b) interlocks with sections 223 and 227 (Chapters XVI and XVII, already built). Section 289(2)'s socio-economic-offence notification power sits with the Central Government and is not independently verifiable from within this repository.

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Confirm which of section 289(1)'s two origin gateways the case actually travelled through before advising a plea-bargaining application — an incomplete complaint-track case (examination without process, or vice versa) is not yet eligible.
2. Check the offence's punishment band against the seven-year ceiling precisely; an offence at or above the ceiling is excluded regardless of the accused's own view of its comparative seriousness.
3. Check for a Central Government notification bringing the offence within the socio-economic-offence category before advising an application — this notification is not something visible on the face of the offence's own definition.
4. Treat an offence against a woman or a child as an absolute bar under this Chapter; do not advise a plea-bargaining application in such a case regardless of the severity band.

---
