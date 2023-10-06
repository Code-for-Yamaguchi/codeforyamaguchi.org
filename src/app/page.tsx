import { Hero } from '@/components/Hero'
import { Fuku3D } from '@/components/fuku3D'

export default async function Home() {
  return (
    <>
      <Fuku3D />
      <Hero />
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
