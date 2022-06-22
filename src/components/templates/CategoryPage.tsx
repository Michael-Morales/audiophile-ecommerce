import type { ProductType, CategoryProductType } from "../../types";

import ContainerMargins from "../layouts/ContainerMargins";
import CategorySection from "../modules/CategorySection";
import DescriptionSection from "../modules/DescriptionSection";
import CategoryProduct from "../modules/CategoryProduct";

import { colors, sizes } from "../../styles/theme";

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
            {categoryProducts.map((product) => (
              <CategoryProduct key={product.id} {...product} />
            ))}
            <CategorySection />
            <DescriptionSection />
          </>
        </ContainerMargins>
      </main>

      <style jsx>{`
        h1 {
          padding: calc(9rem + 3.2rem) 0 3.2rem;
          margin-bottom: 6.4rem;
          text-align: center;
        }
      `}</style>
      <style jsx>{`
        h1 {
          font-size: ${sizes.desktop.text.h3};
          line-height: ${sizes.desktop.lineHeight.h3};
          letter-spacing: ${sizes.desktop.letterSpacing.h3};
          color: ${colors.white};
          background-color: ${colors.dark};
        }
      `}</style>
    </>
  );
};

export default CategoryPage;
