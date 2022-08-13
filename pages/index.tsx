import type { NextPage } from "next";

import HomePage from "../src/components/templates/HomePage";
import ContainerMargins from "../src/components/layouts/ContainerMargins";
import SEO from "../src/components/modules/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Bringing you the best audio gear"
        description="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories."
        image="/images/desktop/img-best-gear.jpg"
        url="http://localhost:3000"
      />

      <ContainerMargins>
        <HomePage />
      </ContainerMargins>
    </>
  );
};

export default Home;
