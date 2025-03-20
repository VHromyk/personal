import React from 'react'

import { Metadata } from 'next'

import { Projects } from '@/views'

export const metadata: Metadata = {
  title: 'Vitalii Hromyk | Projects',
  description:
    'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
}

const ProjectsPage = () => {
  return <Projects />
}

export default ProjectsPage
