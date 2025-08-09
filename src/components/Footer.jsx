import React from 'react'

const Footer = () => {
  return (
    <section className='bg-primary p-16 sm:block hidden'>
      <div className="max-w-standard mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-[2.5rem] font-light mb-6">Let's Connect</h2>
            <p className="text-white/80 mb-8 max-w-md">
              I'm actively seeking junior web developer opportunities. 
              Let's discuss how I can contribute to your team!
            </p>
            <ul className='flex gap-4 text-white text-sm font-medium'>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#hero" className='block px-6 py-3 rounded-full'>Home</a>
              </li>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#about" className='block px-6 py-3 rounded-full'>About Me</a>
              </li>
              <li className='hover:bg-button rounded-full transition-colors duration-300'>
                <a href="#projects" className='block px-6 py-3 rounded-full'>Projects</a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className='text-white text-[3rem] font-light mb-4'>ronald@gmail.com</h3>
            <div className="flex flex-col gap-3 text-white/80">
              <a 
                href="mailto:ronald@gmail.com" 
                className="hover:text-white transition-colors duration-300 text-lg"
              >
                📧 ronald@gmail.com
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
              <span className="text-sm">
                📍 Available for opportunities worldwide (Open to relocation)
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Ronald. Built with React.js and Tailwind CSS. 
            <br />
            Designed and developed with passion for creating great web experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer;