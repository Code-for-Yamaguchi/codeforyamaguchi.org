type NewsLink = {
  date: string
  title: string
  tag?: string
  url?: string
}

export const NewsLinks: NewsLink[] = [
  {
    date: '2021.05.09',
    title: 'Code for Yamaguchi定例会議 #1',
    tag: '定例会議',
    url: 'https://docs.google.com/document/d/1k3v_oCQ4PGL3gHnYEyQ-IFzxsHxHcuWf7lDh9JP8reA/edit?usp=sharing',
  },
  {
    date: '2021.04.25',
    title: '山口県公認 新型コロナウイルス感染症対策サイト 改善もくもく会 #11',
    tag: 'イベント',
    url: 'https://yamaguchi-stopcovid19-11.peatix.com/',
  },
  {
    date: '2021.04.25',
    title: 'Code for Yamaguchi Opening Event',
    tag: 'イベント',
    url: 'https://codeforyamaguchi-opening.peatix.com/',
  },
]
