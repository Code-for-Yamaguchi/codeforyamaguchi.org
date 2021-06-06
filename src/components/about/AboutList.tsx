import Image from 'next/image'

const about = [
  {
    icon: '/develop.png',
    act: 'OSS開発',
    desc:
      '不定期で作業もくもく会を開催し、OSS開発に取り組んでいきます。現在は東京都のコロナサイトのOSSの山口県版を運用・改善しています。',
  },
  {
    icon: '/study.png',
    act: 'イベント・勉強会',
    desc:
      'トークイベントや勉強会などのイベントを毎月に開催しています。メンバーが挑戦していること・達成したことについて発信するものやプログラミングの勉強会などがあります。',
  },
  {
    icon: '/talk.png',
    act: 'メンバー同士の交流',
    desc:
      'Code for Yamaguchiには、熱意を持って何かしら挑戦している方が多く在籍しています。さまざまなスキルセットやスキルレベルを持つメンバーにより、多角的な議論を行うことができます。',
  },
]

export const AboutList = () => {
  return (
    <ul className="flex mx-10 justify-center flex-col　md:flex-row flex-wrap">
      {about.map((about) => (
        <li
          key={about.act}
          className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-1/5"
        >
          <Image
            className="flex justify-center"
            src={about.icon}
            alt={about.act}
            layout="fixed"
            width={150}
            height={150}
          />

          <h3 className="mt-6 mb-4 text-gray-900 text-2xl font-medium">{about.act}</h3>
          <div className="text-gray-500 text-sm">{about.desc}</div>
        </li>
      ))}
    </ul>
  )
}
