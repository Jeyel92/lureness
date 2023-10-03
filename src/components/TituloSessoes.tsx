export default function TituloSessoes({ textoLinha1, textoLinha2 }) {
  return (
    <h2 className="w-80  text-base md:text-2xl font-normal mb-5 text-zinc-900">
      {textoLinha1} <br />
      <span className="text-2xl md:text-4xl font-bold font-serif">
        {textoLinha2}
      </span>
    </h2>
  )
}
