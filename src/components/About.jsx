import React from 'react'
import aboutme from '../assets/aboutme.avif'

function About() {
  return (
    
    <div className='mb-20  border-b border-neutral-800'>
    <h1 className='text-6xl text-center text-white my-14 m-20 p-16'>About Me</h1> 

    <div className='flex flex-wrap  justify-center items-center w-full gap-x-14  '>
       
      
      
        <div>
        <img src={aboutme} height={300} width={300} alt="" />
        </div>

        <div className='max-w-xl text-white m-5 p-5 tracking-tight mb-20'>
    I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. 
    I have worked with a variety of technologies, including React, Tailwind.
   My journey in web development began with a deep curiosity for how things work, and it has
     evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative 
     environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active,
      exploring new technologies.

       </div>

        </div>
            
    
        </div>
   
  )
}

export default About