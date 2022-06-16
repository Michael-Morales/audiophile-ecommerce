import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategoryCard from "../modules/CategoryCard";

const HomePage: NextPage = () => {
  return (
    <main>
      <Hero />

      <section>
        <CategoryCard />
      </section>
    </main>
  );
};

export default HomePage;
