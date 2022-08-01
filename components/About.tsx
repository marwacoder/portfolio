import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa'


export default function About() {
  return (
    <div className="max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto font-Poppins" id="aboutme">
          <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 md:gap-32 sm:grid-cols-2'>
              <div className='leading-normal'>
                  <div className='text-2xl py-5 lg:pt-10  lg:text-3xl xl:text-4xl'><h3 className='text-secondary'>Hi i&#39;m</h3>
                  <h2><span className='text-secondary font-bold'>Jibril</span> Mohammed</h2></div>
                  
                  <h1 className='text-primary text-3xl font-bold lg:text-4xl xl:text-5xl'>Software Engineer</h1>
                  <h4 className=' pt-5  lg:text-2xl xl:3xl'>Dedicated software engineer with 4+ years of commercial application development expertise.To produce creative and cutting-edge business solutions for the amazing suite of clients inside its worldwide reach, I&#39;m eager to join a growing team. In prior jobs, I reduced downtime by 25% and secured 98 percent project completion on schedule. In addition, a substantial process bottleneck was found and overcome, resulting in a 35 percent increase in coding efficiency.</h4>
        </div>
        <div>
           
          <div className=' max-w-sm -z-20 md:max-w-md relative'>
            
        <Image alt='pic'  src='/assets/images/image.png' width={'878px'} height={'1058px'}/>
        </div>
          <div className='h-40 w-20 md:h-35 md:h-35 gap-5 flex-col bg-secondary ml-72 md:ml-80 -mt-60 lg:ml-96  z-20  flex justify-center items-center rounded-full'>
            <FaGithub className=' cursor-pointer h-6 w-6 text-white-500'/>
            <FaLinkedin className='cursor-pointer h-6 w-6 text-white-500' />
            <FaGitlab className='cursor-pointer h-6 w-6 text-white-500' />
          </div>

        </div>
        
    </div>
      </div>
  )
}
