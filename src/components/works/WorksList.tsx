import Image from 'next/image'
import { WorksLinks } from '../../data/works'

export const WorksList = () => {
  return (
    <ul className="flex my-10 justify-center flex-col　md:flex-row flex-wrap">
      {WorksLinks.map((work) => (
        <li
          key={work.work}
          className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-1/5"
        >
          <a href={work.url} className="px-10">
            <Image
              className="flex justify-center"
              src={work.image}
              alt={work.work}
              layout="fixed"
              width={300}
              height={150}
            />

            <h3 className="mt-6 mb-4 text-gray-900 text-2xl font-medium">{work.work}</h3>
            <div className="flex justify-center text-white px-2.5 py-0.5 mx-2 mb-2 rounded-md text-sm font-medium bg-primary w-20">
              {work.tag}
            </div>
            <div className="text-gray-500 text-sm">{work.desc}</div>
          </a>
        </li>
      ))}
    </ul>
  )
}
