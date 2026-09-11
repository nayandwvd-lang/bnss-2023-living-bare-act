// docs/.vitepress/config.mjs
//
// Starter config for the BNSS guide.
//
// The one line that matters most is the `markdown.config` hook: without it the
// five containers and the three badges do not exist and every `:::` block leaks
// into the page as literal text.

import { defineConfig } from 'vitepress'
import { bnssContainers } from './markdown/containers.mjs'

export default defineConfig({
  title: 'BNSS Practitioner & Academic Guide',
  description:
    'Bharatiya Nagarik Suraksha Sanhita, 2023 — a living digital bare Act, with the CrPC concordance.',
  lang: 'en-IN',

  // Local builds serve from '/'; the Pages workflow sets DOCS_BASE=/bnss/.
  base: process.env.DOCS_BASE ?? '/',

  cleanUrls: true,
  lastUpdated: true,
  appearance: true,

  head: [
    // Pick a colour distinct from the CPC site's #8b1a1a so the two are not
    // confusable when both are open.
    ['meta', { name: 'theme-color', content: '#1d4e5f' }]
  ],

  // REQUIRED. Registers the containers and the badge inline rule.
  markdown: {
    config: (md) => bnssContainers(md)
  },

  themeConfig: {
    siteTitle: 'BNSS Guide',

    // Local search indexes RENDERED MARKDOWN. This is the reason the containers
    // are markdown-it rules rather than Vue components — see reference/02.
    search: {
      provider: 'local',
      options: { detailedView: true }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start here', link: '/start-here' },
      { text: 'CrPC → BNSS', link: '/concordance' },
      { text: 'Glossary', link: '/glossary' },
      {
        text: 'Chapters',
        items: [
          // Fill in as chapters are written. Do not list a page before it exists.
        ]
      },
      { text: 'Drafting toolkit', link: '/drafts/' }
    ],

    // Chapter-based, NOT the CPC's sections + orders split. BNSS has no Orders.
    // The 12 functional parts below are verified against the real chapter
    // list (39 chapters, confirmed titles) in reference/05 — do not add a
    // group back to hypothesis-only chapter numbers.
    sidebar: {
      '/chapters/': [
        { text: 'Preliminary and the machinery of criminal courts', collapsed: true, items: [] },
        {
          text: 'Police powers',
          collapsed: false,
          items: [
            { text: 'Chapter V — Arrest of persons (ss. 35–62)', link: '/chapters/chapter-05' },
            { text: 'Chapter VI — Processes to compel appearance (ss. 63–93)', link: '/chapters/chapter-06' }
          ]
        },
        { text: 'Preventive and maintenance jurisdiction', collapsed: true, items: [] },
        {
          text: 'Information and investigation',
          collapsed: false,
          items: [
            { text: 'Chapter XIII — Police powers to investigate (ss. 173–196)', link: '/chapters/chapter-13' }
          ]
        },
        {
          text: 'Cognizance, commitment and charge',
          collapsed: false,
          items: [
            { text: 'Chapter XIV — Jurisdiction of the criminal courts (ss. 197–209)', link: '/chapters/chapter-14' },
            { text: 'Chapter XV — Conditions requisite for initiation of proceedings (ss. 210–222)', link: '/chapters/chapter-15' },
            { text: 'Chapter XVI — Complaints to Magistrates (ss. 223–226)', link: '/chapters/chapter-16' },
            { text: 'Chapter XVII — Commencement of proceedings before Magistrates (ss. 227–233)', link: '/chapters/chapter-17' },
            { text: 'Chapter XVIII — The charge (ss. 234–247)', link: '/chapters/chapter-18' }
          ]
        },
        {
          text: 'Trial',
          collapsed: false,
          items: [
            { text: 'Chapter XIX — Trial before a Court of Session (ss. 248–260)', link: '/chapters/chapter-19' },
            { text: 'Chapter XX — Trial of warrant-cases by Magistrates (ss. 261–273)', link: '/chapters/chapter-20' },
            { text: 'Chapter XXI — Trial of summons-cases by Magistrates (ss. 274–282)', link: '/chapters/chapter-21' },
            { text: 'Chapter XXII — Summary trials (ss. 283–288)', link: '/chapters/chapter-22' }
          ]
        },
        {
          text: 'Bail and bonds',
          collapsed: false,
          items: [
            { text: 'Chapter XXXV — Bail and bonds (ss. 478–496)', link: '/chapters/chapter-35' }
          ]
        },
        { text: 'Judgment, sentence and disposal of property', collapsed: true, items: [] },
        { text: 'Appeals, reference, revision and inherent powers', collapsed: true, items: [] },
        { text: 'Execution, transfer and miscellaneous', collapsed: true, items: [] }
      ],
      '/drafts/': [
        { text: 'Drafting toolkit', collapsed: false, items: [] }
      ]
    },

    outline: { level: [2, 3], label: 'On this page' },

    docFooter: { prev: 'Previous', next: 'Next' },

    footer: {
      message:
        'Educational and practice material. Verify every citation and every section number against the bare Act before relying on it in court.',
      copyright: ''
    }
  }
})
