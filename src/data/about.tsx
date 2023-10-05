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
    btn: true
  },
]

export const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]