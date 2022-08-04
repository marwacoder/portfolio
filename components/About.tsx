import Image from 'next/image'
import React,{useEffect, useRef} from 'react'
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa'
import { useScroll, motion } from "framer-motion"

export default function About() {

  const { scrollY } = useScroll()
  const scrollRef = useRef(null)
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })
  }, [])
  return (
    
    <div className="max-w-screen-xl mt-36 mb-12 px-8 xl:px-16 mx-auto font-Poppins" id="aboutme">
          <div className='grid grid-cols-1 md:grid-cols-2 '>
              <div className='leading-normal'>
                  <div className=' py-2 md:py-5 lg:pt-10 '><h3 className='text-secondary md:text-5xl'>Hi, i&#39;m</h3>
            <h2 className='font-bold text-sm md:text-4xl text-primary'><span className='text-secondary '>Jibril</span> Mohammed</h2></div>
                  <div className='text-primary'>
            <h1 className='text-primary text-xl font-bold md:text-5xl '>Software Engineer</h1>
            <h4 className=' pt-5 text-sm md:text-xl'>Dedicated software engineer with 4+ years of commercial application development expertise.To produce creative and cutting-edge business solutions for the amazing suite of clients inside its worldwide reach, I&#39;m eager to join a growing team. In prior jobs, I reduced downtime by 25% and secured 98 percent project completion on schedule. In addition, a substantial process bottleneck was found and overcome, resulting in a 35 percent increase in coding efficiency.</h4>

                  </div>
                  </div>
        <div className=' '>
           
          <div className=' max-w-fit -z-20 md:max-w-md relative'>
            
        <Image alt='pic'  src='/assets/images/image.png' width={'878px'} height={'1058px'}/>
        </div>
          <div className='h-40 w-16  md:h-35 md:h-35 gap-5 flex-col  shadow-lg bg-secondary xs:ml-72 sm:ml-80 md:ml-80 -mt-44 lg:ml-96  z-20  flex justify-center items-center rounded-full'>
            <FaGithub className=' cursor-pointer h-6 w-6 text-white-500'/>
            <FaLinkedin className='cursor-pointer h-6 w-6 text-white-500' />
            <FaGitlab className='cursor-pointer h-6 w-6 text-white-500' />
          </div>

        </div>
        
    </div>
      </div>
  )
}
