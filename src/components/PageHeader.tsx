import Image from 'next/image'
import Link from 'next/link'

type Props = {
    device: string
}

export const PageHeader = ({ device }: Props) => {
    return (
        <div className="relative bg-white">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href="/">
                        <Image className="h-8 w-auto sm:h-10" src="/logo.svg" alt="Code for Yamaguchi" width={280} height={50} />
                    </Link>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <nav className="hidden md:flex space-x-10">
                    <Link href="/">
                        HOME
                    </Link>
                    <Link href="/news">
                        NEWS
                    </Link>
                    <Link href="/event">
                        EVENT
                    </Link>
                    <Link href="/blog">
                        BLOG
                    </Link>
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        参加する
                    </a>
                </div>
            </div>


        </div>
    )
}