import Image from 'next/image'

import imgLogo from '../../public/logo-branco.svg'

export default function Hero({ bgImageUrl }) {
  return (
    <div className="w-full h-80 relative">
      <div className="w-full h-80 left-0 top-0 absolute">
        <Image
          className="w-full h-80 left-0 top-0 absolute"
          src={bgImageUrl}
          alt="Background destaque"
          layout="fill"
        />

        <div className="w-full h-80 left-0 top-0 absolute bg-teal-800 bg-opacity-60" />
      </div>

      <div className="flex-col h-80 place-content-center relative gap-4">
        <div className="text-center">
          <Image className="w-44 h-11 inline-flex" src={imgLogo} alt="logo" />
          <p className=" mt-6 text-center text-gray-200 text-base">
            Sua marca mais&nbsp;
            <span className="font-semibold">forte, rentável e lucrativa.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
