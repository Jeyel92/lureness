import Image from 'next/image'

import Accordion from '~/components/Accordion'
import AccordionSection from '~/components/AccordionSection'
//import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
export default function ServicosPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-background-servicos.jpg"
        size="h-36 md:h-96"
        textAlign="text-left"
        gradientFrom="rgba(36, 49, 55, 1)"
        gradientTo="rgba(6, 81, 87, 0.64) "
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal   w-80 md:w-full pl-5 md:px-52 lg:px-56">
          branding é plataforma&nbsp;
          <span className=" font-bold md:font-light"> de lucro.</span>
        </h1>
      </Hero>
      <section>
        <div className="w-full flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:grid-flow-col  xl:gap-12">
          <div className="lg:row-span-2 lg:order-1 order-2">
            <Image
              src="/destaque-servicos.jpg"
              alt="Destaque servicos"
              width={3032}
              height={2224}
            />
          </div>

          <h2 className="lg:order-2 order-1 xl:self-center xl:w-[69%]  text-zinc-900 xl:text-3xl md:text-xl text-base font-semibold xl:p-0 md:p-10 p-5">
            Pensamos e executamos tailor made com know how e excelência técnica
            a serviço da sua marca.
          </h2>

          <div className="order-3 w-full xl:pr-32 xl:px-4 lg:px-14 md:p-14 p-9">
            <ul className="list-image-[url(/icon-logo.svg)] text-zinc-900 xl:text-2xl md:text-lg text-sm font-normal lg:leading-loose">
              <li className=" xl:mb-4 mb-8 leading-tight">
                <span className="inline-block leading-tight">
                  Empresas com marcas consistentes podem obter aumentos de
                  receita de até 33%
                </span>
              </li>
              <li>
                <span className="inline-block leading-tight">
                  + 74% dos prospects preferem fazer negócios com marcas de boa
                  reputação.
                </span>
              </li>
            </ul>
          </div>

          {/* <p className="self-center w-[53%] text-base md:text-2xl font-normal">
            <span className="font-medium"> 
          </p> */}
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
