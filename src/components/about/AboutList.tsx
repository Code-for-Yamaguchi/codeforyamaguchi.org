/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { AboutLinks } from '@/data/about'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ExternalLink from '../share/externalLink'

export const AboutList = () => {
  //TODO: 終了したコロナサイトのデータを追加する
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ul className="mx-auto my-8 lg:my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {AboutLinks.map((about) => (
          <li
            key={about.act}
            className="flex flex-col items-start justify-start"
          >
            <div className="relative w-full">
              <img
                src={about.icon}
                alt={about.act}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
                  <span className="inset-0" />
                  {about.act}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {about.desc}
                </p>
                {about.btn && (
                  <Button asChild className="p-6 lg:p-2">
                    <ExternalLink href="https://discord.gg/3CjrJa69jP">
                      オンラインコミュニティ(Discord)
                      <br className="block lg:hidden" />
                      への参加はこちら
                      <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </ExternalLink>
                  </Button>
                )}
              </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
