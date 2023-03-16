import { useEffect } from "react";
import { themeSlice } from "../store/reducers/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export function useTheme() {
  const { theme } = useAppSelector(state => state.theme);
  const { toggleTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");

    if (savedTheme !== theme) {
      dispatch(toggleTheme());
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
}