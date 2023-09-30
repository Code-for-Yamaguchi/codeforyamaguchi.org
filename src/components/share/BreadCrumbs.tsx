//import { HomeIcon } from '@heroicons/react/solid'

type Props = {
  pathList: {
    name: string
    href: string
    current: boolean
  }
}

export const BreadCrumbs = ({ pathList }: any) => {
  return (
    <nav
      className="max-w-7xl mx-auto px-4 sm:px-6 flex relative mt-32 mb-8 md:justify-start md:space-x-10"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              {/*<HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />*/}
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pathList && pathList.map((p) => (
          <li key={p.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <a
                href={p.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={p.current ? 'page' : undefined}
              >
                {p.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
