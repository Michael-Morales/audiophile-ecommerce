import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategorySection from "../modules/CategorySection";
import ShowcaseSection from "../modules/ShowcaseSection";
import DescriptionSection from "../modules/DescriptionSection";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CategorySection />
        <ShowcaseSection />
        <DescriptionSection />
      </main>
    </>
  );
};

export default HomePage;
