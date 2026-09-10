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
          { text: 'Investigation', link: '/chapters/investigation' }
        ]
      },
      { text: 'Drafting toolkit', link: '/drafts/' }
    ],

    // Chapter-based, NOT the CPC's sections + orders split. BNSS has no Orders.
    // Group the 39 chapters into the functional parts in reference/05.
    sidebar: {
      '/chapters/': [
        {
          text: 'Police powers',
          collapsed: false,
          items: []
        },
        {
          text: 'Information and investigation',
          collapsed: false,
          items: [
            // { text: 'FIR and registration of information', link: '/chapters/investigation' }
          ]
        },
        { text: 'Arrest and appearance', collapsed: true, items: [] },
        { text: 'Bail and bonds', collapsed: true, items: [] },
        { text: 'Cognizance and charge', collapsed: true, items: [] },
        { text: 'Trial', collapsed: true, items: [] },
        { text: 'Judgment, sentence and appeal', collapsed: true, items: [] },
        { text: 'Preventive and maintenance jurisdiction', collapsed: true, items: [] }
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
