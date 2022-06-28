import type { AppProps } from "next/app";

import GlobalStyles from "../src/components/layouts/GlobalStyles";
import Default from "../src/components/layouts/Default";
import { Provider as CartProvider } from "../src/context/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Default>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Default>
    </GlobalStyles>
  );
}

export default MyApp;
