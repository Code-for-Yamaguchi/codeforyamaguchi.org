import { MotionDiv, MotionHeader } from '@/lib/framerMotion'
import Link from 'next/link'

export const Header = () => {
  const transition = { type: 'spring', duration: 0.8 }

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="flex justify-between w-full p-[40px] items-center"
    >
      <Link href="/">
        <img src="/logo.svg" alt="logo" className="h-16" />
      </Link>
      <MotionDiv
        animate={{ x: 0, opacity: 1 }}
        transition={transition}
        className="flex space-x-8"
      >
        <Link href="/events">イベント</Link>
        <Link href="/about">私たちについて</Link>
      </MotionDiv>
    </MotionHeader>
  )
}
