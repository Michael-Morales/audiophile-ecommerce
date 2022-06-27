import type { ProductType, CategoryProductType } from "../../../types";

import ContainerMargins from "../../layouts/ContainerMargins";
import CategorySection from "../../modules/CategorySection";
import DescriptionSection from "../../modules/DescriptionSection";
import CategoryProduct from "../../modules/CategoryProduct";

import { styles, dynamicStyles } from "./styles";

type Props = {
  products: Array<ProductType>;
};

const CategoryPage = ({ products }: Props) => {
  const categoryProducts: Array<CategoryProductType> = products.map(
    ({ id, slug, name, categoryImage, isNew, description }) => ({
      id,
      slug,
      name,
      categoryImage,
      isNew,
      description,
    })
  );

  return (
    <>
      <main>
        <h1>{products[0].category}</h1>

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

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CategoryPage;
