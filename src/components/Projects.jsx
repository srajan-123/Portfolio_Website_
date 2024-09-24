import React from 'react'
// import project1 from '../assets/project1.png'
import { PROJECTS } from '../constant/data'

function Projects() {
  return (
    <div className='border-b border-neutral-900'>
        <h1 className='text-6xl text-center text-white my-16'>My Projects</h1>

      
          
            <div >
                { 
                PROJECTS.map( (project,index)=>(
                    
                   
                    <div key={index} className='flex flex-wrap lg:justify-center items-center m-14  '>

                         <div className='w-full h-full lg:w-1/4 rounded-md   transition-all duration-300 ease-in-out hover:scale-110'>
                        <img src={project.image} height={200} width={200} className='object-cover' alt="" />
                        </div> 

                        <div className='w-full lg:w-3/4 h-full overflow-hidden'>
                        <h6 className='mb-4 font-semibold text-white  '>{project.title}</h6>
                        <p className='text-neutral-500 mb-4'>{project.description}</p>

                        {  project.technologies.map( (tech,index) => (
                            <span key={index} className=' rounded mr-2  bg-neutral-900 px-2 py-1
                            text-sm font-medium text-purple-900 '> {tech}</span>

                        ))}

                        </div>

                    </div>


                    
                   
                    
               )) }


            </div>
    
    </div>
  )}

export default Projects