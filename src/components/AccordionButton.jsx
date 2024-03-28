import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { cn } from 'utils/cn';

export const AccordionButton = ({ title, active, onClick }) => {
  return (
    <div
      className="accordionMenu flex cursor-pointer items-center justify-between gap-5 py-2.5 duration-300 hover:bg-contentBlockBg"
      onClick={onClick}
    >
      <h3>{title}</h3>
      <div className={cn('duration-500', active && '-scale-y-100')}>
        <BsChevronDown />
      </div>
    </div>
  );
};
