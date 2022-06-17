import type { NextPage } from "next";

import Hero from "../modules/Hero";
import CategoryCard from "../modules/CategoryCard";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Hero />

        <section>
          <CategoryCard
            title="headphones"
            imgWidth={438}
            imgHeight={422}
            imgRatio={0.35}
            route="/"
            linkTitle="shop"
          />
          <CategoryCard
            title="speakers"
            imgWidth={438}
            imgHeight={408}
            imgRatio={0.35}
            route="/"
            linkTitle="shop"
          />
          <CategoryCard
            title="earphones"
            imgWidth={438}
            imgHeight={380}
            imgRatio={0.4}
            route="/"
            linkTitle="shop"
          />
        </section>
      </main>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 48px 24px;
        }
      `}</style>
    </>
  );
};

export default HomePage;
