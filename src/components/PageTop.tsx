'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

export const PageTop = () => {
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="flex justify-between w-full p-[40px] items-center"
      >
        <img src="/logo.svg" alt="logo" className="h-16" />
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          transition={transition}
          className="flex space-x-8"
        >
          <div>イベント</div>
          <div>Code for Yamaguchiについて</div>
          <div>プロジェクト</div>
        </motion.div>
      </motion.header>
      <AnimatePresence>
        <motion.section key="main" {...config}>
          <div className="mt-[5vh] ml-[5vw]">
            <motion.div
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
              <h1 className="font-black text-[3rem] lg:text-[4.2rem] tracking-tighter overflow-hidden">
                山口県にゆかりのある
                <br />
                挑戦者を応援する
              </h1>
            </motion.div>
            <div className="relative mt-[100px] left-[300px]">
              <motion.div
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
                <p className="w-[500px] leading-7 [&:not(:first-child)]:mt-6 mb-[48px]">
                  &quot;山口県にゆかりのある挑戦者を応援する&quot;をミッションに掲げ、ITを使って地域課題を解決することをはじめとしたさまざまな活動を行っていくためのテックコミュニティです。
                </p>
                <Button asChild>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://join.slack.com/t/codeforyamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w"
                  >
                    オンラインコミュニティ(Slack)への参加はこちら
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
  /*return (
    <div className="relative z-0">
      <div className="h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-6 space-y-6">
        <div className="flex justify-center text-top font-bold text-base text-3xl sm:text-3xl md:text-5xl clearfix mb-5 z-50">
          山口県にゆかりのある挑戦者
          <br className="sm:hidden" />
          を応援する
        </div>
        <Link href="/">
          <div className="cursor-pointer flex justify-center text-normal hover:text-primary hover:bg-white border border-green-500 text-md sm:text-xl rounded-full py-4 px-8 sm:px-16 mx-12 md:mx-40 mb-20 bg-primary text-white">
            参加する
          </div>
        </Link>
      </div>
      <div className="absolute top-1/10 left-1/4 lg:top-1/20 lg:left-1/4 rounded-full h-20 w-20 sm:h-40 sm:w-40 bg-circle-yellow z-0"></div>
      <div className="absolute top-1/4 right-1/4 sm:top-1/5 sm:right-1/10  lg:top-1/5 lg:right-1/6 rounded-full h-10 w-10 sm:h-40 sm:w-40 bg-circle-green z-0"></div>
      <div className="absolute sm:top-1/2 lg:top-1/3 sm:right-1/20 rounded-full sm:h-10 sm:w-10 bg-circle-red z-0"></div>
      <div className="absolute bottom-1/20 right-1/20 lg:bottom-1/20 lg:right-1/10 rounded-full h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 bg-circle-red z-0"></div>
      <div className="absolute bottom-1/10 left-1/20 sm:bottom-1/8 sm:left-1/10 rounded-full h-10 w-10 sm:h-40 sm:w-40 lg:h-60 lg:w-60 bg-circle-blue z-0"></div>
      <div className="absolute sm:top-1/3 sm:left-1/20 lg:left-1/10 rounded-full sm:h-20 sm:w-20 bg-circle-indigo z-0"></div>
    </div>
  )*/
}
