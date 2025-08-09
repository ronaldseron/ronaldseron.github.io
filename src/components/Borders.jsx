import React from 'react'

const Borders = () => {
  return (
    <>
        <div className='absolute top-0 w-56 h-[0.5px] bg-gradient-to-r from-white via-gray-300 to-white'></div>
        <div className='absolute bottom-0 w-56 h-[1px] bg-gradient-to-r from-white via-gray-300 to-white'></div>

        <div className='absolute -right-0 h-16 w-[1px] bg-gradient-to-b from-white via-gray-300 to-white'></div>
        <div className='absolute -left-0 h-16 w-[1px] bg-gradient-to-b from-white via-gray-300 to-white'></div>
    </>
  )
}

export default Borders