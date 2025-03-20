import { Icon, IconType } from '@/shared'

import { languagesList } from '../config'

export const LanguagesList = () => {
  return (
    <>
      <h2 className="uppercase font-medium mt-6">Languages</h2>
      <ul className="mt-5 flex gap-4 flex-wrap">
        {languagesList.map((item) => (
          <li
            key={item.language}
            className="flex gap-1 items-center py-2.5 px-4 border-[1px] rounded-full border-grey shrink-0"
          >
            {<Icon type={item.icon as IconType} />}
            <span>{item.language}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
