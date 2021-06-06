import { PageHeader } from '../components/PageHeader'
import { PageTop } from '../components/PageTop'
import { TopNews } from '../components/TopNews'
import { TopAbout } from '../components/TopAbout'
import { TopWorks } from '../components/TopWorks'
import { PageFooter } from '../components/PageFooter'
import { TopMember } from '../components/TopMember'

export default function Index() {
  return (
    <>
      <div>
        <PageHeader />
        <PageTop />
        <TopNews />
        <TopAbout />
        <TopWorks />
        <TopMember />
        <PageFooter />
      </div>
    </>
  )
}
