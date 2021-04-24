type NewsLink = {
    date: Date
    title: string
    tag: string
    url?: string
}

export const NewsLinks: NewsLink[] = [
    {
        date: new Date(2021, 4, 25),
        title: 'Code for Yamaguchi Opening Event',
        tag: 'イベント',
        url: 'https://codeforyamaguchi-opening.peatix.com/'
    },
    {
        date: new Date(2021, 4, 25),
        title: '山口県公認 新型コロナウイルス感染症対策サイト 改善もくもく会 #11',
        tag: 'イベント',
        url: 'https://yamaguchi-stopcovid19-11.peatix.com/'
    },
]