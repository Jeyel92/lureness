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

        <div className="container">
          <div className="py-5 pl-5 w-80 text-black text-base font-normal">
            Torne a sua marca mais relevante. Branding é Plataforma de Lucro
            para vender mais e melhor.
          </div>
        </div>

        <CardsButton />
        <BoxClientes />
        <Cta
          bgColor="bg-zinc-900"
          customClass="gap-2"
          textoLink="Saiba o motivo"
        >
          <p className="w-2/5 text-white text-2xl font-medium">
            Sua marca não vende?
          </p>
        </Cta>
      </Layout>
    </>
  )
}
