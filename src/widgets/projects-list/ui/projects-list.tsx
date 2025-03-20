import { projectsList } from '../config'
import { ProjectsListItem } from './project-list-item'

export const ProjectsList = () => {
  return (
    <ul className="w-full flex flex-col gap-10 md:gap-16">
      {projectsList.map((item, index) => {
        return (
          <li key={item.title}>
            <ProjectsListItem item={item} index={index} />
          </li>
        )
      })}
    </ul>
  )
}
