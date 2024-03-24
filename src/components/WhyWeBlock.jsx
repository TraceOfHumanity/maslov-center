import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineApartment } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { GiFlyingFlag } from 'react-icons/gi';
import { MdOutlineChecklist } from 'react-icons/md';

import { ContentBlock } from 'ui-elements/ContentBlock';

export const WhyWeBlock = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <AiOutlineApartment />,
      description: t('whyWe.comprehensiveApproach'),
    },
    {
      icon: <MdOutlineChecklist />,
      description: t('whyWe.relation'),
    },
    {
      icon: <BiTimeFive />,
      description: t('whyWe.time'),
    },
    {
      icon: <GiFlyingFlag />,
      description: t('whyWe.goal'),
    },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* <ContentBlock className="col-start-1 col-end-3 flex flex-col gap-5"> */}
      <ContentBlock className="flex flex-col gap-5 lg:col-start-1 lg:col-end-3">
        <h2 className="text-center ">{t('whyWe.title')}</h2>
        <ul className="grid gap-3 ">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2 ">
              <div className="text-2xl">{item.icon}</div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </ContentBlock>
      <img className="" src="/assets/whyWe.jpg" alt="" />
    </div>
  );
};
