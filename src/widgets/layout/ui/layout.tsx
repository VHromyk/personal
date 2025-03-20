'use client'

import { FC, PropsWithChildren } from 'react'

import dynamic from 'next/dynamic'

import '@/core/styles/main.scss'
import { useOpen } from '@/shared'

import { Header } from './header'
import { Sidebar } from './sidebar'

const MobileMenuLazy = dynamic(() =>
  import('./mobile-menu/mobile-menu').then((mode) => mode.MobileMenu),
)

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useOpen()

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <Sidebar onClose={onClose} classes="hidden lg:block" />
        </div>
        <div className="content">
          <Header onOpen={onOpen} />

          <div className="px-4 lg:px-12 py-4 max-w-[976px] mx-auto">
            {children}
          </div>
        </div>
      </div>
      {isOpen && <MobileMenuLazy isOpen={isOpen} onClose={onClose} />}
    </>
  )
}
