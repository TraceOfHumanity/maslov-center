import React from 'react';

export const Button = ({ type, children, onClick }) => {
  return (
    <button className={``} onClick={onClick}>
      {children || 'Button'}
    </button>
  );
};
