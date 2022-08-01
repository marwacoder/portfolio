import React from 'react';
import {IButton} from '../../typings'


export default function CustomButton({onClick, addClass, children, icon}:IButton) {
  return (
    <>
    <button  onClick={onClick} className={`font-medium flex items-center tracking-wide py-2 px-5 sm:px-8 border border-secondary  outline-none capitalize   transition-all hover:shadow-primary ${addClass}`}>
      
        {children}{" "}{icon}
        
    </button>
    </>
  )

}
