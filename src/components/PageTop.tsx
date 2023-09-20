//import { ArrowRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'

export const PageTop = () => {
  return (
    <div className="relative z-0">
      <div className="h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-6 space-y-6">
        <div className="flex justify-center text-top font-bold text-base text-3xl sm:text-3xl md:text-5xl clearfix mb-5 z-50">
          山口県の挑戦者
          <br className="sm:hidden" />
          を応援する
        </div>
        <Link href="/">
          <div className="cursor-pointer flex justify-center text-normal hover:text-primary hover:bg-white border border-green-500 text-md sm:text-xl rounded-full py-4 px-8 sm:px-16 mx-12 md:mx-40 mb-20 bg-primary text-white">
            参加する
            {/*<ArrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />*/}
          </div>
        </Link>
      </div>
      <div className="absolute top-1/10 left-1/4 lg:top-1/20 lg:left-1/4 rounded-full h-20 w-20 sm:h-40 sm:w-40 bg-circle-yellow z-0"></div>
      <div className="absolute top-1/4 right-1/4 sm:top-1/5 sm:right-1/10  lg:top-1/5 lg:right-1/6 rounded-full h-10 w-10 sm:h-40 sm:w-40 bg-circle-green z-0"></div>
      <div className="absolute sm:top-1/2 lg:top-1/3 sm:right-1/20 rounded-full sm:h-10 sm:w-10 bg-circle-red z-0"></div>
      <div className="absolute bottom-1/20 right-1/20 lg:bottom-1/20 lg:right-1/10 rounded-full h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 bg-circle-red z-0"></div>
      <div className="absolute bottom-1/10 left-1/20 sm:bottom-1/8 sm:left-1/10 rounded-full h-10 w-10 sm:h-40 sm:w-40 lg:h-60 lg:w-60 bg-circle-blue z-0"></div>
      <div className="absolute sm:top-1/3 sm:left-1/20 lg:left-1/10 rounded-full sm:h-20 sm:w-20 bg-circle-indigo z-0"></div>
    </div>
  )
}
