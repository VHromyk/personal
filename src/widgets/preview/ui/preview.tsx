import React from 'react'

import Image from 'next/image'

import { DownloadCv } from '@/features'

export const Preview = () => {
  return (
    <div className="flex flex-col items-center leading-normal">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center border-2 border-lightBlue">
        <Image
          src="/assets/images/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
        />
      </div>
      <span className="mt-4 font-medium block">Hi I`m Vitalii 🖐</span>
      <h1 className="w-full font-medium block mt-6 text-4xl max-w-[710px] text-center relative text-textDark leading-normal">
        I’m a frontend web developer. I can provide clean code and pixel perfect
        design.
        <Image
          src="/assets/images/curve.png"
          alt="curve"
          className="absolute top-8 left-[75px]"
          width={160}
          height={20}
        />
      </h1>
      <span className="block mt-4 max-w-[600px] text-center">
        My strong communication skills allow me to collaborate effectively with
        cross-functional teams and interpret design requirements. My
        problem-solving abilities enable me to troubleshoot and optimize code,
        ensuring a flawless user experience.
      </span>
      <DownloadCv />
    </div>
  )
}
