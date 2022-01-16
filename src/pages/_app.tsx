import "../styles/globals.css";

import { SidebarProvider } from "../contexts/SidebarContext";
import { ThemeProvider } from "../contexts/ThemeContext";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
