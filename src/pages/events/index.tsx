import { PageHeader } from '../../components/PageHeader'
import { BreadCrumbs } from '../../components/BreadCrumbs'
import { DetailTitle } from '../../components/DetailTitle'
import { EventsList } from '../../components/EventsList'
import { PageFooter } from '../../components/PageFooter'

const pages = [
    { name: 'Events', href: '/events', current: true },
]

export default function Events() {
    return (
        <div>
            <PageHeader />
            <BreadCrumbs pathList={pages} />
            <DetailTitle title="Events" subtitle="すべてのイベント" />
            <EventsList all={true} />
            <PageFooter />
        </div>
    )
}