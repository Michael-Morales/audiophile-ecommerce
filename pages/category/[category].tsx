import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from "next";
import type { ProductType } from "../../src/types";

import CategoryPage from "../../src/components/templates/CategoryPage";
import SEO from "../../src/components/modules/SEO";

import data from "../../src/data.json";

const Category: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO
        title={
          products[0].category[0].toUpperCase() + products[0].category.slice(1)
        }
        description={`Discover our selection of best quality ${products[0].category}.`}
        image={products[0].image.desktop}
        url={`http://localhost:3000/category/${products[0].category}`}
      />

      <CategoryPage products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const products: Array<ProductType> = data
    .filter((product) => product.category === params?.category)
    .sort((x, y) => (x === y ? 0 : x ? -1 : 1));

  return { props: { products } };
};

export default Category;
