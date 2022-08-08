import type { AppProps } from "next/app";

import Head from "next/head";

import GlobalStyles from "../src/components/layouts/GlobalStyles";
import Default from "../src/components/layouts/Default";
import { Provider as CartProvider } from "../src/context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CartProvider>
        <GlobalStyles>
          <Default>
            <Component {...pageProps} />
          </Default>
        </GlobalStyles>
      </CartProvider>
    </>
  );
}

export default MyApp;
