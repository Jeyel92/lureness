import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CardsButton() {
  const cssCard = `w-full px-4 py-6 md:px-16 md:py-14 h-36 md:h-72  bg-cover flex flex-col justify-between cursor-pointer`
  const cssTexto = `text-slate-50 text-base md:text-2xl lg:text-3xl font-bold  md:font-semibold`
  const btnSaibaMais = `flex flex-row  md:w-44 items-center h-4 md:h-8`
  const btnSaibaMaisTexto = `text-slate-50 text-sm font-normal underline md:text-2xl md:font-semibold `
  const btnIcon = `h-4 w-4 md:w-8 md:h-8  text-zinc-300 `
  return (
    <section>
      <Link href="/sobre" className="contents">
        <div
          className={cssCard}
          style={{
            backgroundImage: `linear-gradient(rgba(255, 92, 6, 0.88), rgba(255, 92, 6, 0.88)), url(bg-somos1.png)`,
          }}
        >
          <p
            className={`w-[19rem] md:w-full xl:w-3/4  mb-4 md:mb-0 ${cssTexto}`}
          >
            Somos movidos por resultados a partir de soluções práticas,
            criativas e estratégica.
          </p>
          <div className={btnSaibaMais}>
            <p className={btnSaibaMaisTexto}>Saiba mais</p>
            <ChevronRightIcon className={btnIcon} aria-hidden="true" />
          </div>
        </div>
      </Link>
      <Link href="/servicos" className="contents">
        <div
          className={cssCard}
          style={{
            backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.8), rgba(6, 29, 48, 0.8)), url(bg-modo1.png)`,
          }}
        >
          <p className={`w-48 md:w-full ${cssTexto} `}>
            Modo Lureness Operanti
          </p>
          <div className={btnSaibaMais}>
            <p className={btnSaibaMaisTexto}>Saiba mais</p>
            <ChevronRightIcon className={btnIcon} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </section>
  )
}

// flex flex-row flex-wrap
