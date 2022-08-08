import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../src/components/templates/HomePage";
import ContainerMargins from "../src/components/layouts/ContainerMargins";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile | Bringing you the best audio gear</title>
        <meta
          name="description"
          content="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories."
        />
        <meta
          name="og:title"
          content="Audiophile | Bringing you the best audio gear"
        />
        <meta
          name="og:description"
          content="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories."
        />
        <meta name="og:image" content="/images/desktop/img-best-gear.jpg" />
      </Head>

      <ContainerMargins>
        <HomePage />
      </ContainerMargins>
    </>
  );
};

export default Home;
