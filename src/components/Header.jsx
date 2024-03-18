import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { Button } from 'ui-elements/Button';

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <div className="py-2 grid grid-cols-3">
        <Button onClick={handleTheme}>
          {theme === 'light' ? <BsSun /> : <BsMoonStars />}
        </Button>

        <div className="flex items-center gap-1 justify-center text-gold font-medium">
          Maslov
          <img className='block w-10' src="/logo.svg" alt="logo" />
          Center
        </div>
      </div>
    </div>
  );
};
