import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '~/components/Layout'

export default function PortfolioDetails() {
  const router = useRouter()
  const portifolioId = router.query.portifolioId

  const clientes = [
    {
      id: 'neocount',
      label: '',
      titulo: 'Neocount',
      texto: (
        <>
          <p>3 meses Rebranding Estratégia </p>
          <p>
            Consolidada no segmento contábil brasileiro, a Neocount passava por
            um momento de mudança, o que refletiu, inclusive na mudança de nome.{' '}
          </p>
          <p>
            A SW Contábil, original e tradicional, não fazia mais sentido e não
            traduzia valor e entregas aos clientes.{' '}
          </p>
          <p>
            Com a consultoria Lureness focada na Estratégia de Negócios,
            conclui-se que o Rebranding da marca era necessário.{' '}
          </p>
          <p>
            Após 3 meses, surge a Neocount, a contabilidade para quem faz
            acontecer, agora. Resultados e entrega final:
          </p>
          <ul className="list-disc pl-8">
            <li>Naming </li>
            <li>Estética de marca</li>
            <li>
              Core cultural do business (missão, visão, valores, propósito de
              marca)
            </li>
            <li>Enxoval completo de marca</li>
            <li>Novo site</li>
            <li>Novas Redes Sociais</li>
          </ul>
        </>
      ),
      imagens: [
        { src: '/portifolio/neocount/01.png', alt: '' },
        { src: '/portifolio/neocount/02.png', alt: '' },
        { src: '/portifolio/neocount/03.png', alt: '' },
        { src: '/portifolio/neocount/04.png', alt: '' },
        { src: '/portifolio/neocount/05.png', alt: '' },
        { src: '/portifolio/neocount/06.png', alt: '' },
        { src: '/portifolio/neocount/07.png', alt: '' },
      ],
    },
    {
      id: 'haix',
      label: '',
      titulo: 'Haix Rental',
      texto: (
        <>
          <p>4 meses Alinhamento Rebranding </p>
          <p>
            Buscando os próximos passos estratégicos do negócio, a Altura
            Andaimes encontrou a Lureness para auxiliar neste processo de
            transição da sucessão do seu fundador para suas filhas, as novas
            líderes do business.
          </p>
          <p>
            Era clara a vontade de reposicionar a marca, fundada em 1982, tanto
            pelo novo momento quanto pela entrada em novas categorias de
            locação.
          </p>
          <p>
            Ao longo de 4 meses de consultoria com foco em Rebranding e
            Alinhamento Estratégico, surge a Haix Rental e suas novas
            possibilidades de atender e se mostrar ao mercado.
          </p>
          <p>Resultados e entrega final:</p>
          <ul className="list-disc pl-8">
            <li>Naming </li>
            <li>Estética de marca</li>
            <li>
              Core cultural do business (missão, visão, valores, propósito de
              marca)
            </li>
            <li>Enxoval completo de marca</li>
            <li>Novo site</li>
            <li>Novas Redes Sociais</li>
          </ul>
        </>
      ),
      imagens: [
        { src: '/portifolio/haix/01.png', alt: '' },
        { src: '/portifolio/haix/02.png', alt: '' },
        { src: '/portifolio/haix/03.png', alt: '' },
        { src: '/portifolio/haix/04.png', alt: '' },
        { src: '/portifolio/haix/05.png', alt: '' },
        { src: '/portifolio/haix/06.png', alt: '' },
        { src: '/portifolio/haix/07.png', alt: '' },
      ],
    },
    {
      id: 'pine',
      label: '',
      titulo: 'Pine PR',
      texto: (
        <>
          <p>5 meses Serviços Rebranding</p>
          <p>
            Perdendo clientes pela falta de posicionamento, a Pineapple Hub teve
            na Lureness uma consultoria estratégica de rebranding e produtização
            de sua esteira de serviços.
          </p>
          <p>
            Ao compreender que a empresa atende clientes muito além de apenas
            àqueles que estão em estágios iniciais de seus negócios, o
            rebranding teve o papel crucial de reforçar que a, agora, Pine PR,
            pode acompanhar os clientes desde seu estágio inicial até às rodadas
            de séries de investimento mais avançadas, especialmente as startups.
          </p>
          <p>
            Nestes 5 meses de projeto, além do nome, também foi definida a
            esteira de produtos e serviços oferecidos pela marca.
          </p>
          <p>Resultados e entrega final:</p>
          <ul className="list-disc pl-8">
            <li>Naming </li>
            <li>Estética de marca</li>
            <li>
              Core cultural do business (missão, visão, valores, propósito de
              marca)
            </li>
            <li>Enxoval completo de marca</li>
            <li>Novo site</li>
            <li>Novas Redes Sociais</li>
          </ul>
        </>
      ),
      imagens: [
        { src: '/portifolio/pine/01.png', alt: '' },
        { src: '/portifolio/pine/02.png', alt: '' },
        { src: '/portifolio/pine/03.png', alt: '' },
        { src: '/portifolio/pine/04.png', alt: '' },
        { src: '/portifolio/pine/05.png', alt: '' },
        { src: '/portifolio/pine/Trello_Background.jpg', alt: '' },
        { src: '/portifolio/pine/prancheta5.png', alt: '' },
      ],
    },
  ]

  const portifolio = clientes.filter((c) => c.id == portifolioId)[0]

  if (portifolio) {
    const colspan3 = 'col-span-3'
    let toggleLabel = ''
    if (portifolio.label == '') {
      toggleLabel = 'hidden'
    }

    return (
      <Layout>
        <div
          className="w-full  bg-gray-800 bg-repeat-y p-6"
          style={{
            backgroundImage: ` url(/logo-verde.svg)`,
          }}
        >
          <div className="h-6 text-slate-50 text-sm font-normal">
            <Link href="/#" onClick={() => router.back()}>
              <ChevronLeftIcon className="text-orange-500 h-4 inline" />
              voltar
            </Link>
          </div>
          <div className="flex flex-col gap-4 py-7 ">
            <div
              className={`px-2 py-1 border border-gray-200 rounded-lg w-fit text-gray-200 text-sm font-normal ${toggleLabel}`}
            >
              {portifolio.label}
            </div>
            <h1 className="text-slate-50 text-2xl font-semibold">
              {portifolio.titulo}
            </h1>
            <div className="text-slate-50 text-sm font-normal space-y-4">
              {portifolio.texto}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-6 bg-gray-800 md:p-6">
          {portifolio.imagens.map((img, index) => {
            let height = 'md:h-80'
            let rowspan = ''
            let colspan = ''
            switch (index) {
              case 0:
              case 2:
                height = 'md:h-[27.5rem]'
                rowspan = 'row-span-2'
                colspan = colspan3
                break
              case 1:
                height = 'md:h-[34.5rem]'
                rowspan = 'row-span-3'
                colspan = colspan3
                break
              case 3:
                height = 'md:h-80 md:-mt-28'
                rowspan = 'row-span-1'
                colspan = colspan3
                break
              default:
                height = 'md:h-80'
                colspan = 'col-span-2'
                break
            }
            return (
              <div
                className={`h-72 ${height} ${colspan} ${rowspan}  md:m-0 relative`}
                key={index}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill={true}
                  //   width={376}
                  //   height={304}
                  //   style={{
                  //     width: '100%',
                  //     height: 'auto',
                  //   }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  } else {
    return <>Cliente Não encontrado</>
  }
}
