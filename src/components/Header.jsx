import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/features/themeSlice';

import { Button } from 'ui-elements/Button';

import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      dispatch(toggleTheme('dark'));
    } else {
      localStorage.setItem('theme', 'light');
      dispatch(toggleTheme('light'));
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      dispatch(toggleTheme(localTheme));
    }
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <div className="grid grid-cols-3 py-2">
        <div className=""></div>
        <HeaderLogo />
        <Button className='ml-auto' onClick={() => handleTheme()}>
          {theme === 'light' ? <BsSun /> : <BsMoonStars />}
        </Button>
      </div>
    </div>
  );
};
