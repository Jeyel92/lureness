import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'

import imgLogo from '../../public/logo.svg'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const paginaAtual =
    router.pathname == '/' ? 'menu' : router.pathname.split('/')[1]

  const cssLinkAtivoMobile = 'text-orange-400 font-semibold'
  const cssLinkMobile = 'font-normal'
  return (
    <>
      <header>
        <nav
          className="flex px-5 py-2 justify-between items-center bg-slate-50 shadow w-full fixed"
          aria-label="Global"
        >
          <div className="w-24 h-6 justify-center items-center inline-flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lureness</span>

              <Image className="h-8 w-auto" src={imgLogo} alt="Logo Lureness" />
            </Link>
          </div>

          <div className="w-10 h-6 justify-center items-center inline-flex lg:hidden">
            <button
              type="button"
              className="flex flex-col items-center gap-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="h-2 inline-flex"
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

              <span className="w-10  text-black text-xs font-bold">
                {paginaAtual}
              </span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-black">
            <Link
              href="/sobre"
              className={`block py-3  text-sm font-semibold leading-6 `}
            >
              Sobre a lureness
            </Link>
            <Link
              href="/servicos"
              className="block py-3  text-sm font-semibold leading-6"
            >
              Nossos serviços
            </Link>
            {/* <Link
              href="/sobre"
              className="block py-3  text-sm font-semibold leading-6"
            >
              Portifólio
            </Link>
            <Link
              href="/sobre"
              className="block py-3  text-sm font-semibold leading-6"
            >
              Blog
            </Link>
            <Link
              href="/sobre"
              className="block py-3  text-sm font-semibold leading-6"
            >
              Lureness na mídia
            </Link> */}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 bg-opacity-90 p-5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-slate-50 text-3xl font-bold">menu</h2>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root text-slate-50">
              <div className="py-6 text-base ">
                <Link
                  href="/"
                  className={`block py-3  ${
                    router.pathname == '/' ? cssLinkAtivoMobile : cssLinkMobile
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/sobre"
                  className={`block py-3  ${
                    router.pathname == '/sobre'
                      ? cssLinkAtivoMobile
                      : cssLinkMobile
                  }`}
                >
                  Sobre a lureness
                </Link>
                <Link
                  href="/servicos"
                  className={`block py-3  ${
                    router.pathname == '/servicos'
                      ? cssLinkAtivoMobile
                      : cssLinkMobile
                  }`}
                >
                  Nossos serviços
                </Link>
                {/* <Link href="/sobre" className="block py-3 font-normal">
                  Portifólio
                </Link>
                <Link href="/sobre" className="block py-3 font-normal">
                  Blog
                </Link>
                <Link href="/sobre" className="block py-3 font-normal">
                  Lureness na mídia
                </Link> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
