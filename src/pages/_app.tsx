import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ResetStyle } from "@/styles/base";
import { defaultTheme } from "@/styles/themes";
import { AppProvider } from "@/contexts/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <ResetStyle />
      <Toaster />
    </ThemeProvider>
  );
}
