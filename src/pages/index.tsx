import Cta from '~/components/Cta'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero bgImageUrl="/hero-backgroud-home.png" />
        <div className="container">
          <div className="py-5 pl-5 w-80 text-black text-base font-normal">
            Torne a sua marca mais relevante. <br />
            Branding é Plataforma de Lucro para vender mais e melhor.{' '}
          </div>
          <Cta
            bgColor="bg-zinc-900"
            customClass="gap-2"
            textoLink="Saiba o motivo"
          >
            <p className="w-2/5 text-white text-2xl font-medium">
              Sua marca não vende?
            </p>
          </Cta>
        </div>
      </Layout>
    </>
  )
}
