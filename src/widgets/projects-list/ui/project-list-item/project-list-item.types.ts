interface IListItem {
  image: string
  title: string
  description: string
  technologies: string[]
  link: string
}

export interface IProjectsListItemProps {
  item: IListItem
  index: number
}
