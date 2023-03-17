import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

function Accordion ({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='accordion border-b border-main-color cursor-pointer py-1 smd:py-3'>
      <h3
        className='accordion-header text-lg md:text-2xl flex items-center justify-between py-2'
        onClick={handleClick}
      >
        <p className='font-semibold p-0'>{title}</p>
        <MdKeyboardArrowDown
          className={`text-xl duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </h3>
      {isOpen && <div className=''>{children}</div>}
    </div>
  )
}

export default Accordion
