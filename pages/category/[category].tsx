import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { Product } from "../../src/types";

import data from "../../src/data.json";

const Category = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>Category</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const products: Array<Product> = data
    .filter((product) => product.category === params?.category)
    .sort((x, y) => (x === y ? 0 : x ? -1 : 1));

  return { props: { products } };
};

export default Category;
