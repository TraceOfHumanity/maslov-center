import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';

import { cn } from 'utils/cn';

import { ContentBlock } from 'ui-elements/ContentBlock';

import { AccordionButton } from './AccordionButton';

export const Services = () => {
  const { t } = useTranslation();

  const serviceItems = [
    {
      serviceTitle: t('services.titles.trainingTitle'),
      servicedescription: t('services.training.description'),
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
      servicedescription: t('services.massage.description'),
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
      servicedescription: t('services.phytotherapy.description'),
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
      servicedescription: t('services.yoga.description'),
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
      // servicedescription: t('services.phytotherapeuticBarrel.description'),
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
            className={` accordionGroup border-b border-textColor py-2 last:border-none
             `}
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
            <div className="accordionContent h-0 overflow-hidden ">
              <p className="mb-5">{item.servicedescription}</p>
              {item.variants?.map((variant, index) => (
                <div className="mb-5">
                  <h4 className="mb-5 text-center" key={index}>
                    {variant.title}
                  </h4>
                  <div className="relative">
                    <ContentBlock
                      className={cn(
                        '',
                        index % 2 === 0 ? 'flex-row-reverse ' : 'flex-row',
                      )}
                    >
                      <div
                        className={cn(
                          'z-10 inline-block sm:max-w-[400px]',
                          index % 2 === 0
                            ? 'sm:float-left sm:mr-5'
                            : 'sm:float-right sm:ml-5',
                        )}
                      >
                        <img src={variant.image} alt={variant.title} />
                      </div>
                      {variant.description}
                    </ContentBlock>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
