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
          <div className="flex flex-col text-left w-full">
            <p className=" text-zinc-900 text-base font-normal leading-tight">
              Branding é Plataforma de Lucro - Marcas Fortes Vendem Mais e
              Melhor.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
