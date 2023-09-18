import React from 'react'
import Image from 'next/image'

import WRITESONIC_IMG from '@/assets/images/writesonic.jpg'
import DUELMASTERS_IMG from '@/assets/images/duelmasters.jpg'
import ECR_IMG from '@/assets/images/ecr.jpg'
import DELTALAKE_IMG from '@/assets/images/deltaLake.jpg'
import AVALANCHE_IMG from '@/assets/images/llm.jpg'
import THC_IMG from '@/assets/images/thc.jpg'

const projectsList = [
  {
    image: WRITESONIC_IMG,
    title: 'Writesonic - AI-Driven Content Creation',
    description:
      'For Writesonic, I crafted the frontend using HTML with Tailwind CSS and implemented dynamic logic with React JS (Next.js). The site empowers users to create AI-generated content for social networks seamlessly. ',
    technologies: ['HTML5', 'React', 'Next.JS', 'Tailwind'],
    link: 'https://writesonic.com/',
  },
  {
    image: DUELMASTERS_IMG,
    title: 'Duelmasters - eSports and Betting Platform',
    description:
      'At Duelmasters, I handled mark-up using HTML and CSS and incorporated dynamic functionalities with React JS. This involved connecting to MongoDB and WordPress for the admin panel. I also integrated cryptocurrency payment and achieved an impressive Pagespeed score of 99. The site offers cyber-sports and allows users to bet on their gaming prowess.',
    technologies: [
      'HTML5',
      'SCSS',
      'Next.JS',
      'Node.JS',
      'MongoDB',
      'WordPress',
      'GraphQL',
    ],
    link: 'https://www.duelmasters.io/home/r',
  },
  {
    image: ECR_IMG,
    title: 'ECR - E-Commerce Research Platform',
    description:
      'I contributed to ECR by providing mark-up with HTML and CSS, and creating dynamic functionalities using React JS and Gatsby. The platform serves as a hub for scientific research in the e-commerce field, offering insightful market analyses.',
    technologies: [
      'React.JS',
      'Gatsby',
      'GraphQL',
      'Styled-Components',
      'Prismic CMS',
    ],
    link: 'https://www.ecrloss.com/',
  },
  {
    image: DELTALAKE_IMG,
    title: 'DeltaLake - Personal Website and Blog',
    description:
      'I contributed to the development of DeltaLake, a personal website and blog. Using HTML, CSS, and React JS with Gatsby, we created a platform that seamlessly integrates with a YouTube channel. The site showcases a range of content, from articles to videos, providing visitors with an engaging and informative experience.',
    technologies: [
      'React.JS',
      'Gatsby',
      'GraphQL',
      'Styled-Components',
      'Youtube API',
    ],
    link: 'https://delta.io/',
  },
  {
    image: AVALANCHE_IMG,
    title:
      'LLM Avalanche - Technical State of LLMs for the Real World' +
      ' Nov and in the Future',
    description:
      "The project is built on Next.js with an integration of ACF WP as the content manager. Data is fetched using Apollo. In addition to the core functionalities, there's an implementation for loading videos directly from YouTube playlists",
    technologies: [
      'Next 13.4 (app dir)',
      'WordPress (ACF Pro,' + ' WPGraphQl)',
      'SCSS',
      'Youtube API',
    ],
    link: 'https://www.llmavalanche.com/?events=all',
  },
  {
    image: THC_IMG,
    title: 'THC Canada - Cannabis store Vancouver',
    description:
      'Leveraged Gatsby to develop a dynamic and performant website that showcases web development expertise',
    technologies: [
      'React.JS',
      'Gatsby',
      'WordPress (ACF Pro,' + ' WPGraphQl)',
      'Styled-Components',
      'Youtube API',
    ],
    link: 'https://www.llmavalanche.com/?events=all',
  },
]

export const ProjectsList = () => {
  return (
    <ul className="w-full flex flex-col gap-10 md:gap-16">
      {projectsList.map((item) => {
        return (
          <li
            key={item.title}
            className="flex flex-col md:flex-row gap-5 md:gap-12"
          >
            <div className="flex-1">
              <Image src={item.image} alt={item.title} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl uppercase font-medium leading-normal hover:opacity-50 ease-in duration-300">
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="block"
                >
                  {item.title}
                </a>
              </h2>
              <span className="block mt-2.5">{item.description}</span>
              <ul className="flex flex-wrap mt-4 gap-x-3 gap-y-2">
                {item.technologies.map((item) => (
                  <li
                    key={item}
                    className="uppercase font-medium leading-normal py-[5.5px] px-3 bg-lightBlue1 rounded-full border-[1px] border-darkGray"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
