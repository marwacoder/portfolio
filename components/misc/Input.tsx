import React from 'react'
import * as types from '../../typings' 


export default function CustomInput({ valueType, elementType, value, label, changed }:types.IInputField) {
  let inputElement = null;
  let validationError = `Please enter a valid ${valueType}`;
  switch(elementType){
    case 'input': 
      inputElement = <input onChange={changed} value={value} type="text" name="subject" 
      className="mt-1 bg-transparent px-3 
      
      py-2 my-2 bg-white border shadow-sm border-slate-300
       placeholder-slate-400 focus:outline-none
        focus:border-secondary focus:ring-secondary 
         w-full rounded sm:text-sm focus:ring-1" 
         placeholder={label} />
         break;
         case 'textarea': 
      inputElement = <textarea onChange={changed} value={value} className="form-textarea mt-4 
      px-3 py-4 bg-transparent bg-white border shadow-sm
       border-slate-300 placeholder-slate-400 
       focus:outline-none  focus:border-secondary
        focus:ring-secondary  w-full rounded sm:text-sm 
        focus:ring-1" rows={3} placeholder={label}/>
        break;
        default: 
      inputElement = <input onChange={changed} type="text" name="subject" value={value}
        className="mt-1 bg-transparent px-3 
      py-2 my-2 bg-white border shadow-sm border-slate-300
       placeholder-slate-400 focus:outline-none
        focus:border-secondary focus:ring-secondary 
         w-full rounded sm:text-sm focus:ring-1"
        placeholder={label}/>

  }
  return (
    <div>
      {inputElement}
    </div>
  )
}
