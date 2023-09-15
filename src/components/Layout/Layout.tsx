import React, { FC, ReactNode } from 'react'
import { Aside } from '@/components/Aside/Aside'
import { SocialNetworkList } from '@/components/SocialNetworkList'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="w-full flex h-full">
      <Aside />
      <div className="flex items-start justify-center w-full h-full relative overflow-auto">
        <div className="absolute top-5 right-12">
          <SocialNetworkList />
        </div>
        <div className="w-full max-w-[976px] py-12 px-12">
          <div className="flex flex-col items-center justify-between mt-32">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
