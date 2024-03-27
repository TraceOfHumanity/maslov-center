import React, { useEffect } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/features/themeSlice';

import { Button } from 'ui-elements/Button';

export const ThemeButton = () => {
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
    <Button type="ghost" onClick={() => handleTheme()}>
      {theme === 'light' ? <BsSun /> : <BsMoonStars />}
    </Button>
  );
};
