'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navList = [
  {
    label: 'Resume',
    path: '/',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contacts',
    path: '/contacts',
  },
]

export const Navigation = () => {
  const pathName = usePathname()

  return (
    <nav className="flex flex-col gap-10">
      {navList.map((item) => {
        const isActive = pathName === item.path

        return (
          <Link
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
