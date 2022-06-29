import type { AppProps } from "next/app";

import GlobalStyles from "../src/components/layouts/GlobalStyles";
import Default from "../src/components/layouts/Default";
import { Provider as CartProvider } from "../src/context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyles>
        <Default>
          <Component {...pageProps} />
        </Default>
      </GlobalStyles>
    </CartProvider>
  );
}

export default MyApp;
