import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className='container mx-auto py-10 '>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 md:gap-6 '>
      {
        clients.map(ele=>{
          return(
            <img src={ele.logo} className='py-4 h-[100px]  md:py-8 items-center'/>
          )
        })
      }

    </div>
   </section>
  )
}

export default Clients
