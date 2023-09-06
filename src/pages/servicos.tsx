import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
export default function ServicosPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-background-servicos.png"
        size="h-36 md:h-96"
        textAlign="text-left"
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
          <p className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2  text-base md:text-4xl font-normal md:font-serif">
            Empresas com marcas consistentes podem obter aumentos de receita de
            até <span className="font-medium">33% + 74%</span> dos prospects
            preferem fazer negócios com marcas de boa reputação.
          </p>
        </div>
      </section>
      <Cta bgColor="bg-zinc-900" customClass="gap-2">
        <p className="w-[85%] md:w-3/5 lg:w-full text-white text-2xl font-medium md:text-2xl md:font-semibold">
          Quer ajuda para entender qual solução melhor se adequa à sua empresa?
        </p>
        <div className=" text-slate-50 text-base font-medium underline md:text-white md:text-xl md:font-bold mt-2 font-serif">
          Fale com a Lureness
        </div>
      </Cta>
    </Layout>
  )
}
