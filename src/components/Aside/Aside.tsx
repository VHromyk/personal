import React from 'react'
import { Icon } from '@/components/Icon'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

interface IAside {
  onClose: () => void
  classes?: string
}

export const Aside = ({ onClose, classes }: IAside) => {
  return (
    <aside
      className={`min-w-[280px] relative z-20 min-h-full bg-bgDark text-textLight flex flex-col ${
        classes || ''
      }`}
    >
      <div className="w-full h-[56px] border-b-[1px] lg:border-none border-dividerLight px-4 py-2 flex justify-end shrink-0">
        <button
          className="relative z-10 py-1.5 px-[3px] h-9 flex items-center justify-center rounded-lg w-9 lg:hidden ease-in-out duration-300 hover:opacity-70"
          onClick={onClose}
        >
          <Icon type="CROSS" fill="#ffffff" />
        </button>
      </div>
      <div className="py-16 px-4 lg:px-10 lg:py-6 grow overflow-y-auto h-[calc(100vh-56px)]">
        <section className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-[1px] flex items-center justify-center py-2.5 px-2 border-grey">
            <Icon type="LETTER_ICON" />
          </div>
          <a href="mailto:hromykk@gmail.com" className="text-xs">
            hromykk@gmail.com
          </a>
        </section>
        <section className="mt-[60px] lg:mt-[120px] flex flex-col gap-1">
          <Link
            onClick={onClose}
            href="/"
            className="text-2xl font-semibold ease-in duration-300 hover:opacity-70"
          >
            Vitalii Hromyk
          </Link>
          <span className="text-sm">Front-end developer</span>
        </section>
        <section className="mt-10 lg:mt-[72px]">
          <Navigation onClose={onClose} />
        </section>
      </div>
    </aside>
  )
}
