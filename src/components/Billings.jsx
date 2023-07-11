import React from 'react'
import { bill,google,apple } from '../assets'

export default function Billings() {
  return (
    <section className='px-5 mx-auto py-10 md:px-2 md:py-5'>
      <div className='flex flex-col md:flex-row  justify-between items-center'>
        <div className='w-1/2 '>
          <img src={bill}/>
        </div>
        <div className='p-2 m-4 text-white'>
          <h1 className='text-6xl px-4 py-5 mx-6 my-4 text-balance'>Easily control your billing & invoicing.</h1>
          <p className='text-lg px-4 py-5 mx-6 my-4'>Please Download our application from playstore or Appstore</p>
          <div className='flex flex-row px-4 py-5 mx-6 my-4 justify-evenly'>
            <img src={google}/>
            <img src={apple}/>
          </div>
        </div>
      </div>
    </section>
  )
}
