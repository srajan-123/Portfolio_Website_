import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
   
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] '>
      

      <div className='mx-auto px-8 container'>   < Navbar/>  </div>

      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      
      
      
      </div>
  )
}

export default App