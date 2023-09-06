import Accordion from '~/components/Accordion'
import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
import Projetos from '~/components/Projetos'
import Team from '~/components/Team'

export default function SobrePage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-backgroud-sobre.png"
        size="h-36 md:h-96"
        textAlign="text-left"
        gradientFrom="rgba(36, 49, 55, 1)"
        gradientTo="rgba(6, 81, 87, 0.64) "
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold md:font-light w-72 md:w-full pl-5 md:px-56">
          posicionando a sua marca&nbsp;
          <span className=" font-normal ">de forma única no mercado.</span>
        </h1>
      </Hero>
      <section>
        <div className="px-5 md:px-10 py-10">
          {/* <div className="flex flex-col text-left w-full"> */}
          <p className="text-left text-zinc-900 text-base md:text-3xl font-normal md:w-[40rem] ">
            Branding é plataforma de lucro,
            <span className="md:text-4xl md:font-bold">
              {' '}
              marcas fortes vendem mais e melhor.
            </span>
          </p>
        </div>
        {/* </div> */}
      </section>

      <Accordion />
      <Projetos />
      <Cta bgColor="bg-zinc-900" customClass="gap-2">
        <p className="w-[85%] md:w-3/5 lg:w-full text-white text-2xl font-medium md:text-2xl md:font-semibold">
          Nós temos a solução ideal para a sua empresa!
        </p>
        <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-xl md:font-bold mt-2">
          Fale com a Lureness
        </div>
      </Cta>
      <section id="missao">
        <div className="py-5 pl-5  md:px-10 text-zinc-900 md:text-zinc-900  ">
          <h2 className="w-80  text-base md:text-2xl font-normal mb-5 grid">
            nossa&nbsp;
            <span className="text-3xl md:text-4xl font-bold font-serif">
              missão & dna
            </span>
          </h2>
          <p className="w-[22rem] md:w-3/4 lg:w-full text-sm md:text-2xl font-normal ">
            Tornar a Marca plataforma de geração de demanda e lucro, através de
            diferenciação competitiva via estratégias de branding. E para isso
            atuamos de ponta a ponta, orientados para solução, de forma
            pragmática, como executores que sonham e consumistas do aprendizado.
          </p>
        </div>
      </section>
      <Team />
    </Layout>
  )
}
