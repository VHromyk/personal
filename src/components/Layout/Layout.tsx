import React from 'react'
import { Aside } from '@/components/Aside/Aside'
import {SocialNetworkList} from '@/components/SocialNetworkList';

const Layout = ({ children }) => {
  return (
    <div className="w-full flex h-full">
      <Aside />
      <div className="flex items-center justify-center w-full h-full relative">
          <div className="absolute top-5 right-12">
              <SocialNetworkList />
          </div>
        <div className="w-full max-w-[880px]">{children}</div>
      </div>
    </div>
  )
}

export default Layout