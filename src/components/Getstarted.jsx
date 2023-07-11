import React from 'react'
import { arrowUp } from '../assets'

const Getstarted = () => {
  return (
    <div className='cursor-pointer text-white'>
     <div className='rounded-[50%] border-[#49e0e5] border-2  h-[90px] w-[90px] p-2  flex-row text-center items-center justify-center'>
      <h1 className='text-sm '>Get <img src={arrowUp} alt="" className='flex items-center justify-center'/></h1>
      
      <h1>Started</h1>
     </div>
    </div>
  )
}

export default Getstarted
