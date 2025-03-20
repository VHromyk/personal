import { FC } from 'react'

import { Education, Experience, Preview, Skills } from '@/widgets'

export const ResumeView: FC = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-[100px] lg:mt-[120px] gap-[70px] lg:gap-[100px]">
      <Preview />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}
