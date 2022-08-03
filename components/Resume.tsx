import React from 'react'
import Slick from './misc/ReactSlick'

export default function Resume() {
  return (
    <div id="resume" className="font-Poppin w-full">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full mt-10">
          <h3 className="text-base md:text-2xl font-bold  leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Experience
          </h3>
      <div className="w-full flex flex-col py-12">
            <Slick/>
            </div>
            </div>
            </div>
      </div>
      
  )
}
