import React, { useState, useEffect } from 'react';
import PortfolioLogo from '../assets/PortfolioLogo.svg';

const Navbar = ({ showContent, isLoading, isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading && showContent) {
      const timer = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading, showContent]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 md:px-16 px-4 transition-all duration-700 ease-out bg-white/90 backdrop-blur-sm border-b border-gray-200  ${
      isNavbarVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-full'
    }`}>
      <div className={` max-w-standard mx-auto`}>

        {/* Desktop Size NavBar */}
        <div className="lg:flex hidden items-center justify-between gap-12 px-6 py-4">
          <div className="font-medium text-xl flex items-center gap-12">
            <a href="#hero" className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-primary'
            }`}>
              <img className=' w-7' src={PortfolioLogo} alt="PortfolioLogo" />
            </a>
            <ul className="flex gap-8 text-base font-light transition-colors duration-300">
              {/* <li>
                <a href="#hero" className="hover:text-secondary transition-colors duration-300">
                  Home
                </a>
              </li> */}
              <li>
                <a href="#about" className="hover:text-secondary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-secondary transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors duration-300">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* <div className={` ${ isScrolled ? 'hidden' : 'flex-1 border-b border-gray-200'}`}></div> */}
          
          <ul className="font-light transition-colors duration-300">
            <li>
              <a 
                href="mailto:ronald@gmail.com" 
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-button transition-colors duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Size NavBar */}
        <div className='lg:hidden flex items-center justify-between px-4 py-3.5'>
          <a href="#hero" className={`transition-colors duration-300 flex items-center gap-0.5 ${
            isScrolled ? 'text-primary' : 'text-primary'
          }`}>
            <img className=' w-3.5' src={PortfolioLogo} alt="PortfolioLogo" />
              <h1 className='text-lg font-semibold text-primary/90'>ONALDSERON</h1>
          </a>
          <button id='menu-bar' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className='bx bx-dots-vertical-rounded text-xl -mr-2 mt-1'  ></i> 

          </button>
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar;