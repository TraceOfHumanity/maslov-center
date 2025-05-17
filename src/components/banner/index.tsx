import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return <div className="flex flex-col items-center justify-center gap-[1vw] mb-[5vw]">
    <div className="w-80 mx-auto mb-[2vw]">
      <img src="/logo-with-label.svg" alt="logo" />
    </div>
    <h1 className="text-center text-4xl font-bold">{t('banner.title')}</h1>
    <p className="max-w-2xl text-center mx-auto font-bold">
      {t('banner.subtitle')}
    </p>
  </div>;
};
