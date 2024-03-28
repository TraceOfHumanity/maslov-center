import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AccordionButton } from './AccordionButton';
import { AccordionItemContent } from './AccordionItemContent';

export const Services = () => {
  const { t } = useTranslation();

  const serviceItems = [
    {
      serviceTitle: t('services.titles.trainingTitle'),
      serviceDescription: t('services.training.description'),
      variants: [
        {
          title: t('services.training.MTB'),
          description: t('services.training.MTBDescription'),
          image: '/assets/mtb1.jpg',
        },
        {
          title: t('services.training.rule'),
          description: t('services.training.ruleDescription'),
          image: '/assets/pravilo1.jpg',
        },
        {
          title: t('services.training.gravityShoes'),
          description: t('services.training.gravityShoesDescription'),
          image: '/assets/boots1.jpg',
        },
        {
          title: t('services.training.glisson'),
          description: t('services.training.glissonDescription'),
          image: '/assets/glisson.png',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.massageTitle'),
      serviceDescription: t('services.massage.description'),
      variants: [
        {
          title: t('services.massage.sedative'),
          description: t('services.massage.sedativeDescription'),
          image: '/assets/massage2.jpg',
        },
        {
          title: t('services.massage.therapeutic'),
          description: t('services.massage.therapeuticDescription'),
          image: '/assets/massage3.jpg',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.phytotherapyTitle'),
      serviceDescription: t('services.phytotherapy.description'),
      variants: [
        {
          title: t('services.phytotherapy.porridge1'),
        },
        {
          title: t('services.phytotherapy.porridge2'),
        },
        {
          title: t('services.phytotherapy.tea1'),
        },
        {
          title: t('services.phytotherapy.tea2'),
        },
        {
          title: t('services.phytotherapy.tea3'),
        },
      ],
    },
    {
      serviceTitle: t('services.titles.yogaTitle'),
      serviceDescription: t('services.yoga.description'),
      variants: [
        {
          title: '',
          description: t('services.yoga.more'),
          image: '/assets/yoga.jpg',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.phytotherapeuticBarrelTitle'),
      variants: [
        {
          title: '',
          description: t('services.phytotherapeuticBarrel.description'),
          image: '/assets/barrel.jpg',
        },
      ],
    },
  ];

  const [activeItems, setActiveItems] = useState([]);

  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <h2 className="text-center">{t('services.titles.mainTitle')}</h2>
      <div className={`flex flex-col`}>
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className={` accordionGroup border-b border-textColor  last:border-none`}
          >
            <AccordionButton
              title={item.serviceTitle}
              index={index}
              active={activeItems.includes(index)}
              onClick={() => {
                setActiveItems((prev) =>
                  prev.includes(index)
                    ? prev.filter((item) => item !== index)
                    : [...prev, index],
                );
              }}
            />
            <AccordionItemContent
              title={item.serviceTitle}
              serviceDescription={item.serviceDescription}
              variants={item.variants}
              active={activeItems.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
