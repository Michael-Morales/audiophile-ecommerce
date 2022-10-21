import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Manrope-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>

      <body className="text-base leading-normal bg-light font-medium">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
