import React from 'react'
import { logo } from '../assets'
import { footerLinks } from '../constants'
import { socialMedia } from '../constants'
const Footer = () => {
  return (
    <footer className='text-white  bg-slate-950 w-full px-10 py-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start border-b-2 '>
        <div className='px-4 py-8'>

        <img src={logo} className='py-4'/>
        <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        {
          footerLinks.map(ele=>{
            return (
              <div className='flex flex-col'>
                <h1 className='text-lg font-bold py-2'>{ele.title}</h1>
                <div className='flex flex-col text-sm' >
                  {
                   ele.links.map(e=>{
                    return <a className='py-1 cursor-pointer'>{e.name}</a> 
                   })
                  }
                </div>
                </div>
            )
          })
        }

      </div>

      <div className=' text-white'>
        <div className='flex flex-row items-center justify-between'>

          <div>
          <p>copy rights. HooBank.All Rights Reserved</p>
          </div>

        <div className='flex flex-row items-center  '>
         {
          socialMedia.map(e=>{
            return <a href={e.link} target='_blank'><img src={e.icon} className='px-2 py-4 fill-white'/></a>
          })
         }
        </div>
          

        </div>
       
      </div>
      
    </footer>
  )
}

export default Footer
