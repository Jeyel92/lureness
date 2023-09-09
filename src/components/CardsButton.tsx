import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
export default function CardsButton() {
  return (
    <section>
      <div className="flex flex-row flex-wrap">
        <div
          className="md:w-1/2 px-10 md:px-5 h-48 bg-cover flex flex-1 flex-row justify-between items-center gap-6 cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(bg-somos.png)`,
          }}
        >
          <Link href="/sobre" className="contents">
            <p className="w-56 md:w-[22rem] text-slate-50 text-xl font-normal">
              Somos movidos por resultados a partir de soluções práticas,
              criativas e estratégica. Saiba mais
            </p>
            <ChevronRightIcon
              className="h-6 w-6 text-zinc-300"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div
          className="md:w-1/2 px-10 h-48 bg-cover flex flex-1 flex-row justify-between items-center gap-6 cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(bg-modo.png)`,
          }}
        >
          <Link href="/servicos" className="contents">
            <p className="w-56 md:w-[22rem] text-slate-50 text-2xl md:text-xl font-normal">
              Conheça o Modo Lureness Operanti de trabalhar. Saiba mais
            </p>
            <ChevronRightIcon
              className="h-6 w-6 text-zinc-300"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
