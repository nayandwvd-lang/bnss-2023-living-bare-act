# Chapter II — Constitution of Criminal Courts and Offices

## Sections 6–8 — The four classes of criminal court, how a State is carved into sessions divisions and districts, and how a Court of Session is staffed and where it sits

### The dispute this solves

::: oneminute Chapter II builds the courthouse itself before the Sanhita asks anyone to walk into it. Section 6 names the four classes of Criminal Court that exist in every State besides the High Courts: Courts of Session, Judicial Magistrates of the first class, Judicial Magistrates of the second class, and Executive Magistrates. Section 7 lays the territorial grid those courts sit on — sessions divisions, which are themselves districts or groups of districts, and sub-divisions within a district. Section 8 then staffs the top of that grid: one Court of Session per sessions division, presided over by a Sessions Judge appointed by the High Court, with Additional Sessions Judges to share the load, cross-division dual appointments, a vacancy-coverage mechanism, and a default sitting-place rule the parties can jointly ask to vary.
None of this is abstract organisational chart material — it decides which court a given case is even filed in. Get the territorial division wrong, or misidentify which class of court a matter belongs to, and the entire proceeding can be challenged for want of jurisdiction before its merits are ever reached.
:::

::: story The urgent bail application filed the day the Sessions Judge's post fell vacant
An accused's family needs an urgent bail application heard, but the Sessions Judge of the division has just retired and the post is vacant. No Additional Sessions Judge is currently posted to that division either. Section 8(5) exists for exactly this gap: the High Court may make arrangements for the disposal of urgent applications by an Additional Sessions Judge or, if there is none, by the Chief Judicial Magistrate of that sessions division — and that Judge or Magistrate is deemed to have jurisdiction to deal with the application. The vacancy at the top does not leave the litigant without a forum; section 8(5) routes the urgent matter downward rather than letting it wait for a new appointment.
:::

### The Act, decompiled

::: proviso Section 6 — Classes of Criminal Courts
"6. Besides the High Courts and the Courts constituted under any law, other than this Sanhita, there [[!shall]] be, in every State, the following classes of Criminal Courts, namely:—
(i) Courts of Session;
(ii) Judicial Magistrates of the first class;
(iii) Judicial Magistrates of the second class; and
(iv) Executive Magistrates."
:::

::: proviso Section 7 — Territorial divisions
"7. (1) Every State [[!shall]] be a sessions division or [[!shall]] consist of sessions divisions; and every sessions divisions [[!shall]], for the purposes of this Sanhita, be a district or consist of districts.
(2) The State Government [[?may]], after consultation with the High Court, alter the limits or the number of such divisions and districts.
(3) The State Government [[?may]], after consultation with the High Court, divide any district into sub-divisions and [[?may]] alter the limits or the number of such sub-divisions.
(4) The sessions divisions, districts and sub-divisions existing in a State at the commencement of this Sanhita, [[!shall]] be deemed to have been formed under this section."
:::

::: proviso Section 8 — Court of Session
"8. (1) The State Government [[!shall]] establish a Court of Session for every sessions division.
(2) Every Court of Session [[!shall]] be presided over by a Judge, to be appointed by the High Court.
(3) The High Court [[?may]] also appoint Additional Sessions Judges to exercise jurisdiction in a Court of Session.
(4) The Sessions Judge of one sessions division [[?may]] be appointed by the High Court to be also an Additional Sessions Judge of another division, and in such case, he [[?may]] sit for the disposal of cases at such place or places in the other division as the High Court may direct.
(5) Where the office of the Sessions Judge is vacant, the High Court [[?may]] make arrangements for the disposal of any urgent application which is, or may be, made or pending before such Court of Session by an Additional Sessions Judge or if there be no Additional Sessions Judge, by a Chief Judicial Magistrate, in the sessions division; and every such Judge or Magistrate [[!shall]] have jurisdiction to deal with any such application.
(6) The Court of Session [[!shall]] ordinarily hold its sitting at such place or places as the High Court may, by notification, specify; but, if, in any particular case, the Court of Session is of opinion that it will tend to the general convenience of the parties and witnesses to hold its sittings at any other place in the sessions division, it [[?may]], with the consent of the prosecution and the accused, sit at that place for the disposal of the case or the examination of any witness or witnesses therein.
(7) The Sessions Judge [[?may]], from time to time, make orders consistent with this Sanhita, as to the distribution of business among such Additional Sessions Judges.
(8) The Sessions Judge [[?may]] also make provision for the disposal of any urgent application, in the event of his absence or inability to act, by an Additional Sessions Judge or if there be no Additional Sessions Judge, by the Chief Judicial Magistrate, and such Judge or Magistrate [[!shall]] be deemed to have jurisdiction to deal with any such application.
Explanation.—For the purposes of this Sanhita, 'appointment' does not include the first appointment, posting or promotion of a person by the Government to any Service, or post in connection with the affairs of the Union or of a State, where under any law, such appointment, posting or promotion is required to be made by the Government."
:::

### How this actually runs

<MicroTree
  input="A matter needs to be filed, or an urgent application needs to be heard, somewhere in the criminal court structure. Which court and location actually apply?"
  :gates="[
    { q: 'Is the matter one for the Court of Session, as opposed to the court of a Magistrate?', note: 'Section 8(1) requires a Court of Session for every sessions division, staffed under section 8(2)-(4); confirm which sessions division, district, and sub-division the matter falls within under section 7.', no: 'The matter belongs to one of the Magistrate classes named in section 6 instead.' },
    { q: 'Is the office of the Sessions Judge for that division currently vacant, or is the Sessions Judge absent or unable to act, and is the application urgent?', note: 'Section 8(5) or 8(8) applies: an Additional Sessions Judge, or if none, the Chief Judicial Magistrate, has jurisdiction to dispose of the urgent application.', no: 'The sitting Sessions Judge, or an Additional Sessions Judge acting under the distribution of business made by the Sessions Judge, handles the matter in the ordinary course.' },
    { q: 'Do the parties want the case, or the examination of a witness, heard at a place other than where the Court of Session ordinarily sits?', note: 'Section 8(6) allows this only with the consent of both the prosecution and the accused, and only where the Court itself considers it convenient.', no: 'The case proceeds at the place the High Court has notified under section 8(6) as the ordinary sitting place of the Court.' }
  ]"
  result="Which sessions division, district, and sub-division the matter falls within, and which Judge or Magistrate actually has jurisdiction to hear it — including during a vacancy or absence, or at an alternative sitting place — are each confirmed before any application is filed or heard."
  resultKind="mandatory"
  caveat="The vacancy-coverage jurisdiction under section 8(5) and the absence-coverage jurisdiction under section 8(8) are both limited to urgent applications — they do not generally transfer the full docket of the Court of Session to the Additional Sessions Judge or Chief Judicial Magistrate covering the gap."
/>

### In plain English

Section 6 is the org chart in miniature: four tiers below the High Court — Sessions Court at the top, then two grades of Judicial Magistrate, and Executive Magistrates running alongside as a separate, administratively-flavoured track (the distinction Chapter I's section 3(2) already drew between judicial and administrative functions maps directly onto this split). Section 7 is the map: sessions divisions are the biggest unit, built from one or more districts, and districts can be further cut into sub-divisions — with a saving rule that whatever divisions, districts and sub-divisions already existed when BNSS commenced are automatically treated as validly formed under this section, so nothing needed to be re-notified from scratch on commencement day.

Section 8 is about keeping the Court of Session actually staffed and running. Every division gets its own Court of Session and Sessions Judge, but the High Court can also appoint Additional Sessions Judges to share the caseload, can double-hat a Sessions Judge from one division as an Additional Sessions Judge in another, and — critically — has a fallback plan for vacancies and absences so that urgent applications never simply wait in limbo for a new appointment. The default is that the Court sits where the High Court has notified, but section 8(6) lets the Court move to a more convenient location for a specific case, provided both sides agree.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 6, 7, and 8 are believed to correspond to CrPC sections 6, 7, and 8 respectively, continuing the same section-by-section numbering pattern already confirmed for Chapter I. This correspondence should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

The four classes of Criminal Court in section 6 mirror the CrPC's own list closely, with one structural absence carried over from Chapter I: the CrPC's fifth-tier "Metropolitan Magistrate" class, which existed alongside Judicial Magistrates of the first and second class in cities notified as metropolitan areas, does not appear in section 6's list at all. Every function a Metropolitan Magistrate used to perform is understood to now sit with an ordinary Judicial Magistrate of the first class. Sections 7 and 8's territorial and Court-of-Session machinery otherwise track the CrPC predecessor provisions closely on this reading, including the vacancy and absence coverage mechanisms.

### Test your instinct

:::: instinct The sessions division that predates BNSS itself
A defence advocate argues that because a particular sessions division was created by State Government notification years before BNSS came into force, it has no legal existence under the new Sanhita until the State Government issues a fresh notification under section 7. Is the advocate correct?

::: ruling
No. Section 7(4) deems the sessions divisions, districts, and sub-divisions existing in a State at the commencement of the Sanhita to have been formed under section 7 itself. No fresh notification was required on commencement — the pre-existing territorial structure carried forward automatically and continues to have full legal effect under BNSS.
:::
::::

:::: instinct The parties who wanted a witness examined outside the ordinary sitting place
In a case pending before a Court of Session, a key witness is elderly and cannot travel to the Court's ordinarily notified sitting place, but can attend at a nearer sub-divisional town within the same sessions division. The prosecution agrees to the witness being examined there; the defence does not. Can the Court of Session sit at the sub-divisional town anyway?

::: ruling
No, not under section 8(6) as it stands. The provision requires the consent of both the prosecution and the accused before the Court may sit at a place other than its ordinarily notified sitting place, even where the Court itself considers the alternative location convenient. Without the defence's consent, the Court cannot invoke section 8(6) to relocate the examination; some other mechanism for taking the witness's evidence — such as a commission — would need to be considered instead.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority interpreting BNSS sections 6 to 8 themselves is confidently recalled for promotion here. These are foundational court-structure provisions; any jurisdictional challenge built on them should be researched against the specific facts and the relevant High Court's own notifications rather than pleaded from a general authority.
:::

#### Sword and shield

As a **sword**, a litigant facing delay because of a vacant or absent Sessions Judge can invoke section 8(5) or 8(8) to insist an urgent application be heard without waiting for a fresh appointment. As a **shield**, a party can resist an attempt to relocate a hearing or witness examination away from the Court's notified sitting place by simply withholding the consent section 8(6) requires from both sides.

#### The limitation clock

Sections 6 to 8 do not themselves create a limitation period; they are structural and administrative provisions governing where and by whom a case is heard, not provisions triggering a time-bound obligation.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Identifying which class of criminal court a matter belongs to | Section 6 | Four classes: Court of Session, Judicial Magistrate first class, Judicial Magistrate second class, Executive Magistrate |
| Identifying the sessions division, district, or sub-division a matter falls within | Section 7 | State Government notification after High Court consultation; pre-BNSS divisions deemed validly formed |
| Sessions Judge's post vacant, or Sessions Judge absent/unable to act, urgent application pending | Section 8(5), 8(8) | Additional Sessions Judge, or failing that the Chief Judicial Magistrate, has jurisdiction over the urgent application |
| Parties want a case or witness examination heard outside the Court's notified sitting place | Section 8(6) | Requires consent of both prosecution and accused |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not assume a pre-BNSS sessions division notification lapsed on commencement — section 7(4) deems it validly formed under the new Sanhita without any fresh notification.
2. When pleading urgency to invoke section 8(5) or 8(8), specifically state the vacancy or absence and identify why the application cannot await the ordinary Sessions Judge's return, since the fallback jurisdiction is limited to urgent applications, not the general docket.
3. Do not seek relocation of a hearing under section 8(6) without first securing the opposing side's consent on record — the Court has no power to order the relocation unilaterally under this section.

**Timing.** Where a Sessions Judge's post is vacant, raise the section 8(5) urgency argument at the earliest possible opportunity, since delay in flagging the urgency undercuts the very characterisation needed to invoke the fallback jurisdiction.

**Model checklist for filing at the Sessions Court level:**

1. Confirm the correct sessions division, district, and sub-division under section 7 before filing.
2. Confirm whether the Sessions Judge's post is currently filled; if vacant or the Judge is absent, identify the Additional Sessions Judge or Chief Judicial Magistrate with fallback jurisdiction under section 8(5) or 8(8).
3. If seeking a hearing or witness examination away from the notified sitting place, secure and record the consent of both sides before moving the application under section 8(6).

---

## Sections 9–13 — Staffing the Judicial Magistracy: ordinary and Special Courts, the Chief Judicial Magistrate's supervisory chain, and how local jurisdiction and subordination actually work

### The dispute this solves

::: oneminute This cluster builds out the Judicial Magistrate tier beneath the Court of Session. Section 9 establishes ordinary Courts of Judicial Magistrates of the first and second class in every district, with a proviso allowing Special Courts of Judicial Magistrates carved out for particular cases or classes of cases — and once such a Special Court exists, it has exclusive jurisdiction over that carved-out category within its local area. Section 10 puts a Chief Judicial Magistrate at the head of every district's Judicial Magistracy, with an Additional Chief Judicial Magistrate and Sub-divisional Judicial Magistrates as needed. Section 11 creates Special Judicial Magistrates — a time-limited, qualification-gated power the High Court can confer on a government-post-holder rather than a career judicial officer. Section 12 fixes how local jurisdiction is actually defined and what happens when it crosses a district line. Section 13 closes the loop with the subordination chain: every Judicial Magistrate answers to the Chief Judicial Magistrate, who in turn is subordinate to the Sessions Judge.
The practical stakes: filing in the wrong Magistrate's court, or overlooking that a Special Court has exclusive jurisdiction over a category of case, is a jurisdictional defect that can undo an otherwise sound proceeding.
:::

::: story The case filed before an ordinary Magistrate after a Special Court had already been notified
A particular category of economic offence is, by State Government notification after consultation with the High Court, assigned exclusively to a Special Court of Judicial Magistrates of the first class for a local area. A complainant, unaware of the notification, files a case of that category before the ordinary Judicial Magistrate's court in the same area instead. The proviso to section 9(1) is unambiguous: where such a Special Court is established, "no other Court of Magistrate in the local area shall have jurisdiction to try any case or class of cases for the trial of which such Special Court... has been established." The ordinary Magistrate's court, however competent in general, simply has no jurisdiction over this specific category once the Special Court notification takes effect — the case must be filed, or transferred, to the Special Court.
:::

### The Act, decompiled

::: proviso Section 9 — Courts of Judicial Magistrates
"9. (1) In every district there [[!shall]] be established as many Courts of Judicial Magistrates of the first class and of the second class, and at such places, as the State Government may, after consultation with the High Court, by notification, specify:
Provided that the State Government [[?may]], after consultation with the High Court, establish, for any local area, one or more Special Courts of Judicial Magistrates of the first class or of the second class to try any particular case or particular class of cases, and where any such Special Court is established, no other Court of Magistrate in the local area [[!shall]] have jurisdiction to try any case or class of cases for the trial of which such Special Court of Judicial Magistrate has been established.
(2) The presiding officers of such Courts [[!shall]] be appointed by the High Court.
(3) The High Court [[?may]], whenever it appears to it to be expedient or necessary, confer the powers of a Judicial Magistrate of the first class or of the second class on any member of the Judicial Service of the State, functioning as a Judge in a Civil Court."
:::

::: proviso Section 10 — Chief Judicial Magistrate and Additional Chief Judicial Magistrate, etc.
"10. (1) In every district, the High Court [[!shall]] appoint a Judicial Magistrate of the first class to be the Chief Judicial Magistrate.
(2) The High Court [[?may]] appoint any Judicial Magistrate of the first class to be an Additional Chief Judicial Magistrate, and such Magistrate [[!shall]] have all or any of the powers of a Chief Judicial Magistrate under this Sanhita or under any other law for the time being in force as the High Court may direct.
(3) The High Court [[?may]] designate any Judicial Magistrate of the first class in any sub-division as the Sub-divisional Judicial Magistrate and relieve him of the responsibilities specified in this section as occasion requires.
(4) Subject to the general control of the Chief Judicial Magistrate, every Sub-divisional Judicial Magistrate [[!shall]] also have and exercise, such powers of supervision and control over the work of the Judicial Magistrates (other than Additional Chief Judicial Magistrates) in the sub-division as the High Court may, by general or special order, specify in this behalf."
:::

::: proviso Section 11 — Special Judicial Magistrates
"11. (1) The High Court [[?may]], if requested by the Central or State Government so to do, confer upon any person who holds or has held any post under the Government, all or any of the powers conferred or conferrable by or under this Sanhita on a Judicial Magistrate of the first class or of the second class, in respect to particular cases or to particular classes of cases, in any local area:
Provided that no such power [[!shall]] be conferred on a person unless he possesses such qualification or experience in relation to legal affairs as the High Court may, by rules, specify.
(2) Such Magistrates [[!shall]] be called Special Judicial Magistrates and [[!shall]] be appointed for such term, not exceeding one year at a time, as the High Court may, by general or special order, direct."
:::

::: proviso Section 12 — Local jurisdiction of Judicial Magistrates
"12. (1) Subject to the control of the High Court, the Chief Judicial Magistrate [[?may]], from time to time, define the local limits of the areas within which the Magistrates appointed under section 9 or under section 11 may exercise all or any of the powers with which they may respectively be invested under this Sanhita:
Provided that the Court of Special Judicial Magistrate [[?may]] hold its sitting at any place within the local area for which it is established.
(2) Except as otherwise provided by such definition, the jurisdiction and powers of every such Magistrate [[!shall]] extend throughout the district.
(3) Where the local jurisdiction of a Magistrate appointed under section 9 or section 11 extends to an area beyond the district in which he ordinarily holds Court, any reference in this Sanhita to the Court of Session or Chief Judicial Magistrate [[!shall]], in relation to such Magistrate, throughout the area within his local jurisdiction, be construed, unless the context otherwise requires, as a reference to the Court of Session or Chief Judicial Magistrate, as the case may be, exercising jurisdiction in relation to the said district."
:::

::: proviso Section 13 — Subordination of Judicial Magistrates
"13. (1) Every Chief Judicial Magistrate [[!shall]] be subordinate to the Sessions Judge; and every other Judicial Magistrate [[!shall]], subject to the general control of the Sessions Judge, be subordinate to the Chief Judicial Magistrate.
(2) The Chief Judicial Magistrate [[?may]], from time to time, make rules or give special orders, consistent with this Sanhita, as to the distribution of business among the Judicial Magistrates subordinate to him."
:::

### How this actually runs

<MicroTree
  input="A case needs to be filed before, or a power exercised by, a Judicial Magistrate. Which Magistrate and which chain of authority actually apply?"
  :gates="[
    { q: 'Has a Special Court of Judicial Magistrates been established under the proviso to section 9(1) for this particular case or class of cases in this local area?', note: 'That Special Court has exclusive jurisdiction; no other court of a Magistrate in the local area may try the case.', no: 'The ordinary Courts of Judicial Magistrates established under section 9(1) have jurisdiction as usual.' },
    { q: 'Does the matter require the powers of the Chief Judicial Magistrate specifically, or those of an Additional Chief Judicial Magistrate or Sub-divisional Judicial Magistrate?', note: 'Section 10 identifies which officer holds which powers — confirm the specific direction or designation of the High Court before assuming a particular Magistrate holds Chief Judicial Magistrate-level powers.', no: 'An ordinary Judicial Magistrate of the first or second class, as appropriate, handles the matter.' },
    { q: 'Is the person exercising Magisterial power a government post-holder given powers under section 11 rather than a career Judicial Magistrate?', note: 'Confirm the High Court conferred the specific powers, that the person meets the qualification the High Court has specified, and that the one-year (or shorter) term has not expired.', no: 'The Special Judicial Magistrate qualification and term limits under section 11 do not apply; the Magistrate holds powers in the ordinary course.' },
    { q: 'Does the local jurisdiction of the Magistrate, as defined under section 12, extend into an area beyond the district in which he ordinarily holds Court?', note: 'References in the Sanhita to the Court of Session or the Chief Judicial Magistrate are read, for that Magistrate, as referring to the Court of Session or Chief Judicial Magistrate of the district his jurisdiction actually covers.', no: 'The jurisdiction of the Magistrate runs throughout his own district in the ordinary way under section 12(2).' }
  ]"
  result="Whether a Special Court has exclusive jurisdiction, which specific Judicial Magistrate holds the relevant power, whether a Special Judicial Magistrate's qualification and term conditions are satisfied, and which district's Court of Session or Chief Judicial Magistrate governs a cross-district jurisdiction, are each confirmed before a case is filed or a power exercised."
  resultKind="mandatory"
  caveat="The proviso to section 9(1) is an exclusivity rule, not a mere convenience — once a Special Court is established for a category of case, filing in the ordinary Magistrate's court instead is a jurisdictional defect, not a matter of choice between two competent forums."
/>

### In plain English

Think of sections 9 to 13 as the staffing and reporting chart for the Judicial Magistracy. Section 9 puts ordinary Magistrate courts in every district, with a carve-out for Special Courts that get exclusive jurisdiction over whatever narrow category they were created for. Section 10 puts one officer — the Chief Judicial Magistrate — formally in charge of the district's Judicial Magistracy, with Additional Chief Judicial Magistrates and Sub-divisional Judicial Magistrates as delegated helpers whose exact powers depend on what the High Court has specifically directed. Section 11 is the odd one out: it lets the High Court temporarily deputise a qualified government official as a Special Judicial Magistrate for narrow purposes, capped at a year at a time, rather than relying only on career judicial officers. Section 12 is the geography: who defines a Magistrate's local limits, what happens by default (jurisdiction runs the whole district), and the fix for when a Magistrate's jurisdiction spills into another district. Section 13 is simply the chain of command: every Judicial Magistrate reports up to the Chief Judicial Magistrate, who reports up to the Sessions Judge.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 9 through 13 are believed to correspond to CrPC sections 11 through 15 respectively — a one-section offset from BNSS's own numbering, consistent with the CrPC having contained an additional "Courts of Metropolitan Magistrates" provision (CrPC section 16) and related metropolitan-area sections that BNSS does not carry forward given the abolition of that court tier. This correspondence, including the offset, should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

The core Judicial Magistracy structure — ordinary and Special Courts, the Chief Judicial Magistrate's appointment and supervisory role, Special Judicial Magistrates, local jurisdiction, and subordination — tracks the CrPC's equivalent provisions closely in substance. The most significant absence, again, is structural rather than textual: the CrPC's separate track for Chief Metropolitan Magistrates and Additional Chief Metropolitan Magistrates in notified metropolitan areas has no counterpart in BNSS, consistent with Chapter I and this Chapter's section 6 both reflecting the abolition of the Metropolitan Magistrate tier.

### Test your instinct

:::: instinct The Special Judicial Magistrate whose one-year term quietly lapsed
A government engineer was appointed a Special Judicial Magistrate under section 11 for a class of technical-regulatory cases, for a one-year term. Fourteen months later, without any fresh order, he continues to pass orders in pending cases of that class, on the view that his earlier appointment continues until the cases are disposed of. Is he correct?

::: ruling
No. Section 11(2) caps a Special Judicial Magistrate's appointment at a term "not exceeding one year at a time," as directed by the High Court. There is no provision allowing the appointment to continue automatically past its fixed term merely because cases remain pending. Once the term lapses without a fresh order from the High Court, the engineer no longer holds Special Judicial Magistrate powers, and any order passed after that date is passed without jurisdiction.
:::
::::

:::: instinct The Judicial Magistrate whose jurisdiction crossed into the next district
A Judicial Magistrate's local jurisdiction, as defined under section 12(1), has been extended by the Chief Judicial Magistrate to cover an area that spills into a neighbouring district. A question arises whether a reference in the Sanhita requiring action "by the Chief Judicial Magistrate" means the Chief Judicial Magistrate of the Magistrate's home district, or of the district where the spillover area lies. Which is correct?

::: ruling
It depends on where, within his local jurisdiction, the Magistrate is acting. Section 12(3) provides that references to the Court of Session or Chief Judicial Magistrate are construed, in relation to such a Magistrate, throughout the area within his local jurisdiction, as references to the Court of Session or Chief Judicial Magistrate exercising jurisdiction in relation to the district in which that particular area lies — not fixed permanently to his home district. The correct reference shifts depending on which part of his cross-district local jurisdiction the Magistrate is exercising power in.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority interpreting BNSS sections 9 to 13 themselves is confidently recalled for promotion here. Jurisdictional challenges built on these provisions, particularly the Special Court exclusivity proviso in section 9(1), should be researched against the specific State Government notification in question rather than pleaded from a general authority.
:::

#### Sword and shield

As a **sword**, a party can challenge an entire proceeding for want of jurisdiction where a Special Court's exclusive jurisdiction under the proviso to section 9(1) was overlooked and the case was filed before an ordinary Magistrate instead. As a **shield**, a party facing an order from a purported Special Judicial Magistrate can verify the term of appointment under section 11(2) and challenge any order passed after that term has lapsed.

#### The limitation clock

Section 11(2) is the one hard clock in this cluster: a Special Judicial Magistrate's appointment cannot exceed one year at a time, and must be renewed by fresh High Court order to continue exercising power beyond that term.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Case falls within a category for which a Special Court has been established | Proviso to section 9(1) | Exclusive jurisdiction in the Special Court; ordinary Magistrate's court has none |
| Identifying who holds Chief Judicial Magistrate-level powers in a district | Section 10 | Appointment and specific power-direction by the High Court |
| Government post-holder purporting to exercise Judicial Magistrate powers | Section 11 | Requires High Court conferral, specified qualification, and a valid (unexpired) term not exceeding one year |
| Magistrate's local jurisdiction spills into another district | Section 12(3) | References to Court of Session/Chief Judicial Magistrate construed by reference to the district the relevant area falls within |
| Chain of supervisory authority over a Judicial Magistrate | Section 13 | Judicial Magistrate → Chief Judicial Magistrate → Sessions Judge |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Before filing, check for any State Government notification establishing a Special Court under the proviso to section 9(1) for the case's category — filing before the wrong Magistrate on this point is a jurisdictional defect, not a mere irregularity.
2. When challenging an order of a Special Judicial Magistrate, always verify the term of appointment under section 11(2) first — an expired term is one of the cleanest jurisdictional challenges available.
3. In cross-district matters, do not assume a Magistrate's home-district Chief Judicial Magistrate always governs — apply section 12(3)'s area-specific construction rule.

**Timing.** Track the expiry date of any Special Judicial Magistrate's term under section 11(2) from the outset of a matter assigned to one — raising the expiry only after an adverse order is passed is far weaker than flagging it proactively as the term approaches its limit.

**Model checklist before filing at the Magistrate level:**

1. Search for any Special Court notification under the proviso to section 9(1) covering the case's category before filing in the ordinary Magistrate's court.
2. Confirm which Magistrate holds Chief Judicial Magistrate, Additional Chief Judicial Magistrate, or Sub-divisional Judicial Magistrate powers under section 10 if the matter requires those specific powers.
3. Where a Special Judicial Magistrate is involved, confirm the qualification and the current validity of the term under section 11.
4. In cross-district jurisdiction matters, apply section 12(3) to identify the correct Court of Session or Chief Judicial Magistrate for the specific area in question.

---

## Sections 14–17 — The District Magistrate and the executive magistracy: appointment, Special Executive Magistrates, local jurisdiction, and the chain of subordination

### The dispute this solves

::: oneminute This cluster builds the executive — as opposed to judicial — magistracy. Section 14 lets the State Government appoint as many Executive Magistrates as it thinks fit in every district, and requires one of them to be designated the District Magistrate, with an Additional District Magistrate, a temporary-vacancy successor, and a Sub-divisional Magistrate mechanism layered on top. Section 15 lets the State Government additionally appoint Special Executive Magistrates — including, distinctively, serving police officers not below the rank of Superintendent — for particular areas or particular functions. Section 16 fixes how an Executive Magistrate's local jurisdiction is defined. Section 17 sets out the subordination chain running up to the District Magistrate.
The practical stakes: Executive Magistrates handle administrative and law-and-order functions, not adjudication of guilt (that boundary was fixed in section 3(2)) — so confirming that a particular order was within the competence of the Executive Magistrate who passed it, and that he held the power under a valid appointment or conferral, is a recurring first-line challenge.
:::

::: story The public-order order passed by an officer whose Executive Magistrate powers had never actually been conferred
A police officer of Superintendent rank, expecting to shortly be notified as a Special Executive Magistrate for a communally sensitive area, passes an order under a Sanhita provision reserved to Executive Magistrates — before the State Government's notification under section 15 has actually issued. The order is challenged. Section 15 requires the State Government to appoint and confer the power; a police officer's rank alone, however senior, does not itself carry Executive Magistrate powers. Until the appointment and conferral actually happen, any order purporting to exercise those powers is without jurisdiction — seniority and expectation are not a substitute for the statutory act of appointment.
:::

### The Act, decompiled

::: proviso Section 14 — Executive Magistrates
"14. (1) In every district, the State Government [[?may]] appoint as many persons as it thinks fit to be Executive Magistrates and [[!shall]] appoint one of them to be the District Magistrate.
(2) The State Government [[?may]] appoint any Executive Magistrate to be an Additional District Magistrate, and such Magistrate [[!shall]] have such of the powers of a District Magistrate under this Sanhita or under any other law for the time being in force as may be directed by the State Government.
(3) Whenever, in consequence of the office of a District Magistrate becoming vacant, any officer succeeds temporarily to the executive administration of the district, such officer [[!shall]], pending the orders of the State Government, exercise all the powers and perform all the duties respectively conferred and imposed by this Sanhita on the District Magistrate.
(4) The State Government [[?may]] place an Executive Magistrate in charge of a sub-division and [[?may]] relieve him of the charge as occasion requires; and the Magistrate so placed in charge of a sub-division [[!shall]] be called the Sub-divisional Magistrate.
(5) The State Government [[?may]], by general or special order and subject to such control and directions as it may deem fit to impose, delegate its powers under sub-section (4) to the District Magistrate.
(6) Nothing in this section [[!shall]] preclude the State Government from conferring, under any law for the time being in force, on a Commissioner of Police all or any of the powers of an Executive Magistrate."
:::

::: proviso Section 15 — Special Executive Magistrates
"15. The State Government [[?may]] appoint, for such term as it may think fit, Executive Magistrates or any police officer not below the rank of Superintendent of Police or equivalent, to be known as Special Executive Magistrates, for particular areas or for the performance of particular functions and confer on such Special Executive Magistrates such of the powers as are conferrable under this Sanhita on Executive Magistrates, as it may deem fit."
:::

::: proviso Section 16 — Local jurisdiction of Executive Magistrates
"16. (1) Subject to the control of the State Government, the District Magistrate [[?may]], from time to time, define the local limits of the areas within which the Executive Magistrates may exercise all or any of the powers with which they may be invested under this Sanhita.
(2) Except as otherwise provided by such definition, the jurisdiction and powers of every such Magistrate [[!shall]] extend throughout the district."
:::

::: proviso Section 17 — Subordination of Executive Magistrates
"17. (1) All Executive Magistrates [[!shall]] be subordinate to the District Magistrate, and every Executive Magistrate (other than the Sub-divisional Magistrate) exercising powers in a sub-division [[!shall]] also be subordinate to the Sub-divisional Magistrate, subject, to the general control of the District Magistrate.
(2) The District Magistrate [[?may]], from time to time, make rules or give special orders, consistent with this Sanhita, as to the distribution or allocation of business among the Executive Magistrates subordinate to him."
:::

### How this actually runs

<MicroTree
  input="An order or function is being exercised by someone claiming to act as an Executive Magistrate. Is the power actually held, and by the right officer?"
  :gates="[
    { q: 'Has the State Government actually appointed this person an Executive Magistrate under section 14, or specifically conferred Special Executive Magistrate powers under section 15?', note: 'Absent that appointment or conferral, rank or seniority alone — including a police officer of Superintendent rank awaiting notification — does not carry any Executive Magistrate power.', no: 'The person has no Executive Magistrate power to exercise at all; any order passed is without jurisdiction.' },
    { q: 'Is the function being exercised one of administration or law and order, rather than a determination of guilt exposing a person to punishment?', note: 'Executive Magistrates act within the administrative sphere carved out by section 3(2)(b); adjudication of guilt remains reserved to Judicial Magistrates under section 3(2)(a).', no: 'The function is outside Executive Magistrate competence regardless of any valid appointment.' },
    { q: 'Does the matter fall within the local limits the District Magistrate has defined for this Magistrate under section 16, or elsewhere in the district if no such definition exists?', note: 'Section 16(2) defaults jurisdiction to the whole district only where no specific local-limits definition has been made.', no: 'The order falls outside this Magistrate’s defined local limits and belongs to whichever Magistrate the definition actually covers.' },
    { q: 'If the order or exercise of power is challenged on appeal or revision, is the District Magistrate (or, in a sub-division, the Sub-divisional Magistrate) the correct supervisory authority under section 17?', note: 'The subordination chain runs Executive Magistrate to Sub-divisional Magistrate (where applicable) to District Magistrate, subject to the District Magistrate’s general control and any rules on distribution of business.', no: 'Section 17’s ordinary chain does not apply; identify the specific alternative authority the order in question actually provides for.' }
  ]"
  result="Whether the officer holds a valid appointment or conferral of Executive Magistrate power, whether the function exercised is administrative rather than adjudicative, whether the matter falls within the Magistrate’s defined local limits, and which supervisory authority governs a challenge, are each confirmed before relying on, or challenging, an Executive Magistrate’s order."
  resultKind="mandatory"
  caveat="A Superintendent-rank police officer does not automatically become a Special Executive Magistrate by virtue of rank; the section 15 appointment and conferral is a distinct statutory act that must actually have occurred."
/>

### In plain English

Sections 14 to 17 build the administrative side of the district machinery, parallel to but separate from the Judicial Magistracy of sections 9 to 13. Section 14 puts a District Magistrate at the top of every district's executive administration, appointed from among as many Executive Magistrates as the State Government thinks fit, with an Additional District Magistrate, a caretaker mechanism for when the post falls vacant, and a Sub-divisional Magistrate structure for sub-divisions. Section 15's Special Executive Magistrates are the distinctive feature — the State Government can hand Executive Magistrate powers to a serving police officer of Superintendent rank or above for a particular area or function, which is unusual precisely because it blends a police role with a magisterial one for a defined, narrow purpose. Section 16 is the geography — who draws an Executive Magistrate's local limits, and the district-wide default if nobody has. Section 17 is the reporting chain: every Executive Magistrate answers to the District Magistrate, with the Sub-divisional Magistrate as an intermediate layer where one exists.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 14 through 17 are believed to correspond to CrPC sections 20 through 23 respectively, with the substance of District Magistrate appointment, Special Executive Magistrates, local jurisdiction, and subordination carried forward largely unchanged. This correspondence should be independently verified against the CrPC text before being relied upon in drafting or argument.
:::

The core structure tracks the CrPC closely. Nothing in this cluster reflects the abolition of the Metropolitan Magistrate tier in the way sections 6 and 9 to 13 do, since Executive Magistrates were never part of that metropolitan track to begin with.

### Test your instinct

:::: instinct The Additional District Magistrate exercising a power never actually directed to him
An Additional District Magistrate, appointed under section 14(2), passes an order under a specific Sanhita provision that confers a power on "the District Magistrate." The State Government's order appointing him as Additional District Magistrate is silent on whether this particular power was directed to him. The order is challenged as having been passed without authority. Is the challenge correct?

::: ruling
Likely yes, subject to the exact terms of the State Government's direction. Section 14(2) gives an Additional District Magistrate only "such of the powers of a District Magistrate... as may be directed by the State Government" — it is not a blanket transfer of every District Magistrate power by the mere fact of appointment. Unless the specific power exercised was actually covered by the State Government's direction, the Additional District Magistrate did not hold it, and the order is open to challenge on that ground. The remedy for the challenger is to call for the State Government's actual direction and test the order against its precise scope.
:::
::::

:::: instinct The order passed at a place outside the notified local limits
An Executive Magistrate, whose local limits under section 16(1) have been defined by the District Magistrate as covering only sub-division A, purports to pass an order concerning a public-order matter arising in sub-division B of the same district. No separate Executive Magistrate has been shown to cover sub-division B specifically. Is the order valid?

::: ruling
No, on the facts as given. Section 16(1) allows the District Magistrate to define local limits, and once a specific definition exists, section 16(2)'s district-wide default no longer applies to that Magistrate — his jurisdiction and powers are confined to what the definition actually covers. An order concerning a matter in sub-division B, when his defined limits cover only sub-division A, is outside his jurisdiction, regardless of the general rule that jurisdiction otherwise extends throughout the district absent a specific definition.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority on the precise scope of section 14(2)'s "such of the powers... as may be directed," or on the boundary of Special Executive Magistrate conferrals under section 15, is confidently available for promotion here. This should be treated as a research gap to fill with current authority before relying on a specific citation in drafting or argument.
:::

#### Sword and shield

As a sword: a party benefiting from an Executive Magistrate's order relies on section 14's appointment machinery and section 16's local-limits definition to establish that the officer who passed the order actually held the power, in the right place. As a shield: a party resisting an Executive Magistrate's order tests exactly the same two points — was the power actually conferred (and, for an Additional District Magistrate, actually directed to him), and did the matter fall within the Magistrate's defined local limits — before conceding the order's validity on the merits.

#### The limitation clock

This cluster is definitional and structural; it does not itself start any limitation clock. Any limitation period runs from the substantive provision under which the Executive Magistrate's order was passed, not from sections 14 to 17.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Confirming whether a person is validly an Executive Magistrate or the District Magistrate | Section 14 | Check the State Government's actual appointment, and for an Additional District Magistrate, the specific direction of powers |
| Police officer purporting to exercise Executive Magistrate power by virtue of rank alone | Section 15 | No power exists absent an actual State Government appointment and conferral |
| Order passed outside an Executive Magistrate's defined area | Section 16 | Jurisdiction confined to the defined local limits; district-wide default applies only absent a specific definition |
| Identifying the correct supervisory authority for an Executive Magistrate's order | Section 17 | Sub-divisional Magistrate (if applicable), then District Magistrate |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Before relying on, or challenging, an Additional District Magistrate's order, call for the actual State Government direction under section 14(2) — do not assume every District Magistrate power passed automatically with the appointment.
2. Where a Special Executive Magistrate is a serving police officer, confirm the section 15 appointment and conferral actually issued before the date of the impugned act — an expectation of imminent notification is not the same as a completed appointment.
3. Check the District Magistrate's local-limits definition under section 16(1) before assuming district-wide jurisdiction; the district-wide default in section 16(2) yields entirely once a specific definition exists.

**Timing.** Raise a want-of-appointment or want-of-local-jurisdiction challenge to an Executive Magistrate's order at the earliest opportunity — as with the Judicial Magistracy provisions, this is a jurisdictional defect, and early identification strengthens rather than weakens the challenge.

**Model checklist before relying on an Executive Magistrate's order:**

1. Confirm the officer's appointment as Executive Magistrate, District Magistrate, Additional District Magistrate, or Special Executive Magistrate under section 14 or section 15.
2. For an Additional District Magistrate, confirm the specific State Government direction covering the power actually exercised.
3. Confirm the matter fell within the Magistrate's defined local limits under section 16, or the district-wide default if no definition exists.
4. Identify the correct supervisory authority under section 17 before filing an appeal or revision against the order.

---

## Sections 18–20 — Staffing the prosecution: Public Prosecutors, Assistant Public Prosecutors, and the Directorate of Prosecution's severity-tiered oversight

### The dispute this solves

::: oneminute This cluster builds the prosecution wing that stands opposite the defence in every criminal trial. Section 18 is the machinery for appointing Public Prosecutors and Additional Public Prosecutors — for the High Court, for districts, with a Delhi-specific proviso, a District Magistrate panel requirement, a Cadre-based appointment rule where a regular Cadre of Prosecuting Officers exists, a seven-year practice eligibility floor, and a Special Public Prosecutor track with a ten-year floor and a victim's-advocate proviso. Section 19 does the same for Assistant Public Prosecutors, who conduct prosecutions before Magistrates, with a proviso barring certain police officers from that role. Section 20 is new relative to the older framework's minimal treatment: it establishes a Directorate of Prosecution with a Director, Deputy Directors and Assistant Directors, and ties their monitoring powers to the severity of the punishment the offence carries.
The practical stakes: whether a prosecutor conducting a case was validly appointed, whether the Cadre rule was correctly applied, and which level of the Directorate is supposed to be monitoring a given case by reference to its punishment bracket, are all live questions a defence advocate can test.
:::

::: story The Public Prosecutor appointed outside the Cadre without recording why
A State has a regular Cadre of Prosecuting Officers that includes the post of Public Prosecutor and provides for promotion of Assistant Public Prosecutors into it. The State Government nonetheless appoints an outside advocate — from the District Magistrate's panel, not the Cadre — as Public Prosecutor for a district, without recording any opinion that no suitable person was available within the Cadre. Section 18(6) makes the Cadre-only rule the default, and the panel-based appointment only a fallback available where the State Government has formed the opinion that no suitable Cadre person is available. An appointment that bypasses the Cadre without that recorded opinion is open to challenge as inconsistent with section 18(6) — the panel proviso is an exception, not an alternative route the State Government may freely choose.
:::

### The Act, decompiled

::: proviso Section 18 — Public Prosecutors
"18. (1) For every High Court, the Central Government or the State Government [[!shall]], after consultation with the High Court, appoint a Public Prosecutor and [[?may]] also appoint one or more Additional Public Prosecutors, for conducting in such Court, any prosecution, appeal or other proceeding on behalf of the Central Government or the State Government, as the case may be:
Provided that for National Capital Territory of Delhi, the Central Government [[!shall]], after consultation with the High Court of Delhi, appoint the Public Prosecutor or Additional Public Prosecutors for the purposes of this sub-section.
(2) The Central Government [[?may]] appoint one or more Public Prosecutors for the purpose of conducting any case in any district or local area.
(3) For every district, the State Government [[!shall]] appoint a Public Prosecutor and [[?may]] also appoint one or more Additional Public Prosecutors for the district:
Provided that the Public Prosecutor or Additional Public Prosecutor appointed for one district [[?may]] be appointed also to be a Public Prosecutor or an Additional Public Prosecutor, as the case may be, for another district.
(4) The District Magistrate [[!shall]], in consultation with the Sessions Judge, prepare a panel of names of persons, who are, in his opinion fit to be appointed as Public Prosecutors or Additional Public Prosecutors for the district.
(5) No person [[!shall]] be appointed by the State Government as the Public Prosecutor or Additional Public Prosecutor for the district unless his name appears in the panel of names prepared by the District Magistrate under sub-section (4).
(6) Notwithstanding anything in sub-section (5), where in a State there exists a regular Cadre of Prosecuting Officers, the State Government [[!shall]] appoint a Public Prosecutor or an Additional Public Prosecutor only from among the persons constituting such Cadre:
Provided that where, in the opinion of the State Government, no suitable person is available in such Cadre for such appointment, that Government [[?may]] appoint a person as Public Prosecutor or Additional Public Prosecutor, as the case may be, from the panel of names prepared by the District Magistrate under sub-section (4).
Explanation.—For the purposes of this sub-section,—
(a) 'regular Cadre of Prosecuting Officers' means a Cadre of Prosecuting Officers which includes therein the post of Public Prosecutor, by whatever name called, and which provides for promotion of Assistant Public Prosecutors, by whatever name called, to that post;
(b) 'Prosecuting Officer' means a person, by whatever name called, appointed to perform the functions of a Public Prosecutor, Special Public Prosecutor, Additional Public Prosecutor or Assistant Public Prosecutor under this Sanhita.
(7) A person [[!shall]] be eligible to be appointed as a Public Prosecutor or an Additional Public Prosecutor under sub-section (1) or sub-section (2) or sub-section (3) or sub-section (6), only if he has been in practice as an advocate for not less than seven years.
(8) The Central Government or the State Government [[?may]] appoint, for the purposes of any case or class of cases, a person who has been in practice as an advocate for not less than ten years as a Special Public Prosecutor:
Provided that the Court [[?may]] permit the victim to engage an advocate of his choice to assist the prosecution under this sub-section.
(9) For the purposes of sub-section (7) and sub-section (8), the period during which a person has been in practice as an advocate, or has rendered (whether before or after the commencement of this Sanhita) service as a Public Prosecutor or as an Additional Public Prosecutor or Assistant Public Prosecutor or other Prosecuting Officer, by whatever name called, [[!shall]] be deemed to be the period during which such person has been in practice as an advocate."
:::

::: proviso Section 19 — Assistant Public Prosecutors
"19. (1) The State Government [[!shall]] appoint in every district one or more Assistant Public Prosecutors for conducting prosecutions in the Courts of Magistrates.
(2) The Central Government [[?may]] appoint one or more Assistant Public Prosecutors for the purpose of conducting any case or class of cases in the Courts of Magistrates.
(3) Without prejudice to provisions contained in sub-sections (1) and (2), where no Assistant Public Prosecutor is available for the purposes of any particular case, the District Magistrate [[?may]] appoint any other person to be the Assistant Public Prosecutor in charge of that case after giving notice of fourteen days to the State Government:
Provided that no police officer [[!shall]] be eligible to be appointed as an Assistant Public Prosecutor, if he—
(a) has taken any part in the investigation into the offence with respect to which the accused is being prosecuted; or
(b) is below the rank of Inspector."
:::

::: proviso Section 20 — Directorate of Prosecution
"20. (1) The State Government [[?may]] establish,—
(a) a Directorate of Prosecution in the State consisting of a Director of Prosecution and as many Deputy Directors of Prosecution as it thinks fit; and
(b) a District Directorate of Prosecution in every district consisting of as many Deputy Directors and Assistant Directors of Prosecution, as it thinks fit.
(2) A person [[!shall]] be eligible to be appointed,—
(a) as a Director of Prosecution or a Deputy Director of Prosecution, if he has been in practice as an advocate for not less than fifteen years or is or has been a Sessions Judge;
(b) as an Assistant Director of Prosecution, if he has been in practice as an advocate for not less than seven years or has been a Magistrate of the first class.
(3) The Directorate of Prosecution [[!shall]] be headed by the Director of Prosecution, who [[!shall]] function under the administrative control of the Home Department in the State.
(4) Every Deputy Director of Prosecution or Assistant Director of Prosecution [[!shall]] be subordinate to the Director of Prosecution; and every Assistant Director of Prosecution [[!shall]] be subordinate to the Deputy Director of Prosecution.
(5) Every Public Prosecutor, Additional Public Prosecutor and Special Public Prosecutor appointed by the State Government under sub-section (1) or sub-section (8) of section 18 to conduct cases in the High Court [[!shall]] be subordinate to the Director of Prosecution.
(6) Every Public Prosecutor, Additional Public Prosecutor and Special Public Prosecutor appointed by the State Government under sub-section (3) or sub-section (8) of section 18 to conduct cases in District Courts and every Assistant Public Prosecutor appointed under sub-section (1) of section 19 [[!shall]] be subordinate to the Deputy Director of Prosecution or the Assistant Director of Prosecution.
(7) The powers and functions of the Director of Prosecution [[!shall]] be to monitor cases in which offences are punishable for ten years or more, or with life imprisonment, or with death; to expedite the proceedings and to give opinion on filing of appeals.
(8) The powers and functions of the Deputy Director of Prosecution [[!shall]] be to examine and scrutinise police report and monitor the cases in which offences are punishable for seven years or more, but less than ten years, for ensuring their expeditious disposal.
(9) The functions of the Assistant Director of Prosecution [[!shall]] be to monitor cases in which offences are punishable for less than seven years.
(10) Notwithstanding anything contained in sub-sections (7), (8) and (9), the Director, Deputy Director or Assistant Director of Prosecution [[!shall]] have the power to deal with and be responsible for all proceedings under this Sanhita.
(11) The other powers and functions of the Director of Prosecution, Deputy Directors of Prosecution and Assistant Directors of Prosecution and the areas for which each of the Deputy Directors of Prosecution or Assistant Directors of Prosecution have been appointed [[!shall]] be such as the State Government may, by notification, specify.
(12) The provisions of this section [[!shall]] not apply to the Advocate General for the State while performing the functions of a Public Prosecutor."
:::

### How this actually runs

<MicroTree
  input="A Public Prosecutor, Additional Public Prosecutor, Special Public Prosecutor, or Assistant Public Prosecutor is conducting, or is about to conduct, a case. Is the appointment valid, and which tier of the Directorate of Prosecution is supposed to be monitoring it?"
  :gates="[
    { q: 'Is this a High Court-level appointment under section 18(1), with the National Capital Territory of Delhi proviso applying if relevant?', note: 'Confirm consultation with the High Court occurred, and, for Delhi, that the Central Government — not the State Government — made the appointment after consulting the High Court of Delhi.', no: 'The appointment falls to be tested under the district-level or Magistrate-court-level provisions instead.' },
    { q: 'Does a regular Cadre of Prosecuting Officers exist in the State for a district-level appointment under section 18(3)?', note: 'Section 18(6) requires the appointment to be made from within the Cadre; the District Magistrate’s panel under section 18(4) is available only where the State Government has recorded that no suitable Cadre person exists.', no: 'The District Magistrate’s panel under section 18(4) is the operative route, subject to the seven-year (or, for a Special Public Prosecutor, ten-year) practice threshold.' },
    { q: 'Is the proposed appointee a police officer being considered for an Assistant Public Prosecutor role under section 19(3)?', note: 'The proviso to section 19(3) bars any police officer who took part in investigating the very offence being prosecuted, or who is below the rank of Inspector, regardless of District Magistrate appointment.', no: 'The section 19(3) police-officer bar does not arise; proceed to confirm the ordinary eligibility and appointment route.' },
    { q: 'What is the maximum punishment for the offence being prosecuted — ten years or more (or life or death), seven to ten years, or less than seven years?', note: 'Section 20(7)-(9) ties monitoring to exactly this bracket: Director for the most severe tier, Deputy Director for the middle tier, Assistant Director for the least severe — though section 20(10) lets any of the three deal with and be responsible for any proceeding notwithstanding this tiering.', no: 'Confirm the punishment bracket before assuming which Directorate tier is the default monitor of the case.' }
  ]"
  result="Which authority appointed the prosecutor, whether the Cadre rule or the panel fallback governed that appointment, whether the section 19(3) police-officer bar excludes a proposed Assistant Public Prosecutor, and which tier of the Directorate of Prosecution is the default monitor given the offence's punishment bracket, are each confirmed before relying on, or challenging, a prosecutor's conduct of a case."
  resultKind="mandatory"
  caveat="Section 20(10) means the severity-tiering in sub-sections (7) to (9) fixes a default monitoring responsibility, not an exclusive jurisdiction — any of the Director, Deputy Director, or Assistant Director may deal with and be responsible for any proceeding under the Sanhita notwithstanding the tier a case would ordinarily fall into."
/>

### In plain English

Sections 18 to 20 staff the prosecution side of every criminal case, top to bottom. Section 18 is mostly about who appoints the Public Prosecutor and Additional Public Prosecutors at the High Court and district level, and the two big constraints on that choice: a minimum seven years in practice (ten for a Special Public Prosecutor), and — where a State has built a proper Cadre of career prosecutors — a default rule that appointments come from that Cadre rather than an open panel, unless the State Government has actually recorded that no suitable Cadre candidate exists. Section 19 does the equivalent job one rung down, for Assistant Public Prosecutors who appear before Magistrates, with one sharp exclusion: a police officer cannot be appointed to prosecute a case he had a hand in investigating, and in any event must be at least an Inspector. Section 20 is the newer oversight layer — a Directorate of Prosecution that supervises prosecutors, with the striking design choice of tying supervisory intensity to how serious the offence is: the Director watches the gravest cases (ten-year-plus, life, or death), the Deputy Director the mid-tier, and the Assistant Director the rest, though any of the three can step into any case regardless of this default tiering.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 18 and 19 are believed to correspond substantially to CrPC sections 24 and 25 respectively, carrying forward the same Public Prosecutor and Assistant Public Prosecutor appointment machinery with the Cadre-based rule. Section 20's Directorate of Prosecution, with its punishment-severity-tiered monitoring structure, is believed to correspond to CrPC section 25A, inserted into the CrPC by later amendment. These correspondences should be independently verified against the CrPC text, including the amended CrPC section 25A, before being relied upon in drafting or argument.
:::

The prosecution-appointment machinery in sections 18 and 19 tracks the CrPC's equivalent provisions closely. Section 20's severity-tiered monitoring structure for the Directorate of Prosecution is not a BNSS innovation from a blank slate — it mirrors the CrPC's own later-inserted Directorate of Prosecution provision — but its presence as a fully integrated part of the Sanhita from commencement, rather than a later amendment, is itself a signal that this oversight layer is meant to be treated as core structure rather than an optional add-on.

### Test your instinct

:::: instinct The Cadre-eligible district where the State appointed from the panel anyway
A district has a functioning Cadre of Prosecuting Officers satisfying the Explanation to section 18(6). The State Government nonetheless appoints a senior advocate from the District Magistrate's panel as Public Prosecutor, stating only that it preferred an experienced outside advocate — without recording any opinion that no suitable person was available within the Cadre. A defence advocate challenges the Public Prosecutor's authority to conduct the trial. Is the challenge correct?

::: ruling
Likely yes, on these facts. Section 18(6) makes Cadre-based appointment the rule wherever a regular Cadre exists, and the panel route under section 18(4) is available only through the proviso — triggered specifically by the State Government's opinion that no suitable Cadre person is available. A stated preference for an outside advocate's experience is not the same as an opinion of Cadre unsuitability, and does not satisfy the proviso's trigger. Absent that recorded opinion, the appointment sits outside section 18(6)'s framework and is open to challenge.
:::
::::

:::: instinct The Inspector who investigated the case being proposed as Assistant Public Prosecutor for the same case
Due to a shortage of Assistant Public Prosecutors, the District Magistrate proposes to appoint, under section 19(3), an Inspector who personally led the investigation into the very offence now going to trial, to conduct the prosecution of that same case. Is the appointment valid?

::: ruling
No. The proviso to section 19(3) is unambiguous on this exact point: a police officer is ineligible for appointment as Assistant Public Prosecutor if he has taken any part in the investigation into the offence with respect to which the accused is being prosecuted. The officer's rank — Inspector, which clears the separate rank-based bar — does not cure this independent disqualification. The two grounds in the proviso are cumulative safeguards, not alternatives; failing either one is enough to bar the appointment.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority on the Cadre-versus-panel trigger under section 18(6), or on the Directorate of Prosecution's severity-tiered monitoring under section 20, is confidently available for promotion here. Given that the equivalent Directorate of Prosecution provision was inserted into the CrPC relatively recently by amendment, any case law is likely to be CrPC-era interpretation of that inserted section 25A rather than BNSS-specific — this should be independently researched and verified before being relied upon in drafting or argument.
:::

#### Sword and shield

As a sword: a prosecution relies on section 18's appointment machinery to establish that the Public Prosecutor conducting the case was validly appointed — through the Cadre where one exists, or the panel where the proviso's conditions are met — and on section 20(10) to resist any argument that a case was being handled by the "wrong" tier of the Directorate. As a shield: a defence advocate tests the same appointment chain for a Cadre-bypass defect under section 18(6), and separately tests any Assistant Public Prosecutor appointment against the section 19(3) proviso's dual bar on police officers who investigated the case or who rank below Inspector.

#### The limitation clock

This cluster is appointment and oversight machinery; it does not itself start a limitation clock. Any limitation period for the underlying offence runs from the substantive provisions governing that offence and its procedure, not from sections 18 to 20.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Testing whether a Public Prosecutor's district-level appointment was valid | Section 18(4)-(6) | Cadre-based appointment is the rule; panel appointment requires a recorded State Government opinion of Cadre unsuitability |
| Engaging a Special Public Prosecutor, including a victim's own advocate | Section 18(8) | Ten-year practice threshold for the Special Public Prosecutor; Court's permission needed for the victim's advocate to assist |
| Proposing a police officer as Assistant Public Prosecutor | Proviso to section 19(3) | Barred if he investigated the offence, or is below the rank of Inspector |
| Identifying which Directorate tier is the default monitor of a case | Section 20(7)-(9) | Tied to the offence's punishment bracket; any tier may still act under section 20(10) |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Before conceding a Public Prosecutor's appointment, check whether the district has a regular Cadre of Prosecuting Officers under the Explanation to section 18(6) and, if so, demand the State Government's recorded opinion justifying any panel-based appointment instead.
2. When an Assistant Public Prosecutor is a police officer, always check both limbs of the section 19(3) proviso — investigation involvement and rank — independently; clearing one does not cure a failure on the other.
3. Do not treat section 20's severity tiering as jurisdictional — section 20(10) allows any tier of the Directorate to act on any case, so an argument that "the wrong Director level" handled a case is unlikely to succeed as a standalone challenge.

**Timing.** Raise a Cadre-bypass or police-officer-eligibility challenge to a prosecutor's appointment as early as possible, ideally before the trial proceeds substantially — waiting until after an adverse verdict invites an argument that the challenge is an afterthought rather than a genuine jurisdictional objection.

**Model checklist before accepting a prosecutor's appearance:**

1. Confirm the level of appointment — High Court, district, or Magistrate's court — and the corresponding appointing authority under section 18 or section 19.
2. Where a Cadre exists, confirm the appointment came from the Cadre, or that the State Government recorded the requisite opinion under the proviso to section 18(6).
3. For a police officer proposed as Assistant Public Prosecutor, independently check both limbs of the proviso to section 19(3).
4. Note the offence's punishment bracket to identify which Directorate of Prosecution tier is the default monitor under section 20, while remembering section 20(10)'s override.

---