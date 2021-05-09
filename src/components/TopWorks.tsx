import { SectionTitle } from './SectionTitle'
import { WorksList } from './WorksList'

export const TopWorks = () => {
  return (
    <div className="anchor" id="works">
      <SectionTitle title="Works" subtitle="主な活動実績" />
      <WorksList />
    </div>
  )
}
