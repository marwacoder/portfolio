import type { NextPage } from 'next'
import Head from "next/head";
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jibril&#39;s portfolio</title>
        <link rel="icon" href="/ico.ico" />
      </Head>
      <div className='bg-gradient-to-r from-sky-blue to-to-white'>
    <Layout>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </Layout>
      </div>
    </>
  )
}

export default Home
