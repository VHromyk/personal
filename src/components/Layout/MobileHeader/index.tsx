import React from 'react'
import { Icon } from '@/components/Icon'
import { SocialNetworkList } from '@/components/SocialNetworkList'

interface IMobileHeader {
  isOpen: boolean
  onToggle: () => void
}

export const MobileHeader = ({ isOpen, onToggle }: IMobileHeader) => {
  return (
    <div className={`min-h-[56px] top-0 border-b-[1px] border-dividerLight bg-white w-full px-4 flex items-center justify-between lg:hidden ${!isOpen ? 'sticky top-0 z-10' : ''}`}>
      <button className="relative z-10 py-1.5 px-[3px] ease-in-out duration-300 hover:opacity-70" onClick={onToggle}>
        {isOpen ? <Icon type="CROSS" fill="#ffffff" /> : <Icon type="BURGER" />}
      </button>
      <SocialNetworkList />
    </div>
  )
}
