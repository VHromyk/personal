import React, { FC } from 'react'

import Image from 'next/image'

import { MotionListElement } from '@/shared'

import { IProjectsListItemProps } from './project-list-item.types'

export const ProjectsListItem: FC<IProjectsListItemProps> = ({
  item,
  index,
}) => {
  return (
    <MotionListElement index={index}>
      <div className="flex flex-col md:flex-row gap-5 md:gap-12">
        <div className="flex-1 rounded-lg flex flex-col justify-center">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full object-contain rounded-lg block shadow-custom"
            width={900}
            height={500}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl uppercase font-medium leading-normal hover:opacity-50 ease-in duration-300 underline">
            <a
              href={item.link}
              target="_blank"
              rel="nofollow noreferrer"
              className="block"
            >
              {item.title}
            </a>
          </h2>
          <span className="block mt-2.5">{item.description}</span>
          <ul className="flex flex-wrap mt-4 gap-x-3 gap-y-2">
            {item.technologies.map((item) => (
              <li
                key={item}
                className="uppercase font-medium leading-normal py-[5.5px] px-3 bg-lightBlue1 rounded-full border-[1px] border-darkGray"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionListElement>
  )
}
