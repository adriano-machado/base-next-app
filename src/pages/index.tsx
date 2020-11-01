import React, { ReactNodeArray } from 'react'
import Image from 'next/image'

import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
    </Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
