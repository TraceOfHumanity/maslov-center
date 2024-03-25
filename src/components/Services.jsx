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
      // serviceDescription: t('services.phytotherapeuticBarrel.description'),
      variants: [
        {
          title: '',
          description: t('services.phytotherapeuticBarrel.description'),
          image: '/assets/barrel.jpg',
        },
      ],
    },
  ];

  const [active, setActive] = useState(null);
  const [prevActive, setPrevActive] = useState(null);
  const prevActiveHandler = (index) => {
    setPrevActive(index);
  };

  useEffect(() => {
    const groups = gsap.utils.toArray('.accordionGroup');
    groups.forEach((group, index) => {
      const content = group.querySelector('.accordionContent');
      gsap.set(content, { height: index === active ? 'auto' : 0 });
      const tween = gsap.fromTo(
        content,
        {
          height: index === prevActive ? 'auto' : 0,
          duration: 0.5,
          ease: 'power1.inOut',
          marginTop: index === prevActive ? 20 : 0,
        },
        {
          height: index === active ? 'auto' : 0,
          duration: 0.5,
          ease: 'power1.inOut',
          marginTop: index === active ? 20 : 0,
        },
      );
      if (index === active) {
        tween.play();
      } else {
        tween.reverse();
      }
    });
    let prevActiveGroup = groups[prevActive];

    if (prevActiveGroup) {
      const prevActiveContent =
        prevActiveGroup.querySelector('.accordionContent');
      gsap.to(prevActiveContent, {
        height: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        marginTop: 0,
      });
    }
  }, [active]);

  return (
    <div className="flex flex-col">
      <h2 className="text-center">{t('services.titles.mainTitle')}</h2>
      <div className={`flex flex-col gap-5`}>
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className={` accordionGroup border-b border-textColor pt-2 pb-5 last:border-none`}
            onClick={() => {
              setActive(index);
              prevActiveHandler(active);
            }}
          >
            <AccordionButton
              title={item.serviceTitle}
              active={active}
              index={index}
            />
            <AccordionItemContent
              title={item.serviceTitle}
              serviceDescription={item.serviceDescription}
              variants={item.variants}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
