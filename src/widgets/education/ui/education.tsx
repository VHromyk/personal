import { educationList } from '../config'

export const Education = () => {
  return (
    <section className="w-full">
      <h2 className="uppercase font-medium">Education</h2>
      <div className="mt-5">
        <ul className="w-full flex gap-10 lg:gap-0 flex-col justify-between">
          {educationList.map((item, i) => (
            <li key={item.time} className="flex flex-col lg:flex-row lg:gap-12">
              <div
                className={`flex-1 lg:pr-2 lg:border-r-[1px] border-dividerLight ${
                  i !== 0 ? 'pt-5' : ' '
                } ${i !== educationList.length - 1 ? 'pb-5' : ''}`}
              >
                <span className="flex flex-col gap-2 font-medium">
                  <span className="text-sm text-textGray">{item.time}</span>
                </span>
              </div>
              <div
                className={`flex-1 lg:${i !== 0 ? 'pt-5' : ' '} ${
                  i !== educationList.length - 1 ? 'pb-5' : ''
                }`}
              >
                <span className="flex flex-col">
                  <span className="uppercase text-2xl text-black font-medium">
                    {item.occupation}
                  </span>
                  <span className="text-sm text-bgDark mt-1 breakWord">
                    {item.university}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
