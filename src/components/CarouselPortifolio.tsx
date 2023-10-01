import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel'

import useWindowDimensions from '../hooks/useWindowDimensions'
import TituloSessoes from './TituloSessoes'

const items = [
  {
    label: '',
    titulo: 'Haix Rental',
    imagem: '/portifolio/haix/07.png',
    descricao:
      'Buscando os próximos passos estratégicos do negócio, a Altura Andaimes encontrou a Lureness para auxiliar neste processo de transição da sucessão do seu fundador para suas filhas, as novas líderes do business.',
  },
  {
    label: '',
    titulo: 'Neocount',
    imagem: '/portifolio/neocount/04.png',
    descricao:
      'Consolidada no segmento contábil brasileiro, a Neocount passava por um momento de mudança, o que refletiu, inclusive na mudança de nome.',
  },
  {
    label: '',
    titulo: 'Pine PR',
    imagem: '/portifolio/pine/03.png',
    descricao:
      'Perdendo clientes pela falta de posicionamento, a Pineapple Hub teve na Lureness uma consultoria estratégica de rebranding e produtização de sua esteira de serviços.',
  },
]
export default function CarouselPortifolio() {
  let visibleSlides = 1
  const { width: screenWidth } = useWindowDimensions()
  if (screenWidth >= 1280) {
    visibleSlides = 4
  } else if (screenWidth >= 1024) {
    visibleSlides = 3
  } else if (screenWidth >= 768) {
    visibleSlides = 2
  }
  let controls

  if (visibleSlides < items.length) {
    controls = (
      <div className="flex flex-row justify-between items-stretch">
        <div className="flex gap-1.5 items-center mt-6">
          <ButtonBack>
            <ArrowLeftIcon className="w-6 h-6 " />
          </ButtonBack>
          <DotGroup
            // showAsSelectedForCurrentSlideOnly={true}
            className="flex gap-1.5 children:w-2 disabled:children:w-6 children:h-2 children:bg-teal-800 disabled:children:bg-teal-800 children:bg-opacity-60 children:rounded-lg"
          />
          <ButtonNext>
            <ArrowRightIcon className="w-6 h-6 " />
          </ButtonNext>
        </div>
        <Link
          className="text-orange-600 text-sm font-normal underline inline-flex self-end"
          href="/portifolio"
        >
          Veja todos projetos
        </Link>
      </div>
    )
  }

  return (
    <section className="w-full p-5 md:p-16">
      <TituloSessoes
        textoLinha1={'conheça os projetos'}
        textoLinha2={'lureness'}
      />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={items.length}
        visibleSlides={visibleSlides}
      >
        <Slider className="h-80">
          {items.map((item, index) => {
            let toggleLabel = ''
            if (item.label != '') {
              toggleLabel = 'hidden'
            }
            return (
              <Slide index={index} key={index}>
                <div
                  className="justify-start items-start  h-80  md:mx-3 rounded-lg bg-cover group"
                  style={{
                    backgroundImage: `linear-gradient( rgb(15,23,42,0.64),rgba(0,0,0,0.64)), url(${item.imagem})`,
                  }}
                >
                  <div className="flex flex-col gap-4 p-5 justify-end h-80">
                    <div
                      className={`px-2 py-1 border border-gray-200 rounded-lg w-fit text-gray-200 text-sm font-normal ${toggleLabel}`}
                    >
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
              </Slide>
            )
          })}
        </Slider>
        <style jsx global>{`
          .sliderTray___-vHFQ {
            margin: 0 auto;
          }
        `}</style>
        {controls}
      </CarouselProvider>
    </section>
  )
}
