import { Icon, IconType } from '@/shared'

import { contacts } from '../config'

export const ContactsList = () => {
  return (
    <ul className="mt-8 flex flex-col gap-3 font-medium">
      {contacts.map((item) => (
        <li key={item.type}>
          <a
            href={`${item.type}${item.data}`}
            className="w-min hover:opacity-60 ease-in duration-300 flex item-center gap-2.5 text-darkGreen"
          >
            <span className="flex items-center">
              {<Icon type={item.icon as IconType} />}
            </span>
            <span
              className={`text-sm font-semibold ${
                item.type === 'mailto:' ? 'underlined' : ''
              }`}
            >
              {item.data}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
