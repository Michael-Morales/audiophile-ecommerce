import type { AppProps } from "next/app";

import GlobalStyles from "../src/components/layouts/GlobalStyles";
import Default from "../src/components/layouts/Default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Default>
        <Component {...pageProps} />
      </Default>
    </GlobalStyles>
  );
}

export default MyApp;
