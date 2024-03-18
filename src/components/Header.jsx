import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/features/themeSlice';

import { Button } from 'ui-elements/Button';

import { HeaderLogo } from './HeaderLogo';

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      dispatch(setTheme('light'));
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      dispatch(setTheme('dark'));
    }
  }, [theme]);

  const handleTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <div className="grid grid-cols-3 py-2">
        <Button onClick={handleTheme}>
          {theme === 'light' ? <BsSun /> : <BsMoonStars />}
        </Button>

        <HeaderLogo />
      </div>
    </div>
  );
};
