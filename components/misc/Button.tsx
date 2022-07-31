import React from 'react';
import {IButton} from '../../typings'
import { GoCloudDownload } from 'react-icons/go'

export default function CustomButton({onClick, addClass, children}:IButton) {
  return (
    <>
    <button  onClick={onClick} className={`font-medium flex items-center tracking-wide py-2 px-5 sm:px-8 border border-secondary  outline-none rounded-l-full rounded-r-full capitalize   transition-all hover:shadow-primary ${addClass}`}>
      
        {children}{" "}<GoCloudDownload  width={35} height={35} />
        
    </button>
    </>
  )

}
