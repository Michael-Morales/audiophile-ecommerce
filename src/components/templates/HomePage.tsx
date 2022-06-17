import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategorySection from "../modules/CategorySection";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CategorySection />
      </main>
    </>
  );
};

export default HomePage;
