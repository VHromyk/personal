import React from 'react'

import { Icon } from '@/components/Icon'
import { SocialNetworkList } from '@/components/SocialNetworkList'

interface IMobileHeader {
  onOpen: () => void
}

export const Header = ({ onOpen }: IMobileHeader) => {
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
      <SocialNetworkList />
    </header>
  )
}
