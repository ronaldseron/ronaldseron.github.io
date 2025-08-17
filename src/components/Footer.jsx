import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary'>
      <div className="max-w-standard mx-auto lg:p-20 md:p-16 sm:p-8 p-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <h2 className="text-white md:text-[2.5rem] text-3xl font-light mb-6 text-left">Let's Connect</h2>
            <p className="text-white/80 mb-8 max-w-md md:text-base text-sm text-balance">
              I'm actively seeking junior web developer opportunities. 
              Let's discuss how I can contribute to your team!
            </p>
            <ul className='flex justify-start md:gap-8 gap-6 text-white text-sm font-medium'>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#hero" className='block '>Home</a>
              </li>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#about" className='block'>About Me</a>
              </li>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#projects" className='block'>Projects</a>
              </li>
            </ul>
          </div>
          
          <div className="text-left max-sm:border-t border-white/20 max-sm:pt-8">
            {/* <h3 className='text-white text-[3rem] font-light mb-4'>ronald@gmail.com</h3> */}
            <div className="flex flex-col gap-3 text-white/80 md:text-lg text-sm">
              <a 
                href="mailto:seronronalddalida@gmail.com" 
                className="hover:text-white transition-colors duration-300 "
              >
                📧 seronronalddalida@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                💻 GitHub Profile
              </a>
              {/* <span className="text-sm">
                📍 Available for opportunities worldwide (Open to relocation)
              </span> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 md:text-sm text-xs">
            © 2025 Ronald. Built with React.js and Tailwind CSS. 
            <br />
            Designed and developed with passion for creating great web experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;