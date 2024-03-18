import React from 'react';

import { cn } from 'utils/cn';

export const ContentBlock = ({ children, className }) => {
  return (
    <div className={cn('rounded-lg bg-contentBlockBg p-2', className)}>
      {children}
    </div>
  );
};
