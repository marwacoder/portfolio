import type { NextPage } from 'next'
import Head from "next/head";
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import {motion} from 'framer-motion'



const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>jibril&#39;s portfolio</title>
        <link rel="icon" href="/assets/icons/icon.ico" />
      </Head>
    <Layout>
        <About/>
        <Resume/>
        <Portfolio/>
        <Education/>
        <Contact/>
    </Layout>
  
    </motion.div>
  )
}

export default Home
