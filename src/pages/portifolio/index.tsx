import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

const descrTeste = 'Arquitetura do prédio XYZ na Avenida Atlantica'
const items = [
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: '/carousel/rectangle_34.png',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es .',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: '/carousel/rectangle_33.png',
    descricao: 'teste',
  },
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: '/carousel/rectangle_34.png',
    descricao: 'teste1',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: '/carousel/rectangle_33.png',
    descricao: 'teste2',
  },
]

export default function PortifolioPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-background-portifolio.png"
        size="h-36 md:h-96"
        textAlign="text-left"
        gradientFrom="90deg, rgba(22, 29, 33, 0.80) 1.02%"
        gradientTo="rgba(255, 92, 6, 0.80) 99.74% "
      >
        <h1 className="text-white text-2xl font-semibold md:text-4xl  md:font-light ">
          portifolio
        </h1>
      </Hero>
      <div className="flex flex-col mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="justify-start items-start  h-80  mx-5 my-6 rounded-lg bg-cover group"
            style={{
              backgroundImage: `linear-gradient(358deg, rgb(6, 29, 48, 0.90) 11.29%,rgba(0, 0, 0, 0.00) 95.24%), url(${item.imagem})`,
            }}
          >
            <div className="flex flex-col gap-4 p-5 justify-end h-80">
              <div className="px-2 py-1 border border-gray-200 rounded-lg w-fit text-gray-200 text-sm font-normal">
                {item.label}
              </div>

              <div className="w-full text-slate-50 text-base font-semibold ">
                {item.titulo}
              </div>
              <div className="hidden group-hover:block w-full text-zinc-100 text-sm font-normal  leading-tight">
                {item.descricao}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
