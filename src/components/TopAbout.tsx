import { SectionTitle } from './share/SectionTitle'
import { AboutList } from './about/AboutList'

export const TopAbout = () => {
  return (
    <div className="anchor" id="about">
      <SectionTitle title="About" subtitle="Code for Yamaguchiについて" />
      <div className="flex justify-center text-xs sm:text-lg text-center leading-relaxed my-12 mx-2 tracking-wide">
        Code for Yamaguchiは、
        <br />
        &rdquo;山口県の挑戦者を応援する&rdquo;をミッションに掲げ、
        <br />
        ITを使って地域課題を解決することをはじめとした
        <br />
        さまざまな活動を行っていくためのコミュニティです。
      </div>
      <AboutList />
    </div>
  )
}
