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
        <Cta bgColor="bg-zinc-900" customClass="gap-2">
          <p className="w-2/5 md:w-3/5 text-white text-2xl font-medium md:text-2xl md:font-semibold">
            Sua marca não vende?
          </p>
          <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-xl md:font-bold">
            <Link href="/contato"> Saiba o motivo</Link>
          </div>
        </Cta>
        <section>
          {/* <Hero
            bgImageUrl=""
            size="h-80 md:h-screen"
            textAlign="text-center"
            gradientTo="rgba(6, 81, 87, 0.64)"
            gradientFrom="rgba(6, 81, 87, 0.64)"
          >
           
            teste
          </Hero> */}
          <div className={`w-full h-80 md:h-screen relative`}>
            <div className={`w-full h-80 md:h-screen left-0 top-0 absolute`}>
              <Image
                className={`w-full h-80 md:h-screen left-0 top-0 absolute`}
                src="/img-marcas-fortes-min.jpg"
                alt="Background destaque"
                layout="fill"
              />

              <div
                className={`w-full h-80 md:h-screen left-0 top-0 absolute bg-slate-900 bg-opacity-50`}
              />
            </div>
            <div className="absolute h-screen w-full justify-between overflow-hidden hidden md:flex">
              <svg
                // width="472"
                // height="670"
                className="xl:w-2/5 lg:w-1/2 md:w-full"
                // viewBox="0 125 472 670"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-142.491 0.429543L245.704 124.137C278.146 134.475 304.921 162.159 316.768 197.61L470.999 659.159C472.974 665.068 468.459 670.576 463.033 668.853L77.0707 545.999C44.7659 535.741 18.0409 508.209 6.12553 472.992L-150.478 10.1719C-152.432 4.21441 -147.917 -1.29422 -142.491 0.429543Z"
                  fill="#FF5C06"
                  fill-opacity="0.64"
                />
              </svg>
              <svg
                // width="268"
                // height="668"
                // viewBox="0 0 268 668"
                className="lg:w-1/5 xl:-right-4 lg:-right-8 xl:top-4 lg:top-12 relative hidden lg:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M254.756 3.69973L339.083 299.82C346.131 324.567 339.888 352.994 322.517 375.268L96.3558 665.252C93.4606 668.964 88.1055 668.423 86.9236 664.287L2.99155 369.929C-4.04953 345.302 2.118 316.969 19.3135 294.75L245.284 2.7422C248.218 -0.977656 253.574 -0.43681 254.756 3.69973Z"
                  fill="#FF5C06"
                  fill-opacity="0.64"
                />
              </svg>
            </div>
            <div
              className={` h-80 md:h-screen  relative px-10 py-10 md:py-48 z-10`}
            >
              <h3 className="w-60 md:w-96 text-slate-50 text-2xl md:text-5xl font-semibold md:mb-12">
                Marcas fortes,{' '}
                <span className="text-slate-50 text-xl md:text-4xl font-bold">
                  negócios rentáveis.
                </span>
              </h3>
              <p className="w-full md:w-4/5 text-slate-50 text-base md:text-3xl font-normal">
                Por isso, criamos estratégias para sua marca ganhar relevância
                na cabeça de quem importa: consumidores, talentos e
                investidores, evidenciando sua proposta de valor, engajando seu
                time e fortalecendo o papel central do seu cliente na execução
                do dia a dia.
              </p>
            </div>
          </div>
        </section>
        {/* <Projetos /> */}
        <CarouselPortifolio />
      </Layout>
    </>
  )
}
