import React,{useState} from 'react'
import { MdEmail, MdCall } from 'react-icons/md'
import { ImLocation2 } from 'react-icons/im'
import Input from './misc/Input'
import Button from './misc/Button'

export default function Contact() {

  const [field, setField] = useState([{
    value: '',
    elementType: '',
    valueType: ''
  }])


  function onChangeHandler(){

  }
  return (
      <div className=" font-Poppins" id="contact">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full my-10">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
        Contact me
      </h3>
      </div>
        <div className='text-left grid grid-cols-1 md:grid-cols-2 gap-3  py-5'>
        {/* first column */}
        <div className='text-primary  gap-3'>
            <div className=' font-bold my-5'>Get a question or proposal, or just want to say Hello? Please go ahead </div>
            <div className='flex gap-3'>
              <div><MdEmail className='h-6 w-6 text-secondary'/></div>
            <h2>jibrilmohammed39@gmail.com</h2>
          </div>
            <div className='flex gap-3'>
              <div><ImLocation2 className='h-6 w-6 text-secondary' /></div>
            <h2>NO. 2G Sani Street Off Catholic Church Ado, Karu L.G.A, Nasarawa State.</h2>
          </div>
            <div className='flex gap-3'>
              <div><MdCall className='h-6 w-6 text-secondary' /></div>
            <h2>+234 8034074748, +234 7082227861</h2>
          </div>
        </div>
        <div>
          <label htmlFor="">
            
            </label> 
            <form action="">
              <Input changed={onChangeHandler} elementType='input' value='' valueType='' label='Enter Full Name' />
              <Input changed={onChangeHandler} elementType='input' value='' valueType='' label='Enter Email Address' />
              <Input changed={onChangeHandler} elementType='textarea' value='' valueType='' label='Enter Message' />
              <button className='font-medium flex items-center tracking-wide py-3 my-3 px-5 sm:px-8 border bg-primary hover:bg-secondary text-white-500  outline-none rounded-l-full rounded-r-full capitalize   transition-all hover:shadow-primary' onClick={() => ''}>Send Message</button>

            </form>
            </div>
      </div>
      </div>
      </div>
  )
}
