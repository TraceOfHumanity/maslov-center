import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./themeSwitcher";

export const Header = () => {
  return (
    <div className="pt-[1vh] flex justify-end gap-4">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
