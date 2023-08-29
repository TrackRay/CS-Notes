import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>CS-Notes</span>,
  project: {
    link: 'https://shabi.com',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'CS Docs',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2, //here
    toggleButton: true,
  },
  gitTimestamp: `MIT ${new Date().getFullYear()} © thrgo.`,
  feedback:{ content: null }, 
  editLink: { text: null }
}

export default config
