import { FC } from 'react'

import { IShowSkillsListProps } from './show-skills-list.types'

export const ShowSkillsList: FC<IShowSkillsListProps> = ({
  list,
  title,
  separator,
  listClassName = '',
}) => {
  return (
    <div className="w-full">
      <h2 className="uppercase font-medium">{title}</h2>
      <div className={`mt-5 ${listClassName}`}>{list.join(separator)}</div>
    </div>
  )
}
