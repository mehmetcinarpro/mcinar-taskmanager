import "../styles/globals.css";

import { SidebarProvider } from "../contexts/SidebarContext";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}

export default MyApp;
