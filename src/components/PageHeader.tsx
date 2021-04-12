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