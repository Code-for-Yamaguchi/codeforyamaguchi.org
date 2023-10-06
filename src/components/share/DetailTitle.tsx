type Props = {
  title: string
  subtitle: string
}

export const DetailTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="bg-white">
      <div className="w-3/5 md:w-1/4 mx-auto py-4 mb-14 px-1 sm:py-6 sm:px-6 lg:px-8 stripe-line">
        <div className="text-center flex justify-center flex-col">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            {subtitle}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
