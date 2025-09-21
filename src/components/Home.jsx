import profilePic from "../assets/profile.png";
import TopBottomBorder from "./TopBottomBorder";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollAnimations } from "../hooks/useFadeInOnScroll";
import laravel from "../assets/skills/backend/laravel.svg";
import react from "../assets/skills/frontend/react.svg";
import vue from "../assets/skills/frontend/vue.svg";
import tailwind from "../assets/skills/frontend/tailwind.svg";

const Home = ({ showContent, isLoading, isMenuOpen, setIsMenuOpen }) => {
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isLoading && showContent) {
      const timer = setTimeout(() => {
        setIsHomeVisible(true);
      }, 200);
      return () => setTimeout(timer);
    }
  }, [isLoading, showContent]);

  return (
    <div
      id="hero"
      className=" flex flex-col justify-center  z-10 relative"
    >

      {/* Mobilie Menu Bar */}
        {/* {isMenuOpen && (
          <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-white shadow-md px-4 py-2 z-40">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">
              About
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">
              Contact
            </a>
          </div>
        )} */}
      
      <div className="relative flex-1 md:py-34 pt-24 pb-20 flex items-center gap-8  bg-white ">

            <motion.div
            {...scrollAnimations.card(6)}
            className="absolute right-60 top-10 hide-pic:block hidden z-10">
                <div
                    className={`flex-1 h-full flex justify-center items-center transition-all duration-700 px-4 bg-transparent ${
                    isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-[100px] bg-transparent" style={{ perspective: '1000px' }}>
   
                    <div
                        className="relative w-full h-full rounded-2xl shadow-lg z-10 transition-transform duration-700  bg-gradient-to-t from-gray-50 to-gray-100 p-4"
                        style={{
                        transform: isHovered
                            ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                            : 'rotateX(25deg) rotateY(-25deg) rotateZ(5deg)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        
                        {/* <div className="absolute top-10 -bottom-10 -right-10 left-10 rounded-2xl bg-black/4 -z-10"></div> */}

                        <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={tailwind}
                        alt="Tailwind"
                        />
                    </div>


                    </div>
                </div>
            </motion.div>
            <motion.div
            {...scrollAnimations.card(7)}
            className="absolute right-10 top-62 hide-pic:block hidden z-20">
                <div
                    className={`flex-1 h-full flex justify-center items-center transition-all duration-700 px-4 bg-transparent ${
                    isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-[140px] bg-transparent" style={{ perspective: '1000px' }}>
   
                    <div
                        className="relative w-full h-full rounded-2xl shadow-xl  z-10 transition-transform duration-700  bg-gradient-to-t from-gray-50 to-gray-100 p-4"
                        style={{
                        transform: isHovered
                            ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                            : 'rotateX(25deg) rotateY(25deg) rotateZ(-25deg)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >

                        {/* <div className="absolute top-10 -bottom-10 right-10 -left-10 rounded-2xl bg-black/4 -z-10"></div> */}
                        
                        <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={vue}
                        alt="Vue"
                        />
                    </div>


                    </div>
                </div>
            </motion.div>
            <motion.div
            {...scrollAnimations.card(8)}
            className="absolute right-90 hide-pic:block hidden bottom-10 z-20">
                <div
                    className={`flex-1 h-full flex justify-center items-center transition-all duration-700 px-4 bg-transparent ${
                    isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-[180px] bg-transparent" style={{ perspective: '1000px' }}>
   
                    <div
                        className="relative w-full h-full rounded-2xl shadow-lg z-10 transition-transform duration-700  bg-gradient-to-t from-gray-50 to-gray-100 p-4"
                        style={{
                        transform: isHovered
                            ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                            : 'rotateX(22deg) rotateY(-5deg) rotateZ(15deg)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* <div className="absolute top-10 -bottom-10 -right-10 left-10 rounded-2xl bg-black/4 -z-10"></div> */}
                        
                        <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={react}
                        alt="React"
                        />
                    </div>


                    </div>
                </div>
            </motion.div>
            <motion.div
            {...scrollAnimations.card(9)}
            className="absolute left-70 -bottom-30 hide-pic:block hidden z-20">
                <div
                    className={`flex-1 h-full flex justify-center items-center transition-all duration-700 px-4 bg-transparent ${
                    isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-[220px] bg-transparent" style={{ perspective: '1000px' }}>
   
                    <div
                        className="relative w-full h-full rounded-2xl shadow-lg z-10 transition-transform duration-700  bg-gradient-to-t from-gray-50 to-gray-100 p-6"
                        style={{
                        transform: isHovered
                            ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                            : 'rotateX(22deg) rotateY(-5deg) rotateZ(5deg)',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* <div className="absolute top-10 -bottom-10 -right-10 left-10 rounded-2xl bg-black/4 -z-10"></div> */}
                        
                        <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={laravel}
                        alt="Laravel"
                        />
                    </div>


                    </div>
                </div>
            </motion.div>
        <div
          className={`flex-1 transition-all duration-700  ${
            isHomeVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="relative flex items-center justify-start md:px-8 px-4">
            <TopBottomBorder />

            <motion.div 
            {...scrollAnimations.card(1)}
            className=" relative flex items-center gap-2 bg-tertiary md:px-3 md:py-1.5 px-2 py-1 rounded-full border border-line ">
              <div className="absolute -right-0.5 sm:h-16 h-12 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10"></div>
              <div className="absolute -left-0.5 sm:h-16 h-12 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10"></div>

              <div className=" w-2 h-2 bg-primary rounded-full"></div>
              <p className=" text-primary font-medium lg:text-sm text-xs">
                AVAILABLE FOR WORK
              </p>
            </motion.div>
          </div>
          <div className=" flex sm:justify-start justify-center text-start md:mb-8 mb-0">
            <div className="">
              <div className=" max-w-5xl md:pl-8 md:py-5 px-4 py-4 text-balance tracking-tighter adj-text:text-[5rem] adj-700:text-[4.8rem] text-[2.5rem] leading-none text-primary z-50">
                <motion.h1
                {...scrollAnimations.card(2)}
                >Emerging Web Dev, Ready to Compete and Collaborate.</motion.h1>
              </div>
              <div className="relative md:pl-8 md:py-5 px-4 py-4">
                <TopBottomBorder />

                <motion.p
                {...scrollAnimations.card(3)}
                className="max-w-2xl lg:text-xl sm:text-lg text-sm text-secondary tracking-tight font-light">
                  With hands-on freelancing experience and a passion for Web Development, I’m prepared to adapt fast and contribute immediately.
                </motion.p>
              </div>
            </div>

            {/* <div className="flex-1 xl:block hidden">
              <div
                className={`flex-1 h-full flex justify-center items-center transition-all duration-700 px-4 ${
                  isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="relative w-[314px]" style={{ perspective: '1000px' }}>
                  
                  <div className="absolute pic top-0 left-0 w-full h-full rounded-2xl z-0 bg-tertiary border border-line"></div>
                  <div className="absolute inset-3 border-dashed border border-line rounded-xl z-10"></div>
                  
                  <div
                    className="relative w-full h-full rounded-2xl border border-line bg-gradient-to-t from-gray-100 to-gray-200 overflow-hidden shadow-lg z-10 transition-transform duration-700"
                    style={{
                      transform: isHovered
                        ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                        : 'rotateX(22deg) rotateY(-5deg) rotateZ(15deg)',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    
                    <img
                      className="w-full h-full object-cover"
                      src={profilePic}
                      alt="Profile Picture"
                    />
                  </div>


                </div>
              </div>
            </div> */}
          </div>
          <div className="relative flex sm:flex-row flex-col sm:gap-8 gap-4 md:pl-8 px-4 lg:text-base text-sm mb-6 sm:py-0 py-4">
            <div className="absolute top-0 bottom-0 right-0 w-screen sm:border-y border-b border-line"></div>
            <div className="absolute top-0 bottom-0 left-0 w-screen sm:border-y border-b border-line"></div>

            <motion.a
              href="#projects"
              {...scrollAnimations.card(4)}
              className="relative flex items-center justify-center bg-primary text-white sm:px-7 sm:py-2 px-5 py-2 rounded-full hover:bg-button transition-colors duration-300"
            >
              <div className="absolute -right-0.5 h-20 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10 sm:block hidden"></div>
              <div className="absolute -left-0.5 h-20 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10 sm:block hidden"></div>
              View My Work
            </motion.a>
            <motion.a
              href="#about"
              {...scrollAnimations.card(5)}
              className="relative flex items-center justify-center border border-primary text-primary sm:px-7 sm:py-2 px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <div className="absolute -right-0.5 h-20 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10 sm:block hidden"></div>
              <div className="absolute -left-0.5 h-20 w-[1px] bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 -z-10 sm:block hidden"></div>
              About Me
            </motion.a>
          </div>
{/* 
            <div className="  sm:hidden block">
              <div
                className={`flex-1 flex justify-center transition-all duration-700 px-4 ${
                  isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="relative w-[150px]" style={{ perspective: '1000px' }}>
                  
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl z-0 bg-tertiary border border-tertiary"></div>
                  <div className="absolute inset-3 border-dashed border border-line rounded-xl z-10"></div>
                  
                  <div
                    className="relative w-full h-full rounded-2xl border border-line bg-gradient-to-t from-gray-100 to-gray-200 overflow-hidden shadow-lg z-10 transition-transform duration-700"
                    style={{
                      transform: isHovered
                        ? 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                        : 'rotateX(22deg) rotateY(-5deg) rotateZ(15deg)',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    
                    <img
                      className="w-full h-full object-cover"
                      src={profilePic}
                      alt="Profile Picture"
                    />
                  </div>


                </div>
              </div>
            </div> */}
        </div>







        {/* <div className={`flex flex-col justify-center gap-4 transition-all duration-700 px-4 mr-4 bg-white ${ isHomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'}`}>   
            <div className='flex gap-4'>
              <div className=' w-44 h-64 flex flex-col gap-4'>
                <div className=' h-24 relative overflow-hidden bg-white rounded-lg p-4 flex flex-col shadow'>
                  <h1 className='z-20 text-[1.4rem] font-normal'>Ronald Seron</h1>
                  <p className='z-20 text-xs -mt-1 font-light'>Kabankalan City, Negros Occidental</p>
                </div>
                <div className=' flex-1 bg-white rounded-lg shadow'></div>
              </div>
              <div className=' w-64 h-64 bg-gradient-to-t from-gray-100 to-gray-300 rounded-lg overflow-hidden shadow'>
                <img className=' w-full' src={profilePic} alt="Profile Picture" />
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-1 bg-gradient-to-br from-purple-300 to-purple-200 h-32 rounded-lg shadow'></div>
              <div className='w-40 bg-white h-32 rounded-lg shadow flex flex-col items-center justify-evenly'>
                <div className='w-full flex items-center justify-evenly'>
                  <a href="">
                    <img className='w-8' src={github} alt="" />
                  </a>
                  <a href="">
                    <img className='w-8' src={gmail} alt="" />
                  </a>
                </div>
                <div className='w-full flex items-center justify-evenly'>
                  <a href="">
                    <img className='w-8' src={gmail} alt="" />
                  </a>
                  <a href="">
                    <img className='w-8' src={github} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
      </div>


    </div>
  );
};

export default Home;
