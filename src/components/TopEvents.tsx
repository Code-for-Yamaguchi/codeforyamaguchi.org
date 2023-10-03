import { SectionTitle } from './share/SectionTitle'
import { EventsList } from './events/EventsList'
import { DetailButton } from './share/DetailButton'
import { getDatabase } from '@/lib/notion';

export const TopEvents = async () => {
  return (
    <div className="anchor" id="event">
      <SectionTitle title="Events" subtitle="開催予定のイベント" />
      <EventsList all={false} />
      <DetailButton link="/events" text="過去のイベント" />
    </div>
  )
}
