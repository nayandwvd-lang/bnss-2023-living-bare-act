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

## Sections 215–216 — Who may complain about offences against public servants and public justice

### The dispute this solves

::: oneminute Not every offence can be set in motion by any citizen who happens to know about it. For offences committed against a public servant acting in his official capacity, or against the machinery of justice itself — a Court's own proceedings, or a document produced in evidence — section 215 deliberately narrows who may complain, and it does so as an override of the ordinary cognizance gateways in section 210.
Section 215(1)(a) covers a defined band of offences against public servants; section 215(1)(b) covers a defined band of offences against public justice and against documents given in evidence, but only when committed in or in relation to a Court proceeding. For both bands, the rule is the same in structure: no Court may take cognizance except on a *written complaint* from a specifically named source — the public servant himself (or his administrative superior, or someone he authorises) for the first band, and the Court itself (or an officer it authorises, or a superior Court) for the second. This is a standing rule, not a merits defence — it says nothing about whether the conduct is criminal, only who is allowed to start the prosecution. Section 216 then does something narrower and specific: for one particular offence within that closed list — witness threatening — it lets the witness, or any other person, file the complaint directly.
:::

::: story The obstructed raid, and the threatened witness
A tax inspector is obstructed while conducting a lawful, official raid — an offence squarely within section 215(1)(a)'s band. A bystander who witnessed the obstruction wants to file a complaint himself. He cannot: section 215(1)(a) restricts standing to the inspector, his administrative superior, or someone the inspector has specifically authorised — a stranger's complaint, however well-intentioned, does not satisfy the gate, and even a police report following an FIR does not substitute for the required written complaint from the right source. Separately, a witness in a pending civil suit is threatened by a party to that suit, hoping to stop her from testifying truthfully. That offence sits within the same closed list that section 215(1)(b) would ordinarily route through the Court itself — but section 216 gives the threatened witness a direct route of her own: she, or indeed any other person, may file the complaint without waiting for the Court to act.
:::

> **215. (1)** No Court [[!shall]] take cognizance—
>
> (a) (i) of any offence punishable under sections 206 to 223 (both inclusive but excluding section 209) of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*; or
>
> (ii) of any abetment of, or attempt to commit, such offence; or
>
> (iii) of any criminal conspiracy to commit such offence,
>
> except on the complaint in writing of the public servant concerned or of some other public servant to whom he is administratively subordinate or of some other public servant who is authorised by the concerned public servant so to do;
>
> (b) (i) of any offence punishable under any of the following sections of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*, namely, sections 229 to 233 (both inclusive), 236, 237, 242 to 248 (both inclusive) and 267, when such offence is alleged to have been committed in, or in relation to, any proceeding in any Court; or
>
> (ii) of any offence described in sub-section (1) of section 336, or punishable under sub-section (2) of section 340 or section 342 of ⚠️ *the said Sanhita*, when such offence is alleged to have been committed in respect of a document produced or given in evidence in a proceeding in any Court; or
>
> (iii) of any criminal conspiracy to commit, or attempt to commit, or the abetment of, any offence specified in sub-clause (i) or sub-clause (ii),
>
> except on the complaint in writing of that Court or by such officer of the Court as that Court may authorise in writing in this behalf, or of some other Court to which that Court is subordinate.
>
> **(2)** Where a complaint has been made by a public servant or by some other public servant who has been authorised to do so by him under clause (a) of sub-section (1), any authority to which he is administratively subordinate or who has authorised such public servant, [[?may]] order the withdrawal of the complaint and send a copy of such order to the Court; and upon its receipt by the Court, no further proceedings [[!shall]] be taken on the complaint:
>
> *Provided that no such withdrawal shall be ordered if the trial in the Court of first instance has been concluded.*
>
> **(3)** In clause (b) of sub-section (1), the term "Court" means a Civil, Revenue or Criminal Court, and includes a tribunal constituted by or under a Central or State Act if declared by that Act to be a Court for the purposes of this section.
>
> **(4)** For the purposes of clause (b) of sub-section (1), a Court [[!shall]] be deemed to be subordinate to the Court to which appeals ordinarily lie from the appealable decrees or sentences of such former Court, or in the case of a Civil Court from whose decrees no appeal ordinarily lies, to the Principal Court having ordinary original civil jurisdiction within whose local jurisdiction such Civil Court is situate:
>
> *Provided that—*
>
> *(a) where appeals lie to more than one Court, the Appellate Court of inferior jurisdiction shall be the Court to which such Court shall be deemed to be subordinate;*
>
> *(b) where appeals lie to a Civil and also to a Revenue Court, such Court shall be deemed to be subordinate to the Civil or Revenue Court according to the nature of the case or proceeding in connection with which the offence is alleged to have been committed.*
>
> **216.** A witness or any other person [[?may]] file a complaint in relation to an offence punishable under ⚠️ *section 232 of the Bharatiya Nyaya Sanhita, 2023*.

::: proviso Section 215 restricts standing, not criminality
Section 215's bar operates entirely on the question of *who may complain* — it does not mean the underlying conduct is not an offence, and it does not immunise the wrongdoer. A private citizen who witnesses an offence against a public servant's official function, or against the machinery of a Court, cannot simply file a private complaint or lean on a police FIR to bypass the gate; the complaint has to come from the specific source section 215 names. The offence is real; the standing to prosecute it is deliberately narrow.
:::

::: proviso Section 216 sits inside section 215(1)(b)'s own closed list
Section 215(1)(b)(i) names "sections 229 to 233 (both inclusive)" as offences requiring a Court's own complaint when committed in relation to a Court proceeding — and section 232 falls squarely within that numeric range. Section 216 then separately says a witness, or any other person, may file a complaint for a section 232 offence. ⚠️ *Read literally, section 216 functions as a specific carve-out from section 215(1)(b)'s general Court-complaint requirement for this one offence — the specific-over-general interpretive canon supports this reading, but the Sanhita does not say "notwithstanding section 215" in so many words, and the precise interaction has not been tested against judicial authority in this rendering. Verify this reading before relying on a witness's independent standing to complain under section 216 in a live matter, rather than assuming it is settled.*
:::

### How this actually runs

<MicroTree
  input="An offence connected to a public servant’s official function, or to a Court proceeding or a document given in evidence, has been committed — who may set the prosecution in motion?"
  :gates="[
    { q: 'Is the offence one of sections 206–223 (excluding 209) — an offence against a public servant?',
      note: 'Section 215(1)(a) — standing is restricted to the public servant concerned, his administrative superior, or someone he has authorised',
      no: 'Check the public-justice/document band instead' },
    { q: 'Is it one of the offences against public justice or documents given in evidence listed in section 215(1)(b), committed in or in relation to a Court proceeding?',
      note: 'Section 215(1)(b) — standing is restricted to that Court itself, an officer it authorises, or a superior Court',
      no: 'Check whether section 216 applies' },
    { q: 'Is it specifically an offence under section 232 of the Bharatiya Nyaya Sanhita, 2023 — ⚠️ witness threatening, per the marginal heading?',
      note: 'Section 216 lets a witness or any other person file the complaint directly — flagged as an interpretive question against section 215(1)(b)’s own listing of section 232',
      no: 'This cluster’s restrictions do not apply — the ordinary section 210 gateways govern instead' }
  ]"
  result="For offences against a public servant’s official function or against the machinery of justice, the ordinary ‘any person may complain, or police may report’ rule is overridden — cognizance requires a written complaint from the specific source this cluster names, except where section 216 expressly widens standing"
  resultKind="mandatory"
  caveat="This is a standing gate layered on top of section 210, not a merits defence — it does not touch whether the conduct is criminal, and it does not disturb police powers of investigation short of a Court actually taking cognizance." />

### In plain English

Ordinarily, section 210 lets almost anyone's complaint, or a police report, get a case moving. Section 215 carves out two categories — crimes against public servants doing their jobs, and crimes against the courts or court documents — and says: not this way, not from just anyone. For the first category, only the public servant himself, his boss, or someone he has deputed can complain. For the second, only the Court itself, someone it authorises, or a Court above it can complain — and that requirement travels with the offence even if the police also investigate and want to file a report, because section 215 requires the specific written complaint regardless of what section 210 would otherwise allow. Section 216 punches one narrow, specific hole in that second category: for witness-threatening offences under section 232, the threatened witness — or anyone else — doesn't have to wait on the Court to act.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 215 appears to track CrPC section 195 (prosecution for contempt of lawful authority of public servants, for offences against public justice, and for offences relating to documents given in evidence) and BNSS section 216 appears to track CrPC section 195A (procedure for witnesses in case of threatening, inserted into the CrPC in 2009). The overall standing-restriction structure and the witness carve-out both appear substantively continued from the CrPC scheme in this reading, but the correspondence has not been independently cross-checked clause-by-clause. Flagged for verification before relying on the exact CrPC-to-BNSS correspondence in a filing.*

### Test your instinct

:::: instinct A private citizen, having witnessed a public servant obstructed during an official raid, personally files a complaint. Separately, the police also register an FIR and submit a report on the same facts.
::: ruling Neither route satisfies section 215(1)(a)
The private citizen's complaint fails because standing under section 215(1)(a) is limited to the public servant concerned, his administrative superior, or someone he has authorised — a stranger's complaint does not qualify no matter how accurate. The police report fails for the same underlying reason: section 215 requires a *written complaint* from the named source, and it operates as an override of section 210's general complaint-or-police-report gateways for this specific band of offences.
:::
::::

:::: instinct A witness who was threatened to stop her from testifying in a pending civil suit files a complaint herself under section 232, without the Court's own complaint. The opposing party argues the complaint is invalid because section 232 sits within section 215(1)(b)'s closed list, which requires the Court itself to complain.
::: ruling Section 216 most likely supplies the witness's standing — but confirm before relying on it
Section 216 expressly permits a witness or any other person to file a complaint for a section 232 offence, and the specific-over-general canon favours reading it as a carve-out from section 215(1)(b)'s general Court-complaint requirement for that one offence. This is the better reading of the bare text, but it has not been tested here against judicial authority, and the point should be independently verified — including checking for any judicial construction of the equivalent CrPC provisions — before being treated as settled in a live matter.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

Iqbal Singh Marwah v. Meenakshi Marwah, (2005) 4 SCC 370 (Constitution Bench). The Court held that the CrPC section 195(1)(b)(ii) complaint bar — the direct predecessor of BNSS section 215(1)(b)(ii), covering documents produced or given in evidence — applies only where the document offence (forgery or fabrication) was committed *after* the document was produced or given in evidence in the Court proceeding. Where the offence occurred earlier, and independently of its later use in Court, the bar does not apply, and a private complaint or police FIR is maintainable without routing through the Court itself. **Practitioner takeaway**: before conceding a section 215(1)(b)(ii) bar, establish precisely when the document offence occurred relative to when the document was produced or given in evidence — a pre-existing forgery later merely produced in Court falls outside the bar.

#### Sword and shield

As a **shield**, section 215 protects public servants from being dragged into vexatious private prosecutions over acts done in their official capacity, and protects the Court process itself from being collaterally attacked by anyone other than the Court whose proceeding is implicated. As a **sword**, an accused facing a complaint that does not come from the correct source under section 215 has a complete, threshold ground to resist cognizance — and, per Iqbal Singh Marwah, a complainant facing a section 215(1)(b)(ii) objection has a sword of his own if the document offence predates its use in evidence.

#### The limitation clock

No independent limitation period is fixed by this cluster.

#### Interlocking matrix

This cluster overrides the general cognizance gateways of section 210 (Chapter XV's own first cluster) for the specific offence-bands it names — a police report or an ordinary complaint that would suffice under section 210 does not suffice here. It interlocks with ⚠️ *BNS 2023 sections 206–223, 229–233, 236, 237, 242–248, 267, 336(1), 340(2) and 342 — all outside this repository's verified corpus and flagged accordingly* and, through section 216, with the witness-protection theme that recurs across the Sanhita.

#### The authorities

⚠️ *None promoted beyond the winning ratio; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before treating a complaint as validly instituted under section 215, confirm the complainant is the specifically named source — the public servant/his superior/his delegate for clause (a), or the Court/its officer/a superior Court for clause (b) — and that the complaint is in writing.
2. Do not assume a police FIR or report can substitute for the required written complaint under this cluster; section 215 overrides section 210's ordinary gateways.
3. On a clause (b)(ii) document-offence objection, marshal the timeline of when the document offence occurred relative to its production or use in evidence — Iqbal Singh Marwah turns the analysis on that sequence.
4. Where relying on section 216 for a section 232 complaint, flag the interpretive uncertainty about its interaction with section 215(1)(b) and be prepared to argue the specific-over-general canon rather than assume the point is beyond challenge.

## Section 217 — Offences against the State: sanction, not just standing

### The dispute this solves

::: oneminute Section 215 asked "who may complain." Section 217 asks a different, more consequential question for offences that threaten the State itself: has the government actually authorised this prosecution at all? A valid complaint or a solid police report is not enough on its own — cognizance is barred until the right level of government sanction or consent exists.
Section 217 tiers its sanction requirement by the gravity of what is at stake. Offences under Chapter VII of the Bharatiya Nyaya Sanhita, 2023 (offences against the State) and a short list of related sections need sanction from the Central or State Government. A second, adjacent list needs sanction from the Central Government, the State Government, *or* the District Magistrate — a lower bar. And ordinary criminal conspiracies falling outside both lists — provided the target offence is not one carrying death, life imprisonment, or two years' or more rigorous imprisonment — need the State Government's or District Magistrate's written *consent*, a related but distinct concept from sanction. Section 217(4) then gives whichever authority is deciding on sanction or consent the option of ordering a preliminary police investigation first, rather than deciding blind.
:::

::: story The prosecution that got ahead of the government
Police investigate what they believe is an offence against the State under Chapter VII of the Bharatiya Nyaya Sanhita and file a report supported by strong evidence. No sanction from the Central or State Government has been sought. However compelling the evidence, section 217(1) means the Court cannot take cognizance at all until that sanction exists — the gap is not cured by the quality of the investigation. In a separate matter, two people are alleged to have conspired to commit an offence carrying a maximum sentence well under two years' imprisonment, and the conspiracy does not fall within section 215's closed list either. Section 217(3) requires the State Government's or the District Magistrate's *written consent* before that conspiracy prosecution can even begin — a distinct, lower-profile gate, but a gate nonetheless, and easy to miss because the underlying offence itself looks minor.
:::

> **217. (1)** No Court [[!shall]] take cognizance of—
>
> (a) any offence punishable under Chapter VII or under section 196, section 299 or sub-section (1) of section 353 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*; or
>
> (b) a criminal conspiracy to commit such offence; or
>
> (c) any such abetment, as is described in section 47 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*,
>
> except with the previous sanction of the Central Government or of the State Government.
>
> **(2)** No Court [[!shall]] take cognizance of—
>
> (a) any offence punishable under section 197 or sub-section (2) or sub-section (3) of section 353 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*; or
>
> (b) a criminal conspiracy to commit such offence,
>
> except with the previous sanction of the Central Government or of the State Government or of the District Magistrate.
>
> **(3)** No Court [[!shall]] take cognizance of the offence of any criminal conspiracy punishable under sub-section (2) of section 61 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*, other than a criminal conspiracy to commit an offence punishable with death, imprisonment for life or rigorous imprisonment for a term of two years or upwards, unless the State Government or the District Magistrate has consented in writing to the initiation of the proceedings:
>
> *Provided that where the criminal conspiracy is one to which the provisions of section 215 apply, no such consent shall be necessary.*
>
> **(4)** The Central Government or the State Government [[?may]], before according sanction under sub-section (1) or sub-section (2) and the District Magistrate [[?may]], before according sanction under sub-section (2) and the State Government or the District Magistrate [[?may]], before giving consent under sub-section (3), order a preliminary investigation by a police officer not being below the rank of Inspector, in which case such police officer [[!shall]] have the powers referred to in sub-section (3) of section 174.

::: proviso Sanction and consent are related but not identical gates
Sub-sections (1) and (2) speak of "previous sanction"; sub-section (3) speaks of the State Government's or District Magistrate's written "consent." Both are executive-authorisation preconditions to cognizance, and section 217(4) treats them alike for the limited purpose of allowing a preliminary police investigation before either is given — but they attach to different tiers of offence, at different levels of government, and a practitioner should not treat the terms as interchangeable when checking whether the correct gate was satisfied for a particular offence.
:::

### How this actually runs

<MicroTree
  input="An offence connected to the security or functioning of the State — or a criminal conspiracy — has been committed. Has the correct government sanction or consent been obtained before cognizance?"
  :gates="[
    { q: 'Is the offence one punishable under Chapter VII of the Bharatiya Nyaya Sanhita, 2023, or under its sections 196, 299 or 353(1) — or a conspiracy or section 47 abetment of such an offence?',
      note: 'Section 217(1) — requires previous sanction of the Central Government or the State Government',
      no: 'Check the second tier instead' },
    { q: 'Is it an offence under section 197 or section 353(2)/(3) of the Bharatiya Nyaya Sanhita, 2023, or a conspiracy to commit it?',
      note: 'Section 217(2) — requires previous sanction of the Central Government, the State Government, or the District Magistrate',
      no: 'Check the residual conspiracy rule instead' },
    { q: 'Is it a criminal-conspiracy offence under section 61(2) of the Bharatiya Nyaya Sanhita, 2023, where the target offence does not carry death, life imprisonment, or two years’ or more rigorous imprisonment?',
      note: 'Section 217(3) — requires the State Government’s or District Magistrate’s written consent, unless the conspiracy already falls under section 215',
      no: 'No sanction or consent gate under this cluster applies to this offence' }
  ]"
  result="Cognizance is barred until the correctly-tiered government sanction or consent is obtained — the sanctioning or consenting authority may order a preliminary police investigation under section 217(4) before deciding"
  resultKind="mandatory"
  caveat="A strong police report or an otherwise valid complaint does not cure a missing sanction or consent — this gate sits above, not instead of, the ordinary cognizance and standing rules in sections 210 and 215." />

### In plain English

Section 215 controls *who* may complain about certain offences; section 217 controls whether the *government* has agreed to let the prosecution happen at all, for offences the Sanhita treats as touching the State's own security or functioning. There are three tiers: the most serious band (offences against the State itself, and a few related sections) needs Central or State Government sanction; a second, related band needs sanction from either government or the District Magistrate; and criminal conspiracies to commit lesser offences — ones that don't carry death, life imprisonment, or a long rigorous sentence — need the State Government's or District Magistrate's written consent, unless section 215 already governs that particular conspiracy. In every tier, the deciding authority can order a preliminary police investigation first rather than sanctioning or consenting blind.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 217 appears to track CrPC section 196 (prosecution for offences against the State and for criminal conspiracy to commit such offence). The three-tier sanction/consent structure and the preliminary-investigation option both appear substantively continued from the CrPC scheme in this reading, but the correspondence has not been independently cross-checked clause-by-clause. Flagged for verification before relying on the exact CrPC-to-BNSS correspondence in a filing.*

### Test your instinct

:::: instinct Police compile a thorough, well-evidenced report on an offence against the State under Chapter VII of the Bharatiya Nyaya Sanhita, and the Magistrate is inclined to take cognizance given the strength of the material, without waiting for government sanction.
::: ruling Cognizance cannot be taken
Section 217(1) makes previous sanction of the Central or State Government a precondition to cognizance for this band of offences. The strength of the evidence is irrelevant to that precondition — sanction is not a question of proof, it is a jurisdictional gate that must be satisfied before the Court may act at all.
:::
::::

:::: instinct Two individuals are charged with conspiring to commit an offence carrying a maximum of eighteen months' imprisonment. No sanction or consent was sought from anyone, on the theory that such a minor offence could not require one.
::: ruling The prosecution is defective absent section 217(3) consent
Because the target offence carries less than two years' rigorous imprisonment and is not shown to fall within section 215's list, section 217(3) requires the written consent of the State Government or the District Magistrate before cognizance of the conspiracy offence. The offence's apparent minor character does not exempt it — if anything, section 217(3) exists precisely to screen this residual band of conspiracy prosecutions.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

⚠️ *No case citation is promoted for this cluster. Section 217's tiered sanction/consent structure is executive-authorisation mechanics; while the general "sanction goes to jurisdiction, not merits" principle is well established in Indian criminal procedure, no single citation is confidently recalled as the defining authority specifically on this provision's tiering, and none is guessed here — flagged as a research gap under "The authorities."*

#### Sword and shield

As a **shield**, section 217 protects the executive's considered judgment over whether a security-sensitive or State-facing prosecution should proceed at all, and screens out prosecutions launched without that judgment. As a **sword**, the defence can raise the absence of the correctly-tiered sanction or consent as a complete, threshold bar to cognizance — because it goes to the Court's very jurisdiction to act, this objection is not waived by proceeding partway through trial and can typically be raised even at a later stage.

#### The limitation clock

No independent limitation period is fixed by this cluster.

#### Interlocking matrix

Section 217(4)'s preliminary-investigation option interlocks directly with section 174(3) (Chapter XIII, already built in this guide), which supplies the powers such a preliminary-investigating officer exercises. Section 217(3)'s proviso interlocks with section 215 immediately preceding this cluster — where a conspiracy already falls under section 215's complaint-standing regime, section 217(3)'s separate consent requirement is expressly switched off to avoid stacking two gates on the same conspiracy.

#### The authorities

⚠️ *None promoted for this cluster; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Identify which of section 217's three tiers the offence falls into before assuming any sanction has been correctly obtained — the authorised sanctioning body differs across tiers.
2. For residual conspiracy prosecutions under section 217(3), always check the target offence's maximum sentence against the death/life/two-years-RI threshold, and check whether section 215's proviso switches the consent requirement off.
3. Treat a missing or misdirected sanction/consent as a threshold jurisdictional objection, not a curable irregularity — raise it at the earliest opportunity but preserve it for later stages if missed.
4. Where a preliminary investigation was ordered under section 217(4), confirm the investigating officer held at least the rank of Inspector and exercised only the powers referable to section 174(3).

## Section 218 — Prosecution of Judges and public servants (flagship)

### The dispute this solves

::: oneminute This is the single most litigated sanction provision a criminal practitioner will meet — the direct successor to what generations of lawyers simply called "section 197 sanction." It decides whether a Judge, a Magistrate, or a public servant can be prosecuted at all for something done, or purportedly done, in the course of official duty, without the government first agreeing to let the prosecution proceed.
Section 218(1) requires previous sanction — Central Government for Union employees, State Government for State employees — before cognizance of any offence a Judge, Magistrate, or protected public servant is accused of committing "while acting or purporting to act in the discharge of his official duty." Two features mark this out from the ordinary run of sanction provisions. First, a genuinely new procedural clock: the deciding government now has 120 days from the date it receives the sanction request, and if it says nothing in that window, sanction is *deemed* to have been given — a direct response to the old complaint that a sanction request could simply sit on a desk indefinitely, killing a prosecution through silence rather than through any decision on the merits. Second, a carve-out: for a specific, closed list of grave offences — principally the sexual-offence and trafficking-type provisions of the Bharatiya Nyaya Sanhita, 2023 — no sanction is required at all, however official the accused's position.
:::

::: story The line between duty and its cloak
An officer is accused of using excessive force during an interrogation. He argues no Court can take cognizance without government sanction, because the incident happened during his official working hours. The question section 218(1) actually asks is narrower than "was he on duty" — it asks whether the specific act complained of has a reasonable connection to the discharge of official duty, or whether official duty was merely the occasion, a cloak, for an act that was not really part of the job at all. That line — duty versus cloak — is the entire battleground of section 218(1) litigation. In a separate matter, a sanction request sits with a State Government for well over four months without a decision either way. Under the second proviso to section 218(1), once 120 days pass from the date the request was received, sanction is treated as granted by operation of law — the prosecution is no longer hostage to administrative silence.
:::

> **218. (1)** When any person who is or was a Judge or Magistrate or a public servant not removable from his office save by or with the sanction of the Government is accused of any offence alleged to have been committed by him while acting or purporting to act in the discharge of his official duty, no Court [[!shall]] take cognizance of such offence except with the previous sanction — save as otherwise provided in ⚠️ *the Lokpal and Lokayuktas Act, 2013* —
>
> (a) in the case of a person who is employed or, as the case may be, was at the time of commission of the alleged offence employed, in connection with the affairs of the Union, of the Central Government;
>
> (b) in the case of a person who is employed or, as the case may be, was at the time of commission of the alleged offence employed, in connection with the affairs of a State, of the State Government:
>
> *Provided that where the alleged offence was committed by a person referred to in clause (b) during the period while a Proclamation issued under clause (1) of article 356 of the Constitution was in force in a State, clause (b) will apply as if for the expression "State Government" occurring therein, the expression "Central Government" were substituted:*
>
> *Provided further that such Government [[!shall]] take a decision within a period of one hundred and twenty days from the date of the receipt of the request for sanction, and in case it fails to do so, the sanction [[!shall]] be deemed to have been accorded by such Government:*
>
> *Provided also that no sanction shall be required in case of a public servant accused of any offence alleged to have been committed under* ⚠️ *section 64, section 65, section 66, section 68, section 69, section 70, section 71, section 74, section 75, section 76, section 77, section 78, section 79, section 143, section 199 or section 200 of the Bharatiya Nyaya Sanhita, 2023.*
>
> **(2)** No Court [[!shall]] take cognizance of any offence alleged to have been committed by any member of the Armed Forces of the Union while acting or purporting to act in the discharge of his official duty, except with the previous sanction of the Central Government.
>
> **(3)** The State Government [[?may]], by notification, direct that the provisions of sub-section (2) shall apply to such class or category of the members of the Forces charged with the maintenance of public order as may be specified therein, wherever they may be serving, and thereupon the provisions of that sub-section will apply as if for the expression "Central Government" occurring therein, the expression "State Government" were substituted.
>
> **(4)** Notwithstanding anything contained in sub-section (3), no Court [[!shall]] take cognizance of any offence, alleged to have been committed by any member of the Forces charged with the maintenance of public order in a State while acting or purporting to act in the discharge of his official duty during the period while a Proclamation issued under clause (1) of article 356 of the Constitution was in force therein, except with the previous sanction of the Central Government.
>
> **(5)** The Central Government or the State Government [[?may]] determine the person by whom, the manner in which, and the offence or offences for which, the prosecution of such Judge, Magistrate or public servant is to be conducted, and [[?may]] specify the Court before which the trial is to be held.

::: proviso The 120-day clock runs from receipt of the request, and binds the government, not the accused
Section 218(1)'s second proviso creates a hard deadline on the *government's own decision-making*, not on when the prosecution must be launched. It starts running from "the date of the receipt of the request for sanction" — meaning the practitioner's first task, in any case where the clock matters, is pinning down precisely when that request was received, since the deemed-sanction consequence turns entirely on that date.
:::

::: proviso The third proviso removes the sanction requirement entirely — it does not merely lower the bar
For the closed list of BNS sections named in section 218(1)'s third proviso, the analysis does not proceed to "was this in the discharge of official duty" at all — sanction is simply not required, full stop, for a public servant accused under those sections. ⚠️ *This band is presented here as principally sexual-offence and trafficking-type provisions based on the section numbers alone; the precise content of BNS sections 64–79, 143, 199 and 200 has not been independently verified against the Bharatiya Nyaya Sanhita, 2023 text in this rendering and should be confirmed before relying on the characterisation in a filing.*
:::

### How this actually runs

<MicroTree
  input="A Judge, Magistrate, or public servant faces prosecution for an act allegedly done in an official capacity — is prior sanction required before a Court can take cognizance?"
  :gates="[
    { q: 'Is the accused a member of the Armed Forces of the Union — or, under a section 218(3) State Government notification, a public-order force covered by that notification?',
      note: 'Section 218(2)–(4) governs instead: Central Government sanction ordinarily, State Government sanction only if notified under 218(3), reverting to Central Government sanction during an Article 356 Proclamation under 218(4)',
      no: 'Check the sexual-offence/trafficking carve-out next' },
    { q: 'Is the offence one of the specific sections listed in section 218(1)’s third proviso — ⚠️ principally the sexual-offence and trafficking-type band?',
      note: 'No sanction is required at all for this band, regardless of the accused’s official position',
      no: 'Apply the official-duty nexus test' },
    { q: 'Was the act one the accused was acting or purporting to act in the discharge of official duty when committing — a reasonable connection to duty, not official position merely used as a cloak?',
      note: 'This is the Matajog Dobey nexus test',
      no: 'No section 218(1) sanction is required — the act falls outside official duty altogether' }
  ]"
  result="Previous sanction from the correct government (Central for Union employees, State for State employees, substituted to Central during an Article 356 Proclamation) is a precondition to cognizance — and that government has 120 days from receipt of the sanction request to decide, after which sanction is deemed granted"
  resultKind="mandatory"
  caveat="Section 218(5) is a separate, further power: even once sanction is validly in place, the sanctioning government may itself determine who prosecutes, how, on which offences, and before which Court." />

### In plain English

Strip away the sub-sections and section 218 is doing three things. First, it protects Judges, Magistrates, and certain public servants from prosecution for genuinely duty-connected acts unless the right government signs off first — but the "right government" flips to the Centre during President's Rule under Article 356, and the flip for Armed Forces personnel works the other way, from Centre to State, only if the State Government specifically notifies it. Second, it builds in a real deadline: the deciding government gets 120 days from receiving the request, and silence past that point counts as a yes. Third, it draws a hard line around a specific list of grave offences where none of this protection applies at all — sanction simply is not required, because Parliament decided those offences should never hide behind an official's position. Section 218(5) is a smaller, separate power sitting alongside all of this: once sanction exists, the government gets to pick who runs the prosecution and where.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 218 appears to track CrPC section 197 (prosecution of Judges and public servants) closely in its core structure — the official-duty nexus test, the Central/State sanction split, and the Armed Forces provisions in sub-sections (2)–(4) all appear substantively continued. Two features stand out as likely changes and are flagged for independent confirmation rather than asserted: (1) the 120-day deemed-sanction clock in the second proviso to sub-section (1) does not appear to have a direct CrPC section 197 counterpart and, if confirmed, is a genuine procedural innovation responding to the long-standing complaint of indefinite administrative delay on sanction requests; (2) the third proviso's blanket exemption from sanction for a closed list of grave offences appears structurally similar to a proviso inserted into CrPC section 197 by the Criminal Law (Amendment) Act, 2013 in relation to specific IPC sexual-offence sections, which would make it continuity rather than a fresh BNSS invention — but the exact CrPC provision and its section list have not been independently verified against this repository's source text, so this should be confirmed before being asserted as settled in a filing.*

### Test your instinct

:::: instinct A public servant assaults a private citizen during a personal dispute that has nothing to do with his official functions, but which happens to occur during his official working hours. He claims sanction under section 218(1) is required before he can be prosecuted.
::: ruling No sanction is required
Being on duty at the time of an act is not the same as the act being done in the discharge of official duty. The Matajog Dobey nexus test asks whether the act complained of is reasonably connected to the discharge of official duty, or whether the official position was merely the occasion — a cloak — for an act that was not really part of the job. A personal dispute unconnected to official functions does not attract section 218(1)'s protection merely because of the clock on the wall.
:::
::::

:::: instinct A request for sanction under section 218(1) was received by the State Government on a given date. One hundred and thirty days pass with no decision either way, and the prosecution argues it may now proceed on the footing that sanction has been granted.
::: ruling Correct — sanction is deemed granted
Section 218(1)'s second proviso is explicit: the Government must decide within one hundred and twenty days of receiving the request, and if it fails to do so, sanction is deemed to have been accorded. Once that window has run without a decision, the prosecution is entitled to proceed on the footing that sanction exists, regardless of the government's continued silence.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

Matajog Dobey v. H.C. Bhari, AIR 1956 SC 44 (Constitution Bench). The Court held that the predecessor sanction provision protects only acts reasonably connected with the discharge of official duty — not every act done while an official happens to be on duty, and not an act where the official capacity was merely a cloak for the objectionable conduct — and that the question of whether sanction is required can be raised, and examined, at any stage of the proceeding. **Practitioner takeaway**: frame the section 218(1) argument, on either side, around the reasonable-connection-to-duty test, not around the accused's official status or working hours alone.

#### Sword and shield

As a **shield**, section 218(1) protects officials from prosecution for genuinely duty-connected conduct being weaponised through vexatious complaints — the point of the sanction requirement is to filter those out before trial ever begins. As a **sword**, the defence can raise absence of sanction, or a wrongly-directed sanction request, as a threshold bar at any stage per Matajog Dobey; the prosecution's countervailing sword is the 120-day deemed-sanction proviso, which prevents an official's protective government from simply neutralising a case through silence, and the third proviso, which removes the shield altogether for the specified grave-offence band.

#### The limitation clock

No Chapter XXXVI limitation period is fixed by this cluster. Section 218(1)'s second proviso instead creates its own distinct 120-day *sanction-decision* clock — not a limitation period on when the offence itself must be prosecuted, but a deadline binding the government's response to a sanction request, with deemed sanction as the consequence of missing it. Track the date of receipt of the request precisely; that date, not the date of the offence, is what starts this clock.

#### Interlocking matrix

Section 218 interlocks with section 217 immediately preceding it in this Chapter — both are sanction gates, but section 217 targets offences against the State generally while section 218 targets Judges, Magistrates, protected public servants, and Armed Forces personnel specifically for acts in official duty. It interlocks with ⚠️ *the Lokpal and Lokayuktas Act, 2013 (outside this repository's verified corpus)*, which section 218(1) expressly carves out as an alternative regime, and with ⚠️ *BNS 2023 sections 64–79, 143, 199 and 200, the sanction-exempt band (outside this repository's verified corpus)*.

#### The authorities

⚠️ *Prakash Singh Badal v. State of Punjab, (2007) 1 SCC 1 — reiterates the reasonable-nexus test; cited here as secondary and flagged for independent verification of the exact holding before use.* ⚠️ *K. Veeraswami v. Union of India, (1991) 3 SCC 655 — addresses sanction for prosecuting a Judge under the Prevention of Corruption Act, 1988, a related but distinct statutory context from section 218 itself; cited here as secondary and flagged for verification before treating it as directly on point for a section 218 sanction question.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Before conceding or contesting a sanction requirement, run the Matajog Dobey nexus test on the specific act alleged, not on the accused's general official status.
2. Check the offence against section 218(1)'s third-proviso list first — if it applies, the entire sanction analysis is unnecessary.
3. In any case where the sanctioning government has been silent, calendar the 120-day clock from the documented date of receipt of the sanction request, and be ready to establish that date precisely.
4. Check whether an Article 356 Proclamation was in force at the relevant time — it silently substitutes Central Government sanction for State Government sanction under both section 218(1)'s first proviso and section 218(4).
5. Once sanction exists, check whether the sanctioning government has exercised its section 218(5) power to direct the prosecutor, manner, or trial court, and factor that into case strategy early.

## Sections 219–222 — Personal offences: marriage, cruelty, the marital relationship, and defamation (flagship, closes the chapter)

### The dispute this solves

::: oneminute These four sections close the chapter with offences the Sanhita treats as deeply personal — marriage-related offences, cruelty, an offence specific to a marital relationship, and defamation. Each gets its own carefully tailored answer to "who may complain," because in offences like these the person actually wronged may be the only one who should decide whether to prosecute at all — or may be the one person practically unable to.
Section 219 covers offences against marriage, generally requiring the aggrieved person's own complaint but building in named proxies for a child, a person of unsound mind or with an intellectual disability, someone incapacitated by sickness, a woman customarily excused from appearing in public, or a serving-Armed-Forces husband unable to obtain leave. Section 220 covers cruelty, and uniquely in this cluster allows *either* a police report or a complaint from a defined circle of relatives. Section 221 covers an offence specific to persons in a marital relationship, restricting the complaint to the wife against the husband, and adding a distinct evidentiary threshold — the Court's own prima facie satisfaction. Section 222 is the flagship: defamation ordinarily needs the aggrieved person's own complaint, but where the person defamed is the President, the Vice-President, a Governor, a State Administrator, or a Minister or public servant acting in public functions, section 222(2) opens a second route entirely — a Court of Session taking cognizance directly, without committal, on a Public Prosecutor's written complaint, subject to government sanction and its own six-month clock.
:::

::: story The Minister, the newspaper, and two different doors
A sitting Minister is defamed in relation to his conduct in the discharge of his public functions. He has two doors available, not one. He can complain to a Magistrate himself, as any aggrieved person could — section 222(6) expressly preserves that ordinary route, untouched by anything else in the section. Or, the Public Prosecutor can go straight to the Court of Session, skipping committal entirely, provided the Central or State Government (depending on whose affairs the Minister serves) has given previous sanction, and provided the complaint is filed within six months of the alleged offence. The two routes carry genuinely different preconditions — one needs no sanction and no six-month clock at all, the other needs both. In a separate matter, a woman is the victim of an offence under section 82, and it is her mother, not the woman herself, who wants to complain on her behalf. Section 219(1)(c) allows exactly that, naming her father, mother, brother, sister, son, daughter, or — with the Court's leave — a wider circle of blood, marriage, or adoption relations, for this one offence specifically.
:::

> **219. (1)** No Court [[!shall]] take cognizance of an offence punishable under sections 81 to 84 (both inclusive) of ⚠️ *the Bharatiya Nyaya Sanhita, 2023* except upon a complaint made by some person aggrieved by the offence:
>
> *Provided that—*
>
> *(a) where such person is a child, or is of unsound mind or is having intellectual disability requiring higher support needs, or is from sickness or infirmity unable to make a complaint, or is a woman who, according to the local customs and manners, ought not to be compelled to appear in public, some other person [[?may]], with the leave of the Court, make a complaint on his or her behalf;*
>
> *(b) where such person is the husband and he is serving in any of the Armed Forces of the Union under conditions which are certified by his Commanding Officer as precluding him from obtaining leave of absence to enable him to make a complaint in person, some other person authorised by the husband in accordance with the provisions of sub-section (4) [[?may]] make a complaint on his behalf;*
>
> *(c) where the person aggrieved by an offence punishable under section 82 of the Bharatiya Nyaya Sanhita, 2023 is the wife, complaint [[?may]] be made on her behalf by her father, mother, brother, sister, son or daughter or by her father's or mother's brother or sister, or, with the leave of the Court, by any other person related to her by blood, marriage or adoption.*
>
> **(2)** For the purposes of sub-section (1), no person other than the husband of the woman [[!shall]] be deemed to be aggrieved by any offence punishable under section 84 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*.
>
> **(3)** When in any case falling under clause (a) of the proviso to sub-section (1), the complaint is sought to be made on behalf of a child or of a person of unsound mind by a person who has not been appointed or declared by a competent authority to be the guardian, and the Court is satisfied that there is a guardian so appointed or declared, the Court [[!shall]], before granting the application for leave, cause notice to be given to such guardian and give him a reasonable opportunity of being heard.
>
> **(4)** The authorisation referred to in clause (b) of the proviso to sub-section (1) [[!shall]] be in writing, [[!shall]] be signed or otherwise attested by the husband, [[!shall]] contain a statement to the effect that he has been informed of the allegations upon which the complaint is to be founded, [[!shall]] be countersigned by his Commanding Officer, and [[!shall]] be accompanied by a certificate signed by that Officer to the effect that leave of absence for the purpose of making a complaint in person cannot for the time being be granted to the husband.
>
> **(5)** Any document purporting to be such an authorisation, and any document purporting to be the required certificate, [[!shall]], unless the contrary is proved, be presumed to be genuine and [[!shall]] be received in evidence.
>
> **(6)** No Court [[!shall]] take cognizance of an offence under section 64 of ⚠️ *the Bharatiya Nyaya Sanhita, 2023*, where such offence consists of sexual intercourse by a man with his own wife, the wife being under eighteen years of age, if more than one year has elapsed from the date of the commission of the offence.
>
> **(7)** The provisions of this section apply to the abetment of, or attempt to commit, an offence as they apply to the offence.
>
> **220.** No Court [[!shall]] take cognizance of an offence punishable under ⚠️ *section 85 of the Bharatiya Nyaya Sanhita, 2023* except upon a police report of facts which constitute such offence or upon a complaint made by the person aggrieved by the offence or by her father, mother, brother, sister or by her father's or mother's brother or sister or, with the leave of the Court, by any other person related to her by blood, marriage or adoption.
>
> **221.** No Court [[!shall]] take cognizance of an offence punishable under ⚠️ *section 67 of the Bharatiya Nyaya Sanhita, 2023* where the persons are in a marital relationship, except upon prima facie satisfaction of the facts which constitute the offence upon a complaint having been filed or made by the wife against the husband.
>
> **222. (1)** No Court [[!shall]] take cognizance of an offence punishable under ⚠️ *section 356 of the Bharatiya Nyaya Sanhita, 2023* except upon a complaint made by some person aggrieved by the offence:
>
> *Provided that where such person is a child, or is of unsound mind or is having intellectual disability or is from sickness or infirmity unable to make a complaint, or is a woman who, according to the local customs and manners, ought not to be compelled to appear in public, some other person [[?may]], with the leave of the Court, make a complaint on his or her behalf.*
>
> **(2)** Notwithstanding anything contained in this Sanhita, when any such offence is alleged to have been committed against a person who, at the time of such commission, is the President of India, the Vice-President of India, the Governor of a State, the Administrator of a Union territory or a Minister of the Union or of a State or of a Union territory, or any other public servant employed in connection with the affairs of the Union or of a State in respect of his conduct in the discharge of his public functions, a Court of Session [[?may]] take cognizance of such offence, without the case being committed to it, upon a complaint in writing made by the Public Prosecutor.
>
> **(3)** Every complaint referred to in sub-section (2) [[!shall]] set forth the facts which constitute the offence alleged, the nature of such offence and such other particulars as are reasonably sufficient to give notice to the accused of the offence alleged to have been committed by him.
>
> **(4)** No complaint under sub-section (2) [[!shall]] be made by the Public Prosecutor except with the previous sanction—
>
> (a) of the State Government,—
>
> (i) in the case of a person who is or has been the Governor of that State or a Minister of that Government;
>
> (ii) in the case of any other public servant employed in connection with the affairs of the State;
>
> (b) of the Central Government, in any other case.
>
> **(5)** No Court of Session [[!shall]] take cognizance of an offence under sub-section (2) unless the complaint is made within six months from the date on which the offence is alleged to have been committed.
>
> **(6)** Nothing in this section [[!shall]] affect the right of the person against whom the offence is alleged to have been committed, to make a complaint in respect of that offence before a Magistrate having jurisdiction or the power of such Magistrate to take cognizance of the offence upon such complaint.

::: proviso Section 220's "either/or" is the exception in this cluster, not the rule
Every other complaint-standing rule in sections 219, 221 and 222(1) requires a complaint from a specific person or a named circle of relatives. Section 220 alone lets *either* a police report *or* a qualifying complaint found cognizance — a materially wider gateway, reflecting that cruelty offences are frequently investigated and reported by the police independently of whether the victim or her family is able or willing to formally complain.
:::

::: proviso Section 222(2)'s special route does not close off section 222(1)'s ordinary route
Section 222(6) is explicit: nothing in section 222 disturbs the defamed person's right to complain before an ordinary Magistrate under sub-section (1), or that Magistrate's power to take cognizance on such a complaint. The sanction requirement in sub-section (4) and the six-month clock in sub-section (5) bind only a complaint made *by the Public Prosecutor under sub-section (2)* — a President, Governor, or Minister defamed in his public functions is not forced into the Sessions-Court route and is not, by choosing the ordinary Magistrate route instead, exposed to a sanction requirement that was never meant to apply there.
:::

### How this actually runs

<MicroTree
  input="An offence in this cluster — marriage-related, cruelty, a marital-relationship offence, or defamation — has occurred. Who has standing to complain, and through which route?"
  :gates="[
    { q: 'Is the offence one of sections 81–84 of the Bharatiya Nyaya Sanhita, 2023 — a marriage-related offence?',
      note: 'Section 219 — complaint by the aggrieved person, or a named proxy under the incapacity/Armed-Forces/section-82-relative provisos; note the section 219(2) husband-only rule for a section 84 offence and the section 219(6) one-year clock for an under-18-wife section 64 offence',
      no: 'Check the cruelty offence next' },
    { q: 'Is it section 85 — ⚠️ cruelty?',
      note: 'Section 220 — uniquely in this cluster, either a police report or a complaint by the aggrieved woman or named relatives suffices',
      no: 'Check the marital-relationship offence next' },
    { q: 'Is it section 67 where the parties are in a marital relationship?',
      note: 'Section 221 — complaint only by the wife against the husband, and only on the Court’s own prima facie satisfaction of the facts',
      no: 'Check defamation next' },
    { q: 'Is it section 356 — defamation?',
      note: 'Section 222 — ordinarily the aggrieved person’s own complaint (or a proxy under the incapacity proviso); but where the person defamed is the President, Vice-President, a Governor, a State Administrator, or a Minister/public servant acting in public functions, section 222(2) opens a second, sanction-gated Court-of-Session route as well',
      no: 'None of this cluster’s specific rules apply' }
  ]"
  result="Each offence in this cluster carries its own tailored complaint-standing rule — and section 222(2) alone lets a Court of Session take cognizance directly, bypassing committal, on the Public Prosecutor’s sanctioned complaint"
  resultKind="mandatory"
  caveat="Section 222(2)’s route is an addition, not a substitution — section 222(6) keeps the ordinary Magistrate complaint route fully open to the same defamed office-holder, without the sanction requirement or the six-month clock that attach only to the section 222(2) route." />

### In plain English

Four offences, four different answers to "who may knock on the Court's door." Marriage offences generally need the wronged person's own complaint, with a specific list of stand-ins for people who cannot realistically complain themselves. Cruelty is the odd one out — police can bring it in on their own report, not just a private complaint. The marital-relationship offence in section 221 is narrower still: only the wife can complain against the husband, and the Court itself has to be prima facie satisfied before proceeding. Defamation is the flagship because it runs on two tracks at once: an ordinary person defamed complains to a Magistrate like anyone else, but a President, Governor, Minister, or public servant defamed in the exercise of public functions gets an extra, optional track — a direct complaint by the Public Prosecutor to a Court of Session, skipping the usual committal step, but only after the right government has given sanction and only within six months of the offence.

### What changed from the CrPC

⚠️ *Provisional mapping, pending dedicated verification pass: BNSS section 219 appears to track CrPC section 198 (prosecution for offences against marriage); BNSS section 220 appears to track CrPC section 198A (prosecution of offences under section 498A of the Indian Penal Code, inserted in 1983 — the likely CrPC-era analogue of BNS section 85's cruelty offence); BNSS section 221 appears to track CrPC section 198B (cognizance of an offence under section 376B of the Indian Penal Code, inserted in 2013 — the likely analogue of BNS section 67's marital-relationship offence); and BNSS section 222 appears to track CrPC section 199 (prosecution for defamation), including its special Court-of-Session/Public-Prosecutor route for high public office-holders. None of these correspondences, nor the underlying BNS section numbers themselves, have been independently cross-checked against this repository's verified bare-Act text. Flagged for verification before relying on the exact CrPC-to-BNSS correspondence in a filing.*

### Test your instinct

:::: instinct A woman is the victim of an offence under section 82. A concerned neighbour, who is not related to her by blood, marriage, or adoption and has not sought the Court's leave, files a complaint on her behalf.
::: ruling The complaint does not satisfy section 219(1)(c)
Section 219(1)(c) names a specific circle for a section 82 offence — father, mother, brother, sister, son, daughter, a father's or mother's brother or sister — and extends beyond that circle only to "any other person related to her by blood, marriage or adoption," and only with the leave of the Court. An unrelated neighbour, without Court leave, falls outside every category the proviso allows.
:::
::::

:::: instinct A Minister, defamed in relation to his public functions, files an ordinary complaint before a Magistrate rather than routing the matter through the Public Prosecutor and the Court of Session. The accused argues the complaint is invalid because no government sanction was obtained and the six-month clock in section 222(5) does not appear to have been observed.
::: ruling The ordinary complaint is valid; sanction and the six-month clock do not apply to it
Section 222(6) expressly preserves the defamed person's right to complain before a Magistrate under section 222(1), untouched by anything in the rest of the section. The sanction requirement in section 222(4) and the six-month clock in section 222(5) bind only a complaint made by the Public Prosecutor under section 222(2) — they have no application to an ordinary complaint filed directly under section 222(1), which the Minister remained free to use.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

Subramanian Swamy v. Union of India, (2016) 7 SCC 221. The Court upheld the constitutional validity of criminal defamation and the CrPC's associated procedural scheme, including the special route allowing a Court of Session to take cognizance of defamation against high public office-holders directly, on a Public Prosecutor's complaint, without committal. **Practitioner takeaway**: a constitutional challenge to criminal defamation itself, or to the structure of the section 222(2) special route, is foreclosed at the Supreme Court level — contest the case instead on whether the procedural preconditions (correct defamed office-holder, government sanction, the six-month clock) were actually satisfied.

#### Sword and shield

As a **shield**, the named-proxy and named-relative lists across sections 219, 220 and 222(1) protect genuinely incapacitated victims from being left without a route to justice, while still keeping the complaint gate narrow enough to exclude unrelated third parties. Section 222(2)'s sanction requirement is itself a shield for the accused against a purely political prosecution for defaming an office-holder. As a **sword**, the defence can challenge any complaint filed by someone outside the exact statutory list, or challenge a section 222(2) complaint on a missing sanction or an expired six-month clock — while the prosecution's sword is section 222(6), which keeps the ordinary Magistrate route open regardless of whether the special route's preconditions were met.

#### The limitation clock

Two distinct clocks live inside this cluster, and neither should be confused with the other. Section 219(6) bars cognizance of a section 64 offence against an under-18 wife once more than one year has elapsed from the date of the offence. Section 222(5) separately bars a Court of Session from taking cognizance under section 222(2) unless the complaint is made within six months of the alleged offence — a clock that attaches only to the special defamation route, not to an ordinary section 222(1) complaint.

#### Interlocking matrix

Section 222(2) is a confirmed, express exception to section 213's committal-only rule (this Chapter's second cluster) — the only other one this cluster identifies with certainty. The sanction structure in section 222(4) echoes the Central/State sanction split running through sections 217 and 218 earlier in this Chapter, though it is a separate, defamation-specific sanction rather than the same mechanism. This cluster interlocks with ⚠️ *BNS 2023 sections 64, 67, 81–85 and 356 — all outside this repository's verified corpus and flagged accordingly*.

#### The authorities

⚠️ *None further promoted beyond the winning ratio; not independently verified for this rendering.*

#### Strategy and drafting

**Model checklist for reviewing this cluster's provisions:**

1. Identify the exact offence first — the complaint-standing rule differs materially across sections 219, 220, 221 and 222, and none of the four templates is interchangeable with another.
2. Where a proxy or named relative is filing on the victim's behalf, check the specific list that offence's section allows, and confirm Court leave was sought wherever the relevant proviso requires it.
3. For a defamation complaint against a high public office-holder, choose deliberately between the ordinary section 222(1) route and the section 222(2) special route — they carry different preconditions, and section 222(6) means the special route is never the only option.
4. Calendar both this cluster's clocks precisely and separately: the one-year bar in section 219(6), and the six-month bar in section 222(5) — confirm which (if either) applies before assuming a complaint is time-barred or safely within time.

---
