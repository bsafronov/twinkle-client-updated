import { FC } from "react";
import useGridImages from "../hooks/useDisplayImages";
import useTheme from "../hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  useTheme();
  useGridImages();

  return <>{children}</>;
};

export default ThemeProvider;
