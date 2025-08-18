import React, { useRef } from 'react'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import github from "../assets/socials/github.png";
import gmail from "../assets/socials/gmail.png";
import linkedin from "../assets/socials/linkedin.png";

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);

    const socials = [
        { image: gmail, name: "Gmail" },
        { image: github, name: "Github" }, 
        { image: linkedin, name: "LinkedIn" },
    ];
    
    return (
        <div className=' max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 bg-transparent'>
            <div className='w-full flex items-center bg-tertiary border border-line p-1'>
                <div ref={fadeRef1} className='w-full text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-light'>
                    {socials.map((src, index) => (
                        <div key={index} className='flex min-w-[200px] h-32 justify-center items-center gap-2 bg-white outline outline-line rounded-sm'>
                            <img src={src.image} alt={`img-${index}`} 
                            className='w-10'/>
                            <h1>{src.name}</h1>
                        </div>
                    ))}
                        <div className='flex min-w-[200px] h-32 justify-center items-center gap-2 bg-white outline outline-line rounded-sm'>
                            <i className='bx bxs-phone text-4xl'></i> 
                            <h1>Number</h1>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;