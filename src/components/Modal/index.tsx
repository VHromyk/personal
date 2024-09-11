import React, { useRef } from 'react'
import { Aside } from '@/components/Aside/Aside'
import { useNoScroll } from '@/hooks/useNoScroll'
import { useOnClickOutside } from '@/hooks/useClickOutside'

interface IModal {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: IModal) => {
  useNoScroll(isOpen, 1024)

  const contentRef = useRef(null)

  useOnClickOutside(contentRef, onClose)

  return (
    <div
      className={`fixed z-20 inset-0 duration-300 ${
        !isOpen
          ? 'opacity-0' + ' pointer-events-none'
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
        <Aside onClose={onClose} />
      </div>
    </div>
  )
}

export default Modal
