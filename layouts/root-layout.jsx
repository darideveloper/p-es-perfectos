import { metaData } from '@/lib/meta.js'
import { regularFont } from '@/lib/fonts'
import Head from 'next/head'

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
        <header>header</header>
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </div>
    </>
  )
}