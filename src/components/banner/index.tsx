import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return <div>
    <svg className="w-40 h-40">
      <use href="/logo-with-label.svg#logo-with-label" />
    </svg>
    <h1 className="text-center">{t('banner.title')}</h1>
    <h4 className="max-w-3xl text-center md:opacity-0">
      {t('banner.subtitle')}
    </h4>
  </div>;
};
