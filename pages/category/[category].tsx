import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from "next";
import type { ProductType } from "../../src/types";

import CategoryPage from "../../src/components/templates/CategoryPage";

import data from "../../src/data.json";

const Category: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CategoryPage products={products} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const products: Array<ProductType> = data
    .filter((product) => product.category === params?.category)
    .sort((x, y) => (x === y ? 0 : x ? -1 : 1));

  return { props: { products } };
};

export default Category;
