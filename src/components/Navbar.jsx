import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className=' flex items-center justify-between py-6 mb-20 border-b border-neutral-600 w-full'>
       <Link to='/'><div><p className='text-neutral-400   text-6xl mx-4 font-extrabold  overflow-hidden'>SRAJAN</p></div></Link> 

        <div className='flex items-center justify-center m-8 gap-4 text-2xl text-white'> 
          <Link to='https://www.linkedin.com/in/srajan-rastogi-86574a261/' >  <FaLinkedin size={36} className='hover:text-blue-300' />  </Link>
           <Link to='https://github.com/srajan-123?tab=repositories' >   <FaGithub  size={36} className='hover:text-blue-300'/>  </Link> 
          <Link to='https://leetcode.com/u/srajan_12/' >  <SiLeetcode size={36} className='hover:text-blue-300'/>  </Link> 
          <Link to='https://www.geeksforgeeks.org/user/srajan_12/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'>
          <SiGeeksforgeeks size={39} className='hover:text-blue-300'/></Link>



            </div>
        
        </nav>
  )
}

export default Navbar