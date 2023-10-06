import Script from 'next/script'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { Metadata } from 'next'

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const siteName = 'Code for Yamaguchi公式サイト'
const description =
  '山口県にゆかりのある挑戦者を応援するテックコミュニティです。ITを使って地域課題を解決することをはじめとしたさまざまな活動を行っています。'
const url = 'https://codeforyamaguchi.org'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  applicationName: siteName,
  generator: 'Next.js',
  keywords: [
    'Code for Yamaguchi',
    'Code for',
    '山口',
    'テック',
    '技術',
    'テックコミュニティ',
  ],
  themeColor: '#3CB840',
  icons: [
    { rel: 'icon', url: `${url}/favicon/favicon.ico` },
    { rel: 'apple-touch-icon', url: `${url}/favicon/apple-touch-icon.png` },
  ],
  manifest: `${url}/site.webmanifest`,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${url}/og.png`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@YamaguchiFor',
    creator: '@nsd244',
    images: `${url}/og.png`,
  },
  alternates: {
    canonical: url,
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
