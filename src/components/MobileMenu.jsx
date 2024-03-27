import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { toggleMobileMenu } from 'redux/features/popupSlice';

import { Button } from 'ui-elements/Button';

import { LanguageButtons } from './LanguageButtons';
import { ThemeButton } from './ThemeButton';

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(mobileMenuRef.current, { y: '-100%' }, { y: 0, duration: 0.2 });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-20 flex h-fit w-full bg-contentBlockBg p-2"
      ref={mobileMenuRef}
    >
      <LanguageButtons />
      <ThemeButton />
      <Button
        className="ml-auto text-2xl"
        type="ghost"
        onClick={() => dispatch(toggleMobileMenu())}
      >
        <HiX />
      </Button>
    </div>
  );
};
