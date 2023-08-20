import Image from 'next/image'

import imgElement from '../../public/element.svg'
export default function Cta() {
  return (
    <div className=" p-6 bg-slate-900 flex-col justify-start items-start gap-4 ">
      <span className="text-amber-500 text-2xl font-medium">
        Torne sua marca
        <br />
        <Image className="inline" src={imgElement} alt="Logo Lureness" />
        &nbsp;relevante
      </span>
      <div className=" text-slate-50 text-base font-medium underline">
        Fale com a Lureness
      </div>
    </div>
  )
}
