import React from 'react'
import { Aside } from '@/components/Aside/Aside'
import { useNoScroll } from '@/hooks/useNoScroll'

interface IModal {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: IModal) => {
  useNoScroll(isOpen)

  return (
    <div
      className={`fixed inset-0 duration-300 ${
        !isOpen
          ? 'opacity-0' + ' pointer-events-none'
          : 'opacity-1 pointer-events-auto'
      } lg:opacity-0 pointer-events-none`}
    >
      <div className="fixed inset-0 bg-black opacity-70 z-10"></div>
      <div
        className={`w-full relative max-w-[280px] h-full bg-bgDark z-20 transition-transform duration-400 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <Aside onClose={onClose} />
      </div>
    </div>
  )
}

export default Modal
