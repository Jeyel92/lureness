import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'

import imgLogo from '../../public/logo.svg'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header>
        {/* mx-auto  items-center  p-6 lg:px-8 
        w-96 h-16  justify-start items-start gap-52 inline-flex
        */}
        <nav
          className="flex max-w-7xl pl-4 pr-5 py-5 justify-between bg-slate-50 shadow"
          aria-label="Global"
        >
          <div className="w-24 h-6 justify-center items-center inline-flex">
            <Link href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">Lureness</span>

              <Image className="h-8 w-auto" src={imgLogo} alt="Logo Lureness" />
            </Link>
          </div>

          <div className="w-10 h-7 justify-center items-center inline-flex lg:hidden">
            <button
              type="button"
              // className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              className="flex-col gap-3 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              <svg
                className="h-3 w-10"
                // width="21"
                // height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.9091 8C1.56137 8 1.26989 7.87222 1.03466 7.61667C0.799437 7.36111 0.681824 7.04444 0.681824 6.66667C0.681824 6.28889 0.799437 5.97222 1.03466 5.71667C1.26989 5.46111 1.56137 5.33333 1.9091 5.33333H19.0909C19.4386 5.33333 19.7301 5.46111 19.9653 5.71667C20.2006 5.97222 20.3182 6.28889 20.3182 6.66667C20.3182 7.04444 20.2006 7.36111 19.9653 7.61667C19.7301 7.87222 19.4386 8 19.0909 8H1.9091ZM1.9091 2.66667C1.56137 2.66667 1.26989 2.53889 1.03466 2.28333C0.799437 2.02778 0.681824 1.71111 0.681824 1.33333C0.681824 0.955556 0.799437 0.638889 1.03466 0.383333C1.26989 0.127778 1.56137 0 1.9091 0H19.0909C19.4386 0 19.7301 0.127778 19.9653 0.383333C20.2006 0.638889 20.3182 0.955556 20.3182 1.33333C20.3182 1.71111 20.2006 2.02778 19.9653 2.28333C19.7301 2.53889 19.4386 2.66667 19.0909 2.66667H1.9091Z"
                  fill="#1C1B1F"
                />
              </svg>

              <div className="text-center text-black text-xs font-bold">
                sobre
              </div>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#feat"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sobre
            </a>
            <a
              href="#mark"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contato
            </a>
            <a
              href="#compa"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5">
                <span className="sr-only">Lureness</span>
                {/* <Image
                  className="h-8 w-auto"
                  src={imgLogo}
                  alt="Picture of the author"
                  // width={96}
                  // height={24}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                /> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#market"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#company"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
