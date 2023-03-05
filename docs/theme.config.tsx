import React from 'react'
import Image from 'next/image'
import mascot from 'public/mascot.png'

import type { DocsThemeConfig } from 'nextra-theme-docs'

export default {
  project: {
    link: 'https://github.com/stijnvanhulle/kubb.git',
  },
  docsRepositoryBase: 'https://github.com/stijnvanhulle/kubb/blob/main/docs',
  titleSuffix: ' – Kubb',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Kubb',
    }
  },
  i18n: [],
  logo: (
    <>
      <span
        style={{
          fontSize: '2rem',
          marginRight: '1rem',
        }}
        className="mr-2 font-extrabold md:inline"
      >
        Kubb
      </span>
      <span className="text-gray-400 font-normal md:inline">OpenAPI generated clients</span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Kubb: OpenAPI generated clients" />
      <meta name="og:description" content="Kubb: OpenAPI generated clients" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://kubb.dev/og.png" />
      <meta name="twitter:site:domain" content="kubb.dev" />
      <meta name="twitter:url" content="https://kubb.dev" />
      <meta name="og:title" content="Kubb: OpenAPI generated clients" />
      <meta name="og:image" content="https://kubb.dev/og.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c2410c" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000000" />
    </>
  ),
  banner: {
    key: '2.0-release',
    text: (
      <>
        🎉 Kubb has released it's first alpha version <Image src={mascot} style={{ display: 'inline' }} alt="Mascot of Kubb" width={30} />
      </>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Stijn Van Hulle.`,
  },
  toc: {
    float: true,
  },
  sidebar: {
    defaultMenuCollapsed: true,
    subtitle: ({ title }) => <>{title}</>,
  },
} as DocsThemeConfig
