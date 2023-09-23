// import { Carousel } from 'flowbite-react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel'

const items = [
  {
    label: 'Marketing',
    descricao: 'Arquitetura do prédio XYZ na Avenida Atlantica',
    imagem: '/carousel/Rectangle 34.png',
  },
  {
    label: 'Arquitetura',
    descricao: 'Arquitetura do prédio XYZ na Avenida Atlantica',
    imagem: '/carousel/Rectangle 33.png',
  },
]
export default function CarouselPortifolio() {
  return (
    <section className="w-full p-5">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={items.length}
        visibleSlides={1}
      >
        <Slider className="h-80">
          {items.map((item, index) => (
            <Slide index={index} key={index}>
              <div className="justify-start items-start gap-2 flex border border-red-100 h-80 relative">
                <Image
                  alt="carousel "
                  src={item.imagem}
                  fill
                  className="bg-gradient-to-t from-slate-900 to-black rounded-lg"
                />
                <div className="flex flex-col gap-4 absolute p-5 justify-end h-80">
                  {/* <div className="justify-start items-start inline-flex"> */}
                  <div className="px-2 py-1 border border-gray-200 rounded-lg w-fit text-gray-200 text-sm font-normal">
                    {item.label}
                  </div>
                  {/* </div> */}
                  <div className="w-full text-slate-50 text-base font-semibold ">
                    {item.descricao}
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex gap-1.5 items-center mt-6">
          <ButtonBack>
            <ArrowLeftIcon className="w-6 h-6 " />
          </ButtonBack>
          <DotGroup className="flex gap-1.5 children:w-2 disabled:children:w-6 children:h-2 children:bg-teal-800 disabled:children:bg-teal-800 children:bg-opacity-60 children:rounded-lg" />
          <ButtonNext>
            <ArrowRightIcon className="w-6 h-6 " />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  )
}
