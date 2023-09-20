import { Fragment } from 'react'
//import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

//import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const PageHeader = () => {
  /*return (
    <Popover className="fixed inset-x-0 top-0 bg-white z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <Image
                    className="cursor-pointer h-8 w-auto sm:h-10"
                    src="/logo.svg"
                    alt="Code for Yamaguchi"
                    width={280}
                    height={50}
                  />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link href="/">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    Home
                  </div>
                </Link>
                <a href="#news">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    News
                  </div>
                </a>
                <a href="#event">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    Event
                  </div>
                </a>
                <a href="#about">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    About
                  </div>
                </a>
                <a href="#join">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    Join
                  </div>
                </a>
                <a href="#works">
                  <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                    Works
                  </div>
                </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="https://forms.gle/yJXfyBCw2RTX15qm9"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-btn-normal hover:bg-btn-hover"
                >
                  参加する
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto sm:h-10"
                        src="/logo.svg"
                        alt="Code for Yamaguchi"
                        width={280}
                        height={50}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link href="/">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        Home
                      </div>
                    </Link>
                    <a href="#news">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        News
                      </div>
                    </a>
                    <a href="#event">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        Event
                      </div>
                    </a>
                    <a href="#about">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        About
                      </div>
                    </a>
                    <a href="#join">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        Join
                      </div>
                    </a>
                    <a href="#works">
                      <div className="cursor-pointer text-base font-medium text-normal-default hover:text-normal-hover">
                        Works
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://forms.gle/yJXfyBCw2RTX15qm9"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-btn-normal hover:bg-btn-hover"
                    >
                      参加する
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
      </Popover>
  )*/
  return (
    <div>page header</div>
  )
}
