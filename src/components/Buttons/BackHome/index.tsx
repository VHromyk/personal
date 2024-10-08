import React from 'react'

import Link from 'next/link'

export const BackHomeBtn = () => {
  return (
    <Link
      className="inline-block mt-6 py-2 px-4 rounded-full border-[1px] text-textDarkGreen border-textDarkGreen ease-in duration-300 hover:bg-bgDark hover:text-white"
      href="/"
    >
      Back to home page
    </Link>
  )
}
