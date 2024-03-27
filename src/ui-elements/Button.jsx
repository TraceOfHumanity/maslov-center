import React from 'react';

import { cn } from 'utils/cn';

export const Button = ({ type, children, onClick, className }) => {
  return (
    <button
      className={cn(
        'min-h-10 ga flex w-fit origin-center items-center gap-2 rounded-lg bg-contentBlockBg p-2 shadow-card transition-transform hover:translate-y-0.5 hover:transform',
        className,
        type === 'ghost' &&
          'min-h-fit transform-none border-none bg-transparent shadow-none hover:translate-y-0 hover:scale-110',
      )}
      onClick={onClick}
    >
      {children || 'Button'}
    </button>
  );
};
