import React from 'react'
import profilepic from '../assets/srajan_img.jpg'

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4  lg:mb-35 w-full justify-center items-center mb-20 p-16' >
<div className='flex  justify-between '>

    {/* left */}
<div className=' w-[60%] m-12  ml-32 '>  
        <div className='flex flex-col  flex-wrap w-full '>

            <h1 className='pb-16 text-6xl font-thin lg:mt-16 lg:text-7xl text-white  overflow-hidden'>Srajan Rastogi</h1>

            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl 
            tracking-tight text-transparent overflow-hidden'>Front End Developer</span>

            <p className='my-2 tracking-tight font-light text-white w-1/2'>I am a passionate front end developer with a knack for crafting robust and
                 scalable web applications.I have honed my skills in front-end technologies 
                 like React and Tailwind CSS. My goal is to leverage 
                 my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
            </p>

        </div>

 </div>
 {/* right */}
 <div className='w-full lg:w-1/2'>
    <img src={profilepic} height={200} width={300} className='mr-20 object-cover' alt="" />
 </div>

  </div>


    </div>
  )
}

export default Hero