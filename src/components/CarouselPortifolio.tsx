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

const descrTeste = 'Arquitetura do prédio XYZ na Avenida Atlantica'
const items = [
  {
    label: 'Marketing',
    descricao: descrTeste,
    imagem: '/carousel/rectangle_34.png',
  },
  {
    label: 'Arquitetura',
    descricao: descrTeste,
    imagem: '/carousel/rectangle_33.png',
  },
  {
    label: 'Marketing',
    descricao: descrTeste,
    imagem: '/carousel/rectangle_34.png',
  },
  {
    label: 'Arquitetura',
    descricao: descrTeste,
    imagem: '/carousel/rectangle_33.png',
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
          href="/contato"
        >
          Veja todos projetos
        </Link>
      </div>
    )
  }

  return (
    <section className="w-full p-5">
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
          {items.map((item, index) => (
            <Slide index={index} key={index}>
              <div
                className="justify-start items-start  h-80  md:mx-3 rounded-lg bg-cover"
                style={{
                  backgroundImage: `linear-gradient( rgb(15,23,42,0.64),rgba(0,0,0,0.64)), url(${item.imagem})`,
                }}
              >
                <div className="flex flex-col gap-4 p-5 justify-end h-80">
                  <div className="px-2 py-1 border border-gray-200 rounded-lg w-fit text-gray-200 text-sm font-normal">
                    {item.label}
                  </div>

                  <div className="w-full text-slate-50 text-base font-semibold ">
                    {item.descricao}
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        {controls}
      </CarouselProvider>
    </section>
  )
}
