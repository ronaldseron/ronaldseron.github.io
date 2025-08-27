import React, { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images || [];

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-50"
        onClick={onClose}
    >
      {/* Modal content */}
      <div 
        className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}
        >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title */}
        <h1 className="text-xl font-semibold text-primary mb-4 text-center">{project.title}</h1>

        {/* Image carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-primary hover:text-white rounded-full p-2 shadow transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className='p-8'>
            <img
                src={images[current]}
                alt={`${project.title} ${current + 1}`}
                className="w-[50rem] object-cover rounded transition-all duration-300"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-primary hover:text-white rounded-full p-2 shadow transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Image counter */}
        <div className="text-center text-xs text-gray-500 mt-2">
          {current + 1} / {images.length}
        </div>

        <div className='text-2xl text-center'>
            (DESIGN ON PROGRESS...)
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;