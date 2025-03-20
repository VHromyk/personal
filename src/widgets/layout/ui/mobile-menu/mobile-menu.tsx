import React, { FC, useRef } from 'react'

import { useNoScroll, useOnClickOutside } from '@/shared'

import { Sidebar } from '../sidebar'
import { IMobileMenu } from './mobile-menu.types'

export const MobileMenu: FC<IMobileMenu> = ({ isOpen, onClose }) => {
  const contentRef = useRef(null)

  useNoScroll(isOpen, 1024)

  useOnClickOutside(contentRef, onClose)

  return (
    <div
      className={`fixed z-20 inset-0 duration-300 ${
        !isOpen
          ? 'opacity-0 pointer-events-none'
          : 'opacity-1 pointer-events-auto'
      } lg:opacity-0 lg:pointer-events-none`}
    >
      <div className="fixed inset-0 bg-black opacity-70" />
      <div
        ref={contentRef}
        className={`w-full relative max-w-[280px] h-full bg-bgDark z-30 transition-transform duration-400 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <Sidebar onClose={onClose} />
      </div>
    </div>
  )
}
