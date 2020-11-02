import React from 'react'
import SEO from '@/components/SEO'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

const Home: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Home"
        showTitleSuffix
        showIndexPage
        description="Teste SEO"
      ></SEO>
    </Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
