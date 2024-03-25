import React, { useEffect, useState } from 'react';
import { BiDevices } from 'react-icons/bi';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Themes = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system',
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const options = [
    { icon: BsSunFill, text: 'light' },
    { icon: BsMoonFill, text: 'dark' },
    { icon: BiDevices, text: 'system' },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="ml-6 flex rounded text-gray-800 dark:text-white">
      {options.map((opt) => (
        <div
          className="navItemHover flex cursor-pointer items-center "
          onClick={() => setTheme(opt.text)}
        >
          <button
            key={opt.text}
            className={`m-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl leading-9 dark:bg-slate-700 ${
              theme === opt.text && 'text-main-color '
            } `}
          >
            {<opt.icon></opt.icon>}
          </button>
          <p className={`${theme === opt.text && 'text-main-color'} `}>
            {/* {opt.text} */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Themes;
