import { NextPage } from 'next'
import Head from 'next/head'
import HomeTemplate from '@templates/HomeTemplate'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RociFit</title>
        <meta name="description" content="Fitness application for my girlfriend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home
