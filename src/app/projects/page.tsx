import React from 'react'
import { Metadata } from 'next'
import { ProjectsPage } from '@/screens/Projects'
import Layout from '@/components/Layout/Layout'

export const metadata: Metadata = {
  title: 'Vitalii Hromyk | Projects',
  description:
    'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
}

const Projects = () => {
  return (
    <Layout>
      <ProjectsPage />
    </Layout>
  )
}

export default Projects
