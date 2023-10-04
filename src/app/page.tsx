import { PageHeader } from '@/components/PageHeader'
import { PageTop } from '@/components/PageTop'
import { TopNews } from '@/components/TopNews'
import { TopEvents } from '@/components/TopEvents'
import { TopAbout } from '@/components/TopAbout'
import { TopJoin } from '@/components/TopJoin'
import { TopWorks } from '@/components/TopWorks'
import { PageFooter } from '@/components/PageFooter'
import { Fuku3D } from '@/components/fuku3D'
import { getDatabase } from '@/lib/notion'

export default async function Home () {
  return (
    <>
      <Fuku3D />
      <PageTop />
    </>
  )
  /*return (
    <div>
      <PageHeader />
      <PageTop />
      <Fuku3D />
      <TopNews />
      <TopEvents />
      <TopAbout />
      <TopJoin />
      <TopWorks />
      <PageFooter />
    </div>
  )*/
}
