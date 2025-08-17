import React, { useRef } from 'react'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);
    
    return (
        <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
            <div className='w-full flex items-center bg-tertiary border border-line px-8 py-8'>
                <div ref={fadeRef1} className='flex-1 flex max-sm:flex-col gap-8 fade-up text-xl font-light'>
                    <div className='flex-1 flex justify-center items-center py-8 gap-2 outline outline-line bg-white'>
                        <img src={github} alt="" 
                        className='w-10'/>
                        <h1>Github</h1>
                    </div>
                    <div className='flex-1 flex justify-center items-center py-8 gap-2 outline outline-line bg-white'>
                        <img src={gmail} alt="" 
                        className='w-10'/>
                        <h1>Gmail</h1>
                    </div>
                    <div className='flex-1 flex justify-center items-center py-8 gap-2 outline outline-line bg-white'>
                        <img src={github} alt="" 
                        className='w-10'/>
                        <h1>Github</h1>
                    </div>
                    <div className='flex-1 flex justify-center items-center py-8 gap-2 outline outline-line bg-white'>
                        <img src={gmail} alt="" 
                        className='w-10'/>
                        <h1>Gmail</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;