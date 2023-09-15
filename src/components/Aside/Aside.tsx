import React from 'react'
import { Icon } from '@/components/Icon'
import { Navigation } from '@/components/Navigation'

export const Aside = () => {
  return (
    <aside className="min-w-[280px] min-h-full bg-bgDark py-6 px-12 text-textLight shrink-0 hidden lg:block">
      <section className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-[1px] flex items-center justify-center py-2.5 px-2 border-grey">
          <Icon type="LETTER_ICON" />
        </div>
        <a href="mailto:hromykk@gmail.com" className="text-xs">
          hromykk@gmail.com
        </a>
      </section>
      <section className="mt-[120px] flex flex-col gap-1">
        <span className="text-2xl font-semibold">Vitalii Hromyk</span>
        <span className="text-sm">Front-end developer</span>
      </section>
      <section className="mt-[72px]">
        <Navigation />
      </section>
    </aside>
  )
}
