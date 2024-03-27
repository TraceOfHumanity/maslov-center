import React from 'react';

import NavBar from '../Nav/NavBar';
import Logo from './Logo';

const Header = (props) => {
  return (
    <header className="mainHeader">
      <div className="customContainer bg-main-light-bg dark:bg-main-dark-bg mx-auto flex w-full items-center justify-between py-2 ">
        <div className="h-4 w-4"></div>
        <Logo />
        <div className="">
          <NavBar t={props.t} i18n={props.i18n} />
        </div>
      </div>
    </header>
  );
};

export default Header;
