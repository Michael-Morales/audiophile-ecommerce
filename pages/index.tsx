import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../src/components/templates/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
};

export default Home;
