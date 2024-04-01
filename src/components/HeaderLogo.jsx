import React from 'react';
import { useSelector } from 'react-redux';

import { cn } from 'utils/cn';

export const HeaderLogo = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <img
      className="mx-auto w-24"
      src={theme === 'light' ? '/newLogo.svg' : '/newLogo-dark.svg'}
      alt="logo"
    />
  );
};
