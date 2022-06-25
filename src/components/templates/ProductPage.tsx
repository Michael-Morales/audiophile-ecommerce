import type { ProductType } from "../../types";

import CategorySection from "../modules/CategorySection";
import DescriptionSection from "../modules/DescriptionSection";
import BackButton from "../elements/BackButton";
import ProductCard from "../modules/ProductCard";
import ProductContent from "../modules/ProductContent";

import { sizes } from "../../styles/theme";

type Props = {
  product: ProductType;
};

const ProductPage = ({ product }: Props) => {
  const { id, name, isNew, description, price, image, features, includes } =
    product;

  return (
    <>
      <main>
        <BackButton />
        <ProductCard
          id={id}
          name={name}
          isNew={isNew}
          description={description}
          price={price}
          image={image}
        />
        <div>
          <h2>features</h2>
          <p>{features}</p>
        </div>
        <ProductContent items={includes} />
        <CategorySection />
        <DescriptionSection />
      </main>

      <style jsx>{`
        div {
          margin-block: 8.8rem;
        }

        h2 {
          margin-bottom: 2.4rem;
        }

        p {
          opacity: 0.5;
          white-space: pre-wrap;
        }
      `}</style>
      <style jsx>{`
        main {
          margin-top: calc(9rem + 1.6rem);
        }

        h2 {
          font-size: ${sizes.mobile.text.h4};
        }
      `}</style>
    </>
  );
};

export default ProductPage;
