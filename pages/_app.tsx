import type { AppProps } from "next/app";

import Head from "next/head";

import Default from "../src/components/layouts/Default";
import { Provider as CartProvider } from "../src/context/cartContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CartProvider>
        <Default>
          <Component {...pageProps} />
        </Default>
      </CartProvider>
    </>
  );
}

export default MyApp;
