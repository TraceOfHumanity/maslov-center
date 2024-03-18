import React from 'react';

export const Footer = () => {
  return (
    <div className="border-textColor flex flex-col items-center gap-2 border-t py-2">
      <p>
        © 2016 - {new Date().getFullYear()} {` `} 
        Maslov Center, Inc.
      </p>
      <p>All Rights Reserved.</p>
    </div>
  );
};
