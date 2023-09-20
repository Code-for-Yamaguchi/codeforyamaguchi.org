//import { ChevronRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'

type Props = {
  link: string
  text: string
}

export const DetailButton = ({ link, text }: Props) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer flex justify-center text-normal text-primary border border-green-500 rounded-full py-4 px-10 mx-12 md:mx-40 mb-20 hover:bg-primary hover:text-white">
        {text}
        {/*<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />*/}
      </div>
    </Link>
  )
}
