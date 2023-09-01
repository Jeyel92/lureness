import Image from 'next/image'

export default function Hero({ bgImageUrl, size, textAlign, children }) {
  return (
    <div className={`w-full ${size} relative`}>
      <div className={`w-full ${size} left-0 top-0 absolute`}>
        <Image
          className={`w-full ${size} left-0 top-0 absolute`}
          src={bgImageUrl}
          alt="Background destaque"
          layout="fill"
        />

        <div
          className={`w-full ${size} left-0 top-0 absolute bg-teal-800 bg-opacity-60`}
        />
      </div>

      <div
        className={`flex flex-col ${size} place-content-center relative gap-4 px-5`}
      >
        <div className={textAlign}>{children}</div>
      </div>
    </div>
  )
}
