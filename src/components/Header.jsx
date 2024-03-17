import React, { useEffect, useState } from 'react';

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
      <div className="container">
        <Button onClick={handleTheme}>theme</Button>
      </div>
    </div>
  );
};
