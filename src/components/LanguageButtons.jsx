import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'utils/cn';
import { languages } from 'utils/data';

import { Button } from 'ui-elements/Button';

export const LanguageButtons = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('i18nextLng'));
  }, [localStorage.getItem('i18nextLng')]);

  return (
    <div className="after:content-'' relative flex w-fit gap-1 after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1px] after:bg-textColor">
      {languages.map((lang) => (
        <Button
          key={lang}
          type="ghost"
          onClick={() => changeLanguage(lang)}
          className={cn(
            'uppercase',
            currentLanguage !== lang ? 'opacity-30' : '',
            console.log(currentLanguage, lang),
          )}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
};
