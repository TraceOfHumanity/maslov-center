import React from 'react';
import { useSelector } from 'react-redux';

export const Loader = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center">
      <img
        className="w-4/5 opacity-5"
        src={theme === 'light' ? '/logo.svg' : '/logo-dark.svg'}
        alt="Loading..."
      />
    </div>
  );
};
