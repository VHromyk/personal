import Image from 'next/image'

import { Avatar, Button, E_ROUTES } from '@/shared'

export const Page404 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-auto py-6 px-4">
      <Avatar>
        <Image
          src="/assets/images/cry.png"
          alt="cried avatar"
          width={140}
          height={140}
        />
      </Avatar>
      <div className="mt-3 flex flex-col items-center max-w-[600px] text-center leading-normal">
        <p className="text-6xl font-medium">404</p>
        <p className="text-4xl font-medium mt-1">Oops! Page not Found</p>
        <p className="text-[#404040] mt-2">
          I`m very sort for the inconvenience. It looks looks you`re trying to
          access a page that has been deleted or never even existed
        </p>
        <Button text="Back to home page" href={E_ROUTES.HOME} />
      </div>
    </div>
  )
}
