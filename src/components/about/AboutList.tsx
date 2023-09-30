import Image from 'next/image'
import { AboutLinks } from '@/data/about'

export const AboutList = () => {
  return (
    <ul className="flex mx-10 justify-center flex-col　md:flex-row flex-wrap">
      {AboutLinks.map((about) => (
        <li
          key={about.act}
          className="flex flex-col justify-start items-center bg-white mb-10 mx-6 md:w-1/5"
        >
          <Image
            className="flex justify-center"
            src={about.icon}
            alt={about.act}
            //layout="fixed"
            width={150}
            height={150}
          />

          <h3 className="mt-6 mb-4 text-gray-900 text-2xl font-medium">{about.act}</h3>
          <div className="text-gray-500 text-sm">{about.desc}</div>
        </li>
      ))}
    </ul>
  )
}
