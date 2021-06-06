import Link from 'next/link'
import Image from 'next/image'

import { EventsLinks } from '../../data/events'

type Props = {
  all: boolean
}

function mkdata (all: Props) {
  if (all) {
    return EventsLinks
  } else {
    return EventsLinks.filter((event) => {
      return new Date(event.date.slice(0, 10)) >= new Date(Date.now())
    })
  }
}

export const EventsList = ({ all }: Props) => {
  return (
    <>
      {!all && !mkdata(all).length
        ? (
        <div className="flex justify-center my-10">現在開催予定のイベントはありません。</div>
          )
        : (
        <ul className="flex mt-10 justify-center flex-col　md:flex-row flex-wrap max-w-7xl mx-auto px-4 sm:px-6">
          {mkdata(all).map((event) => (
            <li
              key={event.title}
              className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-2/5"
            >
              <a href={event.url} className="px-10">
                <Image
                  className="flex justify-center"
                  src={event.image}
                  alt={event.title}
                  layout="fixed"
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
