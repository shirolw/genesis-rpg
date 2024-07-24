import "@/presentation/styles/global.css";

import { Montserrat, Spectral } from "next/font/google";
import { Fragment } from "react";

import type { AppProps } from "next/app";

const base = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["400", "500", "700", "800"],
});

const primary = Spectral({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["200", "300", "400", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <style jsx global>{`
        body {
          --font-base: ${base.style.fontFamily};
          --font-primary: ${primary.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </Fragment>
  );
}
