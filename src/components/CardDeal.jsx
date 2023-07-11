import React from 'react'
import { card } from '../assets'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className='container mx-auto py-20'>
      <div className='flex flex-row justify-between items-center text-white '>
        <div className='mx-4 px-4'>
          <h1 className='text-6xl px-4 mx-4'>Find a better card deal in few easy steps.</h1>
          <p className='text-lg px-4 mx-4 py-4'>Download our App on playstore or Appstore and Start the payment with modern application</p>
          <Button styles={`px-8 mx-8`}/>
        </div>

        <div className='px-4 mx-4'>
          <img src={card}/>
        </div>
      </div>
    </section>
  )
}

export default CardDeal
