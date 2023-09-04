import Image from 'next/image'
export default function TeamCard({ nome, cargo, imagem }) {
  return (
    <div className="py-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <Image
          className="flex-shrink-0 rounded-2xl w-full h-80 object-cover object-center mb-4 "
          src={imagem}
          alt="Logo team"
          width={343}
          height={272}
        />

        <div className="w-full">
          <h2 className="text-zinc-900 text-2xl font-bold font-serif">
            {nome}
          </h2>
          <h3 className="ext-zinc-900 text-base font-normal">{cargo}</h3>
        </div>
      </div>
    </div>
  )
}
