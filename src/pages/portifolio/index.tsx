import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
import useWindowDimensions from '~/hooks/useWindowDimensions'

const descrTeste = 'Arquitetura do prédio XYZ na Avenida Atlantica'
const imgRet34 = '/carousel/rectangle_34.png'
const imgRet33 = '/carousel/rectangle_33.png'
const items = [
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: imgRet34,
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es .',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: imgRet33,
    descricao: 'teste',
  },
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: imgRet34,
    descricao: 'teste1',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: imgRet33,
    descricao: 'teste2',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: imgRet33,
    descricao: 'teste',
  },
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: imgRet34,
    descricao: 'teste1',
  },
  {
    label: 'Arquitetura',
    titulo: descrTeste,
    imagem: imgRet33,
    descricao: 'teste2',
  },
  {
    label: 'Marketing',
    titulo: descrTeste,
    imagem: imgRet34,
    descricao: 'teste1',
  },
]

export default function PortifolioPage() {
  const { width: screenWidth } = useWindowDimensions()
  let tipoTela = 'mobile'
  let contador = 0
  // if (screenWidth >= 1280) {
  //   visibleSlides = 4
  // } else if (screenWidth >= 1024) {
  //   visibleSlides = 3
  // } else
  if (screenWidth >= 768) {
    tipoTela = 'desktop'
  }

  const colspan3 = 'col-span-3'
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-portifolio.webp"
        size="h-36 md:h-96"
        textAlign="text-left"
        gradientFrom="90deg, rgba(22, 29, 33, 0.80) 1.02%"
        gradientTo="rgba(255, 92, 6, 0.80) 99.74% "
      >
        <h1 className="text-white text-2xl font-semibold md:text-4xl  md:font-light ">
          portifolio
        </h1>
      </Hero>
      <div className="flex flex-col mt-20 md:grid md:grid-cols-6 md:gap-6 md:p-12">
        {items.map((item, index) => {
          let height = 'h-80'
          let rowspan = ''
          let colspan = ''

          if (index % 7 == 0) {
            contador = 0
          } else {
            contador++
          }

          if (tipoTela != 'mobile') {
            switch (contador) {
              case 0:
                height = 'h-96'
                colspan = colspan3
                break
              case 1:
                height = 'h-[40.5rem]'
                rowspan = 'row-span-2'
                colspan = colspan3
                break
              case 2:
                height = 'h-60'
                colspan = colspan3
                break
              case 3:
                height = 'h-60'
                colspan = 'col-span-6'
                break
              default:
                height = 'h-96'
                colspan = 'col-span-2'
                break
            }
          }

          return (
            <div
              key={index}
              className={`justify-start items-start  ${height} ${rowspan} ${colspan} mx-5 my-6 md:m-0 rounded-lg bg-cover group`}
              style={{
                backgroundImage: `linear-gradient(358deg, rgb(6, 29, 48, 0.90) 11.29%,rgba(0, 0, 0, 0.00) 95.24%), url(${item.imagem})`,
              }}
            >
              <div className={`flex flex-col gap-4 p-5 justify-end ${height}`}>
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
          )
        })}
      </div>
    </Layout>
  )
}
