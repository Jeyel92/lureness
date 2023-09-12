import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CardsButton() {
  return (
    <section>
      <div className="flex flex-row flex-wrap md:gap-12 md:px-10">
        <Link href="/sobre" className="contents">
          <div
            className="md:w-1/3 px-10 md:p-5 h-48 md:h-96 md:rounded-2xl bg-cover flex flex-1 flex-row md:flex-col justify-between items-center gap-6 cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(bg-somos1.png)`,
            }}
          >
            <p className="w-56 md:w-full text-slate-50 text-xl font-normal md:text-2xl md:font-semibold">
              Somos movidos por resultados a partir de soluções práticas,
              criativas e estratégica.
            </p>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:w-full items-center ">
              <p className="text-white md:text-2xl md:font-semibold ">
                Saiba mais
              </p>
              <ChevronRightIcon
                className="h-6 w-6 text-zinc-300 justify-self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>
        <Link href="/servicos" className="contents">
          <div
            className="md:w-1/3 px-10 md:p-5 h-48 md:h-96 md:rounded-2xl bg-cover flex flex-1 flex-row md:flex-col justify-between items-center gap-6 cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(bg-modo1.png)`,
            }}
          >
            <p className="w-56 md:w-full text-slate-50 text-xl md:text-2xl font-normal md:font-semibold">
              Conheça o Modo Lureness Operanti de trabalhar.
            </p>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:w-full items-center ">
              <p className="text-white md:text-2xl md:font-semibold ">
                Saiba mais
              </p>
              <ChevronRightIcon
                className="h-6 w-6 text-zinc-300 justify-self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
