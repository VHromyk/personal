'use client'

import React, { FC, ReactNode } from 'react'

import { Aside } from '@/components/Aside/Aside'
import { Header } from '@/components/Layout/Header'
import Modal from '@/components/Modal'
import { useOpen } from '@/hooks/useOpen'

import styles from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useOpen()

  return (
    <>



      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <Aside onClose={onClose} classes="hidden lg:block" />
        </div>
        <div className={styles.content}>
          <Header onOpen={onOpen} />
          <div className="px-4 lg:px-12 py-4 max-w-[976px] mx-auto">
            {children}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Layout
