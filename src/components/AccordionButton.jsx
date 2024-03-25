import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { cn } from 'utils/cn';

export const AccordionButton = ({ title, active, index }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={cn('duration-500', active === index && '-scale-y-100')}>
        <BsChevronDown />
      </div>
    </div>
  );
};
