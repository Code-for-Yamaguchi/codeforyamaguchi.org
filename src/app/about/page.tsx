import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { EventsList } from '@/components/events/EventsList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutList } from '@/components/about/AboutList'
import { Iframe } from '@/components/share/Iframe'

const pages = [{ name: '私たちについて', href: '/about', current: true }]

export default function About() {
  return (
    <>
      <Header />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="About" subtitle="私たちについて" />
      <AboutList />
      <Iframe
        className='mb-20 px-14'
        content={
          `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2c77d93d54424fcb98b36c35394568f7" title="Code_for_Yamaguchiの今までとこれから" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`
        }/>
      <Footer />
    </>
  )
}
