import { PageHeader } from '../../components/PageHeader'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { DetailTitle } from '../../components/DetailTitle'
import { LinkList } from '../../components/LinkList'
import { PageFooter } from '../../components/PageFooter'

const pages = [{ name: 'News', href: '/news', current: 'nidshia' }]

export default function News() {
  return (
    <div>
      <PageHeader />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="News" subtitle="お知らせ" />
      <LinkList />
      <PageFooter />
    </div>
  )
}
