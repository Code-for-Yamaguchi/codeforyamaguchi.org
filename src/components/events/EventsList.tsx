/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { EventsLinks } from '@/data/events'
import { getDatabase } from '@/lib/notion'
import ExternalLink from '../share/externalLink'

type Props = {
  all: boolean
}

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
  const featureEvents = await getDatabase({
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
  })

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
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {allEvents && allEvents.map((event: any, index: number) => {
          const eventDate = event.properties['イベント日'].date.start
          const eventTitle = event.properties['名前'].title[0].text.content
          const eventDescription = event.properties['概要'].rich_text.length > 0 ? event.properties['概要'].rich_text[0].plain_text : ''
          const eventImageUrl = event.cover ? event.cover.file.url : ''
          const connpassUrl = event.properties.connpass ? event.properties.connpass.url : ''
          const peatixUrl = event.properties.peatix ? event.properties.peatix.url : ''
          const clusterUrl = event.properties.cluster ? event.properties.cluster.url : ''
          const youtubeUrl = event.properties.youtube ? event.properties.youtube.url : ''

          return (
            <li
              key={event.id}
              className="flex flex-col items-start justify-between"
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
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={eventDate} className="text-gray-500">
                    {eventDate}
                  </time>
                  <ExternalLink
                    href={connpassUrl}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {"connpass"}
                  </ExternalLink>
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

  /*return (
    <>
      {!all && !mkdata(all, events).length
        ? (
        <div className="flex justify-center my-10">現在開催予定のイベントはありません。</div>
          )
        : (
        <ul className="flex mt-10 justify-center flex-col　md:flex-row flex-wrap max-w-7xl mx-auto px-4 sm:px-6">
          {mkdata(all, events).map((event: anyt) => (
            <li
              key={event.title}
              className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-2/5"
            >
              <a href={event.url} className="px-10">
                <Image
                  className="flex justify-center"
                  src={event.image}
                  alt={event.title}
                  //layout="fixed"
                  width={300}
                  height={150}
                />

                <h3 className="mt-6 mb-4 text-normal-hover text-2xl font-medium hover:text-primary max-w-sm">
                  {event.title}
                </h3>
                <div className="text-normal-default text-sm">{event.date}</div>
              </a>
            </li>
          ))}
        </ul>
          )}
    </>
  )*/
}
