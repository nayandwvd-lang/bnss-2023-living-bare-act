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

## Sections 213–214 — The Court of Session's cognizance is never original: it is always committed

### The dispute this solves

::: oneminute A Court of Session is not a Court anyone can walk into directly, no matter how grave the offence. Section 213 closes that door with a near-absolute rule: the Sessions Court's cognizance comes only through committal by a Magistrate, unless some other provision expressly says otherwise.
The Magistracy is deliberately positioned as the funnel through which every case must first pass, even the gravest ones eventually headed for trial before a Court of Session. Section 213 states that as a rule with almost no exceptions: no Court of Session takes cognizance of any offence as a court of *original* jurisdiction unless a Magistrate has committed the case to it — the only escape hatch is an express provision elsewhere in the Sanhita or in some other law. Section 214 then answers a completely different, purely internal question: once a case is properly before "the" Court of Session in a division, which particular judge of that Court — the Sessions Judge himself, or one of the Additional Sessions Judges — actually tries it.
:::

::: story The complaint filed straight at the Sessions Court
A complainant, convinced the offence is serious enough to warrant a Sessions trial, tries to file directly with the Court of Session rather than starting before a Magistrate. Section 213 stops this cold: absent an express statutory exception, the Court of Session simply has no power to take cognizance of the case as a court of original jurisdiction until a Magistrate has committed it. The complainant's only route is to begin before a Magistrate and let the committal process run its course. In a different scenario, once a case has been properly committed and is sitting in the Sessions division's list, the High Court — by special order — directs a particular Additional Sessions Judge to try it, even though the Sessions Judge of the division never separately made over that file to him. Section 214 confirms this is entirely valid: the Sessions Judge's own order and the High Court's special direction are two independent, self-sufficient routes to the same result.
:::

> **213.** Except as otherwise expressly provided by this Sanhita or by any other law for the time being in force, no Court of Session [[!shall]] take cognizance of any offence as a Court of original jurisdiction unless the case has been committed to it by a Magistrate under this Sanhita.
>
> **214.** An Additional Sessions Judge [[!shall]] try such cases as the Sessions Judge of the division may, by general or special order, make over to him for trial or as the High Court may, by special order, direct him to try.

::: proviso "Except as otherwise expressly provided" is a narrow door, not a general escape
Section 213's opening clause is not an invitation to argue that some broader interest — urgency, gravity of the offence, the complainant's preference — justifies skipping committal. It requires an *express* provision, elsewhere in the Sanhita or in another law, that specifically authorises the Court of Session to take cognizance without committal. Section 222(2) later in this very Chapter is one confirmed example (a Court of Session taking cognizance of certain defamation complaints against high constitutional office-holders directly, on a Public Prosecutor's complaint) — but such exceptions are the rare, named carve-outs, not a general principle available on request.
:::

### How this actually runs

<MicroTree
  input="A case is sought to be placed before a Court of Session — does it have cognizance to take it up as a court of original jurisdiction?"
  :gates="[
    { q: 'Is there an express provision, in this Sanhita or another law, that specifically allows the Court of Session to take cognizance directly, without committal?',
      note: 'Section 213’s opening clause carves out only named exceptions, such as section 222(2)’s defamation route — not a general discretion',
      no: 'Check whether committal has occurred instead' },
    { q: 'Has the case been committed to the Court of Session by a Magistrate under this Sanhita?',
      note: 'This is the default, near-universal route into a Court of Session’s original jurisdiction',
      no: 'The Court of Session cannot validly take cognizance as a court of original jurisdiction on these facts' }
  ]"
  result="Cognizance by a Court of Session as a court of original jurisdiction is proper only where a Magistrate has committed the case, or a named statutory exception expressly applies"
  resultKind="mandatory"
  caveat="Section 214 answers a separate question — once the Court of Session properly has the case, which specific judge of that Court tries it: the Sessions Judge by his own general or special order, or an Additional Sessions Judge under the High Court’s special direction. Either route independently suffices; neither is a jurisdictional precondition like committal is." />

### In plain English

Think of the Magistracy as the compulsory front door to the whole criminal justice system, and the Court of Session as a room you can only reach by first walking through that door — section 213 is simply the rule that says so. A case reaches a Court of Session's original jurisdiction only by being committed there by a Magistrate, full stop, unless some other section names a specific exception. Section 214 is unrelated to whether the Sessions Court has jurisdiction at all; it only decides, once the case is properly there, whether the Sessions Judge himself hears it or an Additional Sessions Judge does — settled either by the Sessions Judge's own allocation order or by the High Court stepping in with a special direction.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 213 appears to track CrPC section 193 (cognizance of offences by Courts of Session) and BNSS section 214 appears to track CrPC section 194 (Additional Sessions Judges to try cases made over to them). The committal-only structure and the dual Sessions-Judge/High-Court routing for Additional Sessions Judges both appear substantively unchanged in this reading, but the correspondence has not been independently cross-checked clause-by-clause. Flagged for verification before relying on the exact CrPC-to-BNSS correspondence in a filing.*

### Test your instinct

:::: instinct A complainant, bypassing the Magistracy entirely, files a complaint directly with the Court of Session for an offence carrying a sentence the complainant believes only a Sessions Court should try. No Magistrate has committed any case, and no express statutory exception is identified.
::: ruling Cognizance is barred
Section 213 is unambiguous: absent an express statutory exception, a Court of Session cannot take cognizance of any offence as a court of original jurisdiction unless a Magistrate has committed the case to it. The complainant's belief about the offence's gravity does not substitute for the committal process; the complaint must begin before a Magistrate.
:::
::::

:::: instinct The Sessions Judge of the division never made over a particular case to any Additional Sessions Judge, but the High Court, by special order, directed a named Additional Sessions Judge to try it. The defence argues the trial is void because the Sessions Judge himself never allocated the file.
::: ruling The trial is properly constituted
Section 214 gives two independent bases on which an Additional Sessions Judge may try a case: a general or special order of the Sessions Judge of the division, *or* a special direction of the High Court. Either is sufficient on its own; the statute does not require both. The absence of a Sessions Judge's order is immaterial once a valid High Court direction exists.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Sections 213–214 are jurisdictional-gateway and internal-allocation mechanics rather than doctrine attracting a single defining Supreme Court authority in this reading.*

#### Sword and shield

As a **shield**, section 213 protects an accused from being hauled directly before a Court of Session without the screening function the Magistrate-level committal process performs. As a **sword**, a defence objection that no committal occurred and no express exception applies goes to the Court of Session's very jurisdiction to proceed — it is not a mere irregularity, and it can be raised at the threshold rather than waiting for trial to conclude.

#### The limitation clock

No independent limitation period is fixed by this cluster; committal and cognizance timing are jurisdictional questions, not limitation questions.

#### Interlocking matrix

Section 213 interlocks directly with ⚠️ *the committal-proceedings chapter (not yet built in this repository as of this rendering — flag and cross-check before relying on the committal mechanics themselves)* and with section 222(2) later in this Chapter, which is a confirmed express exception to the committal-only rule. It also interlocks with sections 204–206 in Chapter XIV, which govern venue and jurisdiction disputes once a case is properly before a court.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before accepting that a Court of Session properly has a case, confirm on the record that a Magistrate in fact committed it — or identify the specific express statutory exception being relied on instead.
2. Do not assume gravity of offence alone justifies bypassing committal; section 213 requires an express provision, not a general argument from seriousness.
3. Where a case is being tried by an Additional Sessions Judge, confirm which of the two independent bases under section 214 applies — a Sessions Judge's order, a High Court direction, or both — for the record.
4. Raise a committal defect as a threshold jurisdictional objection, not as a trial-stage irregularity, to preserve its full strategic weight.

---
