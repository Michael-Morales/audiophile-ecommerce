import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

import { getDocs, collection, query, where } from "firebase/firestore";

import ContainerMargins from "../../src/components/layouts/ContainerMargins";
import ProductPage from "../../src/components/templates/ProductPage";
import SEO from "../../src/components/modules/SEO";

import { db } from "../../src/firebase";

import getImgURL from "../../src/utils/getImgURL";

const Product: NextPage = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        image={getImgURL(product.image.desktop)}
        url={`https://audiophile-morales.netlify.app/product/${product.slug}`}
      />

      <ContainerMargins>
        <ProductPage product={product} />
      </ContainerMargins>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const q = query(
    collection(db, "products"),
    where("slug", "==", params?.slug)
  );

  const querySnapshot = await getDocs(q);

  const product = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))[0];

  return { props: { product } };
};

export default Product;
