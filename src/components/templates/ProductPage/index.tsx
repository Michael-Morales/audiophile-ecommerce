import type { ProductType } from "../../../types";

import CategorySection from "../../modules/CategorySection";
import DescriptionSection from "../../modules/DescriptionSection";
import BackButton from "../../elements/BackButton";
import ProductCard from "../../modules/ProductCard";
import ProductContent from "../../modules/ProductContent";
import GallerySection from "../../modules/GallerySection";
import SuggestionSection from "../../modules/SuggestionSection";

import { styles, dynamicStyles } from "./styles";

type Props = {
  product: ProductType;
};

const ProductPage = ({ product }: Props) => {
  const {
    id,
    name,
    isNew,
    description,
    price,
    image,
    features,
    includes,
    gallery,
    others,
  } = product;

  return (
    <>
      <main>
        <section>
          <BackButton />
          <ProductCard
            id={id}
            name={name}
            isNew={isNew}
            description={description}
            price={price}
            image={image}
          />
          <div className="features-container">
            <div className="features">
              <h2>features</h2>
              <p>{features}</p>
            </div>
            <ProductContent items={includes} />
          </div>
          <GallerySection {...gallery} />
        </section>
        <SuggestionSection suggestions={others} />
        <CategorySection />
        <DescriptionSection />
      </main>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default ProductPage;
