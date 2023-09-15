import React from 'react'

const educationList = [
  {
    university: 'GoIT Academy',
    occupation: 'Full-stack developer course',
    time: 'June 2020 - July 2021'
  },
  {
    university: 'Odessa state academy of civil engineering and architecture',
    occupation: 'Industrial and civil construction',
    time: 'September 2017 - June 2019'
  },
  {
    university: 'National University "Odessa Law Academy"',
    occupation: 'Bachelor, Law',
    time: 'September 2014 - March 2017'
  },
  {
    university: 'Kamianets-Podilskyi National Ivan Ohienko university',
    occupation: 'Master, History',
    time: 'September 2008 - July 2014'
  }
]

export const Education = () => {
  return   <div>
    <h2 className="uppercase font-medium">Education</h2>
    <div className="mt-5">
      <ul className="w-full flex gap-10 lg:gap-0 flex-col justify-between">
        {educationList.map((item, i) => (
            <li key={item.time} className="flex flex-col lg:flex-row lg:gap-12">
              <div className={`flex-1 lg:pr-2 lg:border-r-[1px] border-dividerLight ${i !== 0 ? 'pt-5' : ' '} ${i !== educationList.length - 1 ? 'pb-5': ''}`}>
                      <span className="flex flex-col gap-2 font-medium">
                <span className="text-sm text-textGray">{item.time}</span>
              </span>
              </div>
              <div className={`flex-1 lg:${i !== 0 ? 'pt-5' : ' '} ${i !== educationList.length - 1 ? 'pb-5': ''}`}>
                 <span className="flex flex-col">
                <span className="uppercase text-2xl text-black font-medium">
                  {item.occupation}
                </span>
                <span
                    className="text-sm text-bgDark mt-1 breakWord"
                >{item.university}</span>
              </span>
              </div>
            </li>
        ))}
      </ul>
    </div>
  </div>
}
