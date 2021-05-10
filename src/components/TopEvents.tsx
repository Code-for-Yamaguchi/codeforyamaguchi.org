import Link from 'next/link'

import { SectionTitle } from './SectionTitle'
import { EventsList } from './EventsList'
import { DetailButton } from './DetailButton'

export const TopEvents = () => {
    return (
        <div className="anchor" id="event">
            <SectionTitle title="Event" subtitle="開催予定のイベント" />
            <EventsList />
            <DetailButton link="/event" text="過去のイベント"/>
        </div>
    )
}
