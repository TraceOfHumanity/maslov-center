import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'ui-elements/Button';

export const LanguageButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="after:content-'' relative flex w-fit gap-1 after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1px] after:bg-textColor">
      <Button type="ghost" onClick={() => changeLanguage('ua')}>
        UA
      </Button>
      <Button type="ghost" onClick={() => changeLanguage('en')}>
        EN
      </Button>
    </div>
  );
};
