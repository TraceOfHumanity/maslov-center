import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return <div>
    <svg className="w-80 h-80 mx-auto">
      <use href="/logo-with-label.svg#logo-with-label" />
    </svg>
    <h1 className="text-center text-4xl font-bold mb-8">{t('banner.title')}</h1>
    <p className="max-w-3xl text-center mx-auto">
      {t('banner.subtitle')}
    </p>
  </div>;
};
