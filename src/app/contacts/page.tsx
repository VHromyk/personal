import React from 'react'
import { Metadata } from 'next'
import { Contacts } from '@/screens/Contacts'
import Layout from '@/components/Layout/Layout'

export const metadata: Metadata = {
  title: 'Vitalii Hromyk | Contacts',
  description:
    'Detailed resume of Vitalii Hromyk, a skilled frontend developer with experience in modern web technologies and a passion for creating intuitive user interfaces.',
}

const ContactsPage = () => (
  <Layout>
    <Contacts />
  </Layout>
)

export default ContactsPage
