import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../src/components/templates/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
