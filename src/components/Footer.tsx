import Image from 'next/image'

import imgElement from '../../public/element.svg'
import Cta from './Cta'

export default function Footer() {
  return (
    <>
      <Cta bgColor=" bg-slate-900" customClass="gap-4">
        <div className="w-52 md:w-1/2 text-amber-500 text-2xl md:text-3xl font-medium md:font-semibold">
          Torne sua marca &nbsp;
          <Image className="inline" src={imgElement} alt="Logo Lureness" />
          &nbsp;relevante
        </div>
        <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-2xl md:font-normal ">
          Fale com a Lureness
        </div>
      </Cta>

      <footer className="bg-gray-200 p-6 flex flex-row  justify-between items-start lg:items-center lg:gap-56  xl:gap-0 lg:text-left">
        <div className="flex flex-row flex-wrap gap-4 md:gap-12 lg:gap-40 xl:gap-56">
          <div className="w-36 xl:w-72">
            <span className="text-slate-900 text-base font-normal">lure</span>
            <span className="text-slate-900 text-base font-bold">
              ness&nbsp;
            </span>
            {/* <span style="text-slate-900 text-2xl font-bold"> </span> */}
            <span className="text-slate-900 text-base font-bold">23</span>
          </div>
          {/* <div className="justify-start xl:justify-center items-start md:items-center gap-4 md:gap-8 flex flex-col md:flex-row md:flex-wrap ">
            <div className="text-center text-slate-900 text-sm font-normal leading-tight">
              nosso blog
            </div>
            <div className="text-center text-slate-900 text-sm font-normal leading-tight">
              políticas e privacidade
            </div>
            <div className="text-center text-slate-900 text-sm font-normal leading-tight">
              cookies
            </div>
          </div> */}
        </div>
        <div className=" justify-end gap-4 flex">
          <div className="w-6 h-6 relative">
            <a
              href="#!"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_736_2925)">
                  <circle cx="12" cy="12" r="12" fill="#061D30" />
                  <path
                    d="M8.85 4.5H15.15C17.55 4.5 19.5 6.45 19.5 8.85V15.15C19.5 16.3037 19.0417 17.4101 18.2259 18.2259C17.4101 19.0417 16.3037 19.5 15.15 19.5H8.85C6.45 19.5 4.5 17.55 4.5 15.15V8.85C4.5 7.69631 4.9583 6.58987 5.77409 5.77409C6.58987 4.9583 7.69631 4.5 8.85 4.5ZM8.7 6C7.98392 6 7.29716 6.28446 6.79081 6.79081C6.28446 7.29716 6 7.98392 6 8.7V15.3C6 16.7925 7.2075 18 8.7 18H15.3C16.0161 18 16.7028 17.7155 17.2092 17.2092C17.7155 16.7028 18 16.0161 18 15.3V8.7C18 7.2075 16.7925 6 15.3 6H8.7ZM15.9375 7.125C16.1861 7.125 16.4246 7.22377 16.6004 7.39959C16.7762 7.5754 16.875 7.81386 16.875 8.0625C16.875 8.31114 16.7762 8.5496 16.6004 8.72541C16.4246 8.90123 16.1861 9 15.9375 9C15.6889 9 15.4504 8.90123 15.2746 8.72541C15.0988 8.5496 15 8.31114 15 8.0625C15 7.81386 15.0988 7.5754 15.2746 7.39959C15.4504 7.22377 15.6889 7.125 15.9375 7.125ZM12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25ZM12 9.75C11.4033 9.75 10.831 9.98705 10.409 10.409C9.98705 10.831 9.75 11.4033 9.75 12C9.75 12.5967 9.98705 13.169 10.409 13.591C10.831 14.0129 11.4033 14.25 12 14.25C12.5967 14.25 13.169 14.0129 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12C14.25 11.4033 14.0129 10.831 13.591 10.409C13.169 9.98705 12.5967 9.75 12 9.75Z"
                    fill="#F8FCFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_736_2925">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="w-6 h-6 relative">
            <a
              href="#!"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_736_2928)">
                  <circle cx="12" cy="12" r="12" fill="#061D30" />
                  <path d="M8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#F8FCFF" />
                  <path
                    d="M6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56Z"
                    fill="#F8FCFF"
                  />
                  <path
                    d="M18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5Z"
                    fill="#F8FCFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_736_2928">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
