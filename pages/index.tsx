import type { NextPage } from "next";

import HomePage from "../src/components/templates/HomePage";
import ContainerMargins from "../src/components/layouts/ContainerMargins";
import SEO from "../src/components/modules/SEO";

import getImgURL from "../src/utils/getImgURL";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Bringing you the best audio gear"
        description="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories."
        image={getImgURL("desktop/img-best-gear")}
        url="https://audiophile-morales.netlify.app"
      />

      <ContainerMargins>
        <HomePage />
      </ContainerMargins>
    </>
  );
};

export default Home;
