import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const FeedbackCard = () => {
  return (
    <section className='container mx-auto text-white py-10'>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8'>
      {
        feedback.map(ele=>{
          return (
            <div className='w-[220px] p-4 rounded-xl hover:bg-slate-800 '>
              <img src={quotes} className=''/>
              <p className='py-6 text-lg font-poppins'>{ele.content}</p>
              <div className='flex flex-row justify-start items-center'>
                <img src={ele.img} className='h-[40px] mr-4'/>
                <div>
                <h1>{ele.name}</h1>
                <p className='text-xs'>{ele.title}</p>
                </div>

                </div>

            </div>
          )
        })
      }

    </div>
  </section>
  )
}

export default FeedbackCard
