import type { ProductType } from "../../types";

import CategorySection from "../modules/CategorySection";
import DescriptionSection from "../modules/DescriptionSection";
import BackButton from "../elements/BackButton";
import ProductCard from "../modules/ProductCard";

type Props = {
  product: ProductType;
};

const ProductPage = ({ product }: Props) => {
  const { id, name, isNew, description, price, image } = product;

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
        <CategorySection />
        <DescriptionSection />
      </main>

      <style jsx>{`
        main {
          margin-top: calc(9rem + 1.6rem);
        }
      `}</style>
    </>
  );
};

export default ProductPage;
