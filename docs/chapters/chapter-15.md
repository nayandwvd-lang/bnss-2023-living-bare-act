# Chapter XV — Conditions Requisite for Initiation of Proceedings

## Sections 210–212 — How cognizance begins, and the accused's one procedural safeguard

### The dispute this solves

::: oneminute "Taking cognizance" is the moment the machinery of prosecution formally starts — before it, there is only a report or a complaint; after it, there is a case. Section 210 gives a Magistrate three separate doors through which a case can walk in, and one of those three doors comes with a safeguard the other two do not.
Most cognizance happens the way everyone expects — a complaint is filed, or the police send in a report after investigation. But section 210(1)(c) recognises a third route: a Magistrate can take cognizance on information from someone who is not a police officer, or even on his own personal knowledge that an offence has been committed. That third door is structurally different from the other two, because it is the only one where the Magistrate himself may already carry some view of the facts before a single piece of evidence has been formally led. Section 211 exists to neutralise exactly that risk — but only for that one gateway. Section 212 then answers a completely different question: once cognizance has been taken, who actually ends up hearing the case.
:::

::: story The Magistrate who saw it happen
A Magistrate is present at a public function when a scuffle breaks out in front of him and an offence is committed in his own view. Rather than wait for a police report, he takes cognizance under section 210(1)(c) — on his own knowledge. Section 211 now requires that before any evidence is taken, the accused be told, in terms, that he is entitled to have the case inquired into or tried by a *different* Magistrate. If the accused says yes, exercise that right, the case does not stay with the Magistrate who witnessed the incident — it transfers to whichever Magistrate the Chief Judicial Magistrate designates. Contrast this with a routine case where the same Magistrate takes cognizance on a straightforward police report: section 211 has nothing to say about that case at all, because clause (c) was never invoked. Separately, and irrespective of which of the three gateways brought the case in, the Chief Judicial Magistrate (or a first-class Magistrate the CJM has empowered) may make the case over to a subordinate Magistrate under section 212 — an administrative routing power, not a safeguard for the accused.
:::

> **210. (1)** Subject to the provisions of this Chapter, any Magistrate of the first class, and any Magistrate of the second class specially empowered in this behalf under sub-section (2), [[?may]] take cognizance of any offence—
>
> (a) upon receiving a complaint of facts, including any complaint filed by a person authorised under any special law, which constitutes such offence;
>
> (b) upon a police report (submitted in any mode including electronic mode) of such facts;
>
> (c) upon information received from any person other than a police officer, or upon his own knowledge, that such offence has been committed.
>
> **(2)** The Chief Judicial Magistrate [[?may]] empower any Magistrate of the second class to take cognizance under sub-section (1) of such offences as are within his competence to inquire into or try.
>
> **211.** When a Magistrate takes cognizance of an offence under clause (c) of sub-section (1) of section 210, the accused [[!shall]], before any evidence is taken, be informed that he is entitled to have the case inquired into or tried by another Magistrate, and if the accused or any of the accused, if there be more than one, objects to further proceedings before the Magistrate taking cognizance, the case [[!shall]] be transferred to such other Magistrate as may be specified by the Chief Judicial Magistrate in this behalf.
>
> **212. (1)** Any Chief Judicial Magistrate [[?may]], after taking cognizance of an offence, make over the case for inquiry or trial to any competent Magistrate subordinate to him.
>
> **(2)** Any Magistrate of the first class empowered in this behalf by the Chief Judicial Magistrate [[?may]], after taking cognizance of an offence, make over the case for inquiry or trial to such other competent Magistrate as the Chief Judicial Magistrate may, by general or special order, specify, and thereupon such Magistrate [[?may]] hold the inquiry or trial.

::: proviso Section 211's safeguard attaches to clause (c) alone
Section 211 opens with "when a Magistrate takes cognizance of an offence under clause (c) of sub-section (1) of section 210" — it is deliberately scoped to that one gateway. Cognizance taken on a written complaint under clause (a), or on a police report under clause (b), never triggers section 211's disclosure-and-transfer mechanism, no matter how the case later unfolds. The safeguard exists because clause (c) is the only route where the Magistrate's own prior knowledge or a private informant's word — rather than a formal complaint or a police investigation — is what set the case in motion.
:::

### How this actually runs

<MicroTree
  input="A Magistrate is about to take cognizance of an offence, or has just taken it — which gateway applies, and does section 211's safeguard trigger?"
  :gates="[
    { q: 'Was cognizance taken on a written complaint, including one filed by a person authorised under a special law?',
      note: 'Section 210(1)(a) — no section 211 safeguard attaches to this gateway',
      no: 'Check the next gateway' },
    { q: 'Was cognizance taken upon a police report, submitted in any mode including electronic mode?',
      note: 'Section 210(1)(b) — likewise, no section 211 safeguard attaches',
      no: 'Check the third gateway' },
    { q: 'Was cognizance taken upon information from a non-police source, or the Magistrate’s own knowledge?',
      note: 'Section 210(1)(c) — this is the only gateway that triggers section 211',
      no: 'None of the three gateways applies — cognizance was not validly taken on these facts' }
  ]"
  result="Under the section 210(1)(c) gateway, before any evidence is taken the accused must be told of the right to have the case heard by a different Magistrate; if he objects, transfer to a Magistrate designated by the Chief Judicial Magistrate is mandatory"
  resultKind="mandatory"
  caveat="Section 212's making-over power is a separate, purely administrative case-routing power available after cognizance regardless of which gateway brought the case in — it is not itself a safeguard for the accused, and objecting to a section 212 transfer is not the same thing as exercising the section 211 right" />

### In plain English

Section 210 gives a Magistrate three ways to end up with a case in front of him: someone complains in writing, the police send a report, or he learns of it some other way — including simply witnessing it himself. That third path is the odd one out, because it is the only one where the Magistrate's own prior exposure to the facts is what got the case started. Section 211 is the fix: if cognizance came in through that third door, the accused has to be told, before any evidence is taken, that he can ask for a different Magistrate instead — and if he asks, he gets one. Section 212 is unrelated to any of this; it is simply the mechanism by which a Chief Judicial Magistrate (or someone the CJM has deputed) can hand a case down to a subordinate Magistrate for the actual inquiry or trial, purely as a matter of docket management.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 210 appears to track CrPC section 190 (cognizance of offences by Magistrates), section 211 to track CrPC section 191 (transfer on application of the accused), and section 212 to track CrPC section 192 (making over of cases to Magistrates). The three-gateway structure and the section 211 safeguard both appear substantively unchanged from the CrPC scheme in this reading, but the correspondence has not been independently cross-checked clause-by-clause. Flagged for verification before relying on the exact CrPC-to-BNSS correspondence in a filing.*

### Test your instinct

:::: instinct The prosecution's case began when the police, after investigation, filed a report before the Magistrate. At the first hearing the defence argues the accused should have been informed of a right to have the case tried by a different Magistrate.
::: ruling No such right arises here
Section 211's safeguard is triggered only by cognizance taken under section 210(1)(c) — information from a non-police source or the Magistrate's own knowledge. Cognizance on a police report falls under section 210(1)(b), a different gateway entirely, and section 211 has no application to it. The defence's objection is misconceived on the facts.
:::
::::

:::: instinct Cognizance was taken under section 210(1)(c) on a private informant's information. The Magistrate never informed the accused of the right to a different Magistrate, and by the time the accused's counsel raises the point, two prosecution witnesses have already been examined.
::: ruling The objection is well-founded, but the timing is now the real issue
Section 211 requires the accused be informed *before any evidence is taken* — that is squarely violated here, since the disclosure never happened at all. Whether the proceedings can still be salvaged, or must be sent back to the disclosure stage, turns on how a Court treats a clause-(c) cognizance where the mandatory pre-evidence disclosure was skipped entirely; either way, the failure to inform is not a mere irregularity to be waved away once evidence is already in.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 210–212 are cognizance-and-case-routing mechanics; the section 211 safeguard is a bright-line procedural rule whose application turns on the facts of how cognizance was taken, rather than on a single defining Supreme Court authority in this reading.*

#### Sword and shield

As a **shield**, section 211 protects an accused from a Magistrate who took cognizance on his own knowledge or a private tip-off carrying that case straight through to trial without the accused ever being told he could ask for a different Magistrate. As a **sword**, the defence can use a documented failure to give the section 211 disclosure — where cognizance was in fact taken under clause (c) — to challenge the propriety of proceedings before that Magistrate; conversely, the prosecution can neutralise a section 211 argument outright simply by showing cognizance was taken under clause (a) or (b), where the safeguard was never engaged.

#### The limitation clock

No independent limitation period is fixed by this cluster. This is a cognizance-and-routing cluster, not a limitation provision; whatever limitation period governs the underlying offence runs independently of which of the three section 210 gateways brought the case into court.

#### Interlocking matrix

This cluster interlocks with Chapter XIII (police powers to investigate, which feeds the section 210(1)(b) police-report gateway) and with Chapter XVI immediately following (complaints to Magistrates, which feeds the section 210(1)(a) complaint gateway). Section 212's making-over power interlocks with the Chief Judicial Magistrate's general administrative authority over the Magistracy within the district.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. On any file where cognizance was not taken on a written complaint or a police report, check the record affirmatively for whether section 210(1)(c) was in fact the gateway used — the section 211 safeguard analysis only opens once that is established.
2. Where clause (c) cognizance is confirmed, check the record for the section 211 disclosure *before* the first evidence was led — a disclosure made afterward, or not at all, is a live procedural point.
3. Do not conflate a section 212 making-over order with a section 211 transfer — they serve different purposes and neither substitutes for the other.
4. Where a case has been made over under section 212, confirm the transferee Magistrate is in fact "competent" within the meaning of section 212 before treating the routing as settled.

---
