# Chapter XI — Maintenance of Public Order and Tranquillity

## Sections 148–151 — Dispersing an unlawful assembly: civil force first, the armed forces as a last resort, and the immunity that protects everyone who acts in good faith

### The dispute this solves

::: oneminute Chapter XI, Part A builds an escalation ladder for an unlawful assembly that will not disperse — civil police first, armed forces only if civil force genuinely cannot do the job, and a lone armed-forces officer only when no Magistrate can be reached at all — with a shared good-faith immunity running across all three rungs.
An unlawful assembly, or any assembly of five or more persons likely to cause a disturbance of the public peace, does not become the armed forces' problem on day one. Section 148 gives an Executive Magistrate or a police officer of at least sub-inspector rank the first and ordinary power: command the assembly to disperse, and use civil force if it does not. Section 149 is the next rung, available only when the assembly "cannot otherwise be dispersed" and public security genuinely requires it — the District Magistrate, or an Executive Magistrate he has authorised, may then call in the armed forces. Section 150 is the emergency valve for when even that chain of command breaks down: no Executive Magistrate can be communicated with at all, and a commissioned or gazetted armed-forces officer must act on his own judgment — but the moment communication becomes possible, he must defer to the Magistrate's instructions. Section 151 binds the whole Part together with a protective mechanism: no prosecution for an act purportedly done under any of these three sections without government sanction, and a good-faith immunity for everyone who acted within them.
:::

::: story The officer who acted alone because no Magistrate could be reached
A large assembly turns genuinely dangerous — public security is manifestly endangered — in a location where, despite real effort, no Executive Magistrate can be communicated with in time. A gazetted officer of the armed forces present at the scene takes independent action under section 150, dispersing the assembly and arresting some of those involved. Twenty minutes later, communication with a Magistrate becomes possible. From that moment, section 150 itself requires the officer to stop acting on his own judgment and instead "obey the instructions of the Magistrate, as to whether he shall or shall not continue such action" — the independent power is a stopgap for the communication gap, not a standing authority that persists once the gap closes.
:::

### The Act, decompiled

::: proviso Section 148 — Dispersal of assembly by use of civil force
"148. (1) Any Executive Magistrate or officer in charge of a police station or, in the absence of such officer in charge, any police officer, not below the rank of a sub-inspector, [[?may]] command any unlawful assembly, or any assembly of five or more persons likely to cause a disturbance of the public peace, to disperse; and it [[!shall]] thereupon be the duty of the members of such assembly to disperse accordingly.
(2) If, upon being so commanded, any such assembly does not disperse, or if, without being so commanded, it conducts itself in such a manner as to show a determination not to disperse, any Executive Magistrate or police officer referred to in sub-section (1), [[?may]] proceed to disperse such assembly by force, and [[?may]] require the assistance of any person, not being an officer or member of the armed forces and acting as such, for the purpose of dispersing such assembly, and, if necessary, arresting and confining the persons who form part of it, in order to disperse such assembly or that they may be punished according to law."
:::

::: proviso Section 149 — Use of armed forces to disperse assembly
"149. (1) If any assembly referred to in sub-section (1) of section 148 cannot otherwise be dispersed, and it is necessary for the public security that it should be dispersed, the District Magistrate or any other Executive Magistrate authorised by him, who is present, [[?may]] cause it to be dispersed by the armed forces.
(2) Such Magistrate [[?may]] require any officer in command of any group of persons belonging to the armed forces to disperse the assembly with the help of the armed forces under his command, and to arrest and confine such persons forming part of it as the Executive Magistrate may direct, or as it may be necessary to arrest and confine in order to disperse the assembly or to have them punished according to law.
(3) Every such officer of the armed forces [[!shall]] obey such requisition in such manner as he thinks fit, but in so doing he [[!shall]] use as little force, and do as little injury to person and property, as may be consistent with dispersing the assembly and arresting and detaining such persons."
:::

::: proviso Section 150 — Power of certain armed force officers to disperse assembly
"150. When the public security is manifestly endangered by any such assembly and no Executive Magistrate can be communicated with, any commissioned or gazetted officer of the armed forces [[?may]] disperse such assembly with the help of the armed forces under his command, and [[?may]] arrest and confine any persons forming part of it, in order to disperse such assembly or that they may be punished according to law; but if, while he is acting under this section, it becomes practicable for him to communicate with an Executive Magistrate, he [[!shall]] do so, and [[!shall]] thenceforward obey the instructions of the Magistrate, as to whether he shall or shall not continue such action."
:::

::: proviso Section 151 — Protection against prosecution for acts done under sections 148, 149 and 150
"151. (1) No prosecution against any person for any act purporting to be done under section 148, section 149 or section 150 [[!shall]] be instituted in any Criminal Court except—
(a) with the sanction of the Central Government where such person is an officer or member of the armed forces;
(b) with the sanction of the State Government in any other case.
(2) (a) No Executive Magistrate or police officer acting under any of the said sections in good faith;
(b) no person doing any act in good faith in compliance with a requisition under section 148 or section 149;
(c) no officer of the armed forces acting under section 150 in good faith;
(d) no member of the armed forces doing any act in obedience to any order which he was bound to obey,
[[!shall]] be deemed to have thereby committed an offence.
(3) In this section and in the preceding sections of this Chapter,—
(a) the expression 'armed forces' means the army, naval and air forces, operating as land forces and includes any other armed forces of the Union so operating;
(b) 'officer', in relation to the armed forces, means a person commissioned, gazetted or in pay as an officer of the armed forces and includes a junior commissioned officer, a warrant officer, a petty officer, a non-commissioned officer and a non-gazetted officer;
(c) 'member', in relation to the armed forces, means a person in the armed forces other than an officer."
:::

### How this actually runs

<MicroTree
  input="An unlawful assembly, or an assembly of five or more persons likely to cause a disturbance of the public peace, needs to be dispersed. Which rung of the ladder applies?"
  :gates="[
    { q: 'Has an Executive Magistrate or a police officer of at least sub-inspector rank commanded the assembly to disperse, and can it still be handled with ordinary civil force?', note: 'Section 148 applies. The officer may disperse the assembly by force if it does not comply, and may enlist assistance from civilians who are not acting as armed-forces personnel.', no: 'Move to the armed-forces question.' },
    { q: 'Has the assembly proved impossible to disperse otherwise, with public security genuinely requiring dispersal, and is a District Magistrate or an authorised Executive Magistrate present to make that call?', note: 'Section 149 applies. That Magistrate may requisition the armed forces, with the requisitioned officer obliged to use only as much force as is consistent with dispersing the assembly.', no: 'Move to the no-Magistrate-available question.' },
    { q: 'Is public security manifestly endangered and is no Executive Magistrate at all reachable to authorise action?', note: 'Section 150 applies. A commissioned or gazetted armed-forces officer may act on his own judgment, but must defer to the instructions of an Executive Magistrate the moment communication becomes possible.', no: 'None of the three dispersal powers is engaged on these facts.' },
    { q: 'Is a prosecution now being considered against someone for an act purportedly done under sections 148, 149, or 150?', note: 'Section 151 requires Central Government sanction if the person is an officer or member of the armed forces, State Government sanction in any other case, and provides a good-faith immunity across all three sections regardless.', no: 'No section 151 sanction question yet arises.' }
  ]"
  result="Which rung of the civil-force-then-armed-forces-then-lone-officer ladder actually applies is confirmed, together with whether the section 151 sanction requirement and good-faith immunity are in play, before any dispersal action is assessed."
  resultKind="mandatory"
  caveat="Section 150's independent armed-forces power lasts only as long as no Magistrate can be reached — it does not survive the moment communication becomes practicable, at which point the officer must obey the Magistrate's instructions."
/>

### In plain English

Part A is built as a genuine escalation ladder, not three interchangeable options. Section 148 is the default and by far the most common: an Executive Magistrate or a sufficiently senior police officer orders an unlawful or dangerously large assembly to disperse, using civil force and civilian assistance if needed. Section 149 exists for the harder case — where civil force genuinely cannot do the job and public security is actually at stake — and even then, only a District Magistrate or someone he has specifically authorised can pull the armed-forces lever, with the requisitioned officer bound to use the minimum force consistent with the task. Section 150 is the true emergency provision, triggered only by the total unavailability of an Executive Magistrate, and it self-limits by design: the independent authority evaporates the instant a Magistrate becomes reachable. Section 151 is what makes the whole ladder usable in practice — without it, every officer at every rung would face open-ended personal criminal exposure for split-second calls made in good faith during a live public-order crisis. The section does two different things at once: it raises the bar for prosecution (government sanction, calibrated to whether the person belongs to the armed forces or not), and separately, it grants outright immunity from being deemed to have committed an offence at all, for anyone who acted in good faith within the specific section they were operating under.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 148, 149, 150, and 151 are provisionally mapped to CrPC sections 129, 130, 131, and 132 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The structure — command to disperse, armed-forces requisition where civil force fails, a lone-officer emergency power, and a shared sanction-and-immunity provision — tracks the presumed CrPC ancestor closely, with no obvious substantive departure apparent on the face of the operative language.

### Test your instinct

:::: instinct The civilian conscripted to help disperse a crowd
An Executive Magistrate commanding an unlawful assembly to disperse under section 148 asks a bystander, who is not a police officer or member of the armed forces, to help physically disperse the crowd. The bystander later asks whether he had any obligation to comply, and whether he is protected if he does.
::: ruling What actually happens
Section 148(2) expressly allows the Magistrate or officer to "require the assistance of any person, not being an officer or member of the armed forces and acting as such" for exactly this purpose. Section 151(2)(b) then protects "any person doing any act in good faith in compliance with a requisition under section 148 or section 149" from being deemed to have committed an offence. The bystander who complies in good faith is protected; the statutory scheme is built on the assumption that ordinary civilian assistance may genuinely be needed at this rung.
:::
::::

:::: instinct The prosecution filed without any government sanction
A private complainant, dissatisfied with how a dispersal operation under section 149 was carried out, files a criminal complaint directly against the requisitioned armed-forces officer, without seeking any sanction from either government.
::: ruling What actually happens
Section 151(1) is an express bar: "No prosecution against any person for any act purporting to be done under section 148, section 149 or section 150 shall be instituted in any Criminal Court except" with the relevant sanction — Central Government sanction because the person is an officer of the armed forces. A complaint filed without that sanction has not cleared a mandatory statutory precondition to institution of the prosecution at all, independent of whether the underlying conduct was in good faith.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Part A's dispersal powers are exercised comparatively rarely relative to their potential for high-profile litigation, and are more often the subject of specific-fact High Court review than a single generally applicable Supreme Court ratio on this particular chain of provisions.
:::

#### Sword and shield

As a **sword**, the authorities have an escalating, purpose-built set of tools to disperse a genuinely dangerous assembly, calibrated to how far the situation has deteriorated and to who is actually available to act. As a **shield**, any officer, civilian assistant, or armed-forces member facing a prosecution for acts done under sections 148 to 150 can invoke both limbs of section 151 — the absence of the required government sanction as a threshold bar to the prosecution's institution, and good faith as a complete answer on the merits if the prosecution does clear that threshold.

#### The limitation clock

None of sections 148 to 151 imposes a fixed limitation period of its own; section 151(1)'s sanction requirement is a precondition to institution, not a time-bound clock, and it should be checked at the earliest possible stage of any prosecution arising under this Part.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Unlawful or dangerously large assembly, ordinary civil force sufficient | Section 148 | Command to disperse, force if non-compliant |
| Assembly cannot otherwise be dispersed, public security at stake | Section 149 | District Magistrate or authorised Executive Magistrate requisitions armed forces |
| No Executive Magistrate reachable, public security manifestly endangered | Section 150 | Commissioned or gazetted armed-forces officer acts independently, subject to deferring once a Magistrate is reachable |
| Prosecution proposed for an act under sections 148–150 | Section 151 | Government sanction required; good-faith immunity available on the merits |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not conflate the section 149 and section 150 powers — section 149 requires a Magistrate present to authorise armed-forces action, while section 150 is available only in the Magistrate's total absence.
2. Do not overlook section 151(1)'s sanction requirement as a threshold objection to any prosecution arising under this Part — it should be the first point checked, before any merits-based good-faith defence.
3. Do not assume a section 150 officer's authority continues after a Magistrate becomes reachable — the section itself terminates the independent power at that point.

**Timing.** Raise the absence of the required section 151(1) sanction at the earliest possible stage — ideally before charge, as a threshold bar to the prosecution's institution rather than as a trial-stage defence.

**Model checklist for advising an officer involved in a dispersal operation:**

1. Identify precisely which of sections 148, 149, or 150 governed the specific action taken, and confirm the statutory preconditions for that section were met.
2. Confirm whether the required government sanction under section 151(1) has been obtained before any prosecution proceeds.
3. Document the good-faith basis for the action taken, to support the section 151(2) immunity if the sanction threshold is cleared.

---

## Sections 152–155 — The conditional order that starts a public-nuisance proceeding, how it reaches the person it is aimed at, and what happens if that person does nothing

### The dispute this solves

::: oneminute Part B's public-nuisance machinery begins with a conditional order — not yet binding, but requiring the person it names either to comply or to show up and contest it — and section 155 supplies the automatic consequence of simply ignoring it.
Section 152 gives a District Magistrate, Sub-divisional Magistrate, or specially empowered Executive Magistrate a broad but enumerated power to act against six categories of public nuisance: unlawful obstruction of a public way, an injurious trade or stored goods, dangerous construction, a building or tree at risk of falling, an unfenced dangerous tank or well, or a dangerous animal. The order the Magistrate makes is deliberately conditional — it requires the named person either to perform the specified act within a fixed time, or to appear and show cause why the order should not be made absolute. Sections 153 to 155 then supply the procedural mechanics that turn that conditional order into something enforceable: how it must be served or notified, what the addressee must actually do, and what happens automatically if he does neither.
:::

::: story The trader who ignored the order rather than contest it
A person conducts a trade that a Magistrate, after receiving a police report and taking such evidence as he thinks fit, considers injurious to the health of the surrounding community. The Magistrate makes a conditional order under section 152 requiring the trader either to cease the trade within a fixed time or to appear and show cause against the order. The trader does neither — he simply continues as before, engaging with neither branch of the order. Section 155 answers what follows: because he "does not perform such act or appear and show cause," he becomes liable to the penalty under section 223 of the Bharatiya Nyaya Sanhita, 2023, and — just as significantly — "the order shall be made absolute" without any further hearing on the merits. Silence is not a safe option under this scheme; it is functionally equivalent to conceding the case.
:::

### The Act, decompiled

::: proviso Section 152 — Conditional order for removal of nuisance
"152. (1) Whenever a District Magistrate or a Sub-divisional Magistrate or any other Executive Magistrate specially empowered in this behalf by the State Government, on receiving the report of a police officer or other information and on taking such evidence (if any) as he thinks fit, considers—
(a) that any unlawful obstruction or nuisance should be removed from any public place or from any way, river or channel which is or may be lawfully used by the public; or
(b) that the conduct of any trade or occupation, or the keeping of any goods or merchandise, is injurious to the health or physical comfort of the community, and that in consequence such trade or occupation should be prohibited or regulated or such goods or merchandise should be removed or the keeping thereof regulated; or
(c) that the construction of any building, or, the disposal of any substance, as is likely to occasion conflagration or explosion, should be prevented or stopped; or
(d) that any building, tent or structure, or any tree is in such a condition that it is likely to fall and thereby cause injury to persons living or carrying on business in the neighbourhood or passing by, and that in consequence the removal, repair or support of such building, tent or structure, or the removal or support of such tree, is necessary; or
(e) that any tank, well or excavation adjacent to any such way or public place should be fenced in such manner as to prevent danger arising to the public; or
(f) that any dangerous animal should be destroyed, confined or otherwise disposed of,
such Magistrate [[?may]] make a conditional order requiring the person causing such obstruction or nuisance, or carrying on such trade or occupation, or keeping any such goods or merchandise, or owning, possessing or controlling such building, tent, structure, substance, tank, well or excavation, or owning or possessing such animal or tree, within a time to be fixed in the order—
(i) to remove such obstruction or nuisance; or
(ii) to desist from carrying on, or to remove or regulate in such manner as may be directed, such trade or occupation, or to remove such goods or merchandise, or to regulate the keeping thereof in such manner as may be directed; or
(iii) to prevent or stop the construction of such building, or to alter the disposal of such substance; or
(iv) to remove, repair or support such building, tent or structure, or to remove or support such trees; or
(v) to fence such tank, well or excavation; or
(vi) to destroy, confine or dispose of such dangerous animal in the manner provided in the said order,
or, if he objects so to do, to appear before himself or some other Executive Magistrate subordinate to him at a time and place to be fixed by the order, and show cause, in the manner hereinafter provided, why the order should not be made absolute.
(2) No order duly made by a Magistrate under this section [[!shall]] be called in question in any Civil Court.
Explanation.—A 'public place' includes also property belonging to the State, camping grounds and grounds left unoccupied for sanitary or recreative purposes."
:::

::: proviso Section 153 — Service or notification of order
"153. (1) The order [[!shall]], if practicable, be served on the person against whom it is made, in the manner herein provided for service of summons.
(2) If such order cannot be so served, it [[!shall]] be notified by proclamation published in such manner as the State Government may, by rules, direct, and a copy thereof [[!shall]] be stuck up at such place or places as may be fittest for conveying the information to such person."
:::

::: proviso Section 154 — Person to whom order is addressed to obey or show cause
"154. The person against whom such order is made [[!shall]]—
(a) perform, within the time and in the manner specified in the order, the act directed thereby; or
(b) appear in accordance with such order and show cause against the same;
and such appearance or hearing [[?may]] be permitted through audio-video conferencing."
:::

::: proviso Section 155 — Penalty for failure to comply with section 154
"155. If the person against whom an order is made under section 154 does not perform such act or appear and show cause, he [[!shall]] be liable to the penalty specified in that behalf in section 223 of the Bharatiya Nyaya Sanhita, 2023, and the order [[!shall]] be made absolute."
:::

### How this actually runs

<MicroTree
  input="A Magistrate has identified a possible public nuisance within one of section 152's six categories. What follows, and what does the addressee need to do?"
  :gates="[
    { q: 'Does the situation fall within one of the six categories in section 152(1)(a)-(f) — obstruction, injurious trade or goods, dangerous construction, a failing building or tree, an unfenced hazard, or a dangerous animal — and does the Magistrate consider action necessary?', note: 'Section 152 applies. The Magistrate may make a conditional order requiring the named person to either perform the specified act or appear and show cause, and that order is not open to challenge in a Civil Court.', no: 'No section 152 conditional order is available on these facts.' },
    { q: 'Has the order been served on the person against whom it is made?', note: 'Section 153(1) requires service in the manner provided for summons, where practicable; if that is not practicable, section 153(2) requires notification by proclamation and posting at a fitting place.', no: 'Service or notification under section 153 must be completed before the order can operate against the addressee.' },
    { q: 'Has the addressee performed the directed act, or appeared and shown cause against the order, within the time specified?', note: 'Section 154 is satisfied either way; appearance or hearing may be conducted through audio-video conferencing.', no: 'Section 155 applies: the person becomes liable to the section 223 Bharatiya Nyaya Sanhita penalty, and the order is made absolute without further hearing.' }
  ]"
  result="Whether a section 152 conditional order is available at all, whether it has been properly served or notified under section 153, and whether the addressee has actually complied with section 154 or instead triggered section 155's automatic consequences, is confirmed before the proceeding is treated as settled."
  resultKind="mandatory"
  caveat="Section 155's consequence is automatic on the addressee's inaction — there is no additional notice-and-hearing step before the order is made absolute; the addressee's opportunity was the section 154 choice itself."
/>

### In plain English

Section 152's six categories are not a general nuisance power in disguise — they are a closed, enumerated list, each targeting a specific, concrete kind of hazard: an obstruction on a public way, a trade or stored goods injurious to community health, dangerous construction, a failing structure or tree, an unfenced hazard, or a dangerous animal. The order the Magistrate makes is deliberately not final — it is "conditional," giving the addressee two genuine choices: comply within the fixed time, or contest the order by appearing and showing cause. Section 152(2)'s bar on civil-court challenge is a significant feature, not a footnote — it channels any dispute about the order back into the Magistrate's own process rather than allowing a parallel civil suit to stall it. Sections 153 to 155 are the machinery that makes the conditional order bite: proper service (or, failing that, public notification) under section 153 is the precondition for the order to operate against the addressee at all; section 154 crystallises the addressee's obligation into the same binary choice the original order offered, now with the added, practically significant flexibility of appearing through audio-video conferencing rather than requiring physical attendance; and section 155 is the section that gives the whole structure its teeth — silence or inaction is treated as functionally equivalent to a decision not to contest, triggering both a criminal penalty and the automatic conversion of the conditional order into an absolute one.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 152, 153, 154, and 155 are provisionally mapped to CrPC sections 133, 134, 135, and 136 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The six-category structure and the conditional-order mechanism appear to closely track the presumed CrPC ancestor provisions. Section 154's express allowance for appearance or hearing "through audio-video conferencing" reads as a genuine, technology-driven addition; if the presumed CrPC ancestor provision did not contain an equivalent express audio-video conferencing allowance, this would be a real point of departure and should be flagged and confirmed independently before being relied upon in any filing.

### Test your instinct

:::: instinct The order the addressee tried to fight in a civil suit
A person against whom a section 152 conditional order is made, unhappy with its terms, files a civil suit seeking a declaration that the order is invalid, instead of appearing before the Magistrate to show cause.
::: ruling What actually happens
Section 152(2) squarely forecloses this route: "No order duly made by a Magistrate under this section shall be called in question in any Civil Court." The civil suit is not the correct forum for challenging the order's validity; the addressee's remedy lies within the statutory scheme itself — appearing and showing cause under section 154(b), and, if unsuccessful there, pursuing whatever supervisory or appellate remedies the broader framework allows, not a parallel civil challenge.
:::
::::

:::: instinct The hearing conducted entirely by video link
A person against whom a section 152 order is made wishes to show cause but is unable to travel to the Magistrate's court in person. He asks whether he must appear physically or can participate remotely.
::: ruling What actually happens
Section 154 expressly answers this: "such appearance or hearing may be permitted through audio-video conferencing." Physical presence is not a mandatory precondition to exercising the show-cause option under section 154(b); the addressee can request that the appearance or hearing be conducted remotely, subject to the Magistrate permitting it.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. Conditional orders under section 152 are typically the subject of High Court supervisory review on individual facts rather than a single generally applicable Supreme Court ratio on this specific cluster of provisions.
:::

#### Sword and shield

As a **sword**, a Magistrate (acting on a police report or other information) can compel a person maintaining a genuine public nuisance within one of the six enumerated categories to act, backed by an automatic-absolute-order consequence for inaction. As a **shield**, the addressee's entire defence runs through section 154(b) — appearing and showing cause, now available through audio-video conferencing — since section 152(2) closes off any collateral civil-court challenge, and section 155 makes inaction itself the functional equivalent of losing the case.

#### The limitation clock

None of sections 152 to 155 fixes a limitation period of its own; the operative "clock" is the time fixed in the section 152 conditional order itself for either compliance or appearance, and missing that window is what triggers section 155's automatic consequences.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Public nuisance within one of section 152's six categories | Section 152 | Conditional order made, not challengeable in Civil Court |
| Order needs to reach the addressee | Section 153 | Service in summons manner, or proclamation and posting if service is impracticable |
| Addressee decides how to respond | Section 154 | Perform the act, or appear (in person or via audio-video conferencing) and show cause |
| Addressee does neither | Section 155 | Section 223 Bharatiya Nyaya Sanhita penalty; order made absolute |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not advise a client to challenge a section 152 order by civil suit — section 152(2) forecloses that route; the correct forum is the show-cause process itself.
2. Do not treat inaction as a neutral, cost-free option for a client served with a section 152 order — section 155 converts inaction directly into penal liability and an absolute order.
3. Confirm whether service was actually effected under section 153 before assuming section 155's consequences have properly crystallised against a particular client.

**Timing.** Advise a client served with a section 152 order to decide immediately between compliance and appearance — there is no safe middle ground, and section 155's consequences attach automatically once the fixed time lapses without either.

**Model checklist for a client served with a section 152 order:**

1. Confirm the order falls within one of the six enumerated section 152(1) categories, and consider whether it does not (a potential ground to contest).
2. Confirm service was properly effected under section 153.
3. Decide promptly between compliance within the fixed time and appearing to show cause, noting the audio-video conferencing option under section 154.
4. If contesting, prepare to show cause on the merits at the Magistrate's hearing, not through a separate civil proceeding.

---

## Sections 156–158 — What happens when the person contesting the order denies the public even has a right to use the place, how the show-cause hearing actually runs, and the Magistrate's power to bring in outside help

### The dispute this solves

::: oneminute A person shown cause under section 152 might deny that any public right exists at all in the way, river, or place in question — section 156 routes that specific denial to a civil court, while sections 157 and 158 govern the ordinary show-cause hearing and the Magistrate's power to call on an investigator or expert.
Not every section 152 order about obstruction or nuisance to a public way is actually about how the obstruction is being caused — sometimes the real dispute is whether the public has any right to use the way, river, channel, or place at all. Section 156 exists for exactly that scenario, and it deliberately takes the underlying property-rights question away from the Magistrate: if the person shows genuine, reliable evidence denying the public right, the Magistrate stays the nuisance proceeding until a competent Civil Court decides the rights question, rather than deciding it himself. Section 157 governs the ordinary run of show-cause hearings where no such denial is raised — evidence as in a summons-case, an absolute order if the Magistrate is satisfied, and a genuinely tight statutory clock: completion within ninety days, extendable to one hundred and twenty only for reasons recorded in writing. Section 158 gives the Magistrate two investigative tools for either kind of inquiry — a local investigation, or an expert witness.
:::

::: story The denial that was never backed up
A person shown cause against a section 152 order concerning an alleged obstruction of a public path is asked by the Magistrate, under section 156(1), whether he denies the existence of any public right in the path. He says yes, he denies it — but when asked to support that denial, he produces nothing beyond his own bare assertion. Section 156(2) is explicit about what happens to a denial with no reliable evidence behind it: the Magistrate does not stay the proceedings for a civil court to decide the point; instead, he "shall proceed as laid down in section 157" — treating the denial as though it had not been credibly raised at all, and section 156(3) permanently forecloses the person from raising that denial again later in the same proceedings.
:::

### The Act, decompiled

::: proviso Section 156 — Procedure where existence of public right is denied
"156. (1) Where an order is made under section 152 for the purpose of preventing obstruction, nuisance or danger to the public in the use of any way, river, channel or place, the Magistrate [[!shall]], on the appearance before him of the person against whom the order was made, question him as to whether he denies the existence of any public right in respect of the way, river, channel or place, and if he does so, the Magistrate [[!shall]], before proceeding under section 157, inquire into the matter.
(2) If in such inquiry the Magistrate finds that there is any reliable evidence in support of such denial, he [[!shall]] stay the proceedings until the matter of the existence of such right has been decided by a competent Court; and, if he finds that there is no such evidence, he [[!shall]] proceed as laid down in section 157.
(3) A person who has, on being questioned by the Magistrate under sub-section (1), failed to deny the existence of a public right of the nature therein referred to, or who, having made such denial, has failed to adduce reliable evidence in support thereof, [[!shall]] not in the subsequent proceedings be permitted to make any such denial."
:::

::: proviso Section 157 — Procedure where person against whom order is made under section 152 appears to show cause
"157. (1) If the person against whom an order under section 152 is made appears and shows cause against the order, the Magistrate [[!shall]] take evidence in the matter as in a summons-case.
(2) If the Magistrate is satisfied that the order, either as originally made or subject to such modification as he considers necessary, is reasonable and proper, the order [[!shall]] be made absolute without modification or, as the case may be, with such modification.
(3) If the Magistrate is not so satisfied, no further proceedings [[!shall]] be taken in the case:
Provided that the proceedings under this section [[!shall]] be completed, as soon as possible, within a period of ninety days, which may be extended for the reasons to be recorded in writing, to one hundred and twenty days."
:::

::: proviso Section 158 — Power of Magistrate to direct local investigation and examination of an expert
"158. The Magistrate [[?may]], for the purposes of an inquiry under section 156 or section 157—
(a) direct a local investigation to be made by such person as he thinks fit; or
(b) summon and examine an expert."
:::

### How this actually runs

<MicroTree
  input="A person shown cause against a section 152 order has appeared before the Magistrate. Does he dispute the public's right to use the place at all, or just the facts of the alleged nuisance?"
  :gates="[
    { q: 'On being questioned under section 156(1), does the person deny the existence of any public right in the way, river, channel, or place?', note: 'The Magistrate must inquire into the matter before proceeding under section 157.', no: 'The Magistrate proceeds directly to the ordinary section 157 show-cause procedure.' },
    { q: 'Does that inquiry find reliable evidence actually supporting the denial?', note: 'Section 156(2) requires the Magistrate to stay the nuisance proceedings until a competent Civil Court decides the existence of the public right.', no: 'Section 156(2) requires the Magistrate to proceed under section 157 as though the denial were not credibly raised, and section 156(3) bars the person from raising the same denial again later in the proceedings.' },
    { q: 'Has the person appeared and shown cause without a live public-right denial, or has a section 156 denial already been resolved in favour of the Magistrate proceeding further?', note: 'Section 157 governs: evidence is taken as in a summons-case, and the order is made absolute (with or without modification) if the Magistrate is satisfied it is reasonable and proper, all within the ninety-day statutory clock (extendable to one hundred twenty days for recorded reasons).', no: 'The section 157 hearing has not yet reached this stage.' }
  ]"
  result="Whether the person is genuinely contesting the public's right to use the place at all (triggering section 156's civil-court referral route) or is instead contesting the facts of the nuisance itself (triggering the ordinary section 157 hearing, on its own strict ninety/hundred-twenty-day clock) is confirmed before the proceeding advances."
  resultKind="mandatory"
  caveat="Section 157(3)'s proviso sets an outer limit of one hundred twenty days, but only on written, recorded reasons for the extension — the default expectation is completion within ninety days."
/>

### In plain English

Section 156 exists to keep the Magistrate in his proper lane. A section 152 nuisance order about a public way, river, channel, or place presupposes that the public actually has a right to use that place — and if the person shown cause genuinely disputes that underlying premise, that is a property-rights question a criminal-process Magistrate should not be finally deciding; it belongs to a competent Civil Court. But section 156 does not let a bare, unsupported denial derail the process indefinitely — the denial has to be backed by reliable evidence before it earns a stay; an unsupported assertion is treated as no denial at all, and section 156(3)'s one-shot rule means the person cannot revive the same argument later in the same proceedings once it has failed. Section 157 is the default engine room of Part B's nuisance process for everyone who is not making a section 156 denial (or has already lost one): a summons-case-style evidentiary hearing, an absolute order if the Magistrate is satisfied the order is reasonable and proper (with room to modify it rather than simply confirming or rejecting it wholesale), and — notably — a genuinely enforceable outer time limit that most procedural provisions in this Sanhita do not carry: ninety days as the default, one hundred twenty days as the absolute outer boundary, and only then with written, recorded reasons. Section 158 is a practical toolkit provision available at either the section 156 or section 157 stage — sending someone to investigate on the ground, or bringing in expert testimony, when the Magistrate's own assessment of the facts needs technical or on-site reinforcement.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 156, 157, and 158 are provisionally mapped to CrPC sections 137, 138, and 139 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

The public-right-denial mechanism and the local-investigation-and-expert power appear to track the presumed CrPC ancestor provisions closely. Section 157(3)'s proviso — a ninety-day default completion target, extendable only to one hundred twenty days for recorded reasons — reads as a genuine, disposal-focused addition; if the presumed CrPC ancestor provision did not carry an equivalent express timeline, this would be a real point of departure and should be independently confirmed before being relied upon in any filing.

### Test your instinct

:::: instinct The proceeding that dragged past ninety days with no written reasons
A section 157 nuisance proceeding remains undecided one hundred ten days after it began, with no order recorded extending the period and no written reasons on file. The person against whom the order was made asks what effect this has.
::: ruling What actually happens
Section 157(3)'s proviso requires the proceeding to be completed "as soon as possible, within a period of ninety days," extendable to one hundred twenty days only "for the reasons to be recorded in writing." At one hundred ten days with no recorded extension, the proceeding is already outside its default window without the documented justification the statute requires for going further. This does not automatically terminate the proceeding, but it is a real, concrete basis to press the Magistrate for immediate disposal or to seek supervisory relief against the unexplained delay.
:::
::::

:::: instinct The Magistrate who modified rather than simply confirmed the order
At a section 157 hearing, the Magistrate is satisfied that the original section 152 order was excessive in scope, but that a narrower version of it is reasonable and proper. He is asked whether he must either confirm the original order in full or reject it outright.
::: ruling What actually happens
Section 157(2) does not present that binary choice. It allows the order to be made absolute "either as originally made or subject to such modification as he considers necessary" — the Magistrate can tailor the final order to what the evidence actually supports, rather than being forced into an all-or-nothing outcome.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. The public-right-denial mechanism and the section 157 disposal timeline are comparatively procedural and fact-specific, more often addressed through individual High Court supervisory review than a single generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, a Magistrate can move a straightforward nuisance dispute to a swift, time-bound conclusion under section 157, using section 158's investigative tools where the facts need reinforcement. As a **shield**, a person genuinely disputing the public's right to use the place at all can invoke section 156 to have that specific question routed to a competent Civil Court instead of being decided against him in the summary nuisance process — provided he comes prepared with reliable evidence, not a bare denial.

#### The limitation clock

Section 157(3)'s proviso is the sharpest clock in this cluster: ninety days as the default completion target for the show-cause hearing, extendable only to one hundred twenty days, and only for reasons recorded in writing. Section 156(3)'s one-shot rule on the public-right denial is not a time limit but functions similarly — the opportunity to raise the denial, once lost, does not recur later in the same proceedings.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Person denies any public right exists in the way, river, channel, or place | Section 156(1) | Magistrate inquires before proceeding further |
| Denial supported by reliable evidence | Section 156(2) | Proceedings stayed pending a competent Civil Court's decision |
| Denial unsupported, or not raised at all | Section 156(2)–(3) | Magistrate proceeds under section 157; denial barred from being raised again |
| Ordinary show-cause hearing | Section 157 | Summons-case-style evidence; order made absolute (with or without modification) if satisfied; ninety/hundred-twenty-day clock applies |
| Facts need on-site or technical reinforcement | Section 158 | Local investigation or expert examination directed |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not raise a section 156 public-right denial without reliable evidence in hand — an unsupported denial is treated as no denial at all, and section 156(3) bars raising it again later.
2. Track the section 157(3) ninety-day clock from the outset of the show-cause hearing, and flag any extension beyond it that lacks written, recorded reasons.
3. Do not assume the section 157 outcome is binary — argue affirmatively for a modified, narrower order where the original order's full scope is not justified by the evidence.

**Timing.** If a genuine public-right dispute exists, raise the section 156(1) denial at the very first appearance, supported by whatever reliable evidence is available at that stage — a late or evidentially weak denial risks being treated as no denial at all.

**Model checklist for a section 156/157 show-cause hearing:**

1. Determine at the outset whether a genuine public-right denial is available and evidentially supportable; if so, prepare that evidence before the first appearance.
2. If no public-right denial is in play, prepare the section 157 evidentiary case on the merits of the underlying nuisance allegation.
3. Track the ninety-day clock under section 157(3) from the start of the hearing, and object promptly to any unexplained extension beyond it.
4. Consider whether local investigation or expert examination under section 158 would strengthen or undermine the client's position, and seek or oppose it accordingly.

---

## Sections 159–162 — Paying for the investigation, enforcing an order that has become absolute, acting before the inquiry even finishes, and the standalone power to forbid a nuisance from happening again

### The dispute this solves

::: oneminute Four provisions round out Part B's public-nuisance toolkit: who pays for a section 158 investigation, what happens once an order becomes absolute and the addressee still does nothing, an emergency injunction that does not wait for the inquiry to finish at all, and a freestanding power to simply forbid a nuisance from being repeated.
Section 159 handles the practical mechanics of a section 158 investigation or expert examination — written instructions, allocation of expenses, and the evidentiary status of the resulting report. Section 160 is the enforcement backstop for an order that has become absolute (whether under section 155's automatic route or section 157's contested route) and is still not obeyed: notice, a further fixed time to comply, and, failing that, the Magistrate stepping in to have the act performed at the defaulter's expense, recoverable through sale or distress of property. Section 161 exists for situations too urgent to wait even for the ordinary process to run its course — an injunction that can issue the moment the Magistrate makes the original section 152 order, aimed at obviating imminent, serious danger pending the outcome of the inquiry itself. Section 162 closes Part B with a freestanding, simpler power — not tied to the conditional-order machinery at all — letting a range of specified authorities simply order a person not to repeat or continue a public nuisance as defined in the Bharatiya Nyaya Sanhita, 2023, or any special or local law.
:::

::: story The building that was pulled down at the owner's expense
A section 152 order requiring the removal of a dangerously unstable structure becomes absolute under section 157, after the owner failed to satisfy the Magistrate that the structure was safe. Notice is given under section 160(1), fixing a further time for the owner to remove it himself. He still does nothing. Section 160(2) supplies the answer: the Magistrate "may cause it to be performed," and recover the cost of doing so "either by the sale of any building, goods or other property removed by his order, or by the distress and sale of any other movable property of such person" — including property outside the Magistrate's own jurisdiction, provided the order is endorsed by the Magistrate where that property is actually found. The owner's continued inaction does not stall the outcome; it simply shifts who does the work and adds the cost of doing it to his bill.
:::

### The Act, decompiled

::: proviso Section 159 — Power of Magistrate to furnish written instructions, etc.
"159. (1) Where the Magistrate directs a local investigation by any person under section 158, the Magistrate [[?may]]—
(a) furnish such person with such written instructions as may seem necessary for his guidance;
(b) declare by whom the whole or any part of the necessary expenses of the local investigation shall be paid.
(2) The report of such person [[?may]] be read as evidence in the case.
(3) Where the Magistrate summons and examines an expert under section 158, the Magistrate [[?may]] direct by whom the costs of such summoning and examination shall be paid."
:::

::: proviso Section 160 — Procedure on order being made absolute and consequences of disobedience
"160. (1) When an order has been made absolute under section 155 or section 157, the Magistrate [[!shall]] give notice of the same to the person against whom the order was made, and [[!shall]] further require him to perform the act directed by the order within the time to be fixed in the notice, and inform him that, in case of disobedience, he [[!shall]] be liable to the penalty provided by section 223 of the Bharatiya Nyaya Sanhita, 2023.
(2) If such act is not performed within the time fixed, the Magistrate [[?may]] cause it to be performed, and [[?may]] recover the costs of performing it, either by the sale of any building, goods or other property removed by his order, or by the distress and sale of any other movable property of such person within or without such Magistrate's local jurisdiction, and if such other property is without such jurisdiction, the order [[!shall]] authorise its attachment and sale when endorsed by the Magistrate within whose local jurisdiction the property to be attached is found.
(3) No suit [[!shall]] lie in respect of anything done in good faith under this section."
:::

::: proviso Section 161 — Injunction pending inquiry
"161. (1) If a Magistrate making an order under section 152 considers that immediate measures should be taken to prevent imminent danger or injury of a serious kind to the public, he [[?may]] issue such an injunction to the person against whom the order was made, as is required to obviate or prevent such danger or injury pending the determination of the matter.
(2) In default of such person forthwith obeying such injunction, the Magistrate [[?may]] himself use, or cause to be used, such means as he thinks fit to obviate such danger or to prevent such injury.
(3) No suit [[!shall]] lie in respect of anything done in good faith by a Magistrate under this section."
:::

::: proviso Section 162 — Magistrate may prohibit repetition or continuance of public nuisance
"162. A District Magistrate or Sub-divisional Magistrate, or any other Executive Magistrate or Deputy Commissioner of Police empowered by the State Government or the District Magistrate in this behalf, [[?may]] order any person not to repeat or continue a public nuisance, as defined in the Bharatiya Nyaya Sanhita, 2023, or any special or local law."
:::

### How this actually runs

<MicroTree
  input="A section 152 nuisance order exists somewhere in its lifecycle — from initial investigation, through becoming absolute, to enforcement. What stage is in play?"
  :gates="[
    { q: 'Has the Magistrate directed a local investigation or summoned an expert under section 158, and does a question of instructions, expenses, or the evidentiary status of the report now arise?', note: 'Section 159 applies: written instructions may be furnished, expenses allocated, the report read as evidence, and expert-examination costs directed.', no: 'Move to the absolute-order question.' },
    { q: 'Has the order become absolute under section 155 or section 157, and has the person against whom it is made still failed to perform the directed act after notice under section 160(1)?', note: 'Section 160(2) allows the Magistrate to have the act performed and recover the cost through sale or distress of the property of that person, with no suit lying for anything done in good faith.', no: 'Move to the emergency-injunction question.' },
    { q: 'Does the Magistrate making the original section 152 order consider that immediate measures are needed to prevent imminent, serious danger or injury to the public, before the inquiry itself is even resolved?', note: 'Section 161 allows an injunction to issue at that point, with the Magistrate empowered to use whatever means he thinks fit if the injunction is not obeyed, and no suit lying for good-faith acts.', no: 'Move to the standalone repetition-prohibition question.' },
    { q: 'Is a specified authority instead simply seeking to prevent a person from repeating or continuing a public nuisance, independent of the section 152 conditional-order machinery?', note: 'Section 162 supplies a freestanding order-making power for exactly that, available to a District Magistrate, Sub-divisional Magistrate, or an empowered Executive Magistrate or Deputy Commissioner of Police.', no: 'None of sections 159 to 162 is engaged on these facts.' }
  ]"
  result="Whether the matter concerns paying for and using a section 158 investigation, enforcing an order already made absolute, an emergency injunction pending the inquiry itself, or the freestanding repetition-prohibition power under section 162, is confirmed before the correct enforcement or investigative route is taken."
  resultKind="mandatory"
  caveat="Section 161's injunction is available even before the underlying section 152 inquiry is resolved — it does not wait for an order to become absolute the way section 160's enforcement power does."
/>

### In plain English

These four sections cover the full lifecycle of a nuisance proceeding once section 158's investigative machinery, or the underlying urgency of the situation, comes into play. Section 159 is purely administrative but practically important — someone has to pay for a local investigation or an expert's time, and the section gives the Magistrate control over both the guidance given to the investigator and who bears the cost, while confirming that the resulting report can simply be read into evidence rather than requiring the investigator's live testimony as a precondition. Section 160 is the section that ultimately gives the whole conditional-order structure real teeth: an absolute order that is simply ignored does not just sit there — the Magistrate can have the underlying work done regardless of the defaulter's cooperation, and recover the cost from that person's own property, with a jurisdictional bridge (endorsement by the Magistrate where the property is actually found) so a defaulter cannot escape the cost recovery merely by holding property elsewhere. The good-faith immunity in section 160(3) mirrors the pattern seen elsewhere in this Sanhita — necessary because the Magistrate is now taking direct, physical action against a person's property. Section 161 solves a different, more urgent problem: sometimes the danger cannot wait for the section 152 inquiry to run its course at all, however tight section 157's ninety-day clock might be, and the section allows the Magistrate to act immediately, with a default use-of-force power if the injunction itself is ignored. Section 162, finally, stands entirely apart from the conditional-order apparatus of sections 152 to 161 — it is a simple, direct prohibition power against repeating or continuing a public nuisance, available to a slightly wider set of authorities including a Deputy Commissioner of Police where empowered, useful precisely because it does not require running the full conditional-order-then-absolute-order sequence first.

### What changed from the CrPC

::: info Verify before citing
BNSS sections 159, 160, 161, and 162 are provisionally mapped to CrPC sections 140, 141, 142, and 143 respectively. This mapping is unverified against the CrPC bare-act text and must be independently confirmed before use in any filing.
:::

All four sections appear to track the structure of their presumed CrPC ancestor provisions closely, including section 162's inclusion of an Executive Magistrate or Deputy Commissioner of Police (where empowered) alongside the District and Sub-divisional Magistrate. Whether the Deputy Commissioner of Police reference is itself a departure from the presumed CrPC ancestor provision should be independently confirmed before being relied upon as a point of difference in any filing.

### Test your instinct

:::: instinct The property recovered from outside the Magistrate's own district
A section 152 order becomes absolute and is disobeyed. The only movable property the defaulter owns of any real value sits in a different district, outside the enforcing Magistrate's own local jurisdiction. The defaulter argues the Magistrate has no power to reach it.
::: ruling What actually happens
Section 160(2) anticipates exactly this: where the property to be attached is outside the Magistrate's own local jurisdiction, "the order shall authorise its attachment and sale when endorsed by the Magistrate within whose local jurisdiction the property to be attached is found." The defaulter cannot defeat cost recovery simply by holding assets in another district; the section builds in a jurisdictional bridge for precisely that situation.
:::
::::

:::: instinct The injunction issued before the inquiry had even properly started
A Magistrate making a section 152 order, on the very same day, also issues a section 161 injunction because of an imminent, serious risk to the public, well before any section 156 or section 157 hearing has taken place. The person against whom the order is made argues the injunction is premature because the underlying inquiry has not yet been conducted.
::: ruling What actually happens
Section 161(1) does not require the inquiry to have progressed at all — it applies where the Magistrate, at the point of "making an order under section 152," considers immediate measures necessary to prevent imminent, serious danger or injury "pending the determination of the matter." The injunction is designed to operate precisely during the gap before the inquiry concludes, not after it; the argument that it is premature misunderstands the section's own purpose.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No single Supreme Court authority is promoted to a winning ratio for this cluster. The section 159 to 162 enforcement and emergency-injunction mechanisms are typically litigated on individual facts before High Courts rather than governed by a single generally applicable Supreme Court ratio.
:::

#### Sword and shield

As a **sword**, a Magistrate whose absolute order is disobeyed can have the work done regardless and recover the cost from the defaulter's property wherever it is found, and can act immediately under section 161 without waiting for the underlying inquiry to conclude at all. As a **shield**, a person facing section 160 enforcement can contest the underlying reasonableness of the costs recovered, and — for a section 161 injunction — can press the Magistrate on whether the danger was genuinely "imminent" and "of a serious kind" as the section requires, rather than accepting the injunction as automatically justified.

#### The limitation clock

None of sections 159 to 162 fixes a limitation period of its own; section 160(1)'s notice mechanism fixes a further specific time for compliance before enforcement proceeds, and that time period (set case by case in the notice) functions as the operative clock for that particular enforcement action.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Local investigation or expert examination directed under section 158 | Section 159 | Written instructions, expense allocation, report readable as evidence |
| Absolute order disobeyed after notice | Section 160 | Magistrate causes performance; cost recovered by sale or distress, with jurisdictional bridge for out-of-district property |
| Imminent, serious danger before the inquiry concludes | Section 161 | Injunction issued; default use-of-force power if disobeyed |
| Standalone need to stop a repeated or continuing public nuisance | Section 162 | Freestanding prohibition order, independent of the conditional-order process |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not assume section 160 enforcement is blocked merely because the defaulter's property lies outside the Magistrate's own jurisdiction — the endorsement mechanism reaches it.
2. Do not wait for a full section 156/157 inquiry to conclude before seeking urgent relief where the danger is genuinely imminent and serious — section 161 is designed to operate during that very gap.
3. Do not overlook section 162 as a simpler, freestanding alternative to the full conditional-order sequence where the goal is simply to stop a nuisance from recurring.

**Timing.** Seek a section 161 injunction at the earliest point the imminent, serious danger becomes apparent — ideally at the same time the underlying section 152 order is sought, rather than waiting for the inquiry's outcome.

**Model checklist for enforcement or emergency relief under sections 159 to 162:**

1. For enforcement of an absolute order, confirm proper notice was given under section 160(1) before assuming the Magistrate's cost-recovery power under section 160(2) has arisen.
2. For property located outside the enforcing Magistrate's jurisdiction, prepare for the endorsement mechanism under section 160(2) rather than assuming the property is beyond reach.
3. Where urgency is genuine, consider seeking a section 161 injunction alongside the original section 152 application rather than waiting for the inquiry to run its course.
4. Where the only goal is stopping a recurring nuisance, consider whether the simpler section 162 route achieves that without the full conditional-order sequence.

---

## Section 163 — The urgent, emergency prohibitory-order power: what everyone still calls a "section 144 order"

### The dispute this solves

::: oneminute Part C stands alone with a single, famous provision — the emergency power to direct a person, a group, or the general public to abstain from an act or take precautions, issued without notice where genuine urgency exists, capped at two months (extendable to six by State Government notification), and subject to its own rescission-and-review safeguards.
Section 163 is, in ordinary usage across India, still what people mean when they say "a Section 144 order" — a legacy of its CrPC ancestor's own numbering, and a genuine point of continuity in the public's understanding even as the Sanhita renumbers around it. It is the broadest and fastest-acting order-making power in this chapter: a District Magistrate, Sub-divisional Magistrate, or specially empowered Executive Magistrate who forms the opinion that there is sufficient ground for proceeding and that immediate prevention or speedy remedy is desirable can direct a person — or persons in an area, or the public generally frequenting a place — to abstain from an act or take precautions with property, to prevent obstruction, injury, danger to life, health or safety, disturbance of public tranquillity, a riot, or an affray. Crucially, it can be issued ex parte where the emergency does not allow for prior notice, and it self-limits to two months unless the State Government extends it, by notification, to a maximum of six.
:::

::: story The order extended by notification, not by the Magistrate's own hand
A District Magistrate issues a section 163 order directing a category of persons in a particular area to abstain from a specific act, citing a genuine risk of a riot. Two months later, as the order's default life is about to expire, the State Government, considering the extension necessary for preventing danger to human life, health, or safety, issues a notification directing that the order remain in force for a further period — up to a total of six months from when it would otherwise have expired. This is deliberately not something the original Magistrate can do on his own signature: section 163(4)'s proviso vests the extension power specifically in the State Government, by notification, and only for the narrower set of purposes the proviso itself lists.
:::

### The Act, decompiled

::: proviso Section 163 — Power to issue order in urgent cases of nuisance or apprehended danger
"163. (1) In cases where, in the opinion of a District Magistrate, a Sub-divisional Magistrate or any other Executive Magistrate specially empowered by the State Government in this behalf, there is sufficient ground for proceeding under this section and immediate prevention or speedy remedy is desirable, such Magistrate [[?may]], by a written order stating the material facts of the case and served in the manner provided by section 153, direct any person to abstain from a certain act or to take certain order with respect to certain property in his possession or under his management, if such Magistrate considers that such direction is likely to prevent, or tends to prevent, obstruction, annoyance or injury to any person lawfully employed, or danger to human life, health or safety or a disturbance of the public tranquillity, or a riot, or an affray.
(2) An order under this section [[?may]], in cases of emergency or in cases where the circumstances do not admit of the serving in due time of a notice upon the person against whom the order is directed, be passed ex parte.
(3) An order under this section [[?may]] be directed to a particular individual, or to persons residing in a particular place or area, or to the public generally when frequenting or visiting a particular place or area.
(4) No order under this section [[!shall]] remain in force for more than two months from the making thereof:
Provided that if the State Government considers it necessary so to do for preventing danger to human life, health or safety or for preventing a riot or any affray, it [[?may]], by notification, direct that an order made by a Magistrate under this section shall remain in force for such further period not exceeding six months from the date on which the order made by the Magistrate would have, but for such order, expired, as it may specify in the said notification.
(5) Any Magistrate [[?may]], either on his own motion or on the application of any person aggrieved, rescind or alter any order made under this section by himself or any Magistrate subordinate to him or by his predecessor-in-office.
(6) The State Government [[?may]], either on its own motion or on the application of any person aggrieved, rescind or alter any order made by it under the proviso to sub-section (4).
(7) Where an application under sub-section (5) or sub-section (6) is received, the Magistrate, or the State Government, as the case may be, [[!shall]] afford to the applicant an early opportunity of appearing before him or it, either in person or by an advocate and showing cause against the order; and if the Magistrate or the State Government, as the case may be, rejects the application wholly or in part, he or it [[!shall]] record in writing the reasons for so doing."
:::

### How this actually runs

<MicroTree
  input="A District Magistrate, Sub-divisional Magistrate, or specially empowered Executive Magistrate is considering an urgent prohibitory or preventive direction. What does section 163 require and allow?"
  :gates="[
    { q: 'Is there, in the opinion of the Magistrate, sufficient ground for proceeding, and is immediate prevention or a speedy remedy genuinely desirable, for one of the purposes listed in section 163(1)?', note: 'A written order stating the material facts may issue under section 163(1), served in the section 153 manner, directing abstention from an act or precautions with property.', no: 'No section 163 order is available on these facts.' },
    { q: 'Do the circumstances not admit of serving prior notice on the person against whom the order is directed?', note: 'Section 163(2) allows the order to be passed ex parte in such cases or in cases of emergency.', no: 'Ordinary notice should be given before the order is passed.' },
    { q: 'Is the order directed at a particular individual, at persons in a defined place or area, or at the public generally frequenting a particular place or area?', note: 'Section 163(3) expressly allows any of these three forms of address.', no: 'Confirm the order is properly addressed before it is treated as valid.' },
    { q: 'Has the order been in force for close to two months, and does the State Government consider a further period necessary specifically to prevent danger to human life, health, or safety, or to prevent a riot or affray?', note: 'The proviso to section 163(4) allows the State Government, by notification, to extend the order for a further period up to six months total from when it would otherwise have expired.', no: 'The order lapses automatically at the two-month default limit absent such a notification.' },
    { q: 'Has the Magistrate, the State Government, or an aggrieved person sought to rescind or alter the order?', note: 'Section 163(5) and (6) allow this, and section 163(7) requires an early hearing opportunity and, on rejection, written reasons.', no: 'No rescission or alteration application is currently pending.' }
  ]"
  result="Whether the section 163(1) threshold is met, whether ex parte issuance was appropriate, whether the order is properly addressed, whether it remains within its default or State-Government-extended lifespan, and whether any rescission or alteration application has been properly handled, are each confirmed before the order is treated as valid and in force."
  resultKind="mandatory"
  caveat="The State Government's extension power under section 163(4)'s proviso is narrower than the Magistrate's original power under section 163(1) — it is available only for the specific purposes of preventing danger to human life, health or safety, or preventing a riot or affray, not the full range of purposes listed in section 163(1) itself."
/>

### In plain English

Section 163 is deliberately the broadest and most urgent tool in this chapter, and its breadth is matched by real, built-in safeguards. The threshold is a Magistrate's own opinion of sufficient ground and genuine urgency — not proof to any evidentiary standard — because the entire point of the section is to act before the ordinary, slower processes elsewhere in this chapter can run their course. The three permissible addressees — a named individual, persons in a defined place, or the public generally frequenting a place — make it capable of scaling from a single person's conduct to an entire locality's, which is precisely what makes it the tool of choice for larger public-order situations, from crowd control to broader preventive directions. The ex parte power under subsection (2) recognises that requiring prior notice would defeat the purpose in a genuine emergency, but the section counterbalances this with a hard two-month default expiry and a materially harder-to-obtain extension: only the State Government, only by formal notification, only up to six months total, and only for a narrower list of purposes (danger to life, health, or safety, or preventing a riot or affray) than the full range of purposes available to the original Magistrate's order. Subsections (5) to (7) exist because an order this broad, potentially affecting an entire public frequenting a place, needs a genuine correction mechanism — any Magistrate (not just the one who made the order) can rescind or alter it on his own motion or on an aggrieved person's application, the State Government has the equivalent power over its own extension, and subsection (7) makes the review meaningfully adversarial: an early hearing opportunity, and written reasons if the application is rejected.

### What changed from the CrPC

::: info Verify before citing
BNSS section 163 is provisionally mapped to CrPC section 144 — the provision colloquially known across India simply as "Section 144." This mapping is very widely understood but remains formally unverified against the CrPC bare-act text in this repository and should be independently confirmed before use in any filing, particularly given how frequently this specific section number is invoked in public discourse, press reporting, and court orders.
:::

The structure — Magistrate's opinion of urgency, ex parte availability, the three forms of address, the two-month default cap with a State-Government-notified extension to six months, and the rescission-and-review mechanism — appears to track the presumed CrPC ancestor provision closely. Given the exceptionally high public and practical salience of this specific provision, any apparent substantive difference (in the cap periods, the extension mechanism, or the review safeguards) should be flagged and independently verified with particular care before being relied upon in any filing or public-facing explanation.

### Test your instinct

:::: instinct The order issued against "the public generally," not any named person
A section 163 order directs the public generally, when frequenting a specified market area, to abstain from a certain act, without naming any individual. A person affected by the order argues it is invalid because no specific person was named as its addressee.
::: ruling What actually happens
Section 163(3) expressly contemplates this: an order may be directed "to the public generally when frequenting or visiting a particular place or area," not only to a particular individual or to persons residing in a particular place. The absence of a named individual addressee is not a defect; it is one of the three forms of address the section itself authorises.
:::
::::

:::: instinct The extension notification issued by the Magistrate himself, not the State Government
As a section 163 order approaches its two-month default expiry, the same Magistrate who issued it purports to extend it himself for a further four months, citing ongoing risk to public safety.
::: ruling What actually happens
Section 163(4)'s proviso vests the extension power specifically in "the State Government," acting "by notification" — not in the original Magistrate. A Magistrate has no power under this section to extend his own order beyond the two-month default; only a State Government notification, for the narrower purposes the proviso specifies, can extend it, and only up to six months total. An extension purportedly made by the Magistrate himself is not authorised by section 163(4) and the order would lapse at the two-month mark regardless.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Verify before citing
**Case:** *Anuradha Bhasin* v. *Union of India*, reported at (2020) 3 SCC 637 (Supreme Court of India).
**Facts (one line):** Restrictions on internet access and movement imposed in Jammu and Kashmir, including orders of the kind made under the presumed CrPC ancestor of section 163, were challenged as excessive and unreviewable.
**Ratio:** The Court held that orders of this kind must satisfy the tests of necessity and proportionality, must be published so that they can be challenged, cannot be used as a tool to prevent legitimate expression indefinitely, and must be subject to periodic review rather than being allowed to continue indefinitely without fresh application of mind.
**Practitioner takeaway:** "Challenge any prohibitory order of this kind that is not published, that is not periodically reviewed, or whose duration and scope exceed what is genuinely necessary and proportionate to the specific danger cited."
This citation is drawn from established legal knowledge and is flagged for independent verification against the official reporter before use in any filing, per house citation-honesty rules.
:::

#### Sword and shield

As a **sword**, the authorities have the fastest, broadest preventive tool in this chapter — capable of ex parte issuance and of addressing an entire public frequenting a place, not just a named individual. As a **shield**, a person affected by a section 163 order can challenge whether the section 163(1) threshold (sufficient ground, genuine urgency) was actually met, can invoke the publication-and-proportionality standards associated with the presumed CrPC ancestor's own jurisprudence, and can apply under section 163(5) for rescission or alteration, with section 163(7) guaranteeing an early hearing and written reasons if that application is rejected.

#### The limitation clock

Section 163(4) fixes the sharpest and most consequential clock in this cluster: a hard two-month default expiry, extendable only by State Government notification, only for the narrower purposes the proviso specifies, and only up to six months total from the date the order would otherwise have expired.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Sufficient ground and genuine urgency for prevention or speedy remedy | Section 163(1) | Written order directing abstention or precautions, served under section 153 |
| Circumstances do not admit of prior notice | Section 163(2) | Ex parte issuance permitted |
| Order needs to bind an individual, an area's residents, or the public generally | Section 163(3) | All three forms of address are available |
| Order approaching its two-month default expiry, ongoing risk to life, health, safety, riot, or affray | Section 163(4) proviso | State Government may extend, by notification, up to six months total |
| Order challenged as unnecessary or excessive | Section 163(5)–(7) | Rescission or alteration application, with an early hearing and written reasons on rejection |

#### The authorities

See the promoted winning ratio above; no further entries at this time.

#### Strategy and drafting

**Drafting traps.**

1. Do not assume a section 163 order naming no individual addressee is defective — an order directed at the public generally frequenting a place is expressly authorised.
2. Do not accept a purported extension of a section 163 order issued by the original Magistrate himself — only a State Government notification, for the narrower purposes in the proviso, can extend the order beyond two months.
3. When challenging a section 163 order, lead with the threshold questions — sufficient ground and genuine urgency — rather than only its scope or duration, since a defective threshold undermines the entire order.

**Timing.** File a section 163(5) rescission-or-alteration application as early as possible once the order's necessity or proportionality is in genuine doubt — section 163(7)'s early-hearing guarantee is most useful when invoked promptly, before the order's default two-month period has largely run its course.

**Model checklist for challenging a section 163 order:**

1. Confirm the order was issued by a Magistrate actually empowered under section 163(1) — District Magistrate, Sub-divisional Magistrate, or a specially empowered Executive Magistrate.
2. Examine whether the order was properly served under section 153, or, if ex parte, whether the emergency genuinely justified dispensing with prior notice.
3. Confirm the order's current duration against the two-month default and, if extended, verify the extension was made by State Government notification for one of the proviso's narrower purposes.
4. Prepare the necessity-and-proportionality argument for any section 163(5) rescission-or-alteration application, addressing scope, duration, and the underlying threshold together.

---

## Sections 164–167 — Land disputes that could turn violent: possession first, title later, and the machinery that keeps the peace while a civil court sorts out who actually owns what

### The dispute this solves

::: oneminute Part D closes Chapter XI with a specialised, self-contained machinery for one recurring flashpoint: a dispute over land, water, or a right of user over them, where the temperature is rising fast enough that someone might get hurt before any civil court can rule on who actually owns or is entitled to the property. Section 164 lets an Executive Magistrate freeze the situation by deciding, provisionally and without touching the merits of title, who was in possession — and protect that possession until a competent court decides otherwise. Section 165 is the fallback when possession itself cannot be worked out: attach the property and appoint a receiver until a civil court rules. Section 166 runs the same machinery for user-rights and easement disputes rather than possession disputes outright. Section 167 supplies the local-inquiry and costs plumbing common to all three.
An Executive Magistrate exercising this power is deliberately not doing what a civil court does. He is not deciding who owns the land, and section 164(4) says so expressly — he decides only who was in possession on the date of his order, so that the peace holds while ownership is litigated elsewhere. That is the entire design logic of Part D: buy time and prevent bloodshed, without pre-empting the civil suit that will actually settle the property dispute.
:::

::: story The party forcibly dispossessed just before the Magistrate's order
Two families are locked in a dispute over a strip of agricultural land, tempers are high, and a police report flags a real risk of violence. An Executive Magistrate begins a section 164 inquiry. During the ten days before he makes his order, one family forcibly and wrongfully throws the other off the land. On ordinary facts, "possession on the date of the order" would now belong to the family that did the throwing — rewarding exactly the kind of self-help section 164 exists to discourage. The proviso to section 164(4) exists precisely to close that loophole: because the dispossession happened within two months before the report or information reached the Magistrate, he may treat the dispossessed family as if it had still been in possession on the date of his order, and restore that family to possession under section 164(6)(a). Forcible self-help in the shadow of a pending inquiry does not pay.
:::

### The Act, decompiled

::: proviso Section 164 — Procedure where dispute concerning land or water is likely to cause breach of peace
"164. (1) Whenever an Executive Magistrate is satisfied from a report of a police officer or upon other information that a dispute likely to cause a breach of the peace exists concerning any land or water or the boundaries thereof, within his local jurisdiction, he [[!shall]] make an order in writing, stating the grounds of his being so satisfied, and requiring the parties concerned in such dispute to attend his Court in person or by an advocate on a specified date and time, and to put in written statements of their respective claims as respects the fact of actual possession of the subject of dispute.
(2) For the purposes of this section, the expression 'land or water' includes buildings, markets, fisheries, crops or other produce of land, and the rents or profits of any such property.
(3) A copy of the order [[!shall]] be served in the manner provided by this Sanhita for the service of summons upon such person or persons as the Magistrate may direct, and at least one copy [[!shall]] be published by being affixed to some conspicuous place at or near the subject of dispute.
(4) The Magistrate [[!shall]], without reference to the merits or the claims of any of the parties to a right to possess the subject of dispute, peruse the statements so put in, hear the parties, receive all such evidence as may be produced by them, take such further evidence, if any, as he thinks necessary, and, if possible, decide whether any and which of the parties was, at the date of the order made by him under sub-section (1), in possession of the subject of dispute:
Provided that if it appears to the Magistrate that any party has been forcibly and wrongfully dispossessed within two months next before the date on which the report of a police officer or other information was received by the Magistrate, or after that date and before the date of his order under sub-section (1), he [[?may]] treat the party so dispossessed as if that party had been in possession on the date of his order under sub-section (1).
(5) Nothing in this section [[!shall]] preclude any party so required to attend, or any other person interested, from showing that no such dispute as aforesaid exists or has existed; and in such case the Magistrate [[!shall]] cancel his said order, and all further proceedings thereon [[!shall]] be stayed, but, subject to such cancellation, the order of the Magistrate under sub-section (1) [[!shall]] be final.
(6) (a) If the Magistrate decides that one of the parties was, or should under the proviso to sub-section (4) be treated as being, in such possession of the said subject of dispute, he [[!shall]] issue an order declaring such party to be entitled to possession thereof until evicted therefrom in due course of law, and forbidding all disturbance of such possession until such eviction; and when he proceeds under the proviso to sub-section (4), [[?may]] restore to possession the party forcibly and wrongfully dispossessed;
(b) the order made under this sub-section [[!shall]] be served and published in the manner laid down in sub-section (3).
(7) When any party to any such proceeding dies, the Magistrate [[?may]] cause the legal representative of the deceased party to be made a party to the proceeding and [[!shall]] thereupon continue the inquiry, and if any question arises as to who the legal representative of a deceased party for the purposes of such proceeding is, all persons claiming to be representatives of the deceased party [[!shall]] be made parties thereto.
(8) If the Magistrate is of opinion that any crop or other produce of the property, the subject of dispute in a proceeding under this section pending before him, is subject to speedy and natural decay, he [[?may]] make an order for the proper custody or sale of such property, and, upon the completion of the inquiry, [[!shall]] make such order for the disposal of such property, or the sale-proceeds thereof, as he thinks fit.
(9) The Magistrate [[?may]], if he thinks fit, at any stage of the proceedings under this section, on the application of either party, issue a summons to any witness directing him to attend or to produce any document or thing.
(10) Nothing in this section [[!shall]] be deemed to be in derogation of powers of the Magistrate to proceed under section 126."
:::

::: proviso Section 165 — Power to attach subject of dispute and to appoint receiver
"165. (1) If the Magistrate at any time after making the order under sub-section (1) of section 164 considers the case to be one of emergency, or if he decides that none of the parties was then in such possession as is referred to in section 164, or if he is unable to satisfy himself as to which of them was then in such possession of the subject of dispute, he [[?may]] attach the subject of dispute until a competent Court has determined the rights of the parties thereto with regard to the person entitled to the possession thereof:
Provided that such Magistrate [[?may]] withdraw the attachment at any time if he is satisfied that there is no longer any likelihood of breach of the peace with regard to the subject of dispute.
(2) When the Magistrate attaches the subject of dispute, he [[?may]], if no receiver in relation to such subject of dispute has been appointed by any Civil Court, make such arrangements as he considers proper for looking after the property or if he thinks fit, appoint a receiver thereof, who [[!shall]] have, subject to the control of the Magistrate, all the powers of a receiver appointed under the Code of Civil Procedure, 1908:
Provided that in the event of a receiver being subsequently appointed in relation to the subject of dispute by any Civil Court, the Magistrate—
(a) [[!shall]] order the receiver appointed by him to hand over the possession of the subject of dispute to the receiver appointed by the Civil Court and [[!shall]] thereafter discharge the receiver appointed by him;
(b) [[?may]] make such other incidental or consequential orders as may be just."
:::

::: proviso Section 166 — Dispute concerning right of use of land or water
"166. (1) Whenever an Executive Magistrate is satisfied from the report of a police officer or upon other information, that a dispute likely to cause a breach of the peace exists regarding any alleged right of user of any land or water within his local jurisdiction, whether such right be claimed as an easement or otherwise, he [[!shall]] make an order in writing, stating the grounds of his being so satisfied and requiring the parties concerned in such dispute to attend his Court in person or by an advocate on a specified date and time and to put in written statements of their respective claims.
Explanation.—For the purposes of this sub-section, the expression 'land or water' has the meaning given to it in sub-section (2) of section 164.
(2) The Magistrate [[!shall]] peruse the statements so put in, hear the parties, receive all such evidence as may be produced by them respectively, consider the effect of such evidence, take such further evidence, if any, as he thinks necessary and, if possible, decide whether such right exists; and the provisions of section 164 [[!shall]], so far as may be, apply in the case of such inquiry.
(3) If it appears to such Magistrate that such rights exist, he [[?may]] make an order prohibiting any interference with the exercise of such right, including, in a proper case, an order for the removal of any obstruction in the exercise of any such right:
Provided that no such order [[!shall]] be made where the right is exercisable at all times of the year, unless such right has been exercised within three months next before the receipt under sub-section (1) of the report of a police officer or other information leading to the institution of the inquiry, or where the right is exercisable only at particular seasons or on particular occasions, unless the right has been exercised during the last of such seasons or on the last of such occasions before such receipt.
(4) When in any proceedings commenced under sub-section (1) of section 164 the Magistrate finds that the dispute is as regards an alleged right of user of land or water, he [[?may]], after recording his reasons, continue with the proceedings as if they had been commenced under sub-section (1), and when in any proceedings commenced under sub-section (1) the Magistrate finds that the dispute should be dealt with under section 164, he [[?may]], after recording his reasons, continue with the proceedings as if they had been commenced under sub-section (1) of section 164."
:::

::: proviso Section 167 — Local inquiry
"167. (1) Whenever a local inquiry is necessary for the purposes of section 164, section 165 or section 166, a District Magistrate or Sub-divisional Magistrate [[?may]] depute any Magistrate subordinate to him to make the inquiry, and [[?may]] furnish him with such written instructions as may seem necessary for his guidance, and [[?may]] declare by whom the whole or any part of the necessary expenses of the inquiry shall be paid.
(2) The report of the person so deputed may be read as evidence in the case.
(3) When any costs have been incurred by any party to a proceeding under section 164, section 165 or section 166, the Magistrate passing a decision [[?may]] direct by whom such costs shall be paid, whether by such party or by any other party to the proceeding, and whether in whole or in part or proportion and such costs may include any expenses incurred in respect of witnesses and of advocates' fees, which the Court may consider reasonable."
:::

### How this actually runs

<MicroTree
  input="An Executive Magistrate is satisfied that a land, water, or right-of-user dispute within his local jurisdiction is likely to cause a breach of the peace. What does Part D require and allow?"
  :gates="[
    { q: 'Is the dispute one of actual possession over land or water, as opposed to a claimed right of user such as an easement?', note: 'Section 164 applies: a written order requiring attendance and written claims issues, served under section 153 and published at the site, followed by a possession-only inquiry that expressly does not touch title.', no: 'Move to the right-of-user question for section 166.' },
    { q: 'Was any party forcibly and wrongfully dispossessed within the two months before the report or information reached the Magistrate, or afterward but before his order?', note: 'The proviso to section 164(4) lets the Magistrate treat that party as if still in possession on the date of the order, and section 164(6)(a) allows restoring actual possession to that party.', no: 'Possession is decided on the facts as they stood on the date of the order, without the proviso.' },
    { q: 'Does the Magistrate find the case to be an emergency, or is he unable to decide which party was in possession, or that neither party was?', note: 'Section 165 lets him attach the subject of dispute until a competent court rules, and appoint a receiver with the powers of a receiver under the Code of Civil Procedure, 1908, if no civil court has already appointed one.', no: 'Section 164 alone continues to govern; attachment under section 165 is not engaged.' },
    { q: 'Is the dispute instead about an alleged right of user of land or water, such as an easement, rather than possession outright?', note: 'Section 166 applies, running the same inquiry procedure as section 164, but subject to its own proviso: the right must generally have been exercised within three months, or during the last relevant season, before the inquiry began.', no: 'A user-rights inquiry under section 166 is not engaged.' },
    { q: 'Does a local inquiry become necessary to resolve the section 164, 165, or 166 proceeding?', note: 'Section 167 lets a District Magistrate or Sub-divisional Magistrate depute a subordinate Magistrate to conduct it, with written instructions, an expense allocation, a report usable as evidence, and a costs power on completion.', no: 'No section 167 deputation is currently needed.' }
  ]"
  result="Whether the dispute is one of possession under section 164, or of a right of user under section 166, whether the forcible-dispossession proviso or the attachment-and-receiver power under section 165 is engaged, and whether a local inquiry under section 167 is warranted, are each confirmed before any possession or user-right order is treated as final."
  resultKind="mandatory"
  caveat="None of section 164, 165, or 166 decides who owns the property or holds the right — each decides only a provisional, peace-keeping question, expressly without prejudice to whatever a competent civil court later rules on title or the right itself."
/>

### In plain English

Think of Part D as emergency crowd control for a land dispute rather than a property-law ruling. The Executive Magistrate is not a substitute judge deciding who owns the field — section 164(4) says so in as many words, requiring him to proceed "without reference to the merits or the claims of any of the parties to a right to possess." His only job is to freeze whoever was actually in physical possession on the date of his order, protect that possession from disturbance, and get out of the way once a civil court is ready to decide the real question of title.

The forcible-dispossession proviso in section 164(4) is the anti-self-help rule: if one side muscled the other off the land in the run-up to the Magistrate's order, the Magistrate can undo that by treating the ousted party as still in possession. Section 165's attachment-and-receiver power is the fallback for when even a possession finding is too uncertain to make safely — better to freeze the property itself under a neutral custodian than to hand possession to the wrong side and risk violence. Section 166 runs the identical machinery for disputes about a right to use land or water — a right of way, a right to draw water, a grazing easement — rather than about possession of the land itself, with its own three-month "have you actually been using this right recently" filter. Section 167 is the administrative plumbing: how a District Magistrate delegates the legwork of any of these inquiries to a subordinate officer, and how costs get allocated once it is all over.

### What changed from the CrPC

::: info Verify before citing
The correspondence below is offered at high confidence given the consistent section-by-section renumbering pattern already confirmed across the rest of this Chapter (BNSS ss. 148–163 mapping onto CrPC ss. 129–144), but should still be independently verified against both bare Acts before being relied upon in drafting or argument.
:::

Section 164 is understood to correspond to CrPC section 145, section 165 to CrPC section 146, section 166 to CrPC section 147, and section 167 to CrPC section 148. On a provision-by-provision read, the operative machinery — the possession-only inquiry, the forcible-dispossession proviso, the attachment-and-receiver fallback, the user-rights extension, and the local-inquiry-and-costs plumbing — tracks the predecessor closely, with no substantive departure identified in this reading beyond the renumbering itself and the Sanhita's general modernisation of cross-references (for example, the reference to service "in the manner provided by this Sanhita for the service of summons" replacing the old Code's self-reference).

### Test your instinct

:::: instinct The receiver appointed by two different courts
An Executive Magistrate attaches a disputed orchard under section 165 and appoints his own receiver to look after it, since no civil court had appointed one at the time. Three weeks later, a civil suit over title to the orchard is filed, and the civil court appoints its own receiver. Does the Magistrate's receiver simply continue running the property alongside the civil court's receiver?

::: ruling
No. The second proviso to section 165(2) requires the Magistrate to order his own receiver to hand over possession of the subject of dispute to the receiver appointed by the Civil Court, and thereafter discharge his own receiver. A Magistrate's receivership under section 165 is a stopgap for the peace-keeping problem, not a standing parallel administration — once a civil court's own receiver is in place, the Magistrate's receiver stands down.
:::
::::

:::: instinct The right of way not used all year round
A farmer claims a right of way across a neighbour's field that he says he has used every harvest season for years, but the right is not exercised at other times of the year. A dispute breaks out and an Executive Magistrate begins a section 166 inquiry. The neighbour argues the farmer cannot get a protective order because he has not used the path continuously throughout the year. Is the neighbour correct?

::: ruling
No, not necessarily. The proviso to section 166(3) draws a distinction: a right exercisable at all times of the year does need to have been exercised within three months before the inquiry began, but a right exercisable only at particular seasons or occasions needs only to have been exercised during the last of those seasons or occasions before the inquiry began. A seasonal harvest-time right of way falls into the second category, and continuous year-round use is not the test that applies to it.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio

::: info Research gap — no case promoted
No specific Supreme Court authority on Part D's possession-versus-title distinction, the forcible-dispossession proviso, or the section 165 attachment-and-receiver mechanism is confidently recalled for promotion here. The proposition that a section 145 CrPC-style inquiry decides possession only, without prejudice to title, is textbook doctrine, but a specific citation should be sourced and verified before being pleaded rather than asserted from memory.
:::

#### Sword and shield

As a **sword**, the party actually in possession gets fast, focused protection against disturbance without having to first win a civil title suit — and a party forcibly dispossessed just before the Magistrate's order can use the proviso to section 164(4) to have that possession restored rather than rewarded to the wrongdoer. As a **shield**, any party can invoke section 164(5) to show that no genuine dispute exists at all, forcing cancellation of the proceeding, and a party facing an emergency or genuinely unclear possession picture can push the Magistrate toward the neutral attachment-and-receiver route under section 165 rather than a possession finding that might go the wrong way.

#### The limitation clock

The proviso to section 164(4) fixes a two-month look-back window: forcible and wrongful dispossession must have occurred within two months before the report or information reached the Magistrate (or after that, but before his order) for the anti-self-help proviso to apply. The proviso to section 166(3) fixes a parallel three-month look-back for a right exercisable at all times of the year, or a last-season/last-occasion look-back for a seasonal right, before the section 166 inquiry began.

#### Interlocking matrix

| Situation | Governing provision | What follows |
|---|---|---|
| Dispute over actual possession of land or water likely to cause a breach of peace | Section 164 | Written order, service and publication, possession-only inquiry without reference to title |
| Party forcibly and wrongfully dispossessed shortly before the inquiry | Proviso to section 164(4) | Dispossessed party may be treated as still in possession, and restored to it under section 164(6)(a) |
| Emergency, or possession genuinely unclear or held by neither party | Section 165 | Attachment of the property, with a Magistrate-appointed or civil-court receiver |
| Civil Court later appoints its own receiver over attached property | Second proviso to section 165(2) | Magistrate's receiver hands over possession and is discharged |
| Dispute over a right of user (easement or similar) rather than possession | Section 166 | Same inquiry procedure as section 164, subject to the three-month/last-season proviso |
| Local inquiry needed to resolve a section 164, 165, or 166 proceeding | Section 167 | Deputation to a subordinate Magistrate, with instructions, expenses, and a costs power |

#### The authorities

(No entries — see Research gap note above.)

#### Strategy and drafting

**Drafting traps.**

1. Do not plead a section 164 proceeding as a title dispute — the Magistrate is statutorily barred from looking at the merits of any party's claim to a right to possess, and framing it that way invites the Magistrate to decline jurisdiction or a civil court to treat the Magistrate's order as irrelevant to the title suit that must still be filed separately.
2. Do not overlook the proviso to section 164(4) when a client has just been forcibly thrown off disputed land — it is the single fastest route back into possession, provided the two-month window is met and evidence of the forcible dispossession is marshalled quickly.
3. When advising on a right-of-user dispute, check whether the right is exercisable all year round or only seasonally before assuming the three-month proviso to section 166(3) defeats the claim — a seasonal right measured against its own last season may still qualify.

**Timing.** File any application to invoke the proviso to section 164(4) as early as possible once forcible dispossession occurs — the two-month look-back runs from when the report or information reaches the Magistrate, not from when the application is filed, so delay in bringing the dispossession to the Magistrate's attention narrows the window in which the proviso can still apply.

**Model prayer checklist for a section 164/165/166 proceeding:**

1. Identify correctly at the outset whether the dispute is one of possession (section 164), a right of user (section 166), or has become one requiring attachment because possession cannot be determined (section 165) — the wrong framing invites delay and re-filing.
2. Where forcible dispossession has occurred, plead the proviso to section 164(4) explicitly and lead evidence pinpointing the date of dispossession against the two-month window.
3. Where a receiver is sought or already in place, track whether a civil suit over title has been or is likely to be filed, since a subsequently appointed civil-court receiver displaces the Magistrate's receiver under the second proviso to section 165(2).
4. Always plead, in the alternative or in parallel, the civil suit that will actually determine title or the right in question — a section 164, 165, or 166 order is provisional and peace-keeping only, and is no substitute for that civil adjudication.

---
