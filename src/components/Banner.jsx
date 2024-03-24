import React from 'react';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 pt-[5vw] pb-[5vw] md:gap-3 lg:gap-4">
        <h1 className="text-center">{t('banner.title')}</h1>
        <h4 className="max-w-3xl text-center">{t('banner.subtitle')}</h4>
      </div>
    </div>
  );
};
