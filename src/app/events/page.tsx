import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { EventsList } from '@/components/events/EventsList'
import { PageFooter } from '@/components/PageFooter'
import { Header } from '@/components/Header'
import { Fuku3D } from '@/components/fuku3D'

const pages = [{ name: 'Events', href: '/events', current: true }]

export default function Events() {
  return (
    <div>
      <Header />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="Events" subtitle="すべてのイベント" />
      <EventsList all={true} />
      <PageFooter />
    </div>
  )
}
