import { hardSkillsProgressList } from '../config'

export const HardSkillsProgressList = () => {
  return (
    <ul className="flex flex-col gap-6 w-wull">
      {hardSkillsProgressList.map((item) => {
        return (
          <li key={item.name} className="flex flex-col gap-1">
            <span className="uppercase font-medium text-2xl">{item.name}</span>
            <span className="flex gap-2 w-full items-center">
              <span className="text-sm leading-normal">{item.level}</span>
              <span className="block rounded-full w-full bg-lightGreen h-[6px] relative">
                <span
                  className={`absolute rounded-full top-0 h-full left-0 bg-bgDark z-1 ${item.style}`}
                />
              </span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
