import "../01.shared/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/01.shared/store/store";
import ThemeProvider from "@/01.shared/providers/ThemeProvider";
import AuthProvider from "@/01.shared/providers/AuthProvider";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Component {...props} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
