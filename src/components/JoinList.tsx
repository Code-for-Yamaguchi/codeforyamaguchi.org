import Image from 'next/image'

const join = [
  {
    icon: '/slack.jpg',
    name: 'オンラインコミュニティ',
    width: 300,
    height: 123,
    url:
      'https://join.slack.com/t/codeforyamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w',
    invite: 'slackへの参加は',
    desc:
      'オンラインで、誰でも参加できるオープンなコミュニティをslackというコミュニケーションツールで作成しました。イベント情報や気になるプロジェクトに参加して、山口県の挑戦者と交流しましょう。'
  },
  {
    icon: '/peatix.jpg',
    name: 'イベント',
    width: 300,
    height: 106,
    url: 'https://codeforyamaguchi.peatix.com',
    invite: '開催予定のイベントは',
    margin: 'mt-4',
    desc:
      '月に一回、オンラインまたはオフラインでイベントを開催しています。Peatixというサービスを利用し募集を行っています。興味のあるイベントがありましたらぜひご参加ください。'
  },
  {
    name: '運営募集',
    url: 'https://forms.gle/yJXfyBCw2RTX15qm9',
    invite: '運営へ参加希望の方は',
    margin: 'mt-8',
    desc:
      'このCode for Yamaguchiというコミュニティをもっと大きくしていきたいです。今は小さいコミュニティを山口県全域に轟かせることができるように、少しでも力を貸してほしいです。'
  }
]

export const JoinList = () => {
  return (
    <ul className="flex mx-10 mt-2 justify-center flex-col　md:flex-row flex-wrap">
      {join.map((join) => (
        <li
          key={join.name}
          className="flex flex-col justify-start items-center bg-white mb-10 px-2 md:px-10 md:w-2/5"
        >
          {join.icon && (
            <img
              className="flex justify-center"
              src={join.icon}
              alt={join.name}
              width={join.width}
              height={join.height}
            />
          )}
          <div className={join.margin}></div>
          <h3 className="mt-1 mb-4 text-gray-900 text-2xl font-medium">{join.name}</h3>
          <div className="text-gray-500 text-sm">
            {join.desc}
            {join.invite}
            <a href={join.url} className="text-primary hover:underline">
              こちら
            </a>
            から。
          </div>
        </li>
      ))}
    </ul>
  )
}
