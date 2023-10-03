import Accordion from '~/components/Accordion'
import AccordionSection from '~/components/AccordionSection'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
// import Projetos from '~/components/Projetos'
import Team from '~/components/Team'
export default function SobrePage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-sobre.webp"
        size="h-36 md:h-96"
        textAlign="text-left"
        gradientFrom="90deg, rgba(36, 49, 55, 1) 1.02%"
        gradientTo="rgba(6, 81, 87, 0.64) 99.74%"
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold md:font-light w-72 md:w-full pl-5 md:px-56">
          posicionando a sua marca&nbsp;
          <span className=" font-normal ">de forma única no mercado.</span>
        </h1>
      </Hero>
      <section>
        <div className="px-5 md:px-10 py-10">
          {/* <div className="flex flex-col text-left w-full"> */}
          <p className="text-left text-zinc-900 text-base md:text-2xl font-normal md:w-[40rem] ">
            Branding é plataforma de lucro,
            <span className="md:text-3xl md:font-bold">
              {' '}
              marcas fortes vendem mais e melhor.
            </span>
          </p>
        </div>
        {/* </div> */}
      </section>

      <Accordion>
        <AccordionSection title="Sobre a Lureness" bgColor="bg-gray-500">
          <h3 className="text-slate-50 text-base font-semibold mb-2">
            Sua marca, nosso cuidado.
          </h3>

          <p className=" text-slate-50 text-sm font-normal leading-tight">
            Marcas fortes geram mais rentabilidade. E negócios mais rentáveis
            amplificam o sonho empreendedor, impactam a economia e a deixando um
            legado para a sociedade. <br />
            <br />
            Nosso processo criativo prima pela estratégia que olha por ângulos
            diversos para entender as nuances que compõem as percepções sobre
            sua marca e como diferenciá-la da concorrência, gerando vantagem
            competitiva.
            <br />
            <br />
            Somos ambiciosos, movidos a desafios, aprendizes vorazes, em
            evolução e movimento contínuos.
            <br />
            Somos uma mistura de repertórios culturais, atentos às tendências,
            aos sons do mercado, apaixonados por diálogos e acolhedores natos.
            <br />
            <br />
            Somos o Big Bang da sua marca para o mundo: porque o seu sonho
            empreendedor merece ser amplificado para o mundo.
          </p>
        </AccordionSection>
        <AccordionSection title="Aproach" bgColor="bg-teal-800">
          <h3 className="text-slate-50 text-base font-semibold mb-2">
            Modo Lureness de fazer
          </h3>

          <p className=" text-slate-50 text-sm font-normal leading-tight">
            Diferenciamos as marcas de nossos clientes por meio de estratégias
            de branding, comunicação e cultura corporativa, tornando-as mais
            competitivas e atrativas.
            <br />
            As marcas dos nossos clientes têm personalidades distintas,
            solucionam dores e buscam gerar benefícios reais. O mercado só não
            as conhece - ainda.
            <br />
            Por isso, criamos estratégias para que estas marcas ganhem
            relevância na cabeça de quem importa: consumidores, talentos e
            investidores, evidenciando sua proposta de valor, criando jornadas
            de engajamento de times e fortalecendo o papel central do cliente na
            execução do dia a dia.
          </p>
        </AccordionSection>
      </Accordion>
      {/* <Projetos /> */}

      <section id="missao">
        <div className="py-5 pl-5  md:px-10 text-zinc-900 md:text-zinc-900  ">
          <h2 className="w-80  text-base md:text-2xl font-normal mb-5 grid">
            nossa&nbsp;
            <span className="text-3xl md:text-4xl font-bold font-serif">
              missão & dna
            </span>
          </h2>
          <p className="w-[22rem] md:w-3/4 lg:w-full text-sm md:text-xl font-normal ">
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
