import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";



function Technologies() {
  return (
    <div className='border-b border-neutral-800 flex flex-col  m-20 p-16'>
       <h1 className='text-6xl text-center text-white my-10 overflow-hidden'>Technologies</h1> 
      
        <div className=' flex flex-wrap items-center justify-center m-4 p-4 gap-4 mb-10'>

        <FaReact className='text-7xl text-cyan-400  rounded-2xl border-4 border-neutral-900 hover:scale-125 transition duration-300 ease-out' />
        <FaJs   className='text-7xl text-yellow-400 rounded-2xl border-4 border-neutral-900 hover:scale-125 transition duration-300 ease-out' />
        <RiTailwindCssFill className='text-7xl text-blue-400 rounded-2xl border-4 border-neutral-900  hover:scale-125 transition duration-300 ease-out'/>
        <FaHtml5  className='text-7xl text-orange-400 rounded-2xl border-4 border-neutral-900 hover:scale-125 transition duration-300 ease-out' />



        </div>
        
    
        
        
  </div>
  )
}

export default Technologies