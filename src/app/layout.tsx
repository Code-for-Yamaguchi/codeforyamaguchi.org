import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body>
        {children}
      </body>
    </html>
  )
}