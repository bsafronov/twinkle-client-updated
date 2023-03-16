import { createSlice } from "@reduxjs/toolkit";

type ThemeStateTypes = "light" | "dark";

interface ThemeStateProps {
  theme: ThemeStateTypes;
}
const initialState: ThemeStateProps = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("app-theme", state.theme);
    },
  },
});

export default themeSlice.reducer;