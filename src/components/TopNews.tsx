import Link from 'next/link'

import { SectionTitle } from './share/SectionTitle'
import { NewsList } from './news/NewsList'
// import { DetailButton } from './share/DetailButton'

export const TopNews = () => {
  return (
    <div>
      <SectionTitle title="News" subtitle="お知らせ" />
      <NewsList />
    </div>
  )
}
