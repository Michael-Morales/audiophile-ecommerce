import type { NextPage } from "next";

import Head from "next/head";

import CheckoutPage from "../src/components/templates/CheckoutPage";

const Checkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile | Checkout</title>
        <meta name="robots" content="noindex" />
      </Head>

      <CheckoutPage />
    </>
  );
};

export default Checkout;
