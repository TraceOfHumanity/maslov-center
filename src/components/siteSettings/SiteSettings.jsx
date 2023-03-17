import React, { useState } from "react";
import Themes from "../ThemesMod/Themes";
import { MdKeyboardArrowDown, MdPalette, MdLanguage } from "react-icons/md";
// import { HiLanguage } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { useTranslation } from "react-i18next";

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
            ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20  rounded-md"
            : ""
        }`}
      >
        <button
          onClick={handleOpen}
          className="flex justify-between items-center navItemHover w-full text-start p-2"
        >
          <div className="flex">
            <AiFillSetting className="text-2xl mr-2" />
            <p>{props.t("Navbar.Settings")}</p>
          </div>
          <div className={open ? "rotate-180 ease-in-out" : ""}>
            <MdKeyboardArrowDown />
          </div>
        </button>
        <div
          className={`${
            open ? "min-h-fit overflow-visible" : "h-0 overflow-hidden"
          }`}
        >
          <div
            className={`${
              openThemes
                ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20 rounded-md"
                : ""
            }`}
          >
            <button
              onClick={handleOpenThemes}
              className="flex justify-between items-center navItemHover w-full text-start py-2 pl-6 pr-2"
            >
              <div className="flex">
                <MdPalette className="text-2xl mr-2" />
                <p>{props.t("Navbar.Themes")}</p>
              </div>
              <div className={openThemes ? "rotate-180 ease-in-out" : ""}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openThemes
                  ? "min-h-fit overflow-visible"
                  : "h-0 overflow-hidden"
              }`}
            >
              <Themes />
            </div>
          </div>
          <div
            className={`${
              openLanguages
                ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20 rounded-md"
                : ""
            }`}
          >
            <button
              onClick={handleOpenLanguages}
              className="flex justify-between items-center navItemHover w-full text-start py-2 pl-6 pr-2"
            >
              <div className="flex">
                <MdLanguage className="text-2xl mr-2" />
                <p>{props.t("Navbar.Languages")}</p>
              </div>
              <div className={openLanguages ? "rotate-180 ease-in-out" : ""}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openLanguages
                  ? "min-h-fit overflow-visible"
                  : "h-0 overflow-hidden"
              }`}
            >
              <p className="ml-6 flex">
                <button
                  className={`w-8 h-8 flex justify-center items-center leading-9 text-xl rounded-full m-2 bg-gray-200 dark:bg-slate-700`}
                  onClick={() => handleLanguage("en")}
                >
                  <p>EN</p>
                </button>
                <button
                  className={`w-8 h-8 flex justify-center items-center leading-9 text-xl rounded-full m-2 bg-gray-200 dark:bg-slate-700`}
                  onClick={() => handleLanguage("ua")}
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
