import React from 'react'

const AnimatedCard = () => {
  return (
    <div className={`bg-[#191b21] mx-auto flex flex-col w-full  `}>
    <div className= {`bg-[#191b21] 'w-full  flex flex-col gap-2 grow my-20 lg:my-32 mx-auto items-center `}>
      <div>
     <p   className='font-bold text-center text-white text-[52px] mb-7' > Join a community <br/>
     of millions</p>
     <p className=' text-center text-[#EBECF0] text-[20px] mx-auto max-w-3xl'>You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.
      </p>
      </div>
      <div className="relative flex overflow-hidden w-auto my-4">
  <div className="animate-moveLeftRight flex">
    <PhotoCard image={"https://react.dev/images/home/community/react_conf_hallway.webp"} />
    <PhotoCard image={"https://react.dev/images/home/community/react_india_selfie.webp"} />
    <PhotoCard image={"https://react.dev/images/home/community/react_india_sunil.webp"} />
    <PhotoCard image={"https://react.dev/images/home/community/react_india_team.webp"} />
    <PhotoCard image={"https://react.dev/images/home/community/react_conf_elizabet.webp"} />
    <PhotoCard image={"https://react.dev/images/home/community/react_india_hallway.webp"} />
  </div>
</div>


      <div>
        <p className=' text-center text-[20px] text-[#EBECF0] max-w-3xl'>This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
      </div>
    </div>

    </div>
  )
}

const PhotoCard= ({image}) =>{
    return (
<div className='py-0 px-[20px] aspect-[4/3] h-full w-full flex  rounded-2xl bg-transparent rotate-2 transform transition-all duration-300 hover:-rotate-2 hover:scale-110 '>

   <img src={image} alt="photo" className='w-full h-full object-cover rounded-2xl ' />

</div>
    );
}

export default AnimatedCard
