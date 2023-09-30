import Image from 'next/image'

import TituloSessoes from './TituloSessoes'
export default function BoxClientes() {
  const clientes = ['haix', 'contvalor', 'importa', 'neocount', 'pinepr']
  return (
    <div className="px-4 md:px-16 py-10">
      <TituloSessoes textoLinha1={'nossos'} textoLinha2={'clientes'} />
      <div className="flex flex-wrap gap-10 md:gap-11 md:px-24 justify-center">
        {clientes.map((c, index) => (
          <Image
            className="w-32 grayscale"
            key={index}
            src={`/logos/${c}.png`}
            alt={`Logo ${c}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  )
}
