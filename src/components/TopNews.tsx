import Link from 'next/link'

import { SectionTitle } from './SectionTitle'
import { LinkList } from './LinkList'

export const TopNews = () => {
    return (
        <div>
            <SectionTitle title="News" subtitle="お知らせ" />
            <LinkList />
        </div>
    )
}
