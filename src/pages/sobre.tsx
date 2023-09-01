import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

export default function SobrePage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-backgroud-sobre.png"
        size="h-36"
        textAlign="text-left"
      >
        <h1 className="text-white text-2xl font-bold w-72 pl-5">
          posicionando a sua marca&nbsp;
          <span className=" font-normal">de forma única no mercado.</span>
        </h1>
      </Hero>
      <section>
        <div className="container px-5 py-10  mx-auto">
          <div className="flex flex-col text-left w-full mb-5">
            <p className=" text-zinc-900 text-base font-normal leading-tight">
              Branding é Plataforma de Lucro - Marcas Fortes Vendem Mais e
              Melhor.
            </p>
          </div>
          <div className="flex flex-row justify-center text-zinc-900 text-center">
            <div className="p-4 ">
              <h2 className="font-bold text-3xl">+ 700</h2>
              <p className="text-lg font-normal">clientes</p>
            </div>
            <div className="p-4">
              <h2 className="font-bold   text-3xl ">+ 700</h2>
              <p className="text-lg font-normal">ROI</p>
            </div>
            <div className="p-4">
              <h2 className="font-bold text-3xl ">+ 700</h2>
              <p className="text-lg font-normal">faturamento</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
