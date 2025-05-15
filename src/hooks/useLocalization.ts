import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export const useLocalization = () => {
  const {i18n} = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<string>(localStorage.getItem("i18nextLng") || "");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  const lng = localStorage.getItem("i18nextLng") || "";

  useEffect(() => {
    setCurrentLanguage(lng);
  }, [lng]);

  return {changeLanguage, currentLanguage, setCurrentLanguage};
};
