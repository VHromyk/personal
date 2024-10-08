import React from 'react'

import Image from 'next/image'

import AVATAR_IMG from '@/assets/images/avatar.jpg'
import CURVE_IMG from '@/assets/images/curve.png'
import { Icon } from '@/components/Icon'
import DownloadCvButton from '@/screens/Resume/DownloadCvButton'

export const Preview = () => {
  return (
    <div className="flex flex-col items-center leading-normal">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center border-2 border-lightBlue">
        <Image src={AVATAR_IMG} alt="avatar" />
      </div>
      <span className="mt-4 font-medium block">Hi I`m Vitalii 🖐</span>
      <h1 className="w-full font-medium block mt-6 text-4xl max-w-[710px] text-center relative text-textDark leading-normal">
        I’m a frontend web developer. I can provide clean code and pixel perfect
        design.
        <Image
          src={CURVE_IMG}
          alt="curve"
          className="absolute top-8 left-[75px]"
        />
      </h1>
      <span className="block mt-4 max-w-[600px] text-center">
        My strong communication skills allow me to collaborate effectively with
        cross-functional teams and interpret design requirements. My
        problem-solving abilities enable me to troubleshoot and optimize code,
        ensuring a flawless user experience.
      </span>
      <DownloadCvButton />
    </div>
  )
}
