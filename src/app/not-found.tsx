import React from 'react'
import Link from 'next/link'

import CRY_IMG from '@/assets/images/cry.png'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-auto py-6 px-4">
      <div className="rounded-full w-[140px] h-[140px] bg-lightBlue">
        <Image src={CRY_IMG} alt="cried avatar" />
      </div>
      <div className="mt-3 flex flex-col items-center max-w-[600px] text-center leading-normal">
        <span className="text-6xl font-medium">404</span>
        <span className="text-4xl font-medium">Oops! Page not Found</span>
        <span className="text-[#404040]">
          I`m very sorrt for the inconvenience. It looks looks you`re trying to
          acces a page that has been deleted or never even existed
        </span>
        <Link
          className="inline-block mt-6 py-2 px-4 rounded-full border-[1px] text-textDarkGreen border-textDarkGreen ease-in duration-300 hover:bg-bgDark hover:text-white"
          href="/"
        >
          Back to home page
        </Link>
      </div>
    </div>
  )
}

export default NotFound
