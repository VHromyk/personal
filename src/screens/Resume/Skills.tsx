import React from 'react'
import { Icon } from '@/components/Icon'

const skillsList = [
  'Communication Skills',
  ' Problem Solving',
  ' Attention to Details',
  ' Time management',
  ' Adaptability',
  ' User-Centric Approach',
  ' Teamwork and Collaboration',
  ' Leadership',
  ' Learning Skills',
  ' Proactive',
]

const interestsList = [
  'Learn English (take a part in "ENGin" program)',
  ' Sport (Basketball, Table Tennis, Yoga)',
  ' Architecture',
  ' Design',
  ' IT technologies',
  ' Investing',
]

const languages = [
  {
    language: 'English B1',
    icon: <Icon type="UK_FLAG" />,
  },
  {
    language: 'Ukrainian Fluent',
    icon: <Icon type="UA_FLAG" />,
  },
]

const hardSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.JS',
  'TypeScript',
  'Socket.io',
  'Google map API',
  'SEO',
  'Webpack',
  'Gatsby',
  'SCSS',
  'Tailwind',
  'Figma',
  'GIT',
]

const hardSkillsProgressList = [
  {
    name: 'HTML5/CSS3',
    level: '99%',
    style: 'w-[99%]',
  },
  {
    name: 'JavaScript',
    level: '90%',
    style: 'w-[90%]',
  },
  {
    name: 'Typescript',
    level: '95%',
    style: 'w-[95%]',
  },
  {
    name: 'React.JS',
    level: '99%',
    style: 'w-[99%]',
  },
  {
    name: 'Next.JS',
    level: '99%',
    style: 'w-[99%]',
  },
  {
    name: 'Gatsby',
    level: '90%',
    style: 'w-[90%]',
  },
]

export const Skills = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-[100px] w-full leading-normal flex-wrap">
      <div className="w-full">
        <h2 className="uppercase font-medium">Soft skills</h2>
        <div className="mt-5">{skillsList.toString()}</div>
      </div>
      <div className="w-full">
        <h2 className="uppercase font-medium">My interests</h2>
        <div className="mt-5">{interestsList.join(' |')}</div>
        <h2 className="uppercase font-medium mt-6">Languages</h2>
        <ul className="mt-5 flex gap-4 flex-wrap">
          {languages.map((item) => (
            <li
              key={item.language}
              className="flex gap-1 items-center py-2.5 px-4 border-[1px] rounded-full border-grey shrink-0"
            >
              {item.icon}
              <span>{item.language}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h2 className="uppercase font-medium">Hard skills</h2>
        <div className="mt-5 uppercase font-medium text-2xl">
          {hardSkills.join(' / ')}
        </div>
        {/*<ul className="mt-5 flex gap-4 flex-wrap">{languages.map(item => <li key={item.language} className="flex gap-1 items-center py-2.5 px-4 border-[1px] rounded-full border-grey shrink-0">*/}
        {/*  {item.icon}*/}
        {/*  <span>{item.language}</span>*/}
        {/*</li>)}</ul>*/}
      </div>
      <div className="w-full">
        <ul className="flex flex-col gap-6">
          {hardSkillsProgressList.map((item) => {
            return (
              <li key={item.name} className="flex flex-col gap-1">
                <span className="uppercase font-medium text-2xl">
                  {item.name}
                </span>
                <span className="flex gap-2 w-full items-center">
                  <span className="text-sm leading-normal">{item.level}</span>
                  <span className="block rounded-full w-full bg-lightGreen h-[6px] relative">
                    <span
                      className={`absolute rounded-full top-0 h-full left-0 bg-bgDark z-1 ${item.style}`}
                    />
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
