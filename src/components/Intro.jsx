import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ExtendLine from './ExtendLine';
import { scrollAnimations } from "../hooks/useFadeInOnScroll";
import github from "../assets/socials/github.png";
import gmail from "../assets/socials/gmail.png";
import linkedin from "../assets/socials/linkedin.png";

const Intro = () => {

    const socials = [
        { image: gmail, name: "Gmail", socialName: "seronronalddalida@gmail.com" },
        { image: github, name: "Github", socialName: "ronaldseron" }, 
        { image: linkedin, name: "LinkedIn", socialName: "ronald-seron" },
    ];
    
    return (
        <div className=''>
            <div className='w-full flex flex-col bg-white'>
                <div className="flex flex-col justify-center items-start sm:px-8 px-4">
                    <div className=" relative flex items-center gap-2 bg-tertiary md:px-3 md:py-1.5 px-2 py-1 rounded-full border border-line ">
                        <ExtendLine />
                        <div className=" w-2 h-2 bg-primary rounded-full"></div>
                        <p className=" text-primary font-medium lg:text-sm text-xs">
                            MY SOCIALS
                        </p>
                    </div>
                    <div className="relative md:py-5 py-3">

                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                        Find Me Here
                        </h2>
                    </div>
                </div>
                <div className='w-full relative bg-tertiary p-1 sm:text-xl text-sm grid bp-4:grid-cols-4 grid-cols-2 gap-1 font-light'>
                    <ExtendLine />
                    
                    {socials.map((src, index) => (
                        <div 
                        key={index} 
                        className=' sm:min-w-[200px] min-w-[100px] max-sm:h-24 hover:z-50 z-40 cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-2xl duration-300 transition-transform'
                        >
                            <motion.div 
                            {...scrollAnimations.card(index)}
                            className='h-full bg-white flex max-md:flex-col-reverse sm:p-8 sm:justify-between justify-center items-center gap-2  outline outline-line rounded-sm'>
                                <div
                                className='sm:h-full'>
                                    <h1>{src.name}</h1>
                                    <p className='text-sm mt-2 max-md:hidden'>{src.socialName}</p>
                                </div>
                                <motion.img
                                src={src.image} alt={`img-${index}`} 
                                className='md:w-15 sm:w-12  w-7'
                                />
                            </motion.div>
                        </div>
                    ))}
                        <div className='sm:min-w-[200px] min-w-[100px] max-sm:h-24 hover:z-50 z-40 cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-2xl duration-300 transition-transform'>
                            <motion.div
                            {...scrollAnimations.card(4)}
                            className='h-full bg-white flex max-md:flex-col-reverse sm:p-8 sm:justify-between justify-center items-center gap-2  outline outline-line rounded-sm'>
                                <div className='sm:h-full'>
                                    <h1>Number</h1>
                                    <p className='text-sm mt-2 max-md:hidden'>09919067270</p>
                                </div>
                                <i className='bx bxs-phone md:text-6xl sm:text-5xl text-3xl'></i> 
                            </motion.div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;