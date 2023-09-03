/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function AccordionSection({ title, children, bgColor }) {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    setIsShowing(!isShowing)
  }
  return (
    <details
      className={`w-full cursor-pointer  px-4 py-3 ${bgColor}`}
      onClick={toggle}
    >
      <summary className="w-full text-gray-200 text-2xl flex justify-between py-3    ">
        {title}
        <ChevronDownIcon
          className={`h-6 w-6 text-zinc-300 justify-self-end ${
            isShowing ? 'block' : 'hidden'
          }`}
          aria-hidden="true"
        />
        <ChevronUpIcon
          className={`h-6 w-6 text-zinc-300 justify-self-end ${
            isShowing ? 'hidden' : 'block'
          }`}
          aria-hidden="true"
        />
      </summary>
      <div className="px-4 py-3">{children}</div>
    </details>
  )
}
