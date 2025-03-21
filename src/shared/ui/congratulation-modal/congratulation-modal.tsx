import React, { FC } from 'react'

import Image from 'next/image'

import { Avatar, Button, E_ROUTES, Icon, SocialList } from '@/shared'

import { ICongratulationModal } from './congratulation-modal.types'

export const CongratulationModal: FC<ICongratulationModal> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`w-full h-screen fixed inset-0 z-50 p-4 ease-in-out duration-300 ${
        isOpen
          ? 'opacity-1 pointer-events-all'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-70" />
      <div className="p-4 absolute z-70 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-center overflow-auto">
        <div className="w-full max-w-[600px] min-h-[400px] bg-white rounded p-4 lg:p-6">
          <button
            className="py-1 px-1 rounded hover:opacity-70 ease-in-out duration-300 block ml-auto"
            onClick={onClose}
          >
            <Icon type="CROSS" fill="#000000" />
          </button>
          <div className="flex flex-col items-center mt-10 text-center">
            <Avatar styles="w-[110px] h-[110px]">
              <Image
                src="/assets/images/wink.png"
                alt="wink image"
                width={140}
                height={140}
              />
            </Avatar>
            <span className="block mt-3 text-3xl font-medium leading-normal text-textDark">
              Thank you for contacting me!
            </span>
            <span className="block mt-1 leading-normal">
              I have received your message. I&apos;ll reach out to you soon!
            </span>
            <Button text="Back to hone page" href={E_ROUTES.HOME} />
            <div className="mt-10 flex flex-col items-center">
              <span className="text-sm leading-4 font-medium text-textDark">
                Let&apos;s connect
              </span>
              <div className="mt-2">
                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
