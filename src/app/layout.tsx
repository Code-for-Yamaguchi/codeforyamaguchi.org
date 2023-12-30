import Script from 'next/script'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { Metadata } from 'next'
import { description, siteName, url } from '@/constants/metadata'

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  metadataBase: url,
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
    { rel: 'icon', url: `/favicon/favicon.ico` },
    { rel: 'apple-touch-icon', url: `/favicon/apple-touch-icon.png` },
  ],
  manifest: `/site.webmanifest`,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `/og.png`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@YamaguchiFor',
    creator: '@nsd244',
    images: `/og.png`,
  },
  alternates: {
    canonical: '/',
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
