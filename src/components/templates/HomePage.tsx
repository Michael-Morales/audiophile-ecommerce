import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategorySection from "../modules/CategorySection";
import ShowcaseSection from "../modules/ShowcaseSection";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CategorySection />
        <ShowcaseSection />
      </main>
    </>
  );
};

export default HomePage;
