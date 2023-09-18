import React from 'react'
import { Icon } from '@/components/Icon'
import { SocialNetworkList } from '@/components/SocialNetworkList'

interface IMobileHeader {
  isOpen: boolean
  onToggle: () => void
}

export const MobileHeader = ({ isOpen, onToggle }: IMobileHeader) => {
  return (
    <div className="min-h-[56px] border-b-[1px] border-dividerLight bg-white w-full px-4 flex items-center justify-between lg:hidden">
      <button className="relative z-10" onClick={onToggle}>
        {isOpen ? <Icon type="CROSS" /> : <Icon type="BURGER" />}
      </button>
      <SocialNetworkList />
    </div>
  )
}
