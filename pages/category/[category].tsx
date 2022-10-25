import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ProductType } from "../../src/types";

import CategoryPage from "../../src/components/templates/CategoryPage";
import SEO from "../../src/components/modules/SEO";

import { prisma } from "../../lib/prisma";

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
          products[0].category.name[0].toUpperCase() +
          products[0].category.name.slice(1)
        }
        description={`Discover our selection of best quality ${products[0].category.name}.`}
        image={getImgURL(products[0].image.desktop)}
        url={`https://audiophile-morales.netlify.app/category/${products[0].category.name}`}
      />

      <CategoryPage products={sortedProducts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await prisma.category.findMany({
    select: {
      name: true,
    },
  });

  const paths = categories.map(({ name }) => ({ params: { category: name } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await prisma.product.findMany({
    where: {
      category: { name: params?.category as string | undefined },
    },
    include: {
      image: {
        select: {
          desktop: true,
        },
      },
      categoryImg: {
        select: {
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return { props: { products } };
};

export default Category;
