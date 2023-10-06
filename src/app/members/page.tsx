import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { EventsList } from '@/components/events/EventsList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MembersList } from '@/components/members/MembersList'

const pages = [{ name: 'メンバー', href: '/members', current: true }]

export default function Members() {
  return (
    <>
      <Header />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="Members" subtitle="参加メンバー" />
      <MembersList />
      <Footer />
    </>
  )
}
