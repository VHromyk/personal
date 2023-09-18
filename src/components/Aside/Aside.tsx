import React from 'react'
import { Icon } from '@/components/Icon'
import { Navigation } from '@/components/Navigation'

interface IAside {
  onClose?: () => void
}

export const Aside = ({ onClose }: IAside) => {
  return (
    <aside className="min-w-[280px] min-h-full bg-bgDark py-20 px-4 lg:px-12 lg:py-6 text-textLight shrink-0 overflow-auto">
      <section className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-[1px] flex items-center justify-center py-2.5 px-2 border-grey">
          <Icon type="LETTER_ICON" />
        </div>
        <a href="mailto:hromykk@gmail.com" className="text-xs">
          hromykk@gmail.com
        </a>
      </section>
      <section className="mt-[60px] lg:mt-[120px] flex flex-col gap-1">
        <span className="text-2xl font-semibold">Vitalii Hromyk</span>
        <span className="text-sm">Front-end developer</span>
      </section>
      <section className="mt-10 lg:mt-[72px]">
        <Navigation onClose={onClose} />
      </section>
    </aside>
  )
}
