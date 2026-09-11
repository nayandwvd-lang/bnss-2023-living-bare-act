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

## Sections 75–79 — Warrant directed to a private person, substitute execution, notification, the twenty-four-hour production ceiling, and territorial reach

### The dispute this solves

::: oneminute For a narrow category of wanted persons, the Sanhita lets a senior Magistrate deputise a private person to execute a warrant — but boxes that power in with a strict acknowledge-execute-handover sequence, and then fixes the mechanics every warrant execution must follow regardless of who carries it out.
Section 74's private-person exception is an emergency measure — no police officer immediately available. Section 75 is different in kind: a standing power, unconnected to any emergency, letting the Chief Judicial Magistrate or a first-class Magistrate name a specific person to execute a warrant against an escaped convict, a proclaimed offender, or a non-bailable-offence evader, where that wanted person is found on land the named person controls. Sections 76 to 79 then supply the mechanics common to every warrant execution — substitute execution by an endorsed officer, telling the arrested person what the warrant is about, producing him before a Court without unnecessary delay and within a hard 24-hour ceiling, and confirming the warrant runs anywhere in India.
:::

::: story The landowner who skipped the handover
A first-class Magistrate, aware that a proclaimed offender has been sighted crossing a particular farmer's land, directs a warrant to that farmer under section 75. Weeks later the offender enters the land; the farmer, acting on the warrant, arrests him exactly as section 75(2) permits. But instead of making the arrested man over to the nearest police officer as section 75(3) requires, the farmer — proud of the capture and distrustful of the local station — personally drives him to the Magistrate's residence and hands him over directly. The defence later argues the arrest and production were irregular. They are right about one link in the chain: section 75(3)'s handover to the nearest police officer is not optional scaffolding around an otherwise valid private arrest — it is the specific mechanism by which the Sanhita keeps a private executant's role confined to capture, with production before the right court still routed through the police.
:::

> **75. Warrant may be directed to any person.**—(1) The Chief Judicial Magistrate or a Magistrate of the first class [[?may]] direct a warrant to any person within his local jurisdiction for the arrest of any escaped convict, proclaimed offender or of any person who is accused of a non-bailable offence and is evading arrest.
>
> (2) Such person [[!shall]] acknowledge in writing the receipt of the warrant, and [[!shall]] execute it if the person for whose arrest it was issued, is in, or enters on, any land or other property under his charge.
>
> (3) When the person against whom such warrant is issued is arrested, he [[!shall]] be made over with the warrant to the nearest police officer, who [[!shall]] cause him to be taken before a Magistrate having jurisdiction in the case, unless security is taken under section 73.
>
> **76. Warrant directed to police officer.**—A warrant directed to any police officer [[?may]] also be executed by any other police officer whose name is endorsed upon the warrant by the officer to whom it is directed or endorsed.
>
> **77. Notification of substance of warrant.**—The police officer or other person executing a warrant of arrest [[!shall]] notify the substance thereof to the person to be arrested, and, if so required, [[!shall]] show him the warrant.
>
> **78. Person arrested to be brought before Court without delay.**—The police officer or other person executing a warrant of arrest [[!shall]] (subject to the provisions of section 73 as to security) without unnecessary delay bring the person arrested before the Court before which he is required by law to produce such person:
>
> Provided that such delay [[!shall]] not, in any case, exceed twenty-four hours exclusive of the time necessary for the journey from the place of arrest to the Magistrate's Court.
>
> **79. Where warrant may be executed.**—A warrant of arrest [[?may]] be executed at any place in India.
>
> ::: proviso A private executant's authority ends at the handover, not at production
> Section 75(2) authorises a named private person to arrest; section 75(3) does not extend that authority any further. The arrested person must go to the nearest police officer, who then takes over the duty of producing him before the jurisdictional Magistrate — unless a section 73 security endorsement already resolves the matter. A private person who personally produces the arrestee before a Magistrate, however well-intentioned, has stepped outside the sequence section 75 actually authorises.
> :::

<MicroTree
  input="A warrant is being executed under section 75's private-person power. What must the sequence look like?"
  :gates="[
    { q: 'Was the warrant directed by a Chief Judicial Magistrate or first-class Magistrate to a specific named person, for one of section 75(1)’s three categories (escaped convict, proclaimed offender, non-bailable evader)?', note: 'Section 75 applies; move to the execution-conditions question.', no: 'Section 75 does not authorise this direction — check instead whether section 74’s immediate-necessity exception applies.' },
    { q: 'Did that person acknowledge the warrant in writing and execute it only once the wanted person was in, or entered, land under his charge?', note: 'Section 75(2)’s conditions are met.', no: 'Execution outside these conditions is not shielded by section 75.' },
    { q: 'Was the arrested person made over to the nearest police officer for production before the jurisdictional Magistrate, unless section 73 security was taken?', note: 'Section 75(3)’s mandatory handover step is satisfied, and the ordinary execution mechanics of sections 76–79 — substitute-officer endorsement, notifying the substance, the 24-hour production ceiling, India-wide territorial reach — take over from here.', no: 'The private executant’s own authority does not extend to personally producing the arrestee before a Magistrate — the mandatory handover step under section 75(3) was skipped.' }
  ]"
  result="Section 75's private-person power is confirmed to have been properly invoked and its mandatory handover sequence followed, before the ordinary execution mechanics of sections 76–79 — including the 24-hour production ceiling — take over."
  resultKind="mandatory"
  caveat="Section 78's 24-hour ceiling on production runs from the point of arrest and excludes only journey time — it is not extended merely because the arrest was made by a private person under section 75 rather than by police."
/>

### In plain English

Section 75 is a standing, non-emergency power — quite different from section 74's "no police officer available" exception. A senior Magistrate can name a specific private person to arrest a specific kind of wanted person — an escapee, a proclaimed offender, or someone dodging a non-bailable warrant — if that person shows up on land the named executant controls. That named person has to accept the warrant in writing and can only act once the wanted person is genuinely there; and once the arrest happens, the wanted person goes to the nearest police officer, not straight to a Magistrate, unless a section 73 bail endorsement already covers it. Sections 76 to 79 then supply the rules that apply no matter who executes a warrant: another named police officer can step in for the one originally named, the person being arrested has to be told what the warrant says and shown it if asked, he has to be produced before the right court without unnecessary delay and, in any event, within 24 hours excluding travel time, and the warrant itself is valid anywhere in the country.

### What changed from the CrPC

BNSS sections 75, 76, 77, 78 and 79 correspond to CrPC sections 73, 74, 75, 76 and 77 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes**, with no substantive departure identified in this cluster. Section 78's 24-hour production ceiling is the warrant-execution counterpart of the arrest-without-warrant 24-hour clock now found at section 58 in Chapter V — both trace the same underlying constitutional discipline, applied to a different mode of arrest.

### Test your instinct

:::: instinct The private executant who bypassed the police handover
A farmer validly arrests a proclaimed offender under a section 75 direction, then personally drives him to the Magistrate's residence instead of handing him to the nearest police officer.
::: ruling What actually happens
Section 75(3) is not an optional courtesy — it fixes the only route by which a person arrested under a section 75 direction may reach a Court: handover to the nearest police officer, who then causes him to be taken before the jurisdictional Magistrate, unless section 73 security has already been taken. The farmer's arrest itself was valid; his decision to personally produce the arrestee stepped outside what section 75 actually authorises, and that step is open to challenge even though the capture was lawful.
:::
::::

:::: instinct The warrant executed by a different officer than the one named
A warrant is directed to a named police officer who cannot personally attend to it. He endorses a colleague's name on the warrant, and that colleague makes the arrest. The defence argues only the originally named officer could lawfully execute it.
::: ruling What actually happens
Section 76 anticipates exactly this: a warrant directed to a police officer may also be executed by any other police officer whose name is endorsed on the warrant by the officer to whom it was directed. No fresh court order is needed for the substitution — the endorsement itself is the authority, and the objection fails on the statute's own terms.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No new case is promoted for this cluster. **Khatri (II) v. State of Bihar**, (1981) 1 SCC 627 — already promoted as the winning ratio for the arrest-without-warrant 24-hour clock in sections 55–59 — applies with equal force to section 78's warrant-context production ceiling and is noted here as secondary authority: its core proposition, that production before a Magistrate is a substantive safeguard rather than a formality, does not depend on whether the arrest was made with or without a warrant.

#### Sword and shield

As a **shield**, an arrestee can challenge a private executant's bypass of the mandatory section 75(3) police handover, or an execution that exceeded section 78's 24-hour ceiling once journey time is properly excluded. As a **sword**, the prosecution can rely on section 76's endorsement mechanism to validate execution by a substituted officer, and on section 79's India-wide territorial reach to defeat a venue-based objection to where the warrant was executed.

#### The limitation clock

No independent limitation period attaches to ss. 75–79; a defect in the section 75 sequence, the substitute-officer endorsement, or the section 78 production ceiling should be raised at the first appearance before the Court, not after an unchallenged production has already occurred.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Escaped convict, proclaimed offender, or non-bailable evader found on land under a named person's charge | Section 75 | CJM/first-class Magistrate may direct that person to execute; strict acknowledge-execute-handover sequence |
| Named police officer cannot personally execute the warrant | Section 76 | Execution by another officer whose name is endorsed on the warrant |
| Any warrant execution | Section 77 | Substance of the warrant notified, and warrant shown if required |
| Person arrested under a warrant | Section 78 | Production without unnecessary delay, capped at 24 hours excluding journey time (subject to section 73 security) |
| Territorial reach of a warrant | Section 79 | Executable anywhere in India |

#### The authorities

None added beyond the secondary reference to Khatri (II) above.

#### Strategy and drafting

**Drafting traps.**

1. Do not assume section 75 requires the same "no police officer available" emergency condition as section 74 — it is a separate, standing power tied to specific categories of wanted person and a specific named executant with control over land.
2. Do not overlook the mandatory police handover step in section 75(3) — a private executant's authority ends at handing the arrestee to the nearest police officer, not at personally producing him before a Magistrate.
3. Do not accept execution by an officer other than the one named on the warrant without checking for a valid section 76 endorsement.
4. Do not calculate the section 78 24-hour ceiling to include journey time from the place of arrest — the proviso expressly excludes it.

**Timing.** Raise any defect in the section 75 sequence or the section 78 production ceiling at the first appearance before the Court, before the point can be treated as cured by a later, unchallenged production.

**Model checklist for reviewing a warrant's execution:**

1. If a private person executed the warrant, confirm a valid section 75 direction (qualifying category of wanted person, named executant, land under his charge) and written acknowledgment.
2. Confirm the mandatory handover to the nearest police officer occurred, unless section 73 security was taken.
3. If execution was by a different police officer than the one named, confirm a valid section 76 endorsement.
4. Confirm the substance of the warrant was notified, and shown if requested, under section 77.
5. Calculate the section 78 production ceiling excluding journey time and confirm it was not exceeded.

---

## Sections 80–83 — Executing a warrant outside the issuing Court's jurisdiction, and what happens to the person arrested there

### The dispute this solves

::: oneminute A warrant issued in one district often has to be executed in another — the Sanhita builds an endorsement chain to authorise that, and then a separate procedure for what happens to the person once caught on someone else's turf.
Sections 72–79 assume execution happens within, or at least under the authority of, the issuing Court's own reach. Sections 80–83 deal with the more complicated case: the warrant has to be executed somewhere else entirely. Section 80 lets the Court forward the warrant directly to the executing district's own authorities; section 81 lets a police officer instead carry the warrant there and get it endorsed locally. Once the arrest actually happens outside the issuing district, section 82 usually redirects the person to a local Magistrate or senior police officer first — not straight back to the issuing Court — and section 83 tells that local officer exactly what to do with him, including two separate bail off-ramps.
:::

::: story The arrest three districts away
A warrant is issued in one district for a person who has since relocated three districts away. Rather than sending a police officer on a long journey to serve it, the issuing Court forwards the warrant to the Executive Magistrate of the district where the person now lives, along with the substance of the information and supporting documents. Local police execute the warrant there. Because the arrest happened well outside the issuing district — more than thirty kilometres from the issuing Court and no closer than the local Magistrate — the arrested person is taken before that local Magistrate rather than transported straight back, and it is the local Magistrate, not the issuing Court, who first considers whether bail is appropriate, using exactly the documents the issuing Court sent along under section 80(2). The arrested person's lawyer, unfamiliar with this inter-district structure, initially insists on an immediate production before the issuing Court — a demand sections 82 and 83 do not support unless one of the specific proximity or security exceptions applies.
:::

> **80. Warrant forwarded for execution outside jurisdiction.**—(1) When a warrant is to be executed outside the local jurisdiction of the Court issuing it, such Court [[?may]], instead of directing the warrant to a police officer within its jurisdiction, forward it by post or otherwise to any Executive Magistrate or District Superintendent of Police or Commissioner of Police within the local limits of whose jurisdiction it is to be executed; and the Executive Magistrate or District Superintendent or Commissioner [[!shall]] endorse his name thereon, and if practicable, cause it to be executed in the manner hereinbefore provided.
>
> (2) The Court issuing a warrant under sub-section (1) [[!shall]] forward, along with the warrant, the substance of the information against the person to be arrested together with such documents, if any, as may be sufficient to enable the Court acting under section 83 to decide whether bail should or should not be granted to the person.
>
> **81. Warrant directed to police officer for execution outside jurisdiction.**—(1) When a warrant directed to a police officer is to be executed beyond the local jurisdiction of the Court issuing the same, he [[!shall]] ordinarily take it for endorsement either to an Executive Magistrate or to a police officer not below the rank of an officer in charge of a police station, within the local limits of whose jurisdiction the warrant is to be executed.
>
> (2) Such Magistrate or police officer [[!shall]] endorse his name thereon and such endorsement [[!shall]] be sufficient authority to the police officer to whom the warrant is directed to execute the same, and the local police [[!shall]], if so required, assist such officer in executing such warrant.
>
> (3) Whenever there is reason to believe that the delay occasioned by obtaining the endorsement of the Magistrate or police officer within whose local jurisdiction the warrant is to be executed will prevent such execution, the police officer to whom it is directed [[?may]] execute the same without such endorsement in any place beyond the local jurisdiction of the Court which issued it.
>
> **82. Procedure on arrest of person against whom warrant issued.**—(1) When a warrant of arrest is executed outside the district in which it was issued, the person arrested [[!shall]], unless the Court which issued the warrant is within thirty kilometres of the place of arrest or is nearer than the Executive Magistrate or District Superintendent of Police or Commissioner of Police within the local limits of whose jurisdiction the arrest was made, or unless security is taken under section 73, be taken before such Magistrate or District Superintendent or Commissioner.
>
> (2) On the arrest of any person referred to in sub-section (1), the police officer [[!shall]] forthwith give the information regarding such arrest and the place where the arrested person is being held to the designated police officer in the district and to such officer of another district where the arrested person normally resides.
>
> **83. Procedure by Magistrate before whom such person arrested is brought.**—(1) The Executive Magistrate or District Superintendent of Police or Commissioner of Police [[!shall]], if the person arrested appears to be the person intended by the Court which issued the warrant, direct his removal in custody to such Court:
>
> Provided that, if the offence is bailable, and such person is ready and willing to give bail bond to the satisfaction of such Magistrate, District Superintendent or Commissioner, or a direction has been endorsed under section 73 on the warrant and such person is ready and willing to give the security required by such direction, the Magistrate, District Superintendent or Commissioner [[!shall]] take such bail bond or security, as the case may be, and forward the bond, to the Court which issued the warrant:
>
> Provided further that if the offence is a non-bailable one, it [[?may]] be lawful for the Chief Judicial Magistrate (subject to the provisions of section 480), or the Sessions Judge, of the district in which the arrest is made on consideration of the information and the documents referred to in sub-section (2) of section 80, to release such person on bail.
>
> (2) Nothing in this section [[?shall]] be deemed to prevent a police officer from taking security under section 73.
>
> ::: proviso Two routes into the executing district — with different consequences for who decides bail first
> Section 80 lets the *Court* forward the warrant directly to the executing district's authorities, with the substance of the information and supporting documents travelling alongside it for a section 83 bail decision. Section 81 instead lets the *police officer* carry the warrant into the executing district and get it endorsed there, with a further exception in section 81(3) allowing execution without any endorsement at all where obtaining one would cause a delay that defeats execution. Whichever route was used, section 82 is what actually determines whether the arrested person is diverted to a local Magistrate or officer first — and, crucially, the local Chief Judicial Magistrate or Sessions Judge who considers bail under section 83's second proviso for a non-bailable offence needs exactly the documents section 80(2) requires the issuing Court to have sent; a warrant forwarded under section 81 without equivalent information leaves that bail decision without its statutory foundation.
> :::

<MicroTree
  input="A warrant is to be executed outside the issuing Court's own jurisdiction. Which route applies, and what happens on arrest?"
  :gates="[
    { q: 'Did the issuing Court forward the warrant directly to the executing district’s Executive Magistrate, District Superintendent, or Commissioner, along with the substance of the information and supporting documents?', note: 'Section 80 applies — that authority endorses the warrant and causes execution, with the section 80(2) documents feeding into any later section 83 bail decision.', no: 'Move to the police-officer-carried-warrant question.' },
    { q: 'Did a police officer instead carry the warrant into the executing district for local endorsement (or execute without one under section 81(3)’s delay exception)?', note: 'Section 81 applies — local endorsement is sufficient authority, and local police must assist if required.', no: 'Neither section 80 nor section 81’s specific mechanics were used; the execution’s authority is in doubt.' },
    { q: 'Was the arrest made outside the issuing district, with the issuing Court more than thirty kilometres away (or farther than the local Magistrate/officer) and no section 73 security taken?', note: 'Section 82 diverts the arrested person to the local Magistrate, District Superintendent, or Commissioner first; section 83 then governs — removal to the issuing Court, or one of its two bail off-ramps (bailable-offence bond, or a non-bailable-offence bail decision by the local CJM/Sessions Judge on the section 80(2) documents).', no: 'The proximity or security exception applies; ordinary production procedures take over instead of the section 82 diversion.' }
  ]"
  result="The correct inter-district execution route is identified, and the arrested person's path — direct removal, or one of section 83's two bail off-ramps — is confirmed before either is treated as the only option available."
  resultKind="mandatory"
  caveat="Section 83's non-bailable-offence bail route depends on the local Chief Judicial Magistrate or Sessions Judge having the section 80(2) information and documents in hand — a forwarded warrant without them leaves that route without the material the statute requires for the decision."
/>

### In plain English

When a warrant has to be executed somewhere other than where it was issued, there are two ways to get it there: the Court itself can forward it straight to the local Magistrate or senior police officer of the executing district (section 80), or a police officer can carry it there and get it endorsed locally (section 81) — with a further exception letting the officer skip the endorsement altogether if waiting for it would let the person get away. Once the arrest actually happens outside the issuing district, the default under section 82 is that the person is *not* driven straight back to the issuing Court — he goes first to a local Magistrate or senior officer, unless the issuing Court happens to be closer than that local officer, or a bail bond has already been arranged under section 73. That local officer then has three options under section 83: send the person on to the issuing Court in custody; take a bail bond on the spot if the offence is bailable; or, for a non-bailable offence, have the local Chief Judicial Magistrate or Sessions Judge decide on bail using the information the issuing Court sent along.

### What changed from the CrPC

BNSS sections 80, 81, 82 and 83 correspond to CrPC sections 78, 79, 80 and 81 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes**, with the inter-district execution structure — forwarding by the Court, endorsement by a local officer, diversion to a local authority on arrest, and the local officer's bail options — tracking the unamended CrPC closely.

### Test your instinct

:::: instinct The lawyer who demanded immediate production before the issuing Court
A warrant is executed in a district far from where it issued. The arrested person's lawyer insists he must be produced before the issuing Court immediately, since that is "the court with jurisdiction over the case."
::: ruling What actually happens
Section 82(1) specifically displaces that expectation: unless the issuing Court is within thirty kilometres of the arrest, or nearer than the local Executive Magistrate/District Superintendent/Commissioner, or security has already been taken under section 73, the arrested person goes before the *local* authority first, not the issuing Court. The lawyer's demand for immediate production before the issuing Court is not supported by section 82 unless one of those specific exceptions applies.
:::
::::

:::: instinct The non-bailable offence where the local Magistrate grants bail without waiting for the issuing Court
A person is arrested on a non-bailable-offence warrant in a district far from where it issued. The local Chief Judicial Magistrate, considering the information and documents forwarded under section 80(2), grants bail without waiting for the issuing Court to weigh in. The prosecution argues only the issuing Court can decide bail on its own warrant.
::: ruling What actually happens
Section 83(1)'s second proviso expressly empowers the Chief Judicial Magistrate (subject to section 480) or the Sessions Judge of the arrest district to release the person on bail for a non-bailable offence, based on the section 80(2) information and documents — without needing the issuing Court's prior involvement. The prosecution's objection fails on the statute's own terms, provided the local Magistrate genuinely had the required information before him.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 80–83 are inter-district execution and procedural-handoff mechanics that are, in the drafter's assessment, sufficiently self-contained on the statutory text; no Supreme Court authority squarely on this specific forwarding-and-diversion structure is confidently recalled, and the anti-fabrication discipline governing this project counsels against forcing one in.

#### Sword and shield

As a **shield**, an arrested person can resist being driven straight back to the issuing Court by invoking section 82(1)'s diversion default, and can press the local CJM or Sessions Judge to exercise the independent non-bailable bail power under section 83(1)'s second proviso rather than waiting on the issuing Court. As a **sword**, the prosecution can rely on section 81(3)'s no-endorsement exception where genuine delay would defeat execution, and on section 83(1)'s first proviso to secure a bailable-offence bond locally without returning the person to the issuing Court at all.

#### The limitation clock

No independent limitation period attaches to ss. 80–83; an objection to the execution route used, or to a local officer's failure to apply section 82's diversion default or section 83's bail options, should be raised at the first appearance before whichever authority the person is actually brought before.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Warrant to be executed outside issuing Court's jurisdiction, forwarded by the Court itself | Section 80 | Sent to local Executive Magistrate/DSP/Commissioner with information and documents for a later bail decision |
| Warrant carried by a police officer into another jurisdiction | Section 81 | Local endorsement required (or, exceptionally, execution without it under s.81(3)) |
| Arrest made outside the issuing district | Section 82 | Diverted to local Magistrate/DSP/Commissioner unless proximity or section 73 security exception applies |
| Local Magistrate/officer receiving the arrested person | Section 83 | Removal to issuing Court, or bail bond (bailable offence), or independent bail decision by local CJM/Sessions Judge (non-bailable offence) |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not assume an arrest executed far from the issuing district requires immediate production before that Court — check section 82(1)'s proximity and section 73 exceptions first.
2. Do not overlook that a non-bailable offence still has an independent local bail route under section 83(1)'s second proviso — it does not require the issuing Court's prior decision.
3. Do not accept execution under section 81(3)'s no-endorsement exception without confirming a genuine, reasoned belief that obtaining the endorsement would have defeated execution.
4. Do not assume the section 83 bail options are available without checking that the section 80(2) information and documents actually accompanied the warrant — the non-bailable bail route is built on having that material in hand.

**Timing.** Raise any objection to the execution route, the diversion (or non-diversion) under section 82, or the local officer's handling of section 83's options at the first appearance before that officer, not after the person has already been produced before the issuing Court on an unchallenged assumption of regularity.

**Model checklist for reviewing inter-district warrant execution:**

1. Identify whether the warrant was forwarded under section 80 or carried for endorsement under section 81, and confirm the applicable formalities were observed.
2. Confirm whether section 82(1)'s diversion default applied, or whether a proximity or section 73 exception genuinely displaced it.
3. Where a non-bailable bail decision was made locally under section 83(1)'s second proviso, confirm the local CJM or Sessions Judge actually had the section 80(2) information and documents.
4. Confirm the designated-officer notification duty under section 82(2) was carried out.

---

## Sections 84–85 — Proclamation for an absconding person, the proclaimed-offender declaration, and attachment of property

### The dispute this solves

::: oneminute When a warrant simply cannot be executed because the person cannot be found, the Sanhita escalates in two further steps — a public proclamation, and then attachment of property — with a severe, named "proclaimed offender" status reserved for the most serious offences.
Sections 80–83 assume the warrant eventually catches up with the person somewhere. Sections 84 and 85 deal with what happens when it does not — when a Court has reason to believe the person has absconded or is hiding specifically to defeat execution. Section 84 lets the Court publish a formal proclamation demanding appearance within a fixed window, and, for the most serious offences (ten years or more, life, or death), escalates non-appearance into a formal declaration that the person is a "proclaimed offender" — a status with real consequences elsewhere in the law. Section 85 lets the Court go further still and attach the person's property, before or alongside the proclamation itself if there is a genuine risk the property will be moved or sold first.
:::

::: story The businessman who disappeared after the warrant issued
A warrant is issued against a businessman accused of an offence punishable with life imprisonment. He is nowhere to be found; his known residence is locked, and inquiries suggest he has left the State. The Court, satisfied he is deliberately evading execution, publishes a proclamation: a public reading in his home town, a copy affixed to his house, another affixed to the Court-house, giving him thirty days to appear. He does not appear. Because the offence qualifies under section 84(4)'s ten-years-or-more threshold, the Court, after inquiry, declares him a proclaimed offender. Separately, on information that he is quietly transferring his immovable property to relatives, the Court invokes section 85's proviso to attach that property simultaneously with the proclamation itself — not waiting for the thirty days to run first, precisely because waiting would have let the property disappear before attachment ever reached it.
:::

> **84. Proclamation for person absconding.**—(1) If any Court has reason to believe (whether after taking evidence or not) that any person against whom a warrant has been issued by it has absconded or is concealing himself so that such warrant cannot be executed, such Court [[?may]] publish a written proclamation requiring him to appear at a specified place and at a specified time not less than thirty days from the date of publishing such proclamation.
>
> (2) The proclamation [[!shall]] be published as follows:—
>
> (i) (a) it [[!shall]] be publicly read in some conspicuous place of the town or village in which such person ordinarily resides;
>
> (b) it [[!shall]] be affixed to some conspicuous part of the house or homestead in which such person ordinarily resides or to some conspicuous place of such town or village;
>
> (c) a copy thereof [[!shall]] be affixed to some conspicuous part of the Court-house;
>
> (ii) the Court [[?may]] also, if it thinks fit, direct a copy of the proclamation to be published in a daily newspaper circulating in the place in which such person ordinarily resides.
>
> (3) A statement in writing by the Court issuing the proclamation to the effect that the proclamation was duly published on a specified day, in the manner specified in clause (i) of sub-section (2), [[!shall]] be conclusive evidence that the requirements of this section have been complied with, and that the proclamation was published on such day.
>
> (4) Where a proclamation published under sub-section (1) is in respect of a person accused of an offence which is made punishable with imprisonment of ten years or more, or imprisonment for life or with death under the Bharatiya Nyaya Sanhita, 2023 or under any other law for the time being in force, and such person fails to appear at the specified place and time required by the proclamation, the Court [[?may]], after making such inquiry as it thinks fit, pronounce him a proclaimed offender and make a declaration to that effect.
>
> (5) The provisions of sub-sections (2) and (3) [[!shall]] apply to a declaration made by the Court under sub-section (4) as they apply to the proclamation published under sub-section (1).
>
> **85. Attachment of property of person absconding.**—(1) The Court issuing a proclamation under section 84 [[?may]], for reasons to be recorded in writing, at any time after the issue of the proclamation, order the attachment of any property, movable or immovable, or both, belonging to the proclaimed person:
>
> Provided that where at the time of the issue of the proclamation the Court is satisfied, by affidavit or otherwise, that the person in relation to whom the proclamation is to be issued,—
>
> (a) is about to dispose of the whole or any part of his property; or
>
> (b) is about to remove the whole or any part of his property from the local jurisdiction of the Court,
>
> it [[?may]] order the attachment of property simultaneously with the issue of the proclamation.
>
> (2) Such order [[!shall]] authorise the attachment of any property belonging to such person within the district in which it is made; and it [[!shall]] authorise the attachment of any property belonging to such person without such district when endorsed by the District Magistrate within whose district such property is situate.
>
> (3) If the property ordered to be attached is a debt or other movable property, the attachment under this section [[!shall]] be made—(a) by seizure; or (b) by the appointment of a receiver; or (c) by an order in writing prohibiting the delivery of such property to the proclaimed person or to any one on his behalf; or (d) by all or any two of such methods, as the Court thinks fit.
>
> (4) If the property ordered to be attached is immovable, the attachment under this section [[!shall]], in the case of land paying revenue to the State Government, be made through the Collector of the district in which the land is situate, and in all other cases—(a) by taking possession; or (b) by the appointment of a receiver; or (c) by an order in writing prohibiting the payment of rent on delivery of property to the proclaimed person or to any one on his behalf; or (d) by all or any two of such methods, as the Court thinks fit.
>
> (5) If the property ordered to be attached consists of live-stock or is of a perishable nature, the Court [[?may]], if it thinks it expedient, order immediate sale thereof, and in such case the proceeds of the sale [[!shall]] abide the order of the Court.
>
> (6) The powers, duties and liabilities of a receiver appointed under this section [[!shall]] be the same as those of a receiver appointed under the Code of Civil Procedure, 1908.
>
> ::: proviso "Proclaimed offender" is a severe, threshold-gated status — not the automatic result of every unanswered proclamation
> Section 84(4)'s proclaimed-offender declaration is not available for every proclamation under section 84(1) — it is gated to offences punishable with ten years or more, life imprisonment, or death, and even then it requires the Court to make "such inquiry as it thinks fit" before pronouncing the declaration. A proclamation issued for a lesser offence, however genuinely the person has absconded, cannot itself carry a proclaimed-offender declaration; that status, with its own downstream consequences, is reserved for the Sanhita's most serious offence categories.
> :::

<MicroTree
  input="A warrant cannot be executed because the person has absconded or is hiding. What escalation is available, and on what terms?"
  :gates="[
    { q: 'Does the Court have reason to believe the person has absconded or is concealing himself specifically so the warrant cannot be executed?', note: 'Section 84(1) applies — the Court may publish a written proclamation, following the section 84(2) publication formalities, giving at least thirty days to appear.', no: 'Section 84’s proclamation route is not yet available; ordinary execution channels under sections 80–83 remain the operative route.' },
    { q: 'Does the offence carry ten years or more, life imprisonment, or death, and has the person failed to appear as the proclamation required?', note: 'Section 84(4) applies — after such inquiry as it thinks fit, the Court may declare the person a proclaimed offender, a status carrying consequences beyond this section.', no: 'The person remains merely a proclamation-defaulter, not a declared proclaimed offender; the severe status under section 84(4) is not triggered by this offence category.' },
    { q: 'Is there a genuine risk, shown by affidavit or otherwise, that the person is about to dispose of or remove property from the Court’s jurisdiction?', note: 'Section 85(1)’s proviso applies — attachment may be ordered simultaneously with the proclamation itself, rather than waiting for the thirty-day window to run.', no: 'Attachment under section 85(1) remains available at any time after the proclamation issues, on recorded reasons, but need not be simultaneous.' }
  ]"
  result="The correct escalation — proclamation, proclaimed-offender declaration where the offence qualifies, and attachment on the appropriate timeline — is applied only where its specific statutory gate is actually met."
  resultKind="discretionary"
  caveat="Every stage in this ladder is discretionary ('may'), but each discretion is exercised against a specific factual gate — absconding to defeat execution, a qualifying offence category, or a genuine risk to the property — not as an automatic next step once the previous one is exhausted."
/>

### In plain English

Think of sections 84 and 85 as the Sanhita's last resort when a warrant simply will not catch up with someone. First, a public proclamation: read aloud in the person's home town, posted on their house, posted at the courthouse, giving them at least thirty days to show up. If the offence is genuinely serious — ten years or more, life, or death — and they still do not show up, the Court can go a step further and formally brand them a "proclaimed offender," a status the law treats very differently from ordinary non-appearance. Separately, and on its own timeline, the Court can freeze the person's property — seizing movable property or a receiver for it, taking possession of land or a receiver for it, and even a quick sale if it is livestock or something perishable — either any time after the proclamation, or, if there is a real risk the person is about to sell or move the property out of reach, at the very same moment the proclamation itself is issued.

### What changed from the CrPC

BNSS sections 84 and 85 correspond to CrPC sections 82 and 83 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes** for the proclamation-and-attachment mechanics themselves, but section 84(4)'s proclaimed-offender declaration is the notable substantive marker in this cluster: it is now explicitly tied to offences punishable with ten years or more, life imprisonment, or death "under the Bharatiya Nyaya Sanhita, 2023 or under any other law for the time being in force" — a cross-reference to the BNS 2023 that has no equivalent in the unamended CrPC's parallel provision, reflecting the interlocking-code structure the Sanhita is built on.

### Test your instinct

:::: instinct The proclamation issued for a minor offence, with no proclaimed-offender declaration following
A person genuinely absconds after a warrant issues for an offence carrying a maximum of three years' imprisonment. The Court publishes a section 84(1) proclamation; the person still does not appear. The complainant demands the Court declare him a proclaimed offender to increase pressure.
::: ruling What actually happens
Section 84(4)'s proclaimed-offender declaration is gated to offences punishable with ten years or more, life imprisonment, or death. A three-year-maximum offence does not qualify, no matter how clearly the person is evading the proclamation. The Court can (and likely will) continue treating the person as having defaulted on the proclamation, but it cannot escalate to a proclaimed-offender declaration for an offence outside section 84(4)'s threshold — the complainant's demand asks for a status the statute simply does not make available here.
:::
::::

:::: instinct The simultaneous attachment that outpaced the thirty-day window
Before a proclamation is even published, the Court receives an affidavit showing the person is actively transferring immovable property to relatives to place it beyond reach. The Court orders attachment on the very same day it issues the proclamation, without waiting to see whether the person appears within the thirty days.
::: ruling What actually happens
Section 85(1)'s proviso exists precisely for this situation: where the Court is satisfied, by affidavit or otherwise, that the person is about to dispose of or remove property from its jurisdiction, it may order attachment simultaneously with the proclamation itself, rather than waiting for the ordinary "any time after the issue of the proclamation" timeline in the main part of section 85(1). The objection that attachment is premature before the thirty-day window has run misreads the proviso, which is designed specifically to beat exactly this kind of pre-emptive disposal.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 84 and 85 are, in the drafter's assessment, capable of being stated accurately and completely from the statutory text's own thresholds and formalities; the drafter is not confident of a specific, on-point Supreme Court authority interpreting this particular BNSS-era proclamation-and-attachment structure (as distinct from the older CrPC provisions it replaces), and declines to force one in rather than risk misattribution.

#### Sword and shield

As a **shield**, a person facing a proclaimed-offender declaration can argue the offence does not meet section 84(4)'s ten-years/life/death threshold, or that the Court's section 84(2) publication formalities were not actually followed (displacing the section 84(3) conclusive-evidence shield). As a **sword**, a party seeking urgent attachment can invoke section 85(1)'s proviso to secure simultaneous attachment on affidavit evidence of imminent disposal or removal, without waiting for the proclamation's thirty-day window to expire first.

#### The limitation clock

Section 84(1)'s thirty-day minimum window before the specified appearance date is itself a statutory timing rule, not a limitation period in the conventional sense; separately, section 87 (addressed in the next cluster) fixes a six-month window for third-party claims against attached property, so any attachment under section 85 should be tracked against that downstream clock from the date of attachment.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person has absconded or is hiding to defeat a warrant | Section 84(1)–(3) | Written proclamation, published per fixed formalities, at least 30 days to appear |
| Offence carries 10+ years/life/death, person fails to appear | Section 84(4)–(5) | Proclaimed-offender declaration after inquiry, same publication formalities apply |
| Property attachment sought after proclamation | Section 85(1) main part | Attachment any time after proclamation, on recorded reasons |
| Genuine risk of imminent disposal/removal of property | Section 85(1) proviso | Simultaneous attachment with the proclamation itself |
| Movable property/debt attachment | Section 85(3) | Seizure, receiver, prohibition order, or combination |
| Immovable property attachment | Section 85(4) | Via Collector (revenue land) or possession/receiver/prohibition order |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not seek or concede a proclaimed-offender declaration without first confirming the offence independently meets section 84(4)'s ten-years/life/death threshold — the declaration is not a natural escalation from every unanswered proclamation.
2. Do not treat section 84(3)'s conclusive-evidence rule as unchallengeable in principle — it is conclusive only as to what it actually certifies (due publication in the section 84(2)(i) manner on a specified day), not as to matters outside that certification.
3. Do not wait for the thirty-day appearance window to run before seeking attachment where there is genuine, affidavit-supported evidence of imminent disposal or removal — section 85(1)'s proviso is built for exactly that urgency.
4. Do not overlook that an attachment reaching property outside the ordering Court's own district requires the section 85(2) endorsement by that district's District Magistrate.

**Timing.** Raise a threshold objection to a proposed proclaimed-offender declaration before it is made, not after — the declaration itself, once made, is treated as carrying the same publication-formality shield as the underlying proclamation under section 84(5).

**Model checklist for reviewing a proclamation or attachment:**

1. Confirm the Court had a genuine basis to believe the person had absconded or was concealing himself to defeat execution before issuing the section 84(1) proclamation.
2. Confirm the section 84(2) publication formalities (public reading, house affixation, Court-house affixation) were actually carried out, and check for a section 84(3) conclusive-evidence statement.
3. Where a proclaimed-offender declaration has been made, independently verify the offence meets section 84(4)'s threshold.
4. Where attachment has been ordered, confirm whether it was simultaneous (requiring the section 85(1) proviso's risk showing) or post-proclamation (requiring only recorded reasons), and confirm any cross-district endorsement under section 85(2).

---

## Sections 86–89 — Cross-border attachment, claims and objections, release/sale/restoration, and appeal

### The dispute this solves

::: oneminute Attachment is not the end of the story — property claimed by an innocent third party has to be sorted out, the attached property itself has to be released, sold, or eventually restored, and a person who genuinely did not evade the warrant gets one real chance to get it all back.
Section 85 lets a Court freeze a proclaimed person's property. Sections 86 to 89 handle everything downstream of that freeze: a cross-border mechanism for chasing property outside India, a structured process for a genuine third party to claim an interest in attached property before it is disposed of, the eventual fate of the property — released if the person appears, sold if not, and restored under narrow conditions even after sale — and a right of appeal for the person who is refused restoration. The cluster closes with the two-year outer limit within which even a person who was genuinely unaware of the proclamation can still recover what was taken.
:::

::: story The relative who genuinely knew nothing
A proclaimed person's brother inherits a share in the attached immovable property mid-way through the attachment period, entirely unaware his brother was even a fugitive. He files a claim under section 87 within the six-month window, asserting his own independent, pre-existing interest in a portion of the land — not merely acting on the proclaimed person's behalf. The claim succeeds as to his share, which is released from attachment, while the remainder continues to await either the proclaimed person's appearance or, eventually, sale. Separately, when the proclaimed person himself surfaces eighteen months later — arrested elsewhere, brought before the attaching Court, and able to show he had genuinely never received notice of the proclamation in time to appear — section 88(3) lets him recover what remains of the rest of the property (or its sale proceeds), because he falls within the two-year window and can meet both of that sub-section's conditions.
:::

> **86. Identification and attachment of property of proclaimed person.**—The Court [[?may]], on the written request from a police officer not below the rank of the Superintendent of Police or Commissioner of Police, initiate the process of requesting assistance from a Court or an authority in the contracting State for identification, attachment and forfeiture of property belonging to a proclaimed person in accordance with the procedure provided in Chapter VIII.
>
> **87. Claims and objections to attachment.**—(1) If any claim is preferred to, or objection made to the attachment of, any property attached under section 85, within six months from the date of such attachment, by any person other than the proclaimed person, on the ground that the claimant or objector has an interest in such property, and that such interest is not liable to attachment under section 85, the claim or objection [[!shall]] be inquired into, and [[?may]] be allowed or disallowed in whole or in part:
>
> Provided that any claim preferred or objection made within the period allowed by this sub-section [[?may]], in the event of the death of the claimant or objector, be continued by his legal representative.
>
> (2) Claims or objections under sub-section (1) [[?may]] be preferred or made in the Court by which the order of attachment is issued, or, if the claim or objection is in respect of property attached under an order endorsed under sub-section (2) of section 85, in the Court of the Chief Judicial Magistrate of the district in which the attachment is made.
>
> (3) Every such claim or objection [[!shall]] be inquired into by the Court in which it is preferred or made:
>
> Provided that, if it is preferred or made in the Court of a Chief Judicial Magistrate, he [[?may]] make it over for disposal to any Magistrate subordinate to him.
>
> (4) Any person whose claim or objection has been disallowed in whole or in part by an order under sub-section (1) [[?may]], within a period of one year from the date of such order, institute a suit to establish the right which he claims in respect of the property in dispute; but subject to the result of such suit, if any, the order [[!shall]] be conclusive.
>
> **88. Release, sale and restoration of attached property.**—(1) If the proclaimed person appears within the time specified in the proclamation, the Court [[!shall]] make an order releasing the property from the attachment.
>
> (2) If the proclaimed person does not appear within the time specified in the proclamation, the property under the attachment [[!shall]] be at the disposal of the State Government; but it [[!shall]] not be sold until the expiration of six months from the date of the attachment and until any claim preferred or objection made under section 87 has been disposed of under that section, unless it is subject to speedy and natural decay, or the Court considers that the sale would be for the benefit of the owner; in either of which cases the Court [[?may]] cause it to be sold whenever it thinks fit.
>
> (3) If, within two years from the date of the attachment, any person whose property is or has been at the disposal of the State Government under sub-section (2), appears voluntarily or is apprehended and brought before the Court by whose order the property was attached, or the Court to which such Court is subordinate, and proves to the satisfaction of such Court that he did not abscond or conceal himself for the purpose of avoiding execution of the warrant, and that he had not such notice of the proclamation as to enable him to attend within the time specified therein, such property, or, if the same has been sold, the net proceeds of the sale, or, if part only thereof has been sold, the net proceeds of the sale and the residue of the property, [[!shall]], after satisfying therefrom all costs incurred in consequence of the attachment, be delivered to him.
>
> **89. Appeal from order rejecting application for restoration of attached property.**—Any person referred to in sub-section (3) of section 88, who is aggrieved by any refusal to deliver property or the proceeds of the sale thereof [[?may]] appeal to the Court to which appeals ordinarily lie from the sentences of the first-mentioned Court.
>
> ::: proviso Section 88(3) restoration has two conjunctive conditions — proving either one alone is not enough
> A person seeking restoration under section 88(3) within the two-year window must prove, to the Court's satisfaction, **both** that he did not abscond or conceal himself to avoid execution of the warrant, **and** that he did not have such notice of the proclamation as would have let him appear in time. These are conjunctive, not alternative: a person who genuinely never received notice but who was, independently, also hiding to avoid the warrant on some unrelated ground does not qualify merely because the notice point is made out. Both limbs have to be satisfied together.
> :::

<MicroTree
  input="Property has been attached under section 85. What happens to it, and can it ever be recovered?"
  :gates="[
    { q: 'Has a third party (not the proclaimed person) preferred a claim or objection to the attachment within six months, asserting a genuine independent interest not liable to attachment?', note: 'Section 87 applies — the claim is inquired into and may be allowed or disallowed in whole or in part; a disallowed claimant has one year to sue to establish the right instead.', no: 'No third-party claim intervenes; the property’s fate runs on the proclaimed person’s own appearance or non-appearance under section 88.' },
    { q: 'Did the proclaimed person appear within the time specified in the original proclamation?', note: 'Section 88(1) applies — the Court must release the property from attachment.', no: 'Section 88(2) applies — the property goes to the State Government’s disposal, with sale deferred at least six months and until section 87 claims are resolved (subject to the perishable/beneficial-sale exceptions).' },
    { q: 'Within two years of the attachment, does the person appear or get apprehended, and can he prove both that he did not abscond to avoid the warrant and that he lacked timely notice of the proclamation?', note: 'Section 88(3) applies — the property, or its sale proceeds, is delivered to him after costs; a refusal to do so is appealable under section 89.', no: 'Restoration under section 88(3) is not available on these facts — either the two-year window has closed, or one of the two conjunctive conditions is not met.' }
  ]"
  result="The property's actual disposition — third-party claim, release, State disposal and eventual sale, or restoration — is traced through the correct sequence before either side treats the attachment as final."
  resultKind="mandatory"
  caveat="Section 86's cross-border identification-and-attachment route runs on a separate, police-initiated track under Chapter VIII procedure, distinct from the domestic claims-and-restoration sequence in sections 87–89."
/>

### In plain English

Once property is attached, three separate things can happen to it. First, anyone genuinely unconnected to the proclaimed person — a co-owner, an heir, a creditor — has six months to step forward and claim their own interest in it; if that claim is rejected, they still get a year to sue over it in the ordinary courts. Second, the property's main fate depends on the proclaimed person himself: if he shows up in time, it is released back to him immediately; if he does not, it passes to the State's disposal, but cannot actually be sold for at least six months and not until any third-party claims are sorted out (unless it is perishable or selling it is genuinely in the owner's own interest). Third, even after all that, a person who was genuinely never hiding to dodge the warrant and who genuinely never got proper notice of the proclamation gets a real second chance — up to two years from attachment — to get the property, or what it sold for, back. If that request for restoration is refused, section 89 gives a right of appeal. Section 86, separately, is about chasing property that has left India entirely, through a formal cross-border request to another country's courts or authorities.

### What changed from the CrPC

BNSS sections 86, 87, 88 and 89 correspond to CrPC sections 83A, 84, 85 and 86 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

Section 86's cross-border identification-and-attachment mechanism is the significant new element in this cluster — it did not exist in the unamended CrPC's original text and reflects a **genuinely new provision**, extending the domestic attachment machinery into a formal cross-border cooperation channel under Chapter VIII. Sections 87, 88 and 89 are **renumbered with drafting changes**, with the claims process, the release/sale/restoration sequence, and the appeal right all tracking the unamended CrPC closely.

### Test your instinct

:::: instinct The co-owner who steps forward after the six-month window
A proclaimed person's business partner, who has held an independent, pre-existing 50% interest in attached commercial property for years, learns of the attachment only after seven months have passed and immediately files a claim under section 87.
::: ruling What actually happens
Section 87(1)'s six-month window runs "from the date of such attachment," not from when the claimant learned of it. A claim filed after that window has closed is out of time under section 87 itself, whatever the merits of the underlying interest — though the partner is not without any remedy, since section 87(4)'s one-year suit route is available only to a claimant whose claim was actually disallowed under sub-section (1), which presupposes a claim was timely made. A late claimant's practical options are narrower, and timing is the first thing to check before assuming section 87 can simply be invoked whenever the interest is discovered.
:::
::::

:::: instinct The person who proves lack of notice but was also hiding for an unrelated reason
Eighteen months after attachment, a person is apprehended and brought before the attaching Court. He proves convincingly that he never received notice of the proclamation in time. But the Court also finds he was, independently, evading a separate warrant on an unrelated matter and had in fact been concealing himself generally, including during the relevant period.
::: ruling What actually happens
Section 88(3) requires proof of both limbs together: no absconding or concealment to avoid execution of *this* warrant, and no timely notice of *this* proclamation. A finding that he was concealing himself — even for a different, unrelated reason — defeats the first limb, regardless of how convincingly the notice point is made out. Restoration under section 88(3) fails on the conjunctive structure of the sub-section, not because the notice argument was weak.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 86–89 are procedural claims-and-disposal mechanics that are, in the drafter's assessment, best stated directly from the conjunctive and disjunctive structure of the text itself; no specific Supreme Court authority on this precise sequence is confidently recalled, and the anti-fabrication discipline governing this project counsels against forcing one in.

#### Sword and shield

As a **shield**, a genuine third-party claimant should move within section 87's six-month window and, if disallowed, preserve the section 87(4) one-year suit right rather than letting it lapse; a proclaimed person seeking restoration must be ready to prove **both** section 88(3) limbs, not just the more sympathetic one. As a **sword**, the State can rely on section 88(2)'s disposal mechanism once the proclaimed person fails to appear, subject only to the six-month sale deferral and unresolved section 87 claims — and the perishable/beneficial-sale exceptions let it move faster where genuinely warranted.

#### The limitation clock

Section 87(1) fixes a **six-month** window (from the date of attachment) for third-party claims or objections; section 87(4) fixes a **one-year** window (from the date of a disallowing order) for a disallowed claimant to sue to establish the right; section 88(3) fixes a **two-year** window (from the date of attachment) for the proclaimed person's own restoration claim. All three run independently and should be tracked separately against the same attachment date.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Property has left India | Section 86 | Cross-border identification/attachment/forfeiture request via Chapter VIII procedure |
| Third party claims an interest in attached property | Section 87(1)–(3) | Inquiry within 6 months of attachment; allowed/disallowed in whole or part |
| Claim disallowed | Section 87(4) | 1 year to institute a suit to establish the right |
| Proclaimed person appears in time | Section 88(1) | Mandatory release of the property |
| Proclaimed person does not appear | Section 88(2) | Property to State disposal; sale deferred 6 months and pending s.87 claims (subject to exceptions) |
| Proclaimed person appears/apprehended within 2 years, proves both no-evasion and no-notice | Section 88(3) | Property or sale proceeds delivered, after costs |
| Restoration refused | Section 89 | Appeal to the Court to which appeals ordinarily lie |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not let a genuine third-party claimant sit on a claim past section 87(1)'s six-month window, calculated from the date of attachment, not from when the claimant learned of it.
2. Do not treat a disallowed section 87 claim as final without checking section 87(4)'s one-year suit right.
3. Do not build a section 88(3) restoration case on only one of its two limbs — no evasion of the warrant, and no timely notice of the proclamation — both must be proved.
4. Do not assume attached property can be sold immediately on non-appearance — section 88(2)'s six-month deferral and pending section 87 claims must both be cleared first, absent the perishable/beneficial-sale exceptions.

**Timing.** File a third-party claim within six months of attachment; file a suit on a disallowed claim within one year of the disallowing order; bring a restoration application within two years of attachment; appeal a refusal to restore promptly under section 89, since no separate limitation period is stated for the appeal itself.

**Model checklist for reviewing attachment aftermath:**

1. Confirm whether any section 87 claims were filed within six months, and their disposition.
2. Confirm whether the proclaimed person appeared within the proclamation's specified time, triggering mandatory release under section 88(1).
3. If not, confirm the section 88(2) six-month sale deferral and section 87 claim-resolution conditions were actually observed before any sale.
4. If restoration is sought under section 88(3), independently verify both conjunctive conditions, not just the more favourable one.
5. Where restoration was refused, confirm whether a section 89 appeal was filed and track it against the ordinary appellate timeline for that Court.

---

## Sections 90–93 — Warrant in lieu of summons, bonds for appearance, arrest on breach, and the Chapter's closing applicability rule

### The dispute this solves

::: oneminute The Sanhita's two coercion tracks — summons and warrant — are not sealed off from each other, and appearance itself can be secured by a simple bond without either. This final cluster ties the whole chapter together.
Chapters VI's earlier sections treat summons and warrant as two distinct tracks, each with its own machinery. Sections 90 to 93 are the connective tissue: section 90 lets a Court convert what would ordinarily be a summons case into a warrant case, before or after the summons issues, where it has reason to believe the person will not cooperate. Section 91 offers a third, lighter-weight route — a simple bond or bail bond for appearance, usable whenever the person is already present in court. Section 92 supplies the consequence if that bond is broken: a warrant, without the Court needing to start the whole summons process over. Section 93 closes the chapter with a short but important general-applicability rule, extending everything the chapter has built to every summons and warrant issued under the Sanhita, not just the specific ones the chapter happened to discuss by name.
:::

::: story The summons that was quietly upgraded before it was even issued
A complaint is filed, and the Magistrate initially intends to proceed by summons. Before the summons is issued, however, credible information reaches the Court that the accused has already left the country temporarily and has a documented history of ignoring court process in an unrelated matter. Rather than issuing a summons that experience suggests will accomplish nothing, the Magistrate records reasons in writing and issues a warrant directly under section 90(a) — "before the issue of such summons... the Court sees reason to believe that he has absconded or will not obey the summons." The accused's counsel later argues a warrant was premature since no summons had even been tried first. Section 90(a) answers this directly: the power to warrant instead of summons is available precisely at this pre-summons stage, provided the Court's belief is genuinely reasoned and recorded, not merely asserted.
:::

> **90. Issue of warrant in lieu of, or in addition to, summons.**—A Court [[?may]], in any case in which it is empowered by this Sanhita to issue a summons for the appearance of any person, issue, after recording its reasons in writing, a warrant for his arrest—
>
> (a) if, either before the issue of such summons, or after the issue of the same but before the time fixed for his appearance, the Court sees reason to believe that he has absconded or will not obey the summons; or
>
> (b) if at such time he fails to appear and the summons is proved to have been duly served in time to admit of his appearing in accordance therewith and no reasonable excuse is offered for such failure.
>
> **91. Power to take bond or bail bond for appearance.**—When any person for whose appearance or arrest the officer presiding in any Court is empowered to issue a summons or warrant, is present in such Court, such officer [[?may]] require such person to execute a bond or bail bond for his appearance in such Court, or any other Court to which the case may be transferred for trial.
>
> **92. Arrest on breach of bond or bail bond for appearance.**—When any person who is bound by any bond or bail bond taken under this Sanhita to appear before a Court, does not appear, the officer presiding in such Court [[?may]] issue a warrant directing that such person be arrested and produced before him.
>
> **93. Provisions of this Chapter generally applicable to summons and warrants of arrest.**—The provisions contained in this Chapter relating to summons and warrant, and their issue, service and execution, [[!shall]], so far as may be, apply to every summons and every warrant of arrest issued under this Sanhita.
>
> ::: proviso Section 90 is a discretion conditioned on recorded reasons — not a silent upgrade
> Section 90's power to warrant instead of, or alongside, a summons is discretionary ("may"), but it comes with a mandatory procedural precondition: the Court must record its reasons in writing before exercising it. A warrant issued under section 90 without any recorded reasoning is vulnerable on that ground alone, independent of whether the underlying belief that the person would abscond or disobey was, in substance, a reasonable one.
> :::

<MicroTree
  input="A Court considering how to secure a person's appearance. Which of the chapter's three coercion tracks applies?"
  :gates="[
    { q: 'Is the person already physically present before the Court?', note: 'Section 91 applies — the officer may require a bond or bail bond for appearance in that Court, or a transferee Court, without needing either a summons or a warrant.', no: 'Move to the summons-or-warrant question.' },
    { q: 'Does the Court have a genuine, recordable reason to believe the person has absconded or will not obey a summons — either before or after the summons issues but before the appearance date, or has the person defaulted on a duly served summons without reasonable excuse?', note: 'Section 90 applies — the Court may issue a warrant instead of, or alongside, a summons, but only after recording its reasons in writing.', no: 'The ordinary summons track (sections 63–71) remains the ungraded, operative route.' },
    { q: 'Has a person bound by a section 91 bond or bail bond failed to appear as required?', note: 'Section 92 applies — the presiding officer may issue a warrant for arrest and production, without restarting the summons process.', no: 'The bond remains in force on its original terms; no warrant is yet triggered.' }
  ]"
  result="The correct one of the chapter's three appearance-securing tracks — bond, summons-to-warrant escalation, or bond-breach warrant — is applied to the person's actual situation, and section 93 then carries the chapter's machinery through to every summons and warrant issued anywhere else in the Sanhita."
  resultKind="discretionary"
  caveat="Every power in this cluster is discretionary on its face ('may'), but section 90's warrant-in-lieu-of-summons power is additionally conditioned on the mandatory procedural step of recording reasons in writing before it is exercised."
/>

### In plain English

This closing cluster ties three loose threads together. First, a Court is not locked into starting with a summons just because that is the ordinary, least coercive tool — if it genuinely believes, for a recorded reason, that a summons will be ignored, it can go straight to a warrant, either before the summons is even sent or after it has failed. Second, if the person is already standing in front of the Court for some other reason, the Court does not need either a summons or a warrant to secure their future appearance — it can just take a bond, promising to show up, with or without sureties. Third, if that bond is broken, the Court does not have to start over with a fresh summons; it can go straight to a warrant for arrest and production. And finally, everything this chapter has built — every rule about how a summons is written, served, and proved, every rule about how a warrant is formed, endorsed, and executed — applies to every summons and warrant issued anywhere in the Sanhita, not just the ones this chapter happened to discuss by their own numbers.

### What changed from the CrPC

BNSS sections 90, 91, 92 and 93 correspond to CrPC sections 87, 88, 89 and 90 respectively. ⚠️ *Cross-reference against a verified CrPC-to-BNSS concordance table before relying on this mapping in a filing.*

These are **renumbered with drafting changes**, closing Chapter VI on the same structural note as the unamended CrPC — the summons-to-warrant escalation, the appearance bond, the bond-breach warrant, and the general-applicability rule all track the CrPC closely, with no substantive departure identified in this cluster.

### Test your instinct

:::: instinct The warrant issued with reasons recorded only after the fact
A Court, concerned that an accused will not obey a summons, issues a warrant under section 90(a). No written reasons appear in the order at the time it is passed; several weeks later, when challenged, the Court prepares a note explaining its reasoning and places it on file.
::: ruling What actually happens
Section 90's precondition is that the Court records its reasons in writing as part of exercising the power — not that reasons exist somewhere, eventually, if asked to produce them. A post-hoc justification manufactured after the warrant has already issued and been challenged does not satisfy a precondition that, by its structure, has to precede or accompany the exercise of the power itself. The warrant is vulnerable on this ground regardless of how sound the belated reasoning turns out to be.
:::
::::

:::: instinct The bond-breach warrant issued without a fresh summons
A person executes a bond under section 91 to appear at a future hearing. He does not show up. The Court issues a warrant directly under section 92. His counsel argues the Court should first have issued a fresh summons to explain the consequences before jumping to a warrant.
::: ruling What actually happens
Section 92 does not require a fresh summons as a precondition — it operates directly on the fact of non-appearance by a person "bound by any bond or bail bond taken under this Sanhita to appear before a Court." The bond itself is what created the obligation to appear; its breach is what triggers the warrant. The objection that a summons should have preceded the warrant confuses section 92's bond-breach track with the entirely separate summons-to-warrant escalation in section 90.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

No case citation is added for this cluster. Sections 90–93 are structural, connective provisions — a discretion conditioned on a recorded-reasons precondition, a bond power, a bond-breach consequence, and a general-applicability rule — that the drafter assesses as fully stateable from the text itself; no specific Supreme Court authority squarely on this precise structure is confidently recalled, and the project's anti-fabrication discipline counsels against forcing one in.

#### Sword and shield

As a **shield**, a person facing a section 90 warrant can challenge it for want of contemporaneously recorded reasons, independent of the substantive merits of the Court's underlying belief. As a **sword**, a Court or prosecuting party can rely on section 92 to move directly to a warrant on a bond breach without restarting the summons process, and can rely on section 93 to insist that every procedural safeguard this chapter built for summonses and warrants applies with full force to process issued under any other provision of the Sanhita, not merely the sections named within Chapter VI itself.

#### The limitation clock

No independent limitation period attaches to ss. 90–93; a challenge to a section 90 warrant for want of recorded reasons should be raised at the first opportunity after the warrant is produced or executed, not after the point has been allowed to pass unchallenged.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person already present before the Court | Section 91 | Bond or bail bond for appearance, no summons or warrant needed |
| Reasonable belief a summons will be, or was, disobeyed | Section 90 | Warrant instead of or with summons, after recording reasons in writing |
| Bond under section 91 is broken | Section 92 | Warrant for arrest and production, no fresh summons required |
| Any summons or warrant issued under any Sanhita provision | Section 93 | This Chapter's issue/service/execution machinery applies generally |

#### The authorities

None added — see "The winning ratio" above.

#### Strategy and drafting

**Drafting traps.**

1. Do not accept a section 90 warrant as valid merely because the underlying suspicion was reasonable — check specifically for contemporaneously recorded written reasons.
2. Do not assume a section 92 bond-breach warrant requires a fresh summons first — the bond itself supplies the obligation, and its breach is a sufficient trigger on its own.
3. Do not treat this chapter's summons/warrant safeguards as confined to sections 63–92's own named instances — section 93 extends them to every summons and warrant issued anywhere in the Sanhita.
4. Do not overlook that section 91's bond power is available purely on the person's presence in court — it does not require that a summons or warrant have already been issued or even contemplated.

**Timing.** Raise a want-of-recorded-reasons challenge to a section 90 warrant as early as possible after it surfaces, and invoke section 93 affirmatively whenever a summons or warrant issued under a different chapter of the Sanhita is challenged on service, form, or execution grounds this chapter already addresses.

**Model checklist for reviewing this cluster's provisions:**

1. Where a warrant issued instead of or alongside a summons, confirm contemporaneously recorded written reasons exist under section 90.
2. Where a bond was taken under section 91, confirm the person was genuinely present before the Court at the time.
3. Where a bond-breach warrant issued under section 92, confirm the underlying bond was validly taken under the Sanhita.
4. Where a summons or warrant issued under a provision outside Chapter VI is challenged, invoke section 93 to bring this chapter's full machinery to bear.

---
