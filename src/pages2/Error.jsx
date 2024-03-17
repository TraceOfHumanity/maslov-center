import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowForward } from 'react-icons/tb'

const Error = (props) => {
  return (
    <div className='flex justify-between items-center h-screen '>
      <p className='mx-auto text-center flex'>
        {props.t('Error.M1')}
        <span className='text-blue-800 ml-1'>
          <Link to='/'>
            {' '}
            {props.t('Error.M2')}
          </Link>
        </span>
      </p>
    </div>
  )
}

export default Error
