import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Image } from 'next/image'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="/gallery" className="block w-full" onClick={() => close()}>
                    
                      Gallery
                    
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="block w-full" onClick={() => close()}>
                    
                      Faculty
                    
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="block w-full" onClick={() => close()}>
                    
                      Contact Us
                    
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Header() {
  return (
    <header className="z-50 border border-b bg-blue-50 py-2 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-4 lg:max-w-4xl">
        <div className="mx-auto max-w-6xl">
          <nav className="relative z-50 text-sm">
            <ul className="flex items-center">
              <li>
                <Link href="/">

                  <Logo className="h-10 w-auto" />

                </Link>
              </li>
              <li className="ml-12 mt-4 hidden md:block">
                <Link
                  href="/"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">

                  <b>Home</b>

                </Link>
              </li>
              <li className="ml-6 mt-4 hidden md:block">
                <Link
                  href="/faculty"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  
                    Faculty
                  
                </Link>
              </li>
              <li className="ml-6 mt-4 hidden md:block">
                <Link
                  href="/gallery"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  
                    Gallery
                  
                </Link>
              </li>
              <li className="ml-6 mt-4 hidden md:block">
                <Link
                  href="/contactus"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  
                    Contact Us
                  
                </Link>
              </li>
              <li className="ml-auto md:ml-8 lg:hidden">
                <ButtonLink href="/" className="bg-[#273D61]">
                  <span>
                    <span className="hidden lg:inline"></span>
                    Home
                  </span>
                </ButtonLink>
              </li>
              <li className="-mr-1 ml-5 md:hidden">
                <MobileNavigation />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
