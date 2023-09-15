import React from 'react'
import { Icon } from '../Icon'

const socialLinks = [
  {
    label: 'linkedin',
    icon: <Icon type="LINKEDIN" />,
    url: 'https://www.linkedin.com/in/vitalii-hromyk/',
  },
  {
    label: 'github',
    icon: <Icon type="GITHUB" />,
    url: 'https://github.com/VHromyk',
  },
  {
    label: 'telegram',
    icon: <Icon type="TELEGRAM" />,
    url: 'https://t.me/Vitalii_Hromyk',
  },
]

export const SocialNetworkList = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item?.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
