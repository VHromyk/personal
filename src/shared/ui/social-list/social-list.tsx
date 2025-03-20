import React from 'react'

import { Icon, IconType, socialLinks } from '@/shared'

export const SocialList = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon type={item.icon as IconType} fill={item.fill} />
          </a>
        </li>
      ))}
    </ul>
  )
}
