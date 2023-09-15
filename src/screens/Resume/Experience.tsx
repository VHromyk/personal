import React from 'react'

const workExperienceList = [
  {
    time: 'July 2021 - February 2022',
    type: 'Full time',
    position: 'Front-end developer',
    company: 'KAVOON',
    description: `<span>
    Working as a frontend developer, I collaborated with a team at a growing product company based in Ukraine. We predominantly utilized React.JS and Next.JS to build dynamic and user-centric applications. One of our standout projects was the development of <a href="https://www.kavoon.com.ua/uk" target="_blank">https://www.kavoon.com.ua/uk</a> — a comprehensive resource targeted at our audience. This platform showcases our commitment to quality design and efficient functionality, reflecting the standards and values we uphold in our work.
</span>`,
  },
  {
    time: 'February 2022 - October 2023',
    type: 'Full time',
    position: 'Front-end developer',
    company: 'Smart-ui',
    description: `<span>During my tenure at SMART-UI, I actively utilized leading frontend technologies such as JS, React, and Next.JS etc. Thanks to my professional expertise, I was involved in creating and optimizing interactive user interfaces, ensuring high application performance and responsiveness. Working closely with a team of designers and backend developers, I assisted in implementing cross-platform solutions and participated in the development cycle of projects from the initial stage to launch.</span>`,
  },
  {
    time: 'November 2022 - Until now',
    type: 'Part time',
    position: 'Education mentor (React.JS)',
    company: 'GoIT',
    description: `<span>At GoIT, I work as a mentor, assisting students in mastering React and enhancing their development skills. Leveraging my experience and knowledge, I provide them with essential support, guiding them throughout their learning journey and helping them overcome challenges.</span>`,
  },
]

export const Experience = () => {
  return (
    <div>
      <h2 className="uppercase font-medium">Work experience</h2>
      <div className="mt-5">
        <ul className="w-full flex flex-col gap-10 lg:gap-0 justify-between">
          {workExperienceList.map((item, i) => (
            <li key={item.time} className="flex gap-2 lg:gap-12 flex-col lg:flex-row">
              <div className={`flex-1 lg:pr-2 lg:border-r-[1px] border-dividerLight ${i !== 0 ? 'pt-5' : ' '} ${i !== workExperienceList.length - 1 ? 'pb-5': ''}`}>
                      <span className="flex flex-col gap-2 font-medium">
                <span className="text-sm text-textGray">{item.time}</span>
                <span className="uppercase text-2xl text-bgDark">
                  ({item.type})
                </span>
              </span>
              </div>
              <div className={`flex-1 ${i !== 0 ? 'pt-5' : ' '} ${i !== workExperienceList.length - 1 ? 'pb-5': ''}`}>
                 <span className="flex flex-col">
                <span className="uppercase text-2xl text-black font-medium">
                  {item.position}
                </span>
                <span className="uppercase text-sm text-textGray mt-1 font-medium">
                  {item.company}
                </span>
                <span
                    className="text-sm text-bgDark mt-4 breakWord"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
