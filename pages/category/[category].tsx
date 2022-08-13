import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from "next";
import { ProductType } from "../../src/types";

import { collection, getDocs, query, where } from "firebase/firestore";

import CategoryPage from "../../src/components/templates/CategoryPage";
import SEO from "../../src/components/modules/SEO";

import { db } from "../../src/firebase";

const Category: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const sortedProducts: Array<ProductType> = products.sort(
    (x: ProductType, y: ProductType) => +y.isNew - +x.isNew
  );

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

      <CategoryPage products={sortedProducts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", params?.category)
  );
  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { props: { products } };
};

export default Category;
