import { useTheme } from "@/hooks/useTheme";
import { useAppSelector } from "@/redux/hooks";

export const Header = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { handleTheme } = useTheme();
  return (
    <div>
      <button onClick={handleTheme}>{theme === "light" ? "Light" : "Dark"}</button>
    </div>
  );
};
