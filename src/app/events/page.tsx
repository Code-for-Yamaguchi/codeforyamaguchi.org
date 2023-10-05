import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { EventsList } from '@/components/events/EventsList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Fuku3D } from '@/components/fuku3D'

const pages = [{ name: 'イベント', href: '/events', current: true }]

export default function Events() {
  return (
    <>
      <Header />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="Events" subtitle="すべてのイベント" />

      <Footer />
    </>
  )
}
