import type { ProductType } from "../../types";

import CategorySection from "../modules/CategorySection";
import DescriptionSection from "../modules/DescriptionSection";
import BackButton from "../elements/BackButton";

type Props = {
  product: ProductType;
};

const ProductPage = ({ product }: Props) => {
  return (
    <>
      <main>
        <BackButton />
        {product.name}
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
