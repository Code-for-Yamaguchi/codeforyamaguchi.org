import { PageHeader } from '@/components/Header'
import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { NewsList } from '@/components/news/NewsList'
import { PageFooter } from '@/components/Footer'

const pages = [{ name: 'News', href: '/news', current: 'nidshia' }]

export default function News() {
  return (
    <div>
      <PageHeader />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="News" subtitle="お知らせ" />
      <NewsList />
      <PageFooter />
    </div>
  )
}
