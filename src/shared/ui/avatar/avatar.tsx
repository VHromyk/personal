import { FC } from 'react'

import { IAvatarProps } from './avatar.types'

export const Avatar: FC<IAvatarProps> = ({ styles, children }) => {
  return (
    <div
      className={`rounded-full w-[140px] h-[140px] bg-lightBlue flex justify-center items-center ${styles}`}
    >
      {children}
    </div>
  )
}
