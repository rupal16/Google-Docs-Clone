import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@material-tailwind/react";
import Header from "../components/header";
import { Fragment } from "react";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>

      <Script strategy="afterInteractive" src="/material-tailwind-html.js" />
    </Fragment>
  );
}
export default MyApp;
