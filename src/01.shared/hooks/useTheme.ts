import { useEffect } from "react";
import { themeSlice } from "../store/reducers/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { ThemeEnum } from "../store/reducers/theme/theme.interface";

const useTheme = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { setTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  function handleTheme() {
    const savedTheme = localStorage.getItem("app-theme");

    if (!savedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? ThemeEnum.DARK
        : ThemeEnum.LIGHT;
      dispatch(setTheme(systemTheme));
    } else if (
      savedTheme !== theme &&
      Object.values(ThemeEnum).includes(savedTheme as ThemeEnum)
    ) {
      dispatch(setTheme(savedTheme as ThemeEnum));
    }
    document.documentElement.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    handleTheme();
  }, [theme]);
};

export default useTheme;
