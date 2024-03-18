import React from 'react';
import { useSelector } from 'react-redux';
import { cn } from 'utils/cn';

export const HeaderLogo = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={cn('flex items-center justify-center gap-1 font-medium',
      theme === 'light' ? 'text-gold' : 'text-white'
    )}>
      Maslov
      <img
        className="block w-10"
        src={theme === 'light' ? '/logo.svg' : '/logo-dark.svg'}
        alt="logo"
      />
      Center
    </div>
  );
};
