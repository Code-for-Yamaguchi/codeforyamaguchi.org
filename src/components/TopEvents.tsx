import Link from 'next/link'

import { SectionTitle } from './SectionTitle'
import { EventsList } from './EventsList'
import { DetailButton } from './DetailButton'

export const TopEvents = () => {
    return (
        <div className="anchor" id="event">
            <SectionTitle title="Events" subtitle="開催予定のイベント" />
            <EventsList all={false} />
            <DetailButton link="/events" text="過去のイベント"/>
        </div>
    )
}
