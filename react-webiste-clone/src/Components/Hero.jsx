import React from 'react'
import logo from '../assets/logo_dark.svg'; 
function Hero() {
  return (
    <div className='flex items-center justify-center w-full  h-screen bg-[#23272f] '>
    
      <div className='mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center items-center'>
      <img src={logo} alt='react-logo' className='p-1 w-32 h-32'/>
     <p className='text-[#F6F7F9] text-[52px] font-semibold'>React</p>
     <p className='text-[#F6F7F9] text-[32px] py-4 font-semibold'>The library for web and native user interfaces</p>
     
      </div>
      <button>This is a button</button>
    </div>
  )
}

export default Hero
