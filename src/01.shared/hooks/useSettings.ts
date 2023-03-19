import React from "react";
import {
  DisplayImagesEnum,
  ThemeEnum,
} from "../store/reducers/theme/theme.interface";
import { themeSlice } from "../store/reducers/theme/themeSlice";
import { userSlice } from "../store/reducers/user/userSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

const useSettings = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const { theme, displayImages } = useAppSelector((state) => state.theme);
  const { setTheme, setDisplayImages } = themeSlice.actions;
  const { logout } = userSlice.actions;
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  function handleToggleTheme() {
    if (theme === ThemeEnum.LIGHT) {
      dispatch(setTheme(ThemeEnum.DARK));
    } else {
      dispatch(setTheme(ThemeEnum.LIGHT));
    }
  }

  function handleToggleDisplayImages() {
    if (displayImages === DisplayImagesEnum.GRID) {
      dispatch(setDisplayImages(DisplayImagesEnum.SLIDER));
    } else {
      dispatch(setDisplayImages(DisplayImagesEnum.GRID));
    }
  }

  return {
    isAuth,
    theme,
    displayImages,
    handleLogout,
    handleToggleTheme,
    handleToggleDisplayImages,
  };
};

export default useSettings;
