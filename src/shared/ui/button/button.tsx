import { FC } from 'react'

import Link from 'next/link'

import { IButtonProps } from './button.types'

export const Button: FC<IButtonProps> = ({ text, href, onClick }) => {
  const generalStyles =
    'inline-block mt-6 py-2 px-4 rounded-full border-[1px] text-textDarkGreen border-textDarkGreen ease-in duration-300 hover:bg-bgDark hover:text-white'
  return href ? (
    <Link title={text} className={generalStyles} href={href}>
      {text}
    </Link>
  ) : (
    <button className={generalStyles} onClick={onClick && onClick}>
      {text}
    </button>
  )
}
