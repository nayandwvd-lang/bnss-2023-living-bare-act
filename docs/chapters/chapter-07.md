# Chapter VII — Processes to Compel the Production of Things

## Sections 94–95 — Summoning a document straight into court, and reaching an article still in the post

### The dispute this solves

::: oneminute An investigator or a court often does not need to arrest anyone or search any premises — it simply needs a document, an electronic communication, a phone, or some other thing that somebody else is holding. Section 94 gives a Court, or the officer in charge of a police station, a direct route to that object: summon the holder to attend and produce it, or simply order it produced, without going anywhere near a search-warrant. Producing the thing is enough — nobody is forced to show up in person just to hand something over. The section expressly does not touch the special evidentiary procedures under the Bharatiya Sakshya Adhiniyam for banker's books, or the Bankers' Books Evidence Act, and it expressly does not reach anything still in the custody of the postal authority. That gap is closed by section 95, which lets specified senior authorities reach an article sitting in the post — either by ordering the postal authority to deliver it to a named person, or, for a wider band of Magistrates and senior police officers, by ordering the postal authority merely to search for and detain it until a senior authority decides what happens to it.
:::

::: story A digital evidence request, and a parcel in transit
An investigating officer needs a suspect's mobile phone and its stored data for a pending investigation. Rather than applying for a search-warrant, the officer in charge of the police station issues a written order under section 94 to the person holding the phone, requiring it to be produced at a stated time and place — the person complies simply by causing the phone to be delivered, without attending in person. In a separate matter, a parcel suspected of containing incriminating material is moving through the postal system. Section 94 cannot reach it, because the postal-custody carve-out in section 94(3)(b) excludes it. A District Magistrate, satisfied the parcel is wanted for the investigation, invokes section 95(1) instead and directs the postal authority to deliver the parcel to a named officer; a more junior Executive Magistrate who forms the same suspicion, by contrast, can only direct the postal authority to search for and detain the parcel, pending the District Magistrate's own order.
:::

### The Act, decompiled

::: proviso Section 94 — Summons to produce document or other thing
"94. (1) Whenever any Court or any officer in charge of a police station considers that the production of any document, electronic communication, including communication devices, which is likely to contain digital evidence or other thing is necessary or desirable for the purposes of any investigation, inquiry, trial or other proceeding under this Sanhita by or before such Court or officer, such Court [[?may]] issue a summons or such officer [[?may]], by a written order, either in physical form or in electronic form, require the person in whose possession or power such document or thing is believed to be, to attend and produce it, or to produce it, at the time and place stated in the summons or order.
(2) Any person required under this section merely to produce a document, or other thing [[!shall]] be deemed to have complied with the requisition if he causes such document or thing to be produced instead of attending personally to produce the same.
(3) Nothing in this section [[!shall]] be deemed—
(a) to affect sections 129 and 130 of the Bharatiya Sakshya Adhiniyam, 2023 or the Bankers' Books Evidence Act, 1891; or
(b) to apply to a letter, postcard, or other document or any parcel or thing in the custody of the postal authority."
:::

::: proviso Section 95 — Procedure as to letters
"95. (1) If any document, parcel or thing in the custody of a postal authority is, in the opinion of the District Magistrate, Chief Judicial Magistrate, Court of Session or High Court wanted for the purpose of any investigation, inquiry, trial or other proceeding under this Sanhita, such Magistrate or Court [[?may]] require the postal authority to deliver the document, parcel or thing to such person as the Magistrate or Court directs.
(2) If any such document, parcel or thing is, in the opinion of any other Magistrate, whether Executive or Judicial, or of any Commissioner of Police or District Superintendent of Police, wanted for any such purpose, he [[?may]] require the postal authority to cause search to be made for and to detain such document, parcel or thing pending the order of a District Magistrate, Chief Judicial Magistrate or Court under sub-section (1)."
:::

### How this actually runs

<MicroTree
  input="A Court or a police officer needs a document, an electronic device, or some other thing that another person is holding, and has to work out the correct route to compel its production."
  :gates="[
    { q: 'Is the document, parcel, or thing already in the custody of the postal authority?', no: 'Section 94 governs directly -- the Court may summon the holder, or the officer in charge of a police station may issue a written order, requiring attendance and production, or production alone' },
    { q: 'If it is in postal custody, is the authority forming the opinion that it is wanted a District Magistrate, Chief Judicial Magistrate, Court of Session, or High Court?', no: 'A more junior Executive or Judicial Magistrate, or a Commissioner of Police or District Superintendent of Police, may only direct the postal authority to search for and detain the article, pending an order from one of the senior authorities' },
    { q: 'Has that senior authority directed the postal authority to deliver the article to a named person?', no: 'Until such a direction issues, the article remains detained by the postal authority rather than delivered to anyone' }
  ]"
  result="A document or thing not in postal custody is reached directly through a section 94 summons or written order, satisfied merely by production. An article already in postal custody can only be reached through section 95, and the depth of power depends on the seniority of the authority forming the opinion that it is wanted -- delivery for the senior tier, detention pending a senior order for everyone else."
  resultKind="discretionary"
  caveat="Section 94 is expressly disapplied to the Bharatiya Sakshya Adhiniyam, 2023 provisions on banker's books and to the Bankers' Books Evidence Act, 1891 -- those categories of evidence are governed by their own dedicated procedure, not by a section 94 summons."
/>

### In plain English

Section 94 is the everyday workhorse for getting a document or an object into a case without the formality of a search. It now expressly covers electronic communications and communication devices likely to hold digital evidence, which matters in an era where the object most often wanted is a phone or a cloud account rather than a paper file. Crucially, the person served does not have to show up in person — sending the item is compliance enough, which keeps the process light for cooperative custodians. Section 95 exists because the postal system sits outside ordinary custody: nobody "possesses" a letter mid-transit in the way section 94 contemplates, so a separate, graded power reaches it instead. The grading matters — only the most senior authorities can order outright delivery to a named person; everyone else can only freeze the article in place until a senior authority decides.

### What changed from the CrPC

::: info Verify before citing
Sections 94 and 95 are provisionally mapped to CrPC sections 91 and 92 respectively (CrPC Chapter VII, "Processes to Compel the Production of Documents"). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing. The phrase "electronic communication, including communication devices, which is likely to contain digital evidence" in section 94(1) reads as a digital-evidence-specific addition with no verbatim analogue in the presumed CrPC section 91 text, and should be checked carefully rather than assumed to be a mere renumbering.
:::

The structural shift from an in-person "attend and produce" default to an object-focused "produce it" option in section 94(1), and the deemed-compliance rule in section 94(2), track the presumed CrPC scheme in substance. The specific addition of digital devices and electronic communications into the class of things a section 94 summons can reach is the change most likely to matter in practice, since it removes any argument that a summons to produce is confined to paper documents.

### Test your instinct

:::: instinct A police officer in charge of a station issues a written order under section 94 by email to a company custodian, requiring production of server logs. The custodian argues the order is invalid because section 94 contemplates only physical summonses. Is the custodian right?

::: ruling No. Section 94(1) expressly allows the officer in charge of a police station to proceed by a written order "either in physical form or in electronic form." An email order is squarely within the section, provided it otherwise states the time and place for production and identifies the material sought.
:::
::::

:::: instinct A District Magistrate wants a parcel delivered directly to an investigating officer, but an Executive Magistrate in the same district had already ordered the postal authority to detain it under section 95(2). Does the Executive Magistrate's order need to be set aside before the District Magistrate can act?

::: ruling No. Section 95(2) expressly frames the Executive Magistrate's detention order as operating "pending the order of a District Magistrate, Chief Judicial Magistrate or Court" under section 95(1) -- it is a holding measure, not a competing final order. The District Magistrate can proceed directly to direct delivery under section 95(1).
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 94–95 of the BNSS is cited here, given the recency of the numbering. The substantial body of CrPC case law on the summons-to-produce power under the presumed predecessor sections remains conceptually relevant but must be independently re-verified against the renumbered BNSS provisions before being pleaded.
:::

#### Sword and shield

As a sword, section 94 is the investigator's low-friction route to documentary and digital evidence — no warrant application, no court hearing, just a written order, and non-compliance can be escalated separately. As a shield, a custodian served with a section 94 order who has genuinely complied by producing the item cannot be compelled to also attend personally; section 94(2)'s deemed-compliance rule is available to resist a demand for personal appearance once production has occurred.

#### The limitation clock

Neither section carries its own limitation period; the underlying investigation, inquiry, or trial's own timelines govern how promptly a section 94 order or a section 95 direction should be sought and acted upon.

#### Interlocking matrix

Section 94(3) interlocks directly with sections 129 and 130 of the Bharatiya Sakshya Adhiniyam, 2023 and with the Bankers' Books Evidence Act, 1891 — banker's-book evidence must be pursued under those dedicated procedures, not section 94. Section 96 (search-warrants) interlocks with both sections here as the fallback route when a section 94 summons or a section 95 direction is not expected to succeed.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

For the prosecution or investigating agency, a section 94 order should identify the document or device with enough precision that "production" can be objectively verified — vague descriptions invite disputes about whether compliance occurred. For a custodian resisting production, section 94(3)'s carve-outs are the first things to check: if the material is a banker's book or is still in postal custody, section 94 is simply the wrong provision, and any order purporting to compel production under it is open to challenge. For a party seeking to reach a postal article, applying directly to a District Magistrate, Chief Judicial Magistrate, Court of Session, or High Court under section 95(1) saves a step compared with routing through a junior Magistrate's detention-only power under section 95(2).

## Sections 96–97 — When a summons gives way to a search-warrant, and the special warrant for stolen property and contraband articles

### The dispute this solves

::: oneminute Sometimes a summons under section 94 is simply the wrong tool — the person who would have to comply will not or would not produce the thing, or nobody even knows who has it, or the Court needs a general search rather than a demand on one named person. Section 96 is the gateway: it tells a Court when it may issue a search-warrant instead of, or in addition to, a summons, and lets the Court narrow the warrant to a specific place or part of a place. It also fences off one category — a Magistrate below the rank of District Magistrate or Chief Judicial Magistrate cannot issue a warrant to search for anything in postal custody. Section 97 is a separate, more targeted power aimed at places suspected of harbouring stolen property or a defined list of "objectionable articles" — counterfeit coin, contraband metal, counterfeit currency or stamps, forged documents, false seals, obscene objects, or the tools used to make any of these. A section 97 warrant authorises a police officer above constable rank not just to search, but to seize the property, convey it (or guard it) pending production before a Magistrate, and take into custody anyone found there who appears complicit.
:::

::: story A reluctant witness, and a raid on a counterfeiting den
A Court has reason to believe that a person served with a section 94 summons will not comply, and nobody else is known to hold the document. Rather than waiting for non-compliance to play out, the Court issues a search-warrant under section 96(1)(a) directly, and may confine it to a particular room if it thinks fit. In a separate matter, a District Magistrate, acting on information and after inquiry, has reason to believe a workshop is being used to produce counterfeit currency notes. He issues a warrant under section 97 authorising a sub-inspector to enter the workshop, search it, seize the counterfeit notes and the printing equipment used to make them, and take into custody anyone found on the premises who appears to have known what was being produced there.
:::

### The Act, decompiled

::: proviso Section 96 — When search-warrant may be issued
"96. (1) Where—
(a) any Court has reason to believe that a person to whom a summons order under section 94 or a requisition under sub-section (1) of section 95 has been, or might be, addressed, will not or would not produce the document or thing as required by such summons or requisition; or
(b) such document or thing is not known to the Court to be in the possession of any person; or
(c) the Court considers that the purposes of any inquiry, trial or other proceeding under this Sanhita will be served by a general search or inspection,
it [[?may]] issue a search-warrant; and the person to whom such warrant is directed, [[?may]] search or inspect in accordance therewith and the provisions hereinafter contained.
(2) The Court [[?may]], if it thinks fit, specify in the warrant the particular place or part thereof to which only the search or inspection [[!shall]] extend; and the person charged with the execution of such warrant [[!shall]] then search or inspect only the place or part so specified.
(3) Nothing contained in this section [[!shall]] authorise any Magistrate other than a District Magistrate or Chief Judicial Magistrate to grant a warrant to search for a document, parcel or other thing in the custody of the postal authority."
:::

::: proviso Section 97 — Search of place suspected to contain stolen property, forged documents, etc.
"97. (1) If a District Magistrate, Sub-divisional Magistrate or Magistrate of the first class, upon information and after such inquiry as he thinks necessary, has reason to believe that any place is used for the deposit or sale of stolen property, or for the deposit, sale or production of any objectionable article to which this section applies, or that any such objectionable article is deposited in any place, he [[?may]] by warrant authorise any police officer above the rank of a constable—
(a) to enter, with such assistance as may be required, such place;
(b) to search the same in the manner specified in the warrant;
(c) to take possession of any property or article therein found which he reasonably suspects to be stolen property or objectionable article to which this section applies;
(d) to convey such property or article before a Magistrate, or to guard the same on the spot until the offender is taken before a Magistrate, or otherwise to dispose of it in some place of safety;
(e) to take into custody and carry before a Magistrate every person found in such place who appears to have been privy to the deposit, sale or production of any such property or article knowing or having reasonable cause to suspect it to be stolen property or, as the case may be, objectionable article to which this section applies.
(2) The objectionable articles to which this section applies are—
(a) counterfeit coin;
(b) pieces of metal made in contravention of the Coinage Act, 2011, or brought into India in contravention of any notification for the time being in force issued under section 11 of the Customs Act, 1962;
(c) counterfeit currency note; counterfeit stamps;
(d) forged documents;
(e) false seals;
(f) obscene objects referred to in section 294 of the Bharatiya Nyaya Sanhita, 2023;
(g) instruments or materials used for the production of any of the articles mentioned in clauses (a) to (f)."
:::

### How this actually runs

<MicroTree
  input="A Court or Magistrate is deciding whether to move past a section 94 summons to a search-warrant, and if so, under which of the two warrant powers in this cluster."
  :gates="[
    { q: 'Is the target simply a document or thing already sought under section 94 or section 95, where the holder will not comply, the holder is unknown, or a general search would serve the proceeding better?', no: 'Move to the next gate to check whether section 97 rather than section 96 is the applicable power' },
    { q: 'If section 96 applies, has the Court specified a particular place or part of a place to which the search or inspection is confined?', no: 'The person executing the warrant may search or inspect only the place or part so specified once the Court has made that choice; absent such a specification the warrant runs more broadly' },
    { q: 'Is the target instead a place reasonably believed to hold stolen property, or one of the seven defined categories of objectionable article -- counterfeit coin, contraband metal, counterfeit currency or stamps, forged documents, false seals, obscene objects, or the tools to make any of these?', no: 'Section 97 does not apply; any warrant must be sought instead under section 96 or another appropriate power' },
    { q: 'Is the authorising officer a District Magistrate, Sub-divisional Magistrate, or Magistrate of the first class, and is the executing officer above the rank of constable?', no: 'A section 97 warrant cannot be validly issued or executed outside this specific seniority band on both sides' }
  ]"
  result="Section 96 is the general search-warrant power, triggered by non-compliance, an unknown holder, or the needs of a general search, and confinable to a specified place. Section 97 is a specialised, more powerful warrant reaching stolen property and seven defined categories of objectionable article, but only when both the authorising Magistrate and the executing officer meet the seniority thresholds the section itself fixes."
  resultKind="discretionary"
  caveat="Section 96(3) carves out postal custody from every Magistrate except a District Magistrate or Chief Judicial Magistrate -- a warrant to search for something in the custody of the postal authority issued by any more junior Magistrate is outside the section entirely, regardless of how strong the grounds otherwise are."
/>

### In plain English

Section 96 is the pressure valve for section 94: if a summons was never going to work, or nobody knows who has the thing, or the case genuinely needs a general search, the Court does not have to go through the motions of a doomed summons first — it can go straight to a warrant. The Court also gets to decide how wide the net is cast, right down to a single room if that is all that is justified. Section 97 is a different animal altogether — a specialised warrant built for classic "raid" scenarios involving stolen goods or a closed list of contraband items, and it comes with real teeth: seizure of the property, custody of suspects found on the spot, and the option to guard the scene rather than move everything immediately. The seniority requirements on both the authorising Magistrate and the executing officer are not incidental — they are the section's built-in check against this more intrusive power being used casually.

### What changed from the CrPC

::: info Verify before citing
Sections 96 and 97 are provisionally mapped to CrPC sections 93 and 94 respectively (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The three triggering grounds in section 96(1), the power to confine the warrant to a specified place in section 96(2), and the postal-custody carve-out in section 96(3) all track the presumed CrPC structure closely. Section 97's seven-category list of objectionable articles, including the cross-references to the Coinage Act, 2011, the Customs Act, 1962, and section 294 of the Bharatiya Nyaya Sanhita, 2023, uses updated statute names and BNS cross-references in place of whatever the CrPC-era equivalents were — each cross-reference should be independently confirmed rather than assumed to carry over unchanged.

### Test your instinct

:::: instinct A Magistrate of the first class issues a warrant under section 97 to search a shop believed to be selling counterfeit currency, and directs a head constable to execute it. Is the warrant validly executed?

::: ruling No. Section 97(1) authorises the Magistrate to direct the warrant to "any police officer above the rank of a constable." A head constable, depending on the force's rank structure, may or may not clear that threshold, and if the rank in question is at or below constable, the execution is outside the section regardless of how sound the underlying suspicion was.
:::
::::

:::: instinct A Sub-divisional Magistrate issues a section 96 warrant to search for a parcel believed to be in the custody of the postal authority. Is the warrant valid?

::: ruling No. Section 96(3) expressly reserves the power to grant a warrant to search for anything in postal custody to a District Magistrate or Chief Judicial Magistrate alone. A Sub-divisional Magistrate has no power to issue that particular warrant, however strong the reason to believe.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 96–97 of the BNSS is cited here, given the recency of the numbering. The extensive CrPC case law on search-warrant thresholds and the stolen-property/objectionable-article warrant under the presumed predecessor sections remains conceptually relevant but must be independently re-verified before being pleaded.
:::

#### Sword and shield

As a sword, section 97 gives the investigating side a single warrant that combines search, seizure, and the power to take suspects into custody on the spot — a materially stronger tool than a bare section 96 search-warrant. As a shield, the defence's most direct attack on a section 97 seizure is the seniority chain on both ends: if the authorising Magistrate falls outside the District Magistrate/Sub-divisional Magistrate/first-class Magistrate band, or the executing officer is at or below the rank of constable, the warrant and everything seized under it is open to challenge on that ground alone, independent of the merits of the underlying suspicion.

#### The limitation clock

Neither section fixes its own limitation period; both operate within the timelines of the investigation, inquiry, or trial they serve, and a stale warrant application should be tested against how current the "reason to believe" actually is at the time the warrant is sought.

#### Interlocking matrix

Section 96 interlocks with sections 94 and 95 as the escalation path when those provisions fail or are inapt. Section 97 interlocks with sections 102 to 105 later in this Chapter, which fix the general mechanics — witnesses, closed-place procedure, mandatory audio-video recording — that govern how any warrant issued under section 96 or 97 must actually be executed.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

An application for a section 96 warrant should affirmatively address which of the three triggering grounds in section 96(1) is relied on — a vague recitation that a summons "would not succeed" invites rejection where the record does not support it. For a section 97 warrant, the drafting trap is treating the objectionable-article list in section 97(2) as illustrative rather than closed — it is a defined, exhaustive list, and an application built around an article outside the seven categories should be routed through section 96 instead. Defence counsel reviewing a section 97 seizure should always check the rank of both the authorising Magistrate and the executing officer as a threshold matter, before engaging with the substance of the seizure at all.

## Sections 98–99 — Forfeiting a publication by government notification, and the High Court's power to undo it

### The dispute this solves

::: oneminute Section 98 gives the State Government a notification-based power to declare an entire issue of a newspaper, or a book or other document, forfeited to Government, where it appears to contain matter punishable under a defined set of Bharatiya Nyaya Sanhita offences touching sedition-adjacent speech, obscenity, and similar categories. Once notified, any police officer may seize every copy found anywhere in India, and a Magistrate may authorise a search for further copies. This is a serious, extrajudicial-in-the-first-instance power, and section 98(3) makes clear it cannot be questioned in any ordinary court proceeding — the only route to challenge it is section 99. Section 99 gives anyone with an interest in the forfeited material two months from the Official Gazette notification to apply directly to the High Court to set the declaration aside, on the ground that the material simply did not contain the matter the notification says it did. The application is heard by a Special Bench of three Judges (or the whole High Court, if it has fewer than three), the material itself can be put in evidence, and the High Court must set the forfeiture aside if it is not satisfied the offending matter was actually present.
:::

::: story A book declared forfeited, and the publisher's challenge
The State Government, satisfied on stated grounds that a book contains matter punishable under section 196 of the Bharatiya Nyaya Sanhita, 2023, issues a notification under section 98(1) declaring every copy forfeited to Government. Police officers across the State begin seizing copies from bookshops, and a Magistrate authorises a sub-inspector to search a warehouse believed to be holding further stock. The publisher, within two months of the Gazette notification, applies to the High Court under section 99(1) to set the declaration aside, contending the book contains no such matter. A Special Bench of three Judges hears the application, receives a copy of the book in evidence, and — not being satisfied the offending matter is present — sets the declaration of forfeiture aside under section 99(4).
:::

### The Act, decompiled

::: proviso Section 98 — Power to declare certain publications forfeited and to issue search-warrants for same
"98. (1) Where—
(a) any newspaper, or book; or
(b) any document,
wherever printed, appears to the State Government to contain any matter the publication of which is punishable under section 152 or section 196 or section 197 or section 294 or section 295 or section 299 of the Bharatiya Nyaya Sanhita, 2023, the State Government [[?may]], by notification, stating the grounds of its opinion, declare every copy of the issue of the newspaper containing such matter, and every copy of such book or other document to be forfeited to Government, and thereupon any police officer [[?may]] seize the same wherever found in India and any Magistrate [[?may]] by warrant authorise any police officer not below the rank of sub-inspector to enter upon and search for the same in any premises where any copy of such issue, or any such book or other document may be or may be reasonably suspected to be.
(2) In this section and in section 99,—
(a) 'newspaper' and 'book' have the same meanings as in the Press and Registration of Books Act, 1867;
(b) 'document' includes any painting, drawing or photograph, or other visible representation.
(3) No order passed or action taken under this section [[!shall]] be called in question in any Court otherwise than in accordance with the provisions of section 99."
:::

::: proviso Section 99 — Application to High Court to set aside declaration of forfeiture
"99. (1) Any person having any interest in any newspaper, book or other document, in respect of which a declaration of forfeiture has been made under section 98, [[?may]], within two months from the date of publication in the Official Gazette of such declaration, apply to the High Court to set aside such declaration on the ground that the issue of the newspaper, or the book or other document, in respect of which the declaration was made, did not contain any such matter as is referred to in sub-section (1) of section 98.
(2) Every such application [[!shall]], where the High Court consists of three or more Judges, be heard and determined by a Special Bench of the High Court composed of three Judges and where the High Court consists of less than three Judges, such Special Bench [[!shall]] be composed of all the Judges of that High Court.
(3) On the hearing of any such application with reference to any newspaper, any copy of such newspaper [[?may]] be given in evidence in aid of the proof of the nature or tendency of the words, signs or visible representations contained in such newspaper, in respect of which the declaration of forfeiture was made.
(4) The High Court [[!shall]], if it is not satisfied that the issue of the newspaper, or the book or other document, in respect of which the application has been made, contained any such matter as is referred to in sub-section (1) of section 98, set aside the declaration of forfeiture.
(5) Where there is a difference of opinion among the Judges forming the Special Bench, the decision [[!shall]] be in accordance with the opinion of the majority of those Judges."
:::

### How this actually runs

<MicroTree
  input="A newspaper, book, or document has been declared forfeited by State Government notification, and a person with an interest in it wants to know whether and how that declaration can be challenged."
  :gates="[
    { q: 'Was the declaration made under section 98(1), naming a Bharatiya Nyaya Sanhita provision from the defined list as the ground for the opinion that the material is punishable?', no: 'A declaration made outside section 98(1) proper -- for instance without stating the grounds of opinion -- is itself open to challenge on that footing' },
    { q: 'Is the applicant seeking to challenge the declaration through an ordinary civil or criminal proceeding rather than a direct application to the High Court under section 99?', no: 'That route is barred outright; section 98(3) permits no challenge to a forfeiture declaration except through section 99' },
    { q: 'Has the application to the High Court been filed within two months of the Official Gazette publication of the declaration?', no: 'An application filed after the two-month window falls outside section 99(1) and is liable to be rejected as out of time' },
    { q: 'Is the High Court, having heard the Special Bench, satisfied that the material did contain the matter referred to in section 98(1)?', no: 'The High Court must set the declaration of forfeiture aside under section 99(4)' }
  ]"
  result="A section 98 forfeiture can be attacked only through a section 99 application to the High Court, filed within two months of Gazette publication, heard by a three-Judge Special Bench or the whole High Court if smaller, and the declaration must be set aside unless the High Court is affirmatively satisfied the offending matter was actually present."
  resultKind="mandatory"
  caveat="Section 99(2) fixes the Bench composition as a matter of structure, not discretion -- a High Court with three or more Judges must constitute a three-Judge Special Bench, and there is no single-Judge or Division Bench route around this for a section 99 application."
/>

### In plain English

Section 98 is a rare instance of the executive, not a court, ordering an entire publication seized and forfeited nationwide, on the strength of its own stated opinion. That is precisely why section 99 exists as a tightly engineered check: a fast two-month window to challenge it, a heavyweight three-Judge bench so no single judge's view controls, and a default rule that favours the publisher — if the High Court is not affirmatively satisfied the offending matter was present, the forfeiture falls. The bar on questioning a forfeiture "otherwise than in accordance with section 99" is a jurisdictional fence: there is no writ-petition-as-first-resort, no civil suit, no criminal-court collateral challenge — section 99 is the only door.

### What changed from the CrPC

::: info Verify before citing
Sections 98 and 99 are provisionally mapped to CrPC sections 95 and 96 respectively (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing. The cross-referenced offence sections — 152, 196, 197, 294, 295, and 299 of the Bharatiya Nyaya Sanhita, 2023 — replace whatever the equivalent Indian Penal Code sections were under the CrPC scheme, and each must be independently confirmed rather than assumed to correspond numerically.
:::

The two-stage structure — executive forfeiture followed by a High Court challenge on a fixed timeline, heard by a Special Bench — tracks the presumed CrPC scheme closely in form. The substantive question of exactly which BNS offences trigger section 98(1) is the piece most likely to have shifted, since it depends entirely on how the BNS renumbered and possibly redrafted the underlying offences from the Indian Penal Code.

### Test your instinct

:::: instinct A person with no ownership interest in a forfeited book, but who simply wishes to read it, applies to the High Court under section 99 to set aside the forfeiture. Is the application maintainable?

::: ruling This turns on whether the applicant has "any interest" in the book within the meaning of section 99(1). A reader with no ownership, custodial, publishing, or similar interest is unlikely to meet that threshold on the ordinary meaning of the words, though the precise contours of "interest" for this purpose would need to be tested against the specific facts and any guiding authority.
:::
::::

:::: instinct A publisher applies to the High Court under section 99 four months after the Official Gazette notification, explaining that the delay was because the publisher was unaware of the notification until recently. Does section 99 allow the High Court to condone the delay?

::: ruling The text of section 99(1) fixes a hard two-month window from the date of Gazette publication, with no express provision for condonation of delay within the section itself. Whether a general condonation power from elsewhere could apply is a separate question that should not be assumed in the publisher's favour — the safer course is always to file within the two months and treat the window as effectively non-extendable absent clear authority otherwise.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 98–99 of the BNSS is cited here, given the recency of the numbering. The CrPC's own case law on publication-forfeiture challenges under the presumed predecessor sections remains conceptually relevant but must be independently re-verified against the BNSS renumbering before being pleaded.
:::

#### Sword and shield

As a sword for the State, section 98 is a uniquely powerful pre-emptive tool — nationwide seizure on the strength of a notification, with no prior court hearing required. As a shield for a publisher, section 99 is the entire defence: the two-month window must never be missed, and the default rule that favours the publisher if the High Court is not affirmatively satisfied should be argued for directly rather than assuming the burden sits with the applicant to disprove the State's opinion.

#### The limitation clock

Two months from the date of publication of the forfeiture declaration in the Official Gazette, running under section 99(1) — not from the date of seizure, not from the date the affected person became aware of it, but from Gazette publication itself.

#### Interlocking matrix

Section 98(1)'s list of triggering offences interlocks with sections 152, 196, 197, 294, 295, and 299 of the Bharatiya Nyaya Sanhita, 2023 — a challenge to a forfeiture should always test whether the notified matter genuinely falls within one of those six named provisions, not merely within the general vicinity of "objectionable content." Section 99(1)'s definitions cross-reference the Press and Registration of Books Act, 1867 for what counts as a "newspaper" or "book."

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

Track the Official Gazette date, not the seizure date, as the trigger for the two-month clock — a section 99 application drafted around the wrong triggering date risks being time-barred on a technicality that has nothing to do with the merits. Because section 99(3) allows a copy of the newspaper itself to be put in evidence, the application should be filed with the actual material annexed wherever possible, rather than relying on a description of its contents — the High Court's satisfaction under section 99(4) turns on what the material actually says, not on characterisations of it.

## Sections 100–101 — Search-warrants for a wrongfully confined person, and the summary order restoring an abducted woman or child

### The dispute this solves

::: oneminute Sections 96 and 97 are about things; section 100 is about a person. Where a District Magistrate, Sub-divisional Magistrate, or Magistrate of the first class has reason to believe someone is confined under circumstances amounting to an offence, section 100 lets that Magistrate issue a search-warrant for the person, not the property — and once found, the person must be brought immediately before a Magistrate, who makes whatever order the circumstances warrant. Section 101 is narrower and more urgent still: on a sworn complaint that a woman, or a female child, has been abducted or unlawfully detained for an unlawful purpose, the same tier of Magistrate can order her immediate restoration — to her own liberty, or to the parent, guardian, or lawful custodian of the child — and can use whatever force is necessary to make that order stick. Neither provision waits for a trial; both are designed to get a person out of an unlawful confinement as fast as the machinery allows.
:::

::: story A locked room, and a complaint on oath
A Magistrate of the first class receives credible information that a person is being kept locked in a room under circumstances that amount to wrongful confinement, an offence. Rather than waiting for a formal charge to be framed, the Magistrate issues a search-warrant under section 100 directly for the person. The warrant is executed, the person is found and immediately produced before the Magistrate, who directs medical attention and release into the custody of a family member pending further proceedings. In a separate case, a father files a sworn complaint that his minor daughter has been abducted for an unlawful purpose. A District Magistrate, satisfied on the complaint, orders her immediate restoration to the father under section 101, and directs the police to use whatever force is necessary to recover her and give effect to the order.
:::

### The Act, decompiled

::: proviso Section 100 — Search for persons wrongfully confined
"100. If any District Magistrate, Sub-divisional Magistrate or Magistrate of the first class has reason to believe that any person is confined under such circumstances that the confinement amounts to an offence, he [[?may]] issue a search-warrant, and the person to whom such warrant is directed [[?may]] search for the person so confined; and such search [[!shall]] be made in accordance therewith, and the person, if found, [[!shall]] be immediately taken before a Magistrate, who [[!shall]] make such order as in the circumstances of the case seems proper."
:::

::: proviso Section 101 — Power to compel restoration of abducted females
"101. Upon complaint made on oath of the abduction or unlawful detention of a woman, or a female child for any unlawful purpose, a District Magistrate, Sub-divisional Magistrate or Magistrate of the first class [[?may]] make an order for the immediate restoration of such woman to her liberty, or of such female child to her parent, guardian or other person having the lawful charge of such child, and [[?may]] compel compliance with such order, using such force as may be necessary."
:::

### How this actually runs

<MicroTree
  input="A Magistrate is asked to intervene urgently on behalf of a confined or abducted person, and needs to determine which of the two summary powers in this cluster applies."
  :gates="[
    { q: 'Is the concern that a specific, identified person is being confined under circumstances amounting to an offence, rather than a complaint specifically about abduction or unlawful detention of a woman or female child?', no: 'Move to the next gate to check whether section 101 rather than section 100 is the applicable power' },
    { q: 'If section 100 applies, is the Magistrate a District Magistrate, Sub-divisional Magistrate, or Magistrate of the first class with reason to believe the confinement amounts to an offence?', no: 'A Magistrate outside this seniority band, or one without the requisite reason to believe, cannot validly issue a section 100 search-warrant' },
    { q: 'Is there instead a complaint made on oath alleging abduction or unlawful detention of a woman or a female child for an unlawful purpose?', no: 'Section 101 does not apply; a complaint that does not meet this description falls outside the section regardless of its urgency' },
    { q: 'Once restoration is ordered under section 101, or the confined person is produced under section 100, does the matter require an order suited to the circumstances -- release, medical attention, custody directions, or further proceedings?', no: 'The Magistrate proceeds to make whatever order the circumstances of the case require' }
  ]"
  result="Section 100 is the general power to search for and recover any wrongfully confined person, ending in production before a Magistrate for whatever order is proper. Section 101 is a narrower, sworn-complaint-triggered power specific to abducted or unlawfully detained women and female children, ending directly in an order of restoration, enforceable with necessary force."
  resultKind="discretionary"
  caveat="Section 101 requires the complaint to be made on oath -- an unsworn report or a bare allegation, however credible it may seem, does not by itself meet the section's precondition for an order of restoration."
/>

### In plain English

Both provisions exist because ordinary criminal process — investigate, chargesheet, trial — is too slow for someone who is unlawfully locked up right now. Section 100 is the general-purpose version: any wrongful confinement, recovered by warrant, ending in the person being placed before a Magistrate who then decides what happens next. Section 101 is more specific and more direct — it does not stop at production before a Magistrate, it goes straight to an order restoring the woman or child, and it comes with an explicit power to use necessary force to make that restoration actually happen, rather than leaving enforcement to a separate step.

### What changed from the CrPC

::: info Verify before citing
Sections 100 and 101 are provisionally mapped to CrPC sections 97 and 98 respectively (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

Both provisions read as carrying over the presumed CrPC scheme largely unchanged in substance — the seniority band of Magistrate, the "reason to believe" standard for section 100, and the sworn-complaint precondition and force-enabling language for section 101 all track what is understood to be the predecessor structure. As with every chapter in this Sanhita, the section numbers themselves are the renumbering that must be verified.

### Test your instinct

:::: instinct A Magistrate of the first class issues a search-warrant under section 100 based on an anonymous tip, without forming any independent view on whether the confinement amounts to an offence. Is the warrant validly issued?

::: ruling This is doubtful. Section 100 requires the Magistrate to have "reason to believe" that the confinement amounts to an offence -- a standard that calls for the Magistrate's own assessment of the material, not a mechanical acceptance of an anonymous tip without more. A warrant issued without any independent reason to believe is vulnerable to challenge on that ground.
:::
::::

:::: instinct A mother, rather than the child's father, files a sworn complaint under section 101 alleging her daughter has been abducted for an unlawful purpose, and seeks an order restoring the child to herself as guardian. Can the Magistrate make that order?

::: ruling Yes, in principle. Section 101 directs restoration of a female child "to her parent, guardian or other person having the lawful charge of such child" -- it is not limited to the father, and a mother with lawful charge of the child is squarely within the category of person to whom restoration may be ordered, subject of course to the Magistrate being satisfied on the complaint itself.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 100–101 of the BNSS is cited here, given the recency of the numbering. The CrPC's body of case law on habeas-style search-warrants for confined persons and on the restoration power for abducted women and children under the presumed predecessor sections remains conceptually relevant but must be independently re-verified before being pleaded.
:::

#### Sword and shield

As a sword, section 101 is markedly faster than pursuing a habeas corpus petition in the High Court — a sworn complaint before a Magistrate of the first class, rather than a full constitutional writ, can produce an immediate restoration order. As a shield, a respondent resisting a section 101 order should test whether the complaint was genuinely made on oath and whether it actually alleges an unlawful purpose, since the section does not reach every custody dispute — only abduction or unlawful detention for an unlawful purpose.

#### The limitation clock

Neither section fixes a limitation period; both are urgency-driven remedies meant to be invoked as soon as the confinement, abduction, or unlawful detention comes to light, and delay in seeking either remedy is more likely to affect the Magistrate's assessment of the facts than to trigger any formal bar.

#### Interlocking matrix

Section 100 interlocks with the general search-execution provisions in sections 102 to 105 of this Chapter, which govern how any warrant issued under it must actually be carried out. Section 101's restoration order interlocks with the substantive offences of kidnapping and abduction under the Bharatiya Nyaya Sanhita, 2023, which will typically also be under investigation in parallel once a restoration order is made.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

A section 100 application should set out, with specificity, the material forming the basis for the Magistrate's "reason to believe" — bare suspicion or an unattributed tip, standing alone, weakens the warrant against later challenge. A section 101 complaint should be drafted and sworn with care to track the section's own language — alleging abduction or unlawful detention "for any unlawful purpose" — since a complaint that reads more like an ordinary custody dispute risks being treated as outside the section's intended scope.

## Sections 102–105 — How every search-warrant under this Chapter is actually executed, witnessed, and now, filmed

### The dispute this solves

::: oneminute Sections 96 to 101 create the various warrants; sections 102 to 105 are the shared machinery that governs how any of them are actually carried out. Section 102 borrows a cluster of provisions from elsewhere in the Sanhita — on arrest-warrant direction, endorsement, and execution mechanics — and applies them, so far as may be, to every search-warrant issued under sections 96, 97, 98, or 100. Section 103 is the granular, on-the-ground procedure: an occupant of a closed place must allow entry and afford reasonable facilities once the warrant is shown; if entry cannot be obtained, the forcible-entry procedure elsewhere in the Sanhita applies; a person reasonably suspected of concealing an article may be searched, and a woman may only be searched by another woman, with strict regard to decency; two or more independent, respectable local witnesses must be called to witness the search, and the list of seized items must be prepared and signed in their presence; the occupant must be allowed to attend, and gets a copy of the list; and anyone who, without reasonable cause, refuses to witness a search when validly called upon commits an offence under the Bharatiya Nyaya Sanhita. Section 104 fixes what happens when a search executed outside the issuing Court's jurisdiction turns something up — it generally goes back to the issuing Court, unless a nearer Magistrate's jurisdiction makes more sense, subject to that Magistrate's own order. Section 105 is the newest and most consequential addition: the entire process of searching and seizing under this Chapter, or under section 185, including preparing and signing the seizure list, must now be recorded through audio-video electronic means, preferably a mobile phone, and the recording must be forwarded without delay to a District Magistrate, Sub-divisional Magistrate, or Judicial Magistrate of the first class.
:::

::: story A search that goes wrong without independent witnesses, and one that is filmed start to finish
Police executing a section 97 warrant search a house without calling any independent witnesses, relying instead only on their own personnel to draw up the seizure list. When the seizure is challenged, the absence of the two independent, respectable local witnesses required by section 103(4) becomes the central point of attack, since the section does not treat their presence as optional. In a properly executed search under the same Chapter, by contrast, the executing officer calls two independent local residents to witness the search, prepares and signs the seizure list in their presence, gives the occupant a copy, and — because section 105 now applies — records the entire process on a mobile phone and forwards the recording without delay to the Judicial Magistrate of the first class, closing off exactly the kind of after-the-fact dispute the first search invited.
:::

### The Act, decompiled

::: proviso Section 102 — Direction, etc., of search-warrants
"102. The provisions of sections 32, 72, 74, 76, 79, 80 and 81 [[!shall]], so far as may be, apply to all search-warrants issued under section 96, section 97, section 98 or section 100."
:::

::: proviso Section 103 — Persons in charge of closed place to allow search
"103. (1) Whenever any place liable to search or inspection under this Chapter is closed, any person residing in, or being in charge of, such place, [[!shall]], on demand of the officer or other person executing the warrant, and on production of the warrant, allow him free ingress thereto, and afford all reasonable facilities for a search therein.
(2) If ingress into such place cannot be so obtained, the officer or other person executing the warrant [[?may]] proceed in the manner provided by sub-section (2) of section 44.
(3) Where any person in or about such place is reasonably suspected of concealing about his person any article for which search should be made, such person [[?may]] be searched and if such person is a woman, the search [[!shall]] be made by another woman with strict regard to decency.
(4) Before making a search under this Chapter, the officer or other person about to make it [[!shall]] call upon two or more independent and respectable inhabitants of the locality in which the place to be searched is situate or of any other locality if no such inhabitant of the said locality is available or is willing to be a witness to the search, to attend and witness the search and [[?may]] issue an order in writing to them or any of them so to do.
(5) The search [[!shall]] be made in their presence, and a list of all things seized in the course of such search and of the places in which they are respectively found [[!shall]] be prepared by such officer or other person and signed by such witnesses; but no person witnessing a search under this section [[!shall]] be required to attend the Court as a witness of the search unless specially summoned by it.
(6) The occupant of the place searched, or some person in his behalf, [[!shall]], in every instance, be permitted to attend during the search, and a copy of the list prepared under this section, signed by the said witnesses, [[!shall]] be delivered to such occupant or person.
(7) When any person is searched under sub-section (3), a list of all things taken possession of [[!shall]] be prepared, and a copy thereof [[!shall]] be delivered to such person.
(8) Any person who, without reasonable cause, refuses or neglects to attend and witness a search under this section, when called upon to do so by an order in writing delivered or tendered to him, [[!shall]] be deemed to have committed an offence under section 222 of the Bharatiya Nyaya Sanhita, 2023."
:::

::: proviso Section 104 — Disposal of things found in search beyond jurisdiction
"104. When, in the execution of a search-warrant at any place beyond the local jurisdiction of the Court which issued the same, any of the things for which search is made, are found, such things, together with the list of the same prepared under the provisions hereinafter contained, [[!shall]] be immediately taken before the Court issuing the warrant, unless such place is nearer to the Magistrate having jurisdiction therein than to such Court, in which case the list and things [[!shall]] be immediately taken before such Magistrate; and, unless there be good cause to the contrary, such Magistrate [[!shall]] make an order authorising them to be taken to such Court."
:::

::: proviso Section 105 — Recording of search and seizure through audio-video electronic means
"105. The process of conducting search of a place or taking possession of any property, article or thing under this Chapter or under section 185, including preparation of the list of all things seized in the course of such search and seizure and signing of such list by witnesses, [[!shall]] be recorded through any audio-video electronic means preferably mobile phone and the police officer [[!shall]] without delay forward such recording to the District Magistrate, Sub-divisional Magistrate or Judicial Magistrate of the first class."
:::

### How this actually runs

<MicroTree
  input="A search-warrant issued under sections 96, 97, 98, or 100 is being executed, and the executing officer needs to know the mandatory mechanics that govern the search itself."
  :gates="[
    { q: 'Is the place to be searched closed, requiring the officer to demand ingress and produce the warrant before entry?', no: 'Move to the next gate; the search proceeds on the general terms of section 103 without an ingress dispute' },
    { q: 'Have two or more independent and respectable local witnesses been called to attend and witness the search before it begins?', no: 'The search should not proceed without first calling such witnesses; their presence is not a discretionary courtesy under section 103(4)' },
    { q: 'Is the seizure list being prepared and signed by those witnesses in their presence, with a copy delivered to the occupant?', no: 'Section 103(5) and (6) require exactly this before the search can be treated as properly documented' },
    { q: 'Is the entire process -- search, seizure, list preparation, and witness signing -- being recorded through audio-video electronic means, preferably a mobile phone, and forwarded without delay to a District Magistrate, Sub-divisional Magistrate, or Judicial Magistrate of the first class?', no: 'Section 105 treats this recording and forwarding as mandatory, not optional, for every search and seizure under this Chapter or section 185' }
  ]"
  result="A lawful search under this Chapter requires proper demand for ingress at a closed place, two or more independent local witnesses called before the search begins, a seizure list prepared and signed in their presence with a copy to the occupant, and the whole process captured on audio-video and forwarded without delay to a specified Magistrate."
  resultKind="mandatory"
  caveat="Section 103(8) is not a mere procedural nicety -- a person who, without reasonable cause, refuses or neglects to attend and witness a validly called search commits a distinct offence under section 222 of the Bharatiya Nyaya Sanhita, 2023, which gives the witness-calling requirement real teeth."
/>

### In plain English

This cluster is the fine print that decides whether a search-warrant, once issued, actually produces evidence a court can rely on. Section 102 saves the drafters from repeating the arrest-warrant mechanics all over again by simply borrowing them. Section 103 is where most real-world search disputes actually live — did the officer properly demand entry, were genuinely independent local witnesses called, was the seizure list signed in their presence, did the occupant get a copy. Section 104 is a housekeeping rule for searches that wander outside the issuing court's jurisdiction, sending the haul to whichever authority makes more practical sense. Section 105 is the headline reform in this cluster: mandatory videography of the entire search-and-seizure process, on a mobile phone if nothing else is available, forwarded promptly to a named tier of Magistrate. It is designed to do for searches what body-camera footage does elsewhere — remove the swearing contest between the officer's account and the occupant's, by putting the whole thing on video.

### What changed from the CrPC

::: info Verify before citing
Sections 102, 103, and 104 are provisionally mapped to CrPC sections 99, 100, and 101 respectively (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing. Section 105's mandatory audio-video recording requirement for every search and seizure is widely understood to be a genuine BNSS-era reform with no direct CrPC section 91-105 analogue, reflecting the broader push toward mandatory videography of search, seizure, and related procedures across the new Sanhita — but the precise scope and enforcement mechanism should still be verified against the bare-act text rather than assumed from general reporting.
:::

Sections 102 to 104 read as carrying over the presumed CrPC mechanics for search-warrant execution largely intact, including the closed-place entry procedure, the independent-witness requirement, and the beyond-jurisdiction disposal rule. Section 105 is the standout change in this cluster — a freestanding, chapter-wide mandatory recording obligation that did not exist in this form under the CrPC, and its interaction with section 185 (a cross-reference that itself needs to be independently verified) should be checked carefully before relying on the recording requirement's exact scope.

### Test your instinct

:::: instinct During a search, the executing officer cannot get any independent local resident willing to act as a witness, so the officer proceeds with only departmental colleagues present. Does this breach section 103(4)?

::: ruling Not necessarily, but the officer must follow the section precisely. Section 103(4) allows witnesses to be drawn "of any other locality if no such inhabitant of the said locality is available or is willing to be a witness" — the officer is not stuck if local residents genuinely refuse, but must actually attempt to secure independent witnesses from elsewhere before falling back on departmental personnel alone, and the record should reflect that attempt.
:::
::::

:::: instinct A police officer executes a search and seizure under this Chapter but only begins recording after the seizure list has already been prepared and signed, capturing just the final handover of items. Does this comply with section 105?

::: ruling No. Section 105 requires the recording to cover "the process of conducting search of a place or taking possession of any property, article or thing," including "preparation of the list of all things seized" and "signing of such list by witnesses" — recording only the final handover, after the list is already prepared and signed, falls short of the process the section requires to be captured.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 102–105 of the BNSS is cited here, given the recency of the numbering. The CrPC's substantial body of case law on independent-witness requirements and search-execution mechanics under the presumed predecessor sections remains conceptually relevant, and early High Court decisions on section 105's mandatory-videography requirement should be actively watched for as they emerge, but nothing is promoted here without independent verification.
:::

#### Sword and shield

As a shield, the defence's strongest and most reliable attack on any search under this Chapter is a section 103(4) witness challenge — genuinely independent, respectable local witnesses either were not called at all, or were not truly independent, or did not actually witness what the seizure list claims they witnessed. As the videography requirement in section 105 matures in practice, it is likely to become an equally powerful sword for the defence in the opposite direction — a missing or incomplete recording, once expected as standard practice, invites the same kind of adverse inference that a missing CCTV recording invites elsewhere.

#### The limitation clock

None of these four sections fixes its own limitation period; section 105 does impose an operational deadline of its own kind — the recording must be forwarded "without delay" to the specified Magistrate, and what counts as delay in a given case is a fact-specific question worth pinning down early through the case diary or seizure record.

#### Interlocking matrix

Section 102 interlocks with sections 32, 72, 74, 76, 79, 80, and 81 of this Sanhita, borrowing their arrest-warrant-adjacent mechanics wholesale — each of those sections should be checked directly when a dispute turns on how a search-warrant was directed or endorsed. Section 103(8)'s offence for refusing to witness a search interlocks with section 222 of the Bharatiya Nyaya Sanhita, 2023. Section 105 interlocks with section 185 of this Sanhita, which should be read alongside it to fix the full scope of what must be recorded.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

For the prosecution, the single most avoidable defect in a search-and-seizure case is skipping or shortcutting the independent-witness requirement in section 103(4) — it should be treated as non-negotiable, with the witnesses' independence and locality documented on the seizure list itself. For the defence, cross-examination of the seizure witnesses on how they came to be called, whether they were genuinely independent, and whether the section 105 recording actually exists and covers the full process, is now a standard and often decisive line of attack. Investigating officers should treat section 105 compliance as part of the seizure record itself, not an afterthought — forwarding the recording "without delay" to the correct tier of Magistrate, and noting that forwarding in the case diary, closes off later arguments that the recording was fabricated after the fact or never properly transmitted.

## Sections 106–107 — A police officer's on-the-spot seizure power, and the court-supervised attachment of proceeds of crime

### The dispute this solves

::: oneminute Section 106 is deliberately broad and fast: any police officer may seize property alleged or suspected to be stolen, or found under circumstances creating suspicion of an offence — no warrant, no prior court order. What follows is a chain of reporting and disposal safeguards: a subordinate officer must report the seizure up the line, every seizing officer must report it to the Magistrate having jurisdiction, and where transport or storage of the property is impractical, or continued police custody is not necessary for the investigation, custody can be handed to a person on a bond to produce it as and when the Court requires. A special proviso lets rapidly perishable property below five hundred rupees in value be auctioned immediately under the Superintendent of Police's orders, with the sale proceeds standing in for the property itself. Section 107 is a different, far more structured power aimed specifically at proceeds of crime — property a police officer believes, in the course of investigation, is derived directly or indirectly from criminal activity. With the Superintendent's or Commissioner's approval, the officer applies to the Court or Magistrate with jurisdiction for attachment; the Court issues a show-cause notice giving the person fourteen days to explain, with notice also going to anyone else shown as holding the property on that person's behalf; after hearing the explanation, the Court may order attachment of whatever is found to be proceeds of crime, and may proceed ex parte if the person does not appear within the fourteen days, or even dispense with notice altogether, by an ex parte interim order, if notice itself would defeat the purpose of the attachment. Once property is confirmed as proceeds of crime, the District Magistrate distributes it rateably to those affected by the crime within sixty days, with any unclaimed or surplus proceeds forfeited to Government.
:::

::: story An officer seizing suspicious goods on the spot, and a court freezing the profits of a fraud
A police officer on patrol finds goods under circumstances that create suspicion they were stolen. The officer seizes them on the spot under section 106(1) without waiting for a warrant, reports the seizure to the officer in charge of the station, and separately reports it to the Magistrate having jurisdiction; because the goods cannot conveniently be transported to the Court and continued police custody is not necessary for the investigation, custody is handed to a bailee on a bond to produce them as required. In a separate, larger investigation, an officer investigating a financial fraud forms reason to believe that a bank account holds funds directly traceable to the offence. With the Superintendent of Police's approval, the officer applies under section 107(1) to the Magistrate exercising jurisdiction over the case for attachment of the account. The Magistrate issues a show-cause notice; when the account holder does not appear within the fourteen days given, the Magistrate proceeds ex parte and, being satisfied the funds are proceeds of crime, orders attachment and later directs the District Magistrate to distribute the funds rateably among the fraud's victims.
:::

### The Act, decompiled

::: proviso Section 106 — Power of police officer to seize certain property
"106. (1) Any police officer [[?may]] seize any property which may be alleged or suspected to have been stolen, or which may be found under circumstances which create suspicion of the commission of any offence.
(2) Such police officer, if subordinate to the officer in charge of a police station, [[!shall]] forthwith report the seizure to that officer.
(3) Every police officer acting under sub-section (1) [[!shall]] forthwith report the seizure to the Magistrate having jurisdiction and where the property seized is such that it cannot be conveniently transported to the Court, or where there is difficulty in securing proper accommodation for the custody of such property, or where the continued retention of the property in police custody may not be considered necessary for the purpose of investigation, he [[?may]] give custody thereof to any person on his executing a bond undertaking to produce the property before the Court as and when required and to give effect to the further orders of the Court as to the disposal of the same:
Provided that where the property seized under sub-section (1) is subject to speedy and natural decay and if the person entitled to the possession of such property is unknown or absent and the value of such property is less than five hundred rupees, it [[?may]] forthwith be sold by auction under the orders of the Superintendent of Police and the provisions of sections 503 and 504 [[!shall]], as nearly as may be practicable, apply to the net proceeds of such sale."
:::

::: proviso Section 107 — Attachment, forfeiture or restoration of property
"107. (1) Where a police officer making an investigation has reason to believe that any property is derived or obtained, directly or indirectly, as a result of a criminal activity or from the commission of any offence, he [[?may]], with the approval of the Superintendent of Police or Commissioner of Police, make an application to the Court or the Magistrate exercising jurisdiction to take cognizance of the offence or commit for trial or try the case, for the attachment of such property.
(2) If the Court or the Magistrate has reasons to believe, whether before or after taking evidence, that all or any of such properties are proceeds of crime, the Court or the Magistrate [[?may]] issue a notice upon such person calling upon him to show cause within a period of fourteen days as to why an order of attachment [[!shall]] not be made.
(3) Where the notice issued to any person under sub-section (2) specifies any property as being held by any other person on behalf of such person, a copy of the notice [[!shall]] also be served upon such other person.
(4) The Court or the Magistrate [[?may]], after considering the explanation, if any, to the show-cause notice issued under sub-section (2) and the material fact available before such Court or Magistrate and after giving a reasonable opportunity of being heard to such person or persons, [[?may]] pass an order of attachment, in respect of those properties which are found to be the proceeds of crime:
Provided that if such person does not appear before the Court or the Magistrate or represent his case before the Court or Magistrate within a period of fourteen days specified in the show-cause notice, the Court or the Magistrate [[?may]] proceed to pass the ex parte order.
(5) Notwithstanding anything contained in sub-section (2), if the Court or the Magistrate is of the opinion that issuance of notice under the said sub-section would defeat the object of attachment or seizure, the Court or Magistrate [[?may]] by an interim order passed ex parte direct attachment or seizure of such property, and such order [[!shall]] remain in force till an order under sub-section (6) is passed.
(6) If the Court or the Magistrate finds the attached or seized properties to be the proceeds of crime, the Court or the Magistrate [[!shall]] by order direct the District Magistrate to rateably distribute such proceeds of crime to the persons who are affected by such crime.
(7) On receipt of an order passed under sub-section (6), the District Magistrate [[!shall]], within a period of sixty days distribute the proceeds of crime either by himself or authorise any officer subordinate to him to effect such distribution.
(8) If there are no claimants to receive such proceeds or no claimant is ascertainable or there is any surplus after satisfying the claimants, such proceeds of crime [[!shall]] stand forfeited to the Government."
:::

### How this actually runs

<MicroTree
  input="A police officer has come across property in the course of duty or investigation, and needs to determine whether the fast, warrantless section 106 seizure power applies, or the more structured section 107 attachment process for proceeds of crime."
  :gates="[
    { q: 'Is the property simply alleged or suspected to be stolen, or found under circumstances creating suspicion of an offence, without a specific investigative finding that it derives from criminal activity?', no: 'Move to the next gate to check whether section 107 rather than section 106 is the applicable power' },
    { q: 'If section 106 applies, has the seizure been reported forthwith both up the departmental chain, if the seizing officer is subordinate, and to the Magistrate having jurisdiction?', no: 'Sections 106(2) and 106(3) require both reports without delay; a seizure not reported this way is incomplete under the section' },
    { q: 'Is the property instead specifically believed, in the course of an investigation, to be derived or obtained directly or indirectly from criminal activity or the commission of an offence?', no: 'Section 107 does not apply; ordinary seizure and reporting under section 106 governs instead' },
    { q: 'Has the officer obtained the approval of the Superintendent of Police or Commissioner of Police before applying to the Court or Magistrate for attachment under section 107(1)?', no: 'That approval is a precondition to a valid section 107(1) application; an application made without it is outside the section' },
    { q: 'Has the Court or Magistrate given the person named a fourteen-day show-cause opportunity, or found that issuing notice would itself defeat the object of attachment?', no: 'Absent either a proper show-cause notice or a documented finding that notice would defeat the attachments object, an ex parte interim order under section 107(5) is not available' }
  ]"
  result="Section 106 is the fast, warrantless seizure power for stolen or suspicious property, coupled with mandatory upward and Magisterial reporting and a narrow immediate-auction proviso for small, perishable property. Section 107 is a structured, court-supervised process for attaching proceeds of crime specifically, gated by senior police approval, a fourteen-day show-cause notice as the default, and an ex parte route available only where notice would itself defeat the attachments purpose."
  resultKind="discretionary"
  caveat="Section 106's proviso for immediate auction of perishable property applies only where the property is worth less than five hundred rupees and the person entitled to possession is unknown or absent -- it is a narrow exception, not a general licence to sell seized property quickly whenever convenient."
/>

### In plain English

Section 106 is the everyday, on-the-spot seizure power every police officer relies on constantly — no warrant needed, just genuine suspicion, followed immediately by a paper trail of reports so the seizure is never off the books. The bailment option keeps bulky or hard-to-store property out of a police station without losing the Court's control over its ultimate disposal, and the perishable-goods proviso is a narrow, sensible carve-out so five-hundred-rupee's worth of rotting produce is not still sitting in evidence months later. Section 107 is a considerably heavier piece of machinery, closer in spirit to anti-money-laundering attachment powers than to an ordinary seizure — it requires senior police sign-off, a court order, a real opportunity to be heard before attachment normally becomes final, and it ends not with the property going back to police custody but with the District Magistrate actually distributing the proceeds to the people the crime affected, or forfeiting whatever is left unclaimed to Government.

### What changed from the CrPC

::: info Verify before citing
Section 106 is provisionally mapped to CrPC section 102 (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing. Section 107's court-supervised proceeds-of-crime attachment, notice, hearing, and rateable-distribution scheme is understood to be a substantial BNSS-era addition with no direct equivalent in the CrPC's Chapter VII, and instead reads as drawing on the structure of dedicated proceeds-of-crime attachment regimes found elsewhere in Indian law — but this characterisation, and the precise absence of any CrPC analogue, should be independently verified before being asserted in any filing or submission.
:::

Section 106's seizure, reporting, and bailment mechanics track the presumed CrPC section 102 scheme closely, including the perishable-property auction proviso. Section 107 stands apart as the more consequential change in this cluster — an entirely new, multi-stage judicial attachment process for proceeds of crime grafted onto the general criminal procedure code for the first time, rather than left to specialised legislation alone, and practitioners should treat its procedural requirements (senior approval, the fourteen-day notice, the ex parte thresholds, and the sixty-day distribution deadline) as freshly enacted law rather than as continuations of settled CrPC practice.

### Test your instinct

:::: instinct A police officer seizes a motor vehicle under section 106(1) on suspicion it was used to transport stolen goods, and simply keeps it in the police station compound indefinitely without reporting the seizure to any Magistrate. Is this compliant?

::: ruling No. Section 106(3) requires every police officer acting under section 106(1) to report the seizure forthwith to the Magistrate having jurisdiction, regardless of whether custody is retained by the police or handed to a bailee. Indefinite retention without any report to the Magistrate falls short of the section, independent of whether the underlying seizure itself was justified.
:::
::::

:::: instinct An investigating officer applies for attachment of a bank account under section 107(1) without first obtaining approval from the Superintendent of Police or Commissioner of Police, believing the urgency of the matter justified skipping that step. Is the application properly made?

::: ruling No. Section 107(1) conditions the officer's power to apply for attachment on first obtaining "the approval of the Superintendent of Police or Commissioner of Police" -- this is a precondition built into the power itself, not a formality that urgency can excuse, and an application made without it is vulnerable to challenge on that basis alone, however strong the underlying suspicion of proceeds of crime.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 106–107 of the BNSS is cited here, given the recency of the numbering. The CrPC's case law on general seizure powers under the presumed predecessor section remains conceptually relevant to section 106, while section 107's proceeds-of-crime attachment scheme is new enough that no body of BNSS-specific authority yet exists to draw on; practitioners should watch closely for the first reported decisions construing it.
:::

#### Sword and shield

As a sword, section 106 gives the investigating side an immediate, no-paperwork-first seizure power the moment suspicious circumstances arise, and section 107 gives the same side a genuinely powerful freezing tool against proceeds of crime, including an ex parte route where notice would tip off the person concerned. As a shield, a person facing a section 107 application has a real, structured opportunity to be heard — the fourteen-day show-cause notice and the reasonable-opportunity requirement in section 107(4) are not mere formalities, and a failure to actually give that opportunity before a final (as opposed to interim ex parte) attachment order is a strong ground of challenge.

#### The limitation clock

Section 106 carries no limitation period of its own but does impose "forthwith" reporting obligations that should be treated as effectively immediate. Section 107 fixes two hard clocks: fourteen days for a person to show cause once noticed under section 107(2), and sixty days for the District Magistrate to distribute confirmed proceeds of crime under section 107(7) once an order under section 107(6) is received.

#### Interlocking matrix

Section 106's perishable-property proviso interlocks with sections 503 and 504 of this Sanhita, which govern disposal of property more generally and should be read alongside the proviso to understand exactly how the sale proceeds are to be treated. Section 107 interlocks with the substantive offence provisions under investigation, since a section 107 application depends entirely on there being an underlying criminal activity or offence from which the property is alleged to derive.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

For property seized under section 106, the seizing officer's contemporaneous report — both up the departmental chain and to the Magistrate — is the single most important document protecting the seizure from later challenge; gaps in that reporting trail are a standard, and often successful, line of attack for the defence. For a section 107 application, obtaining and documenting the Superintendent's or Commissioner's approval before filing is a threshold requirement that should never be treated as a rubber stamp obtained after the fact. Counsel for a person facing attachment should scrutinise closely whether the Court's resort to the ex parte route under section 107(5) was genuinely justified by a documented risk that notice would defeat the attachment's object, since that route bypasses the ordinary fourteen-day hearing opportunity entirely.

## Sections 108–110 — The Magistrate's own search, impounding an exhibit, and process that crosses State or national borders

### The dispute this solves

::: oneminute This final cluster in the Chapter gathers three provisions that do not fit neatly elsewhere. Section 108 lets any Magistrate direct a search to be made in his own presence, for anything he would be competent to authorise by warrant — a direct, personal alternative to delegating the search to a police officer. Section 109 is a short, standalone power letting any Court impound any document or thing produced before it under this Sanhita, regardless of which provision brought it into the proceeding in the first place. Section 110 is the cross-border and cross-State machinery: where a Court in India wants a summons to an accused, a warrant of arrest, a summons to produce, or a search-warrant served or executed somewhere outside its own territory — either in another State or area of India, or, through Central Government arrangements, in a foreign "contracting State" — it sends the process through the prescribed channel, and the receiving Court treats it as if it were a domestic process received from another Court within its own jurisdiction. Execution abroad or in another State follows the ordinary rules for arrest warrants and search-warrants so far as possible, with the produced documents, things, or search results ultimately routed back to the issuing Court through the Central Government's designated channel.
:::

::: story A Magistrate searching in person, and a warrant crossing a State line
Concerned that a delegated search might miss critical evidence or be compromised, a Magistrate competent to issue a search-warrant instead directs the search to be conducted in his own presence under section 108. In a separate case, a Court in one State needs a warrant of arrest executed against an accused person believed to be residing in another State outside its own territorial reach. It sends the warrant in duplicate, by post, to the presiding officer of the appropriate Court in that other State under section 110(1)(i); that Court, on receiving it, executes the warrant as if it were a warrant issued by another Court within its own jurisdiction, and the arrested person is dealt with under the ordinary arrest-warrant procedure of this Sanhita.
:::

### The Act, decompiled

::: proviso Section 108 — Magistrate may direct search in his presence
"108. Any Magistrate [[?may]] direct a search to be made in his presence of any place for the search of which he is competent to issue a search-warrant."
:::

::: proviso Section 109 — Power to impound document, etc., produced
"109. Any Court [[?may]], if it thinks fit, impound any document or thing produced before it under this Sanhita."
:::

::: proviso Section 110 — Reciprocal arrangements regarding processes
"110. (1) Where a Court in the territories to which this Sanhita extends (hereafter in this section referred to as the said territories) desires that—
(a) a summons to an accused person; or
(b) a warrant for the arrest of an accused person; or
(c) a summons to any person requiring him to attend and produce a document or other thing, or to produce it; or
(d) a search-warrant,
issued by it [[!shall]] be served or executed at any place,—
(i) within the local jurisdiction of a Court in any State or area in India outside the said territories, it [[?may]] send such summons or warrant in duplicate by post or otherwise, to the presiding officer of that Court to be served or executed; and where any summons referred to in clause (a) or clause (c) has been so served, the provisions of section 70 [[!shall]] apply in relation to such summons as if the presiding officer of the Court to whom it is sent were a Magistrate in the said territories;
(ii) in any country or place outside India in respect of which arrangements have been made by the Central Government with the Government of such country or place for service or execution of summons or warrant in relation to criminal matters (hereafter in this section referred to as the contracting State), it [[?may]] send such summons or warrant in duplicate in such form, directed to such Court, Judge or Magistrate, and send to such authority for transmission, as the Central Government may, by notification, specify in this behalf.
(2) Where a Court in the said territories has received for service or execution—
(a) a summons to an accused person; or
(b) a warrant for the arrest of an accused person; or
(c) a summons to any person requiring him to attend and produce a document or other thing, or to produce it; or
(d) a search-warrant,
issued by—
(I) a Court in any State or area in India outside the said territories;
(II) a Court, Judge or Magistrate in a contracting State,
it [[!shall]] cause the same to be served or executed as if it were a summons or warrant received by it from another Court in the said territories for service or execution within its local jurisdiction; and where—
(i) a warrant of arrest has been executed, the person arrested [[!shall]], so far as possible, be dealt with in accordance with the procedure specified by sections 82 and 83;
(ii) a search-warrant has been executed, the things found in the search [[!shall]], so far as possible, be dealt with in accordance with the procedure specified by section 104:
Provided that in a case where a summons or search-warrant received from a contracting State has been executed, the documents or things produced or things found in the search [[!shall]] be forwarded to the Court issuing the summons or search-warrant through such authority as the Central Government may, by notification, specify in this behalf."
:::

### How this actually runs

<MicroTree
  input="A Court needs a summons or warrant served or executed, or wants to conduct a search personally, or wants to hold onto an exhibit already produced before it, and needs to identify the correct provision among these three."
  :gates="[
    { q: 'Is the immediate need to conduct a search personally, rather than through a delegated police officer or other person?', no: 'Move to the next gate to check whether section 109 or section 110 is the applicable power' },
    { q: 'If so, is the Magistrate directing it competent to issue a search-warrant for that very place under the general search-warrant provisions of this Chapter?', no: 'Section 108 does not extend the Magistrates own competence; he may direct a search in his presence only where he could otherwise have authorised one by warrant' },
    { q: 'Is the need instead simply to hold onto a document or thing already produced before the Court under this Sanhita?', no: 'Section 109 does not apply; look instead to whichever provision governs the process actually in play' },
    { q: 'Is the need instead to have a summons or warrant served or executed at a place outside the issuing Courts own territorial jurisdiction, whether elsewhere in India or in a foreign contracting State?', no: 'Section 110 does not apply; the summons or warrant should be served or executed through the ordinary domestic route' },
    { q: 'Has the summons or warrant been sent in duplicate, in the prescribed form, through the correct channel -- direct to the presiding officer of the receiving Indian Court, or through the Central Governments designated channel for a contracting State?', no: 'Section 110(1) requires exactly this channel; a process sent outside it is not properly transmitted under the section' }
  ]"
  result="A Magistrate may personally direct a search only within the bounds of his own search-warrant competence under section 108. Any Court may impound a document or thing already before it under section 109, without needing any further justification beyond thinking it fit. Cross-jurisdiction service or execution of a summons or warrant runs through section 110s duplicate-and-designated-channel procedure, with the receiving Court treating it as a domestic process once received."
  resultKind="discretionary"
  caveat="Section 110(2)s proviso requires documents, things, or search results obtained on execution of process received from a contracting State to be forwarded back through the Central Governments designated authority -- a receiving Court cannot simply retain or directly transmit such material to the foreign requesting Court on its own initiative."
/>

### In plain English

Section 108 exists for the cases where a Magistrate does not trust a delegated search to capture everything, or where the sensitivity of the matter calls for the Magistrate's own presence — it is a personal-supervision option layered on top of the ordinary warrant power, not a separate, wider power in its own right. Section 109 is refreshingly simple: once something is before the Court, the Court can hold onto it if it thinks fit, full stop. Section 110 is the plumbing that makes India's, and to a lesser extent the world's, fragmented criminal jurisdictions work together — every summons or warrant that needs to cross a State or national line goes through a defined channel, and once it lands with the receiving Court, that Court just treats it like any other process from a sister Court, applying the same domestic rules to execution, arrest handling, and search-result disposal.

### What changed from the CrPC

::: info Verify before citing
Sections 108, 109, and 110 are provisionally mapped to CrPC sections 103, 104, and 105 respectively (CrPC Chapter VII). This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

All three provisions read as carrying over the presumed CrPC mechanics closely, including the reciprocal-arrangements structure in section 110 for both inter-State process within India and cross-border process with contracting States. The cross-references within section 110 — to sections 70, 82, 83, and 104 of this Sanhita — replace whatever the equivalent CrPC cross-references were, and each should be independently confirmed given how much turns on getting the applicable domestic procedure right once a foreign or inter-State process is received.

### Test your instinct

:::: instinct A Magistrate directs a search to be conducted in his own presence under section 108, for a place where he would not have been competent to issue a search-warrant under sections 96 or 97 in the first place. Is the direction valid?

::: ruling No. Section 108 ties the power directly to the Magistrates own competence to issue a search-warrant for that place — it does not create an independent, broader search power. A direction to search in his presence, for a place outside his warrant-issuing competence, is outside section 108 regardless of his personal presence during the search.
:::
::::

:::: instinct A Court in one State, on receiving a search-warrant issued by a Court in another State, executes it and simply files the things found away in its own record room, without sending them anywhere. Is this compliant with section 110?

::: ruling No. Section 110(2)(ii) requires that where a search-warrant received from another Court has been executed, the things found "shall, so far as possible, be dealt with in accordance with the procedure specified by section 104" -- which itself directs the things and the seizure list to the issuing Court or a nearer Magistrate. Simply retaining the items in the executing Courts own record room does not satisfy that requirement.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No Supreme Court or High Court authority on sections 108–110 of the BNSS is cited here, given the recency of the numbering. The CrPC's case law on Magistrate-conducted searches, impounding of exhibits, and reciprocal process arrangements under the presumed predecessor sections remains conceptually relevant but must be independently re-verified before being pleaded.
:::

#### Sword and shield

As a sword, section 109's impounding power is a simple, low-friction way for a Court to preserve an exhibit's evidentiary integrity the moment it is produced, without needing a separate application. As a shield, a party challenging execution of a foreign or inter-State process should check section 110's channel requirements closely — process sent or received outside the prescribed duplicate-and-designated-authority route is vulnerable to challenge on that procedural ground, independent of the merits of the underlying summons or warrant.

#### The limitation clock

None of these three sections fixes its own limitation period; section 110's cross-border mechanics depend heavily on the Central Government's notified arrangements with the particular contracting State, which practitioners should check directly rather than assume are uniform across countries.

#### Interlocking matrix

Section 108 interlocks with sections 96 and 97, since a Magistrate's competence to direct a personal search under section 108 is defined entirely by reference to those provisions. Section 110 interlocks with section 70 (service of summons on an out-of-jurisdiction addressee), and with sections 82, 83, and 104, which govern how an executed arrest warrant or search-warrant is handled once process crosses a jurisdictional line.

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

Before advising a client on a summons or warrant received from another State or a foreign contracting State, confirm it was actually transmitted through the section 110(1) channel — duplicate copies, the prescribed form, and the correct designated authority — since a defect in transmission is a genuine, technical ground of challenge distinct from any argument on the merits. For a section 109 impounding order, there is no elaborate procedure to invoke or resist — the Court's own view that it is fit to impound is the entire test — so any challenge is better directed at whether the underlying production before the Court was itself proper, rather than at the impounding order in isolation.
