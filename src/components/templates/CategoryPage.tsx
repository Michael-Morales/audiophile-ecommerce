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

      <style jsx>{`
        h1 {
          padding: calc(9rem + 3.2rem) 0 3.2rem;
          margin-bottom: 6.4rem;
          text-align: center;
        }

        @media screen and (min-width: 600px) {
          h1 {
            padding: calc(9rem * 2) 0 9rem;
            margin-bottom: 12rem;
          }
        }

        @media screen and (min-width: 1240px) {
          h1 {
            margin-bottom: 16rem;
          }
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

        @media screen and (min-width: 600px) {
          h1 {
            font-size: ${sizes.desktop.text.h2};
            line-height: ${sizes.desktop.lineHeight.h2};
            letter-spacing: ${sizes.desktop.letterSpacing.h2};
          }
        }
      `}</style>
    </>
  );
};

export default CategoryPage;
