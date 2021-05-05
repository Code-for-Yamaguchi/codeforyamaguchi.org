import Link from 'next/link'
import Image from 'next/image'

import { EventsLinks } from '../data/events'

const today = new Date(Date.now());

const rangeevent = EventsLinks.filter((event) => {
    return (new Date(event.date.slice(0, 10)) >= today)
})

console.log(rangeevent && !rangeevent.length)
console.log(rangeevent.length)

export const EventsList = () => {
    if (rangeevent && !rangeevent.length) {
        return (
            <div className="flex justify-center my-10">
                現在開催予定のイベントはありません。
            </div>
        )
    } else {
        return (
            <ul className="flex mt-10 justify-center flex-col　md:flex-row flex-wrap">
                {rangeevent.map((event) => (
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

                            <h3 className="mt-6 mb-4 text-normal-hover text-2xl font-medium">{event.title}</h3>
                            <div className="text-normal-default text-sm">{event.date}</div>
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}
