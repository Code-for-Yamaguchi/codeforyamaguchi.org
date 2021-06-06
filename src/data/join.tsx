type JoinLink = {
  icon?: string
  name: string
  width?: number
  height?: number
  url: string
  invite: string
  margin?: string
  desc: string
}

export const JoinLinks: JoinLink[] = [
  {
    icon: '/slack.jpg',
    name: 'オンラインコミュニティ',
    width: 300,
    height: 123,
    url: 'https://join.slack.com/t/codeforyamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w',
    invite: 'slackへの参加は',
    desc: 'オンラインで、誰でも参加できるオープンなコミュニティをslackというコミュニケーションツールで作成しました。イベント情報や気になるプロジェクトに参加して、山口県の挑戦者と交流しましょう。'
  },
  {
    icon: '/peatix.jpg',
    name: 'イベント',
    width: 300,
    height: 106,
    url: 'https://codeforyamaguchi.peatix.com',
    invite: '開催予定のイベントは',
    margin: 'mt-4',
    desc: '月に一回、オンラインまたはオフラインでイベントを開催しています。Peatixというサービスを利用し募集を行っています。興味のあるイベントがありましたらぜひご参加ください。'
  },
  {
    name: '運営募集',
    url: 'https://forms.gle/yJXfyBCw2RTX15qm9',
    invite: '運営へ参加希望の方は',
    margin: 'mt-8',
    desc: 'このCode for Yamaguchiというコミュニティをもっと大きくしていきたいです。今は小さいコミュニティを山口県全域に轟かせることができるように、少しでも力を貸してほしいです。'
  }
]
