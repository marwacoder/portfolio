import React from 'react';
import {IButton} from '../../typings'


export default function CustomButton({onClick, addClass, children, icon}:IButton) {
  return (
    <div className={`flex items-center justify-center space-x-2 text-secondary hover:text-white-500  transition-all px-3 hover:bg-secondary hover:shadow-primary font-normal text-sm md:text-lg   tracking-wide py-2  border border-secondary  outline-none capitalize ${addClass}`}>
    <button  onClick={onClick}>
        {children}
    </button>
      {icon}
    </div>
  )

}
