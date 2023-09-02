import Image from 'next/image'

import BoxClientes from '~/components/BoxClientes'
import CardsButton from '~/components/CardsButton'
import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

import imgLogo from '../../public/logo-branco.svg'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero
          bgImageUrl="/hero-backgroud-home.png"
          size="h-80 md:h-screen"
          textAlign="text-center"
        >
          <Image
            className="w-44 h-11 md:w-96 md:h-28 inline-flex"
            src={imgLogo}
            alt="logo"
          />
          <h1 className=" mt-6 text-center text-gray-200 text-base md:text-3xl">
            Sua marca mais&nbsp;
            <span className="font-semibold">forte, rentável e lucrativa.</span>
          </h1>
        </Hero>

        <section>
          <div className="py-5 pl-10  text-black md:text-zinc-900  ">
            <h2 className="w-80 text-base md:text-3xl font-normal md:mb-5">
              Torne a sua marca{' '}
              <span className="md:text-4xl md:font-bold">mais relevante!</span>
            </h2>
            <h3 className="w-80 md:w-3/4 lg:w-2/3 xl:w-1/2  text-base md:text-4xl font-normal md:font-serif">
              Branding é Plataforma de Lucro para vender mais e melhor.
            </h3>
          </div>
        </section>

        <CardsButton />
        <BoxClientes />
        <Cta bgColor="bg-zinc-900" customClass="gap-2">
          <p className="w-2/5 md:w-3/5 text-white text-2xl font-medium md:text-5xl md:font-semibold">
            Sua marca não vende?
          </p>
          <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-3xl md:font-bold">
            Saiba o motivo
          </div>
        </Cta>
      </Layout>
    </>
  )
}
