import { hardSkillsList, interestsList, softSkillsList } from '../config'
import { HardSkillsProgressList } from './hard-skills-progress-list'
import { LanguagesList } from './languages-list'
import { ShowSkillsList } from './show-skills-list'

export const Skills = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-[100px] w-full leading-normal flex-wrap">
      <ShowSkillsList
        list={softSkillsList}
        title="Soft skills"
        separator=", "
      />
      <div className="w-full">
        <ShowSkillsList
          list={interestsList}
          title="My interests"
          separator=" | "
        />
        <LanguagesList />
      </div>
      <ShowSkillsList
        list={hardSkillsList}
        title="Hard skills"
        separator=" / "
        listClassName="uppercase text-2xl font-medium"
      />
      <HardSkillsProgressList />
    </div>
  )
}
