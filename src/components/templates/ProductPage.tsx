import type { ProductType } from "../../types";

import CategorySection from "../modules/CategorySection";
import DescriptionSection from "../modules/DescriptionSection";
import BackButton from "../elements/BackButton";
import ProductCard from "../modules/ProductCard";
import ProductContent from "../modules/ProductContent";
import GallerySection from "../modules/GallerySection";
import SuggestionSection from "../modules/SuggestionSection";

import { sizes } from "../../styles/theme";

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
          <div>
            <h2>features</h2>
            <p>{features}</p>
          </div>
          <ProductContent items={includes} />
          <GallerySection {...gallery} />
        </section>
        <SuggestionSection suggestions={others} />
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

        @media screen and (min-width: 600px) {
          main {
            margin-top: calc(9rem + 3.2rem);
          }
        }
      `}</style>
    </>
  );
};

export default ProductPage;
