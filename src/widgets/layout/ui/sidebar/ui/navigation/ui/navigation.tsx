'use client'

import { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navList } from '../config'
import { INavigationProps } from './navigation.types'

export const Navigation: FC<INavigationProps> = ({ onClose }) => {
  const pathName = usePathname()

  return (
    <nav className="flex flex-col gap-8 lg:gap-10">
      {navList.map((item) => {
        const isActive = pathName === item.path

        return (
          <Link
            onClick={onClose}
            href={item.path}
            key={item.label}
            className={`pb-1 relative ${
              isActive ? 'underlinedLink font-semibold' : ' '
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
