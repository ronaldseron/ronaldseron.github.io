import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';

import PortfolioLogo from './assets/PortfolioLogo.svg';
import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-800 ${
        isFadingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center">
          <div className="relative">
            <div className="w-28 h-28 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <img className='w-10' src={PortfolioLogo} alt="Logo" />
              </div>
            </div>
          </div>
          
          <div className=" -mt-5">
            <h1 className="text-4xl font-bold text-primary animate-fade-in-up">
              Ronald Seron
            </h1>
            <p className="text-lg text-secondary animate-fade-in-up delay-300">
              Web Developer
            </p>
            <p className="text-lg text-secondary animate-fade-in-up delay-300">
              "Live Preview (Work in Progress)"
            </p>
          </div>
        </div>
      </div>
    );
  }
  

  return (
    <>
      <Navbar 
        showContent={showContent}
        isLoading={isLoading}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className=' overflow-hidden'>
        <section className='lines fixed inset-0 max-w-standard mx-auto -z-10'></section>
        <section className='max-w-standard mx-auto lg:px-12 md:px-8 sm:px-4 px-3 border-x border-line'>
          <section className='flex flex-col border-x border-line'>
            <section id='hero' className='sm:pb-40 pb-20 bg-white'><Home showContent={showContent} isLoading={isLoading} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/></section>
            <section className='sm:pb-40 pb-20 bg-white'><Intro /></section>
            <section id='about' className='sm:pb-40 pb-20 bg-white'><About /></section>
            <section id='skills' className='sm:pb-40 pb-20 bg-white'><Skills /></section>
            <section id='projects'><Projects /></section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;
