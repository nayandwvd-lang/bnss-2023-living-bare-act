# 05 — BNSS Roadmap and Concordance Rules

What is different about this statute, how the site is structured around it, and the order of work.

---

## The statute

The **Bharatiya Nagarik Suraksha Sanhita, 2023** replaced the Code of Criminal Procedure, 1973 with effect from **1 July 2024**. It runs to **531 sections across 39 chapters**, with Schedules.

It arrived as one of three linked statutes, and they must be treated as a set:

| New statute | Replaces |
|---|---|
| **Bharatiya Nyaya Sanhita, 2023** (BNS) | Indian Penal Code, 1860 |
| **Bharatiya Nagarik Suraksha Sanhita, 2023** (BNSS) | Code of Criminal Procedure, 1973 |
| **Bharatiya Sakshya Adhiniyam, 2023** (BSA) | Indian Evidence Act, 1872 |

**Every Interlocking Matrix on this site points at the BNS and the BSA.** The IPC and the Evidence Act appear only inside `### What changed from the CrPC`, when explaining what a judgment was decided under.

---

## The verification gate — read this before writing any section number

**Every BNSS section number you write is a claim, and every claim must be verified against the bare Act text before it is committed.**

This is the hardest rule in the project and the reason for it is specific: the CrPC was renumbered wholesale, the numbers are superficially plausible in either direction, and a practitioner will copy a number from this site into a bail application. A wrong CPC section number is embarrassing. A wrong BNSS section number in a live matter is professional damage to the reader.

### Procedure

1. **Get the bare Act into the repo before writing content.** Put the full BNSS text under `reference/bare-act/` (gitignored if it is a large PDF; a plain-text extraction is better). Nothing gets written from memory.
2. **Verify by reading the section text, not by trusting a mapping table.** Confirm that the section number you are about to write actually carries the content you say it carries.
3. **If it is not verified, mark it.** Use the flagged form and never silently drop the flag:

   ```markdown
   > **CrPC 1973, s. 154 → BNSS 2023, s. 173.** ⚠️ *Unverified — confirm against the bare Act before citing.*
   ```
4. **Never launder a mapping.** If chunk A says "verify" and chunk D quietly asserts the number as fact, the flag has done nothing. Grep for the flag before committing.

### Commonly cited mappings — every one of these still requires verification

These circulate widely in practitioner material and are a **starting hypothesis only**. Do not treat this table as authority; it exists so you know where to look, not what to write.

| Topic | CrPC 1973 | BNSS 2023 (to verify) |
|---|---|---|
| Information in cognizable cases (FIR) | s. 154 | s. 173 |
| Notice of appearance in lieu of arrest | s. 41A | s. 35(3) |
| Statements to police | s. 161 | s. 180 |
| Confessions and statements before a Magistrate | s. 164 | s. 183 |
| Detention beyond 24 hours / remand | s. 167 | s. 187 |
| Police report on completion of investigation | s. 173 | s. 193 |
| Orders in urgent cases of nuisance or apprehended danger | s. 144 | s. 163 |
| Maintenance of wives, children and parents | s. 125 | s. 144 |
| Bail in non-bailable offences | ss. 437, 439 | ss. 480, 483 |
| Anticipatory bail | s. 438 | s. 482 |
| Inherent powers of the High Court | s. 482 | s. 528 |

Note the trap in the last three rows: **the number 482 exists in both statutes and means something completely different in each.** A practitioner saying "I am moving under 482" is now ambiguous. Say so on the page.

---

## Structural difference: there are no Orders

The CPC site is built on a two-track sidebar — Sections in the body of the Code, Orders in the First Schedule — because the CPC's procedural detail lives in the Schedule.

**BNSS has no equivalent.** Its procedure is in the sections themselves; the Schedules serve a different function (notably the classification table of offences).

Consequences:

- The content directory is **`docs/chapters/`**, not `docs/sections/` + `docs/orders/`.
- The sidebar is **chapter-based**, grouped into functional parts.
- Do not reproduce the CPC's `sec-*` / `order-*` filename convention. Use `chapter-<n>.md` or `chapter-<n>-<m>.md` for clustered chapters.

### The 39 chapters, verified against the bare Act

Extracted directly from `reference/bare-act/bnss-2023-full-text.txt` (source: MHA Gazette PDF, Act No. 46 of 2023). This is the actual chapter list — the numbering and titles below are confirmed text, not a hypothesis.

| # | Chapter | Title |
|---|---|---|
| 1 | I | Preliminary |
| 2 | II | Constitution of Criminal Courts and Offices |
| 3 | III | Power of Courts |
| 4 | IV | Powers of Superior Officers of Police and Aid to the Magistrates and the Police |
| 5 | V | Arrest of Persons |
| 6 | VI | Processes to Compel Appearance |
| 7 | VII | Processes to Compel the Production of Things |
| 8 | VIII | Reciprocal Arrangements for Assistance in Certain Matters and Procedure for Attachment and Forfeiture of Property |
| 9 | IX | Security for Keeping the Peace and for Good Behaviour |
| 10 | X | Order for Maintenance of Wives, Children and Parents |
| 11 | XI | Maintenance of Public Order and Tranquillity |
| 12 | XII | Preventive Action of the Police |
| 13 | XIII | Information to the Police and Their Powers to Investigate |
| 14 | XIV | Jurisdiction of the Criminal Courts in Inquiries and Trials |
| 15 | XV | Conditions Requisite for Initiation of Proceedings |
| 16 | XVI | Complaints to Magistrates |
| 17 | XVII | Commencement of Proceedings Before Magistrates |
| 18 | XVIII | The Charge |
| 19 | XIX | Trial Before a Court of Session |
| 20 | XX | Trial of Warrant-Cases by Magistrates |
| 21 | XXI | Trial of Summons-Cases by Magistrates |
| 22 | XXII | Summary Trials |
| 23 | XXIII | Plea Bargaining |
| 24 | XXIV | Attendance of Persons Confined or Detained in Prisons |
| 25 | XXV | Evidence in Inquiries and Trials |
| 26 | XXVI | General Provisions as to Inquiries and Trials |
| 27 | XXVII | Provisions as to Accused Persons of Unsound Mind |
| 28 | XXVIII | Provisions as to Offences Affecting the Administration of Justice |
| 29 | XXIX | The Judgment |
| 30 | XXX | Submission of Death Sentences for Confirmation |
| 31 | XXXI | Appeals |
| 32 | XXXII | Reference and Revision |
| 33 | XXXIII | Transfer of Criminal Cases |
| 34 | XXXIV | Execution, Suspension, Remission and Commutation of Sentences |
| 35 | XXXV | Provisions as to Bail and Bonds |
| 36 | XXXVI | Disposal of Property |
| 37 | XXXVII | Irregular Proceedings |
| 38 | XXXVIII | Limitation for Taking Cognizance of Certain Offences |
| 39 | XXXIX | Miscellaneous |

### Sidebar architecture

The functional grouping below is the reader's mental model of a criminal case, corrected against the verified chapter list above (chapter numbers are no longer a hypothesis):

1. **Preliminary and the machinery of criminal courts** — Ch. I (Preliminary), Ch. II (Constitution of Criminal Courts and Offices), Ch. III (Power of Courts)
2. **Police powers** — Ch. IV (Powers of Superior Officers of Police and Aid to the Magistrates and the Police), Ch. V (Arrest of Persons), Ch. VI (Processes to Compel Appearance), Ch. VII (Processes to Compel the Production of Things), Ch. VIII (Reciprocal Arrangements... Attachment and Forfeiture of Property), Ch. XII (Preventive Action of the Police)
3. **Preventive and maintenance jurisdiction** — Ch. IX (Security for Keeping the Peace and for Good Behaviour), Ch. X (Order for Maintenance of Wives, Children and Parents), Ch. XI (Maintenance of Public Order and Tranquillity)
4. **Information and investigation** — Ch. XIII (Information to the Police and Their Powers to Investigate) — FIR, zero FIR and electronic registration, investigation, statements, forensic requirements, the police report
5. **Cognizance, commitment and charge** — Ch. XIV (Jurisdiction of the Criminal Courts in Inquiries and Trials), Ch. XV (Conditions Requisite for Initiation of Proceedings), Ch. XVI (Complaints to Magistrates), Ch. XVII (Commencement of Proceedings Before Magistrates), Ch. XVIII (The Charge)
6. **Trial** — Ch. XIX (Trial Before a Court of Session), Ch. XX (Trial of Warrant-Cases by Magistrates), Ch. XXI (Trial of Summons-Cases by Magistrates), Ch. XXII (Summary Trials), Ch. XXIII (Plea Bargaining), Ch. XXIV (Attendance of Persons Confined or Detained in Prisons), Ch. XXV (Evidence in Inquiries and Trials), Ch. XXVI (General Provisions as to Inquiries and Trials), Ch. XXVII (Provisions as to Accused Persons of Unsound Mind), Ch. XXVIII (Provisions as to Offences Affecting the Administration of Justice)
7. **Bail and bonds** — Ch. XXXV (Provisions as to Bail and Bonds)
8. **Judgment, sentence and disposal of property** — Ch. XXIX (The Judgment), Ch. XXX (Submission of Death Sentences for Confirmation), Ch. XXXIV (Execution, Suspension, Remission and Commutation of Sentences), Ch. XXXVI (Disposal of Property)
9. **Appeals, reference, revision and inherent powers** — Ch. XXXI (Appeals), Ch. XXXII (Reference and Revision). Inherent powers (s. 528) sit in Ch. XXXIX (Miscellaneous) — cross-link rather than misfile.
10. **Execution, transfer and miscellaneous** — Ch. XXXIII (Transfer of Criminal Cases), Ch. XXXVII (Irregular Proceedings), Ch. XXXVIII (Limitation for Taking Cognizance of Certain Offences), Ch. XXXIX (Miscellaneous)
11. **Electronic and technology provisions** — cross-cutting, no dedicated chapter; provisions are distributed across Ch. V, VI, XIII, XXV and others
12. **Drafting toolkit** — model applications, no chapter

---

## What is genuinely new — the highest-value content on the site

A practitioner already knows criminal procedure. What he does not know is what changed. Treat the following as **priority content**, not as a footnote, and give each its own bolded lead wherever it touches a provision:

**Hard statutory timelines.** The BNSS imposes fixed periods where the CrPC had none — for forwarding information, for forensic examination in specified cases, for supply of documents to the accused, for framing charge, for concluding trial, for pronouncing judgment after conclusion of arguments, for deciding applications. A practitioner running on CrPC muscle memory will miss every one of them. Every such timeline belongs in `#### The limitation clock` **and** gets a line in `#### Strategy and drafting`.

**Electronic and digital procedure.** Registration of information electronically, zero FIR, service of summons by electronic means, electronic production of records, audio-video recording of search and seizure and of statements, and trial or appearance by video conferencing. This is the largest single functional change and it cuts across the whole statute.

**Forensic requirements.** Mandatory forensic investigation for specified categories of offence, with the attendant question of what happens when the mandate is not complied with — a question on which authority will be thin and must be argued from principle.

**Trial in absentia of a proclaimed offender.** A genuinely new procedure with no CrPC ancestor, and constitutionally interesting. Handle it in the "new provision" bucket, with the safeguards laid out precisely.

**Changes to arrest and to bail**, including the treatment of undertrial detention periods and default bail. Where a settled CrPC-era practice has been altered, that alteration is the paragraph the reader came for.

**Procedural rights of victims and informants** — where the Sanhita has strengthened them, say precisely what the informant is now entitled to and by when.

For every one of these: **verify the section number and read the text before writing.** New material is exactly where confident-sounding error is most likely.

---

## Order of work

Build in the order a criminal matter actually unfolds. It keeps cross-references pointing backwards to material that already exists, which matters because the CPC project repeatedly had to keep two blocks consistent across files.

### Phase 1 — Pilot (one provision, end to end)

Pick **one heavily-litigated provision with a clear CrPC ancestor** — the FIR provision is the natural choice. Build it through all six stages, build the site, run the verification block, deploy. Do not start Phase 2 until the pilot renders clean.

The pilot exists to prove the toolchain, the container ratios and the concordance format. Fixing the format once, on one provision, is cheap; fixing it on thirty is not.

### Phase 2 — Investigation
FIR and information; zero FIR and electronic registration; preliminary enquiry; the power to investigate; statements to police; statements and confessions before a Magistrate; forensic requirements; the police report; further investigation.

### Phase 3 — Arrest and appearance
Arrest with and without warrant; the notice of appearance in lieu of arrest; rights on arrest; production within twenty-four hours; remand and the limits of detention; processes to compel appearance; proclamation and attachment.

### Phase 4 — Bail
Bail in bailable and non-bailable offences; anticipatory bail; default bail; bonds and sureties; cancellation. **Highest-traffic part of the site.** Depends on Phase 3, which is why it comes after.

### Phase 5 — Cognizance and charge
Cognizance by Magistrates; complaints to Magistrates; commitment to Sessions; framing of charge; discharge; joinder of charges.

### Phase 6 — Trial
Sessions trial; warrant cases; summons cases; summary trial; trial in absentia; evidence and the BSA interlocks; plea bargaining.

### Phase 7 — Judgment and after
Judgment; sentencing; compensation and victim rights; disposal of property; appeals; reference and revision; inherent powers.

### Phase 8 — Preventive and maintenance jurisdiction
Security for keeping the peace and good behaviour; public nuisance; urgent orders; maintenance of dependants. Self-contained; can be moved earlier if there is a reason.

### Phase 9 — Drafting toolkit
Model bail application, anticipatory bail application, discharge application, quashing petition, revision, maintenance application. Each cross-linked to its provision page.

### Continuous
A **CrPC → BNSS concordance page**, built up as provisions are written, never written speculatively ahead of them. Only verified rows go on it. It will become one of the most-visited pages on the site, which is exactly why it must contain nothing unverified.

---

## Cross-reference discipline

The CPC project's recurring maintenance cost was two blocks in different files describing the same rule and drifting apart.

Prevent it:

- When provision X is discussed inside provision Y's block, **link to X and keep the treatment in Y short**. One canonical treatment per rule.
- Keep a running list of cross-references in `TASKS.md` as you create them, so the later provision knows it has an existing commitment to honour.
- The concordance page links to provisions; provisions do not restate the concordance page.
