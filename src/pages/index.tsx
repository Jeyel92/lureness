import Image from 'next/image'

import CardButton from '~/components/CardButton'
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
          size="h-80"
          textAlign="text-center"
        >
          <Image className="w-44 h-11 inline-flex" src={imgLogo} alt="logo" />
          <h1 className=" mt-6 text-center text-gray-200 text-base">
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
        <section>
          <div className="flex flex-col">
            <CardButton
              bgImageUrl="bg-somos.png"
              texto=" Somos movidos por resultados a partir de soluções práticas, criativas e
        estratégica"
            />
            <CardButton
              bgImageUrl="bg-modo.png"
              texto=" Modo Lureness Operanti"
            />
          </div>
        </section>
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
