import Accordion from '~/components/Accordion'
import AccordionSection from '~/components/AccordionSection'
import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
export default function ServicosPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-background-servicos.png"
        size="h-36 md:h-96"
        textAlign="text-center"
        gradientFrom="rgba(36, 49, 55, 1)"
        gradientTo="rgba(6, 81, 87, 0.64) "
      >
        <h1 className="text-white text-2xl md:text-4xl font-normal   w-80 md:w-full pl-5 md:px-56">
          branding é plataforma&nbsp;
          <span className=" font-bold md:font-light"> de lucro.</span>
        </h1>
      </Hero>
      <section>
        <div className="p-5  text-zinc-900  ">
          <h2 className="w-full text-base md:text-3xl font-semibold mb-5">
            Pensamos e executamos tailor made com know how e excelência técnica
            a serviço da sua marca.
          </h2>
          <p className="w-full   text-base md:text-2xl font-normal">
            Empresas com marcas consistentes podem obter aumentos de receita de
            até <span className="font-medium">33% + 74%</span> dos prospects
            preferem fazer negócios com marcas de boa reputação.
          </p>
        </div>
      </section>
      <Accordion>
        <AccordionSection
          title="Minha marca não vende. O que pode ser?"
          bgColor="bg-orange-600"
        >
          {/* <h3 className="text-slate-50 text-base font-semibold ">
            Minha marca não vende. O que pode ser?
          </h3> */}
          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Existem diversos motivos que fazem uma marca ter um grandes lucro no
            mercado, a nossa função é a de entender sua dor e trabalharmos ela,
            para que assim você consiga atingir todos os seus objetivos.
          </p>

          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Como fazemos isso?
          </p>
          <ul className="text-slate-50 text-sm font-normal leading-tight list-disc px-6">
            <li>BRANDING</li>
            <li>Identidades Visual e Verbal</li>
            <li>Posicionamento de Marca</li>
            <li>Criação de Marcas e Rebranding</li>
            <li>Brand Book e Guides de Comunicação</li>
          </ul>
        </AccordionSection>
        <AccordionSection
          title="Como posso me comunicar com meu público?"
          bgColor="bg-orange-600 bg-opacity-80"
        >
          {/* <h3 className="text-slate-50 text-base font-semibold ">
            Como posso me comunicar com meu público?
          </h3> */}
          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Comunicação é uma das chaves para um negócio de sucesso, por isso
            nossa equipe realiza um olhar detalhado na sua marca para encontrar
            as melhores soluções para o seu negócio.
          </p>

          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Como fazemos isso?
          </p>
          <ul className="text-slate-50 text-sm font-normal leading-tight list-disc px-6">
            <li>Comunicação Omnichannel</li>
            <li>Comunicação Institucional</li>
            <li>Editoriais e Mapas de Conteúdo inbound Marketing</li>
            <li>Estratégias de SEO e SEO Tech</li>
          </ul>
        </AccordionSection>
        <AccordionSection
          title="Vender, eu vendo. Mas nem todas as pessoas sabem o que significa a empresa."
          bgColor="bg-orange-600 bg-opacity-60"
        >
          {/* <h3 className="text-slate-50 text-base font-semibold ">
            Vender eu vendo, mas nem todas as pessoas sabem o que é a empresa.
          </h3> */}
          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Sabemos como é importante ser reconhecido pelo mercado, por isso nós
            entendemos o seu posicionamento e a melhor forma das pessoas te
            reconhecerem.
          </p>

          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Como fazemos isso?
          </p>
          <ul className="text-slate-50 text-sm font-normal leading-tight list-disc px-6">
            <li>Cultura Corporativa</li>
            <li>Jornadas de Compra</li>
            <li>Estratégias de Ativação de marca</li>
            <li>Criação de Marcas e Rebranding</li>
            <li> Eventos, Convenções de Vendas e Training Day</li>
          </ul>
        </AccordionSection>
        <AccordionSection
          title="Minha marca não vende. O que pode ser?"
          bgColor="bg-orange-700"
        >
          {/* <h3 className="text-slate-50 text-base font-semibold ">
            Como tornar a minha empresa atrativa para investidores, clientes e
            colaboradores?
          </h3> */}
          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Este é de fato um grande desafio, porém com as orientações corretas
            e uma metodologia voltada para o cliente a Lureness vai construir
            com você o caminho do sucesso.
          </p>

          <p className=" text-slate-50 text-sm font-normal leading-tight mb-2">
            Como fazemos isso?
          </p>

          <ul className="text-slate-50 text-sm font-normal leading-tight list-disc px-6">
            <li>Onboarding e Sucesso do Cliente</li>
            <li>Jornada da Marca Empregadora</li>
            <li>Pitch Deck</li>
          </ul>
        </AccordionSection>
      </Accordion>
    {/*  <Cta bgColor="bg-zinc-900" customClass="gap-2">
        <p className="w-[85%] md:w-3/5 lg:w-full text-white text-2xl font-medium md:text-2xl md:font-semibold">
          Quer ajuda para entender qual solução melhor se adequa à sua empresa?
        </p>
        <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-xl md:font-bold mt-2 font-serif">
          Fale com a Lureness
        </div>
      </Cta>*/}
    </Layout>
  )
}
