import React from 'react'
import Link from 'next/link'
import {Avatar} from '@/components/Avatar';

import CRY_IMG from '@/assets/images/cry.png'
import Image from 'next/image'
import {BackHomeBtn} from '@/components/Buttons/BackHome';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-auto py-6 px-4">
        <Avatar>
            <Image src={CRY_IMG} alt="cried avatar" />
        </Avatar>
      <div className="mt-3 flex flex-col items-center max-w-[600px] text-center leading-normal">
        <span className="text-6xl font-medium">404</span>
        <span className="text-4xl font-medium">Oops! Page not Found</span>
        <span className="text-[#404040]">
          I`m very sorrt for the inconvenience. It looks looks you`re trying to
          acces a page that has been deleted or never even existed
        </span>
        <BackHomeBtn />
      </div>
    </div>
  )
}

export default NotFound
