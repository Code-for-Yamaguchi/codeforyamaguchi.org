type AboutLink = {
  icon: string
  act: string
  desc: string
}

export const AboutLinks: AboutLink[] = [
  {
    icon: '/develop.png',
    act: 'OSS開発',
    desc: '不定期で作業もくもく会を開催し、OSS開発に取り組んでいきます。現在は東京都のコロナサイトのOSSの山口県版を運用・改善しています。',
  },
  {
    icon: '/study.png',
    act: 'イベント・勉強会',
    desc: 'トークイベントや勉強会などのイベントを毎月に開催しています。メンバーが挑戦していること・達成したことについて発信するものやプログラミングの勉強会などがあります。',
  },
  {
    icon: '/talk.png',
    act: 'メンバー同士の交流',
    desc: 'Code for Yamaguchiには、熱意を持って何かしら挑戦している方が多く在籍しています。さまざまなスキルセットやスキルレベルを持つメンバーにより、多角的な議論を行うことができます。',
  },
]
