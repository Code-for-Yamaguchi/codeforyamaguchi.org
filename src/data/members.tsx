type MembersLink = {
  name: string
  enname: string
  icon: string
  path: string
  role?: string
  affiliation?: string
  profile: string
  website?: string
  twitter?: string
  facebook?: string
  github?: string
}

export const MembersLinks: MembersLink[] = [
  {
    name: '西田 吉克',
    enname: 'Yoshikatsu Nishida',
    icon: '/members/yoshikatsu_nishida.jpg',
    path: '/members/#yosikatsu_nishida',
    role: 'Engineer, Director',
    affiliation: '山口大学',
    profile:
      'Code for Yamaguchi創設者。高専OB。高専ロボコンで機械設計。主にweb系で学生エンジニアとして活動。好きな技術はReact / TypeScript / Rails / Python3。起業準備中。',
    twitter: 'https://twitter.com/nsd244',
    facebook: 'https://www.facebook.com/profile.php?id=100019021064152',
    github: 'https://github.com/nishidayoshikatsu',
  },
  {
    name: '小野 航',
    enname: 'Wataru Ono',
    icon: '/members/wataru_ono.jpg',
    path: '/members/#wataru_ono',
    role: 'Engineer',
    affiliation: '山口大学',
    profile:
      '高専出身。山口大学に在学中です。学外ではエンジニアとしてプロダクトの開発に携わっています。ウェブフロントエンドに関する技術が好きです。好きな技術：React, Go, TypeScript',
    twitter: 'https://twitter.com/what_a_pon',
    github: 'https://github.com/watagit',
  },
  {
    name: '田中 勇馬',
    enname: 'Yuma Tanaka',
    icon: '/members/yuma_tanaka.webp',
    path: '/members/#yuma_tanaka',
    role: 'Engineer',
    affiliation: '徳山高専',
    profile: '高専専攻科生。ロボコン経験者。VRやIoT、3Dプリントなどに広く浅く興味あり。',
    facebook: 'https://www.facebook.com/yuma.tanaka.925602/',
  },
  {
    name: '福田 達也',
    enname: 'Tatsuya Fukuda',
    icon: '/members/tatsuya_fukuda.png',
    path: '/members/#tasuya_fukuda',
    role: 'Engineer',
    affiliation: '吉南株式会社',
    profile:
      '宇部の会社でシステムを整えたり作ったりしているエンジニアです。\n' +
      'Web開発、ゲーム開発、工作などなど、ものづくりが好きです。\n' +
      '好きな言語は TypeScript / C# ',
    github: 'https://github.com/gunsow911',
  },
  {
    name: '水田 千恵',
    enname: 'Chie Mizuta',
    icon: '/members/chie_mizuta.jpg',
    path: '/members/#chie_mizuta',
    role: 'Director, Public Relations',
    profile:
      '東京のIT企業で働く、宇部市出身のUX Prototyper。いろんな業種や世代の人とテクノロジーの未来を語りたい。電子工作が好き。',
    twitter: 'https://twitter.com/crispytaffy',
  },
  {
    name: '升谷 光貴',
    enname: 'Kohki Masutani',
    icon: '/members/kohki_masutani.jpg',
    path: '/members/#kohki_masutani',
    affiliation: '山口大学',
    profile: '学生。いろんな技術について勉強中。',
    twitter: 'https://twitter.com/atososon',
    github: 'https://github.com/atososon',
  },
  {
    name: '原田 哲也',
    enname: 'Tetsuya Harada',
    icon: '/members/tetsuya_harada.jpg',
    path: '/members/#tetsuya_harada',
    role: '運営/運用、時々開発',
    affiliation: '株式会社スオウ',
    profile: '株式会社スオウ代表。Webアプリをたくさん作りたい！',
    twitter: 'https://twitter.com/tetsuyanh',
    github: 'https://github.com/tetsuyanh',
  },
]
