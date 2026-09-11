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
