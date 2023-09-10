import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

export default function ContatoPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-backgroud-sobre.png"
        size="h-36 md:h-96"
        textAlign="text-center"
        gradientFrom="rgba(36, 49, 55, 1)"
        gradientTo="rgba(6, 81, 87, 0.64) "
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold w-72 md:w-full pl-5 md:px-56">
          contato
        </h1>
      </Hero>
      <div className="px-6 py-12 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-left md:text-center">
          <p className="text-zinc-900 text-sm md:text-2xl font-normal">
            Diálogo é essencial por aqui, então, bora entender se somos a
            solução ideal para o seu desafio?
          </p>
          <h2 className="mt-12 md:mt-24 text-black text-3xl font-semibold">
            Fale conosco
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="nome"
                className="block text-zinc-900 text-base font-medium"
              >
                Nome*
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-zinc-900 text-base font-medium"
              >
                E-mail corporativo*
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="site"
                className="block text-zinc-900 text-base font-medium"
              >
                Site
              </label>
              <div className="mt-2.5">
                <input
                  type="url"
                  name="site"
                  id="site"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="qtdFuncionarios"
                className="block text-zinc-900 text-base font-medium"
              >
                Número de funcionários*
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="qtdFuncionarios"
                  id="qtdFuncionarios"
                  autoComplete="given-name"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="segmento"
                className="block text-zinc-900 text-base font-medium"
              >
                Segmento
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="segmento"
                  id="segmento-name"
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="motivo"
                className="block text-zinc-900 text-base font-medium"
              >
                Qual é a sua maior dor hoje?*
              </label>
              <div className="mt-2.5">
                <select
                  name="motivo"
                  id="motivo"
                  className="block form-select w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="1 - meu negócio parou de crescer">
                    1 - meu negócio parou de crescer
                  </option>
                  <option value="2 - quero vender mais e ter mais lucro">
                    2 - quero vender mais e ter mais lucro
                  </option>
                  <option value="3 - é muito difícil atrair profissionais talentosos para o meu negócio">
                    3 - é muito difícil atrair profissionais talentosos para o
                    meu negócio
                  </option>
                  <option value="4 - não consigo deixar claro meu diferencial competitivo e parece que minha concorrência está sempre no meu “pé”">
                    4 - não consigo deixar claro meu diferencial competitivo e
                    parece que minha concorrência está sempre no meu “pé”
                  </option>
                  <option value="5 - meu site e minhas redes sociais não traduzem quem meu negócio é">
                    5 - meu site e minhas redes sociais não traduzem quem meu
                    negócio é
                  </option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Fale sobre a sua necessidade:
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-300 bg-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-700 sm:text-sm sm:leading-tight font-normal"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-lg bg-orange-600 px-3.5 py-2.5 text-center text-2xl font-semibold text-slate-50 shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            >
              enviar mensagem
            </button>
          </div>
        </form>
        <div className="mx-auto max-w-2xl text-left md:text-center mt-12">
          <p className="text-zinc-900 text-sm md:text-2xl font-normal">
            Se preferir, nos mande um e-mail para:{' '}
            <span className="font-medium">oi@itmbr.com</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}
