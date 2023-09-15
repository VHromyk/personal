import React from 'react'
import { Preview } from '@/screens/Resume/Preview'
import { Skills } from '@/screens/Resume/Skills'
import { Experience } from '@/screens/Resume/Experience'
import { Education } from '@/screens/Resume/Education'

export const ResumePage = () => {
  return (
    <div className="flex flex-col gap-[70px] lg:gap-[100px]">
      <Preview />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}
