import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <>
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

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          margin-block: 4rem 12rem;
        }

        @media screen and (min-width: 600px) {
          section {
            flex-direction: row;
            gap: 1rem;
            margin-block: 9.6rem;
          }
        }

        @media screen and (min-width: 1240px) {
          section {
            gap: 3rem;
            margin-block: 12rem;
          }
        }
      `}</style>
    </>
  );
};

export default CategorySection;
