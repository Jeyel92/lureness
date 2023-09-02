import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function CardsButton() {
  const items = [
    {
      bgImageUrl: 'bg-somos.png',
      texto: `Somos movidos por resultados a partir de soluções práticas, criativas e
        estratégica`,
    },
    {
      bgImageUrl: 'bg-modo.png',
      texto: `Modo Lureness Operanti`,
    },
  ]
  return (
    <section>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-10 h-48 bg-cover flex flex-row justify-between items-center gap-6"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(${item.bgImageUrl})`,
            }}
          >
            <p className="w-56  text-slate-50 text-2xl font-normal">
              {item.texto}
            </p>
            <ChevronRightIcon
              className="h-6 w-6 text-zinc-300"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
