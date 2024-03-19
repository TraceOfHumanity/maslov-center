import React from 'react';

import { cn } from 'utils/cn';

export const Button = ({ type, children, onClick, className }) => {
  return (
    <button className={cn('', className)} onClick={onClick}>
      {children || 'Button'}
    </button>
  );
};
