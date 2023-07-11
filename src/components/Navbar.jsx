import React ,{useState}from 'react'
import { logo } from '../assets'
import { navLinks } from '../constants'
import { menu ,close} from '../assets'

function Navbar() {
  const [isOpen , setIsOpen]= useState(false)

  const handleScroll=(id)=>{

    if(id=='home'){

      window.scroll({
        top: 100,
        left: 0,
        behavior: "smooth",
      });
    }
    else if(id=='features'){
      window.scroll({
        top: 1900,
        left: 0,
        behavior: "smooth",
      });

    }
    else if(id=='product'){
      window.scroll({
        top: 3700,
        left: 0,
        behavior: "smooth",
      });

    }
    else {
      window.scroll({
        top: 4500,
        left: 0,
        behavior: "smooth",
      });

    }
  }
  return (
    <nav className=' w-full flex py-6 justify-between items-center navbar'>
    
            <img src={logo} className='h-[32px] w-[124px]'/>
            <div className='sm:flex hidden'>
                {
                    navLinks.map(ele=>{
                        return (
                            <a className=' px-3 mx-3 text-white cursor-pointer' onClick={()=>handleScroll(ele.id)}>{ele.id} </a>
                        )
                    })
                }
            </div>
            <div className='sm:hidden flex cursor-pointer justify-end'>
              {
                isOpen ? <img src={close} alt="" onClick={()=>{
                  setIsOpen(!isOpen)
                }}/> : <img src={menu} alt="" onClick={()=>setIsOpen(!isOpen)}/>
              }
              

            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} text-white bg-slate-900 absolute top-20 right-0 px-2 mx-2 rounded-xl`}>
            <div className='flex flex-col flex-1'>
                {
                    navLinks.map(ele=>{
                        return (
                            <a className='font-poppins  mb-2 text-white p-1  cursor-pointer'>{ele.id}</a>
                        )
                    })
                }
            </div>
              

            </div>
        

    </nav>
  )
}

export default Navbar
