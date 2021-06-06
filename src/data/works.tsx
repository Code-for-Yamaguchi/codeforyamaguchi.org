type WorksLink = {
  image: string
  work: string
  desc: string
  tag: string
  url: string
}

export const WorksLinks: WorksLink[] = [
  {
    image: '/stopcovid19yamaguchi.png',
    work: '山口県公認 新型コロナウイルス感染症対策サイト',
    desc:
      '東京都のOSSをもとに山口県版を作成し、運用を行っています。山口県庁の方々に管理していただいているオープンデータを利用してデータを可視化しています。',
    tag: 'Doing',
    url: 'https://github.com/nishidayoshikatsu/covid19-yamaguchi',
  },
]
