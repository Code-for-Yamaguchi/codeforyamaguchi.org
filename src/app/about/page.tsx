import { BreadCrumbs } from '@/components/share/BreadCrumbs'
import { DetailTitle } from '@/components/share/DetailTitle'
import { EventsList } from '@/components/events/EventsList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutList } from '@/components/about/AboutList'
import { Iframe } from '@/components/share/Iframe'
import ExternalLink from '@/components/share/externalLink'

const pages = [{ name: '私たちについて', href: '/about', current: true }]

export default function About() {
  return (
    <>
      <Header />
      <BreadCrumbs pathList={pages} />
      <DetailTitle title="About" subtitle="私たちについて" />
      <AboutList />
      <div className="mb-12 px-6 text-left lg:text-center lg:px-8 mx-auto max-w-2xl text-sm leading-6 text-gray-600">
        お問い合わせは、
        <ExternalLink
          href="https://twitter.com/YamaguchiFor"
          className="font-medium text-primary underline underline-offset-4"
        >
          Code for Yamaguchi公式X（旧Twitter）
        </ExternalLink>
        のDMまでお願いします。
        <br />
        ※有志の運営によるため、返信に時間がかかる場合があります。
        <br />
        もし数日経っても返信がない場合は、
        <ExternalLink
          href="https://twitter.com/nsd244"
          className="font-medium text-primary underline underline-offset-4"
        >
          代表nisshi-devのX
        </ExternalLink>
        のDMまでご連絡ください。
      </div>
      <Iframe
        className="mb-12 px-6 lg:px-14 lg:mb-20"
        content={`<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2c77d93d54424fcb98b36c35394568f7" title="Code_for_Yamaguchiの今までとこれから" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`}
      />
      <Footer />
    </>
  )
}
