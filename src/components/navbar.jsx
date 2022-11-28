import React from 'react'
import plogo from "../assets/plogo.png"
import {BiHome} from "react-icons/bi"

const navbar = () => {
  return (
   
    <div className='my-4 mx-0 md:mx-1'>

        <div className='max-w-[1240px] mx-auto flex flex-col items-center md:flex-row justify-between'>
          <div className='flex items-center gap-2'>
            <img src={plogo} alt="" className='h-8'/>
            <h1 className='text-xl text-amber-300 font-extrabold'>Pinanse Blog</h1>
          </div>

          <div className=' py-6 md:py-0 flex flex-col md:flex-row gap-4'>
          
            
            <button className='flex items-center gap-1  border rounded-2xl px-8 py-1 font-bold text-blue-600 bg-white hover:bg-blue-600 hover:text-white duration-300'>
            <BiHome />
              Home</button>


              <button className=' items-center gap-1  border rounded-2xl px-8 py-1 font-bold text-white bg-blue-600 hover:bg-white hover:text-blue-600 duration-300'>
            
              Sign Up</button>
       

          </div>

        </div>

    </div>

    
  )
}

export default navbar