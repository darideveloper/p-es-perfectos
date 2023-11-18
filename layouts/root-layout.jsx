import { metaData } from '@/lib/meta.js'
import { regularFont } from '@/lib/fonts'

import Head from 'next/head'
import Header from '@/sections/header.jsx'

/**
 * Main layout with header and footer
 * @param {node} children
 * @param {string} subPage current subpage
 * @returns {jsx}
 */
export default function RootLayout({ children, subPage = "" }) {
  return (
    <>
      <Head>
        <title>{`{metaData.title}{subPage && "| " + ${subPage}}`}</title>
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta name="keywords" content={metaData.keywords} />
      </Head>
      <div className={`
        content
        ${regularFont.className}
      `}>
        <Header />
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </div>
    </>
  )
}