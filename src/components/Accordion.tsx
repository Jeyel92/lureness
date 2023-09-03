import AccordionSection from './AccordionSection'
export default function Accordion() {
  return (
    // <div className="flex items-center justify-center min-h-screen">

    // </div>

    <>
      <div className="flex-col">
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
      </div>
    </>
  )
}
