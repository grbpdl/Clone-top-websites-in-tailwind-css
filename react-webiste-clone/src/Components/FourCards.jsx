import React from 'react'

function FourCards() {
  return (
    <div className='w-full   bg-[#191b21] flex gap-5 px-5 '>
     <div className='flex flex-col w-1/2 items-start justify-start p-5'>
<h2 className='font-bold text-[52px] text-white mb-7 text-left'>
Upgrade when <br/> the future is <br/> ready
</h2>
<p className='text-[#EBECF0] text-[20px] mx-auto max-w-3xl text-left mt-4'>
React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
</p>
<p className='text-[#EBECF0] text-[20px] mx-auto max-w-3xl text-left mt-4'>
The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
</p>
     </div>


<div className='w-1/2'>
<p className='uppercase text-[#EBECF0] p-5 mt-5 font-semibold'>Latest React News</p>
<div className='grid grid-cols-2 gap-5 my-5'>
<CardComponent title={'React Conf 2024 Recap'} date={'May 22, 2024'}/>
<CardComponent title={'React 19 RC'} date={'April 25, 2024'}/>
<CardComponent title={'React 19 RC Update Guide'} date={'April 25, 2024'}/>
<CardComponent title={'React Labs:Feb 24'} date={'Feb 15, 2024'}/>

</div>

</div>

    </div>
  )
}

const CardComponent = ({title,date}) => {
    return (
        <div className='flex flex-col border border-white rounded-3xl p-5'>
            <h2 className="font-semibold flex-1 text-2xl lg:text-3xl hover:underline leading-snug mb-4 text-white">{title}</h2>
            <div class="flex flex-row justify-start gap-2 items-center text-base text-white"><svg className="w-6 h-6 text-tertiary dark:text-tertiary-dark" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.7101 56.3758C13.0724 56.7251 13.6324 57 14.3887 57H57.6113C58.3676 57 58.9276 56.7251 59.2899 56.3758C59.6438 56.0346 59.8987 55.5407 59.9086 54.864C59.9354 53.022 59.9591 50.7633 59.9756 48H12.0244C12.0409 50.7633 12.0645 53.022 12.0914 54.864C12.1013 55.5407 12.3562 56.0346 12.7101 56.3758ZM12.0024 42H59.9976C59.9992 41.0437 60 40.0444 60 39C60 29.5762 59.9327 22.5857 59.8589 17.7547C59.8359 16.2516 58.6168 15 56.9938 15L15.0062 15C13.3832 15 12.1641 16.2516 12.1411 17.7547C12.0673 22.5857 12 29.5762 12 39C12 40.0444 12.0008 41.0437 12.0024 42ZM65.8582 17.6631C65.7843 12.8227 61.8348 9 56.9938 9H15.0062C10.1652 9 6.21572 12.8227 6.1418 17.6631C6.06753 22.5266 6 29.5477 6 39C6 46.2639 6.03988 51.3741 6.09205 54.9515C6.15893 59.537 9.80278 63 14.3887 63H57.6113C62.1972 63 65.8411 59.537 65.9079 54.9515C65.9601 51.3741 66 46.2639 66 39C66 29.5477 65.9325 22.5266 65.8582 17.6631ZM39 21C37.3431 21 36 22.3431 36 24C36 25.6569 37.3431 27 39 27H51C52.6569 27 54 25.6569 54 24C54 22.3431 52.6569 21 51 21H39ZM36 33C36 31.3431 37.3431 30 39 30H51C52.6569 30 54 31.3431 54 33C54 34.6569 52.6569 36 51 36H39C37.3431 36 36 34.6569 36 33ZM24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z" fill="currentColor"></path></svg>{date}</div>
        </div>
    )
  };

export default FourCards
