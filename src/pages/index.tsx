import Head from 'next/head'

import { PageHeader } from '../components/PageHeader'
import { PageTop } from '../components/PageTop'
import { TopNews } from '../components/TopNews'
import { PageFooter } from '../components/PageFooter'

export default function Home() {
  return (
    <>
      <div>
        <PageHeader />
        <PageTop />
          <TopNews />
          <PageFooter />
      </div>
    </>
  )
}
