import type { AppProps } from "next/app";

import GlobalStyles from "../src/components/layouts/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  );
}

export default MyApp;
