import type { ProductType } from "../../../types";

import CategorySection from "../../modules/CategorySection";
import DescriptionSection from "../../modules/DescriptionSection";
import BackButton from "../../elements/BackButton";
import ProductCard from "../../modules/ProductCard";
import ProductContent from "../../modules/ProductContent";
import GallerySection from "../../modules/GallerySection";
import SuggestionSection from "../../modules/SuggestionSection";

type Props = {
  product: ProductType;
};

const ProductPage = ({ product }: Props) => {
  const {
    id,
    name,
    cartName,
    slug,
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
    <main className="mt-[calc(5.625rem+1rem)] sm:mt-[calc(5.625rem+2rem)] lg:mt-[calc(5.625rem+5rem)]">
      <section>
        <BackButton />
        <ProductCard
          id={id}
          name={name}
          cartName={cartName}
          isNew={isNew}
          description={description}
          price={price}
          image={image}
          slug={slug}
        />
        <div className="lg:my-40 lg:flex lg:justify-between lg:gap-[10%]">
          <div className="lg:flex-2 my-[5.5rem] sm:my-[7.5rem] lg:my-0">
            <h2 className="mb-6 text-xl leading-xl tracking-2 sm:mb-8 sm:text-3xl sm:leading-xl sm:tracking-2">
              features
            </h2>
            <p className="whitespace-pre-wrap opacity-50">
              {features.replaceAll("\\n", "\n")}
            </p>
          </div>
          <ProductContent items={includes} />
        </div>
        <GallerySection {...gallery} productName={name} />
      </section>
      <SuggestionSection suggestions={others} />
      <CategorySection />
      <DescriptionSection />
    </main>
  );
};

export default ProductPage;
