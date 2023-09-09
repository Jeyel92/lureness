import TeamCard from './TeamCard'
export default function Team() {
  const team = [
    { name: 'Ana Menegueni', role: 'CEO - FOUNDER', image: '/team/ana.png' },
    { name: 'Pedro', role: 'Diretor de Criação', image: '/team/pedro.png' },
    {
      name: 'Andrea',
      role: 'Diretora de Projetos',
      image: '/team/andreia.png',
    },
  ]
  return (
    <section id="team">
      <div className="p-5 md:px-10">
        <div className=" text-zinc-900 md:text-zinc-900  ">
          <h2 className="w-80  text-base md:text-2xl font-normal mb-5 grid">
            nosso&nbsp;
            <span className="text-3xl md:text-4xl font-bold font-serif">
              dream team
            </span>
          </h2>
          <p className="w-[22rem] md:w-3/4 lg:w-full  text-sm md:text-xl font-normal ">
            Nomes fortes para fazer da sua marca uma potência em geração de
            demanda e lucro Lureness é inspirada nas mais de duas décadas de Ana
            Meneguini em estratégia de Branding, Marketing, Comunicação & PR,
            Marketing Digital, Branded Content, Eventos e Experiências para
            Startups e PMEs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              nome={member.name}
              cargo={member.role}
              imagem={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
