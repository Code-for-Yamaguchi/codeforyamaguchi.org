import Link from 'next/link'
import { Button } from './ui/button'
import { ExternalLink as ExternalLinkIcon, CalendarHeart } from 'lucide-react'
import { Header } from './Header'
import {
  AnimatePresenceWrap,
  MotionDiv,
  MotionSection,
} from '@/lib/framerMotion'
import ExternalLink from './share/externalLink'

export const Hero = () => {
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Header />
      <AnimatePresenceWrap>
        <MotionSection key="main" {...config}>
          <div className="mt-[5vh] ml-[5vw]">
            <MotionDiv
              key="title"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
            >
              <h1 className="font-black text-[2.2rem] lg:text-[4.2rem] tracking-tighter overflow-hidden">
                山口県にゆかりのある
                <br />
                挑戦者を応援する
              </h1>
            </MotionDiv>
            <div className="relative mt-[100px] left-5 lg:left-[300px] w-5/6 lg:w-[500px]">
              <MotionDiv
                key="p"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  damping: 7,
                  stiffness: 30,
                  restDelta: 0.001,
                  duration: 0.6,
                  delay: 0.2,
                  delayChildren: 0.2,
                }}
              >
                <p className="leading-7 [&:not(:first-child)]:mt-6 mb-[48px]">
                  &quot;山口県にゆかりのある挑戦者を応援する&quot;をミッションに掲げ、ITを使って地域課題を解決することをはじめとしたさまざまな活動を行っていくためのテックコミュニティです。
                </p>
                <div className="flex flex-col space-y-6 lg:w-[380px]">
                  <Button asChild className="p-6 lg:p-2">
                    <ExternalLink href="https://join.slack.com/t/codeforyamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w">
                      オンラインコミュニティ(Slack)
                      <br className="block lg:hidden" />
                      への参加はこちら
                      <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </ExternalLink>
                  </Button>
                  <Button asChild>
                    <Link href="/events">
                      <CalendarHeart className="mr-2 h-4 w-4" />
                      イベント一覧はこちら
                    </Link>
                  </Button>
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>
      </AnimatePresenceWrap>
    </div>
  )
}
