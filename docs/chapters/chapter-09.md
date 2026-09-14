# Chapter IX — Security for Keeping the Peace and for Good Behaviour

## Sections 125–126 — Security ordered by a criminal court on conviction, and security ordered by an Executive Magistrate before anything has happened at all

### The dispute this solves

::: oneminute Two starting points for the same idea — a bond that binds a person to keep the peace — one triggered by a conviction that has already happened, the other triggered purely by apprehension of what might happen next.
Chapter IX is preventive, not punitive: its bonds are not a sentence for an offence already proved, they are a forward-looking guarantee against future conduct. Section 125 sits at the end of a criminal trial — a Court of Session or a Magistrate of the first class has just convicted a person of a listed offence, and separately decides that security for keeping the peace is also warranted, for up to three years. Section 126 needs no conviction at all: an Executive Magistrate who receives information that a person is likely to commit a breach of the peace can require that person to show cause why he should not execute a bond, for up to one year, purely on the strength of that apprehension.
:::

::: story The conviction that came with a second order
A person is convicted by a Magistrate of the first class of an offence involving criminal force, one of the categories listed in section 125(2). The Magistrate, in passing sentence, also forms the opinion that security for keeping the peace is necessary, and orders the convicted person to execute a bond for eighteen months. The person later argues that his sentence for the offence should be the end of the matter. Section 125 answers this directly: the power to require a peace bond is additional to, not instead of, the sentence itself, and it can be exercised "at the time of passing sentence" precisely because it addresses a different risk — what the person might do next, not what he has already done.
:::

### The Act, decompiled

::: proviso Section 125 — Security for keeping peace on conviction
"125. (1) When a Court of Session or Court of a Magistrate of the first class convicts a person of any of the offences specified in sub-section (2) or of abetting any such offence and is of opinion that it is necessary to take security from such person for keeping the peace, the Court [[?may]], at the time of passing sentence on such person, order him to execute a bond or bail bond, for keeping the peace for such period, not exceeding three years, as it thinks fit.
(2) The offences referred to in sub-section (1) are—
(a) any offence punishable under Chapter XI of the Bharatiya Nyaya Sanhita, 2023, other than an offence punishable under sub-section (1) of section 193 or section 196 or section 197 thereof;
(b) any offence which consists of, or includes, assault or using criminal force or committing mischief;
(c) any offence of criminal intimidation;
(d) any other offence which caused, or was intended or known to be likely to cause, a breach of the peace.
(3) If the conviction is set aside on appeal or otherwise, the bond or bail bond so executed [[!shall]] become void.
(4) An order under this section [[?may]] also be made by an Appellate Court or by a Court when exercising its powers of revision."
:::

::: proviso Section 126 — Security for keeping peace in other cases
"126. (1) When an Executive Magistrate receives information that any person is likely to commit a breach of the peace or disturb the public tranquillity or to do any wrongful act that may probably occasion a breach of the peace or disturb the public tranquillity and is of opinion that there is sufficient ground for proceeding, he [[?may]], in the manner hereinafter provided, require such person to show cause why he should not be ordered to execute a bond or bail bond for keeping the peace for such period, not exceeding one year, as the Magistrate thinks fit.
(2) Proceedings under this section [[?may]] be taken before any Executive Magistrate when either the place where the breach of the peace or disturbance is apprehended is within his local jurisdiction or there is within such jurisdiction a person who is likely to commit a breach of the peace or disturb the public tranquillity or to do any wrongful act as aforesaid beyond such jurisdiction."
:::

### How this actually runs

<MicroTree
  input="Someone is thought to be a risk to the peace. Has a criminal court already convicted him of a qualifying offence, or is this purely a preventive step by an Executive Magistrate?"
  :gates="[
    { q: 'Has a Court of Session or a Magistrate of the first class just convicted the person of an offence within section 125(2), or of abetting one, and does the Court also consider a peace bond necessary?', note: 'Section 125 applies. The bond can be ordered at the time of sentencing, for up to three years, and becomes void if the conviction is later set aside.', no: 'Move to the Executive Magistrate question.' },
    { q: 'Has an Executive Magistrate instead received information that the person is likely to commit a breach of the peace, disturb public tranquillity, or do a wrongful act likely to cause either, with sufficient ground to proceed?', note: 'Section 126 applies. The Magistrate may require the person to show cause why a peace bond of up to one year should not be ordered, and proceedings may be taken wherever the breach is apprehended or the person is found within jurisdiction.', no: 'Neither section is engaged on these facts; no Chapter IX peace-bond power arises yet.' }
  ]"
  result="Whether the peace-bond power in play is the conviction-linked power under section 125, or the purely preventive, information-based power under section 126, is identified before the bond's duration and procedural safeguards are assessed."
  resultKind="mandatory"
  caveat="Section 125's three-year ceiling and section 126's one-year ceiling are not interchangeable; the longer period is available only where an actual conviction for a listed offence has occurred."
/>

### In plain English

Section 125 is a bolt-on power available only at the moment of sentencing, and only for offences the section itself lists — serious offences against the human body, criminal force, mischief, criminal intimidation, and a catch-all for any offence that actually caused or was intended to cause a breach of the peace. Because it rides on a conviction, its safeguard is built in: if the conviction itself falls away on appeal, the bond automatically becomes void, since the premise for it has disappeared. Section 126 works on an entirely different logic. There is no offence, no trial, no conviction — only an Executive Magistrate's assessment, based on information received, that a person is likely to cause trouble. Precisely because it acts on apprehension rather than proof, the ceiling is shorter — one year rather than three — and the Magistrate must still be satisfied there is "sufficient ground for proceeding" before even starting the show-cause process, a threshold the later sections in this chapter build out into a full inquiry.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 125 and 126 are provisionally mapped to CrPC sections 106 and 107 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Both sections read as close carry-forwards of their presumed CrPC ancestors, with the offence list in section 125(2) updated to reference the Bharatiya Nyaya Sanhita, 2023 in place of the Indian Penal Code, 1860. No other substantive change is apparent in the operative language of either section.

### Test your instinct

:::: instinct The acquittal on appeal that came after the bond was already executed
A person convicted under section 125 executes a peace bond for two years. Eight months later, his conviction is set aside in appeal. He asks whether he must continue complying with the bond for the remaining period.
::: ruling What actually happens
Section 125(3) answers this without any need for a separate application: the bond "shall become void" the moment the conviction is set aside on appeal or otherwise. The voiding is automatic on the text, tied directly to the fall of the conviction that was its premise; the person is not bound to continue complying with a bond whose underlying basis no longer exists.
:::
::::

:::: instinct The Magistrate who acted on a rumour with nothing more
An Executive Magistrate receives an unverified rumour that a person is generally quarrelsome and might cause trouble at some point. Without more, the Magistrate initiates section 126 proceedings against that person.
::: ruling What actually happens
Section 126(1) does not authorise proceedings merely because information of some kind has been received — the Magistrate must also be "of opinion that there is sufficient ground for proceeding." A vague, unverified rumour of general quarrelsomeness, without any specific likelihood of a breach of the peace or disturbance of public tranquillity, is thin ground for that opinion, and a person subjected to section 126 proceedings on such a basis has a real argument that the threshold was not met.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Peace-bond proceedings under sections 125 and 126 are more often the subject of High Court supervisory jurisdiction on individual facts than of a single, generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, a prosecuting or complaining party can invoke section 125 at sentencing to secure an additional, forward-looking restraint on a convicted person beyond the sentence itself, or invoke section 126 pre-emptively where a real, specific risk of a breach of the peace exists. As a **shield**, a person facing section 126 proceedings can challenge the Magistrate's threshold "sufficient ground" opinion directly, and a person bonded under section 125 can point to section 125(3) the moment the underlying conviction is set aside, to have the bond treated as void without further proceedings.

#### The limitation clock

Section 125's bond period is capped at three years and section 126's at one year; within an ongoing section 126 proceeding, the six-month inquiry clock under section 135(6), discussed later in this chapter, becomes the more pressing timing constraint once proceedings are actually under way.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Conviction for a listed offence, Court also considers a peace bond necessary | Section 125 | Bond of up to three years ordered at sentencing; void if conviction later set aside |
| Executive Magistrate receives information of a likely breach of the peace or disturbance, with sufficient ground | Section 126 | Show-cause process initiated for a bond of up to one year |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not assume section 125 applies to every conviction — confirm the offence actually falls within the closed categories in section 125(2) before relying on it.
2. Do not treat section 126's "information received" alone as sufficient — the Magistrate's own opinion that there is sufficient ground for proceeding is a distinct, necessary element.
3. Do not overlook section 125(3)'s automatic voiding on the underlying conviction being set aside — no separate application should be needed to establish that the bond has lapsed.

**Timing.** Raise a challenge to the sufficiency of the ground for section 126 proceedings as early as possible, ideally at the show-cause stage itself, before the matter proceeds into the fuller inquiry the later sections of this chapter set out.

**Model checklist for reviewing a section 125 or 126 order:**

1. Confirm which section is actually in play — a post-conviction order under section 125, or a purely preventive order under section 126.
2. For section 125, confirm the offence falls within section 125(2)'s listed categories.
3. For section 126, examine the information relied upon and the Magistrate's stated basis for concluding there was sufficient ground to proceed.

---

## Sections 127–129 — Good-behaviour security from dangerous publishers, from persons hiding for a purpose, and from habitual offenders

### The dispute this solves

::: oneminute Three distinct classes of person an Executive Magistrate can require to show cause for a good-behaviour bond — the disseminator of dangerous or obscene material, the person concealing himself before a cognizable offence, and the habitual offender.
Where sections 125 and 126 are about keeping the peace, sections 127 to 129 are about good behaviour — a broader, forward-looking commitment, capped at one year for sections 127 and 128, and up to three years for section 129's habitual offenders. The three sections target genuinely different concerns: section 127 reaches a person disseminating specified dangerous or obscene material, with a built-in press-freedom safeguard; section 128 reaches a person taking precautions to conceal his presence with a view to committing a cognizable offence; section 129 reaches the habitual offender — the person whose pattern of conduct, not any single act, is the basis for concern.
:::

::: story The publisher who thought registration was a shield
A person distributes obscene matter of the kind described in section 294 of the Bharatiya Nyaya Sanhita, 2023. When proceedings are initiated against him under section 127, he claims immunity because the publication in question is duly registered under the Press and Registration of Books Act, 1867. The claim only partly succeeds: section 127(2) does shield the editor, proprietor, printer or publisher of a properly registered and conforming publication from proceedings over matter contained in it — but only from proceedings brought without the order or authority of the State Government or an officer it has empowered. A private complainant acting alone cannot bypass that safeguard.
:::

### The Act, decompiled

::: proviso Section 127 — Security for good behaviour from persons disseminating certain matters
"127. (1) When an Executive Magistrate receives information that there is within his local jurisdiction any person who, within or without such jurisdiction,—
(i) either orally or in writing or in any other manner, intentionally disseminates or attempts to disseminate or abets the dissemination of,—
(a) any matter the publication of which is punishable under section 152 or section 196 or section 197 or section 299 of the Bharatiya Nyaya Sanhita, 2023; or
(b) any matter concerning a Judge acting or purporting to act in the discharge of his official duties which amounts to criminal intimidation or defamation under the Bharatiya Nyaya Sanhita, 2023;
(ii) makes, produces, publishes or keeps for sale, imports, exports, conveys, sells, lets to hire, distributes, publicly exhibits or in any other manner puts into circulation any obscene matter such as is referred to in section 294 of the Bharatiya Nyaya Sanhita, 2023,
and the Magistrate is of opinion that there is sufficient ground for proceeding, the Magistrate [[?may]], in the manner hereinafter provided, require such person to show cause why he should not be ordered to execute a bond or bail bond, for his good behaviour for such period, not exceeding one year, as the Magistrate thinks fit.
(2) No proceedings [[!shall]] be taken under this section against the editor, proprietor, printer or publisher of any publication registered under, and edited, printed and published in conformity with, the rules laid down in the Press and Registration of Books Act, 1867 with reference to any matter contained in such publication except by the order or under the authority of the State Government or some officer empowered by the State Government in this behalf."
:::

::: proviso Section 128 — Security for good behaviour from suspected persons
"128. When an Executive Magistrate receives information that there is within his local jurisdiction a person taking precautions to conceal his presence and that there is reason to believe that he is doing so with a view to committing a cognizable offence, the Magistrate [[?may]], in the manner hereinafter provided, require such person to show cause why he should not be ordered to execute a bond or bail bond for his good behaviour for such period, not exceeding one year, as the Magistrate thinks fit."
:::

::: proviso Section 129 — Security for good behaviour from habitual offenders
"129. When an Executive Magistrate receives information that there is within his local jurisdiction a person who—
(a) is by habit a robber, house-breaker, thief, or forger; or
(b) is by habit a receiver of stolen property knowing the same to have been stolen; or
(c) habitually protects or harbours thieves, or aids in the concealment or disposal of stolen property; or
(d) habitually commits, or attempts to commit, or abets the commission of, the offence of kidnapping, abduction, extortion, cheating or mischief, or any offence punishable under Chapter X of the Bharatiya Nyaya Sanhita, 2023, or under section 178, section 179, section 180 or section 181 of that Sanhita; or
(e) habitually commits, or attempts to commit, or abets the commission of, offences, involving a breach of the peace; or
(f) habitually commits, or attempts to commit, or abets the commission of—
(i) any offence under one or more of the following Acts, namely:—
(a) the Drugs and Cosmetics Act, 1940;
(b) the Foreigners Act, 1946;
(c) the Employees' Provident Fund and Miscellaneous Provisions Act, 1952;
(d) the Essential Commodities Act, 1955;
(e) the Protection of Civil Rights Act, 1955;
(f) the Customs Act, 1962;
(g) the Food Safety and Standards Act, 2006; or
(ii) any offence punishable under any other law providing for the prevention of hoarding or profiteering or of adulteration of food or drugs or of corruption; or
(g) is so desperate and dangerous as to render his being at large without security hazardous to the community,
such Magistrate [[?may]], in the manner hereinafter provided, require such person to show cause why he should not be ordered to execute a bail bond, for his good behaviour for such period, not exceeding three years, as the Magistrate thinks fit."
:::

### How this actually runs

<MicroTree
  input="An Executive Magistrate is considering a good-behaviour proceeding. Which of the three good-behaviour sections fits the information received?"
  :gates="[
    { q: 'Does the information concern a person disseminating specified dangerous matter, matter defamatory or intimidating toward a Judge, or obscene matter under BNS section 294?', note: 'Section 127 applies, capped at one year, subject to the registered-press safeguard in section 127(2).', no: 'Move to the concealment question.' },
    { q: 'Does the information instead concern a person taking precautions to conceal his presence, with reason to believe he is doing so with a view to committing a cognizable offence?', note: 'Section 128 applies, capped at one year.', no: 'Move to the habitual-offender question.' },
    { q: 'Does the information instead show a pattern of habitual conduct falling within section 129(a) to (g) — habitual theft, receiving stolen property, harbouring thieves, specified habitual offences, or being so desperate and dangerous as to be hazardous at large?', note: 'Section 129 applies, capped at three years, reflecting the more serious, patterned nature of the concern.', no: 'None of sections 127 to 129 is engaged on these facts.' }
  ]"
  result="The correct good-behaviour provision — and its associated one-year or three-year ceiling — is identified before a show-cause order is issued."
  resultKind="mandatory"
  caveat="Section 127(2)'s registered-press safeguard only bars proceedings brought without State Government order or authorisation; it does not bar all proceedings against a registered publication's editor or publisher outright."
/>

### In plain English

Section 127 targets dissemination, not mere possession — actively spreading, or attempting or abetting the spread of, specified dangerous or obscene material. Because press freedom concerns sit close to this section, subsection (2) builds in a real safeguard: a properly registered publication's editor, proprietor, printer or publisher cannot be proceeded against over its contents except with State Government order or authorisation, cutting off the risk of a private complainant using this section to harass a lawful press outlet. Section 128 is narrower and more pointed: concealment alone is not the trigger — the concealment must be coupled with reason to believe it is being done with a view to committing a cognizable offence, so ordinary privacy-seeking behaviour does not qualify. Section 129 is the broadest and most consequential of the three, both in what it reaches — a long, specific list of habitual-offender categories including several named statutes on hoarding, profiteering and corruption — and in its three-year ceiling, double that of sections 127 and 128, reflecting that a demonstrated pattern of conduct is treated as a more serious basis for restraint than a single act or a single item of dangerous material.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 127, 128 and 129 are provisionally mapped to CrPC sections 108, 109 and 110 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Section 127's list of triggering BNS provisions and section 129's list of triggering statutes and BNS sections have been updated to track the Bharatiya Nyaya Sanhita, 2023's renumbering in place of the Indian Penal Code, 1860; the substantive structure of all three sections otherwise reads as a close carry-forward of the presumed CrPC ancestors.

### Test your instinct

:::: instinct The person hiding from a debt collector, not from the law
A person is found to be deliberately avoiding being seen in his neighbourhood, changing his routine and staying indoors during the day. Investigation reveals he is avoiding a debt collector, not planning any offence. Section 128 proceedings are nonetheless initiated against him.
::: ruling What actually happens
Section 128 requires not just concealment of presence but "reason to believe that he is doing so with a view to committing a cognizable offence." Concealment motivated by debt avoidance, with no connection to any cognizable offence, does not meet this second, independent element. A section 128 proceeding built solely on the fact of concealment, without any basis connecting it to an intended cognizable offence, is vulnerable on its own terms.
:::
::::

:::: instinct The registered newspaper sued by a private citizen
A private citizen, offended by an article in a duly registered newspaper conforming to the Press and Registration of Books Act, 1867, personally initiates section 127 proceedings against its editor, without any State Government order or authorisation.
::: ruling What actually happens
Section 127(2) squarely bars this. Proceedings against the editor, proprietor, printer or publisher of a registered, conforming publication, over matter contained in it, may be taken only by the order or under the authority of the State Government or an officer it has empowered — a private citizen acting alone cannot initiate such proceedings, regardless of how offensive the article may be.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Good-behaviour proceedings under sections 127 to 129 are fact-intensive and more commonly reviewed by High Courts on individual records than settled by a single generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, an authority with the requisite State Government order can invoke section 127 against a person disseminating genuinely dangerous or obscene material, or invoke section 129 to restrain a person with a demonstrated pattern of habitual offending for up to three years. As a **shield**, a registered publication's editor or publisher can invoke section 127(2) to have unauthorised proceedings dismissed at the threshold, and a person facing section 128 proceedings can challenge the absence of any genuine connection between his concealment and an intended cognizable offence.

#### The limitation clock

Sections 127 and 128 cap the resulting bond at one year and section 129 at three years; as with sections 125 and 126, the six-month inquiry clock under section 135(6) becomes the operative timing constraint once show-cause proceedings actually commence.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Dissemination of specified dangerous or obscene matter | Section 127 | Show-cause for a bond up to one year; registered-press safeguard in section 127(2) applies |
| Concealment of presence with a view to a cognizable offence | Section 128 | Show-cause for a bond up to one year |
| Pattern of habitual offending within section 129(a)–(g) | Section 129 | Show-cause for a bond up to three years |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not overlook section 127(2)'s safeguard when advising a registered publication facing proceedings — confirm whether the requisite State Government order or authorisation exists before conceding the proceeding's validity.
2. Do not treat mere concealment as sufficient for section 128 — the connection to an intended cognizable offence is a distinct, necessary element that must be independently shown.
3. Do not assume section 129's three-year ceiling applies loosely — confirm the specific habitual-offender category in section 129(a) to (g) actually relied upon, since the list is closed, not illustrative.

**Timing.** Where section 127(2)'s safeguard is available, raise it at the earliest possible stage, ideally before any show-cause order is even issued, since it goes to the very competence of the proceeding.

**Model checklist for reviewing a section 127, 128 or 129 proceeding:**

1. For section 127, confirm whether the registered-press safeguard applies and, if so, whether the requisite State Government order or authorisation exists.
2. For section 128, confirm the concealment is genuinely connected to an intended cognizable offence, not some unrelated motive.
3. For section 129, identify the specific closed-list category relied upon and the evidentiary basis for treating the conduct as habitual.

---

## Sections 130–134 — Turning a Magistrate's decision to act into a written order, and getting the person in front of the Magistrate to answer it

### The dispute this solves

::: oneminute Five short, mechanical sections that convert the Magistrate's decision under sections 126 to 129 into a concrete written order, and then get that order in front of the person it concerns — whether he is already in court, has to be summoned, is under arrest, or can be excused from turning up in person at all.
Once a Magistrate decides to act under any of sections 126 to 129, the chapter does not leave the next steps to informal practice. Section 130 requires a written order recording the substance of the information, the bond amount, its term, and the number of sureties. Sections 131 to 133 then handle the mechanics of getting that order to the person — read out if he is present, summons or warrant if he is not, with an arrest-warrant proviso for genuine urgency, and a copy of the order always accompanying the summons or warrant. Section 134 closes the cluster with a practical concession: personal attendance can be dispensed with, and the person allowed to appear through an advocate instead.
:::

::: story The warrant that skipped the summons
A Magistrate receives a police report indicating an imminent breach of the peace that cannot be prevented except by the immediate arrest of the person concerned. Rather than issuing an ordinary summons under section 132, the Magistrate issues a warrant for arrest straightaway. The person later argues the summons step could not simply be skipped. Section 132's proviso answers this precisely: where a police report or other recorded information shows a genuine fear of breach of the peace that cannot be prevented otherwise than by immediate arrest, the Magistrate may issue a warrant for arrest at any time — the ordinary summons route is not the only path where urgency is shown.
:::

### The Act, decompiled

::: proviso Section 130 — Order to be made
"130. When a Magistrate acting under section 126, section 127, section 128 or section 129, deems it necessary to require any person to show cause under such section, he [[!shall]] make an order in writing, setting forth the substance of the information received, the amount of the bond to be executed, the term for which it is to be in force and the number of sureties, after considering the sufficiency and fitness of sureties."
:::

::: proviso Section 131 — Procedure in respect of person present in Court
"131. If the person in respect of whom such order is made is present in Court, it [[!shall]] be read over to him, or, if he so desires, the substance thereof [[!shall]] be explained to him."
:::

::: proviso Section 132 — Summons or warrant in case of person not so present
"132. If such person is not present in Court, the Magistrate [[!shall]] issue a summons requiring him to appear, or, when such person is in custody, a warrant directing the officer in whose custody he is to bring him before the Court:
Provided that whenever it appears to such Magistrate, upon the report of a police officer or upon other information (the substance of which report or information shall be recorded by the Magistrate), that there is reason to fear the commission of a breach of the peace, and that such breach of the peace cannot be prevented otherwise than by the immediate arrest of such person, the Magistrate [[?may]] at any time issue a warrant for his arrest."
:::

::: proviso Section 133 — Copy of order to accompany summons or warrant
"133. Every summons or warrant issued under section 132 [[!shall]] be accompanied by a copy of the order made under section 130, and such copy [[!shall]] be delivered by the officer serving or executing such summons or warrant to the person served with, or arrested under, the same."
:::

::: proviso Section 134 — Power to dispense with personal attendance
"134. The Magistrate [[?may]], if he sees sufficient cause, dispense with the personal attendance of any person called upon to show cause why he should not be ordered to execute a bond for keeping the peace or for good behaviour and [[?may]] permit him to appear by an advocate."
:::

### How this actually runs

<MicroTree
  input="A Magistrate has decided to act under sections 126 to 129. What has to happen to get the order to the person concerned?"
  :gates="[
    { q: 'Has the Magistrate made the written order under section 130, setting out the information, bond amount, term, and number of sureties?', note: 'This is the mandatory first step; without it, nothing under sections 131 to 133 can follow.', no: 'The order must be made in writing under section 130 before proceeding further.' },
    { q: 'Is the person in respect of whom the order was made already present in Court?', note: 'Section 131 applies: the order is read over to him, or its substance explained if he prefers.', no: 'Move to the summons-or-warrant question.' },
    { q: 'Is the person not present, and is he currently in custody?', note: 'Section 132 requires a warrant directing the custodian to bring him before the Court; if not in custody, an ordinary summons issues instead, unless the urgent-arrest proviso is met.', no: 'An ordinary summons under section 132 issues in the usual course.' },
    { q: 'Does the urgent-arrest proviso apply — a police report or recorded information showing genuine fear of a breach of the peace preventable only by immediate arrest?', note: 'The Magistrate may issue a warrant for arrest at any time, bypassing the ordinary summons route.', no: 'The ordinary summons or custody-warrant route under section 132 governs.' }
  ]"
  result="The correct sequence — written order, then the appropriate method of bringing the person before the Court, always accompanied by a copy of the order — is confirmed before the show-cause hearing proceeds."
  resultKind="mandatory"
  caveat="Section 133's requirement that a copy of the order accompany every summons or warrant issued under section 132 is not a formality; the person is entitled to see the substance of the information and the bond terms before he answers to them."
/>

### In plain English

This cluster is the chapter's due-process spine. Section 130 forces the Magistrate to commit to writing exactly what is being alleged, exactly how much security is sought, for how long, and how many sureties — nothing is left to the person's imagination or to informal courtroom recollection later. Sections 131 to 133 then cover every practical scenario for getting that order in front of the person: already in court, simply read it out or explain it; not in court but at liberty, summon him; not in court and already in custody, direct his production by warrant; and, for the genuinely urgent case where a police report shows a breach of the peace can only be stopped by immediate arrest, skip straight to an arrest warrant. Section 133 ties it together by making sure that whichever route is used, a copy of the section 130 order travels with the summons or warrant, so the person is never brought before the Magistrate without knowing exactly what he has to answer. Section 134 is the one concession in the other direction — a practical recognition that requiring personal attendance at every stage can be dispensed with, letting the person's advocate stand in for him where the Magistrate sees sufficient cause.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 130, 131, 132, 133 and 134 are provisionally mapped to CrPC sections 111, 112, 113, 114 and 115 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

All five sections read as close, largely mechanical carry-forwards of their presumed CrPC ancestors, with no substantive change apparent in the operative text.

### Test your instinct

:::: instinct The summons that arrived without a copy of the order
A person is served with a summons under section 132 directing him to appear before a Magistrate in connection with good-behaviour proceedings. No copy of the underlying section 130 order accompanies the summons. He appears, and only then learns the details of what is alleged against him.
::: ruling What actually happens
Section 133 makes it mandatory that every summons or warrant issued under section 132 be accompanied by a copy of the section 130 order, delivered to the person served or arrested. A summons served without that accompanying copy does not comply with section 133 on its face, and the person has a legitimate procedural objection to having been kept in the dark about the substance of the allegation, the bond amount, and its term until his actual appearance.
:::
::::

:::: instinct The advocate who was turned away
A person facing good-behaviour proceedings, unable to attend personally due to genuine difficulty, sends his advocate to appear and seek dispensation of personal attendance. The Magistrate refuses to even consider the request, insisting the person must appear in person regardless of circumstances.
::: ruling What actually happens
Section 134 gives the Magistrate discretion to dispense with personal attendance "if he sees sufficient cause," and to permit appearance by an advocate. A blanket refusal to even consider a request for dispensation, without engaging with whether sufficient cause exists on the facts presented, sits uneasily with the section's plain terms, which contemplate a genuine exercise of discretion rather than an automatic insistence on personal attendance in every case.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Sections 130 to 134 are procedural mechanics most often raised as one ground among several in a broader challenge to security proceedings, rather than litigated as standalone questions before the Supreme Court.
:::

#### Sword and shield

As a **sword**, an authority relying on section 132's proviso can secure an immediate arrest warrant, bypassing the ordinary summons route, where a police report genuinely shows a breach of the peace preventable only by immediate arrest. As a **shield**, a person can challenge non-compliance with section 133's mandatory copy-of-order requirement, or press a genuine application under section 134 to avoid the burden of repeated personal attendance where sufficient cause exists.

#### The limitation clock

No independent limitation period attaches to ss. 130–134; the practical timing constraint is that the written order under section 130 must precede any summons or warrant under section 132, and the section 133 copy must accompany that summons or warrant from the outset, not be supplied later.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Magistrate decides to act under ss. 126–129 | Section 130 | Mandatory written order recording information, bond amount, term, and sureties |
| Person present in Court | Section 131 | Order read over or explained |
| Person absent, at liberty or in custody | Section 132 | Summons or custody-warrant issues; urgent-arrest proviso available on genuine urgency |
| Summons or warrant under s. 132 issued | Section 133 | Mandatory copy of the s. 130 order must accompany it |
| Personal attendance genuinely burdensome | Section 134 | Magistrate may dispense with it and permit appearance by advocate |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not overlook a missing section 130 written order as a threshold defect — the entire summons/warrant/hearing sequence in sections 131 to 133 depends on it existing first.
2. Do not accept a summons or warrant issued under section 132 without checking that a copy of the section 130 order actually accompanied it, per section 133.
3. Do not assume the urgent-arrest proviso in section 132 is available on unrecorded or informal information — the proviso requires the substance of the report or information to be recorded by the Magistrate.

**Timing.** Raise a section 133 non-compliance objection at the first appearance, before the show-cause hearing proceeds substantively, so the procedural defect is not treated as waived by participation.

**Model checklist for reviewing the summons/order stage:**

1. Confirm a written section 130 order exists, with all four required particulars.
2. Confirm the correct route was used to bring the person before the Court — reading over, summons, custody-warrant, or urgent arrest-warrant — matching the person's actual status.
3. Confirm a copy of the section 130 order accompanied any summons or warrant issued.

---

## Sections 135–137 — The inquiry into whether security is actually needed, capped at six months, and the two ways it can end

### The dispute this solves

::: oneminute The chapter's central fact-finding stage: a summons-case-style inquiry into the truth of the information, with an interim-detention power for genuine emergencies, a hard six-month outer limit, and two opposite outcomes — an order to give security, or discharge.
Sections 130 to 134 got the person in front of the Magistrate; section 135 is where the actual merits are tested. It is conducted, as nearly as practicable, like a summons-case trial, and section 135(3) gives the Magistrate an emergency power to order interim security or detention mid-inquiry where immediate measures are genuinely necessary — but only against a person already proceeded against under sections 127, 128 or 129, not 126. Section 135(6) then imposes a firm ceiling: the whole inquiry must finish within six months, or the proceedings automatically terminate, absent a specially-reasoned written extension. Sections 136 and 137 give the inquiry its two possible endings — an order to give security, capped by what the original section 130 order actually specified, or a discharge where the case for security is not made out.
:::

::: story The inquiry that ran past its own deadline
A section 129 proceeding against a person alleged to be a habitual offender drags on for seven months without conclusion, and the Magistrate has recorded no special reasons in writing for the delay. The person argues the proceedings have lapsed. Section 135(6) supports him directly: on the expiry of six months from commencement, without a specially-reasoned written direction to continue, the proceedings "stand terminated" — not merely liable to termination on application, but terminated by the section's own operation.
:::

### The Act, decompiled

::: proviso Section 135 — Inquiry as to truth of information
"135. (1) When an order under section 130 has been read or explained under section 131 to a person present in Court, or when any person appears or is brought before a Magistrate in compliance with, or in execution of, a summons or warrant, issued under section 132, the Magistrate [[!shall]] proceed to inquire into the truth of the information upon which action has been taken, and to take such further evidence as [[?may]] appear necessary.
(2) Such inquiry [[!shall]] be made, as nearly as [[?may]] be practicable, in the manner hereinafter prescribed for conducting trial and recording evidence in summons-cases.
(3) After the commencement, and before the completion, of the inquiry under sub-section (1), the Magistrate, if he considers that immediate measures are necessary for the prevention of a breach of the peace or disturbance of the public tranquillity or the commission of any offence or for the public safety, [[?may]], for reasons to be recorded in writing, direct the person in respect of whom the order under section 130 has been made to execute a bond or bail bond, for keeping the peace or maintaining good behaviour until the conclusion of the inquiry, and [[?may]] detain him in custody until such bond or bail bond is executed or, in default of execution, until the inquiry is concluded:
Provided that—
(a) no person against whom proceedings are not being taken under section 127, section 128, or section 129 [[!shall]] be directed to execute a bond or bail bond for maintaining good behaviour;
(b) the conditions of such bond, whether as to the amount thereof or as to the provision of sureties or the number thereof or the pecuniary extent of their liability, [[!shall]] not be more onerous than those specified in the order under section 130.
(4) For the purposes of this section the fact that a person is a habitual offender or is so desperate and dangerous as to render his being at large without security hazardous to the community [[?may]] be proved by evidence of general repute or otherwise.
(5) Where two or more persons have been associated together in the matter under inquiry, they [[?may]] be dealt with in the same or separate inquiries as the Magistrate shall think just.
(6) The inquiry under this section [[!shall]] be completed within a period of six months from the date of its commencement, and if such inquiry is not so completed, the proceedings under this Chapter [[!shall]], on the expiry of the said period, stand terminated unless, for special reasons to be recorded in writing, the Magistrate otherwise directs:
Provided that where any person has been kept in detention pending such inquiry, the proceeding against that person, unless terminated earlier, [[!shall]] stand terminated on the expiry of a period of six months of such detention.
(7) Where any direction is made under sub-section (6) permitting the continuance of proceedings, the Sessions Judge [[?may]], on an application made to him by the aggrieved party, vacate such direction if he is satisfied that it was not based on any special reason or was perverse."
:::

::: proviso Section 136 — Order to give security
"136. If, upon such inquiry, it is proved that it is necessary for keeping the peace or maintaining good behaviour, as the case may be, that the person in respect of whom the inquiry is made should execute a bond or bail bond, the Magistrate [[!shall]] make an order accordingly:
Provided that—
(a) no person [[!shall]] be ordered to give security of a nature different from, or of an amount larger than, or for a period longer than, that specified in the order made under section 130;
(b) the amount of every bond or bail bond [[!shall]] be fixed with due regard to the circumstances of the case and [[!shall]] not be excessive;
(c) when the person in respect of whom the inquiry is made is a child, the bond [[!shall]] be executed only by his sureties."
:::

::: proviso Section 137 — Discharge of person informed against
"137. If, on an inquiry under section 135, it is not proved that it is necessary for keeping the peace or maintaining good behaviour, as the case may be, that the person in respect of whom the inquiry is made, should execute a bond, the Magistrate [[!shall]] make an entry on the record to that effect, and if such person is in custody only for the purposes of the inquiry, [[!shall]] release him, or, if such person is not in custody, [[!shall]] discharge him."
:::

### How this actually runs

<MicroTree
  input="A section 135 inquiry is under way, or has just concluded. What stage is it at, and what follows?"
  :gates="[
    { q: 'Has the inquiry been running for more than six months from its commencement, without a specially-reasoned written direction from the Magistrate to continue?', note: 'Section 135(6) applies: the proceedings stand terminated automatically on the expiry of the six-month period, and any person in detention pending the inquiry is likewise released on the expiry of six months of that detention if not terminated earlier.', no: 'Move to the mid-inquiry emergency question.' },
    { q: 'During the inquiry, does the Magistrate consider immediate measures genuinely necessary for public safety or to prevent a breach of the peace, disturbance, or offence, against a person proceeded against under section 127, 128 or 129?', note: 'Section 135(3) allows an interim bond and, in default, detention until the inquiry concludes, but only within the limits of the original section 130 order and never against a person proceeded against solely under section 126.', no: 'No mid-inquiry emergency measure is engaged; the inquiry proceeds to its ordinary conclusion.' },
    { q: 'Has the inquiry concluded with proof that security is necessary for keeping the peace or maintaining good behaviour?', note: 'Section 136 applies: an order to give security issues, bound by the nature, amount, and period specified in the original section 130 order, with a child bonded only through sureties.', no: 'Section 137 applies: the person is discharged, or released if held only for the inquiry.' }
  ]"
  result="Whether the six-month clock has already terminated the proceedings, whether an interim emergency measure is available mid-inquiry, and which of the two final outcomes — security ordered or discharge — the inquiry produced, is established before the person's status is treated as settled."
  resultKind="mandatory"
  caveat="Section 135(3)'s interim bond-and-detention power is expressly unavailable against a person proceeded against only under section 126; it applies only to sections 127, 128 and 129 proceedings."
/>

### In plain English

Section 135 is where the chapter stops being about apprehension and starts being about proof — the Magistrate must actually inquire into the truth of the information, using summons-case procedure, before anyone is required to give security. Subsection (3) is the pressure valve for genuine emergencies arising mid-inquiry, but it is carefully fenced: it cannot be used against a person proceeded against only under section 126 (the general breach-of-peace apprehension section), only against those proceeded against under the good-behaviour sections 127 to 129, and even then the interim bond cannot be more onerous than what the original section 130 order already specified. Subsection (6) is the section's most consequential safeguard in practice — a genuinely hard six-month ceiling on the whole inquiry, with automatic termination as the default consequence of delay, not a discretionary option the Magistrate can simply decline to exercise. The two possible endings mirror each other precisely: section 136 requires proof before security can be ordered, and even then the order cannot exceed what section 130 originally proposed in nature, amount, or duration; section 137 requires the opposite finding before discharge, but is otherwise just as mandatory once that finding is made.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 135, 136 and 137 are provisionally mapped to CrPC sections 116, 117 and 118 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The six-month inquiry ceiling in section 135(6), together with the linked six-month detention-ceiling proviso and the Sessions Judge's power under section 135(7) to vacate a continuance direction found not to be based on special reasons or found to be perverse, is understood to be substantively carried forward from the CrPC rather than newly introduced by the BNSS — but this should be treated as a flagged, unverified observation, not a settled proposition, until checked directly against the CrPC bare-act text. No other structural change is apparent in this cluster.

### Test your instinct

:::: instinct The mid-inquiry bond demanded against a section 126 respondent
During an inquiry into a person proceeded against solely under section 126 for apprehended breach of the peace, the Magistrate, concerned about immediate risk, directs him under section 135(3) to execute an interim bond pending the inquiry's conclusion.
::: ruling What actually happens
Section 135(3)'s proviso (a) is unambiguous: "no person against whom proceedings are not being taken under section 127, section 128, or section 129 shall be directed to execute a bond or bail bond for maintaining good behaviour." A person proceeded against only under section 126 falls outside this list, and the interim direction is not available against him under section 135(3), regardless of the Magistrate's genuine concern about immediate risk.
:::
::::

:::: instinct The continuance direction with no real special reason behind it
A Magistrate, six months into an inquiry, issues a brief written direction continuing the proceedings, citing only administrative backlog as the reason. The aggrieved person applies to the Sessions Judge to vacate the direction.
::: ruling What actually happens
Section 135(7) gives the Sessions Judge express power to vacate a continuance direction under section 135(6) where satisfied it "was not based on any special reason or was perverse." Administrative backlog, without more, is not obviously a special reason of the kind section 135(6) contemplates for overriding the default six-month termination, and the Sessions Judge has a real basis to vacate the direction on the aggrieved person's application.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. The six-month inquiry ceiling and the section 136/137 outcomes are more often the subject of High Court review on individual facts than a single generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, a person facing a prolonged, unresolved good-behaviour or peace proceeding can invoke section 135(6) to have the proceedings automatically terminated the moment six months pass without a specially-reasoned written continuance, and can invoke section 135(7) to have any weak continuance direction vacated by the Sessions Judge. As a **shield**, a Magistrate genuinely concerned about imminent risk can rely on section 135(3) for a proportionate interim measure — but only where the person was proceeded against under section 127, 128 or 129, and only within the bounds the original section 130 order already set.

#### The limitation clock

Section 135(6)'s six-month ceiling on the inquiry — and its linked six-month detention ceiling — is the sharpest clock in this cluster, and arguably in the whole chapter: it terminates proceedings automatically by the section's own operation, not merely on application, unless a specially-reasoned written direction is recorded before the period expires.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Inquiry running past six months without special-reasons continuance | Section 135(6) | Proceedings stand automatically terminated |
| Genuine mid-inquiry emergency, respondent proceeded against under ss. 127–129 | Section 135(3) | Interim bond and, in default, detention until inquiry concludes, bounded by the s. 130 order |
| Inquiry proves necessity for security | Section 136 | Security ordered, bounded by nature/amount/period in the s. 130 order; child bonded only via sureties |
| Inquiry does not prove necessity | Section 137 | Discharge, or release if held only for the inquiry |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not overlook that section 135(3)'s interim measure is unavailable against a person proceeded against only under section 126 — confirm which section actually grounds the proceeding before advising on interim exposure.
2. Do not treat the six-month inquiry ceiling as merely directory — section 135(6)'s termination is automatic on the section's own text, absent a specially-reasoned written continuance.
3. Do not assume a section 136 security order can exceed what the original section 130 order specified — the proviso caps the nature, amount, and period by reference to that earlier order.

**Timing.** Calendar the six-month inquiry deadline from day one of any section 126 to 129 proceeding, and be ready to invoke section 135(6)'s automatic termination, or challenge a weak continuance direction under section 135(7), the moment the period lapses.

**Model checklist for reviewing an inquiry's conclusion:**

1. Confirm the inquiry was completed within six months, or that a specially-reasoned written continuance was recorded before expiry.
2. Where a mid-inquiry interim measure was imposed under section 135(3), confirm the underlying proceeding was under section 127, 128 or 129, and that the interim terms did not exceed the original section 130 order.
3. Confirm whether the final order was one to give security under section 136, bounded by the original order, or a discharge under section 137.

---

## Sections 138–140 — When the clock on a security period actually starts, what the bond itself must say, and the Magistrate's power to reject an unfit surety

### The dispute this solves

::: oneminute Three connected mechanics of the bond itself: fixing the start date of the security period where the person is already serving a sentence, defining exactly what conduct breaches a good-behaviour bond, and the safeguarded procedure for rejecting a surety as unfit.
Once security has been ordered under section 125 or section 136, three further questions have to be answered before the bond is more than a piece of paper. Section 138 fixes when the security period actually begins — a real question where the person is already serving a sentence of imprisonment at the time the order is made, since a peace bond running concurrently with imprisonment would be practically meaningless. Section 139 defines the content of the obligation itself, and for good-behaviour bonds specifically, treats the commission or attempted commission or abetment of any offence punishable with imprisonment, anywhere, as a breach. Section 140 protects the integrity of the security itself, giving the Magistrate power to refuse or reject an unfit surety, but only after a proper inquiry with notice to both the surety and the person who offered him.
:::

::: story The bond that would have run out while its subject was in prison
A person sentenced to imprisonment is also ordered, under section 125, to give security for keeping the peace for a period commencing immediately. If the security period ran concurrently with the sentence, it would largely lapse while the person had no practical opportunity to breach it. Section 138(1) prevents exactly this outcome: where a person is, at the time the security order is made, sentenced to or undergoing a sentence of imprisonment, the security period commences only on the expiration of that sentence — the peace bond's real work begins once the person is actually at liberty, not while he remains in custody.
:::

### The Act, decompiled

::: proviso Section 138 — Commencement of period for which security is required
"138. (1) If any person, in respect of whom an order requiring security is made under section 125 or section 136, is at the time such order is made, sentenced to, or undergoing a sentence of, imprisonment, the period for which such security is required [[!shall]] commence on the expiration of such sentence.
(2) In other cases such period [[!shall]] commence on the date of such order unless the Magistrate, for sufficient reason, fixes a later date."
:::

::: proviso Section 139 — Contents of bond
"139. The bond or bail bond to be executed by any such person [[!shall]] bind him to keep the peace or to be of good behaviour, as the case may be, and in the latter case the commission or attempt to commit, or the abetment of, any offence punishable with imprisonment, wherever it may be committed, is a breach of the bond or bail bond."
:::

::: proviso Section 140 — Power to reject sureties
"140. (1) A Magistrate [[?may]] refuse to accept any surety offered, or [[?may]] reject any surety previously accepted by him or his predecessor under this Chapter on the ground that such surety is an unfit person for the purposes of the bail bond:
Provided that before so refusing to accept or rejecting any such surety, he [[!shall]] either himself hold an inquiry on oath into the fitness of the surety, or cause such inquiry to be held and a report to be made thereon by a Magistrate subordinate to him.
(2) Such Magistrate [[!shall]], before holding the inquiry, give reasonable notice to the surety and to the person by whom the surety was offered and [[!shall]], in making the inquiry, record the substance of the evidence adduced before him.
(3) If the Magistrate is satisfied, after considering the evidence so adduced either before him or before a Magistrate deputed under sub-section (1), and the report of such Magistrate (if any), that the surety is an unfit person for the purposes of the bail bond, he [[!shall]] make an order refusing to accept or rejecting, as the case may be, such surety and recording his reasons for so doing:
Provided that before making an order rejecting any surety who has previously been accepted, the Magistrate [[!shall]] issue his summons or warrant, as he thinks fit, and cause the person for whom the surety is bound to appear or to be brought before him."
:::

### How this actually runs

<MicroTree
  input="Security has been ordered, and questions arise about when it starts, what conduct breaches it, or whether a surety is acceptable. Which section governs?"
  :gates="[
    { q: 'Was the person, at the time the security order was made under section 125 or 136, already sentenced to or serving a sentence of imprisonment?', note: 'Section 138(1) applies: the security period commences only on expiration of that sentence.', no: 'Section 138(2) applies instead: the period commences on the date of the order, unless the Magistrate fixes a later date for sufficient reason.' },
    { q: 'Is the question instead what conduct would actually breach a good-behaviour bond once executed?', note: 'Section 139 applies: commission, attempt, or abetment of any offence punishable with imprisonment, wherever committed, is a breach.', no: 'Move to the surety question.' },
    { q: 'Does the Magistrate wish to refuse or reject a surety as unfit?', note: 'Section 140 applies, and requires a proper inquiry on oath, with reasonable notice to the surety and to the person who offered him, before any refusal or rejection order, with an additional summons-or-warrant safeguard where a previously accepted surety is being rejected.', no: 'No section 140 issue arises; the surety stands as accepted.' }
  ]"
  result="The correct commencement date for the security period, the standard for what counts as a breach, and the safeguarded procedure for rejecting a surety, are each confirmed before the bond is treated as operative or breached."
  resultKind="mandatory"
  caveat="Section 140's inquiry-on-oath and notice requirements are mandatory preconditions to any refusal or rejection of a surety; they are not optional formalities the Magistrate may bypass for administrative convenience."
/>

### In plain English

Section 138 solves a timing problem that would otherwise make peace bonds pointless for anyone already in prison — the clock does not start ticking while the person has no real opportunity to breach the peace from inside a cell; it starts once he is actually released, unless he was never in custody to begin with, in which case the ordinary rule is that the period runs from the date of the order itself, with the Magistrate free to push the start date later only for a genuine, sufficient reason. Section 139 makes the good-behaviour standard concrete rather than aspirational: it is not confined to offences committed locally, or to offences of any particular kind — any offence punishable with imprisonment, committed anywhere, including a mere attempt or an abetment of one, counts as a breach. Section 140 is the safeguard that keeps the surety system honest in both directions — the Magistrate can screen out an unfit surety, whether newly offered or previously accepted, but cannot simply declare a surety unfit by fiat; a genuine inquiry on oath, with notice to both the surety and the person who offered him, must precede the decision, and rejecting a previously-accepted surety carries the further safeguard of requiring the bonded person's own appearance before the rejection takes effect.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 138, 139 and 140 are provisionally mapped to CrPC sections 119, 120 and 121 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

All three sections read as close, largely mechanical carry-forwards of their presumed CrPC ancestors, with no substantive change apparent in the operative text.

### Test your instinct

:::: instinct The good-behaviour bond breached by an offence committed abroad
A person bonded for good behaviour under section 136 is later found to have committed an offence punishable with imprisonment while abroad, entirely outside the jurisdiction where the bond was executed. He argues the offence, having occurred outside the country, cannot count as a breach of an Indian bond.
::: ruling What actually happens
Section 139 expressly states that the commission, attempt, or abetment of any offence punishable with imprisonment is a breach of the bond "wherever it may be committed." The location of the offence, including its occurrence abroad, does not by itself defeat a finding of breach under the section's own terms.
:::
::::

:::: instinct The surety rejected without any inquiry at all
A Magistrate, on learning informally that a previously accepted surety has fallen into financial difficulty, simply issues an order rejecting the surety without holding any inquiry, without notice to the surety, and without notice to the person for whom the surety was offered.
::: ruling What actually happens
Section 140(1)'s proviso and section 140(2) together make an inquiry on oath, with reasonable notice to both the surety and the person who offered him, a mandatory precondition to rejection. A rejection order made without any of these steps does not comply with section 140, regardless of how well-founded the underlying concern about the surety's fitness might turn out to be.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Sections 138 to 140 are mechanical bond-administration provisions typically raised as procedural grounds within a broader challenge, rather than the subject of standalone Supreme Court authority.
:::

#### Sword and shield

As a **sword**, an authority can rely on section 139's broad "wherever it may be committed" language to treat an offence committed outside the immediate jurisdiction, or even the country, as a breach of a good-behaviour bond. As a **shield**, a surety facing rejection, or the person who offered him, can insist on the full section 140 inquiry-on-oath and notice procedure before any rejection order takes effect, and a bonded person can invoke section 138(1) to establish that his security period had not yet even commenced while he remained in custody.

#### The limitation clock

No independent limitation period attaches to ss. 138–140; the operative timing question is the commencement date fixed under section 138, since the security period's own duration — up to three years under section 125 or 129, up to one year under sections 126 to 128 — runs from whatever start date section 138 fixes, not from the date of the original order in every case.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person under sentence of imprisonment when security order made | Section 138(1) | Security period commences only on expiration of that sentence |
| Person not under sentence when security order made | Section 138(2) | Security period commences on date of order, unless Magistrate fixes a later date for sufficient reason |
| Question of what conduct breaches a good-behaviour bond | Section 139 | Any offence punishable with imprisonment, or attempt or abetment of one, wherever committed |
| Magistrate wishes to refuse or reject a surety | Section 140 | Mandatory inquiry on oath with notice to surety and offeror; further summons/warrant safeguard for rejecting a previously-accepted surety |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not assume a security period runs from the date of the order where the person was already serving a sentence — confirm section 138(1)'s deferred commencement applies.
2. Do not treat section 139's breach standard as confined to offences within the same State or jurisdiction as the bond — the "wherever committed" language is genuinely broad.
3. Do not advise that a surety can be rejected on the Magistrate's bare say-so — the section 140 inquiry-on-oath and notice requirements are mandatory, not discretionary formalities.

**Timing.** Where a previously-accepted surety faces rejection, ensure the bonded person's own appearance is secured through the summons-or-warrant safeguard in section 140(3)'s proviso before treating the rejection as final.

**Model checklist for reviewing bond commencement, breach, or surety disputes:**

1. Confirm whether section 138(1)'s deferred commencement applies, based on the person's custodial status when the order was made.
2. Where breach is alleged, confirm the underlying conduct is an offence punishable with imprisonment, regardless of where committed.
3. Where a surety was rejected, confirm the full section 140 inquiry-on-oath and notice procedure was actually followed.

---

## Sections 141–143 — What happens when security is not given: imprisonment, the escape valve for releasing someone imprisoned on that ground, and fresh security after a bond is cancelled

### The dispute this solves

::: oneminute The chapter's endgame: default imprisonment capped at three years for failure to give ordered security, a layered release-and-reduction mechanism running from the District Magistrate up to the High Court, and the tidy-up provision for restoring fresh security once an old bond is cancelled.
Sections 141 to 143 close out the chapter by answering what happens when a person ordered to give security simply does not, or does but later breaches the bond. Section 141 is the default-imprisonment provision, with escalating procedural safeguards for longer periods — a Sessions Judge review for orders exceeding one year, and a hard three-year outer limit regardless of what was originally ordered. Section 142 is the release valve — several tiers of authority, from the District Magistrate up through the High Court and Court of Session, empowered to discharge or reduce the terms of someone imprisoned for default, including a conditional-discharge mechanism with its own cancellation and remand consequences. Section 143 handles the narrower, tidying-up situation where a surety's cancellation application under section 140(3)'s proviso, or section 142(10), brings the bonded person back before the Court, requiring fresh security for whatever period remains.
:::

::: story The default sentence that exceeded the three-year ceiling
A person is ordered to give security for a period that, combined with earlier default-related proceedings, would result in imprisonment exceeding three years for failure to give security. He argues the resulting order is unlawful regardless of how the calculation is reached. Section 141(3)'s proviso settles this in his favour without qualification: "the period (if any) for which any person is imprisoned for failure to give security shall not exceed three years" — an absolute ceiling that does not bend to the arithmetic of how the underlying proceedings were structured.
:::

### The Act, decompiled

::: proviso Section 141 — Imprisonment in default of security
"141. (1) (a) If any person ordered to give security under section 125 or section 136 does not give such security on or before the date on which the period for which such security is to be given commences, he [[!shall]], except in the case next hereinafter mentioned, be committed to prison, or, if he is already in prison, be detained in prison until such period expires or until within such period he gives the security to the Court or Magistrate who made the order requiring it;
(b) if any person after having executed a bond or bail bond for keeping the peace in pursuance of an order of a Magistrate under section 136, is proved, to the satisfaction of such Magistrate or his successor-in-office, to have committed breach of the bond or bail bond, such Magistrate or successor-in-office [[?may]], after recording the grounds of such proof, order that the person be arrested and detained in prison until the expiry of the period of the bond or bail bond and such order [[!shall]] be without prejudice to any other punishment or forfeiture to which the said person [[?may]] be liable in accordance with law.
(2) When such person has been ordered by a Magistrate to give security for a period exceeding one year, such Magistrate [[!shall]], if such person does not give such security as aforesaid, issue a warrant directing him to be detained in prison pending the orders of the Sessions Judge and the proceedings [[!shall]] be laid, as soon as conveniently [[?may]] be, before such Court.
(3) Such Court, after examining such proceedings and requiring from the Magistrate any further information or evidence which it thinks necessary, and after giving the concerned person a reasonable opportunity of being heard, [[?may]] pass such order on the case as it thinks fit:
Provided that the period (if any) for which any person is imprisoned for failure to give security [[!shall]] not exceed three years.
(4) If security has been required in the course of the same proceeding from two or more persons in respect of any one of whom the proceedings are referred to the Sessions Judge under sub-section (2) such reference [[!shall]] also include the case of any other of such persons who has been ordered to give security, and the provisions of sub-sections (2) and (3) [[!shall]], in that event, apply to the case of such other person also, except that the period (if any) for which he [[?may]] be imprisoned, [[!shall]] not exceed the period for which he was ordered to give security.
(5) A Sessions Judge [[?may]] in his discretion transfer any proceedings laid before him under sub-section (2) or sub-section (4) to an Additional Sessions Judge and upon such transfer, such Additional Sessions Judge [[?may]] exercise the powers of a Sessions Judge under this section in respect of such proceedings.
(6) If the security is tendered to the officer in charge of the jail, he [[!shall]] forthwith refer the matter to the Court or Magistrate who made the order, and [[!shall]] await the orders of such Court or Magistrate.
(7) Imprisonment for failure to give security for keeping the peace [[!shall]] be simple.
(8) Imprisonment for failure to give security for good behaviour [[!shall]], where the proceedings have been taken under section 127, be simple, and, where the proceedings have been taken under section 128 or section 129, be rigorous or simple as the Court or Magistrate in each case directs."
:::

::: proviso Section 142 — Power to release persons imprisoned for failing to give security
"142. (1) Whenever the District Magistrate in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case is of opinion that any person imprisoned for failing to give security under this Chapter [[?may]] be released without hazard to the community or to any other person, he [[?may]] order such person to be discharged.
(2) Whenever any person has been imprisoned for failing to give security under this Chapter, the High Court or Court of Session, or, where the order was made by any other Court, District Magistrate, in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case, [[?may]] make an order reducing the amount of the security or the number of sureties or the time for which security has been required.
(3) An order under sub-section (1) [[?may]] direct the discharge of such person either without conditions or upon any conditions which such person accepts:
Provided that any condition imposed [[!shall]] cease to be operative when the period for which such person was ordered to give security has expired.
(4) The State Government [[?may]] prescribe, by rules, the conditions upon which a conditional discharge [[?may]] be made.
(5) If any condition upon which any person has been discharged is, in the opinion of District Magistrate, in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case by whom the order of discharge was made or of his successor, not fulfilled, he [[?may]] cancel the same.
(6) When a conditional order of discharge has been cancelled under sub-section (5), such person [[?may]] be arrested by any police officer without warrant, and [[!shall]] thereupon be produced before the District Magistrate, in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case.
(7) Unless such person gives security in accordance with the terms of the original order for the unexpired portion of the term for which he was in the first instance committed or ordered to be detained (such portion being deemed to be a period equal to the period between the date of the breach of the conditions of discharge and the date on which, except for such conditional discharge, he would have been entitled to release), District Magistrate, in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case [[?may]] remand such person to prison to undergo such unexpired portion.
(8) A person remanded to prison under sub-section (7) [[!shall]], subject to the provisions of section 141, be released at any time on giving security in accordance with the terms of the original order for the unexpired portion aforesaid to the Court or Magistrate by whom such order was made, or to its or his successor.
(9) The High Court or Court of Session [[?may]] at any time, for sufficient reasons to be recorded in writing, cancel any bond for keeping the peace or for good behaviour executed under this Chapter by any order made by it, and District Magistrate, in the case of an order passed by an Executive Magistrate under section 136, or the Chief Judicial Magistrate in any other case [[?may]] make such cancellation where such bond was executed under his order or under the order of any other Court in his district.
(10) Any surety for the peaceable conduct or good behaviour of another person ordered to execute a bond under this Chapter [[?may]] at any time apply to the Court making such order to cancel the bond and on such application being made, the Court [[!shall]] issue a summons or warrant, as it thinks fit, requiring the person for whom such surety is bound to appear or to be brought before it."
:::

::: proviso Section 143 — Security on fresh summons or warrant
"143. (1) When a person for whose appearance a summons or warrant has been issued under the proviso to sub-section (3) of section 140 or under sub-section (10) of section 142, appears or is brought before the Magistrate or Court, the Magistrate or Court [[!shall]] cancel the bond or bail bond executed by such person and [[!shall]] order such person to give, for the unexpired portion of the term of such bond, fresh security of the same description as the original security.
(2) Every such order [[!shall]], for the purposes of sections 139 to 142 (both inclusive) be deemed to be an order made under section 125 or section 136, as the case may be."
:::

### How this actually runs

<MicroTree
  input="A person has failed to give ordered security, or has breached a bond already executed, or a surety has applied to cancel his bond. What follows?"
  :gates="[
    { q: 'Did the person fail to give security by the date the security period was to commence, or has he breached a section 136 peace bond already executed?', note: 'Section 141(1) applies: commitment or detention in prison follows, subject to the escalating safeguards in section 141(2) to (8), including the absolute three-year ceiling in section 141(3).', no: 'Move to the release question.' },
    { q: 'Was the person ordered to give security for a period exceeding one year, and has he failed to give it?', note: 'Section 141(2) requires the Magistrate to refer the matter to the Sessions Judge for orders, rather than deciding default imprisonment alone.', no: 'The Magistrate proceeds under section 141(1) without a mandatory Sessions Judge reference.' },
    { q: 'Is the person now imprisoned for failing to give security, and is release, reduction, or conditional discharge being considered?', note: 'Section 142 applies, with the specific tier of authority (District Magistrate, Chief Judicial Magistrate, Sessions Judge, or High Court) depending on who made the original order and what relief is sought.', no: 'Move to the fresh-security question.' },
    { q: 'Has a summons or warrant been issued under the proviso to section 140(3), or under section 142(10), to bring the bonded person back before the Court following a surety-cancellation application?', note: 'Section 143 applies: the original bond is cancelled, and fresh security of the same description is ordered for the unexpired portion of the term.', no: 'No section 143 fresh-security process is triggered on these facts.' }
  ]"
  result="Whether default imprisonment, the Sessions Judge reference for longer periods, a release or reduction application, or a fresh-security process following surety cancellation is in play is confirmed before the person's custodial status is treated as settled."
  resultKind="mandatory"
  caveat="Section 141(3)'s proviso fixes an absolute three-year ceiling on imprisonment for failure to give security, regardless of the period originally ordered or how default proceedings are structured across multiple persons under section 141(4)."
/>

### In plain English

Section 141 is the sharpest consequence in the chapter, but it comes with real structure: ordinary default triggers commitment or detention until the security is given or the period expires, but where the ordered period exceeds one year, the Magistrate cannot simply act alone — the matter must go to the Sessions Judge, who reviews the proceedings, can call for further evidence, must give the person a hearing, and is bound by the absolute three-year outer limit regardless of what was originally ordered. Section 141(7) and (8) add a further layer of proportionality: imprisonment for failing to keep the peace is always simple, while imprisonment for failing to maintain good behaviour tracks the seriousness of the underlying proceeding — simple for section 127 cases, but rigorous or simple at the Court's discretion for the more serious section 128 and 129 cases. Section 142 is the chapter's mercy valve, layered by authority: the District Magistrate or Chief Judicial Magistrate can order unconditional or conditional release where satisfied it poses no hazard, while the High Court, Court of Session, or the same Magistrate-tier authorities can go further and actually reduce the security's amount, sureties, or duration — and if a conditional release's conditions are broken, the person can be re-arrested without warrant and required to serve out the unexpired portion, subject always to section 141's own limits. Section 143 is the tidy-up: once a surety successfully applies to cancel his bond, the bonded person is brought back, his old bond is cancelled, and fresh security of the same kind is required for whatever time remains — with the fresh order deemed, for the purposes of the sections that follow, to be a section 125 or 136 order all over again.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 141, 142 and 143 are provisionally mapped to CrPC sections 122, 123 and 124 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

All three sections read as close, structurally detailed carry-forwards of their presumed CrPC ancestors, including the layered release-and-reduction authority in section 142 and the absolute three-year default-imprisonment ceiling in section 141(3). No substantive change is apparent in the operative text.

### Test your instinct

:::: instinct The District Magistrate who tried to reduce, not just release
A person imprisoned for failing to give security applies to the District Magistrate not for outright release, but for a reduction in the amount of security required. The District Magistrate, believing his power under section 142(1) is limited to discharge, declines to consider a reduction.
::: ruling What actually happens
Section 142(1) does give the District Magistrate (or Chief Judicial Magistrate, as the case requires) the power to order discharge where release poses no hazard — but section 142(2) is the provision for reducing the amount, sureties, or duration of security, and it names the High Court, Court of Session, and, "where the order was made by any other Court," the District Magistrate or Chief Judicial Magistrate as the relevant authorities for that specific relief. Whether the District Magistrate has section 142(2) reduction power in this case turns on who made the original order; declining to even consider the application without checking this is premature.
:::
::::

:::: instinct The three-year ceiling tested across multiple co-accused
Security is required in the same proceeding from three persons. Proceedings against one are referred to the Sessions Judge under section 141(2) because his required period exceeds one year. The other two, whose required periods are shorter, are then swept into the same reference. One of the two argues his own imprisonment cannot exceed his own originally ordered period, even though the primary referred person's case could go up to three years.
::: ruling What actually happens
Section 141(4) supports him precisely: where the reference is extended to cover other persons ordered to give security in the same proceeding, "the period (if any) for which he may be imprisoned, shall not exceed the period for which he was ordered to give security" for that individual person — the three-year ceiling in section 141(3) is a maximum, not a period automatically imported wholesale into every co-accused's case regardless of what was actually ordered against him.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Default-imprisonment and release proceedings under sections 141 to 143 are fact- and record-specific, and are more commonly addressed through High Court supervisory jurisdiction than through a single generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, an authority can invoke section 141(2)'s mandatory Sessions Judge reference to ensure a longer default-imprisonment period receives judicial review before being finalised. As a **shield**, a person facing default imprisonment can invoke section 141(3)'s absolute three-year ceiling regardless of the period originally ordered, invoke section 141(4) to cap his own individual exposure by reference to his own ordered period where swept into a multi-person reference, and pursue release or reduction under the layered authority structure of section 142.

#### The limitation clock

Section 141(3)'s absolute three-year ceiling on imprisonment for failure to give security is the operative outer limit in this cluster; within section 142, conditional-discharge conditions automatically cease to operate once the originally ordered security period itself expires, per section 142(3)'s proviso.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Failure to give ordered security, or breach of a s. 136 bond | Section 141(1) | Commitment or detention in prison |
| Ordered security period exceeds one year, and security not given | Section 141(2)–(3) | Mandatory Sessions Judge reference; three-year absolute ceiling |
| Multiple persons swept into the same reference | Section 141(4) | Each person's imprisonment capped at his own originally ordered period |
| Person imprisoned for default, release/reduction sought | Section 142 | Layered authority (District Magistrate/CJM/Sessions Judge/High Court) can discharge, conditionally discharge, or reduce terms |
| Surety-cancellation summons/warrant brings bonded person back | Section 143 | Old bond cancelled; fresh security of the same description ordered for the unexpired term |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not overlook the mandatory Sessions Judge reference under section 141(2) wherever the ordered security period exceeds one year — a Magistrate deciding default imprisonment alone in such a case has exceeded his own authority under the section.
2. Do not treat section 141(3)'s three-year ceiling as merely a guideline — it is an absolute limit on imprisonment for failure to give security, regardless of how the underlying proceedings are structured.
3. Do not conflate section 142(1)'s discharge power with section 142(2)'s reduction power — they involve different relief and, depending on who made the original order, potentially different authorities.

**Timing.** Where multiple persons are swept into a single Sessions Judge reference under section 141(4), confirm each individual's own originally ordered period at the earliest opportunity, so that no person's imprisonment inadvertently tracks a co-accused's longer exposure.

**Model checklist for reviewing default-imprisonment, release, or fresh-security proceedings:**

1. Confirm whether section 141(2)'s mandatory Sessions Judge reference applies, based on the length of the originally ordered security period.
2. Confirm the three-year ceiling under section 141(3), and, for multi-person references, each individual's own capped exposure under section 141(4).
3. Where release, conditional discharge, or reduction under section 142 is sought, confirm which tier of authority is competent based on who made the original order.
