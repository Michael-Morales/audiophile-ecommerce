import CategoryCard from "../CategoryCard";

import { styles } from "./styles";

const CategorySection = () => {
  return (
    <>
      <section>
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

      <style jsx>{styles}</style>
    </>
  );
};

export default CategorySection;
