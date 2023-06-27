import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

interface InputProps {
  className?: string
  htmlFor?: string
  icon?: IconType
  typeInput: string
  placeholder: string
  id: string
}

export function WrapperInput(props: PropsWithChildren<InputProps>) {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className={clsx(
          'flex items-center w-full gap-2 bg-[#202024] py-2 px-3 rounded-3xl mt-1',
          props.className
        )}
      >
        {props.icon && <props.icon size={24} className="text-white" />}

        {props.icon && (
          <div className="h-full w-[1px] bg-white text-white"></div>
        )}

        {props.children}

        <input
          type={props.typeInput}
          className="flex bg-transparent outline-none w-full h-8 placeholder:text-white text-white"
          placeholder={props.placeholder}
          id={props.id}
        />
      </label>
    </>
  )
}
