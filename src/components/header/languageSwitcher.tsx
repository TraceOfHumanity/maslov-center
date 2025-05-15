import { useLocalization } from "@/hooks/useLocalization";

export const LanguageSwitcher = () => {
  const { changeLanguage } = useLocalization();
  const languageList = ["uk", "en"];
  return <div className="flex gap-2">
    {languageList.map((language) => (
      <button key={language} onClick={() => changeLanguage(language)}>
        {language}
      </button>
    ))}
  </div>;
};
