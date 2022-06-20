import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../src/components/templates/HomePage";
import ContainerMargins from "../src/components/layouts/ContainerMargins";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerMargins>
        <HomePage />
      </ContainerMargins>
    </>
  );
};

export default Home;
