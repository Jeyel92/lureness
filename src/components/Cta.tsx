export default function Cta({ bgColor, customClass, children }) {
  return (
    <div
      className={`p-6 flex-col justify-start items-start ${bgColor} ${customClass}`}
    >
      {children}
    </div>
  )
}
