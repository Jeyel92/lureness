import Image from 'next/image'
export default function Team() {
  return (
    <section id="team">
      <div className="p-5">
        <div className=" text-zinc-900 md:text-zinc-900  ">
          <h2 className="w-80  text-base md:text-2xl font-normal mb-5 grid">
            nosso&nbsp;
            <span className="text-3xl md:text-4xl font-bold font-serif">
              dream team
            </span>
          </h2>
          <p className="w-[22rem] md:w-3/4 lg:w-2/3 xl:w-1/2  text-sm md:text-4xl font-normal md:font-serif leading-tight">
            Nomes fortes para fazer da sua marca uma potência em geração de
            demanda e lucro
            <br />
            Lureness é inspirada nas mais de duas décadas de Ana Meneguini em
            estratégia de Branding, Marketing, Comunicação & PR, Marketing
            Digital, Branded Content, Eventos e Experiências para Startups e
            PMEs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="py-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                className="flex-shrink-0 rounded-2xl w-full h-80 object-cover object-center mb-4 "
                src="/team/ana.png"
                alt="Logo team"
                width={343}
                height={272}
              />

              <div className="w-full">
                <h2 className="text-zinc-900 text-2xl font-bold font-serif">
                  Ana Menegueni
                </h2>
                <h3 className="ext-zinc-900 text-base font-normal">
                  CEO - FOUNDER
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
