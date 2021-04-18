import Image from 'next/image'
import Link from 'next/link'

export const PageTop = () => {
  return (
    <div className="relative z-0">
      <div className="h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-6 space-y-6">
        <div className="flex justify-center text-gray-500 text-base sm:text-3xl clearfix">
          山口県の挑戦者が集まるコミュニティ
        </div>
        <div className="flex justify-center text-center text-gray-400 text-sm sm:text-xl clearfix">
          テクノロジーを活用して地域課題を解決しよう。
          <br />
          挑戦者が少ない地方はチャンスがいっぱい。
          <br />
          地方を少しでも盛り上げよう。
        </div>
      </div>
      <div className="absolute top-1/10 left-1/4 lg:top-1/20 lg:left-1/4 rounded-full h-20 w-20 sm:h-40 sm:w-40 bg-yellow-400 z-0"></div>
      <div className="absolute top-1/4 right-1/4 sm:top-1/5 sm:right-1/10  lg:top-1/5 lg:right-1/6 rounded-full h-10 w-10 sm:h-40 sm:w-40 bg-green-200 z-0"></div>
      <div className="absolute sm:top-1/2 lg:top-1/3 sm:right-1/20 rounded-full sm:h-10 sm:w-10 bg-red-400 z-0"></div>
      <div className="absolute bottom-1/20 right-1/20 lg:bottom-1/20 lg:right-1/10 rounded-full h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 bg-red-500 z-0"></div>
      <div className="absolute bottom-1/10 left-1/20 sm:bottom-1/8 sm:left-1/10 rounded-full h-10 w-10 sm:h-40 sm:w-40 lg:h-60 lg:w-60 bg-blue-300 z-0"></div>
      <div className="absolute sm:top-1/3 sm:left-1/20 lg:left-1/10 rounded-full sm:h-20 sm:w-20 bg-indigo-500 z-0"></div>
    </div>
  )
}
