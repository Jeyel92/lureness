import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function CardButton({ bgImageUrl, texto }) {
  return (
    <div
      className="p-10  bg-cover flex flex-row justify-between items-center gap-6"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64)), url(${bgImageUrl})`,
      }}
    >
      <p className="w-56  text-slate-50 text-2xl font-normal">{texto}</p>
      <ChevronRightIcon className="h-6 w-6 text-zinc-300" aria-hidden="true" />
    </div>
  )
}
