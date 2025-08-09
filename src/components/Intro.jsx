import React, { useRef } from 'react'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);
    
    return (
        <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 border-x-2 border-gray-200 bg-transparent'>
            <div ref={fadeRef1} className='w-full h-82 flex items-center p-2 border-x-2 border-line bg-gray-100 fade-up'>
                <div className='flex-1 h-full bg-black rounded-lg'></div>
            </div>
        </div>
    )
}

export default Intro;