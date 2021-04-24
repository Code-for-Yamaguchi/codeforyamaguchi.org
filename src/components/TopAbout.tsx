import { SectionTitle } from './SectionTitle'
import { ActivityList } from './ActivityList'

export const TopAbout = () => {
  return (
    <div>
      <SectionTitle title="About" subtitle="Code for Yamaguchiについて" />
      <div className="flex justify-center text-xs sm:text-lg text-center leading-relaxed my-12 mx-2 tracking-wide">
        Code for Yamaguchiは、
        <br />
        "山口県の挑戦者を応援する"をミッションに掲げ、
        <br />
        ITを使って地域課題を解決することをはじめとした
        <br />
        さまざまな活動を行っていくためのコミュニティです。
      </div>
      <ActivityList />
    </div>
  )
}
