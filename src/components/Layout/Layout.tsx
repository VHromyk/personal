'use client'
import React, { FC, ReactNode } from 'react'
import { Aside } from '@/components/Aside/Aside'
import { SocialNetworkList } from '@/components/SocialNetworkList'
import { MobileHeader } from '@/components/Layout/MobileHeader'
import { useOpen } from '@/hooks/useOpen'
import Modal from '@/components/Modal'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  const { isOpen, onClose, onToggle } = useOpen()
  return (
    <>
      <MobileHeader isOpen={isOpen} onToggle={onToggle} />
      <div className="w-full flex heightWithHeader lg:h-full">
        <div className="hidden lg:block">
          <Aside />
        </div>
        <div className="flex flex-col items-center w-full h-full relative overflow-auto">
          <div className="absolute top-5 right-12 hidden lg:block">
            <SocialNetworkList />
          </div>
          <div className="w-full max-w-[976px] py-6 px-4 lg:px-12">
            {children}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Layout
