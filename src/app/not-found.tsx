import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        お探しのページは見つかりませんでした。
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        URLが間違っているか、ページが存在しません。
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-semibold leading-7 text-indigo-600"
        >
          <span aria-hidden="true">&larr;</span> TOPページへ戻る
        </Link>
      </div>
    </main>
  )
}
