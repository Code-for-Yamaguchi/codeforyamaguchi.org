type AboutLink = {
  icon: string
  act: string
  desc: string
  btn?: boolean
}

export const AboutLinks: AboutLink[] = [
  {
    icon: '/oss_develop.png',
    act: 'OSS開発',
    desc: '不定期でもくもく会を開催し、OSS開発に取り組んでいきます。東京都のコロナサイトのOSSの山口県版を開発・運用していました。（サイト閉鎖しました）',
  },
  {
    icon: '/events.png',
    act: 'イベント・勉強会',
    desc: 'LTイベントなどを月に1回ペースで開催しています。メンバーが挑戦していることのLTや、VRChatやclusterなどのソーシャルVR上のバーチャルイベントなどを開催しています。',
  },
  {
    icon: '/communication.png',
    act: 'メンバー同士の交流',
    desc: 'Code for Yamaguchiには、みんなでワイワイ楽しく何かに取り組んでいるメンバーが多く在籍しています。さまざまなスキルセットやスキルレベルを持つメンバーにより、楽しく議論できます。',
    btn: true,
  },
]
