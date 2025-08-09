import React from 'react'

const TopBottomBorder = () => {
  return (
    <>
        <div className="absolute top-0 bottom-0 right-0 w-screen border-y border-line"></div>
        <div className="absolute top-0 bottom-0 left-0 w-screen border-y border-line"></div>
    </>
  )
}

export default TopBottomBorder