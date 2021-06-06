import { VFC } from 'react'
import { SectionTitle } from './share/SectionTitle'
import MemberCarousel from './MemberCarousel'

export const TopMember: VFC = () => {
  return (
    <>
      <SectionTitle title="Members" subtitle="Code for Yamaguchiの運営メンバー" />
      <MemberCarousel />
    </>
  )
}
