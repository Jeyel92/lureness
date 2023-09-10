import Image from 'next/image'
import Link from 'next/link'

import BoxClientes from '~/components/BoxClientes'
import CardsButton from '~/components/CardsButton'
import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

// import Projetos from '~/components/Projetos'
import imgLogo from '../../public/logo-branco.svg'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero
          bgImageUrl="/hero-backgroud-home1.png"
          size="h-80 md:h-screen"
          textAlign="text-center"
          gradientTo="rgba(6, 81, 87, 0.64)"
          gradientFrom="rgba(6, 81, 87, 0.64)"
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
          <div className="py-5 md:pt-12 pl-10  text-black md:text-zinc-900  ">
            <h2 className="w-80 md:w-3/4 lg:w-2/3 xl:w-1/2 text-base md:text-2xl font-normal md:mb-5">
              Torne a sua marca{' '}
              <span className="md:text-3xl md:font-semibold">
                mais relevante!
              </span>
              <br />
              <span className=" md:text-3xl font-normal md:font-serif">
                Branding é Plataforma de Lucro para vender mais e melhor.
              </span>
            </h2>
          </div>
        </section>

        <CardsButton />
        <BoxClientes />
        <Cta bgColor="bg-zinc-900" customClass="gap-2">
          <p className="w-2/5 md:w-3/5 text-white text-2xl font-medium md:text-2xl md:font-semibold">
            Sua marca não vende?
          </p>
          <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-xl md:font-bold">
            <Link href="/contato"> Saiba o motivo</Link>
          </div>
        </Cta>
        <section id="missao">
          <div className="py-5 pl-5  md:px-10  ">
            <h2 className="w-80 md:w-full text-orange-600 text-2xl  md:text-2xl font-semibold mb-5 ">
              Marcas fortes, negócios rentáveis.
            </h2>
            <p className="w-[22rem] md:w-3/4 lg:w-full text-sm md:text-xl font-normal text-zinc-900  ">
              Por isso, criamos estratégias para sua marca ganhar relevância na
              cabeça de quem importa: consumidores, talentos e investidores,
              evidenciando sua proposta de valor, engajando seu time e
              fortalecendo o papel central do seu cliente na execução do dia a
              dia.
            </p>
          </div>
        </section>
        {/* <Projetos /> */}
      </Layout>
    </>
  )
}
