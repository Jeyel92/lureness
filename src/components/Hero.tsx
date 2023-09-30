// import Image from 'next/image'

export default function Hero({
  bgImageUrl,
  size,
  textAlign,
  children,
  gradientFrom,
  gradientTo,
}) {
  return (
    <div
      className={`flex flex-col justify-center ${size} bg-cover bg-no-repeat bg-center pt-5 items-center `}
      style={{
        backgroundImage: `linear-gradient( ${gradientFrom},${gradientTo}), url(${bgImageUrl})`,
      }}
    >
      <div className={textAlign}>{children}</div>
    </div>
    // rgba(6, 29, 48, 0.64), rgba(6, 29, 48, 0.64))
    // <div className={`w-full ${size} relative`}> md:bg-fixed md:bg-center
    //   <div className={`w-full ${size} left-0 top-0 absolute`}>
    //     <Image
    //       className={`w-full ${size} left-0 top-0 absolute`}
    //       src={bgImageUrl}
    //       alt="Background destaque"
    //       layout="fill"
    //     />

    //     <div
    //       className={`w-full ${size} left-0 top-0 absolute bg-teal-800 bg-opacity-60`}
    //     />
    //   </div>

    //   <div
    //     className={`flex flex-col ${size} place-content-center relative gap-4 px-5`}
    //   >
    //     <div className={textAlign}>{children}</div>
    //   </div>
    // </div>
  )
}
