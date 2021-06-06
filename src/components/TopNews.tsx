import { SectionTitle } from './share/SectionTitle'
import { NewsList } from './news/NewsList'
import { DetailButton } from './share/DetailButton'

export const TopNews = () => {
  return (
    <div className="anchor" id="news">
      <SectionTitle title="News" subtitle="お知らせ" />
      <NewsList numlimit={3} />
      <DetailButton link="/news" text="一覧へ" />
    </div>
  )
}
