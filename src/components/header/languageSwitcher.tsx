import { useLocalization } from "@/hooks/useLocalization";

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLocalization();
  return <div className="flex gap-2">
    <button className="text-xl" onClick={() => changeLanguage(currentLanguage === "uk" ? "en" : "uk")}> {currentLanguage === "uk" ? <div>🇺🇦 UK</div> : <div>🇬🇧 EN</div>}</button>
  </div>;
};
