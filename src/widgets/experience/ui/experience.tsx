import { experienceList } from '../config'

export const Experience = () => {
  return (
    <section>
      <h2 className="uppercase font-medium">Work experience</h2>
      <div className="mt-5">
        <ul className="w-full flex flex-col gap-10 lg:gap-0 justify-between">
          {experienceList.map((item, i) => (
            <li
              key={item.time}
              className="flex gap-2 lg:gap-12 flex-col lg:flex-row"
            >
              <div
                className={`flex-1 lg:pr-2 lg:border-r-[1px] border-dividerLight ${
                  i !== 0 ? 'pt-5' : ' '
                } ${i !== experienceList.length - 1 ? 'pb-5' : ''}`}
              >
                <span className="flex flex-col gap-2 font-medium">
                  <span className="text-sm text-textGray">{item.time}</span>
                  <span className="uppercase text-2xl text-bgDark">
                    ({item.type})
                  </span>
                </span>
              </div>
              <div
                className={`flex-1 ${i !== 0 ? 'pt-5' : ' '} ${
                  i !== experienceList.length - 1 ? 'pb-5' : ''
                }`}
              >
                <span className="flex flex-col">
                  <span className="uppercase text-2xl text-black font-medium">
                    {item.position}
                  </span>
                  <span className="uppercase text-sm text-textGray mt-1 font-medium">
                    {item.company}
                  </span>
                  <span
                    className="text-sm text-bgDark mt-4 breakWord"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
