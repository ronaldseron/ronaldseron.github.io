import React, { useRef } from 'react'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);
    
    return (
        <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
            <div className='w-full h-82 flex items-center bg-white'>
                <div ref={fadeRef1} className='flex-1 h-full bg-gray-200 fade-up border border-line'></div>
            </div>
        </div>
    )
}

export default Intro;