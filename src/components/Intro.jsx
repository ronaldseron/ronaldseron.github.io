import React, { useRef } from 'react'
import ExtendLine from './ExtendLine';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import github from "../assets/socials/github.png";
import gmail from "../assets/socials/gmail.png";
import linkedin from "../assets/socials/linkedin.png";

const Intro = () => {
    const fadeRef1 = useRef(null);

    useFadeInOnScroll(fadeRef1);

    const socials = [
        { image: gmail, name: "Gmail", socialName: "seronronalddalida@gmail.com" },
        { image: github, name: "Github", socialName: "ronaldseron" }, 
        { image: linkedin, name: "LinkedIn", socialName: "ronald-seron" },
    ];
    
    return (
        <div className=''>
            <div className='w-full flex flex-col bg-white'>
                <div className="flex flex-col justify-center items-start md:gap-5 sm:gap-3 gap-2 sm:mb-5 mb-3 sm:px-8 px-4">
                    <div className="relative flex items-center justify-center">
                        {/* <Border /> */}
                        <ExtendLine />
                        <div className="flex-1 flex sm:gap-2 gap-1 items-center justify-center bg-gray-100 sm:px-2 sm:py-1 px-1.5 py-0.5 rounded-full border border-line">
                        <div className="lg:w-2.5 lg:h-2.5 w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-primary font-semibold lg:text-sm sm:text-xs text-[11px]">Socials</p>
                        </div>
                    </div>
                    <div className="relative md:py-5 py-3">
                        <ExtendLine />
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                        Find Me Here
                        </h2>
                    </div>
                </div>
                <div ref={fadeRef1} className='w-full relative bg-tertiary p-1 sm:text-xl text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-light'>
                    {/* <ExtendLine /> */}
                    
                    {socials.map((src, index) => (
                        <div key={index} className='flex max-sm:flex-col-reverse sm:min-w-[200px] min-w-[100px] max-sm:h-24 sm:p-8 sm:justify-between justify-center items-center gap-2 bg-white outline outline-line rounded-sm'>
                            <div className='sm:h-full'>
                                <h1>{src.name}</h1>
                                <p className='text-sm mt-2 max-sm:hidden'>{src.socialName}</p>
                            </div>
                            <img src={src.image} alt={`img-${index}`} 
                            className='sm:w-15  w-7'/>
                        </div>
                    ))}
                        <div className='flex max-sm:flex-col-reverse sm:min-w-[200px] min-w-[100px] max-sm:h-24 sm:p-8 sm:justify-between justify-center items-center gap-2 bg-white outline outline-line rounded-sm'>
                            <div className='sm:h-full'>
                                <h1>Number</h1>
                                <p className='text-sm mt-2 max-sm:hidden'>09919067270</p>
                            </div>
                            <i className='bx bxs-phone sm:text-6xl text-3xl'></i> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;