import React from 'react'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineApartment} from 'react-icons/ai'
import {GiFlyingFlag} from 'react-icons/gi'

const WhyWe = props => {
  return (
    <section className='mt-20 px-5'>
      <h2 className=''>
        {props.t('WhyWe.Title')}
      </h2>
      <div className='flex flex-col md:flex-row md:items-start items-center justify-between gap-5 lg:gap-16'>
        <ul>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <AiOutlineApartment  />
            </div>
            <p>{props.t('WhyWe.FirstPros')}</p>
          </li>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <BsFillPersonCheckFill />
            </div>
            <p>{props.t('WhyWe.SecondPros')}</p>
          </li>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <BiTimeFive />
            </div>
            <p>{props.t('WhyWe.ThirdPros')}</p>
          </li>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <GiFlyingFlag />
            </div>
            <p>{props.t('WhyWe.Forth')}</p>
          </li>
        </ul>
        <div className='lg:max-w-lg rounded-2xl overflow-hidden'>
          <img
            src='/assets/whyWe.jpg'
            alt='maslov_centr'
            className=''
          />
        </div>
      </div>
    </section>
  )
}

export default WhyWe
