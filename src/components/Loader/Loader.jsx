import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className='fixed w-[100vw] h-[100vw] opacity-20  dark:opacity-5 top-[20%] pointer-events-none flex flex-col justify-center items-center'>
        <img className='w-1/2 ' src='/logo.svg' alt='' />
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default Loader
