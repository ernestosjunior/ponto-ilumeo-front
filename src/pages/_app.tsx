import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ResetStyle } from "@/styles/base";
import { defaultTheme } from "@/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <ResetStyle />
    </ThemeProvider>
  );
}
