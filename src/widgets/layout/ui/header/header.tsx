import { FC } from 'react'

import { Icon, SocialList } from '@/shared'

import { IHeaderProps } from './header.types'

export const Header: FC<IHeaderProps> = ({ onOpen }) => {
  return (
    <header
      className={`min-h-[56px] z-10 sticky top-0 border-b-[1px] border-dividerLight bg-white w-full px-4 flex items-center justify-between lg:justify-end`}
    >
      <button
        className="py-1.5 px-[3px] ease-in-out duration-300 hover:opacity-70 lg:hidden"
        onClick={onOpen}
      >
        <Icon type="BURGER" />
      </button>
      <SocialList />
    </header>
  )
}
