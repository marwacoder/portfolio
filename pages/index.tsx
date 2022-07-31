import type { NextPage } from 'next'
import Head from "next/head";
import About from '../components/About';
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jibril&#39; s portfolio</title>
        <link rel="icon" href="/ico.ico" />
      </Head>
    <Layout>
        <About/>
        
    </Layout>
    </>
  )
}

export default Home
