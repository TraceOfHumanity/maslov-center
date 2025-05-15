import { useTheme } from "@/hooks/useTheme";
import { useAppSelector } from "@/redux/hooks";
import { BsMoonStars, BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { handleTheme } = useTheme();
  return <button className="text-2xl" onClick={handleTheme}>{theme === "light" ? <BsSun /> : <BsMoonStars />}</button>


};
