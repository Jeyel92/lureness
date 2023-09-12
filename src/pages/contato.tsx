// import { FormEvent } from 'react'

import ContactForm from '~/components/ContactForm'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'

// async function onSubmit(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault()

//   const formData = new FormData(event.currentTarget)
//   const response = await fetch('/api/sendMail', {
//     method: 'POST',
//     body: formData,
//   })

//   // Handle response if necessary
//   const data = await response.json()
//   console.log(data)
//   // ...
// }

export default function ContatoPage() {
  return (
    <Layout>
      <Hero
        bgImageUrl="/hero-backgroud-contato.jpg"
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

        <ContactForm />
      </div>
    </Layout>
  )
}
