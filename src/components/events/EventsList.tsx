/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { EventsLinks } from '@/data/events'
import { getDatabase } from '@/lib/notion'

type Props = {
  all: boolean
}

function mkdata (all, data) {
  if (all) {
    return EventsLinks
  } else {
    /*return EventsLinks.filter((event) => {
      return new Date(event.date.slice(0, 10)) >= new Date(Date.now())
    })*/
    return data
  }
}

const eventDatabaseId = process.env.NOTION_EVENT_DATABASE_ID ?? ""

export const EventsList = async ({ all }: Props) => {
  const events = await getDatabase(eventDatabaseId);

  return (
    <>
      <ul className="flex mt-10 justify-center flex-col md:flex-row flex-wrap max-w-7xl mx-auto px-4 sm:px-6">
        {events.map((event: any, index: number) => {
          //console.info("event date", event.properties['イベント日'])
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

  return (
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
  )
}
