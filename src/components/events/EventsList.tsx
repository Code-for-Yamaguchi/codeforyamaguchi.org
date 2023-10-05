/* eslint-disable @next/next/no-img-element */
import { getDatabase } from '@/lib/notion'
import ExternalLink from '../share/externalLink'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { Button } from '../ui/button'

const eventDatabaseId = process.env.NOTION_EVENT_DATABASE_ID ?? ''

export const EventsList = async () => {
  const now = new Date()
  const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo',
  })
  const formattedDate = dateFormatter.format(now).replace(/\//g, '-')

  //TODO: ページネーションを実装する
  //将来のイベント取得
  /*const featureEvents = await getDatabase({
    databaseId: eventDatabaseId,
    filter: {
      property: 'イベント日',
      date: {
        on_or_after: formattedDate,
      },
    },
    sorts: [
      {
        property: 'イベント日',
        direction: 'ascending',
      },
    ],
    page_size: 100,
  })*/

  //直近のイベント3件を取得
  /*const recentPastEvents = await getDatabase({
    databaseId: eventDatabaseId,
    filter: {
      property: 'イベント日',
      date: {
        on_or_before: formattedDate,
      },
    },
    sorts: [
      {
        property: "イベント日",
        direction: "descending"
      }
    ],
    page_size: 3
  });*/

  //将来も含めた全てのイベントを取得
  const allEvents = await getDatabase({
    databaseId: eventDatabaseId,
    sorts: [
      {
        property: 'イベント日',
        direction: 'descending',
      },
    ],
    page_size: 100,
  })

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32'>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {allEvents && allEvents.map((event: any, index: number) => {
          const eventDate = event.properties['イベント日'].date.start
          const eventTitle = event.properties['名前'].title[0].text.content
          const eventDescription = event.properties['概要'].rich_text.length > 0 ? event.properties['概要'].rich_text[0].plain_text : ''
          const eventImageUrl = event.cover ? (event.cover.file ? event.cover.file.url : event.cover.external.url) : ''
          const connpassUrl = event.properties.connpass ? event.properties.connpass.url : ''
          const peatixUrl = event.properties.peatix ? event.properties.peatix.url : ''
          const clusterUrl = event.properties.cluster ? event.properties.cluster.url : ''
          const youtubeUrl = event.properties.youtube ? event.properties.youtube.url : ''
          return (
            <li
              key={event.id}
              className="flex flex-col items-start justify-start"
            >
              <div
                className="relative w-full"
              >
                <img
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  src={eventImageUrl}
                  alt={eventTitle}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time dateTime={eventDate} className="text-gray-500">
                    {eventDate}
                  </time>
                  {eventDate > formattedDate &&
                    <span className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      <svg className="h-1.5 w-1.5 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx={3} cy={3} r={3} />
                      </svg>
                      参加者募集中
                    </span>
                  }
                </div>
                <div className='flex space-x-1 mt-4'>
                  {youtubeUrl &&
                    <ExternalLink
                      href={youtubeUrl}
                      className="inline-flex z-10 items-center gap-x-1.5 rounded-full bg-[#FF0000] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#FF0000]/50">
                      YouTube
                      <ExternalLinkIcon className="h-4 w-4" />
                    </ExternalLink>
                  }
                  {connpassUrl &&
                    <ExternalLink
                      href={connpassUrl}
                      className="inline-flex z-10 items-center gap-x-1.5 rounded-full bg-[#B22501] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#B22501]/50"
                    >
                      connpass
                      <ExternalLinkIcon className="h-4 w-4" />
                    </ExternalLink>
                  }
                  {peatixUrl &&
                    <ExternalLink
                      href={peatixUrl}
                      className="inline-flex z-10 items-center gap-x-1.5 rounded-full bg-[#56AB48] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#56AB48]/50"
                    >
                      Peatix
                      <ExternalLinkIcon className="h-4 w-4" />
                    </ExternalLink>
                  }
                  {clusterUrl &&
                    <ExternalLink
                      href={clusterUrl}
                      className="inline-flex z-10 items-center gap-x-1.5 rounded-full bg-[#00a6ea] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#00a6ea]/50"
                    >
                      Cluster
                      <ExternalLinkIcon className="h-4 w-4" />
                    </ExternalLink>
                  }
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={connpassUrl}>
                      <span className="absolute inset-0" />
                      {eventTitle}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{eventDescription}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
