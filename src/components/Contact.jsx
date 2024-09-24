import React from 'react'

function Contact() {
  return (
    <div className='border-b border-neutral-800 flex flex-col items-center justify-center m-20 p-16 mb-32'>

    <h1 className='text-6xl text-center text-white my-16 overflow-hidden'>Get In touch</h1> 
    <p className=' text-white  tracking-tight mt-10'>Jaypee Institute Of Information Technology, Noide-62 </p>
   <a href="tel:9936954787" className='text-blue-500  font-mono hover:text-blue-300 hover:underline mt-5'>+91 9936954787</a>
    <a href='mailto:srajanrastogi54@gmail.com' className='text-blue-500  hover:text-blue-300 hover:underline mb-10'>srajanrastogi54@gmail.com</a>

    </div>
  )
}

export default Contact