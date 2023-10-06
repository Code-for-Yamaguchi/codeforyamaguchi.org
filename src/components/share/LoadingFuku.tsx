/* eslint-disable @next/next/no-img-element */
export const LoadingFuku = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen" aria-label="読み込み中">
      <img src="/logoV.svg" alt="Code for Yamaguchi" className="w-1/2 sm:w-60" />
      <div className="flex space-x-8 sm:space-x-10 mt-6 sm:mt-8">
        <div className="animate-ping h-2 w-2 sm:h-3 sm:w-3 bg-[#3CB840] rounded-full"></div>
        <div className="animate-ping h-2 w-2 sm:h-3 sm:w-3 bg-[#3CB840] rounded-full"></div>
        <div className="animate-ping h-2 w-2 sm:h-3 sm:w-3 bg-[#3CB840] rounded-full"></div>
      </div>
    </div>
  )
}