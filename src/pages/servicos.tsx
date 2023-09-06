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
    </Layout>
  )
}
