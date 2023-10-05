import Script from 'next/script'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata = {
  title: 'Code for Yamaguchi',
  description:
    '"山口県にゆかりのある挑戦者を応援する"をミッションに掲げ、ITを使って地域課題を解決することをはじめとしたさまざまな活動を行っていくためのコミュニティです。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <Script src="//cdn.iframe.ly/embed.js" />
      <body className={`${noto.className}`}>{children}</body>
    </html>
  )
}
