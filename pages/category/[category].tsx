import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ProductType } from "../../src/types";

import { collection, getDocs, query, where } from "firebase/firestore";

import CategoryPage from "../../src/components/templates/CategoryPage";
import SEO from "../../src/components/modules/SEO";

import { db } from "../../src/firebase";

import getImgURL from "../../src/utils/getImgURL";

const Category: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        image={getImgURL(products[0].image.desktop)}
        url={`https://audiophile-morales.netlify.app/category/${products[0].category}`}
      />

      <CategoryPage products={sortedProducts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const querySnapShot = await getDocs(collection(db, "products"));

  const paths = querySnapShot.docs.map((doc) => ({
    params: { category: doc.data().category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
