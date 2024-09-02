import React from 'react'

function Card({title,firstpara,lastpara,children}) {
  const words = title.split(' ');

  // Join the first two words and the rest of the sentence with a line break in between
  const formattedSentence = `${words.slice(0, 2).join(' ')}<br />${words.slice(2).join(' ')}`;
  return (
    <div className="mx-auto flex flex-col w-full bg-[#191b21] ">
    <div className='w-full  flex flex-col gap-2 grow my-20 lg:my-32 mx-auto items-center  bg-[#191b21]'>
      <div>
     <p dangerouslySetInnerHTML={{ __html: formattedSentence }}  className='font-bold text-center text-white text-[52px] mb-7' />
     <p className=' text-center text-[#EBECF0] text-[20px] mx-auto max-w-3xl'>{firstpara}
      </p>
      </div>
      <div className='flex '>
        
<div className='text- bg-[#15171c] w-full h-auto flex flex-col'>

  <div className='w-full bg-[#22262e] rounded-t-lg ' >
    <h3 className='text-[#99A1B3] my-1 mx-5 text-sm'>Video.js</h3>
  </div>
  <div className='bg-[#15171c] p-10'>
    <div><p className='text-[#99A1B3] '>
       <span>function</span>
       <span> Video</span>
       <span>&#40;&#123;</span>
       <span> video </span>
       <span>&#125;&#41;</span>
       <span> &#123;</span>
       </p>
       </div>

    <div>
      <p className='text-[#99A1B3] '>
       <span>return</span>
       <span>  &#40;</span>
       </p>
    </div>

    <div>
      <p className='text-[#99A1B3] '>
       <span>&#60;div&#62;</span>
       </p>
    </div>
    <div>
      <p className='text-[#99A1B3] '>
       <span>&#60;</span>
       <span> Thumbnail</span>
       <span>video</span>
       <span> =&#123;video&#125;&#47;&#62; </span>
       </p>
    </div>

    <div>  
    <p className='text-[#99A1B3] '>
    <span >&lt;</span>
    <span >a</span>
     <span>href</span>
     =<span ></span>
     <span >video</span>.
     <span >url</span>
     <span ></span>
     <span>&gt;</span>
     </p>
     </div>



<div>   
  <p className='text-[#99A1B3]'>
<span>&lt;</span>
<span>h3</span>
<span>&gt;</span>
<span>
  </span>
  <span>video</span>.
  <span>title</span>
  <span></span>
  <span>&lt;/</span>
  <span >h3</span>
  <span>&gt;</span>
  </p>
  </div>

<div>   
  <p className='text-[#99A1B3]'>
<span>&lt;</span>
<span>p</span>
<span>&gt;</span>
<span>
  </span>
  <span>video</span>.
  <span>description</span>
  <span></span>
  <span>&lt;/</span>
  <span >p</span>
  <span>&gt;</span>
  </p>
  </div>
<div>   
  <p className='text-[#99A1B3]'>
<span>&lt;</span>
<span>&#47;a</span>
<span>&gt;</span>
  </p>
  </div>

  <div>
      <p className='text-[#99A1B3] '>
       <span>&#60;</span>
       <span> LikeButton </span>
       <span>video</span>
       <span> =&#123;video&#125;&#47;&#62; </span>
       </p>
    </div>

    <div>   
  <p className='text-[#99A1B3]'>
<span>&lt;</span>
<span>&#47;div</span>
<span>&gt;</span>
  </p>
  </div>


     </div>



</div>

<div className='text-white bg-[#18364a] rounded-r-xl'>
  
  
<div className='p-4'>
  <div className="flex flex-row items-center gap-3 p-10">
    <a className=" aspect-video w-32 xs:w-36 select-none flex-col  rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-50 via-blue-50 to-purple-60">
    <svg className="drop-shadow-xl" width="36" height="36" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z" fill="currentColor"></path></svg></a>
    <a target="_blank" rel="noreferrer" className="outline-link dark:outline-link outline-offset-4 group flex flex-col flex-1 gap-0.5" data-hover="a"><h3 className="text-base leading-tight text-primary font-bold" data-hover="h3">My video</h3><p className="text-tertiary text-sm leading-snug" data-hover="p">Video description</p>
    </a><button data-hover="LikeButton" className="outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 text-tertiary" aria-label="Save"><svg className="absolute overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="text-red-50/50 origin-center transition-all ease-in-out" cx="12" cy="12" r="11.5" fill="transparent" strokeWidth="0" stroke="currentColor"></circle></svg>
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m12 5.184-.808-.771-.004-.004C11.065 4.299 8.522 2.003 6 2.003c-3.736 0-6 2.558-6 6.677 0 4.47 5.471 9.848 10 13.079.602.43 1.187.82 1.74 1.167A.497.497 0 0 0 12 23v-.003c.09 0 .182-.026.26-.074C16.977 19.97 24 13.737 24 8.677 24 4.557 21.743 2 18 2c-2.569 0-5.166 2.387-5.192 2.413L12 5.184zm-.002 15.525c2.071-1.388 4.477-3.342 6.427-5.47C20.72 12.733 22 10.401 22 8.677c0-1.708-.466-2.855-1.087-3.55C20.316 4.459 19.392 4 18 4c-.726 0-1.63.364-2.5.9-.67.412-1.148.82-1.266.92-.03.025-.037.031-.019.014l-.013.013L12 7.949 9.832 5.88a10.08 10.08 0 0 0-1.33-.977C7.633 4.367 6.728 4.003 6 4.003c-1.388 0-2.312.459-2.91 1.128C2.466 5.826 2 6.974 2 8.68c0 1.726 1.28 4.058 3.575 6.563 1.948 2.127 4.352 4.078 6.423 5.466z" fill="currentColor"></path></svg></button>
    </div>
  <div className="flex flex-row items-center gap-3 p-10">
    <a className=" aspect-video w-32 xs:w-36 select-none flex-col  rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-50 via-blue-50 to-purple-60">
    <svg className="drop-shadow-xl" width="36" height="36" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z" fill="currentColor"></path></svg></a>
    <a target="_blank" rel="noreferrer" className="outline-link dark:outline-link outline-offset-4 group flex flex-col flex-1 gap-0.5" data-hover="a"><h3 className="text-base leading-tight text-primary font-bold" data-hover="h3">My video</h3><p className="text-tertiary text-sm leading-snug" data-hover="p">Video description</p>
    </a><button data-hover="LikeButton" className="outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 text-tertiary" aria-label="Save"><svg className="absolute overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="text-red-50/50 origin-center transition-all ease-in-out" cx="12" cy="12" r="11.5" fill="transparent" strokeWidth="0" stroke="currentColor"></circle></svg>
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m12 5.184-.808-.771-.004-.004C11.065 4.299 8.522 2.003 6 2.003c-3.736 0-6 2.558-6 6.677 0 4.47 5.471 9.848 10 13.079.602.43 1.187.82 1.74 1.167A.497.497 0 0 0 12 23v-.003c.09 0 .182-.026.26-.074C16.977 19.97 24 13.737 24 8.677 24 4.557 21.743 2 18 2c-2.569 0-5.166 2.387-5.192 2.413L12 5.184zm-.002 15.525c2.071-1.388 4.477-3.342 6.427-5.47C20.72 12.733 22 10.401 22 8.677c0-1.708-.466-2.855-1.087-3.55C20.316 4.459 19.392 4 18 4c-.726 0-1.63.364-2.5.9-.67.412-1.148.82-1.266.92-.03.025-.037.031-.019.014l-.013.013L12 7.949 9.832 5.88a10.08 10.08 0 0 0-1.33-.977C7.633 4.367 6.728 4.003 6 4.003c-1.388 0-2.312.459-2.91 1.128C2.466 5.826 2 6.974 2 8.68c0 1.726 1.28 4.058 3.575 6.563 1.948 2.127 4.352 4.078 6.423 5.466z" fill="currentColor"></path></svg></button>
    </div>
</div>
  
  </div>


      </div>


      <div>
        <p className=' text-center text-[20px] text-[#EBECF0] max-w-3xl'>{lastpara}</p>
      </div>
      {children && <div>{children}</div>}
    </div>

    </div>
  )
}

export default Card
