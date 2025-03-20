'use client'

import { Icon } from '@/shared'

import { downloadedFileURL } from '../config'
import { handleDownloadCv } from '../lib'

export const DownloadCv = () => {
  return (
    <a
      onClick={handleDownloadCv}
      href={downloadedFileURL}
      download={true}
      className="mt-6 bg-bgDark text-textLight py-2 px-4 rounded-full flex gap-2 items-center ease-in duration-300 hover:scale-105"
    >
      <Icon type="DOWNLOAD" />
      <span>Download my CV</span>
    </a>
  )
}
