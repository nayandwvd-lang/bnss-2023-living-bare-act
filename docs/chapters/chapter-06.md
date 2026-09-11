# Chapter VI — Processes to Compel Appearance

## Sections 63–65 — Form of summons, how it is served, and service on corporate bodies

### The dispute this solves

::: oneminute A summons is the Sanhita's first, least coercive tool for getting someone before a court — but "least coercive" only works if the paperwork and the service are actually done right.
Before a warrant, before an arrest, before any use of force at all, the ordinary way the Sanhita brings a person before a court is a summons: a written direction to appear, delivered to the person, not merely sent into the void. Chapter VI's opening sections fix what a summons has to look like — a duly signed, sealed document, now expressly including an electronic or digitally signed form — and how it must actually reach a natural person, a company, a firm, or a society, since each of these is a different kind of addressee with a different reliable way of being found.
:::

::: story The company that said it was never told
An electronics company is named in a criminal complaint. The complainant's lawyer has the summons sent to an old warehouse address the company vacated two years ago, and no one at the company ever receives it. When the company fails to appear, the prosecution argues non-appearance should be treated as evasion. Sections 63 through 65 answer this cleanly: a summons on a company has specific, named channels — its Director, Manager, Secretary, or other officer, personally or by registered post to the company's actual address — and service on the wrong address, to no one connected with the company at all, was never valid service in the first place.
:::

> **63. Form of summons.**—Every summons issued by a Court under this Sanhita [[!shall]] be,—
>
> (i) in writing, in duplicate, signed by the presiding officer of such Court or by such other officer as the High Court may, from time to time, by rule direct, and [[!shall]] bear the seal of the Court; or
>
> (ii) in an encrypted or any other form of electronic communication and [[!shall]] bear the image of the seal of the Court or digital signature.
>
> **64. Summons how served.**—(1) Every summons [[!shall]] be served by a police officer, or subject to such rules as the State Government may make in this behalf, by an officer of the Court issuing it or other public servant:
>
> Provided that the police station or the registrar in the Court [[!shall]] maintain a register to enter the address, email address, phone number and such other details as the State Government may, by rules, provide.
>
> (2) The summons [[!shall]], if practicable, be served personally on the person summoned, by delivering or tendering to him one of the duplicates of the summons:
>
> Provided that summons bearing the image of Court's seal may also be served by electronic communication in such form and in such manner, as the State Government may, by rules, provide.
>
> (3) Every person on whom a summons is so served personally [[!shall]], if so required by the serving officer, sign a receipt therefor on the back of the other duplicate.
>
> **65. Service of summons on corporate bodies, firms, and societies.**—(1) Service of a summons on a company or corporation [[?may]] be effected by serving it on the Director, Manager, Secretary or other officer of the company or corporation, or by letter sent by registered post addressed to the Director, Manager, Secretary or other officer of the company or corporation in India, in which case the service shall be deemed to have been effected when the letter would arrive in ordinary course of post.
>
> *Explanation.—In this section, "company" means a body corporate and "corporation" means an incorporated company or other body corporate registered under the Companies Act, 2013 or a society registered under the Societies Registration Act, 1860.*
>
> (2) Service of a summons on a firm or other association of individuals [[?may]] be effected by serving it on any partner of such firm or association, or by letter sent by registered post addressed to such partner, in which case the service shall be deemed to have been effected when the letter would arrive in ordinary course of post.
>
> ::: proviso "Deemed to have been effected" is a legal fiction, not proof the letter actually arrived
> Sections 65(1) and 65(2) both fix the moment of deemed service at when the letter "would arrive in ordinary course of post" — not when it is actually shown to have arrived, and certainly not when someone at the company actually opened it. This is a real evidentiary shortcut for the prosecution, and a real trap for a defendant company that changes address without formally updating anyone: registered post to a stale but still-technically-correct address may satisfy the section even if nobody ever saw the letter. A company defending non-appearance should focus less on "we never received it" and more on whether the address used was, in fact, one where a Director, Manager, Secretary or other officer could genuinely be found.
> :::

<MicroTree
  input="A summons needs to be served. Who is the addressee, and which service channel applies?"
  :gates="[
    { q: 'Is the summons in the prescribed written-and-sealed or digitally signed form required by section 63?', note: 'Move to the service question; a form-defective summons is vulnerable regardless of how well it is served.', no: 'The summons is defective on its face under section 63 before service is even considered.' },
    { q: 'Is the addressee a natural person capable of being served personally?', note: 'Section 64 applies — personal delivery or tender of a duplicate, with a signed receipt if the officer requires it, or electronic service in the State-Government-prescribed manner.', no: 'Move to the corporate-addressee question.' },
    { q: 'Is the addressee a company, corporation, firm, or association of individuals?', note: 'Section 65 applies — service on a named officer (company) or any partner (firm/association), personally or by registered post, deemed effected on ordinary-course arrival.', no: 'Neither section 64’s personal-service model nor section 65’s corporate model squarely fits; examine sections 66–71 for the applicable substituted or special-service provision.' }
  ]"
  result="The correct service channel and the correct addressee-specific rule is identified before non-appearance is treated as evasion rather than a service defect."
  resultKind="mandatory"
  caveat="Deemed service under section 65 is a legal fiction tied to when a properly addressed letter would ordinarily arrive — it does not establish, and should not be conflated with, actual receipt by anyone connected with the company or firm."
/>

### In plain English

Section 63 is simple: a summons has to be a real, signed, sealed document (or its digital equivalent) — not an informal note or a phone call. Section 64 is about serving a natural person: hand it to them directly if practicable, and get a signature if the officer wants one; the section now also expressly allows electronic service where the State Government has made rules for it. Section 65 recognises that a company, corporation, firm, or society is not a person who can simply be handed a piece of paper — so it names specific proxies (a Director, Manager, Secretary, or other officer for a company; any partner for a firm) and adds a registered-post option, with service deemed to happen on ordinary-course delivery, whether or not anyone can later prove the letter was actually opened.

### What changed from the CrPC

BNSS sections 63, 64 and 65 correspond to CrPC sections 61, 62 and 63 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes** — the corporate/firm service rules in section 65 track the CrPC's section 63 closely. The most significant addition is textual, not structural: section 63(ii)'s express recognition of an encrypted or electronic summons bearing a digital signature, and section 64's parallel allowance for electronic service, neither of which existed in the unamended CrPC's summons provisions, reflecting the same digitisation push visible throughout the Sanhita.

### Test your instinct

:::: instinct The registered-post summons sent to a vacated address
A company that moved premises two years ago is sent a summons by registered post to its old address, which happened to still be listed in an outdated government database. No one at the company ever sees it, and the company is later accused of wilfully evading appearance.
::: ruling What actually happens
Section 65(1)'s deemed-service fiction operates only where the letter is properly "addressed to the Director, Manager, Secretary or other officer of the company... in India" — an address the company has genuinely vacated, with no continuing connection to any company officer, is not a valid address for this purpose merely because it appears in an official database. The company's strongest argument is not "we never opened the letter" (which the deeming fiction forecloses) but that the letter was never properly addressed to begin with, since no company officer could be found there at all.
:::
::::

:::: instinct A digitally signed summons is challenged as not "really" a summons
A summons is issued as an encrypted electronic document bearing a digital signature rather than physical ink and a wax-and-paper seal. The recipient's counsel argues this is not a valid summons at all.
::: ruling What actually happens
Section 63(ii) expressly recognises an encrypted or other electronic-communication form bearing the image of the Court's seal or a digital signature as an equally valid form of summons alongside the traditional written, sealed, physically signed version in section 63(i). The objection fails on the statute's own terms; a digitally issued and signed summons is not a lesser or provisional form of process.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 63–65 are, in the drafter's assessment, sufficiently mechanical and textually self-contained that their operation is best stated directly from the text rather than anchored to a promoted Supreme Court authority; forcing a citation here risks the kind of misattribution the project's anti-fabrication discipline is meant to prevent.

#### Sword and shield

As a **shield**, a defendant company or firm can resist an "evasion" characterisation by showing the address used for registered-post service was not genuinely one where a qualifying officer or partner could be found — attacking the address, not the fact of non-receipt. As a **sword**, the prosecution can rely on section 65's deeming fiction to establish valid service on ordinary-course delivery, without needing to prove the letter was actually opened or read by anyone.

#### The limitation clock

No independent limitation period attaches to ss. 63–65; a service-validity objection should be raised at the earliest point non-appearance is sought to be treated as wilful, before the court proceeds to any consequence (such as a warrant under section 90) premised on deemed service having occurred.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Summons issued in physical or electronic form | Section 63 | Must be signed/sealed, or digitally signed and seal-imaged, to be valid |
| Natural person to be served | Section 64 | Personal delivery/tender, signed receipt if required, or electronic service per State rules |
| Company or corporation to be served | Section 65(1) | Named officer, or registered post, deemed served on ordinary-course arrival |
| Firm or association to be served | Section 65(2) | Any partner, or registered post to that partner, same deeming rule |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not accept a bare assertion of non-appearance as evasion without first checking whether the summons was served on a genuinely correct addressee and, for a corporate entity, a genuinely correct officer or address.
2. Do not concede that registered-post service failed merely because the addressee says it was never opened — the deeming fiction in section 65 forecloses that specific argument; attack the address instead.
3. Do not object to a summons purely for being in electronic or digitally signed form — section 63(ii) puts it on equal footing with the traditional written form.
4. Do not overlook whether the required register (address, email, phone number) under section 64(1)'s proviso was actually maintained — its absence can support a broader argument about the unreliability of the service process followed.

**Timing.** Raise a service-defect objection at the first opportunity non-appearance is treated as a basis for further coercive process, not after a warrant has already issued on the strength of an unchallenged assumption of valid service.

**Model checklist for reviewing service of a summons:**

1. Confirm the summons itself meets section 63's form requirements — signature/seal, or digital signature and seal image.
2. For a natural person, confirm personal delivery/tender occurred or that the State-prescribed electronic-service method was properly used.
3. For a company, corporation, firm, or association, confirm the named officer or partner category was actually used, and that any registered-post address was current and correct.
4. Where deemed service is asserted, check the ordinary-course delivery timeline against the actual date used to trigger any further process.

---

## Sections 66–71 — Substituted service, service on Government servants, and proof of service

### The dispute this solves

::: oneminute Personal service isn't always possible. The Sanhita builds a ladder of fallback channels — and a way to prove any of them happened without dragging the serving officer back to court.
Sections 64–65 assume the ordinary case: the person, the company officer, or the partner can be found and handed the summons. Sections 66–71 deal with everything that happens when that assumption fails — the person cannot be found at all, or is a Government servant posted elsewhere, or lives outside the issuing Court's jurisdiction — and, separately, with how service is *proved* in court when the officer who actually served it is not there to say so in person. A final, freestanding section adds a belt-and-suspenders channel reserved specifically for witnesses.
:::

::: story The summons left with the domestic help
A litigant's lawyer sends a process server to a residential address. The person summoned is out; the server hands a duplicate to the household's live-in domestic worker, who signs a receipt. Weeks later, when the summoned person fails to appear, the other side argues service was validly effected on "an adult member of his family residing with him" under section 66. Section 66's own Explanation resolves this immediately: a servant is not a member of the family for this purpose, no matter how long they have lived in the house or how routinely they receive post on the family's behalf. The service was never valid, and non-appearance built on it cannot be treated as evasion.
:::

> **66. Service when persons summoned cannot be found.**—Where the person summoned cannot, by the exercise of due diligence, be found, the summons [[?may]] be served by leaving one of the duplicates for him with some adult member of his family residing with him, and the person with whom the summons is so left [[!shall]], if so required by the serving officer, sign a receipt therefor on the back of the other duplicate.
>
> *Explanation.—A servant is not a member of the family within the meaning of this section.*
>
> **67. Procedure when service cannot be effected as before provided.**—If service cannot by the exercise of due diligence be effected as provided in section 64, section 65 or section 66, the serving officer [[!shall]] affix one of the duplicates of the summons to some conspicuous part of the house or homestead in which the person summoned ordinarily resides; and thereupon the Court, after making such inquiries as it thinks fit, [[?may]] either declare that the summons has been duly served or order fresh service in such manner as it considers proper.
>
> **68. Service on Government servant.**—(1) Where the person summoned is in the active service of the Government, the Court issuing the summons [[!shall]] ordinarily send it in duplicate to the head of the office in which such person is employed; and such head [[!shall]] thereupon cause the summons to be served in the manner provided by section 64, and [[!shall]] return it to the Court under his signature with the endorsement required by that section.
>
> (2) Such signature [[!shall]] be evidence of due service.
>
> **69. Service of summons outside local limits.**—When a Court desires that a summons issued by it shall be served at any place outside its local jurisdiction, it [[!shall]] ordinarily send such summons in duplicate to a Magistrate within whose local jurisdiction the person summoned resides, or is, to be there served.
>
> **70. Proof of service in such cases and when serving officer not present.**—(1) When a summons issued by a Court is served outside its local jurisdiction, and in any case where the officer who has served a summons is not present at the hearing of the case, an affidavit, purporting to be made before a Magistrate, that such summons has been served, and a duplicate of the summons purporting to be endorsed (in the manner provided by section 64 or section 66) by the person to whom it was delivered or tendered or with whom it was left, [[!shall]] be admissible in evidence, and the statements made therein [[!shall]] be deemed to be correct unless and until the contrary is proved.
>
> (2) The affidavit mentioned in this section [[?may]] be attached to the duplicate of the summons and returned to the Court.
>
> (3) All summons served through electronic communication under sections 64 to 71 (both inclusive) [[!shall]] be considered as duly served and a copy of such summons [[!shall]] be attested and kept as a proof of service of summons.
>
> **71. Service of summons on witness.**—(1) Notwithstanding anything contained in the preceding sections of this Chapter, a Court issuing a summons to a witness [[?may]], in addition to and simultaneously with the issue of such summons, direct a copy of the summons to be served by electronic communication or by registered post addressed to the witness at the place where he ordinarily resides or carries on business or personally works for gain.
>
> (2) When an acknowledgement purporting to be signed by the witness or an endorsement purporting to be made by a postal employee that the witness refused to take delivery of the summons has been received or on the proof of delivery of summons under sub-section (3) of section 70 by electronic communication to the satisfaction of the Court, the Court issuing summons [[?may]] deem that the summons has been duly served.
>
> ::: proviso A servant is never a "family member" — no matter how embedded in the household
> Section 66's Explanation is a bright-line rule, not a factual inquiry into how trusted or long-serving the household help is. Whether the person is a live-in cook, driver, or domestic worker of twenty years' standing makes no difference — service on that person is not service under section 66 at all. This matters because it is exactly the kind of address-of-convenience shortcut a process server under time pressure is tempted to take, and exactly the kind of shortcut a defending party should be alert to when non-appearance is later characterised as wilful.
> :::

<MicroTree
  input="Personal service under section 64 has failed. Which fallback channel applies?"
  :gates="[
    { q: 'Can an adult member of the summoned person’s family, residing with him, be found at the residence (not a servant)?', note: 'Section 66 applies — leave a duplicate with that family member, with a signed receipt if the officer requires one.', no: 'Move to the affixing question.' },
    { q: 'Has due diligence under sections 64, 65 and 66 all failed to effect service?', note: 'Section 67 applies — affix a duplicate to a conspicuous part of the house or homestead; the Court then either declares the summons duly served or orders fresh service.', no: 'Move to the special-routing question.' },
    { q: 'Is the person summoned in active Government service, or does he reside outside the issuing Court’s local jurisdiction?', note: 'Section 68 routes service through the head of office; section 69 routes it through a Magistrate where the person resides — either way, the underlying delivery still runs through sections 64 or 66’s mechanics.', no: 'No special routing channel applies; the ordinary channels of sections 64–66 remain operative.' }
  ]"
  result="The correct substituted-service or special-routing channel is identified and, separately, section 70's affidavit route is available to prove any of it happened without the serving officer appearing in person."
  resultKind="mandatory"
  caveat="Section 71's witness-specific electronic/registered-post channel operates independently of, and in addition to, whichever of sections 64–69 the Court also uses for that witness."
/>

### In plain English

Think of sections 66–71 as a ladder, not a single rule. If the person can't be handed the summons directly, it can be left with an adult family member who actually lives with them — but not with a servant, however close to the family. If even that fails, the officer physically affixes it to the house, and the court decides whether that counts as good service or whether to try again. If the person is a Government employee, the summons is routed through their department head; if they live outside the court's own area, it is routed through a local Magistrate instead — either way, the underlying service still happens under section 64 or 66's mechanics, just channelled through an intermediary. Separately, section 70 solves a courtroom problem: if the officer who actually served the summons cannot come back to testify, a sworn affidavit stands in for their live evidence, and the facts in it are taken as correct unless someone proves otherwise. Section 71 adds one more layer just for witnesses — a court can fire off a simultaneous electronic or registered-post copy as a backup, regardless of which other method was tried.

### What changed from the CrPC

BNSS sections 66, 67, 68, 69, 70 and 71 correspond to CrPC sections 64, 65, 66, 67, 68 and 69 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes**. The structural ladder — family-member service, affixing, Government-servant routing, outside-jurisdiction routing, affidavit proof — tracks the unamended CrPC closely. The digitisation-era additions are section 70(3), which has no direct CrPC ancestor and expressly deems electronically served summonses (across the whole ss. 64–71 run) to be duly served with an attested copy kept as proof, and section 71(1)'s express inclusion of electronic communication alongside registered post as a witness-service channel.

### Test your instinct

:::: instinct The summons left with the family's longtime domestic help
A process server, unable to find the summoned person, leaves a duplicate with a domestic worker who has lived in and worked for the household for over a decade and signs the receipt without objection. The other side argues this is exactly the kind of reliable, embedded household member section 66 contemplates.
::: ruling What actually happens
Section 66's Explanation is categorical: "a servant is not a member of the family within the meaning of this section." Length of service, trust, or how routinely the worker handles the family's affairs is irrelevant — the Explanation draws the line at the relationship, not the facts of reliability. Service on the domestic worker is not service under section 66, and any non-appearance built on it cannot be treated as evasion without the underlying service defect being addressed first.
:::
::::

:::: instinct The serving officer who never shows up to testify
A summons is served outside the issuing Court's jurisdiction. When the case comes up for hearing, the officer who served it is unavailable, and the other side argues service is unproved without that officer's live testimony.
::: ruling What actually happens
Section 70(1) exists precisely for this situation: an affidavit purporting to be made before a Magistrate, along with a duplicate summons endorsed in the manner provided by section 64 or 66, is admissible in evidence, and its statements are deemed correct unless and until the contrary is proved. The objection that live testimony is required fails on the statute's own terms — though the deeming is rebuttable, not conclusive, and a party with genuine grounds can still displace it by proof to the contrary.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Like sections 63–65, sections 66–71 are mechanical, textually self-contained service-and-proof provisions; the drafter is not confident of a Supreme Court authority squarely on this specific ladder of substituted service and proof-by-affidavit under the Sanhita's provisions, and forcing one in risks exactly the misattribution the project's anti-fabrication discipline exists to prevent.

#### Sword and shield

As a **shield**, a party can resist a substituted-service finding by showing the recipient was not genuinely an adult family member residing with the summoned person (section 66's servant carve-out being the clearest example), or that the address used for affixing under section 67 was not one where the person "ordinarily resides." As a **sword**, a party relying on service can invoke section 70(1)'s affidavit-based proof to establish service without producing the serving officer, shifting the burden onto the objecting party to disprove the affidavit's contents.

#### The limitation clock

No independent limitation period attaches to ss. 66–71; a substituted-service or proof-of-service objection should be raised at the first point the Court is asked to treat non-appearance as anything beyond a service question — before any warrant or coercive process issues on the strength of unchallenged proof of service.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person cannot be found; adult family member available | Section 66 | Duplicate left with that member, signed receipt if required (servant excluded) |
| All of sections 64–66 have failed | Section 67 | Affixing to the house/homestead; Court declares duly served or orders fresh service |
| Person summoned is in active Government service | Section 68 | Routed through head of office, who serves per section 64 and endorses |
| Person resides outside the issuing Court's jurisdiction | Section 69 | Routed through a Magistrate of that jurisdiction |
| Serving officer unavailable, or service was outside jurisdiction | Section 70 | Affidavit + endorsed duplicate admissible, deemed correct unless disproved |
| Witness being summoned | Section 71 | Simultaneous electronic/registered-post copy, independent backup channel |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not concede substituted service was valid merely because *someone* at the residence signed for it — confirm the recipient was genuinely an adult family member residing there, not a servant, employee, or unrelated occupant.
2. Do not accept an affixing under section 67 as automatically valid — the house or homestead must be one where the person summoned "ordinarily resides"; an address of convenience is not enough.
3. Do not treat a section 70(1) affidavit as unchallengeable — it shifts the burden, but the deeming is rebuttable "unless and until the contrary is proved."
4. Do not overlook that section 71's witness-service channel operates independently of whatever primary method was used for that witness — a defect in one does not automatically defeat the other.

**Timing.** Raise a substituted-service or proof-of-service objection before the Court is asked to draw any adverse inference from non-appearance, not after coercive process has already issued on the strength of unchallenged proof.

**Model checklist for reviewing substituted service and proof of service:**

1. Identify which of sections 66–69 was actually used, and confirm the recipient or routing channel matches that section's specific requirements.
2. For section 66 service, confirm the recipient was an adult family member residing with the summoned person, not a servant.
3. For section 67 affixing, confirm the address was one where the person genuinely, ordinarily resides.
4. Where section 70 proof is relied on, check the affidavit was made before a Magistrate and the duplicate carries the required endorsement.
5. For a witness, confirm whether section 71's simultaneous channel was also used, and treat it as a separate, additional proof track.

---

## Sections 72–74 — Form and duration of a warrant, the built-in bail endorsement, and who a warrant may be directed to

### The dispute this solves

::: oneminute A warrant is the coercive step up from a summons — but the Sanhita lets a Court build a bail off-ramp into the warrant itself, and tightly limits who is trusted to execute it.
Where Chapter VI's opening sections deal with the least coercive tool — a summons — sections 72 to 74 deal with the next rung up: a warrant of arrest. Section 72 fixes the warrant's own form and how long it stays alive. Section 73 lets the issuing Court, at its discretion, endorse the warrant itself with a bailable-security direction, so that a person can be released on the spot on furnishing sufficient sureties rather than being produced in custody. Section 74 answers who can actually be trusted to execute a warrant — ordinarily the police, and only exceptionally anyone else.
:::

::: story The warrant that came with its own bail built in
A Court issues a warrant of arrest for a bailable offence and, exercising its discretion under section 73, endorses it: two sureties, a specified amount, a specified date to attend. The accused's family, informed of the endorsement, arrive at the police station within the hour with two sureties ready to execute a bail bond. The station house officer, unfamiliar with the endorsement or simply preferring to follow the ordinary custody-and-production route, tells the family to wait until the accused is produced before a Magistrate instead. Section 73 does not leave this to the officer's convenience: once the Court has endorsed the warrant, the officer to whom it is directed "shall take such security and shall release such person from custody" — there is no discretion left to exercise once the endorsement exists, and continued custody in the face of a tendered, sufficient bond is itself a legality defect in how the warrant was executed.
:::

> **72. Form of warrant of arrest and duration.**—(1) Every warrant of arrest issued by a Court under this Sanhita [[!shall]] be in writing, signed by the presiding officer of such Court and [[!shall]] bear the seal of the Court.
>
> (2) Every such warrant [[!shall]] remain in force until it is cancelled by the Court which issued it, or until it is executed.
>
> **73. Power to direct security to be taken.**—(1) Any Court issuing a warrant for the arrest of any person [[?may]] in its discretion direct by endorsement on the warrant that, if such person executes a bail bond with sufficient sureties for his attendance before the Court at a specified time and thereafter until otherwise directed by the Court, the officer to whom the warrant is directed [[!shall]] take such security and [[!shall]] release such person from custody.
>
> (2) The endorsement [[!shall]] state—
>
> (a) the number of sureties;
>
> (b) the amount in which they and the person for whose arrest the warrant is issued, are to be respectively bound;
>
> (c) the time at which he is to attend before the Court.
>
> (3) Whenever security is taken under this section, the officer to whom the warrant is directed [[!shall]] forward the bond to the Court.
>
> **74. Warrants to whom directed.**—(1) A warrant of arrest [[!shall]] ordinarily be directed to one or more police officers; but the Court issuing such a warrant [[?may]], if its immediate execution is necessary and no police officer is immediately available, direct it to any other person or persons, and such person or persons [[!shall]] execute the same.
>
> (2) When a warrant is directed to more officers or persons than one, it [[?may]] be executed by all, or by any one or more of them.
>
> ::: proviso The endorsement is discretionary to make, but mandatory to obey once made
> Section 73(1)'s "may" belongs to the Court deciding whether to endorse a warrant with a bail direction in the first place — that choice is squarely discretionary. But once the endorsement exists, the language addressed to the executing officer is unqualified: "shall take such security and shall release such person from custody." An officer who has a section 73 endorsement in hand and a tender of sufficient sureties has no remaining discretion to instead produce the person in custody as if the endorsement did not exist.
> :::

<MicroTree
  input="A warrant of arrest has been issued. What form must it take, and what governs its execution?"
  :gates="[
    { q: 'Is the warrant in writing, signed by the presiding officer, and sealed?', note: 'Section 72(1)’s form requirement is met, and the warrant remains in force under section 72(2) until cancelled or executed.', no: 'The warrant is defective on its face under section 72(1), regardless of who executes it or how.' },
    { q: 'Has the Court endorsed the warrant under section 73 directing release on a bail bond with sureties?', note: 'Section 73 applies — the executing officer must take the security and release the person from custody; ignoring a section 73 endorsement is itself a legality defect in execution.', no: 'The person remains in custody for production under the ordinary route (sections 78–83).' },
    { q: 'Is the warrant directed to a police officer, or was immediate execution necessary with none available?', note: 'Section 74 is satisfied — police officers are the ordinary addressees; a private person may be directed only where immediate execution is necessary and no police officer is available.', no: 'A warrant directed to someone outside section 74’s categories is improperly addressed.' }
  ]"
  result="The warrant's form, any bailable-security endorsement, and its proper addressee are all confirmed before its execution is treated as valid."
  resultKind="mandatory"
  caveat="Section 73's endorsement is discretionary for the Court to make in the first place, but once made, compliance with its terms by the executing officer is mandatory, not a matter of convenience."
/>

### In plain English

A warrant has to look a certain way — written, signed by the judge, sealed — and it stays valid until either the court cancels it or it is executed; it does not expire on its own. Section 73 is the built-in bail feature: when a Court issues the warrant, it can also write onto it, in effect, "if this person can produce two sureties for this amount by this date, don't hold them — take the bond and let them go." That instruction, once written, binds the officer executing the warrant just as much as the instruction to make the arrest does. Section 74 answers who is trusted to execute a warrant in the first place — ordinarily the police, and only in a genuine emergency, with no officer immediately to hand, anyone else.

### What changed from the CrPC

BNSS sections 72, 73 and 74 correspond to CrPC sections 70, 71 and 72 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes**, with no substantive departure identified in this cluster — the warrant's form, the section 73 bail-endorsement mechanism, and the section 74 police-first addressee rule all track the unamended CrPC closely.

### Test your instinct

:::: instinct The bail endorsement the station house officer chose to ignore
A warrant carries a section 73 endorsement specifying two sureties and an amount. The accused's family arrives at the police station with two sureties ready to execute the bond, but the officer insists on producing the accused before a Magistrate first, calling the endorsement "a formality for the court to sort out later."
::: ruling What actually happens
Section 73(1)'s command to the executing officer — "shall take such security and shall release such person from custody" — is not conditional on the officer's preference for the ordinary custody route. Once the Court has made the endorsement and sufficient sureties are tendered, the officer's only lawful course is to take the bond and release. Continued custody in these circumstances is a defect in the execution of the warrant, not a matter later curable simply because a Magistrate eventually reviews the case.
:::
::::

:::: instinct The warrant handed to a private citizen when police were available
A complainant's associate is handed a warrant of arrest to execute because it is more convenient than waiting for a police officer, even though officers are readily available at the local station.
::: ruling What actually happens
Section 74(1) permits directing a warrant to someone other than a police officer only where immediate execution is necessary and no police officer is immediately available — both conditions must genuinely hold. A warrant handed to a private person purely as a matter of convenience, with police readily available, is not validly directed under section 74, and execution by that person is not shielded by the section merely because a warrant existed.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 72–74 govern the warrant's form and execution mechanics in terms that are, in the drafter's assessment, sufficiently self-contained on the statutory text that anchoring them to a promoted Supreme Court authority risks the kind of misattribution the project's anti-fabrication discipline is meant to prevent.

#### Sword and shield

As a **shield**, a person arrested under a warrant carrying a section 73 endorsement can challenge continued custody as an execution defect where sufficient sureties were tendered and refused. As a **sword**, the prosecution can rely on section 74's narrow private-person exception only where it can show both immediate necessity and the genuine unavailability of a police officer at the relevant moment — absent both, execution by a private person is vulnerable to challenge.

#### The limitation clock

No independent limitation period attaches to ss. 72–74; a defect in the warrant's form, in the handling of a section 73 endorsement, or in who executed it under section 74 should be raised at the first production before a Court, not after the person has been produced and the point has gone unchallenged.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Warrant issued | Section 72 | Must be written, signed, sealed; stays in force until cancelled or executed |
| Court wishes to allow release on bond at the point of arrest | Section 73 | Endorsement specifying sureties, amount, and attendance time; executing officer must comply |
| Warrant needs an addressee | Section 74 | Ordinarily a police officer; a private person only if immediate execution is necessary and none is available |
| Person produced after warrant execution | Sections 78, 82–83 (forward reference) | Production-without-delay and inter-district procedures take over from here |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not assume a warrant is non-bailable by default — check the warrant itself for a section 73 endorsement before advising a client on custody consequences.
2. Do not let an executing officer's refusal to honour a section 73 endorsement go unchallenged — it is a legality defect in execution, not a discretionary call available to the officer.
3. Do not accept execution by a private person under section 74 without confirming both limbs — genuine immediate necessity and genuine unavailability of a police officer — were actually satisfied at the time.
4. Do not treat an unexecuted, uncancelled warrant as having lapsed with time — section 72(2) keeps it alive indefinitely until one of those two events occurs.

**Timing.** Raise a form, endorsement-compliance, or addressee objection at the first production before a Court after arrest, before the point is treated as waived by an unchallenged production.

**Model checklist for reviewing a warrant's form and execution:**

1. Confirm the warrant is written, signed, and sealed under section 72(1).
2. Check for a section 73 endorsement and, if present, confirm whether the officer complied with its bail-security terms.
3. Confirm the warrant was directed to a police officer or, if not, that section 74's immediate-necessity and unavailability conditions were genuinely met.
4. Track the warrant's status against section 72(2) — cancelled, executed, or still outstanding.

---
