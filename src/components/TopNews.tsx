import Link from 'next/link'

import { SectionTitle } from './SectionTitle'
import { LinkList } from './LinkList'
import { DetailButton } from './DetailButton'

export const TopNews = () => {
    return (
        <div>
            <SectionTitle title="News" subtitle="お知らせ" />
            <LinkList />
            <DetailButton link="/news" />
        </div>
    )
}
