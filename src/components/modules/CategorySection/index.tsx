import CategoryCard from "../CategoryCard";

const CategorySection = () => {
  return (
    <section className="mt-10 mb-[7.5rem] flex flex-col gap-4 sm:my-24 sm:flex-row sm:gap-[.625rem] lg:my-[7.5rem] lg:gap-[1.875rem]">
      <CategoryCard
        title="headphones"
        imgWidth={438}
        imgHeight={422}
        imgRatio={0.35}
        route="/category/headphones"
        linkTitle="shop"
      />
      <CategoryCard
        title="speakers"
        imgWidth={438}
        imgHeight={408}
        imgRatio={0.35}
        route="/category/speakers"
        linkTitle="shop"
      />
      <CategoryCard
        title="earphones"
        imgWidth={438}
        imgHeight={380}
        imgRatio={0.4}
        route="/category/earphones"
        linkTitle="shop"
      />
    </section>
  );
};

export default CategorySection;
