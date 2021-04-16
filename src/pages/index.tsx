import Head from 'next/head'

import { PageHeader } from '../components/PageHeader'
import { PageTop } from '../components/PageTop'

export default function Home() {
  return (
    <>
      <div>
        <PageHeader />
          <PageTop />
      </div>
    </>
  )
}
