import React from 'react'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'

const Footer = props => {
  return (
    <footer className='text-center py-2 md:py:3 bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-10 customContainer'>
      <div className='flex justify-center gap-4 my-2  '>
        <a className='text-2xl ' href='tel:+380997393067'>
          <BiPhone />
        </a>
        <a
          target='_blank'
          className='text-2xl '
          href='https://www.youtube.com/@maslovcenter'
        >
          <AiFillYoutube />
        </a>
        <a
          target='_blank'
          className='text-2xl '
          href='https://instagram.com/maslov_centr?igshid=YmMyMTA2M2Y='
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <p className='font-medium'>{props.t('Info.Location')}</p>

      <p className='border-t border-main-color pt-3'>
        © 2016 - 2023 Maslov Center, Inc. <br /> All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
