import Head from 'next/head'

import { PageHeader } from '../components/PageHeader'
import { PageTop } from '../components/PageTop'
import { TopNews } from '../components/TopNews'
import { TopAbout } from '../components/TopAbout'
import { TopJoin } from '../components/TopJoin'
import { TopWorks } from '../components/TopWorks'
import { PageFooter } from '../components/PageFooter'

const description = '「山口県の挑戦者を応援する」をミッションに掲げ、ITをはじめとした地域課題を解決することをはじめとしたさまざまな活動を行っていくコミュニティです。'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code for Yamaguchi</title>
          <meta name="description" content={description}></meta>
          <meta property="og:url" content="https://www.codeforyamaguchi.org" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Code for Yamaguchi" />
          <meta property="og:description" content={description}></meta>
          <meta property="og:site_name" content="Code for Yamaguchi" />
          <meta property="og:image" content="https://www.codeforyamaguchi.org/ogp.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YamaguchiFor" />
          <link data-n-head="1" rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <PageHeader />
        <PageTop />
        <TopNews />
        <TopAbout />
        <TopJoin />
        <TopWorks />
        <PageFooter />
      </div>
    </>
  )
}
