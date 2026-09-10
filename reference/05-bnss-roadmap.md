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

### Sidebar architecture

Group the 39 chapters into functional parts. This is the reader's mental model of a criminal case, and it should map onto how a matter actually moves:

1. **Preliminary and the machinery of criminal courts** — definitions, classes of courts, powers, the classification of offences
2. **Police powers** — arrest, notice of appearance, search and seizure, processes to compel appearance and production
3. **Preventive and maintenance jurisdiction** — security for keeping the peace, public nuisance and urgent orders, maintenance of dependants
4. **Information and investigation** — FIR, zero FIR and electronic registration, investigation, statements, forensic requirements, the police report
5. **Cognizance, commitment and charge** — cognizance, complaints, commitment to Sessions, framing of charge, discharge
6. **Trial** — Sessions trial, warrant cases, summons cases, summary trial, trial in absentia
7. **Bail and bonds** — bail, anticipatory bail, bonds and sureties, default bail
8. **Judgment, sentence and disposal of property** — judgment, sentencing, compensation, plea bargaining, disposal
9. **Appeals, reference, revision and inherent powers**
10. **Execution, transfer and miscellaneous**
11. **Electronic and technology provisions** — treated as a cross-cutting part, because they run through the whole statute
12. **Drafting toolkit** — model applications

**Verify the chapter numbering and the chapter titles against the bare Act before writing the sidebar.** The grouping above is functional and safe; the chapter numbers behind it are not something to assert from memory.

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
