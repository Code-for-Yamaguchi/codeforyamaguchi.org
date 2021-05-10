import { NewsLinks } from '../data/news'

export const LinkList = () => {
  return (
    <ul className="flex justify-center flex-col divide-y divide-gray-200 px-10 md:px-40 py-6">
      {NewsLinks.map((newsLink) => (
        <li key={newsLink.title} className="flex justify-start text-sm sm:text-xl">
          <a href={newsLink.url}>
            <div className="flex flex-row py-2">
              <div className="text-normal opacity-80 pr-4">
                {newsLink.date}
              </div>
              {newsLink.tag &&
                <div
                  className="text-black items-center px-2.5 py-0.5 rounded-md text-sm font-medium border-2 border-green-600">
                  {newsLink.tag}
                </div>
              }
            </div>
            <div className="text-normal pb-2 hover:text-primary">{newsLink.title}</div>
          </a>
        </li>
      ))}
    </ul>
  )
}
