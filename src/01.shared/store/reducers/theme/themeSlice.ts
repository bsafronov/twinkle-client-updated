import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisplayImagesEnum, ThemeEnum } from "./theme.interface";

interface ThemeStateProps {
  theme: ThemeEnum;
  displayImages: DisplayImagesEnum;
}

const initialState: ThemeStateProps = {
  theme: ThemeEnum.LIGHT,
  displayImages: DisplayImagesEnum.SLIDER,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeEnum>) {
      state.theme = action.payload;
      localStorage.setItem("app-theme", state.theme);
    },
    setDisplayImages(state, action: PayloadAction<DisplayImagesEnum>) {
      state.displayImages = action.payload;
      localStorage.setItem("display-images", state.displayImages);
    },
  },
});

export default themeSlice.reducer;
