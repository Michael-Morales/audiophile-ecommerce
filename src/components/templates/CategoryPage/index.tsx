import type { ProductType, CategoryProductType } from "../../../types";

import ContainerMargins from "../../layouts/ContainerMargins";
import CategorySection from "../../modules/CategorySection";
import DescriptionSection from "../../modules/DescriptionSection";
import CategoryProduct from "../../modules/CategoryProduct";

type Props = {
  products: Array<ProductType>;
};

const CategoryPage = ({ products }: Props) => {
  const categoryProducts: Array<CategoryProductType> = products.map(
    ({ id, slug, name, categoryImg, isNew, description }) => ({
      id,
      slug,
      name,
      categoryImg,
      isNew,
      description,
    })
  );

  return (
    <main>
      <h1 className="mb-16 bg-dark pt-[calc(5.625rem+2rem)] pb-8 text-center text-2xl leading-2xl tracking-6 text-white sm:mb-[7.5rem] sm:pt-[calc(5.625rem*2)] sm:pb-[5.625rem] sm:text-4xl sm:leading-3xl sm:tracking-4 lg:mb-40">
        {products[0].category.name}
      </h1>

      <ContainerMargins>
        <>
          {categoryProducts.map((product, i) => (
            <CategoryProduct
              key={product.id}
              {...product}
              reversed={i % 2 !== 0}
            />
          ))}
          <CategorySection />
          <DescriptionSection />
        </>
      </ContainerMargins>
    </main>
  );
};

export default CategoryPage;
