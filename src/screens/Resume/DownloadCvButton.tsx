'use client'

import React from 'react'

import axios from 'axios'

import { Icon } from '@/components/Icon'

const fileURL = '/files/CV_Frontend_Vitalii_Hromyk.pdf'

export const DownloadCvButton = () => {
  const onDownloadCvHandler = async () => {
    try {
      await axios.post('api/send', {
        name: '',
        email: '',
        textarea: 'Congrats! Your CV have been downloaded!',
        company: '',
      })
    } catch (e) {
      if (e instanceof Error) {
        throw e
      }
    }
  }

  return (
    <a
      onClick={onDownloadCvHandler}
      href={fileURL}
      download={true}
      className="mt-6 bg-bgDark text-textLight py-2 px-4 rounded-full flex gap-2 items-center ease-in duration-300 hover:scale-105"
    >
      <Icon type="DOWNLOAD" />
      <span>Download my CV</span>
    </a>
  )
}

export default DownloadCvButton
