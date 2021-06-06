import { ChevronRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'

type Props = {
  link: string
}

export const DetailButton = ({ link }: Props) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer flex justify-center text-normal text-primary border border-green-500 rounded-full py-4 px-10 mx-12 md:mx-40 mb-20 hover:bg-primary hover:text-white">
        もっと詳しく
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </Link>
  )
}
