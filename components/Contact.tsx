import React from 'react'
import { MdEmail, MdCall } from 'react-icons/md'
import { ImLocation2 } from 'react-icons/im'


export default function Contact() {
  return (
      <div className=" font-Poppins" id="contact">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full my-16">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
        Contact me
      </h3>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-lg py-5'>
        {/* first column */}
        <div className='text-primary gap-5'>
            <div>Get a question or proposal, or just want to say Hello? Please go ahead </div>
          <div className='flex items-center gap-5'>
              <div><MdEmail className='h-6 w-6 text-secondary'/></div>
            <h2>jibrilmohammed39@gmail.com</h2>
          </div>
            <div className='flex items-center gap-5'>
              <div><ImLocation2 className='h-6 w-6 text-secondary' /></div>
            <h2>NO. 2G Sani Street Off Catholic Church Ado, Karu L.G.A, Nasarawa State.</h2>
          </div>
            <div className='flex items-center gap-5'>
              <div><MdCall className='h-6 w-6 text-secondary' /></div>
            <h2>+234 8034074748, +234 7082227861</h2>
          </div>
        </div>
        <div>
          <label htmlFor="">
            
            </label> 
            <input type="text" name="name" className="mt-1  appearance-none px-3 py-2 bg-white border-none shadow-sm placeholder:bg-transparent focus:outline-none focus:border-secondary focus:ring-secondary  w-full rounded sm:text-sm focus:ring-1" placeholder="Enter Full Name" />
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-secondary  w-full rounded sm:text-sm focus:ring-1" placeholder="Enter Email Address" />
            <input type="text" name="subject" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-secondary  w-full rounded sm:text-sm focus:ring-1" placeholder="Enter Message" />

        </div>
      </div>
      </div>
      </div>
  )
}
