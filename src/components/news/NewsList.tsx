import { NewsLinks } from '@/data/news'

type Props = {
  numlimit?: number
}

export const NewsList = ({ numlimit = NewsLinks.length }: Props) => {
  return (
    <ul className="flex justify-center flex-col divide-y divide-gray-200 px-10 md:px-40 py-6">
      {NewsLinks.slice(0, numlimit).map((newsLink) => (
        <li key={newsLink.title} className="flex justify-start text-sm sm:text-xl">
          <a href={newsLink.url}>
            <div className="flex flex-row py-2">
              <div className="text-normal opacity-80 pr-4 text-gray-500">{newsLink.date}</div>
              {newsLink.tag && (
                <div className="text-gray-600 items-center px-2.5 py-0.5 rounded-md text-sm font-normal border border-green-600">
                  {newsLink.tag}
                </div>
              )}
            </div>
            <div className="font-medium pb-2 text-gray-900 hover:text-primary">
              {newsLink.title}
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
