import Link from 'next/link'

import { SectionTitle } from './SectionTitle'
import { LinkList } from './LinkList'
import { DetailButton } from './DetailButton'

export const TopNews = () => {
  return (
    <div className="anchor" id="news">
      <SectionTitle title="News" subtitle="お知らせ" />
      <LinkList numlimit={3} />
        <DetailButton link="/news" text="一覧へ"/>
    </div>
  )
}
