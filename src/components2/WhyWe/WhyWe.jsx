import React from 'react';
import { AiOutlineApartment } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { GiFlyingFlag } from 'react-icons/gi';

const WhyWe = (props) => {
  return (
    <section className="mt-20 px-5">
      <h2 className="">{props.t('WhyWe.Title')}</h2>
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-start lg:gap-16">
        <ul>
          <li className="whyWeLi">
            <div className="liIcon">
              <AiOutlineApartment />
            </div>
            <p>{props.t('WhyWe.comprehensiveApproach')}</p>
          </li>
          <li className="whyWeLi">
            <div className="liIcon">
              <BsFillPersonCheckFill />
            </div>
            <p>{props.t('WhyWe.relation')}</p>
          </li>
          <li className="whyWeLi">
            <div className="liIcon">
              <BiTimeFive />
            </div>
            <p>{props.t('WhyWe.time')}</p>
          </li>
          <li className="whyWeLi">
            <div className="liIcon">
              <GiFlyingFlag />
            </div>
            <p>{props.t('WhyWe.goal')}</p>
          </li>
        </ul>
        <div className="overflow-hidden rounded-2xl lg:max-w-lg">
          <img src="/assets/whyWe.jpg" alt="maslov_centr" className="" />
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
