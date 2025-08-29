import React, { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images || [];

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/5 backdrop-blur-sm bg-opacity-50"
        onClick={onClose}
    >
      {/* Modal content */}
      <div 
        className="relative bg-white rounded-lg shadow-lg w-[90%] lg:p-6 md:p-4 p-2"
        onClick={(e) => e.stopPropagation()}
        >
        {/* Close button */}
        {/* <button
          onClick={onClose}
          className="absolute top-7 left-9 text-primary hover:text-primary text-2xl font-bold"
          aria-label="Close"
        >
          <i className='bx  bx-arrow-left-stroke text-5xl cursor-pointer'  ></i> 
        </button> */}

        {/* Title */}
        <h1 className="lg:text-3xl md:text-2xl sm:text-md text-sm font-semibold text-primary lg:mb-8 lg:mt-2 mb-4 mt-1 text-center">{project.title}</h1>

        {/* Image carousel */}
        <div className="relative flex items-center justify-center lg:gap-6 md:gap-4 gap-2">
          <button
            onClick={prevImage}
            className="h-full"
            aria-label="Previous"
          >
            <i className='bx bx-chevron-left lg:text-8xl md:text-5xl text-3xl rounded-full cursor-pointer text-primary/20 hover:text-white hover:bg-primary/40'  ></i> 
          </button>
          <div className='rounde-lg bg-gray-200 rounded-lg shadow-md'>
            <img
                src={images[current]}
                alt={`${project.title} ${current + 1}`}
                className=" object-cover rounded transition-all duration-300"
            />
          </div>
          <button
            onClick={nextImage}
            className="h-full"
            aria-label="Next"
          >
            <i className='bx bx-chevron-right lg:text-8xl md:text-5xl text-3xl rounded-full cursor-pointer text-primary/20 hover:text-white hover:bg-primary/40'  ></i> 
          </button>
        </div>

        {/* Image counter */}
        <div className="text-center sm:text-sm text-xs text-gray-500 mt-4">
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;