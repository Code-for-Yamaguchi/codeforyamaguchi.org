import { SectionTitle } from './share/SectionTitle'
import { JoinList } from './join/JoinList'

export const TopJoin = () => {
  return (
    <div className="anchor" id="join">
      <SectionTitle title="Join" subtitle="参加方法" />
      <JoinList />
    </div>
  )
}
