import React from 'react'
import logo from '../assets/logo_dark.svg'; 

function FooterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-[#23272f] '>
    
    <div className='mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center items-center'>
    <img src={logo} alt='react-logo' className='p-1 w-32 h-32'/>
   <p className='text-[#F6F7F9] text-[52px] font-semibold'>Welcome to the <br/>
   React community</p>
   
   <div className='mt-5'>
    <a href='#' className='bg-[#61dbfb] rounded-full p-2 m-1 text-[#000] font-semibold'>Get Started</a>
    </div>
    </div>
   <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 max-w-7xl mx-auto mb-5'>
    <div className=' flex flex-col col-span-2 md:col-span-1 justify-items-start mt-3.5'>
       <a href="#" className='text-white hover:underline'>Meta Open Source</a> 
       <a href="#" className='text-white hover:underline'>&copy;2024</a> 
       <a href="#" className='text-white hover:underline'>no uwu plz</a> 
       <a href="#" className='text-white hover:underline'>Logo by@sawaratsuki1004</a> 
    </div>
    <div className=' flex flex-col col-span-2 md:col-span-1 justify-items-start mt-3.5'>
       <a href="#" className='text-white hover:underline font-semibold'>Learn React</a> 
       <a href="#" className='text-white hover:underline'>Quick Start</a> 
       <a href="#" className='text-white hover:underline'>Installation</a> 
       <a href="#" className='text-white hover:underline'>Describing the UI</a> 
       <a href="#" className='text-white hover:underline'>Adding Interactivity</a> 
       <a href="#" className='text-white hover:underline'>Adding Interactivity  </a> 
       <a href="#" className='text-white hover:underline'>Escape Hatches  </a> 
    </div>
    <div className=' flex flex-col col-span-2 md:col-span-1 justify-items-start mt-3.5'>
       <a href="#" className='text-white hover:underline font-semibold'>API Reference</a> 
       <a href="#" className='text-white hover:underline'>React APIs</a> 
       <a href="#" className='text-white hover:underline'>React DOM APIs</a> 
    </div>
    <div className=' flex flex-col col-span-2 md:col-span-1 justify-items-start mt-3.5'>
       <a href="#" className='text-white hover:underline font-semibold '>Community</a> 
       <a href="#" className='text-white hover:underline'>Code of Conduct</a> 
       <a href="#" className='text-white hover:underline'>Meet the team</a> 
       <a href="#" className='text-white hover:underline'>Docs Contributor</a> 
       <a href="#" className='text-white hover:underline'>Acknowledgements</a> 
    </div>
    <div className=' flex flex-col col-span-2 md:col-span-1 justify-items-start mt-3.5'>
       <a href="#" className='text-white hover:underline font-semibold'>More</a> 
       <a href="#" className='text-white hover:underline'>Blog</a> 
       <a href="#" className='text-white hover:underline'>React native</a> 
       <a href="#" className='text-white hover:underline'>Privacy</a> 
       <a href="#" className='text-white hover:underline'>Terms</a> 


       <div className="flex flex-row items-center mt-8 gap-x-2"><a href="https://www.facebook.com/react" target="_blank" rel="noopener" aria-label="React on Facebook" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.33em" height="1.33em" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></svg></a><a href="https://twitter.com/reactjs" target="_blank" rel="noopener" aria-label="React on Twitter" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1.30em" width="1.30em" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a><a href="https://github.com/facebook/react" className='text-white' target="_blank" rel="noopener" aria-label="React on Github" class="hover:text-primary dark:text-primary-dark"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 -2 24 24" fill="currentColor"><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg></a></div>
    </div>
   </div>
  </div>
  )
}

export default FooterPage
