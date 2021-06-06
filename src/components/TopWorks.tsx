import { SectionTitle } from './share/SectionTitle'
import { WorksList } from './works/WorksList'

export const TopWorks = () => {
  return (
    <div className="anchor" id="works">
      <SectionTitle title="Works" subtitle="主な活動実績" />
      <WorksList />
    </div>
  )
}
