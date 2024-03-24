import React from 'react';
import { useSelector } from 'react-redux';

import { cn } from 'utils/cn';

export const ContentBlock = ({ children, className }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={cn(
        'relative rounded-lg bg-contentBlockBg p-4 shadow-card',
        className,
      )}
    >
      {children}
      <div
        className={cn(
          'absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat',
          theme === 'light' ? 'opacity-10' : 'opacity-5',
        )}
        style={{
          backgroundImage: `url(${theme === 'light' ? '/logo.svg' : '/logo-dark.svg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${20 + Math.random() * 70}%`,
          backgroundPosition: ` ${Math.random() * 100}% ${Math.random() * 100}%`,
        }}
      ></div>
    </div>
  );
};
