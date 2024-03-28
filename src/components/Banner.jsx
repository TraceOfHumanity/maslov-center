import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { cn } from 'utils/cn';

export const Banner = () => {
  const { t } = useTranslation();
  const { theme } = useSelector((state) => state.theme);
  const particlesContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // const mm = gsap.matchMedia();
    const textContainer = textContainerRef.current;
    const h1 = textContainer.querySelector('h1');
    const h4 = textContainer.querySelector('h4');
    const a = textContainer.querySelector('a');

    gsap.to(particlesContainerRef.current, {
      duration: 2,
      opacity: 1,
    });
    // mm.add('(min-width: 768px)', () => {
    gsap.fromTo(
      h1,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.3,
        ease: 'elastic.inOut(0.5, 0.7) ',
      },
    );
    gsap.fromTo(
      h4,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: 'elastic.inOut(0.5, 0.7) ',
      },
    );
    gsap.fromTo(
      a,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.7,
        ease: 'elastic.inOut(0.5, 0.7) ',
      },
    );
    // });
  }, []);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full opacity-0"
        ref={particlesContainerRef}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'particle -z-10 rounded-full ',
              theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]',
            )}
          />
        ))}
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 pt-[5vw] pb-[5vw] md:gap-3 lg:gap-4"
        ref={textContainerRef}
      >
        <h1 className="text-center md:opacity-0">{t('banner.title')}</h1>
        <h4 className="max-w-3xl text-center md:opacity-0">
          {t('banner.subtitle')}
        </h4>
      </div>
    </div>
  );
};
