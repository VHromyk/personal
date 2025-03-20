import { ProjectsList } from '@/widgets'

export const Projects = () => {
  return (
    <div className="mt-[56px] lg:mt-[104px] pb-[100px]">
      <h1 className="text-4xl font-medium leading-normal">Projects</h1>
      <div className="mt-10">
        <ProjectsList />
      </div>
    </div>
  )
}
