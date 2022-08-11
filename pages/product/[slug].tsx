import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import type { ProductType } from "../../src/types";

import ContainerMargins from "../../src/components/layouts/ContainerMargins";
import ProductPage from "../../src/components/templates/ProductPage";
import SEO from "../../src/components/modules/SEO";

import data from "../../src/data.json";

const Product: NextPage = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        image={product.image.desktop}
        url={`http://localhost:3000/product/${product.slug}`}
      />

      <ContainerMargins>
        <ProductPage product={product} />
      </ContainerMargins>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product: ProductType | undefined = data.find(
    ({ slug }) => slug === params?.slug
  );

  return { props: { product } };
};

export default Product;
