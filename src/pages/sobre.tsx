import Accordion from '~/components/Accordion'
import Cta from '~/components/Cta'
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
      <Accordion />
      <Cta bgColor="bg-zinc-900" customClass="gap-2">
        <p className="w-[85%] md:w-3/5 text-white text-2xl font-medium md:text-5xl md:font-semibold">
          Nós temos a solução ideal para a sua empresa!
        </p>
        <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-3xl md:font-bold mt-2">
          Fale com a Lureness
        </div>
      </Cta>
      <section id="missao">
        <div className="py-5 pl-5  text-zinc-900 md:text-zinc-900  ">
          <h2 className="w-80  text-base md:text-2xl font-normal mb-5 grid">
            nossa&nbsp;
            <span className="text-3xl md:text-4xl font-bold font-serif">
              missão & dna
            </span>
          </h2>
          <p className="w-[22rem] md:w-3/4 lg:w-2/3 xl:w-1/2  text-sm md:text-4xl font-normal md:font-serif leading-tight">
            Tornar a Marca plataforma de geração de demanda e lucro, através de
            diferenciação competitiva via estratégias de branding. E para isso
            atuamos de ponta a ponta, orientados para solução, de forma
            pragmática, como executores que sonham e consumistas do aprendizado.
          </p>
        </div>
      </section>
    </Layout>
  )
}
