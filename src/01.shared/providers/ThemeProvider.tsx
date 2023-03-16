import { FC } from "react";
import { useTheme } from "../hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  useTheme();
  return <>{children}</>;
};

export default ThemeProvider;
