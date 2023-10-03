/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { EventsLinks } from '@/data/events'
import { getDatabase } from '@/lib/notion'

type Props = {
  all: boolean
}

const eventDatabaseId = process.env.NOTION_EVENT_DATABASE_ID ?? ""

export const EventsList = async ({ all }: Props) => {
  const now = new Date();
  const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo'
  });
  const formattedDate = dateFormatter.format(now).replace(/\//g, '-');

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
        property: "イベント日",
        direction: "ascending"
      }
    ],
    page_size: 100
  });

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
  /*const allEvents = await getDatabase({
    databaseId: eventDatabaseId,
    sorts: [
      {
        property: "イベント日",
        direction: "descending"
      }
    ],
    page_size: 100
  });*/

  return (
    <>
      <ul className="flex mt-10 justify-center flex-col md:flex-row flex-wrap max-w-7xl mx-auto px-4 sm:px-6">
        {featureEvents.map((event: any, index: number) => {
          return (
            <li
              key={event.id}
              className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-2/5"
            >
              <a href={event.properties.connpass.url || event.properties.peatix.url || event.properties.cluster.url || ""} className="px-10">
                <img
                  className="flex justify-center"
                  src={event.cover ? event.cover.file.url : ""}
                  alt={event.properties['名前'].title[0].text.content}
                  //layout="fixed"
                  width={300}
                  height={150}
                />
                <h3 className="mt-6 mb-4 text-normal-hover text-2xl font-medium hover:text-primary max-w-sm">
                  {event.properties['名前'].title[0].text.content}
                </h3>
                <div className="text-normal-default text-sm">{event.properties['イベント日'].date.start}</div>
              </a>
            </li>
          )
        })}
      </ul>
    </>
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
