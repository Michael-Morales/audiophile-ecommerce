import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategoryCard from "../modules/CategoryCard";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Hero />

        <section>
          <CategoryCard />
        </section>
      </main>

      <style jsx>{`
        section {
          margin: 48px 24px;
        }
      `}</style>
    </>
  );
};

export default HomePage;
