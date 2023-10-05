'use client'

/* eslint-disable @next/next/no-img-element */
import { MotionDiv, MotionHeader } from '@/lib/framerMotion'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Menu } from 'lucide-react'

const navigation = [
  { name: 'トップ', href: '/' },
  { name: 'イベント', href: '/events' },
  { name: '私たちについて', href: '/about' },
  { name: 'メンバー', href: '/members' },
]

export const Header = () => {
  const transition = { type: 'spring', duration: 0.8 }

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="flex justify-between w-full p-4 items-center lg:p-[40px]"
    >
      <Link href="/">
        <span className="sr-only">Code for Yamaguchi</span>
        <img src="/logo.svg" alt="logo" className="h-11 lg:h-16" />
      </Link>
      <MotionDiv
        animate={{ x: 0, opacity: 1 }}
        transition={transition}
        className="hidden lg:flex lg:gap-x-12"
      >
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        ))}
      </MotionDiv>
      <Dialog>
        <DialogTrigger className="flex lg:hidden">
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </DialogTrigger>
        <DialogContent
          disabledBlur
          disabledClass
          className="fixed inset-y-0 right-0 w-full z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Code for Yamaguchi</span>
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Code for Yamaguchi"
              />
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <DialogPrimitive.Close
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    asChild
                    key={item.name}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </DialogPrimitive.Close>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </MotionHeader>
  )
}
