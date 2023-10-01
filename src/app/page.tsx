import { PageHeader } from '@/components/PageHeader'
import { PageTop } from '@/components/PageTop'
import { TopNews } from '@/components/TopNews'
import { TopEvents } from '@/components/TopEvents'
import { TopAbout } from '@/components/TopAbout'
import { TopJoin } from '@/components/TopJoin'
import { TopWorks } from '@/components/TopWorks'
import { PageFooter } from '@/components/PageFooter'
import { Fuku3D } from '@/components/Fuku3D'

export default function Home () {
  return (
    <div>
      <PageHeader />
      <Fuku3D />
      <TopNews />
      <TopEvents />
      <TopAbout />
      <TopJoin />
      <TopWorks />
      <PageFooter />
    </div>
  )
}
