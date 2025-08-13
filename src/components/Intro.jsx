import React, { useRef } from 'react'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);
    
    return (
        <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
            <div className='w-full flex items-center bg-white'>
                <div ref={fadeRef1} className='flex-1 flex flex-col items-center justify-center py-18 gap-4 h-full bg-tertiary fade-up border border-line px-3'>
                    <div className='text-base sm:text-center text-start w-full text-primary'>
                        <h1 className=''>(Email me to Collaborate)</h1>
                    </div>
                    <div className='md:text-5xl text-3xl sm:text-center text-start font-medium max-w-5xl text-primary'>
                        <h1>Fresh Graduate with Proven Web Dev Skills, Ready to Compete and Collaborate!</h1>
                    </div>
                    <div className='md:text-base text-sm sm:text-center text-start max-w-2xl text-secondary'>
                        <p>With hands-on freelancing experience and a passion for clean, scalable code, I’m prepared to adapt fast and contribute immediately.</p>
                    </div>
                    <a href="" className='w-full flex sm:justify-center justify-start items-center mt-4'>
                        <h1 className='border-b-2 border-primary'>Email Me</h1>
                        <i className='bx  bx-arrow-up-right-stroke text-xl'  ></i> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro;