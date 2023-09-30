import Image from 'next/image'
import Link from 'next/link'

// import BoxClientes from '~/components/BoxClientes'
import CardsButton from '~/components/CardsButton'
import CarouselPortifolio from '~/components/CarouselPortifolio'
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
          bgImageUrl="/hero-backgroud-home.jpg"
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
          <h1 className=" mt-5 text-center text-gray-200 text-base md:text-3xl md:font-bold">
            Sua marca mais&nbsp;
            <span className="font-semibold md:text-slate-50 md:font-bold">
              forte, rentável e lucrativa.
            </span>
          </h1>
        </Hero>
        <section>
          <div className="py-5 md:p-16 pl-4  text-black md:text-zinc-900  ">
            <h2 className="w-72 md:w-full text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-4 lg:mb-6">
              Torne a sua marca mais relevante!
            </h2>
            <p className="w-80 md:w-full text-base md:text-xl lg:text-3xl  font-normal">
              Branding é Plataforma de Lucro para vender mais e melhor.
            </p>
          </div>
        </section>
        <CardsButton />
        {/* <BoxClientes /> */}
        <Cta bgColor="bg-zinc-900" customClass="gap-2 px-4 md:p-16">
          <p className="w-2/5 md:w-full text-white text-2xl font-medium md:text-4xl md:font-bold">
            Sua marca não vende?
          </p>
          <div className="text-white text-normal font-medium underline  md:text-2xl md:font-normal">
            <Link href="/contato"> Saiba o motivo</Link>
          </div>
        </Cta>
        <section>
          <div className="  px-4 py-10 md:p-16">
            <h3 className="w-80 md:w-full text-orange-600 text-2xl md:text-4xl font-semibold md:font-bold mb-4">
              Marcas fortes, negócios rentáveis.
            </h3>

            <p className="w-80 md:w-full text-zinc-800 text-base md:text-2xl  font-normal">
              Por isso, criamos estratégias para sua marca ganhar relevância na
              cabeça de quem importa: consumidores, talentos e investidores,
              evidenciando sua proposta de valor, engajando seu time e
              fortalecendo o papel central do seu cliente na execução do dia a
              dia.
            </p>
          </div>
        </section>
        {/* <Projetos /> */}
        <CarouselPortifolio />
      </Layout>
    </>
  )
}
