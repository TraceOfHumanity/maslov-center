import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillSetting } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdLanguage, MdPalette } from 'react-icons/md';

import Themes from '../ThemesMod/Themes';

const SiteSettings = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [openThemes, setOpenThemes] = useState(false);
  const handleOpenThemes = () => {
    setOpenThemes(!openThemes);
  };
  const [openLanguages, setOpenLanguages] = useState(false);
  const handleOpenLanguages = () => {
    setOpenLanguages(!openLanguages);
  };

  function handleLanguage(lang) {
    props.i18n.changeLanguage(lang);
  }

  return (
    <div>
      <div
        className={`${
          open
            ? 'rounded-md bg-slate-200 bg-opacity-20 dark:bg-zinc-600  dark:bg-opacity-20'
            : ''
        }`}
      >
        <button
          onClick={handleOpen}
          className="navItemHover flex w-full items-center justify-between p-2 text-start"
        >
          <div className="flex">
            <AiFillSetting className="mr-2 text-2xl" />
            <p>{props.t('Navbar.Settings')}</p>
          </div>
          <div className={open ? 'rotate-180 ease-in-out' : ''}>
            <MdKeyboardArrowDown />
          </div>
        </button>
        <div
          className={`${
            open ? 'min-h-fit overflow-visible' : 'h-0 overflow-hidden'
          }`}
        >
          <div
            className={`${
              openThemes
                ? 'rounded-md bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20'
                : ''
            }`}
          >
            <button
              onClick={handleOpenThemes}
              className="navItemHover flex w-full items-center justify-between py-2 pl-6 pr-2 text-start"
            >
              <div className="flex">
                <MdPalette className="mr-2 text-2xl" />
                <p>{props.t('Navbar.Themes')}</p>
              </div>
              <div className={openThemes ? 'rotate-180 ease-in-out' : ''}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openThemes
                  ? 'min-h-fit overflow-visible'
                  : 'h-0 overflow-hidden'
              }`}
            >
              <Themes />
            </div>
          </div>
          <div
            className={`${
              openLanguages
                ? 'rounded-md bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20'
                : ''
            }`}
          >
            <button
              onClick={handleOpenLanguages}
              className="navItemHover flex w-full items-center justify-between py-2 pl-6 pr-2 text-start"
            >
              <div className="flex">
                <MdLanguage className="mr-2 text-2xl" />
                <p>{props.t('Navbar.Languages')}</p>
              </div>
              <div className={openLanguages ? 'rotate-180 ease-in-out' : ''}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openLanguages
                  ? 'min-h-fit overflow-visible'
                  : 'h-0 overflow-hidden'
              }`}
            >
              <p className="ml-6 flex">
                <button
                  className={`m-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl leading-9 dark:bg-slate-700`}
                  onClick={() => handleLanguage('en')}
                >
                  <p>EN</p>
                </button>
                <button
                  className={`m-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl leading-9 dark:bg-slate-700`}
                  onClick={() => handleLanguage('ua')}
                >
                  <p>UA</p>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
