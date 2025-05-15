import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/features/themeSlice";
import { useEffect } from "react";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  const handleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      dispatch(toggleTheme('dark'));
    } else {
      localStorage.setItem('theme', 'light');
      dispatch(toggleTheme('light'));
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      dispatch(toggleTheme(localTheme));
    }
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return { handleTheme };
}
