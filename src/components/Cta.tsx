export default function Cta({ bgColor, customClass, textoLink, children }) {
  return (
    <div
      className={`p-6 flex-col justify-start items-start ${bgColor} ${customClass}`}
    >
      {children}
      <div className=" text-slate-50 text-base font-medium underline">
        {textoLink}
      </div>
    </div>
  )
}
