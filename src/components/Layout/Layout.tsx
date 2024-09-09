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
        <div className="w-full lg:w-[calc(100%-280px)]">
            <div className='w-full py-3 px-4 border-b-[1px] border-lightBlue h-[56px] lg:sticky lg:top-0 lg:bg-white z-10 lg:flex justify-end hidden'>
                <SocialNetworkList />
            </div>
            <div className='w-full flex justify-center overflow-y-auto lg:h-[calc(100%-56px)]'>
                <div className="w-full max-w-[976px] py-6 px-4 lg:px-12">
                    {children}
                </div>
            </div>
        </div>
      </div>
        <Modal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default Layout
