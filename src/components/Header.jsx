import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from 'redux/features/popupSlice';

import { Button } from 'ui-elements/Button';

import { HeaderLogo } from './HeaderLogo';
import { LanguageButtons } from './LanguageButtons';
import { MobileMenu } from './MobileMenu';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
  const dispatch = useDispatch();

  const { isMobileMenuOpen } = useSelector((state) => state.popups);
  return (
    <header>
      <div className="grid grid-cols-3 py-2">
        <div className=""></div>
        <HeaderLogo />
        <div className="ml-auto hidden gap-3 sm:flex">
          <LanguageButtons />
          <ThemeButton />
        </div>
        <Button
          className="ml-auto text-2xl  sm:hidden"
          type="ghost"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <HiMenu />
        </Button>
        {isMobileMenuOpen && <MobileMenu />}
      </div>
    </header>
  );
};
