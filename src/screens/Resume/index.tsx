import React from 'react'

import { Education } from '@/screens/Resume/Education'
import { Experience } from '@/screens/Resume/Experience'
import { Preview } from '@/screens/Resume/Preview'
import { Skills } from '@/screens/Resume/Skills'

export const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-[100px] lg:mt-[152px]">
      <div className="flex flex-col gap-[70px] lg:gap-[100px]">
        <Preview />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  )
}
